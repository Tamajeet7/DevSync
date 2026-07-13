import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 py-10 md:flex-row">

        <div className="flex items-center gap-3">

          <Code2 className="text-cyan-400" />

          <span className="text-xl font-bold">
            DevSync
          </span>

        </div>

        <p className="text-zinc-500">
          Built with React • Express • Socket.IO • Monaco
        </p>

      </div>

    </footer>
  );
}