import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Outlet />
    </div>
  );
}