"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-32 items-center">
        <div className="mr-16">
          <Link 
            href="/" 
            className="group relative flex items-center space-x-2"
          >
            <div className="absolute -inset-6 -z-10 rounded-lg bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
            <Image 
              src="/logo/neubierwagenimmologofinal.svg" 
              alt="Bierwagen Immobilien Logo" 
              width={400} 
              height={100} 
              priority 
              className="h-24 w-auto object-contain py-2 transition-transform duration-300 group-hover:scale-[1.02]" 
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-12">
          <nav className="flex items-center space-x-10 text-lg font-light">
            <Link
              href="/"
              className="group relative px-4 py-2 transition-colors hover:text-primary"
            >
              <div className="absolute -inset-2 -z-10 rounded-lg bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              Startseite
            </Link>
            <Link
              href="/kontakt"
              className="group relative px-4 py-2 transition-colors hover:text-primary"
            >
              <div className="absolute -inset-2 -z-10 rounded-lg bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              Kontakt
            </Link>
          </nav>
          <div className="hidden sm:block">
            <Link
              href="tel:+4935181068800"
              className="group flex items-center space-x-4 text-lg font-light text-muted-foreground transition-colors hover:text-primary"
            >
              <div className="relative">
                <div className="absolute -inset-2 -z-10 rounded-lg bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <Phone className="h-4 w-4" />
              </div>
              <span>+49 (0)351 810 6880</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}