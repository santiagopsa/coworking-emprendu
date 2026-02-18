import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoHero from "@/components/sections/VideoHero";
import Lore from "@/components/sections/Lore";
import Levels from "@/components/sections/Levels";
import StickySwap from "@/components/sections/StickySwap";
import Rewards from "@/components/sections/Rewards";
import Join from "@/components/sections/Join";

export const metadata: Metadata = {
  title: "Emprendu x PeakU | Publica ofertas con acceso a talento top",
  description:
    "Landing QR para la comunidad de Emprendu: publica vacantes con acceso a la base de talento especializado de PeakU, pruebas tecnicas y reportes por candidato.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Emprendu x PeakU | Contrata mejor desde tu Coworking",
    description:
      "Acceso exclusivo para empresas de Emprendu: mas de 200 aplicaciones por oferta, filtrado guiado y reportes completos por candidato.",
    url: "/",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "PeakU dashboard for recruiter decision support",
      },
    ],
  },
};

export default function Page() {
  return (
    <main id="top">
      <Nav />
      <VideoHero />
      <Lore />
      <Levels />
      <StickySwap />
      <Rewards />
      <Join />
    </main>
  );
}
