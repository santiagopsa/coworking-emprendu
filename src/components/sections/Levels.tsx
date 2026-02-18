"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const levels = [
  {
    level: "Step 1",
    title: "Publish your role",
    earns: "You submit your vacancy from Emprendu",
    does: "Exclusive access for coworking community members",
  },
  {
    level: "Step 2",
    title: "Get top applicants",
    earns: "You receive strong candidate flow",
    does: "200+ applications per publication on average",
  },
  {
    level: "Step 3",
    title: "Filter with assessments",
    earns: "We guide technical and personality evaluations",
    does: "Shortlist candidates with objective criteria",
  },
  {
    level: "Step 4",
    title: "Decide with reports",
    earns: "You get a full report per candidate",
    does: "Skills, fit, and recommendation for final decision",
  },
];
const levelsEs = [
  {
    level: "Paso 1",
    title: "Publica tu oferta",
    earns: "Subes tu vacante desde Emprendu",
    does: "Acceso exclusivo para la comunidad del Coworking",
  },
  {
    level: "Paso 2",
    title: "Recibe candidatos top",
    earns: "Obtienes flujo de perfiles de alto nivel",
    does: "Mas de 200 aplicaciones por publicacion en promedio",
  },
  {
    level: "Paso 3",
    title: "Filtra con evaluaciones",
    earns: "Guiamos pruebas tecnicas y de personalidad",
    does: "Priorizas candidatos con criterios objetivos",
  },
  {
    level: "Paso 4",
    title: "Decide con reportes",
    earns: "Recibes un reporte completo por candidato",
    does: "Habilidades, ajuste y recomendacion final",
  },
];

type LevelsProps = {
  locale?: "en" | "es";
};

export default function Levels({ locale = "en" }: LevelsProps) {
  const isEs = locale === "es";
  const levelItems = isEs ? levelsEs : levels;
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
    <section ref={root} id="proceso" className="bg-firo-bg py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="md:sticky md:top-28">
            <div className="text-sm font-semibold text-black">{isEs ? "Proceso" : "Process"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Asi funciona la seleccion para empresas de Emprendu" : "How hiring works for Emprendu companies"}
            </h2>
            <p className="mt-4 text-firo-muted">
              {isEs
                ? "Combinamos alcance, evaluacion y analitica para que cada vacante se convierta en una contratacion mejor respaldada."
                : "We combine reach, assessments, and analytics so each role leads to better hiring decisions."}
            </p>
          </div>

          <div className="grid gap-4">
            {levelItems.map((l) => (
              <div
                key={l.title}
                data-level
                className="group rounded-3xl border border-firo-line bg-firo-bg p-6 shadow-soft transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-firo-muted">{l.level}</div>
                  <div className="h-2 w-2 rounded-full bg-[#FDE774] opacity-70 group-hover:opacity-100" />
                </div>
                <div className="mt-2 text-xl font-semibold tracking-tight">{l.title}</div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <Stat label={isEs ? "Que incluye" : "Included"} value={l.earns} />
                  <Stat label={isEs ? "Resultado" : "Outcome"} value={l.does} />
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
