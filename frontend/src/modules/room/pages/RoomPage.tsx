import { useEffect } from "react";
import { useParams } from "react-router-dom";

import EditorHeader from "../../editor/components/EditorHeader";
import CodeEditor from "../../editor/components/CodeEditor";
import EditorSidebar from "../../editor/components/EditorSidebar";
import EditorConsole from "../../editor/components/EditorConsole";

import { socket } from "../../../services/socket";

export default function RoomPage() {
  const { roomId } = useParams();

  useEffect(() => {
    if (!roomId) return;

    socket.emit("join-room", roomId);

    console.log("Joined room:", roomId);
  }, [roomId]);

  if (!roomId) {
    return <div>Invalid Room</div>;
  }

  return (
    <div className="flex h-screen flex-col bg-[#050505] text-white">

      <div className="h-16 shrink-0">
        <EditorHeader />
      </div>

      <div className="flex flex-1 overflow-hidden">

        <div className="flex-1 overflow-hidden border-r border-zinc-800">
          <CodeEditor roomId={roomId} />
        </div>

        <div className="w-72 shrink-0 border-l border-zinc-800 bg-[#0d1117]">
          <EditorSidebar />
        </div>

      </div>

      <div className="h-48 shrink-0 border-t border-zinc-800">
        <EditorConsole />
      </div>

    </div>
  );
}