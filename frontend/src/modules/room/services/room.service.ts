import api from "../../../lib/axios";

import type {
  CreateRoomRequest,
  CreateRoomResponse,
  Room,
} from "../types";

export const RoomService = {
  async create(data: CreateRoomRequest) {
    const response =
      await api.post<CreateRoomResponse>(
        "/rooms",
        data
      );

    return response.data;
  },

  async getRooms() {
    const response =
      await api.get<Room[]>("/rooms");

    return response.data;
  },

  async getRoom(id: string) {
    const response =
      await api.get<Room>(
        `/rooms/${id}`
      );

    return response.data;
  },

  async deleteRoom(id: string) {
    await api.delete(`/rooms/${id}`);
  },
};