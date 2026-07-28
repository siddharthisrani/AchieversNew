"use client";

import { motion } from "framer-motion";

const technologies = [
  "DATA ANALYTICS",
  "POWER BI",
  "MERN STACK",
  "NEXT.JS",
  "PYTHON",
  "JAVA",
  "SQL",
  "DATA SCIENCE",
  "AI / ML",
];

export default function TechRail() {
  const items = [...technologies, ...technologies];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#E26743] py-5 text-[#0E0C0A]">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max whitespace-nowrap"
      >
        {items.map((technology, index) => (
          <div
            key={`${technology}-${index}`}
            className="flex items-center"
          >
            <span className="px-8 font-mono text-xs font-semibold tracking-[0.22em] md:text-sm">
              {technology}
            </span>

            <span className="text-xl">✦</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}