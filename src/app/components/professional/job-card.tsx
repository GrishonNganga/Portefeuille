// JobCard.jsx
import { motion, progress, useScroll } from "framer-motion";
import { Job } from "@/lib/types";
import { useRef } from "react";
import Image from "next/image";
import { DotIcon } from "lucide-react";

type JobCardProps = {
  idx: number;
  job: Job;
};

export default function JobCard({ job, idx }: JobCardProps) {
  const jobCardRef = useRef(null);
  return (
    <motion.div
      ref={jobCardRef}
      className={`w-full  md:h-[60dvh] flex justify-center ${
        idx === 0 ? "items-center" : "items-center"
      } md:sticky md:top-60 z-0 bg-white rounded-md`}
    >
      <div
        className={`w-full h-full bg-opacity-10 border rounded-md shadow-md relative rounded-md p-4 md:p-8 flex flex-col gap-y-8`}
        style={{
          backgroundColor: job.backgroundColor,
          boxShadow: `0px 0px 5px ${job.backgroundColor}`,
        }}
      >
        <div className="flex flex-col md:flex-row gap-x-4 md:container">
          <div className="object-contain object-center">
            <Image
              src={job.image}
              width={200}
              height={200}
              className="w-14 md:w-32 aspect-square object-contain border"
              alt="Grish logo"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-2xl md:text-3xl font-bold text-[#4c5544]">
              {job.companyName}
            </div>
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:text-lg font-semibold">{job.role}</div>
              <div className="hidden md:block">
                <DotIcon />
              </div>
              <div className="text-sm font-medium text-gray-500">
                ({job?.languages})
              </div>
            </div>
            <div className="flex text-sm items-center text-gray-700">
              <div>{job.location}</div>
              <div>
                <DotIcon />
              </div>
              <div>{job.headCount} employees</div>
            </div>
            <div className="flex text-sm items-center text-gray-700">
              <div>{job.duration}</div>
              <div>
                <DotIcon />
              </div>
              <div>{job.period}</div>
            </div>
          </div>
        </div>
        <div
          className="md:w-3/4"
          dangerouslySetInnerHTML={{ __html: job.moreInfo }}
        />
      </div>
    </motion.div>
  );
}
