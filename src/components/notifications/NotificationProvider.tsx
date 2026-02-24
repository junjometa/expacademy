"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { getStorage, setStorage, STORAGE_KEYS } from "@/lib/storage";
import ExpNotification, { type NotificationCategory } from "./ExpNotification";

/* ─── Types ────────────────────────────────── */

interface MotivationalPhrase {
  message: string;
  category: NotificationCategory;
}

interface ActiveNotification {
  id: string;
  message: string;
  category: NotificationCategory;
}

interface NotificationContextValue {
  notificationsEnabled: boolean;
  toggleNotifications: () => void;
  addNotification: (message: string, category?: NotificationCategory) => void;
}

/* ─── 80+ Motivational Phrases ─────────────── */

const PHRASES: MotivationalPhrase[] = [
  // ── DISEÑO UX (15) ──
  { message: "El usuario no lee — escanea. Diseña para ojos rápidos.", category: "diseño" },
  { message: "Si necesitas explicar tu diseño, tu diseño no funciona.", category: "diseño" },
  { message: "Un buen flujo UX es invisible. El usuario no sabe que está ahí, pero lo siente.", category: "diseño" },
  { message: "Cada click extra es un usuario perdido. Simplifica.", category: "diseño" },
  { message: "El 70% de víctimas de estafas crypto dicen que la interfaz parecía legítima. Tu diseño ES seguridad.", category: "diseño" },
  { message: "No diseñas pantallas — diseñas decisiones del usuario.", category: "diseño" },
  { message: "Un buen design system te ahorra meses de trabajo futuro.", category: "diseño" },
  { message: "Mobile first no es opcional — es donde está el 80% del tráfico crypto.", category: "diseño" },
  { message: "Los estados vacíos son tu oportunidad de onboarding.", category: "diseño" },
  { message: "Un loading spinner sin contexto genera ansiedad. Dile al usuario QUÉ está pasando.", category: "diseño" },
  { message: "La accesibilidad no es un extra — es parte del diseño.", category: "diseño" },
  { message: "Prototipa antes de diseñar. Diseña antes de construir.", category: "diseño" },
  { message: "El feedback visual inmediato (micro-interacciones) es lo que separa apps mediocres de apps premium.", category: "diseño" },
  { message: "Si un usuario de 60 años no puede usarlo, no está bien diseñado.", category: "diseño" },
  { message: "Color no es decoración — es información. Rojo = peligro, verde = seguro. Sé consistente.", category: "diseño" },

  // ── ECOSISTEMA (15) ──
  { message: "5 productos, 1 experiencia. Esa coherencia es tu responsabilidad.", category: "ecosistema" },
  { message: "El Risk Engine genera los datos. Tú decides cómo el usuario los ENTIENDE.", category: "ecosistema" },
  { message: "RugPull News es la puerta de entrada. Si la experiencia es mala ahí, el ecosistema pierde.", category: "ecosistema" },
  { message: "Los Scanners son el hook viral. El flujo Scan→Result→Share debe ser PERFECTO.", category: "ecosistema" },
  { message: "Identity Diamond es el corazón. Un usuario, una identidad, múltiples productos.", category: "ecosistema" },
  { message: "Commerce Diamond procesa el dinero. Tu diseño de checkout puede duplicar las conversiones.", category: "ecosistema" },
  { message: "Smart Academy convierte novatos en expertos. El diseño del learning flow importa más que el contenido.", category: "ecosistema" },
  { message: "El Global Portal es tu canvas más importante — define la primera impresión.", category: "ecosistema" },
  { message: "Cada producto tiene su personalidad visual, pero todos pertenecen a la misma familia.", category: "ecosistema" },
  { message: "Un ecosistema sin coherencia visual es un montón de apps sueltas.", category: "ecosistema" },
  { message: "El flujo cross-producto (News→Scanner→Academy) debe ser INVISIBLE de fluido.", category: "ecosistema" },
  { message: "Piensa en ecosistema, no en productos aislados.", category: "ecosistema" },
  { message: "Los NFTs no son especulación — son identidad y logro del usuario.", category: "ecosistema" },
  { message: "La gamificación bien diseñada retiene. Mal diseñada manipula. Tú decides.", category: "ecosistema" },
  { message: "Tu ecosistema protege el futuro de Web3. Diseña como si importara — porque importa.", category: "ecosistema" },

  // ── GAMIFICACIÓN (15) ──
  { message: "XP es la moneda de atención. Cada acción del usuario debe sentirse recompensada.", category: "gamificación" },
  { message: "Un badge ganado sin emoción es un badge desperdiciado. Diseña la celebración.", category: "gamificación" },
  { message: "Niveles que desbloquean funciones reales > niveles que solo cambian un número.", category: "gamificación" },
  { message: "La racha diaria es el engagement loop más poderoso. Hazlo visible.", category: "gamificación" },
  { message: "No copies Duolingo ciegamente — adapta la gamificación a TU usuario.", category: "gamificación" },
  { message: "+10 XP con animación se siente 10x mejor que +10 XP sin ella.", category: "gamificación" },
  { message: "El leaderboard motiva al top 20% y desmotiva al bottom 80%. Diseña con cuidado.", category: "gamificación" },
  { message: "Los tokens YAI, SCAN y SMART son valor REAL para el usuario. Comunícalo visualmente.", category: "gamificación" },
  { message: "Un sistema de niveles sin beneficios claros es un contador vacío.", category: "gamificación" },
  { message: "Access Gates (funciones por nivel) crean aspiración. Muéstralos al usuario.", category: "gamificación" },
  { message: "El momento de level-up debe ser una CELEBRACIÓN, no una notificación más.", category: "gamificación" },
  { message: "Misiones diarias + racha = el combo que hace que la gente vuelva cada día.", category: "gamificación" },
  { message: "Diseña el journey de gamificación ANTES de los componentes individuales.", category: "gamificación" },
  { message: "La progresión debe sentirse justa. Si el usuario siente grind, has fallado.", category: "gamificación" },
  { message: "NFT badges bien diseñados son el perfil pic que el usuario QUIERE mostrar.", category: "gamificación" },

  // ── INTELIGENCIA ARTIFICIAL (10) ──
  { message: "La IA no reemplaza tu criterio de diseño — amplifica tu velocidad.", category: "ia" },
  { message: "Un buen prompt = un buen brief. Si sabes pedir, la IA entrega.", category: "ia" },
  { message: "Usa IA para explorar, tu criterio para decidir.", category: "ia" },
  { message: "Claude puede analizar 10 competidores en 5 minutos. Tú interpretas los insights.", category: "ia" },
  { message: "Genera 20 variaciones de copy con IA, elige la mejor con tu ojo de diseñadora.", category: "ia" },
  { message: "Midjourney para explorar estilos, Figma para diseñar la realidad.", category: "ia" },
  { message: "La IA es tu junior infinito. Úsala para el trabajo pesado.", category: "ia" },
  { message: "Un mood board con IA se genera en 10 minutos. Sin IA, son 2 horas.", category: "ia" },
  { message: "Automatiza lo repetitivo con IA, invierte tu tiempo en lo creativo.", category: "ia" },
  { message: "La diseñadora que usa IA no es peor — es más rápida y más libre para pensar.", category: "ia" },

  // ── COLABORACIÓN (10) ──
  { message: "Tu founder piensa en código. Tú piensas en usuarios. Los dos tenéis razón.", category: "colaboración" },
  { message: "Un brief de diseño de 5 minutos ahorra 5 horas de iteración.", category: "colaboración" },
  { message: "Feedback productivo: describe el PROBLEMA, no la SOLUCIÓN.", category: "colaboración" },
  { message: "Prioriza por impacto en el usuario, no por lo que es más fácil de diseñar.", category: "colaboración" },
  { message: "Documenta el POR QUÉ de cada decisión de diseño. Tu yo futuro te lo agradecerá.", category: "colaboración" },
  { message: "No esperes que te pidan mejoras — proponlas tú.", category: "colaboración" },
  { message: "El mejor diseño del mundo no sirve si no se puede implementar.", category: "colaboración" },
  { message: "Figma es tu idioma. Git es el idioma de tu founder. Aprende a traducir.", category: "colaboración" },
  { message: "En startup, perfecto es enemigo de publicado. Itera en público.", category: "colaboración" },
  { message: "La empatía con el developer es tan importante como la empatía con el usuario.", category: "colaboración" },

  // ── MOTIVACIÓN PERSONAL (15) ──
  { message: "Estás diseñando el futuro de la seguridad crypto. Eso importa.", category: "motivación" },
  { message: "No a pesar de ser nueva en Web3, SINO PORQUE lo eres — ves lo que otros no ven.", category: "motivación" },
  { message: "Un ecosistema de 5 productos necesita a alguien que conecte los puntos. Esa eres tú.", category: "motivación" },
  { message: "Hace un mes no conocías este ecosistema. Mira lo que sabes ahora.", category: "motivación" },
  { message: "La complejidad técnica no es tu enemiga — es tu materia prima.", category: "motivación" },
  { message: "Cada flujo que mejoras protege a usuarios reales de perder dinero real.", category: "motivación" },
  { message: "Tu ojo de diseñadora detecta problemas que ningún developer vería.", category: "motivación" },
  { message: "La experiencia del usuario es la diferencia entre un buen producto y un producto que nadie usa.", category: "motivación" },
  { message: "Confía en tu criterio. Llevas años diseñando. Esto es un dominio nuevo, no un talento nuevo.", category: "motivación" },
  { message: "El ecosistema sin ti funcionaría. Contigo, brillará.", category: "motivación" },
  { message: "Celebra las pequeñas victorias. Cada flujo mejorado es un win.", category: "motivación" },
  { message: "La mejor diseñadora no es la que sabe más herramientas — es la que entiende mejor al usuario.", category: "motivación" },
  { message: "No necesitas permiso para mejorar las cosas. Proponlo.", category: "motivación" },
  { message: "La curva de aprendizaje es empinada. Pero tú ya estás subiendo.", category: "motivación" },
  { message: "Cuando mires atrás en 6 meses, no vas a creer lo lejos que llegaste.", category: "motivación" },
];

const TIMER_INTERVAL = 120_000; // 120 seconds
const NO_REPEAT_UNTIL = 30;

/* ─── Web Audio Beep ──────────────────────── */

function playBeep() {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 880;
    osc.type = "sine";
    gain.gain.value = 0.08;
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    osc.stop(ctx.currentTime + 0.3);
  } catch {
    // Audio not available
  }
}

/* ─── Context ─────────────────────────────── */

const NotificationContext = createContext<NotificationContextValue>({
  notificationsEnabled: true,
  toggleNotifications: () => {},
  addNotification: () => {},
});

export const useNotifications = () => useContext(NotificationContext);

/* ─── Provider ────────────────────────────── */

export default function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [enabled, setEnabled] = useState(true);
  const [activeNotifications, setActiveNotifications] = useState<ActiveNotification[]>([]);
  const shownIndicesRef = useRef<number[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Load enabled state
  useEffect(() => {
    setEnabled(getStorage<boolean>(STORAGE_KEYS.NOTIFICATIONS_ON, true));
  }, []);

  // Pick a random phrase, no repeat until NO_REPEAT_UNTIL shown
  const pickPhrase = useCallback((): MotivationalPhrase => {
    const shown = shownIndicesRef.current;
    const available = PHRASES.map((_, i) => i).filter((i) => !shown.includes(i));

    // Reset if exhausted
    if (available.length === 0) {
      shownIndicesRef.current = [];
      const idx = Math.floor(Math.random() * PHRASES.length);
      shownIndicesRef.current.push(idx);
      return PHRASES[idx];
    }

    const idx = available[Math.floor(Math.random() * available.length)];
    shownIndicesRef.current.push(idx);

    // Trim history
    if (shownIndicesRef.current.length > NO_REPEAT_UNTIL) {
      shownIndicesRef.current = shownIndicesRef.current.slice(-NO_REPEAT_UNTIL);
    }

    return PHRASES[idx];
  }, []);

  // Show a motivational notification
  const showMotivational = useCallback(() => {
    if (!enabled) return;
    if (typeof document !== "undefined" && document.hidden) return;

    const phrase = pickPhrase();
    const id = Date.now().toString();

    setActiveNotifications((prev) => [
      ...prev,
      { id, message: phrase.message, category: phrase.category },
    ]);

    playBeep();
  }, [enabled, pickPhrase]);

  // Timer management
  useEffect(() => {
    if (enabled) {
      const initialTimeout = setTimeout(showMotivational, 10_000);
      timerRef.current = setInterval(showMotivational, TIMER_INTERVAL);
      return () => {
        clearTimeout(initialTimeout);
        if (timerRef.current) clearInterval(timerRef.current);
      };
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setActiveNotifications([]);
    }
  }, [enabled, showMotivational]);

  // Visibility: pause when tab hidden, resume when visible
  useEffect(() => {
    const handler = () => {
      if (document.hidden) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
      } else if (enabled && !timerRef.current) {
        timerRef.current = setInterval(showMotivational, TIMER_INTERVAL);
      }
    };
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, [enabled, showMotivational]);

  const toggleNotifications = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      setStorage(STORAGE_KEYS.NOTIFICATIONS_ON, next);
      return next;
    });
  }, []);

  const addNotification = useCallback(
    (message: string, category: NotificationCategory = "motivación") => {
      if (!enabled) return;
      const id = Date.now().toString();
      setActiveNotifications((prev) => [...prev, { id, message, category }]);
      playBeep();
    },
    [enabled]
  );

  const dismissNotification = useCallback((id: string) => {
    setActiveNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <NotificationContext.Provider
      value={{ notificationsEnabled: enabled, toggleNotifications, addNotification }}
    >
      {children}

      {/* Notification stack */}
      <div className="fixed top-20 right-4 z-[100] flex flex-col gap-3">
        {activeNotifications.map((n) => (
          <ExpNotification
            key={n.id}
            id={n.id}
            message={n.message}
            category={n.category}
            onDismiss={dismissNotification}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
}
