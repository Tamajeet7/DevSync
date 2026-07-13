import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";
import { DashboardController } from "./dashboard.controller";

const router = Router();

router.get(
  "/me",
  authenticate,
  DashboardController.me
);

export default router;