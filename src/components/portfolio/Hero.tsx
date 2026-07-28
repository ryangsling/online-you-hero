import { WordReveal } from "./WordReveal";

const bullets = [
  "Vibe-engineer full products & sites with AI as my co-pilot",
  "Ship MVPs fast — Lovable, Cursor, Claude, GPT, Supabase",
  "QA background: I build with edge cases baked in",
  "Based in Sylhet, BD — working with teams worldwide",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-[1200px] px-6 pt-40 pb-24 md:pt-52 md:pb-40"
    >
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground mb-10">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        AI-Native Developer · Vibe Engineer
      </div>

      <h1 className="font-display text-[13vw] md:text-[8.5vw] lg:text-[7.5rem] leading-[0.9] tracking-tight text-foreground">
        <WordReveal as="span" text="Hi, I'm" start className="block text-muted-foreground text-[0.35em] md:text-[0.28em] uppercase tracking-[0.3em] font-sans mb-6" stagger={80} />
        <WordReveal as="span" text="Ahmed Alif." start className="block" stagger={120} delay={200} />
        <span className="block italic text-accent">
          <WordReveal as="span" text="I vibe-engineer" start delay={700} stagger={90} />
        </span>
      </h1>

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          <div>(01) Intro</div>
          <div className="mt-2 text-foreground/60">Sylhet, BD · UTC+6</div>
        </div>
        <div className="space-y-4">
          <WordReveal
            text="I'm an AI-native developer who partners with LLMs to design, build, and ship products end-to-end. Frontend, backend, automation, QA — I orchestrate the stack instead of hand-writing every line."
            className="text-xl md:text-2xl text-foreground leading-relaxed font-display"
            stagger={40}
          />
          <div className="pt-6 space-y-2 text-base md:text-lg text-muted-foreground">
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
          <div className="pt-8 flex items-center gap-3 text-base text-foreground">
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
    </section>
  );
}