"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const mainNavItems = [
  {
    title: "Startseite",
    href: "/",
  },
  {
    title: "Über mich",
    href: "/ueber-mich",
  },
  {
    title: "Referenzen",
    href: "/referenzen",
  },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-8 lg:space-x-10">
      {mainNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "group relative text-base font-light tracking-wide transition-colors",
            pathname === item.href
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <span className="relative">
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
            {item.title}
          </span>
        </Link>
      ))}
    </nav>
  );
} 