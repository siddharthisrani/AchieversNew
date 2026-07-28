"use client";

import { useEffect,useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X ,Sparkles} from "lucide-react";
import { useLeadPopup } from "@/context/LeadPopupContext";
import { submitLead } from "@/services/lead.service";
import { notify } from "@/lib/toast";

export default function LeadPopup() {
 const {
  isOpen,
  closePopup,
  inquiryType,
  source,
} = useLeadPopup();

const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  course: "",
  message: "",
});

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };
    
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closePopup]);

  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
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
    notify.error("Please enter your phone number.");
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
      inquiryType,
      source,
    });

    notify.success(response.message, toastId);

    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });

    closePopup();

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

const popupContent = {
  "Book Demo": {
    title: "Book Your Free Demo",
    description:
      "Fill in your details and our admissions team will contact you shortly.",
  },

  Admission: {
    title: "Start Your Admission",
    description:
      "Complete the form below and begin your learning journey with DNDC.",
  },

  "Free Counselling": {
    title: "Get Free Career Guidance",
    description:
      "Our experts will help you choose the right course based on your career goals.",
  },

  Workshop: {
    title: "Register for Workshop",
    description:
      "Reserve your seat now. Our team will contact you with workshop details.",
  },

  Contact: {
    title: "Send Us Your Inquiry",
    description:
      "Tell us what you're looking for and we'll get back to you as soon as possible.",
  },

  "Course Guidance": {
  title: "Find Your Perfect Course",
  description:
    "Not sure where to start? Tell us about your interests and our mentors will recommend the best learning path for your career.",
},

  Default: {
    title: "Let's Get Started",
    description:
      "Fill in your details and our team will contact you shortly.",
  },
};

const currentPopup =
  popupContent[inquiryType as keyof typeof popupContent] ??
  popupContent.Default;

  const buttonText = {
  "Book Demo": "Book Demo",
  Admission: "Apply Now",
  Workshop: "Register Now",
  "Free Counselling": "Get Free Guidance",
  "Course Guidance": "Get My Recommendation",
  "Start Journey":"Start Your Journey",
  Contact: "Send Inquiry",
};

  return (
   <AnimatePresence>
      {isOpen && (
        <>
          {/* --- Backdrop --- */}
          <motion.div
            onClick={closePopup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-md"
          />

          {/* --- Popup Container --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed left-1/2 top-1/2 z-[100] w-[92%] max-w-lg -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative overflow-hidden rounded-[24px] border border-zinc-200 bg-[#FDFBF7] p-6 shadow-2xl sm:p-8">
              
              {/* --- Close Button --- (Fixed Visibility) */}
              <button
                onClick={closePopup}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100/80 transition-all hover:bg-orange-100 sm:right-5 sm:top-5"
              >
                <X size={18} strokeWidth={2.5} className="!text-zinc-600 hover:!text-orange-600" />
              </button>

              {/* --- Header --- */}
              <div className="flex items-center gap-1.5 rounded-full bg-orange-100/80 px-3 py-1 w-max">
                 <Sparkles className="h-3 w-3 !text-orange-500" />
                 <span className="text-[10px] font-bold uppercase tracking-widest !text-orange-600">
                  {inquiryType || "Admission"}
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-black tracking-tight !text-zinc-900 sm:text-3xl">
  {currentPopup.title}
</h2>

<p className="mt-1.5 text-sm !text-zinc-500">
  {currentPopup.description}
</p>

              {/* --- Form --- */}
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:gap-4">
                
                {/* 2-Column Grid on Desktop for compactness */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm !text-zinc-900 outline-none transition placeholder:!text-zinc-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 sm:h-12"
                  />

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm !text-zinc-900 outline-none transition placeholder:!text-zinc-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 sm:h-12"
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm !text-zinc-900 outline-none transition placeholder:!text-zinc-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 sm:h-12"
                />

                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm !text-zinc-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100 sm:h-12"
                >
                  <option value="" disabled className="!text-zinc-400">
                    Select Course
                  </option>
                  <option value="MERN Stack Development" className="!text-zinc-900">MERN Stack Development</option>
                  <option value="Java Full Stack" className="!text-zinc-900">Java Full Stack</option>
                  <option value="Python Full Stack" className="!text-zinc-900">Python Full Stack</option>
                  <option value="Data Analytics" className="!text-zinc-900">Data Analytics</option>
                  <option value="Data Science" className="!text-zinc-900">Data Science</option>
                  <option value="AI / Machine Learning" className="!text-zinc-900">AI / Machine Learning</option>
                  <option value="Flutter Development" className="!text-zinc-900">Flutter Development</option>
                  <option value="UI / UX Design" className="!text-zinc-900">UI / UX Design</option>
                  <option value="Digital Marketing" className="!text-zinc-900">Digital Marketing</option>
                  <option value="Other" className="!text-zinc-900">Other</option>
                </select>

                <textarea
                  rows={2}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Additional Message (Optional)"
                  className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm !text-zinc-900 outline-none transition placeholder:!text-zinc-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-[#E26743] text-sm font-bold !text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-600 hover:shadow-orange-500/40 disabled:cursor-not-allowed disabled:opacity-60 sm:h-12 sm:text-base"
                >
                   {loading
    ? "Submitting..."
    : buttonText[inquiryType as keyof typeof buttonText] ??
      "Submit Inquiry"}
                </button>
              </form>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}