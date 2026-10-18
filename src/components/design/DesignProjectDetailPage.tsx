import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Header } from "@/components/portfolio/Header";
import { Footer } from "@/components/portfolio/Footer";
import Reveal from "@/components/design/Reveal";
import { designProjects, getDesignProject } from "@/data/designProjects";
import type {
  DesignProject,
  DesignProjectSection,
  DesignProjectVideo,
} from "@/data/designProjects";

export default function DesignProjectDetailPage({ slug }: { slug: string }) {
  const project = getDesignProject(slug);

  if (!project) {
    return (
      <div id="top" className="min-h-screen bg-background text-foreground">
        <Header subpage />
        <main className="mx-auto max-w-[1200px] px-6 pb-24 pt-40 text-center">
          <h1 className="font-display text-5xl">Project not found.</h1>
          <Link
            to="/design"
            className="mt-6 inline-flex items-center gap-2 text-sm text-accent underline-offset-4 hover:underline"
          >
            <ArrowLeft size={14} />
            Back to design projects
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const index = designProjects.findIndex((p) => p.slug === project.slug);
  const next = designProjects[(index + 1) % designProjects.length];
  const productImages = project.gallery.filter((src) => src !== project.cover);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header subpage />
      <main className="pt-32">
        <section className="mx-auto max-w-[1200px] px-6">
          <Link
            to="/design"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            All design projects
          </Link>
          <Reveal>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {project.category} — {project.year}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[1.05] sm:text-7xl">
              {project.title}
            </h1>
          </Reveal>
        </section>

        <section className="mx-auto max-w-[1200px] px-6 pt-12">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border">
              <img src={project.cover} alt={project.title} className="w-full object-cover" />
            </div>
          </Reveal>
          {productImages.length > 0 && (
            <Reveal delay={100}>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {productImages.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${project.title} — image ${i + 1}`}
                    className="w-full rounded-xl border border-border object-cover"
                  />
                ))}
              </div>
            </Reveal>
          )}
        </section>

        <section className="mx-auto grid max-w-[1200px] gap-12 px-6 pb-20 pt-16 md:grid-cols-[1fr_2fr]">
          <Reveal>
            <div className="space-y-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Role
                </p>
                <p className="mt-1 text-sm">{project.role}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Client
                </p>
                <p className="mt-1 text-sm">{project.client}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Year
                </p>
                <p className="mt-1 text-sm">{project.year}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Tools
                </p>
                <p className="mt-1 text-sm">{project.tools}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Brief
              </h2>
              {project.description.split('\n\n').map((para) => (
                <p key={para.slice(0, 40)} className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground first:mt-0">
                  {para}
                </p>
              ))}
            </div>
            {project.deliverables.length > 0 && (
              <div className="mt-12">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  What I made
                </h2>
                <ul className="mt-4 max-w-2xl space-y-3">
                  {project.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-foreground">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.decisions && project.decisions.length > 0 && (
              <div className="mt-12">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Design decisions
                </h2>
                <ul className="mt-4 max-w-2xl space-y-3">
                  {project.decisions.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-foreground">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full border border-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.posts && <PostBreakdown posts={project.posts} />}
            {project.videos && project.videos.length > 0 && (
              <VideoGallery videos={project.videos} />
            )}
            {project.sections && project.sections.length > 0 && (
              <div className="mt-12 space-y-12">
                {project.sections.map((section) => (
                  <Section key={section.heading} section={section} />
                ))}
              </div>
            )}
            {project.details && project.details.length > 0 && (
              <div className="mt-12">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Project details
                </h2>
                <dl className="mt-4 max-w-2xl divide-y divide-border border-y border-border">
                  {project.details.map((detail) => (
                    <div key={detail.label} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr]">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                        {detail.label}
                      </dt>
                      <dd className="text-sm leading-relaxed text-foreground">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </Reveal>
        </section>

        {designProjects.length > 1 && (
          <section className="border-t border-border">
            <div className="mx-auto max-w-[1200px] px-6 py-12">
              <Link
                to="/design/$slug"
                params={{ slug: next.slug }}
                className="group flex items-center justify-between"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Next project
                  </p>
                  <h2 className="mt-2 font-display text-3xl transition-colors group-hover:text-accent">
                    {next.title}
                  </h2>
                </div>
                <ArrowRight
                  size={24}
                  className="text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent"
                />
              </Link>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

function Section({ section }: { section: DesignProjectSection }) {
  return (
    <div>
      <h2 className="font-display text-2xl leading-snug">{section.heading}</h2>
      {section.paragraphs?.map((para) => (
        <p
          key={para.slice(0, 40)}
          className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground"
        >
          {para}
        </p>
      ))}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="mt-4 max-w-2xl space-y-3">
          {section.bullets.map((item) => (
            <li key={item.slice(0, 40)} className="flex items-start gap-3 text-base text-foreground">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {section.table && (
        <div className="mt-6 max-w-2xl overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-card">
                {section.table.headers.map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row[0]} className="border-b border-border last:border-0">
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={`px-4 py-3 align-top ${
                        i === 0 ? 'font-medium text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {i === 1 ? <span className="font-mono text-xs">{cell}</span> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function VideoGallery({ videos }: { videos: DesignProjectVideo[] }) {
  if (videos.length === 0) return null;
  const [featured, ...rest] = videos;

  return (
    <div className="mt-12">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        The videos
      </h2>

      <Reveal>
        <article className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="aspect-video w-full bg-black">
            <YouTubeEmbed id={featured.id} title={featured.title} />
          </div>
          <div className="p-6">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-mono text-xs text-accent">01</span>
              <span className="text-right font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                {featured.category}
              </span>
            </div>
            <h3 className="mt-2 font-display text-2xl leading-snug">{featured.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {featured.description}
            </p>
          </div>
        </article>
      </Reveal>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {rest.map((video, i) => (
          <Reveal key={video.id} delay={i * 60}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/50">
              <div className="aspect-video w-full bg-black">
                <YouTubeEmbed id={video.id} title={video.title} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 2).padStart(2, '0')}
                  </span>
                  <span className="text-right font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    {video.category}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-xl leading-snug">{video.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block h-full w-full cursor-pointer bg-black"
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
        onError={(e) => {
          const img = e.currentTarget;
          if (!img.src.includes('hqdefault.jpg')) {
            img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
          }
        }}
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/90 shadow-lg transition-transform group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-black" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        aria-label={`Watch ${title} on YouTube`}
        className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors hover:bg-black/80"
      >
        Watch on YouTube
        <ExternalLink size={11} />
      </a>
    </button>
  );
}

function PostBreakdown({
  posts,
}: {
  posts: DesignProject['posts'];
}) {
  if (!posts || posts.length === 0) return null;
  return (
    <div className="mt-12">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        The posts
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.num} delay={i * 60}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/50">
              {post.image && (
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={`${post.num} — ${post.headline}`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-xs text-accent">{post.num}</span>
                  {post.theme && (
                    <span className="text-right font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      {post.theme}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-display text-xl leading-snug">{post.headline}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {post.supporting}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
