"use client";

import React from "react";
import { Flame } from "lucide-react";
import { useStreak } from "@/hooks/useStreak";

export default function StreakCounter() {
  const { currentStreak, bestStreak } = useStreak();

  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-error/20 flex items-center justify-center">
          <Flame
            size={22}
            className={`text-error ${currentStreak > 0 ? "animate-fire" : ""}`}
          />
        </div>
        <div>
          <p className="text-xs text-text-tertiary">Racha actual</p>
          <p className="text-2xl font-bold font-heading">
            {currentStreak} <span className="text-sm font-normal text-text-secondary">días</span>
          </p>
        </div>
      </div>
      <p className="text-xs text-text-tertiary">
        Mejor racha: <span className="text-text-secondary font-medium">{bestStreak} días</span>
      </p>
    </div>
  );
}
