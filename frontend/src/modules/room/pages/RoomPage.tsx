import { useParams, Navigate } from "react-router-dom";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { GripVertical } from "lucide-react";

import WorkspaceHeader from "../components/workspace/WorkspaceHeader";
import WorkspaceSidebar from "../components/workspace/WorkspaceSidebar";
import CodeEditor from "../components/workspace/CodeEditor";
import OutputTerminal from "../components/workspace/OutputTerminal";
import { useWorkspace } from "../hooks/useWorkspace";
import { useAuthStore } from "../../../store/authStore";

export default function RoomPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const user = useAuthStore((state) => state.user);

  const {
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
    currentUser,
  } = useWorkspace(roomId);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!roomId) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#030005] text-zinc-100">
      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-fuchsia-600/8 blur-[100px]" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <WorkspaceHeader
          room={room}
          onRunCode={runCode}
          isExecuting={isExecuting}
          participants={participants}
        />

        <div className="flex flex-1 overflow-hidden">
          <PanelGroup direction="horizontal">
            {/* Editor & Terminal Column */}
            <Panel defaultSize={80} minSize={30} className="flex flex-col">
              <PanelGroup direction="vertical">
                {/* Editor Panel */}
                <Panel defaultSize={70} minSize={20} className="flex">
                  <CodeEditor
                    code={code}
                    language={room?.language || "javascript"}
                    onChange={handleCodeChange}
                  />
                </Panel>

                {/* Horizontal Resize Handle */}
                <PanelResizeHandle className="group relative flex h-2 items-center justify-center bg-white/[0.02] transition-colors hover:bg-purple-500/20 active:bg-purple-500/40">
                  <div className="h-0.5 w-12 rounded-full bg-white/10 transition-colors group-hover:bg-purple-500/50" />
                </PanelResizeHandle>

                {/* Terminal Panel */}
                <Panel defaultSize={30} minSize={15}>
                  <OutputTerminal
                    output={output}
                    error={error}
                    isExecuting={isExecuting}
                  />
                </Panel>
              </PanelGroup>
            </Panel>

            {/* Vertical Resize Handle */}
            <PanelResizeHandle className="group relative flex w-2 items-center justify-center bg-white/[0.02] transition-colors hover:bg-purple-500/20 active:bg-purple-500/40">
              <div className="flex h-12 w-0.5 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-purple-500/50">
                <GripVertical size={10} className="text-white/40 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </PanelResizeHandle>

            {/* Sidebar Panel */}
            <Panel defaultSize={20} minSize={15} maxSize={30}>
              <WorkspaceSidebar
                participants={participants}
                messages={messages}
                sendMessage={sendMessage}
                currentUser={currentUser}
              />
            </Panel>
          </PanelGroup>
        </div>
      </div>
    </div>
  );
}