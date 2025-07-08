import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Link } from "react-router-dom"

export default function JobDescription() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">

      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground">
        <Link to="/" className="hover:underline">Home</Link> / <span className="text-foreground">Software Engineer</span>
      </div>

      {/* Title and Company */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Software Engineer</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Tech Innovators Inc. · Remote
        </p>
      </div>

      {/* Job Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        Tech Innovators Inc. is seeking a talented Software Engineer to join our dynamic team. 
        As a Software Engineer, you will be responsible for designing, developing, and maintaining 
        high-quality software solutions. You will collaborate with cross-functional teams to understand 
        project requirements and deliver innovative solutions that meet business needs. 
        This role requires strong technical skills, problem-solving abilities, and a passion for software development.
      </p>

      {/* Responsibilities */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <Checkbox id="r1" />
            <label htmlFor="r1" className="text-sm">Design, develop, and maintain software applications</label>
          </li>
          <li className="flex items-start gap-3">
            <Checkbox id="r2" />
            <label htmlFor="r2" className="text-sm">Collaborate with cross-functional teams to define project requirements</label>
          </li>
          <li className="flex items-start gap-3">
            <Checkbox id="r3" />
            <label htmlFor="r3" className="text-sm">Write clean, efficient, and well-documented code</label>
          </li>
          <li className="flex items-start gap-3">
            <Checkbox id="r4" />
            <label htmlFor="r4" className="text-sm">Participate in code reviews and ensure code quality</label>
          </li>
        </ul>
      </div>

      {/* Requirements */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Requirements</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <Checkbox id="req1" />
            <label htmlFor="req1" className="text-sm">Bachelor's degree in Computer Science or related field</label>
          </li>
          <li className="flex items-start gap-3">
            <Checkbox id="req2" />
            <label htmlFor="req2" className="text-sm">3+ years of experience in software development</label>
          </li>
          <li className="flex items-start gap-3">
            <Checkbox id="req3" />
            <label htmlFor="req3" className="text-sm">Proficiency in programming languages such as Java, Python, or C++</label>
          </li>
          <li className="flex items-start gap-3">
            <Checkbox id="req4" />
            <label htmlFor="req4" className="text-sm">Strong problem-solving and analytical skills</label>
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <Button>Apply Now</Button>
        <Button variant="outline">Save Job</Button>
      </div>
    </section>
  )
}