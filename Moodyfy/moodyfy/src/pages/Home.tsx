import CurrentSongTab from "@/components/CurrentSongTab";
import HeroSection from "@/components/HeroSection";
import MoodSelector from "@/components/MoodSelector";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <MoodSelector/>
      <CurrentSongTab />
    </div>
  )
}
