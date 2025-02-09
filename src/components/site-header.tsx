"use client";

import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Phone } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link 
          href="/" 
          className="group relative flex items-center space-x-2"
        >
          <div className="absolute -inset-2 -z-10 rounded-lg bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="font-heading text-xl font-light tracking-tight">
            bierwagen immobilien
          </span>
        </Link>

        <div className="flex items-center space-x-8">
          <MainNav />
          <div className="hidden items-center space-x-6 sm:flex">
            <Link
              href="tel:+49035181068800172"
              className="group flex items-center space-x-2 text-base font-light text-muted-foreground transition-colors hover:text-primary"
            >
              <div className="relative">
                <div className="absolute -inset-2 -z-10 rounded-lg bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <Phone className="h-4 w-4" />
              </div>
              <span>0351 81068800172</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
} 