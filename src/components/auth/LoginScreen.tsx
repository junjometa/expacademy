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
      setTimeout(() => setError(false), 600);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="relative z-10 w-full max-w-md px-6"
      >
        {/* Logo */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary mb-6"
          >
            <span className="text-3xl font-bold font-heading text-white">EA</span>
          </motion.div>

          <h1 className="text-3xl font-bold font-heading gradient-text mb-2">
            EXP Academy
          </h1>
          <p className="text-text-secondary text-sm">
            Ecosystem Experience Design
          </p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit}>
          <div className={`relative ${error ? "animate-shake" : ""}`}>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary">
              <Lock size={18} />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña de acceso"
              className={`w-full pl-12 pr-4 py-4 glass-input text-text-primary placeholder:text-text-tertiary text-sm focus:outline-none ${
                error ? "border-error" : ""
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
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
        </form>
      </motion.div>
    </div>
  );
}
