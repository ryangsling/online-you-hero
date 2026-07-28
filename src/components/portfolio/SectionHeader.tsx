import { WordReveal } from "./WordReveal";

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16 mb-16">
      <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
        <div>({index}) {eyebrow}</div>
      </div>
      <div>
        <WordReveal
          as="h2"
          text={title}
          className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-foreground"
          stagger={60}
        />
        {description && (
          <WordReveal
            text={description}
            className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
            stagger={25}
            delay={200}
          />
        )}
      </div>
    </div>
  );
}