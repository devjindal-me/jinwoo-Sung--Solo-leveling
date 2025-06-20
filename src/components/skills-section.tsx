import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Swords } from "lucide-react";

const skills = [
  {
    name: "Shadow Extraction",
    description: "The signature ability of the Shadow Monarch. Allows Jinwoo to extract shadows from deceased beings and add them to his army. The probability of success and the grade of the resulting shadow depend on the target's power and the time since their death.",
  },
  {
    name: "Shadow Storage",
    description: "Allows Jinwoo to store his shadow soldiers in his own shadow, ready to be summoned at any time. The number of shadows he can store increases with his level.",
  },
  {
    name: "Monarch's Domain",
    description: "An area of effect skill where all shadow soldiers within the caster's shadow are buffed by 50%. This amplifies the power of his entire army significantly.",
  },
  {
    name: "Stealth (Rasaka's Fang)",
    description: "A skill that renders Jinwoo invisible and silent, perfect for assassinations and reconnaissance. He obtained this by crafting a dagger from the fang of the venom-fanged beast, Rasaka.",
  },
];


export function SkillsSection() {
  return (
    <section id="skills" className="container py-16 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Swords className="h-8 w-8 text-accent" />
        </div>
        <h2 className="font-headline text-3xl font-bold md:text-4xl">Skills Showcase</h2>
        <p className="mt-4 text-lg text-muted-foreground">The unique and devastating abilities of the Shadow Monarch.</p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {skills.map((skill) => (
            <AccordionItem key={skill.name} value={skill.name}>
              <AccordionTrigger className="font-headline text-lg hover:text-accent">{skill.name}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {skill.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
