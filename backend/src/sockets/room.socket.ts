import { Socket, Server } from "socket.io";
import { RoomService } from "../modules/room/room.service";

interface ChatMessage {
  id: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: string;
}

// In-memory room participants tracker: roomId -> Map<socketId, { id, name }>
const roomParticipants = new Map<string, Map<string, { id: string; name: string }>>();

// In-memory code cache: roomId -> code
const roomCodeCache = new Map<string, string>();

// In-memory debounced save timers: roomId -> NodeJS.Timeout
const saveTimers = new Map<string, NodeJS.Timeout>();

export function registerRoomEvents(socket: Socket, io: Server) {
  socket.on("room:join", ({ roomId, userId, userName }: { roomId: string; userId: string; userName: string }) => {
    socket.join(roomId);
    socket.data.roomId = roomId;
    socket.data.userId = userId;
    socket.data.userName = userName;

    // Track user in the room
    if (!roomParticipants.has(roomId)) {
      roomParticipants.set(roomId, new Map());
    }
    roomParticipants.get(roomId)!.set(socket.id, { id: userId, name: userName });

    console.log(`${userName} (${socket.id}) joined room ${roomId}`);

    // Notify others in the room
    socket.to(roomId).emit("user-joined", { id: userId, name: userName, socketId: socket.id });

    // Send the complete, updated list of participants to everyone in the room
    const users = Array.from(roomParticipants.get(roomId)!.values());
    io.in(roomId).emit("room:users", users);
  });

  socket.on("code-change", ({ roomId, code }: { roomId: string; code: string }) => {
    // Broadcast new code to everyone else in room
    socket.to(roomId).emit("code-change", code);

    // Cache the latest code
    roomCodeCache.set(roomId, code);

    // Debounce database write (1.5 seconds)
    if (saveTimers.has(roomId)) {
      clearTimeout(saveTimers.get(roomId)!);
    }

    const timer = setTimeout(async () => {
      saveTimers.delete(roomId);
      try {
        const latestCode = roomCodeCache.get(roomId);
        if (latestCode !== undefined) {
          await RoomService.updateRoomCode(roomId, latestCode);
        }
      } catch (err) {
        console.error(`Failed to save room ${roomId} code:`, err);
      }
    }, 1500);

    saveTimers.set(roomId, timer);
  });

  socket.on("chat-message", ({ roomId, message }: { roomId: string; message: ChatMessage }) => {
    // Broadcast the message to everyone else in the room (sender already shows it locally)
    socket.to(roomId).emit("chat-message", message);
    console.log(`Chat in room ${roomId} from ${message.userName}: ${message.content}`);
  });

  socket.on("disconnect", () => {
    const { roomId, userId, userName } = socket.data;
    if (roomId && roomParticipants.has(roomId)) {
      console.log(`${userName || socket.id} left room ${roomId}`);
      
      // Remove the participant
      roomParticipants.get(roomId)!.delete(socket.id);

      // Clean up room if empty
      if (roomParticipants.get(roomId)!.size === 0) {
        roomParticipants.delete(roomId);

        // Immediately save final cached code to DB and clear timers
        if (saveTimers.has(roomId)) {
          clearTimeout(saveTimers.get(roomId)!);
          saveTimers.delete(roomId);
        }

        const finalCode = roomCodeCache.get(roomId);
        if (finalCode !== undefined) {
          roomCodeCache.delete(roomId);
          RoomService.updateRoomCode(roomId, finalCode).catch((err) => {
            console.error("Failed to save final room code:", err);
          });
        }
      } else {
        // Send the updated list to remaining users
        const users = Array.from(roomParticipants.get(roomId)!.values());
        io.in(roomId).emit("room:users", users);
      }

      socket.to(roomId).emit("user-left", userId || socket.id);
    }
  });
}