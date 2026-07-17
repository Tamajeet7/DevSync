import { Router } from "express";
import { healthRoutes } from "../modules/health";
import executionRoutes from "../modules/execution/execution.routes";

const router = Router();

router.use("/health", healthRoutes);

router.use(
  "/execution",
  executionRoutes
);

export default router;