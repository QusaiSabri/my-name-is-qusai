import { Icons } from "@/components/Icons";
import PostsList from "@/components/PostsList";
import SeeAllPostsLink from "@/components/SeeAllPostsLink";
import Image from "next/image";
import { allDocs } from "contentlayer/generated";
import { getSortedPosts, getTotalPublishedPosts } from "@/utils/postUtils";

export default function Home() {

  const limit = 3;
  const topNPosts = getSortedPosts(allDocs, limit);
  const totalPublishedPosts = getTotalPublishedPosts(allDocs);
  const publishedPostsMoreThanLimit = (totalPublishedPosts - topNPosts.length) >= 1;

  return (
    <main className="mx-auto text-center pt-2 px-8 md:pt-32 md:pl-28 md:pr-8">
      <div className="grid grid-rows-1 md:grid-cols-custom-1-2 grid-flow-row ">
        <section className="mb-6 order-last md:order-first">
        <article className="max-w-[750px] mx-auto mb-6"></article>
        <aside>
          <div className="container max-w-4xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
              <div className="flex-1 space-y-4 text-left">
                <h2 className="inline-block font-heading text-3xl tracking-tight lg:text-4xl">
                  Latest Posts
                </h2>
              </div>
            </div>
            <hr className="my-2" />
            <PostsList posts={topNPosts}/>
          </div>
          { publishedPostsMoreThanLimit && ( 
            <SeeAllPostsLink
              icon={<Icons.chevronRight className="mr-2 h-4 w-4" />}
            />            
          )}
        </aside>
        </section>
        <header className="flex flex-col gap-6 relative">
  
        <div className="text-3xl font-thin">Welcome to my website!</div>
        <h1 className="text-4xl md:text-5xl font-bold">My name is Qusai!</h1>
        <p className="text-3xl">
          I&apos;m a full stack web developer
        </p>
        <Image
          className="rounded-full mx-auto"
          src="/images/Qusai_Sabri.jpeg"
          alt="Qusai Sabri"
          width="200"
          height="200"
        />
        {/* <p className="text-xl max-w-xl pt-10">
          This website is a space where I can share my knowledge, projects, and
          insights from my journey in the tech world.
        </p> */}        
        </header>
      </div>
        <footer></footer>
    </main>
  );
}
