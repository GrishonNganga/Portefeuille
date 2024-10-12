import { motion, useScroll, useTransform } from "framer-motion";
import { Job } from "@/lib/types";
import { useRef } from "react";

type JobCardProps = {
    idx: number;
    job: Job;
};

export default function JobCard({ job, idx }: JobCardProps) {
    const container = useRef(null)

    const { scrollYProgress } = useScroll({
        target: container
    });
    // Optional: opacity effect to fade out cards gradually
    const opacity = useTransform(scrollYProgress, [idx * 100, (idx + 0.5) * 100], [1, 0], {
        clamp: false,
    });

    return (
        <motion.div
            className={`w-full h-72 p-4 rounded-md shadow-md sticky z-0 ${job.backgroundColor}`} style={{ top: `calc(10rem + ${idx * 30}px)`, opacity}}
            ref={container}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="flex w-full h-full flex-col justify-between">
                <div className="w-full h-full">
                    {job.companyName} - {job.role}
                </div>
            </div>
        </motion.div>
    );
}
