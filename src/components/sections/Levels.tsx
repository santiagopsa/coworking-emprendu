"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const levels = [
  {
    level: "Level 1",
    title: "Events",
    earns: "Daily rentals + brand activations",
    does: "Check-in, wayfinding, guest guidance",
  },
  {
    level: "Level 2",
    title: "Venues",
    earns: "Recurring placements + SLA uptime",
    does: "Front-of-house flows, info desk, scheduling",
  },
  {
    level: "Level 3",
    title: "Hospitality",
    earns: "Higher utilization windows",
    does: "Concierge tasks + guided service routines",
  },
  {
    level: "Level 4",
    title: "Enterprise",
    earns: "Fleet contracts + multi-site ops",
    does: "Compliance, reporting, and fleet control",
  },
];

export default function Levels() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-level]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="levels" className="bg-white py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="md:sticky md:top-28">
            <div className="text-sm font-semibold text-firo-blue">Levels</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Capability unlocks.
            </h2>
            <p className="mt-4 text-firo-muted">
              We don’t start on “hard mode”. We start in controlled environments, build playbooks, then unlock new markets.
            </p>
          </div>

          <div className="grid gap-4">
            {levels.map((l) => (
              <div
                key={l.title}
                data-level
                className="group rounded-3xl border border-firo-line bg-firo-bg p-6 shadow-soft transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-firo-muted">{l.level}</div>
                  <div className="h-2 w-2 rounded-full bg-firo-blue opacity-70 group-hover:opacity-100" />
                </div>
                <div className="mt-2 text-xl font-semibold tracking-tight">{l.title}</div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <Stat label="How it earns" value={l.earns} />
                  <Stat label="What it does" value={l.does} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-firo-line bg-white p-4">
      <div className="text-xs font-semibold text-firo-muted">{label}</div>
      <div className="mt-1 text-sm">{value}</div>
    </div>
  );
}
