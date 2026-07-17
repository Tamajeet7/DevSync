import { Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface OutputTerminalProps {
  output: string;
  error: string;
  isExecuting: boolean;
}

export default function OutputTerminal({ output, error, isExecuting }: OutputTerminalProps) {
  return (
    <div className="flex h-64 flex-col border-t border-white/[0.06] bg-[#030005]/95 backdrop-blur-xl">
      <div className="flex h-10 items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
          <Terminal size={14} />
          <span>Output</span>
        </div>
        {isExecuting && (
          <span className="flex items-center gap-2 text-xs font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Executing...
          </span>
        )}
      </div>

      <div className="relative flex-1 overflow-auto p-4 font-mono text-sm">
        <AnimatePresence mode="wait">
          {output || error ? (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {error && (
                <div className="mb-2 whitespace-pre-wrap text-red-400">
                  {error}
                </div>
              )}
              {output && (
                <div className="whitespace-pre-wrap text-zinc-300">
                  {output}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-full items-center justify-center text-zinc-600"
            >
              No output yet. Run your code to see results here.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
