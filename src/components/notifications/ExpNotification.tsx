"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

export type NotificationCategory =
  | "diseño"
  | "ecosistema"
  | "gamificación"
  | "ia"
  | "colaboración"
  | "motivación";

interface ExpNotificationProps {
  id: string;
  message: string;
  category: NotificationCategory;
  onDismiss: (id: string) => void;
}

const categoryConfig: Record<
  NotificationCategory,
  { gradient: string; border: string; label: string }
> = {
  diseño: {
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "border-l-pink-500",
    label: "Diseño UX",
  },
  ecosistema: {
    gradient: "from-violet-500/20 to-indigo-500/20",
    border: "border-l-violet-500",
    label: "Ecosistema",
  },
  gamificación: {
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "border-l-amber-500",
    label: "Gamificación",
  },
  ia: {
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "border-l-cyan-500",
    label: "IA",
  },
  colaboración: {
    gradient: "from-emerald-500/20 to-green-500/20",
    border: "border-l-emerald-500",
    label: "Colaboración",
  },
  motivación: {
    gradient: "from-yellow-500/20 to-amber-400/20",
    border: "border-l-yellow-500",
    label: "Motivación",
  },
};

export default function ExpNotification({
  id,
  message,
  category,
  onDismiss,
}: ExpNotificationProps) {
  const config = categoryConfig[category];
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onDismiss(id), 300);
    }, 8000);
    return () => clearTimeout(timer);
  }, [id, onDismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 80, scale: 0.95 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className={`relative w-[340px] rounded-xl border-l-4 ${config.border} bg-gradient-to-r ${config.gradient} backdrop-blur-xl p-4 shadow-2xl`}
        >
          {/* Close */}
          <button
            onClick={() => {
              setVisible(false);
              setTimeout(() => onDismiss(id), 300);
            }}
            className="absolute top-2 right-2 p-1 rounded-lg text-text-tertiary hover:text-text-primary transition-colors"
          >
            <X size={14} />
          </button>

          {/* Category label */}
          <div className="flex items-center gap-1.5 mb-2">
            <Sparkles size={12} className="text-text-tertiary" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-text-tertiary">
              {config.label}
            </span>
          </div>

          {/* Message */}
          <p className="text-sm text-text-primary leading-relaxed pr-4">
            {message}
          </p>

          {/* Progress bar */}
          <div className="mt-3 h-0.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 8, ease: "linear" }}
              className="h-full bg-white/20 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
