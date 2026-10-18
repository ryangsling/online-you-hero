import { useEffect, useRef } from "react";

export function Cursor() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    document.documentElement.classList.add("has-custom-cursor");

    let x = window.innerWidth * 0.5;
    let y = window.innerHeight * 0.5;
    let tx = x;
    let ty = y;
    let raf = 0;

    if (blobRef.current) {
      blobRef.current.style.opacity = "1";
      blobRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    }

    const loop = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }

      if (Math.abs(tx - x) < 0.1 && Math.abs(ty - y) < 0.1) {
        raf = 0;
        return;
      }

      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (blobRef.current) blobRef.current.style.opacity = "1";
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const isInteractive = (el: Element | null) =>
      !!el?.closest('a, button, input, textarea, select, [role="button"], label, summary');

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) blobRef.current?.classList.add("is-hover");
    };

    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) blobRef.current?.classList.remove("is-hover");
    };

    const onLeaveWindow = () => {
      if (blobRef.current) blobRef.current.style.opacity = "0";
    };

    const onEnterWindow = () => {
      if (blobRef.current) blobRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("mouseleave", onLeaveWindow);
    window.addEventListener("mouseenter", onEnterWindow);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mouseleave", onLeaveWindow);
      window.removeEventListener("mouseenter", onEnterWindow);
      document.documentElement.classList.remove("has-custom-cursor");
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={blobRef} className="cursor-blob" aria-hidden />;
}
