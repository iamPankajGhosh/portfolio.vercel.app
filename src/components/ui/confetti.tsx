"use client";

import { useState } from "react";
import GradientButton from "./gradient-button";
import confetti from "canvas-confetti";
import { FaClone } from "react-icons/fa6";

export function ConfettiFireworks() {
  const [btnWord, setBtnWord] = useState("Copy my email address");

  const handleClick = () => {
    navigator.clipboard.writeText("work.pankajghosh@gmail.com");
    setBtnWord("Email copied!");

    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <div className="relative">
      <GradientButton
        onClick={handleClick}
        words={btnWord}
        className="top-10 md:top-36"
        icons={<FaClone />}
        iconPosition="left"
      />
    </div>
  );
}
