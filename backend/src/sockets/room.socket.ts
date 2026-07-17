import { Socket, Server } from "socket.io";

interface ChatMessage {
  id: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: string;
}

export function registerRoomEvents(socket: Socket, io: Server) {
  socket.on("room:join", ({ roomId, userId, userName }: { roomId: string; userId: string; userName: string }) => {
    socket.join(roomId);
    socket.data.roomId = roomId;
    socket.data.userId = userId;
    socket.data.userName = userName;

    console.log(`${userName} (${socket.id}) joined room ${roomId}`);

    // Notify others in the room
    socket.to(roomId).emit("user-joined", { id: userId, name: userName, socketId: socket.id });
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

  socket.on("disconnect", () => {
    const { roomId, userId, userName } = socket.data;
    if (roomId) {
      console.log(`${userName || socket.id} left room ${roomId}`);
      socket.to(roomId).emit("user-left", userId || socket.id);
    }
  });
}