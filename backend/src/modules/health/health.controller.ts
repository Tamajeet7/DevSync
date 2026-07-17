import type { Request, Response } from "express";
import { ApiResponse } from "../../utils/ApiResponse";

export const healthCheck = (_req: Request, res: Response) => {
  res.status(200).json(
    ApiResponse.success("🚀 DevSync Backend Running")
  );
};