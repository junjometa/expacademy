"use client";

import React from "react";
import Link from "next/link";
import { Target, ArrowRight } from "lucide-react";

export default function DailyChallenge() {
  return (
    <Link href="/desafios">
      <div className="glass-card p-6 card-glow transition-all hover:-translate-y-0.5 cursor-pointer border-l-4 border-l-accent-secondary">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-accent-secondary/20 flex items-center justify-center">
            <Target size={20} className="text-accent-secondary" />
          </div>
          <div>
            <p className="text-xs text-text-tertiary">Desafío del día</p>
            <p className="font-heading font-semibold text-sm">
              Nuevo desafío disponible
            </p>
          </div>
        </div>
        <p className="text-xs text-text-secondary mb-3">
          Completa los desafíos semanales para ganar XP extra y reforzar tu aprendizaje.
        </p>
        <div className="flex items-center gap-1 text-accent-secondary text-sm font-medium">
          Ver desafíos <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
