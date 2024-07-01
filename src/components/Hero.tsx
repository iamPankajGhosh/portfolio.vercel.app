import { FaArrowTrendUp, FaArrowUpRightFromSquare } from "react-icons/fa6";
import GradientButton from "./ui/gradient-button";
import Particles from "./ui/particles";
import WordPullUp from "./ui/word-pull-up";

const Hero = () => {
  return (
    <section className="relative flex flex-col w-full items-center justify-center px-4 py-[150px] overflow-hidden">
      <div className="absolute top-0 right-0 py-2 px-4 flex items-center gap-2">
        <FaArrowTrendUp />
        <p className="text-[10px] text-stone-400 ">
          Optimizing scroll smoothness ASAP
        </p>
      </div>

      <p className="uppercase mb-4 text-center text-xs md:text-sm tracking-widest md:tracking-[0.2em]">
        Crafting Interactive Web Experiences With Next.js
      </p>

      <WordPullUp
        words="Turning Ideas into Amazing User Experiences"
        className="text-5xl font-bold tracking-[-0.02em] text-black dark:text-white sm:text-6xl md:text-7xl md:leading-[5rem] mb-10 text-center sm:max-w-[80vw]"
      />

      <p className="text-center text-lg md:text-2xl md:tracking-wider tracking-wide mb-10 sm:max-w-[70vw]">
        Namaste! I&apos;m Pankaj, bringing Next.js expertise to web development
        projects across India.
      </p>

      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      <GradientButton
        words="See my works"
        icons={<FaArrowUpRightFromSquare />}
        iconPosition="right"
        to="Projects"
      />
    </section>
  );
};

export default Hero;
