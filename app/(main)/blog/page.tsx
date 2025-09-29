import { Posts } from "app/components/posts";
import { getBlogPosts } from "app/lib/fs";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  const blog = getBlogPosts();

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <Posts posts={blog} path="blog" />
    </section>
  );
}
