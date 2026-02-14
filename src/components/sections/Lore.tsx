"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

type LoreProps = {
  locale?: "en" | "es";
};

export default function Lore({ locale = "en" }: LoreProps) {
  const isEs = locale === "es";
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 75%" },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="lore" className="bg-firo-navy py-24 text-white">
      <Container>
        <div className="max-w-3xl">
          <div data-reveal className="text-sm font-semibold text-firo-blue">
            {isEs ? "Historia" : "Lore"}
          </div>
          <h2 data-reveal className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {isEs
              ? "El mundo no se quedo sin trabajo: se quedo sin operadores confiables."
              : "The world didn’t run out of work — it ran out of reliable operators."}
          </h2>
          <p data-reveal className="mt-4 text-white/70">
            {isEs
              ? "FIRO convierte robots humanoides en una clase de activo: utilizacion medible, uptime gestionado y pagos transparentes. Empezamos en entornos controlados y luego desbloqueamos mercados mas complejos."
              : "FIRO converts humanoid robots into an asset class: measurable utilization, managed uptime, and transparent payouts. Start where the environment is controlled, then unlock harder quests."}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card
              title={isEs ? "Escasez" : "Scarcity"}
              desc={isEs ? "La disponibilidad humana es volatil. La demanda no." : "Human availability is volatile. Demand isn’t."}
            />
            <Card
              title={isEs ? "Control" : "Control"}
              desc={isEs ? "Eventos y recintos tienen presupuesto, alcance y cronograma." : "Events & venues have budgets, scope, and schedules."}
            />
            <Card
              title={isEs ? "Escala" : "Scale"}
              desc={isEs ? "Los playbooks se acumulan. La capacidad se desbloquea con el tiempo." : "Playbooks compound. Capability unlocks over time."}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div data-reveal className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/65">{desc}</div>
    </div>
  );
}
