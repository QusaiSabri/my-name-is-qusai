'use client';

import Link from "next/link";
import { Icons } from "@/components/Icons";
import PostsList from "@/components/PostsList";
import SeeAllPostsLink from "@/components/SeeAllPostsLink";
import Image from "next/image";
import { allDocs } from "contentlayer/generated";
import { getSortedPosts, getTotalPublishedPosts } from "@/utils/postUtils";
import SkyStars from "@/components/SkyStarts";
import { useTheme } from "next-themes";
import { IconGitHub, IconLinkedIn, IconX } from "@/components/icons/SvgIcons";
import { motion } from "framer-motion";

export default function Home() {
  const { theme } = useTheme();
  const limit = 3;
  const topNPosts = getSortedPosts(allDocs, limit);
  const totalPublishedPosts = getTotalPublishedPosts(allDocs);
  const publishedPostsMoreThanLimit = (totalPublishedPosts - topNPosts.length) >= 1;

  return (
    <main className="min-h-screen relative overflow-hidden pb-10">
      {theme === 'dark' && <SkyStars />}
      
      <div className="container mx-auto px-4 pt-10 md:pt-20">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-24">
          
          {/* Main Content (Posts) */}
          <div className="flex-1 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold tracking-tight lg:text-4xl bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                  Latest Posts
                </h2>
              </div>
              <PostsList posts={topNPosts}/>
              
              {publishedPostsMoreThanLimit && ( 
                <div className="mt-8 flex justify-center lg:justify-start">
                  <SeeAllPostsLink
                    icon={<Icons.chevronRight className="mr-2 h-4 w-4" />}
                  />
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar / Profile (Sticky) */}
          <aside className="lg:w-[400px] relative">
            <div className="sticky top-24">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-xl shadow-2xl"
              >
                <div className="relative mb-6 group">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-orange-600 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
                  <Image
                    className="relative rounded-full border-4 border-background"
                    src="/images/Qusai_Sabri.jpeg"
                    alt="Qusai Sabri"
                    width={200}
                    height={200}
                    priority
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    <span className="block text-lg font-medium text-muted-foreground mb-2">Hello, I&apos;m</span>
                    Qusai
                  </h1>
                  <p className="text-xl text-muted-foreground font-medium">
                    Full Stack Web Developer
                  </p>
                  
                  <div className="flex justify-center gap-4 pt-4">
                    <Link href="https://x.com/Qusai_Sabri" target="_blank" className="p-2 rounded-full hover:bg-accent transition-colors">
                      <IconX style={{ width: "24px", height: "24px", fill: "currentColor" }} />
                    </Link>
                    <Link href="https://github.com/QusaiSabri" target="_blank" className="p-2 rounded-full hover:bg-accent transition-colors">
                      <IconGitHub style={{ width: "24px", height: "24px", fill: "currentColor" }} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/qusai-sabri" target="_blank" className="p-2 rounded-full hover:bg-accent transition-colors">
                      <IconLinkedIn style={{ width: "24px", height: "24px", fill: "currentColor" }} />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
