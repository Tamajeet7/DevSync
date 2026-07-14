import {
  Play,
  Copy,
  Save,
  LogOut,
  Users,
} from "lucide-react";
import { useParams } from "react-router-dom";

export default function EditorHeader() {
  const { roomId } = useParams();

  function copyRoomId() {
    if (!roomId) return;

    navigator.clipboard.writeText(roomId);
    alert("Room ID copied!");
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-800 bg-[#0d1117] px-6">

      {/* Left */}
      <div className="flex items-center gap-8">

        <div>
          <h1 className="text-xl font-bold text-white">
            DevSync
          </h1>

          <p className="text-xs text-zinc-500">
            Collaborative Code Editor
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2">

          <Users size={16} className="text-cyan-400" />

          <span className="text-sm text-zinc-300">
            Room:
          </span>

          <span className="max-w-40 truncate text-sm font-medium text-white">
            {roomId}
          </span>

          <button
            onClick={copyRoomId}
            className="ml-2 rounded p-1 transition hover:bg-zinc-700"
          >
            <Copy size={15} />
          </button>

        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        <select className="rounded-lg border border-zinc-700 bg-black px-4 py-2 text-sm">

          <option value="typescript">TypeScript</option>
          <option value="javascript">JavaScript</option>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="java">Java</option>

        </select>

        <button className="flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 hover:border-cyan-400">

          <Save size={16} />

          Save

        </button>

        <button className="flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-2 font-semibold text-black hover:bg-cyan-300">

          <Play size={16} />

          Run

        </button>

        <button className="flex items-center gap-2 rounded-lg border border-red-500/40 px-4 py-2 text-red-400 hover:bg-red-500/10">

          <LogOut size={16} />

          Leave

        </button>

      </div>

    </header>
  );
}