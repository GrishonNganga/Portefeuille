
import { Job } from "@/lib/types"

import JobList from "./job-list"
import JobsSectionLinks from "./jobs-section-links"

import { DM_Mono, Silkscreen } from "next/font/google";

const silk = Silkscreen({
    subsets: ["latin"],
    weight: "400"
})

const dmono = DM_Mono({
    subsets: ["latin"],
    weight: "300"
})
const jobs: Job[] = [
    {
        companyName: "Cigna Healthcare",
        role: "Senior Frontend Engineer",
        website: "cigna.com",
        location: "Bloomfield, CT, USA",
        headCount: "10K+",
        duration: "Aug 2024 - Present",
        period: "2 mon",
        image: "/cigna.png",
        moreInfo: `
        Global health benefits provider. (React, ReactNative Typescript) <br><br>
        
        <b>Responsibilities:</b> <br>
        - Part of DigiEye squad responsible for delivering health benefits app for the KSA market. <br>
        `
    },
    {
        companyName: "Kyakula",
        role: "Frontend Developer",
        website: "mautamu.com",
        location: "Nairobi, Kenya",
        headCount: "1-10",
        duration: "Sept 2023 - Present",
        period: "7 mon",
        image: "/kyakula.jpeg",
        moreInfo: `
        Food Delivery app based in Kenya. (React, ReactNative Typescript, NodeJS, MongoDB) <br><br>
        
        <b>Responsibilities:</b> <br>
        - Worked on various features like restaurant browsing, menu selection and order tracking on the flagship Food delivery app using ReactNative in a team of 8. <br>
        - Hold a key role in building and maintaining card and Mobile money payments integration through Flutterwave.<br>
        - Introduced and written over 250 tests on Kyakula mobile app using Jest.<br>
        `
    },
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
        - Led the migration of legacy low code app to modern MERN stack resulting in easier scaling from Texas to 5 other states. <br>
        - Grew engineering team from solo dev to 5 engineers from different parts of the world.<br>
        - Architected the backend into 3 microservices (monolith, jobs and sync) that scaled horizontally as we grew.<br>
        - Streamlined dev and deployment processes with CI/CD pipelines, Docker and e2e testing.<br>
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
        - Interviewed over 45 and hired more than 10 Frontend Engineers for startups within the lab.<br>
        - Designed coding standards and implemented our design system that resulted in general code review turn around time from 2 days to 1 day.<br>
        - Implemented Github Actions CI/CD pipelines that resulted in more deployment cycles from every sprint to every week.<br>
        - Managed 3 junior engineers ensuring their quality task completion, skills development and career progression.<br>
        `
    },
    {
        companyName: "Legal Space",
        role: "Frontend Engineer",
        website: "legalspace.app",
        location: "Lusaka, Zambia",
        headCount: "10-20",
        duration: "Oct 2022 - March 2023",
        period: "6 mon",
        image: "/legalspace.svg",
        moreInfo: `
        Web based platform connecting clients to Legal Practitioners <br><br>
        <b>Responsibilities:</b> <br>
        - Built and maintained complex UI components ensuring browser compatibility and Accessibility requirements were met.<br>
        - Integrated RESTful Apis with backend team and ensuring optimized performance. Less than 1 sec load time.<br>
        - Implemented state management using Redux, improving application scalability and maintainability.<br>
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
        - Involved in the development and growth of the initial MVP using ReactJS. Up to  (80,000 users).<br>
        - Improved web app performance by 15% by code splitting, caching and assets optimization. <br>
        - Reduced app downtime by 50% during peak traffic spikes  from prior caching endeavour and implementing a CDN.<br>
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

export default function JobHistory() {
    return (
        <div className="w-full flex flex-col mb-20 sticky top-40">
            {/* Sticky Work History Header */}
            <div className="bg-green-50 p-4">
                <div className={`text-2xl lg:text-6xl text-[#748069] font-bold ${silk.className}`}>
                    Work History<span className="text-[#4c5544]">.</span>
                </div>
                <JobsSectionLinks />
            </div>

            {/* Scrollable Job List */}
            <div className="overflow-y-auto h-[calc(75vh)] px-4 gap-y-20 scrollbar-hide">
                <JobList jobs={jobs} />
            </div>
        </div>
    )
}