const GradientBorderButton = ({
  word,
  icons,
}: {
  word: string;
  icons?: React.ReactNode;
}) => {
  return (
    <button className="relative inline-flex h-14 w-full md:w-fit overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-8 py-1 text-sm font-semibold text-white gap-2 backdrop-blur-3xl">
        {word}
        {icons}
      </span>
    </button>
  );
};

export default GradientBorderButton;
