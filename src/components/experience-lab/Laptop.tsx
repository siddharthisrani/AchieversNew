"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Laptop({
  children,
}: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
      }}
      className="relative mx-auto max-w-[950px]"
    >
      {/* Shadow */}

      <div className="absolute bottom-0 left-1/2 h-10 w-[70%] -translate-x-1/2 rounded-full bg-black/20 blur-3xl" />

      {/* Screen */}

      <div className="rounded-[28px] border border-neutral-300 bg-[#1A1A1A] p-3 shadow-[0_40px_120px_rgba(0,0,0,.25)]">

        <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-black">

          {/* Camera */}
          <motion.div
  animate={{
    x: ["-120%", "180%"],
  }}
  transition={{
    repeat: Infinity,
    duration: 7,
    ease: "linear",
  }}
  className="pointer-events-none absolute inset-y-0 w-28 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"
/>

          <div className="absolute left-1/2 top-3 z-30 h-3 w-3 -translate-x-1/2 rounded-full bg-neutral-700" />

          {children}

        </div>

      </div>

      {/* Laptop Base */}

<div className="relative mx-auto h-8 w-[98%] rounded-b-[26px] bg-gradient-to-b from-[#E5E5E5] via-[#CFCFCF] to-[#AFAFAF] shadow-inner">

  {/* Speaker Left */}
  <div className="absolute left-8 top-2 grid grid-cols-6 gap-[2px] opacity-50">
    {Array.from({ length: 24 }).map((_, i) => (
      <span
        key={i}
        className="h-[2px] w-[2px] rounded-full bg-neutral-600"
      />
    ))}
  </div>

  {/* Speaker Right */}
  <div className="absolute right-8 top-2 grid grid-cols-6 gap-[2px] opacity-50">
    {Array.from({ length: 24 }).map((_, i) => (
      <span
        key={i}
        className="h-[2px] w-[2px] rounded-full bg-neutral-600"
      />
    ))}
  </div>

  {/* Trackpad */}

  <div className="absolute left-1/2 top-3 h-3 w-44 -translate-x-1/2 rounded-full border border-neutral-500/40 bg-[#BEBEBE]" />

</div>

    </motion.div>
  );
}