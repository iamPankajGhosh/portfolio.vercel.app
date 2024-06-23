import Hero from "@/components/Hero/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/content";

const HomePage = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <FloatingNav navItems={navItems} />
      <Hero />
    </div>
  );
};

export default HomePage;
