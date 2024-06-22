import Hero from "@/components/Hero/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";

const HomePage = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <div className="relative w-full overflow-hidden">
      <FloatingNav navItems={navItems} />
      <Hero />
    </div>
  );
};

export default HomePage;
