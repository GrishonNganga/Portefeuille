'use client'
import { motion } from "framer-motion";

import { PageLayout } from "@/app/components/ui/page-layout";

import ProgrammingLanguages from "@/app/components/professional/programming-languages";
import JobHistory from "@/app/components/professional/job-history";
import Projects from "@/app/components/professional/projects";

export default function Page() {
    return (
        <div className="">
            <PageLayout
                title="Professional"
                description="I'm a dynamic engineer with 5 years of expertise in full-stack development. My greatest
                            contribution to teams is creative and precision problem solving, collaboration and a
                            commitment to staying at the forefront of technology trends."
                image="/grish-professional.jpg"
                gradient={"bg-gradient-to-b from-[#748069] to-[#8E9983] opacity-80"}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1, transition: {
                            delay: 1
                        }
                    }}
                >
                    <motion.div
                        className="flex flex-col lg:flex-row lg:w-full gap-x-5">
                        <ProgrammingLanguages />
                        <div className="lg:w-3/4 mt-20 lg:mt-0">
                            <JobHistory/>
                            <Projects/>
                        </div>
                    </motion.div>
                </motion.div>
            </PageLayout>
        </div >
    )
}
