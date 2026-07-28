"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  BarChart3,
  Braces,
  GraduationCap,
  Terminal,
} from "lucide-react";

const modes = [
  {
    id: "campus",
    label: "Inside DNDC",
    icon: GraduationCap,
  },
  {
    id: "data",
    label: "Data Lab",
    icon: BarChart3,
  },
  {
    id: "code",
    label: "Dev Mode",
    icon: Braces,
  },
];

export default function HeroVisual() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % modes.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.2,
        delay: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative mx-auto w-full max-w-[520px] lg:mb-20 lg:mx-0"
    >
      <div className="absolute -inset-10 sm:-inset-20 bg-[#E26743]/10 blur-[100px] sm:blur-[130px]" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#14110E]/90 shadow-2xl backdrop-blur-xl">
        
        {/* TOP BAR */}

        <div className="flex items-center justify-between border-b border-white/10 px-4 sm:px-5 py-3 sm:py-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#E26743]" />
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#C9B699]/30" />
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#C9B699]/15" />
          </div>

          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#C9B699]">
            DNDC / LIVE SYSTEM
          </span>
        </div>

        {/* SCREEN */}

        {/* Scaled down height for mobile to prevent taking up the whole screen */}
        <div className="relative h-[350px] sm:h-[500px] overflow-hidden">
          <AnimatePresence mode="wait">
            {active === 0 && <CampusScreen key="campus" />}

            {active === 1 && <DataScreen key="data" />}

            {active === 2 && <CodeScreen key="code" />}
          </AnimatePresence>
        </div>

        {/* MODE SELECTOR */}

        <div className="grid grid-cols-3 border-t border-white/10">
          {modes.map((mode, index) => {
            const Icon = mode.icon;

            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActive(index)}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2 py-3 sm:px-3 sm:py-4 text-[10px] sm:text-xs transition ${
                  active === index
                    ? "bg-[#E26743] text-[#0E0C0A]"
                    : "text-[#C9B699] hover:bg-white/5"
                }`}
              >
                <Icon size={14} className="sm:w-[15px] sm:h-[15px]" />

                {mode.label}
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        
        className="absolute -right-2 top-8 sm:-right-10 sm:top-16 rounded-2xl border border-white/10 bg-[#1D1815]/90 p-3 sm:p-4 backdrop-blur-xl scale-90 sm:scale-100 origin-right"
      >
        <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#C9B699]">
          Learning Status
        </p>

        <p className="mt-1 sm:mt-2 font-serif text-lg sm:text-xl text-[#F1EAD8]">
          Building Skills
        </p>

        <div className="mt-2 sm:mt-3 h-1.5 w-24 sm:w-32 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "82%" }}
            transition={{
              duration: 2,
              delay: 1,
            }}
            className="h-full bg-[#E26743]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function Screen({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        scale: 0.97,
        filter: "blur(8px)",
      }}
      transition={{
        duration: 0.7,
      }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  );
}

function CampusScreen() {
  return (
    <Screen>
      <Image
        src="/g1.jpeg"
        alt="Students and mentors at DNDC IT Training Institute Bhopal"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 520px"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-transparent to-black/20" />

      <div className="absolute left-4 top-4 sm:left-6 sm:top-6 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] backdrop-blur-md text-white">
        Inside DNDC
      </div>

      <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#E26743]">
          Bhopal Campus
        </p>

        <h3 className="mt-1 sm:mt-2 font-serif text-3xl sm:text-4xl text-[#F1EAD8]">
          Learn. Build.
          <br />
          Grow.
        </h3>
      </div>
    </Screen>
  );
}

function DataScreen() {
  const bars = [38, 62, 48, 76, 58, 88, 72];

  return (
    <Screen>
      <div className="h-full p-5 sm:p-7">
        <p className="font-mono text-[10px] sm:text-xs text-[#E26743]">
          analytics.dashboard
        </p>

        <h3 className="mt-3 sm:mt-4 font-serif text-3xl sm:text-4xl text-[#F1EAD8]">
          Turn data into
          <br />
          decisions.
        </h3>

        {/* Scaled down height for mobile */}
        <div className="mt-6 sm:mt-10 flex h-36 sm:h-52 items-end gap-2 sm:gap-3">
          {bars.map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              className="relative flex-1 rounded-t-md sm:rounded-t-lg bg-[#E26743]"
            >
              <span className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 font-mono text-[8px] sm:text-[9px] text-[#C9B699]">
                {height}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 sm:mt-7 grid grid-cols-3 gap-2 sm:gap-3">
          {["SQL", "Power BI", "Python"].map((skill) => (
            <div
              key={skill}
              className="rounded-lg sm:rounded-xl border border-white/10 bg-white/[0.03] p-2 sm:p-3 text-center text-[10px] sm:text-xs text-[#C9B699]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}

function CodeScreen() {
  return (
    <Screen>
      <div className="h-full p-5 sm:p-7 font-mono">
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-[#C9B699]">
          <Terminal size={14} className="sm:w-[15px] sm:h-[15px]" />
          student@dndc
        </div>

        <div className="mt-6 sm:mt-10 space-y-2 sm:space-y-3 text-xs sm:text-sm leading-6 sm:leading-7 text-[#F1EAD8]">
          <CodeLine delay={0}>
            <span className="text-[#E26743]">const</span>{" "}
            student = {"{"}
          </CodeLine>

          <CodeLine delay={0.2}>
            &nbsp;&nbsp;skills: [
            <span className="text-[#C9B699]">&quot;React&quot;</span>,
          </CodeLine>

          <CodeLine delay={0.4}>
            &nbsp;&nbsp;
            <span className="text-[#C9B699]">&quot;Next.js&quot;</span>,
          </CodeLine>

          <CodeLine delay={0.6}>
            &nbsp;&nbsp;
            <span className="text-[#C9B699]">&quot;Node.js&quot;</span>
            ],
          </CodeLine>

          <CodeLine delay={0.8}>
            &nbsp;&nbsp;readyToBuild:{" "}
            <span className="text-[#E26743]">true</span>,
          </CodeLine>

          <CodeLine delay={1}>{"};"}</CodeLine>

          <CodeLine delay={1.3}>
            <span className="text-[#E26743]">&gt;</span>{" "}
            Starting career...
          </CodeLine>

          <CodeLine delay={1.7}>
            <span className="text-[#E26743]">✓</span>{" "}
            Live projects enabled
          </CodeLine>

          <CodeLine delay={2}>
            <span className="text-[#E26743]">✓</span>{" "}
            Mentor connected
          </CodeLine>

          <CodeLine delay={2.3}>
            <span className="text-[#E26743]">✓</span>{" "}
            Interview mode ready
          </CodeLine>
        </div>
      </div>
    </Screen>
  );
}

function CodeLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -15,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay,
        duration: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
}