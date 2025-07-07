import { Play } from "lucide-react";
import { moodGradients } from "../lib/MoodGradients.ts";
import { moodIcons } from "../lib/MoodIcons.tsx";

interface MoodCardProps {
  title: string;
  description: string;
}

export default function MoodCard({ title, description }: MoodCardProps) {
  const gradient = moodGradients[title] || "from-gray-400 to-gray-700";
  const icon = moodIcons[title];

  return (
    <div
      className={`relative w-[180px] h-[240px] rounded-xl overflow-hidden cursor-pointer flex flex-col justify-between text-white p-4 bg-gradient-to-br ${gradient}`}
    >
      <div className="flex justify-between items-center">
        <Play className="w-5 h-5 bg-black/40 rounded-full p-1" />
        {icon}
      </div>

      <div className="z-10 mt-auto">
        <h3 className="text-lg font-semibold drop-shadow-md">{title}</h3>
        <p className="text-xs drop-shadow-md line-clamp-2">{description}</p>
      </div>
    </div>
  );
}