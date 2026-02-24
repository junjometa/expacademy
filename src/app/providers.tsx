"use client";

import React from "react";
import AuthProvider from "@/components/auth/AuthProvider";
import NotificationProvider from "@/components/notifications/NotificationProvider";
import CursorGlow from "@/components/effects/CursorGlow";
import LevelUpWatcher from "@/components/effects/LevelUpWatcher";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <NotificationProvider>
        <CursorGlow />
        <LevelUpWatcher />
        {children}
      </NotificationProvider>
    </AuthProvider>
  );
}
