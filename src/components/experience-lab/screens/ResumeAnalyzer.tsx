"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  FileText,
  Lightbulb,
  LockKeyhole,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  UploadCloud,
  WandSparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const insights = [
  {
    label: "ATS compatibility",
    value: "Excellent",
    tone: "text-emerald-300",
    dot: "bg-emerald-400",
  },
  {
    label: "Skills relevance",
    value: "Strong",
    tone: "text-sky-300",
    dot: "bg-sky-400",
  },
  {
    label: "Impact statements",
    value: "Needs work",
    tone: "text-amber-300",
    dot: "bg-amber-400",
  },
];

const improvements = [
  {
    title: "Add measurable impact",
    text: "Use numbers in 3 experience bullets to demonstrate your results.",
    icon: TrendingUp,
    color: "text-amber-300 bg-amber-400/10 border-amber-400/15",
  },
  {
    title: "Match job keywords",
    text: "Add TypeScript, REST APIs and CI/CD for better role alignment.",
    icon: Target,
    color: "text-sky-300 bg-sky-400/10 border-sky-400/15",
  },
  {
    title: "Strengthen your summary",
    text: "Lead with your full-stack speciality and strongest outcome.",
    icon: Lightbulb,
    color: "text-violet-300 bg-violet-400/10 border-violet-400/15",
  },
];

const roles = [
  {
    title: "Frontend Developer",
    match: 94,
    tags: ["React", "Next.js", "TypeScript"],
    gradient: "from-violet-600 to-indigo-700",
  },
  {
    title: "Full Stack Developer",
    match: 89,
    tags: ["MERN", "Node.js", "MongoDB"],
    gradient: "from-[#e26743] to-rose-700",
  },
  {
    title: "React Developer",
    match: 86,
    tags: ["React", "Redux", "Tailwind"],
    gradient: "from-sky-500 to-cyan-700",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function ResumeAnalyzer() {
  const [isUploaded, setIsUploaded] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Overview");

  return (
    <main className="relative h-full overflow-hidden bg-[#08090d] text-white selection:bg-violet-500/40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_5%,rgba(124,58,237,.2),transparent_30%),radial-gradient(circle_at_8%_72%,rgba(14,165,233,.13),transparent_28%)]" />

      <motion.div
        animate={{ x: [-20, 25, -20], y: [0, 16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-10 top-10 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl"
      />

      <div className="relative h-full overflow-y-auto px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 shadow-[0_0_18px_rgba(139,92,246,.38)]">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-xs font-semibold tracking-tight">
                DNDC Resume AI
              </p>
              <p className="text-[8px] text-white/40">Your career copilot</p>
            </div>
          </div>

          <div className="hidden items-center rounded-lg border border-white/10 bg-white/[.035] p-0.5 sm:flex">
            {["Overview", "Improve", "Jobs"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`rounded-md px-3 py-1.5 text-[10px] transition-colors ${
                  selectedTab === tab
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-white/45 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden items-center gap-1.5 text-[10px] text-white/55 hover:text-white sm:flex">
              <Search className="h-3.5 w-3.5" />
              Search jobs
            </button>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 text-[9px] font-bold ring-2 ring-white/10">
              SK
            </span>
          </div>
        </motion.header>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#171126]/95 to-[#0c0e17]/95 shadow-[0_20px_60px_rgba(0,0,0,.35)]"
        >
          <div className="relative p-5 sm:p-6 lg:p-8">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_75%_50%,rgba(139,92,246,.24),transparent_55%)]" />

            <div className="relative max-w-xl">
              <div className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[.18em] text-violet-300">
                <WandSparkles className="h-3 w-3" />
                AI-powered feedback
              </div>

              <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                Turn your resume into your next opportunity.
              </h1>

              <p className="mt-3 max-w-lg text-[10px] leading-relaxed text-white/60 sm:text-xs">
                Get clear, tailored feedback to improve your resume, pass ATS
                screening, and land the roles you want.
              </p>
            </div>
          </div>

          <div className="relative border-t border-white/10 bg-black/15 px-5 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[9px] text-white/50 sm:text-[10px]">
              <span className="flex items-center gap-1.5">
                <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                ATS-ready analysis
              </span>
              <span className="flex items-center gap-1.5">
                <LockKeyhole className="h-3.5 w-3.5 shrink-0 text-sky-400" />
                Your resume stays private
              </span>
              <span className="flex items-center gap-1.5">
                <BriefcaseBusiness className="h-3.5 w-3.5 shrink-0 text-violet-400" />
                Role-specific suggestions
              </span>
            </div>
          </div>
        </motion.section>

        {/* --- GRID SYSTEM UPDATED FOR MOBILE STACKING --- */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_0.6fr] xl:gap-6">
          <div className="space-y-5">
            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[.035] p-5 backdrop-blur-xl sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-sm font-semibold">Your Resume</h2>
                  <p className="mt-1 text-[9px] text-white/45 sm:text-[10px]">
                    Upload a PDF or DOCX to unlock personalised insights.
                  </p>
                </div>

                {isUploaded && (
                  <span className="shrink-0 rounded-full bg-emerald-400/10 px-2 py-1 text-[9px] font-medium text-emerald-300">
                    Analysis ready
                  </span>
                )}
              </div>

              <button
                onClick={() => setIsUploaded(true)}
                className="group mt-5 flex w-full items-center justify-center gap-3 rounded-xl border border-dashed border-violet-400/35 bg-violet-500/[.055] px-4 py-5 text-left transition-all hover:border-violet-400/65 hover:bg-violet-500/[.1] sm:py-6"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violet-500/15 text-violet-300 transition-transform group-hover:-translate-y-0.5 sm:h-10 sm:w-10">
                  <UploadCloud className="h-4.5 w-4.5" />
                </span>

                {/* Added min-w-0 and truncate to prevent long filenames from breaking mobile width */}
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[11px] font-semibold sm:text-xs">
                    {isUploaded
                      ? "siddharth-resume.pdf"
                      : "Drop your resume here"}
                  </span>
                  <span className="mt-1 block truncate text-[9px] text-white/45 sm:text-[10px]">
                    {isUploaded
                      ? "PDF · 1.8 MB · Uploaded just now"
                      : "or click to browse · PDF, DOCX up to 10MB"}
                  </span>
                </span>

                {isUploaded ? (
                  <Check className="ml-auto h-4 w-4 shrink-0 text-emerald-400 sm:h-5 sm:w-5" />
                ) : (
                  <span className="ml-auto shrink-0 text-[9px] font-medium text-violet-300 sm:text-[10px]">
                    Browse
                  </span>
                )}
              </button>
            </motion.section>

            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.18 }}
              className="rounded-2xl border border-white/10 bg-white/[.035] p-5 sm:p-6"
            >
              <SectionTitle
                title="AI Analysis"
                subtitle="A detailed score based on your current resume."
              />

              {/* Grid stacks on mobile, side-by-side on SM and up */}
              <div className="mt-5 grid gap-6 sm:grid-cols-[160px_1fr] sm:gap-8">
                <div
                  className="relative grid aspect-square max-h-36 place-items-center self-center justify-self-center rounded-full sm:max-h-40"
                  style={{
                    background:
                      "conic-gradient(#8b5cf6 0 82%, #22d3ee 82% 89%, rgba(255,255,255,.09) 89% 100%)",
                  }}
                >
                  <div className="grid h-[78%] w-[78%] place-items-center rounded-full bg-[#10101a]">
                    <div className="text-center">
                      <p className="text-4xl font-semibold tracking-tight">82</p>
                      <p className="mt-1 text-[8px] uppercase tracking-[.15em] text-white/45 sm:text-[9px]">
                        Resume score
                      </p>
                    </div>
                  </div>

                  <span className="absolute -bottom-1 rounded-full border border-violet-400/25 bg-[#171126] px-2.5 py-1 text-[8px] font-medium text-violet-200 sm:text-[9px]">
                    Great foundation
                  </span>
                </div>

                <div className="flex flex-col justify-center space-y-3">
                  {insights.map((insight) => (
                    <div
                      key={insight.label}
                      className="flex items-center justify-between rounded-lg border border-white/[.07] bg-black/15 px-4 py-3"
                    >
                      <span className="flex items-center gap-2 text-[10px] text-white/65 sm:text-[11px]">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${insight.dot}`}
                        />
                        {insight.label}
                      </span>
                      <span
                        className={`text-[10px] font-medium sm:text-[11px] ${insight.tone}`}
                      >
                        {insight.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.26 }}
              className="rounded-2xl border border-white/10 bg-white/[.035] p-5 sm:p-6"
            >
              <SectionTitle
                title="Top Improvements"
                subtitle="Small changes that will make the biggest difference."
              />

              <div className="mt-4 grid gap-3">
                {improvements.map(({ title, text, icon: Icon, color }) => (
                  <button
                    key={title}
                    className="group flex items-center gap-4 rounded-xl border border-white/[.07] bg-black/15 p-3 text-left transition-colors hover:bg-white/[.045] sm:p-4"
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border ${color}`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[11px] font-semibold sm:text-xs">
                        {title}
                      </span>
                      <span className="mt-1 block truncate text-[9px] text-white/45 sm:text-[10px]">
                        {text}
                      </span>
                    </span>

                    <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-white/30 transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </motion.section>
          </div>

          <div className="space-y-5">
            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
              className="rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-500/[.14] to-sky-500/[.06] p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="flex items-center gap-1.5 text-[10px] font-semibold text-violet-200 sm:text-[11px]">
                    <Sparkles className="h-3.5 w-3.5" />
                    AI Quick Fix
                  </p>
                  <h2 className="mt-2 text-sm font-semibold leading-snug sm:text-base">
                    Make your summary stand out
                  </h2>
                </div>

                <button className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-white/10 text-white/55 hover:text-white">
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              <p className="mt-3 text-[10px] leading-relaxed text-white/55 sm:text-[11px]">
                Your profile has strong skills. Add one achievement to instantly
                make it more memorable.
              </p>

              <button className="mt-5 flex items-center gap-1.5 text-[10px] font-semibold text-violet-200 hover:text-white sm:text-[11px]">
                Improve with AI
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.section>

            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.22 }}
              className="rounded-2xl border border-white/10 bg-white/[.035] p-5 sm:p-6"
            >
              <SectionTitle
                title="Best Matched Roles"
                subtitle="Based on your experience and skills."
              />

              <div className="mt-4 space-y-3">
                {roles.map((role) => (
                  <motion.button
                    whileHover={{ x: 4 }}
                    key={role.title}
                    className="group flex w-full items-center gap-3 rounded-xl border border-white/[.07] bg-black/15 p-3 text-left hover:border-white/15 sm:p-4"
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${role.gradient}`}
                    >
                      <BriefcaseBusiness className="h-4.5 w-4.5" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2">
                        <span className="truncate text-[11px] font-semibold sm:text-xs">
                          {role.title}
                        </span>
                        <span className="shrink-0 text-[10px] font-medium text-emerald-300 sm:text-[11px]">
                          {role.match}%
                        </span>
                      </span>

                      {/* Changed from overflow-hidden to flex-wrap so tags stack beautifully on narrow screens */}
                      <span className="mt-1.5 flex flex-wrap gap-1.5">
                        {role.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-white/[.07] px-2 py-1 text-[8px] text-white/55 sm:text-[9px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </span>
                    </span>
                  </motion.button>
                ))}
              </div>

              <button className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/10 py-2.5 text-[10px] font-medium text-white/60 transition-colors hover:bg-white/[.06] hover:text-white sm:py-3 sm:text-[11px]">
                Explore matching jobs
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.section>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="rounded-xl border border-white/[.07] bg-white/[.025] p-4 text-center"
            >
              <FileText className="mx-auto h-4.5 w-4.5 text-white/40" />
              <p className="mt-2 text-[10px] text-white/45 sm:text-[11px]">
                Your data is encrypted and never shared.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold sm:text-base">{title}</h2>
      <p className="mt-1 text-[9px] text-white/45 sm:text-[10px]">{subtitle}</p>
    </div>
  );
}