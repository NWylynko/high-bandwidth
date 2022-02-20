import markdownToHtml, {
  getAllBlogPosts,
  getBlogPostBySlug,
  Matter,
} from "@/lib/blogPosts";

interface BlogPageProps {
  blog: Matter;
}

const BlogPage = ({ blog }: BlogPageProps) => {
  console.log(blog);

  return (
    <>
      <pre>{JSON.stringify(blog.data, null, 2)}</pre>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </>
  );
};

export default BlogPage;

export async function getStaticProps({ params }) {
  const blog = await getBlogPostBySlug(params.slug);

  if (blog.isEmpty) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog: {
        content: await markdownToHtml(blog.content || ""),
        data: blog.data,
      },
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
