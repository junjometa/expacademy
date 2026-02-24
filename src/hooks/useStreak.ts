"use client";

import { useState, useCallback, useEffect } from "react";
import { getStorage, setStorage, STORAGE_KEYS } from "@/lib/storage";

interface StreakState {
  currentStreak: number;
  bestStreak: number;
  totalXP: number;
  lastActiveDate: string | null;
}

const XP_PER_LEVEL = 500;

const defaultStreak: StreakState = {
  currentStreak: 0,
  bestStreak: 0,
  totalXP: 0,
  lastActiveDate: null,
};

function todayStr(): string {
  return new Date().toISOString().split("T")[0];
}

function yesterdayStr(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
}

export function useStreak() {
  const [streak, setStreak] = useState<StreakState>(defaultStreak);

  useEffect(() => {
    const stored = getStorage<StreakState>(STORAGE_KEYS.STREAK, defaultStreak);
    // Check if streak is still valid
    const today = todayStr();
    const yesterday = yesterdayStr();

    if (
      stored.lastActiveDate !== today &&
      stored.lastActiveDate !== yesterday
    ) {
      // Streak broken
      const updated = { ...stored, currentStreak: 0 };
      setStreak(updated);
      setStorage(STORAGE_KEYS.STREAK, updated);
    } else {
      setStreak(stored);
    }
  }, []);

  const save = useCallback((next: StreakState) => {
    setStreak(next);
    setStorage(STORAGE_KEYS.STREAK, next);
    window.dispatchEvent(new CustomEvent("xp-updated", { detail: next }));
  }, []);

  const addXP = useCallback(
    (amount: number) => {
      const today = todayStr();
      const isNewDay = streak.lastActiveDate !== today;

      const newStreak = isNewDay ? streak.currentStreak + 1 : streak.currentStreak;
      const newBest = Math.max(newStreak, streak.bestStreak);

      const next: StreakState = {
        currentStreak: newStreak,
        bestStreak: newBest,
        totalXP: streak.totalXP + amount,
        lastActiveDate: today,
      };
      save(next);
    },
    [streak, save]
  );

  const level = Math.floor(streak.totalXP / XP_PER_LEVEL);

  // Listen for external XP updates
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<StreakState>).detail;
      setStreak(detail);
    };
    window.addEventListener("xp-updated", handler);
    return () => window.removeEventListener("xp-updated", handler);
  }, []);

  return {
    currentStreak: streak.currentStreak,
    bestStreak: streak.bestStreak,
    totalXP: streak.totalXP,
    level,
    addXP,
  };
}
