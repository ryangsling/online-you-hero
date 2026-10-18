import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/portfolio/Header";
import { Footer } from "@/components/portfolio/Footer";
import Reveal from "@/components/design/Reveal";
import { designProjects } from "@/data/designProjects";
import { designGalleryImages } from "@/data/designGalleryImages";
import { Gallery, GalleryGrid, GalleryImage } from "@/components/ui/shared-element-gallery";

const INITIAL_GALLERY_ITEMS = 12;
const GALLERY_BATCH_SIZE = 12;

export default function DesignPage() {
  const featured = designProjects.filter((p) => p.featured);

  const [visibleCount, setVisibleCount] = useState(INITIAL_GALLERY_ITEMS);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const visibleImages = designGalleryImages.slice(0, visibleCount);

  const navigationImages = useMemo(
    () => designGalleryImages.map((image) => ({ id: image.id, src: image.src, alt: image.alt })),
    [],
  );

  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node) return;
    if (visibleCount >= designGalleryImages.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((entry) => entry.isIntersecting);
        if (!hit) return;

        setVisibleCount((current) =>
          Math.min(current + GALLERY_BATCH_SIZE, designGalleryImages.length),
        );
      },
      { rootMargin: "1200px 0px 1200px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visibleCount]);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header subpage />
      <main className="pt-32">
        <section className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Design Projects
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[1.05] sm:text-7xl">
              Selected <span className="italic text-accent">visual</span> work.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Identity systems, layouts, and product surfaces — the design side of everything I
              ship. Each project pairs the visual language with the build.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-[1200px] px-6 pb-16 pt-16">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Featured ({featured.length})
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <Link
                  to="/design/$slug"
                  params={{ slug: project.slug }}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/50"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.cover}
                      alt={project.title}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={i === 0 ? "high" : "low"}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground backdrop-blur">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 p-6">
                    <div>
                      <h3 className="font-display text-2xl leading-tight">{project.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {project.summary}
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="mt-1 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 px-6 pb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          {featured.length === 0 && (
            <Reveal>
              <div className="mt-8 rounded-2xl border border-dashed border-border p-12 text-center">
                <p className="font-display text-2xl">Five projects are on their way.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  The case studies will appear here once the content is added.
                </p>
              </div>
            </Reveal>
          )}
        </section>

        <section className="mx-auto max-w-[1200px] px-6 pb-24">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Curated gallery ({designGalleryImages.length})
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A living wall of all design explorations from{" "}
              <span className="font-mono">all_designs</span>. Click any piece to expand, then drag
              vertically or press escape to close.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-8">
              <Gallery images={navigationImages}>
                <GalleryGrid>
                  {visibleImages.map((image) => (
                    <GalleryImage
                      key={image.id}
                      id={image.id}
                      src={image.thumbSrc}
                      fullSrc={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                    />
                  ))}
                </GalleryGrid>
              </Gallery>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 text-center text-xs text-muted-foreground">
              Showing {visibleImages.length} of {designGalleryImages.length}
            </div>
          </Reveal>

          <div ref={loadMoreRef} className="h-8" aria-hidden="true" />

          <Reveal>
            <p className="mt-10 text-center text-sm text-muted-foreground">
              Want work like this on your product?{" "}
              <a href="/#contact" className="text-accent underline-offset-4 hover:underline">
                Get in touch
              </a>
              .
            </p>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
