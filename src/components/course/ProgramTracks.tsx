"use client";

import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { BookOpen, Clock, Target } from "lucide-react";
import { Course } from "@/types/course";

type Props = {
  course: Course;
};

const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: customEase, staggerChildren: 0.1 } 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { duration: 0.3, ease: customEase } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: customEase } }
};

export default function ProgramTracks({ course }: Props) {
  const [active, setActive] = useState(0);
  const tier = course.tiers[active];

  return (
    <section className="relative bg-[#F4F1EB] py-20 md:py-32 selection:bg-orange-500 selection:text-white">
      
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{ backgroundImage: "url('/noise.png')" }}
      />
      
      {/* Soft Glow */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-orange-400/5 blur-[120px] pointer-events-none" />
</div>
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 lg:px-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 rounded-full border border-orange-200/60 bg-white/50 px-4 py-1.5 backdrop-blur-sm shadow-sm"
          >
            <BookOpen size={14} className="text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-700">
              Learning Journey
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl md:text-6xl"
          >
            Choose your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">program pace</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-zinc-500"
          >
            Select the pace that matches your learning goals. Every track at DNDC leads to the same outcome, just at a different speed.
          </motion.p>
        </div>

        {/* --- Segmented Tab Selector (MOBILE OPTIMIZED) --- */}
        {/* Added overflow-x-auto for horizontal scrolling and removed max-w restriction */}
      {/* --- Segmented Tab Selector (PERFECT MOBILE FIX) --- */}
        <div className="mt-12 w-full sm:mt-16">
          <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
          
          <div 
            className="no-scrollbar w-full overflow-x-auto pb-4 pt-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {/* The min-w-full w-max combo allows centering on desktop while preventing layout breakage on mobile */}
            <div className="flex min-w-full w-max px-1 lg:justify-center">
              <div className="relative flex w-max items-center gap-1 rounded-full border border-zinc-200 bg-white/70 p-1.5 shadow-sm backdrop-blur-md">
                {course.tiers.map((item, index) => {
                  const isActive = active === index;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setActive(index)}
                      className={`relative z-10 whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition-colors sm:px-7 ${
                        isActive ? "text-white" : "text-zinc-500 hover:text-zinc-900"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 -z-10 rounded-full bg-zinc-900 shadow-md"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* --- Active Tier Content --- */}
        <div className="mt-12 lg:mt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={tier.name}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col gap-12 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start"
            >
              
              {/* Left Column: Tier Meta Data */}
              <div className="w-full lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
                <div className="rounded-[2rem] border border-white bg-white/90 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl md:p-10">
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    <Badge icon={<Clock size={14} />}>{tier.duration}</Badge>
                    <Badge icon={<Target size={14} />}>{tier.level}</Badge>
                  </div>

                  <h3 className="text-3xl font-black tracking-tight text-zinc-900 md:text-4xl">
                    {tier.name}
                  </h3>
                  
                  <p className="mt-6 text-base font-medium leading-relaxed text-zinc-600">
                    {tier.blurb}
                  </p>

                  <div className="mt-10 h-px w-full bg-gradient-to-r from-zinc-200 to-transparent" />
                  
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm font-bold text-zinc-900">Total Modules</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-lg font-black text-orange-600">
                      {tier.modules.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Modules Timeline */}
              <div className="w-full lg:col-span-7">
                {/* Increased mobile left margin (ml-6) so the absolute nodes don't get cut off */}
                <div className="relative ml-6 border-l-2 border-zinc-200/80 sm:ml-8 lg:ml-0">
                  {tier.modules.map((module, i) => (
                    <motion.div
                      variants={itemVariants}
                      key={module.t + i}
                      className="group relative pb-12 pl-8 last:pb-0 sm:pl-10"
                    >
                      {/* Timeline Node */}
                      <div className="absolute left-[-17px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-[4px] border-[#F4F1EB] bg-zinc-300 transition-colors duration-300 group-hover:bg-orange-500">
                        <span className="text-[10px] font-black text-white">
                          {i + 1}
                        </span>
                      </div>

                      {/* Content Box */}
                      <div className="pt-0.5">
                        <h4 className="text-xl font-bold text-zinc-900 transition-colors duration-300 group-hover:text-orange-600">
                          {module.t}
                        </h4>
                        <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-600">
                          {module.d}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
}

// --- Subcomponents ---

function Badge({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-[#F4F1EB]/50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-zinc-600 shadow-sm">
      <span className="text-orange-500">{icon}</span>
      {children}
    </span>
  );
}