import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { initSocket, disconnectSocket, getSocket } from "../../../services/socket";
import { useAuthStore } from "../../../store/authStore";
import type { Room } from "../../room/types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export function useWorkspace(roomId: string | undefined) {
  const user = useAuthStore((state) => state.user);
  const [room, setRoom] = useState<Room | null>(null);
  const [code, setCode] = useState<string>("// Loading workspace...");
  const [participants, setParticipants] = useState<any[]>([]);
  
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);

  // Initialize Room & Socket
  useEffect(() => {
    if (!roomId || !user) return;

    // TODO: Fetch real room details from API when available
    // For now, mock a room based on ID
    setRoom({
      id: roomId,
      name: "Collaborative Session",
      language: "JavaScript",
      ownerId: user.id,
      code: "console.log('Welcome to DevSync Room!');",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    setCode("console.log('Welcome to DevSync Room!');");
    
    // Add self to participants
    setParticipants([{ id: "me", name: user.name }]);

    // Initialize Socket
    const socket = initSocket(roomId, user.id, user.name);

    socket.on("connect", () => {
      console.log("Connected to room:", roomId);
    });

    socket.on("code-change", (newCode: string) => {
      setCode(newCode);
    });

    socket.on("user-joined", (newUser: any) => {
      setParticipants((prev) => [...prev, newUser]);
    });

    socket.on("user-left", (userId: string) => {
      setParticipants((prev) => prev.filter((p) => p.id !== userId));
    });

    return () => {
      disconnectSocket();
    };
  }, [roomId, user]);

  const handleCodeChange = useCallback((newCode: string | undefined) => {
    if (newCode === undefined) return;
    setCode(newCode);
    
    const socket = getSocket();
    if (socket) {
      socket.emit("code-change", { roomId, code: newCode });
    }
  }, [roomId]);

  const runCode = async () => {
    if (!room) return;
    setIsExecuting(true);
    setOutput("");
    setError("");

    try {
      const response = await axios.post(`${API_URL}/execution/run`, {
        language: room.language.toLowerCase(),
        code,
      });

      if (response.data.error) {
        setError(response.data.error);
      }
      if (response.data.output) {
        setOutput(response.data.output);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || err.message || "Failed to execute code");
    } finally {
      setIsExecuting(false);
    }
  };

  return {
    room,
    code,
    participants,
    output,
    error,
    isExecuting,
    handleCodeChange,
    runCode,
  };
}
