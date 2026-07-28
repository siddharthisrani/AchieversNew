"use client";

import { useEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import CountUp from "react-countup";

import Image from "next/image";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Laptop2,
  Sparkles,
  Trophy,
  Users,
  Star,
  Award,
} from "lucide-react";

/* ============================================================
                        MENTOR DATA
============================================================ */

const mentors = [
  {
    id: 1,
    name: "Siddharth Israni",
    role: "Frontend Engineer • MERN Expert",
    image: "/sid.jpeg",

    experience: 5,
    students: 1200,
    projects: 55,

    description:
      "Specializes in React, Next.js, UI Engineering, Node.js and modern frontend architecture.",
     thought:`Great interfaces aren't designed by chance. They're built through curiosity, creativity and consistency.`,
    gradient:
      "from-[#FFEDE7] via-[#FFF6F1] to-white",

    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "GSAP",
      "Three.js",
      "Tailwind CSS",
    ],
  },

  {
    id: 2,
    name: "Aalok Sir",
    role: "Java & Flutter Expert",
    image: "/Aalok.png",

    experience: 7,
    students: 1500,
    projects: 80,

    description:
      "Industry-oriented trainer helping students master Java Full Stack, Flutter and scalable backend systems.",
    thought:`Strong fundamentals make every technology easier to learn and every challenge easier to solve.`,

    gradient:
      "from-[#F6F3FF] via-[#FAF8FF] to-white",

    skills: [
      "Java",
      "Spring",
      "Flutter",
      "MySQL",
      "REST APIs",
      "Firebase",
      "Hibernate"
    ],
  },

  {
    id: 3,
    name: "Mahesh Sir",
    role: "AI • Python • DSA",

    image: "/mahesh.jpeg",

    experience: 8,
    students: 1800,
    projects: 110,

    description:
      "Guides students into Artificial Intelligence, Python development and Data Structures through industry-focused learning.",

      thought:`he future belongs to those who question, experiment, and never stop learning every single day.`,
    gradient:
      "from-[#EEF9FF] via-[#F7FCFF] to-white",

    skills: [
      "Python",
      "AI",
      "Machine Learning",
      "DSA",
      "TensorFlow",
      "OpenCV",
    ],
  },

  {
    id: 4,
    name: "Rohit Sir",
    role: "Data Analytics Expert",

    image: "/rohit.jpeg",

    experience: 6,
    students: 900,
    projects: 45,

    description:
      "Helping learners understand data, visualization and business intelligence using modern analytics tools.",

      thought:`Every number tells a meaningful story. The real skill is knowing how to transform data into confident decisions.`,

    gradient:
      "from-[#FFF5ED] via-[#FFF9F4] to-white",

    skills: [
      "Excel",
      "Power BI",
      "SQL",
      "Python",
      "Tableau",
      "Statistics",
      "ETL"
    ],
  },

  {
    id: 5,
    name: "Sejal Mam",
    role: "Soft Skills & Personality Development",

    image: "/Sejal.png",

    experience: 9,
    students: 2500,
    projects: 0,

    description:
      "Transforms confidence, communication and interview skills so students become industry-ready professionals.",

      thought:`Knowledge opens opportunities, but confidence and communication help you make the most of them.`,

    gradient:
      "from-[#FFF9EC] via-[#FFFDF7] to-white",

    skills: [
      "Communication",
      "Leadership",
      "Interview",
      "Presentation",
      "Confidence",
      "HR Training",
    ],
  },

  {
    id: 6,
    name: "Tanish Sir",
    role: "Management & Product Strategy",

    image: "/Tanish.jpeg",

    experience: 6,
    students: 800,
    projects: 35,

    description:
      "Focuses on execution, innovation and helping students understand how real software companies work.",

      thought:`Ideas become meaningful only when execution, discipline and teamwork move them into reality together.`,
    gradient:
      "from-[#EFFCF7] via-[#F8FFFB] to-white",

    skills: [
      "Management",
      "Agile",
      "Product",
      "Startup",
      "Leadership",
      "Planning",
    ],
  },
];

/* ============================================================
                    COMPONENT
============================================================ */

export default function Mentors() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mentor = mentors[current];
  useEffect(() => {
  if (paused) return;

  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % mentors.length);
  }, 3000);

  return () => clearInterval(interval);
}, [paused]);

const pauseSlider = (delay = 8000) => {
  setPaused(true);

  if (resumeTimer.current) {
    clearTimeout(resumeTimer.current);
  }

  resumeTimer.current = setTimeout(() => {
    setPaused(false);
  }, delay);
};

useEffect(() => {
  return () => {
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
    }
  };
}, []);

const WHATSAPP_NUMBER = "916261437008";

const mentorMessage = encodeURIComponent(
  `Hi DNDC! 👋

I'm interested in learning with ${mentor.name} (${mentor.role}).

Could you please guide me about the course, learning process, fees, and how I can get started?`
);

const generalMessage = encodeURIComponent(
  `Hi DNDC! 👋

I'm interested in your training programs and would like to talk with one of your mentors.

Please guide me in choosing the right course for my career.`
);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#FAF8F5] py-16" id="Mentors">
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-[#E2674308] blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[650px] w-[650px] rounded-full bg-orange-100 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1550px] px-6">

        {/* Heading */}

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
            Meet Your Mentors
          </span>

          <h2 className="mt-8 text-6xl font-semibold leading-tight tracking-tight text-[#111827] md:text-7xl">
            Learn From
            <br />

            People Who Build.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-500">
            Our mentors aren't just teachers.
            They're engineers, designers and professionals who
            build real software and mentor students through
            practical industry experience.
          </p>
        </motion.div>

        {/* ====================================================
                  PART 2 STARTS HERE
        ==================================================== */}
                {/* ====================================================
                    MENTOR SHOWCASE
        ==================================================== */}

       <div
  className="mt-16 grid min-h-[760px] items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]"
 
>
          {/* ==================================================
                        LEFT VISUAL
          ================================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={mentor.id}
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: 15,
              }}
              transition={{
                duration: 0.55,
              }}
              className="relative"
            >
              {/* Background Glow */}

              <div
                className={`absolute inset-0 rounded-[60px] bg-gradient-to-br ${mentor.gradient}`}
              />

              <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-[#E2674315] blur-[90px]" />

              <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-orange-200/40 blur-[90px]" />

              {/* Card */}

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="relative h-[360px] sm:h-[430px] lg:h-[500px] overflow-hidden rounded-[40px] border border-white/80 bg-white/60 p-8 shadow-[0_45px_120px_rgba(0,0,0,.10)] backdrop-blur-3xl"
              >
                {/* Floating Icons */}

                {[
                  Code2,
                  Laptop2,
                  Trophy,
                  GraduationCap,
                  Sparkles,
                ].map((Icon, index) => (
                  <motion.div
                    key={index}
                    animate={{
                       opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4 + index,
                      delay: index * .4,
                    }}
                    className="absolute"
                    style={{
                      left: `${12 + index * 16}%`,
                      top: index % 2 ? "12%" : "75%",
                    }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white/70 shadow-xl backdrop-blur-xl">
                      <Icon
                        size={20}
                        className="text-[#E26743]"
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Mentor Image */}

               <div className="relative mx-auto flex h-[340px] sm:h-[400px] lg:h-[500px] w-full max-w-[380px] items-end justify-center">
                  {/* Glow */}

                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                    }}
                    className="absolute bottom-8 h-[260px] w-[260px] sm:h-[330px] sm:w-[330px] lg:h-[420px] lg:w-[420px] rounded-full bg-[#E2674320] blur-[70px]"
                  />

                  {/* Platform */}

                  <div className="absolute bottom-0 h-8 w-[220px] sm:w-[280px] lg:w-[340px] rounded-full bg-black/10 blur-xl" />

                  {/* Image */}

                  <motion.div 
                    initial={{
                      y: 40,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: .7,
                    }}
                     className="relative z-[5] flex items-end justify-center"
                  >
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                     width={360}
    height={460}
    priority
    className="h-[320px] sm:h-[380px] lg:h-[460px] w-auto object-contain object-bottom drop-shadow-[0_35px_60px_rgba(0,0,0,.18)]"
                    />
                  </motion.div>
                </div>

                {/* Floating Badge */}

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                  }}
                  className="absolute right-6 top-6 z-20 rounded-3xl border border-white bg-white/80 px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-5 shadow-2xl backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <Award
                      className="text-[#E26743]"
                      size={18}
                    />

                    <div>
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500">
                        Mentor Rating
                      </p>

                      <div className="mt-1 flex items-center gap-2">
                        <Star
                          size={16}
                          className="fill-[#E26743] text-[#E26743]"
                        />

                        <span className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                          4.9/5
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Experience */}

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    delay: .5,
                  }}
                  className="absolute bottom-8 left-6 z-20 rounded-3xl border border-white bg-white/80 px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-5 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                    <BriefcaseBusiness
                      className="text-[#E26743]"
                      size={18}
                    />

                    <div>
                      <h4 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900">
                        <CountUp
                          end={mentor.experience}
                        />
                        +
                      </h4>

                      <p className="text-[10px] sm:text-xs text-gray-500">
                        Years Experience
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* ====================================================
                    PART 3 STARTS HERE
          ==================================================== */}
                    {/* ==================================================
                        RIGHT CONTENT
          ================================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={mentor.id}
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -15,
              }}
              transition={{
                duration: 0.55,
              }}
              className="min-h-[700px]"
            >
              {/* Role */}

              <span className="rounded-full border border-[#E2674325] bg-[#FFF5F0] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#E26743]">
                {mentor.role}
              </span>

              {/* Name */}

              <h2 className="mt-8 text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05] tracking-tight text-[#111827] break-words">
  {mentor.name}
</h2>

              {/* Description */}
              <div className="mt-8 h-[110px]">
              <p className="max-w-2xl text-lg leading-9 text-gray-500">
                {mentor.description}
              </p>
</div>
              {/* Stats */}

              {/* <div className="mt-14 grid grid-cols-3 gap-6">
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-[30px] border border-gray-200 bg-white/70 p-6 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,.06)]"
                >
                  <Users
                    size={26}
                    className="text-[#E26743]"
                  />

                  <h3 className="mt-5 text-3xl font-bold text-[#111827]">
                    <CountUp
                      end={mentor.students}
                    />
                    +
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Students Mentored
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-[30px] border border-gray-200 bg-white/70 p-7 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,.06)]"
                >
                  <Laptop2
                    size={26}
                    className="text-[#E26743]"
                  />

                  <h3 className="mt-5 text-4xl font-bold text-[#111827]">
                    <CountUp
                      end={mentor.projects}
                    />
                    +
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Live Projects
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-[30px] border border-gray-200 bg-white/70 p-7 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,.06)]"
                >
                  <Award
                    size={26}
                    className="text-[#E26743]"
                  />

                  <h3 className="mt-5 text-4xl font-bold text-[#111827]">
                    <CountUp end={98} />%
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Student Satisfaction
                  </p>
                </motion.div>
              </div> */}

              {/* Skills */}

              <div className="mt-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                  Expertise
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  {mentor.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{
                        y: -5,
                        scale: 1.05,
                      }}
                      className="rounded-full border border-[#E2674320] bg-white px-6 py-3 shadow-lg"
                    >
                      <span className="font-medium text-[#111827]">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quote */}

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="mt-10 rounded-[36px] border border-[#E2674315] bg-gradient-to-br from-[#FFF5F0] to-white p-8 shadow-[0_25px_60px_rgba(226,103,67,.08)]"
              >
                <h4 className="text-3xl font-semibold leading-snug text-[#111827]">
                 {mentor.thought}
                </h4>

                <p className="mt-6 text-gray-500">
                  — {mentor.name}
                </p>
              </motion.div>

              {/* CTA */}

              <div className="mt-14 flex flex-row items-center gap-5 lg:flex-row lg:items-center">
                <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${mentorMessage}`}
  target="_blank"
  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.04,
                    y: -3,
                  }}
                  whileTap={{
                    scale: .97,
                  }}
                  className="inline-flex shrink-0 whitespace-nowrap items-center gap-3 rounded-full bg-[#E26743] px-5 py-3 text-sm sm:px-7 sm:py-4 sm:text-base lg:px-9 lg:py-5 text-white shadow-[0_30px_70px_rgba(226,103,67,.35)]">
                  Learn With {mentor.name.split(" ")[0]}

                  <ArrowRight size={20} />
                </motion.a>

                <div className="max-w-[220px] text-sm leading-6 text-gray-500">
  Industry-focused learning,
  <br />
  live mentorship & real projects.
</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ==========================================
                    PART 4 STARTS HERE
             Navigation
             Mentor Switcher
             Mobile Layout
             Closing JSX
          ========================================== */}
                  </div>

        {/* =====================================================
                      MENTOR NAVIGATION
        ====================================================== */}

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
            duration: .6,
          }}
          className="mt-12 hidden lg:block"
        >
          <div className="flex flex-wrap items-center justify-between gap-10 rounded-[40px] border border-gray-200 bg-white/70 px-8 py-5 shadow-[0_25px_60px_rgba(0,0,0,.06)] backdrop-blur-3xl">

            {/* Prev */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .95,
              }}
             onClick={() => {
  setCurrent(
    current === 0
      ? mentors.length - 1
      : current - 1
  );

  pauseSlider();
}}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg"
            >
              <ChevronLeft size={26} />
            </motion.button>

            {/* Mentor Selector */}

            <div className="flex flex-wrap items-center justify-center gap-4">
              {mentors.map((item, index) => (
                <motion.button
                  key={item.id}
                  whileHover={{
                    y: -5,
                  }}
                  onClick={() => {
  setCurrent(index);
  pauseSlider();
}}
                  className={`rounded-full px-6 py-4 transition-all ${
                    current === index
                      ? "bg-[#E26743] text-white shadow-[0_20px_45px_rgba(226,103,67,.30)]"
                      : "border border-gray-200 bg-white text-gray-600"
                  }`}
                >
                  {item.name.split(" ")[0]}
                </motion.button>
              ))}
            </div>

            {/* Next */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .95,
              }}
              onClick={() => {
  setCurrent(
    current === mentors.length - 1
      ? 0
      : current + 1
  );

  pauseSlider();
}}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg"
            >
              <ChevronRight size={26} />
            </motion.button>
          </div>
        </motion.div>

        {/* =====================================================
                    MOBILE MENTOR SELECTOR
        ====================================================== */}

        <div className="mt-16 flex justify-center lg:hidden">
          <div className="flex flex-wrap justify-center gap-3">
            {mentors.map((mentorItem, index) => (
              <button
                key={mentorItem.id}
                onClick={() => {
  setCurrent(index);
  pauseSlider();
}}
                className={`rounded-full px-5 py-3 text-sm transition-all ${
                  current === index
                    ? "bg-[#E26743] text-white"
                    : "bg-white border border-gray-200 text-gray-600"
                }`}
              >
                {mentorItem.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
  {mentors.map((_, index) => (
    <motion.div
      key={index}
      animate={{
        width: current === index ? 42 : 10,
      }}
      transition={{ duration: 0.35 }}
      className={`h-2 rounded-full ${
        current === index
          ? "bg-[#E26743]"
          : "bg-gray-300"
      }`}
    />
  ))}
</div>

        {/* =====================================================
                        FINAL CTA
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
            duration: .7,
          }}
          className="mt-32 overflow-hidden rounded-[56px] bg-[#111827] px-8 py-24 text-center md:px-20"
        >
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#E2674320] blur-[150px]" />

          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[150px]" />

          <div className="relative z-[5] mx-auto max-w-5xl">
            <span className="rounded-full border border-[#E2674330] bg-[#E2674315] px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5B08A]">
              Learn From The Best
            </span>

            <h2 className="mt-10 text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              Great Careers
              <br />
              Begin With
              <br />
              Great Mentors.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
              Every mentor at DNDC believes in practical learning,
              live software development, and preparing students
              for real industry challenges—not just exams.
            </p>

            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${generalMessage}`}
  target="_blank"
  rel="noopener noreferrer"

              whileHover={{
                scale: 1.04,
                y: -4,
              }}
              whileTap={{
                scale: .97,
              }}
              className="group mt-14 inline-flex items-center gap-4 rounded-full bg-[#E26743] px-10 py-5 text-lg font-semibold text-white shadow-[0_30px_90px_rgba(226,103,67,.40)]"
            >
              Talk to Our Mentors

              <motion.div
                animate={{
                  x: [0, 6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
              >
                <ArrowRight size={22} />
              </motion.div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}