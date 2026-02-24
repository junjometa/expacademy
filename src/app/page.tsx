"use client";

import React, { useMemo } from "react";
import { getGreeting } from "@/lib/utils";
import { useProgress } from "@/hooks/useProgress";
import { useStreak } from "@/hooks/useStreak";
import { useUser } from "@/components/auth/AuthProvider";
import { modules } from "@/data/modules";
import AppShell from "@/components/layout/AppShell";
import StatsGrid from "@/components/dashboard/StatsGrid";
import ProgressRing from "@/components/dashboard/ProgressRing";
import ContinueCard from "@/components/dashboard/ContinueCard";
import StreakCounter from "@/components/dashboard/StreakCounter";
import DailyChallenge from "@/components/dashboard/DailyChallenge";
import ModuleCard from "@/components/dashboard/ModuleCard";
import InfoCarousel from "@/components/dashboard/InfoCarousel";

export default function DashboardPage() {
  const greeting = getGreeting();
  const { userName } = useUser();
  const { percent, completedLessonsCount, totalLessons, completedModules, totalModules, getModuleStatus, getModulePercent } = useProgress();
  const { totalXP, level, currentStreak } = useStreak();

  const carouselSlides = useMemo(() => [
    {
      title: "Tu Programa",
      text: `11 módulos y 66 lecciones diseñadas para convertirte en Ecosystem Experience Designer. Desde la visión general hasta tu plan de 30 días.`,
    },
    {
      title: "Tu Progreso",
      text: `${completedLessonsCount}/${totalLessons} lecciones completadas (${percent}%). ${completedModules}/${totalModules} módulos. Nivel ${level} con ${totalXP} XP. Racha: ${currentStreak} días.`,
    },
    {
      title: "El Ecosistema",
      text: "5 productos (Risk Engine, RugPull News, Scanners, Commerce, Academy) + 2 Diamonds (Identity, Commerce) que tú conectas con diseño.",
    },
    {
      title: "Tu Misión",
      text: "Traducir complejidad técnica en experiencias que los usuarios amen. Diseñar la coherencia visual y funcional de todo el ecosistema.",
    },
  ], [completedLessonsCount, totalLessons, percent, completedModules, totalModules, level, totalXP, currentStreak]);

  return (
    <AppShell>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-heading font-bold mb-1">
          {greeting}, <span className="gradient-text">{userName}</span>
        </h1>
        <p className="text-text-secondary text-sm">
          Tu progreso en Ecosystem Experience Design
        </p>
      </div>

      {/* Stats Grid */}
      <StatsGrid />

      {/* Middle section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Progress ring */}
        <div className="glass-card p-6 flex flex-col items-center justify-center">
          <p className="text-xs text-text-tertiary mb-4 font-medium uppercase tracking-wider">
            Progreso general
          </p>
          <ProgressRing percent={percent} />
        </div>

        {/* Continue card + streak */}
        <div className="space-y-4">
          <ContinueCard />
          <StreakCounter />
        </div>

        {/* Daily challenge */}
        <div>
          <DailyChallenge />
        </div>
      </div>

      {/* InfoCarousel */}
      <div className="mt-8">
        <InfoCarousel slides={carouselSlides} />
      </div>

      {/* Modules grid */}
      <div className="mt-12">
        <h2 className="text-xl font-heading font-bold mb-6">Tu Programa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {modules.map((mod) => (
            <ModuleCard
              key={mod.id}
              module={mod}
              status={getModuleStatus(mod.id)}
              percent={getModulePercent(mod.id)}
            />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
