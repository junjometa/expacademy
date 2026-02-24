"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Target, Trophy, Calendar, CheckCircle2, Flame,
  Send, Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import AppShell from "@/components/layout/AppShell";
import ConfettiEffect from "@/components/dashboard/ConfettiEffect";
import { useStreak } from "@/hooks/useStreak";
import { getStorage, setStorage, STORAGE_KEYS } from "@/lib/storage";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════
   30 DESAFÍOS DIARIOS (5-15 min)
   ═══════════════════════════════════════════════ */

const DAILY_CHALLENGES: string[] = [
  "Abre un producto del ecosistema y úsalo como usuario durante 5 minutos. Anota 3 cosas que mejorarías.",
  "Escribe el microcopy para 3 estados de un botón: normal, loading, error.",
  "Busca 3 landing pages de competidores crypto y anota qué hacen bien.",
  "Diseña mentalmente el onboarding ideal de MemeScanner en 4 pasos. Escríbelo.",
  "Genera 5 variaciones de headline para la landing del Risk Engine usando IA.",
  "Identifica 1 pain point en RugPull News y propón una solución en 1 párrafo.",
  "Escribe un tweet promocional para cada producto del ecosistema (5 tweets).",
  "Analiza la tabla de XP del ecosistema. ¿Hay algún desequilibrio? Propón ajustes.",
  "Describe visualmente cómo sería el dNFT de nivel 1, 5 y 10.",
  "Abre 3 apps que uses diario. ¿Qué elemento de gamificación tienen? ¿Qué copiarías?",
  "Escribe el copy de una push notification para cada situación: nuevo artículo, streak en peligro, badge ganado.",
  "Lista 5 métricas que mirarías para saber si el scan flow de MemeScanner funciona.",
  "Diseña (en texto) la pantalla de empty state del perfil de un usuario nuevo.",
  "Escribe un brief de 5 líneas para mejorar la página de pricing de MemeScanner.",
  "Genera con IA 3 user personas diferentes para Smart Academy.",
  "Analiza cómo Duolingo gestiona las rachas. ¿Qué copiarías para el ecosistema?",
  "Escribe el texto de error que ve un usuario cuando Identity API no responde.",
  "Lista los 5 componentes del design system que diseñarías PRIMERO.",
  "Describe el flujo visual de level-up: desde el XP final hasta el cierre de la celebración.",
  "Escribe 3 preguntas para una encuesta de satisfacción post-scan.",
  "Analiza el color accent de cada producto. ¿Son suficientemente diferentes entre sí?",
  "Escribe el onboarding de 3 pantallas para un usuario que nunca usó un scanner crypto.",
  "Busca 2 apps con buen design system público. ¿Qué estructura tienen?",
  "Propón 3 badges nuevos para MemeScanner que no existan aún.",
  "Escribe la descripción de tu rol (Ecosystem Experience Designer) en 3 frases para LinkedIn.",
  "Haz un 5-second test mental: mira la home de RugPull News 5 segundos. ¿Qué recuerdas?",
  "Genera con IA los textos de una landing page completa para Smart Academy.",
  "Lista 3 momentos en el ecosistema donde el usuario podría abandonar. ¿Cómo lo evitas?",
  "Describe el Access Gate ideal: qué ve el usuario bloqueado y qué le motiva a subir de nivel.",
  "Escribe una mini-propuesta de mejora usando el formato: Problema → Evidencia → Solución → Impacto.",
];

/* ═══════════════════════════════════════════════
   12 DESAFÍOS SEMANALES (1-3 horas)
   ═══════════════════════════════════════════════ */

const WEEKLY_CHALLENGES: string[] = [
  "Auditoría visual completa de MemeScanner: screenshots de cada página + 10 mejoras propuestas.",
  "Crea el user journey map completo del novato (Carlos) en 5 fases con emociones y touchpoints.",
  "Diseña los primeros 10 tokens del design system (colores, tipografía, spacing) en texto detallado.",
  "Escribe 5 prompts de IA que usarías esta semana + pruébalos y evalúa los resultados.",
  "Analiza 5 competidores del ecosistema. Para cada uno: 3 puntos fuertes y 3 débiles de UX.",
  "Crea un brief de diseño completo para el Global Portal siguiendo el formato de la lección 10.6.",
  "Diseña el sistema de niveles visual completo: nombre, color, icono y desbloqueos para 10 niveles.",
  "Escribe el brand voice guide del ecosistema: tono, vocabulario, ejemplos de bien y mal.",
  "Plan de testing: diseña 3 tests de usabilidad para 3 flujos diferentes del ecosistema.",
  "Crea un pack de marketing: 5 tweets + 3 headlines de landing + 1 email de bienvenida.",
  "Propuesta formal: identifica el problema más grande del ecosistema y presenta solución con wireframe textual.",
  "Tu roadmap personal de 30 días: semana por semana, qué harás y qué entregarás.",
];

/* ═══════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════ */

function getDayOfYear(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now.getTime() - start.getTime()) / 86400000);
}

function getWeekOfYear(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  return Math.floor((now.getTime() - start.getTime()) / 604800000);
}

function todayStr(): string {
  return new Date().toISOString().split("T")[0];
}

type Completions = Record<string, string>;
type Responses = Record<string, string>;

/* ═══════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════ */

export default function DesafiosPage() {
  const [tab, setTab] = useState<"hoy" | "diarios" | "semanales">("hoy");
  const [completions, setCompletions] = useState<Completions>({});
  const [responses, setResponses] = useState<Responses>({});
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [confetti, setConfetti] = useState(false);
  const { addXP } = useStreak();

  useEffect(() => {
    setCompletions(getStorage<Completions>(STORAGE_KEYS.CHALLENGE_COMPLETIONS, {}));
    setResponses(getStorage<Responses>(STORAGE_KEYS.CHALLENGE_RESPONSES, {}));
  }, []);

  const dailyIndex = useMemo(() => getDayOfYear() % 30, []);
  const weeklyIndex = useMemo(() => getWeekOfYear() % 12, []);

  const dailyCompleted = useMemo(
    () => Object.keys(completions).filter((k) => k.startsWith("daily-")).length,
    [completions]
  );
  const weeklyCompleted = useMemo(
    () => Object.keys(completions).filter((k) => k.startsWith("weekly-")).length,
    [completions]
  );

  const complete = useCallback(
    (key: string, isWeekly: boolean) => {
      const draft = drafts[key];
      if (!draft?.trim()) return;

      const nextC = { ...completions, [key]: todayStr() };
      const nextR = { ...responses, [key]: draft.trim() };

      setCompletions(nextC);
      setResponses(nextR);
      setStorage(STORAGE_KEYS.CHALLENGE_COMPLETIONS, nextC);
      setStorage(STORAGE_KEYS.CHALLENGE_RESPONSES, nextR);

      addXP(isWeekly ? 200 : 50);

      if (isWeekly) {
        setConfetti(true);
        setTimeout(() => setConfetti(false), 3000);
      }
    },
    [completions, responses, drafts, addXP]
  );

  /* Calendar: last 30 days */
  const calendarDays = useMemo(() => {
    const days: { date: string; label: string; has: boolean; isToday: boolean }[] = [];
    const today = todayStr();
    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const ds = d.toISOString().split("T")[0];
      days.push({
        date: ds,
        label: d.getDate().toString(),
        has: Object.values(completions).includes(ds),
        isToday: ds === today,
      });
    }
    return days;
  }, [completions]);

  /* Challenge card */
  const renderChallenge = (key: string, text: string, isWeekly: boolean, idx: number) => {
    const done = !!completions[key];
    const saved = responses[key];

    return (
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.03 }}
        className={cn(
          "glass-card p-5 border-l-4 transition-all",
          done ? "border-l-emerald-500 opacity-80" : isWeekly ? "border-l-amber-500" : "border-l-accent-secondary"
        )}
      >
        <div className="flex items-start gap-3 mb-3">
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0",
            done ? "bg-emerald-500/20 text-emerald-400" : isWeekly ? "bg-amber-500/20 text-amber-400" : "bg-accent-secondary/20 text-accent-secondary"
          )}>
            {done ? <CheckCircle2 size={16} /> : isWeekly ? `S${idx + 1}` : `D${idx + 1}`}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-text-primary leading-relaxed">{text}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className={cn("text-xs font-medium", isWeekly ? "text-amber-400" : "text-accent-secondary")}>
                {isWeekly ? "+200 XP · 1-3 horas" : "+50 XP · 5-15 min"}
              </span>
              {done && (
                <span className="text-xs text-emerald-400">Completado {completions[key]}</span>
              )}
            </div>
          </div>
        </div>

        {done ? (
          <div className="bg-bg-surface/50 rounded-lg p-3 mt-2">
            <p className="text-xs text-text-tertiary mb-1">Tu respuesta:</p>
            <p className="text-sm text-text-secondary whitespace-pre-wrap">{saved}</p>
          </div>
        ) : (
          <div className="mt-2">
            <textarea
              value={drafts[key] || ""}
              onChange={(e) => setDrafts((prev) => ({ ...prev, [key]: e.target.value }))}
              placeholder="Escribe tu respuesta aquí..."
              className="w-full bg-bg-surface/50 border border-border rounded-lg p-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-secondary/50 resize-none min-h-[80px]"
              rows={3}
            />
            <button
              onClick={() => complete(key, isWeekly)}
              disabled={!drafts[key]?.trim()}
              className={cn(
                "mt-2 px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                drafts[key]?.trim()
                  ? "bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:opacity-90"
                  : "bg-bg-surface text-text-tertiary cursor-not-allowed"
              )}
            >
              <Send size={14} />
              Completar desafío
            </button>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <AppShell>
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-heading font-bold mb-1">Desafíos</h1>
        <p className="text-text-secondary text-sm">
          Pon a prueba tus habilidades con desafíos prácticos del ecosistema
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="glass-card p-4 text-center">
          <Target size={20} className="text-accent-secondary mx-auto mb-1" />
          <p className="text-lg font-bold font-heading">{dailyCompleted}/30</p>
          <p className="text-xs text-text-tertiary">Diarios</p>
        </div>
        <div className="glass-card p-4 text-center">
          <Trophy size={20} className="text-amber-400 mx-auto mb-1" />
          <p className="text-lg font-bold font-heading">{weeklyCompleted}/12</p>
          <p className="text-xs text-text-tertiary">Semanales</p>
        </div>
        <div className="glass-card p-4 text-center">
          <Zap size={20} className="text-emerald-400 mx-auto mb-1" />
          <p className="text-lg font-bold font-heading">{dailyCompleted * 50 + weeklyCompleted * 200}</p>
          <p className="text-xs text-text-tertiary">XP ganado</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-bg-surface/50 rounded-xl mb-6">
        {([
          { key: "hoy" as const, label: "Hoy", Icon: Flame },
          { key: "diarios" as const, label: "Diarios (30)", Icon: Target },
          { key: "semanales" as const, label: "Semanales (12)", Icon: Trophy },
        ]).map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={cn(
              "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-sm font-medium transition-all",
              tab === key
                ? "bg-gradient-to-r from-accent-primary to-accent-secondary text-white"
                : "text-text-tertiary hover:text-text-primary"
            )}
          >
            <Icon size={14} />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>

      {/* TAB: Hoy */}
      {tab === "hoy" && (
        <div className="space-y-6 mb-8">
          <div>
            <h2 className="font-heading font-semibold text-sm text-accent-secondary mb-3 flex items-center gap-2">
              <Target size={16} /> Desafío del Día #{dailyIndex + 1}
            </h2>
            {renderChallenge(`daily-${dailyIndex}`, DAILY_CHALLENGES[dailyIndex], false, 0)}
          </div>
          <div>
            <h2 className="font-heading font-semibold text-sm text-amber-400 mb-3 flex items-center gap-2">
              <Trophy size={16} /> Desafío Semanal #{weeklyIndex + 1}
            </h2>
            {renderChallenge(`weekly-${weeklyIndex}`, WEEKLY_CHALLENGES[weeklyIndex], true, 0)}
          </div>
        </div>
      )}

      {/* TAB: Diarios */}
      {tab === "diarios" && (
        <div className="space-y-3 mb-8">
          {DAILY_CHALLENGES.map((text, i) => renderChallenge(`daily-${i}`, text, false, i))}
        </div>
      )}

      {/* TAB: Semanales */}
      {tab === "semanales" && (
        <div className="space-y-3 mb-8">
          {WEEKLY_CHALLENGES.map((text, i) => renderChallenge(`weekly-${i}`, text, true, i))}
        </div>
      )}

      {/* Calendar */}
      <div className="glass-card p-5">
        <h3 className="font-heading font-semibold text-sm mb-4 flex items-center gap-2">
          <Calendar size={16} className="text-accent-secondary" />
          Últimos 30 días
        </h3>
        <div className="grid grid-cols-10 gap-1.5">
          {calendarDays.map((day) => (
            <div
              key={day.date}
              title={`${day.date}${day.has ? " — completado" : ""}`}
              className={cn(
                "aspect-square rounded-sm flex items-center justify-center text-[10px] font-medium transition-all",
                day.has ? "bg-emerald-500/30 text-emerald-300" : "bg-bg-surface/50 text-text-tertiary",
                day.isToday && "ring-1 ring-accent-secondary"
              )}
            >
              {day.label}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-3 text-[10px] text-text-tertiary">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm bg-bg-surface/50" /> Sin actividad
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm bg-emerald-500/30" /> Completado
          </div>
        </div>
      </div>

      <ConfettiEffect active={confetti} />
    </AppShell>
  );
}
