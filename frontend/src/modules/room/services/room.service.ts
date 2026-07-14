import axios from "../../../lib/axios";

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
    const res = await axios.post("/rooms", data);
    return res.data as Room;
  }

  async getAll() {
    const res = await axios.get("/rooms");
    return res.data as Room[];
  }

  async getById(id: string) {
    const res = await axios.get(`/rooms/${id}`);
    return res.data as Room;
  }
}

export default new RoomService();