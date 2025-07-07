import CurrentSongTab from "@/components/CurrentSongTab";
import MoodHero from "@/components/MoodHero";
import RecomendedTracks from "@/components/RecomendedTracks";

export default function MoodTracks() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 pb-32">
        <MoodHero/>
        {/* Main scrollable content */}
        <RecomendedTracks />
      </div>

      {/* Fixed bottom music player */}
      <CurrentSongTab />
    </>
  );
}