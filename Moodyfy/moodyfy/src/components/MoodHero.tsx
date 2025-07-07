import { Button } from "./ui/button";

export default function MoodHero() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4">
      <div
        className="rounded-2xl p-16 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #C05609, #2C7A7B)",
        }}
      >
        <h2 className="text-4xl font-bold mb-4">Mood : Focused</h2>
        <p className="text-sm font-light mb-6">
          Select your current mood and we’ll curate a playlist just for you.
        </p>
        <Button variant="outline" className="rounded-full text-black cursor-pointer">
          Play
        </Button>
      </div>
    </section>
  )
}
