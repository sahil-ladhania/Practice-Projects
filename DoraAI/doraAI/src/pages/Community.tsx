
export default function Community() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-center">
        Community Images <span className="text-muted-foreground">(Random Images)</span>
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-60">
        {/* Image placeholders */}
        <div className="w-full h-40 bg-muted rounded-lg" />
        <div className="w-full h-40 bg-muted rounded-lg" />
        <div className="w-full h-40 bg-muted rounded-lg" />
        <div className="w-full h-40 bg-muted rounded-lg" />
        <div className="w-full h-40 bg-muted rounded-lg" />
        <div className="w-full h-40 bg-muted rounded-lg" />
        <div className="w-full h-40 bg-muted rounded-lg" />
        <div className="w-full h-40 bg-muted rounded-lg" />
        <div className="w-full h-40 bg-muted rounded-lg" />
        <div className="w-full h-40 bg-muted rounded-lg" />
      </div>
    </main>
  )
}
