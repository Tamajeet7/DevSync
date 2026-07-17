import { motion } from "framer-motion";
import { ArrowRight, Check, Play } from "lucide-react";
import { Link } from "react-router-dom";

const FEATURES = [
  "Real-time Collaboration",
  "Judge0 Execution",
  "Monaco Editor",
  "Private Rooms",
];

export default function HeroLeft() {
  return (
    <div className="max-w-[650px]">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-purple-500/20
            bg-purple-500/10
            min-w-[220px]
          "
        >
          <div className="h-2.5 w-2.5 rounded-full bg-purple-400 translate-x-2"/>

          <span className="text-[15px] font-semibold text-purple-300 translate-x-2">
            Collaborative Cloud IDE
          </span>

        </div>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.45,
        }}
        className="
          mt-12
          text-[84px]
          font-black
          leading-[0.9]
          tracking-[-0.05em]
          text-white
        "
      >
        Code Together.

        <br />

        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
          Build Faster.
        </span>

      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.45,
        }}
        className="
          mt-12
          max-w-[560px]
          text-[22px]
          leading-[42px]
          text-slate-400
        "
      >
        DevSync is a collaborative online IDE designed for pair
        programming, coding interviews and modern developer
        teams. Code together, execute instantly and stay
        synchronized in real time.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.45,
        }}
        className="mt-20 flex items-center gap-6"
      >

        <Link
          to="/register"
          className="
            inline-flex
            h-12
            min-w-[165px]
            items-center
            justify-center
            gap-3
            rounded-full
            bg-gradient-to-r
            from-purple-600
            to-purple-500
            px-10
            text-[20px]
            font-semibold
            text-white
            shadow-[0_0_20px_rgba(139,92,246,0.3)]
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]
            hover:from-purple-500
            hover:to-purple-400
          "
        >
          <span>Start Free</span>

          <ArrowRight size={18} />
        </Link>

        <button
          className="
            inline-flex
            h-12
            min-w-[165px]
            items-center
            justify-center
            gap-3
            rounded-full
            border
            border-slate-700
            bg-[#111827]
            px-10
            text-[20px]
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-purple-500/40
            hover:bg-slate-800
          "
        >
          <Play size={18} />

          <span>Watch Demo</span>
        </button>

      </motion.div>

      {/* Features */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.45,
        }}
        className="
            mt-28
            grid
            grid-cols-2
            gap-x-12
            gap-y-8
        "
      >

        {FEATURES.map((feature) => (

          <div
            key={feature}
            className="flex items-center gap-4 translate-y-4"
          >

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-purple-500/10
              "
            >
              <Check
                size={18}
                className="text-purple-400"
              />
            </div>

            <span className="text-lg font-medium text-slate-300">
              {feature}
            </span>

          </div>

        ))}

      </motion.div>

    </div>
  );
}