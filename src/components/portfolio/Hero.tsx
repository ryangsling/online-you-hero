import { WordReveal } from "./WordReveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-[1200px] px-6 pt-32 pb-20 md:pt-40 md:pb-32"
    >
      <div className="grid gap-10 md:grid-cols-[1.55fr_1fr] md:gap-12 items-stretch">
        <div className="flex flex-col">
          <h1 className="font-display text-[13vw] md:text-[7vw] lg:text-[6rem] leading-[1] tracking-tight text-foreground pb-4">
        <WordReveal as="span" text="Hi, I'm" start className="block text-muted-foreground text-[0.35em] md:text-[0.28em] uppercase tracking-[0.3em] font-sans mb-6" stagger={80} />
        <WordReveal as="span" text="Ahmed Alif." start className="block" stagger={120} delay={200} />
        <span className="block italic text-accent pr-[0.15em]">
          <WordReveal as="span" text="I vibe-engineer" start delay={700} stagger={90} />
        </span>
      </h1>
        </div>
        <div className="hidden md:flex items-stretch justify-center">
          <div className="relative w-full h-full min-h-[360px] overflow-hidden rounded-2xl border border-border bg-muted/30">
            <img
              src="https://cdn.pixabay.com/animation/2026/05/10/12/07/12-07-49-893_512.gif"
              alt="Animated abstract visual"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}