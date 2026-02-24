"use client";

import { useState, useCallback, useEffect } from "react";
import { getStorage, setStorage, STORAGE_KEYS } from "@/lib/storage";
import { modules } from "@/data/modules";

interface ProgressState {
  completedLessons: string[];
}

const TOTAL_LESSONS = 66;
const TOTAL_MODULES = 11;

const defaultProgress: ProgressState = {
  completedLessons: [],
};

export type ModuleStatus = "locked" | "available" | "in-progress" | "completed";

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(defaultProgress);

  useEffect(() => {
    setProgress(getStorage<ProgressState>(STORAGE_KEYS.PROGRESS, defaultProgress));
  }, []);

  const save = useCallback((next: ProgressState) => {
    setProgress(next);
    setStorage(STORAGE_KEYS.PROGRESS, next);
  }, []);

  const completeLesson = useCallback(
    (lessonId: string) => {
      if (progress.completedLessons.includes(lessonId)) return;
      const next = {
        ...progress,
        completedLessons: [...progress.completedLessons, lessonId],
      };
      save(next);
      window.dispatchEvent(new CustomEvent("lesson-completed", { detail: { lessonId } }));
    },
    [progress, save]
  );

  const getModulePercent = useCallback(
    (moduleId: number): number => {
      const mod = modules.find((m) => m.id === moduleId);
      if (!mod) return 0;
      const completed = mod.lessons.filter((l) =>
        progress.completedLessons.includes(l.id)
      ).length;
      return mod.lessons.length > 0
        ? Math.round((completed / mod.lessons.length) * 100)
        : 0;
    },
    [progress]
  );

  const getModuleStatus = useCallback(
    (moduleId: number): ModuleStatus => {
      // Module 1 is always available
      if (moduleId === 1) {
        const percent = getModulePercent(1);
        if (percent === 100) return "completed";
        if (percent > 0) return "in-progress";
        return "available";
      }

      // Check if previous module is completed (sequential unlock)
      const prevPercent = getModulePercent(moduleId - 1);
      if (prevPercent < 100) return "locked";

      const percent = getModulePercent(moduleId);
      if (percent === 100) return "completed";
      if (percent > 0) return "in-progress";
      return "available";
    },
    [getModulePercent]
  );

  const completedLessonsCount = progress.completedLessons.length;
  const percent = TOTAL_LESSONS > 0
    ? Math.round((completedLessonsCount / TOTAL_LESSONS) * 100)
    : 0;

  const completedModules = modules.filter(
    (m) => getModulePercent(m.id) === 100
  ).length;

  return {
    completedLessons: progress.completedLessons,
    completeLesson,
    getModulePercent,
    getModuleStatus,
    totalLessons: TOTAL_LESSONS,
    completedLessonsCount,
    percent,
    totalModules: TOTAL_MODULES,
    completedModules,
  };
}
