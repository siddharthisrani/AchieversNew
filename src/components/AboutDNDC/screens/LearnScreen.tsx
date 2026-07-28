"use client";

import {
  Monitor,
  Code2,
  Globe,
  PlayCircle,
} from "lucide-react";

import { motion } from "framer-motion";

export default function LearnScreen() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#080808]">

      {/* Background Glow */}

      <div className="absolute left-20 top-16 h-56 w-56 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-24 h-64 w-64 rounded-full bg-orange-500/10 blur-[160px]" />

      {/* Main Layout */}

      <div className="relative flex w-full items-center justify-between px-12">

        {/* ================================================= */}
        {/* LEFT CONTENT */}
        {/* ================================================= */}

        <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="max-w-[360px]"
>

          <span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-300">
            Step 01
          </span>

          <h2 className="mt-6 text-[44px] font-bold leading-[1.05] text-white">

            Learn
            <br />

            <span className="text-orange-400">
              From Scratch.
            </span>

          </h2>

          <p className="mt-6 leading-8 text-white/60">

            Understand how websites are actually built.
            Watch your HTML instantly transform into a
            beautiful webpage before writing your own code.

          </p>

          <motion.button
  whileHover={{
    scale: 1.05,
  }}
  whileTap={{
    scale: 0.96,
  }}>

            <PlayCircle size={18} />

            Start Learning

       </motion.button>

      </motion.div>

        {/* ================================================= */}
        {/* RIGHT VISUAL */}
        {/* ================================================= */}

        <div className="relative w-[720px]">

          {/* Browser Window */}

         <motion.div
  initial={{ opacity: 0, scale: 0.94, y: 40 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
  whileHover={{
    y: -8,
  }}
  className="relative z-20 overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_40px_120px_rgba(0,0,0,.45)]"
>

            {/* Browser Header */}

            <div className="flex h-14 items-center justify-between border-b border-neutral-200 px-5">

              <div className="flex gap-2">

                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />

              </div>

              <div className="flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2">

                <Globe
                  size={15}
                  className="text-neutral-500"
                />

                <span className="text-xs text-neutral-500">
                  localhost:3000
                </span>

              </div>

              <Monitor
                size={18}
                className="text-neutral-400"
              />

            </div>

            {/* Browser Body */}

            <div className="flex h-[320px] items-center justify-center bg-gradient-to-b from-white to-neutral-100">

              <div className="text-center">

                <motion.span
  initial={{ width: 0 }}
  animate={{ width: "100%" }}
  transition={{ duration: 2 }}
>
  Hello World 👋
</motion.span>

                <p className="mt-5 text-neutral-500">
                  This is my first website.
                </p>

              <motion.button
  whileHover={{
    scale: 1.08,
  }}
  whileTap={{
    scale: 0.96,
  }}
  animate={{
    boxShadow: [
      "0 0 0px rgba(249,115,22,.3)",
      "0 0 25px rgba(249,115,22,.55)",
      "0 0 0px rgba(249,115,22,.3)",
    ],
  }}
  transition={{
    boxShadow: {
      duration: 2,
      repeat: Infinity,
    },
  }}
  className="mt-8 rounded-xl bg-orange-500 px-6 py-3 font-medium text-white"
>

                  Learn More

                </motion.button>

              </div>

            </div>

         </motion.div>

          {/* Floating Code Editor */}

         <motion.div
  initial={{
    opacity: 0,
    x: -60,
    rotate: -6,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    rotate: -3,
  }}
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    y: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
    duration: 0.9,
  }}
  className="absolute -bottom-10 -left-14 z-30 w-[360px] overflow-hidden rounded-[22px] border border-white/10 bg-[#1E1E1E] shadow-2xl"
>

            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">

              <div className="flex items-center gap-2">

                <Code2
                  size={17}
                  className="text-blue-400"
                />

                <span className="text-sm text-white">
                  index.html
                </span>

              </div>

              <span className="text-xs text-white/40">
                HTML
              </span>

            </div>

            {/* Continue in Part 2 */}

                        {/* Code Body */}

            <div className="space-y-2 p-6 font-mono text-[13px] leading-7">

              <div>
                <span className="text-orange-400">&lt;html&gt;</span>
              </div>

              <div className="pl-5">
                <span className="text-orange-400">&lt;body&gt;</span>
              </div>

              <div className="pl-10">
                <span className="text-orange-400">&lt;h1&gt;</span>

                <span className="text-green-300">
                  Hello World 👋
                </span>

                <span className="text-orange-400">
                  &lt;/h1&gt;
                </span>
              </div>

              <div className="pl-10">
                <span className="text-orange-400">&lt;p&gt;</span>

                <span className="text-green-300">
                  This is my first website.
                </span>

                <span className="text-orange-400">
                  &lt;/p&gt;
                </span>
              </div>

              <div className="pl-10">
                <span className="text-orange-400">&lt;button</span>

                <span className="text-sky-400">
                  {" "}
                  class=
                </span>

                <span className="text-yellow-300">
                  "primary"
                </span>

                <span className="text-orange-400">&gt;</span>

                <span className="text-green-300">
                  Learn More
                </span>

                <span className="text-orange-400">
                  &lt;/button&gt;
                </span>
              </div>

              <div className="pl-5">
                <span className="text-orange-400">
                  &lt;/body&gt;
                </span>
              </div>

              <div>
                <span className="text-orange-400">
                  &lt;/html&gt;
                </span>

               <motion.span
  animate={{
    opacity: [1, 0, 1],
  }}
  transition={{
    duration: 0.8,
    repeat: Infinity,
  }}
  className="ml-2 inline-block h-5 w-[2px] bg-white"
/>

              </div>

            </div>

            </motion.div>

          {/* Floating Lesson Card */}

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
    y: {
      repeat: Infinity,
      duration: 6,
      ease: "easeInOut",
    },
    duration: 1,
  }}
  className="absolute -right-8 top-8 z-30 w-[210px] rounded-[22px] border border-white/10 bg-white/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,.18)] backdrop-blur"
>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">

                <PlayCircle
                  size={24}
                  className="text-orange-500"
                />

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                  Lesson
                </p>

                <h4 className="font-semibold text-neutral-800">
                  HTML Basics
                </h4>

              </div>

            </div>

            <div className="mt-5">

              <div className="mb-2 flex items-center justify-between">

                <span className="text-sm text-neutral-500">
                  Progress
                </span>

                <span className="text-sm font-semibold text-orange-500">
                  25%
                </span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-neutral-200">

                <div className="h-full w-1/4 rounded-full bg-orange-500" />

              </div>

            </div>

            <div className="mt-5 rounded-xl bg-neutral-100 p-4">

              <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
                Next Topic
              </p>

              <h5 className="mt-2 font-semibold text-neutral-800">
                HTML Elements
              </h5>

              <p className="mt-1 text-sm text-neutral-500">
                Learn how tags build every webpage.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Decorative Glow */}

      <div className="absolute bottom-12 left-1/2 h-24 w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[90px]" />

      <div className="absolute right-20 top-10 h-40 w-40 rounded-full bg-purple-500/10 blur-[120px]" />

    
    {/* Floating HTML Tags */}

<motion.div
  animate={{
    y: [0, -18, 0],
    rotate: [0, 3, 0],
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="pointer-events-none absolute left-16 top-24 select-none text-7xl font-bold text-white/[0.03]"
>
  {"<html>"}
</motion.div>

<motion.div
  animate={{
    y: [0, 15, 0],
    rotate: [0, -4, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="pointer-events-none absolute bottom-20 right-10 select-none text-6xl font-bold text-white/[0.03]"
>
  {"<body>"}
</motion.div>

{/* Browser Reflection */}

<motion.div
  animate={{
    x: ["-120%", "250%"],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "linear",
  }}
  className="pointer-events-none absolute top-24 left-[42%] z-40 h-[340px] w-24 -skew-x-12 bg-white/10 blur-2xl"
/>


    </div>   
  );
}