import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroBackground />

      {/* Adjusted padding and gaps for mobile stacking */}
      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1480px] items-center gap-12 px-5 pb-24 pt-28 md:px-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:px-16 lg:pb-0 lg:pt-0">
        <HeroContent />

        <HeroVisual />
      </div>
    </section>
  );
}