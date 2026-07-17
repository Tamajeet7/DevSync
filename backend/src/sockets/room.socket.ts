import { Socket, Server } from "socket.io";

interface ChatMessage {
  id: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: string;
}

export function registerRoomEvents(socket: Socket, io: Server) {
  socket.on("room:join", async ({ roomId, userId, userName }: { roomId: string; userId: string; userName: string }) => {
    socket.join(roomId);
    socket.data.roomId = roomId;
    socket.data.userId = userId;
    socket.data.userName = userName;

    console.log(`${userName} (${socket.id}) joined room ${roomId}`);

    // Notify others in the room
    socket.to(roomId).emit("user-joined", { id: userId, name: userName, socketId: socket.id });

    // Fetch all sockets in the room and send list of users to everyone
    const sockets = await io.in(roomId).fetchSockets();
    const users = sockets.map((s) => ({
      id: s.data.userId,
      name: s.data.userName,
    })).filter((u) => u.id && u.name);

    io.in(roomId).emit("room:users", users);
  });

  socket.on("code-change", ({ roomId, code }: { roomId: string; code: string }) => {
    // Broadcast new code to everyone else in room
    socket.to(roomId).emit("code-change", code);
  });

  socket.on("chat-message", ({ roomId, message }: { roomId: string; message: ChatMessage }) => {
    // Broadcast the message to everyone else in the room (sender already shows it locally)
    socket.to(roomId).emit("chat-message", message);
    console.log(`Chat in room ${roomId} from ${message.userName}: ${message.content}`);
  });

  socket.on("disconnect", async () => {
    const { roomId, userId, userName } = socket.data;
    if (roomId) {
      console.log(`${userName || socket.id} left room ${roomId}`);
      socket.to(roomId).emit("user-left", userId || socket.id);

      // Fetch all remaining sockets in the room and update user list
      const sockets = await io.in(roomId).fetchSockets();
      const users = sockets.map((s) => ({
        id: s.data.userId,
        name: s.data.userName,
      })).filter((u) => u.id && u.name);

      io.in(roomId).emit("room:users", users);
    }
  });
}