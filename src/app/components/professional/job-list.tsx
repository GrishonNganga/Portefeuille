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
        <Accordion type="single" collapsible className="w-full flex flex-col p-4 divide-y pt-0">
            {
                jobs.map((job, idx) => {
                    return (
                        <JobCard key={idx} idx={idx} job={job} />
                    )
                })
            }
        </Accordion>
    )
}