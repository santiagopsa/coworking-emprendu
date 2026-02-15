import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FIRO Inversionistas | Tesis, unit economics, riesgos y FAQ",
  description:
    "Resumen para inversionistas de FIRO: tesis de mercado, unit economics, mitigaciones de riesgo, mapa competitivo y contacto.",
  alternates: {
    canonical: "/es/investors",
  },
  openGraph: {
    locale: "es_ES",
    title: "FIRO Inversionistas | Tesis, unit economics, riesgos y FAQ",
    description:
      "Modelo de inversion FIRO con supuestos transparentes, riesgos y formulario de contacto.",
    url: "/es/investors",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "Resumen de inversion FIRO",
      },
    ],
  },
};

export { default } from "@/app/investors/page";
