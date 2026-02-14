import Nav from "@/components/Nav";
import LevelUpBar from "@/components/LevelUpBar";
import VideoHero from "@/components/sections/VideoHero";
import Lore from "@/components/sections/Lore";
import Levels from "@/components/sections/Levels";
import StickySwap from "@/components/sections/StickySwap";
import Rewards from "@/components/sections/Rewards";
import RoiCalc from "@/components/sections/RoiCalc";
import Join from "@/components/sections/Join";

export default function Page() {
  return (
    <main id="top">
      <Nav />
      <LevelUpBar />
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
