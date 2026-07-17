import { useEffect, useRef, useState } from "react";
import { Bell, Search } from "lucide-react";

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
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-white/[0.06] bg-[#030005]/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-full max-w-[1700px] items-center justify-between px-8 xl:px-12">
        {/* Left spacer for sidebar */}
        <div className="w-48" />

        {/* Search */}
        <div className="hidden flex-1 justify-center lg:flex">
          <div className="group flex h-11 w-full max-w-lg items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 shadow-sm transition-all focus-within:border-purple-500/40 focus-within:bg-white/[0.06] focus-within:ring-4 focus-within:ring-purple-500/10">
            <Search size={15} className="shrink-0 text-zinc-500 transition group-focus-within:text-purple-400" />
            <input
              type="text"
              placeholder="Search rooms, snippets..."
              className="w-full bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-600"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex w-48 items-center justify-end gap-4">
          {/* Bell */}
          <button className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-zinc-500 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400">
            <Bell size={16} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-[#030005] bg-purple-500" />
          </button>

          {/* Avatar */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-500 text-sm font-bold shadow-lg shadow-purple-900/40 ring-2 ring-white/10 transition-all hover:scale-105 hover:ring-purple-500/40 active:scale-95"
            >
              {initials}
            </button>

            <ProfileDropdown open={open} onClose={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </header>
  );
}