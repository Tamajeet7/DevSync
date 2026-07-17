import { io, Socket } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

let socket: Socket | null = null;

export const initSocket = (roomId: string, userId: string, userName: string) => {
  if (!socket) {
    socket = io(SOCKET_URL, {
      query: {
        roomId,
        userId,
        userName,
      },
      transports: ["websocket"],
      reconnectionAttempts: 5,
    });
  }
  return socket;
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
