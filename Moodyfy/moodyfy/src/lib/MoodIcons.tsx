import {
    Smile,
    Frown,
    Coffee,
    Zap,
    Brain,
    Heart,
    PartyPopper,
    Dumbbell,
    Moon,
    Globe,
    CloudRain,
    History,
    MoonStar
  } from "lucide-react";
  
export const moodIcons: Record<string, React.ReactNode> = {
    Happy: <Smile className="w-6 h-6 text-white" />,
    Sad: <Frown className="w-6 h-6 text-white" />,
    Chill: <Coffee className="w-6 h-6 text-white" />,
    Energetic: <Zap className="w-6 h-6 text-white" />,
    Focus: <Brain className="w-6 h-6 text-white" />,
    Romantic: <Heart className="w-6 h-6 text-white" />,
    Party: <PartyPopper className="w-6 h-6 text-white" />,
    Workout: <Dumbbell className="w-6 h-6 text-white" />,
    Sleep: <Moon className="w-6 h-6 text-white" />,
    Travel: <Globe className="w-6 h-6 text-white" />,
    Rainy: <CloudRain className="w-6 h-6 text-white" />,
    Nostalgic: <History className="w-6 h-6 text-white" />,
    Dark: <MoonStar className="w-6 h-6 text-white" />,
};