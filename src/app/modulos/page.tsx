"use client";

import React from "react";
import { modules } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import AppShell from "@/components/layout/AppShell";
import ModuleCard from "@/components/dashboard/ModuleCard";

export default function ModulosPage() {
  const { getModuleStatus, getModulePercent } = useProgress();

  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-heading font-bold mb-1">
          Módulos del Programa
        </h1>
        <p className="text-text-secondary text-sm">
          11 módulos · 66 lecciones · Tu camino como Ecosystem Experience Designer
        </p>
      </div>

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
    </AppShell>
  );
}
