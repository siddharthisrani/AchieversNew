"use client";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Laptop from "./Laptop";
import Workspace from "./Workspace";
import Tilt from "react-parallax-tilt";

export default function ExperienceLab() {
  const [active, setActive] = useState(0);

  // Auto switch every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 6);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F8F6F2] py-32">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-40 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#E26743]/10 blur-[150px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
          linear-gradient(#000 1px,transparent 1px),
          linear-gradient(90deg,#000 1px,transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-[1550px] px-6">

        <p className="font-mono text-xs uppercase tracking-[.35em] text-[#E26743]">
          03 / Experience Lab
        </p>

        <h2 className="mt-8 max-w-5xl font-serif text-[clamp(3rem,6vw,6.8rem)] leading-[0.9] tracking-[-.05em] text-[#17120F]">
          Learn by building
          <br />

          <span className="italic text-[#E26743]">
            real software.
          </span>
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-9 text-neutral-600">
          Every student at DNDC works on practical applications instead of
          only reading theory. Explore a few examples of what you'll build
          during your learning journey.
        </p>

        <div className="mt-24 grid gap-16 lg:grid-cols-[380px_1fr]">

          <Sidebar
            active={active}
            setActive={setActive}
          />

<Tilt
  tiltMaxAngleX={6}
  tiltMaxAngleY={6}
  glareEnable
  glareMaxOpacity={0.08}
  scale={1.02}
  transitionSpeed={1200}
>
          <Laptop>
            <Workspace active={active} />

          </Laptop>
</Tilt>


        </div>

      </div>

    </section>
  );
}