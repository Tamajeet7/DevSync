import { ArrowLeft, Play, Share2, Check, Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { Room } from "../../types";

interface WorkspaceHeaderProps {
  room: Room | null;
  onRunCode: () => void;
  isExecuting: boolean;
  participants: any[];
}

export default function WorkspaceHeader({
  room,
  onRunCode,
  isExecuting,
  participants,
}: WorkspaceHeaderProps) {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const inviteUrl = window.location.href;
    try {
      await navigator.clipboard.writeText(inviteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for browsers that block clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = inviteUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

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
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {room?.language || "Language"}
            </span>
            <span className="px-1">•</span>
            <span>{participants.length} online</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Participant Avatars */}
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

        {/* Share / Invite Button */}
        <div className="relative">
          <button
            onClick={handleShare}
            className={`flex h-8 items-center gap-2 rounded-lg border px-3 text-xs font-medium transition-all duration-300 ${
              copied
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            {copied ? (
              <>
                <Check size={13} />
                Link Copied!
              </>
            ) : (
              <>
                <Share2 size={13} />
                Invite
              </>
            )}
          </button>

          {/* Tooltip shown briefly */}
          {copied && (
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-zinc-900 px-2.5 py-1.5 text-[10px] text-zinc-300 ring-1 ring-white/10 shadow-xl">
              Share this URL with your team ✓
            </div>
          )}
        </div>

        {/* Run Code Button */}
        <button
          onClick={onRunCode}
          disabled={isExecuting}
          className="group relative flex h-8 items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 text-xs font-semibold text-white shadow-lg shadow-emerald-900/40 transition-all hover:scale-105 active:scale-95 disabled:opacity-60 disabled:hover:scale-100"
        >
          <span className="absolute inset-0 bg-white/0 transition-colors group-hover:bg-white/5" />
          {isExecuting ? (
            <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          ) : (
            <Play size={13} className="fill-white" />
          )}
          <span>{isExecuting ? "Running..." : "Run Code"}</span>
        </button>
      </div>
    </header>
  );
}
