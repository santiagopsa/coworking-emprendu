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
  title: "FIRO | Invest in Robotic Assets with Managed Operations",
  description:
    "Invest in FIRO robotic assets with transparent utilization, operator-led deployment, and scenario-based investor payouts.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FIRO | Invest in Robotic Assets with Managed Operations",
    description:
      "Own a managed robotic unit, track operations, and model investor returns with transparent assumptions.",
    url: "/",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "FIRO robotic asset investor dashboard",
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
      <div id="thesis">
        <StickySwap />
      </div>
      <Rewards />
      <RoiCalc />
      <Join />
    </main>
  );
}
