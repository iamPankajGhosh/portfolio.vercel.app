import { RxArrowTopRight } from "react-icons/rx";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Hero = () => {
  const spotlightColor = "#475569";
  return (
    <div className="relative flex flex-col justify-center items-center">
      {/* grid-background */}
      <div className="h-[50rem] w-full dark:bg-primary bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-deep-primary bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* left spotlights */}
      <Spotlight
        className="absolute -top-44 left-44"
        fill={spotlightColor}
        opacity="0.2"
      />

      <Spotlight
        className="absolute -top-28 left-0"
        fill={spotlightColor}
        opacity="0.5"
      />

      <Spotlight
        className="absolute top-28 left-0"
        fill={spotlightColor}
        opacity="0.2"
      />

      {/* right spotlights */}
      <Spotlight
        className="absolute -top-44 right-44"
        fill={spotlightColor}
        opacity="0.2"
        startWith="right"
      />

      <Spotlight
        className="absolute -top-28 right-0"
        fill={spotlightColor}
        opacity="0.5"
        startWith="right"
      />

      <Spotlight
        className="absolute top-28 right-0"
        fill={spotlightColor}
        opacity="0.2"
        startWith="right"
      />

      <div className="absolute top-[20%] text-center max-w-[70vw]">
        <p className="uppercase tracking-[0.25em] text-sm">
          Crafting Interactive Web Experiences with Next.js
        </p>

        <TextGenerateEffect words="Turning Ideas into Amazing User Experiences" />

        <p className="mt-6 text-xl font-light tracking-wide">
          Namaste! I&apos;m Pankaj, bringing Next.js expertise to web
          development projects across India.
        </p>

        <button className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none mt-8">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span
            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-8 text-white backdrop-blur-3xl space-x-1"
            style={{
              background: "rgb(0,3,25)",
              backgroundImage:
                "linear-gradient(90deg, rgba(9,13,39,1) 0%, rgba(0,3,25,1) 100%)",
            }}
          >
            <span className="font-medium">View my creations</span>
            <RxArrowTopRight size={22} style={{ strokeWidth: 0.5 }} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
