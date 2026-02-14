import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FIRO | Activos Roboticos, Retorno Real",
  description:
    "FIRO convierte robots humanoides en activos productivos. Invierte en una unidad, FIRO opera el despliegue y tu sigues utilizacion, uptime y pagos.",
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    locale: "es_ES",
    url: "/es",
    title: "FIRO | Activos Roboticos, Retorno Real",
    description:
      "Invierte en activos roboticos con operacion gestionada y visibilidad de pagos.",
  },
};

export default function EsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
