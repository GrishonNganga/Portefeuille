import { Job } from "@/lib/types";
import JobCard from "./job-card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type JobListProps = {
    jobs: Job[];
};

export default function JobList({ jobs }: JobListProps) {
    const container = useRef(null)

    const { scrollYProgress } = useScroll({
        target: container
    });

    const scale = useTransform(scrollYProgress, [1, 0], [1, 0])
    useEffect(() => {
        scrollYProgress.on("change", e => console.log("Scroll Y", scrollYProgress))
    }, [])
    return (
        <motion.div
            ref={container}
            className="flex flex-col gap-y-10 bg-red-500"

        >
            {jobs.map((job, idx) => (
                <JobCard key={idx} idx={idx} job={job} />
            ))}
        </motion.div>
    );
}
