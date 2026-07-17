import { motion } from "framer-motion";
import {
  Calendar,
  Code2,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import type { Room } from "../types";

interface RoomCardProps {
  room: Room;
  onDelete: (id: string) => void;
}

export default function RoomCard({
  room,
  onDelete,
}: RoomCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-[#111827] p-5 transition"
    >
      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-lg font-semibold">
            {room.name}
          </h3>

          <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
            <Code2 size={16} />
            {room.language}
          </p>

          <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <Calendar size={15} />
            {new Date(
              room.createdAt
            ).toLocaleDateString()}
          </p>

        </div>

        <button
          onClick={() => onDelete(room.id)}
          className="rounded-lg p-2 text-slate-400 transition hover:bg-red-500/10 hover:text-red-500"
        >
          <Trash2 size={18} />
        </button>

      </div>

      <button
        onClick={() =>
          navigate(`/room/${room.id}`)
        }
        className="mt-6 w-full rounded-xl bg-blue-600 py-2.5 font-medium transition hover:bg-blue-500"
      >
        Open Room
      </button>
    </motion.div>
  );
}