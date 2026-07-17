import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-[#030005]">

      <div
        className="mx-auto max-w-[1700px]"
        style={{
          paddingLeft: "96px",
          paddingRight: "96px",
          paddingTop: "80px",
          paddingBottom: "120px",
        }}
      >

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-purple-500/20
            bg-gradient-to-br
            from-[#0A0512]
            via-[#07020E]
            to-[#0A0512]
            px-20
            py-24
            min-h-[250px]
          "
        >

          {/* Glow */}

          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-purple-500/15 blur-[140px]" />

          <div className="absolute -left-24 bottom-0 h-60 w-60 rounded-full bg-fuchsia-500/10 blur-[120px]" />

          <div className="text-center translate-y-8 relative z-10">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-purple-500/20
              bg-purple-500/10
              px-5
              py-2
              text-sm
              font-semibold
              text-purple-300
              flex justify-center
              min-w-[150px]
              -translate-y-4
            "
          >
            READY TO START?
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Start collaborating today.
          </h2>

          <div className="mt-6 mx-auto max-w-3xl text-xl leading-9 text-slate-400">
            Build together, execute instantly and experience
            modern collaborative coding with DevSync.
          </div>


            <div className="mt-12 flex justify-center gap-5">

              <Link
                to="/register"
                className="
                  text-xl
                  inline-flex
                  h-14
                  items-center
                  gap-1
                  rounded-full
                  bg-gradient-to-r
                  from-purple-600
                  to-purple-500
                  px-9
                  font-semibold
                  text-white
                  shadow-[0_0_20px_rgba(139,92,246,0.3)]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]
                  min-w-[130px]
                  translate-x-2
                  flex justify-center
                "
              >
                Start Free

                <ArrowRight size={22} className="ml-2" />

              </Link>

              <Link
                to="/login"
                className="
                  inline-flex
                  h-14
                  items-center
                  rounded-full
                  border
                  border-slate-700
                  px-9
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-purple-500
                  hover:bg-[#110820]
                  min-w-[70px]
                  flex justify-center
                "
              >
                Login
              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}