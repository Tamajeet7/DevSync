import { Clock3 } from "lucide-react";

export default function ActivityPanel() {
  return (
    <section className="mt-16">

      <h2 className="mb-6 text-lg font-semibold">
        Recent Activity
      </h2>

      <div className="rounded-xl border border-white/10 bg-[#111827]">

        <div className="flex items-center gap-4 border-b border-white/5 px-6 py-5">

          <Clock3 className="text-blue-400" />

          <div>

            <p className="font-medium">
              Activity will appear here
            </p>

            <p className="text-sm text-slate-400">
              Room creation, edits and collaborators.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}