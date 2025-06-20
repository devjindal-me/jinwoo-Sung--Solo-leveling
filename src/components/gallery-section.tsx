import Image from "next/image";
import { ImageIcon } from "lucide-react";

const galleryImages = [
    { src: "https://placehold.co/600x400.png", alt: "Sung Jinwoo ready for battle", hint: "warrior glowing eyes" },
    { src: "https://placehold.co/400x600.png", alt: "Igris, the Shadow Knight", hint: "shadow knight armor" },
    { src: "https://placehold.co/600x400.png", alt: "The Shadow Army", hint: "shadow army battle" },
    { src: "https://placehold.co/600x400.png", alt: "A mysterious gate", hint: "glowing gate magic" },
    { src: "https://placehold.co/400x600.png", alt: "Cha Hae-In in action", hint: "swordswoman action pose" },
    { src: "https://placehold.co/600x400.png", alt: "Beru, the Ant King", hint: "monster ant king" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="container py-16 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <ImageIcon className="h-8 w-8 text-accent" />
        </div>
        <h2 className="font-headline text-3xl font-bold md:text-4xl">Image Gallery</h2>
        <p className="mt-4 text-lg text-muted-foreground">A collection of official artwork and fan creations.</p>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={image.hint}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
