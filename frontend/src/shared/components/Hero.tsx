import { ArrowRight, Code2, Users, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
          Real-Time Collaborative Code Editor
        </span>

        <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
          Build Software
          <br />
          Together.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Collaborate with teammates in real time using Monaco Editor,
          Socket.IO, live synchronization and instant code execution.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-black hover:bg-cyan-300">
            Get Started
            <ArrowRight size={18} />
          </button>

          <button className="rounded-xl border border-zinc-700 px-7 py-4 text-white hover:border-cyan-400">
            GitHub
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid w-full max-w-3xl grid-cols-3 gap-6">

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1117] p-6">
            <Users className="mx-auto mb-3 text-cyan-400" />
            <h2 className="text-3xl font-bold">10K+</h2>
            <p className="text-zinc-500">Developers</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1117] p-6">
            <Code2 className="mx-auto mb-3 text-cyan-400" />
            <h2 className="text-3xl font-bold">20+</h2>
            <p className="text-zinc-500">Languages</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1117] p-6">
            <Zap className="mx-auto mb-3 text-cyan-400" />
            <h2 className="text-3xl font-bold">99.9%</h2>
            <p className="text-zinc-500">Realtime Sync</p>
          </div>

        </div>

      </div>
    </section>
  );
}