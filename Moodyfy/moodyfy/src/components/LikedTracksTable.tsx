import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { ScrollArea } from "@/components/ui/scroll-area";
  import { Play, Pause } from "lucide-react";
  
  const likedTracks = [
    {
      id: 1,
      title: "Let It Happen",
      album: "Currents",
      dateAdded: "2024-06-10",
      isPlaying: false,
    },
    {
      id: 2,
      title: "Blinding Lights",
      album: "After Hours",
      dateAdded: "2024-06-11",
      isPlaying: false,
    },
    {
      id: 3,
      title: "As It Was",
      album: "Harry's House",
      dateAdded: "2024-06-12",
      isPlaying: true,
    },
    {
      id: 4,
      title: "Someone Like You",
      album: "21",
      dateAdded: "2024-06-14",
      isPlaying: false,
    },
    {
        id: 5,
        title: "Blinding Lights",
        album: "After Hours",
        dateAdded: "2024-06-11",
        isPlaying: false,
      },
      {
        id: 6,
        title: "As It Was",
        album: "Harry's House",
        dateAdded: "2024-06-12",
        isPlaying: true,
      },
      {
        id: 7,
        title: "Someone Like You",
        album: "21",
        dateAdded: "2024-06-14",
        isPlaying: false,
      },
  ];
  
  export function LikedTracksTable() {
    return (
      <ScrollArea className="w-full max-w-4xl rounded-xl h-96 border overflow-auto">
        <Table className="w-full min-w-[600px]">  
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">#</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Album</TableHead>
              <TableHead>Date Added</TableHead>
              <TableHead className="text-right" />
            </TableRow>
          </TableHeader>
  
          <TableBody>
            {likedTracks.map((track, index) => (
              <TableRow className="h-20" key={track.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-normal">{track.title}</TableCell>
                <TableCell className="font-light">{track.album}</TableCell>
                <TableCell className="text-gray-600 font-light">{track.dateAdded}</TableCell>
                <TableCell className="text-right cursor-pointer">
                  {track.isPlaying ? (
                    <Pause className="w-4 h-4 text-green-600" />
                  ) : (
                    <Play className="w-4 h-4 text-stone-700" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    );
  }