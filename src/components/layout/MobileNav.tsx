"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Target, BarChart3, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  onMoreClick: () => void;
}

const navItems = [
  { href: "/", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/modulos", icon: BookOpen, label: "Módulos" },
  { href: "/desafios", icon: Target, label: "Desafíos" },
  { href: "/progreso", icon: BarChart3, label: "Progreso" },
];

export default function MobileNav({ onMoreClick }: MobileNavProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 glass-nav border-t border-border lg:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-colors min-w-[56px]",
                active ? "text-accent-primary" : "text-text-tertiary"
              )}
            >
              <Icon size={20} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
        <button
          onClick={onMoreClick}
          className="flex flex-col items-center gap-1 px-3 py-1 rounded-lg text-text-tertiary transition-colors min-w-[56px]"
        >
          <MoreHorizontal size={20} />
          <span className="text-[10px] font-medium">Más</span>
        </button>
      </div>
    </nav>
  );
}
