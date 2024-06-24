"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-xl bg-deep-primary shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] items-center justify-center space-x-8 py-5 px-12",
          className
        )}
        style={{
          background: "rgb(0,3,25)",
          backgroundImage:
            "linear-gradient(90deg, rgba(0,3,25,1) 0%, rgba(9,13,39,1) 100%)",
        }}
      >
        {navItems.map((navItem: any) => (
          <Link key={navItem.name} href={navItem.link}>
            <span className="text-sm leading-6 hover:text-violet-300">
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNavbar;
