"use client";

import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  FolderGit2,
  Rocket,
} from "lucide-react";

import Link from "next/link";
import { useLeadPopup } from "@/context/LeadPopupContext";

import LearnScreen from "./screens/LearnScreen";
import PracticeScreen from "./screens/PracticeScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import PlacementScreen from "./screens/PlacementScreen";
import CareerScreen from "./screens/CareerScreen";

export const journey = [
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

export type JourneyItem = (typeof journey)[number];

export interface JourneySlideProps {
  item: JourneyItem;
  mobile?: boolean;
}

const screenMap = {
  learn: LearnScreen,
  practice: PracticeScreen,
  projects: ProjectsScreen,
  placement: PlacementScreen,
  career: CareerScreen,
} as const;

export default function JourneySlide({
  item,mobile = false,
}: JourneySlideProps) {
  
const { openPopup } = useLeadPopup();

  const Icon = item.icon;

  const Screen =
    screenMap[item.type as keyof typeof screenMap];

  return (
    <section
  className={`
    flex
    items-center
    justify-center
    ${
      mobile
        ? "w-full min-h-[700px] px-5 py-10"
        : "h-[calc(100vh-150px)] w-screen px-12"
    }
  `}
>
      <div
  className={`
    mx-auto
    w-full
    max-w-[1500px]
    items-center

    ${
      mobile
        ? "flex flex-col gap-10"
        : "grid grid-cols-[1.08fr_.92fr] gap-20"
    }
  `}
>

        {/* ========================= */}
        {/* LEFT PANEL */}
        {/* ========================= */}

        <div className="hidden xl:flex justify-start">
          <div
  className={`
    relative
    w-full
    overflow-hidden
    rounded-[30px]
    border
    border-white/10
    bg-[#111111]
    shadow-[0_40px_120px_rgba(0,0,0,.45)]

    ${
      mobile
        ? "max-w-md h-[520px]"
        : "max-w-[760px] h-[460px]"
    }
  `}
>
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
                <Screen />
              </div>

            </div>

          </div>
        </div>

        {/* ========================= */}
        {/* RIGHT PANEL */}
        {/* ========================= */}

       <div
  className={`
    flex
    flex-col

    ${
      mobile
        ? "w-full max-w-md"
        : "h-[80vh] max-w-[500px] justify-center"
    }
  `}
>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
            {item.step}
          </p>

          <h2 className="mt-3 text-[clamp(3rem,4.5vw,5.3rem)] font-bold leading-[0.95] tracking-tight text-white">

            {item.title}

            <span className="block text-orange-500">
              {item.accent}
            </span>

          </h2>

          <p className="mt-5 text-[17px] leading-7 text-white/65">
            {item.description}
          </p>

          <div className="mt-6 space-y-3">

            {item.highlights.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10">

                  <CheckCircle2
                    className="text-orange-400"
                    size={20}
                  />

                </div>

                <span className="text-[17px] text-white/90">
                  {feature}
                </span>

              </div>
            ))}

          </div>

          <button
            onClick={() =>
    openPopup(
      "Course Guidance",
      "Horizontal Scroll Section"
    )
  }
            className="group mt-7 inline-flex items-center justify-center gap-3 rounded-full border border-orange-500/30 bg-orange-500 px-7 py-3.5 font-medium text-black transition-all duration-300 hover:scale-[1.03]"
          >
           Find Your Perfect Course

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />

          </button>

        </div>

      </div>
    </section>
  );
}