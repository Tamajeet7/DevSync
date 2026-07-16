import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-[#090E17]">

      <div
        className="mx-auto max-w-[1700px]"
        style={{
          paddingLeft: "96px",
          paddingRight: "96px",
          paddingTop: "80px",
          paddingBottom: "120px",
        }}
      >

        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-blue-500/20
            bg-gradient-to-br
            from-[#111827]
            via-[#101826]
            to-[#111827]
            px-20
            py-24
            min-h-[250px]
          "
        >

          {/* Glow */}

          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-500/15 blur-[140px]" />

          <div className="absolute -left-24 bottom-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="text-center translate-y-8">

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
            READY TO START?
          </span>

          <h2 className="mt-8 text-5xl font-black text-white translate-x-4 -translate-y-3">
            Start collaborating today.
          </h2>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-400">
            <div className="translate-x-73 -translate-y-2">
            Build together, execute instantly and experience
              modern collaborative coding with DevSync.
            </div>
          </p>


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
                  from-blue-500
                  to-blue-600
                  px-9
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  min-w-[130px]
                  translate-x-2
                  flex justify-center
                "
              >
                Start Free

                <ArrowRight size={22} />

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
                  transition
                  hover:border-blue-500
                  min-w-[70px]
                  flex justify-center
                "
              >
                Login
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}