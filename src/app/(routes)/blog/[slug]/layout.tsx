import { getPostBySlug } from "@/lib/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";


type LayoutParams = {
    params: {
        slug: string;
    };
    children: React.ReactNode
};

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
    const post = getPostBySlug(params.slug);
    if (!post) {
        return notFound();
    }

    const title = `${post.title} | Grish's Blog`;

    return {
        title,
        description: post.excerpt,
        openGraph: {
            title,
            images: [post.ogImage.url],
        },
    };
}

export default function Layout({ children }: LayoutParams) {
    return (
        <>
            {children}
        </>
    )
}