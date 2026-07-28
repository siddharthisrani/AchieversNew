"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
 animate,
useMotionValue,
} from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  FolderGit2,
  Rocket,
} from "lucide-react";

const journey = [
  {
    id: 1,
    nav: "Learn",
    step: "STEP 01",
    title: "Learn From",
    accent: "Scratch.",
    description:
      "Start your development journey with structured live classes, industry-designed curriculum and mentor guidance. Even if you've never written code before, we'll help you build a strong foundation.",
    highlights: [
      "Live Interactive Classes",
      "Industry Curriculum",
      "Beginner Friendly",
    ],
    icon: BookOpen,
    type: "learn",
  },
  {
    id: 2,
    nav: "Practice",
    step: "STEP 02",
    title: "Practice",
    accent: "Daily.",
    description:
      "Strengthen your concepts through coding exercises, assignments and real-world problem solving every single day.",
    highlights: [
      "Daily Challenges",
      "Mentor Reviews",
      "Coding Exercises",
    ],
    icon: Code2,
    type: "practice",
  },
  {
    id: 3,
    nav: "Projects",
    step: "STEP 03",
    title: "Build Real",
    accent: "Projects.",
    description:
      "Create portfolio-worthy applications using modern technologies and collaborative development workflows.",
    highlights: [
      "GitHub Workflow",
      "Production Projects",
      "Deployment",
    ],
    icon: FolderGit2,
    type: "projects",
  },
  {
    id: 4,
    nav: "Placement",
    step: "STEP 04",
    title: "Placement",
    accent: "Preparation.",
    description:
      "Prepare with resume building, aptitude sessions, mock interviews and technical guidance from industry mentors.",
    highlights: [
      "Resume Building",
      "Mock Interviews",
      "Communication Skills",
    ],
    icon: BriefcaseBusiness,
    type: "placement",
  },
  {
    id: 5,
    nav: "Career",
    step: "STEP 05",
    title: "Launch Your",
    accent: "Career.",
    description:
      "Graduate with confidence through internships, placement assistance and career mentorship that prepares you for the tech industry.",
    highlights: [
      "Internship Support",
      "Placement Assistance",
      "Career Guidance",
    ],
    icon: Rocket,
    type: "career",
  },
] as const;

type JourneyItem = (typeof journey)[number];

export default function AboutDNDC() {
 const sectionRef = useRef<HTMLElement>(null);

const containerX = useMotionValue(0);

const [activeSlide, setActiveSlide] = useState(0);

const isAnimating = useRef(false);

const slideWidth = useRef(0);

const wheelTimeout = useRef<NodeJS.Timeout | null>(null);

const isLocked = useRef(false);

const lastSlide = journey.length - 1;

useEffect(() => {
  const section = sectionRef.current;

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      isLocked.current = entry.isIntersecting;
    },
    {
      threshold: 0.6,
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);

useEffect(() => {
  const handleWheel = (e: WheelEvent) => {
    if (!isLocked.current) return;

    if (isAnimating.current) {
      e.preventDefault();
      return;
    }

    if (wheelTimeout.current) return;

    const down = e.deltaY > 0;
    const up = e.deltaY < 0;

    if (down && activeSlide < lastSlide) {
      e.preventDefault();

      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = null;
      }, 650);

      setActiveSlide((prev) => prev + 1);

      return;
    }

    if (up && activeSlide > 0) {
      e.preventDefault();

      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = null;
      }, 650);

      setActiveSlide((prev) => prev - 1);

      return;
    }
  };

  window.addEventListener("wheel", handleWheel, {
    passive: false,
  });

  return () => {
    window.removeEventListener("wheel", handleWheel);
  };
}, [activeSlide]);


useEffect(() => {
  const update = () => {
    slideWidth.current = window.innerWidth;
  };

  update();

  window.addEventListener("resize", update);

  return () => window.removeEventListener("resize", update);
}, []);

useEffect(() => {
  animate(
    containerX,
    -(activeSlide * slideWidth.current),
    {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      onPlay: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    }
  );
}, [activeSlide]);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative h-[450vh] bg-[#090909]"
    >
      <div
        className="
          sticky
          top-20
          h-[calc(100vh-80px)]
          overflow-hidden
        "
      >
        <Background />

        <JourneyHeader activeSlide={activeSlide} />

        <motion.div
    style={{
        x: containerX,
    }}
          className="relative z-20 flex h-full will-change-transform"
        >
          {journey.map((item,index) => (
            <JourneySlide
              key={item.id}
              item={item}
            />
          ))}
        </motion.div>

        <JourneyProgress
          activeSlide={activeSlide}
        />
      </div>
    </section>
  );
}
/* -------------------------------------------------------------------------- */
/* These components will be built in Part 1B                                  */
/* -------------------------------------------------------------------------- */

function Background() {
  return (
    <>
      {/* Main Background */}
      <div className="absolute inset-0 bg-[#090909]" />

      {/* Large Orange Glow */}
      <div className="absolute left-[-220px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-[#F97316]/10 blur-[220px]" />

      {/* Right Glow */}
      <div className="absolute right-[-180px] top-[15%] h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[180px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,.65)_100%)]" />
    </>
  );
}

function JourneyHeader({
    activeSlide,
}:{
    activeSlide:number;
}){

return(

<div className="absolute left-1/2 top-10 z-40 w-full max-w-[1500px] -translate-x-1/2 px-12">

<p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
YOUR LEARNING JOURNEY
</p>

<div className="mt-7 flex gap-7">

{journey.map((item,index)=>(

<div
key={item.id}
className="flex items-center gap-7"
>

<button
className={`relative pb-2 transition-all duration-500 ${
activeSlide===index
?"text-white"
:"text-white/40"
}`}
>

{item.nav}

<div
className={`absolute left-0 bottom-0 h-[2px] rounded-full bg-orange-500 transition-all duration-500 ${
activeSlide===index
?"w-full"
:"w-0"
}`}
/>

</button>

{index!==journey.length-1&&(
<div className="h-px w-10 bg-white/10"/>
)}

</div>

))}

</div>

<div className="mt-8 h-px bg-white/10"/>

</div>

)

}

function JourneyProgress({
activeSlide,
}:{
activeSlide:number;
}){

return(

<div className="absolute bottom-10 left-1/2 z-40 w-full max-w-[1500px] -translate-x-1/2 px-12">

<div className="relative h-[2px] bg-white/10">

<div
className="absolute h-full bg-orange-500 transition-all duration-700"
style={{
width:`${((activeSlide+1)/journey.length)*100}%`
}}
/>

</div>

<div className="mt-6 flex justify-between">

{journey.map((item,index)=>(

<div
key={item.id}
className="flex flex-col items-center gap-3"
>

<div
className={`h-4 w-4 rounded-full border border-orange-500 transition-all duration-500 ${
activeSlide>=index
?"bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,.9)]"
:"bg-[#090909]"
}`}
/>

<span
className={`text-xs uppercase tracking-[0.25em] transition-all duration-500 ${
activeSlide>=index
?"text-white"
:"text-white/35"
}`}
>

{item.nav}

</span>

</div>

))}

</div>

</div>

)

}

function JourneySlide({
  item,
}: {
  item: JourneyItem;
}) {
  const Icon = item.icon;

  return (
   <section className="flex h-[calc(100vh-80px)] w-screen items-center justify-center px-12">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-[1.08fr_.92fr] items-center gap-20">

        {/* ---------------------------------------------------------------- */}
        {/* LEFT SIDE - SOFTWARE UI (Coming in Part 1C-2)                    */}
        {/* ---------------------------------------------------------------- */}

      <div className="flex justify-start">
  <div className="relative h-[460px] w-full max-w-[760px] overflow-hidden rounded-[30px] border border-white/10 bg-[#111111] shadow-[0_40px_120px_rgba(0,0,0,.45)]">

    {/* Glow */}

    <div className="absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

    {/* Window Header */}

    <div className="relative z-10 flex h-14 items-center justify-between border-b border-white/10 px-6">

      <div className="flex items-center gap-2">

        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />

      </div>

      <h4 className="text-sm font-medium tracking-wide text-white/80">
        DNDC Learning OS
      </h4>

      <div className="rounded-full bg-orange-500/15 px-3 py-1 text-[11px] font-medium text-orange-300">
        LIVE
      </div>

    </div>

    {/* Window Body */}

    <div className="grid h-[calc(100%-56px)] grid-cols-[70px_1fr]">

      {/* Sidebar */}

      <div className="border-r border-white/10 bg-[#0D0D0D]">

        {journey.map((step) => {

          const StepIcon = step.icon;

          const active = step.id === item.id;

          return (

            <div
              key={step.id}
              className={`mt-4 mx-auto flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${
                active
                  ? "bg-orange-500 text-black"
                  : "text-white/35 hover:bg-white/5"
              }`}
            >

              <StepIcon size={18} />

            </div>

          );

        })}

      </div>

      {/* Dynamic Screen */}

      <div className="relative overflow-hidden">

   {item.type === "learn" && <LearnScreen />}

{item.type === "practice" && <PracticeScreen />}

{item.type === "projects" && <ProjectsScreen />}

{item.type === "placement" && <PlacementScreen />}

{item.type === "career" && <CareerScreen />}

      </div>

    </div>

  </div>
</div>

        {/* ---------------------------------------------------------------- */}
        {/* RIGHT SIDE                                                       */}
        {/* ---------------------------------------------------------------- */}

        <div className="max-w-[520px]">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
            {item.step}
          </p>

          <h2 className="mt-6 text-[clamp(3.4rem,5vw,6rem)] font-bold leading-[0.95] tracking-tight text-white">

            {item.title}

            <span className="block text-orange-500">
              {item.accent}
            </span>

          </h2>

          <p className="mt-8 text-[17px] leading-8 text-white/65">
            {item.description}
          </p>

          <div className="mt-10 space-y-5">

            {item.highlights.map((feature) => (

              <div
                key={feature}
                className="flex items-center gap-4"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10">

                  <CheckCircle2
                    className="text-orange-400"
                    size={20}
                  />

                </div>

                <span className="text-lg text-white/90">
                  {feature}
                </span>

              </div>

            ))}

          </div>

          <Link
            href="/courses"
            className="group mt-12 inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-orange-500 px-7 py-3.5 font-medium text-black transition-all duration-300 hover:scale-[1.03]"
          >

            Explore Programs

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />

          </Link>

        </div>

      </div>
    </section>
  );
}

function LearnScreen() {

  return (

    <div className="flex h-full flex-col p-8">

      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-white/45">
            Welcome back,
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            Continue Learning
          </h2>

        </div>

        <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 px-4 py-2">

          <span className="text-xs uppercase tracking-[0.25em] text-orange-300">

            LEVEL 03

          </span>

        </div>

      </div>

      {/* Hero Card */}

      <div className="relative mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#1A1A1A] to-[#111111] p-7">

        <div className="absolute right-[-40px] top-[-30px] h-48 w-48 rounded-full bg-orange-500/10 blur-[90px]" />

        <p className="relative text-xs uppercase tracking-[0.25em] text-orange-300">

          CURRENT COURSE

        </p>

        <h3 className="relative mt-3 text-[28px] font-bold text-white">

          MERN Stack Development

        </h3>

        <p className="relative mt-3 max-w-md text-sm leading-7 text-white/55">

          Learn modern web development through live coding,
          practical assignments and production-level projects.

        </p>

        {/* Progress */}

        <div className="relative mt-8">

          <div className="flex justify-between text-sm">

            <span className="text-white/50">

              Course Progress

            </span>

            <span className="font-medium text-orange-300">

              72%

            </span>

          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">

            <motion.div

              initial={{ width: 0 }}

              whileInView={{ width: "72%" }}

              transition={{
                duration: 1,
              }}

              className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-300"

            />

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="mt-7 grid grid-cols-3 gap-4">

        <InfoCard

          title="Modules"

          value="18"

        />

        <InfoCard

          title="Projects"

          value="12"

        />

        <InfoCard

          title="Mentors"

          value="06"

        />

      </div>

    </div>

  );

}


function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <p className="text-xs uppercase tracking-[0.2em] text-white/35">

        {title}

      </p>

      <h3 className="mt-3 text-3xl font-bold text-white">

        {value}

      </h3>

    </div>
  );
}



function ExplorerItem({
  name,
  active = false,
}: {
  name: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition-all ${
        active
          ? "bg-orange-500/10 text-orange-300"
          : "text-white/50 hover:bg-white/5 hover:text-white"
      }`}
    >
      <div
        className={`h-2 w-2 rounded-full ${
          active ? "bg-orange-400" : "bg-white/20"
        }`}
      />

      <span className="text-sm">{name}</span>
    </div>
  );
}

function TerminalPanel() {
  return (
    <div className="border-r border-white/10 bg-[#0D0D0E]">

      <div className="flex h-11 items-center justify-between border-b border-white/10 px-5">

        <span className="text-xs uppercase tracking-[0.25em] text-white/40">

          Terminal

        </span>

        <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] text-emerald-400">

          Running

        </span>

      </div>

      <div className="space-y-3 p-5 font-mono text-[13px]">

        <TerminalLine
          success
          text="npm install"
        />

        <TerminalLine
          success
          text="npm run dev"
        />

        <TerminalLine
          success
          text="Compiled successfully"
        />

        <TerminalLine
          success
          text="Ready in 314ms"
        />

        <TerminalLine
          text="Local: http://localhost:3000"
        />

      </div>

    </div>
  );
}

function TerminalLine({
  text,
  success = false,
}: {
  text: string;
  success?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">

      <div
        className={`h-2 w-2 rounded-full ${
          success
            ? "bg-emerald-400"
            : "bg-orange-400"
        }`}
      />

      <span className="text-white/70">
        {text}
      </span>

    </div>
  );
}

function PreviewPanel() {
  return (
    <div className="bg-[#111112]">

      <div className="flex h-11 items-center justify-between border-b border-white/10 px-5">

        <span className="text-xs uppercase tracking-[0.25em] text-white/40">

          Live Preview

        </span>

        <div className="flex gap-2">

          <div className="h-2 w-2 rounded-full bg-orange-400" />

          <div className="h-2 w-2 rounded-full bg-white/25" />

          <div className="h-2 w-2 rounded-full bg-white/25" />

        </div>

      </div>

      <div className="flex h-[calc(100%-44px)] items-center justify-center p-6">

        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-36 w-48 overflow-hidden rounded-2xl border border-white/10 bg-[#181818]"
        >

          <div className="h-8 border-b border-white/10 bg-[#202020]" />

          <div className="space-y-3 p-4">

            <div className="h-4 w-24 rounded-full bg-orange-500/80" />

            <div className="h-3 w-full rounded-full bg-white/10" />

            <div className="h-3 w-3/4 rounded-full bg-white/10" />

            <div className="mt-5 h-9 rounded-xl bg-orange-500/20" />

          </div>

        </motion.div>

      </div>

    </div>
  );
}

function CodeLine({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="whitespace-nowrap">
      {children}
    </div>
  );
}

function PracticeScreen() {
  return (
    <div className="flex h-full flex-col bg-[#0F0F10]">

      {/* ================= HEADER ================= */}

      <div className="flex h-12 items-center justify-between border-b border-white/10 px-5">

        <div className="flex items-center gap-3">

          <div className="h-2.5 w-2.5 rounded-full bg-orange-500" />

          <span className="text-sm font-medium text-white">
            VS Code Workspace
          </span>

        </div>

        <div className="flex items-center gap-2">

          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-medium text-emerald-400">
            Auto Saved
          </span>

        </div>

      </div>

      {/* ================= BODY ================= */}

      <div className="grid flex-1 grid-cols-[220px_1fr]">

        {/* ================= EXPLORER ================= */}

        <div className="border-r border-white/10 bg-[#131314]">

          <div className="border-b border-white/10 px-5 py-4">

            <p className="text-[11px] uppercase tracking-[0.28em] text-white/35">
              Explorer
            </p>

          </div>

          <div className="space-y-2 p-4">

            <ExplorerItem
              active
              name="App.tsx"
            />

            <ExplorerItem
              name="Navbar.tsx"
            />

            <ExplorerItem
              name="Hero.tsx"
            />

            <ExplorerItem
              name="Button.tsx"
            />

            <ExplorerItem
              name="CourseCard.tsx"
            />

            <ExplorerItem
              name="Footer.tsx"
            />

          </div>

        </div>

        {/* ================= EDITOR ================= */}

        <div className="flex flex-col">

          {/* Tabs */}

          <div className="flex h-12 items-center border-b border-white/10 bg-[#151516]">

            <div className="flex h-full items-center border-r border-white/10 bg-[#1B1B1D] px-5">

              <span className="text-sm text-orange-300">
                App.tsx
              </span>

            </div>

            <div className="flex h-full items-center border-r border-white/10 px-5">

              <span className="text-sm text-white/40">
                Navbar.tsx
              </span>

            </div>

            <div className="flex h-full items-center px-5">

              <span className="text-sm text-white/40">
                Hero.tsx
              </span>

            </div>

          </div>

          {/* Editor */}

         {/* Editor */}

<div className="flex flex-1 flex-col">

  {/* Code Editor */}

  <div className="relative flex-1 overflow-hidden bg-[#111112]">

    {/* Orange Glow */}

    <div className="absolute right-[-60px] top-[-60px] h-48 w-48 rounded-full bg-orange-500/10 blur-[100px]" />

    <div className="relative flex h-full">

      {/* Line Numbers */}

      <div className="flex w-14 flex-col items-end border-r border-white/5 bg-[#0E0E0F] px-3 py-6 text-[13px] leading-8 text-white/20">

        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i}>{i + 1}</span>
        ))}

      </div>

      {/* Code */}

      <div className="flex-1 overflow-hidden px-6 py-6 font-mono text-[14px] leading-8">

        {/* Your existing CodeLine JSX stays here */}

      </div>

    </div>

  </div>

  {/* Bottom Workspace */}

  <div className="grid h-52 grid-cols-[1.2fr_320px] border-t border-white/10">

    <TerminalPanel />

    <PreviewPanel />

  </div>

</div>

        </div>

      </div>

    </div>
  );
}

function ProjectsScreen() {
  return (
    <div className="flex h-full flex-col bg-[#101011]">

      {/* Header */}

      <div className="flex h-14 items-center justify-between border-b border-white/10 px-6">

        <div>

          <p className="text-xs uppercase tracking-[0.25em] text-orange-300">
            Project Workspace
          </p>

          <h2 className="mt-1 text-xl font-semibold text-white">
            Build. Commit. Deploy.
          </h2>

        </div>

        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-xs font-medium text-emerald-400">
          Production Ready
        </span>

      </div>

      {/* Main */}

      <div className="grid flex-1 grid-cols-[320px_1fr]">

        <RepositorySidebar />

        <ProjectWorkspace />

      </div>

    </div>
  );
}

function RepositorySidebar() {
  return (
    <div className="border-r border-white/10 bg-[#131314]">

      <div className="border-b border-white/10 p-5">

        <p className="text-xs uppercase tracking-[0.22em] text-white/35">
          Repository
        </p>

        <h3 className="mt-3 text-lg font-semibold text-white">
          DNDC Student Portal
        </h3>

      </div>

      <div className="space-y-3 p-5">

        <BranchCard
          active
          branch="main"
        />

        <BranchCard
          branch="feature/auth"
        />

        <BranchCard
          branch="feature/dashboard"
        />

        <BranchCard
          branch="feature/payment"
        />

      </div>

      <div className="border-t border-white/10 p-5">

        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/35">
          Recent Commits
        </p>

        <CommitItem
          message="Added Login Authentication"
          time="2 min ago"
        />

        <CommitItem
          message="Updated Dashboard UI"
          time="14 min ago"
        />

        <CommitItem
          message="Responsive Navbar"
          time="31 min ago"
        />

      </div>

    </div>
  );
}

function BranchCard({
  branch,
  active = false,
}: {
  branch: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 transition ${
        active
          ? "border-orange-500/20 bg-orange-500/10"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      <p
        className={`text-sm ${
          active ? "text-orange-300" : "text-white/65"
        }`}
      >
        {branch}
      </p>
    </div>
  );
}

function CommitItem({
  message,
  time,
}: {
  message: string;
  time: string;
}) {
  return (
    <div className="mb-4 flex items-start gap-3">

      <div className="mt-1 h-2 w-2 rounded-full bg-orange-400" />

      <div>

        <p className="text-sm text-white">
          {message}
        </p>

        <p className="mt-1 text-xs text-white/35">
          {time}
        </p>

      </div>

    </div>
  );
}

function ProjectWorkspace() {
  return (
    <div className="relative flex flex-col overflow-hidden">

      <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-orange-500/10 blur-[120px]" />

     <div className="relative flex h-full flex-col p-8">

  {/* Deployment Pipeline */}

  <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4">

    <PipelineCard
      title="Git Commit"
      subtitle="8 Files Changed"
      icon="🌿"
      active
    />

    <PipelineArrow />

    <PipelineCard
      title="Pull Request"
      subtitle="Approved"
      icon="🔀"
      active
    />

    <PipelineArrow />

    <PipelineCard
      title="Production"
      subtitle="Live"
      icon="🚀"
      active
    />

  </div>

  {/* Deployment Panel */}

  <div className="mt-8 grid flex-1 grid-cols-[1.15fr_340px] gap-6">

    <GitGraph />

    <DeploymentCard />

  </div>

</div>

    </div>
  );
}

function PipelineCard({
  title,
  subtitle,
  icon,
  active = false,
}: {
  title: string;
  subtitle: string;
  icon: string;
  active?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`rounded-3xl border p-5 transition ${
        active
          ? "border-orange-500/20 bg-orange-500/10"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="text-2xl">{icon}</div>

      <h3 className="mt-4 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-1 text-sm text-white/45">
        {subtitle}
      </p>

    </motion.div>
  );
}

function PipelineArrow() {
  return (
    <motion.div
      animate={{
        x: [0, 6, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.6,
      }}
      className="text-2xl text-orange-400"
    >
      →
    </motion.div>
  );
}

function GitGraph() {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[#171717] p-6">

      <div className="flex items-center justify-between">

        <h3 className="text-lg font-semibold text-white">
          Commit Activity
        </h3>

        <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs text-orange-300">
          Today
        </span>

      </div>

      <div className="mt-8 space-y-6">

        <CommitNode
          title="Initial Landing Page"
          color="bg-orange-400"
        />

        <CommitNode
          title="Authentication Module"
          color="bg-emerald-400"
        />

        <CommitNode
          title="Student Dashboard"
          color="bg-sky-400"
        />

        <CommitNode
          title="Payment Integration"
          color="bg-violet-400"
        />

      </div>

    </div>
  );
}

function CommitNode({
  title,
  color,
}: {
  title: string;
  color: string;
}) {
  return (
    <div className="flex items-start gap-4">

      <div className="flex flex-col items-center">

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className={`h-4 w-4 rounded-full ${color}`}
        />

        <div className="mt-1 h-12 w-px bg-white/10" />

      </div>

      <div>

        <h4 className="font-medium text-white">
          {title}
        </h4>

        <p className="mt-1 text-sm text-white/40">
          Successfully committed to repository.
        </p>

      </div>

    </div>
  );
}

function DeploymentCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
      className="rounded-[30px] border border-white/10 bg-[#181818] p-6"
    >

      <p className="text-xs uppercase tracking-[0.25em] text-orange-300">
        Deployment
      </p>

      <h3 className="mt-3 text-2xl font-bold text-white">
        Production Live
      </h3>

      <div className="mt-8 space-y-5">

        <StatusRow
          label="Build"
          value="Passed"
        />

        <StatusRow
          label="Tests"
          value="Passed"
        />

        <StatusRow
          label="Deployment"
          value="Completed"
        />

        <StatusRow
          label="Environment"
          value="Production"
        />

      </div>

      <motion.div
        animate={{
          boxShadow: [
            "0 0 0 rgba(249,115,22,0)",
            "0 0 25px rgba(249,115,22,.35)",
            "0 0 0 rgba(249,115,22,0)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="mt-8 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-4 text-center font-semibold text-white"
      >
        View Live Project
      </motion.div>

    </motion.div>
  );
}

function StatusRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-white/45">
        {label}
      </span>

      <span className="flex items-center gap-2 font-medium text-emerald-400">

        <span className="h-2 w-2 rounded-full bg-emerald-400" />

        {value}

      </span>

    </div>
  );
}

function PlacementScreen() {
  return (
    <div className="flex h-full flex-col bg-[#101011]">

      {/* Header */}

      <div className="flex h-14 items-center justify-between border-b border-white/10 px-6">

        <div>

          <p className="text-xs uppercase tracking-[0.25em] text-orange-300">
            Placement Hub
          </p>

          <h2 className="mt-1 text-xl font-semibold text-white">
            From Interview to Offer
          </h2>

        </div>

        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-xs font-medium text-emerald-400">
          Interview Ready
        </span>

      </div>

      {/* Body */}

      <div className="grid flex-1 grid-cols-[330px_1fr]">

        <PlacementSidebar />

        <InterviewWorkspace />

      </div>

    </div>
  );
}

function PlacementSidebar() {
  return (
    <div className="border-r border-white/10 bg-[#131314]">

      <div className="border-b border-white/10 p-6">

        <p className="text-xs uppercase tracking-[0.25em] text-white/35">
          Candidate
        </p>

        <h3 className="mt-3 text-xl font-semibold text-white">
          Siddharth Sharma
        </h3>

        <p className="mt-2 text-sm text-white/45">
          MERN Stack Developer
        </p>

      </div>

      <div className="space-y-4 p-5">

        <PlacementStat
          title="Resume Score"
          value="92%"
        />

        <PlacementStat
          title="Mock Interviews"
          value="14"
        />

        <PlacementStat
          title="Projects"
          value="12"
        />

      </div>

      <div className="border-t border-white/10 p-5">

        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/35">
          Applied Companies
        </p>

        <CompanyItem company="Google" />

        <CompanyItem company="Microsoft" />

        <CompanyItem company="Amazon" />

        <CompanyItem company="TCS" />

      </div>

    </div>
  );
}

function PlacementStat({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <p className="text-xs uppercase tracking-[0.2em] text-white/35">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-bold text-orange-300">
        {value}
      </h3>

    </div>
  );
}

function CompanyItem({
  company,
}: {
  company: string;
}) {
  return (
    <div className="mb-3 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">

      <span className="text-white/75">
        {company}
      </span>

      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

    </div>
  );
}

function InterviewWorkspace() {
  return (
    <div className="relative overflow-hidden">

      <div className="absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

     <div className="relative flex h-full flex-col p-8">

  {/* Hiring Pipeline */}

  <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-4">

    <InterviewStep
      title="Resume"
      subtitle="Reviewed"
      icon="📄"
      active
    />

    <PipelineArrow />

    <InterviewStep
      title="AI Interview"
      subtitle="Completed"
      icon="🤖"
      active
    />

    <PipelineArrow />

    <InterviewStep
      title="Technical"
      subtitle="Passed"
      icon="💻"
      active
    />

    <PipelineArrow />

    <InterviewStep
      title="Offer"
      subtitle="Ready"
      icon="🎉"
      active
    />

  </div>

  {/* Main Content */}

  <div className="mt-8 grid flex-1 grid-cols-[1.2fr_340px] gap-6">

    <InterviewPanel />

    <OfferPanel />

  </div>

</div>

    </div>
  );
}

function InterviewStep({
  title,
  subtitle,
  icon,
  active = false,
}: {
  title: string;
  subtitle: string;
  icon: string;
  active?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`rounded-3xl border p-5 transition ${
        active
          ? "border-orange-500/20 bg-orange-500/10"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="text-2xl">{icon}</div>

      <h3 className="mt-4 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-1 text-sm text-white/45">
        {subtitle}
      </p>

    </motion.div>
  );
}

function InterviewPanel() {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[#171717] p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-[0.25em] text-orange-300">
            AI Interview
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            Mock Interview Session
          </h3>

        </div>

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/15 text-2xl"
        >
          🤖
        </motion.div>

      </div>

      <div className="mt-8 space-y-5">

        <InterviewQuestion
          label="React Fundamentals"
          score="Excellent"
        />

        <InterviewQuestion
          label="JavaScript Problem Solving"
          score="Strong"
        />

        <InterviewQuestion
          label="System Design Basics"
          score="Good"
        />

        <InterviewQuestion
          label="Communication Skills"
          score="Excellent"
        />

      </div>

    </div>
  );
}

function InterviewQuestion({
  label,
  score,
}: {
  label: string;
  score: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">

      <span className="text-white/75">
        {label}
      </span>

      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
        {score}
      </span>

    </div>
  );
}

function OfferPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-[30px] border border-white/10 bg-[#181818] p-6"
    >

      <p className="text-xs uppercase tracking-[0.25em] text-orange-300">
        Final Status
      </p>

      <h3 className="mt-3 text-2xl font-bold text-white">
        Offer Letter Ready
      </h3>

      <div className="mt-8 space-y-5">

        <HiringStatus
          label="Resume Screening"
          done
        />

        <HiringStatus
          label="AI Mock Interview"
          done
        />

        <HiringStatus
          label="Technical Round"
          done
        />

        <HiringStatus
          label="HR Discussion"
          done
        />

      </div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8 w-full rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 py-4 font-semibold text-white"
      >
        Download Offer Letter
      </motion.button>

    </motion.div>
  );
}

function HiringStatus({
  label,
  done,
}: {
  label: string;
  done?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-white/55">
        {label}
      </span>

      <span
        className={`flex items-center gap-2 text-sm font-medium ${
          done
            ? "text-emerald-400"
            : "text-white/40"
        }`}
      >
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            done
              ? "bg-emerald-400"
              : "bg-white/20"
          }`}
        />

        {done ? "Completed" : "Pending"}

      </span>

    </div>
  );
}

function CareerScreen() {
  return (
    <div className="flex h-full flex-col bg-[#101011]">

      {/* Header */}

      <div className="flex h-14 items-center justify-between border-b border-white/10 px-6">

        <div>

          <p className="text-xs uppercase tracking-[0.25em] text-orange-300">
            Career Dashboard
          </p>

          <h2 className="mt-1 text-xl font-semibold text-white">
            Welcome To Your Professional Journey
          </h2>

        </div>

        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-xs font-medium text-emerald-400">
          Career Started
        </span>

      </div>

      {/* Body */}

      <div className="grid flex-1 grid-cols-[340px_1fr]">

        <CareerSidebar />

        <CareerWorkspace />

      </div>

    </div>
  );
}

function CareerSidebar() {
  return (
    <div className="border-r border-white/10 bg-[#131314]">

      <div className="border-b border-white/10 p-6">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-400 text-2xl font-bold text-white">

          SS

        </div>

        <h3 className="mt-5 text-xl font-semibold text-white">

          Siddharth Sharma

        </h3>

        <p className="mt-2 text-white/45">

          Software Engineer

        </p>

      </div>

      <div className="space-y-4 p-5">

        <CareerStat
          title="Experience"
          value="0 Years"
        />

        <CareerStat
          title="Projects Delivered"
          value="12"
        />

        <CareerStat
          title="Skills Verified"
          value="18"
        />

      </div>

      <div className="border-t border-white/10 p-5">

        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/35">

          Skills

        </p>

        <SkillBadge label="React" />

        <SkillBadge label="Next.js" />

        <SkillBadge label="Node.js" />

        <SkillBadge label="MongoDB" />

        <SkillBadge label="TypeScript" />

      </div>

    </div>
  );
}

function CareerStat({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <p className="text-xs uppercase tracking-[0.2em] text-white/35">

        {title}

      </p>

      <h3 className="mt-3 text-3xl font-bold text-orange-300">

        {value}

      </h3>

    </div>
  );
}

function SkillBadge({
  label,
}: {
  label: string;
}) {
  return (
    <span className="mb-2 mr-2 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-2 text-sm text-orange-300">

      {label}

    </span>
  );
}

function CareerWorkspace() {
  return (
    <div className="relative overflow-hidden">

      <div className="absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="relative flex h-full flex-col p-8">

  {/* Hero */}

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="relative overflow-hidden rounded-[34px] border border-orange-500/20 bg-gradient-to-br from-[#1D120A] via-[#181818] to-[#101010] p-8"
  >
    <div className="absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

    <div className="relative flex items-start justify-between">

      <div>

        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-emerald-400">
          Congratulations
        </span>

        <h2 className="mt-5 text-4xl font-bold leading-tight text-white">
          You're Hired!
        </h2>

        <p className="mt-4 max-w-xl text-white/55 leading-8">
          From learning your first HTML tag to building production-ready
          applications, you've completed your journey and stepped into your
          professional career.
        </p>

      </div>

      <motion.div
        animate={{
          rotate: [0, 8, -8, 0],
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="text-7xl"
      >
        🎉
      </motion.div>

    </div>

  </motion.div>

  {/* Bottom */}

  <div className="mt-7 grid flex-1 grid-cols-[1.1fr_340px] gap-6">

    <CareerTimeline />

    <CareerOfferCard />

  </div>

</div>

    </div>
  );
}

function CareerTimeline() {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[#171717] p-6">

      <p className="text-xs uppercase tracking-[0.25em] text-orange-300">
        Career Journey
      </p>

      <h3 className="mt-3 text-2xl font-bold text-white">
        Growth Timeline
      </h3>

      <div className="mt-8 space-y-7">

        <TimelineStep
          title="Student"
          subtitle="Started learning modern development."
          active
        />

        <TimelineStep
          title="Intern"
          subtitle="Worked on live industry projects."
          active
        />

        <TimelineStep
          title="Junior Developer"
          subtitle="Successfully placed in a tech company."
          active
        />

        <TimelineStep
          title="Senior Developer"
          subtitle="Continuous learning & career growth."
        />

      </div>

    </div>
  );
}

function TimelineStep({
  title,
  subtitle,
  active = false,
}: {
  title: string;
  subtitle: string;
  active?: boolean;
}) {
  return (
    <div className="flex gap-5">

      <div className="flex flex-col items-center">

        <div
          className={`h-4 w-4 rounded-full ${
            active
              ? "bg-orange-400"
              : "bg-white/20"
          }`}
        />

        <div className="mt-2 h-12 w-px bg-white/10" />

      </div>

      <div>

        <h4 className="font-semibold text-white">
          {title}
        </h4>

        <p className="mt-2 text-sm leading-7 text-white/45">
          {subtitle}
        </p>

      </div>

    </div>
  );
}

function CareerOfferCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: .6 }}
      className="rounded-[30px] border border-white/10 bg-[#181818] p-6"
    >

      <p className="text-xs uppercase tracking-[0.25em] text-orange-300">
        First Achievement
      </p>

      <h3 className="mt-3 text-2xl font-bold text-white">
        Dream Job
      </h3>

      <div className="mt-8 space-y-5">

        <OfferRow
          label="Role"
          value="Frontend Developer"
        />

        <OfferRow
          label="Company"
          value="Tech Company"
        />

        <OfferRow
          label="Employment"
          value="Full Time"
        />

        <OfferRow
          label="Status"
          value="Accepted"
          success
        />

      </div>

      <div className="mt-8 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5">

        <p className="text-xs uppercase tracking-[0.2em] text-orange-300">
          Next Goal
        </p>

        <h4 className="mt-2 text-lg font-semibold text-white">
          Keep Learning. Keep Growing.
        </h4>

        <p className="mt-3 text-sm leading-7 text-white/50">
          Technology never stops evolving—and neither should you. Continue
          building, experimenting, and growing throughout your career.
        </p>

      </div>

    </motion.div>
  );
}

function OfferRow({
  label,
  value,
  success = false,
}: {
  label: string;
  value: string;
  success?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-white/45">
        {label}
      </span>

      <span
        className={`font-medium ${
          success
            ? "text-emerald-400"
            : "text-white"
        }`}
      >
        {value}
      </span>

    </div>
  );
}

