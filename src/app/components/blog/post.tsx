import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/components/blog/container";
import Header from "@/app/components/blog/header";
import { PostBody } from "./post-body";
import { PostHeader } from "./post-header";

export default async function Blog({ params }: Params) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || "");

    return (
        <main>
            <Container>
                <Header />
                <article className="mb-32">
                    <PostHeader
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                    />
                    <PostBody content={content} />
                </article>
            </Container>
        </main>
    );
}

type Params = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const title = `${post.title} | Grish's Blog`;

    return {
        title,
        openGraph: {
            title,
            images: [post.ogImage.url],
        },
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}