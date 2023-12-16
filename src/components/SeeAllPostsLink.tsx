import Link from "next/link";
import { mainNavConfig } from "@/config/navMenueItems";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import { ReactNode } from "react";

interface SeeAllPostsLinkProps {
  className?: string;
  icon?: ReactNode;
}

export default function SeeAllPostsLink({
  className,
  icon = <Icons.chevronLeft className="mr-2 h-4 w-4" />,
}: SeeAllPostsLinkProps) {
  const blogMenuItems = mainNavConfig.mainNav.find(
    (item) => item.title === "Blog",
  );

  const href = blogMenuItems?.href || "/blog";

  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant: "ghost" }), className)}
    >
      {icon}
      See all posts
    </Link>
  );
}
