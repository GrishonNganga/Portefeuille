import { PageLayout } from "@/app/components/ui/page-layout";
import Posts from "@/app/components/blog/posts";
import { Silkscreen } from "next/font/google";

import React from "react";

const silk = Silkscreen({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
    return (
        <div className="">
            <PageLayout
                backgroundColor="bg-fuchsia-50"

            >
                <div className="p-4 md:mt-20">
            <div
              className={`text-3xl lg:text-6xl text-[#748069] font-bold ${silk.className}`}
            >
              Blog<span className="text-[#4c5544]">.</span>
            </div>
            {/* <JobsSectionLinks /> */}
          </div>
                <Posts />
            </PageLayout>
        </div>
    )
}
