"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { useLeadPopup } from "@/context/LeadPopupContext";
import { notify } from "@/lib/toast";

// Animation variants for the cinematic text reveall
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

export default function AboutHero() {
  // We split the words so they can wrap perfectly on any screen size
  const titleWords = [
    { text: "WE", color: "text-zinc-900" },
    { text: "DON'T", color: "text-zinc-900" },
    { text: "JUST", color: "text-zinc-900" },
    { text: "TEACH.", color: "text-zinc-900" },
    { text: "WE", color: "text-zinc-900" },
    { text: "BUILD", color: "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400" },
    { text: "CAREERS.", color: "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400" },
  ];

  const { openPopup } = useLeadPopup();
     const handlePortalClick = () => {
      notify.success(
        "Student Portal is coming soon!"
      );
    };

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-[#FDFBF7] selection:bg-orange-500 selection:text-white">
      
      {/* --- Apple-Style Breadcrumb Navigation --- */}
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
                className="!text-zinc-400 transition-colors hover:text-orange-500"
              >
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4 text-zinc-950" strokeWidth={2.5} />
            </li>
            <li className="text-zinc-900" aria-current="page">
              About
            </li>
          </ol>
        </div>
      </motion.nav>

      {/* --- Ambient Background --- */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        {/* Soft Noise Texture */}
        <div 
          className="absolute inset-0 z-10 opacity-[0.025] mix-blend-multiply"
          style={{ backgroundImage: "url('/noise.png')" }}
        />
        
        {/* Animated Glow Orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: 90 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] right-[5%] h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-orange-300/30 to-orange-100/10 blur-[100px] sm:h-[600px] sm:w-[600px]"
        />
        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] left-[5%] h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-orange-200/40 to-transparent blur-[100px] sm:h-[500px] sm:w-[500px]"
        />
      </div>

      {/* --- Main Content --- */}
      {/* Added pb-32 so content never overlaps the scroll hint on small phones */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col items-center justify-center px-5 pb-32 pt-18 text-center sm:px-8">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/60 px-4 py-1.5 shadow-sm backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-orange-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-orange-700">
            About DNDC Institute
          </span>
        </motion.div>

        {/* Cinematic Heading Reveal (Responsive Flex Wrap) */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex max-w-5xl flex-wrap justify-center gap-x-4 gap-y-2 text-5xl font-black uppercase leading-[1.04] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]"
        >
          {titleWords.map((word, index) => (
            <motion.span 
              key={index} 
              variants={wordVariants} 
              className={`inline-block ${word.color} pb-1 sm:pb-2`}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-zinc-500 sm:text-lg lg:text-xl"
        >
          At Data & Development Center, we combine practical learning, real-world projects, and expert mentorship to help students become highly confident professionals in today's tech industry.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-5 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:gap-5"
        >
          <button
            type="button"
          onClick={() => openPopup("Book Demo", "Hero Section")}
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-zinc-900 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-zinc-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-orange-500/30 sm:w-auto"
          >
            Book Free Demo
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
          type="button"
          onClick={handlePortalClick}
            className="flex w-full items-center justify-center rounded-full border-2 !border-zinc-200/80 bg-white/60 px-8 py-4 text-sm font-bold !text-zinc-700 backdrop-blur-sm transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 hover:!text-orange-600 sm:w-auto"
          >
            Student Portal
          </button>
        </motion.div>
      </div>

      {/* --- Scroll Hint --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 sm:bottom-10"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
          Scroll to Discover
        </span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-[2px] rounded-full bg-gradient-to-b from-orange-400 to-transparent sm:h-12" 
        />
      </motion.div>
        
    </section>
  );
}