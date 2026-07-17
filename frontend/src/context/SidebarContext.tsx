import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface SidebarContextType {
  collapsed: boolean;
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const SidebarContext =
  createContext<SidebarContextType | null>(null);

export function SidebarProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] =
    useState(false);

  const value = useMemo(
    () => ({
      collapsed,

      toggleSidebar: () =>
        setCollapsed((prev) => !prev),

      openSidebar: () =>
        setCollapsed(false),

      closeSidebar: () =>
        setCollapsed(true),
    }),
    [collapsed]
  );

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(
    SidebarContext
  );

  if (!context) {
    throw new Error(
      "useSidebar must be used inside SidebarProvider."
    );
  }

  return context;
}