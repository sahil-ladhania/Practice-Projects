import { Play } from "lucide-react";

export default function CurrentSongTab() {
  return (
    <div className="fixed bottom-14 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl bg-stone-200 py-2 px-4 rounded-xl h-20 shadow-lg cursor-pointer backdrop-blur-5xl">
      <div className="flex items-center justify-between h-full">
        {/* Left section */}
        <div className="flex items-center">
          <div className="p-1 rounded-lg bg-stone-300 cursor-pointer mr-4">
            <img
              className="h-10 w-10 border rounded-lg object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWt5Fkoj3zrdytrkeH4_HEx-qAUuKgetg5g&s"
              alt=""
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-sm font-medium">Current Song Title</h1>
            <h2 className="text-sm font-light text-muted-foreground">Current Artist</h2>
          </div>
        </div>

        {/* Right Play/Pause */}
        <div className="p-2 rounded-full bg-blue-400 cursor-pointer">
          <Play className="w-5 h-5 fill-white text-white" />
        </div>
      </div>
    </div>
  );
}