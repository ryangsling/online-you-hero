import { SectionHeader } from "./SectionHeader";

const rows = [
  { label: "Email", value: "jamesahsan1371@gmail.com", href: "mailto:jamesahsan1371@gmail.com" },
  { label: "Phone", value: "+880 1747 699 172", href: "tel:+8801747699172" },
  { label: "LinkedIn", value: "linkedin.com/in/alif", href: "https://linkedin.com/in/alif" },
  { label: "GitHub", value: "github.com/ryangsling", href: "https://github.com/ryangsling" },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      <SectionHeader
        index="06"
        eyebrow="Contact"
        title="Let's build something ridiculous."
        description="I reply fast. Send an idea, a project, or just a hello."
      />
      <div className="border-t border-border">
        {rows.map((r) => (
          <a
            key={r.label}
            href={r.href}
            target={r.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center justify-between gap-6 py-6 md:py-8 border-b border-border transition-colors hover:bg-secondary/40 px-2 -mx-2 rounded-md"
          >
            <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground shrink-0 w-24">
              {r.label}
            </span>
            <span className="font-display text-2xl md:text-4xl text-foreground text-right transition-transform group-hover:-translate-x-2 truncate">
              {r.value}
            </span>
            <span
              aria-hidden
              className="text-2xl md:text-4xl text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}