import EditorHeader from "../../editor/components/EditorHeader";
import CodeEditor from "../../editor/components/CodeEditor";
import EditorSidebar from "../../editor/components/EditorSidebar";
import EditorConsole from "../../editor/components/EditorConsole";

export default function RoomPage() {
  return (
    <div className="flex h-screen flex-col bg-[#050505] text-white">
      {/* Header */}
      <div className="h-16 shrink-0">
        <EditorHeader />
      </div>

      {/* Main Workspace */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor */}
        <div className="flex-1 overflow-hidden border-r border-zinc-800">
          <CodeEditor />
        </div>

        {/* Sidebar */}
        <div className="w-72 shrink-0 overflow-y-auto bg-[#0d1117] border-l border-zinc-800">
          <EditorSidebar />
        </div>
      </div>

      {/* Bottom Output */}
      <div className="h-48 shrink-0 border-t border-zinc-800 bg-[#090909] overflow-y-auto">
        <EditorConsole />
      </div>
    </div>
  );
}