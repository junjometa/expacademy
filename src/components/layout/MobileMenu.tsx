"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  LayoutDashboard,
  BookOpen,
  Target,
  Network,
  Wrench,
  BookText,
  BarChart3,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const allNavItems = [
  { href: "/", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/modulos", icon: BookOpen, label: "Módulos" },
  { href: "/desafios", icon: Target, label: "Desafíos" },
  { href: "/ecosistema", icon: Network, label: "Ecosistema" },
  { href: "/arsenal", icon: Wrench, label: "Arsenal" },
  { href: "/glosario", icon: BookText, label: "Glosario" },
  { href: "/progreso", icon: BarChart3, label: "Progreso" },
  { href: "/strategy", icon: FileText, label: "Estrategia" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-bg-primary/95 backdrop-blur-sm lg:hidden"
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-card-hover transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary mb-3">
              <span className="text-xl font-bold font-heading text-white">EA</span>
            </div>
            <h2 className="font-heading font-bold text-xl gradient-text">
              EXP Academy
            </h2>
          </div>

          {/* Nav items */}
          <nav className="px-6 space-y-1">
            {allNavItems.map((item, i) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-4 px-4 py-3.5 rounded-xl text-base transition-colors",
                      active
                        ? "bg-accent-primary/20 text-accent-primary font-medium"
                        : "text-text-secondary hover:text-text-primary hover:bg-bg-card-hover"
                    )}
                  >
                    <Icon size={22} />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
