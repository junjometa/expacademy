"use client";

import React, { useState } from "react";
import {
  Wrench, Search, Palette, Sparkles, Megaphone, ClipboardList,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import AppShell from "@/components/layout/AppShell";
import InfoCarousel from "@/components/dashboard/InfoCarousel";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════ */

interface Tool {
  title: string;
  description: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  tools: Tool[];
}

const CATEGORIES: Category[] = [
  {
    id: "ux",
    label: "UX & Research",
    icon: <Search size={18} />,
    color: "text-cyan-400",
    tools: [
      { title: "Jobs To Be Done Framework", description: "Template para definir los 'trabajos' que tus usuarios necesitan completar. Incluye estructura: Cuando [situación], quiero [motivación], para poder [resultado esperado]." },
      { title: "User Journey Mapping Template", description: "Plantilla de 5 fases (Descubrimiento → Registro → Primer uso → Retención → Expansión) con columnas para acciones, emociones, touchpoints y oportunidades." },
      { title: "5-Second Test Protocol", description: "Protocolo paso a paso para tests de primera impresión: preparación, ejecución, preguntas clave y análisis de resultados. Ideal para validar landing pages y pantallas principales." },
      { title: "Guerrilla Testing Checklist", description: "Lista de verificación para tests de usabilidad rápidos y sin presupuesto: qué preparar, cómo reclutar, qué preguntar y cómo documentar hallazgos en 30 minutos." },
      { title: "Heuristic Evaluation Template (Nielsen's 10)", description: "Plantilla con las 10 heurísticas de Nielsen adaptadas al ecosistema crypto: visibilidad, consistencia, prevención de errores, reconocimiento, flexibilidad y más." },
    ],
  },
  {
    id: "design",
    label: "Design",
    icon: <Palette size={18} />,
    color: "text-pink-400",
    tools: [
      { title: "Design System Starter Kit", description: "Estructura base para un design system: tokens (color, tipografía, spacing, radii), componentes core (Button, Input, Card, Modal, Badge), y documentación de uso." },
      { title: "Color Token Generator", description: "Guía para crear tu paleta de tokens: base compartida + accents por producto. Incluye nomenclatura (--color-primary, --color-surface) y reglas de contraste WCAG." },
      { title: "Component Anatomy Guide", description: "Anatomía visual de los componentes más usados: Button (container, label, icon, states), Card (header, body, footer, hover), Input (label, field, helper, error)." },
      { title: "Responsive Design Checklist", description: "Checklist de 15 puntos para validar diseño responsive: breakpoints (375, 768, 1024, 1280), touch targets (44px min), tipografía fluida y layout adaptativo." },
      { title: "Accessibility Checklist (WCAG basics)", description: "20 puntos esenciales de accesibilidad: contraste 4.5:1, focus visible, alt text, semántica HTML, navegación por teclado y screen reader compatibility." },
    ],
  },
  {
    id: "ia",
    label: "IA & Productividad",
    icon: <Sparkles size={18} />,
    color: "text-violet-400",
    tools: [
      { title: "20 Prompts para Research UX", description: "Prompts listos para usar con Claude/ChatGPT: análisis competitivo, generación de personas, síntesis de entrevistas, identificación de pain points y mapeo de oportunidades." },
      { title: "15 Prompts para Copy de UI", description: "Prompts para generar microcopy: botones CTA, mensajes de error, empty states, onboarding, tooltips, notificaciones push y emails transaccionales." },
      { title: "10 Prompts para Análisis Competitivo", description: "Prompts que extraen insights de competidores: puntos fuertes de UX, debilidades, oportunidades de diferenciación, patrones de diseño y benchmarks." },
      { title: "Template de Brand Voice Guide", description: "Estructura para definir la voz del ecosistema: personalidad (adjetivos), tono por contexto, vocabulario preferido, vocabulario prohibido y ejemplos de bien/mal." },
      { title: "Workflow de 1 Hora con IA", description: "Flujo completo en 60 minutos: Research (15 min) → Ideación (10 min) → Copy (10 min) → Visual (15 min) → Revisión (10 min). Con prompts específicos para cada fase." },
    ],
  },
  {
    id: "comm",
    label: "Comunicación",
    icon: <Megaphone size={18} />,
    color: "text-amber-400",
    tools: [
      { title: "Twitter Template Pack", description: "5 formatos de tweet para crypto: Hilo educativo, Alerta de seguridad, Resultado de scan, Anuncio de feature y Tip rápido. Con estructura y ejemplos." },
      { title: "Landing Page Structure", description: "Estructura de 7 secciones para landing pages del ecosistema: Hero + Trust + Problem + Solution + Social Proof + CTA + FAQ. Con copy guidelines por sección." },
      { title: "NFT Art Direction Guide", description: "Guía visual para badges, certificados y dNFTs: estilos por nivel, paleta de colores, tipografía, elementos decorativos y especificaciones técnicas de mint." },
      { title: "OG Image Template Specs", description: "Especificaciones para Open Graph images: dimensiones (1200×630), safe zones, tipografía legible a 100px, contraste mínimo y templates por tipo de contenido." },
      { title: "Email Templates (Welcome, Digest, Re-engagement)", description: "3 templates de email: Bienvenida (onboarding en 3 pasos), Digest semanal (highlights + challenges) y Re-engagement (vuelta tras inactividad)." },
    ],
  },
  {
    id: "process",
    label: "Procesos",
    icon: <ClipboardList size={18} />,
    color: "text-emerald-400",
    tools: [
      { title: "Brief de Diseño Template", description: "Template de brief en 8 secciones: Contexto, Problema, Objetivo, Usuarios, Restricciones, Entregables, Timeline y Criterios de éxito. Listo para llenar." },
      { title: "DDR (Design Decision Record) Template", description: "Formato para documentar decisiones: Fecha, Decisión, Contexto, Opciones consideradas, Decisión final, Razones y Consecuencias esperadas." },
      { title: "ICE Prioritization Spreadsheet", description: "Estructura de priorización ICE: Impact (1-10) × Confidence (1-10) × Ease (1-10) = Score. Con instrucciones para puntuar cada dimensión." },
      { title: "Roadmap de 30 Días Template", description: "Template de roadmap: Semana 1 (Research + Quick wins) → Semana 2 (Diseño core) → Semana 3 (Iteración) → Semana 4 (Polish + Presentación)." },
      { title: "Proposal Format (1-page)", description: "Formato de propuesta en una página: Problema (2 líneas) → Evidencia (datos) → Solución propuesta → Impacto esperado → Esfuerzo estimado → Next steps." },
    ],
  },
];

const CAROUSEL_SLIDES = [
  { title: "UX Research Tools", text: "Frameworks probados para investigar usuarios: Jobs To Be Done, Journey Mapping, 5-Second Test, Guerrilla Testing y Evaluación Heurística. Todo adaptado al ecosistema crypto." },
  { title: "Design System Starter", text: "Tokens de diseño (color, tipografía, spacing) + componentes core (Button, Card, Input, Modal, Badge). La base para mantener coherencia visual en los 5 productos." },
  { title: "IA Prompts Library", text: "45+ prompts listos para usar: 20 para research UX, 15 para copy de UI, 10 para análisis competitivo. Más un workflow completo de 1 hora con IA." },
];

/* ═══════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════ */

export default function ArsenalPage() {
  const [activeCategory, setActiveCategory] = useState("ux");

  const current = CATEGORIES.find((c) => c.id === activeCategory) ?? CATEGORIES[0];

  return (
    <AppShell>
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-heading font-bold mb-1">Arsenal</h1>
        <p className="text-text-secondary text-sm">
          Herramientas, templates y recursos para tu trabajo como Experience Designer
        </p>
      </div>

      {/* InfoCarousel */}
      <div className="mb-8">
        <InfoCarousel slides={CAROUSEL_SLIDES} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold font-heading text-accent-primary">25</p>
          <p className="text-xs text-text-tertiary">Herramientas</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold font-heading text-accent-secondary">5</p>
          <p className="text-xs text-text-tertiary">Categorías</p>
        </div>
        <div className="glass-card p-4 text-center">
          <Wrench size={20} className="text-emerald-400 mx-auto mb-1" />
          <p className="text-xs text-text-tertiary">Listas para usar</p>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap shrink-0",
              activeCategory === cat.id
                ? "bg-gradient-to-r from-accent-primary to-accent-secondary text-white"
                : "glass-card text-text-tertiary hover:text-text-primary"
            )}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tools grid */}
      <div className="space-y-3">
        {current.tools.map((tool, i) => (
          <motion.div
            key={tool.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="glass-card p-5"
          >
            <div className="flex items-start gap-3">
              <div className={cn("w-8 h-8 rounded-lg bg-bg-surface/80 flex items-center justify-center shrink-0", current.color)}>
                <ExternalLink size={14} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm mb-1">{tool.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{tool.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AppShell>
  );
}
