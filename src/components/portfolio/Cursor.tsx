import { useEffect, useRef } from "react";

export function Cursor() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    document.documentElement.classList.add("has-custom-cursor");

    let x = 0, y = 0, tx = 0, ty = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const loop = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      if (blobRef.current)
        blobRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      if (Math.abs(tx - x) < 0.1 && Math.abs(ty - y) < 0.1) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(loop);
    };

    const isInteractive = (el: Element | null) =>
      !!el?.closest('a, button, input, textarea, select, [role="button"], label, summary');

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) blobRef.current?.classList.add("is-hover");
    };
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) blobRef.current?.classList.remove("is-hover");
    };
    const onLeave = () => {
      if (blobRef.current) blobRef.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (blobRef.current) blobRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={blobRef} className="cursor-blob" aria-hidden />
  );
}