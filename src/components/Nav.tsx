import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { mainNavConfig } from "@/config/navMenueItems";

export default function Nav() {
  const menuItems = mainNavConfig.mainNav;
  return (
    <nav className="relative p-4">
      <div className="mx-auto flex justify-between">
        <div className="flex space-x-4">
          <Link
            href="/"
            className="flex items-center px-3 py-2 text-xl font-bold"
          >
            Qusai Sabri
          </Link>
        </div>
        <div className="flex items-center gap-4 px-3 py-2 text-xl">
          {menuItems.length
            ? menuItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  {item.title}
                </Link>
              ))
            : null}
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
