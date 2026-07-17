import EmptyRooms from "./EmptyRooms";
import RoomCard from "./RoomCard";

import type { Room } from "../types";

interface RoomGridProps {
  rooms: Room[];
  onDelete: (id: string) => void;
}

export default function RoomGrid({
  rooms,
  onDelete,
}: RoomGridProps) {
  if (rooms.length === 0) {
    return <EmptyRooms />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}