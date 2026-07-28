"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Code2,
  Coffee,
  Database,
  Sparkles,
  Megaphone,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const courses = [
  {
    id: "data-analytics",
    number: "01",
    name: "Data Analytics",
    short: "Understand data. Find insights. Make better decisions.",
    description:
      "Learn Excel, SQL, Power BI and Python through practical dashboards and real data projects.",
    skills: ["Excel", "SQL", "Power BI", "Python"],
    project: "Business Sales Dashboard",
    label: "Popular in 2026",
    icon: BarChart3,
  },
  {
    id: "mern",
    number: "02",
    name: "MERN Stack",
    short: "Build modern websites and full-stack applications.",
    description:
      "Learn frontend and backend development by creating real web applications from scratch.",
    skills: ["React", "Node.js", "Express", "MongoDB"],
    project: "Full Stack Web Application",
    label: "Developer Track",
    icon: Code2,
  },
  {
    id: "java",
    number: "03",
    name: "Java Full Stack",
    short: "Learn Java and build complete web applications.",
    description:
      "Understand Java, databases and backend development with practical application-based learning.",
    skills: ["Java", "Spring", "SQL", "Web"],
    project: "Enterprise Web Application",
    label: "Career Track",
    icon: Coffee,
  },
  {
    id: "python",
    number: "04",
    name: "Python Full Stack",
    short: "Start with Python and move towards real web development.",
    description:
      "Learn Python, Django, APIs and databases through guided projects and practical exercises.",
    skills: ["Python", "Django", "REST API", "SQL"],
    project: "Django Web Platform",
    label: "Beginner Friendly",
    icon: Database,
  },
  {
    id: "data-science",
    number: "05",
    name: "Data Science",
    short: "Use data and Python to solve meaningful problems.",
    description:
      "Learn data handling, visualization and machine learning concepts with practical datasets.",
    skills: ["Python", "Pandas", "ML", "Visualization"],
    project: "Prediction & Analysis Project",
    label: "Data Career",
    icon: BrainCircuit,
  },
  {
    id: "artificial-intelligence",
    number: "06",
    name: "AI & Machine Learning",
    short: "Understand how intelligent systems learn and work.",
    description:
      "Explore machine learning and AI concepts through practical models, experiments and projects.",
    skills: ["Python", "Machine Learning", "AI", "Models"],
    project: "AI-Based Application",
    label: "Future Skills",
    icon: Sparkles,
  },
  {
  id: "digital-marketing",
  number: "07",
  name: "Digital Marketing",
  short: "Learn how brands grow and reach people online.",
  description:
    "Learn social media marketing, SEO, advertising and content strategy through practical campaigns and real examples.",
  skills: ["SEO", "Social Media", "Ads", "Content"],
  project: "Digital Marketing Campaign",
  label: "Creative Career",
  icon: Megaphone,
},
{
  id: "personality-development",
  number: "08",
  name: "Personality Development",
  short: "Build confidence and communicate better.",
  description:
    "Improve communication, presentation and interview skills to feel more confident in college, work and professional situations.",
  skills: ["Communication", "Confidence", "Interview", "Presentation"],
  project: "Mock Interview & Presentation",
  label: "Career Skills",
  icon: UsersRound,
}
];

export default function CourseExplorer() {
  const [active, setActive] = useState(0);

  const course = courses[active];

  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-[#F1EAD8] py-28 text-[#17120F] md:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(#A08F72 0.7px, transparent 0.7px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-[1480px] px-6 md:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#C75232]">
              02 / Courses at DNDC
            </p>

            <h2 className="mt-7 max-w-4xl font-serif text-[clamp(3.5rem,6vw,7.5rem)] leading-[0.88] tracking-[-0.055em]">
              Choose what
              <br />
              you want to
              <span className="italic text-[#C75232]"> become.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-[#66594D]">
            Explore practical IT courses in Bhopal designed for students,
            beginners and working professionals. Choose a skill, understand
            what you will learn and start building.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div className="border-t border-black/15">
  {courses.map((item, index) => {
    const Icon = item.icon;
    const selected = active === index;

    return (
      <div key={item.id}>
        <button
          type="button"
          onMouseEnter={() => {
            if (window.innerWidth >= 1024) {
              setActive(index);
            }
          }}
          onFocus={() => setActive(index)}
          onClick={() => setActive(index)}
          className="group relative grid w-full grid-cols-[38px_1fr_auto] items-center gap-3 border-b border-black/15 py-5 text-left md:grid-cols-[45px_1fr_auto] md:py-6 px-2"
        >
          {selected && (
            <motion.span
              layoutId="course-active"
              className="absolute inset-0 bg-[#17120F]"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 30,
              }}
            />
          )}

          <span
            className={`relative z-10 font-mono text-[10px] ${
              selected
                ? "text-[#E26743]"
                : "text-[#8A7867]"
            }`}
          >
            {item.number}
          </span>

          <span
            className={`relative z-10 font-serif text-xl transition md:text-3xl ${
              selected
                ? "text-[#F1EAD8]"
                : "text-[#17120F]"
            }`}
          >
            {item.name}
          </span>

          <Icon
            size={18}
            className={`relative z-10 transition ${
              selected
                ? "rotate-6 text-[#E26743]"
                : "text-[#8A7867]"
            }`}
          />
        </button>

        <AnimatePresence>
          {selected && (
            <div className="lg:hidden">
              <MobileCourseDetails course={item} />
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  })}
</div>

<div className="hidden lg:block">
  <AnimatePresence mode="wait">
    <CourseWorkspace
      key={course.id}
      course={course}
    />
  </AnimatePresence>
</div>
        </div>
      </div>
    </section>
  );
}

function MobileCourseDetails({
  course,
}: {
  course: (typeof courses)[number];
}) {
  return (
    <motion.div
      initial={{
        height: 0,
        opacity: 0,
      }}
      animate={{
        height: "auto",
        opacity: 1,
      }}
      exit={{
        height: 0,
        opacity: 0,
      }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="overflow-hidden"
    >
      <div className="relative overflow-hidden bg-[#17120F] px-5 py-7 text-[#F1EAD8]">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#E26743]">
            {course.label}
          </span>

          <p className="mt-4 font-serif text-2xl italic leading-tight text-[#D5C7AA]">
            {course.short}
          </p>

          <p className="mt-4 text-sm leading-7 text-[#A9997E]">
            {course.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {course.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#C9B699]"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8A7867]">
              Example Project
            </p>

            <p className="mt-2 font-serif text-lg">
              {course.project}
            </p>
          </div>

          <Link
            href={`/courses/${course.id}`}
            className="mt-6 flex w-full items-center justify-between rounded-full bg-[#E26743] px-5 py-4 font-semibold text-[#17120F]"
          >
            View Course

            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function CourseWorkspace({
  course,
}: {
  course: (typeof courses)[number];
}) {
  const Icon = course.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        rotateX: 4,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      transition={{
        duration: 0.45,
      }}
      className="relative min-h-[510px] overflow-hidden rounded-[2.5rem] bg-[#17120F] p-7 text-[#F1EAD8] shadow-[0_35px_100px_rgba(70,45,30,.2)] md:p-9"
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="absolute -right-28 -top-28 h-96 w-96 rounded-full border border-[#E26743]/20"
      />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -right-10 top-10 h-64 w-64 rounded-full border border-dashed border-[#E26743]/20"
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-[#E26743]/30 bg-[#E26743]/10 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[#E26743]">
            {course.label}
          </span>

          <span className="font-mono text-[10px] text-[#8A7867]">
            DNDC / PROGRAM {course.number}
          </span>
        </div>

        <div className="mt-9 flex h-16 w-16 items-center justify-center rounded-3xl border border-[#E26743]/30 bg-[#E26743]/10 text-[#E26743]">
          <Icon size={28} />
        </div>

        <h3 className="mt-6 max-w-2xl font-serif text-4xl leading-[0.95] tracking-[-0.04em] md:text-6xl">
          {course.name}
        </h3>

        <p className="mt-4 max-w-xl font-serif text-lg italic text-[#D5C7AA] md:text-xl">
          {course.short}
        </p>

        <p className="mt-5 max-w-xl leading-7 text-[#A9997E]">
          {course.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {course.skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="rounded-full border border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#C9B699]"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-6 border-t border-white/10 pt-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8A7867]">
              Example Project
            </p>

            <p className="mt-2 font-serif text-xl">
              {course.project}
            </p>
          </div>

          <Link
            href={`/courses/${course.id}`}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E26743] px-6 py-4 font-semibold text-[#17120F]"
          >
            View Course

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}