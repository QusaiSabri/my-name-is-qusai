'use client';

import Link from "next/link";
import Image from "next/image";
import { allDocs } from "contentlayer/generated";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PostsListProps {
  posts: typeof allDocs;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function PostsList({ posts }: PostsListProps) {

  return (
    <>
      {posts?.length ? (
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:grid-cols-1"
        >
          {posts.map((post, index) => (
            <motion.article 
              key={post._id} 
              variants={item}
              className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-accent/30 hover:border-accent transition-all duration-300 backdrop-blur-sm"
            >
              {post.image && (
                <div className="md:w-1/3 shrink-0 overflow-hidden rounded-xl border border-border/50">
                   <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index <= 1}
                  />
                </div>
              )}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center text-sm font-medium text-primary">
                  Read article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
                <Link href={post.slug} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      ) : (
        <p className="mt-8 text-muted-foreground">No posts published.</p>
      )}
    </>
  );
}
