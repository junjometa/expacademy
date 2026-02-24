export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
}

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  lessonsCount: number;
  lessons: Lesson[];
  quote?: string;
}

export const modules: Module[] = [
  {
    id: 1,
    title: "El Ecosistema Completo",
    subtitle: "Visión de pájaro de los 5 productos",
    icon: "Globe",
    color: "from-violet-500 to-purple-600",
    lessonsCount: 6,
    quote: "Antes de diseñar cada pieza, necesitas ver el tablero completo.",
    lessons: [
      { id: "1-1", title: "Qué es el ecosistema", subtitle: "Y por qué importa entenderlo completo", duration: "10 min" },
      { id: "1-2", title: "Los 5 productos", subtitle: "Visión general del stack", duration: "12 min" },
      { id: "1-3", title: "Cómo se conectan", subtitle: "Las relaciones entre productos", duration: "10 min" },
      { id: "1-4", title: "El usuario en el ecosistema", subtitle: "El journey transversal", duration: "8 min" },
      { id: "1-5", title: "Tu rol como Designer", subtitle: "Dónde encajas tú en todo esto", duration: "10 min" },
      { id: "1-6", title: "Mapa mental del ecosistema", subtitle: "Ejercicio integrador", duration: "15 min" },
    ],
  },
  {
    id: 2,
    title: "Los Dos Diamantes",
    subtitle: "Identity + Commerce: el motor invisible",
    icon: "Diamond",
    color: "from-blue-500 to-indigo-600",
    lessonsCount: 6,
    quote: "Identity y Commerce son el corazón del ecosistema — todo lo demás orbita alrededor.",
    lessons: [
      { id: "2-1", title: "Qué es Identity", subtitle: "El producto que lo conecta todo", duration: "10 min" },
      { id: "2-2", title: "Qué es Commerce", subtitle: "La propuesta de valor monetizable", duration: "10 min" },
      { id: "2-3", title: "El vínculo invisible", subtitle: "Cómo Identity alimenta a Commerce", duration: "12 min" },
      { id: "2-4", title: "Flujos de datos", subtitle: "Qué información viaja entre ambos", duration: "10 min" },
      { id: "2-5", title: "Implicaciones de diseño", subtitle: "Lo que esto significa para tu trabajo", duration: "12 min" },
      { id: "2-6", title: "Diseñando para los diamantes", subtitle: "Ejercicio práctico", duration: "15 min" },
    ],
  },
  {
    id: 3,
    title: "Sistema de Gamificación",
    subtitle: "XP, niveles, badges y tokens",
    icon: "Trophy",
    color: "from-amber-500 to-orange-600",
    lessonsCount: 6,
    quote: "La gamificación no es un adorno — es el pegamento que mantiene a los usuarios volviendo.",
    lessons: [
      { id: "3-1", title: "Por qué gamificar", subtitle: "Motivación y engagement", duration: "10 min" },
      { id: "3-2", title: "XP y niveles", subtitle: "La mecánica central del sistema", duration: "12 min" },
      { id: "3-3", title: "Badges y logros", subtitle: "Reconocimiento y coleccionismo", duration: "10 min" },
      { id: "3-4", title: "Tokens y recompensas", subtitle: "Valor tangible para el usuario", duration: "10 min" },
      { id: "3-5", title: "Leaderboards", subtitle: "Competencia social y motivación", duration: "10 min" },
      { id: "3-6", title: "Sistema coherente", subtitle: "Diseñando la gamificación completa", duration: "15 min" },
    ],
  },
  {
    id: 4,
    title: "Los Usuarios",
    subtitle: "Research, personas y journeys",
    icon: "Users",
    color: "from-emerald-500 to-green-600",
    lessonsCount: 6,
    quote: "No diseñas para ti — diseñas para personas reales con problemas reales.",
    lessons: [
      { id: "4-1", title: "Investigación de usuarios", subtitle: "Los fundamentos del UX research", duration: "12 min" },
      { id: "4-2", title: "Creando personas", subtitle: "Perfiles realistas y útiles", duration: "10 min" },
      { id: "4-3", title: "Customer journey mapping", subtitle: "El camino completo del usuario", duration: "12 min" },
      { id: "4-4", title: "Pain points y oportunidades", subtitle: "Dónde diseñar soluciones", duration: "10 min" },
      { id: "4-5", title: "Validación y testing", subtitle: "Confirmar tus hipótesis", duration: "10 min" },
      { id: "4-6", title: "De research a diseño", subtitle: "Traducir hallazgos en decisiones", duration: "15 min" },
    ],
  },
  {
    id: 5,
    title: "Flujos UX por Producto",
    subtitle: "Las 5 webs en detalle",
    icon: "Workflow",
    color: "from-cyan-500 to-teal-600",
    lessonsCount: 6,
    quote: "Cada producto tiene su propia lógica — dominar los flujos es dominar la experiencia.",
    lessons: [
      { id: "5-1", title: "Flujo UX de Identity", subtitle: "Registro, login, perfil", duration: "12 min" },
      { id: "5-2", title: "Flujo UX de Commerce", subtitle: "Catálogo, carrito, checkout", duration: "12 min" },
      { id: "5-3", title: "Flujo UX de Marketplace", subtitle: "Descubrir, comprar, vender", duration: "12 min" },
      { id: "5-4", title: "Flujo UX de Community", subtitle: "Social, contenido, interacción", duration: "10 min" },
      { id: "5-5", title: "Flujo UX de Analytics", subtitle: "Dashboards y métricas", duration: "10 min" },
      { id: "5-6", title: "Integrando los 5 flujos", subtitle: "La experiencia unificada", duration: "15 min" },
    ],
  },
  {
    id: 6,
    title: "Componentes de Gamificación",
    subtitle: "Lo que tú diseñas",
    icon: "Puzzle",
    color: "from-pink-500 to-rose-600",
    lessonsCount: 6,
    quote: "Los componentes son los ladrillos — el sistema de gamificación es el edificio.",
    lessons: [
      { id: "6-1", title: "Componentes visuales de XP", subtitle: "Barras, números, animaciones", duration: "10 min" },
      { id: "6-2", title: "Diseñando badges", subtitle: "Iconografía y significado", duration: "12 min" },
      { id: "6-3", title: "Progress bars y trackers", subtitle: "Visualizar el avance", duration: "10 min" },
      { id: "6-4", title: "Notificaciones de logro", subtitle: "Celebrar sin interrumpir", duration: "10 min" },
      { id: "6-5", title: "Perfiles y avatares", subtitle: "La identidad visual del usuario", duration: "10 min" },
      { id: "6-6", title: "Sistema visual completo", subtitle: "Ejercicio integrador", duration: "15 min" },
    ],
  },
  {
    id: 7,
    title: "Design System",
    subtitle: "Identidad visual coherente",
    icon: "Palette",
    color: "from-fuchsia-500 to-purple-600",
    lessonsCount: 6,
    quote: "Un design system no es un lujo — es la infraestructura de tu trabajo creativo.",
    lessons: [
      { id: "7-1", title: "Qué es un design system", subtitle: "Más que una librería de componentes", duration: "10 min" },
      { id: "7-2", title: "Tokens de diseño", subtitle: "La base del sistema", duration: "12 min" },
      { id: "7-3", title: "Tipografía y escala", subtitle: "Jerarquía visual con texto", duration: "10 min" },
      { id: "7-4", title: "Paleta de colores", subtitle: "Color con propósito", duration: "10 min" },
      { id: "7-5", title: "Componentes reutilizables", subtitle: "Construir una vez, usar siempre", duration: "12 min" },
      { id: "7-6", title: "Documentación del sistema", subtitle: "Hacer tu trabajo escalable", duration: "15 min" },
    ],
  },
  {
    id: 8,
    title: "Comunicación Visual",
    subtitle: "Marketing y campañas",
    icon: "Megaphone",
    color: "from-red-500 to-pink-600",
    lessonsCount: 6,
    quote: "Diseñar es comunicar — cada pixel cuenta una historia.",
    lessons: [
      { id: "8-1", title: "Principios de comunicación visual", subtitle: "Lo esencial antes de crear", duration: "10 min" },
      { id: "8-2", title: "Diseño para redes sociales", subtitle: "Posts, stories y ads", duration: "12 min" },
      { id: "8-3", title: "Email marketing visual", subtitle: "Diseño que convierte", duration: "10 min" },
      { id: "8-4", title: "Landing pages", subtitle: "Estructura que persuade", duration: "12 min" },
      { id: "8-5", title: "Branding consistente", subtitle: "Una marca, muchos canales", duration: "10 min" },
      { id: "8-6", title: "Campañas integradas", subtitle: "Todo conectado", duration: "15 min" },
    ],
  },
  {
    id: 9,
    title: "IA como Superpoder",
    subtitle: "Multiplica tu impacto con IA",
    icon: "Sparkles",
    color: "from-violet-500 to-indigo-600",
    lessonsCount: 6,
    quote: "La IA no te reemplaza — te hace 10x más eficiente.",
    lessons: [
      { id: "9-1", title: "IA para diseñadores", subtitle: "Panorama de herramientas", duration: "10 min" },
      { id: "9-2", title: "Generación de assets", subtitle: "Imágenes, iconos, ilustraciones", duration: "12 min" },
      { id: "9-3", title: "Prototipado acelerado", subtitle: "De idea a prototipo en minutos", duration: "10 min" },
      { id: "9-4", title: "Copywriting con IA", subtitle: "Textos que comunican", duration: "10 min" },
      { id: "9-5", title: "Testing y análisis con IA", subtitle: "Automatizar la validación", duration: "10 min" },
      { id: "9-6", title: "Flujo de trabajo IA-first", subtitle: "Tu nuevo proceso creativo", duration: "15 min" },
    ],
  },
  {
    id: 10,
    title: "Colaboración Founder-Designer",
    subtitle: "Procesos de trabajo en startup",
    icon: "Handshake",
    color: "from-slate-400 to-zinc-600",
    lessonsCount: 6,
    quote: "El mejor diseño nace de la colaboración — no del aislamiento.",
    lessons: [
      { id: "10-1", title: "La mente del founder", subtitle: "Entender para colaborar mejor", duration: "10 min" },
      { id: "10-2", title: "Comunicación de diseño", subtitle: "Hablar el idioma del negocio", duration: "12 min" },
      { id: "10-3", title: "Priorización y roadmaps", subtitle: "Qué diseñar primero y por qué", duration: "10 min" },
      { id: "10-4", title: "Sprints de diseño", subtitle: "Iterar rápido con estructura", duration: "10 min" },
      { id: "10-5", title: "Feedback y iteración", subtitle: "Recibir, procesar, mejorar", duration: "10 min" },
      { id: "10-6", title: "Escalando el equipo", subtitle: "De solo tú a un equipo de diseño", duration: "15 min" },
    ],
  },
  {
    id: 11,
    title: "Escalando tu Impacto",
    subtitle: "De ejecutora a estratega",
    icon: "Rocket",
    color: "from-amber-400 to-yellow-500",
    lessonsCount: 6,
    quote: "El verdadero impacto no está en los pixels — está en la estrategia.",
    lessons: [
      { id: "11-1", title: "De táctica a estrategia", subtitle: "Pensamiento de alto nivel", duration: "10 min" },
      { id: "11-2", title: "Métricas de diseño", subtitle: "Lo que importa medir", duration: "12 min" },
      { id: "11-3", title: "Presentando resultados", subtitle: "Impacto visible al equipo", duration: "10 min" },
      { id: "11-4", title: "Marca personal", subtitle: "Tu reputación como designer", duration: "10 min" },
      { id: "11-5", title: "Networking y comunidad", subtitle: "Crecer con otros", duration: "10 min" },
      { id: "11-6", title: "Tu plan de crecimiento", subtitle: "Hoja de ruta personal", duration: "15 min" },
    ],
  },
];
