import { Router } from "express";

import { ExecutionController } from "./execution.controller";

const router = Router();

router.post(
  "/run",
  ExecutionController.execute
);

export default router;