"use client";

import { motion } from "framer-motion";
import { JourneyItem } from "./JourneySlide";

interface JourneyProgressProps {
  journey: readonly JourneyItem[];
  activeSlide: number;
}

export default function JourneyProgress({
  journey,
  activeSlide,
}: JourneyProgressProps) {
  return (
    <aside className="absolute right-10 top-1/2 z-40 -translate-y-1/2">
      <div className="flex flex-col items-center gap-5">

        {/* Current Step */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            Progress
          </p>

          <motion.h3
            key={activeSlide}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-2 text-4xl font-bold text-white"
          >
            {String(activeSlide + 1).padStart(2, "0")}
          </motion.h3>

          <p className="mt-1 text-xs text-white/45">
            / {String(journey.length).padStart(2, "0")}
          </p>
        </div>

        {/* Progress Line */}
        <div className="relative h-72 w-[3px] rounded-full bg-white/10">

          <motion.div
            className="absolute left-0 top-0 w-full rounded-full bg-orange-500"
            animate={{
              height: `${
                ((activeSlide + 1) / journey.length) * 100
              }%`,
            }}
            transition={{
              duration: 0.45,
              ease: "easeInOut",
            }}
          />

          {/* Dots */}
          {journey.map((item, index) => {
            const active = index <= activeSlide;

            return (
              <motion.div
                key={item.id}
                animate={{
                  scale: active ? 1.1 : 1,
                }}
                transition={{
                  duration: 0.25,
                }}
                className={`absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 ${
                  active
                    ? "border-orange-500 bg-orange-500"
                    : "border-white/20 bg-[#111]"
                }`}
                style={{
                  top: `calc(${(index / (journey.length - 1)) * 100}% - 8px)`,
                }}
              />
            );
          })}
        </div>

        {/* Current Section */}
        <motion.div
          key={journey[activeSlide].nav}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <p className="text-sm font-medium tracking-wide text-orange-400">
            {journey[activeSlide].nav}
          </p>

          <p className="mt-1 max-w-[90px] text-center text-[11px] leading-5 text-white/45">
            {journey[activeSlide].step}
          </p>
        </motion.div>
      </div>
    </aside>
  );
}