import { JobFilters } from "@/components/JobFilters"
import { JobCard } from "@/components/JobCard"
import { JobPagination } from "@/components/Pagination"

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 space-y-8">
      <JobFilters />

      {/* Jobs List – Map over fetched jobs */}
      <div className="space-y-4">
        {/* Example Static Job */}
        <JobCard 
          job={{
            postedAgo: "2d ago",
            title: "Frontend Dev",
            company: "Meta",
            location: "Remote",
            logoUrl: "https://logo.clearbit.com/meta.com"
          }}
        />
        <JobCard 
          job={{
            postedAgo: "5d ago",
            title: "Backend Dev",
            company: "Netflix",
            location: "Bangalore",
            logoUrl: "https://store-images.s-microsoft.com/image/apps.56161.9007199266246365.1d5a6a53-3c49-4f80-95d7-78d76b0e05d0.a3e87fea-e03e-4c0a-8f26-9ecef205fa7b"
          }}
        />
        <JobCard 
          job={{
            postedAgo: "3d ago",
            title: "UI/UX Designer",
            company: "Figma",
            location: "San Francisco, CA",
            logoUrl: "https://logo.clearbit.com/figma.com"
          }}
        />
        <JobCard 
          job={{
            postedAgo: "1w ago",
            title: "DevOps Engineer",
            company: "Amazon",
            location: "Hyderabad, India",
            logoUrl: "https://logo.clearbit.com/amazon.com"
          }}
        />
        <JobCard 
          job={{
            postedAgo: "6d ago",
            title: "Data Scientist",
            company: "Airbnb",
            location: "Remote",
            logoUrl: "https://logo.clearbit.com/airbnb.com"
          }}
        />
        <JobCard 
          job={{
            postedAgo: "2d ago",
            title: "Software Engineer - Backend",
            company: "Swiggy",
            location: "Bangalore, India",
            logoUrl: "https://logo.clearbit.com/swiggy.com"
          }}
        />
        <JobCard 
          job={{
            postedAgo: "4d ago",
            title: "React Native Developer",
            company: "Zomato",
            location: "Gurgaon, India",
            logoUrl: "https://logo.clearbit.com/zomato.com"
          }}
        />
        <JobCard 
          job={{
            postedAgo: "1d ago",
            title: "Machine Learning Engineer",
            company: "Google",
            location: "Pune, India",
            logoUrl: "https://logo.clearbit.com/google.com"
          }}
        />
      </div>
      <JobPagination />
    </section>
  )
}
