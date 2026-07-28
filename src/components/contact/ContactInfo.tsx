"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const cards = [
  {
    title: "Chat on WhatsApp",
    description:
      "Get instant guidance about admissions, courses, and career counseling.",
    value: "+91 62614 37008",
    href: "https://wa.me/916261437008?text=Hi%20DNDC!%20I'm%20interested%20in%20your%20courses.",
    icon: MessageCircle,
    button: "Start Chat",
    external: true,
  },
  {
    title: "Call Us",
    description:
      "Speak directly with our academic team for quick assistance and details.",
    value: "+91 62614 37008",
    href: "tel:+916261437008",
    icon: Phone,
    button: "Call Now",
  },
  {
    title: "Email Us",
    description:
      "For detailed collaborations, admissions, or general inquiries.",
    value: "dndc.bpl@gmail.com",
    href: "mailto:dndc.bpl@gmail.com",
    icon: Mail,
    button: "Send Email",
  },
  {
    title: "Visit Our Campus",
    description:
      "Meet our mentors and experience the DNDC learning environment.",
    value: "MP Nagar Zone-1, Bhopal",
    href: "https://maps.app.goo.gl/xkz8Bppe3habouEr5",
    icon: MapPin,
    button: "Get Directions",
    external: true,
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

export default function ContactInfo() {
  return (
    // Reverted to your premium warm-grey (#F4F1EB). 
    // NO overflow-hidden here, so position: sticky works perfectly.
    <section className="relative bg-[#F4F1EB] py-24 lg:py-32 selection:bg-orange-500 selection:text-white">
      
      {/* Background Elements (Wrapped safely to prevent sticky-breakage) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 z-10 opacity-[0.03] mix-blend-multiply"
          style={{ backgroundImage: "url('/noise.png')" }}
        />
        <div className="absolute -left-[10%] top-1/4 h-[400px] w-[400px] rounded-full bg-orange-400/10 blur-[120px]" />
        <div className="absolute -right-[10%] bottom-1/4 h-[500px] w-[500px] rounded-full bg-orange-300/15 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        
        {/* --- GRID CONTAINER (No items-start so columns stretch) --- */}
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          
          {/* LEFT COLUMN: Sticky Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="self-start lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-white/50 px-4 py-1.5 shadow-sm backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-orange-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-orange-700">
                Support & Inquiries
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-black leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Always here <br />
              to help you <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">grow.</span>
            </h2>

            <div className="mt-8 flex items-start gap-6 lg:mt-10">
              <div className="mt-2 h-24 w-1 shrink-0 rounded-full bg-gradient-to-b from-orange-500 to-orange-200/30" />
              <p className="max-w-md text-lg font-medium leading-relaxed text-zinc-500">
                Whether you prefer chatting, calling, emailing, or visiting the institute in person, our team is ready to guide you towards the right path.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Light Glass Bento Box Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:col-span-7"
          >
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div variants={itemVariants} key={card.title}>
                  <Link
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    className="group flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/80 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-orange-300 hover:bg-white hover:shadow-[0_20px_40px_rgba(249,115,22,0.08)] sm:p-10"
                  >
                    <div>
                      {/* Floating Icon Container */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/30">
                        <Icon size={24} strokeWidth={2} />
                      </div>

                      <h3 className="mt-8 text-2xl font-bold tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-orange-600">
                        {card.title}
                      </h3>

                      <p className="mt-4 text-sm font-medium leading-relaxed text-zinc-500">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-10">
                      <p className="text-lg font-black tracking-tight text-zinc-900">
                        {card.value}
                      </p>

                      {/* Animated CTA Strip */}
                      <div className="mt-6 flex items-center justify-between border-t border-zinc-200 pt-6 transition-colors duration-300 group-hover:border-orange-200">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                          {card.button}
                        </span>
                        <ArrowUpRight
                          className="text-orange-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          size={20}
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}