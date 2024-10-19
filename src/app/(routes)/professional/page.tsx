"use client";

import { PageLayout } from "@/app/components/ui/page-layout";

import ProgrammingLanguages from "@/app/components/professional/programming-languages";
import JobHistory from "@/app/components/professional/job-history";
import Projects from "@/app/components/professional/projects";
import { useRef } from "react";

export default function Page() {
  const parentRef = useRef(null);

  return (
    <PageLayout backgroundColor="bg-lime-50">
      <div>
        <JobHistory parentRef={parentRef} />
      </div>
      <div>
        <ProgrammingLanguages/>
      </div>
      <div>
        <Projects/>
      </div>
    </PageLayout>
  );
}
