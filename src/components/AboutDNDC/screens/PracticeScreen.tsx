"use client";

import {
  Database,
  BarChart3,
  FileSpreadsheet,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";
import { useMemo ,useState,useEffect} from "react";


export default function PracticeScreen() {
  const particles = useMemo(
  () =>
    Array.from({ length: 16 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 4,
    })),
  []
);

const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#080808]">

      {/* Background Glow */}

      <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-[160px]" />

      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[180px]" />

      {/* Main Layout */}

      <div className="relative flex w-full items-center justify-between px-12">

        {/* ================================================= */}
        {/* LEFT CONTENT */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[380px]"
        >

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Step 02
          </span>

          <h2 className="mt-6 text-[46px] font-bold leading-[1.05] text-white">

            Practice
            <br />

            <span className="text-cyan-400">
              With Real Data.
            </span>

          </h2>

          <p className="mt-6 leading-8 text-white/60">

            {/* Work with industry datasets, uncover meaningful
            insights, build interactive dashboards and
            strengthen analytical thinking through practical
            challenges every day. */}

          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-8 flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
          >

            <Sparkles size={18} />

            Analyze Dataset

          </motion.button>

        </motion.div>

        {/* ================================================= */}
        {/* ANALYTICS LAB */}
        {/* ================================================= */}

<div className="relative w-[860px]">
          {/* Dashboard */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{ amount: 0.5 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111315] shadow-[0_40px_120px_rgba(0,0,0,.45)]"
          >

            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[30px]">

 <motion.div
    animate={{
      x: ["-120%", "140%"],
    }}
    transition={{
      repeat: Infinity,
      duration: 8,
      ease: "linear",
    }}
    className="absolute top-0 h-full w-32 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"
  />

               
</div>
           
            {/* Top Bar */}

            <div className="flex h-11 items-center justify-between border-b border-white/10 px-6">

              <div className="flex items-center gap-3">

               <div className="flex items-center gap-3">

  <Database
    size={18}
    className="text-cyan-400"
  />

</div>

                <span className="text-sm text-white/70">
                  DNDC Analytics Studio
                </span>

              </div>

              <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">

                <Database
                  size={15}
                  className="text-cyan-400"
                />

                <span className="text-xs text-white/60">
                  sales_2026.csv
                </span>

              </div>

            </div>

            {/* Workspace */}

            <div className="grid h-[420px] grid-cols-12 gap-6 bg-gradient-to-b from-[#17191d] to-[#101113] p-6">

              {/* KPI */}

              <div className="col-span-3 h-[190px] w-[140px] rounded-2xl border border-white/10 bg-white/5 p-5">

                <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                  Total Revenue
                </p>

                <h3 className="mt-2 text-3xl font-bold tracking-tight">
                  ₹8.4M
                </h3>

                <p className="mt-3 text-sm text-emerald-400">
                  ↑ 18.4% this month
                </p>

              </div>

              {/* Chart */}

              <div className="col-span-9 row-span-2 rounded-2xl border border-white/10 bg-white/5 p-5">

                <div className="mb-4 flex items-center gap-2">

                  <BarChart3
                    size={18}
                    className="text-cyan-400"
                  />

                  <span className="text-sm text-white">
                    Revenue Trend
                  </span>

                </div>

                {/* Graph Placeholder */}

                {/* Animated Revenue Graph */}

<div className="relative mt-2 h-[220px] overflow-hidden rounded-2xl">

  {/* Grid */}

  <div className="absolute inset-0 flex flex-col justify-between">

    {[1,2,3,4,5].map((i)=>(
      <div
        key={i}
        className="border-t border-white/[0.05]"
      />
    ))}

  </div>

  {/* SVG */}

  <svg
    viewBox="0 0 600 220"
    className="absolute inset-0 h-full w-full"
  >

    {/* Glow */}

    <defs>

      <linearGradient
        id="lineGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
      >

        <stop
          offset="0%"
          stopColor="#22d3ee"
        />

        <stop
          offset="100%"
          stopColor="#10b981"
        />

      </linearGradient>

      <filter id="glow">

        <feGaussianBlur
          stdDeviation="4"
          result="blur"
        />

        <feMerge>

          <feMergeNode in="blur"/>

          <feMergeNode in="SourceGraphic"/>

        </feMerge>

      </filter>

    </defs>

    {/* Area */}

    <motion.path
      d="M20 180 C90 160 120 120 170 135 C240 150 280 80 340 90 C400 100 430 40 500 60 C540 70 560 55 580 25 L580 220 L20 220 Z" fill="url(#lineGradient)" opacity=".12" initial={{ opacity:0 }} animate={{ opacity:.12 }} transition={{ duration:1.4 }}/>

    {/* Line */}

    <motion.path
      d="M20 180 C90 160 120 120 170 135 C240 150 280 80 340 90 C400 100 430 40 500 60 C540 70 560 55 580 25"
      fill="none"
      stroke="url(#lineGradient)"
      strokeWidth="5"
      strokeLinecap="round"
      filter="url(#glow)"
      initial={{
        pathLength:0
      }}
      whileInView={{
        pathLength:1
      }}
      transition={{
        duration:2,
        ease:"easeInOut"
      }}
    />

    {/* Animated Dot */}

    <motion.circle
      cx="580"
      cy="25"
      r="7"
      fill="#22d3ee"
      animate={{
        scale:[1,1.6,1]
      }}
      transition={{
        duration:2,
        repeat:Infinity
      }}
    />

  </svg>

  {/* Floating Labels */}

  <div className="absolute bottom-2 left-3 text-[11px] text-white/40">

    Jan

  </div>

  <div className="absolute bottom-2 left-28 text-[11px] text-white/40">

    Mar

  </div>

  <div className="absolute bottom-2 left-56 text-[11px] text-white/40">

    May

  </div>

  <div className="absolute bottom-2 left-[360px] text-[11px] text-white/40">

    Jul

  </div>

  <div className="absolute bottom-2 right-5 text-[11px] text-white/40">

    Sep

  </div>

</div>

              </div>

            </div>

          </motion.div>

          {/* Continue in Part 2 */}

                    {/* Floating Dataset Card */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
              rotate: -6,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: -2,
            }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-5 top-24 z-30 w-[250px] overflow-hidden rounded-[24px] border border-cyan-400/20 bg-zinc-900/90 shadow-2xl backdrop-blur"
          >

            <div className="border-b border-white/10 p-5">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15">

                  <FileSpreadsheet
                    size={24}
                    className="text-cyan-400"
                  />

                </div>

                <div>

                  <p className="text-sm font-semibold text-white">
                    sales_2026.csv
                  </p>

                  <p className="text-xs text-white/50">
                    Ready for Analysis
                  </p>

                </div>

              </div>

            </div>

            <div className="space-y-4 p-5">

              <div className="flex justify-between">

                <span className="text-white/50">
                  Rows
                </span>

                <span className="font-semibold text-white">
                  125,480
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-white/50">
                  Columns
                </span>

                <span className="font-semibold text-white">
                  18
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-white/50">
                  Missing Values
                </span>

                <span className="font-semibold text-emerald-400">
                  0
                </span>

              </div>

            </div>

          </motion.div>

          {/* AI Insight Card */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              rotate: 5,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 2,
            }}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-2 top-20 z-30 w-[220px] rounded-[24px] border border-emerald-400/20 bg-zinc-900/90 p-5 shadow-2xl backdrop-blur"
          >

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15">

                <BrainCircuit
                  size={24}
                  className="text-emerald-400"
                />

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  AI Insight
                </p>

                <h4 className="font-semibold text-white">
                  Analysis Complete
                </h4>

              </div>

            </div>

            <div className="mt-6 space-y-4">

              <div className="rounded-xl bg-white/5 p-4">

                <p className="text-xs text-white/40">
                  Best Performing Region
                </p>

                <p className="mt-2 font-semibold text-white">
                  West Zone
                </p>

              </div>

              <div className="rounded-xl bg-white/5 p-4">

                <p className="text-xs text-white/40">
                  Revenue Growth
                </p>

                <p className="mt-2 text-xl font-bold text-emerald-400">
                  +18.4%
                </p>

              </div>

            </div>

          </motion.div>

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    delay: 1,
    duration: 0.8,
  }}
  className="absolute bottom-24 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl"
>

  <motion.div
    animate={{
      scale: [1, 1.4, 1],
    }}
    transition={{
      repeat: Infinity,
      duration: 1.5,
    }}
    className="h-3 w-3 rounded-full bg-emerald-400"
  />

  <span className="text-sm text-white/70">
    Live dataset processing...
  </span>

</motion.div>

          {/* Bottom Tech Pills */}

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">

            {[
              "Python",
              "SQL",
              "Power BI",
              "Excel",
              "Pandas",
            ].map((item, index) => (

              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{
                  scale: 1.08,
                }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur"
              >

                {item}

              </motion.div>

            ))}

          </div>

        </div>

    </div>

      {/* Decorative Glow */}

      <div className="absolute bottom-12 left-1/2 h-24 w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[90px]" />

      <div className="absolute right-10 top-16 h-44 w-44 rounded-full bg-emerald-500/10 blur-[120px]" />

   {/* Floating Technologies */}

{[
  {
    text: "Python",
    top: "8%",
    left: "58%",
    color: "text-yellow-300/10",
  },
  {
    text: "SQL",
    top: "24%",
    left: "88%",
    color: "text-cyan-300/10",
  },
  {
    text: "Power BI",
    top: "72%",
    left: "83%",
    color: "text-amber-300/10",
  },
  {
    text: "Excel",
    top: "82%",
    left: "12%",
    color: "text-green-300/10",
  },
  {
    text: "Pandas",
    top: "15%",
    left: "22%",
    color: "text-indigo-300/10",
  },
  {
    text: "NumPy",
    top: "64%",
    left: "4%",
    color: "text-blue-300/10",
  },
].map((item, index) => (
  <motion.div
    key={item.text}
    animate={{
      y: [0, -18, 0],
    }}
    transition={{
      duration: 6 + index,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{
      top: item.top,
      left: item.left,
    }}
    className={`absolute text-3xl font-bold tracking-wide ${item.color} select-none`}
  >
    {item.text}
  </motion.div>
))}

{mounted &&
particles.map((particle, i) => (
  <motion.div
    key={i}
    animate={{
      y: [0, -25, 0],
      opacity: [0.2, 1, 0.2],
    }}
    transition={{
      duration: particle.duration,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{
      left: `${particle.left}%`,
      top: `${particle.top}%`,
    }}
    className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/40"
  />
))
}

    </div>

     );
}