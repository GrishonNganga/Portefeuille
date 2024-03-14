'use client'
import { motion } from "framer-motion";

import Layout from "@/app/components/ui/layout";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
const jobs = [
    {
        companyName: "Chromelot Media LLC",
        role: "Full Stack Software Engineer",
        website: "chromelot.com",
        location: "McKinney, Texas, USA",
        headCount: "10-20",
        duration: "Sept 2022 - Dec 2023",
        period: "1 yr 6 mon",
        image: "/chromelot.png",
        moreInfo: `
        Part of the team responsible for rebuilding the entire company's Infrastructure from the ground up. (React, Typescript, NodeJS, PostgreSQL) <br><br>
        
        <b>Responsibilities:</b> <br>
        - Developed user-facing features using <b>ReactJS</b>. <br>
        - Architected server-side applications using <b>NodeJS</b> & <b>Express</b>. <br>
        - Built APIs using RESTful web services and <b>Microservices architecture</b>. <br>
        - Used <b>Docker</b> to containerize our microservices. <br>
        - Implement CI/CD pipelines for entire architecture using <b>Github Actions</b>
        - Used Github actions and to build and deploy applications in a scalable and reliable manner. <br>
        - Wrote efficient, well-documented, and scalable code that meets coding standards and best practices. <br>
        `
    },
    {
        companyName: "Adanian Labs",
        role: "Senior Frontend Engineer",
        website: "adanianlabs.io",
        location: "Nairobi, Kenya",
        headCount: "50-100",
        duration: "Jan 2022 - March 2023",
        period: "1 yr 3 mon",
        image: "/adanian.png",
        moreInfo: `
        Venture building studio that sets out to build unicorns from Africa. <br><br>
        <b>Responsibilities:</b> <br>
        - Responsible for overseeing the recruitment process of Frontend Engineers at the company. <br>
        - Involved in architectural design phase of different company projects. <br>
        - Implemented automated testing and deployment processes, including <b>Cypress</b>, and <b>Github Actions</b>. <br>
        - Mentored junior developers, fostering a culture of learning and innovation within different squads. <br>
        `
    },
    {
        companyName: "Bloow Global",
        role: "Frontend Engineer",
        website: "bloowafrica.com",
        location: "Nairobi, Kenya",
        headCount: "1-10",
        duration: "Sept 2021 - Jan 2022",
        period: "5 mon",
        image: "/bloow.svg",
        moreInfo: `
        Music Streaming platform for Africa. I helped ship and grow the initial MVP to over <b>80,000 users</b>. <br> <br>

        <b>Responsibilities:</b> <br>
        - Involved in the development of the initial MVP using ReactJS. <br>
        - Collaborated with backend team to integrate REST APIs. <br>
        - Worked effectively with design teams to ensure software solutions elevated client-side experience.
        `
    },
    {
        companyName: "Fiverr",
        role: "Freelance Full Stack Engineer",
        website: "fiverr.com",
        location: "Nairobi, Kenya",
        headCount: "~",
        duration: "Jan 2021 - Dec 2022",
        period: "2 yrs",
        image: "/fiverr.png",
        moreInfo: `
        Worked with different companies in different industries, including, Logistics, FinTech and PropTech as Full Stack Engineer.
        `
    },
    {
        companyName: "Rently LLC",
        role: "Co Founder",
        website: "rently.ke",
        location: "Nairobi, Kenya",
        headCount: "1-10",
        duration: "Jan 2020 - March 2021",
        period: "1 yr 3 mon",
        image: "/rently.jpeg",
        moreInfo: `
        Rental property management Software. <br> <br>

        <b>Responsibilities:</b> <br>
        - Built the entire web based application. <br>
        - Did outbound sales (Signed up 7 paying clients) <br>
        - Conducted customer research to determine new features to build <br>
        `
    },

]

export default function Page() {
    return (
        <div className="">
            <Layout
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
                    className="flex flex-col lg:flex-row lg:w-full gap-x-5">
                    <div className="lg:w-1/4 flex flex-col lg:sticky top-0 border rounded-xl divide-y h-full">
                        <div className="text-[#748069] font-bold p-4">
                            Programming Languages / Frameworks
                        </div>
                        <div className="flex p-4 gap-x-1 flex-wrap gap-y-3">
                            <div className="w-12 h-12">
                                <Image width={50} height={50} src="/html.png" className="w-full object-scale-down" alt="HTML" />
                            </div>
                            <div className="w-12 h-12">
                                <Image width={50} height={50} src="/css.png" className="w-full h-full object-scale-down" alt="CSS" />
                            </div>
                            <div className="w-12 h-12">
                                <Image width={50} height={50} src="/js.png" className="w-full h-full object-scale-down"
                                    alt="Javascript" />
                            </div>
                            <div className="w-12 h-12">
                                <Image width={50} height={50} src="/react.png" className="w-full h-full object-scale-down"
                                    alt="React" />
                            </div>
                            <div className="w-12 h-12">
                                <Image width={50} height={50} src="/nodejs.png" className="w-full h-full object-scale-down"
                                    alt="NodeJS" />
                            </div>
                            <div className="w-12 h-12">
                                <Image width={50} height={50} src="/next-js.svg" className="w-full h-full object-scale-down"
                                    alt="Next JS" />
                            </div>
                            <div className="w-12 h-12">
                                <Image width={50} height={50} src="/python.png" className="w-full h-full object-scale-down"
                                    alt="Python" />
                            </div>
                            <div className="w-12 h-12">
                                <Image width={50} height={50} src="/django.png" className="w-full h-full object-scale-down"
                                    alt="Django" />
                            </div>
                            <div className="w-12 h-12">
                                <Image width={50} height={50} src="/flask.svg" className="w-full h-full object-scale-down"
                                    alt="Flask" />
                            </div>
                            <div className="w-12 h-12">
                                <Image width={50} height={50} src="/mongodb.png" className="w-full h-full object-scale-down"
                                    alt="Mongo DB" />
                            </div>
                            <div className="w-12 h-12">
                                <Image width={50} height={50} src="/postgresql.png" className="w-full h-full object-scale-down"
                                    alt="PostgreSQL" />
                            </div>
                            <div className="w-12 h-12">
                                <Image width={50} height={50} src="/jest.png" className="w-full h-full object-scale-down" alt="Jest" />
                            </div>
                            <div className="w-12 h-12">
                                <Image width={50} height={50} src="/jenkins.jpeg" className="w-full h-full object-scale-down"
                                    alt="Jest" />
                            </div>
                            <div className="w-12 h-12">
                                <Image width={50} height={50} src="/docker.png" className="w-full h-full object-scale-down"
                                    alt="Docker" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-3/4 mt-20 lg:mt-0">
                        <div className="w-full h-min border rounded-xl flex flex-col mb-20">
                            <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center border-b p-4">
                                <div className="text-lg lg:text-base text-[#748069] font-bold">
                                    Jobs History
                                </div>
                                <div className="flex gap-x-3 divide-x-2 items-center">
                                    <div className="w-16 h-full lg:pl-3">
                                        <a href="https://www.github.com/GrishonNganga" target="_blank">
                                            <Image width={50} height={50} src="/github.png" alt="Github logo" />
                                        </a>
                                    </div>
                                    <a href="https://drive.google.com/file/d/1nvtKMB8MnRrs8GIClcQ7xWUByS3cfPpN/view?usp=sharing"
                                        target="_blank">
                                        <div className="flex items-center pl-3">
                                            <div className="text-sm text-[#748069] font-bold">
                                                Resume
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                                    className="w-6 h-6 text-[#748069]">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="w-20 h-full pl-3">
                                        <a href="https://www.linkedin.com/in/grishon-ng-ang-a-8426b5149/"
                                            target="_blank">
                                            <Image width={50} height={50} src="/linkedin.png" alt="LinkedIn logo" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Accordion type="single" collapsible className="w-full flex flex-col p-4 divide-y pt-0">
                                {
                                    jobs.map((job, idx) => {
                                        return (
                                            <div key={idx} className="flex flex-col lg:flex-row lg:gap-x-2 w-full py-3">
                                                <div className="h-full">
                                                    <div className="w-1/4 lg:w-40 flex h-full">
                                                        <Image src={job.image} width={200} height={200} alt={job.companyName} className="w-full h-full object-contain aspect-square" />
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
                                    })
                                }
                            </Accordion>
                        </div>
                        <div className="w-full">

                        </div>
                    </div>
                </motion.div>
            </Layout>
        </div >
    )
}
