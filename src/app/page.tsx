import Hero from "@/components/Hero/Hero";
import FloatingNavbar from "@/components/Navber/FloatingNavbar";
import { navItems } from "@/data/content";

const HomePage = () => {
  return (
    <main className="relative w-full min-h-screen bg-primary">
      <FloatingNavbar navItems={navItems} />
      <Hero />
    </main>
  );
};

export default HomePage;
