import { useState, type FormEvent } from "react";
import { SectionHeader } from "./SectionHeader";

const projectTypes = [
  "MVP / Prototype",
  "Full product build",
  "Website / landing",
  "Automation / agent",
  "Consulting / audit",
  "Something else",
];

const budgets = [
  "< $1k",
  "$1k - $5k",
  "$5k - $15k",
  "$15k - $50k",
  "$50k +",
  "Let's talk",
];

type Status = "idle" | "submitting" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    email: "",
    projectType: projectTypes[0],
    budget: budgets[1],
    message: "",
  });

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.email || !form.message) return;
    setStatus("submitting");
    const subject = `New project inquiry: ${form.projectType}`;
    const body = `From: ${form.email}\nType: ${form.projectType}\nBudget: ${form.budget}\n\n${form.message}`;
    try {
      window.location.href = `mailto:jamesahsan1371@gmail.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full bg-transparent border-b border-border px-1 py-3 text-lg text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors";

  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      <SectionHeader
        index="06"
        eyebrow="Contact"
        title="Let's build something ridiculous."
        description="Tell me what you want to make. I reply fast."
      />
      <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <div className="space-y-6 text-sm text-muted-foreground">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-2">
              Direct
            </div>
            <a
              href="mailto:jamesahsan1371@gmail.com"
              className="font-display text-2xl text-foreground hover:text-accent transition-colors block"
            >
              jamesahsan1371@gmail.com
            </a>
            <a
              href="tel:+8801747699172"
              className="font-display text-xl text-foreground hover:text-accent transition-colors block mt-2"
            >
              +880 1747 699 172
            </a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-2">
              Elsewhere
            </div>
            <a
              href="https://github.com/ryangsling"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors block"
            >
              github.com/ryangsling ↗
            </a>
            <a
              href="https://linkedin.com/in/alif"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors block mt-1"
            >
              linkedin.com/in/alif ↗
            </a>
          </div>
          <div className="pt-4 text-xs uppercase tracking-[0.2em] text-foreground/50">
            Sylhet, BD · replies within 24h
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-background/60 p-6 md:p-10 shadow-[0_20px_60px_-40px_rgba(20,20,20,0.35)]"
        >
          <div className="space-y-8">
            <div>
              <label className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Your email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@company.com"
                className={inputBase}
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Project type
                </label>
                <select
                  value={form.projectType}
                  onChange={(e) => update("projectType", e.target.value)}
                  className={inputBase + " appearance-none cursor-pointer"}
                >
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Budget
                </label>
                <select
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className={inputBase + " appearance-none cursor-pointer"}
                >
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="What are you building? What do you need?"
                className={inputBase + " resize-none"}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm uppercase tracking-[0.2em] text-background transition-all hover:bg-accent hover:gap-4 disabled:opacity-60"
              >
                {status === "sent" ? "Opening mail..." : "Send inquiry"}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
              {status === "sent" && (
                <span className="text-xs uppercase tracking-[0.2em] text-accent">
                  Draft ready in your mail app
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}