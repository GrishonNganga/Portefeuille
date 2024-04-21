import Link from "next/link";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import { Author } from "@/lib/types";
import { DM_Mono, Silkscreen } from "next/font/google";

const silk = Silkscreen({
    subsets: ["latin"],
    weight: "400"
})

const dmono = DM_Mono({
    subsets: ["latin"],
    weight: "300"
})

type Props = {
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    author: Author;
    slug: string;
};

export function HeroPost({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
}: Props) {
    return (
        <section className="flex flex-col lg:flex-row items-stretch gap-x-10 border rounded-md mb-10">
            <div className="lg:w-3/4 self-stretch">
                <CoverImage title={title} src={coverImage} slug={slug} isHero />
            </div>
            <div className="flex flex-col pl-5 lg:px-0 pt-5 lg:pt-10 pb-20">
                <div className="mb-2 lg:mb-4 md:mb-0 text-xs">
                    <DateFormatter dateString={date} />
                </div>
                <div>
                    <h3 className={`mb-2 lg:mb-4 text-xl lg:text-3xl leading-tight font-bold text-[#4c5544] ${silk.className}`}>
                        <Link
                            as={`/blog/${slug}`}
                            href="/posts/[slug]"
                            className=""
                        >
                            {title}
                        </Link>
                    </h3>
                </div>
                <div className="pr-5">
                    <p className={`text-lg leading-relaxed mb-4 ${dmono.className}`}>{excerpt}</p>
                </div>
            </div>
        </section>
    );
}