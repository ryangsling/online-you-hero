import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    label: "AI & Agents",
    items: ["Lovable", "Cursor", "Claude", "GPT-5", "v0", "n8n", "LangChain"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node", "Supabase", "PostgreSQL", "Edge Functions", "REST", "Zod"],
  },
  {
    label: "QA & Ops",
    items: ["Manual QA", "Regression suites", "Bug triage", "Git", "GitHub Actions"],
  },
];

export function Toolkit() {
  return (
    <section id="stack" className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      <SectionHeader
        index="05"
        eyebrow="Toolkit"
        title="The stack I reach for."
        description="Curated, not exhaustive - the things I actually use week to week."
      />
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.label} className="border-t border-border pt-6">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {g.label}
            </div>
            <ul className="space-y-2">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="font-display text-2xl text-foreground leading-tight"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}