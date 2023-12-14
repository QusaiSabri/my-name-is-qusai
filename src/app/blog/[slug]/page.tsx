import { allDocs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/Mdx';
import { formatDate, cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/Icons';

interface PageProps {
  params: {
    slug: string;
  };
}

async function getDocsFromSlug(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);
  console.log('doc', doc);
  if (!doc) notFound();

  return doc;
}

const page = async ({ params }: PageProps) => {
  const post = await getDocsFromSlug(params.slug);

  return (
    <article className='container relative max-w-3xl py-6 lg:py-10'>
      <Link
        href='/blog'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-[-200px] top-14 hidden xl:inline-flex'
        )}
      >
        <Icons.chevronLeft className='mr-2 h-4 w-4' />
        See all posts
      </Link>
      <div>
        {post.date && (
          <time
            dateTime={post.date}
            className='block text-sm text-muted-foreground'
          >
            Published on {formatDate(post.date)}
          </time>
        )}
        <h1 className='mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl'>
          {post.title}
        </h1>
      </div>
      <Mdx code={post.body.code} />
      <hr className='mt-12' />
      <div className='flex justify-center py-6 lg:py-10'>
        <Link href='/blog' className={cn(buttonVariants({ variant: 'ghost' }))}>
          <Icons.chevronLeft className='mr-2 h-4 w-4' />
          See all posts
        </Link>
      </div>
    </article>
  );
};

export default page;
