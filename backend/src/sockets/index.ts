import { Server } from "socket.io";
import http from "http";

import { registerRoomEvents } from "./room.socket";

export let io: Server;

export function initializeSocket(server: http.Server) {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("⚡", socket.id, "connected");

    registerRoomEvents(socket, io);

    socket.on("disconnect", () => {
      console.log("❌", socket.id, "disconnected");
    });
  });
}