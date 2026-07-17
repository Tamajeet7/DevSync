import { motion } from "framer-motion";
import { ArrowRight, Plus, Users, FolderOpen, Activity } from "lucide-react";

import DashboardLayout from "../components/DashboardLayout";
import { useAuthStore } from "../../../store/authStore";

const stats = [
  {
    title: "Rooms",
    value: "0",
    icon: FolderOpen,
  },
  {
    title: "Collaborators",
    value: "0",
    icon: Users,
  },
  {
    title: "Sessions",
    value: "0",
    icon: Activity,
  },
];

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  return (
    <DashboardLayout>

      {/* Header */}

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          Dashboard
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Welcome back,{" "}
          <span className="text-blue-400">
            {user?.name}
          </span>
        </h1>

        <p className="mt-3 max-w-2xl text-slate-400">
          Create collaborative coding rooms, invite your team and code together in real time.
        </p>
      </motion.section>

      {/* Stats */}

      <section className="mt-10 grid gap-6 lg:grid-cols-3">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              className="h-32 rounded-2xl border border-white/10 bg-[#111827] p-6"
            >
              <div className="flex items-start justify-between">

                <div>

                  <p className="text-sm text-slate-400">
                    {item.title}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    {item.value}
                  </h2>

                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon size={20} />
                </div>

              </div>
            </motion.div>
          );
        })}

      </section>

      {/* Quick Actions */}

      <section className="mt-10 grid gap-6 lg:grid-cols-2">

        <motion.button
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="flex h-48 flex-col justify-between rounded-2xl bg-blue-600 p-6 text-left transition hover:bg-blue-500"
        >
          <div className="flex items-center justify-between">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Plus size={22} />
            </div>

            <ArrowRight size={20} />

          </div>

          <div>

            <h3 className="text-2xl font-semibold">
              Create Room
            </h3>

            <p className="mt-2 max-w-sm text-blue-100">
              Start a collaborative coding session and invite your teammates.
            </p>

          </div>

        </motion.button>

        <motion.button
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="flex h-48 flex-col justify-between rounded-2xl border border-white/10 bg-[#111827] p-6 text-left transition hover:border-blue-500/30"
        >
          <div className="flex items-center justify-between">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
              <Users size={22} />
            </div>

            <ArrowRight size={20} />

          </div>

          <div>

            <h3 className="text-2xl font-semibold">
              Join Room
            </h3>

            <p className="mt-2 max-w-sm text-slate-400">
              Enter a room ID and collaborate instantly.
            </p>

          </div>

        </motion.button>

      </section>

      {/* Recent Rooms */}

      <section className="mt-10 rounded-2xl border border-white/10 bg-[#111827]">

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

          <h2 className="text-xl font-semibold">
            Recent Rooms
          </h2>

          <button className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
            View All
          </button>

        </div>

        <div className="flex h-80 flex-col items-center justify-center px-6 text-center">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
            <Plus
              size={26}
              className="text-blue-400"
            />
          </div>

          <h3 className="mt-6 text-2xl font-semibold">
            No Rooms Yet
          </h3>

          <p className="mt-3 max-w-md text-slate-400">
            Create your first collaborative room and start coding together with your team.
          </p>

          <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500">
            Create Room
          </button>

        </div>

      </section>

    </DashboardLayout>
  );
}