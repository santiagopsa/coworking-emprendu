"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const cards = [
  { title: "Asset model", desc: "Structured ownership, clear utilization, measurable uptime." },
  { title: "Demand placement", desc: "We place robots where budgets already exist: events first." },
  { title: "Operations moat", desc: "Maintenance, remote ops, compliance and scheduling." },
  { title: "Capability unlocks", desc: "More tasks over time via software + playbooks." },
];

export default function StickySwap() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-swap-item]");
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.25, y: 20 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "bottom 50%",
              scrub: true,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-firo-bg py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="md:sticky md:top-24 md:h-fit">
            <div className="text-sm font-semibold text-firo-blue">The thesis</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              The next asset class is operational.
            </h2>
            <p className="mt-4 max-w-lg text-firo-muted">
              We start in controlled environments with clear budgets (events), then expand
              capabilities as software playbooks mature.
            </p>
          </div>

          <div className="grid gap-4">
            {cards.map((c) => (
              <div
                key={c.title}
                data-swap-item
                className="rounded-2xl border border-firo-line bg-white p-6 shadow-soft"
              >
                <div className="text-lg font-semibold">{c.title}</div>
                <div className="mt-2 text-firo-muted">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
