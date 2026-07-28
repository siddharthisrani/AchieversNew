"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do I need prior programming experience?",
    answer:
      "No. Our beginner-friendly programs start from the fundamentals and gradually move toward advanced concepts with real-world projects.",
  },
  {
    question: "Will I receive a certificate after completing the course?",
    answer:
      "Yes. Every student receives an industry-oriented course completion certificate after successfully completing the program.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes. We provide placement assistance including resume building, mock interviews, aptitude preparation, portfolio guidance, and career mentoring.",
  },
  {
    question: "Can I visit the institute before enrolling?",
    answer:
      "Absolutely. We encourage students and parents to visit our campus, interact with mentors, and explore our learning environment before taking admission.",
  },
  {
    question: "Which courses are available at DNDC?",
    answer:
      "We offer MERN Stack, Java Full Stack, Python Full Stack, Data Analytics, Data Science, AI/ML, Flutter, UI/UX Design, Digital Marketing, and more.",
  },
  {
    question: "How can I contact the admissions team?",
    answer:
      "You can call us, send a WhatsApp message, email us, or submit the inquiry form above. Our team usually responds within one business day.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-[#F4F1EB] py-24 lg:py-32 overflow-hidden" id="Faq">

      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "url('/noise.png')",
          }}
        />

        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-orange-300/15 blur-[120px]" />

        <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-orange-200/20 blur-[140px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-2 backdrop-blur">

            <Sparkles className="h-4 w-4 text-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
              Frequently Asked Questions
            </span>

          </div>

          <h2 className="mt-8 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">

            Everything you
            <br />

            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              need to know.
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-500">

            Find quick answers to the most common questions about
            admissions, courses, placements, and learning at DNDC.

          </p>

        </motion.div>

        {/* FAQ */}

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (

              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="overflow-hidden rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5"
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-7 text-left"
                >
                  <span className="text-lg font-semibold text-zinc-900">
                    {faq.question}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-orange-500">

                    {isOpen ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}

                  </div>

                </button>

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: .3,
                      }}
                    >

                      <div className="px-7 pb-7 text-zinc-600 leading-8">

                        {faq.answer}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}