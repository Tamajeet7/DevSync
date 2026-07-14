import { Routes, Route } from "react-router-dom";

import LandingPage from "../modules/landing/pages/LandingPage";
import DashboardPage from "../modules/dashboard/pages/DashboardPage";
import RoomPage from "../modules/room/pages/RoomPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route
        path="/dashboard"
        element={<DashboardPage />}
      />

      <Route
        path="/room/:roomId"
        element={<RoomPage />}
      />
    </Routes>
  );
}