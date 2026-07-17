import { ArrowLeft, Play, Share2, Check, Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
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
  const [showInviteDropdown, setShowInviteDropdown] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowInviteDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopyLink = async () => {
    const inviteUrl = window.location.href;
    try {
      await navigator.clipboard.writeText(inviteUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = inviteUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleCopyCode = async () => {
    if (!room) return;
    try {
      await navigator.clipboard.writeText(room.id);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = room.id;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
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

        {/* Share / Invite Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowInviteDropdown(!showInviteDropdown)}
            className={`flex h-8 items-center gap-2 rounded-lg border px-3 text-xs font-medium transition-all duration-300 ${
              showInviteDropdown
                ? "border-purple-500 bg-purple-500/10 text-purple-300"
                : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Share2 size={13} />
            <span>Invite</span>
          </button>

          {showInviteDropdown && (
            <div className="absolute right-0 top-10 z-50 w-72 rounded-2xl border border-white/[0.08] bg-[#0c0514] p-4 shadow-2xl backdrop-blur-xl">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Invite Collaborators</h3>
              
              <div className="mt-4 space-y-3">
                {/* Room Code */}
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Room Code</span>
                  <div className="flex items-center justify-between rounded-lg bg-white/[0.04] p-2 border border-white/[0.06]">
                    <span className="font-mono text-xs text-zinc-300 select-all truncate max-w-[180px]">{room?.id || "Loading..."}</span>
                    <button
                      onClick={handleCopyCode}
                      className="p-1 rounded text-zinc-400 hover:bg-white/5 hover:text-white transition"
                      title="Copy Code"
                    >
                      {copiedCode ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    </button>
                  </div>
                </div>

                {/* Invite Link */}
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Invite Link</span>
                  <div className="flex items-center justify-between rounded-lg bg-white/[0.04] p-2 border border-white/[0.06]">
                    <span className="font-mono text-xs text-zinc-300 select-all truncate max-w-[180px]">{window.location.href}</span>
                    <button
                      onClick={handleCopyLink}
                      className="p-1 rounded text-zinc-400 hover:bg-white/5 hover:text-white transition"
                      title="Copy Link"
                    >
                      {copiedLink ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    </button>
                  </div>
                </div>
              </div>
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
