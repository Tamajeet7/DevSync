import { Code2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

        <div className="flex items-center gap-3">
          <Code2 className="text-cyan-400" size={30} />
          <span className="text-3xl font-black">DevSync</span>
        </div>

        <button className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black">
          Login
        </button>

      </div>
    </header>
  );
}