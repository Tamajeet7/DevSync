import { motion } from "framer-motion";
import {
  Activity,
  ChevronLeft,
  ChevronRight,
  FolderKanban,
  Home,
  Settings,
  Sparkles,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import { useSidebar } from "../../../context/SidebarContext";

import fullLogo from "../../../assets/logo/devsync-logo-modern.svg";
import iconLogo from "../../../assets/logo/devsync-icon-modern.svg";

const workspaceItems = [
  { title: "Dashboard", path: "/dashboard", icon: Home },
  { title: "Rooms", path: "/rooms", icon: FolderKanban },
  { title: "Activity", path: "/activity", icon: Activity },
];

const libraryItems = [
  { title: "Snippets", path: "/snippets", icon: Sparkles },
];

const generalItems = [
  { title: "Settings", path: "/settings", icon: Settings },
];

interface SectionProps {
  title: string;
  items: typeof workspaceItems;
  collapsed: boolean;
}

function SidebarSection({ title, items, collapsed }: SectionProps) {
  return (
    <div className="mb-8">
      {!collapsed && (
        <p className="mb-3 px-5 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400/60">
          {title}
        </p>
      )}
      <div className="space-y-0.5 px-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group flex h-11 items-center rounded-xl transition-all duration-200 ${
                  collapsed ? "justify-center" : "gap-3 px-4"
                } ${
                  isActive
                    ? "bg-purple-600/20 text-purple-300 shadow-sm ring-1 ring-purple-500/30"
                    : "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={18}
                    className={`shrink-0 transition-all duration-200 group-hover:scale-110 ${isActive ? "text-purple-400" : ""}`}
                  />
                  {!collapsed && (
                    <span className="text-sm font-medium">{item.title}</span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default function DashboardSidebar() {
  const { collapsed, toggleSidebar } = useSidebar();

  return (
    <motion.aside
      animate={{ width: collapsed ? 80 : 260 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative z-20 flex h-screen flex-col border-r border-white/[0.06] bg-white/[0.02] backdrop-blur-xl shadow-2xl"
    >
      {/* Header / Logo */}
      <div className="flex h-20 items-center justify-between border-b border-white/[0.06] px-5">
        <div className={`overflow-hidden transition-all duration-300 ${collapsed ? "w-12" : "w-48"}`}>
          <img
            src={collapsed ? iconLogo : fullLogo}
            alt="DevSync"
            className={collapsed ? "h-12 w-12 object-contain" : "h-12 object-contain"}
          />
        </div>

        {!collapsed && (
          <button
            onClick={toggleSidebar}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition hover:bg-white/10 hover:text-white"
          >
            <ChevronLeft size={14} />
          </button>
        )}

        {collapsed && (
          <button
            onClick={toggleSidebar}
            className="absolute -right-3.5 top-8 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#1a0030] text-zinc-400 shadow-lg transition hover:bg-purple-900/60 hover:text-white"
          >
            <ChevronRight size={14} />
          </button>
        )}
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto py-6 scrollbar-hide">
        <SidebarSection title="Workspace" items={workspaceItems} collapsed={collapsed} />
        <SidebarSection title="Library" items={libraryItems} collapsed={collapsed} />
        <SidebarSection title="General" items={generalItems} collapsed={collapsed} />
      </div>

      {/* Bottom user pill */}
      <div className="border-t border-white/[0.06] p-4">
        <div
          className={`flex items-center rounded-xl bg-white/[0.03] ring-1 ring-white/[0.06] transition-all hover:bg-white/[0.06] ${
            collapsed ? "justify-center p-2.5" : "gap-3 p-3"
          }`}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-500 text-sm font-bold shadow-lg shadow-purple-900/50">
            T
          </div>
          {!collapsed && (
            <div className="min-w-0 text-left">
              <p className="truncate text-sm font-semibold text-white">Tamajeet</p>
              <p className="truncate text-xs text-zinc-500 mt-0.5">View profile</p>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  );
}