"use client";

import { useEffect } from "react";
import { Element, animateScroll as scroll } from "react-scroll";

import { About } from "@/components/About";
import Contact from "@/components/Contact";
import FloatingNavbar from "@/components/FloatingNavbar";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <main className="flex flex-col min-h-screen w-full mx-auto items-center">
      <FloatingNavbar />
      <Element name="Home" className="w-full">
        <Hero />
      </Element>
      <Element name="About" className="w-full">
        <About />
      </Element>
      <Element name="Projects" className="w-full">
        <Project />
      </Element>
      <Element name="Contact" className="w-full">
        <Contact />
      </Element>
    </main>
  );
}
