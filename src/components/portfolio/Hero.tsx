import { WordReveal } from "./WordReveal";

const bullets = [
  "Vibe-engineer full products & sites with AI as my co-pilot",
  "Ship MVPs fast - Lovable, Cursor, Claude, GPT, Supabase",
  "QA background: I build with edge cases baked in",
  "Based in Sylhet, BD - working with teams worldwide",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-[1200px] px-6 pt-24 pb-20 md:pt-28 md:pb-32"
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

          <div className="mt-10 grid gap-8 md:grid-cols-[auto_1fr] md:gap-10">
            <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <div>(01) Intro</div>
              <div className="mt-2 text-foreground/60">Sylhet, BD · UTC+6</div>
            </div>
            <div className="space-y-4">
          <WordReveal
            text="I'm an AI-native developer who partners with LLMs to design, build, and ship products end-to-end. Frontend, backend, automation, QA - I orchestrate the stack instead of hand-writing every line."
            className="text-lg md:text-xl text-foreground leading-relaxed font-display"
            stagger={40}
          />
          <div className="pt-4 space-y-2 text-sm md:text-base text-muted-foreground">
            {bullets.map((b, i) => (
              <WordReveal
                key={b}
                text={`→  ${b}`}
                className="block"
                delay={i * 120}
                stagger={20}
              />
            ))}
          </div>
          <div className="pt-6 flex items-center gap-3 text-base text-foreground">
            <span>Wanna connect?</span>
            <a
              href="#contact"
              className="group relative inline-block px-1 text-accent"
            >
              Let&rsquo;s chat
              <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-accent transition-all duration-300 group-hover:h-[2px]" />
            </a>
          </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-stretch justify-center">
          <div className="relative w-full h-full min-h-[420px] overflow-hidden rounded-2xl border border-border bg-muted/30">
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