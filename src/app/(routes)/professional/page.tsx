'use client'
import { motion } from "framer-motion";

import { PageLayout } from "@/app/components/ui/page-layout";

import ProgrammingLanguages from "@/app/components/professional/programming-languages";
import JobHistory from "@/app/components/professional/job-history";
import Projects from "@/app/components/professional/projects";

export default function Page() {
    return (
        <PageLayout backgroundColor="bg-green-50">
            <JobHistory />
            <JobHistory />
            {/* <JobHistory /> */}
            <div className="mb-[25vh]">
                
            </div>
        </PageLayout>
    )
}
