import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Job } from "@/lib/types"
import Image from "next/image"

type JobCardProps = {
    idx: number
    job: Job
}

export default function JobCard({ job, idx }: JobCardProps) {
    return (
        <div className="w-full h-72 shadow-md">
            <div className="flex w-full h-full flex-col justify-between bg-red-100 ">
                <div className="w-full h-full">
                    GRish
                </div>
                <div className="w-full h-full">
                    {idx}
                </div>
            </div>
        </div>
    )
}