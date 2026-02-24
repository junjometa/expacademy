"use client";

import React from "react";
import Link from "next/link";
import { Lock, CheckCircle2 } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import type { Module } from "@/data/modules";
import type { ModuleStatus } from "@/hooks/useProgress";

interface ModuleCardProps {
  module: Module;
  status: ModuleStatus;
  percent: number;
}

const Icons = LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>;

export default function ModuleCard({ module, status, percent }: ModuleCardProps) {
  const Icon = Icons[module.icon] || Icons["BookOpen"];
  const isLocked = status === "locked";

  const content = (
    <div
      className={cn(
        "glass-card overflow-hidden transition-all duration-300 group relative",
        isLocked
          ? "opacity-50 cursor-not-allowed"
          : "card-glow hover:-translate-y-1 cursor-pointer"
      )}
    >
      {/* Color strip */}
      <div className={cn("h-1.5 bg-gradient-to-r w-full", module.color)} />

      <div className="p-5">
        {/* Icon + status */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br",
              module.color,
              !isLocked && "shadow-lg"
            )}
          >
            {isLocked ? (
              <Lock size={20} className="text-white/70" />
            ) : (
              <Icon size={20} className="text-white" />
            )}
          </div>
          {status === "completed" && (
            <CheckCircle2 size={22} className="text-success" />
          )}
        </div>

        {/* Text */}
        <h3 className="font-heading font-bold text-sm mb-1 line-clamp-1">
          {module.title}
        </h3>
        <p className="text-xs text-text-secondary line-clamp-2 mb-4">
          {module.subtitle}
        </p>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-text-tertiary">
              {module.lessonsCount} lecciones
            </span>
            <span className="text-text-secondary font-medium">{percent}%</span>
          </div>
          <div className="h-1.5 bg-bg-surface rounded-full overflow-hidden">
            <div
              className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-500", module.color)}
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  if (isLocked) return content;

  return <Link href={`/modulo/${module.id}`}>{content}</Link>;
}
