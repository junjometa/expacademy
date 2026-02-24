"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Menu, Bell, BellOff, LogOut, Star } from "lucide-react";
import { useStreak } from "@/hooks/useStreak";
import { useNotifications } from "@/components/notifications/NotificationProvider";
import { useAuth } from "@/components/auth/AuthProvider";
import { cn } from "@/lib/utils";

interface TopBarProps {
  onMenuToggle: () => void;
}

const pageNames: Record<string, string> = {
  "/": "Dashboard",
  "/modulos": "Módulos",
  "/desafios": "Desafíos",
  "/ecosistema": "Ecosistema",
  "/arsenal": "Arsenal",
  "/glosario": "Glosario",
  "/progreso": "Progreso",
  "/strategy": "Estrategia",
};

function getPageName(pathname: string): string {
  if (pageNames[pathname]) return pageNames[pathname];
  if (pathname.startsWith("/modulo/")) {
    if (pathname.includes("/leccion/")) return "Lección";
    return "Módulo";
  }
  return "EXP Academy";
}

export default function TopBar({ onMenuToggle }: TopBarProps) {
  const pathname = usePathname();
  const { totalXP, level } = useStreak();
  const { notificationsEnabled, toggleNotifications } = useNotifications();
  const { logout } = useAuth();

  const pageName = getPageName(pathname);

  return (
    <header className="h-16 glass-nav sticky top-0 z-30 flex items-center justify-between px-4 lg:px-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-card-hover transition-colors"
        >
          <Menu size={22} />
        </button>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-text-tertiary hidden sm:inline">EXP Academy</span>
          <span className="text-text-tertiary hidden sm:inline">/</span>
          <span className="font-medium text-text-primary">{pageName}</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Notification toggle */}
        <button
          onClick={toggleNotifications}
          className={cn(
            "p-2 rounded-lg transition-colors",
            notificationsEnabled
              ? "text-accent-primary hover:bg-accent-primary/10"
              : "text-text-tertiary hover:bg-bg-card-hover"
          )}
          title={notificationsEnabled ? "Notificaciones ON" : "Notificaciones OFF"}
        >
          {notificationsEnabled ? (
            <Bell size={20} className="animate-shake" />
          ) : (
            <BellOff size={20} />
          )}
        </button>

        {/* XP counter */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-card text-sm">
          <Star size={16} className="text-warning fill-warning" />
          <span className="font-medium">{totalXP} XP</span>
        </div>

        {/* Level badge */}
        <div className="px-3 py-1.5 rounded-lg bg-accent-primary/20 text-accent-primary text-sm font-semibold">
          Nv. {level}
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="p-2 rounded-lg text-text-tertiary hover:text-error hover:bg-error/10 transition-colors"
          title="Cerrar sesión"
        >
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
}
