"use client";

import { motion } from "framer-motion";
import { labApps } from "./data";

interface SidebarProps {
  active: number;
  setActive: (index: number) => void;
}

export default function Sidebar({
  active,
  setActive,
}: SidebarProps) {
  return (
    <div className="space-y-2">
      {labApps.map((app, index) => {
        const Icon = app.icon;

        return (
          <button
            key={app.id}
            onClick={() => setActive(index)}
            className={`group relative w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
              active === index
                ? "border-[#E26743] bg-[#17120F] text-white"
                : "border-neutral-200 bg-white hover:border-[#E26743]"
            }`}
          >
            {active === index && (
              <motion.div
                layoutId="active-card"
                className="absolute inset-0 rounded-2xl border border-[#E26743]"
              />
            )}

            <div className="relative z-10 flex items-center gap-4">
              <Icon
                size={24}
                className={
                  active === index
                    ? "text-[#E26743]"
                    : "text-neutral-500"
                }
              />

              <div>
                <h3 className="font-semibold">
                  {app.title}
                </h3>

                <p
                  className={`mt-1 text-sm ${
                    active === index
                      ? "text-neutral-300"
                      : "text-neutral-500"
                  }`}
                >
                  {app.subtitle}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}