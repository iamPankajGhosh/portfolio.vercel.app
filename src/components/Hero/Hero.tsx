import { heroText } from "@/data/content";
import { Spotlight } from "../ui/Spotlight";
import GridBackground from "../ui/GridBackground";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import GradientBorderButton from "../ui/GradientBorderButton";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex justify-center items-center">
      <GridBackground />

      <Spotlight className="-top-40 left-40" fill="#475569" />
      <Spotlight className="-top-10 left-10" fill="#475569" />
      <Spotlight className="top-40 left-10" fill="#475569" />

      <Spotlight
        className="-top-40 right-40"
        fill="#475569"
        animateFrom="right"
      />
      <Spotlight
        className="-top-10 right-10"
        fill="#475569"
        animateFrom="right"
      />
      <Spotlight
        className="top-40 right-10"
        fill="#475569"
        animateFrom="right"
      />

      <div className="absolute p-5 top-0 pt-[40%] md:pt-[14%] text-center md:max-w-[70vw]">
        <p className="uppercase text-xs px-6 md:text-sm tracking-[0.2em]">
          {heroText.line1}
        </p>

        <TextGenerateEffect words={heroText.heading} />

        <p className="md:text-lg md:tracking-wide mb-10">{heroText.greeting}</p>

        <GradientBorderButton
          word={heroText.btnText}
          icons={<FaArrowUpRightFromSquare />}
        />
      </div>
    </div>
  );
};

export default Hero;
