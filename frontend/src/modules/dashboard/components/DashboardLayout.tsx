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
      <div className="flex h-screen overflow-hidden bg-[#07111F] text-white">
        <DashboardSidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <DashboardNavbar />

          <main className="flex-1 overflow-y-auto">
            <div className="w-full px-10 py-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}