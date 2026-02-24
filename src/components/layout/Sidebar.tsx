"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  Target,
  Network,
  Wrench,
  BookText,
  BarChart3,
  FileText,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navGroups = [
  {
    label: "PRINCIPAL",
    items: [
      { href: "/", icon: LayoutDashboard, label: "Dashboard" },
      { href: "/modulos", icon: BookOpen, label: "Módulos" },
      { href: "/desafios", icon: Target, label: "Desafíos" },
    ],
  },
  {
    label: "RECURSOS",
    items: [
      { href: "/ecosistema", icon: Network, label: "Ecosistema" },
      { href: "/arsenal", icon: Wrench, label: "Arsenal" },
      { href: "/glosario", icon: BookText, label: "Glosario" },
    ],
  },
  {
    label: "AVANCE",
    items: [
      { href: "/progreso", icon: BarChart3, label: "Progreso" },
      { href: "/strategy", icon: FileText, label: "Estrategia" },
    ],
  },
];

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen glass-sidebar z-40 flex flex-col transition-all duration-300 hidden lg:flex",
        collapsed ? "w-[72px]" : "w-[260px]"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center gap-3 px-4 border-b border-border">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold font-heading text-sm">EA</span>
        </div>
        {!collapsed && (
          <span className="font-heading font-bold text-lg gradient-text whitespace-nowrap">
            EXP Academy
          </span>
        )}
      </div>

      {/* Nav groups */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
        {navGroups.map((group) => (
          <div key={group.label}>
            {!collapsed && (
              <p className="text-[10px] font-semibold text-text-tertiary tracking-widest uppercase mb-2 px-3">
                {group.label}
              </p>
            )}
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                      active
                        ? "bg-accent-primary/20 text-accent-primary font-medium"
                        : "text-text-secondary hover:text-text-primary hover:bg-bg-card-hover",
                      collapsed && "justify-center"
                    )}
                    title={collapsed ? item.label : undefined}
                  >
                    <Icon size={20} className="flex-shrink-0" />
                    {!collapsed && <span>{item.label}</span>}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={onToggle}
        className="h-12 flex items-center justify-center border-t border-border text-text-tertiary hover:text-text-primary transition-colors"
      >
        {collapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
      </button>
    </aside>
  );
}
