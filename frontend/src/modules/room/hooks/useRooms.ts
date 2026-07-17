import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { RoomService } from "../services/room.service";

import type {
  CreateRoomRequest,
  Room,
} from "../types";

export function useRooms() {
  const [rooms, setRooms] =
    useState<Room[]>([]);

  const [loading, setLoading] =
    useState(true);

  const loadRooms =
    useCallback(async () => {
      try {
        const data =
          await RoomService.getRooms();

        setRooms(data);
      } finally {
        setLoading(false);
      }
    }, []);

  useEffect(() => {
    loadRooms();
  }, [loadRooms]);

  async function createRoom(
    room: CreateRoomRequest
  ) {
    const created =
      await RoomService.create(room);

    setRooms((prev) => [
      created,
      ...prev,
    ]);

    return created;
  }

  async function deleteRoom(
    roomId: string
  ) {
    await RoomService.deleteRoom(
      roomId
    );

    setRooms((prev) =>
      prev.filter(
        (room) => room.id !== roomId
      )
    );
  }

  return {
    rooms,
    loading,
    createRoom,
    deleteRoom,
    refresh: loadRooms,
  };
}