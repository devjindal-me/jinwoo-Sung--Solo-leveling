"use client"
import Link from "next/link"
import { Swords } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Swords className="h-6 w-6 text-accent" />
            <span className="hidden font-bold font-headline sm:inline-block">
              Sung Hub
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <Link
              href="#bio"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Bio
            </Link>
            <Link
              href="#skills"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Skills
            </Link>
            <Link
              href="#characters"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Characters
            </Link>
            <Link
              href="#timeline"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Timeline
            </Link>
             <Link
                href="#gallery"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
                Gallery
            </Link>
            <Link
                href="#theories"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
                Theories
            </Link>
            <Link
                href="#chatbot"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
                Oracle
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Mobile nav could go here */}
        </div>
      </div>
    </header>
  )
}
