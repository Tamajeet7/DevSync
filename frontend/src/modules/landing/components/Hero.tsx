import BackgroundGlow from "./BackgroundGlow";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#030005]"
    >
      {/* Background */}

      <BackgroundGlow />

      {/* Container */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[700px]
          max-w-[1700px]
          items-center
          py-20
        "
        style={{
          paddingLeft: "96px",
          paddingRight: "96px",
        }}
      >
        {/* Left */}

        <div
          className="
            flex
            w-[46%]
            items-center
          "
        >
          <HeroLeft />
        </div>

        {/* Right */}

        <div
            className="
                flex
                w-[54%]
                justify-end
                pl-8
            "
            >
          <HeroRight />
        </div>
      </div>

      {/* Bottom Fade */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-40
          w-full
          bg-gradient-to-b
          from-transparent
          to-[#030005]
        "
      />
    </section>
  );
}