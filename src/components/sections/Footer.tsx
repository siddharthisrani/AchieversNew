"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const programs = [
  { name: "MERN Stack", href: "/courses/mern" },
  { name: "Java Full Stack", href: "/courses/java" },
  { name: "Python Full Stack", href: "/courses/python" },
  { name: "Data Analytics", href: "/courses/data-analytics" },
  { name: "AI & Machine Learning", href: "/courses/ai" },
  { name: "Digital Marketing", href: "/courses/digital-marketing" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Mentors", href: "/#Mentors" },
  { name: "Success Stories", href: "/#Testimonial" },
  { name: "Contact", href: "/contact" },
];

const resources = [
  { name: "Career Roadmap", href: "/#LearningJourney" },
  { name: "Why Choose DNDC", href: "/#why-dndc" },
  { name: "Frequently Asked Questions", href: "/contact#Faq" },
  { name: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#09090B] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-[#E2674315] blur-[180px]" />
        <div className="absolute right-[-250px] bottom-[-250px] h-[700px] w-[700px] rounded-full bg-orange-500/10 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6">
    

        {/* ================= GLASS FOOTER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="rounded-[48px] border border-white/10 bg-white/5 p-12 backdrop-blur-3xl"
        >
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            {/* Brand */}

            <div>
              <h2 className="text-4xl font-bold">
                DNDC
              </h2>

              <p className="mt-5 max-w-md leading-8 text-zinc-400">
                Data & Development Center is committed to transforming students
                into confident software professionals through project-based,
                industry-focused learning.
              </p>

              <div className="mt-8 space-y-5 text-zinc-300">
                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  MP Nagar Zone-1, Bhopal
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  +91 6261437008
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  dndc.bpl@gmail.com
                </div>
              </div>
            </div>

            {/* Programs */}

            <div>
              <h3 className="text-lg font-semibold">Programs</h3>

              <div className="mt-6 space-y-4">
               {programs.map((item) => (
  <Link
    key={item.name}
    href={item.href}
    className="block text-zinc-400 transition hover:text-[#E26743]"
  >
    {item.name}
  </Link>
))}
              </div>
            </div>

            {/* Company */}

            <div>
              <h3 className="text-lg font-semibold">Company</h3>

             <div className="mt-6 space-y-4">
  {company.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="block text-zinc-400 transition hover:text-[#E26743]"
    >
      {item.name}
    </Link>
  ))}
</div>
            </div>

            {/* Resources */}

            <div>
              <h3 className="text-lg font-semibold">Resources</h3>

              <div className="mt-6 space-y-4">
  {resources.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="block text-zinc-400 transition hover:text-[#E26743]"
    >
      {item.name}
    </Link>
  ))}
</div>
            </div>
          </div>

          {/* Divider */}

          <div className="my-12 h-px bg-white/10" />

          {/* Bottom */}

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-zinc-500">
              © 2026 DNDC • Crafted with passion in Bhopal, India.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="https://www.instagram.com/dndc_official?igsh=dGxyamtudmx0N29t"
                target="_blank"
                className="rounded-full border border-white/10 p-4 transition hover:border-[#E26743] hover:bg-[#E26743]"
              >
                <FaInstagram  size={20} />
              </a>

              <a
                href="https://www.linkedin.com/company/dndc-it-institute/"
                target="_blank"
                className="rounded-full border border-white/10 p-4 transition hover:border-[#E26743] hover:bg-[#E26743]"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="https://www.youtube.com/@DNDC_Official"
                target="_blank"
                className="rounded-full border border-white/10 p-4 transition hover:border-[#E26743] hover:bg-[#E26743]"
              >
                <FaYoutube  size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Final Quote */}

        <div className="py-20 text-center">
          <p className="text-sm tracking-[0.25em] text-zinc-600 uppercase">
            Every Expert Was Once A Beginner.
          </p>

          <h3 className="mt-6 text-3xl font-semibold md:text-5xl">
            Start Yours At
            <span className="text-[#E26743]"> DNDC.</span>
          </h3>
        </div>
      </div>
    </footer>
  );
}