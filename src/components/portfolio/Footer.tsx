export function Footer() {
  return (
    <footer className="mx-auto max-w-[1200px] px-6 pb-28 md:pb-24 pt-6">
      <div className="border-t border-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <div>© {new Date().getFullYear()} Md. Ahmed Alif</div>
        <div className="flex items-center gap-4">
          <a href="#top" className="hover:text-accent transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}