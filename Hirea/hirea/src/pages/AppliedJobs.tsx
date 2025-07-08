import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

export default function AppliedJobs() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold tracking-tight">Saved jobs</h1>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Job title</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Date posted</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {savedJobs.map((job, index) => (
              <TableRow key={index}>
                <TableCell>{job.title}</TableCell>
                <TableCell>
                  <span className="text-blue-600 hover:underline cursor-pointer">{job.company}</span>
                </TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.postedAgo}</TableCell>
                <TableCell className="flex items-center justify-center gap-4">
                  <Button variant="secondary" size="sm" className="pointer-events-none">Active</Button>
                  <button className="text-sm text-blue-600 hover:underline">Remove</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

// 🔹 Static Data (temporarily)
const savedJobs = [
  {
    title: "Software Engineer",
    company: "Tech Innovations Inc.",
    location: "Remote",
    postedAgo: "2d ago",
  },
  {
    title: "Product Manager",
    company: "Global Solutions Ltd.",
    location: "New York, NY",
    postedAgo: "5d ago",
  },
  {
    title: "Data Analyst",
    company: "Data Driven Corp.",
    location: "San Francisco, CA",
    postedAgo: "1w ago",
  },
  {
    title: "UX Designer",
    company: "Creative Minds Agency",
    location: "Los Angeles, CA",
    postedAgo: "2w ago",
  },
  {
    title: "Marketing Specialist",
    company: "Market Leaders Group",
    location: "Chicago, IL",
    postedAgo: "3w ago",
  },
]