import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

const FloatingNavbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return <FloatingNav navItems={navItems} className="rounded-lg" />;
};

export default FloatingNavbar;
