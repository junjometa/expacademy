"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { modules } from "@/data/modules";

export default function ContinueCard() {
  const { completedLessons, getModuleStatus } = useProgress();

  // Find the first available or in-progress module
  const currentModule = modules.find((m) => {
    const status = getModuleStatus(m.id);
    return status === "in-progress" || status === "available";
  });

  if (!currentModule) {
    return (
      <div className="glass-card p-6">
        <div className="flex items-center gap-3 mb-2">
          <PlayCircle size={20} className="text-success" />
          <h3 className="font-heading font-semibold">Programa completo</h3>
        </div>
        <p className="text-sm text-text-secondary">
          Has completado todos los módulos. Revisa tus desafíos pendientes.
        </p>
      </div>
    );
  }

  // Find the first incomplete lesson in this module
  const nextLesson = currentModule.lessons.find(
    (l) => !completedLessons.includes(l.id)
  );

  return (
    <Link href={nextLesson ? `/modulo/${currentModule.id}/leccion/${nextLesson.id}` : `/modulo/${currentModule.id}`}>
      <div className="glass-card p-6 card-glow transition-all hover:-translate-y-0.5 cursor-pointer">
        <div className="flex items-center gap-3 mb-2">
          <PlayCircle size={20} className="text-accent-primary" />
          <h3 className="font-heading font-semibold text-sm">
            Continúa donde lo dejaste
          </h3>
        </div>
        <p className="font-heading font-bold mb-1">{currentModule.title}</p>
        {nextLesson && (
          <p className="text-sm text-text-secondary mb-3">
            {nextLesson.title} — {nextLesson.duration}
          </p>
        )}
        <div className="flex items-center gap-1 text-accent-primary text-sm font-medium">
          Continuar <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
