import { Request, Response } from "express";

import { ExecutionService } from "./execution.service";

export class ExecutionController {
  static async run(
    req: Request,
    res: Response
  ) {
    try {
      const result =
        await ExecutionService.execute(req.body);

      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message:
          error.response?.data ||
          error.message,
      });
    }
  }
}