"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Search,
  Bell,
  Settings,
  Users,
  LayoutDashboard,
  FolderKanban,
  Smartphone,
  Database,
  BrainCircuit,
  Globe,
  Activity,
  GitBranch,
  Cloud,
  CheckCircle2,
} from "lucide-react";

import { useRef, useEffect, useState } from "react";

export default function ProjectsScreen() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [particles, setParticles] = useState<
  {
    left: number;
    top: number;
    duration: number;
    delay: number;
  }[]
>([]);

useEffect(() => {
  setParticles(
    Array.from({ length: 18 }, () => ({
      left: 8 + Math.random() * 84,
      top: 8 + Math.random() * 84,
      duration: 5 + Math.random() * 4,
      delay: Math.random() * 4,
    }))
  );
}, []);
  const rotateX = useSpring(
    useTransform(mouseY, [-250, 250], [8, -8]),
    { stiffness: 120, damping: 20 }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-250, 250], [-8, 8]),
    { stiffness: 120, damping: 20 }
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = containerRef.current?.getBoundingClientRect();

    if (!rect) return;

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
    >
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div className="absolute inset-0">

        <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute right-[-120px] bottom-[-150px] h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[160px]" />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        <svg
  className="absolute inset-0 h-full w-full opacity-[0.05]"
  viewBox="0 0 1600 900"
>

  <path
    d="M220 240 L560 240 L700 420"
    stroke="white"
    strokeWidth="2"
    fill="none"
  />

  <path
    d="M700 420 L980 420 L1260 640"
    stroke="white"
    strokeWidth="2"
    fill="none"
  />

  <path
    d="M700 420 L960 180"
    stroke="white"
    strokeWidth="2"
    fill="none"
  />

</svg>

        {/* Watermark */}

        <motion.h1
          animate={{
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[180px] font-black tracking-[30px] text-white"
        >
          PROJECTS
        </motion.h1>
      </div>

      {/* ==========================================
            HERO APPLICATION
      ========================================== */}

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1800,
        }}
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.92,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="relative h-[540px] w-[920px] overflow-hidden rounded-[34px] border border-white/10 bg-[#0d1117] shadow-[0_40px_120px_rgba(0,0,0,.55)]"
      >
        {/* Top Bar */}

        <div className="flex h-14 items-center justify-between border-b border-white/10 bg-[#111827] px-6">

          <div className="flex items-center gap-3">

            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />

            <div className="ml-5 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              Attendance Management System
            </div>

          </div>

          <div className="flex items-center gap-4 text-zinc-400">

            <Search size={18} />
            <Bell size={18} />
            <Settings size={18} />

            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="h-9 w-9 rounded-full border border-white/10"
            />

          </div>
        </div>

        {/* MAIN */}

        <div className="flex h-[466px]">

          {/* SIDEBAR */}

          <aside className="flex w-20 flex-col items-center justify-between border-r border-white/10 bg-[#111827] py-8">

            <div className="space-y-7 text-zinc-500">

              <LayoutDashboard size={22} />

              <FolderKanban
                size={22}
                className="text-cyan-400"
              />

              <Users size={22} />

              <Database size={22} />

              <BrainCircuit size={22} />

              <Smartphone size={22} />

              <Globe size={22} />

            </div>

            <Activity
              className="text-green-400"
              size={22}
            />

          </aside>

          {/* CONTENT */}

          <div className="relative flex-1 overflow-hidden bg-[#0f172a]">

            {/* Decorative glow */}

            <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="absolute bottom-[-150px] left-[30%] h-[280px] w-[280px] rounded-full bg-violet-500/10 blur-[120px]" />

          {/* ==========================================
      DASHBOARD CONTENT
========================================== */}

<div className="relative z-10 p-8">

  {/* KPI ROW */}

  <div className="grid grid-cols-4 gap-5">

    {[
      {
        title: "Employees",
        value: "248",
        color: "text-cyan-400",
      },
      {
        title: "Present",
        value: "231",
        color: "text-green-400",
      },
      {
        title: "Absent",
        value: "17",
        color: "text-red-400",
      },
      {
        title: "Projects",
        value: "12",
        color: "text-violet-400",
      },
    ].map((card) => (
      <motion.div
        key={card.title}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="rounded-2xl border border-white/10 bg-[#161b22] p-5 shadow-lg"
      >
        <p className="text-xs uppercase tracking-[3px] text-zinc-500">
          {card.title}
        </p>

        <h3
          className={`mt-3 text-3xl font-bold ${card.color}`}
        >
          {card.value}
        </h3>
      </motion.div>
    ))}

  </div>

  {/* MAIN AREA */}

  <div className="mt-7 grid grid-cols-12 gap-6">

    {/* LEFT */}

    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: .8 }}
      className="col-span-8 rounded-3xl border border-white/10 bg-[#161b22] p-6"
    >

      <div className="mb-5 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold text-white">
            Today's Attendance
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Live employee activity
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-green-500/15 px-4 py-2 text-xs font-medium text-green-400">

          <CheckCircle2 size={14} />

          LIVE

        </div>

      </div>

      {/* TABLE */}

      <div className="overflow-hidden rounded-2xl border border-white/10">

        <div className="grid grid-cols-4 border-b border-white/10 bg-[#0f172a] px-5 py-4 text-xs uppercase tracking-[2px] text-zinc-500">

          <span>Employee</span>
          <span>Status</span>
          <span>Punch In</span>
          <span>Hours</span>

        </div>

        {[
          ["Rahul Sharma", "Present", "09:21", "7h 42m"],
          ["Priya Singh", "Present", "09:04", "8h 05m"],
          ["Ankit Verma", "Remote", "09:40", "6h 10m"],
          ["Neha Patel", "Present", "08:57", "8h 21m"],
          ["Amit Joshi", "Leave", "-", "-"],
        ].map((emp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: index * .08,
            }}
            className="grid grid-cols-4 border-b border-white/5 px-5 py-4 text-sm text-zinc-300 transition hover:bg-white/5"
          >
            <span>{emp[0]}</span>

            <span
              className={
                emp[1] === "Present"
                  ? "text-green-400"
                  : emp[1] === "Remote"
                  ? "text-cyan-400"
                  : "text-red-400"
              }
            >
              {emp[1]}
            </span>

            <span>{emp[2]}</span>

            <span>{emp[3]}</span>

          </motion.div>
        ))}

      </div>

    </motion.div>

    {/* RIGHT */}

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: .8 }}
      className="col-span-4 space-y-6"
    >

      {/* ACTIVITY */}

      <div className="rounded-3xl border border-white/10 bg-[#161b22] p-6">

        <h3 className="text-lg font-semibold">
          Recent Activity
        </h3>

        <div className="mt-5 space-y-5">

          {[
            "Attendance synced",
            "Payroll generated",
            "Employee added",
            "Report exported",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3"
            >
              <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

              <span className="text-sm text-zinc-300">
                {item}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* TECHNOLOGIES */}

      <div className="rounded-3xl border border-white/10 bg-[#161b22] p-6">

        <h3 className="mb-5 text-lg font-semibold">
          Stack Used
        </h3>

        <div className="flex flex-wrap gap-3">

          {[
            "React",
            "Next.js",
            "Node",
            "MongoDB",
            "Flutter",
            "AI",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-xl border border-white/10 bg-[#0f172a] px-4 py-2 text-xs text-zinc-300"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>

    </motion.div>

  </div>

</div>

          </div>

        </div>

      </motion.div>

     {/* ===========================================================
        GITHUB PANEL
=========================================================== */}

<motion.div
  initial={{
    opacity: 0,
    x: -60,
    rotate: -6,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    rotate: -4,
  }}
  transition={{
    duration: .9,
    delay: .25,
  }}
  animate={{
    y: [0, -5, 0],
  }}
  style={{
    transformOrigin: "center",
  }}
  className="absolute left-24 top-20 w-[250px] rounded-3xl border border-zinc-700 bg-[#161b22] shadow-[0_25px_70px_rgba(0,0,0,.45)]"
>

  <div className="border-b border-zinc-700 px-5 py-4">

    <div className="flex items-center gap-3">

      <GitBranch size={20} />

      <span className="font-medium">
        Git Activity
      </span>

    </div>

  </div>

  <div className="space-y-4 p-5">

    {[
      "Attendance API merged",
      "Dashboard UI updated",
      "Flutter sync fixed",
      "Reports optimized",
    ].map((item, index) => (

      <div
        key={index}
        className="flex gap-3"
      >

        <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

        <div>

          <p className="text-sm text-zinc-200">
            {item}
          </p>

          <p className="mt-1 text-xs text-zinc-500">
            2 hours ago
          </p>

        </div>

      </div>

    ))}

  </div>

</motion.div>

{/* ===========================================================
        PHONE MOCKUP
=========================================================== */}

<motion.div
  initial={{
    opacity: 0,
    y: 80,
    rotate: 8,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    rotate: 6,
  }}
  transition={{
    duration: 1,
    delay: .35,
  }}
  animate={{
    y: [0, -8, 0],
  }}
  className="absolute bottom-6 left-32"
>

  <div className="w-[170px] rounded-[38px] border-[8px] border-black bg-black p-2 shadow-[0_30px_90px_rgba(0,0,0,.45)]">

    <div className="overflow-hidden rounded-[28px] bg-[#0f172a]">

      <div className="flex justify-center py-2">

        <div className="h-1.5 w-16 rounded-full bg-zinc-700" />

      </div>

      <div className="px-5 pb-6 pt-3">

        <div className="text-center">

          <p className="text-xs uppercase tracking-[3px] text-zinc-500">
            Attendance
          </p>

          <h3 className="mt-2 text-xl font-bold">
            09:32 AM
          </h3>

        </div>

        <div className="mt-8 rounded-2xl bg-green-500 px-4 py-4 text-center font-semibold text-black">

          Punch In

        </div>

        <div className="mt-5 rounded-2xl bg-[#161b22] p-4">

          <p className="text-xs text-zinc-500">
            Status
          </p>

          <p className="mt-2 font-medium text-green-400">
            Working
          </p>

        </div>

      </div>

    </div>

  </div>

</motion.div>

{/* ===========================================================
        DEPLOYMENT PANEL
=========================================================== */}

<motion.div
  initial={{
    opacity: 0,
    x: 70,
    rotate: 6,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    rotate: 4,
  }}
  transition={{
    duration: .9,
    delay: .4,
  }}
  animate={{
    y: [0, 4, 0],
  }}
  className="absolute right-24 bottom-10 w-[260px] rounded-3xl border border-zinc-700 bg-[#161b22] shadow-[0_30px_80px_rgba(0,0,0,.45)]"
>

  <div className="border-b border-zinc-700 p-5">

    <div className="flex items-center gap-3">

      <Cloud
        size={20}
        className="text-cyan-400"
      />

      <span className="font-medium">
        Deployment
      </span>

    </div>

  </div>

  <div className="space-y-5 p-5">

    <div>

      <p className="text-xs uppercase tracking-[2px] text-zinc-500">
        Environment
      </p>

      <div className="mt-2 flex items-center gap-2">

        <CheckCircle2
          size={18}
          className="text-green-400"
        />

        <span className="font-medium text-green-400">
          Production
        </span>

      </div>

    </div>

    <div>

      <p className="text-xs uppercase tracking-[2px] text-zinc-500">
        Domain
      </p>

      <p className="mt-2 text-sm text-zinc-300">
        attendance.dndc.in
      </p>

    </div>

    <div>

      <p className="text-xs uppercase tracking-[2px] text-zinc-500">
        Last Deploy
      </p>

      <p className="mt-2 text-sm text-zinc-300">
        12 sec ago
      </p>

    </div>

  </div>

</motion.div>

{/* ==========================================
      AMBIENT PARTICLES
========================================== */}

{particles.map((particle, index) => (
  <motion.div
    key={index}
    className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400/40"
    style={{
      left: `${particle.left}%`,
      top: `${particle.top}%`,
    }}
    animate={{
      y: [0, -18, 0],
      opacity: [0.2, 0.8, 0.2],
      scale: [1, 1.5, 1],
    }}
    transition={{
      duration: particle.duration,
      repeat: Infinity,
      delay: particle.delay,
    }}
  />
))}

    </div>
  );
}