import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import GradientButton from "./ui/gradient-button";
import Particles from "./ui/particles";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="relative flex flex-col w-full items-center justify-center px-4 py-[150px] overflow-hidden">
      <p className="text-3xl font-bold tracking-[-0.02em] text-black dark:text-white sm:text-4xl md:text-5xl mb-10 text-center sm:max-w-[80vw] md:max-w-[40vw]">
        Ready to take your digital presence to the next level?
      </p>

      <p className="text-center text-lg md:tracking-wider tracking-wide mb-10 sm:max-w-[70vw] md:max-w-[60vw]">
        Reach out to me today and let&apos;s discuss how I can help you to
        achieve your goals.
      </p>

      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      <GradientButton
        words="Let's get in touch"
        icons={<FaArrowUpRightFromSquare />}
        iconPosition="right"
      />

      <div className="absolute bottom-0 left-0 w-full flex items-center justify-between px-8 py-10">
        <p>Copyright © 2024 Pankaj Ghosh</p>
        <div className="flex gap-4">
          <Link
            href={"https://github.com/iamPankajGhosh"}
            className="p-2 rounded-lg border-2 border-stone-800 bg-stone-900"
          >
            <FaGithub size={26} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/impankajghosh/"}
            className="p-2 rounded-lg border-2 border-stone-800 bg-stone-900"
          >
            <FaLinkedin size={26} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
