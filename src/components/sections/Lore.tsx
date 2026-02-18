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
    <section ref={root} id="beneficios" className="bg-firo-bg py-24 text-firo-text">
      <Container>
        <div className="max-w-3xl">
          <div data-reveal className="text-sm font-semibold text-black">
            {isEs ? "Beneficios para la comunidad Emprendu" : "Benefits for Emprendu community"}
          </div>
          <h2 data-reveal className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {isEs
              ? "Publica una vacante con ventaja real desde tu Coworking."
              : "Post roles with a real hiring advantage."}
          </h2>
          <p data-reveal className="mt-4 text-firo-muted">
            {isEs
              ? "Emprendu ofrece a su comunidad acceso exclusivo a PeakU para atraer talento de alto nivel, evaluar mejor y contratar con mas confianza."
              : "Emprendu gives its community exclusive access to PeakU to attract better candidates and hire with confidence."}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card
              title={isEs ? "Acceso a talento especializado" : "Access specialized talent"}
              desc={isEs ? "Conecta con la base de talento especializado mas grande de Colombia." : "Connect with the largest specialized talent base in Colombia."}
            />
            <Card
              title={isEs ? "Mas de 200 aplicaciones" : "200+ applications per role"}
              desc={isEs ? "Cada publicacion recibe alto volumen para elegir entre los mejores perfiles." : "Every post receives high applicant volume, so you can choose the strongest profiles."}
            />
            <Card
              title={isEs ? "Evaluacion guiada" : "Guided evaluation"}
              desc={isEs ? "Aplicamos pruebas tecnicas y de personalidad para filtrar con criterio." : "We run technical and personality testing to improve screening quality."}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div data-reveal className="rounded-2xl border border-firo-line bg-white p-5">
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-sm text-firo-muted">{desc}</div>
    </div>
  );
}
