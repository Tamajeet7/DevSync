import { AnimatePresence, motion } from "framer-motion";
import { LogOut, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "../../../store/authStore";

interface ProfileDropdownProps {
  open: boolean;
  onClose: () => void;
}

export default function ProfileDropdown({
  open,
  onClose,
}: ProfileDropdownProps) {
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
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.18 }}
          className="absolute right-0 top-14 z-50 w-52 overflow-hidden rounded-xl border border-white/10 bg-[#111827] shadow-2xl"
        >
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-sm font-semibold text-white">
              {initials}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {user?.name}
              </p>

              <p className="truncate text-xs text-slate-400">
                {user?.email}
              </p>
            </div>
          </div>

          <div className="p-2">
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-[#1A2435] hover:text-white">
              <User size={16} />
              <span>Profile</span>
            </button>

            <button className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-[#1A2435] hover:text-white">
              <Settings size={16} />
              <span>Settings</span>
            </button>

            <div className="my-2 border-t border-white/10" />

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-400 transition-colors hover:bg-red-500/10"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}