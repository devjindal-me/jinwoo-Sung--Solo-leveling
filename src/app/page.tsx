import { BioSection } from "@/components/bio-section";
import { CharactersSection } from "@/components/characters-section";
import { ChatbotSection } from "@/components/chatbot-section";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";
import { TheoriesSection } from "@/components/theories-section";
import { TimelineSection } from "@/components/timeline-section";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="relative flex min-h-dvh w-full flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <BioSection />
        <div className="container">
          <Separator className="my-8 bg-primary/20" />
        </div>
        <SkillsSection />
        <div className="container">
          <Separator className="my-8 bg-primary/20" />
        </div>
        <CharactersSection />
        <div className="container">
          <Separator className="my-8 bg-primary/20" />
        </div>
        <TimelineSection />
        <div className="container">
          <Separator className="my-8 bg-primary/20" />
        </div>
        <GallerySection />
        <div className="container">
          <Separator className="my-8 bg-primary/20" />
        </div>
        <TheoriesSection />
        <div className="container">
          <Separator className="my-8 bg-primary/20" />
        </div>
        <ChatbotSection />
      </main>
      <footer className="py-6 md:px-8 md:py-0 bg-background/50 mt-16">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for the fans of Solo Leveling. All rights reserved to their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
}
