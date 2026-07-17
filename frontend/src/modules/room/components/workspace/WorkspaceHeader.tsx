import { ArrowLeft, Play, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Room } from "../../types";

interface WorkspaceHeaderProps {
  room: Room | null;
  onRunCode: () => void;
  isExecuting: boolean;
  participants: any[]; // We'll type this later when sockets are ready
}

export default function WorkspaceHeader({
  room,
  onRunCode,
  isExecuting,
  participants,
}: WorkspaceHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="flex h-14 items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-4 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft size={16} />
        </button>

        <div className="flex flex-col">
          <h1 className="text-sm font-semibold text-white">
            {room ? room.name : "Loading Workspace..."}
          </h1>
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              {room?.language || "Language"}
            </span>
            <span className="px-1">•</span>
            <span>{participants.length} online</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Avatars */}
        <div className="flex items-center -space-x-2 mr-2">
          {participants.slice(0, 3).map((p, i) => (
            <div
              key={i}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#030005] bg-gradient-to-br from-purple-500 to-fuchsia-500 text-xs font-bold text-white ring-2 ring-purple-500/20"
              title={p.name}
            >
              {p.name.charAt(0).toUpperCase()}
            </div>
          ))}
          {participants.length > 3 && (
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#030005] bg-zinc-800 text-xs font-medium text-zinc-300">
              +{participants.length - 3}
            </div>
          )}
        </div>

        <button className="flex h-8 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white">
          <Share2 size={14} />
          Share
        </button>

        <button
          onClick={onRunCode}
          disabled={isExecuting}
          className="group relative flex h-8 items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 text-xs font-semibold text-white shadow-lg shadow-emerald-900/40 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
        >
          {isExecuting ? (
            <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          ) : (
            <Play size={14} className="fill-white" />
          )}
          <span>{isExecuting ? "Running..." : "Run Code"}</span>
        </button>
      </div>
    </header>
  );
}
