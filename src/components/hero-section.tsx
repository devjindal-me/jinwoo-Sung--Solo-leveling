import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Sung Jinwoo overlooking his shadow army"
        layout="fill"
        objectFit="cover"
        className="z-0 opacity-20"
        priority
        data-ai-hint="dark fantasy warrior"
      />
      <div className="z-20 flex flex-col items-center p-4">
        <h1 className="text-5xl md:text-8xl font-headline font-bold mb-4 text-shadow-lg animate-fade-in-down text-accent">
          ARISE.
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-8 text-shadow animate-fade-in-up text-foreground/80">
          Explore the world of the Shadow Monarch, Sung Jinwoo.
        </p>
        <Link href="#bio" aria-label="Scroll to bio section">
          <Button size="lg" variant="outline" className="bg-transparent border-accent text-accent hover:bg-accent hover:text-background animate-bounce mt-4">
            Discover His Journey <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
