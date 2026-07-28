import { SectionHeader } from "./SectionHeader";
import { WordReveal } from "./WordReveal";

const jobs = [
  {
    company: "Codeolo",
    role: "Manual QA Tester",
    period: "Jan 2025 - Present",
    project: "Zenyor Home Kiosk",
    href: "https://codeolo.com",
    bullets: [
      "Owned end-to-end manual QA for a home-kiosk product touching hardware, mobile, and web surfaces.",
      "Authored regression suites and repro steps that shortened triage time and cut escaped defects.",
      "Partnered with devs on release readiness - signing off builds, verifying fixes, watching production.",
    ],
  },
];

export function Experience() {
  return (
    <section id="work" className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      <SectionHeader
        index="03"
        eyebrow="Experience"
        title="Where I've turned bugs into shipped things."
        description="Selected work - the story behind the resume line items."
      />
      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          (0{jobs.length}) Roles
        </div>
        <div className="divide-y divide-border">
          {jobs.map((j) => (
            <article key={j.company} className="py-8 first:pt-0 group">
              <div className="flex items-baseline justify-between gap-4">
                <a
                  href={j.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-3xl md:text-4xl text-foreground hover:text-accent transition-colors"
                >
                  {j.company}
                </a>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground shrink-0">
                  {j.period}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 text-sm">
                <span className="uppercase tracking-[0.2em] text-accent">
                  {j.role}
                </span>
                <span className="text-muted-foreground">
                  Project · {j.project}
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                {j.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent shrink-0">→</span>
                    <WordReveal text={b} className="flex-1" stagger={18} delay={i * 100} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}