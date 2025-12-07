'use client';

import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { mainNavConfig } from "@/config/navMenueItems";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Nav() {
  const menuItems = mainNavConfig.mainNav;
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex gap-6 md:gap-10">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-bold tracking-tighter hover:text-primary transition-colors"
          >
            <span>Qusai Sabri</span>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6">
            {menuItems.length
              ? menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-foreground/80",
                      pathname === item.href ? "text-foreground" : "text-foreground/60"
                    )}
                  >
                    {item.title}
                  </Link>
                ))
              : null}
          </div>
          <DarkModeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
