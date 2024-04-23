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
        <div className="flex flex-col lg:flex-row lg:gap-x-2 w-full py-3">
            <div className="h-full">
                <div className="w-1/4 lg:w-32 flex h-full">
                    <Image src={job.image} width={200} height={200} alt={job.companyName} className="w-full h-full object-scale-down aspect-square" />
                </div>
            </div>
            <div className="w-full flex lg:hidden grow justify-between">
                <AccordionItem value={`item-${idx}`} className="w-full flex flex-col gap-y-1 tracking-wider border-0">
                    <AccordionTrigger className="flex w-full justify-between items-start hover:no-underline ">
                        <div className="w-full flex flex-col items-start">
                            <div className="font-bold text-lg text-gray-700">
                                {job.companyName}
                            </div>
                            <div className="font-medium text-gray-600">
                                {job.role}
                            </div>
                            <div className="flex gap-x-5">
                                <div className="flex gap-x-1 items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor" className="w-5 h-5 text-gray-500">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {job.location}
                                    </div>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                        className="w-6 h-6 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </div>
                                <div className="flex gap-x-1 items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor" className="w-5 h-5 text-gray-500">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                        </svg>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {job.headCount}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <div className="font-medium text-gray-600">
                                    {job.duration}
                                </div>
                                <div className="flex justify-end text-sm text-gray-500">
                                    {job.period}
                                </div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="border-t mt-2 pt-2">
                        {job.moreInfo}
                    </AccordionContent>
                </AccordionItem>
            </div>
            <div className="w-full hidden lg:flex grow">
                <AccordionItem value={`item-${idx}`} className="w-full flex justify-between gap-1 tracking-wider border-0">
                    <div className="w-full">
                        <div className="font-bold text-lg text-gray-700">
                            {job.companyName}
                        </div>
                        <div className="font-medium text-gray-600">
                            {job.role}
                        </div>
                        <div className="text-[#748069]">
                            {job.website}
                        </div>
                        <div className="flex gap-x-5">
                            <div className="flex gap-x-1 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="currentColor" className="w-5 h-5 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </div>
                                <div className="text-sm text-gray-500">
                                    {job.location}
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                    className="w-6 h-6 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </div>
                            <div className="flex gap-x-1 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="currentColor" className="w-5 h-5 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                </div>
                                <div className="text-sm text-gray-500">
                                    {job.headCount}
                                </div>
                            </div>
                        </div>
                        <AccordionContent className="mt-2 pt-2">
                            <div dangerouslySetInnerHTML={{ __html: job!.moreInfo || "" }}></div>
                        </AccordionContent>
                    </div>
                    <AccordionTrigger className="shrink-0 h-full flex flex-none shrink-0 items-start gap-x-2 hover:no-underline -ml-40">
                        <div className="w-full flex flex-col gap-y-1">
                            <div className="w-full flex font-medium text-gray-600">
                                {job.duration}
                            </div>
                            <div className="flex justify-end text-sm text-gray-500">
                                {job.period}
                            </div>
                        </div>
                    </AccordionTrigger>
                </AccordionItem>
            </div>
        </div>
    )
}