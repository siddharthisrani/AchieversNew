"use client";

import { motion } from "framer-motion";

export default function BootScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex h-full items-center justify-center bg-[#050505]"
    >
      <div className="text-center">

        <motion.img
          src="/assets/DNDC-Logo.jpeg"
          alt="DNDC"
          initial={{
            scale: .8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: .6,
          }}
          className="mx-auto h-20 w-auto"
        />

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: 220,
          }}
          transition={{
            delay: .4,
            duration: .8,
          }}
          className="mx-auto mt-8 h-[3px] rounded-full bg-[#E26743]"
        />

        <p className="mt-5 text-xs uppercase tracking-[.35em] text-neutral-400">
          Loading Workspace...
        </p>

      </div>
    </motion.div>
  );
}