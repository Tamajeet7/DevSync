import { motion } from "framer-motion";
import { ArrowRight, FolderOpen, Plus, Users, Activity, Zap } from "lucide-react";
import { useState } from "react";

import DashboardLayout from "../components/DashboardLayout";
import { useAuthStore } from "../../../store/authStore";
import { useRooms } from "../../room/hooks/useRooms";
import RoomList from "../../room/components/RoomList";
import CreateRoomModal from "../../room/components/CreateRoomModal";

function FadeUp({ delay = 0, children, className }: { delay?: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);
  const [createOpen, setCreateOpen] = useState(false);
  const { rooms, loading, deleteRoom } = useRooms();

  const firstName = user?.name?.split(" ")[0] ?? "there";

  return (
    <DashboardLayout>
      {/* Welcome Header */}
      <FadeUp delay={0}>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
              Good to see you,{" "}
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                {firstName}
              </span>{" "}
              👋
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Create a room, invite your team, and start coding together.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setCreateOpen(true)}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/40 transition-all hover:scale-105 hover:shadow-purple-900/60 active:scale-95"
            >
              <Plus size={16} />
              New Room
            </button>
            <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:bg-white/[0.08] hover:text-white active:scale-95">
              <Users size={16} />
              Join
            </button>
          </div>
        </div>
      </FadeUp>

      {/* Stat cards */}
      <FadeUp delay={0.08} className="mb-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { label: "Active Rooms", value: rooms.length, icon: FolderOpen, iconClass: "bg-purple-500/10 text-purple-400", shadow: "shadow-purple-900/20" },
            { label: "Collaborations", value: "—", icon: Users, iconClass: "bg-fuchsia-500/10 text-fuchsia-400", shadow: "shadow-fuchsia-900/20" },
            { label: "Last Active", value: "Today", icon: Activity, iconClass: "bg-pink-500/10 text-pink-400", shadow: "shadow-pink-900/20" },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 shadow-lg ${stat.shadow} backdrop-blur-sm transition-all hover:bg-white/[0.05]`}
              >
                <div>
                  <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                  <p className="mt-1.5 text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconClass}`}>
                  <Icon size={20} />
                </div>
              </div>
            );
          })}
        </div>
      </FadeUp>

      {/* Main content grid */}
      <div className="grid gap-8 xl:grid-cols-[1fr_320px]">
        {/* Rooms section */}
        <FadeUp delay={0.16}>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Recent Rooms</h2>
              <p className="mt-0.5 text-sm text-zinc-500">Jump back into your latest workspaces.</p>
            </div>
          </div>

          {loading ? (
            <div className="flex h-56 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <div className="flex flex-col items-center gap-3">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-purple-500 border-t-transparent" />
                <p className="text-sm text-zinc-500">Loading rooms...</p>
              </div>
            </div>
          ) : (
            <RoomList rooms={rooms} onDelete={deleteRoom} />
          )}
        </FadeUp>

        {/* Workspace overview panel */}
        <FadeUp delay={0.24}>
          <div className="sticky top-24 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-6">
              <Zap size={16} className="text-purple-400" />
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Workspace Overview</h3>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { label: "Active Rooms", value: String(rooms.length), accent: "bg-purple-500/10 text-purple-400", dot: "bg-purple-500" },
                { label: "Active Language", value: "TypeScript", accent: "bg-blue-500/10 text-blue-400", dot: "bg-blue-500" },
                { label: "Last Session", value: "Today", accent: "bg-emerald-500/10 text-emerald-400", dot: "bg-emerald-500" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3 transition-colors hover:bg-white/[0.05]"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${item.dot}`} />
                    <p className="text-sm text-zinc-400">{item.label}</p>
                  </div>
                  <span className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${item.accent}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <button className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/5 py-3 text-sm font-medium text-purple-300 transition-all hover:bg-purple-500/15 hover:border-purple-500/40 active:scale-95">
              View All Activity
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </FadeUp>
      </div>

      <CreateRoomModal open={createOpen} onClose={() => setCreateOpen(false)} />
    </DashboardLayout>
  );
}