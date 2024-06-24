const GridBackground = () => {
  return (
    <div className="h-[100vh] md:h-[120vh] w-full bg-grid-white/[0.08] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-deep-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
};

export default GridBackground;
