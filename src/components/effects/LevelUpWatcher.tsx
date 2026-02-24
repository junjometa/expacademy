"use client";

import { useStreak } from "@/hooks/useStreak";
import LevelUpOverlay from "./LevelUpOverlay";

export default function LevelUpWatcher() {
  const { level } = useStreak();
  return <LevelUpOverlay level={level} />;
}
