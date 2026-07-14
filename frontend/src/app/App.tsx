import { useEffect } from "react";

import { socket } from "../services/socket";
import AppRoutes from "./routes";

export default function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Socket Connected:", socket.id);
    });

    return () => {
      socket.off("connect");
    };
  }, []);

  return <AppRoutes />;
}