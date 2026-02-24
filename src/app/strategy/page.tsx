"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  FileText, Save, RotateCcw, CheckCircle2, Sparkles,
  Target, AlertTriangle, Zap, Rocket, BarChart3, Bot,
} from "lucide-react";
import { motion } from "framer-motion";
import AppShell from "@/components/layout/AppShell";
import { getStorage, setStorage, STORAGE_KEYS } from "@/lib/storage";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════ */

interface StrategySection {
  id: string;
  question: string;
  placeholder: string;
  icon: React.ReactNode;
  color: string;
  hint: string;
}

const SECTIONS: StrategySection[] = [
  {
    id: "product",
    question: "¿Cuál es el producto que más necesita mejora UX?",
    placeholder: "Ej: MemeScanner — el flujo de escaneo tiene demasiados pasos y el resultado es confuso para usuarios novatos...",
    icon: <Target size={18} />,
    color: "text-violet-400",
    hint: "Piensa en cuál producto genera más fricción para los usuarios. Considera los 5 productos del ecosistema.",
  },
  {
    id: "painpoints",
    question: "¿Cuáles son los 3 mayores pain points que has identificado?",
    placeholder: "1. Los usuarios no entienden los resultados del scan...\n2. El onboarding no explica qué hacer después del registro...\n3. No hay feedback visual cuando se gana XP...",
    icon: <AlertTriangle size={18} />,
    color: "text-amber-400",
    hint: "Sé específica. Cada pain point debe describir el problema, quién lo sufre y cuándo ocurre.",
  },
  {
    id: "quickwins",
    question: "¿Qué quick wins puedes entregar esta semana?",
    placeholder: "- Mejorar los textos de error (2 horas)\n- Rediseñar el empty state del perfil (3 horas)\n- Crear microcopy para los 3 estados del botón de scan (1 hora)...",
    icon: <Zap size={18} />,
    color: "text-emerald-400",
    hint: "Quick wins = mejoras de alto impacto y bajo esfuerzo. Busca cosas que puedas entregar en 1-4 horas.",
  },
  {
    id: "mainproject",
    question: "¿Cuál es tu proyecto principal del mes?",
    placeholder: "Rediseño completo del flujo de escaneo de MemeScanner: desde pegar la dirección hasta compartir el resultado...",
    icon: <Rocket size={18} />,
    color: "text-cyan-400",
    hint: "Elige UN proyecto ambicioso. Debe ser algo que transforme la experiencia de un producto completo.",
  },
  {
    id: "metrics",
    question: "¿Qué métricas vas a medir?",
    placeholder: "- Tiempo de completar un scan (objetivo: <10 segundos)\n- Tasa de share post-scan (objetivo: >15%)\n- D7 retention (objetivo: >25%)...",
    icon: <BarChart3 size={18} />,
    color: "text-pink-400",
    hint: "Define métricas concretas con objetivos numéricos. Si no puedes medirlo, no puedes mejorarlo.",
  },
  {
    id: "aitools",
    question: "¿Qué herramientas de IA vas a usar?",
    placeholder: "- Claude para análisis competitivo y generación de copy\n- Midjourney para exploración visual de badges\n- ChatGPT para user personas y test scripts...",
    icon: <Bot size={18} />,
    color: "text-violet-400",
    hint: "Piensa en qué tareas repetitivas puedes delegar a IA esta semana. Sé específica con los prompts.",
  },
];

interface StrategyDoc {
  answers: Record<string, string>;
  generatedAt: string | null;
  updatedAt: string | null;
}

const DEFAULT_DOC: StrategyDoc = {
  answers: {},
  generatedAt: null,
  updatedAt: null,
};

/* ═══════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════ */

export default function StrategyPage() {
  const [doc, setDoc] = useState<StrategyDoc>(DEFAULT_DOC);
  const [showGenerated, setShowGenerated] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = getStorage<StrategyDoc>(STORAGE_KEYS.STRATEGY_DOC, DEFAULT_DOC);
    setDoc(stored);
    if (stored.generatedAt) setShowGenerated(true);
  }, []);

  const updateAnswer = useCallback((id: string, value: string) => {
    setDoc((prev) => ({
      ...prev,
      answers: { ...prev.answers, [id]: value },
    }));
    setSaved(false);
  }, []);

  const save = useCallback(() => {
    const updated = { ...doc, updatedAt: new Date().toISOString() };
    setDoc(updated);
    setStorage(STORAGE_KEYS.STRATEGY_DOC, updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }, [doc]);

  const generate = useCallback(() => {
    const now = new Date().toISOString();
    const updated = { ...doc, generatedAt: now, updatedAt: now };
    setDoc(updated);
    setStorage(STORAGE_KEYS.STRATEGY_DOC, updated);
    setShowGenerated(true);
  }, [doc]);

  const reset = useCallback(() => {
    setDoc(DEFAULT_DOC);
    setStorage(STORAGE_KEYS.STRATEGY_DOC, DEFAULT_DOC);
    setShowGenerated(false);
  }, []);

  const hasContent = Object.values(doc.answers).some((v) => v?.trim());
  const allFilled = SECTIONS.every((s) => doc.answers[s.id]?.trim());

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  return (
    <AppShell>
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-heading font-bold mb-1">Estrategia</h1>
        <p className="text-text-secondary text-sm">
          Tu documento de estrategia personal como Ecosystem Experience Designer
        </p>
      </div>

      {/* Status bar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="glass-card px-3 py-2 flex items-center gap-2 text-xs">
          <FileText size={14} className="text-accent-secondary" />
          <span className="text-text-secondary">
            {Object.values(doc.answers).filter((v) => v?.trim()).length}/{SECTIONS.length} secciones
          </span>
        </div>
        {doc.updatedAt && (
          <div className="glass-card px-3 py-2 text-xs text-text-tertiary">
            Guardado: {formatDate(doc.updatedAt)}
          </div>
        )}
        <div className="flex-1" />
        <button
          onClick={save}
          disabled={!hasContent}
          className={cn(
            "flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all",
            hasContent
              ? saved
                ? "bg-emerald-500/20 text-emerald-400"
                : "bg-accent-secondary/20 text-accent-secondary hover:bg-accent-secondary/30"
              : "bg-bg-surface text-text-tertiary cursor-not-allowed"
          )}
        >
          {saved ? <CheckCircle2 size={14} /> : <Save size={14} />}
          {saved ? "Guardado" : "Guardar"}
        </button>
        {hasContent && (
          <button
            onClick={reset}
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs text-text-tertiary hover:text-red-400 transition-colors"
          >
            <RotateCcw size={14} />
          </button>
        )}
      </div>

      {/* Form or Generated view */}
      {!showGenerated ? (
        <>
          {/* Form sections */}
          <div className="space-y-4 mb-8">
            {SECTIONS.map((section, i) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="glass-card p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={section.color}>{section.icon}</span>
                  <h3 className="font-heading font-semibold text-sm">
                    {section.question}
                  </h3>
                </div>
                <p className="text-xs text-text-tertiary mb-3">{section.hint}</p>
                <textarea
                  value={doc.answers[section.id] || ""}
                  onChange={(e) => updateAnswer(section.id, e.target.value)}
                  placeholder={section.placeholder}
                  className="w-full bg-bg-surface/50 border border-border rounded-lg p-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-secondary/50 resize-none min-h-[100px]"
                  rows={4}
                />
              </motion.div>
            ))}
          </div>

          {/* Generate button */}
          <button
            onClick={generate}
            disabled={!allFilled}
            className={cn(
              "w-full py-3 rounded-xl text-sm font-heading font-bold transition-all flex items-center justify-center gap-2",
              allFilled
                ? "bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:opacity-90"
                : "bg-bg-surface text-text-tertiary cursor-not-allowed"
            )}
          >
            <Sparkles size={16} />
            Generar Documento de Estrategia
          </button>
          {!allFilled && (
            <p className="text-xs text-text-tertiary text-center mt-2">
              Completa todas las secciones para generar tu documento
            </p>
          )}
        </>
      ) : (
        <>
          {/* Generated document */}
          <div className="glass-card p-6 mb-6 border border-accent-secondary/20">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-accent-secondary" />
              <h2 className="font-heading font-bold text-lg">
                Documento de Estrategia
              </h2>
            </div>
            {doc.generatedAt && (
              <p className="text-xs text-text-tertiary mb-6">
                Generado el {formatDate(doc.generatedAt)}
              </p>
            )}

            <div className="space-y-6">
              {SECTIONS.map((section) => (
                <div key={section.id}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={section.color}>{section.icon}</span>
                    <h3 className="font-heading font-semibold text-sm">
                      {section.question}
                    </h3>
                  </div>
                  <div className="bg-bg-surface/30 rounded-lg p-4 border-l-2 border-accent-secondary/30">
                    <p className="text-sm text-text-secondary whitespace-pre-wrap leading-relaxed">
                      {doc.answers[section.id]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={() => setShowGenerated(false)}
              className="flex-1 py-2.5 rounded-xl text-sm font-medium glass-card text-text-secondary hover:text-text-primary transition-colors text-center"
            >
              Editar respuestas
            </button>
            <button
              onClick={generate}
              className="flex-1 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw size={14} />
              Regenerar
            </button>
          </div>
        </>
      )}
    </AppShell>
  );
}
