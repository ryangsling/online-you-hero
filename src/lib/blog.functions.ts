import { createServerFn } from "@tanstack/react-start";

export type BlogPost = {
  title: string;
  url: string;
  date: string;
  isoDate: string;
  excerpt: string;
  cover?: string;
  category?: string;
  readTime?: string;
};

const FEED_URL = "https://incblog.fly.dev/blog/md-ahmed-alif/rss.xml";
const ORIGIN = "https://incblog.fly.dev";

function decode(s: string) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/[\u2013\u2014]/g, "-");
}

function pick(block: string, tag: string) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  return m ? decode(m[1]).trim() : "";
}

function formatDate(iso: string) {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function readTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

async function fetchPostMeta(url: string): Promise<{ cover?: string; category?: string; readTime?: string }> {
  try {
    const res = await fetch(url, { headers: { "user-agent": "portfolio-bot" } });
    if (!res.ok) return {};
    const html = await res.text();
    const og = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
    let cover = og?.[1];
    if (cover && cover.startsWith("/")) cover = ORIGIN + cover;
    const cat = html.match(/\/category\/([^"'/]+)["']/i);
    const category = cat ? decodeURIComponent(cat[1]).replace(/-/g, " ") : undefined;
    // Extract article body for accurate word count
    const article = html.match(/<article[\s\S]*?<\/article>/i)?.[0]
      ?? html.match(/<main[\s\S]*?<\/main>/i)?.[0]
      ?? html;
    const text = article.replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const rt = text ? readTime(text) : undefined;
    return { cover, category, readTime: rt };
  } catch {
    return {};
  }
}

export const getBlogPosts = createServerFn({ method: "GET" }).handler(async (): Promise<BlogPost[]> => {
  try {
    const res = await fetch(FEED_URL, { headers: { "user-agent": "portfolio-bot" } });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
    const base = items.slice(0, 6).map((block) => {
      const title = pick(block, "title");
      const url = pick(block, "link");
      const isoDate = pick(block, "pubDate");
      const excerpt = pick(block, "description");
      return {
        title,
        url,
        isoDate,
        date: formatDate(isoDate),
        excerpt,
        readTime: readTime(excerpt),
      } satisfies BlogPost;
    });
    // Enrich the first 3 with cover + category
    const enriched = await Promise.all(
      base.map(async (p, i) => (i < 3 ? { ...p, ...(await fetchPostMeta(p.url)) } : p)),
    );
    return enriched;
  } catch {
    return [];
  }
});