"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  MapPin,
  Clock3,
} from "lucide-react";
import { notify } from "@/lib/toast";
import { submitLead } from "@/services/lead.service";

export default function ContactSection() {

    const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  course: "",
  message: "",
});

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  if (!formData.name.trim()) {
    notify.error("Please enter your name.");
    return;
  }

  if (!formData.phone.trim()) {
    notify.error("Please enter your phone.");
    return;
  }

  if (!formData.course.trim()) {
    notify.error("Please select a course.");
    return;
  }

  setLoading(true);

  const toastId = notify.loading(
    "Submitting your inquiry..."
  );

  try {
    const response = await submitLead({
      ...formData,
      inquiryType: "Contact",
      source: "Contact Page",
    });

    notify.success(response.message, toastId);

    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  } catch (error) {
    notify.error(
      error instanceof Error
        ? error.message
        : "Something went wrong.",
      toastId
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="relative bg-[#FDFBF7] py-24 lg:py-32 selection:bg-orange-500 selection:text-white">

      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
          style={{
            backgroundImage: "url('/noise.png')",
          }}
        />

        <div className="absolute -left-20 top-32 h-[450px] w-[450px] rounded-full bg-orange-300/15 blur-[140px]" />

        <div className="absolute -right-32 bottom-10 h-[500px] w-[500px] rounded-full bg-orange-200/20 blur-[160px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/60 px-4 py-2 backdrop-blur-md">

            <Sparkles className="h-4 w-4 text-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600">

              VISIT OUR CAMPUS

            </span>

          </div>

          <h2 className="mt-8 text-4xl font-black leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">

            Meet our team,
            <br />

            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">

              start your journey.

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-500">

            Visit our institute, explore our classrooms,
            meet our mentors, or simply leave us a message.
            We'd love to help you choose the right career path.

          </p>

        </motion.div>

        {/* Main Grid */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:gap-14">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="space-y-6"
          >

            {/* Google Map */}

            <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-xl shadow-black/5">

              <iframe
                src="https://www.google.com/maps?q=MP+Nagar+Zone+1+Bhopal&output=embed"
                loading="lazy"
                className="h-[450px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

            {/* Address Card */}

            <div className="rounded-[32px] border border-zinc-200 bg-white p-8 shadow-lg shadow-black/5">

              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">

                  <MapPin size={26} />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-zinc-900">

                    Data & Development Center

                  </h3>

                  <p className="mt-3 leading-7 text-zinc-500">

                    2nd Floor,
                    <br />
                    MP Nagar Zone-1,
                    <br />
                    Bhopal, Madhya Pradesh

                  </p>

                </div>

              </div>

              <div className="mt-8 h-px bg-zinc-100" />

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500">

                  <Clock3 size={22} />

                </div>

                <div>

                  <p className="font-semibold text-zinc-900">

                    Institute Hours

                  </p>

                  <p className="text-sm text-zinc-500">

                    Monday – Saturday • 10:00 AM – 7:00 PM

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="rounded-[36px] border border-zinc-200 bg-white/80 p-8 shadow-xl shadow-black/5 backdrop-blur-xl lg:p-10"
          >

           {/* Form Header */}

<div>
  <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
    Contact Form
  </span>

  <h3 className="mt-6 text-3xl font-black tracking-tight text-zinc-900">
    Send us a message.
  </h3>

  <p className="mt-3 text-zinc-500 leading-7">
    Fill out the form below and our academic team will contact you as
    soon as possible.
  </p>
</div>

{/* Form */}

<form
  onSubmit={handleSubmit}
  className="mt-10 space-y-6"
>

  {/* Name */}

  <div>
    <label className="mb-2 block text-sm font-semibold text-zinc-700">
      Full Name <span className="text-orange-500">*</span>
    </label>

    <input
      name="name"
  value={formData.name}
  onChange={handleChange}
      type="text"
      placeholder="Enter your full name"
      className="h-14 w-full rounded-2xl border border-zinc-200 bg-white px-5 text-zinc-900 outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
    />
  </div>

  {/* Email */}

  <div>
    <label className="mb-2 block text-sm font-semibold text-zinc-700">
      Email Address
    </label>

    <input
      name="email"
  value={formData.email}
  onChange={handleChange}
      type="email"
      placeholder="Enter your email"
      className="h-14 w-full rounded-2xl border border-zinc-200 bg-white px-5 text-zinc-900 outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
    />
  </div>

  {/* Phone */}

  <div>
    <label className="mb-2 block text-sm font-semibold text-zinc-700">
      Phone Number <span className="text-orange-500">*</span>
    </label>

    <input
      name="phone"
  value={formData.phone}
  onChange={handleChange}
      type="tel"
      placeholder="+91 98765 43210"
      className="h-14 w-full rounded-2xl border border-zinc-200 bg-white px-5 text-zinc-900 outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
    />
  </div>

  {/* Course */}

  <div>
    <label className="mb-2 block text-sm font-semibold text-zinc-700">
      Interested Course <span className="text-orange-500">*</span>
    </label>

    <select
     name="course"
  value={formData.course}
  onChange={handleChange}
      className="h-14 w-full rounded-2xl border border-zinc-200 bg-white px-5 text-zinc-900 outline-none transition-all duration-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
    >
      <option value="" disabled>
        Select a course
      </option>

      <option value="MERN Stack Development">MERN Stack Development</option>
      <option value="Java Full Stack">Java Full Stack</option>
      <option value="Python Full Stack">Python Full Stack</option>
      <option value="Data Analytics">Data Analytics</option>
      <option value="Data Science">Data Science</option>
      <option value="AI / Machine Learning">AI / Machine Learning</option>
      <option value="Flutter Development">Flutter Development</option>
      <option value="UI / UX Design">UI / UX Design</option>
      <option value="Digital Marketing">Digital Marketing</option>
      <option value="Other">Other</option>
    </select>
  </div>

  {/* Message */}

  <div>
    <label className="mb-2 block text-sm font-semibold text-zinc-700">
      Message
    </label>

    <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
      rows={5}
      placeholder="Tell us how we can help you..."
      className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-900 outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
    />
  </div>

  {/* Button */}

  <button
  disabled={loading}
    type="submit"
    className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-zinc-900 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-500/30"
  >
   {loading ? "Sending..." : "Send Inquiry"}

    {loading ? (
  <svg
    className="h-5 w-5 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4l3-3-3-3v4A10 10 0 002 12h2z"
    />
  </svg>
) : (
  <svg
    className="transition-transform duration-300 group-hover:translate-x-1"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)}
  </button>

</form>

            

          </motion.div>

        </div>

      </div>

    </section>
  );
}