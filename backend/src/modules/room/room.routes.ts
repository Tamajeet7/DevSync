import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";
import { RoomController } from "./room.controller";

const router = Router();

router.post(
  "/",
  authenticate,
  RoomController.create
);

router.get(
  "/",
  authenticate,
  RoomController.getRooms
);

router.get(
  "/:id",
  authenticate,
  RoomController.getRoom
);

export default router;