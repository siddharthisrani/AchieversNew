"use client";

import { motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  BedDouble,
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardList,
  HeartPulse,
  LayoutDashboard,
  Search,
  Stethoscope,
  UsersRound,
} from "lucide-react";

const menu = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Patients", icon: UsersRound },
  { label: "Appointments", icon: CalendarDays },
  { label: "Clinical records", icon: ClipboardList },
];

const appointments = [
  {
    time: "09:30",
    name: "Aarav Sharma",
    type: "General consultation",
    doctor: "Dr. Mehta",
    state: "Checked in",
    avatar: "from-sky-400 to-blue-600",
  },
  {
    time: "10:00",
    name: "Meera Patel",
    type: "Cardiology follow-up",
    doctor: "Dr. Khanna",
    state: "In consultation",
    avatar: "from-rose-400 to-pink-600",
  },
  {
    time: "10:30",
    name: "Rohan Verma",
    type: "Lab report review",
    doctor: "Dr. Singh",
    state: "Waiting",
    avatar: "from-amber-400 to-orange-600",
  },
  {
    time: "11:15",
    name: "Ananya Gupta",
    type: "Pediatric consultation",
    doctor: "Dr. Shah",
    state: "Confirmed",
    avatar: "from-emerald-400 to-teal-600",
  },
];

const wards = [
  { name: "General Ward", used: 38, total: 48, color: "bg-teal-500" },
  { name: "ICU", used: 12, total: 14, color: "bg-rose-500" },
  { name: "Pediatrics", used: 20, total: 30, color: "bg-sky-500" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function HospitalERP() {
  return (
    <main className="h-full overflow-hidden bg-[#f4f8f8] text-[#173037]">
      <div className="grid h-full grid-cols-[52px_minmax(0,1fr)] sm:grid-cols-[158px_minmax(0,1fr)]">
        <aside className="flex flex-col border-r border-[#dbe8e7] bg-[#0e3b42] px-2 py-3 text-white sm:px-3">
          <div className="flex items-center gap-2 px-1">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-teal-400 text-[#0e3b42]">
              <HeartPulse className="h-4 w-4" />
            </span>
            <span className="hidden text-xs font-bold sm:block">
              Care<span className="text-teal-300">Sync</span>
            </span>
          </div>

          <p className="mt-7 hidden px-2 text-[8px] font-medium uppercase tracking-[.16em] text-white/35 sm:block">
            Clinical workspace
          </p>

          <nav className="mt-2 space-y-1">
            {menu.map(({ label, icon: Icon, active }) => (
              <button
                key={label}
                className={`flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-[10px] ${
                  active
                    ? "bg-white/12 text-white"
                    : "text-white/55 hover:bg-white/[.06] hover:text-white"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="hidden sm:block">{label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-xl border border-white/10 bg-white/[.06] p-2.5">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-teal-300 text-[8px] font-bold text-[#0e3b42]">
                DM
              </span>
              <div className="hidden sm:block">
                <p className="text-[9px] font-medium">Dr. Mehta</p>
                <p className="text-[7px] text-white/45">Medical Director</p>
              </div>
            </div>
          </div>
        </aside>

        <div className="min-w-0 overflow-y-auto px-3 py-3 sm:px-5 lg:px-6">
          <motion.header
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between gap-3"
          >
            <div>
              <p className="text-[9px] text-[#6c8488]">Thursday, 16 July 2026</p>
              <h1 className="mt-0.5 text-lg font-semibold tracking-tight sm:text-xl">
                Good morning, Dr. Mehta
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <button className="hidden h-7 items-center gap-1.5 rounded-md border border-[#d6e4e3] bg-white px-2 text-[9px] text-[#789094] sm:flex">
                <Search className="h-3 w-3" />
                Search patient or ID
              </button>

              <button className="relative grid h-7 w-7 place-items-center rounded-md border border-[#d6e4e3] bg-white text-[#557277]">
                <Bell className="h-3.5 w-3.5" />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-rose-500" />
              </button>
            </div>
          </motion.header>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              {
                label: "Patients today",
                value: "142",
                change: "+12.5%",
                icon: UsersRound,
                tone: "text-sky-600 bg-sky-50",
              },
              {
                label: "Open appointments",
                value: "38",
                change: "8 next hour",
                icon: CalendarDays,
                tone: "text-teal-600 bg-teal-50",
              },
              {
                label: "Bed occupancy",
                value: "81%",
                change: "70 of 86 beds",
                icon: BedDouble,
                tone: "text-rose-600 bg-rose-50",
              },
            ].map((stat, index) => (
              <motion.article
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.08 + index * 0.07 }}
                key={stat.label}
                className="rounded-xl border border-[#dce9e8] bg-white p-3.5 shadow-[0_3px_10px_rgba(20,62,67,.035)]"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`grid h-7 w-7 place-items-center rounded-lg ${stat.tone}`}
                  >
                    <stat.icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[8px] font-medium text-emerald-600">
                    {stat.change}
                  </span>
                </div>

                <p className="mt-3 text-xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[9px] text-[#71868a]">{stat.label}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.25fr)_minmax(230px,.75fr)]">
            <div className="space-y-5">
              <motion.section
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="relative overflow-hidden rounded-2xl bg-[#0e3b42] p-5 text-white"
              >
                <div className="absolute -right-6 -top-8 h-36 w-36 rounded-full border-[18px] border-teal-300/15" />

                <div className="relative flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[.14em] text-teal-300">
                      <Activity className="h-3 w-3" />
                      Live operational overview
                    </div>

                    <h2 className="mt-2 text-lg font-semibold">
                      Everything is running smoothly.
                    </h2>

                    <p className="mt-1 text-[10px] text-white/60">
                      Patient flow is 14% faster than this time last week.
                    </p>
                  </div>

                  <button className="flex items-center gap-1 rounded-lg bg-teal-300 px-3 py-2 text-[9px] font-semibold text-[#09343a]">
                    View live board
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </motion.section>

              <section>
                <Header title="Today&apos;s appointments" action="View calendar" />

                <div className="overflow-hidden rounded-xl border border-[#dce9e8] bg-white">
                  {appointments.map((appointment, index) => (
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.25 + index * 0.06 }}
                      key={appointment.name}
                      className="flex items-center gap-2.5 border-b border-[#edf3f2] p-3 last:border-0"
                    >
                      <div className="w-8 text-center">
                        <p className="text-[9px] font-semibold">
                          {appointment.time}
                        </p>
                        <p className="mt-0.5 text-[7px] text-[#839599]">AM</p>
                      </div>

                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br ${appointment.avatar} text-[8px] font-bold text-white`}
                      >
                        {appointment.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[10px] font-semibold">
                          {appointment.name}
                        </p>
                        <p className="mt-0.5 truncate text-[8px] text-[#70878b]">
                          {appointment.type} · {appointment.doctor}
                        </p>
                      </div>

                      <span
                        className={`hidden rounded-full px-2 py-1 text-[8px] font-medium sm:block ${
                          appointment.state === "In consultation"
                            ? "bg-teal-50 text-teal-700"
                            : appointment.state === "Waiting"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-slate-50 text-slate-500"
                        }`}
                      >
                        {appointment.state}
                      </span>

                      <ChevronRight className="h-3.5 w-3.5 text-[#a0b0b2]" />
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-5">
              <section className="rounded-xl border border-[#dce9e8] bg-white p-4">
                <Header title="Ward capacity" action="All wards" />

                <div className="mt-3 space-y-4">
                  {wards.map((ward) => (
                    <div key={ward.name}>
                      <div className="flex justify-between text-[9px]">
                        <span className="font-medium">{ward.name}</span>
                        <span className="text-[#70878b]">
                          {ward.used} / {ward.total}
                        </span>
                      </div>

                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#eaf0ef]">
                        <div
                          style={{
                            width: `${(ward.used / ward.total) * 100}%`,
                          }}
                          className={`h-full rounded-full ${ward.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-lg bg-rose-50 p-2 text-[8px] text-rose-700">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  ICU capacity is nearing its limit.
                </div>
              </section>

              <section className="rounded-xl border border-[#dce9e8] bg-white p-4">
                <Header title="Clinical alerts" action="See all" />

                <div className="mt-3 space-y-2">
                  {[
                    {
                      title: "3 lab reports pending review",
                      time: "12 min ago",
                      icon: ClipboardList,
                      color: "bg-amber-50 text-amber-600",
                    },
                    {
                      title: "New patient admission",
                      time: "26 min ago",
                      icon: UsersRound,
                      color: "bg-sky-50 text-sky-600",
                    },
                    {
                      title: "Pharmacy stock updated",
                      time: "1 hr ago",
                      icon: Check,
                      color: "bg-emerald-50 text-emerald-600",
                    },
                  ].map(({ title, time, icon: Icon, color }) => (
                    <div key={title} className="flex gap-2.5 rounded-lg p-1">
                      <span
                        className={`grid h-6 w-6 shrink-0 place-items-center rounded-md ${color}`}
                      >
                        <Icon className="h-3 w-3" />
                      </span>

                      <div>
                        <p className="text-[9px] font-medium">{title}</p>
                        <p className="mt-0.5 text-[7px] text-[#829397]">
                          {time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <motion.button
                whileHover={{ y: -2 }}
                className="flex w-full items-center justify-between rounded-xl bg-[#dff3f0] p-3 text-left"
              >
                <span>
                  <span className="block text-[10px] font-semibold text-[#155c59]">
                    Need clinical support?
                  </span>
                  <span className="mt-0.5 block text-[8px] text-[#4c827d]">
                    Contact the operations team.
                  </span>
                </span>
                <Stethoscope className="h-4 w-4 text-[#258078]" />
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
    <div className="flex items-center justify-between">
      <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
      <button className="flex items-center gap-0.5 text-[8px] font-medium text-teal-700 hover:text-teal-900">
        {action}
        <ChevronRight className="h-3 w-3" />
      </button>
    </div>
  );
}