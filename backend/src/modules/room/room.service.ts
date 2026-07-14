import { prisma } from "../../config/db";

export class RoomService {
  static async create(
    userId: string,
    data: {
      name: string;
      language: string;
    }
  ) {
    return prisma.room.create({
      data: {
        name: data.name,
        language: data.language,
        ownerId: userId,
      },
    });
  }

  static async getRooms(userId: string) {
    return prisma.room.findMany({
      where: {
        ownerId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  static async getRoomById(roomId: string) {
    return prisma.room.findUnique({
      where: {
        id: roomId,
      },
    });
  }
}