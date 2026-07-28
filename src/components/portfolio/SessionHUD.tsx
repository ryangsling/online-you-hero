import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "Hero" },
  { id: "about", label: "About" },
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
 { id: "blog", label: "Blog" },
  { id: "stack", label: "Toolkit" },
  { id: "contact", label: "Contact" },
];

function useSylhetTime() {
  const [time, setTime] = useState<string>(() => "");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Dhaka",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function SessionHUD() {
  const time = useSylhetTime();
  const [current, setCurrent] = useState("Hero");

  useEffect(() => {
    const els = sections
      .map((s) => ({ label: s.label, el: document.getElementById(s.id) }))
      .filter((s): s is { label: string; el: HTMLElement } => !!s.el);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const match = els.find((e) => e.el === visible.target);
          if (match) setCurrent(match.label);
        }
      },
      { threshold: [0.25, 0.5, 0.75] },
    );
    els.forEach((s) => io.observe(s.el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="hidden md:block fixed bottom-6 left-6 z-40 pointer-events-none">
      <div className="rounded-md border border-border bg-background/80 backdrop-blur-md px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground shadow-sm">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            vibe: shipping
          </span>
          <span className="text-foreground/40">|</span>
          <span>Sylhet {time || "--:--:--"}</span>
          <span className="text-foreground/40">|</span>
          <span className="text-foreground">§ {current}</span>
        </div>
      </div>
    </div>
  );
}