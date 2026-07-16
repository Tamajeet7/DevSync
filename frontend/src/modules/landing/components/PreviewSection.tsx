import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PreviewSection() {
  return (
    <section className="bg-[#090E17]">

      <div
        className="mx-auto max-w-[1700px]"
        style={{
          paddingLeft: "96px",
          paddingRight: "96px",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >

        <div className="text-center">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-5
              py-2
              text-sm
              font-semibold
              text-cyan-300
              flex justify-center
              min-w-[150px]
              -translate-y-4
            "
          >
            PRODUCT PREVIEW
          </span>

          <h2 className="mt-8 text-5xl font-black text-white translate-x-4 -translate-y-3">
            Built for collaborative development.
          </h2>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-400">
            <div className="translate-x-73 -translate-y-2">
            Experience live collaboration, synchronized editing,
            instant execution and modern tooling in one seamless
            developer workspace.
            </div>
          </p>

        </div>

        {/* Preview Card */}

        <div
          className="
            mt-20
            overflow-hidden
            rounded-[32px]
            border
            border-slate-800
            bg-[#111827]
            shadow-2xl
            shadow-black/30
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
                  bg-blue-500/10
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
                  from-blue-500
                  to-blue-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                "
              >
                Try DevSync

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}