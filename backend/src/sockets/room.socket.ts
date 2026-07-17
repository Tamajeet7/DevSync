import { Socket } from "socket.io";

export function registerRoomEvents(socket: Socket) {
  socket.on("room:join", (roomId: string) => {
    socket.join(roomId);

    console.log(`${socket.id} joined ${roomId}`);

    socket.to(roomId).emit("user:joined", socket.id);
  });

  socket.on("editor:change", ({ roomId, code }) => {
    socket.to(roomId).emit("editor:update", code);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
  });
}