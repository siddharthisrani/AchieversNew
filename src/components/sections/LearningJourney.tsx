"use client";

import { useMemo, useState } from "react";

import { motion } from "framer-motion";
import { useLeadPopup } from "@/context/LeadPopupContext";

import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  FileText,
  Flag,
  GraduationCap,
  Rocket,
  Sparkles,
  Trophy,
  UserCheck,
  Waypoints,
} from "lucide-react";

const journey = [
  {
    id: 1,
    title: "Admission",
    icon: GraduationCap,
    x: 6,
    y: 10,
    popup: [
      "Career Counselling",
      "Skill Assessment",
      "Roadmap Planning",
    ],
  },
  {
    id: 2,
    title: "Foundation",
    icon: Sparkles,
    x: 16,
    y: 30,
    popup: [
      "Programming Basics",
      "Industry Mindset",
      "Daily Practice",
    ],
  },
  {
    id: 3,
    title: "Projects",
    icon: Code2,
    x: 30,
    y: 18,
    popup: [
      "10+ Live Projects",
      "GitHub Portfolio",
      "Real Client Work",
    ],
  },
  {
    id: 4,
    title: "Hackathons",
    icon: Trophy,
    x: 43,
    y: 42,
    popup: [
      "Competitive Coding",
      "Team Challenges",
      "Innovation Sprint",
    ],
  },
  {
    id: 5,
    title: "Internship",
    icon: BriefcaseBusiness,
    x: 58,
    y: 22,
    popup: [
      "Industry Experience",
      "Team Workflow",
      "Mentorship",
    ],
  },
  {
    id: 6,
    title: "Resume",
    icon: FileText,
    x: 68,
    y: 50,
    popup: [
      "ATS Resume",
      "LinkedIn Profile",
      "Portfolio Review",
    ],
  },
  {
    id: 7,
    title: "Mock Interviews",
    icon: UserCheck,
    x: 78,
    y: 28,
    popup: [
      "HR Round",
      "Technical Round",
      "Feedback Sessions",
    ],
  },
  {
    id: 8,
    title: "Placement",
    icon: Rocket,
    x: 88,
    y: 58,
    popup: [
      "Company Drives",
      "Interview Support",
      "Offer Letter",
    ],
  },
  {
    id: 9,
    title: "Career Growth",
    icon: Flag,
    x: 96,
    y: 18,
    popup: [
      "Career Guidance",
      "Upskilling",
      "Lifetime Community",
    ],
  },
];

export default function LearningJourney() {
  const [active, setActive] = useState(3);
  const { openPopup } = useLeadPopup();

  const svgPath = useMemo(
    () =>
      `
M 6 10
C 10 20 14 28 16 30
S 26 20 30 18
S 39 40 43 42
S 54 24 58 22
S 64 50 68 50
S 74 28 78 28
S 85 55 88 58
S 94 25 96 18
`,
    []
  );

  return (
    <section className="relative overflow-hidden bg-[#F8F6F2] py-36" id="LearningJourney">
      {/* background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-[#E2674308] blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[700px] w-[700px] rounded-full bg-orange-100 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6">
        {/* heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="rounded-full border border-[#E2674325] bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#E26743]">
            Learning Journey
          </span>

          <h2 className="mt-8 text-6xl font-semibold leading-tight tracking-tight text-[#111827] md:text-7xl">
            From Curious Student
            <br />
            to Industry Professional.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-500">
            Every student follows a carefully designed journey
            inside DNDC. Each milestone prepares you for the next,
            resulting in confidence, experience and real placement
            opportunities.
          </p>
        </motion.div>

        {/* roadmap */}

        <div className="relative mx-auto mt-32 hidden h-[760px] max-w-[1380px] lg:block">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 70"
            preserveAspectRatio="none"
          >
            {/* base */}

            <path
              d={svgPath}
              stroke="#E8DDD7"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
            />

            {/* animated */}

            <motion.path
              d={svgPath}
              stroke="#E26743"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
              }}
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
                amount: .2,
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </svg>

          {/* nodes */}

          {journey.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                onMouseEnter={() => setActive(index)}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  delay: index * .25,
                }}
                className="absolute"
                style={{
                  left: `${step.x}%`,
                  top: `${step.y}%`,
                  transform: "translate(-50%,-50%)",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  className={`relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-[30px] border transition-all ${
                    active === index
                      ? "border-[#E26743]/30 bg-white shadow-[0_25px_60px_rgba(226,103,67,.20)]"
                      : "border-white bg-white/80 shadow-[0_20px_45px_rgba(0,0,0,.06)]"
                  } backdrop-blur-xl`}
                >
                  {active === index && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute inset-0 rounded-[30px] border border-[#E26743]/20"
                    />
                  )}

                  <Icon
                    size={34}
                    className="text-[#E26743]"
                  />
                </motion.div>

                <h4 className="mt-5 whitespace-nowrap text-center text-base font-semibold text-gray-900">
                  {step.title}
                </h4>

                {active === index && (
                  <motion.div
                    layout
                    initial={{
                      opacity: 0,
                      y: 15,
                      scale: .95,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: .25,
                    }}
                    className="absolute left-1/2 top-[135px] z-20 w-[270px] -translate-x-1/2 rounded-[28px] border border-white bg-white/95 p-6 shadow-[0_30px_80px_rgba(0,0,0,.10)] backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF3EF]">
                        <Icon
                          size={22}
                          className="text-[#E26743]"
                        />
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900">
                          {step.title}
                        </h5>

                        <p className="text-sm text-gray-500">
                          Milestone {step.id}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      {step.popup.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3"
                        >
                          <Waypoints
                            size={15}
                            className="text-[#E26743]"
                          />

                          <span className="text-sm text-gray-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ======================================================
              MOBILE VERSION STARTS HERE
              Continue LearningJourney Part 2
        ====================================================== */}
                {/* ======================================================
                        MOBILE / TABLET JOURNEY
        ====================================================== */}

        <div className="mt-20 space-y-8 lg:hidden">
          {journey.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="relative pl-12"
              >
                {/* Vertical Line */}

                {index !== journey.length - 1 && (
                  <div className="absolute left-[23px] top-14 h-[120px] w-[2px] overflow-hidden rounded-full bg-[#E7DDD7]">
                    <motion.div
                      initial={{
                        height: 0,
                      }}
                      whileInView={{
                        height: "100%",
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.9,
                      }}
                      className="w-full rounded-full bg-[#E26743]"
                    />
                  </div>
                )}

                {/* Node */}

                <motion.div
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}
                  className="rounded-[28px] border border-white bg-white/90 p-6 shadow-[0_25px_60px_rgba(0,0,0,.08)] backdrop-blur-xl"
                >
                  <div className="absolute left-0 top-5 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-2xl bg-[#E26743] shadow-xl">
                    <Icon
                      size={22}
                      className="text-white"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E26743]">
                        Step {step.id}
                      </span>

                      <h3 className="mt-2 text-2xl font-semibold text-[#111827]">
                        {step.title}
                      </h3>
                    </div>

                    <div className="rounded-full bg-[#FFF4EF] px-3 py-1 text-xs font-semibold text-[#E26743]">
                      {step.id}/9
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {step.popup.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <div className="h-2 w-2 rounded-full bg-[#E26743]" />

                        <span className="text-gray-600">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* ======================================================
                        APPLE STYLE CTA
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mt-36 overflow-hidden rounded-[48px] bg-[#111827] px-8 py-24 text-center md:px-20"
        >
          {/* Background */}

          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#E2674320] blur-[140px]" />

            <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl">
            <span className="rounded-full border border-[#E2674330] bg-[#E2674315] px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#F6A57D]">
              Your Future Starts Here
            </span>

            <h2 className="mt-10 text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              Your Journey
              <br />
              Doesn't End Here.
              <br />
              <span className="text-[#F4A27A]">
                It Begins.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
              Build real products. Learn from industry mentors.
              Work on live projects. Crack interviews. Launch
              your tech career with confidence.
            </p>

            <motion.button
             onClick={() =>
    openPopup("Start Journey", "Learning Journey CTA")
  }
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group mt-14 inline-flex items-center gap-4 rounded-full bg-[#E26743] px-10 py-5 text-lg font-semibold text-white shadow-[0_30px_80px_rgba(226,103,67,.45)] transition-all"
            >
              Start Your Journey

              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
              >
                <ArrowRight size={22} />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}