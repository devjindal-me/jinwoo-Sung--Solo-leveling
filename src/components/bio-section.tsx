import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export function BioSection() {
  return (
    <section id="bio" className="container py-16 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <User className="h-8 w-8 text-accent" />
        </div>
        <h2 className="font-headline text-3xl font-bold md:text-4xl">Character Bio</h2>
        <p className="mt-4 text-lg text-muted-foreground">The journey from the "World's Weakest" to the "Shadow Monarch".</p>
      </div>
      <Card className="mt-12 w-full overflow-hidden bg-secondary/50 shadow-lg">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h3 className="font-headline text-2xl font-bold text-accent">Sung Jinwoo</h3>
            <p className="mt-4 text-muted-foreground">
              Once known as the Weakest Hunter of All Mankind, Sung Jinwoo's life was a constant struggle for survival in a world ravaged by magic beasts and dungeons. His unremarkable existence took a dramatic turn in a catastrophic Double Dungeon incident, where he was chosen by a mysterious system to become a 'Player'.
            </p>
            <p className="mt-4 text-muted-foreground">
              This granted him the unique ability to grow in strength without limit. Through relentless training and life-threatening battles, he leveled up, defied all odds, and eventually inherited the full power of the Shadow Monarch, becoming the most powerful being in existence.
            </p>
          </div>
          <div className="relative h-64 md:h-auto">
             <Image
              src="https://placehold.co/800x600.png"
              alt="Sung Jinwoo Portrait"
              layout="fill"
              objectFit="cover"
              data-ai-hint="fantasy warrior portrait"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
