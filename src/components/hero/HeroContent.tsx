"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="relative max-w-4xl py-10  pt-2 lg:py-27">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#E26743]/25 bg-[#E26743]/8 px-4 py-2 text-sm text-[#E7DEC7]"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#E26743]" />
        Admissions Open · New Batch 2026
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="max-w-5xl font-serif text-[clamp(3.2rem,7vw,7rem)] sm:text-[clamp(3.4rem,7vw,7.6rem)] font-medium leading-[0.91] tracking-[-0.055em] text-[#F1EAD8]"
      >
        Best IT Training
        <br />
        Institute{" "}
        <span className="italic text-[#E26743]">
          in Bhopal.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.35,
          duration: 0.8,
        }}
        className="mt-8 max-w-2xl text-base leading-8 text-[#C9B699] md:text-lg"
      >
        Learn Data Analytics, MERN Stack, Python, Java Full Stack,
        Data Science and AI through live projects, expert mentorship,
        interview preparation and placement assistance.
      </motion.p>

      <HeroButtons />

      <HeroStats />
    </div>
  );
}