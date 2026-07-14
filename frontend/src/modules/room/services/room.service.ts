import {api} from "../../../lib/axios";

export interface CreateRoomDto {
  name: string;
  language: string;
}

export interface Room {
  id: string;
  name: string;
  language: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}

class RoomService {
  async create(data: CreateRoomDto) {
    const res = await api.post("/rooms", data);
    return res.data as Room;
  }

  async getAll() {
    const res = await api.get("/rooms");
    return res.data as Room[];
  }

  async getById(id: string) {
    const res = await api.get(`/rooms/${id}`);
    return res.data as Room;
  }
}

export default new RoomService();