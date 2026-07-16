import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Left Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.28, 0.18],
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
          bg-blue-500
          blur-[180px]
        "
        style={{
          opacity: 0.15,
        }}
      />

      {/* Right Glow */}

      <motion.div
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.12, 0.22, 0.12],
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
          bg-cyan-400
          blur-[220px]
        "
        style={{
          opacity: 0.12,
        }}
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
          bg-blue-500
          blur-[220px]
        "
        style={{
          opacity: 0.08,
        }}
      />

    </div>
  );
}