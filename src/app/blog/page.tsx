import PostsList from "@/components/PostsList";
import { getSortedPosts } from "@/utils/postUtils";
import { allDocs } from "contentlayer/generated";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {

  const posts = getSortedPosts(allDocs);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            A blog about coding & web development.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <PostsList posts={posts} />
    </div>
  );
}
