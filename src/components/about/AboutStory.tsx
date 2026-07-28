"use client";

import { motion, Variants } from "framer-motion";
import { Target, Users, Zap, BookOpen } from "lucide-react";

const stats = [
  {
    icon: Target,
    value: "2026",
    label: "Established",
    accent: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Users,
    value: "6+",
    label: "Expert Mentors",
    accent: "text-zinc-800",
    bg: "bg-zinc-100",
  },
  {
    icon: Zap,
    value: "100%",
    label: "Practical Focus",
    accent: "text-orange-500",
    bg: "bg-orange-50",
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 20,
    },
  },
};

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-[#FDFBF7] py-24 lg:py-36 selection:bg-orange-500 selection:text-white">
      
      {/* --- Ambient Background --- */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.02] mix-blend-multiply"
        style={{ backgroundImage: "url('/noise.png')" }}
      />
      <div className="absolute left-0 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-300/15 blur-[150px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-orange-200/20 blur-[150px] pointer-events-none" />

      {/* --- Massive Background Typography --- */}
      <div className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 flex justify-center overflow-hidden w-full">
        <h1 className="select-none text-[18vw] font-black uppercase tracking-widest text-zinc-900/[0.05]">
          OUR STORY
        </h1>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-20 items-center">
          
          {/* --- Left Content: The Narrative --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                <BookOpen className="h-4 w-4 text-orange-600" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-600">
                The DNDC Vision
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              More Than an Institute. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                A Place to Build Your Future.
              </span>
            </h2>

            <div className="mt-10 relative">
              {/* Editorial Line Accent */}
              <div className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-orange-400 to-orange-200/20" />
              
              <div className="pl-6 space-y-6 text-lg font-medium leading-relaxed text-zinc-600 sm:text-xl sm:leading-9">
                <p>
                  At <strong className="text-zinc-900">Data & Development Center (DNDC)</strong>, we believe education should do more than teach concepts—it should prepare students to solve real-world problems with absolute confidence. Our goal is to bridge the massive gap between traditional learning and the rapidly evolving technology industry.
                </p>

                <p>
                  Every course is designed around practical projects, modern tools, and expert mentorship. Whether you are diving into Web Development, mastering Python and Java, or exploring Data Analytics and AI, we ensure you learn by building.
                </p>

                <p>
                  Instead of merely memorizing theory, DNDC provides a supportive, highly collaborative environment where learning becomes practical, and every line of code moves you closer to a high-paying career.
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- Right Content: Stats Bento Grid --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-5"
          >
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              
              {/* Stat Card 1 (Spans full width) */}
              <motion.div 
                variants={itemVariants}
                className="col-span-2 relative overflow-hidden rounded-[2rem] border border-orange-200/50 bg-white p-8 shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(249,115,22,0.1)]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/5 blur-2xl" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
                    <Target className="h-6 w-6 text-orange-600" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">Established</p>
                </div>
                <h3 className="text-5xl font-black tracking-tight text-zinc-900">2026</h3>
                <p className="mt-2 text-sm font-medium text-zinc-500">Rooted in Bhopal, focused on the global tech industry.</p>
              </motion.div>

              {/* Stat Card 2 */}
              <motion.div 
                variants={itemVariants}
                className="relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-zinc-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-200/50">
                  <Users className="h-5 w-5 text-zinc-700" />
                </div>
                <h3 className="text-4xl font-black tracking-tight text-zinc-900">6+</h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-zinc-500">Expert Mentors</p>
              </motion.div>

              {/* Stat Card 3 (Brand Accent) */}
              <motion.div 
                variants={itemVariants}
                className="relative overflow-hidden rounded-[2rem] border border-orange-500 bg-orange-500 p-6 shadow-xl shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
              >
                <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-white/20 blur-xl" />
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-4xl font-black tracking-tight text-white">100%</h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-orange-100">Practical Focus</p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}