import fs from "fs/promises";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const POSTS = path.join(process.cwd(), "posts");

export const getAllBlogPosts = async () => {
  const files = await fs.readdir(POSTS);

  const paths = files.map((slug) => ({
    params: {
      slug,
    },
  }));

  return paths;
};

export type Matter = GrayMatterFile<string> & { isEmpty: boolean };

export const getBlogPostBySlug = async (slug: string) => {
  const filePath = path.join(POSTS, slug, "index.md");

  const file = await fs.readFile(filePath, "utf8");

  const matterResult = matter(file) as Matter;

  if (matterResult?.data?.title === undefined) {
    throw new Error(`No title found in ${filePath}`);
  }

  if (matterResult?.data?.date === undefined) {
    throw new Error(`No date found in ${filePath}`);
  }

  if (matterResult?.data?.image === undefined) {
    throw new Error(`No image found in ${filePath}`);
  }

  return matterResult;
};

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
