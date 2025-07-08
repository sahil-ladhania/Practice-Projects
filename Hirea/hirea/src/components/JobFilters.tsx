import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const JobFilters = () => {
  return (
    <div className="space-y-4 w-full md:max-w-3xl">
      {/* Location Input */}
      <Input placeholder="Location" className="w-full bg-muted/20" />
      
      {/* Job Type Filters */}
      <div className="flex flex-wrap gap-2">
        <Button variant="outline">Full-time</Button>
        <Button variant="outline">Part-time</Button>
        <Button variant="outline">Contract</Button>
      </div>

      {/* Date Posted Filters */}
      <div className="flex flex-wrap gap-2">
        <Button variant="outline">Last 24h</Button>
        <Button variant="outline">Last 7d</Button>
        <Button variant="outline">Last 30d</Button>
      </div>
    </div>
  )
}