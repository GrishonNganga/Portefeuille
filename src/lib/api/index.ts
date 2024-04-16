import matter from "gray-matter";
import { join } from "path";
import { IPost } from "../types";
import { readFileSync, readdirSync } from "fs";

const postsDirectory = join(process.cwd(), "/src/posts");
export function getPostSlugs() {
  return readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, slug: realSlug, content } as IPost;
}

export function getAllPosts(): IPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}