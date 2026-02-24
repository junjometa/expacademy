"use client";

import React, { useState } from "react";
import {
  Shield, Brain, Newspaper, Search, CreditCard, Diamond,
  GraduationCap, ArrowRight, Network, Layers, Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import AppShell from "@/components/layout/AppShell";
import InfoCarousel from "@/components/dashboard/InfoCarousel";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════ */

interface Product {
  name: string;
  icons: React.ReactNode;
  gradient: string;
  border: string;
  description: string;
  details: string[];
  status: string;
  statusColor: string;
}

const PRODUCTS: Product[] = [
  {
    name: "Risk Intelligence Engine",
    icons: <><Shield size={20} /><Brain size={16} className="ml-[-4px]" /></>,
    gradient: "from-violet-500 to-purple-600",
    border: "border-violet-500/30",
    description: "Motor de análisis que escanea smart contracts en 6+ blockchains. Detecta rugpulls, honeypots y vulnerabilidades antes de que pierdas dinero.",
    details: ["Stack: FastAPI, Celery, PostgreSQL, Redis", "6+ blockchains analizadas", "Análisis de smart contracts en tiempo real", "API REST para consumo de productos"],
    status: "Backend operativo",
    statusColor: "text-emerald-400",
  },
  {
    name: "RugPull News",
    icons: <Newspaper size={20} />,
    gradient: "from-cyan-500 to-blue-600",
    border: "border-cyan-500/30",
    description: "Portal de noticias crypto con 10 agentes IA generando contenido. Artículos, alertas y análisis actualizados constantemente.",
    details: ["10 agentes IA de generación de contenido", "Páginas: Home, Article, Feed, Leaderboard, Profile", "Sistema de engagement con gamificación integrada", "Feed personalizado por intereses"],
    status: "Frontend + Backend operativos",
    statusColor: "text-emerald-400",
  },
  {
    name: "Scanners (MemeScanner + SmartScanner)",
    icons: <><Search size={20} /><Shield size={16} className="ml-[-4px]" /></>,
    gradient: "from-orange-500 to-amber-600",
    border: "border-orange-500/30",
    description: "Herramientas de escaneo: MemeScanner (viral, para todos) + SmartScanner (profesional, análisis profundo con PDF reports).",
    details: ["MemeScanner: escaneo rápido, resultado viral, share social", "SmartScanner: análisis profundo, PDF reports, orientado a B2B", "Consumo directo del Risk Intelligence Engine", "Flujo: pegar dirección → escanear → resultado → compartir"],
    status: "MemeScanner frontend en desarrollo",
    statusColor: "text-amber-400",
  },
  {
    name: "Holding Commerce",
    icons: <><CreditCard size={20} /><Diamond size={16} className="ml-[-4px]" /></>,
    gradient: "from-emerald-500 to-green-600",
    border: "border-emerald-500/30",
    description: "Pagos blockchain multi-tenant con Diamond Proxy. Cupones, referidos, partners y routing de pagos inteligente.",
    details: ["Smart contracts con Diamond Proxy (EIP-2535)", "Sistema de cupones y descuentos", "Programa de referidos multi-nivel", "Red de partners con comisiones automáticas"],
    status: "Smart contracts desplegados en testnet",
    statusColor: "text-amber-400",
  },
  {
    name: "Smart Academy",
    icons: <GraduationCap size={20} />,
    gradient: "from-indigo-500 to-violet-600",
    border: "border-indigo-500/30",
    description: "Educación blockchain gamificada con certificaciones NFT. Aprende, practica y demuestra tus conocimientos on-chain.",
    details: ["Cursos gamificados con XP y badges", "Certificaciones como NFTs verificables", "Learning paths personalizados", "Integración con Identity para tracking de progreso"],
    status: "Arquitectura definida",
    statusColor: "text-text-tertiary",
  },
];

interface DiamondItem {
  name: string;
  gradient: string;
  border: string;
  facets: string[];
  connects: string;
}

const DIAMONDS: DiamondItem[] = [
  {
    name: "Identity Diamond",
    gradient: "from-blue-500 to-indigo-600",
    border: "border-blue-500/30",
    facets: ["User Management", "Gamification Engine", "Content Interaction", "Actions Tracking"],
    connects: "Conecta con todos los productos — es el corazón del ecosistema",
  },
  {
    name: "Commerce Diamond",
    gradient: "from-emerald-500 to-teal-600",
    border: "border-emerald-500/30",
    facets: ["Products & Coupons", "Partners & Referrals", "Payment Routing"],
    connects: "Conecta con todos los productos — procesa todos los pagos",
  },
];

const FLOW_STEPS = [
  { label: "Risk Engine", sub: "genera datos", color: "text-violet-400" },
  { label: "RugPull News", sub: "atrae usuarios", color: "text-cyan-400" },
  { label: "Scanners", sub: "convierte", color: "text-orange-400" },
  { label: "Commerce", sub: "monetiza", color: "text-emerald-400" },
  { label: "Identity", sub: "retiene con rewards", color: "text-blue-400" },
];

const CAROUSEL_SLIDES = [
  { title: "Risk Engine — El Cerebro", text: "Motor de inteligencia que analiza smart contracts en 6+ blockchains. Detecta rugpulls, honeypots y vulnerabilidades. Es el cerebro que alimenta de datos a todo el ecosistema." },
  { title: "RugPull News — La Voz", text: "Portal de noticias crypto con 10 agentes IA generando contenido. Artículos, alertas y análisis que atraen audiencia y educan. Es la voz pública del ecosistema." },
  { title: "Scanners — Las Herramientas", text: "MemeScanner (viral, para todos) + SmartScanner (profesional, PDF reports). Son las herramientas que los usuarios tocan directamente para proteger sus inversiones." },
  { title: "Holding Commerce — La Infraestructura", text: "Pagos blockchain con Diamond Proxy, cupones, referidos y partners. Es la infraestructura financiera que monetiza todo el ecosistema de forma descentralizada." },
  { title: "Smart Academy — La Puerta de Entrada", text: "Educación blockchain gamificada con certificaciones NFT. Es la puerta de entrada para nuevos usuarios que quieren aprender antes de invertir." },
];

/* ═══════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════ */

export default function EcosistemaPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AppShell>
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-heading font-bold mb-1">Ecosistema</h1>
        <p className="text-text-secondary text-sm">
          Mapa visual de los 5 productos, 2 Diamonds y sus conexiones
        </p>
      </div>

      {/* InfoCarousel */}
      <div className="mb-8">
        <InfoCarousel slides={CAROUSEL_SLIDES} />
      </div>

      {/* Diamond Cards */}
      <h2 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
        <Diamond size={18} className="text-accent-primary" />
        Los Dos Diamantes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {DIAMONDS.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={cn("glass-card p-5 border relative overflow-hidden", d.border)}
          >
            <div className={cn("absolute inset-0 opacity-5 bg-gradient-to-br", d.gradient)} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className={cn("w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white", d.gradient)}>
                  <Diamond size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm">{d.name}</h3>
                  <p className="text-xs text-text-tertiary">{d.connects}</p>
                </div>
              </div>
              <div className="space-y-1.5">
                {d.facets.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                    <Layers size={12} className="text-accent-secondary shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Product Cards */}
      <h2 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
        <Network size={18} className="text-accent-secondary" />
        5 Productos
      </h2>
      <div className="space-y-3 mb-8">
        {PRODUCTS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className={cn("glass-card border overflow-hidden transition-all", p.border)}
          >
            <button
              onClick={() => setExpanded(expanded === p.name ? null : p.name)}
              className="w-full p-5 flex items-center gap-4 text-left"
            >
              <div className={cn("w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shrink-0", p.gradient)}>
                {p.icons}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-heading font-bold text-sm">{p.name}</h3>
                  <span className={cn("text-[10px] font-medium", p.statusColor)}>{p.status}</span>
                </div>
                <p className="text-xs text-text-secondary mt-0.5 line-clamp-2">{p.description}</p>
              </div>
              <motion.div
                animate={{ rotate: expanded === p.name ? 90 : 0 }}
                className="text-text-tertiary shrink-0"
              >
                <ArrowRight size={16} />
              </motion.div>
            </button>

            {expanded === p.name && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="px-5 pb-5 border-t border-border/50"
              >
                <div className="pt-4 space-y-2">
                  {p.details.map((d, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                      <Zap size={12} className="text-accent-secondary mt-0.5 shrink-0" />
                      {d}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Connections Flow */}
      <h2 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
        <ArrowRight size={18} className="text-accent-primary" />
        Flujo de Datos
      </h2>
      <div className="glass-card p-6 mb-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {FLOW_STEPS.map((step, i) => (
            <React.Fragment key={step.label}>
              <div className="flex flex-col items-center text-center">
                <span className={cn("text-sm font-heading font-bold", step.color)}>{step.label}</span>
                <span className="text-[10px] text-text-tertiary">{step.sub}</span>
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <ArrowRight size={16} className="text-text-tertiary shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
        <p className="text-xs text-text-tertiary text-center mt-4">
          Cada producto alimenta al siguiente. Identity y Commerce son los Diamonds que conectan todo el ciclo.
        </p>
      </div>

      {/* Key numbers */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold font-heading text-accent-primary">5</p>
          <p className="text-xs text-text-tertiary">Productos</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold font-heading text-accent-secondary">2</p>
          <p className="text-xs text-text-tertiary">Diamonds</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold font-heading text-violet-400">6+</p>
          <p className="text-xs text-text-tertiary">Blockchains</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold font-heading text-emerald-400">1</p>
          <p className="text-xs text-text-tertiary">Identidad unificada</p>
        </div>
      </div>
    </AppShell>
  );
}
