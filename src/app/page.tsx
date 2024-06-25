import About from "@/components/About";
import Contact from "@/components/Contact";
import FloatingNavbar from "@/components/FloatingNavbar";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full mx-auto items-center">
      <FloatingNavbar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </main>
  );
}
