"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on desktop (lg: ≥ 1024px)
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return;

    const el = glowRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const lerp = () => {
      cx += (x - cx) * 0.08;
      cy += (y - cy) * 0.08;
      el.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
      raf = requestAnimationFrame(lerp);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(lerp);

    const handleMQ = (e: MediaQueryListEvent) => {
      if (!e.matches) {
        el.style.display = "none";
        cancelAnimationFrame(raf);
      } else {
        el.style.display = "";
        raf = requestAnimationFrame(lerp);
      }
    };
    mq.addEventListener("change", handleMQ);

    return () => {
      window.removeEventListener("mousemove", onMove);
      mq.removeEventListener("change", handleMQ);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-[1] hidden lg:block"
      style={{
        background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)",
      }}
    />
  );
}
