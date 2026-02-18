"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const cards = [
  { title: "Complete candidate report", desc: "Every shortlisted profile includes technical results, personality insights, and hiring recommendation." },
  { title: "Faster shortlisting", desc: "Assessment-backed filtering helps your team spend time only with high-fit candidates." },
  { title: "Higher decision confidence", desc: "Hiring managers receive objective evidence, not only resumes and opinions." },
  { title: "Exclusive coworking advantage", desc: "Emprendu companies publish with a differentiated channel to reach top talent." },
];
const cardsEs = [
  { title: "Reporte completo por candidato", desc: "Cada perfil preseleccionado incluye resultados tecnicos, rasgos de personalidad y recomendacion." },
  { title: "Preseleccion mas rapida", desc: "El filtrado con evaluaciones permite enfocar entrevistas en perfiles de mayor ajuste." },
  { title: "Decisiones con mas certeza", desc: "Los lideres reciben evidencia objetiva para decidir con seguridad." },
  { title: "Ventaja exclusiva para Emprendu", desc: "Las empresas del Coworking publican en un canal diferenciado para atraer mejor talento." },
];

type StickySwapProps = {
  locale?: "en" | "es";
};

export default function StickySwap({ locale = "en" }: StickySwapProps) {
  const isEs = locale === "es";
  const cardsToRender = isEs ? cardsEs : cards;
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
            <div className="text-sm font-semibold text-black">{isEs ? "Resultados esperados" : "Expected outcomes"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Lo que obtiene tu equipo al publicar con PeakU desde Emprendu" : "What your team gets by posting through Emprendu"}
            </h2>
            <p className="mt-4 max-w-lg text-firo-muted">
              {isEs
                ? "No es solo volumen de postulaciones. Es calidad de filtro y claridad para tomar decisiones de contratacion."
                : "It is not just higher applicant volume. It is better filtering and clear evidence for final hiring decisions."}
            </p>
          </div>

          <div className="grid gap-4">
            {cardsToRender.map((c) => (
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
