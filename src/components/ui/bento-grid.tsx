import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("grid w-full grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
}: {
  name: string;
  className: string;
  background?: React.ReactNode;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col items-center justify-between overflow-hidden rounded-xl bg-stone-950",
      className
    )}
  >
    <div className="flex items-center justify-center">{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-5">
      <h3 className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#74ebd5] to-[#ffffff] bg-clip-text pt-10 md:pt-0 text-3xl font-bold tracking-tighter text-transparent">
        {name}
      </h3>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
