import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  src: string;
  slug?: string;
  isHero?: boolean
};

const CoverImage = ({ title, src, slug, isHero }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm object-cover w-full h-full", {
        "hover:shadow-lg transition-shadow duration-200 rounded-t-md": slug,

      }, isHero ? "lg:rounded-tr-none lg:rounded-l-md" : "")}
      width={500}
      height={500}
    />
  );
  return (
    <div className="sm:mx-0 h-full">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;