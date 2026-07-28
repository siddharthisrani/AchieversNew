"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Bell,
  BookOpen,
  Check,
  ChevronRight,
  Clock3,
  Download,
  Flame,
  GraduationCap,
  Play,
  Search,
  Sparkles,
  Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";

type Course = {
  title: string;
  lesson: string;
  duration: string;
  progress: number;
  category: string;
  artwork: string;
};

const courses: Course[] = [
  { title: "MERN Stack", lesson: "18 of 42 lessons", duration: "32h 40m", progress: 43, category: "Web Development", artwork: "from-red-600 via-rose-500 to-orange-400" },
  { title: "Next.js 16", lesson: "9 of 28 lessons", duration: "18h 20m", progress: 32, category: "Modern React", artwork: "from-slate-900 via-slate-700 to-slate-500" },
  { title: "Java Full Stack", lesson: "24 of 56 lessons", duration: "45h 10m", progress: 48, category: "Software Engineering", artwork: "from-orange-600 via-amber-500 to-yellow-300" },
  { title: "Python Full Stack", lesson: "14 of 38 lessons", duration: "28h 35m", progress: 37, category: "Web Development", artwork: "from-blue-700 via-cyan-500 to-emerald-400" },
  { title: "Data Analytics", lesson: "11 of 34 lessons", duration: "24h 15m", progress: 31, category: "Analytics", artwork: "from-violet-700 via-fuchsia-500 to-pink-400" },
  { title: "Data Science", lesson: "7 of 46 lessons", duration: "36h 25m", progress: 15, category: "Data", artwork: "from-indigo-800 via-blue-600 to-cyan-300" },
  { title: "Artificial Intelligence", lesson: "16 of 44 lessons", duration: "38h 50m", progress: 36, category: "AI", artwork: "from-fuchsia-700 via-purple-500 to-indigo-400" },
  { title: "Machine Learning", lesson: "4 of 40 lessons", duration: "31h 20m", progress: 10, category: "AI", artwork: "from-emerald-700 via-teal-500 to-cyan-300" },
  { title: "Flutter", lesson: "20 of 36 lessons", duration: "26h 40m", progress: 56, category: "Mobile Development", artwork: "from-sky-700 via-blue-500 to-cyan-300" },
  { title: "Digital Marketing", lesson: "12 of 30 lessons", duration: "20h 10m", progress: 40, category: "Growth", artwork: "from-pink-700 via-rose-500 to-orange-300" },
];

const searchTerms = [
  "Search MERN...",
  "Search Python...",
  "Search Data Analytics...",
  "Search Next.js...",
  "Search AI...",
];

const navItems = [
  "Home",
  "Programs",
  "Continue Learning",
  "Certificates",
  "Downloads",
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function Artwork({
  course,
  large = false,
}: {
  course: Course;
  large?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${course.artwork} ${
        large ? "h-36" : "h-20"
      }`}
    >
      <div className="absolute -right-5 -top-7 h-24 w-24 rounded-full border border-white/25 bg-white/10 blur-[1px]" />
      <div className="absolute -bottom-8 left-4 h-24 w-24 rounded-full bg-black/20 blur-xl" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent" />
      <div
        className={`absolute left-3 rounded-xl border border-white/20 bg-black/20 px-2 py-1 font-semibold tracking-tight text-white backdrop-blur ${
          large ? "bottom-3 text-sm" : "bottom-2 text-[9px]"
        }`}
      >
        {course.title}
      </div>
      <Sparkles
        className={`absolute right-3 top-3 text-white/75 ${
          large ? "h-5 w-5" : "h-3.5 w-3.5"
        }`}
      />
    </div>
  );
}

function SectionHeader({
  title,
  action = "View all",
}: {
  title: string;
  action?: string;
}) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <h2 className="text-sm font-semibold tracking-tight text-white sm:text-base">
        {title}
      </h2>
      <button className="group flex items-center gap-0.5 text-[10px] font-medium text-white/45 transition-colors hover:text-white">
        {action}
        <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  );
}

function ContinueCard({
  course,
  index,
}: {
  course: Course;
  index: number;
}) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.22 + index * 0.06, duration: 0.45 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group w-40 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] shadow-[0_14px_36px_rgba(0,0,0,0.28)] transition-colors hover:border-red-500/40 hover:bg-white/[0.075] sm:w-44"
    >
      <Artwork course={course} />

      <div className="p-2.5">
        <p className="truncate text-xs font-semibold text-white">
          {course.title}
        </p>
        <p className="mt-0.5 text-[9px] text-white/45">{course.lesson}</p>

        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            transition={{ delay: 0.5 + index * 0.05, duration: 0.75 }}
            className="h-full rounded-full bg-gradient-to-r from-[#E50914] to-[#E26743]"
          />
        </div>

        <div className="mt-2 flex items-center justify-between text-[9px] text-white/45">
          <span className="flex items-center gap-1">
            <Clock3 className="h-2.5 w-2.5" />
            {course.duration}
          </span>
          <button className="rounded-md bg-white px-2 py-1 font-semibold text-black transition-transform hover:scale-105">
            Continue
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function ProgramCard({
  course,
  index,
}: {
  course: Course;
  index: number;
}) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.12 + index * 0.07, duration: 0.45 }}
      whileHover={{ y: -6, scale: 1.025 }}
      className="group relative min-w-[180px] flex-1 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-xl transition-all hover:border-[#E50914]/45 hover:shadow-[0_18px_44px_rgba(229,9,20,0.16)]"
    >
      <Artwork course={course} large />

      <div className="p-3">
        <p className="text-[10px] text-[#E26743]">{course.category}</p>
        <h3 className="mt-0.5 text-sm font-semibold text-white">
          {course.title}
        </h3>
        <p className="mt-1 text-[10px] text-white/45">
          Project-based program · {course.duration}
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#E50914] text-white shadow-[0_0_26px_rgba(229,9,20,.7)]">
          <Play className="ml-0.5 h-4 w-4 fill-current" />
        </span>
      </div>
    </motion.article>
  );
}

export default function Netflix() {
  const [searchIndex, setSearchIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSearchIndex((current) => (current + 1) % searchTerms.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  const trending = courses.slice(4, 8);
  const popular = [courses[8], courses[9], courses[0], courses[2]];
  const recommended = [courses[1], courses[3], courses[6], courses[7]];

  return (
    <main className="relative h-full overflow-hidden bg-[#050505] font-sans text-white selection:bg-[#E50914]/50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_-10%,rgba(226,103,67,.22),transparent_26%),radial-gradient(circle_at_23%_12%,rgba(229,9,20,.17),transparent_25%)]" />

      <motion.div
        animate={{
          x: ["-8%", "8%", "-8%"],
          y: ["-5%", "4%", "-5%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-red-600/10 blur-3xl"
      />

      <div className="relative h-full overflow-y-auto px-3 pb-8 pt-3 sm:px-5 lg:px-7">
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex items-center justify-between gap-3"
        >
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-[#E50914] text-[9px] font-black shadow-[0_0_16px_rgba(229,9,20,.45)]">
              D
            </span>
            <span className="text-xs font-bold tracking-tight">
              DNDC <span className="font-medium text-white/60">Stream</span>
            </span>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            {navItems.map((item, index) => (
              <button
                key={item}
                className={`text-[10px] transition-colors hover:text-white ${
                  index === 0 ? "text-white" : "text-white/45"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative hidden w-36 items-center sm:flex">
              <Search className="absolute left-2 h-3 w-3 text-white/40" />
              <motion.span
                key={searchIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full rounded-md border border-white/10 bg-white/[0.045] py-1.5 pl-7 text-[9px] text-white/40"
              >
                {searchTerms[searchIndex]}
              </motion.span>
            </div>

            <button className="relative text-white/65 hover:text-white">
              <Bell className="h-4 w-4" />
              <span className="absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-[#E50914]" />
            </button>

            <div className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-[#E26743] to-[#E50914] text-[9px] font-bold ring-2 ring-white/10">
              SK
            </div>
          </div>
        </motion.nav>

        <section className="relative mt-4 min-h-44 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#210508] via-[#110a0a] to-[#18100f] p-5 shadow-[0_22px_70px_rgba(0,0,0,.5)] sm:min-h-52 sm:p-7">
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[linear-gradient(115deg,transparent_25%,rgba(229,9,20,.16),rgba(226,103,67,.17),transparent_75%)] bg-[length:200%_200%]"
          />

          <div className="absolute -right-5 -top-10 h-56 w-56 rounded-full border-[22px] border-[#E50914]/15 blur-[1px]" />
          <div className="absolute bottom-0 right-20 h-32 w-32 rounded-full bg-[#E26743]/15 blur-3xl" />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55 }}
            className="relative max-w-xl"
          >
            <div className="mb-2 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[.18em] text-[#E26743]">
              <Sparkles className="h-3 w-3" />
              Featured learning path
            </div>

            <h1 className="max-w-md text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              Become a Full Stack Developer
            </h1>

            <p className="mt-2 max-w-lg text-[10px] leading-relaxed text-white/65 sm:text-xs">
              Master MERN Stack, Next.js 16, AI, Data Analytics, Java, Python
              and more through project-based learning.
            </p>

            <div className="mt-4 flex gap-2">
              <motion.button
                whileTap={{ scale: 0.94 }}
                whileHover={{ scale: 1.04 }}
                className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-[10px] font-bold text-black shadow-lg"
              >
                <Play className="h-3 w-3 fill-current" />
                Continue Learning
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.94 }}
                whileHover={{ scale: 1.04 }}
                className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur"
              >
                Browse Programs
              </motion.button>
            </div>
          </motion.div>
        </section>

        <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_180px]">
          <div className="min-w-0 space-y-5">
            <section>
              <SectionHeader title="Continue Learning" />
              <div className="-mx-3 flex gap-3 overflow-x-auto px-3 pb-1 sm:-mx-5 sm:px-5">
                {courses.map((course, index) => (
                  <ContinueCard
                    key={course.title}
                    course={course}
                    index={index}
                  />
                ))}
              </div>
            </section>

            <section>
              <SectionHeader title="Trending Programs" />
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {trending.map((course, index) => (
                  <ProgramCard
                    key={course.title}
                    course={course}
                    index={index}
                  />
                ))}
              </div>
            </section>

            <section>
              <SectionHeader title="Popular This Month" />
              <div className="-mx-3 flex gap-3 overflow-x-auto px-3 pb-1 sm:-mx-5 sm:px-5">
                {popular.map((course, index) => (
                  <ContinueCard
                    key={course.title}
                    course={course}
                    index={index}
                  />
                ))}
              </div>
            </section>

            <section>
              <SectionHeader title="Recommended For You" />
              <div className="-mx-3 flex gap-3 overflow-x-auto px-3 pb-1 sm:-mx-5 sm:px-5">
                {recommended.map((course, index) => (
                  <ContinueCard
                    key={course.title}
                    course={course}
                    index={index}
                  />
                ))}
              </div>
            </section>
          </div>

          <aside className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.35 }}
              className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold">Today&apos;s Goal</p>
                  <p className="mt-1 text-[9px] text-white/45">
                    Keep your momentum going
                  </p>
                </div>

                <div
                  className="relative grid h-12 w-12 place-items-center rounded-full"
                  style={{
                    background:
                      "conic-gradient(#E50914 0 72%, rgba(255,255,255,.09) 72% 100%)",
                  }}
                >
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#0a0a0a] text-[10px] font-bold">
                    72%
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2.5 text-[10px]">
                <div className="flex items-center gap-2 text-white/70">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-[#E50914] text-white">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  Watch 2 lessons
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <span className="h-4 w-4 rounded-full border border-white/25" />
                  Complete React Quiz
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <span className="h-4 w-4 rounded-full border border-white/25" />
                  Finish Assignment
                </div>
              </div>
            </motion.section>

            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.45 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.075] to-white/[.025] p-4"
            >
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-[#E26743]" />
                <p className="text-xs font-semibold">Your Learning</p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-y-4">
                {[
                  { icon: Clock3, value: 128, label: "Hours learned", suffix: "h" },
                  { icon: GraduationCap, value: 6, label: "Completed", suffix: "" },
                  { icon: BookOpen, value: 4, label: "Certificates", suffix: "" },
                  { icon: Flame, value: 12, label: "Day streak", suffix: "" },
                ].map(({ icon: Icon, value, label, suffix }) => (
                  <div key={label}>
                    <Icon className="mb-1 h-3.5 w-3.5 text-[#E50914]" />
                    <p className="text-lg font-semibold leading-none">
                      <CountUp end={value} duration={1.8} suffix={suffix} />
                    </p>
                    <p className="mt-1 text-[8px] text-white/45">{label}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-between rounded-xl border border-[#E26743]/20 bg-[#E26743]/10 p-3 text-left"
            >
              <span>
                <span className="block text-[10px] font-semibold">
                  Offline downloads
                </span>
                <span className="mt-0.5 block text-[9px] text-white/45">
                  Learn anywhere, anytime
                </span>
              </span>
              <Download className="h-4 w-4 text-[#E26743]" />
            </motion.button>
          </aside>
        </div>
      </div>
    </main>
  );
}