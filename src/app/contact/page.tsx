import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactSection from "@/components/contact/ContactSection";
import ContactFAQ from "@/components/contact/ContactFAQ";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
  return (
    <main className="bg-[#FAF8F5]">
      <ContactHero />
      <ContactInfo />
      <ContactSection />
      <ContactFAQ />
      <Footer />
    </main>
  );
}