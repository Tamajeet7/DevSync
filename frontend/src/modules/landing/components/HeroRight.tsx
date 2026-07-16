import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Users,
  Zap,
} from "lucide-react";

export default function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[800px]"
    >
      <div
        className="
          overflow-hidden
          rounded-[34px]
          border
          border-slate-800
          bg-[#111827]
          shadow-[0_40px_120px_rgba(0,0,0,.45)]
        "
      >

        {/* Browser */}

        <div className="flex h-16 items-center justify-between border-b border-slate-800 px-8">

          <div className="flex gap-3 translate-x-2">

            <div className="h-3.5 w-3.5 rounded-full bg-red-400" />

            <div className="h-3.5 w-3.5 rounded-full bg-yellow-400" />

            <div className="h-3.5 w-3.5 rounded-full bg-green-400" />

          </div>

          <p className="text-[12px] text-slate-400">
            devsync.app
          </p>

          <div className="min-w-[50px] rounded-full bg-emerald-500/10 -translate-x-2">

            <span className="text-sm font-semibold text-emerald-400">
            <div className="translate-x-1.5" >
              ● Live
            </div>
            </span>

          </div>

        </div>

        {/* Content */}

        <div className="px-9 py-7">

          {/* Top */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-5">

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#3B82F6]
                  to-[#2563EB]
                  translate-x-1
                "
              >

                <Play
                  size={26}
                  className="text-white"
                />

              </div>

              <div>

                <p className="translate-y-2 text-sm uppercase tracking-[0.35em] text-blue-400 -translate-x-1">
                  Workspace
                </p>

                <h2 className="mt-2 text-[42px] font-black text-white -translate-x-1">
                  Frontend Interview
                </h2>

                <p className="-translate-y-1 mt-2 text-lg text-slate-400 -translate-x-1">
                  Room DEV-203
                </p>

              </div>

            </div>

            {/* Users */}

            <div className="flex -space-x-3 gap-2 -translate-x-1">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white">
                A
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-white">
                R
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 text-lg font-bold text-white">
                S
              </div>

            </div>

          </div>

          {/* Code */}

          <div
            className="
              mt-6
              overflow-hidden
              rounded-[28px]
              border
              border-slate-700
              bg-[#0B1220]
              pt-2
            "
          >

            <div className="border-b border-slate-700 px-8 py-4">

              <span className="font-medium text-slate-400">
                <div className = "translate-x-2">
                room.tsx
                </div>
              </span>

            </div>

            <pre className="overflow-hidden px-8 py-4 text-[17px] leading-6 translate-x-2">

                {`function greet(name: string) {

                return \`Hello \${name}\`;

                }

                console.log(greet("DevSync"));`}
            </pre>

          </div>

          {/* Stats */}

          <div className="mt-6 grid grid-cols-3 gap-6">

            <div className="
                rounded-[22px]
                border
                border-slate-700
                bg-[#0B1220]
                p-5
            ">

              <Users
                size={28}
                className="text-blue-400 translate-x-2"
              />

              <h3 className="mt-5 text-[30px] font-black text-white translate-x-2">
                3
              </h3>

              <p className="mt-2 text-base text-slate-400 translate-x-2">
                Active Developers
              </p>

            </div>

            <div className="
                    rounded-[22px]
                    border
                    border-slate-700
                    bg-[#0B1220]
                    p-5
                ">

              <Zap
                size={28}
                className="text-cyan-400 translate-x-2"
              />

              <h3 className="mt-5 text-[30px] font-black text-white translate-x-2">
                15+
              </h3>

              <p className="mt-2 text-base text-slate-400 translate-x-2">
                Languages
              </p>

            </div>

            <div className="
                rounded-[22px]
                border
                border-slate-700
                bg-[#0B1220]
                p-5
            ">

              <CheckCircle2
                size={28}
                className="text-emerald-400 translate-x-2"
              />

              <h3 className="mt-5 text-[30px] font-black text-white translate-x-2">
                99.9%
              </h3>

              <p className="mt-2 text-base text-slate-400 translate-x-2">
                Sync Accuracy
              </p>

            </div>

          </div>


                    {/* Bottom CTA */}

          <div
            className="
                mt-8
                rounded-[28px]
                border
                border-blue-500/20
                bg-gradient-to-r
                from-blue-500/10
                to-cyan-500/10
                px-10
                py-10
            "
            >

            <div className="flex items-center gap-10">

            <div className="max-w-[450px] ml-4">

                <h3 className="text-2xl font-bold text-white ml-2 translate-x-3">
                Ready to collaborate?
                </h3>

                <p className="mt-2 text-lg leading-5 text-slate-400 translate-x-3">
                Create a room and start coding with your team in seconds.
                </p>

            </div>

            <button
                className="
                ml-auto
                flex-shrink-0
                inline-flex
                h-12
                min-w-[165px]
                items-center
                justify-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-[#3B82F6]
                via-[#3B82F6]
                to-[#2563EB]
                px-10
                text-[20px]
                font-semibold
                text-white
                shadow-lg
                shadow-blue-500/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:from-[#4F8FFB]
                hover:to-[#2563EB]
                hover:shadow-xl
                hover:shadow-blue-500/30
                "
            >
                Launch

                <ArrowRight size={18} />
            </button>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}