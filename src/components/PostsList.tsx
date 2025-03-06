import Link from "next/link";
import Image from "next/image";
import { allDocs } from "contentlayer/generated";

interface PostsListProps {
  posts: typeof allDocs;
}

export default function PostsList({ posts }: PostsListProps) {

  return (
    <>
      {posts?.length ? (
        <div className="grid sm:grid-cols-1 divide-y">
          {posts.map((post, index) => (
            <article key={post._id} className="relative xl:grid xl:grid-cols-4 gap-4 py-4">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={400}
                  className="rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              ) : null}
              <div
                className={`${
                  post.image ? "xl:col-span-3" : "xl:col-span-4"
                } space-y-4 py-4 pl-4 text-left`}
              >
                <h2 className="md:text-2xl text-lg font-extrabold text-[hsl(var(--lighter-foreground))]">{post.title}</h2>
                {post.description && (
                  <p className="muted-foreground-on-dark ">{post.description} <br/><br/> Read More...</p>
                )}
                <Link href={post.slug} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="mt-8">No posts published.</p>
      )}
    </>
  );
}
