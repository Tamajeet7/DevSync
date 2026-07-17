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

  // Load room details via API
  useEffect(() => {
    if (!roomId) return;
    api.get(`/rooms/${roomId}`)
      .then((res) => {
        setRoom(res.data);
        if (res.data.code) {
          setCode(res.data.code);
        } else {
          const templates: Record<string, string> = {
            python: "# Write your Python code here\nprint('Hello, DevSync!')\n",
            javascript: "// Write your JavaScript code here\nconsole.log('Hello, DevSync!');\n",
            typescript: "// Write your TypeScript code here\nconst greeting: string = 'Hello, DevSync!';\nconsole.log(greeting);\n",
            cpp: "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, DevSync!\" << std::endl;\n    return 0;\n}\n",
            c: "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, DevSync!\\n\");\n    return 0;\n}\n",
            java: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, DevSync!\");\n    }\n}\n",
            go: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, DevSync!\")\n}\n",
            rust: "fn main() {\n    println!(\"Hello, DevSync!\");\n}\n",
          };
          const lang = res.data.language.toLowerCase();
          setCode(templates[lang] || "// Welcome to DevSync!\n");
        }
      })
      .catch((err) => {
        console.error("Failed to load room details:", err);
      });
  }, [roomId]);

  // Initialize Socket and event handlers
  useEffect(() => {
    if (!roomId || !user) return;

    // Add self to participants
    setParticipants([{ id: user.id, name: user.name }]);

    // Initialize Socket
    const socket = initSocket(roomId, user.id, user.name);

    socket.on("code-change", (newCode: string) => {
      setCode(newCode);
    });

    socket.on("user-joined", (newUser: any) => {
      // Keep for local logs/effects if needed, but room:users handles the list state
    });

    socket.on("user-left", (userId: string) => {
      // Keep for local logs/effects if needed, but room:users handles the list state
    });

    socket.on("room:users", (users: any[]) => {
      // Deduplicate by ID just in case
      const uniqueUsers = users.filter(
        (u, index, self) => self.findIndex((o) => o.id === u.id) === index
      );
      setParticipants(uniqueUsers);
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
