
import { Project } from "@/lib/types";
import ProjectsList from "./projects-list";
import {  Silkscreen } from "next/font/google";

const silk = Silkscreen({
  subsets: ["latin"],
  weight: "400",
});

const projects: Project[] = [
    {
        name: "CSS Specificity",
        description: "Tool to help you visualize CSS Specificity algorithm. (Built for my Rendercon 2024 talk on CSS Specificity)",
        logo: '/specificity.png',
        url: 'https://specificity.grish.xyz',
        tags: ["React", "TailwindCss"]
    },
    {
        name: "Bytesize",
        description: "Transform Your Podcasts into short form social media clips",
        logo: '/bytesize.png',
        url: 'https://bytesize.cc',
        tags: ["React", "TailwindCss", "NodeJS", "Express", "MongoDB"]
    },
    {
        name: "VS Code Image Optimizer",
        description: "Visual Studio Code extension for compressing and converting image files to different types, straight in VS Code.",
        logo: '/io.jpg',
        url: 'https://marketplace.visualstudio.com/items?itemName=GrishonNganga.image-optimizer',
        tags: ["VS Code", "Extension", "Typescript"]
    },
    {
        name: "Arboretum",
        description: "Helps you find and support tree planting initiatives in Kenya.",
        logo: '/arboretum.png',
        url: 'https://arboretum.cloud',
        tags: ["React", "NextJs", "TailwindCss", "Google Maps API", "MongoDB"]
    },
    {
        name: "Nuru",
        description: "Giving students easy access study material, exams papers and books.",
        logo: '/nuru.svg',
        url: 'https://nuruapp.com',
        tags: ["React", "NextJs", "TailwindCss", "ChatGpt", "MongoDB"]
    },
]

export default function Projects() {
    return (
        <div className="w-full h-full flex flex-col">
      <div className="">
        <div
          className={`bg-% text-3xl lg:text-6xl text-[#748069] font-bold ${silk.className}`}
        >
          Projects<span className="text-[#4c5544]">.</span>
        </div>
        {/* <JobsSectionLinks /> */}
      </div>
      <ProjectsList projects={projects} /> 
    </div>
    )
}