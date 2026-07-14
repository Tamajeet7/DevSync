import EditorHeader from "../../editor/components/EditorHeader";
import CodeEditor from "../../editor/components/CodeEditor";
import EditorSidebar from "../../editor/components/EditorSidebar";
import EditorConsole from "../../editor/components/EditorConsole";

export default function RoomPage() {
  return (
    <div className="flex h-screen flex-col bg-[#050505] text-white">

      <EditorHeader />

      <div className="flex flex-1 overflow-hidden">

        <div className="flex-1">
          <CodeEditor />
        </div>

        <EditorSidebar />

      </div>

      <EditorConsole />

    </div>
  );
}