"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import CountUp from "react-countup";
import { useLeadPopup } from "@/context/LeadPopupContext";
import { notify } from "@/lib/toast";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,ArrowUpRight, GraduationCap
} from "lucide-react";

/* ==========================================================
                    SUCCESS GALLERY DATA
========================================================== */

const placements = [
  {
    id: 1,
    name: "Aman",
    company: "Tech Mahindra",
    image: "/p1.jpeg",
  },
  {
    id: 2,
    name: "Priya",
    company: "TCS",
    image: "/p2.jpeg",
  },
  {
    id: 3,
    name: "Rohit",
    company: "Infosys",
    image: "/p3.jpeg",
  },
  {
    id: 4,
    name: "Neha",
    company: "Accenture",
    image: "/p1.jpeg",
  },
  {
    id: 5,
    name: "Aditya",
    company: "Capgemini",
    image: "/p2.jpeg",
  },
];

/* ==========================================================
                    COMPONENT
========================================================== */

export default function SuccessGallery() {
  const [current, setCurrent] = useState(0);

  const [paused, setPaused] = useState(false);

  const timer = useRef<number | null>(null);

  const { openPopup } = useLeadPopup();
     const handlePortalClick = () => {
      notify.success(
        "Student Portal is coming soon!"
      );
    };

  /* ---------------- Slider ---------------- */

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % placements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  const pauseSlider = (delay = 10000) => {
    setPaused(true);

    if (timer.current !== null) {
      window.clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      setPaused(false);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    };
  }, []);

  /* ---------------- Helpers ---------------- */

  const previous =
    placements[
      (current - 1 + placements.length) %
        placements.length
    ];

  const active = placements[current];

  const next =
    placements[(current + 1) % placements.length];

  return (
    <section className="relative overflow-hidden bg-[#090B10] py-36" id="Testimonial">
      {/* ======================================
                    Background
      ====================================== */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-[#E2674318] blur-[160px]" />

        <div className="absolute right-0 bottom-0 h-[700px] w-[700px] rounded-full bg-[#E2674310] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1700px] overflow-hidden px-6">

        {/* ======================================
                    Heading
        ====================================== */}

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
            duration: .8,
          }}
          className="mx-auto max-w-5xl text-center"
        >
          <span className="rounded-full border border-[#E2674330] bg-[#E2674315] px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A47B]">
            Success Gallery
          </span>

          <h2 className="mt-8 text-6xl font-semibold leading-tight tracking-tight text-white md:text-8xl">
            The Future
            <br />
            We Build.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/55">
            Every placement represents countless hours of
            learning, building, failing, improving and finally
            achieving something extraordinary.
          </p>
        </motion.div>

        {/* ======================================
                APPLE PRODUCT GALLERY
        ====================================== */}

        <div className="relative mt-28 h-[580px]">

          {/* Navigation */}

          <button
            onClick={() => {
              setCurrent(
                current === 0
                  ? placements.length - 1
                  : current - 1
              );
              pauseSlider();
            }}
            className="absolute left-4 top-1/2 z-40 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition hover:bg-white/10"
          >
            <ChevronLeft className="text-white" />
          </button>

          <button
            onClick={() => {
              setCurrent(
                current === placements.length - 1
                  ? 0
                  : current + 1
              );
              pauseSlider();
            }}
            className="absolute right-4 top-1/2 z-40 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition hover:bg-white/10"
          >
            <ChevronRight className="text-white" />
          </button>

          {/* ======================================
                PART 2 STARTS HERE
                Apple 3 Poster Gallery
          ====================================== */}
          {/* =====================================================
                    LEFT PREVIEW POSTER
          ====================================================== */}

          <motion.div
            animate={{
              x: -20,
              scale: 0.82,
              rotate: -8,
              opacity: 0.28,
            }}
            transition={{
              duration: 0.7,
            }}
            className="absolute left-[4%] top-1/2 z-10 -translate-y-1/2"
          >
            <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-3xl">
              <Image
                src={previous.image}
                alt={previous.name}
                width={280}
                height={390}
                className="rounded-[28px] object-cover blur-[1.5px]"
              />
            </div>
          </motion.div>

          {/* =====================================================
                    MAIN POSTER
          ====================================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: -20,
              }}
              transition={{
                duration: 0.65,
              }}
              className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
            >
              {/* Orange Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="absolute inset-0 rounded-[60px] bg-[#E2674325] blur-[90px]"
              />

              {/* Glass Frame */}

              <motion.div
                whileHover={{
                  rotateX: 2,
                  rotateY: -2,
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                }}
                className="relative rounded-[48px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_60px_140px_rgba(0,0,0,.45)] backdrop-blur-3xl"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Reflection */}

                <motion.div
                  animate={{
                    x: [-350, 650],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "linear",
                  }}
                  className="absolute inset-y-0 left-0 w-40 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                />

                <Image
                  src={active.image}
                  alt={active.name}
                  width={360}
                  height={300}
                  priority
                  className="relative z-10 rounded-[34px] h-full w-full rounded-[28px] object-contain shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* =====================================================
                    RIGHT PREVIEW POSTER
          ====================================================== */}

          <motion.div
            animate={{
              x: 20,
              scale: 0.82,
              rotate: 8,
              opacity: 0.28,
            }}
            transition={{
              duration: 0.7,
            }}
            className="absolute right-[4%] top-1/2 z-10 -translate-y-1/2"
          >
            <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-3xl">
              <Image
                src={next.image}
                alt={next.name}
                width={360}
                height={300}
                className="h-[300px] w-auto rounded-[22px] object-contain opacity-80 blur-[1px]"
              />
            </div>
          </motion.div>

          {/* ======================================
                    APPLE NAVIGATION
          ====================================== */}

          <div className="absolute bottom-[-25px] left-1/2 z-50 flex -translate-x-1/2 items-center gap-10">
            {placements.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrent(index);
                  pauseSlider();
                }}
                className="group flex flex-col items-center"
              >
                <span
                  className={`text-sm font-medium tracking-[0.25em] uppercase transition ${
                    current === index
                      ? "text-white"
                      : "text-white/35 group-hover:text-white/70"
                  }`}
                >
                  {item.name}
                </span>

                <motion.div
                  animate={{
                    width: current === index ? 70 : 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="mt-3 h-[2px] rounded-full bg-[#E26743]"
                />
              </button>
            ))}
          </div>

          {/* ======================================
                PART 3 STARTS HERE
                Metrics + CTA + Closing
          ====================================== */}

                  </div>

        {/* ======================================================
                        METRICS
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
            duration: .7,
          }}
          className="mt-28"
        >
          <div className="grid grid-cols-2 gap-12 border-y border-white/10 py-16 lg:grid-cols-4">

            {[
              {
                number: 500,
                suffix: "+",
                title: "Students Trained",
              },
              {
                number: 100,
                suffix: "+",
                title: "Live Projects",
              },
              {
                number: 50,
                suffix: "+",
                title: "Hiring Partners",
              },
              {
                number: 95,
                suffix: "%",
                title: "Placement Assistance",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -6,
                }}
                className="text-center"
              >
                <h3 className="text-6xl font-semibold tracking-tight text-white">
                  <CountUp end={item.number} />
                  {item.suffix}
                </h3>

                <p className="mt-4 text-sm uppercase tracking-[0.28em] text-white/40">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ======================================================
                        FINAL CTA
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
          className="relative mt-32 overflow-hidden rounded-[60px] border border-white/10 bg-gradient-to-br from-[#10131A] via-[#0B0D12] to-black px-8 py-24"
        >
          {/* Ambient Glow */}

          <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E2674315] blur-[180px]" />

          {/* Floating Ring */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
          />

          <div className="relative z-10 mx-auto max-w-5xl text-center">

            <span className="rounded-full border border-[#E2674330] bg-[#E2674315] px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A47B]">
              Your Future Starts Here
            </span>

            <h2 className="mt-10 text-5xl font-semibold leading-tight tracking-tight text-white md:text-8xl">
              The Next
              <br />
              Success Story
              <br />

              <span className="text-[#F5A25A]">
                Could Be Yours.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/50">
              Every placement begins with curiosity,
              discipline, consistency and the courage
              to start.

              Join DNDC and build your own success story.
            </p>

            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <motion.button
               onClick={() =>
    openPopup("Start Journey", "Learning Journey CTA")
  }
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{
                  scale: .97,
                }}
                className="inline-flex items-center gap-4 rounded-full bg-[#E26743] px-10 py-5 text-lg font-semibold text-white shadow-[0_35px_90px_rgba(226,103,67,.45)]"
              >
                Start Your Journey

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
              </motion.button>

               <button
          type="button"
          onClick={handlePortalClick}
          className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-10 py-5 text-[17px] font-medium text-[#F1EAD8] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#E26743] hover:bg-[#E26743]/10 hover:text-[#E26743]"
        >
          <GraduationCap
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          />

          Student Portal

          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </button>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}