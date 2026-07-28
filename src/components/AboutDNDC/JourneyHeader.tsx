"use client";

import { motion } from "framer-motion";
import { JourneyItem } from "./JourneySlide";

interface JourneyHeaderProps {
  journey: readonly JourneyItem[];
  activeSlide: number;
  onNavigate?: (index: number) => void;
}

export default function JourneyHeader({
  journey,
  activeSlide,
  onNavigate,
}: JourneyHeaderProps) {
  return (
    <header className="absolute left-1/2 top-6 z-50 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-2xl">

        {journey.map((item, index) => {
          const active = index === activeSlide;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate?.(index)}
              className="relative overflow-hidden rounded-full px-5 py-2 text-sm font-medium transition-all duration-300"
            >
              {/* Active Background */}
              {active && (
                <motion.div
                  layoutId="activeJourneyTab"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                  className="absolute inset-0 rounded-full bg-orange-500"
                />
              )}

              {/* Text */}
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  active
                    ? "text-black"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {item.nav}
              </span>
            </button>
          );
        })}
      </div>
    </header>
  );
}