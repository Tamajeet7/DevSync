import { Play } from "lucide-react";

export default function EditorHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-800 bg-[#0d1117] px-6">

      <h1 className="text-xl font-bold">
        DevSync
      </h1>

      <div className="flex items-center gap-4">

        <select
            className="rounded-lg border border-zinc-700 bg-black px-4 py-2"
        >

            <option value="typescript">TypeScript</option>

            <option value="javascript">JavaScript</option>

            <option value="cpp">C++</option>

            <option value="python">Python</option>

            <option value="java">Java</option>

        </select>

        <button className="flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-2 font-semibold text-black">

          <Play size={18} />

          Run

        </button>

      </div>

    </header>
  );
}