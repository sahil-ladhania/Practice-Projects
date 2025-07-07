import MoodCard from "./MoodCard";

const moods = [
  {
    title: "Happy",
    description: "Feel good vibes and upbeat energy.",
  },
  {
    title: "Sad",
    description: "Soft songs to match your mellow mood.",
  },
  {
    title: "Chill",
    description: "Relax and unwind with smooth beats.",
  },
  {
    title: "Energetic",
    description: "Boost your mood with fast tempo tracks.",
  },
  {
    title: "Focus",
    description: "Instrumentals for deep work & flow state.",
  },
  {
    title: "Romantic",
    description: "Soft tunes and heartwarming melodies for love in the air.",
  },
  {
    title: "Party",
    description: "High-energy bangers to keep the night alive.",
  },
  {
    title: "Workout",
    description: "Beast mode ON — perfect for lifting and running.",
  },
  {
    title: "Sleep",
    description: "Soothing music to help you relax and fall asleep.",
  },
  {
    title: "Travel",
    description: "Vibes for long drives, road trips, and wanderlust.",
  },
  {
    title: "Rainy",
    description: "Lo-fi and acoustic tracks for cozy rainy days.",
  },
  {
    title: "Nostalgic",
    description: "Rewind with songs that hit you right in the feels.",
  },
  {
    title: "Dark",
    description: "Moody, deep, and intense sounds for late nights.",
  },
];

export default function MoodSelector() {
  return (
    <section className="w-full max-w-6xl mx-auto mt-10 pb-20 px-4">
      <div className="overflow-x-auto">
        <div className="flex gap-4 w-max">
          {moods.map((mood) => (
            <MoodCard
              key={mood.title}
              title={mood.title}
              description={mood.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}