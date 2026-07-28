"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0E0C0A]" />

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(241,234,216,.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(241,234,216,.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        animate={{
          x: [0, 100, -40, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-[650px] w-[650px] rounded-full bg-[#E26743]/15 blur-[160px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 70, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-48 bottom-[-150px] h-[600px] w-[600px] rounded-full bg-[#7C2D12]/20 blur-[180px]"
      />

      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#0E0C0A] to-transparent" />
    </div>
  );
}