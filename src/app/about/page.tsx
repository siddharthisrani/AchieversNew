import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import Mentors from "@/components/sections/Mentors";
import AboutWhyDNDC from "@/components/about/AboutWhyDNDC";
import Footer from "@/components/sections/Footer";


export default function AboutPage() {
  return (
    <main >
      <AboutHero />
      <AboutStory />
      <Mentors />
      <AboutWhyDNDC />
      <Footer/>
    </main>
  );
}