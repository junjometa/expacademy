import { LessonContent } from "./index";

const module5Lessons: LessonContent[] = [
  // ─── Lección 5.1: RugPull News — La Experiencia de Contenido ───
  {
    id: "5-1",
    blocks: [
      {
        type: "concept",
        title: "¿Qué es RugPull News?",
        text: "RugPull News es un portal de noticias crypto impulsado por 10 agentes de IA que generan contenido. 4 agentes son satíricos (humor, memes, sarcasmo) y 6 son serios (análisis, alertas, investigación). Esta variedad tonal crea un producto que INFORMA y ENTRETIENE — una combinación letal para el engagement. Es el producto con mayor base de usuarios potencial del ecosistema.",
      },
      {
        type: "info-callout",
        title: "Las 8 Páginas Principales de RPN",
        text: "1) Home (/): Portada editorial, trending articles, market data bar con datos de OKX API. Primera impresión del ecosistema.\n2) Article (/article/:id): Experiencia de lectura. Acciones: read, like, save, share, comment. Cada acción genera XP.\n3) Feed (/feed): Scroll infinito de artículos con read tracking. Filtros por categoría y agente.\n4) Leaderboard (/leaderboard): Rankings daily, weekly, monthly, all_time.\n5) Profile (/profile): XP, nivel, badges, artículos guardados, historial.\n6) Reporters (/reporters): Perfiles de los 10 agentes IA con personalidad y avatar.\n7) Alerts (/alerts): Notificaciones de seguridad en tiempo real del Risk Engine.\n8) Humor (/humor): Sección de los 4 agentes satíricos. Contenido viral para compartir.",
      },
      {
        type: "concept",
        title: "La Experiencia de Lectura: El Corazón de RPN",
        text: "La página de artículo es donde el usuario pasa más tiempo. El diseño debe invitar a 5 acciones SIN ser invasivo: leer completamente (scroll tracking → XP), dar like (reacción rápida), guardar en favoritos (bookmark para después), compartir (amplificación viral), y comentar (engagement social). Cada acción genera XP, pero el usuario no debe sentir que 'trabaja por puntos' — debe sentir que PARTICIPA en una comunidad.",
      },
      {
        type: "concept",
        title: "Componentes de Identity en RPN",
        text: "RugPull News consume datos del Identity Diamond a través de componentes específicos: IdentityXPBar (muestra XP y nivel actual en el header), IdentityBadges (badges del usuario visibles en su perfil y comentarios), IdentityRewards (SCAN tokens ganados por actividad), IdentityLevelBadge (indicador de nivel junto al nombre en todas las interacciones). Estos componentes se alimentan de la Identity API — el mismo perfil que funciona en los 5 productos.",
      },
      {
        type: "concept",
        title: "Hooks de Engagement",
        text: "El código de RPN usa hooks React personalizados para rastrear engagement: useEngagement gestiona las acciones del usuario (like, read, share, save) y envía eventos al backend que se traducen en XP. useIdentity consume el perfil del usuario (nivel, badges, XP) desde la Identity API. Estos hooks son la conexión entre la UI que diseñas y el sistema de gamificación que vive en blockchain.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "RPN Es Tu Mayor Área de Trabajo",
        text: "RPN es donde más trabajarás. Tiene la mayor variedad de interacciones y la mayor base de usuarios potencial. El diseño de la experiencia de lectura y las acciones sociales son tu prioridad. Piensa en cómo Medium combina lectura limpia con engagement social — ese es tu benchmark.",
      },
      {
        type: "exercise",
        title: "Disposición Ideal de la Página Article",
        text: "Analiza la página Article de RugPull News. Un usuario lee un artículo completo.\n\n1. ¿Cuántas acciones puede hacer? (lista todas)\n2. ¿Dónde deberían estar los botones de like/save/share? (arriba, abajo, flotante lateral, sticky bottom)\n3. ¿Cómo muestras el XP ganado por leer? (modal, toast, animación inline)\n4. ¿Dónde van los comentarios? (debajo del artículo, panel lateral, página separada)\n5. Dibuja en texto la disposición ideal de la pantalla Article completa.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Conozco las 8 páginas principales de RugPull News",
          "Entiendo las 5 acciones de la página Article y su relación con XP",
          "Sé qué son los componentes de Identity y qué datos muestran",
          "Comprendo por qué RPN será mi mayor área de trabajo como diseñadora",
        ],
      },
    ],
  },

  // ─── Lección 5.2: MemeScanner — El Hook Viral ───
  {
    id: "5-2",
    blocks: [
      {
        type: "concept",
        title: "MemeScanner: El Producto Más Viral",
        text: "MemeScanner evalúa memecoins y es el producto más VIRAL del ecosistema. Su paleta visual es naranja/púrpura (energía, diversión) — un contraste intencional con el tono serio de SmartScanner. La naturaleza del producto lo hace compartible: un resultado de scan es contenido en sí mismo. 'Este token tiene un risk score de 92/100 — PELIGRO' es un tweet listo.",
      },
      {
        type: "info-callout",
        title: "Los 4 Loops de Engagement",
        text: "Loop 1 — Scan→Share→Traffic: Usuario escanea → resultado visual → comparte → amigo ve resultado → quiere escanear el suyo → VIRAL.\nLoop 2 — Content→Points→Rewards: Interactuar con contenido → ganar SCAN tokens → canjear por funciones premium.\nLoop 3 — Missions→Streaks→FOMO: Misiones diarias ('Escanea 3 tokens hoy') → racha consecutiva → miedo a perder la racha → vuelve mañana.\nLoop 4 — Leaderboard→Competition→Retention: Rankings semanales → competir por el top → usuarios activos compiten entre sí → retención por competencia.",
      },
      {
        type: "concept",
        title: "Páginas Clave de MemeScanner",
        text: "Home: Landing editorial tipo blog de memes + trending scans recientes. Scanner (/scan): Input de dirección → scan → resultado visual con risk score. ES EL FLUJO MÁS IMPORTANTE. Feed social: Actividad reciente, scans compartidos por la comunidad. Ranking: Leaderboard de scanners más activos (semanal y mensual). Missions: Desafíos diarios y semanales. Rewards: Balance de SCAN tokens, tienda de funciones premium. Profile: Historial de scans, badges, nivel, estadísticas personales.",
      },
      {
        type: "concept",
        title: "El Flujo de Scan: El Momento de Verdad",
        text: "El resultado del scan es el MOMENTO de verdad de MemeScanner. Debe ser INMEDIATAMENTE comprensible: verde = safe, rojo = peligro, con un score numérico grande y una etiqueta textual clara. Los detalles (liquidez, holders, contrato) son accesibles pero secundarios. Y un botón ENORME de compartir — porque un resultado de scan es contenido viral listo para publicar.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "La Regla de los 10 Segundos",
        text: "El flujo Scanner tiene que funcionar en menos de 10 segundos: pegar dirección → click scan → ver resultado. Si tarda más, pierdes a María (la trader). Cada segundo de loading es un usuario potencial perdido. Diseña para velocidad: input autoenfocado, botón de scan prominente, resultado que aparece con animación de reveal.",
      },
      {
        type: "example",
        title: "Resultado de Scan: Viral vs Aburrido",
        wrong: "Resultado aburrido: Una tabla con 20 filas de datos técnicos. Sin color. Sin jerarquía. El usuario no sabe si el token es seguro o no sin leer toda la tabla. Imposible de compartir como screenshot atractivo.",
        right: "Resultado viral: Score GRANDE en el centro (ej: '23/100') con color rojo intenso. Etiqueta clara: 'ALTO RIESGO'. 3 factores principales con iconos. Botón de compartir que genera una card visual lista para Twitter. El screenshot del resultado ES el contenido viral.",
      },
      {
        type: "exercise",
        title: "Diseña el Resultado de Scan Perfecto",
        text: "Diseña (en texto) el resultado de scan ideal para MemeScanner:\n\n1. ¿Qué información se muestra PRIMERO? (en los primeros 2 segundos)\n2. ¿Qué información se muestra bajo demanda? (click para expandir)\n3. ¿Dónde está el botón de compartir y qué genera? (link, imagen, card)\n4. ¿Cómo se ve en mobile? (375px de ancho)\n5. ¿Cómo se diferencia un resultado de 90/100 (safe) de uno de 15/100 (peligro)?",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Puedo explicar los 4 loops de engagement de MemeScanner",
          "Entiendo por qué el flujo de scan debe funcionar en <10 segundos",
          "Sé cómo diseñar un resultado de scan que sea viral por naturaleza",
          "Comprendo la diferencia tonal entre MemeScanner (divertido) y SmartScanner (serio)",
        ],
      },
    ],
  },

  // ─── Lección 5.3: SmartScanner — Análisis Profesional ───
  {
    id: "5-3",
    blocks: [
      {
        type: "concept",
        title: "SmartScanner: La Herramienta Seria",
        text: "SmartScanner es la herramienta SERIA del ecosistema. Está diseñada para usuarios técnicos e inversores profesionales como David. Menos gamificación, más datos. Menos emojis, más tablas. Menos colores brillantes, más información densa y organizada. Piensa en Bloomberg Terminal: denso pero estructurado.",
      },
      {
        type: "concept",
        title: "El Flujo Principal: Análisis Profundo",
        text: "El flujo de SmartScanner es más completo que MemeScanner: 1) Input de dirección del contrato, 2) Seleccionar blockchain (Ethereum, BSC, Polygon, etc.), 3) Análisis profundo multicadena automático, 4) Reporte completo con: Risk score (0-100), funciones peligrosas detectadas en el código, concentración de holders, smart money analysis (qué hacen los grandes inversores), código del contrato analizado, historial de transacciones. 5) Todo exportable en PDF profesional.",
      },
      {
        type: "example",
        title: "MemeScanner vs SmartScanner: Tono de Diseño",
        wrong: "Tono incorrecto para SmartScanner: 'Risk Score: 73 ¡Tu token parece seguro!' — demasiado casual para un profesional que gestiona fondos. Los emojis y el tono entusiasta destruyen la credibilidad para David.",
        right: "Tono correcto para SmartScanner: 'Risk Assessment: 73/100 (Moderate) | Liquidity: 8/10 — Locked 12 months | Holders: 6/10 — Top 10 hold 34% | Code: 7/10 — No critical vulnerabilities | [Export PDF] [Share Report]' — profesional, claro, accionable.",
      },
      {
        type: "concept",
        title: "Diferencias de Diseño vs MemeScanner",
        text: "MemeScanner: rápido, visual, divertido, orientado a novatos, paleta naranja/púrpura, gamificación visible, resultado en 3 segundos. SmartScanner: profundo, técnico, serio, orientado a profesionales, paleta azul/gris, gamificación mínima, análisis completo en 10-30 segundos. Mismo motor de análisis por debajo, pero dos experiencias COMPLETAMENTE diferentes.",
      },
      {
        type: "callout",
        calloutType: "info",
        title: "El Reto de Diseño: Denso Sin Ser Confuso",
        text: "El diseño de SmartScanner es COMPLETAMENTE diferente a MemeScanner. El reto es que sea denso sin ser confuso. Usa: tablas con headers claros, separación visual entre secciones, jerarquía tipográfica estricta (H1→H2→H3→body), whitespace estratégico para dar respiro visual, y anchors/navigation para secciones del reporte largo.",
      },
      {
        type: "concept",
        title: "El Reporte PDF: El Entregable de David",
        text: "Para David, el reporte PDF es EL producto. No es un 'extra' — es lo que justifica el precio premium. El PDF debe incluir: portada profesional con logo del ecosistema, resumen ejecutivo en la primera página, análisis detallado por categoría, gráficos claros (no decorativos), metodología de análisis, timestamp y hash de verificación on-chain. David lo imprime y lo presenta en reuniones.",
      },
      {
        type: "exercise",
        title: "Diseña la Pantalla de Resultado de SmartScanner",
        text: "Diseña (en texto) el resultado de análisis de SmartScanner para un contrato con risk score 65/100:\n\n1. ¿Qué secciones tiene el reporte? (lista en orden)\n2. ¿Cómo organizas la información técnica para que sea escaneable?\n3. ¿Dónde está el botón de exportar PDF y qué incluye?\n4. ¿Cómo se diferencia de un resultado de MemeScanner para el mismo token?\n5. ¿Qué información necesita David que Carlos NO necesita?",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Entiendo que SmartScanner tiene un tono completamente diferente a MemeScanner",
          "Sé qué información incluye un análisis profundo (risk score, holders, código, etc.)",
          "Comprendo que el PDF es el producto principal para David",
          "Puedo diseñar un reporte denso sin que sea confuso",
        ],
      },
    ],
  },

  // ─── Lección 5.4: Smart Academy — El Flujo de Aprendizaje ───
  {
    id: "5-4",
    blocks: [
      {
        type: "concept",
        title: "Smart Academy: Educación Gamificada",
        text: "Smart Academy es la plataforma educativa gamificada del ecosistema. Su flujo de aprendizaje sigue una secuencia clara: seleccionar curso → ver overview → empezar → consumir bloque a bloque → interactuar con ejercicios → validar conocimiento → ganar XP → siguiente bloque → completar módulo → obtener certificado NFT. Cada paso está diseñado para mantener el momentum.",
      },
      {
        type: "info-callout",
        title: "Tipos de Bloques de Contenido",
        text: "Smart Academy usa los mismos tipos de bloques que esta app que estás usando ahora mismo:\n- Concept: Explicación de un concepto (texto educativo)\n- Exercise: Actividad práctica que el usuario completa\n- Checkpoint: Autoevaluación con checklist interactiva\n- Example: Comparación wrong/right para mostrar buenas prácticas\n- Callout: Tip, warning o info destacada\n- Connection: Cómo se relaciona con otros temas\n- Quote: Cita memorable o principio clave",
      },
      {
        type: "callout",
        calloutType: "info",
        title: "Meta-Experiencia: Estás Dentro del Producto",
        text: "Esta misma app (EXP Academy) está construida con la MISMA arquitectura que Smart Academy. Mientras estudias, estás experimentando el producto que vas a diseñar. Cada frustración que sientas, cada momento de confusión, cada instante de satisfacción — es feedback directo para tu diseño de Smart Academy.",
      },
      {
        type: "concept",
        title: "Gamificación Estructural (No Adictiva)",
        text: "La gamificación de Smart Academy es ESTRUCTURAL, no adictiva. Esto significa: XP por bloque completado (recompensa el progreso real), quiz al final de cada módulo (valida aprendizaje, no solo clicks), certificado NFT al completar curso (logro verificable con valor real). Lo que NO hay: loot boxes, random rewards, manipulación psicológica, presión temporal artificial. El usuario aprende porque QUIERE, no porque un sistema lo manipula.",
      },
      {
        type: "concept",
        title: "Certificaciones NFT: El Diploma Verificable",
        text: "Al completar un curso en Smart Academy, el usuario recibe un certificado como NFT en blockchain. Este certificado: se mintea en blockchain (verificable por cualquiera), es propiedad del usuario (no de la plataforma), se muestra en su perfil global del ecosistema, y funciona como un diploma universitario pero verificable criptográficamente. Cualquier empresa o persona puede verificar que el certificado es auténtico con un click.",
      },
      {
        type: "connection",
        title: "Diseño Instruccional + Diseño de Producto",
        text: "Academy es donde el diseño instruccional se encuentra con el diseño de producto. No solo importa que sea bonito — importa que el usuario APRENDA. Esto requiere: spacing generoso para reducir fatiga visual, tipografía legible a cualquier hora del día, jerarquía visual que guíe el ojo en orden correcto, ritmo de contenido (concepto → ejemplo → práctica → validación), y pausas naturales entre bloques para que el cerebro procese.",
      },
      {
        type: "exercise",
        title: "Analiza Tu Propia Experiencia",
        text: "Mientras usas EXP Academy (esta misma app), toma notas sobre tu experiencia:\n\n1. ¿Cuántos bloques puedes leer antes de cansarte? ¿Cuántos son 'demasiados' en una sesión?\n2. ¿El ritmo entre conceptos, ejemplos y ejercicios se siente bien? ¿Falta algo?\n3. ¿Los checkpoints te ayudan a validar que entendiste? ¿O se sienten como un trámite?\n4. ¿Echas de menos algo? (audio, video, quiz interactivo, chat con mentor)\n5. Si pudieras cambiar UNA cosa de la experiencia de aprendizaje, ¿cuál sería?",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Conozco los tipos de bloques de contenido de Smart Academy",
          "Entiendo la diferencia entre gamificación estructural y adictiva",
          "Sé cómo funcionan las certificaciones NFT",
          "Comprendo que diseño instruccional y diseño de producto deben fusionarse",
        ],
      },
    ],
  },

  // ─── Lección 5.5: Holding Commerce — La Experiencia de Pago ───
  {
    id: "5-5",
    blocks: [
      {
        type: "concept",
        title: "Holding Commerce: Lo Que el Usuario VE",
        text: "Holding Commerce es el motor de pagos del ecosistema (el Commerce Diamond que vimos en el Módulo 2). Pero tú no diseñas el backend de pagos — diseñas lo que el usuario VE. Y la experiencia de pago es donde más dinero se pierde o se gana. Un checkout mal diseñado puede tener 80% de abandono. Uno bien diseñado puede tener 30%. Esa diferencia es MUCHO dinero.",
      },
      {
        type: "concept",
        title: "Paso 1: La Página de Pricing",
        text: "El usuario llega a la página de pricing. Aquí debe ver: comparación clara de planes (Free vs Basic vs Pro), beneficios de cada plan con checkmarks visuales, CTA destacado en el plan recomendado, y precios sin ambigüedad. El plan recomendado debe ser el del medio — esto se llama 'anchoring effect': el plan caro hace que el medio parezca razonable, y el free hace que el medio parezca 'poco más por mucho más valor'.",
      },
      {
        type: "concept",
        title: "Paso 2: Checkout",
        text: "El usuario selecciona un plan y va al checkout. Aquí ve: resumen claro de lo que va a comprar (nombre del plan, beneficios, duración), precio en crypto (ETH, USDT) con equivalente en USD para referencia, botón para conectar wallet si no está conectada, y un resumen final antes de confirmar. Cada campo extra que añadas al checkout AUMENTA el abandono. Mínimo absoluto de pasos.",
      },
      {
        type: "concept",
        title: "Paso 3: Confirmación de Pago en Blockchain",
        text: "El usuario confirma el pago. Aquí la experiencia es CRÍTICA porque blockchain puede tardar 10-30 segundos. El usuario ve: pantalla de confirmación clara (qué paga, cuánto, a quién), botón de confirmar que lanza la transacción, y un loading INFORMATIVO — no un spinner genérico sino pasos: 'Paso 1 de 3: Enviando transacción...', 'Paso 2: Esperando confirmación...', 'Paso 3: Activando tu plan...'.",
      },
      {
        type: "callout",
        calloutType: "warning",
        title: "El Loading de Blockchain NO Es un Spinner",
        text: "El loading de blockchain puede tardar 10-30 segundos. Diseña un loading que INFORME, no un spinner genérico. Muestra el progreso paso a paso, un mensaje de contexto ('Las transacciones en blockchain tardan unos segundos — tu pago es seguro'), y un indicador visual de progreso. Un usuario que entiende QUÉ está pasando espera pacientemente. Un usuario que ve solo un spinner piensa que algo falló.",
      },
      {
        type: "concept",
        title: "Paso 4: Confirmación + Recompensa",
        text: "El pago se confirma. Este es el momento de MÁXIMO DELEITE — el usuario acaba de darte dinero. Hazle sentir que fue la mejor decisión. Muestra: '¡Pago completado!' con confetti y animación, +100 XP mostrado prominentemente, badge 'Early Supporter' si es primera compra, lista de funciones desbloqueadas ('Has desbloqueado: scans ilimitados, alertas premium, exportar PDF'). Este momento define si el usuario se siente bien con su compra o tiene 'buyer\'s remorse'.",
      },
      {
        type: "concept",
        title: "Paso 5: Post-Compra",
        text: "Después de la compra, el usuario necesita: email/notificación de confirmación con receipt, funciones premium activadas INMEDIATAMENTE (no 'espera 24 horas'), receipt verificable en blockchain (transparencia total), y un call-to-action para usar su nueva función premium favorita. El primer uso de una función premium después de pagar es el momento que CONFIRMA que valió la pena.",
      },
      {
        type: "exercise",
        title: "Diseña la Página de Pricing de MemeScanner",
        text: "Diseña (en texto) la página de pricing ideal para MemeScanner con 3 planes:\n\nPlan 1: FREE — ¿qué incluye? ¿qué limita?\nPlan 2: BASIC ($2.99/mes) — ¿qué añade vs free? ¿5 beneficios?\nPlan 3: PRO ($4.99/mes) — ¿qué añade vs basic? ¿5 beneficios?\n\nPara cada plan escribe: nombre, precio, 5 beneficios con checkmarks, texto del CTA.\n¿Cuál es el plan destacado y por qué?\n¿Qué truco de anchoring usas para que el BASIC parezca la mejor opción?",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Conozco los 5 pasos del flujo de compra desde la perspectiva del usuario",
          "Entiendo el anchoring effect en la página de pricing",
          "Sé diseñar un loading de blockchain informativo, no un spinner",
          "Comprendo que el momento post-compra define la satisfacción del usuario",
        ],
      },
    ],
  },

  // ─── Lección 5.6: Ejercicio — Puntos de Fricción y Soluciones ───
  {
    id: "5-6",
    blocks: [
      {
        type: "concept",
        title: "Ejercicio Final: Encuentra y Resuelve la Fricción",
        text: "Cada producto del ecosistema tiene puntos de fricción — momentos donde el usuario puede confundirse, frustrarse o abandonar. Tu trabajo como diseñadora no es crear pantallas bonitas — es ELIMINAR FRICCIÓN. En este ejercicio, vas a analizar un producto a fondo, identificar sus puntos débiles, y proponer soluciones de diseño concretas.",
      },
      {
        type: "exercise",
        title: "Parte 1: Elige Tu Producto y Mapea el Flujo",
        text: "Elige UN producto del ecosistema (RugPull News, MemeScanner, SmartScanner, Smart Academy, o Global Portal) — el que más te interese.\n\nDescribe su flujo principal paso a paso con MÍNIMO 6 pasos. Ejemplo para MemeScanner:\n1. Usuario llega a la home de MemeScanner\n2. Ve el campo de input y pega la dirección del token\n3. Presiona el botón de scan\n4. Ve el loading mientras el análisis se ejecuta\n5. Recibe el resultado con risk score y detalles\n6. Decide compartir el resultado o hacer otro scan\n\nSé específico: ¿qué ve en cada paso? ¿Qué toca? ¿Qué espera que pase?",
      },
      {
        type: "exercise",
        title: "Parte 2: Identifica 3 Puntos de Fricción",
        text: "Del flujo que mapeaste, identifica 3 momentos donde el usuario puede:\n- Confundirse: no sabe qué hacer o qué significa algo\n- Frustrarse: algo es lento, feo, o no funciona como espera\n- Abandonar: decide que no vale la pena y cierra la app\n\nPara cada punto de fricción, describe:\n1. ¿En qué paso exacto ocurre?\n2. ¿Qué persona (Carlos, María, David) es más afectada?\n3. ¿Cuál es la consecuencia? (¿abandona? ¿se confunde? ¿pierde confianza?)",
      },
      {
        type: "exercise",
        title: "Parte 3: Propón Soluciones de Diseño",
        text: "Para CADA punto de fricción del paso anterior, propón UNA SOLUCIÓN DE DISEÑO específica:\n\n1. ¿Qué cambiarías visualmente? (colores, tamaños, posiciones, layout)\n2. ¿Qué texto añadirías o cambiarías? (labels, tooltips, mensajes de error)\n3. ¿Qué interacción mejorarías? (clicks, animaciones, feedback visual)\n\nIMPORTANTE: No propongas soluciones técnicas (eso es para el developer). Propón soluciones de DISEÑO y EXPERIENCIA. No 'optimizar el backend para que sea más rápido' sino 'mostrar un skeleton loading con información parcial mientras carga el resto'.",
      },
      {
        type: "exercise",
        title: "Parte 4: Before & After",
        text: "Elige la pantalla MÁS problemática de las que identificaste. Dibuja (en texto) el BEFORE y AFTER:\n\nBEFORE (estado actual):\n- Describe la pantalla como es ahora, con sus problemas visibles\n- Marca los puntos de fricción con [PROBLEMA]\n\nAFTER (tu propuesta):\n- Describe la misma pantalla con tus mejoras implementadas\n- Marca las soluciones con [SOLUCIÓN]\n\nEste before/after es el tipo de entregable que presentarías al equipo de producto.",
      },
      {
        type: "quote",
        text: "No diseñes para el usuario que ya sabe. Diseña para el que acaba de llegar y no entiende nada. Si él lo entiende, todos lo entienden.",
        author: "Regla #4 de EXP Academy",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Criterio de Éxito",
        text: "Tu ejercicio es exitoso si: 1) Tu flujo tiene suficiente detalle para que un developer pueda implementarlo. 2) Tus puntos de fricción son REALES, no genéricos. 3) Tus soluciones son específicas y accionables. 4) Tu before/after muestra un cambio visual claro y justificado. 5) Un product manager leería tu análisis y diría 'esto tiene sentido, vamos a hacerlo'.",
      },
      {
        type: "checkpoint",
        title: "Checklist del Ejercicio",
        items: [
          "He mapeado el flujo principal de mi producto elegido (6+ pasos)",
          "He identificado 3 puntos de fricción reales y específicos",
          "He propuesto una solución de diseño para cada punto de fricción",
          "He creado un before/after detallado de la pantalla más problemática",
          "Mis soluciones son de diseño/experiencia, no técnicas",
        ],
      },
    ],
  },
];

export default module5Lessons;
