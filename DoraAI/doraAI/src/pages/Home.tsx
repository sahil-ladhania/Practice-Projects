import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      {/* Prompt Input */}
      <div className="flex items-center gap-2">
        <Input
          placeholder="Enter your prompt..."
          className="flex-1"
        />
        <Button className="cursor-pointer" size="icon" variant="default">
          🔍
        </Button>
      </div>

      {/* Prompt Examples */}
      <div>
        <h2 className="text-muted-foreground text-sm mb-2">Prompt examples</h2>
        <div className="flex flex-wrap gap-2">
          <Button className="cursor-pointer" variant="secondary" size="sm">A space cat</Button>
          <Button className="cursor-pointer" variant="secondary" size="sm">Cyberpunk city</Button>
          <Button className="cursor-pointer" variant="secondary" size="sm">Van Gogh style house</Button>
        </div>
      </div>

      {/* Generated Images Section */}
      <div className="mb-40">
        <h2 className="text-lg font-semibold mb-4">Generated Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((_, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <div className="w-full h-64 bg-muted rounded-lg cursor-pointer" />
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Preview</DialogTitle>
                </DialogHeader>

                {/* Placeholder image */}
                <div className="w-full h-72 bg-muted rounded-lg" />

                <DialogFooter className="mt-4">
                  <Button variant="secondary">Download</Button>
                  <Button variant="outline">Share</Button>
                  <Button variant="default">Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </main>
  )
}