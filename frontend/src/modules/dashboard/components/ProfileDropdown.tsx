import { AnimatePresence, motion } from "framer-motion";
import { LogOut, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "../../../store/authStore";

interface ProfileDropdownProps {
  open: boolean;
  onClose: () => void;
}

export default function ProfileDropdown({ open, onClose }: ProfileDropdownProps) {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const initials =
    user?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() ?? "U";

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.95 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute right-0 top-12 z-50 w-60 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0018]/90 backdrop-blur-2xl shadow-2xl shadow-black/60 ring-1 ring-purple-500/10"
        >
          {/* User info */}
          <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-4 bg-white/[0.02]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-500 text-sm font-bold text-white shadow-inner">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">{user?.name}</p>
              <p className="truncate text-xs text-zinc-500">{user?.email}</p>
            </div>
          </div>

          {/* Menu items */}
          <div className="p-2">
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-purple-500/10 hover:text-purple-300">
              <User size={15} />
              <span>My Profile</span>
            </button>

            <button className="mt-0.5 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-purple-500/10 hover:text-purple-300">
              <Settings size={15} />
              <span>Account Settings</span>
            </button>

            <div className="my-2 border-t border-white/[0.06]" />

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300"
            >
              <LogOut size={15} />
              <span>Log out</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}