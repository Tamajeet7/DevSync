import { motion } from "framer-motion";
import { ChevronRight, Code2, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import type { Room } from "../types";

interface RoomListItemProps {
  room: Room;
  onDelete: (id: string) => void;
}

export default function RoomListItem({ room, onDelete }: RoomListItemProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 shadow-sm transition-all hover:bg-white/[0.06] hover:shadow-xl hover:shadow-purple-900/20 hover:ring-1 hover:ring-purple-500/20"
    >
      {/* Ambient glow */}
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-purple-600/10 blur-2xl transition-all duration-500 group-hover:bg-purple-500/20" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 shadow-inner ring-1 ring-purple-500/20">
            <Code2 size={20} className="text-purple-400" />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(room.id);
            }}
            className="rounded-full p-2 text-zinc-600 opacity-0 transition-all hover:bg-red-500/10 hover:text-red-400 group-hover:opacity-100"
          >
            <Trash2 size={15} />
          </button>
        </div>

        <div className="mt-4">
          <h3 className="truncate text-base font-semibold text-zinc-100 transition-colors group-hover:text-purple-300">
            {room.name}
          </h3>
          <div className="mt-2 flex items-center gap-3 text-xs font-medium text-zinc-600">
            <span className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 uppercase tracking-wider">
              {room.language}
            </span>
            <span>{new Date(room.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className="relative mt-5 border-t border-white/[0.05] pt-4">
        <button
          onClick={() => navigate(`/room/${room.id}`)}
          className="flex w-full items-center justify-between text-sm font-medium text-zinc-500 transition-colors hover:text-white"
        >
          Enter Workspace
          <ChevronRight size={16} className="transition-transform text-purple-500 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}