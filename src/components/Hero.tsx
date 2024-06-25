import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import GradientButton from "./ui/gradient-button";
import Particles from "./ui/particles";
import WordPullUp from "./ui/word-pull-up";

const Hero = () => {
  return (
    <section className="relative flex flex-col w-full min-h-[100vh] md:min-h-[120vh] items-center justify-center px-4 overflow-hidden">
      <p className="uppercase mb-4 text-center text-xs md:text-sm tracking-widest md:tracking-[0.2em]">
        Dynamic Web Magic With Next.js
      </p>

      <WordPullUp
        words="Transforming Concepts into Seamless User Experiences"
        className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-10 text-center"
      />

      <p className="text-center text-lg md:text-2xl md:tracking-wider tracking-wide mb-10">
        Hi! I&apos;m Pankaj, a Next.js Developer based in India.
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
      />
    </section>
  );
};

export default Hero;
