import { useEffect, useState, useCallback } from "react";
import api from "../../../lib/axios";
import { initSocket, disconnectSocket, getSocket } from "../../../services/socket";
import { useAuthStore } from "../../../store/authStore";
import type { Room } from "../../room/types";

export interface ChatMessage {
  id: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: string;
}

export function useWorkspace(roomId: string | undefined) {
  const user = useAuthStore((state) => state.user);
  const [room, setRoom] = useState<Room | null>(null);
  const [code, setCode] = useState<string>("// Welcome to DevSync!\n// Start coding and collaborate in real-time.\n");
  const [participants, setParticipants] = useState<any[]>([]);

  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);

  // Chat state
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Initialize Room & Socket
  useEffect(() => {
    if (!roomId || !user) return;

    // Mock a room based on ID until room API is wired up
    setRoom({
      id: roomId,
      name: "Collaborative Session",
      language: "javascript",
      ownerId: user.id,
      code: "// Welcome to DevSync!\n// Start coding and collaborate in real-time.\n",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    setCode("// Welcome to DevSync!\n// Start coding and collaborate in real-time.\n");

    // Add self to participants
    setParticipants([{ id: user.id, name: user.name }]);

    // Initialize Socket
    const socket = initSocket(roomId, user.id, user.name);

    socket.on("code-change", (newCode: string) => {
      setCode(newCode);
    });

    socket.on("user-joined", (newUser: any) => {
      setParticipants((prev) => {
        if (prev.find((p) => p.id === newUser.id)) return prev;
        return [...prev, newUser];
      });
    });

    socket.on("user-left", (userId: string) => {
      setParticipants((prev) => prev.filter((p) => p.id !== userId));
    });

    // Chat listener
    socket.on("chat-message", (message: ChatMessage) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      disconnectSocket();
    };
  }, [roomId, user]);

  const handleCodeChange = useCallback(
    (newCode: string | undefined) => {
      if (newCode === undefined) return;
      setCode(newCode);

      const socket = getSocket();
      if (socket) {
        socket.emit("code-change", { roomId, code: newCode });
      }
    },
    [roomId]
  );

  const runCode = async () => {
    if (!room) return;
    setIsExecuting(true);
    setOutput("");
    setError("");

    try {
      const response = await api.post(`/execution/run`, {
        language: room.language.toLowerCase(),
        code,
      });

      if (response.data.stdout) {
        setOutput(response.data.stdout);
      }
      if (response.data.stderr) {
        setError(response.data.stderr);
      }
      if (response.data.compile_output) {
        setError(response.data.compile_output);
      }
      if (!response.data.stdout && !response.data.stderr && !response.data.compile_output) {
        setOutput(response.data.status || "Execution complete (no output)");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Failed to execute code"
      );
    } finally {
      setIsExecuting(false);
    }
  };

  const sendMessage = useCallback(
    (content: string) => {
      if (!user || !roomId || !content.trim()) return;

      const message: ChatMessage = {
        id: `${Date.now()}-${user.id}`,
        userId: user.id,
        userName: user.name,
        content: content.trim(),
        timestamp: new Date().toISOString(),
      };

      // Optimistically add to local state
      setMessages((prev) => [...prev, message]);

      // Emit to server to broadcast to others
      const socket = getSocket();
      if (socket) {
        socket.emit("chat-message", { roomId, message });
      }
    },
    [roomId, user]
  );

  return {
    room,
    code,
    participants,
    output,
    error,
    isExecuting,
    messages,
    handleCodeChange,
    runCode,
    sendMessage,
    currentUser: user,
  };
}
