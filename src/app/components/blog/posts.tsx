import { getAllPosts } from "@/lib/api";
import Container from "./container";
import { HeroPost } from "./hero-post";
import { MoreStories } from "./more-stories";

export default async function Posts() {
  const allPosts = await getAllPosts();

  const heroPost = await allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        {
          heroPost &&
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        }
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}