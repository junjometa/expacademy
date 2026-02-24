"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Pin,
  PenLine,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Info,
  Link as LinkIcon,
  Quote,
  Play,
  Network,
} from "lucide-react";
import { getStorage, setStorage, STORAGE_KEYS } from "@/lib/storage";
import type { ContentBlock } from "@/data/lessons/index";

/* ─── Individual Block Components ─────────── */

function ConceptBlock({ block }: { block: ContentBlock }) {
  return (
    <div className="bg-bg-elevated border-l-4 border-l-accent-primary rounded-r-xl p-5">
      <div className="flex items-start gap-3">
        <Pin size={18} className="text-accent-primary mt-0.5 flex-shrink-0" />
        <div>
          {block.title && (
            <h4 className="font-heading font-semibold mb-2">{block.title}</h4>
          )}
          {block.text && (
            <p className="text-text-secondary text-sm leading-[1.75]">{block.text}</p>
          )}
          {block.items && (
            <ul className="mt-3 space-y-1.5">
              {block.items.map((item, i) => (
                <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                  <span className="text-accent-primary mt-1">•</span>
                  <span className="leading-[1.75]">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function ExerciseBlock({ block, lessonId }: { block: ContentBlock; lessonId: string }) {
  const storageKey = `${STORAGE_KEYS.EXERCISES}-${lessonId}-${block.title || "exercise"}`;
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(getStorage<string>(storageKey, ""));
  }, [storageKey]);

  const handleSave = () => {
    setStorage(storageKey, value);
  };

  return (
    <div className="border-l-4 border-l-accent-primary rounded-r-xl bg-bg-card p-5">
      <div className="flex items-center gap-2 mb-3">
        <PenLine size={18} className="text-accent-primary" />
        <span className="text-[10px] font-bold uppercase tracking-wider bg-accent-primary/20 text-accent-primary px-2 py-0.5 rounded">
          Ejercicio
        </span>
      </div>
      {block.title && (
        <h4 className="font-heading font-semibold mb-2">{block.title}</h4>
      )}
      {block.text && (
        <p className="text-text-secondary text-sm mb-3 leading-[1.75]">{block.text}</p>
      )}
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleSave}
        rows={4}
        placeholder="Escribe tu respuesta aquí..."
        className="w-full glass-input p-3 text-sm text-text-primary placeholder:text-text-tertiary resize-none focus:outline-none"
      />
      <div className="flex justify-end mt-2">
        <button
          onClick={handleSave}
          className="text-xs px-3 py-1.5 rounded-lg bg-accent-primary/20 text-accent-primary hover:bg-accent-primary/30 transition-colors"
        >
          Guardar
        </button>
      </div>
    </div>
  );
}

function CheckpointBlock({ block }: { block: ContentBlock }) {
  const [checked, setChecked] = useState<boolean[]>(
    block.items?.map(() => false) || []
  );

  const toggle = (idx: number) => {
    setChecked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <div className="bg-success/5 border border-success/20 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <CheckCircle2 size={18} className="text-success" />
        <h4 className="font-heading font-semibold text-success">
          {block.title || "Checkpoint"}
        </h4>
      </div>
      {block.items && (
        <div className="space-y-2">
          {block.items.map((item, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className="flex items-center gap-3 w-full text-left"
            >
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                  checked[i]
                    ? "bg-success border-success"
                    : "border-text-tertiary"
                }`}
              >
                {checked[i] && <CheckCircle2 size={14} className="text-white" />}
              </div>
              <span className={`text-sm ${checked[i] ? "text-text-primary" : "text-text-secondary"}`}>
                {item}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ExampleBlock({ block }: { block: ContentBlock }) {
  return (
    <div className="space-y-3">
      {block.title && (
        <h4 className="font-heading font-semibold">{block.title}</h4>
      )}
      {block.wrong && (
        <div className="bg-error/5 border border-error/20 rounded-xl p-4">
          <p className="text-xs font-bold uppercase text-error mb-1">Incorrecto</p>
          <p className="text-sm text-text-secondary leading-[1.75]">{block.wrong}</p>
        </div>
      )}
      {block.right && (
        <div className="bg-success/5 border border-success/20 rounded-xl p-4">
          <p className="text-xs font-bold uppercase text-success mb-1">Correcto</p>
          <p className="text-sm text-text-secondary leading-[1.75]">{block.right}</p>
        </div>
      )}
    </div>
  );
}

function CalloutBlock({ block }: { block: ContentBlock }) {
  const config = {
    tip: { icon: Lightbulb, color: "text-success", bg: "bg-success/5", border: "border-success/20" },
    warning: { icon: AlertTriangle, color: "text-warning", bg: "bg-warning/5", border: "border-warning/20" },
    info: { icon: Info, color: "text-accent-secondary", bg: "bg-accent-secondary/5", border: "border-accent-secondary/20" },
  };
  const type = block.calloutType || "info";
  const { icon: Icon, color, bg, border } = config[type];

  return (
    <div className={`${bg} border ${border} rounded-xl p-5`}>
      <div className="flex items-start gap-3">
        <Icon size={18} className={`${color} mt-0.5 flex-shrink-0`} />
        <div>
          {block.title && (
            <h4 className={`font-heading font-semibold ${color} mb-1`}>
              {block.title}
            </h4>
          )}
          {block.text && (
            <p className="text-text-secondary text-sm leading-[1.75]">{block.text}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function ConnectionBlock({ block }: { block: ContentBlock }) {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center gap-2 mb-2">
        <Network size={18} className="text-accent-secondary" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-accent-secondary">
          Conexión Ecosistema
        </span>
      </div>
      {block.title && (
        <h4 className="font-heading font-semibold mb-1">{block.title}</h4>
      )}
      {block.text && (
        <p className="text-text-secondary text-sm leading-[1.75]">{block.text}</p>
      )}
    </div>
  );
}

function QuoteBlock({ block }: { block: ContentBlock }) {
  return (
    <div className="relative py-4 px-6">
      <Quote size={32} className="absolute top-0 left-0 text-accent-primary/20" />
      <p className="italic text-text-secondary pl-4 text-sm leading-[1.75]">
        {block.text}
      </p>
      {block.author && (
        <p className="mt-2 text-xs text-accent-primary font-medium pl-4">
          — {block.author}
        </p>
      )}
    </div>
  );
}

function VideoBlock({ block }: { block: ContentBlock }) {
  return (
    <div className="glass-card p-6 flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-accent-primary/20 flex items-center justify-center flex-shrink-0">
        <Play size={24} className="text-accent-primary" />
      </div>
      <div>
        <p className="font-heading font-semibold text-sm">
          {block.title || "Video"}
        </p>
        {block.text && (
          <p className="text-xs text-text-secondary mt-1">{block.text}</p>
        )}
      </div>
    </div>
  );
}

function ExternalLinkBlock({ block }: { block: ContentBlock }) {
  return (
    <a
      href={block.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card p-4 flex items-center gap-3 card-glow hover:-translate-y-0.5 transition-all"
    >
      <LinkIcon size={18} className="text-accent-secondary flex-shrink-0" />
      <div>
        <p className="text-sm font-medium">{block.label || block.title || "Enlace externo"}</p>
        {block.text && (
          <p className="text-xs text-text-tertiary mt-0.5">{block.text}</p>
        )}
      </div>
    </a>
  );
}

function InfoCalloutBlock({ block }: { block: ContentBlock }) {
  return (
    <div className="bg-accent-primary/5 border border-accent-primary/20 rounded-xl p-5">
      <div className="flex items-start gap-3">
        <Info size={18} className="text-accent-primary mt-0.5 flex-shrink-0" />
        <div>
          {block.title && (
            <h4 className="font-heading font-semibold text-accent-primary mb-1">
              {block.title}
            </h4>
          )}
          {block.text && (
            <p className="text-text-secondary text-sm leading-[1.75]">{block.text}</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Renderer ───────────────────────── */

interface BlockRendererProps {
  blocks: ContentBlock[];
  lessonId: string;
}

export default function BlockRenderer({ blocks, lessonId }: BlockRendererProps) {
  if (!blocks || blocks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-tertiary text-sm">
          El contenido de esta lección estará disponible próximamente.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {blocks.map((block, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
        >
          {block.type === "concept" && <ConceptBlock block={block} />}
          {block.type === "exercise" && <ExerciseBlock block={block} lessonId={lessonId} />}
          {block.type === "checkpoint" && <CheckpointBlock block={block} />}
          {block.type === "example" && <ExampleBlock block={block} />}
          {block.type === "callout" && <CalloutBlock block={block} />}
          {block.type === "connection" && <ConnectionBlock block={block} />}
          {block.type === "quote" && <QuoteBlock block={block} />}
          {block.type === "video" && <VideoBlock block={block} />}
          {block.type === "external-link" && <ExternalLinkBlock block={block} />}
          {block.type === "info-callout" && <InfoCalloutBlock block={block} />}
        </motion.div>
      ))}
    </div>
  );
}
