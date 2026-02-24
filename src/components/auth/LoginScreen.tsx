"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";

interface LoginScreenProps {
  onLogin: (password: string) => Promise<boolean>;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim() || loading) return;

    setLoading(true);
    setError(false);

    const success = await onLogin(password);
    if (!success) {
      setError(true);
      setLoading(false);
      setTimeout(() => setError(false), 800);
    }
  };

  const stagger = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.5, ease: "easeOut" as const },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary relative overflow-hidden">
      {/* Aurora orbs — more visible on login */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent-primary/[0.08] rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent-secondary/[0.08] rounded-full blur-[140px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-500/[0.05] rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo */}
        <motion.div
          {...stagger(0)}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-primary via-accent-secondary to-pink-500 mb-6 glow-purple"
          >
            <span className="text-3xl font-black font-heading text-white">EA</span>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          {...stagger(0.3)}
          className="text-4xl font-black font-heading text-center mb-2"
          style={{
            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary), #EC4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          EXP Academy
        </motion.h1>

        {/* Subtitle — Instrument Serif italic */}
        <motion.p
          {...stagger(0.5)}
          className="text-center font-accent italic text-text-secondary text-lg mb-1"
        >
          Ecosystem Experience Design Program
        </motion.p>

        {/* Tagline */}
        <motion.p
          {...stagger(0.6)}
          className="text-center text-text-tertiary text-sm mb-10"
        >
          Diseña el futuro de Web3
        </motion.p>

        {/* Login form */}
        <motion.form
          {...stagger(0.7)}
          onSubmit={handleSubmit}
        >
          <div
            className={`relative transition-all ${
              error ? "animate-shake" : ""
            }`}
          >
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary">
              <Lock size={18} />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña de acceso"
              className={`w-full pl-12 pr-4 py-4 glass-input text-text-primary placeholder:text-text-tertiary text-sm focus:outline-none transition-all ${
                error
                  ? "border-error shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                  : "focus:border-accent-primary focus:shadow-[0_0_15px_rgba(139,92,246,0.15)]"
              }`}
              autoFocus
            />
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-error text-xs mt-2 ml-1"
            >
              Contraseña incorrecta
            </motion.p>
          )}

          <motion.button
            {...stagger(0.9)}
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold font-heading text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Entrar
                <ArrowRight size={18} />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
