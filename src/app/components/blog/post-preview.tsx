import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { IAuthor } from "@/lib/types";
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
  author: IAuthor;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className=" border rounded-md">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="flex flex-col pl-5 pt-5 mb-5">
        <div className="mb-2 lg:mb-4 md:mb-0 text-xs lg:text-base">
          <DateFormatter dateString={date} />
        </div>
        <div>
          <h3 className={`mb-2 lg:mb-4 text-xl lg:text-3xl leading-tight font-bold text-[#4c5544] ${silk.className}`}>
            <Link
              as={`/posts/${slug}`}
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
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  );
}