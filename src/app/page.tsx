import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import TechRail from "@/components/sections/TechRail";
import AboutDNDC from "@/components/AboutDNDC/AboutDNDC";
import CourseExplorer from "@/components/sections/CourseExplorer";
import ExperienceLab from "@/components/experience-lab/ExperienceLab";
import WhyDNDC from "@/components/sections/WhyDNDC";
import LearningJourney from "@/components/sections/LearningJourney";
import Mentors from "@/components/sections/Mentors";
import StudentSuccess from "@/components/sections/StudentSuccessStories";
import Footer from "@/components/sections/Footer";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TechRail />
        <AboutDNDC />
        <CourseExplorer/>
        <ExperienceLab />
        <WhyDNDC/>
        <LearningJourney/>
        <Mentors/>
        <StudentSuccess/>
        <Footer/>
      </main>
    </>
  );
}