import type { ReactNode } from "react";

import { SidebarProvider } from "../../../context/SidebarContext";

import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden bg-[#030005] text-zinc-100">
        {/* Subtle purple ambient glow in background */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-fuchsia-600/8 blur-[100px]" />
        </div>

        <DashboardSidebar />

        <div className="flex min-w-0 flex-1 flex-col relative z-10">
          <DashboardNavbar />

          <main className="flex-1 overflow-y-auto">
            <div className="mx-auto w-full max-w-[1400px] px-8 py-10 sm:px-12 lg:px-16 lg:py-14">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}