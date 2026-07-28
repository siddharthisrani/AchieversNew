"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Search,
  Bell,
  ChevronDown,
  GraduationCap,
  Users,
  Trophy,
  ClipboardCheck,
  ArrowUpRight,
  LayoutDashboard,
  BarChart3,
  BookOpen,
  ClipboardList,
  FolderKanban,
  Award,
  Settings,
  Activity,
  Download,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const chartData = [
  { month: "Jan", students: 120 },
  { month: "Feb", students: 150 },
  { month: "Mar", students: 210 },
  { month: "Apr", students: 300 },
  { month: "May", students: 420 },
  { month: "Jun", students: 510 },
  { month: "Jul", students: 690 },
];

const kpis = [
  {
    title: "Students",
    value: 1246,
    icon: Users,
    growth: "+12.4%",
  },
  {
    title: "Projects",
    value: 381,
    icon: FolderKanban,
    growth: "+18.7%",
  },
  {
    title: "Placements",
    value: 126,
    icon: Trophy,
    growth: "+9.2%",
  },
  {
    title: "Attendance",
    value: 94,
    suffix: "%",
    icon: ClipboardCheck,
    growth: "+2.4%",
  },
];

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
  {
    title: "Courses",
    icon: BookOpen,
  },
  {
    title: "Assignments",
    icon: ClipboardList,
  },
  {
    title: "Projects",
    icon: FolderKanban,
  },
  {
    title: "Certificates",
    icon: Award,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export default function Dashboard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative h-full overflow-hidden rounded-[20px] bg-[#0F1117]"
    >
      {/* background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#E2674315,transparent_35%)]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* TOP BAR */}

      <div className="relative z-20 flex h-14 items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 backdrop-blur-xl sm:px-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex gap-1.5 sm:gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ff605c] sm:h-3 sm:w-3" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd44] sm:h-3 sm:w-3" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#00ca4e] sm:h-3 sm:w-3" />
          </div>

          <span className="ml-3 hidden text-sm text-white/70 sm:ml-6 sm:inline-block">
            DNDC Student Analytics
          </span>

          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="ml-2 flex items-center gap-1.5 rounded-full bg-[#16c78422] px-2.5 py-1 sm:ml-5 sm:gap-2 sm:px-3"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#16C784] sm:h-2 sm:w-2" />
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#16C784] sm:text-[11px]">
              Live
            </span>
          </motion.div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden h-10 w-[260px] items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 md:flex">
            <Search size={18} className="text-white/40" />

            <input
              placeholder="Search students..."
              className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
            />
          </div>

          <button className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] sm:h-10 sm:w-10">
            <Bell size={18} className="text-white/70" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#E26743]" />
          </button>

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-2 py-1.5 sm:gap-3 sm:px-3 sm:py-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#E26743] to-[#F89C5A] font-semibold text-white sm:h-9 sm:w-9">
              S
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-medium text-white">Siddharth</p>
              <p className="text-xs text-white/40">Founder</p>
            </div>

            <ChevronDown size={16} className="text-white/40" />
          </div>
        </div>
      </div>

      {/* BODY */}

      <div className="grid h-[calc(100%-56px)] grid-cols-1 lg:grid-cols-[240px_1fr]">
        {/* LEFT SIDEBAR */}

        <aside className="hidden border-r border-white/10 bg-white/[0.02] p-5 lg:block">
          <div className="mb-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#E2674310] p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E26743]">
              <GraduationCap className="text-white" size={24} />
            </div>

            <div>
              <h3 className="font-semibold text-white">DNDC</h3>
              <p className="text-xs text-white/50">Student Workspace</p>
            </div>
          </div>

          <div className="space-y-2">
            {menu.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.button
                  whileHover={{
                    x: 6,
                  }}
                  key={index}
                  className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 transition ${
                    item.active
                      ? "bg-[#E26743] text-white shadow-lg"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={19} />
                  <span className="text-sm">{item.title}</span>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-[#E26743]/20 to-transparent p-5">
            <Activity size={26} className="text-[#E26743]" />

            <h4 className="mt-4 font-semibold text-white">
              Placement Progress
            </h4>

            <p className="mt-2 text-sm leading-6 text-white/60">
              82% students are currently placement ready.
            </p>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "82%",
                }}
                transition={{
                  duration: 2,
                }}
                className="h-full rounded-full bg-[#E26743]"
              />
            </div>
          </div>
        </aside>

        {/* MAIN */}

        <main className="min-w-0 overflow-auto p-4 sm:p-7">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#E26743] sm:text-sm">
                Overview
              </p>

              <h1 className="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-4xl">
                Student Analytics Dashboard
              </h1>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white hover:bg-white/10 sm:w-auto sm:text-base">
              <Download size={18} />
              Export Report
            </button>
          </div>

          {/* KPI */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {kpis.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-[#E26743]/15 p-3">
                      <Icon className="text-[#E26743]" size={22} />
                    </div>

                    <div className="flex items-center gap-1 text-sm text-[#16C784]">
                      <ArrowUpRight size={15} />
                      {item.growth}
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-white/50 sm:mt-7">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-white sm:mt-3 sm:text-4xl">
                    <CountUp end={item.value} duration={2} />
                    {item.suffix}
                  </h2>

                  <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10 sm:mt-6">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: `${70 + index * 5}%`,
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.15,
                      }}
                      className="h-full rounded-full bg-[#E26743]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Analytics + Right Panel */}

          <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 xl:grid-cols-[1.6fr_420px]">
            {/* Growth Chart */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-6"
            >
              <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:mb-8 sm:flex-row sm:items-center sm:gap-0">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#E26743] sm:text-sm">
                    Analytics
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Student Growth
                  </h3>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 sm:px-4 sm:py-2 sm:text-sm">
                  Last 7 Months
                </div>
              </div>

              <div className="h-[250px] sm:h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient
                        id="studentsGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#E26743"
                          stopOpacity={0.55}
                        />

                        <stop
                          offset="100%"
                          stopColor="#E26743"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>

                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(255,255,255,.08)"
                    />

                    <XAxis
                      dataKey="month"
                      stroke="rgba(255,255,255,.45)"
                      tickLine={false}
                      axisLine={false}
                    />

                    <Tooltip
                      contentStyle={{
                        background: "#161A22",
                        border: "1px solid rgba(255,255,255,.08)",
                        borderRadius: 16,
                        color: "#fff",
                      }}
                    />

                    <Area
                      dataKey="students"
                      stroke="#E26743"
                      strokeWidth={3}
                      fill="url(#studentsGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-8 sm:grid-cols-4">
                {[
                  {
                    label: "Active",
                    value: "1,124",
                  },
                  {
                    label: "New",
                    value: "214",
                  },
                  {
                    label: "Completed",
                    value: "368",
                  },
                  {
                    label: "Placed",
                    value: "126",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/40 sm:text-xs">
                      {item.label}
                    </p>

                    <h4 className="mt-2 text-xl font-bold text-white sm:mt-3 sm:text-2xl">
                      {item.value}
                    </h4>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side */}

            <div className="space-y-6">
              {/* Attendance */}

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#E26743] sm:text-sm">
                      Attendance
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                      Today's Status
                    </h3>
                  </div>

                  <ClipboardCheck
                    size={28}
                    className="text-[#E26743]"
                  />
                </div>

                <div className="mt-6 flex justify-center sm:mt-8">
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-[10px] border-[#E26743]/20 sm:h-52 sm:w-52 sm:border-[14px]">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                      className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#E26743]/10 sm:h-40 sm:w-40"
                    >
                      <span className="text-4xl font-bold text-white sm:text-5xl">
                        94%
                      </span>

                      <span className="mt-2 text-xs text-white/50 sm:text-sm">
                        Present
                      </span>
                    </motion.div>
                  </div>
                </div>

                <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                  {[
                    {
                      title: "Present",
                      value: "1,168",
                      color: "#16C784",
                    },
                    {
                      title: "Absent",
                      value: "58",
                      color: "#ff5b5b",
                    },
                    {
                      title: "Leave",
                      value: "20",
                      color: "#F89C5A",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"
                          style={{
                            background: item.color,
                          }}
                        />

                        <span className="text-sm text-white/70 sm:text-base">
                          {item.title}
                        </span>
                      </div>

                      <span className="font-semibold text-white">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Stats */}

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#E26743]/15 to-transparent p-5 sm:p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#E26743] sm:text-sm">
                  Quick Summary
                </p>

                <div className="mt-5 space-y-5 sm:mt-6 sm:space-y-6">
                  {[
                    {
                      title: "Average Course Progress",
                      value: "78%",
                    },
                    {
                      title: "Assignments Submitted",
                      value: "92%",
                    },
                    {
                      title: "Projects Completed",
                      value: "381",
                    },
                    {
                      title: "Placement Ready",
                      value: "82%",
                    },
                  ].map((item) => (
                    <div key={item.title}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs text-white/60 sm:text-sm">
                          {item.title}
                        </span>

                        <span className="text-sm font-semibold text-white sm:text-base">
                          {item.value}
                        </span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10 sm:h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: item.value.includes("%")
                              ? item.value
                              : "88%",
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2 }}
                          className="h-full rounded-full bg-[#E26743]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}

          <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 xl:grid-cols-[1.45fr_1fr]">
            {/* Recent Students */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              <div className="flex flex-col items-start justify-between border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:px-6 sm:py-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#E26743] sm:text-sm">
                    Students
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-white sm:mt-2 sm:text-2xl">
                    Recent Enrollments
                  </h3>
                </div>

                <button className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 sm:block">
                  View All
                </button>
              </div>

              <div className="divide-y divide-white/10">
                {[
                  {
                    name: "Aarav Sharma",
                    course: "MERN Stack",
                    progress: 92,
                    status: "Active",
                  },
                  {
                    name: "Priya Patel",
                    course: "Data Analytics",
                    progress: 81,
                    status: "Active",
                  },
                  {
                    name: "Rahul Verma",
                    course: "Java Full Stack",
                    progress: 74,
                    status: "Learning",
                  },
                  {
                    name: "Sneha Gupta",
                    course: "Python Full Stack",
                    progress: 95,
                    status: "Excellent",
                  },
                  {
                    name: "Aditya Singh",
                    course: "Digital Marketing",
                    progress: 68,
                    status: "Learning",
                  },
                ].map((student) => (
                  <div
                    key={student.name}
                    className="flex flex-col items-start justify-between gap-4 px-5 py-4 transition hover:bg-white/[0.03] sm:flex-row sm:items-center sm:gap-0 sm:px-6 sm:py-5"
                  >
                    <div className="flex w-full items-center justify-between sm:w-auto sm:justify-start sm:gap-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#E26743] to-[#F89C5A] font-semibold text-white sm:h-12 sm:w-12">
                          {student.name.charAt(0)}
                        </div>

                        <div>
                          <h4 className="font-medium text-white">
                            {student.name}
                          </h4>

                          <p className="text-xs text-white/45 sm:text-sm">
                            {student.course}
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full bg-[#16C78422] px-2.5 py-1 text-[10px] text-[#16C784] sm:hidden">
                        {student.status}
                      </span>
                    </div>

                    <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end sm:gap-8">
                      <div className="w-full sm:w-44">
                        <div className="mb-1.5 flex justify-between text-[10px] sm:mb-2 sm:text-xs">
                          <span className="text-white/50">Progress</span>
                          <span className="text-white">
                            {student.progress}%
                          </span>
                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10 sm:h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${student.progress}%`,
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="h-full rounded-full bg-[#E26743]"
                          />
                        </div>
                      </div>

                      <span className="hidden rounded-full bg-[#16C78422] px-3 py-1 text-xs text-[#16C784] sm:block">
                        {student.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column */}

            <div className="space-y-6">
              {/* Top Performers */}

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  🏆 Top Performers
                </h3>

                <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
                  {[
                    {
                      name: "Sneha Gupta",
                      score: "98%",
                    },
                    {
                      name: "Aarav Sharma",
                      score: "96%",
                    },
                    {
                      name: "Priya Patel",
                      score: "94%",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E26743] text-sm font-semibold text-white sm:h-11 sm:w-11 sm:text-base">
                          {index + 1}
                        </div>

                        <span className="text-sm text-white sm:text-base">
                          {item.name}
                        </span>
                      </div>

                      <span className="font-semibold text-[#16C784]">
                        {item.score}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Activity */}

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  Latest Activity
                </h3>

                <div className="mt-5 space-y-5 sm:mt-6 sm:space-y-6">
                  {[
                    "25 students completed React Module.",
                    "12 new admissions today.",
                    "MERN Batch submitted Capstone Projects.",
                    "Certificates generated for Data Analytics.",
                    "Placement drive scheduled for Friday.",
                  ].map((activity, index) => (
                    <div key={activity} className="flex gap-3 sm:gap-4">
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#E26743] sm:h-3 sm:w-3" />

                      <div>
                        <p className="text-xs text-white/80 sm:text-sm">
                          {activity}
                        </p>

                        <span className="text-[10px] text-white/40 sm:text-xs">
                          {index + 1} hour ago
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Upcoming */}

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#E26743]/20 to-transparent p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  Upcoming Events
                </h3>

                <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                  {[
                    "React Hackathon",
                    "Resume Building Workshop",
                    "Campus Placement Drive",
                    "AI Masterclass",
                  ].map((event) => (
                    <div
                      key={event}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 sm:px-4 sm:py-3"
                    >
                      <span className="text-xs text-white sm:text-sm">
                        {event}
                      </span>

                      <span className="text-[10px] text-[#E26743] sm:text-xs">
                        Upcoming
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}