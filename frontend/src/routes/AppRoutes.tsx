import { Navigate, Route, Routes } from "react-router-dom";

import LandingPage from "../modules/landing/pages/LandingPage";
import DashboardPage from "../modules/dashboard/pages/DashboardPage";
import RoomPage from "../modules/room/pages/RoomPage";

import Login from "../modules/auth/pages/Login";
import Register from "../modules/auth/pages/Register";
import ForgotPassword from "../modules/auth/pages/ForgotPassword";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
        path="/dashboard"
        element={<DashboardPage />}
      />

      <Route
        path="/room/:roomId"
        element={<RoomPage />}
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}