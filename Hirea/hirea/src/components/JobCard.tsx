import { useState } from 'react';
import { JobApplicationModal } from './JobApplicationModal';
import { Button } from './ui/button';

// JobCard Component
export const JobCard = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border p-4 rounded-lg bg-background shadow-sm gap-4 cursor-pointer">
        {/* Left: Job Info */}
        <div className="flex-1 space-y-1">
          <p className="text-xs text-muted-foreground">Posted {job.postedAgo}</p>
          <h3 className="text-base font-semibold">{job.title}</h3>
          <p className="text-sm text-muted-foreview">
            {job.company} – {job.location}
          </p>
          <Button 
            className="mt-2" 
            size="sm"
            onClick={() => setIsModalOpen(true)}
          >
            Apply
          </Button>
        </div>
        {/* Right: Company Image */}
        <div className="w-full md:w-auto">
          <img
            src={job.logoUrl}
            alt={`${job.company} logo`}
            className="h-20 w-32 object-contain rounded-md"
          />
        </div>
      </div>

      {/* Modal */}
      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        job={job}
      />
    </>
  );
};
