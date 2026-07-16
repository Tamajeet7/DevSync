import { Navigate, Route, Routes } from 'react-router-dom';

import LandingPage from '../modules/landing/pages/LandingPage';
import LoginPage from '../modules/auth/pages/LoginPage';
import RegisterPage from '../modules/auth/pages/RegisterPage';
import DashboardPage from '../modules/dashboard/pages/DashboardPage';
import RoomPage from '../modules/room/pages/RoomPage';

export default function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
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