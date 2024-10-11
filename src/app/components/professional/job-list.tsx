import {
    Accordion,
} from "@/components/ui/accordion"
import { Job } from "@/lib/types"
import JobCard from "./job-card"

type JobListProps = {
    jobs: Job[]
}

export default function JobList({ jobs }: JobListProps) {
    return (
        <div className="flex flex-col gap-y-20 pl-5 pt-5 mb-60 bg-green-500">
            {jobs.map((job, idx) => (
                <JobCard key={idx} idx={idx} job={job} />
            ))}
        </div>
    )
}