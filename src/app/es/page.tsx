import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoHero from "@/components/sections/VideoHero";
import Lore from "@/components/sections/Lore";
import Levels from "@/components/sections/Levels";
import StickySwap from "@/components/sections/StickySwap";
import Rewards from "@/components/sections/Rewards";
import RoiCalc from "@/components/sections/RoiCalc";
import Join from "@/components/sections/Join";

export const metadata: Metadata = {
  title: "FIRO | Invierte en activos roboticos con operacion gestionada",
  description:
    "Invierte en activos roboticos FIRO con despliegue operativo, metricas transparentes y escenarios claros de retorno para inversionistas.",
  alternates: {
    canonical: "/es",
  },
  openGraph: {
    locale: "es_ES",
    title: "FIRO | Invierte en activos roboticos con operacion gestionada",
    description:
      "Propiedad de activos roboticos con seguimiento de operacion y modelado transparente de retornos.",
    url: "/es",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "Dashboard FIRO para inversion en activos roboticos",
      },
    ],
  },
};

export default function PageEs() {
  return (
    <main id="top">
      <Nav locale="es" />
      <VideoHero locale="es" />
      <Lore locale="es" />
      <Levels locale="es" />
      <div id="thesis">
        <StickySwap locale="es" />
      </div>
      <Rewards locale="es" />
      <RoiCalc locale="es" />
      <Join locale="es" />
    </main>
  );
}
