import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const theories = [
  {
    title: "What if Jinwoo failed the Double Dungeon?",
    content: "One popular theory suggests that if Jinwoo had perished, the System would have sought a new host. However, given Ashborn's deep connection to Jinwoo's desperation and will to live, it's more likely the power would have lain dormant, potentially leading to the Rulers' victory and the destruction of Earth.",
  },
  {
    title: "Could other Monarchs have defeated Jinwoo?",
    content: "While other Monarchs like Antares were immensely powerful, Jinwoo's ability for infinite growth was unique. Theories suggest that given enough time, no Monarch could have matched his potential. His deep understanding of mortality, a trait other Monarchs lacked, gave him a unique strategic edge.",
  },
  {
    title: "The true nature of the Rulers and Monarchs.",
    content: "Many fans discuss the grey morality of the conflict. The Rulers, while seemingly protectors of humanity, were willing to sacrifice Earth to end their war. The Monarchs, though destructive, fought for their own survival. The series masterfully portrays a conflict where there are no true heroes or villains, only cosmic forces with opposing goals.",
  },
];


export function TheoriesSection() {
  return (
    <section id="theories" className="container py-16 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Lightbulb className="h-8 w-8 text-accent" />
        </div>
        <h2 className="font-headline text-3xl font-bold md:text-4xl">Fan Theories & Discussions</h2>
        <p className="mt-4 text-lg text-muted-foreground">Exploring the 'what-ifs' and deeper meanings of the Solo Leveling saga.</p>
      </div>

      <div className="mt-12 grid gap-8 max-w-4xl mx-auto">
        {theories.map((theory, index) => (
          <Card key={index} className="bg-secondary/50">
            <CardHeader>
              <CardTitle className="font-headline text-accent">{theory.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{theory.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
