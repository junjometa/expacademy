import { LessonContent } from "./index";

const module7Lessons: LessonContent[] = [
  // ─── Lección 7.1: Por Qué Necesitas un Design System ───
  {
    id: "7-1",
    blocks: [
      {
        type: "concept",
        title: "El Problema Sin Design System",
        text: "5 productos, múltiples canales (web, mobile, redes, ads), crecimiento constante. Sin un design system, cada producto se ve diferente, cada developer interpreta el diseño a su manera, cambiar un color requiere tocar 5 proyectos, el usuario no siente que son del mismo ecosistema, y escalar es imposible. El caos visual es inevitable.",
      },
      {
        type: "example",
        title: "Sin Design System vs Con Design System",
        wrong: "Sin design system: RugPull News usa bordes redondeados de 8px, MemeScanner usa 12px, SmartScanner usa 4px. El botón primary es azul en un producto y púrpura en otro. Los paddings son diferentes en cada card. El usuario siente que son 5 apps de 5 empresas diferentes.",
        right: "Con design system: Todos los productos usan border-radius de 12px para cards. El botón primary usa el accent-color del producto (cyan/naranja/verde) pero la FORMA es idéntica. Los paddings siguen el sistema de 4px grid. El usuario siente UN ecosistema con diferentes 'sabores'.",
      },
      {
        type: "concept",
        title: "¿Qué es un Design Token?",
        text: "Un design token es una VARIABLE de diseño: un color, un spacing, un border radius, una sombra, una fuente. Ejemplo: --accent-primary: #8B5CF6 es un token. Se definen UNA vez en un archivo central y se usan en TODOS los productos. Si cambias el token, cambia en todo el ecosistema automáticamente. Los tokens son el ADN visual del ecosistema.",
      },
      {
        type: "info-callout",
        title: "Qué Te Da un Design System",
        text: "1) Consistencia: Un cambio en el token de color se propaga a todo el ecosistema.\n2) Velocidad: Los developers tienen componentes listos para usar.\n3) Coherencia automática: No depende de la memoria humana.\n4) Escalabilidad: Nuevos productos heredan la identidad visual al instante.\n5) Documentación viva: El sistema ES la documentación.\n6) Calidad: Un componente se diseña y se revisa UNA vez — luego se reutiliza.",
      },
      {
        type: "callout",
        calloutType: "warning",
        title: "Un Design System NO Es Solo Colores Bonitos",
        text: "Un design system NO es un archivo de Figma con bonitos cuadraditos de color. Es un SISTEMA VIVO que se usa, se actualiza y se respeta. Si nadie lo usa, no sirve. Si no se actualiza, queda obsoleto. Si no se respeta, pierde autoridad. Tu trabajo es crearlo Y asegurar que se adopte.",
      },
      {
        type: "connection",
        title: "Tu Primer Entregable Real",
        text: "Tu primer entregable como Ecosystem Experience Designer debería ser el design system. Es la base de TODO lo que diseñes después. Cada pantalla, cada componente, cada interacción que diseñes en el futuro se construirá sobre los tokens y componentes que definas ahora. Invierte el tiempo. Hazlo bien.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Entiendo por qué un ecosistema de 5 productos NECESITA un design system",
          "Sé qué es un design token y cómo funciona",
          "Comprendo que un design system es un sistema vivo, no un archivo estático",
          "Reconozco que el design system es mi primer entregable real",
        ],
      },
    ],
  },

  // ─── Lección 7.2: Paleta de Color por Producto ───
  {
    id: "7-2",
    blocks: [
      {
        type: "concept",
        title: "La Estrategia: Misma Base, Diferente Acento",
        text: "El ecosistema tiene UNA paleta base compartida por todos los productos + variaciones de acento por producto. Los fondos, textos y borders son IGUALES en todos los productos. Solo cambia el color de acento (botones, links, highlights, iconos activos). Esto significa que puedes diseñar un componente UNA vez y solo cambiar el accent color para cada producto. Eso es eficiencia máxima.",
      },
      {
        type: "info-callout",
        title: "Paleta Base Compartida",
        text: "Backgrounds: #080A12 (deepest) → #14192B (card) → #1C233A (elevated)\nText: #F1F5F9 (primary, headings), #94A3B8 (secondary, body), #64748B (tertiary, hints)\nBorders: #2E3858 (default), #3D4A6B (hover)\nSemantic — Success: #22C55E\nSemantic — Warning: #FACC15\nSemantic — Error: #EF4444\nSemantic — Info: #3B82F6\n\nEstos colores son IDÉNTICOS en los 5 productos. Son los cimientos.",
      },
      {
        type: "info-callout",
        title: "Variaciones de Acento por Producto",
        text: "RugPull News — Accent: #06B6D4 (cyan). Personalidad: informativo, serio pero accesible. El cyan transmite claridad y confianza.\nMemeScanner — Accent: #F97316 (naranja) + #8B5CF6 (púrpura). Personalidad: energético, divertido, viral. Dos colores para crear dinamismo.\nSmartScanner — Accent: #22C55E (verde). Personalidad: técnico, profesional, sobrio. El verde transmite seguridad y precisión.\nSmart Academy — Accent: #8B5CF6 (violeta). Personalidad: educativo, gamificado, progresivo. El violeta transmite conocimiento e innovación.\nGlobal Portal — Accent: Gradiente multi-color. Personalidad: unificador, premium, hogar del ecosistema.",
      },
      {
        type: "concept",
        title: "Cómo Se Aplica el Accent",
        text: "El accent color se aplica en puntos estratégicos: botones primary (bg del accent), links y textos destacados (color del accent), iconos activos (color del accent), bordes de foco (ring del accent), barras de progreso (fill del accent), badges y pills de estado (bg del accent con opacity). Todo lo demás (fondos, texto normal, borders) usa la paleta base. El resultado: cada producto tiene personalidad propia pero se siente parte del mismo ecosistema.",
      },
      {
        type: "example",
        title: "Aplicación Correcta del Accent",
        wrong: "Cada producto usa colores totalmente diferentes: RPN con fondo azul, MemeScanner con fondo naranja, SmartScanner con fondo verde. Los textos, cards, y borders también cambian. El usuario siente que son apps completamente diferentes. Cero coherencia.",
        right: "Todos los productos comparten fondo #080A12, cards #14192B, texto #F1F5F9. En RPN el botón de 'Leer más' es cyan. En MemeScanner el botón de 'Escanear' es naranja. En SmartScanner el botón de 'Analizar' es verde. Mismo esqueleto, diferente acento. UN ecosistema.",
      },
      {
        type: "exercise",
        title: "Tabla de Tokens de Color para MemeScanner",
        text: "Crea la tabla completa de tokens de color para MemeScanner. Para cada token, escribe el valor hex y dónde se usa:\n\n1. bg-primary: (fondo de página)\n2. bg-card: (fondo de cards)\n3. bg-elevated: (fondo de modals, dropdowns)\n4. text-primary: (headings, texto importante)\n5. text-secondary: (body text, descripciones)\n6. accent-primary: (botones, links, iconos activos)\n7. accent-secondary: (second accent color)\n8. success: (estados positivos)\n9. warning: (alertas)\n10. error: (errores, peligro)\n11. border: (bordes de cards, inputs)",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Conozco la paleta base compartida (backgrounds, text, borders)",
          "Puedo nombrar el accent color de cada producto",
          "Entiendo la estrategia 'misma base, diferente acento'",
          "Sé en qué elementos se aplica el accent color",
        ],
      },
    ],
  },

  // ─── Lección 7.3: Tipografía, Iconografía y Espaciado ───
  {
    id: "7-3",
    blocks: [
      {
        type: "concept",
        title: "Las 3 Familias Tipográficas",
        text: "El ecosistema usa 3 familias tipográficas con roles claros: Space Grotesk para headings (geométrica, moderna, tech — transmite innovación), DM Sans para body text (legible, amigable, limpia — se lee bien en cualquier tamaño), JetBrains Mono para código y datos técnicos (monoespaciada, perfecta para direcciones de wallet, hashes, números). NUNCA mezcles estas fuentes fuera de sus roles.",
      },
      {
        type: "info-callout",
        title: "Escala Tipográfica",
        text: "12px: Labels, captions, metadata\n13px: Texto pequeño, notas, timestamps\n14px: Body text secundario, descripciones cortas\n16px: Body text principal, párrafos (BASE)\n18px: Texto destacado, subtítulos de cards\n20px: H4, títulos de secciones\n24px: H3, títulos de módulos\n30px: H2, títulos de páginas\n36px: H1, hero titles\n\nPesos: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)\nLine heights: 1.4 (compact), 1.6 (normal), 1.75 (lectura extensa)",
      },
      {
        type: "concept",
        title: "Iconografía: Lucide Icons",
        text: "Todo el ecosistema usa Lucide Icons — una biblioteca consistente con estilo outline. Tamaños estándar: 14px (inline junto a texto), 16px (compact, en pills y badges), 18px (default, botones y listas), 20px (medium, navegación), 24px (large, headers y CTAs). REGLA ABSOLUTA: nunca mezclar estilos de iconos. No Lucide + FontAwesome + Material Icons en la misma app. Si necesitas un icono que Lucide no tiene, dibújalo en el mismo estilo.",
      },
      {
        type: "info-callout",
        title: "Sistema de Espaciado (4px Grid)",
        text: "4px (xs): Separación mínima entre elementos inline\n8px (sm): Gap entre items en listas compactas\n12px (md): Padding interno de pills/badges\n16px (lg): Padding de inputs, gap estándar\n20px (xl): Padding de botones largos\n24px (2xl): Padding de cards\n32px (3xl): Separación entre secciones de card\n40px (4xl): Margin entre bloques de contenido\n48px (5xl): Margin entre secciones de página\n\nCards: padding 16-24px, gap entre items 12-16px\nSections: margin-bottom 32-48px\nPage: padding 16px (mobile), 24px (desktop)",
      },
      {
        type: "concept",
        title: "Border Radius: El Detalle que Unifica",
        text: "4px para tags y pills pequeños (elementos inline). 8px para inputs, selects y campos de formulario. 12px para cards y contenedores de contenido. 16px para modals y overlays. 9999px (full) para avatares, badges circulares y botones pill. Estos valores no son arbitrarios — son un SISTEMA. Si usas 13px para una card y 11px para otra, el ojo humano detecta la inconsistencia aunque no pueda nombrarla.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Consistencia = Profesionalismo",
        text: "Estos números no son sugerencias — son un SISTEMA. Si usas 13px para algo, no uses 15px para otra cosa similar. Si el padding de una card es 24px, TODAS las cards usan 24px. La consistencia visual es lo que separa un producto amateur de uno profesional. El usuario no nota la consistencia, pero SÍ nota la inconsistencia.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Conozco las 3 familias tipográficas y cuándo usar cada una",
          "Entiendo el sistema de espaciado basado en 4px grid",
          "Sé qué tamaños de icono usar en cada contexto",
          "Puedo nombrar los 5 valores de border-radius y dónde se aplican",
          "Entiendo que consistencia = profesionalismo",
        ],
      },
    ],
  },

  // ─── Lección 7.4: Componentes Reutilizables ───
  {
    id: "7-4",
    blocks: [
      {
        type: "concept",
        title: "Los 7 Componentes Core",
        text: "Si diseñas estos 7 tipos de componentes bien, tienes el 80% del trabajo hecho para CUALQUIER pantalla nueva del ecosistema. Son los bloques Lego con los que se construye todo: Buttons, Cards, Inputs, Modals, Badges (UI), Progress Bars, y Tooltips. Cada uno tiene variantes, tamaños y estados definidos.",
      },
      {
        type: "info-callout",
        title: "Buttons: 4 Variantes x 3 Tamaños",
        text: "Primary: bg accent-color, text white, hover accent-darker. El CTA principal.\nSecondary: border accent-color, text accent-color, hover bg accent/10. Acción secundaria.\nGhost: sin border, text text-secondary, hover bg-card. Acción terciaria.\nDestructive: bg error (#EF4444), text white. Acciones peligrosas.\n\nTamaños:\nsm: height 32px, text 13px, padding 8px 12px\nmd: height 40px, text 14px, padding 10px 16px\nlg: height 48px, text 16px, padding 12px 24px\n\nEstados: normal, hover (bg shift), active (scale 98%), disabled (opacity 50%, no pointer).",
      },
      {
        type: "info-callout",
        title: "Cards: 4 Tipos",
        text: "Default: bg bg-card (#14192B), border border (#2E3858), rounded-2xl (12px). Contenedor estándar.\nElevated: bg bg-elevated (#1C233A), border, shadow-lg. Contenido destacado.\nInteractive: hover translateY(-2px) + shadow-xl + border-hover. Cards clickables.\nGlass: backdrop-filter blur(12px), bg white/5, border white/10. Efecto glassmorphism premium.\n\nPadding estándar: 16px (mobile), 24px (desktop). Gap interno: 12-16px.",
      },
      {
        type: "info-callout",
        title: "Inputs, Modals, Badges",
        text: "Inputs: bg bg-primary, border border, focus ring accent-color 2px. Variantes: text, textarea (min-h 100px), search (icono lupa integrado), select (chevron derecho).\n\nModals: Overlay bg black/50 con backdrop-blur. Card centrada max-width 500px. Close button top-right. Animación: scale from 95% + fade in 200ms.\n\nBadges UI: Pill shape rounded-full. Variantes: status (completed green, pending gray, active accent), level (border con gradiente del nivel), xp (bg dorado).",
      },
      {
        type: "info-callout",
        title: "Progress Bars y Tooltips",
        text: "Progress Bars:\nLinear: height 6-8px, rounded-full, fill con gradiente del accent. Track: bg-elevated.\nCircular: SVG ring, stroke-width 4-6px, porcentaje en el centro con texto.\n\nTooltips:\nDark bg (#1C233A), text white, arrow apuntando al trigger.\nMax-width 200px, appear on hover después de 500ms delay.\nAnimación: fade in 150ms + slide 4px desde la dirección del arrow.",
      },
      {
        type: "exercise",
        title: "Botón Primary en 5 Productos",
        text: "Diseña en texto los estados del botón Primary para cada producto. Para cada uno especifica: bg color, text color, border, shadow.\n\n1. RugPull News — normal / hover / active / disabled\n2. MemeScanner — normal / hover / active / disabled\n3. SmartScanner — normal / hover / active / disabled\n4. Smart Academy — normal / hover / active / disabled\n5. Global Portal — normal / hover / active / disabled\n\nRecuerda: la FORMA es idéntica (md: 40px height, 14px text). Solo cambia el color de accent.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Conozco los 7 componentes core y sus variantes",
          "Sé las 4 variantes de botón y cuándo usar cada una",
          "Entiendo los 4 tipos de card y su jerarquía visual",
          "Puedo adaptar componentes a diferentes productos solo cambiando el accent",
        ],
      },
    ],
  },

  // ─── Lección 7.5: La Identidad Visual en Web3 ───
  {
    id: "7-5",
    blocks: [
      {
        type: "concept",
        title: "El Problema de Imagen de Web3",
        text: "Web3 tiene un problema de imagen: la mayoría de proyectos se ven genéricos. Gradientes neón agresivos, fondos oscuros con partículas, robots 3D, tipografía futurista exagerada, y mucho hype visual sin sustancia. El resultado: todos se ven iguales, ninguno transmite confianza, y el usuario promedio asocia crypto con 'probablemente un scam'. Tu ecosistema debe diferenciarse sin perder credibilidad.",
      },
      {
        type: "info-callout",
        title: "Lo Que Comunica SEGURIDAD",
        text: "Colores sobrios: No neón agresivo. Fondos oscuros profundos, no negro puro.\nTipografía limpia: Geometric sans-serif, no futurista exagerada.\nEspacio blanco: Breathing room — no llenar cada pixel.\nDatos claros: Información visible, no escondida en menús.\nIconos consistentes: Lucide outline style, no clip art random.\nVelocidad: Una app rápida se siente segura. Una lenta se siente dudosa.",
      },
      {
        type: "info-callout",
        title: "Lo Que Comunica INNOVACIÓN",
        text: "Gradientes sutiles: De oscuro a ligeramente menos oscuro, no arcoíris.\nAnimaciones con propósito: Transiciones suaves que guían el ojo, no decorativas.\nDark mode bien ejecutado: Grises profundos con jerarquía, no todo negro.\nGlassmorphism moderado: Blur sutil en overlays, no en cada card.\nNFTs como identidad: Badges verificables con valor real, no especulación.\nMicro-interacciones: Hover effects, transitions, que se sienten premium.",
      },
      {
        type: "concept",
        title: "El Equilibrio del Ecosistema",
        text: "Tu identidad visual debe comunicar 3 cosas simultáneamente: 'Somos serios pero accesibles' (no aburridos, no intimidantes), 'Somos técnicos pero comprensibles' (potentes por dentro, simples por fuera), 'Somos innovadores pero confiables' (modernos sin ser experimentales). El equilibrio es difícil — la mayoría de proyectos caen en uno de los extremos.",
      },
      {
        type: "example",
        title: "Landing Page: Web3 Genérica vs Profesional",
        wrong: "Landing page genérica Web3: Robot 3D con ojos brillantes, fondo negro con estrellas y partículas, texto en tipografía futurista, 15 gradientes neón, animaciones en cada elemento, sin explicar qué hace el producto en los primeros 5 segundos. El usuario piensa: 'otro proyecto crypto más'.",
        right: "Landing page profesional: Headline claro ('Protege tus inversiones crypto'), subtítulo que explica el valor ('Detectamos scams antes de que pierdas tu dinero'), CTA prominente ('Escanea gratis'), datos verificables ('+50,000 scams detectados'), testimonials reales, sin distracciones visuales. El usuario piensa: 'esto parece legítimo, lo pruebo'.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "La Confianza Vende Más que la Novedad",
        text: "Tu estética debe decir: 'Confía en nosotros con tu dinero'. No 'somos el proyecto crypto más cool'. La confianza vende más que la novedad en un espacio donde el 90% de proyectos son scams. Cuando el usuario ve tu producto, debe sentir: 'aquí mi dinero está seguro'. Ese sentimiento viene del diseño, no del copy.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Entiendo el problema de imagen genérica de Web3",
          "Sé qué elementos visuales comunican seguridad vs innovación",
          "Comprendo el equilibrio: serio-accesible, técnico-comprensible, innovador-confiable",
          "Puedo identificar una landing page genérica vs una profesional",
        ],
      },
    ],
  },

  // ─── Lección 7.6: Ejercicio — Tu Primer Design System ───
  {
    id: "7-6",
    blocks: [
      {
        type: "concept",
        title: "Ejercicio Final: Crea Tu Design System v1",
        text: "Vas a crear la PRIMERA VERSIÓN de tu design system. No necesita ser perfecto — necesita EXISTIR. Un design system incompleto que se usa es infinitamente más valioso que uno completo que nadie abre. Empieza pequeño, itera siempre. Este ejercicio es tu ENTREGABLE real — lo que escribas aquí es la base de tu trabajo diario.",
      },
      {
        type: "exercise",
        title: "Parte 1: Tokens de Color",
        text: "Lista los colores base del ecosistema + los colores de acento de 2 productos (elige los que prefieras).\n\nBase (compartida por todos):\n- bg-primary: ______\n- bg-card: ______\n- bg-elevated: ______\n- text-primary: ______\n- text-secondary: ______\n- border: ______\n- success / warning / error: ______\n\nProducto 1 (__________):\n- accent-primary: ______\n- accent-secondary: ______\n\nProducto 2 (__________):\n- accent-primary: ______\n- accent-secondary: ______",
      },
      {
        type: "exercise",
        title: "Parte 2: Tipografía",
        text: "Define el sistema tipográfico completo:\n\n1. Heading font: ______ (¿por qué esta?)\n2. Body font: ______ (¿por qué esta?)\n3. Mono font: ______ (¿para qué se usa?)\n\nEscala de tamaños (mínimo 5 niveles):\n- xs: ____px — usado para: ______\n- sm: ____px — usado para: ______\n- base: ____px — usado para: ______\n- lg: ____px — usado para: ______\n- xl: ____px — usado para: ______\n\nPesos que usarás: ______ (¿cuándo cada uno?)",
      },
      {
        type: "exercise",
        title: "Parte 3: Spacing",
        text: "Define tu sistema de espaciado:\n\n1. Grid base: ____px\n2. Escala (mínimo 6 valores): ____\n\nUso específico:\n- Padding interno de cards: ____px\n- Gap entre items dentro de cards: ____px\n- Margin entre secciones: ____px\n- Padding de página (mobile): ____px\n- Padding de página (desktop): ____px\n- Height de botón md: ____px",
      },
      {
        type: "exercise",
        title: "Parte 4: 5 Componentes Core",
        text: "Para cada uno de estos 5 componentes, describe:\n- Variantes (primary, secondary...)\n- Tamaños (sm, md, lg)\n- Estados (normal, hover, active, disabled)\n- Cómo cambia entre productos (qué propiedad usa el accent)\n\nComponentes:\n1. Button\n2. Card\n3. Input\n4. Badge (UI)\n5. ProgressBar\n\nNo necesitas código — describe las especificaciones visuales en texto.",
      },
      {
        type: "exercise",
        title: "Parte 5: 5 Reglas del Design System",
        text: "Escribe 5 reglas que TODO el equipo debe seguir. Estas reglas son la 'constitución' de tu design system. Ejemplos para inspirarte:\n\n- 'Nunca usar más de 2 pesos tipográficos en una misma pantalla.'\n- 'Los colores de acento solo se aplican en elementos interactivos.'\n- 'Todo spacing debe ser múltiplo de 4px.'\n\nEscribe TUS 5 reglas — las que consideras más importantes para mantener la coherencia del ecosistema.",
      },
      {
        type: "quote",
        text: "Un design system no se diseña de una vez — se cultiva. Empieza pequeño, itera siempre. Lo importante es que EXISTA.",
        author: "Regla #6 de EXP Academy",
      },
      {
        type: "checkpoint",
        title: "Checklist del Ejercicio",
        items: [
          "He definido los tokens de color base + 2 productos",
          "He definido la tipografía (3 fuentes, escala, pesos)",
          "He definido el sistema de spacing con valores concretos",
          "He especificado los 5 componentes core (variantes, tamaños, estados)",
          "He escrito 5 reglas claras para el equipo",
          "Mi design system v1 es suficiente para empezar a diseñar pantallas",
        ],
      },
    ],
  },
];

export default module7Lessons;
