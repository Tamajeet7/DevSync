import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Left Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-56
          top-24
          h-[700px]
          w-[700px]
          rounded-full
          bg-purple-600
          blur-[180px]
        "
      />

      {/* Right Glow */}

      <motion.div
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.10, 0.20, 0.10],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-56
          top-10
          h-[750px]
          w-[750px]
          rounded-full
          bg-purple-400
          blur-[220px]
        "
      />

      {/* Bottom Accent */}

      <div
        className="
          absolute
          bottom-[-350px]
          left-1/2
          h-[700px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-purple-800
          blur-[220px]
        "
        style={{
          opacity: 0.15,
        }}
      />

    </div>
  );
}