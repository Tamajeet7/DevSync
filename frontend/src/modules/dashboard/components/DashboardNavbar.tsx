import { useEffect, useRef, useState } from "react";
import { Bell, Search } from "lucide-react";
import { motion } from "framer-motion";

import { useAuthStore } from "../../../store/authStore";

import ProfileDropdown from "./ProfileDropdown";

export default function DashboardNavbar() {

  const user = useAuthStore((state) => state.user);

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const initials =
    user?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-40 h-[72px] border-b border-white/10 bg-[#07111F]">
      <div className="flex h-full items-center justify-between px-10">

        <div className="flex items-center gap-5">

          <div>
            <h1 className="text-[30px] font-bold tracking-tight">
              Dashboard
            </h1>
          </div>

        </div>

        <div className="hidden lg:flex flex-1 justify-center px-16">

          <div className="flex h-11 w-full max-w-xl items-center gap-3 rounded-xl border border-white/10 bg-[#0B1628] px-4">

            <Search
              size={18}
              className="text-slate-500"
            />

            <input
              type="text"
              placeholder="Search rooms..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />

          </div>

        </div>

        <div className="flex items-center gap-3">

          <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#101826] transition hover:border-blue-500/30 hover:bg-[#152238]">

            <Bell size={18} />

            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-blue-500" />

          </button>

          <div
            ref={dropdownRef}
            className="relative"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 font-semibold text-white shadow-lg"
            >
              {initials}
            </motion.button>

            <ProfileDropdown
              open={open}
              onClose={() => setOpen(false)}
            />

          </div>

        </div>

      </div>
    </header>
  );
}