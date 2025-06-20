import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skull, Users2 } from "lucide-react";

const hunters = [
  { name: "Cha Hae-In", role: "S-Rank Hunter, Vice-Guild Master", image: "https://placehold.co/400x400.png", hint: "female sword master" },
  { name: "Go Gunhee", role: "S-Rank Hunter, Chairman of the Korean Hunters Association", image: "https://placehold.co/400x400.png", hint: "old powerful man" },
  { name: "Yoo Jinho", role: "D-Rank Hunter, Jinwoo's trusted friend", image: "https://placehold.co/400x400.png", hint: "young man armor" },
  { name: "Baek Yoonho", role: "S-Rank Hunter, White Tiger Guild Master", image: "https://placehold.co/400x400.png", hint: "man white hair" },
];

const shadows = [
  { name: "Igris", role: "Commander Grade, Former Knight", image: "https://placehold.co/400x400.png", hint: "knight red plume" },
  { name: "Beru", role: "Marshal Grade, Former Ant King", image: "https://placehold.co/400x400.png", hint: "shadow ant monster" },
  { name: "Tusk", role: "Commander Grade, Former High Orc Shaman", image: "https://placehold.co/400x400.png", hint: "shadow orc shaman" },
  { name: "Bellion", role: "Grand-Marshal Grade, Former Servant of Ashborn", image: "https://placehold.co/400x400.png", hint: "shadow general centipede" },
];

export function CharactersSection() {
  return (
    <section id="characters" className="container py-16 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Users2 className="h-8 w-8 text-accent" />
        </div>
        <h2 className="font-headline text-3xl font-bold md:text-4xl">Key Figures</h2>
        <p className="mt-4 text-lg text-muted-foreground">The allies, enemies, and loyal soldiers in Jinwoo's saga.</p>
      </div>

      <Tabs defaultValue="hunters" className="mt-12 w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto">
          <TabsTrigger value="hunters">Hunters & Allies</TabsTrigger>
          <TabsTrigger value="shadows">
            <Skull className="mr-2 h-4 w-4" /> Shadow Army
          </TabsTrigger>
        </TabsList>
        <TabsContent value="hunters" className="mt-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hunters.map((hunter) => (
              <Card key={hunter.name} className="overflow-hidden text-center bg-secondary/50">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image src={hunter.image} alt={hunter.name} layout="fill" objectFit="cover" data-ai-hint={hunter.hint} />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-headline">{hunter.name}</CardTitle>
                  <CardDescription className="mt-1 text-xs">{hunter.role}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="shadows" className="mt-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {shadows.map((shadow) => (
              <Card key={shadow.name} className="overflow-hidden text-center bg-secondary/50 border-primary">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image src={shadow.image} alt={shadow.name} layout="fill" objectFit="cover" data-ai-hint={shadow.hint} />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-headline text-accent">{shadow.name}</CardTitle>
                  <CardDescription className="mt-1 text-xs">{shadow.role}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
