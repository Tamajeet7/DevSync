import { ArrowRight, Code2, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col items-center justify-center px-6 text-center">

        {/* Badge */}
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
          🚀 Real-Time Collaborative Code Editor
        </span>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
          Code.
          <br />
          Collaborate.
          <br />
          Ship Faster.
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          Build software together with a VS Code-like editor powered by
          Monaco, real-time collaboration using Socket.IO, and instant code
          execution—all from your browser.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
          >
            Get Started
            <ArrowRight size={18} />
          </button>

          <button
            className="rounded-xl border border-zinc-700 px-7 py-4 text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            GitHub
          </button>

        </div>

        {/* Stats */}
        <div className="mt-20 grid w-full max-w-4xl gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1117] p-8">
            <Users className="mx-auto mb-4 text-cyan-400" size={34} />
            <h2 className="text-3xl font-bold text-white">Live</h2>
            <p className="mt-2 text-zinc-400">
              Real-time collaboration with WebSockets.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1117] p-8">
            <Code2 className="mx-auto mb-4 text-cyan-400" size={34} />
            <h2 className="text-3xl font-bold text-white">Monaco</h2>
            <p className="mt-2 text-zinc-400">
              Full VS Code editing experience in the browser.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#0d1117] p-8">
            <Zap className="mx-auto mb-4 text-cyan-400" size={34} />
            <h2 className="text-3xl font-bold text-white">Instant</h2>
            <p className="mt-2 text-zinc-400">
              Run code in multiple languages with one click.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}