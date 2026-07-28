"use client";

import { motion } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  FolderKanban,
  LucideIcon,
  ShieldCheck,
} from "lucide-react";

import { Course, CertificateFeatureType } from "@/types/course";

type Props = {
  course: Course;
};

const featureIcons: Record<CertificateFeatureType, LucideIcon> = {
  verification: ShieldCheck,
  projects: FolderKanban,
  skills: BriefcaseBusiness,
  recognition: Award,
};

export default function CertificateSection({ course }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0A0B0D] py-20 lg:py-36 selection:bg-orange-500 selection:text-white">
      {/* --- Ambient glow --- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[180px]" />
        <div className="absolute bottom-[-180px] right-[-180px] h-[420px] w-[420px] rounded-full bg-orange-400/5 blur-[180px]" />
      </div>

      {/* --- Grid pattern --- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <EmberField />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8 xl:gap-16">
          {/* --- Left: Copy + Quick Facts --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-orange-500 sm:text-sm">
                Certificate
              </span>
            </div>

            <h2 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[64px]">
              Earn More Than
              <br />A <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">Certificate.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg">
              {course.certificate.subtitle || "A mark of your dedication, practical skills, and industry-ready knowledge. Earn a professional certificate from DNDC upon successful completion."}
            </p>

            {/* Quick Stats Divider */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8 sm:gap-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
                  <ShieldCheck className="h-6 w-6 text-orange-400" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500">Issued By</p>
                  <h4 className="mt-1 text-sm font-bold text-white">{course.certificate.issuer}</h4>
                </div>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
                  <CalendarDays className="h-6 w-6 text-orange-400" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500">Validity</p>
                  <h4 className="mt-1 text-sm font-bold text-white">{course.certificate.validity || "Lifetime"}</h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Right: 3D Certificate on a Real Pedestal --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-12 flex min-h-[480px] items-center justify-center lg:col-span-7 lg:mt-0"
          >
            {/* Ambient Orange Glow Behind Podium */}
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[100px] sm:h-[400px] sm:w-[400px]" />

            {/* 1. Perspective Wrapper */}
            <div 
              className="relative z-10 w-full max-w-[540px]" 
              style={{ perspective: "1400px" }}
            >
              
              {/* 2. REAL 3D CYLINDER PEDESTAL */}
              <div className="absolute -bottom-8 left-1/2 h-[60px] w-[320px] -translate-x-1/2 sm:-bottom-14 sm:h-[90px] sm:w-[500px]">
                
                {/* Huge glow thrown on the floor */}
                <div className="absolute -bottom-6 left-1/2 h-[40px] w-[80%] -translate-x-1/2 rounded-[100%] bg-orange-600/40 blur-2xl sm:-bottom-10" />
                
                {/* Bottom Base (Glowing Ring) */}
                <div className="absolute bottom-0 h-[30px] w-full rounded-[100%] border-b border-orange-500/60 bg-[#050505] shadow-[0_5px_20px_rgba(249,115,22,0.5)] sm:h-[45px]" />
                
                {/* Cylinder Wall (Thickness) */}
                <div className="absolute top-[15px] h-[30px] w-full bg-gradient-to-b from-[#141414] to-[#050505] sm:top-[22.5px] sm:h-[45px]" />
                
                {/* Top Surface */}
                <div className="absolute top-0 h-[30px] w-full rounded-[100%] border border-white/10 bg-[#141414] sm:h-[45px]">
                  {/* Drop Shadow from the Certificate resting on it */}
                  <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-black/80 blur-md" />
                </div>
              </div>

              {/* 3. The Resting Certificate (NO FLOATING, ANCHORED TILT) */}
              <div
                className="relative z-10 mx-auto w-full max-w-[90%] rounded-xl bg-[#FAF8F4] p-2 shadow-[0_30px_60px_rgba(0,0,0,0.8)] sm:max-w-[480px] sm:p-3"
                style={{
                  transformOrigin: "bottom center", // Anchors it to the pedestal
                  transform: "rotateX(18deg) rotateY(-30deg) rotateZ(6deg) translateY(10px)", // Grounded Tilt
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Double Border Styling */}
                <div className="h-full w-full rounded border border-neutral-300 p-1">
                  <div className="flex h-full w-full flex-col items-center border-[0.5px] border-neutral-400/60 bg-white/50 px-4 py-6 text-center sm:px-10 sm:py-7">
                    
                    {/* Header: Logo & Title */}
                    <div className="flex flex-col items-center">
                      <h3 className="text-3xl font-black italic tracking-tighter text-[#E46B26] sm:text-4xl">
                        DNDC
                      </h3>
                      <p className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.2em] text-neutral-800 sm:text-[9px]">
                        Data & Development Center
                      </p>
                    </div>

                    <h4 className="mt-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-700 sm:text-xs">
                      Professional Certificate
                    </h4>
                    
                    <div className="mt-5 w-12 border-t-[0.5px] border-neutral-300 sm:mt-6" />

                    <p className="mt-5 text-[10px] italic text-neutral-500 sm:text-[11px]">
                      This is to certify that
                    </p>

                    {/* Student Name (Cursive Font) */}
                    <h2 
                      className="mt-2 text-4xl text-[#D97632] sm:text-[44px]"
                      style={{ fontFamily: "'Dancing Script', 'Great Vibes', 'Brush Script MT', cursive", lineHeight: 1.2 }}
                    >
                      Student Name
                    </h2>

                    <p className="mt-2 text-[10px] italic text-neutral-500 sm:text-[11px]">
                      has successfully completed
                    </p>

                    {/* Course Title */}
                    <h3 className="mt-1.5 text-base font-bold text-neutral-900 sm:text-xl">
                      {course.name}
                    </h3>

                    <p className="mt-2 max-w-[280px] text-[9px] leading-relaxed text-neutral-500 sm:text-[10px]">
                      and has demonstrated the required skills <br className="hidden sm:block" /> for real-world software development.
                    </p>

                    {/* Footer Stats Grid */}
                    <div className="mt-6 grid w-full grid-cols-3 gap-2 border-t-[0.5px] border-neutral-200 pt-5 text-center sm:mt-7 sm:gap-4 sm:pt-6">
                      <div>
                        <p className="text-[7px] uppercase tracking-widest text-neutral-400 sm:text-[8px]">Duration</p>
                        <p className="mt-1.5 text-[9px] font-bold text-neutral-800 sm:text-[11px]">{course.certificate.duration}</p>
                      </div>
                      <div>
                        <p className="text-[7px] uppercase tracking-widest text-neutral-400 sm:text-[8px]">Certificate ID</p>
                        <p className="mt-1.5 truncate px-1 text-[9px] font-bold text-neutral-800 sm:text-[11px]">
                          {course.certificate.certificateIdPrefix}-2026
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-end">
                        <span 
                          className="text-lg text-neutral-800 sm:text-2xl"
                          style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive", lineHeight: 0.8 }}
                        >
                          Signature
                        </span>
                        <p className="mt-2 text-[6px] font-medium uppercase tracking-wider text-neutral-500 sm:text-[7px]">Director<br/>DNDC</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* --- Gold Seal / Medal (Popped out in Z-space) --- */}
                <div 
                  className="absolute -bottom-5 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-[#FFE299] bg-gradient-to-br from-[#F5B531] via-[#F9D668] to-[#C88414] shadow-[0_15px_30px_rgba(0,0,0,0.5)] sm:-bottom-7 sm:h-16 sm:w-16"
                  style={{ transform: "translateZ(20px) translateX(-50%)" }}
                >
                  <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full border border-orange-300/40 bg-transparent text-center sm:h-12 sm:w-12">
                     <span className="text-[5px] font-bold uppercase tracking-[0.2em] text-white/90 sm:text-[6px]">Verified</span>
                     <span className="mt-0.5 text-[9px] font-black italic tracking-tighter text-white sm:text-[11px]">DNDC</span>
                  </div>
                  <div className="absolute -bottom-2 -left-1 -z-10 h-6 w-4 -rotate-[25deg] bg-[#A56C10] shadow-sm sm:-bottom-3 sm:w-5" />
                  <div className="absolute -bottom-2 -right-1 -z-10 h-6 w-4 rotate-[25deg] bg-[#A56C10] shadow-sm sm:-bottom-3 sm:w-5" />
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* --- Bottom Features Row --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-16 overflow-hidden rounded-3xl border border-white/5 bg-[#12141A] shadow-2xl sm:mt-24 lg:mt-28"
        >
          <div className="grid grid-cols-1 divide-y divide-white/5 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {course.certificate.features.map((feature) => {
              const Icon = featureIcons[feature.type] || ShieldCheck;
              return (
                <div key={feature.title} className="flex flex-col items-start gap-4 p-8 transition-colors hover:bg-white/[0.02] sm:p-8 xl:p-10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10">
                    <Icon className="h-5 w-5 text-orange-400" aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{feature.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- Background Particles Component ---
function EmberField() {
  const dots = [
    { left: "8%", top: "20%", size: 3, delay: 0 },
    { left: "18%", top: "62%", size: 2, delay: 0.6 },
    { left: "27%", top: "35%", size: 2, delay: 1.2 },
    { left: "4%", top: "78%", size: 3, delay: 0.3 },
    { left: "62%", top: "14%", size: 2, delay: 0.9 },
    { left: "88%", top: "30%", size: 3, delay: 0.2 },
    { left: "94%", top: "68%", size: 2, delay: 1.5 },
    { left: "72%", top: "82%", size: 3, delay: 0.5 },
    { left: "50%", top: "8%", size: 2, delay: 1.1 },
    { left: "40%", top: "90%", size: 2, delay: 0.8 },
    { left: "15%", top: "10%", size: 2, delay: 1.4 },
    { left: "80%", top: "50%", size: 2, delay: 0.4 },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((dot, i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.15, 0.7, 0.15] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
          className="absolute rounded-full bg-orange-400"
          style={{ left: dot.left, top: dot.top, width: dot.size, height: dot.size }}
        />
      ))}
    </div>
  );
}