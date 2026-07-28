"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { courseCategories } from "./courseData";
import { useLeadPopup } from "@/context/LeadPopupContext";

interface Props {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function CourseMegaMenu( {isOpen,
  onMouseEnter,
  onMouseLeave}: Props) {

    const { openPopup } = useLeadPopup();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
          initial={{
            opacity: 0,
            y: -12,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -12,
            scale: 0.98,
          }}
          transition={{
            duration: 0.22,
          }}
          className="absolute left-1/2 top-[62px] z-[100] w-[980px] -translate-x-1/2"
        >
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0A]/95 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,.55)]">

            {/* Header */}

            <div className="border-b border-white/10 px-10 py-7">

              <h2 className="text-2xl font-semibold text-[#F5EFE5]">
                Explore Our Programs
              </h2>

              <p className="mt-2 text-sm text-[#A99C8E]">
                Learn industry-ready skills with real-world projects.
              </p>

            </div>

            {/* Body */}

            <div className="grid grid-cols-4 gap-8 p-10">

              {courseCategories.map((category) => (

                <div key={category.title}>

                  <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#E26743]">

                    {category.title}

                  </h3>

                  <div className="space-y-2">

                    {category.courses.map((course) => (

                      <Link
                        key={course.title}
                        href={course.href}
                        className="group block rounded-2xl p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:shadow-[0_15px_40px_rgba(226,103,67,.15)]"
                      >

                        <div className="flex items-center justify-between">

                          <div>

                            <h4 className="font-medium text-[#F4ECDD]">

                              {course.title}

                            </h4>

                            <p className="mt-1 text-xs leading-5 text-[#A99988]">

                              {course.description}

                            </p>

                          </div>

                          <ArrowRight
                            size={16}
                            className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                          />

                        </div>

                      </Link>

                    ))}

                  </div>

                </div>

              ))}

            </div>

            {/* Bottom */}

            <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-10 py-6">

              <div>

                <h4 className="text-lg font-semibold text-[#F4ECDD]">

                  🎯 Need help choosing?

                </h4>

                <p className="mt-1 text-sm text-[#A99988]">

                  Book a FREE career counselling session with our mentors.

                </p>

              </div>

              <button 
               onClick={() => openPopup("Book Demo", "Courses Mega Menu")}
              className="group flex items-center gap-3 rounded-full bg-[#E26743] px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105">

                Book Free Demo

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </button>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}