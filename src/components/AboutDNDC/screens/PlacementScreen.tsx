"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  BriefcaseBusiness,
  UserRound,
  Sparkles,
} from "lucide-react";

export default function PlacementScreen() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Grid */}

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

      {/* Watermark */}

      <motion.h1
        animate={{
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="pointer-events-none absolute text-[170px] font-black tracking-[22px] text-white"
      >
        PLACEMENT
      </motion.h1>

      {/* Main Panel */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
          scale: .94,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: .9,
        }}
        className="relative h-[560px] w-[920px] overflow-hidden rounded-[34px] border border-white/10 bg-[#0d1117] shadow-[0_35px_120px_rgba(0,0,0,.55)]"
      >

        {/* Reflection */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />

        {/* Header */}

        <div className="flex h-16 items-center justify-between border-b border-white/10 px-8">

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20">

              <BriefcaseBusiness
                size={22}
                className="text-emerald-400"
              />

            </div>

            <div>

              <h2 className="font-semibold text-white">
                Technical Interview
              </h2>

              <p className="text-sm text-zinc-500">
                Recruitment Assessment
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3 rounded-full bg-emerald-500/15 px-5 py-2">

            <Sparkles
              size={16}
              className="text-emerald-400"
            />

            <span className="text-sm text-emerald-300">
              Final Round
            </span>

          </div>

        </div>

        {/* Body */}

        <div className="p-8">

          {/* Candidate */}

          <div className="mb-8 flex items-center gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">

              <UserRound size={28} />

            </div>

            <div>

              <p className="text-sm text-zinc-500">
                Candidate
              </p>

              <h3 className="text-2xl font-semibold">
                Siddharth Israni
              </h3>

            </div>

          </div>

        {/* ==========================================
        INTERVIEW PROGRESS
========================================== */}

<div className="grid grid-cols-12 gap-6 h-[420px]">

  {/* LEFT */}
 <div className="col-span-8">
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: .8 }}
    className="col-span-8 rounded-[28px] border border-white/10 bg-[#161b22] p-7"
  >

    {/* Header */}

    <div className="flex items-center justify-between">

      <div>

        <p className="text-xs uppercase tracking-[3px] text-zinc-500">
          Interview Progress
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Frontend Developer
        </h2>

      </div>

      <motion.div
        initial={{ scale: .6 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: .8,
          type: "spring",
        }}
        className="flex h-28 w-28 items-center justify-center rounded-full border-[8px] border-emerald-500"
      >

        <span className="text-3xl font-bold">
          95%
        </span>

      </motion.div>

    </div>

    {/* Progress */}

    <div className="mt-10">

      <div className="flex justify-between text-sm text-zinc-500">

        <span>Application</span>

        <span>Offer</span>

      </div>

      <div className="relative mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "95%" }}
          transition={{
            duration: 1.6,
          }}
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-emerald-400 to-green-500"
        />

      </div>

    </div>

    {/* Timeline */}

    <div className="mt-12 grid grid-cols-5 gap-4">

      {[
        "Resume",
        "Technical",
        "Coding",
        "HR",
        "Offer",
      ].map((step, index) => (

        <motion.div
          key={step}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * .15,
          }}
          className="text-center"
        >

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500">

            <CheckCircle2
              size={20}
              className="text-black"
            />

          </div>

          <p className="mt-4 text-sm text-zinc-300">
            {step}
          </p>

        </motion.div>

      ))}

    </div>

  </motion.div>
  </div>

  {/* RIGHT */}
<div className="col-span-4 flex flex-col gap-5">
  <motion.div
    initial={{
      opacity: 0,
      x: 30,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      duration: .8,
    }}
    className="col-span-4 space-y-5"
  >

    {/* Assessment */}

    <div className="rounded-[28px] border border-white/10 bg-[#161b22] p-6">

      <p className="text-xs uppercase tracking-[3px] text-zinc-500">
        Assessment
      </p>

      <div className="mt-6 space-y-5">

        {[
          {
            title: "React",
            score: "98%",
          },
          {
            title: "DSA",
            score: "93%",
          },
          {
            title: "Communication",
            score: "95%",
          },
          {
            title: "Problem Solving",
            score: "97%",
          },
        ].map((item) => (

          <div key={item.title}>

            <div className="mb-2 flex justify-between text-sm">

              <span className="text-zinc-300">
                {item.title}
              </span>

              <span className="text-emerald-400">
                {item.score}
              </span>

            </div>

            <div className="h-2 rounded-full bg-zinc-800">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: item.score,
                }}
                transition={{
                  duration: 1,
                }}
                className="h-full rounded-full bg-emerald-400"
              />

            </div>

          </div>

        ))}

      </div>

    </div>

    {/* Status */}

    <div className="rounded-[28px] border border-white/10 bg-[#161b22] p-6">

      <p className="text-xs uppercase tracking-[3px] text-zinc-500">
        Status
      </p>

      <h3 className="mt-3 text-2xl font-semibold text-emerald-400">
        Selected
      </h3>

      <p className="mt-2 text-sm leading-6 text-zinc-400">
        Candidate has successfully cleared all interview rounds and is eligible
        for final onboarding.
      </p>

    </div>

  </motion.div>

  </div>

</div>

        </div>

      </motion.div>

     {/* ===========================================================
        OFFER LETTER
=========================================================== */}

<motion.div
  initial={{
    opacity: 0,
    y: 60,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: .9,
    delay: .25,
  }}
  className="absolute bottom-2 left-3 w-[270px] rounded-[30px] border border-white/10 bg-[#161b22] shadow-[0_30px_90px_rgba(0,0,0,.45)]"
>

  <div className="border-b border-white/10 p-6">

    <p className="text-xs uppercase tracking-[3px] text-zinc-500">
      Offer Letter
    </p>

    <h3 className="mt-3 text-xl font-semibold">
      Congratulations!
    </h3>

  </div>

  <div className="space-y-5 p-6">

    <div>

      <p className="text-xs uppercase tracking-[2px] text-zinc-500">
        Candidate
      </p>

      <p className="mt-1 font-medium">
        Siddharth Israni
      </p>

    </div>

    <div>

      <p className="text-xs uppercase tracking-[2px] text-zinc-500">
        Position
      </p>

      <p className="mt-1">
        Frontend Developer
      </p>

    </div>

    <div>

      <p className="text-xs uppercase tracking-[2px] text-zinc-500">
        Annual Package
      </p>

      <h2 className="mt-2 text-3xl font-bold text-emerald-400">
        ₹8.5 LPA
      </h2>

    </div>

    <div className="rounded-2xl bg-emerald-500/15 px-4 py-3 text-center">

      <span className="text-sm font-medium text-emerald-300">
        Joining Confirmed
      </span>

    </div>

  </div>

</motion.div>

{/* ===========================================================
        COMPANY PARTNERS
=========================================================== */}

<motion.div
  initial={{
    opacity: 0,
    y: 50,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: .9,
    delay: .45,
  }}
  className="absolute bottom-8 right-10 w-[300px]"
>

  <p className="mb-5 text-xs uppercase tracking-[3px] text-zinc-500">
    Hiring Partners
  </p>

  <div className="grid grid-cols-2 gap-3">

    {[
      "Google",
      "Microsoft",
      "Amazon",
      "Infosys",
      "TCS",
      "Accenture",
    ].map((company) => (

      <motion.div
        key={company}
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        className="flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-[#161b22] font-medium text-zinc-300 transition-colors hover:border-emerald-400/40 hover:text-white"
      >
        {company}
      </motion.div>

    ))}

  </div>

  <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-500 p-4">

    <div className="flex items-center justify-between">

      <span className="text-sm text-zinc-50">
        Placement Success
      </span>

      <span className="font-semibold text-zinc-50">
        95%
      </span>

    </div>

    <div className="mt-3 h-2 overflow-hidden rounded-full bg-zinc-800">

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "95%" }}
        transition={{
          duration: 1.5,
          delay: .7,
        }}
        className="h-full rounded-full bg-gradient-to-r from-orange-300 to-orange-400"
      />

    </div>

  </div>

</motion.div>
    </div>
  );
}