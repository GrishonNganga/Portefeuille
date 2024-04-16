'use server'

import matter from "gray-matter";
import { join } from "path";
import { IPost } from "../types";
import { readFileSync, readdirSync } from "fs";

const postsDirectory = join(process.cwd(), "/src/posts");
console.log("P", postsDirectory)
export async function getPostSlugs() {
  return readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string): Promise<IPost> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = await readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, slug: realSlug, content } as IPost;
}

export async function getAllPosts(): Promise<IPost[]> {
  const slugs = await getPostSlugs();
  const postPromises = slugs.map((slug) => getPostBySlug(slug));
  const posts = await Promise.all(postPromises);
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}