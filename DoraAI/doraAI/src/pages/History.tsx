
export default function History() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-6">
      {/* Page Heading */}
      <h1 className="text-2xl font-semibold text-center">
        Generated Images History
      </h1>

      {/* History Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Image placeholders */}
        <div className="w-full h-64 bg-muted rounded-lg" />
        <div className="w-full h-64 bg-muted rounded-lg" />
        <div className="w-full h-64 bg-muted rounded-lg" />
        <div className="w-full h-64 bg-muted rounded-lg" />
      </div>
    </main>
  )
}
