"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Laptop,
  Bell,
  BriefcaseBusiness,
} from "lucide-react";

export default function CareerScreen() {
  return (
    <div className="relative  flex h-full w-full items-center justify-center overflow-hidden">

      {/* ===========================================================
          BACKGROUND
      =========================================================== */}

      <div className="absolute inset-0">

        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[130px]" />

        <div className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[150px]" />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* WATERMARK */}

        <motion.h1
          animate={{
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[170px] font-black tracking-[25px] text-white"
        >
          CAREER
        </motion.h1>
      </div>

      {/* ===========================================================
          LAPTOP
      =========================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
          scale: .92,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: .9,
        }}
        className="relative"
      >

        {/* SHADOW */}

        <div className="absolute left-1/2 top-[92%] h-16 w-[520px] -translate-x-1/2 rounded-full bg-black/60 blur-3xl" />

        {/* SCREEN */}

        <div className="relative  h-[500px] w-[980px] overflow-hidden rounded-[28px] border border-zinc-700 bg-[#111827] shadow-[0_40px_120px_rgba(0,0,0,.55)]">

          {/* Reflection */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />

          {/* TOP BAR */}

          <div className="flex h-14 items-center justify-between border-b border-zinc-700 px-6">

            <div className="flex items-center gap-3">

              <Laptop
                size={18}
                className="text-orange-400"
              />

              <span className="font-medium text-zinc-200">
                Developer Workspace
              </span>

            </div>

            <div className="flex items-center gap-5 text-zinc-400">

              <CalendarDays size={18} />

              <Bell size={18} />

              <BriefcaseBusiness
                size={18}
                className="text-orange-400"
              />

            </div>

          </div>

          {/* CONTENT */}

          <div className="relative  h-[446px] overflow-hidden bg-[#0d1117]">

            <div className="absolute right-[-100px] top-[-100px] h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute bottom-[-100px] left-[-80px] h-[240px] w-[240px] rounded-full bg-blue-500/10 blur-[120px]" />

           {/* ===========================================================
      WORKSPACE
=========================================================== */}

<div className="grid h-full grid-cols-14">

  {/* LEFT */}

  <div className="col-span-9 border-r border-zinc-800">

    {/* Editor Header */}

    <div className="flex h-12 items-center justify-between border-b border-zinc-800 bg-[#111827] px-5">

      <div className="flex items-center gap-3">

        <div className="h-3 w-3 rounded-full bg-orange-400" />

        <span className="text-sm text-zinc-300">
          dashboard.tsx
        </span>

      </div>

      <span className="text-xs text-green-400">
        ✓ Synced
      </span>

    </div>

    {/* Code Area */}

    {/* ===========================================================
      LIVE PRODUCT PREVIEW
=========================================================== */}

<div className="h-[394px] bg-[#0b1220] p-7">

  {/* Product Header */}

  <div className="flex items-center justify-between">

    <div className="ml-43">

      <p className="text-xs uppercase tracking-[3px] text-zinc-500">
        Active Project
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Smart HR Dashboard
      </h2>

    </div>

    <div className="rounded-full bg-green-500/15 px-4 py-2">

      <span className="text-sm font-medium text-green-400">
        ● Live
      </span>

    </div>

  </div>

  {/* KPI */}

  <div className="mt-7 grid grid-cols-3 gap-2">

    {[
      {
        title: "Employees",
        value: "248",
        color: "text-cyan-400",
      },
      {
        title: "Attendance",
        value: "94%",
        color: "text-green-400",
      },
      {
        title: "Tasks",
        value: "31",
        color: "text-orange-400",
      },
    ].map((item) => (

      <div
        key={item.title}
        className="rounded-2xl border border-zinc-700 bg-[#141b28] p-5"
      >

        <p className="text-xs uppercase tracking-[2px] text-zinc-500">
          {item.title}
        </p>

        <h3
          className={`mt-3 text-3xl font-bold ${item.color}`}
        >
          {item.value}
        </h3>

      </div>

    ))}

  </div>

  {/* Main Preview */}

  <div className="mt-7 grid grid-cols-12 gap-5">

    {/* Dashboard */}

    <div className="col-span-9 rounded-3xl border border-zinc-700 bg-[#141b28] px-5 py-4">

      <div className="mb-5 flex items-center justify-between">

        <h3 className="font-semibold">
          Team Productivity
        </h3>

        <span className="text-sm text-zinc-500">
          Last 30 Days
        </span>

      </div>

      <div className="flex h-40 items-end gap-3">

        {[45,70,55,80,62,92,76,95].map((h, i)=>(

          <motion.div
            key={i}
            initial={{ height:0 }}
            whileInView={{ height:`${h}%` }}
            transition={{
              duration:.8,
              delay:i*.08
            }}
            className="flex-1 rounded-t-xl bg-gradient-to-t from-orange-500 to-amber-300"
          />

        ))}

      </div>

    </div>

    {/* Activity */}

    <div className="col-span-3 rounded-3xl border border-zinc-700 bg-[#141b28] p-5">

      <h3 className="mb-5 font-semibold">
        Recent Updates
      </h3>

      <div className="space-y-4">

        {[
          "Dashboard deployed",
          "Client approved UI",
          "API integrated",
          "Version 2.0 Released",
        ].map((item)=>(

          <div
            key={item}
            className="flex items-center gap-3"
          >

            <div className="h-2 w-2 rounded-full bg-green-400"/>

            <span className="text-sm text-zinc-300">
              {item}
            </span>

          </div>

        ))}

      </div>

    </div>

  </div>

</div>

  </div>

  {/* RIGHT */}

  <div className="col-span-3 bg-[#111827]">

    {/* Today's Schedule */}

    <div className="border-b border-zinc-800 p-6">

      <p className="text-xs uppercase tracking-[3px] text-zinc-500">
        Today
      </p>

      <h3 className="mt-2 text-xl font-semibold">
        Work Schedule
      </h3>

      <div className="mt-6 space-y-4">

        {[
          ["09:30", "Sprint Planning"],
          ["11:00", "Daily Standup"],
          ["02:00", "Client Meeting"],
          ["05:30", "Deployment"],
        ].map(([time, task]) => (

          <div
            key={task}
            className="flex items-center justify-between rounded-xl bg-[#1b2330] px-4 py-3"
          >

            <span className="text-orange-400">
              {time}
            </span>

            <span className="text-sm text-zinc-300">
              {task}
            </span>

          </div>

        ))}

      </div>

    </div>

    {/* Team Message */}

    <div className="p-6">

      <p className="text-xs uppercase tracking-[3px] text-zinc-500">
        Team Chat
      </p>

      <div className="mt-5 rounded-2xl bg-[#1b2330] p-5">

        <p className="text-sm text-zinc-400">
          Team Lead
        </p>

        <h3 className="mt-2 text-lg font-semibold">
          Welcome to the team! 🎉
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Great work on your onboarding.
          Your first project has been assigned.
        </p>

      </div>

      <div className="mt-5 rounded-2xl bg-orange-500/15 p-5">

        <p className="text-xs uppercase tracking-[2px] text-orange-300">
          Current Project
        </p>

        <h3 className="mt-2 text-lg font-semibold">
          AI Attendance Platform
        </h3>

      </div>

    </div>

  </div>

</div>

          </div>

        </div>

        {/* LAPTOP BASE */}

        <div className="mx-auto h-4 w-[1040px] rounded-b-[60px] bg-gradient-to-b from-zinc-500 to-zinc-800" />

      </motion.div>

      {/* Calendar */}

      {/* Part 3 */}

      {/* Salary */}

      {/* Part 3 */}

      {/* Teams */}

      {/* Part 3 */}

    </div>
  );
}