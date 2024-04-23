import { Project } from "@/lib/types";
import ProjectCard from "./project-card";

type ProjectsListProps = {
    projects: Project[]
}

export default function ProjectsList({ projects }: ProjectsListProps) {
    return (
        <div className="w-full flex flex-col gap-y-3 divide-y p-5">
            {
                projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))
            }
        </div>
    )
}