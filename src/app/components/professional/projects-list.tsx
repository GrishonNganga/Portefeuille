import { Project } from "@/lib/types";
import ProjectCard from "./project-card";

type ProjectsListProps = {
    projects: Project[]
}

export default function ProjectsList({ projects }: ProjectsListProps) {
    return (
        <div className="w-full flex flex-col gap-y-3 divide-y md:p-5 pb-40">
            {
                projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))
            }
        </div>
    )
}