"use client";

import React from "react";
import { BookOpen, Layers, Star, Flame } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { useStreak } from "@/hooks/useStreak";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  borderColor: string;
}

function StatCard({ icon, label, value, borderColor }: StatCardProps) {
  return (
    <div className={`glass-card p-4 border-l-4 ${borderColor}`}>
      <div className="flex items-center gap-3">
        <div className="text-text-secondary">{icon}</div>
        <div>
          <p className="text-xs text-text-tertiary">{label}</p>
          <p className="text-lg font-bold font-heading">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default function StatsGrid() {
  const { completedLessonsCount, totalLessons, completedModules, totalModules } = useProgress();
  const { totalXP, currentStreak } = useStreak();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        icon={<BookOpen size={20} />}
        label="Lecciones"
        value={`${completedLessonsCount}/${totalLessons}`}
        borderColor="border-l-accent-primary"
      />
      <StatCard
        icon={<Layers size={20} />}
        label="Módulos"
        value={`${completedModules}/${totalModules}`}
        borderColor="border-l-accent-secondary"
      />
      <StatCard
        icon={<Star size={20} />}
        label="XP Total"
        value={`${totalXP}`}
        borderColor="border-l-warning"
      />
      <StatCard
        icon={<Flame size={20} />}
        label="Racha"
        value={`${currentStreak} días`}
        borderColor="border-l-error"
      />
    </div>
  );
}
