import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

type HeaderProps = {
  subpage?: boolean;
};

const sectionLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Header({ subpage = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toHref = (hash: string) => (subpage ? `/${hash}` : hash);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-background/70 border-b border-border/60" : ""
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
        <a href={subpage ? "/" : "#top"} className="group inline-flex items-baseline gap-2 text-foreground">
          <span className="font-display text-2xl leading-none transition-transform group-hover:translate-x-0.5">
            Ahmed Alif
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            /ai-native dev
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {sectionLinks.map((l) => (
            <a
              key={l.href}
              href={toHref(l.href)}
              className="relative text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/design"
            className="relative text-muted-foreground hover:text-foreground transition-colors"
          >
            Design
          </Link>
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 text-sm text-foreground"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span
              className={`block h-px w-6 bg-foreground transition-transform ${
                open ? "rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {sectionLinks.map((l) => (
              <a
                key={l.href}
                href={toHref(l.href)}
                onClick={() => setOpen(false)}
                className="text-lg font-display text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/design"
              onClick={() => setOpen(false)}
              className="text-lg font-display text-foreground"
            >
              Design
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
