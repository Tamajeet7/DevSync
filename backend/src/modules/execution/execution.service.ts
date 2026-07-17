import { exec } from "child_process";
import * as fs from "fs";
import * as path from "path";
import * as os from "os";

interface ExecutionResult {
  stdout: string | null;
  stderr: string | null;
  compile_output: string | null;
  message: string | null;
  status: string;
}

// Config mapping for our local Docker containers
interface LanguageConfig {
  image: string;
  filename: string;
  // Compile command (if any) run inside container before executing
  compileCmd?: string;
  // Execution command run inside container
  runCmd: string;
}

const languageConfigs: Record<string, LanguageConfig> = {
  javascript: {
    image: "node:18-alpine",
    filename: "script.js",
    runCmd: "node script.js",
  },
  js: {
    image: "node:18-alpine",
    filename: "script.js",
    runCmd: "node script.js",
  },
  typescript: {
    image: "node:18-alpine",
    filename: "script.ts",
    runCmd: "npx -y tsx script.ts",
  },
  ts: {
    image: "node:18-alpine",
    filename: "script.ts",
    runCmd: "npx -y tsx script.ts",
  },
  python: {
    image: "python:3.10-alpine",
    filename: "script.py",
    runCmd: "python script.py",
  },
  py: {
    image: "python:3.10-alpine",
    filename: "script.py",
    runCmd: "python script.py",
  },
  c: {
    image: "gcc:latest",
    filename: "main.c",
    compileCmd: "gcc main.c -o main",
    runCmd: "./main",
  },
  cpp: {
    image: "gcc:latest",
    filename: "main.cpp",
    compileCmd: "g++ main.cpp -o main",
    runCmd: "./main",
  },
  "c++": {
    image: "gcc:latest",
    filename: "main.cpp",
    compileCmd: "g++ main.cpp -o main",
    runCmd: "./main",
  },
  java: {
    image: "eclipse-temurin:17-alpine",
    filename: "Main.java",
    compileCmd: "javac Main.java",
    runCmd: "java Main",
  },
  go: {
    image: "golang:alpine",
    filename: "main.go",
    runCmd: "go run main.go",
  },
  golang: {
    image: "golang:alpine",
    filename: "main.go",
    runCmd: "go run main.go",
  },
  rust: {
    image: "rust:alpine",
    filename: "main.rs",
    compileCmd: "rustc main.rs -o main",
    runCmd: "./main",
  },
};

export class ExecutionService {
  static async execute(data: { language: string; code: string; stdin?: string }): Promise<ExecutionResult> {
    const normalizedLang = data.language.toLowerCase().trim();
    const config = languageConfigs[normalizedLang];

    if (!config) {
      return {
        stdout: null,
        stderr: `Unsupported language: "${data.language}"`,
        compile_output: null,
        message: "Unsupported language",
        status: "Rejected",
      };
    }

    // Create a temporary execution folder under workspace/backend/temp_exec
    const tempRoot = path.join(process.cwd(), "temp_exec");
    if (!fs.existsSync(tempRoot)) {
      fs.mkdirSync(tempRoot, { recursive: true });
    }

    const uniqueId = `exec_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const tempDir = path.join(tempRoot, uniqueId);
    fs.mkdirSync(tempDir, { recursive: true });

    // Write source code file
    const filePath = path.join(tempDir, config.filename);
    fs.writeFileSync(filePath, data.code, "utf8");

    // Write stdin file if provided
    const stdinPath = path.join(tempDir, "stdin.txt");
    fs.writeFileSync(stdinPath, data.stdin || "", "utf8");

    try {
      const compileResult = await this.compileIfNecessary(tempDir, config);
      if (compileResult) {
        // Compilation failed!
        this.cleanupDir(tempDir);
        return {
          stdout: null,
          stderr: null,
          compile_output: compileResult,
          message: "Compilation Error",
          status: "Compilation Error",
        };
      }

      // Run code in Docker container
      const runResult = await this.runInDocker(tempDir, config);
      this.cleanupDir(tempDir);

      return {
        stdout: runResult.stdout || null,
        stderr: runResult.stderr || null,
        compile_output: null,
        message: runResult.stderr ? "Runtime Error" : "Execution successful",
        status: runResult.status,
      };
    } catch (err: any) {
      this.cleanupDir(tempDir);
      return {
        stdout: null,
        stderr: err.message || "Execution failed",
        compile_output: null,
        message: "Internal execution error",
        status: "Internal Error",
      };
    }
  }

  private static compileIfNecessary(tempDir: string, config: LanguageConfig): Promise<string | null> {
    if (!config.compileCmd) return Promise.resolve(null);

    // Docker command to compile
    // Mount the absolute path of tempDir to /app inside container
    const dockerCmd = `docker run --rm -v "${tempDir}:/app" -w /app ${config.image} sh -c "${config.compileCmd}"`;

    return new Promise((resolve) => {
      exec(dockerCmd, { timeout: 15000 }, (error, stdout, stderr) => {
        if (error) {
          resolve(stderr || stdout || error.message);
        } else {
          resolve(null);
        }
      });
    });
  }

  private static runInDocker(tempDir: string, config: LanguageConfig): Promise<{ stdout: string; stderr: string; status: string }> {
    // Docker command to run. Read stdin from stdin.txt if present
    const dockerCmd = `docker run --rm -v "${tempDir}:/app" -w /app ${config.image} sh -c "${config.runCmd} < stdin.txt"`;

    return new Promise((resolve) => {
      exec(dockerCmd, { timeout: 15000 }, (error, stdout, stderr) => {
        if (error) {
          if (error.killed) {
            resolve({
              stdout,
              stderr: stderr ? `${stderr}\nTime Limit Exceeded (15s)` : "Time Limit Exceeded (15s)",
              status: "Time Limit Exceeded",
            });
          } else {
            resolve({
              stdout,
              stderr: stderr || error.message,
              status: "Runtime Error",
            });
          }
        } else {
          resolve({
            stdout,
            stderr,
            status: "Accepted",
          });
        }
      });
    });
  }

  private static cleanupDir(dirPath: string) {
    try {
      if (fs.existsSync(dirPath)) {
        fs.rmSync(dirPath, { recursive: true, force: true });
      }
    } catch (err) {
      console.error(`Failed to delete temp dir ${dirPath}:`, err);
    }
  }
}