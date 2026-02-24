"use client";

import React from "react";
import AuthProvider from "@/components/auth/AuthProvider";
import NotificationProvider from "@/components/notifications/NotificationProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <NotificationProvider>{children}</NotificationProvider>
    </AuthProvider>
  );
}
