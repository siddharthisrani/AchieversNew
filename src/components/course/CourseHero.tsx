"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion, Variants, useAnimation } from "framer-motion";
import { ArrowRight, Download, Sparkles, MapPin, CheckCircle2,ChevronRight } from "lucide-react";
import { Course } from "@/types/course";
import { useLeadPopup } from "@/context/LeadPopupContext";

type Props = {
  course: Course;
};

// Custom Easing for that buttery-smooth Apple-like feel
const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Variants for cinematic text reveal (sliding up from behind a mask)
const revealVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: { 
    y: "0%", 
    opacity: 1, 
    transition: { duration: 1.2, ease: customEase } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function CourseHero({ course }: Props) {
  const reduceMotion = useReducedMotion();
  const applyRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { openPopup } = useLeadPopup();

  // Magnetic Button Logic
  function handleButtonMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (reduceMotion || !applyRef.current) return;
    const rect = applyRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    applyRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }

  function handleButtonLeave() {
    if (!applyRef.current) return;
    applyRef.current.style.transform = "translate(0px, 0px)";
  }

  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-[#FDFBF7] selection:bg-orange-500 selection:text-white">
      
      {/* ------------------------------------------------ */}
      {/* --- Apple-Style Breadcrumb Navigation ---        */}
      {/* ------------------------------------------------ */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute left-4 top-6 z-50 sm:left-10 sm:top-10"
      >
        <div className="flex items-center rounded-full border border-zinc-200/80 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md">
          <ol className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest sm:text-sm">
            <li>
              <Link 
                href="/" 
                className="!text-zinc-500 transition-colors hover:text-orange-500"
              >
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4 text-zinc-400" strokeWidth={2.5} />
            </li>
            <li className="text-zinc-900" aria-current="page">
              {course.name}
            </li>
          </ol>
        </div>
      </motion.nav>
      
      {/* ------------------------------------------------ */}
      {/* 1. Ambient Background & Lighting                   */}
      {/* ------------------------------------------------ */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        {/* Soft Noise Texture */}
        <div 
          className="absolute inset-0 z-10 opacity-[0.03] mix-blend-multiply"
          style={{ backgroundImage: "url('/noise.png')" }}
        />
        
        {/* Dynamic Light Orbs */}
        <motion.div
          animate={reduceMotion ? {} : { 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -right-[10%] top-[-10%] h-[800px] w-[800px] rounded-full bg-gradient-to-br from-orange-200/40 to-orange-400/10 blur-[120px]"
        />
        <motion.div
          animate={reduceMotion ? {} : { 
            rotate: -360,
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -left-[10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-orange-100/50 to-transparent blur-[100px]"
        />
      </div>

      {/* ------------------------------------------------ */}
      {/* 2. Main Content Grid                               */}
      {/* ------------------------------------------------ */}
      <div className="relative z-10 mx-auto flex min-h-[95vh] max-w-[1440px] flex-col justify-center px-6 py-10 sm:py-28 lg:flex-row lg:items-center lg:px-12 xl:px-24">
        
        {/* Left Column: Typography */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full pt-10 lg:w-[55%] lg:pt-0"
        >
          {/* Institute Tag */}
          <div className="overflow-hidden pb-4">
            <motion.div variants={revealVariants} className="flex items-center gap-2">
              <span className="flex h-6 items-center rounded-full bg-orange-100 px-3 text-[10px] font-bold uppercase tracking-widest text-orange-600">
                DNDC Institute
              </span>
              <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                {course.category}
              </span>
            </motion.div>
          </div>

          {/* Massive Editorial Title */}
          <h1 className="flex flex-col text-[13vw] font-black leading-[1.2] tracking-[-0.04em] text-zinc-900 md:text-[8vw] lg:text-[6.5rem] xl:text-[6.5rem]">
            <div className="overflow-hidden pb-0 pt-0">
              <motion.div variants={revealVariants}>
                {course.titleLines[0]}
              </motion.div>
            </div>
            <div className="overflow-hidden pb-2 pt-0">
              <motion.div variants={revealVariants} className="flex items-center gap-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                  {course.titleLines[1]}
                </span>
                {/* Decorative Sparkle for balance */}
                <Sparkles className="hidden h-12 w-12 text-orange-400 md:block" strokeWidth={1.5} />
              </motion.div>
            </div>
          </h1>

          <div className="overflow-hidden">
            <motion.p 
              variants={revealVariants}
              className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-zinc-500 lg:text-xl"
            >
              {course.sub}
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div 
            variants={revealVariants}
            className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center"
          >
        <button
         ref={applyRef}
         onClick={() =>
          openPopup(
          "Admission",
          `${course.name} Course Page`
    )
  }
          onMouseMove={handleButtonMove}
          onMouseLeave={handleButtonLeave}
          onMouseEnter={() => setIsHovered(true)}

              className="group relative flex items-center gap-3 rounded-full bg-zinc-900 px-8 py-4 text-sm font-bold text-white shadow-2xl transition-all duration-300 ease-out hover:bg-orange-500 hover:shadow-orange-500/30"
              style={{ transition: "transform 0.2s ease-out, background 0.3s ease" }}
            >
              <span>Apply for Batch</span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="group flex items-center gap-2 text-sm font-bold text-zinc-600 transition-colors hover:text-orange-500">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 transition-colors group-hover:border-orange-200 group-hover:bg-orange-50">
                <Download size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              </span>
              Download Syllabus
            </button>
          </motion.div>

          {/* Highlights */}
          <motion.div variants={revealVariants} className="mt-12 flex items-center gap-6 text-sm font-semibold text-zinc-500">
             <div className="flex items-center gap-2">
               <CheckCircle2 size={16} className="text-orange-500" />
               <span>Placement Assistant</span>
             </div>
             <div className="flex items-center gap-2">
               <MapPin size={16} className="text-orange-500" />
               <span>Bhopal, MP</span>
             </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Editorial Glass Panels */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: customEase }}
          className="relative mt-16 w-full lg:mt-0 lg:w-[45%]"
        >
          {/* Main Glass Canvas */}
          <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 p-8 shadow-[0_40px_100px_rgba(0,0,0,0.05)] backdrop-blur-3xl lg:p-12">
            
            <div className="mb-8 flex items-center justify-between">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
                Course DNA
              </h3>
              <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            </div>

            {/* Dynamic Tech Grid */}
            <div className="flex flex-wrap gap-2">
              {course.stack.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + (i * 0.05) }}
                  className="rounded-xl border border-white/50 bg-white/60 px-4 py-2 text-sm font-bold text-zinc-700 shadow-sm backdrop-blur-md transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
                >
                  {tech}
                </motion.div>
              ))}
            </div>

            <div className="my-10 h-[1px] w-full bg-gradient-to-r from-zinc-200 via-zinc-200 to-transparent" />

            {/* Stats Grid inside Panel */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Duration</p>
                <p className="mt-2 text-2xl font-black text-zinc-900">{course.tiers.at(-1)?.duration}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Fee</p>
                <p className="mt-2 text-2xl font-black text-orange-600">{course.fee}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Next Batch</p>
                <p className="mt-2 text-lg font-bold text-zinc-800">{course.nextBatch}</p>
              </div>
               <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Mode</p>
                <p className="mt-2 text-lg font-bold text-zinc-800">{course.mode}</p>
              </div>
            </div>
          </div>

          {/* Decorative Background Panel (creates a 3D stacked effect) */}
          <div className="absolute -right-6 -top-6 -z-10 h-full w-full rounded-[2.5rem] border border-orange-200/50 bg-orange-50/50 backdrop-blur-sm lg:-right-10 lg:-top-10" />
        </motion.div>

      </div>
    </section>
  );
}