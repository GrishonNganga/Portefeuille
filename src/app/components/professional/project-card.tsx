import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Project } from "@/lib/types";

type ProjectCardProps = {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-y-2 p-5">
            <div className="w-20">
                <Image src={project.logo} width={100} height={100} alt="Fiverr logo" />
            </div>
            <Link href={project.url} target="_blank">
                <div className="font-bold text-lg text-gray-700 flex items-center hover:underline cursor-pointer">
                    <div>
                        {project.name}
                    </div>
                    <div>
                        <ArrowUpRight />
                    </div>
                </div>
            </Link>
            <div>
                {project.description}
            </div>
            <div className="flex gap-2 flex-wrap text-sm">
                {
                    project.tags.map((tag, idx) => (
                        <Badge key={idx} variant={"secondary"}>{tag}</Badge>
                    ))
                }


            </div>
        </div>
    )
}