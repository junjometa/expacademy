"use client";

import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Lock, Clock, Quote } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { modules } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import AppShell from "@/components/layout/AppShell";
import { cn } from "@/lib/utils";

const Icons = LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>;

export default function ModuleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const moduleId = Number(params.id);
  const mod = modules.find((m) => m.id === moduleId);
  const { completedLessons, getModuleStatus, getModulePercent } = useProgress();

  if (!mod) {
    return (
      <AppShell>
        <div className="text-center py-20">
          <p className="text-text-tertiary">Módulo no encontrado</p>
          <Link href="/modulos" className="text-accent-primary text-sm mt-2 inline-block">
            Volver a módulos
          </Link>
        </div>
      </AppShell>
    );
  }

  const status = getModuleStatus(mod.id);
  const percent = getModulePercent(mod.id);
  const Icon = Icons[mod.icon] || Icons["BookOpen"];

  if (status === "locked") {
    return (
      <AppShell>
        <div className="text-center py-20">
          <Lock size={48} className="text-text-tertiary mx-auto mb-4" />
          <h2 className="font-heading font-bold text-xl mb-2">Módulo bloqueado</h2>
          <p className="text-text-secondary text-sm mb-4">
            Completa el módulo anterior para desbloquear este.
          </p>
          <Link href="/modulos" className="text-accent-primary text-sm">
            Volver a módulos
          </Link>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm mb-6 transition-colors"
      >
        <ArrowLeft size={18} />
        Volver
      </button>

      {/* Module header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 lg:p-8 mb-8"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br", mod.color)}>
            <Icon size={28} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-text-tertiary mb-1">Módulo {mod.id}</p>
            <h1 className="text-xl lg:text-2xl font-heading font-bold">{mod.title}</h1>
            <p className="text-text-secondary text-sm mt-1">{mod.subtitle}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-2 bg-bg-surface rounded-full overflow-hidden">
            <div
              className={cn("h-full rounded-full bg-gradient-to-r transition-all", mod.color)}
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="text-sm font-medium text-text-secondary">{percent}%</span>
        </div>
      </motion.div>

      {/* Quote */}
      {mod.quote && (
        <div className="flex items-start gap-3 mb-8 px-4">
          <Quote size={20} className="text-accent-primary/40 flex-shrink-0 mt-0.5" />
          <p className="italic text-text-secondary text-sm">{mod.quote}</p>
        </div>
      )}

      {/* Lessons list */}
      <div className="space-y-3">
        {mod.lessons.map((lesson, i) => {
          const completed = completedLessons.includes(lesson.id);
          return (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/modulo/${mod.id}/leccion/${lesson.id}`}>
                <div className="glass-card p-4 flex items-center gap-4 card-glow hover:-translate-y-0.5 transition-all cursor-pointer">
                  {/* Number */}
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0",
                      completed
                        ? "bg-success/20 text-success"
                        : "bg-bg-surface text-text-tertiary"
                    )}
                  >
                    {completed ? <CheckCircle2 size={20} /> : i + 1}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="font-heading font-semibold text-sm truncate">
                      {lesson.title}
                    </p>
                    <p className="text-xs text-text-tertiary truncate">
                      {lesson.subtitle}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-1 text-xs text-text-tertiary flex-shrink-0">
                    <Clock size={14} />
                    {lesson.duration}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </AppShell>
  );
}
