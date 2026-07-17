import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PreviewSection() {
  return (
    <section className="bg-[#030005]">

      <div
        className="mx-auto max-w-[1700px]"
        style={{
          paddingLeft: "96px",
          paddingRight: "96px",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >

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
            PRODUCT PREVIEW
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Built for collaborative development.
          </h2>

          <div className="mt-6 mx-auto max-w-3xl text-xl leading-9 text-slate-400">
            Experience live collaboration, synchronized editing,
            instant execution and modern tooling in one seamless
            developer workspace.
          </div>

        </motion.div>

        {/* Preview Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="
            mt-20
            overflow-hidden
            rounded-[32px]
            border
            border-slate-800
            bg-[#111827]
            shadow-2xl
            shadow-purple-500/10
          "
        >

          {/* Browser */}

          <div className="flex h-16 items-center gap-3 border-b border-slate-800 px-8 translate-x-5">

            <div className="h-3 w-3 rounded-full bg-red-400" />

            <div className="h-3 w-3 rounded-full bg-yellow-400" />

            <div className="h-3 w-3 rounded-full bg-green-400" />

          </div>

          {/* Screenshot Placeholder */}

          <div
            className="
              flex
              h-[650px]
              items-center
              justify-center
              bg-gradient-to-br
              from-[#111827]
              via-[#0F172A]
              to-[#111827]
            "
          >

            <div className="text-center">

              <div
                className="
                  mx-auto
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-3xl
                  bg-purple-500/10
                  text-5xl
                "
              >
                💻
              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">
                DevSync Workspace
              </h3>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
                Replace this placeholder with a real screenshot
                of your collaborative editor after completing
                the application.
              </p>

              <Link
                to="/register"
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-purple-600
                  to-purple-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-[0_0_20px_rgba(139,92,246,0.3)]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]
                "
              >
                Try DevSync

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}