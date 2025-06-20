import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GanttChart, Swords, Skull, Crown } from "lucide-react";

const events = [
  {
    title: "The Double Dungeon Incident",
    description: "Jinwoo and his party stumble upon a hidden, high-level dungeon. Betrayed and left for dead, he accepts the System's offer, becoming a Player and starting his journey.",
    icon: <Swords className="h-5 w-5 text-accent" />,
  },
  {
    title: "Job Change Quest",
    description: "After surviving countless trials, Jinwoo faces an army of knights and mages to unlock his true class. He emerges as the 'Necromancer', which later evolves to 'Shadow Monarch'.",
    icon: <Skull className="h-5 w-5 text-accent" />,
  },
  {
    title: "The Jeju Island Raid",
    description: "A pivotal moment where Jinwoo single-handedly defeats the Ant Queen and her colony, a threat that had previously bested S-Rank hunters. He extracts the powerful shadow, Beru.",
    icon: <Swords className="h-5 w-5 text-accent" />,
  },
  {
    title: "War against the Monarchs",
    description: "Jinwoo confronts the other Monarchs, cosmic beings of immense power, in a final battle to protect humanity and claim his place as the true King of the Dead.",
    icon: <Crown className="h-5 w-5 text-accent" />,
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="container py-16 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <GanttChart className="h-8 w-8 text-accent" />
        </div>
        <h2 className="font-headline text-3xl font-bold md:text-4xl">Key Events Timeline</h2>
        <p className="mt-4 text-lg text-muted-foreground">The defining moments that forged a legend.</p>
      </div>

      <div className="relative mt-12 max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
        {events.map((event, index) => (
          <div key={index} className="relative mb-8">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary border-2 border-accent">
                    {event.icon}
                </div>
            </div>
            <div className={`w-[calc(50%-2.5rem)] ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}>
              <Card className="bg-secondary/50 shadow-md">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
