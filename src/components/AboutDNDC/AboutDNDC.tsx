"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import JourneyProgress from "./JourneyProgress";
import JourneySlide, { journey } from "./JourneySlide";

const TOTAL_SLIDES = journey.length;

// Match this to your real navbar height (px) — only matters for the desktop
// pinned view below; the mobile view never pins, so it never needs this.
const NAVBAR_HEIGHT = 96;

export default function AboutDNDC() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <DesktopJourney reduceMotion={reduceMotion} />
      <MobileJourney reduceMotion={reduceMotion} />
    </>
  );
}

/**
 * Desktop / tablet-landscape: the scroll-linked pinned horizontal pan.
 * Unchanged in behavior from before — just now gated to md+ so phones never
 * get a 500vh scroll-jacked section, which is a rough experience on touch.
 */
function DesktopJourney({ reduceMotion }: { reduceMotion: boolean | null }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const index = Math.min(
      TOTAL_SLIDES - 1,
      Math.max(0, Math.round(value * (TOTAL_SLIDES - 1)))
    );
    setActiveSlide((prev) => (prev !== index ? index : prev));
  });

  const rawX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(TOTAL_SLIDES - 1) * 100}vw`]
  );
  const smoothX = useSpring(rawX, { stiffness: 110, damping: 26, mass: 0.6 });

  return (
    <section
      ref={sectionRef}
      className="relative hidden bg-black xl:block"
      style={{ height: `${TOTAL_SLIDES * 100}vh` }}
    >
      <div
        className="sticky overflow-hidden"
        style={{
          top: `${NAVBAR_HEIGHT}px`,
          height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        }}
      >
        <JourneyProgress journey={journey} activeSlide={activeSlide} />

        <motion.div style={{ x: reduceMotion ? rawX : smoothX }} className="flex h-full">
          {journey.map((item) => (
            <div key={item.id} className="h-full w-screen shrink-0">
              <JourneySlide item={item} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Mobile / tablet-portrait: a plain native swipe carousel. No pinning, no
 * body-scroll locking, no viewport-height math — just horizontal scroll-snap,
 * which phones already handle perfectly on their own. The page scrolls
 * completely normally around it; only the carousel itself captures a swipe.
 */
function MobileJourney({ reduceMotion }: { reduceMotion: boolean | null }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  function handleScroll() {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActiveSlide((prev) => (prev !== index ? index : prev));
  }

  function scrollToSlide(index: number) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({
      left: index * track.clientWidth,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <section className="bg-black py-10 xl:hidden">
      <div
  ref={trackRef}
  onScroll={handleScroll}
  className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {journey.map((item) => (
         <div
  key={item.id}
  className="w-full shrink-0 snap-center px-4 sm:px-6 md:px-10 lg:px-16">
           <div
  className="overflow-hidden rounded-2xl border border-white/10 min-h-[520px] sm:min-h-[580px] md:h-[75vh] lg:h-[82vh]">
              <JourneySlide item={item} mobile/>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {journey.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSlide(i)}
            aria-label={`Go to step ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === activeSlide ? "w-6 bg-[#E26743]" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}