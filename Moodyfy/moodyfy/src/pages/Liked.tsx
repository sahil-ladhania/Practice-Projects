import CurrentSongTab from "@/components/CurrentSongTab";
import { LikedTracksTable } from "@/components/LikedTracksTable";

export default function Liked() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-medium">Liked Songs</h1>
      <h2 className="text-sm font-light text-gray-500 mt-2">Playlist. 100 songs</h2>
      <div className="mt-10">
        <LikedTracksTable/>
      </div>
      <CurrentSongTab />
    </div>
  )
}
