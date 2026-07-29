import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { FadeIn } from "./WordReveal";
import { getBlogPosts, type BlogPost } from "@/lib/blog.functions";

const FALLBACK: BlogPost[] = [
  {
    title: "Master Engaging Blog Posts: 17 Real Examples to Hook and Retain Readers",
    date: "July 17, 2026",
    isoDate: "2026-07-17",
    readTime: "2 min read",
    category: "Personal",
    excerpt:
      "Your blog's success hinges on the quality of your posts. Here are 17 real examples that hook audiences from the first sentence.",
    cover: "https://incblog.fly.dev/uploads/1784247282120-6055321b7f4b725f.webp",
    url: "https://incblog.fly.dev/blog/md-ahmed-alif/master-engaging-blog-posts-17-real-examples-to-hook-and-retain-readers",
  },
];

const AUTHOR_URL = "https://incblog.fly.dev/blog/md-ahmed-alif";

export function Blog() {
  const { data } = useQuery({
    queryKey: ["incblog-posts"],
    queryFn: () => getBlogPosts(),
    staleTime: 1000 * 60 * 30,
  });

  const posts = (data && data.length > 0 ? data : FALLBACK).slice(0, 3);

  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const onScroll = () => {
      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track) return;
      const rect = wrap.getBoundingClientRect();
      const distance = Math.max(0, track.scrollWidth - window.innerWidth + 96);
      if (distance <= 0) {
        setTranslate(0);
        return;
      }
      const total = wrap.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / total));
      setTranslate(progress * distance);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isDesktop, posts.length]);

  return (
    <section id="blog" className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      <SectionHeader
        index="05"
        eyebrow="Writing"
        title="Notes from the build."
        description="I write about vibe-engineering, AI workflows, and what actually ships. Latest posts from IncBlog, auto-synced."
      />

      {/* Mobile: native horizontal swipe */}
      <FadeIn>
        <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-6 pb-4">
            {posts.map((post) => (
              <BlogCard key={post.url} post={post} className="snap-start shrink-0 w-[85%]" />
            ))}
          </div>
        </div>
        <div className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground/70 md:hidden">
          Swipe →
        </div>
      </FadeIn>

      {/* Desktop: pinned horizontal scroll */}
      <div
        ref={wrapRef}
        className="hidden md:block relative"
        style={{ height: `${100 + posts.length * 55}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-8 will-change-transform pl-2 pr-24"
            style={{ transform: `translate3d(${-translate}px,0,0)` }}
          >
            {posts.map((post) => (
              <BlogCard key={post.url} post={post} className="shrink-0 w-[520px]" />
            ))}
          </div>
        </div>
      </div>

      <FadeIn>
        <div className="mt-12 flex justify-center">
          <a
            href={AUTHOR_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:border-accent hover:text-accent hover:gap-4"
          >
            Browse more posts on IncBlog
            <span aria-hidden>→</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

function BlogCard({ post, className = "" }: { post: BlogPost; className?: string }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noreferrer"
      className={`group flex flex-col rounded-2xl border border-border bg-card/40 backdrop-blur overflow-hidden hover:border-accent/60 transition-colors ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted/40">
        {post.cover ? (
          <img
            src={post.cover}
            alt={post.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            IncBlog
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          {post.category && <span>{post.category}</span>}
          {post.category && <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />}
          <span>{post.date}</span>
          {post.readTime && <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />}
          {post.readTime && <span>{post.readTime}</span>}
        </div>
        <h3 className="mt-4 font-display text-2xl md:text-3xl leading-[1.15] text-foreground group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-6 pt-4 border-t border-border">
          <span className="inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-background transition-all group-hover:bg-accent group-hover:gap-4">
            Read post
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </a>
  );
}