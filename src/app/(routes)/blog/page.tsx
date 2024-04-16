import { PageLayout } from "@/app/components/ui/page-layout";
import Posts from "@/app/components/blog/posts";

export default function Page() {
    return (
        <div className="">
            <PageLayout
                title="Blog"
                description="Sometimes I write about whatever I'm into."
                image="/grish-battlestation.webp"
                gradient="bg-gradient-to-b from-[#A25D76] to-[#B57D92] opacity-80"

            >
                <Posts />
            </PageLayout>
        </div>
    )
}
