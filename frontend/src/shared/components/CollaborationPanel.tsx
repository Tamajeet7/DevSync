import { Circle, Users } from "lucide-react";

const users = [
  "Alex",
  "Sarah",
  "Rahul",
];

export default function CollaborationPanel() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-[#0E1117] p-5">
      <div className="mb-5 flex items-center gap-3">
        <Users className="text-cyan-400" />

        <h3 className="text-xl font-semibold">
          Live Room
        </h3>
      </div>

      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user}
            className="flex items-center justify-between rounded-xl bg-[#161B22] px-4 py-3"
          >
            <span>{user}</span>

            <div className="flex items-center gap-2 text-green-400">
              <Circle
                size={10}
                fill="currentColor"
              />

              Online
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 border-t border-zinc-800 pt-5 text-sm text-zinc-400">
        <p>Room : Interview Prep</p>
        <p>Language : TypeScript</p>
        <p>Connected : 3 Developers</p>
      </div>
    </div>
  );
}