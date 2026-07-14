import { Plus, LogIn } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">

      <div className="mx-auto max-w-6xl px-6 py-16">

        <h1 className="text-5xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-zinc-400">
          Create a new collaborative coding room or join an existing one.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <button
            className="rounded-2xl border border-cyan-500/30 bg-[#10151d] p-8 text-left transition hover:border-cyan-400"
          >
            <Plus size={40} className="text-cyan-400" />

            <h2 className="mt-4 text-2xl font-bold">
              Create Room
            </h2>

            <p className="mt-2 text-zinc-400">
              Start a new coding session.
            </p>

          </button>

          <button
            className="rounded-2xl border border-zinc-800 bg-[#10151d] p-8 text-left transition hover:border-cyan-400"
          >
            <LogIn size={40} className="text-cyan-400" />

            <h2 className="mt-4 text-2xl font-bold">
              Join Room
            </h2>

            <p className="mt-2 text-zinc-400">
              Enter a room ID and collaborate instantly.
            </p>

          </button>

        </div>

      </div>

    </div>
  );
}