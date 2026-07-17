import { ArrowRight, Play, Share2, Circle, Terminal, FileCode2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CODE_LINES = [
  { ln: 1, tokens: [{ t: "// ", c: "text-zinc-600" }, { t: "Real-time collaborative coding", c: "text-zinc-600" }] },
  { ln: 2, tokens: [] },
  { ln: 3, tokens: [{ t: "async function", c: "text-purple-400" }, { t: " ", c: "" }, { t: "fetchUserData", c: "text-blue-400" }, { t: "(", c: "text-zinc-300" }, { t: "userId", c: "text-orange-300" }, { t: ": ", c: "text-zinc-300" }, { t: "string", c: "text-emerald-400" }, { t: ")", c: "text-zinc-300" }, { t: " {", c: "text-zinc-300" }] },
  { ln: 4, tokens: [{ t: "  const", c: "text-purple-400" }, { t: " response ", c: "text-zinc-300" }, { t: "=", c: "text-fuchsia-400" }, { t: " await ", c: "text-purple-400" }, { t: "fetch", c: "text-blue-400" }, { t: "(`/api/users/", c: "text-emerald-300" }, { t: "${", c: "text-fuchsia-400" }, { t: "userId", c: "text-orange-300" }, { t: "}", c: "text-fuchsia-400" }, { t: "`);", c: "text-emerald-300" }] },
  { ln: 5, tokens: [{ t: "  const", c: "text-purple-400" }, { t: " data ", c: "text-zinc-300" }, { t: "=", c: "text-fuchsia-400" }, { t: " await ", c: "text-purple-400" }, { t: "response", c: "text-zinc-300" }, { t: ".", c: "text-zinc-500" }, { t: "json", c: "text-blue-400" }, { t: "();", c: "text-zinc-300" }] },
  { ln: 6, tokens: [] },
  { ln: 7, tokens: [{ t: "  return", c: "text-purple-400" }, { t: " {", c: "text-zinc-300" }] },
  { ln: 8, tokens: [{ t: "    id", c: "text-zinc-300" }, { t: ":", c: "text-zinc-500" }, { t: " data", c: "text-zinc-300" }, { t: ".", c: "text-zinc-500" }, { t: "id", c: "text-orange-300" }, { t: ",", c: "text-zinc-300" }] },
  { ln: 9, tokens: [{ t: "    name", c: "text-zinc-300" }, { t: ":", c: "text-zinc-500" }, { t: " data", c: "text-zinc-300" }, { t: ".", c: "text-zinc-500" }, { t: "username", c: "text-orange-300" }, { t: ",", c: "text-zinc-300" }] },
  { ln: 10, tokens: [{ t: "    avatar", c: "text-zinc-300" }, { t: ":", c: "text-zinc-500" }, { t: " data", c: "text-zinc-300" }, { t: ".", c: "text-zinc-500" }, { t: "avatar_url", c: "text-orange-300" }] },
  { ln: 11, tokens: [{ t: "  };", c: "text-zinc-300" }] },
  { ln: 12, tokens: [{ t: "}", c: "text-zinc-300" }] },
];

const COLLABORATORS = [
  { name: "Arjun", color: "from-purple-500 to-fuchsia-500" },
  { name: "Maya", color: "from-blue-500 to-cyan-500" },
  { name: "Ryu", color: "from-emerald-500 to-teal-500" },
];

export default function PreviewSection() {
  return (
    <section className="bg-[#030005]">
      <div
        className="mx-auto max-w-[1700px]"
        style={{ paddingLeft: "96px", paddingRight: "96px", paddingTop: "120px", paddingBottom: "120px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-sm font-semibold text-purple-300 -translate-y-4">
            PRODUCT PREVIEW
          </span>
          <h2 className="mt-8 text-5xl font-black text-white">
            Built for collaborative development.
          </h2>
          <div className="mt-6 mx-auto max-w-3xl text-xl leading-9 text-slate-400">
            Experience live collaboration, synchronized editing, instant execution
            and modern tooling in one seamless developer workspace.
          </div>
        </motion.div>

        {/* Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-20 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0a0010] shadow-2xl shadow-purple-500/10"
        >
          {/* Fake Browser Chrome */}
          <div className="flex h-11 items-center gap-6 border-b border-white/[0.06] bg-white/[0.02] px-5">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
            {/* URL Bar */}
            <div className="flex flex-1 max-w-md items-center gap-2 rounded-md bg-white/[0.04] border border-white/[0.06] px-3 py-1">
              <Circle size={7} className="fill-emerald-400 text-emerald-400 shrink-0" />
              <span className="text-xs text-zinc-500 font-mono truncate">devsync.app/room/xk9m2</span>
            </div>
            {/* Header actions */}
            <div className="ml-auto flex items-center gap-3">
              <div className="flex -space-x-2">
                {COLLABORATORS.map((c) => (
                  <div key={c.name} title={c.name} className={`flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#0a0010] bg-gradient-to-br ${c.color} text-[9px] font-bold text-white`}>
                    {c.name[0]}
                  </div>
                ))}
              </div>
              <div className="flex h-6 items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 text-[10px] text-zinc-400">
                <Share2 size={10} /> Invite
              </div>
              <div className="flex h-6 items-center gap-1.5 rounded-md bg-gradient-to-r from-emerald-500 to-emerald-600 px-3 text-[10px] font-semibold text-white shadow-md shadow-emerald-900/50">
                <Play size={9} className="fill-white" /> Run
              </div>
            </div>
          </div>

          {/* Workspace Body */}
          <div className="flex" style={{ height: "600px" }}>
            {/* Sidebar */}
            <div className="flex w-14 flex-col items-center gap-5 border-r border-white/[0.06] bg-white/[0.01] py-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600/20 text-purple-400 ring-1 ring-purple-500/30">
                <FileCode2 size={15} />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-600 hover:text-zinc-400">
                <Terminal size={15} />
              </div>
            </div>

            {/* Code Editor */}
            <div className="flex-1 overflow-hidden border-r border-white/[0.06]">
              {/* Tab bar */}
              <div className="flex h-9 items-center border-b border-white/[0.06] bg-white/[0.01]">
                <div className="flex h-full items-center gap-2 border-r border-white/[0.06] border-b-2 border-b-purple-500 bg-white/[0.03] px-4">
                  <FileCode2 size={11} className="text-purple-400" />
                  <span className="text-[11px] text-zinc-300 font-medium">main.ts</span>
                  <span className="ml-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                </div>
                <div className="flex h-full items-center gap-2 px-4 opacity-50">
                  <FileCode2 size={11} className="text-zinc-500" />
                  <span className="text-[11px] text-zinc-500">utils.ts</span>
                </div>
              </div>

              {/* Code area */}
              <div className="flex h-full overflow-hidden" style={{ background: "transparent" }}>
                {/* Line numbers */}
                <div className="flex flex-col items-end gap-0 select-none pt-3 pr-4 pl-4">
                  {CODE_LINES.map((l) => (
                    <div key={l.ln} className="h-[22px] text-[12px] leading-[22px] text-zinc-700 font-mono">{l.ln}</div>
                  ))}
                </div>
                {/* Code */}
                <div className="flex flex-col gap-0 pt-3 font-mono text-[12px] leading-[22px] overflow-hidden">
                  {CODE_LINES.map((l) => (
                    <div key={l.ln} className="h-[22px] whitespace-pre">
                      {l.tokens.map((tok, i) => (
                        <span key={i} className={tok.c}>{tok.t}</span>
                      ))}
                    </div>
                  ))}
                  {/* Blinking cursor */}
                  <div className="h-[22px] flex items-center">
                    <span className="inline-block w-[2px] h-[14px] bg-purple-400 animate-pulse rounded-sm" />
                  </div>
                </div>

                {/* Collaborator cursor label */}
                <div className="relative ml-4 mt-[88px] pointer-events-none">
                  <div className="absolute flex items-center gap-1 rounded-sm px-1.5 py-0.5 bg-blue-500 text-[9px] text-white font-semibold whitespace-nowrap shadow-md">
                    Maya
                  </div>
                  <div className="absolute top-[18px] left-0 w-[2px] h-[22px] bg-blue-500 rounded-full" />
                </div>
              </div>
            </div>

            {/* Terminal / Output Panel */}
            <div className="flex w-72 flex-col border-l border-white/[0.06]">
              {/* Terminal header */}
              <div className="flex h-9 items-center gap-2 border-b border-white/[0.06] bg-white/[0.01] px-4">
                <Terminal size={12} className="text-purple-400" />
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest">Output</span>
                <div className="ml-auto flex h-5 w-5 items-center justify-center rounded bg-emerald-500/10">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>
              <div className="flex-1 p-4 font-mono text-[11px] leading-relaxed bg-black/20">
                <p className="text-zinc-600">$ node main.ts</p>
                <p className="text-emerald-400 mt-1">✓ Compiled successfully</p>
                <p className="text-zinc-300 mt-2">Fetching user: usr_8a3f...</p>
                <p className="text-zinc-300">&#123;</p>
                <p className="text-zinc-300">&nbsp;&nbsp;id: <span className="text-emerald-300">"usr_8a3f921b"</span>,</p>
                <p className="text-zinc-300">&nbsp;&nbsp;name: <span className="text-emerald-300">"Arjun Mehta"</span>,</p>
                <p className="text-zinc-300">&nbsp;&nbsp;avatar: <span className="text-emerald-300">"https://..."</span></p>
                <p className="text-zinc-300">&#125;</p>
                <p className="text-zinc-600 mt-3">Execution time: <span className="text-fuchsia-400">0.182s</span></p>
                <p className="text-zinc-600">Memory: <span className="text-blue-400">24.3 MB</span></p>
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="text-zinc-700">$</span>
                  <span className="inline-block w-[6px] h-[12px] bg-zinc-600 animate-pulse rounded-sm" />
                </div>
              </div>

              {/* Chat section */}
              <div className="border-t border-white/[0.06]">
                <div className="flex h-8 items-center gap-2 border-b border-white/[0.06] bg-white/[0.01] px-4">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Live Chat</span>
                  <div className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-fuchsia-500 text-[8px] font-bold text-white">3</div>
                </div>
                <div className="flex flex-col gap-2 p-3">
                  <div className="flex gap-2 items-start">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-gradient-to-br from-blue-500 to-cyan-500 text-[8px] font-bold text-white">M</div>
                    <div className="rounded-xl rounded-tl-none bg-white/[0.05] px-2.5 py-1.5 text-[10px] text-zinc-300 ring-1 ring-white/[0.06]">let me refactor the return type 👀</div>
                  </div>
                  <div className="flex gap-2 items-start justify-end">
                    <div className="rounded-xl rounded-tr-none bg-purple-600/20 px-2.5 py-1.5 text-[10px] text-zinc-200 ring-1 ring-purple-500/20">LGTM! ship it 🚀</div>
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-gradient-to-br from-purple-500 to-fuchsia-500 text-[8px] font-bold text-white">A</div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-gradient-to-br from-emerald-500 to-teal-500 text-[8px] font-bold text-white">R</div>
                    <div className="rounded-xl rounded-tl-none bg-white/[0.05] px-2.5 py-1.5 text-[10px] text-zinc-300 ring-1 ring-white/[0.06]">tests passing ✅</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA below preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <Link
            to="/register"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-4 font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(139,92,246,0.5)]"
          >
            Start Collaborating Free
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-zinc-300 transition-all hover:bg-white/10 hover:text-white"
          >
            Sign In
          </Link>
        </motion.div>
      </div>
    </section>
  );
}