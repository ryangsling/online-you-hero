import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { designProjects, type DesignProject } from "@/data/designProjects";
import Reveal from "@/components/design/Reveal";

const MVP_PROJECTS = designProjects.slice(0, 3);

export function DesignHighlights() {
  return (
    <section id="design" className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      <Reveal>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Recent Design Projects
        </h2>
      </Reveal>

      <div className="mt-8 divide-y divide-border border-y border-border">
        {MVP_PROJECTS.map((project, i) => (
          <Reveal key={project.slug} delay={i * 70 + 80}>
            <DesignProjectRow project={project} index={i} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={220}>
        <div className="mt-12 flex justify-center">
          <Link
            to="/design"
            className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:border-accent hover:text-accent hover:gap-4"
          >
            See more designs
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function DesignProjectRow({ project, index }: { project: DesignProject; index: number }) {
  const [active, setActive] = useState(false);
  const [previewPos, setPreviewPos] = useState({ x: 24, y: 24 });
  const rowRef = useRef<HTMLAnchorElement>(null);
  const currentRef = useRef({ x: 24, y: 24 });
  const targetRef = useRef({ x: 24, y: 24 });

  useEffect(() => {
    if (!active) return;

    let raf = 0;

    const animate = () => {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;

      setPreviewPos({ x: current.x, y: current.y });
      raf = window.requestAnimationFrame(animate);
    };

    raf = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(raf);
  }, [active]);

  const updateTarget = (clientX: number, clientY: number) => {
    const row = rowRef.current;
    if (!row) return;

    const rect = row.getBoundingClientRect();

    const previewWidth = 300;
    const previewHeight = 180;
    const pad = 20;

    const rawX = clientX - rect.left + 24;
    const rawY = clientY - rect.top - previewHeight / 2;

    const minX = pad;
    const maxX = rect.width - previewWidth - pad;
    const minY = pad;
    const maxY = rect.height - previewHeight - pad;

    const clampedX = Math.max(minX, Math.min(maxX, rawX));
    const clampedY = Math.max(minY, Math.min(maxY, rawY));

    targetRef.current = { x: clampedX, y: clampedY };
  };

  return (
    <Link
      ref={rowRef}
      to="/design/$slug"
      params={{ slug: project.slug }}
      onMouseEnter={(e) => {
        updateTarget(e.clientX, e.clientY);
        currentRef.current = { ...targetRef.current };
        setPreviewPos(targetRef.current);
        setActive(true);
      }}
      onMouseMove={(e) => updateTarget(e.clientX, e.clientY)}
      onMouseLeave={() => setActive(false)}
      className="group relative block overflow-hidden py-6 transition-colors"
    >
      <div className="pointer-events-none hidden md:block">
        <div
          className={`absolute left-0 top-0 z-20 overflow-hidden rounded-xl border border-border/70 bg-card shadow-2xl transition-opacity duration-300 ${
            active ? "opacity-100" : "opacity-0"
          }`}
          style={{
            width: 300,
            height: 180,
            transform: `translate3d(${previewPos.x}px, ${previewPos.y}px, 0)`,
          }}
        >
          <img src={project.cover} alt="" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between gap-6">
        <div className="flex items-baseline gap-6">
          <span className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-display text-3xl leading-tight transition-colors group-hover:text-accent sm:text-5xl">
              {project.title}
            </h3>
            <p className="mt-2 max-w-4xl text-base leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
          </div>
        </div>

        <div className="hidden shrink-0 items-center gap-6 sm:flex">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            {project.year}
          </span>
          <ArrowRight
            size={18}
            className="text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>
      </div>
    </Link>
  );
}
