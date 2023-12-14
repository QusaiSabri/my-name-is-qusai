import Image from 'next/image';
import Link from 'next/link';
import { allDocs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

import { formatDate } from '@/lib/utils';

export const metadata = {
  title: 'Blog',
};

export default async function BlogPage() {
  const posts = allDocs
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <div className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-heading text-4xl tracking-tight lg:text-5xl'>
            Blog
          </h1>
          <p className='text-xl text-muted-foreground'>
            A blog about coding & web development.
          </p>
        </div>
      </div>
      <hr className='my-8' />
      {posts?.length ? (
        <div className='grid sm:grid-cols-1 divide-y'>
          {posts.map((post, index) => (
            <article
              key={post._id}
              className='relative xl:grid xl:grid-cols-4 gap-4 py-8'
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className='rounded-md border bg-muted transition-colors'
                  priority={index <= 1}
                />
              )}
              <div className='space-y-5 xl:col-span-3'>
                <h2 className='text-2xl font-extrabold'>{post.title}</h2>
                {post.description && (
                  <p className='text-muted-foreground'>{post.description}</p>
                )}
                <Link href={post.slug} className='absolute inset-0'>
                  <span className='sr-only'>View Article</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  );
}
