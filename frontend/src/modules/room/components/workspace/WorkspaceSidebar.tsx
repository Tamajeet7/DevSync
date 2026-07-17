import { MessageSquare, Users } from "lucide-react";
import { useState } from "react";

interface WorkspaceSidebarProps {
  participants: any[]; // Type later
}

export default function WorkspaceSidebar({ participants }: WorkspaceSidebarProps) {
  const [activeTab, setActiveTab] = useState<"users" | "chat">("users");

  return (
    <div className="flex h-full w-64 flex-col border-l border-white/[0.06] bg-white/[0.01] backdrop-blur-xl">
      {/* Tabs */}
      <div className="flex border-b border-white/[0.06]">
        <button
          onClick={() => setActiveTab("users")}
          className={`flex flex-1 items-center justify-center gap-2 py-3 text-xs font-medium transition-colors ${
            activeTab === "users"
              ? "border-b-2 border-purple-500 text-purple-400"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <Users size={14} />
          Users
        </button>
        <button
          onClick={() => setActiveTab("chat")}
          className={`flex flex-1 items-center justify-center gap-2 py-3 text-xs font-medium transition-colors ${
            activeTab === "chat"
              ? "border-b-2 border-purple-500 text-purple-400"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <MessageSquare size={14} />
          Chat
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === "users" ? (
          <div className="space-y-3">
            {participants.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 text-xs font-bold text-white shadow-inner">
                  {p.name.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-zinc-200">
                    {p.name}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {p.id === "me" ? "You" : "Online"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <MessageSquare size={24} className="mb-2 text-zinc-600" />
            <p className="text-sm font-medium text-zinc-400">Chat coming soon</p>
            <p className="mt-1 text-xs text-zinc-600">Connect with your team here.</p>
          </div>
        )}
      </div>

      {/* Chat Input Placeholder */}
      {activeTab === "chat" && (
        <div className="border-t border-white/[0.06] p-3">
          <input
            type="text"
            disabled
            placeholder="Type a message..."
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
          />
        </div>
      )}
    </div>
  );
}
