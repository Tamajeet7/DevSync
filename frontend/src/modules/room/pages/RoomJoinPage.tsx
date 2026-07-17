import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileCode2, ArrowRight } from "lucide-react";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../store/authStore";

export default function RoomJoinPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();
  const setGuestUser = useAuthStore((state) => state.setGuestUser);
  const user = useAuthStore((state) => state.user);

  const [roomName, setRoomName] = useState("");
  const [roomLang, setRoomLang] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // If user is already authenticated (either guest or logged in), redirect to room page
    if (user) {
      navigate(`/room/${roomId}`);
      return;
    }

    // Publicly fetch the room details
    api.get(`/rooms/${roomId}`)
      .then((res) => {
        setRoomName(res.data.name);
        setRoomLang(res.data.language);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Invite link is invalid or expired");
        setLoading(false);
      });
  }, [roomId, user, navigate]);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setGuestUser(username);
    navigate(`/room/${roomId}`);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#030005] px-4 text-zinc-200">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[130px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-fuchsia-600/8 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-3xl border border-white/[0.08] bg-[#0a0010]/80 p-8 shadow-2xl backdrop-blur-2xl"
      >
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600/20 text-purple-400 ring-1 ring-purple-500/30">
            <FileCode2 size={32} />
          </div>

          <h2 className="mt-6 text-2xl font-bold tracking-tight text-white">Join Workspace</h2>
          
          {loading ? (
            <div className="mt-4 flex flex-col items-center gap-2">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-purple-500 border-t-transparent" />
              <p className="text-sm text-zinc-500">Retrieving room information...</p>
            </div>
          ) : error ? (
            <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
              {error}
            </div>
          ) : (
            <>
              <p className="mt-2 text-sm text-zinc-400">
                You've been invited to join <span className="font-semibold text-purple-300">"{roomName}"</span>
              </p>
              <div className="mt-2 flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1 text-xs text-zinc-500 ring-1 ring-white/[0.06]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {roomLang.toUpperCase()}
              </div>
            </>
          )}
        </div>

        {!loading && !error && (
          <form onSubmit={handleJoin} className="mt-8 space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Choose a guest username
              </label>
              <input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. CodeNinja"
                maxLength={20}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-purple-500 focus:bg-white/[0.05]"
              />
            </div>

            <button
              type="submit"
              disabled={!username.trim()}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:opacity-95 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Join Room
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        <div className="mt-6 text-center text-xs text-zinc-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-purple-400 hover:text-purple-300">
            Sign in
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
