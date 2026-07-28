"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Download,
  Award,
  BriefcaseBusiness,
  FolderKanban,
  Users,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useLeadPopup } from "@/context/LeadPopupContext";

type Props = {
  courseName: string;
};

const features = [
  {
    icon: FolderKanban,
    title: "Live Projects",
  },
  {
    icon: BriefcaseBusiness,
    title: "Placement Assistant", // Updated to your exact institute standard
  },
  {
    icon: Award,
    title: "Industry Certificate",
  },
  {
    icon: Users,
    title: "Expert Mentors",
  },
];

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Students Trained",
  },
  {
    value: 50,
    suffix: "+",
    label: "Industry Projects",
  },
  {
    value: 20,
    suffix: "+",
    label: "Professional Courses",
  },
  {
    value: 100,
    suffix: "+",
    label: "Hiring Partners",
  },
];

// Upgraded Counter using Framer Motion physics for buttery smooth counting
function Counter({ end, suffix }: { end: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });


  useEffect(() => {
    if (inView) {
      animate(count, end, { duration: 2.5, ease: "easeOut" });
    }
  }, [inView, count, end]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function FinalCTASection({ courseName }: Props) {
  // Prevents Next.js Hydration errors with random math
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
   const { openPopup } = useLeadPopup();


  const scrollToAdmission = () => {
    // Assuming the admission form is above this section. 
    // Change "admission-form" to the actual ID of your form container.
    const section = document.getElementById("admission-form") || document.getElementById("admission");
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 lg:py-32 selection:bg-orange-500 selection:text-white">
      
      {/* --- Background Glows --- */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-[200px] sm:h-[700px] sm:w-[700px]" />
        <div className="absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-orange-600/10 blur-[150px] sm:h-[400px] sm:w-[400px]" />
      </div>

      {/* --- Hydration-Safe Floating Particles --- */}
      {mounted && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -40, 0], opacity: [0.1, 0.6, 0.1] }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
              className="absolute h-1 w-1 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.8)]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      )}

      {/* --- Subtle Grid Pattern --- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* --- Massive Watermark --- */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h1 className="select-none text-[28vw] font-black uppercase tracking-widest text-white/[0.05] sm:text-[22vw]">
          DNDC
        </h1>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-10">
        
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400 sm:text-sm">
            Your Future Starts Here
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Build Your Career <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">
            With {courseName}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg sm:leading-8"
        >
          Learn from experienced mentors, work on real-world projects, earn an industry-recognized certificate, and prepare yourself for high-paying career opportunities.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex w-full flex-col gap-4 sm:mt-14 sm:w-auto sm:flex-row sm:gap-6"
        >
          <button 
           onClick={() =>
          openPopup(
          "Admission",
          `${courseName} Course Page`
    )
  }
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_15px_40px_rgba(249,115,22,0.4)] sm:w-auto"
          >
            Apply Now
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button className="group flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-xl transition-all duration-300 hover:border-orange-400 hover:bg-white/10 hover:text-orange-400 sm:w-auto">
            Download Brochure
            <Download className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6"
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.04]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 transition-colors duration-300 group-hover:bg-orange-500/20">
                  <Icon className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="mt-5 text-center text-lg font-bold text-white transition-colors group-hover:text-orange-300">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 grid w-full grid-cols-2 gap-8 divide-x-0 divide-white/10 border-y border-white/10 py-12 md:grid-cols-4 md:divide-x"
        >
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <h3 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
                <Counter end={item.value} suffix={item.suffix} />
              </h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-zinc-500 sm:mt-3 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Footer Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex w-full flex-col items-center justify-center gap-6 text-zinc-400 sm:flex-row sm:gap-12 lg:mt-16"
        >
          <a href="tel:+919876543210" className="flex items-center gap-3 transition-colors hover:text-orange-400">
            <Phone className="h-5 w-5 text-orange-500" />
            <span className="font-medium">+91 6261437008</span>
          </a>

          <a href="mailto:admissions@dndc.in" className="flex items-center gap-3 transition-colors hover:text-orange-400">
            <Mail className="h-5 w-5 text-orange-500" />
            <span className="font-medium">dndc.bpl@gmail.com</span>
          </a>

          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-orange-500" />
            <span className="font-medium">MP Nagar Zone-1, Bhopal</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}