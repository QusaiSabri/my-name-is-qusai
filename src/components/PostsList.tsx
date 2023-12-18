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
            <article
              key={post._id}
              className="relative xl:grid xl:grid-cols-4 gap-4 py-8"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              )}
              <div className="space-y-5 xl:col-span-3 py-4 pl-4 text-left">
                <h2 className="text-2xl font-extrabold">{post.title}</h2>
                {post.description && (
                  <p className="text-muted-foreground">{post.description}</p>
                )}
                <Link href={post.slug} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </>
  );
}
