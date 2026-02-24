"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ConfettiEffect from "@/components/dashboard/ConfettiEffect";

interface LevelUpOverlayProps {
  level: number;
}

const LEVEL_REWARDS: Record<number, string> = {
  2: "Acceso a desafíos semanales",
  3: "Nuevas herramientas en el Arsenal",
  4: "Nuevas herramientas en el Arsenal",
  5: "Badges exclusivos desbloqueados",
  6: "Badges exclusivos desbloqueados",
  7: "Certificado de progreso disponible",
  8: "Certificado de progreso disponible",
  9: "Certificado de graduación NFT",
  10: "Maestría total del ecosistema",
};

export default function LevelUpOverlay({ level }: LevelUpOverlayProps) {
  const prevLevelRef = useRef(level);
  const [show, setShow] = useState(false);
  const [displayLevel, setDisplayLevel] = useState(level);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (level > prevLevelRef.current && prevLevelRef.current > 0) {
      setDisplayLevel(level);
      setShow(true);
      setConfetti(true);
      setTimeout(() => setConfetti(false), 3000);

      const autoClose = setTimeout(() => setShow(false), 8000);
      return () => clearTimeout(autoClose);
    }
    prevLevelRef.current = level;
  }, [level]);

  // Also update ref when level changes without triggering overlay
  useEffect(() => {
    prevLevelRef.current = level;
  }, [level]);

  const reward = LEVEL_REWARDS[displayLevel] || "Nuevos logros desbloqueados";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[300] flex items-center justify-center"
          style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
        >
          <ConfettiEffect active={confetti} />

          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" onClick={() => setShow(false)} />

          {/* Content */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative z-10 text-center px-8 py-12"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm tracking-[0.3em] text-accent-secondary font-medium uppercase mb-4"
            >
              NIVEL
            </motion.p>

            <motion.p
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.3, 1], opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
              className="text-8xl font-heading font-black gradient-text leading-none mb-6"
            >
              {displayLevel}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-text-secondary text-sm mb-2"
            >
              Has desbloqueado
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-accent-secondary font-heading font-bold text-lg"
            >
              {reward}
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              onClick={() => setShow(false)}
              className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Continuar
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
