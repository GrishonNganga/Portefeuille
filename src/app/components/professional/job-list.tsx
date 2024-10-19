import { Job } from "@/lib/types";
import JobCard from "./job-card";

type JobListProps = {
  jobs: Job[];
  parentRef: React.MutableRefObject<HTMLDivElement | null>;
};

export default function JobList({ jobs, parentRef }: JobListProps) {
  console.log("parent ",parentRef);

  return (
    <div className="flex flex-col gap-y-20 md:p-2 md:mt-40">
      {jobs.map((job, idx) => (
        <JobCard
          key={idx}
          idx={idx}
          job={job}
        />
      ))}
    </div>
  );
}
