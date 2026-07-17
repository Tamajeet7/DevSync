import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";

export class DashboardController {
  static async me(
    req: AuthRequest,
    res: Response
  ) {
    res.json({
      success: true,
      userId: req.userId,
    });
  }
}