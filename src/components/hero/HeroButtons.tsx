"use client";

import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import Magnetic from "@/components/animations/Magnetic";
import { useLeadPopup } from "@/context/LeadPopupContext";
import { notify } from "@/lib/toast";

export default function HeroButtons() {
  const { openPopup } = useLeadPopup();
   const handlePortalClick = () => {
    notify.success(
      "Student Portal is coming soon!"
    );
  };

  return (
    <div className="mt-10 flex flex-wrap gap-4">
      {/* Primary CTA */}

      <Magnetic>
        <button
          type="button"
          onClick={() => openPopup("Book Demo", "Hero Section")}
          className="group flex items-center gap-3 rounded-full bg-[#E26743] px-7 py-4 text-[15px] font-semibold text-[#0E0C0A] shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F1EAD8] hover:shadow-orange-500/40"
        >
          Book Free Demo

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1"
          />
        </button>
      </Magnetic>

      {/* Secondary CTA */}

      <Magnetic>
        <button
          type="button"
          onClick={handlePortalClick}
          className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-[15px] font-medium text-[#F1EAD8] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#E26743] hover:bg-[#E26743]/10 hover:text-[#E26743]"
        >
          <GraduationCap
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          />

          Student Portal

          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </button>
      </Magnetic>
    </div>
  );
}