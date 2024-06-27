"use client";

const GradientButton = ({
  words,
  icons,
  iconPosition,
  className,
  onClick,
}: {
  words?: string;
  icons?: React.ReactNode;
  iconPosition?: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`relative inline-flex h-12 w-full sm:w-fit overflow-hidden rounded-lg p-[1px] focus:outline-none ${className}`}
      onClick={onClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-stone-950 px-8 text-sm font-medium text-white backdrop-blur-3xl gap-2">
        {iconPosition === "left" && icons}
        {words}
        {iconPosition === "right" && icons}
      </span>
    </button>
  );
};

export default GradientButton;
