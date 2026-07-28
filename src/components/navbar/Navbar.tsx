"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState,useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CourseMegaMenu from "./CourseMegaMenu";
import { ChevronDown } from "lucide-react";
import { useLeadPopup } from "@/context/LeadPopupContext";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Courses", href: "#" },
  // { title: "Placements", href: "/placements" },
  {  
    title: "Resume Analyzer",
    href: "#",
    comingSoon: true,
   },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const { openPopup } = useLeadPopup();

  useEffect(() => {

    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const openCourses = () => {
  if (closeTimer.current) {
    clearTimeout(closeTimer.current);
  }

  setIsCoursesOpen(true);
};

const closeCourses = () => {
  closeTimer.current = setTimeout(() => {
    setIsCoursesOpen(false);
  }, 180); // Try 150–220ms
};

  return (

<header
className="fixed left-1/2 top-5 z-50 w-[96%] max-w-[1500px] -translate-x-1/2"
>

<div
className={`flex items-center justify-between rounded-full border px-7 transition-all duration-500 ${
scroll
? "h-[72px] border-white/10 bg-black/60 shadow-[0_25px_70px_rgba(0,0,0,.45)] backdrop-blur-2xl"
: "h-[82px] border-white/5 bg-black/20 backdrop-blur-xl"
}`}
>

<Link href="/">

<Image
src="/mainlogo2.png"
alt="DNDC"
width={200}
height={80}
priority
className="h-25 w-auto"
/>

</Link>

<nav className="hidden gap-3 lg:flex">
  {navItems.map((item) =>
    item.title === "Courses" ? (
      <div
        key={item.title}
        className="relative"
       onMouseEnter={openCourses}
       onMouseLeave={closeCourses}
      >
        <button
          type="button"
          className="group flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[#E9DDC8] transition-all duration-300 hover:bg-white/5 hover:text-[#E26743]"
        >
          <span className="relative">
            Courses

            <span className="absolute left-0 -top-1 h-[2px] w-0 rounded-full bg-[#E26743] transition-all duration-300 group-hover:w-full" />
          </span>

          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              isCoursesOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <CourseMegaMenu isOpen={isCoursesOpen} 
         onMouseEnter={openCourses}
         onMouseLeave={closeCourses}
        />
      </div>
    ) : (
      <Link
  key={item.title}
  href={item.comingSoon ? "#" : item.href}
  onClick={(e) => {
    if (item.comingSoon) {
      e.preventDefault();
    }
  }}
  className="group relative flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[#E9DDC8] transition-all duration-300 hover:bg-white/5 hover:text-[#E26743]"
>
        <span className="relative">
          {item.title}

          <span className="absolute left-0 -top-1 h-[2px] w-0 rounded-full bg-[#E26743] transition-all duration-300 group-hover:w-full" />
        </span>
      </Link>
    )
  )}
</nav>

<motion.button
onClick={() =>
  openPopup(
    "Book Demo",
    "Navbar"
  )
}
whileHover={{
scale:1.04,
y:-5
}}
whileTap={{
scale:.98
}}
className="hidden items-center gap-3 rounded-full bg-[#E26743] px-7 py-3.5 text-sm font-semibold text-black shadow-[0_20px_50px_rgba(226,103,67,.35)] lg:flex"
>

Book Free Demo

<ArrowRight
size={17}
className="transition-transform group-hover:translate-x-1"
/>

</motion.button>

<button
onClick={()=>setOpen(!open)}
className="lg:hidden"
>

{
open
?
<X color="white"/>
:
<Menu color="white"/>
}

</button>

</div>

<AnimatePresence>

{
open && (

<motion.div

initial={{opacity:0,y:-20}}

animate={{opacity:1,y:0}}

exit={{opacity:0,y:-20}}

className="border-t border-white/10 bg-[#0E0C0A]"

>

<div className="flex flex-col gap-6 p-8">

{
navItems.map((item)=>(

<Link

key={item.title}

href={item.href}

onClick={()=>setOpen(false)}

>

{item.title}

</Link>

))
}

<button
 onClick={() => {
    setOpen(false);
    openPopup("Book Demo", "Mobile Navbar");
  }}
className="rounded-full bg-[#E26743] py-4"

>

Book Demo

</button>

</div>

</motion.div>

)

}

</AnimatePresence>

</header>

)

}