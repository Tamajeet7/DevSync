import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";
import RoomListItem from "./RoomListItem";
import type { Room } from "../types";

interface RoomListProps {
  rooms: Room[];
  onDelete: (id: string) => void;
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function RoomList({ rooms, onDelete }: RoomListProps) {
  if (!rooms.length) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-purple-500/20 bg-purple-500/[0.03] py-24 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 mb-4 ring-1 ring-purple-500/20">
          <FolderOpen size={28} className="text-purple-400" />
        </div>
        <h3 className="text-lg font-semibold text-zinc-200">No rooms yet</h3>
        <p className="mt-2 max-w-xs text-sm text-zinc-500">
          Create your first collaborative room to start building with your team.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid gap-4 sm:grid-cols-2"
    >
      {rooms.map((room) => (
        <motion.div key={room.id} variants={cardVariants} transition={{ duration: 0.4, ease: "easeOut" }}>
          <RoomListItem room={room} onDelete={onDelete} />
        </motion.div>
      ))}
    </motion.div>
  );
}