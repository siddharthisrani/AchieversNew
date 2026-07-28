"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  PhoneCall,
  Loader2,
  Sparkles
} from "lucide-react";

import { Course } from "@/types/course";

type Props = {
  course: Course;
};

const steps = [
  {
    title: "Apply Online",
    icon: BookOpen,
    description: "Submit your basic details to initiate the process.",
  },
  {
    title: "Counselling",
    icon: PhoneCall,
    description: "Connect with our academic experts at DNDC.",
  },
  {
    title: "Enrollment",
    icon: CheckCircle2,
    description: "Complete your admission formalities securely.",
  },
  {
    title: "Start Learning",
    icon: GraduationCap,
    description: "Begin your transformative tech journey.",
  },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function AdmissionSection({ course }: Props) {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.phone) {
      setError("Please fill all required fields to continue.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          courseSlug: course.slug,
          courseName: course.name,
        }),
      });

      if (!res.ok) {
        throw new Error();
      }

      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setError("Something went wrong securely submitting your data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FDFBF7] py-24 lg:py-32 selection:bg-orange-500 selection:text-white">
      
      {/* --- Ambient Background --- */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.02] mix-blend-multiply"
        style={{ backgroundImage: "url('/noise.png')" }}
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-orange-400/10 blur-[150px]" />
        <div className="absolute -left-[10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-orange-300/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-20">
          
          {/* --- LEFT COLUMN: Typography & Vertical Timeline --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 items-center rounded-full bg-orange-100 px-3 text-[10px] font-bold uppercase tracking-widest text-orange-600">
                Admission
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
              Ready To Start <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Your Journey?</span>
            </h2>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-500 font-medium">
              Your future at DNDC begins with one simple step. Apply today and our academic team will guide you through the process.
            </p>

            {/* Vertical Timeline (Mobile & Desktop Friendly) */}
            <div className="mt-12 lg:mt-16 relative">
              {/* Continuous vertical line */}
              <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-orange-200 via-orange-200 to-transparent" />
              
              <div className="flex flex-col gap-8">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div 
                      key={step.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      className="group relative flex items-start gap-6"
                    >
                      {/* Timeline Node */}
                      <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white bg-white shadow-md shadow-zinc-200/50 transition-all duration-300 group-hover:scale-110 group-hover:border-orange-200 group-hover:shadow-orange-200/50">
                        <Icon className="h-6 w-6 text-orange-500 transition-transform duration-300 group-hover:-rotate-12" />
                      </div>
                      
                      {/* Timeline Content */}
                      <div className="pt-2">
                        <h4 className="text-lg font-bold text-zinc-900 transition-colors group-hover:text-orange-600">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-sm font-medium leading-relaxed text-zinc-500">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: Application Form Card --- */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/60 p-6 shadow-[0_40px_100px_rgba(0,0,0,0.06)] backdrop-blur-2xl sm:p-10 lg:p-12">
              
              <div className="mb-5">
                <h3 className="flex items-center gap-3 text-3xl font-black tracking-tight text-zinc-900">
                  Apply Now <Sparkles className="h-6 w-6 text-orange-400" />
                </h3>
                <p className="mt-2 text-base font-medium text-zinc-500">
                  Fill in your details below. Your information is secure.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-500">
                    Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Mahesh Soni"
                    disabled={loading}
                    className="w-full rounded-2xl border border-zinc-200 bg-white/50 px-5 py-4 font-medium text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10 disabled:opacity-50"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-500">
                      Email Address <span className="text-orange-500">*</span>
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="mahesh@example.com"
                      disabled={loading}
                      className="w-full rounded-2xl border border-zinc-200 bg-white/50 px-5 py-4 font-medium text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10 disabled:opacity-50"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-500">
                      Phone Number <span className="text-orange-500">*</span>
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="+91 98765 43210"
                      disabled={loading}
                      className="w-full rounded-2xl border border-zinc-200 bg-white/50 px-5 py-4 font-medium text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10 disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Course Selection (Read-only) */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-500">
                    Selected Course
                  </label>
                  <div className="relative">
                    <input
                      readOnly
                      value={course.name}
                      className="w-full cursor-not-allowed rounded-2xl border border-orange-200 bg-orange-50/50 px-5 py-4 font-bold text-orange-700 outline-none"
                    />
                    <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2">
                      <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-500">
                    Additional Message <span className="lowercase text-zinc-400">(Optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your goals or ask any questions..."
                    disabled={loading}
                    className="w-full resize-none rounded-2xl border border-zinc-200 bg-white/50 px-5 py-4 font-medium text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10 disabled:opacity-50"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-semibold text-red-500"
                  >
                    {error}
                  </motion.p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-zinc-900 px-8 py-5 font-bold text-white shadow-xl shadow-zinc-900/20 transition-all duration-300 hover:bg-orange-500 hover:shadow-orange-500/30 disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Processing Application...
                    </>
                  ) : (
                    <>
                      Apply Now
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>

              {/* --- Success Overlay --- */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-white/80"
                  >
                    <motion.div 
                      initial={{ scale: 0.9, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="mx-6 max-w-sm rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-2xl"
                    >
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-6">
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-black text-zinc-900">
                        Application Sent!
                      </h3>
                      <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-500">
                        Thank you for choosing DNDC. Our admission counsellor will contact you shortly to complete your enrollment.
                      </p>
                      <button 
                        onClick={() => setSuccess(false)}
                        className="mt-8 w-full rounded-xl bg-zinc-100 px-6 py-3 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-200"
                      >
                        Close Window
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}