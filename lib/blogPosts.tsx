import fs from "fs/promises";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

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

export const getBlogPostBySlug = async (slug: string) => {
  const fileDir = path.join(POSTS, slug);
  const filePath = path.join(fileDir, "index.mdx");

  const blogFile = await fs.readFile(filePath, "utf8");

  const source = await serialize(blogFile, { parseFrontmatter: true });

  const data = source.frontmatter;

  if (data?.title === undefined) {
    throw new Error(`No title found in ${filePath}`);
  }

  if (data?.date === undefined) {
    throw new Error(`No date found in ${filePath}`);
  }

  if (data?.image === undefined) {
    throw new Error(`No image found in ${filePath}`);
  }

  const directory = path.join("./posts", slug);

  // .replace(process.cwd(), "");

  return { slug, source, data, directory };
};
