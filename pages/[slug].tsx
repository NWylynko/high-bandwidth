import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blogPosts";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import path from "path";
import fs from "fs/promises";

interface BlogPageProps {
  blog: {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    data: {
      title: string;
      date: string;
      image: string;
    };
    directory: string;
  };
  // coverImage: any;
}

const components = {
  Image,
};

const BlogPage = ({ blog }: BlogPageProps) => {
  console.log(blog);

  // console.log({ coverImageDir });

  return (
    <>
      {/* <Image src={} width={300} height={200} /> */}
      {/* {coverImage && <Image src={coverImage} />} */}
      <h1>{blog.data.title}</h1>
      <MDXRemote {...blog.source} components={components} />
    </>
  );
};

export default BlogPage;

export async function getStaticProps({ params }) {
  const blog = await getBlogPostBySlug(params.slug);

  const coverImageDir = path.join(blog.directory, blog.data.image);

  // const coverImage = (await fs.readFile(coverImageDir)).toString("base64");

  // console.log(coverImage);

  // const coverImage = await import(coverImageDir);

  return {
    props: {
      blog,
      // coverImage,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllBlogPosts();

  return {
    paths,
    fallback: false,
  };
}
