import { Response } from "express";

import { AuthRequest } from "../../middleware/auth.middleware";
import { RoomService } from "./room.service";
import { createRoomSchema } from "./room.validation";

export class RoomController {
  static async create(
    req: AuthRequest,
    res: Response
  ) {
    try {
      const data = createRoomSchema.parse(req.body);

      const room = await RoomService.create(
        req.userId!,
        data
      );

      return res.status(201).json(room);
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getRooms(
    req: AuthRequest,
    res: Response
  ) {
    const rooms = await RoomService.getRooms(req.userId!);

    return res.json(rooms);
  }

  static async getRoom(
    req: AuthRequest,
    res: Response
  ) {
    const room = await RoomService.getRoomById(
      String(req.params.id)
    );

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    return res.json(room);
  }

  static async deleteRoom(
    req: AuthRequest,
    res: Response
  ) {
    try {
      await RoomService.deleteRoom(
        String(req.params.id)
      );

      return res.json({
        success: true,
        message: "Room deleted",
      });
    } catch {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }
  }
}
