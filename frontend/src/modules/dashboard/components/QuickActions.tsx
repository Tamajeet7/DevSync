import { Code2, Plus, Users } from "lucide-react";

interface QuickActionsProps {
  onCreate: () => void;
}

export default function QuickActions({
  onCreate,
}: QuickActionsProps) {
  return (
    <section className="mb-14">

      <h2 className="mb-6 text-lg font-semibold">
        Quick Actions
      </h2>

      <div className="grid gap-5 lg:grid-cols-3">

        <button
          onClick={onCreate}
          className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#111827] px-6 py-5 text-left transition hover:border-blue-500"
        >
          <Plus className="text-blue-400" />

          <div>

            <h3 className="font-semibold">
              Create Room
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Start a new collaborative session.
            </p>

          </div>

        </button>

        <button className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#111827] px-6 py-5 text-left transition hover:border-blue-500">

          <Users className="text-blue-400" />

          <div>

            <h3 className="font-semibold">
              Join Room
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Enter an invitation code.
            </p>

          </div>

        </button>

        <button className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#111827] px-6 py-5 text-left transition hover:border-blue-500">

          <Code2 className="text-blue-400" />

          <div>

            <h3 className="font-semibold">
              Playground
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Try code without creating a room.
            </p>

          </div>

        </button>

      </div>

    </section>
  );
}