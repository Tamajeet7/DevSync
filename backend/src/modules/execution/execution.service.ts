import axios from "axios";

const PISTON_URL = "https://emkc.org/api/v2/piston/execute";

const versions: Record<string, string> = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  cpp: "10.2.0",
};

export class ExecutionService {
  static async execute(data: {
    language: string;
    code: string;
  }) {
    const response = await axios.post(PISTON_URL, {
      language: data.language,
      version: versions[data.language] ?? "*",
      files: [
        {
          content: data.code,
        },
      ],
    });

    return response.data;
  }
}