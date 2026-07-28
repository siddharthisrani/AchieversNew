"use client";

import { AnimatePresence, motion } from "framer-motion";

import Dashboard from "./screens/Dashboard";
import Netflix from "./screens/Netflix";
import ResumeAnalyzer from "./screens/ResumeAnalyzer";
import StudentPortal from "./screens/StudentPortal";
import HospitalERP from "./screens/HospitalERP";
import FoodDelivery from "./screens/FoodDelivery";

interface Props {
  active: number;
}

export default function Workspace({
  active,
}: Props) {

  const screens = [
    <Dashboard key="dashboard" />,
    <Netflix key="netflix" />,
    <ResumeAnalyzer key="resume" />,
    <StudentPortal key="student" />,
    <HospitalERP key="hospital" />,
    <FoodDelivery key="food" />,
  ];

  return (
    <AnimatePresence mode="wait">

      <motion.div
        key={active}
        initial={{
          opacity: 0,
          scale: .97,
          y: 15,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: .98,
        }}
        transition={{
          duration: .45,
        }}
        className="h-full"
      >
        {screens[active]}
      </motion.div>

    </AnimatePresence>
  );
}