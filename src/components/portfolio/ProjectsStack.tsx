import { useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";

type Repo = {
  key: string;
  title: string;
  pitch: string;
  tags: string[];
  href: string;
  apiUrl: string;
};

const REPOS: Repo[] = [
  {
    key: "incodet-portfolio",
    title: "Incodet Portfolio",
    pitch:
      "A studio-grade portfolio scaffold - modern React, componentized sections, and a design system built to be forked.",
    tags: ["React", "TypeScript", "Tailwind", "Vibe-coded"],
    href: "https://github.com/ryangsling/incodet-portfolio",
    apiUrl: "https://api.github.com/repos/ryangsling/incodet-portfolio",
  },
  {
    key: "IncBlog",
    title: "IncBlog",
    pitch:
      "A full-stack blog platform: authoring, tags, feeds, and a clean reading experience - MVP first, polish continuously.",
    tags: ["Next.js", "Prisma", "Auth", "Vibe-coded"],
    href: "https://github.com/ryangsling/IncBlog",
    apiUrl: "https://api.github.com/repos/ryangsling/IncBlog",
  },
  {
    key: "Incodere-LMS",
    title: "Incodere LMS",
    pitch:
      "A lightweight learning-management system for cohorts and courses - enrollments, lessons, and progress in one place.",
    tags: ["Full-stack", "TypeScript", "LMS", "Vibe-coded"],
    href: "https://github.com/ryangsling/Incodere-LMS",
    apiUrl: "https://api.github.com/repos/ryangsling/Incodere-LMS",
  },
];

type Meta = { stars?: number; language?: string; updated?: string; description?: string; homepage?: string };

function useRepoMeta(repos: Repo[]) {
  const [meta, setMeta] = useState<Record<string, Meta>>({});
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const entries = await Promise.all(
        repos.map(async (r) => {
          try {
            const res = await fetch(r.apiUrl, {
              headers: { Accept: "application/vnd.github+json" },
            });
            if (!res.ok) return [r.key, {}] as const;
            const j = await res.json();
            return [
              r.key,
              {
                stars: j.stargazers_count,
                language: j.language,
                updated: j.pushed_at,
                description: j.description,
                homepage: j.homepage,
              } as Meta,
            ] as const;
          } catch {
            return [r.key, {}] as const;
          }
        }),
      );
      if (!cancelled) setMeta(Object.fromEntries(entries));
    })();
    return () => {
      cancelled = true;
    };
  }, [repos]);
  return meta;
}

function formatUpdated(iso?: string) {
  if (!iso) return "-";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function ProjectsStack() {
  const meta = useRepoMeta(REPOS);
  return (
    <section id="projects" className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      <SectionHeader
        index="04"
        eyebrow="Projects"
        title="Recent MVPs, straight from GitHub."
        description="Three latest builds. Scroll - the cards stack, one on top of the other."
      />
      <div className="relative">
        {REPOS.map((r, i) => {
          const m = meta[r.key] ?? {};
          const topOffset = 96 + i * 28;
          const live = m.homepage && m.homepage.trim() ? m.homepage : r.href;
          return (
            <div
              key={r.key}
              className="sticky"
              style={{ top: `${topOffset}px`, marginBottom: "2rem" }}
            >
              <div
                className="group rounded-2xl border border-border bg-background/95 backdrop-blur-sm p-8 md:p-12 shadow-[0_20px_60px_-30px_rgba(20,20,20,0.35)] transition-all hover:border-accent/60 hover:-translate-y-1"
              >
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-muted-foreground">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-4xl md:text-6xl leading-none tracking-tight text-foreground">
                      {r.title}
                    </h3>
                  </div>
                  <span className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
                    Visit live
                    <span aria-hidden>↗</span>
                  </span>
                </div>
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                  {m.description || r.pitch}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs uppercase tracking-[0.15em] border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  <div>
                    <div className="text-foreground/50">Language</div>
                    <div className="mt-1 text-foreground normal-case tracking-normal text-sm">
                      {m.language ?? "-"}
                    </div>
                  </div>
                  <div>
                    <div className="text-foreground/50">Stars</div>
                    <div className="mt-1 text-foreground normal-case tracking-normal text-sm">
                      {m.stars ?? "-"}
                    </div>
                  </div>
                  <div>
                    <div className="text-foreground/50">Updated</div>
                    <div className="mt-1 text-foreground normal-case tracking-normal text-sm">
                      {formatUpdated(m.updated)}
                    </div>
                  </div>
                </div>
                </a>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    View on GitHub
                    <span aria-hidden>↗</span>
                  </a>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Card opens the live site
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="h-[40vh]" aria-hidden />
      </div>
    </section>
  );
}