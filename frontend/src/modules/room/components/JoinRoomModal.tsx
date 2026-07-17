import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../../lib/axios";

interface JoinRoomModalProps {
  open: boolean;
  onClose: () => void;
}

export default function JoinRoomModal({ open, onClose }: JoinRoomModalProps) {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    try {
      setLoading(true);
      setError("");

      const trimmedCode = code.trim();
      // Try to fetch room details to verify the code is valid
      await api.get(`/rooms/${trimmedCode}`);

      onClose();
      navigate(`/room/${trimmedCode}`);
    } catch (err: any) {
      setError(err.response?.data?.message || "Room code not found or invalid");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.3 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/[0.08] bg-[#0c0514] p-8 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight text-white">Join Room</h2>
              <button
                onClick={onClose}
                className="rounded-lg p-1 text-zinc-400 hover:bg-white/5 hover:text-white transition"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {error && (
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3.5 text-xs text-red-400">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="code" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Room Code / Invitation ID
                </label>
                <input
                  id="code"
                  type="text"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="e.g. cmrorgpg3000..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-purple-500 focus:bg-white/[0.05]"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !code.trim()}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:opacity-95 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? "Joining..." : "Join"}
                {!loading && <ArrowRight size={16} />}
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}