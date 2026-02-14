"use client";

import { useEffect, useRef, useState } from "react";
import { ensureGsap } from "@/lib/gsap";

type Step = { id: string; label: string };

const steps: Step[] = [
  { id: "top", label: "Start Run" },
  { id: "lore", label: "Lore" },
  { id: "levels", label: "Levels" },
  { id: "thesis", label: "Thesis" },
  { id: "rewards", label: "Rewards" },
  { id: "roi", label: "Simulator" },
  { id: "join", label: "Join" },
];

export default function LevelUpBar() {
  const [active, setActive] = useState<string>(steps[0].label);
  const barRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();

    const flash = () => {
      if (!flashRef.current) return;
      gsap.fromTo(
        flashRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.08, yoyo: true, repeat: 1, ease: "power2.out" }
      );
    };

    const st = ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => {
        if (!barRef.current) return;
        gsap.to(barRef.current, {
          width: `${Math.round(self.progress * 100)}%`,
          duration: 0.08,
          ease: "none",
        });
      },
    });

    const sectionTriggers: { kill: () => void }[] = [];
    steps.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;

      sectionTriggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => {
            setActive(s.label);
            flash();
          },
          onEnterBack: () => {
            setActive(s.label);
            flash();
          },
        })
      );
    });

    return () => {
      st.kill();
      sectionTriggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="fixed right-4 top-4 z-[60] md:right-6 md:top-6">
      <div
        ref={flashRef}
        className="pointer-events-none absolute -inset-2 rounded-2xl bg-firo-blue/20 blur-xl opacity-0"
      />

      <div className="relative w-[240px] rounded-2xl border border-white/10 bg-firo-navy/70 p-3 text-white shadow-soft backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-white/60">
            LEVEL UP
          </div>
          <div className="text-[11px] text-white/55">{active}</div>
        </div>

        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div ref={barRef} className="h-full w-[0%] rounded-full bg-firo-blue" />
        </div>

        <div className="mt-2 flex flex-wrap gap-1">
          {steps.slice(1).map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-white/65 hover:bg-white/10 hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
