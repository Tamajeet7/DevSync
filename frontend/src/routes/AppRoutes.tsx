import { Navigate, Route, Routes } from "react-router-dom";

import LandingPage from "../modules/landing/pages/LandingPage";
import DashboardPage from "../modules/dashboard/pages/DashboardPage";
import ActivityPage from "../modules/dashboard/pages/ActivityPage";
import SnippetsPage from "../modules/dashboard/pages/SnippetsPage";
import SettingsPage from "../modules/dashboard/pages/SettingsPage";
import RoomPage from "../modules/room/pages/RoomPage";
import RoomJoinPage from "../modules/room/pages/RoomJoinPage";

import Login from "../modules/auth/pages/Login";
import Register from "../modules/auth/pages/Register";
import ForgotPassword from "../modules/auth/pages/ForgotPassword";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/activity" element={<ActivityPage />} />
      <Route path="/snippets" element={<SnippetsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/rooms" element={<DashboardPage />} /> {/* Stub Rooms to Dashboard for now */}
      <Route path="/room/:roomId" element={<RoomPage />} />
      <Route path="/room/:roomId/join" element={<RoomJoinPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}