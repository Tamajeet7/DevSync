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

import fullLogo from "../../../assets/logo/devsync-logo.png";
import iconLogo from "../../../assets/logo/devsync-icon.png";

const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "Rooms",
    path: "/rooms",
    icon: FolderKanban,
  },
  {
    name: "Snippets",
    path: "/snippets",
    icon: Sparkles,
  },
  {
    name: "Activity",
    path: "/activity",
    icon: Activity,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function DashboardSidebar() {
  const { collapsed, toggleSidebar } =
    useSidebar();

  return (
    <motion.aside
      animate={{
        width: collapsed ? 84 : 260,
      }}
      transition={{
        duration: 0.25,
      }}
      className="flex h-screen shrink-0 flex-col border-r border-white/10 bg-[#091321]"
    >
      <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
        <img
          src={collapsed ? iconLogo: fullLogo}
          alt="DevSync"
          className={collapsed ? "translate-x-2 h-12 w-12 object-contain" : "translate-x-2 h-12 object-contain"}
        />

        <button
          onClick={toggleSidebar}
          className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>
      </div>

      <nav className="flex-1 px-3 py-6">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative flex h-12 items-center rounded-xl transition-all duration-200 ${
                    collapsed
                      ? "justify-center"
                      : "gap-4 px-4"
                  } ${
                    isActive
                      ? "bg-blue-500/10 text-blue-400 "
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`absolute left-0 h-8 w-1 rounded-r-full transition-all ${
                        isActive
                          ? "bg-blue-500 opacity-100"
                          : "opacity-0"
                      }`}
                    />

                    <Icon
                      size={20}
                      className={collapsed? "shrink-0 -translate-x-3" : "shrink-0 translate-x-2"}
                    />

                    {!collapsed && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-medium"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>
            <div className="border-t border-white/10 p-4">
        <button className={`flex w-full items-center rounded-xl transition-all duration-200 hover:bg-white/5 ${collapsed ? "justify-center p-2" : "gap-3 p-3"}`}>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-sm font-semibold text-white">
            T
          </div>

          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="min-w-0 flex-1 text-left"
            >
              <p className="truncate text-sm font-semibold text-white">
                Tamajeet Biswas
              </p>

              <p className="truncate text-xs text-slate-400">
                View Profile
              </p>
            </motion.div>
          )}
        </button>
      </div>
    </motion.aside>
  );
}