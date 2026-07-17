import { MessageSquare, Users, Send, Circle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import type { ChatMessage } from "../../hooks/useWorkspace";

interface WorkspaceSidebarProps {
  participants: { id: string; name: string }[];
  messages: ChatMessage[];
  sendMessage: (content: string) => void;
  currentUser: { id: string; name: string } | null;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// Generate a stable color from user id/name
const COLORS = [
  "from-purple-600 to-fuchsia-500",
  "from-blue-600 to-cyan-500",
  "from-emerald-600 to-teal-500",
  "from-orange-600 to-amber-500",
  "from-pink-600 to-rose-500",
];
function getUserColor(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = id.charCodeAt(i) + ((hash << 5) - hash);
  return COLORS[Math.abs(hash) % COLORS.length];
}

export default function WorkspaceSidebar({
  participants,
  messages,
  sendMessage,
  currentUser,
}: WorkspaceSidebarProps) {
  const [activeTab, setActiveTab] = useState<"users" | "chat">("users");
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to new messages
  useEffect(() => {
    if (activeTab === "chat") {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, activeTab]);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <aside className="flex h-full flex-col border-l border-white/[0.06] bg-white/[0.02]">
      {/* Tab Bar */}
      <div className="flex border-b border-white/[0.06]">
        <button
          onClick={() => setActiveTab("users")}
          className={`flex flex-1 items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-widest transition-all ${
            activeTab === "users"
              ? "border-b-2 border-purple-500 text-purple-300"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <Users size={13} />
          Users
          <span className="rounded-full bg-purple-500/20 px-1.5 py-0.5 text-[9px] text-purple-400">
            {participants.length}
          </span>
        </button>
        <button
          onClick={() => setActiveTab("chat")}
          className={`relative flex flex-1 items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-widest transition-all ${
            activeTab === "chat"
              ? "border-b-2 border-purple-500 text-purple-300"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <MessageSquare size={13} />
          Chat
          {messages.length > 0 && activeTab !== "chat" && (
            <span className="absolute right-3 top-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-fuchsia-500 text-[9px] font-bold text-white">
              {messages.length > 9 ? "9+" : messages.length}
            </span>
          )}
        </button>
      </div>

      {/* Users Tab */}
      {activeTab === "users" && (
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {participants.length === 0 ? (
            <p className="text-center text-xs text-zinc-600 pt-8">No participants yet</p>
          ) : (
            participants.map((p) => (
              <div
                key={p.id}
                className="flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/[0.03]"
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${getUserColor(p.id)} text-xs font-bold text-white shadow-md`}
                >
                  {getInitials(p.name)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-zinc-200">
                    {p.name}
                    {currentUser?.id === p.id && (
                      <span className="ml-1.5 text-[10px] font-normal text-zinc-500">(you)</span>
                    )}
                  </p>
                </div>
                <Circle size={8} className="shrink-0 fill-emerald-400 text-emerald-400" />
              </div>
            ))
          )}
        </div>
      )}

      {/* Chat Tab */}
      {activeTab === "chat" && (
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center pt-8 gap-2">
                <MessageSquare size={28} className="text-zinc-700" />
                <p className="text-center text-xs text-zinc-600">
                  No messages yet.
                  <br />
                  Say hello to your team! 👋
                </p>
              </div>
            ) : (
              messages.map((msg) => {
                const isOwn = msg.userId === currentUser?.id;
                return (
                  <div
                    key={msg.id}
                    className={`flex gap-2.5 ${isOwn ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {!isOwn && (
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${getUserColor(msg.userId)} text-[10px] font-bold text-white mt-1`}
                      >
                        {getInitials(msg.userName)}
                      </div>
                    )}
                    <div className={`max-w-[80%] ${isOwn ? "items-end" : "items-start"} flex flex-col gap-1`}>
                      {!isOwn && (
                        <p className="text-[10px] text-zinc-500 px-1">{msg.userName}</p>
                      )}
                      <div
                        className={`rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                          isOwn
                            ? "bg-purple-600/30 text-white ring-1 ring-purple-500/30 rounded-tr-sm"
                            : "bg-white/[0.06] text-zinc-200 ring-1 ring-white/[0.06] rounded-tl-sm"
                        }`}
                      >
                        {msg.content}
                      </div>
                      <p className={`text-[9px] text-zinc-600 px-1 ${isOwn ? "text-right" : ""}`}>
                        {formatTime(msg.timestamp)}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/[0.06] p-3">
            <div className="flex items-end gap-2 rounded-xl bg-white/[0.04] ring-1 ring-white/[0.08] px-3 py-2 focus-within:ring-purple-500/40">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message... (Enter to send)"
                rows={1}
                className="flex-1 resize-none bg-transparent text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none"
                style={{ maxHeight: "80px" }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-600 text-white transition-all hover:bg-purple-500 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Send size={12} />
              </button>
            </div>
            <p className="mt-1.5 text-[10px] text-zinc-700 text-center">Shift+Enter for new line</p>
          </div>
        </div>
      )}
    </aside>
  );
}
