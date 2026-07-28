import { useQuery } from "@tanstack/react-query";
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
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <section id="blog" className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      <SectionHeader
        index="05"
        eyebrow="Writing"
        title="Notes from the build."
        description="I write about vibe-engineering, AI workflows, and what actually ships. Latest posts from IncBlog, auto-synced."
      />

      {featured && (
        <FadeIn>
          <a
            href={featured.url}
            target="_blank"
            rel="noreferrer"
            className="group grid gap-8 md:grid-cols-[1.05fr_1fr] md:gap-12 items-stretch rounded-2xl border border-border bg-card/40 backdrop-blur p-4 md:p-6 hover:border-accent/60 transition-colors"
          >
            {featured.cover && (
              <div className="relative overflow-hidden rounded-xl border border-border aspect-[16/10] md:aspect-auto">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            )}
            <div className="flex flex-col justify-between p-2 md:p-4">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {featured.category && <span>{featured.category}</span>}
                  {featured.category && <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />}
                  <span>{featured.date}</span>
                  {featured.readTime && <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />}
                  {featured.readTime && <span>{featured.readTime}</span>}
                </div>
                <h3 className="mt-5 font-display text-3xl md:text-4xl leading-[1.1] text-foreground group-hover:text-accent transition-colors">
                  {featured.title}
                </h3>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  {featured.excerpt}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <span className="inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-background transition-all group-hover:bg-accent group-hover:gap-4">
                  Read post
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          </a>
        </FadeIn>
      )}

      {rest.length > 0 && (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {rest.map((post) => (
            <FadeIn key={post.url}>
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card/40 backdrop-blur p-6 hover:border-accent/60 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {post.category && <span>{post.category}</span>}
                  {post.category && <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />}
                  <span>{post.date}</span>
                </div>
                <h4 className="mt-4 font-display text-2xl leading-[1.15] text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-accent transition-colors">
                  Read post →
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      )}

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