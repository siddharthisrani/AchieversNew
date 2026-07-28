"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Users,
  BriefcaseBusiness,
  Rocket,
} from "lucide-react";

const reasons = [
  {
    no: "01",
    icon: Code2,
    title: "Learn by Building",
    desc: "Every concept is taught through practical projects that mirror real software development—not copy-paste tutorials.",
  },
  {
    no: "02",
    icon: Users,
    title: "Personal Mentorship",
    desc: "Small batches, regular code reviews and one-to-one guidance ensure every student receives individual attention.",
  },
  {
    no: "03",
    icon: Rocket,
    title: "Industry Ready Curriculum",
    desc: "Modern technologies like React, Next.js, AI, Flutter and Data Science are taught the way companies actually use them.",
  },
  {
    no: "04",
    icon: BriefcaseBusiness,
    title: "Placement Assistant",
    desc: "Portfolio building, resume reviews, mock interviews and continuous career guidance throughout your learning journey.",
  },
];

export default function WhyChooseDNDC() {
  return (
    <section className="relative bg-[#FAF8F5] py-32">
      
      {/* Background - Kept absolutely isolated so overflow-hidden doesn't kill sticky */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-[#E2674310] blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full bg-orange-100 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6">
        
        {/* GRID CONTAINER - Removed items-start so columns stretch to full height */}
        <div className="grid gap-24 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* LEFT COLUMN WRAPPER - This acts as the track for sticky to slide down */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .7 }}
              className="lg:sticky lg:top-28"
            >
              <span className="rounded-full border border-[#E2674325] bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#E26743]">
                Why Students Choose DNDC
              </span>

              <h2 className="mt-8 text-5xl font-semibold leading-tight tracking-tight text-[#111827] lg:text-7xl">
                Education
                <br />
                That Builds
                <br />
                Confidence.
              </h2>

              <div className="mt-10 flex items-start gap-8">
                <div className="mt-2 h-40 w-[3px] shrink-0 rounded-full bg-[#E26743]" />

                <p className="max-w-xl text-lg leading-9 text-gray-500">
                  We don't measure success by the number of students enrolled.
                  We measure it by the number of students who become confident
                  enough to build real software, solve real problems and begin
                  successful careers.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-12">
            {reasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.no}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .6,
                    delay: index * .12,
                  }}
                  whileHover={{ x: 8 }}
                  className="group border-b border-gray-200 pb-12"
                >
                  <div className="flex gap-8">
                    <span className="text-5xl font-light text-gray-300 transition-colors duration-300 group-hover:text-[#E26743]">
                      {item.no}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg">
                          <Icon
                            size={26}
                            className="text-[#E26743]"
                          />
                        </div>

                        <h3 className="text-3xl font-semibold text-[#111827] transition-transform duration-300 group-hover:translate-x-1">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* QUOTE SECTION - Centered outside the grid perfectly */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .4, duration: .7 }}
          className="pt-5 text-center"
        >
          <p className="mx-auto max-w-4xl text-3xl font-medium italic leading-relaxed text-[#111827] lg:text-4xl">
            "Great developers aren't created by watching tutorials.
            They're created by building, breaking, learning and improving."
          </p>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.4em] text-[#E26743]">
            — Data & Development Center
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}