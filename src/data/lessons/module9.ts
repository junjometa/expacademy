import { LessonContent } from "./index";

const module9Lessons: LessonContent[] = [
  // ─── Lección 9.1: IA para Diseñadoras — Qué Puede Hacer HOY ───
  {
    id: "9-1",
    blocks: [
      {
        type: "concept",
        title: "IA No Te Reemplaza — Te Amplifica",
        text: "La IA no es tu competencia — es tu herramienta más poderosa. Piensa en IA como un junior INFINITO: trabaja rápido, está disponible 24/7, nunca se cansa, y puede generar 100 variaciones en el tiempo que tú haces 1. Pero tiene un defecto crítico: no tiene CRITERIO. No sabe qué es bueno para el usuario. No tiene empatía. No entiende el contexto de negocio. Ahí entras tú.",
      },
      {
        type: "info-callout",
        title: "Lo Que IA Hace BIEN (10x Más Rápido que Tú)",
        text: "Investigar competidores y resumir hallazgos\nGenerar variaciones de copy (headlines, CTAs, microcopy)\nCrear user personas basadas en datos y contexto\nAnalizar feedback de usuarios y encontrar patrones\nGenerar ideas de diseño y brainstorming ilimitado\nEscribir contenido de UI (tooltips, errores, onboarding)\nExplorar estilos visuales (mood boards con herramientas de imagen)\nDocumentar decisiones de diseño de forma estructurada",
      },
      {
        type: "info-callout",
        title: "Lo Que IA NO Puede Hacer (Necesita Tu Criterio)",
        text: "Decidir qué es BUENO para el usuario (eso es juicio, no datos)\nTener empatía real con las personas (eso es humano)\nEntender el contexto completo del negocio y sus restricciones\nCrear experiencias coherentes sin dirección clara\nReemplazar testing con usuarios reales (la IA no es un usuario)\nTomar decisiones de producto definitivas (eso es responsabilidad)\nEntender matices culturales y emocionales del mercado crypto\nGarantizar que el output es correcto (siempre necesita revisión)",
      },
      {
        type: "callout",
        calloutType: "info",
        title: "Supervivencia Profesional",
        text: "La diseñadora que usa IA produce en 1 hora lo que antes tomaba 1 día. La que no usa IA se queda atrás. No es opcional — es supervivencia profesional. No se trata de si DEBES usar IA, sino de CÓMO la usas mejor que tu competencia. Tu valor no es 'hacer cosas' — es SABER QUÉ hacer y POR QUÉ. La IA hace. Tú decides.",
      },
      {
        type: "concept",
        title: "El Framework: IA Genera, Tú Validas",
        text: "El workflow correcto con IA tiene 3 pasos: 1) Tú defines QUÉ necesitas (brief claro, contexto específico). 2) IA GENERA opciones rápidamente (10 variaciones en 2 minutos). 3) Tú VALIDAS y SELECCIONAS con tu criterio (qué funciona para Carlos, qué se alinea con la marca, qué es técnicamente viable). Nunca publiques output de IA sin revisarlo con tu criterio de diseñadora.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Entiendo que la IA es una herramienta, no un reemplazo",
          "Sé qué tareas son 10x más rápidas con IA",
          "Conozco las limitaciones de la IA (sin criterio, sin empatía)",
          "Comprendo el framework 'IA genera, tú validas'",
        ],
      },
    ],
  },

  // ─── Lección 9.2: Claude/ChatGPT como Copiloto de Producto ───
  {
    id: "9-2",
    blocks: [
      {
        type: "concept",
        title: "El Secreto Está en el Prompt",
        text: "La diferencia entre un resultado mediocre y uno excelente de la IA es el PROMPT. Un prompt vago ('dame ideas para MemeScanner') da resultados vagos. Un prompt específico con contexto, restricciones y formato deseado da oro. Aquí tienes prompts específicos para cada tarea de tu rol diario como Ecosystem Experience Designer.",
      },
      {
        type: "info-callout",
        title: "Prompt: Investigar Competidores",
        text: "\"Analiza estas 3 webs de seguridad crypto: DEXTools, RugCheck, TokenSniffer. Para cada una responde: 1) ¿Qué hacen bien en UX? (mínimo 3 puntos), 2) ¿Qué hacen mal? (mínimo 3 puntos), 3) ¿Qué podemos copiar/adaptar? 4) ¿Qué debemos evitar? Formato: tabla comparativa. Contexto: estoy diseñando MemeScanner, un scanner de memecoins con gamificación y target novatos crypto.\"",
      },
      {
        type: "info-callout",
        title: "Prompt: Generar Personas",
        text: "\"Crea 3 user personas para MemeScanner (scanner de tokens crypto con gamificación). Para cada persona: nombre ficticio, edad, experiencia con crypto (novato/intermedio/avanzado), dispositivo principal (mobile/desktop), frustración principal con herramientas actuales, qué busca específicamente, cómo llegó al producto, cuánto tiempo tiene para usarlo. Contexto: nuestros usuarios van desde novatos que no saben qué es una wallet hasta traders que operan diariamente.\"",
      },
      {
        type: "info-callout",
        title: "Prompt: Escribir Microcopy",
        text: "\"Escribe el copy para 5 estados del componente 'scan result' de MemeScanner: 1) Loading (mientras escanea el token), 2) Success con riesgo bajo (score 70-100), 3) Success con riesgo alto (score 0-30), 4) Error (API no responde), 5) Empty (token no encontrado). Restricciones: máximo 2 líneas por estado, tono profesional pero accesible, usuarios de 20-40 años que pueden no saber crypto. NO usar jerga técnica.\"",
      },
      {
        type: "info-callout",
        title: "Prompts: Análisis de Feedback y Brainstorming",
        text: "Feedback: \"Aquí tienes 20 comentarios de usuarios sobre MemeScanner: [pegar]. Identifica: los 3 problemas más mencionados, los 3 aspectos más valorados, 3 sugerencias que se repiten, y 1 insight no obvio.\"\n\nBrainstorming: \"Dame 10 ideas para mejorar el onboarding de MemeScanner. El problema actual: el usuario llega, ve la pantalla, y no sabe qué hacer. Target: novatos que no saben crypto. Restricción: sin cambios en el backend. Formato: idea + beneficio + esfuerzo (bajo/medio/alto).\"",
      },
      {
        type: "exercise",
        title: "Escribe 5 Prompts para Tu Semana",
        text: "Escribe 5 prompts que usarías ESTA SEMANA para tu trabajo en el ecosistema. Cada prompt debe ser ESPECÍFICO:\n\n1. Un prompt de INVESTIGACIÓN (competidores, mercado, tendencias)\n2. Un prompt de COPY (microcopy, headlines, notificaciones)\n3. Un prompt de PERSONAS o JOURNEY (user research)\n4. Un prompt de BRAINSTORMING (ideas para un problema concreto)\n5. Un prompt de DOCUMENTACIÓN (resumir decisiones, crear specs)\n\nPara cada uno incluye: contexto del ecosistema, tipo de usuario target, formato de respuesta deseado, y restricciones.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Sé que un prompt específico da resultados 10x mejores que uno vago",
          "Tengo prompts template para investigar, generar copy, crear personas y hacer brainstorming",
          "Puedo adaptar estos prompts al contexto específico del ecosistema",
          "Entiendo que el contexto y las restricciones son la clave de un buen prompt",
        ],
      },
    ],
  },

  // ─── Lección 9.3: IA para Research UX ───
  {
    id: "9-3",
    blocks: [
      {
        type: "concept",
        title: "Research UX Comprimido con IA",
        text: "La investigación UX tradicional consume HORAS: transcribir entrevistas, analizar patrones en feedback, crear encuestas, mapear journeys. La IA comprime estas tareas drásticamente. No reemplaza hablar con usuarios reales — pero te prepara para hacerlo mejor y te ayuda a procesar lo que aprendes 10x más rápido.",
      },
      {
        type: "info-callout",
        title: "Sintetizar Entrevistas",
        text: "Workflow: Graba la entrevista → Transcribe con herramienta de audio (Whisper, Otter.ai, etc.) → Pasa la transcripción a la IA.\n\nPrompt: \"Analiza esta transcripción de entrevista UX con un usuario de MemeScanner. Extrae: 5 pain points mencionados (cita textual + interpretación), 3 necesidades no expresadas directamente (inferidas del contexto), 2 oportunidades de diseño específicas, y 1 quote destacable para presentar al equipo. Formato: bullet points organizados por categoría.\"",
      },
      {
        type: "info-callout",
        title: "Detectar Patrones en Reviews",
        text: "Workflow: Recolecta reviews de apps similares (App Store, Product Hunt, Reddit, Twitter) → Compila en un documento.\n\nPrompt: \"Aquí tienes 50 reviews de apps crypto de seguridad (DEXTools, RugCheck, TokenSniffer). Agrupa por temas. ¿Cuáles son los 5 temas más frecuentes? Para cada tema: cuántas veces aparece, si es positivo o negativo, y una quote representativa. ¿Hay algún patrón no obvio que conecte varios reviews?\"",
      },
      {
        type: "info-callout",
        title: "Generar Encuestas y Mapear Journeys",
        text: "Encuesta:\n\"Crea una encuesta de 10 preguntas para entender cómo usuarios crypto evalúan la seguridad de tokens antes de invertir. Mix de opción múltiple y abiertas. Máximo 5 minutos para completar. Target: usuarios de 22-45 años, mix de novatos y experimentados. Incluye 1 pregunta demográfica, 3 de comportamiento, 4 de percepción, 2 de satisfacción.\"\n\nJourney:\n\"Genera un user journey map para Carlos (novato crypto, 28 años) usando MemeScanner por primera vez. 5 fases: descubrimiento, activación, engagement, conversión, retención. Para cada fase: acción principal, pensamiento, emoción (emoji), touchpoint digital, y 1 oportunidad de mejora.\"",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "La Regla de Oro del Research con IA",
        text: "IA para GENERAR hipótesis, tú para VALIDAR con usuarios reales. La IA puede decirte 'los usuarios probablemente se confunden en el paso 3 del checkout'. Pero solo un test real con Carlos sentado frente a la pantalla te confirmará si es cierto. Usa IA para ir preparada a la entrevista, no para reemplazarla.",
      },
      {
        type: "exercise",
        title: "Pipeline de Research para MemeScanner",
        text: "Diseña un pipeline de research de 5 pasos para mejorar el onboarding de MemeScanner. Para cada paso, escribe el prompt de IA que usarías:\n\n1. DESK RESEARCH: ¿Qué prompt para analizar competidores?\n2. ENCUESTA: ¿Qué prompt para generar la encuesta?\n3. ENTREVISTA: ¿Qué prompt para crear la guía de entrevista?\n4. SÍNTESIS: ¿Qué prompt para analizar los resultados?\n5. JOURNEY MAP: ¿Qué prompt para generar el mapa final?\n\nCada prompt debe ser copy-pasteable — listo para usar.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Sé cómo usar IA para sintetizar entrevistas y detectar patrones",
          "Puedo generar encuestas y journey maps con prompts específicos",
          "Entiendo que IA genera hipótesis pero no reemplaza testing real",
          "Tengo un pipeline de research con IA de 5 pasos",
        ],
      },
    ],
  },

  // ─── Lección 9.4: IA para Generación Visual ───
  {
    id: "9-4",
    blocks: [
      {
        type: "concept",
        title: "Exploración Visual 10x Más Rápida",
        text: "Las herramientas de generación de imágenes (Midjourney, DALL-E, Stable Diffusion) no reemplazan Figma — son tu mood board INFINITO. En lugar de buscar inspiración en Dribbble durante 2 horas, generas exactamente lo que imaginas en 10 minutos. 20 variaciones, 3 estilos diferentes, todo personalizado para tu ecosistema. La exploración visual que antes tomaba un día ahora toma una hora.",
      },
      {
        type: "info-callout",
        title: "Casos de Uso: IA Visual para el Ecosistema",
        text: "Mood boards: 'Mood board for a crypto security platform, dark theme, professional, purple and cyan accents, modern UI'\nExploración de estilos: Probar 10 direcciones visuales en 30 minutos antes de comprometerte con una\nIconografía conceptual: 'Shield icon for blockchain security, minimal line art, single color'\nNFT concepts: 'Badge NFT evolution: level 1 simple seed, level 5 growing tree, level 10 majestic oak, crypto aesthetic, dark background'\nBackgrounds: 'Abstract dark gradient background for crypto dashboard, subtle mesh, purple and blue tones'\nSocial media: 'Twitter card template for crypto security alert, professional design, dark theme'",
      },
      {
        type: "callout",
        calloutType: "warning",
        title: "Limitaciones Importantes de IA Visual",
        text: "Midjourney/DALL-E NO reemplazan Figma. Son para EXPLORAR, no para producir assets finales. Los assets finales siempre van en Figma: vectoriales, editables, escalables, con tokens de color del design system. Las imágenes generadas por IA tienen limitaciones de copyright — úsalas como REFERENCIA visual, no como producto final. Y nunca uses una imagen de IA directamente en producción sin recrearla en formato vectorial.",
      },
      {
        type: "concept",
        title: "Workflow Recomendado: Explore → Select → Recreate",
        text: "Paso 1: Genera 20 variaciones con IA en diferentes estilos y direcciones (10 minutos). Paso 2: Selecciona las 3 que mejor capturan lo que imaginas (5 minutos). Paso 3: Usa esas 3 como REFERENCIA visual en Figma — no copias literal, extraes la esencia: la paleta, la composición, el mood (resto del tiempo). El resultado final siempre es vectorial, escalable, y coherente con tu design system.",
      },
      {
        type: "exercise",
        title: "5 Prompts de Generación Visual",
        text: "Escribe 5 prompts detallados de generación visual para el ecosistema:\n\n1. GLOBAL PORTAL: Explorar el estilo visual general. Incluye: mood, colores, referencias.\n2. BADGE NFT: Generar conceptos de badge para MemeScanner. Incluye: forma, evolución, estilo.\n3. MOOD BOARD MEMESCANNER: Definir la estética. Incluye: energía, paleta, referencias.\n4. ICONOGRAFÍA: Set de iconos de seguridad. Incluye: estilo, peso, tamaño.\n5. LANDING BACKGROUNDS: Fondos para landing pages. Incluye: colores, texturas, mood.\n\nCada prompt debe ser suficientemente detallado para que Midjourney/DALL-E genere algo útil en el primer intento.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Sé usar IA visual para exploración rápida de estilos",
          "Entiendo que los assets finales SIEMPRE van en Figma, no de IA directamente",
          "Conozco el workflow Explore → Select → Recreate",
          "Puedo escribir prompts detallados para generación de imágenes",
        ],
      },
    ],
  },

  // ─── Lección 9.5: IA para Copy y Comunicación ───
  {
    id: "9-5",
    blocks: [
      {
        type: "concept",
        title: "El Copy Es el 50% de la Experiencia",
        text: "El texto de tu interfaz (microcopy) es tan importante como el diseño visual. Un botón perfecto con el texto equivocado falla. Un onboarding bonito con instrucciones confusas abandona. La IA escribe copy 10x más rápido que tú — y en más variaciones. Tu trabajo es seleccionar, refinar y mantener la voz de marca consistente.",
      },
      {
        type: "info-callout",
        title: "Copy de UI: Cada Palabra Importa",
        text: "Botones CTA — la diferencia entre 'Escanear', 'Analizar token', y 'Verificar seguridad' puede mover la conversión un 20%.\n\nPrompt: \"Dame 5 variaciones de texto para un botón CTA de scan de tokens en MemeScanner. Target: novatos crypto. Restricción: máximo 3 palabras por variante. Tono: confiable pero invitante. Contexto: el usuario acaba de pegar una dirección de token y este botón inicia el análisis.\"",
      },
      {
        type: "info-callout",
        title: "Onboarding Flows y Notificaciones",
        text: "Onboarding:\n\"Escribe 4 pantallas de onboarding para MemeScanner. Cada pantalla: título (max 5 palabras), descripción (max 20 palabras), icono sugerido de Lucide. Progresión emocional: curiosidad → comprensión → confianza → acción. Target: persona que nunca usó un scanner crypto.\"\n\nNotificaciones push:\n\"Escribe 10 push notifications para RugPull News. Mix: 3 alertas de seguridad, 3 contenido nuevo, 2 streak reminder, 2 logro ganado. Max 60 caracteres cada una. Tono: urgente pero no alarmista para alertas, motivador para logros.\"",
      },
      {
        type: "info-callout",
        title: "Emails y Posts de Redes",
        text: "Email de bienvenida:\n\"Escribe un email de bienvenida para un nuevo usuario de Smart Academy. Estructura: saludo personalizado, 3 cosas que puede hacer ahora, primer paso sugerido con CTA, cierre motivador. Max 150 palabras. Tono: mentor amigable.\"\n\nPosts de redes:\n\"Escribe 5 tweets para MemeScanner. Mix: 1 educativo (tip de seguridad), 1 alerta de scam (ficticio), 1 milestone (número de usuarios), 1 tip rápido (cómo usar), 1 engagement (pregunta a la comunidad). Incluye emojis relevantes. Max 280 chars cada uno.\"",
      },
      {
        type: "concept",
        title: "Mantener la Voz: Brand Voice Document",
        text: "El mayor riesgo de usar IA para copy es perder la consistencia de voz. La solución: crea un Brand Voice Document con 5 reglas: 1) Tono general (profesional pero accesible), 2) Vocabulario permitido ('protección', 'análisis', 'comunidad'), 3) Vocabulario prohibido ('inversión garantizada', 'hacerse rico'), 4) Nivel de formalidad (tutear, no ser coloquial excesivo), 5) Ejemplos de bien vs mal. Incluye este documento en CADA prompt que pidas a la IA. Así mantiene la voz consistente.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Templates de Prompts: Tu Multiplicador",
        text: "El secreto es crear TEMPLATES de prompts que reutilices. Un prompt de CTA bien hecho lo usas 100 veces cambiando solo el contexto. Un prompt de notificaciones lo reutilizas cada semana. Crea un documento con tus 10 mejores prompts y refínalos con cada uso. En 1 mes, tendrás una máquina de generar copy de alta calidad en minutos.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Sé generar copy de UI, onboarding, notificaciones y emails con IA",
          "Entiendo la importancia del Brand Voice Document para consistencia",
          "Puedo crear templates de prompts reutilizables",
          "Comprendo que cada palabra del microcopy afecta la conversión",
        ],
      },
    ],
  },

  // ─── Lección 9.6: Ejercicio — Workflow Completo con IA ───
  {
    id: "9-6",
    blocks: [
      {
        type: "concept",
        title: "Ejercicio Final: 1 Hora Simulada con IA",
        text: "Vas a simular un workflow real de 1 hora usando IA para mejorar MemeScanner. No necesitas ejecutar los prompts ahora — solo ESCRIBIRLOS. El objetivo es que tengas un pipeline completo de prompts que puedas usar en tu trabajo real. Lo que importa no son las respuestas de la IA — son tus PROMPTS. Un buen prompt es una habilidad que se paga.",
      },
      {
        type: "exercise",
        title: "Minuto 0-10: Research de Competidores",
        text: "Escribe el prompt COMPLETO para analizar 3 competidores de MemeScanner (DEXTools, RugCheck, TokenSniffer).\n\nTu prompt debe incluir:\n1. Las URLs o nombres de los competidores\n2. Qué aspectos analizar (UX, features, pricing, onboarding)\n3. Qué formato quieres (tabla comparativa, bullets, etc.)\n4. Contexto de MemeScanner (qué es, quién es el target)\n5. Qué harás con la información (informar rediseño del onboarding)",
      },
      {
        type: "exercise",
        title: "Minuto 10-20: User Personas",
        text: "Escribe el prompt COMPLETO para generar 2 user personas específicas para MemeScanner.\n\nTu prompt debe incluir:\n1. Contexto del producto (qué es, qué hace)\n2. Qué datos necesitas por persona (nombre, edad, experiencia, dispositivo, frustración, motivación)\n3. El rango de usuarios (novato hasta avanzado)\n4. Formato deseado (ficha estructurada)\n5. Una restricción: 'basadas en datos reales del mercado crypto, no genéricas'",
      },
      {
        type: "exercise",
        title: "Minuto 20-35: Copy en 3 Categorías",
        text: "Escribe 3 prompts separados para generar:\n\na) HEADLINES: 5 headlines para la landing de MemeScanner.\n   Incluye: restricción de longitud, tono, target, qué emoción buscar.\n\nb) MICROCOPY: Texto para los 5 estados del scan result (loading, success safe, success danger, error, empty).\n   Incluye: restricciones de longitud, tono, nivel de tecnicismo.\n\nc) PUSH NOTIFICATIONS: 3 notificaciones para re-engagement de usuarios inactivos.\n   Incluye: max caracteres, tono, qué acción quieres que tome el usuario.",
      },
      {
        type: "exercise",
        title: "Minuto 35-45: Generación Visual",
        text: "Escribe 2 prompts para herramientas de generación de imágenes:\n\na) 3 CONCEPTOS DE BADGE NFT para MemeScanner:\n   Incluye: estilo (flat, 3D, minimal), colores (paleta de MemeScanner), tamaño, fondo, qué logro representa, nivel de rareza.\n\nb) 1 MOOD BOARD del estilo visual de MemeScanner:\n   Incluye: mood/energía, colores dominantes, referencias de estilo, tipo de UI, target emocional.",
      },
      {
        type: "exercise",
        title: "Minuto 45-60: Journey Map + Documentación",
        text: "Escribe 2 prompts finales:\n\na) USER JOURNEY MAP del novato (Carlos) en MemeScanner:\n   Incluye: la persona específica, 5 fases, qué datos quieres por fase (acción, pensamiento, emoción, touchpoint, oportunidad), formato visual/tabla.\n\nb) RESUMEN EJECUTIVO de toda tu hora de trabajo:\n   Incluye: qué outputs generaste, principales hallazgos, próximos pasos recomendados, formato de presentación para el equipo.\n\nEste resumen es lo que presentarías en tu standup de mañana.",
      },
      {
        type: "quote",
        text: "La IA no te hace mejor diseñadora. Tú usando IA te hace imparable. La diferencia está en saber PEDIR.",
        author: "Regla #8 de EXP Academy",
      },
      {
        type: "checkpoint",
        title: "Checklist del Ejercicio",
        items: [
          "He escrito el prompt de research de competidores (completo, copy-pasteable)",
          "He escrito el prompt de user personas (con contexto y restricciones)",
          "He escrito 3 prompts de copy (headlines, microcopy, notifications)",
          "He escrito 2 prompts de generación visual (badges, mood board)",
          "He escrito prompts de journey map y resumen ejecutivo",
          "Todos mis prompts incluyen: contexto, formato, restricciones, y target",
        ],
      },
    ],
  },
];

export default module9Lessons;
