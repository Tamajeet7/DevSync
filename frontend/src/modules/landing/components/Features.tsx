import FeatureGrid from "./FeatureGrid";

export default function Features() {
  return (
    <section
      className="relative bg-[#090E17]"
      id="features"
    >
      <div
        className="mx-auto max-w-[1700px]"
        style={{
          paddingLeft: "96px",
          paddingRight: "96px",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        {/* Heading */}

        <div className="max-w-[760px] -translate-y-4">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              px-5
              py-2
              text-sm
              font-semibold
              text-cyan-300
              min-w-[120px]
              flex justify-center
            "
          >
            WHY DEVSYNC
          </span>

          <h2
            className="
              mt-8
              text-5xl
              font-black
              leading-tight
              tracking-tight
              text-white
            "
          >
            Everything you need to code
            together in one place.
          </h2>

          <p
            className="
              mt-6
              max-w-[620px]
              text-xl
              leading-9
              text-slate-400
            "
          >
            DevSync combines collaborative editing,
            instant execution and secure room sharing
            into one seamless developer experience.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20">

          <FeatureGrid />

        </div>

      </div>

    </section>
  );
}