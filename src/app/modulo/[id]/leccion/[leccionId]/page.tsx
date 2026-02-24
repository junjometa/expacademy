"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { modules } from "@/data/modules";
import { getLessonContent } from "@/data/lessons/index";
import { useProgress } from "@/hooks/useProgress";
import { useStreak } from "@/hooks/useStreak";
import AppShell from "@/components/layout/AppShell";
import BlockRenderer from "@/components/lessons/BlockRenderer";
import ConfettiEffect from "@/components/dashboard/ConfettiEffect";
import ScrollProgress from "@/components/effects/ScrollProgress";

const XP_PER_LESSON = 50;

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const moduleId = Number(params.id);
  const lessonId = params.leccionId as string;

  const mod = modules.find((m) => m.id === moduleId);
  const lesson = mod?.lessons.find((l) => l.id === lessonId);
  const lessonContent = getLessonContent(lessonId);

  const { completedLessons, completeLesson, getModuleStatus } = useProgress();
  const { addXP } = useStreak();
  const [showConfetti, setShowConfetti] = useState(false);

  if (!mod || !lesson) {
    return (
      <AppShell>
        <div className="text-center py-20">
          <p className="text-text-tertiary">Lección no encontrada</p>
          <Link href="/modulos" className="text-accent-primary text-sm mt-2 inline-block">
            Volver a módulos
          </Link>
        </div>
      </AppShell>
    );
  }

  // Check module access
  const status = getModuleStatus(mod.id);
  if (status === "locked") {
    return (
      <AppShell>
        <div className="text-center py-20">
          <p className="text-text-tertiary">Este módulo está bloqueado.</p>
          <Link href="/modulos" className="text-accent-primary text-sm mt-2 inline-block">
            Volver a módulos
          </Link>
        </div>
      </AppShell>
    );
  }

  const isCompleted = completedLessons.includes(lessonId);
  const lessonIndex = mod.lessons.findIndex((l) => l.id === lessonId);
  const prevLesson = lessonIndex > 0 ? mod.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < mod.lessons.length - 1 ? mod.lessons[lessonIndex + 1] : null;

  const handleComplete = () => {
    if (isCompleted) return;
    completeLesson(lessonId);
    addXP(XP_PER_LESSON);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <AppShell>
      <ScrollProgress />
      <ConfettiEffect active={showConfetti} />

      {/* Back nav */}
      <button
        onClick={() => router.push(`/modulo/${mod.id}`)}
        className="flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm mb-6 transition-colors"
      >
        <ArrowLeft size={18} />
        {mod.title}
      </button>

      {/* Lesson header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs text-text-tertiary">
            Módulo {mod.id} · Lección {lessonIndex + 1}
          </span>
          <div className="flex items-center gap-1 text-xs text-text-tertiary">
            <Clock size={12} />
            {lesson.duration}
          </div>
        </div>
        <h1 className="text-xl lg:text-2xl font-heading font-bold mb-1">
          {lesson.title}
        </h1>
        <p className="text-text-secondary text-sm">{lesson.subtitle}</p>
      </motion.div>

      {/* Lesson content */}
      <div className="max-w-3xl">
        <BlockRenderer
          blocks={lessonContent?.blocks || []}
          lessonId={lessonId}
        />
      </div>

      {/* Complete + Navigation */}
      <div className="max-w-3xl mt-10 space-y-4">
        {/* Complete button */}
        {!isCompleted ? (
          <button
            onClick={handleComplete}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <CheckCircle2 size={20} />
            Completar lección (+{XP_PER_LESSON} XP)
          </button>
        ) : (
          <div className="w-full py-4 rounded-xl bg-success/20 text-success font-semibold flex items-center justify-center gap-2">
            <CheckCircle2 size={20} />
            Lección completada
          </div>
        )}

        {/* Nav prev/next */}
        <div className="flex justify-between gap-4">
          {prevLesson ? (
            <Link
              href={`/modulo/${mod.id}/leccion/${prevLesson.id}`}
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm transition-colors"
            >
              <ArrowLeft size={16} />
              {prevLesson.title}
            </Link>
          ) : (
            <div />
          )}
          {nextLesson ? (
            <Link
              href={`/modulo/${mod.id}/leccion/${nextLesson.id}`}
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm transition-colors"
            >
              {nextLesson.title}
              <ArrowRight size={16} />
            </Link>
          ) : (
            <Link
              href={`/modulo/${mod.id}`}
              className="flex items-center gap-2 text-accent-primary text-sm font-medium transition-colors"
            >
              Volver al módulo
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </AppShell>
  );
}
