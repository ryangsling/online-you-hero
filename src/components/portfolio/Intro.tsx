import { WordReveal } from "./WordReveal";

const bullets = [
  "Vibe-engineer full products & sites with AI as my co-pilot",
  "Ship MVPs fast - Lovable, Cursor, Claude, GPT, Supabase",
  "QA background: I build with edge cases baked in",
  "Based in Sylhet, BD - working with teams worldwide",
];

export function Intro() {
  return (
    <section id="intro" className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-16">
        <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          <div>(01) Intro</div>
          <div className="mt-2 text-foreground/60">Sylhet, BD · UTC+6</div>
        </div>
        <div className="space-y-4">
          <WordReveal
            text="I'm an AI-native developer who partners with LLMs to design, build, and ship products end-to-end. Frontend, backend, automation, QA - I orchestrate the stack instead of hand-writing every line."
            className="text-lg md:text-2xl text-foreground leading-relaxed font-display"
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
            <a href="#contact" className="group relative inline-block px-1 text-accent">
              Let&rsquo;s chat
              <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-accent transition-all duration-300 group-hover:h-[2px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}