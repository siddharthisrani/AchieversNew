import {
  BarChart3,
  Clapperboard,
  FileSearch,
  GraduationCap,
  Hospital,
  UtensilsCrossed,
} from "lucide-react";

export const labApps = [
  {
    id: "dashboard",
    title: "Business Analytics Dashboard",
    subtitle: "Learn Data Analytics through real business dashboards.",
    icon: BarChart3,
    tech: ["Excel", "SQL", "Power BI", "Python"],
    component: "dashboard",
  },
  {
    id: "netflix",
    title: "Netflix Clone",
    subtitle: "Build modern streaming UI using React & Next.js.",
    icon: Clapperboard,
    tech: ["Next.js", "React", "Firebase"],
    component: "netflix",
  },
  {
    id: "resume",
    title: "AI Resume Analyzer",
    subtitle: "Exactly like the one built for DNDC.",
    icon: FileSearch,
    tech: ["AI", "Node", "MongoDB"],
    component: "resume",
  },
  {
    id: "student",
    title: "Student Portal",
    subtitle: "Attendance, Tests, Notes and LMS.",
    icon: GraduationCap,
    tech: ["Next.js", "Node", "MongoDB"],
    component: "student",
  },
  {
    id: "hospital",
    title: "Hospital ERP",
    subtitle: "Doctors, Patients and Billing System.",
    icon: Hospital,
    tech: ["React", "Node", "SQL"],
    component: "hospital",
  },
  {
    id: "food",
    title: "Food Delivery",
    subtitle: "Ordering, Tracking and Payments.",
    icon: UtensilsCrossed,
    tech: ["React", "Maps", "Payments"],
    component: "food",
  },
];