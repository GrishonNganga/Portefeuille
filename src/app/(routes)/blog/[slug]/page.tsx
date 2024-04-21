import Post from "@/app/components/blog/post";

type BlogPostProps = {
    params: {
        slug: string
    }
}

export default function BlogPost({ params }: BlogPostProps) {
    return (
        <Post params={params} />
    )
}