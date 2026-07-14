import { Socket } from "socket.io";

export function registerRoomEvents(socket: Socket) {

  socket.on("join-room", (roomId: string) => {

    socket.join(roomId);

    console.log(socket.id, "joined", roomId);

    socket.to(roomId).emit("user-joined", socket.id);

  });

  socket.on(
    "code-change",
    ({ roomId, code }) => {

      socket.to(roomId).emit(
        "receive-code",
        code
      );

    }
  );

}