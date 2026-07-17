import axios from "axios";

const JUDGE0_URL = "http://localhost:2358";

const languageMap: Record<string, number> = {
  javascript: 63,
  typescript: 74,
  python: 71,
  java: 62,
  cpp: 54,
};

export class ExecutionService {
  static async execute(data: {
    language: string;
    code: string;
  }) {
    const languageId = languageMap[data.language];

    if (!languageId) {
      throw new Error("Unsupported language");
    }

    // Submit code
    const submission = await axios.post(
      `${JUDGE0_URL}/submissions?base64_encoded=false&wait=false`,
      {
        source_code: data.code,
        language_id: languageId,
      }
    );

    console.log("TOKEN:", submission.data.token);

    const token = submission.data.token;

    // Poll until finished
    while (true) {
      const result = await axios.get(
        `${JUDGE0_URL}/submissions/${token}?base64_encoded=false`
      );

      console.log(result.data);

      const status = result.data.status.id;

      if (status <= 2) {
        await new Promise((resolve) =>
          setTimeout(resolve, 500)
        );
        continue;
      }

      return {
        stdout: result.data.stdout,
        stderr: result.data.stderr,
        compile_output: result.data.compile_output,
        message: result.data.message,
        status: result.data.status.description,
      };
    }
  }
}