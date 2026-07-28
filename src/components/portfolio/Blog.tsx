import { SectionHeader } from "./SectionHeader";
import { FadeIn } from "./WordReveal";

const post = {
  title: "Master Engaging Blog Posts: 17 Real Examples to Hook and Retain Readers",
  date: "July 17, 2026",
  readTime: "2 min read",
  category: "Personal",
  excerpt:
    "Your blog's success hinges on the quality of your posts. Low-effort writing won't attract or keep readers. Here are 17 real examples that hook audiences from the first sentence, use vivid storytelling and clear structure, and keep people reading to the end.",
  cover: "https://incblog.fly.dev/uploads/1784247282120-6055321b7f4b725f.webp",
  url: "https://incblog.fly.dev/blog/md-ahmed-alif/master-engaging-blog-posts-17-real-examples-to-hook-and-retain-readers",
};

export function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      <SectionHeader
        index="05"
        eyebrow="Writing"
        title="Notes from the build."
        description="I write about vibe-engineering, AI workflows, and what actually ships. Latest post from IncBlog."
      />
      <FadeIn>
        <a
          href={post.url}
          target="_blank"
          rel="noreferrer"
          className="group grid gap-8 md:grid-cols-[1.05fr_1fr] md:gap-12 items-stretch rounded-2xl border border-border bg-card/40 backdrop-blur p-4 md:p-6 hover:border-accent/60 transition-colors"
        >
          <div className="relative overflow-hidden rounded-xl border border-border aspect-[16/10] md:aspect-auto">
            <img
              src={post.cover}
              alt={post.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col justify-between p-2 md:p-4">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span>{post.category}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
                <span>{post.date}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-5 font-display text-3xl md:text-4xl leading-[1.1] text-foreground group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <span className="inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-background transition-all group-hover:bg-accent group-hover:gap-4">
                Read more at IncBlog
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </div>
        </a>
      </FadeIn>
    </section>
  );
}