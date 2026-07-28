"use client";

import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface CourseCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export default function CourseCard({
  title,
  description,
  href,
  icon: Icon,
}: CourseCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
        group
        relative
        h-full
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#E26743]/40
        hover:bg-white/[0.05]
        hover:shadow-[0_25px_60px_rgba(226,103,67,.18)]
      "
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E26743]/0 via-[#E26743]/0 to-[#E26743]/0 transition-all duration-300 group-hover:from-[#E26743]/5 group-hover:to-orange-500/5" />

        {/* Icon */}

        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E26743]/10 text-[#E26743] transition group-hover:rotate-6 group-hover:scale-110">
          <Icon size={26} />
        </div>

        {/* Title */}

        <h3 className="relative mt-6 text-lg font-semibold text-[#F1EAD8]">
          {title}
        </h3>

        {/* Description */}

        <p className="relative mt-3 text-sm leading-7 text-[#C9B699]">
          {description}
        </p>

        {/* Bottom */}

        <div className="relative mt-7 flex items-center justify-between">
          <span className="text-sm font-medium text-[#E26743]">
            Learn More
          </span>

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </div>
      </motion.div>
    </Link>
  );
}