import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useRooms } from "../hooks/useRooms";
import LanguageSelect from "./LanguageSelect";

interface CreateRoomModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateRoomModal({
  open,
  onClose,
}: CreateRoomModalProps) {
  const navigate = useNavigate();

  const { createRoom } = useRooms();

  const [name, setName] =
    useState("");

  const [language, setLanguage] =
    useState("typescript");

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit() {
    if (!name.trim()) return;

    try {
      setLoading(true);

      const room =
        await createRoom({
          name,
          language,
        });

      onClose();

      navigate(`/room/${room.id}`);
    } finally {
      setLoading(false);
    }
  }

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
            initial={{
              opacity: 0,
              scale: 0.97,
              y: 16,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.97,
              y: 16,
            }}
            className="fixed left-1/2 top-1/2 z-50 w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#111827] p-6"
          >
            <div className="flex items-center justify-between">

              <h2 className="text-xl font-semibold">
                Create Room
              </h2>

              <button
                onClick={onClose}
                className="rounded-lg p-2 hover:bg-white/5"
              >
                <X size={18} />
              </button>

            </div>

            <div className="mt-6 space-y-5">

              <div>

                <label className="mb-2 block text-sm text-slate-400">
                  Room Name
                </label>

                <input
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="Frontend Interview"
                  className="w-full rounded-xl border border-white/10 bg-[#07111F] px-4 py-3 outline-none focus:border-blue-500"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm text-slate-400">
                  Language
                </label>

                <LanguageSelect
                  value={language}
                  onChange={setLanguage}
                />

              </div>

            </div>

            <div className="mt-8 flex justify-end gap-3">

              <button
                onClick={onClose}
                className="rounded-xl border border-white/10 px-5 py-2.5 hover:bg-white/5"
              >
                Cancel
              </button>

              <button
                disabled={loading}
                onClick={handleSubmit}
                className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium transition hover:bg-blue-500 disabled:opacity-50"
              >
                {loading
                  ? "Creating..."
                  : "Create Room"}
              </button>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}