"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bell,
  BookOpen,
  Check,
  ChevronRight,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Play,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
  UploadCloud,
  Users,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "My Programs", icon: BookOpen },
  { label: "Assignments", icon: FileText },
  { label: "Community", icon: Users },
  { label: "Settings", icon: Settings },
];

const programs = [
  {
    title: "MERN Stack Development",
    lesson: "Module 5 · React State Management",
    progress: 68,
    gradient: "from-orange-500 to-rose-600",
  },
  {
    title: "Next.js 16 Masterclass",
    lesson: "Module 2 · App Router Foundations",
    progress: 42,
    gradient: "from-slate-600 to-slate-900",
  },
  {
    title: "Data Analytics",
    lesson: "Module 3 · Excel Dashboards",
    progress: 28,
    gradient: "from-cyan-500 to-blue-700",
  },
];

const assignments = [
  {
    title: "Build a REST API",
    subject: "MERN Stack",
    due: "Today",
    urgent: true,
  },
  {
    title: "React Dashboard UI",
    subject: "Next.js 16",
    due: "Tomorrow",
    urgent: false,
  },
  {
    title: "Sales Data Report",
    subject: "Data Analytics",
    due: "Jul 21",
    urgent: false,
  },
];

const schedule = [
  {
    time: "10:00",
    meridiem: "AM",
    title: "React Query & API States",
    type: "Live class",
    color: "bg-orange-400",
  },
  {
    time: "02:30",
    meridiem: "PM",
    title: "Career Guidance Session",
    type: "Mentor session",
    color: "bg-cyan-400",
  },
  {
    time: "05:00",
    meridiem: "PM",
    title: "JavaScript Assignment Review",
    type: "Workshop",
    color: "bg-violet-400",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function StudentPortal() {
  const [isUploaded, setIsUploaded] = useState(false);

  return (
    <main className="h-full overflow-hidden bg-[#f7f7f5] text-[#1d2320]">
      <div className="grid h-full grid-cols-[52px_minmax(0,1fr)] sm:grid-cols-[150px_minmax(0,1fr)]">
        <aside className="flex flex-col border-r border-black/[.07] bg-white px-2 py-3 sm:px-3">
          <div className="flex items-center gap-2 px-1">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#202a24] text-[10px] font-black text-[#f6a847]">
              D
            </span>
            <span className="hidden text-xs font-bold tracking-tight sm:block">
              DNDC <span className="font-medium text-black/40">Campus</span>
            </span>
          </div>

          <nav className="mt-7 space-y-1">
            {navigation.map(({ label, icon: Icon, active }) => (
              <button
                key={label}
                className={`flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-[10px] transition-colors ${
                  active
                    ? "bg-[#202a24] text-white shadow-sm"
                    : "text-black/45 hover:bg-black/[.04] hover:text-black"
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="hidden sm:block">{label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-xl bg-[#fff3df] p-2.5 text-center sm:text-left">
            <div className="mx-auto grid h-7 w-7 place-items-center rounded-full bg-[#f6a847] text-[#5b3612] sm:mx-0">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <p className="mt-2 hidden text-[10px] font-semibold sm:block">
              Level up faster
            </p>
            <p className="mt-0.5 hidden text-[8px] leading-relaxed text-black/45 sm:block">
              Join today&apos;s live sessions.
            </p>
            <button className="mt-2 hidden w-full rounded-md bg-[#202a24] py-1.5 text-[8px] font-semibold text-white sm:block">
              Explore events
            </button>
          </div>
        </aside>

        <div className="min-w-0 overflow-y-auto px-3 py-3 sm:px-5 lg:px-6">
          <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between gap-3"
          >
            <div>
              <p className="text-[9px] text-black/40">Thursday, July 16</p>
              <h1 className="mt-0.5 text-lg font-semibold tracking-tight sm:text-xl">
                Good morning, Siddharth 👋
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <button className="hidden h-7 items-center gap-1.5 rounded-md border border-black/[.08] bg-white px-2 text-[9px] text-black/40 sm:flex">
                <Search className="h-3 w-3" />
                Search your campus
              </button>

              <button className="relative grid h-7 w-7 place-items-center rounded-md border border-black/[.08] bg-white text-black/55">
                <Bell className="h-3.5 w-3.5" />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-orange-500" />
              </button>

              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#202a24] to-[#5b795f] text-[9px] font-bold text-white">
                SK
              </span>
            </div>
          </motion.header>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="relative mt-4 overflow-hidden rounded-2xl bg-[#202a24] p-5 text-white shadow-[0_15px_35px_rgba(32,42,36,.18)]"
          >
            <div className="absolute -right-8 -top-12 h-44 w-44 rounded-full border-[20px] border-[#f6a847]/25" />
            <div className="absolute bottom-0 right-20 h-20 w-20 rounded-full bg-emerald-300/10 blur-2xl" />

            <div className="relative flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-[9px] font-medium text-[#f6c371]">
                  <Sparkles className="h-3 w-3" />
                  YOUR LEARNING JOURNEY
                </div>

                <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                  You&apos;re building real momentum.
                </h2>

                <p className="mt-1 text-[10px] text-white/60">
                  Complete your next lesson to keep your 12-day streak alive.
                </p>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="mt-4 flex items-center gap-1.5 rounded-lg bg-[#f6a847] px-3 py-2 text-[9px] font-bold text-[#33200c]"
                >
                  <Play className="h-3 w-3 fill-current" />
                  Continue learning
                </motion.button>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[.07] px-4 py-3 backdrop-blur">
                <div>
                  <p className="text-lg font-semibold">12</p>
                  <p className="text-[8px] text-white/50">Day streak</p>
                </div>
                <div className="h-7 w-px bg-white/15" />
                <div>
                  <p className="text-lg font-semibold">68%</p>
                  <p className="text-[8px] text-white/50">This week</p>
                </div>
              </div>
            </div>
          </motion.section>

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(230px,.8fr)]">
            <div className="min-w-0 space-y-5">
              <section>
                <Header title="Continue learning" action="View programs" />

                <div className="grid gap-3 md:grid-cols-3">
                  {programs.map((program, index) => (
                    <motion.article
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.15 + index * 0.07 }}
                      whileHover={{ y: -4 }}
                      key={program.title}
                      className="overflow-hidden rounded-xl border border-black/[.07] bg-white shadow-sm"
                    >
                      <div
                        className={`relative h-16 bg-gradient-to-br ${program.gradient}`}
                      >
                        <Sparkles className="absolute right-3 top-3 h-5 w-5 text-white/75" />
                        <div className="absolute -bottom-6 left-3 grid h-10 w-10 place-items-center rounded-xl border-2 border-white bg-[#202a24] text-[#f6c371]">
                          <Play className="ml-0.5 h-4 w-4 fill-current" />
                        </div>
                      </div>

                      <div className="p-3 pt-7">
                        <h3 className="truncate text-[10px] font-semibold">
                          {program.title}
                        </h3>
                        <p className="mt-1 truncate text-[8px] text-black/45">
                          {program.lesson}
                        </p>

                        <div className="mt-3 h-1 overflow-hidden rounded-full bg-black/[.07]">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${program.progress}%` }}
                            transition={{
                              delay: 0.5 + index * 0.08,
                              duration: 0.7,
                            }}
                            className="h-full rounded-full bg-[#e6802d]"
                          />
                        </div>

                        <div className="mt-1.5 flex justify-between text-[8px] text-black/40">
                          <span>{program.progress}% complete</span>
                          <span>Resume</span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </section>

              <section>
                <Header title="Upcoming assignments" action="All assignments" />

                <div className="overflow-hidden rounded-xl border border-black/[.07] bg-white">
                  {assignments.map((assignment, index) => (
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.25 + index * 0.06 }}
                      key={assignment.title}
                      className="flex items-center gap-3 border-b border-black/[.06] p-3 last:border-0"
                    >
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${
                          assignment.urgent
                            ? "bg-orange-100 text-orange-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <FileText className="h-3.5 w-3.5" />
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[10px] font-semibold">
                          {assignment.title}
                        </p>
                        <p className="mt-0.5 text-[8px] text-black/40">
                          {assignment.subject}
                        </p>
                      </div>

                      <span
                        className={`rounded-full px-2 py-1 text-[8px] font-medium ${
                          assignment.urgent
                            ? "bg-red-50 text-red-500"
                            : "bg-black/[.045] text-black/45"
                        }`}
                      >
                        Due {assignment.due}
                      </span>

                      <ChevronRight className="h-3.5 w-3.5 text-black/25" />
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-5">
              <section className="rounded-xl border border-black/[.07] bg-white p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold">Attendance</p>
                    <p className="mt-0.5 text-[8px] text-black/40">
                      Current program average
                    </p>
                  </div>
                  <button className="text-[8px] font-medium text-emerald-700">
                    Details
                  </button>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <div
                    className="grid h-16 w-16 shrink-0 place-items-center rounded-full"
                    style={{
                      background:
                        "conic-gradient(#4f8a5b 0 92%, #edf0eb 92% 100%)",
                    }}
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-white">
                      <span className="text-sm font-semibold">92%</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-[9px]">
                    <p className="flex items-center gap-1.5 text-black/55">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4f8a5b]" />
                      46 classes attended
                    </p>
                    <p className="flex items-center gap-1.5 text-black/55">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e6802d]" />
                      4 classes missed
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <Header title="Today&apos;s schedule" action="Calendar" />

                <div className="space-y-2">
                  {schedule.map((item, index) => (
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.2 + index * 0.06 }}
                      key={item.title}
                      className="flex gap-2.5 rounded-xl border border-black/[.07] bg-white p-2.5"
                    >
                      <div className="w-8 text-center">
                        <p className="text-[9px] font-semibold">{item.time}</p>
                        <p className="text-[7px] text-black/40">
                          {item.meridiem}
                        </p>
                      </div>

                      <div
                        className={`mt-0.5 h-8 w-1 rounded-full ${item.color}`}
                      />

                      <div className="min-w-0">
                        <p className="truncate text-[9px] font-semibold">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[8px] text-black/40">
                          {item.type}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              <motion.button
                whileHover={{ y: -2 }}
                className="flex w-full items-center justify-between rounded-xl bg-[#e7f4ed] p-3 text-left"
              >
                <span>
                  <span className="block text-[10px] font-semibold text-[#295436]">
                    Need help with a lesson?
                  </span>
                  <span className="mt-0.5 block text-[8px] text-[#52725a]">
                    Ask your mentor anytime.
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#3e774a]" />
              </motion.button>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

function Header({ title, action }: { title: string; action: string }) {
  return (
    <div className="mb-2.5 flex items-center justify-between">
      <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
      <button className="flex items-center gap-0.5 text-[9px] font-medium text-black/45 hover:text-black">
        {action}
        <ChevronRight className="h-3 w-3" />
      </button>
    </div>
  );
}