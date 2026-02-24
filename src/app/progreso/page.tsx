"use client";

import React, { useMemo } from "react";
import { modules } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import { useStreak } from "@/hooks/useStreak";
import AppShell from "@/components/layout/AppShell";
import ProgressRing from "@/components/dashboard/ProgressRing";
import InfoCarousel from "@/components/dashboard/InfoCarousel";
import { cn } from "@/lib/utils";
import {
  BookOpen, Trophy, Zap, Flame, Star, Clock,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════ */

const CAROUSEL_SLIDES = [
  { title: "Tu Progreso Importa", text: "Cada lección completada te acerca a ser la Experience Designer que el ecosistema necesita. No se trata de velocidad — se trata de constancia." },
  { title: "La Constancia Gana", text: "La constancia gana al talento. Los mejores diseñadores no son los más rápidos — son los que no se detienen. Sigue adelante." },
  { title: "Mira Hacia Atrás", text: "Cuando mires atrás, no vas a creer lo lejos que llegaste. Cada módulo completado es un escalón hacia tu mejor versión profesional." },
];

/* ═══════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════ */

export default function ProgresoPage() {
  const {
    percent,
    completedLessonsCount,
    totalLessons,
    completedModules,
    totalModules,
    getModulePercent,
    completedLessons,
  } = useProgress();
  const { totalXP, level, currentStreak, bestStreak } = useStreak();

  /* Build timeline of recent completions */
  const timeline = useMemo(() => {
    const items: { lessonId: string; moduleTitle: string; lessonTitle: string }[] = [];
    const reversed = [...completedLessons].reverse().slice(0, 10);
    for (const lid of reversed) {
      for (const mod of modules) {
        const les = mod.lessons.find((l) => l.id === lid);
        if (les) {
          items.push({
            lessonId: lid,
            moduleTitle: mod.title,
            lessonTitle: les.title,
          });
          break;
        }
      }
    }
    return items;
  }, [completedLessons]);

  const xpForNextLevel = 500;
  const xpInCurrentLevel = totalXP % xpForNextLevel;
  const xpPercent = (xpInCurrentLevel / xpForNextLevel) * 100;

  return (
    <AppShell>
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-heading font-bold mb-1">Progreso</h1>
        <p className="text-text-secondary text-sm">
          Tu avance detallado en el programa
        </p>
      </div>

      {/* InfoCarousel */}
      <div className="mb-8">
        <InfoCarousel slides={CAROUSEL_SLIDES} />
      </div>

      {/* Overview cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {/* Progress Ring */}
        <div className="glass-card p-6 flex flex-col items-center">
          <ProgressRing percent={percent} />
          <p className="text-sm text-text-secondary mt-4">
            {completedLessonsCount}/{totalLessons} lecciones
          </p>
        </div>

        {/* Stats */}
        <div className="glass-card p-6 space-y-4">
          <h3 className="font-heading font-semibold flex items-center gap-2">
            <Star size={16} className="text-accent-secondary" />
            Estadísticas
          </h3>
          <div className="space-y-3">
            {[
              { label: "Módulos completados", value: `${completedModules}/${totalModules}`, icon: <BookOpen size={14} /> },
              { label: "XP Total", value: totalXP.toLocaleString(), icon: <Zap size={14} /> },
              { label: "Nivel", value: level, icon: <Trophy size={14} /> },
              { label: "Racha actual", value: `${currentStreak} días`, icon: <Flame size={14} /> },
              { label: "Mejor racha", value: `${bestStreak} días`, icon: <Star size={14} /> },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center justify-between text-sm">
                <span className="text-text-secondary flex items-center gap-2">
                  <span className="text-text-tertiary">{stat.icon}</span>
                  {stat.label}
                </span>
                <span className="font-medium">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Level progress */}
        <div className="glass-card p-6">
          <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
            <Trophy size={16} className="text-amber-400" />
            Nivel {level}
          </h3>
          <div className="h-3 bg-bg-surface rounded-full overflow-hidden mb-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${xpPercent}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
            />
          </div>
          <p className="text-xs text-text-tertiary">
            {xpInCurrentLevel}/{xpForNextLevel} XP para nivel {level + 1}
          </p>
          <div className="mt-4 glass-card p-3 bg-bg-surface/30">
            <p className="text-xs text-text-tertiary mb-1">Próximo nivel desbloquea:</p>
            <p className="text-xs text-accent-secondary font-medium">
              {level < 2 ? "Acceso a desafíos semanales" :
               level < 4 ? "Nuevas herramientas en el Arsenal" :
               level < 6 ? "Badges exclusivos" :
               level < 8 ? "Certificado de progreso" :
               "Certificado de graduación NFT"}
            </p>
          </div>
        </div>
      </div>

      {/* Per-module progress */}
      <h2 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
        <BookOpen size={18} className="text-accent-primary" />
        Progreso por módulo
      </h2>
      <div className="space-y-3 mb-10">
        {modules.map((mod, i) => {
          const modPercent = getModulePercent(mod.id);
          const isComplete = modPercent === 100;
          return (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="glass-card p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center text-white text-xs font-bold",
                      mod.color
                    )}
                  >
                    {isComplete ? <CheckCircle2 size={14} /> : mod.id}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{mod.title}</p>
                    <p className="text-xs text-text-tertiary">{mod.subtitle}</p>
                  </div>
                </div>
                <span
                  className={cn(
                    "text-sm font-medium",
                    isComplete ? "text-emerald-400" : "text-text-secondary"
                  )}
                >
                  {modPercent}%
                </span>
              </div>
              <div className="h-1.5 bg-bg-surface rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${modPercent}%` }}
                  transition={{ duration: 0.6, delay: i * 0.04 }}
                  className={cn("h-full rounded-full bg-gradient-to-r", mod.color)}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Timeline */}
      {timeline.length > 0 && (
        <>
          <h2 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
            <Clock size={18} className="text-accent-secondary" />
            Últimas lecciones completadas
          </h2>
          <div className="space-y-2">
            {timeline.map((item, i) => (
              <motion.div
                key={item.lessonId}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-3 flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={12} className="text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{item.lessonTitle}</p>
                  <p className="text-xs text-text-tertiary">{item.moduleTitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {timeline.length === 0 && (
        <div className="glass-card p-8 text-center">
          <BookOpen size={32} className="text-text-tertiary mx-auto mb-3 opacity-50" />
          <p className="text-sm text-text-secondary">
            Aún no has completado ninguna lección. ¡Empieza con el Módulo 1!
          </p>
        </div>
      )}
    </AppShell>
  );
}
