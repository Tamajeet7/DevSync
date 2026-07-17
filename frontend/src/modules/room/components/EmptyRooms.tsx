import { FolderOpen } from "lucide-react";

export default function EmptyRooms() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#111827] py-20 text-center">
      <FolderOpen className="mb-4 h-10 w-10 text-slate-500" />

      <h3 className="text-lg font-semibold">
        No rooms yet
      </h3>

      <p className="mt-2 max-w-sm text-sm text-slate-400">
        Create your first collaborative coding room to start
        working with your teammates.
      </p>
    </div>
  );
}