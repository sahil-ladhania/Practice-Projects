import { Heart } from "lucide-react";

export default function TrackCard() {
  return (
    <div className="w-full py-2 px-4 rounded-xl h-20 cursor-pointer hover:bg-stone-100 transition">
      <div className="flex items-center justify-between h-full">
        {/* Left section */}
        <div className="flex items-center">
          <div className="p-1 rounded-lg mr-4">
            <img
              className="h-10 w-10 rounded-lg object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWt5Fkoj3zrdytrkeH4_HEx-qAUuKgetg5g&s"
              alt=""
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-sm font-normal">Current Song Title</h1>
            <h2 className="text-sm font-light text-muted-foreground">Current Artist</h2>
          </div>
        </div>

        {/* Like Button */}
        <Heart className="size-5 text-black" />
      </div>
    </div>
  );
}