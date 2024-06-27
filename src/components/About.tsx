import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Globe from "./ui/globe";
import TechStackCard from "./TechStackCard";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import GradientButton from "./ui/gradient-button";
import RetroGrid from "./ui/retro-grid";
import { WavyBackground } from "./ui/wavy-background";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { ConfettiFireworks } from "./ui/confetti";

const features = [
  {
    name: "I focus on working closely with clients and keeping communication open.",
    background: <WavyBackground />,
    className: "md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-2",
  },
  {
    name: "I'm open to communicating in any time zone.",
    background: <Globe className="md:top-20" />,
    className: "md:row-start-1 md:row-end-4 md:col-start-2 md:col-end-3",
  },
  {
    name: "I'm currently working on creating a React Native mobile app.",
    background: <RetroGrid className="top-0" />,
    className: "md:row-start-1 md:row-end-2 md:col-start-3 md:col-end-3",
  },
  {
    name: "Would you like to begin a project together?",
    background: (
      <>
        <BackgroundGradientAnimation />
        <ConfettiFireworks />
      </>
    ),
    className: "md:row-start-3 md:row-end-5 md:col-start-1 md:col-end-2",
  },
  {
    name: "I always try to make my tech tools better.",
    background: <TechStackCard />,
    className: "md:row-start-2 md:row-end-5 md:col-start-3 md:col-end-3",
  },
  {
    name: "A person who loves technology and enjoys creating new things.",
    background: (
      <AnimatedGridPattern
        numSquares={10}
        maxOpacity={0.08}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    ),
    className: "md:row-start-4 md:row-end-5 md:col-start-2 md:col-end-2",
  },
];

export function About() {
  return (
    <section className="relative flex flex-col w-full items-center justify-center px-4 md:px-10 overflow-hidden">
      <BentoGrid className="md:grid-rows-6 md:max-w-[90vw]">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
