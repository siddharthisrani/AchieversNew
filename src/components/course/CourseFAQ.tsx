"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function CourseFAQ({ course }: Props) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
  {
    question: "Do I need prior coding experience?",
    answer:
      "No. This course starts from the fundamentals and gradually progresses to advanced concepts, making it suitable for beginners.",
  },
  {
    question: "Will I build real-world projects?",
    answer:
      "Yes. You'll work on multiple industry-level projects that strengthen your portfolio and practical skills.",
  },
  {
    question: "Is placement assistance provided?",
    answer:
      "Yes. We provide resume building, mock interviews, career guidance, and placement assistance.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. After successfully completing the course, you'll receive a verified DNDC Course Completion Certificate.",
  },
  {
    question: "Are classes online or offline?",
    answer:
      "We offer both online and offline classroom batches depending on the course and schedule.",
  },
  {
    question: "Can I pay the fees in installments?",
    answer:
      "Yes. EMI and flexible payment options are available for most courses.",
  },
];

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-220px] top-40 h-[420px] w-[420px] rounded-full bg-orange-100 blur-[180px]" />

        <div className="absolute right-[-180px] bottom-[-180px] h-[380px] w-[380px] rounded-full bg-orange-100 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="lg:col-span-4"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              FAQ
            </p>

            <h2 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-zinc-900 md:text-6xl">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h2>

            <p className="mt-8 max-w-sm text-lg leading-8 text-zinc-600">
              Everything you need to know before joining the course.
              If you still have questions, our admission team is happy to help.
            </p>

            <div className="mt-12 rounded-3xl border border-orange-100 bg-orange-50 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
                Need Help?
              </p>

              <h4 className="mt-3 text-2xl font-bold text-zinc-900">
                Talk to our counsellor
              </h4>

              <p className="mt-4 leading-7 text-zinc-600">
                Get personalized guidance about curriculum,
                batches, fees and career opportunities.
              </p>

              <button
              onClick={() =>
    window.open(
      "https://wa.me/916261437008?text=Hi%20DNDC!%20I%20want%20to%20know%20more%20about%20this%20course.",
      "_blank"
    )
  }        className="mt-8 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_10px_30px_rgba(249,115,22,.35)]">
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}

          <div className="lg:col-span-8">
            <div className="space-y-5">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:border-orange-300 hover:shadow-xl"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? -1 : index)
                      }
                      className="flex w-full items-center justify-between px-8 py-7 text-left"
                    >
                      <h3 className="pr-6 text-xl font-semibold text-zinc-900">
                        {item.question}
                      </h3>

                      <motion.div
                        animate={{
                          rotate: isOpen ? 45 : 0,
                        }}
                        transition={{
                          duration: .25,
                        }}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100"
                      >
                        <Plus className="h-5 w-5 text-orange-600" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
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
                            duration: .35,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8">
                            <div className="mb-6 h-px bg-gradient-to-r from-orange-300 via-orange-100 to-transparent" />

                            <p className="max-w-3xl text-lg leading-8 text-zinc-600">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Divider */}

        <div className="mt-24 flex justify-center">
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}