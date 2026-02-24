import { LessonContent } from "./index";

const module4Lessons: LessonContent[] = [
  // ─── Lección 4.1: Los 4 Perfiles de Usuario ───
  {
    id: "4-1",
    blocks: [
      {
        type: "concept",
        title: "¿Por Qué Necesitas Personas?",
        text: "Una 'persona' es un perfil ficticio basado en datos reales que representa a un segmento de tus usuarios. No diseñas para 'todo el mundo' — diseñas para Carlos, María, David y Token LaunchPad. Cada uno tiene motivaciones, frustraciones y necesidades diferentes. Si intentas diseñar para todos a la vez, no diseñas para nadie.",
      },
      {
        type: "concept",
        title: "Persona 1 — El Novato Curioso: Carlos, 28 años",
        text: "Carlos no sabe de crypto más allá de Bitcoin. Llegó porque un amigo le dijo 'invierte en esta moneda'. Quiere entender si es seguro ANTES de poner dinero. Su frustración principal: todo es críptico, no entiende los términos técnicos. Lo que busca: respuestas simples — '¿es seguro o no?'. Su producto de entrada es RugPull News (contenido divulgativo) o MemeScanner (escaneo rápido con resultado visual claro).",
      },
      {
        type: "callout",
        calloutType: "warning",
        title: "Carlos Es Tu Estándar de Diseño",
        text: "Carlos es tu usuario MÁS importante. Si Carlos no entiende tu diseño, has fallado. Él es el estándar. Cada pantalla, cada botón, cada texto debe pasar el 'test de Carlos': ¿lo entendería alguien que no sabe nada de crypto? Si la respuesta es no, rediseña.",
      },
      {
        type: "concept",
        title: "Persona 2 — La Trader Activa: María, 34 años",
        text: "María lleva 2 años en crypto y opera diariamente. Conoce los riesgos pero no tiene tiempo para investigar cada token manualmente. Quiere herramientas RÁPIDAS — escanear un token en 10 segundos, no en 2 minutos. Su frustración: las herramientas existentes son lentas y tienen interfaces feas. Lo que busca: velocidad, datos claros, alertas automáticas. Su producto de entrada es MemeScanner (herramienta directa y rápida).",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "María No Tiene Paciencia",
        text: "María no tiene paciencia. Si tu flujo de scan tiene un paso de más, se va a la competencia. Cada click extra es un usuario perdido. Mide tu flujo en clicks: si el scan completo toma más de 3 clicks (pegar dirección → scan → resultado), algo sobra.",
      },
      {
        type: "concept",
        title: "Persona 3 — El Inversor Profesional: David, 45 años",
        text: "David gestiona fondos e invierte grandes cantidades. Necesita análisis PROFUNDO y datos verificables — no opiniones, no scores simplificados. Quiere reportes que pueda mostrar a su equipo y a sus inversores. Su frustración: las herramientas retail no tienen la profundidad que necesita. Lo que busca: rigor, datos completos, exportables en PDF. Su producto de entrada es SmartScanner (análisis técnico profesional).",
      },
      {
        type: "callout",
        calloutType: "info",
        title: "David Necesita Profesionalismo",
        text: "David necesita que todo sea PROFESIONAL. Nada de emojis, nada de gamificación visible — datos limpios y exportables. Piensa en Bloomberg o TradingView: denso pero organizado. Si David ve confetti o un '¡genial!' después de un scan, pierde confianza en la herramienta.",
      },
      {
        type: "concept",
        title: "Persona 4 — La Empresa: Token LaunchPad Inc.",
        text: "Token LaunchPad lanza un nuevo token y quiere demostrar que es legítimo. Necesita certificación de seguridad verificable — un sello que diga 'este proyecto pasó auditoría'. Quiere mostrar al mundo que su contrato es seguro. Su frustración: las auditorías tradicionales son caras ($10,000+) y lentas (semanas). Lo que busca: certificado rápido, público, verificable en blockchain. Su producto de entrada es el Risk Engine (auditoría automatizada) + Smart Academy (certificación NFT).",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "El Usuario B2B Es Diferente",
        text: "Token LaunchPad es el usuario B2B. La experiencia debe ser completamente diferente a la B2C: formularios estructurados, dashboards de métricas, reportes descargables, facturación empresarial, y soporte dedicado. No mezcles la experiencia B2B con la B2C — son flujos separados.",
      },
      {
        type: "exercise",
        title: "Tu Persona Favorita en Detalle",
        text: "Elige la persona que más te interese (Carlos, María, David o Token LaunchPad). Escribe su día completo desde que se despierta hasta que usa el ecosistema:\n\n1. ¿A qué hora se despierta? ¿Qué es lo primero que hace?\n2. ¿En qué momento del día abre la app del ecosistema?\n3. ¿Desde dónde la abre? (móvil en el metro, desktop en la oficina, tablet en el sofá)\n4. ¿Cuánto tiempo tiene para usarla? (30 segundos, 5 minutos, 1 hora)\n5. ¿Qué emoción siente al abrirla? (curiosidad, urgencia, aburrimiento, miedo)\n6. ¿Qué hace primero? ¿Y después?\n7. ¿Cuándo cierra la app? ¿Satisfecho o frustrado?",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Puedo describir las 4 personas con sus motivaciones y frustraciones",
          "Entiendo por qué Carlos es el estándar de diseño",
          "Sé que María necesita velocidad y David necesita profundidad",
          "Comprendo que el usuario B2B (Token LaunchPad) necesita un flujo diferente",
          "He completado el ejercicio de día completo de mi persona favorita",
        ],
      },
    ],
  },

  // ─── Lección 4.2: Jobs To Be Done por Persona ───
  {
    id: "4-2",
    blocks: [
      {
        type: "concept",
        title: "El Framework JTBD (Jobs To Be Done)",
        text: "Jobs To Be Done es un framework que cambia la forma en que piensas sobre los usuarios. La idea central: los usuarios no compran productos — 'contratan' productos para completar un JOB (trabajo) en su vida. No se trata de lo que el usuario DICE que quiere, sino de lo que NECESITA LOGRAR. El job es la motivación profunda detrás de la acción superficial.",
      },
      {
        type: "example",
        title: "JTBD vs Features",
        wrong: "Pensamiento por features: 'María quiere un botón de scan'. Esto te lleva a diseñar UN BOTÓN. Resultado: botón bonito pero que no resuelve el problema real de María.",
        right: "Pensamiento JTBD: 'María quiere DECIDIR con confianza si invertir en un token en menos de 10 segundos'. Esto te lleva a diseñar TODO EL FLUJO: input rápido, resultado inmediato, datos claros, acción sugerida. El botón es solo una parte.",
      },
      {
        type: "concept",
        title: "Job de Carlos (Novato): PROTEGER Mi Dinero",
        text: "Carlos no quiere 'escanear un token' — quiere SABER si es seguro poner su dinero ahí. Su job: 'Quiero saber si esta moneda es segura ANTES de invertir mi dinero'. Todo lo que diseñes para Carlos debe responder a esa pregunta. El resultado del scan debe decir '🟢 Seguro' o '🔴 Peligroso' en texto GRANDE y claro, no un score numérico de 73/100 que Carlos no sabe interpretar.",
      },
      {
        type: "concept",
        title: "Job de María (Trader): DECIDIR con Confianza",
        text: "María no quiere 'ver datos de un token' — quiere tomar una DECISIÓN rápida e informada. Su job: 'Quiero escanear tokens rápido para tomar decisiones informadas'. Para María, el resultado del scan debe incluir una RECOMENDACIÓN clara: 'Alto riesgo — liquidez baja, holders concentrados' con datos de soporte que ella pueda verificar en 5 segundos.",
      },
      {
        type: "concept",
        title: "Job de David (Inversor): DEMOSTRAR Diligencia",
        text: "David no quiere 'un reporte de seguridad' — quiere DEMOSTRAR a su equipo y sus inversores que hizo due diligence. Su job: 'Quiero datos rigurosos para justificar mis inversiones ante mi equipo'. Para David, el reporte debe ser exportable en PDF con formato profesional, datos verificables on-chain, y la metodología de análisis documentada.",
      },
      {
        type: "concept",
        title: "Job de Token LaunchPad (Empresa): GANAR Confianza del Mercado",
        text: "Token LaunchPad no quiere 'una auditoría' — quiere que el mercado CONFÍE en su proyecto. Su job: 'Quiero un sello de seguridad que inspire confianza a inversores potenciales'. El certificado debe ser visual (embedeable en su web), verificable (link a blockchain), y reconocible (marca del ecosistema asociada a seguridad).",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "La Regla de Oro del JTBD",
        text: "Pega esta frase en tu monitor: '¿Qué JOB está intentando completar el usuario en esta pantalla?' Si no puedes responder en una frase, tu pantalla probablemente sobra o intenta hacer demasiado. Cada pantalla = un job principal.",
      },
      {
        type: "exercise",
        title: "Mapea el Job de Cada Pantalla",
        text: "Toma las 3 pantallas principales de MemeScanner (Home, Scanner, Resultado) y para cada una escribe:\n\n1. ¿Qué JOB intenta completar el usuario aquí?\n2. ¿Cómo sabe el usuario que completó el job? (¿Qué ve?)\n3. ¿Qué pasa si NO completa el job? (¿Frustración? ¿Abandono?)\n4. ¿Cómo mides si tu diseño ayuda a completar el job? (¿Qué métrica?)",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Puedo explicar la diferencia entre 'feature thinking' y 'JTBD thinking'",
          "Conozco el job de cada persona (proteger, decidir, demostrar, ganar confianza)",
          "Entiendo que cada pantalla debe resolver UN job principal",
          "Puedo aplicar la pregunta '¿qué job está completando el usuario?' a mis diseños",
        ],
      },
    ],
  },

  // ─── Lección 4.3: El Customer Journey Completo ───
  {
    id: "4-3",
    blocks: [
      {
        type: "concept",
        title: "Las 5 Fases del Customer Journey",
        text: "Todo usuario pasa por 5 fases desde que descubre el ecosistema hasta que se queda: Descubrimiento → Activación → Engagement → Conversión → Retención. Cada fase tiene sus propios retos de diseño, métricas y oportunidades. Tu trabajo como diseñadora es optimizar CADA transición entre fases — ahí es donde se pierden usuarios.",
      },
      {
        type: "concept",
        title: "Fase 1 — Descubrimiento: La Primera Impresión",
        text: "¿Cómo llega el usuario al ecosistema? Tres canales principales: 1) Twitter/X — un thread viral sobre una estafa, el usuario hace click y llega a RugPull News. 2) Google — busca 'is [token] safe?' y aparece un resultado de MemeScanner. 3) Referido — un amigo envía un link de scan y el usuario ve el resultado. La primera impresión es TODO. Tienes 5 segundos para que el usuario entienda dónde está y qué puede hacer.",
      },
      {
        type: "callout",
        calloutType: "warning",
        title: "5 Segundos para Convencer",
        text: "La primera impresión es TODO. Tienes 5 segundos para que el usuario entienda: 1) QUÉ es esto (herramienta de seguridad crypto), 2) PARA QUÉ sirve (proteger tu inversión), 3) QUÉ puede hacer AHORA (escanear, leer, explorar). Si en 5 segundos no lo tiene claro, cierra la pestaña. Diseña para esos 5 segundos.",
      },
      {
        type: "concept",
        title: "Fase 2 — Activación: El Momento AHA",
        text: "El usuario hace su primera acción: lee un artículo, hace su primer scan, se registra (wallet o email), gana sus primeros +10 XP, y ve el sistema de gamificación por primera vez. El momento AHA es cuando entiende que sus acciones tienen recompensa: '+10 XP' aparece y algo hace click en su cerebro — 'esto me beneficia, quiero más'.",
      },
      {
        type: "concept",
        title: "Fase 3 — Engagement: El Hábito",
        text: "El usuario vuelve al día siguiente y ve su racha. Explora más productos del ecosistema. Interactúa: likes, comments, shares, scans. Sube de nivel y gana su primer badge. Tu diseño de notificaciones y recordatorios marca la diferencia entre un usuario que vuelve y uno que olvida. El engagement no es un momento — es un HÁBITO que tu diseño debe cultivar.",
      },
      {
        type: "concept",
        title: "Fase 4 — Conversión: La Decisión de Pagar",
        text: "El usuario quiere funciones premium, ve la página de pricing, compara planes, decide comprar, completa el pago, y recibe su recompensa. La página de pricing es la página más importante después del onboarding. Cada palabra, cada número, cada CTA importa. Un cambio de copy en el botón de compra puede mover la conversión un 20%.",
      },
      {
        type: "concept",
        title: "Fase 5 — Retención: Que Se Quede Para Siempre",
        text: "Streaks, badges, misiones semanales, contenido nuevo diario en RugPull News, community features como comentarios y leaderboards, nuevos niveles y funciones por desbloquear. La retención no es una feature — es el RESULTADO de todas las decisiones de diseño anteriores. Si el onboarding es bueno, la activación es clara, y el engagement es constante, la retención viene sola.",
      },
      {
        type: "exercise",
        title: "Journey de Carlos: Del Tweet a Premium",
        text: "Mapea el journey completo de Carlos (el novato) desde el tweet viral hasta que compra premium. Para CADA fase escribe:\n\n1. ¿Qué VE? (pantalla, elementos, colores)\n2. ¿Qué SIENTE? (curiosidad, miedo, confusión, emoción)\n3. ¿Qué HACE? (click, scroll, leer, escanear)\n4. ¿Qué podría salir MAL? (confusión, abandono, error)\n5. ¿Cómo lo RESUELVES con diseño? (tu propuesta concreta)",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Puedo nombrar las 5 fases del customer journey",
          "Entiendo que la primera impresión tiene 5 segundos",
          "Sé qué es el momento AHA y por qué es crítico",
          "Comprendo que la retención es resultado del diseño total, no una feature",
        ],
      },
    ],
  },

  // ─── Lección 4.4: Pain Points Actuales ───
  {
    id: "4-4",
    blocks: [
      {
        type: "concept",
        title: "5 Pain Points Reales del Ecosistema",
        text: "Estos son los problemas REALES que enfrentan los usuarios del ecosistema hoy. Cada uno es una oportunidad de diseño para ti. No son bugs técnicos — son problemas de EXPERIENCIA que solo se resuelven con mejor diseño.",
      },
      {
        type: "concept",
        title: "Pain Point 1: Complejidad del Primer Uso",
        text: "El usuario no sabe qué es una wallet. Conectar MetaMask es confuso — ventanas emergentes, firmas, aprobaciones que no entiende. Los términos técnicos asustan: 'conectar wallet', 'aprobar transacción', 'gas fee'. Para Carlos, esto es como pedirle que configure un servidor antes de ver una página web.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Solución: Modo Sin Wallet",
        text: "El onboarding debe tener un modo 'sin wallet' para empezar. Registro con email primero, wallet después. El usuario puede leer artículos, hacer scans básicos y ganar XP sin conectar wallet. Cuando NECESITE una función que requiera wallet (como recibir un badge NFT), ahí le explicas paso a paso cómo conectar. No antes.",
      },
      {
        type: "concept",
        title: "Pain Point 2: Desconexión Entre Productos",
        text: "El usuario no entiende que RugPull News, MemeScanner, SmartScanner y Smart Academy son del MISMO ecosistema. La navegación cross-producto es confusa — se siente como saltar entre apps diferentes. No hay continuidad visual ni contextual.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Solución: Navegación Global y Marca Unificada",
        text: "La barra de navegación global y la identidad visual compartida son CRÍTICAS. Un header/sidebar persistente con los 5 productos, colores coherentes entre productos, y el perfil/XP/nivel visible en TODOS los productos. El usuario debe sentir que navega DENTRO de un ecosistema, no que salta entre apps.",
      },
      {
        type: "concept",
        title: "Pain Point 3: Información Abrumadora",
        text: "Los resultados de scan son demasiado técnicos para novatos. Demasiados datos sin jerarquía visual — todo parece igual de importante. El usuario no sabe qué mirar primero ni cómo interpretar los datos.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Solución: Progressive Disclosure",
        text: "Progressive disclosure: muestra lo esencial primero, los detalles bajo demanda. Nivel 1 (visible): resultado general (seguro/peligroso) en texto grande y color claro. Nivel 2 (un click): resumen de factores principales (liquidez, holders, código). Nivel 3 (expandible): datos técnicos completos para David. Cada usuario profundiza hasta donde necesita.",
      },
      {
        type: "concept",
        title: "Pain Point 4: Gamificación Invisible",
        text: "El usuario gana XP pero no sabe para qué sirve. Los badges existen pero no se celebran — el usuario los descubre por accidente en una pestaña olvidada. El sistema de niveles no comunica qué desbloquea. Resultado: la gamificación existe pero no motiva.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Solución: Gamificación Visible y Explicada",
        text: "La gamificación debe ser VISIBLE y EXPLICADA. Un tooltip que diga 'Los XP te suben de nivel y desbloquean funciones premium' vale oro. Celebraciones de level up que interrumpan (brevemente) la experiencia. Preview del siguiente nivel con sus beneficios. Un badge recién ganado debe mostrarse con animación, no aparecer silenciosamente en una lista.",
      },
      {
        type: "concept",
        title: "Pain Point 5: Mobile como Segunda Clase",
        text: "Muchas pantallas están diseñadas desktop-first. La experiencia mobile es incómoda: botones pequeños, tablas que no caben, flujos que requieren muchos pasos. El 80% del tráfico crypto es mobile. Si tu diseño no funciona perfecto en un iPhone SE, falla para la mayoría.",
      },
      {
        type: "callout",
        calloutType: "warning",
        title: "Mobile FIRST, Siempre",
        text: "80% del tráfico crypto es mobile. Mobile FIRST, siempre. Diseña primero para una pantalla de 375px de ancho. Luego adapta para tablet. Luego para desktop. Los botones de acción deben estar al alcance del pulgar (zona inferior de la pantalla). Los datos deben organizarse en cards apilables, no en tablas anchas.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Puedo nombrar los 5 pain points del ecosistema actual",
          "Tengo ideas para resolver al menos 3 de ellos",
          "Entiendo que progressive disclosure resuelve la sobrecarga de información",
          "Sé que mobile first es obligatorio (80% del tráfico)",
          "Puedo explicar por qué el onboarding sin wallet es el primer paso",
        ],
      },
    ],
  },

  // ─── Lección 4.5: Métricas de Experiencia ───
  {
    id: "4-5",
    blocks: [
      {
        type: "concept",
        title: "No Puedes Mejorar Lo Que No Mides",
        text: "Como diseñadora, no necesitas ser analista de datos. Pero necesitas saber QUÉ pedir cuando preguntes '¿cómo va el producto?'. Las métricas son tu vocabulario para hablar con el equipo de producto y desarrollo. Sin métricas, tus decisiones de diseño son opiniones. Con métricas, son decisiones informadas.",
      },
      {
        type: "info-callout",
        title: "Métricas de Descubrimiento",
        text: "Bounce rate: % de usuarios que llegan y se van sin hacer nada. Si es alto (>70%), tu landing page no convence.\nTime to first action: ¿Cuánto tarda el usuario en hacer ALGO? Si tarda más de 30 segundos, tu CTA no es claro.\nTraffic sources: ¿De dónde vienen? (Twitter, Google, referral). Te dice dónde invertir en marketing.",
      },
      {
        type: "info-callout",
        title: "Métricas de Activación",
        text: "Registration rate: % de visitantes que se registran. Benchmark: 5-15% es bueno.\nTime to AHA moment: ¿Cuánto tarda en hacer su primer scan o leer su primer artículo? Menos de 2 minutos es el objetivo.\nOnboarding completion rate: % que completa el tutorial/onboarding. Si es bajo (<50%), tu onboarding es largo o confuso.",
      },
      {
        type: "info-callout",
        title: "Métricas de Engagement",
        text: "DAU/MAU ratio: Usuarios diarios vs mensuales. Un ratio de 0.2+ es bueno (20% de tus usuarios mensuales vienen cada día).\nActions per session: Cuántas acciones hace por visita. Más acciones = más engagement.\nFeature adoption: % que usa cada función. Si una función tiene <5% de adopción, es invisible o innecesaria.",
      },
      {
        type: "info-callout",
        title: "Métricas de Conversión",
        text: "Free to paid rate: % de usuarios free que pagan. Benchmark SaaS: 2-5% es normal, 5-10% es excelente.\nPricing page conversion: % que ve la página de pricing y termina comprando. Si es bajo (<2%), el pricing o los beneficios no convencen.\nCart abandonment: % que empieza el checkout pero no paga. Cada paso del checkout que añadas aumenta el abandono.",
      },
      {
        type: "info-callout",
        title: "Métricas de Retención",
        text: "D1 retention: % que vuelve al día siguiente. Objetivo: >30%.\nD7 retention: % que vuelve a los 7 días. Objetivo: >15%.\nD30 retention: % que vuelve a los 30 días. Objetivo: >8%.\nStreak length promedio: Cuántos días seguidos usan la app.\nChurn rate: % que abandona por mes. Menor es mejor.",
      },
      {
        type: "callout",
        calloutType: "info",
        title: "La Métrica Única Más Importante",
        text: "Si solo puedes mirar UNA métrica, que sea D7 retention (% de usuarios que vuelven a los 7 días). Si esa sube, todo lo demás suele ir bien. D7 retention te dice si tu producto ofrece valor suficiente para que el usuario vuelva después de la novedad inicial. Es la métrica que separa productos con futuro de productos que mueren.",
      },
      {
        type: "connection",
        title: "Cómo Tus Diseños Afectan Cada Métrica",
        text: "Cada decisión de diseño mueve una métrica: un CTA más claro en la landing → baja el bounce rate. Un onboarding más corto → sube la activation rate. Notificaciones de racha → sube D1 retention. Un pricing page mejor → sube la conversión. Tu trabajo como diseñadora tiene IMPACTO MEDIBLE. Las métricas son la prueba de que tu diseño funciona.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Puedo nombrar al menos 2 métricas por cada fase del journey",
          "Entiendo que D7 retention es la métrica más importante",
          "Sé cómo mis decisiones de diseño afectan métricas concretas",
          "Puedo usar estas métricas para justificar propuestas de diseño",
        ],
      },
    ],
  },

  // ─── Lección 4.6: Ejercicio — User Journey del Novato ───
  {
    id: "4-6",
    blocks: [
      {
        type: "concept",
        title: "Ejercicio Final: El Journey Completo de Carlos",
        text: "Este es el ejercicio más importante del módulo. Vas a crear el user journey COMPLETO de Carlos (el novato) con un nivel de detalle que podrías presentar al equipo de producto. No es un diagrama abstracto — es una secuencia concreta de pantallas, emociones y decisiones.",
      },
      {
        type: "exercise",
        title: "Paso 1: Descubrimiento",
        text: "Carlos ve un tweet: 'Mi amigo perdió $500 en este token. ¿Cómo saber si es seguro?'\nEl tweet tiene un link a un artículo de RugPull News.\n\nEscribe:\n1. ¿Qué ve Carlos al hacer click? (describe la pantalla)\n2. ¿Qué emoción tiene? (curiosidad, miedo, confusión)\n3. ¿Qué hace en los primeros 5 segundos?\n4. ¿Qué podría hacer que CIERRE la pestaña inmediatamente?",
      },
      {
        type: "exercise",
        title: "Paso 2: Primera Interacción",
        text: "Carlos termina de leer el artículo y ve un CTA: 'Escanea cualquier token gratis'.\n\nEscribe:\n1. ¿Qué botón toca? ¿Dónde está en la pantalla?\n2. ¿Qué pasa? (le pide dirección del token, o tiene un ejemplo precargado)\n3. ¿Qué resultado ve? ¿Lo entiende?\n4. ¿El resultado responde su pregunta original: '¿es seguro?'",
      },
      {
        type: "exercise",
        title: "Paso 3: Registro",
        text: "Carlos quiere guardar el resultado del scan para mostrárselo a su amigo.\n\nEscribe:\n1. ¿Qué motivación tiene para registrarse? (guardar scan, recibir alertas, ganar XP)\n2. ¿Cómo se registra? (email, wallet, Google — ¿cuál le pides primero?)\n3. ¿Qué ve INMEDIATAMENTE después de registrarse?\n4. ¿Le muestras un onboarding? ¿De cuántos pasos? ¿Qué le explicas?",
      },
      {
        type: "exercise",
        title: "Paso 4: Primeros XP",
        text: "Carlos ha leído un artículo y hecho un scan. Ha ganado XP.\n\nEscribe:\n1. ¿Cuántos XP ganó en total en esta primera sesión?\n2. ¿Entiende qué son los XP y para qué sirven?\n3. ¿Qué le muestras para explicarle el sistema? (tooltip, modal, onboarding step)\n4. ¿Qué le motiva a seguir? ¿Qué ve que le hace querer 'un poco más'?",
      },
      {
        type: "exercise",
        title: "Paso 5: El Día Siguiente",
        text: "Han pasado 24 horas. Carlos no ha vuelto a la app.\n\nEscribe:\n1. ¿Le envías una notificación? ¿De qué tipo? ¿Con qué texto?\n2. Si vuelve, ¿qué le muestra la app? (¿su racha? ¿nuevo contenido? ¿su XP?)\n3. Si NO vuelve en 3 días, ¿qué haces? (email, notificación, nada)\n4. ¿Cómo mantienes su interés sin ser spam?",
      },
      {
        type: "exercise",
        title: "Paso 6: Primera Semana",
        text: "Ha pasado una semana. Carlos ha vuelto 4 de 7 días.\n\nEscribe:\n1. ¿Cuántas veces ha vuelto y qué ha hecho cada vez?\n2. ¿Ha explorado otros productos además de donde empezó?\n3. ¿Ha considerado pagar? ¿Qué lo motivaría?\n4. ¿Qué nivel tiene? ¿Ha ganado algún badge?\n5. Para cada visita, identifica: qué puede salir MAL y cómo lo resolverías con diseño.",
      },
      {
        type: "quote",
        text: "El mejor diseño no es el que gana premios — es el que hace que Carlos vuelva mañana.",
        author: "Principio #1 de EXP Academy",
      },
      {
        type: "checkpoint",
        title: "Checklist del Ejercicio",
        items: [
          "He descrito el descubrimiento de Carlos con detalle de pantalla y emoción",
          "He mapeado su primera interacción paso a paso",
          "He diseñado el flujo de registro con motivación clara",
          "He planificado cómo le explico el sistema de XP",
          "He diseñado la estrategia de retención para el día siguiente",
          "He proyectado su primera semana completa con puntos de fallo y soluciones",
        ],
      },
    ],
  },
];

export default module4Lessons;
