"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Lightbulb,
  MessagesSquare,
  Rocket,
  UsersRound,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Projects before promises.",
    description:
      "Build the kind of products that make a portfolio impossible to ignore—not another folder of tutorial notes.",
    icon: Code2,
    label: "Build in public",
  },
  {
    number: "02",
    title: "Mentors who stay close.",
    description:
      "Get the feedback, debugging help and accountability that turns momentum into real skill.",
    icon: UsersRound,
    label: "Learn with humans",
  },
  {
    number: "03",
    title: "Training for the real room.",
    description:
      "Resume strategy, mock interviews and communication practice are built into your learning path.",
    icon: MessagesSquare,
    label: "Career-ready",
  },
];

const milestones = [
  { label: "Choose a direction", detail: "Find the program that fits your goal.", icon: Lightbulb },
  { label: "Learn the real stack", detail: "Master tools teams actually use.", icon: Code2 },
  { label: "Ship your proof", detail: "Build projects worth showing.", icon: Rocket },
  { label: "Step into interviews", detail: "Turn skill into opportunity.", icon: BriefcaseBusiness },
];

const stats = [
  { value: 5000, suffix: "+", label: "Students trained" },
  { value: 100, suffix: "+", label: "Live projects built" },
  { value: 12, suffix: "+", label: "Career-focused programs" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyDNDC() {
  return (
    <section id="why-dndc" className="relative overflow-hidden bg-[#F8F6F2] py-28 text-[#17120F] md:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-[0.17] [background-image:radial-gradient(#9E8D78_.65px,transparent_.65px)] [background-size:20px_20px]" />
      <div className="pointer-events-none absolute -right-20 top-0 h-[32rem] w-[32rem] rounded-full bg-[#E26743]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1480px] px-6 md:px-10 lg:px-16">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 lg:grid-cols-[1fr_.68fr] lg:items-end"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#C75232]">
              05 / Why choose DNDC
            </p>
            <h2 className="mt-7 max-w-4xl font-serif text-[clamp(3.4rem,6.5vw,8rem)] leading-[0.85] tracking-[-0.06em]">
              Your career needs
              <span className="block italic text-[#C75232]">more than a course.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-[#66594D] md:text-lg">
            DNDC is a software training institute in Bhopal for people who want more than certificates. Learn with direction, build with purpose and prepare for the opportunities ahead.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-3 text-center gap-3 border-y border-black/10 py-6 sm:grid-cols-3 lg:mt-24 lg:py-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="border-black/10 px-0 py-4 sm:border-r sm:px-7 sm:py-1 sm:last:border-0 sm:first:pl-0"
            >
              <p className="font-serif text-4xl tracking-[-0.05em] md:text-5xl">
                <CountUp end={stat.value} duration={2.2} separator="," suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[#7A6B5B]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 lg:mt-28 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
          <div className="lg:pt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#C75232]">The DNDC difference</p>
            <h3 className="mt-5 max-w-sm font-serif text-4xl leading-[0.9] tracking-[-0.05em] md:text-5xl">A learning system built for forward motion.</h3>
            <p className="mt-6 max-w-md leading-7 text-[#66594D]">Every part of the experience moves you from curiosity to confidence—one meaningful milestone at a time.</p>

            <div className="mt-9 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#66594D]">
              <BadgeCheck className="h-3.5 w-3.5 text-[#C75232]" />
              Built for real careers
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-[18px] top-8 w-px bg-[#D7CCC0] md:left-[22px]" />
            <div className="space-y-1">
              {milestones.map(({ label, detail, icon: Icon }, index) => (
                <motion.article
                  key={label}
                  initial={{ opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.1, duration: 0.55 }}
                  className="group relative grid grid-cols-[38px_1fr] gap-4 py-4 md:grid-cols-[46px_1fr] md:gap-6 md:py-5"
                >
                  <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full border border-[#D5C7B8] bg-[#F8F6F2] text-[#C75232] transition-colors group-hover:border-[#C75232] group-hover:bg-[#C75232] group-hover:text-white md:h-11 md:w-11">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="border-b border-black/10 pb-5 group-last:border-0">
                    <div className="flex items-center justify-between gap-4"><h4 className="font-serif text-2xl tracking-[-0.04em] md:text-3xl">{label}</h4><span className="font-mono text-[10px] text-[#A18F7D]">0{index + 1}</span></div>
                    <p className="mt-2 text-sm leading-6 text-[#746657]">{detail}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3 lg:mt-28">
          {reasons.map(({ number, title, description, icon: Icon, label }, index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              whileHover={{ y: -8 }}
              className="group relative min-h-[300px] overflow-hidden rounded-[2rem] border border-black/10 bg-[#FFFDF9] p-7 shadow-[0_18px_44px_rgba(75,53,36,.07)] transition-shadow hover:shadow-[0_25px_60px_rgba(201,82,50,.16)] md:p-8"
            >
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#E26743]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#E26743]/20" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between"><span className="font-mono text-[10px] text-[#A18F7D]">/ {number}</span><span className="grid h-11 w-11 place-items-center rounded-2xl border border-black/10 bg-[#F8F6F2] text-[#C75232] transition-all duration-300 group-hover:rotate-6 group-hover:border-[#C75232] group-hover:bg-[#C75232] group-hover:text-white"><Icon className="h-5 w-5" /></span></div>
                <p className="mt-10 font-mono text-[9px] uppercase tracking-[0.18em] text-[#C75232]">{label}</p>
                <h4 className="mt-3 max-w-xs font-serif text-3xl leading-[0.94] tracking-[-0.045em]">{title}</h4>
                <p className="mt-4 max-w-sm text-sm leading-6 text-[#746657]">{description}</p>
                <span className="mt-auto flex items-center gap-2 pt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-[#4F4135]">Explore the difference <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
