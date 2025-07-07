import TrackCard from "./TrackCard";
import { ScrollArea } from "./ui/scroll-area";

export default function RecomendedTracks() {
  return (
    <div className="space-y-4">
      <h1 className="font-semibold text-xl mt-4 ml-4">Recommended Tracks</h1>

      <ScrollArea className="h-72 w-full">
        <div className="space-y-3">
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
        </div>
      </ScrollArea>
    </div>
  );
}