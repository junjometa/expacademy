"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Slide {
  title: string;
  text: string;
}

interface InfoCarouselProps {
  slides: Slide[];
  autoPlayMs?: number;
}

export default function InfoCarousel({ slides, autoPlayMs = 5000 }: InfoCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goTo = useCallback((idx: number, dir: number) => {
    setDirection(dir);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, slides.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, slides.length, goTo]);

  useEffect(() => {
    const t = setInterval(next, autoPlayMs);
    return () => clearInterval(t);
  }, [next, autoPlayMs]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) next();
    else if (diff < -50) prev();
  }, [next, prev]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <div
      className="glass-card p-5 relative overflow-hidden min-h-[100px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25 }}
          className="px-6"
        >
          <p className="text-xs font-semibold text-accent-secondary uppercase tracking-wider mb-1.5">
            {slides[current].title}
          </p>
          <p className="text-sm text-text-secondary leading-relaxed">
            {slides[current].text}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-1.5 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === current ? "bg-accent-secondary w-4" : "bg-text-tertiary/30 w-1.5"
            )}
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-1 top-1/2 -translate-y-1/2 p-1 rounded-lg text-text-tertiary hover:text-text-primary transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        className="absolute right-1 top-1/2 -translate-y-1/2 p-1 rounded-lg text-text-tertiary hover:text-text-primary transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
