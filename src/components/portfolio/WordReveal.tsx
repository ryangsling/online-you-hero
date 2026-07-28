import { useEffect, useRef, useState, type ReactNode } from "react";

export function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView, options]);
  return { ref, inView };
}

interface WordRevealProps {
  text: string;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4";
  className?: string;
  delay?: number;
  stagger?: number;
  start?: boolean;
}

export function WordReveal({
  text,
  as: Tag = "p",
  className,
  delay = 0,
  stagger = 35,
  start,
}: WordRevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const active = start ?? inView;
  const words = text.split(/(\s+)/);
  return (
    <Tag ref={ref as never} className={className}>
      {words.map((w, i) => {
        if (/^\s+$/.test(w)) return <span key={i}>{w}</span>;
        return (
          <span key={i} className="inline-block align-baseline pb-[0.15em] pr-[0.05em]">
            <span
              className={`reveal-word ${active ? "reveal-in" : ""}`}
              style={{ transitionDelay: `${delay + (i / 2) * stagger}ms` }}
            >
              {w}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 800ms cubic-bezier(0.2,0.7,0.2,1) ${delay}ms, transform 800ms cubic-bezier(0.2,0.7,0.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}