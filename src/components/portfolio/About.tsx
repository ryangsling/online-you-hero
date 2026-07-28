import { SectionHeader } from "./SectionHeader";
import { WordReveal } from "./WordReveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-6 py-32 md:py-40">
      <SectionHeader
        index="02"
        eyebrow="About"
        title="AI-native by default, ship-obsessed by habit."
      />
      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground space-y-3">
          <div>
            <div className="text-foreground/60">Education</div>
            <div className="mt-1 text-foreground normal-case tracking-normal text-base font-display">
              Leading University, Sylhet
            </div>
            <div className="text-muted-foreground normal-case tracking-normal text-sm">
              BSc. Computer Science & Engineering · 2022 – Present
            </div>
          </div>
          <div className="pt-4">
            <div className="text-foreground/60">Currently</div>
            <div className="mt-1 text-foreground normal-case tracking-normal text-base font-display">
              Building & QA-ing at Codeolo
            </div>
          </div>
        </div>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <WordReveal
            text="I don't write code the old way. I sketch intent, converse with models, review what they generate, and ship. AI is a teammate, not a tool — that changes everything about how a product gets built."
            stagger={25}
          />
          <WordReveal
            text="My QA background keeps me honest. I break things before shipping them, obsess over edge cases, and turn user complaints into repeatable tests. The result: vibe-coded speed with grown-up quality."
            stagger={25}
            delay={150}
          />
          <WordReveal
            text="Right now I'm most excited about agentic workflows, Lovable-style app generation, and turning long-form prompts into production-grade UI."
            stagger={25}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
}