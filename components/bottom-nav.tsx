"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./icons";

const navItems = [
  { id: "home", icon: "home", href: "/home" },
  { id: "bookmark", icon: "bookmark", href: "/bookmarks" },
  { id: "bell", icon: "bell", href: "/notifications" },
  { id: "user", icon: "user", href: "/profile" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="flex shrink-0 items-center justify-around border-t border-slate-100 px-4 py-2 sm:justify-between sm:px-8 sm:py-3">
      {navItems.map((tab) => {
        const isActive = pathname === tab.href || (tab.id === "home" && pathname === "/");
        return (
          <Link
            key={tab.id}
            href={tab.href}
            className={`transition hover:scale-110 ${
              isActive ? "text-accent" : "text-slate-300 hover:text-slate-500"
            }`}
          >
            <Icon name={tab.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        );
      })}
    </div>
  );
}