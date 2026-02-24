import { LessonContent } from "./index";

const module6Lessons: LessonContent[] = [
  // ─── Lección 6.1: Los Componentes Compartidos ───
  {
    id: "6-1",
    blocks: [
      {
        type: "concept",
        title: "10 Componentes de Gamificación del Ecosistema",
        text: "El ecosistema tiene 10 componentes de gamificación que aparecen en TODOS los productos. Son la capa visual que conecta al usuario con el sistema de XP, niveles, badges y rewards. Cada componente consume datos del Identity Diamond y se renderiza de forma consistente en RugPull News, MemeScanner, SmartScanner, Smart Academy y el Global Portal. Conócelos todos.",
      },
      {
        type: "concept",
        title: "1. XPBar (IdentityXPBar)",
        text: "Barra de progreso que muestra XP actual vs XP necesario para el siguiente nivel. Aparece en: header de todas las webs, perfil de usuario, sidebar expandida. Datos que necesita: currentXP, nextLevelXP, level, percent. Estados: loading (shimmer animado con la forma de la barra), normal (barra llena proporcionalmente), almost-level-up (glow pulsante cuando está al 90%+). Es el componente más VISTO del ecosistema — si solo diseñas uno bien, que sea este.",
      },
      {
        type: "concept",
        title: "2. BadgeDisplay (IdentityBadges)",
        text: "Grid de badges ganados vs no ganados. Los badges ganados se muestran coloridos con un brillo sutil. Los no ganados aparecen en gris con silueta y un tooltip: 'Gana este badge haciendo X'. Aparece en: perfil del usuario, sidebar expandida, modal de logros. Los badges no ganados son tan importantes como los ganados — crean ASPIRACIÓN. El usuario ve qué le falta y quiere completar la colección.",
      },
      {
        type: "concept",
        title: "3. LevelIndicator (IdentityLevelBadge)",
        text: "Badge compacto que muestra el nivel actual del usuario. El color cambia según el nivel: gris (1-2), bronce (3-4), plata (5-6), oro (7-8), diamante (9-10). Aparece en: header junto al avatar, leaderboards, comentarios, perfil público. Debe ser legible a 16px de tamaño. Compacto pero informativo — el usuario debe poder leer su nivel de un vistazo.",
      },
      {
        type: "concept",
        title: "4. LevelUpOverlay",
        text: "Overlay fullscreen que aparece cuando el usuario sube de nivel. Muestra: confetti de fondo, número de nivel grande y animado, nombre del nuevo nivel, lista de funciones desbloqueadas ('¡Has desbloqueado scans profundos!'). Botones: 'Continuar' o 'Ver lo que desbloqueaste'. Duración: 3-5 segundos con animación antes de poder cerrar. Este es el momento de MÁXIMA dopamina — inviértele tiempo de diseño.",
      },
      {
        type: "concept",
        title: "5. XPAnimation y 6. StreakCounter",
        text: "XPAnimation: Números flotantes '+10 XP' que aparecen y suben con fade out. Se disparan INMEDIATAMENTE después de la acción. Duración: 1.5 segundos. Color: dorado/amarillo. Parecen simples pero son el feedback loop más importante — sin esto, el usuario no conecta acción con recompensa. StreakCounter: Display de racha diaria con icono de fuego. Número grande + 'días' + mejor racha histórica. Animación de fuego cuando la racha está activa. Estado 'en peligro': si no ha entrado hoy, el icono cambia a naranja con aviso visual.",
      },
      {
        type: "concept",
        title: "7. MissionCard y 8. RewardPopup",
        text: "MissionCard: Card de misión con título, descripción, recompensa en XP, barra de progreso, y estado (activa/completada/expirada). Tipos: diaria, semanal, especial. Las misiones son micro-objetivos — el diseño debe hacer que se sienta ALCANZABLE, no abrumador. RewardPopup: Popup cuando ganas un reward (badge, tokens, desbloqueo). Muestra imagen del reward, nombre, descripción breve. Animación de entrada: scale desde 80% + bounce elástico. Auto-close después de 5 segundos o click para cerrar.",
      },
      {
        type: "concept",
        title: "9. GamificationOverlay y 10. AccessGate",
        text: "GamificationOverlay: Container invisible que monta XPAnimation + LevelUpOverlay + RewardPopup. Se superpone a TODA la app con z-index alto para estar siempre visible. Todo lo que sea celebración o recompensa pasa por este overlay. AccessGate: Componente que bloquea contenido premium. Muestra 'Necesitas Nivel X para acceder a esto' con barra de progreso hacia ese nivel y CTA 'Te faltan Y XP — así puedes ganarlos'. El gate no debe frustrar — debe MOTIVAR. El usuario debe pensar 'quiero eso', no 'me bloquean'.",
      },
      {
        type: "exercise",
        title: "Análisis de 3 Componentes",
        text: "Elige 3 componentes de los 10 que acabas de aprender. Para cada uno, describe:\n\n1. ¿Qué datos necesita de la Identity API? (nivel, XP, badges, etc.)\n2. ¿Qué estados debe tener? (loading, empty, error, success, special — describe cada uno)\n3. Una micro-interacción que lo haría sentir PREMIUM (animación, sonido, haptic feedback)\n\nEjemplo: XPBar necesita currentXP y nextLevelXP. Estado special: cuando está al 95%, la barra pulsa con glow dorado. Micro-interacción premium: al ganar XP, la barra se llena con animación elástica (overshoot + bounce back).",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Puedo nombrar los 10 componentes de gamificación y su función",
          "Entiendo que XPBar es el componente más visto y más importante",
          "Sé la diferencia entre BadgeDisplay (galería) y LevelIndicator (badge compacto)",
          "Comprendo que GamificationOverlay es la capa que monta todas las celebraciones",
          "Entiendo que AccessGate debe motivar, no frustrar",
        ],
      },
    ],
  },

  // ─── Lección 6.2: El SDK de Identity ───
  {
    id: "6-2",
    blocks: [
      {
        type: "concept",
        title: "¿Qué es el SDK de Identity?",
        text: "Cada frontend del ecosistema tiene un SDK (Software Development Kit) que conecta con la Identity API. No necesitas programar el SDK — necesitas entender QUÉ DATOS te da para diseñar las pantallas correctamente. Cuando diseñes un wireframe, cada dato que muestres debe venir de algún lugar. El SDK es ese lugar.",
      },
      {
        type: "info-callout",
        title: "Los Endpoints de Identity API",
        text: "POST /identity/action → Envía una acción del usuario, recibe XP ganado y posibles rewards.\nGET /identity/profile/:userId → Perfil COMPLETO: nombre, nivel, XP, badges, tier, fecha de registro.\nGET /identity/nfts/:userId → Lista de badges/NFTs del usuario con metadata.\nGET /identity/leaderboard/:product → Rankings por producto (daily, weekly, monthly, all_time).\nGET /identity/access/check/:resource → Verifica si el usuario tiene acceso a un recurso (devuelve true/false + nivel requerido).",
      },
      {
        type: "concept",
        title: "useIdentity Hook: Datos del Usuario",
        text: "El hook useIdentity es el provider que da datos a TODOS los componentes de gamificación. Datos disponibles: profile (nombre, avatar, fecha), level (nivel actual, nombre del nivel), xp (XP actual, XP para siguiente nivel, porcentaje), badges (lista de badges ganados), tokens (balance de YAI, SCAN, SMART), isLoading (boolean para estados de carga), error (si algo falló). Cualquier componente que necesite datos del usuario usa este hook.",
      },
      {
        type: "concept",
        title: "useEngagement Hook: Tracking de Acciones",
        text: "El hook useEngagement gestiona el tracking de interacciones. Funciones disponibles: trackRead(articleId) — usuario leyó un artículo, trackLike(contentId) — usuario dio like, trackShare(contentId, platform) — usuario compartió contenido, trackScan(tokenAddress) — usuario hizo un scan. Cada función llama a la Identity API con POST /identity/action y devuelve el resultado con XP ganado. El componente XPAnimation se dispara automáticamente cuando una de estas funciones retorna XP positivo.",
      },
      {
        type: "example",
        title: "Usando el SDK en Tu Diseño",
        wrong: "Diseñar una pantalla con 'Nivel: ???' sin saber de dónde viene el dato ni cuánto tarda en cargar. El developer recibe tu diseño y pregunta '¿de dónde saco el nivel?' Pierdes tiempo y credibilidad.",
        right: "Diseñar con '[profile.globalLevel]' anotado en el wireframe, sabiendo que viene de GET /identity/profile y tarda ~200ms en cargar. El developer recibe tu diseño, lee la anotación, y sabe exactamente qué hook usar y qué endpoint llamar. Cero ambigüedad.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Tip Práctico para Wireframes",
        text: "Cuando hagas un wireframe y necesites mostrar datos, escribe la referencia al SDK entre corchetes: [useIdentity.level], [useIdentity.xp.current], [useIdentity.badges.length]. Así el developer sabe exactamente de dónde sacarlo. Es el equivalente a etiquetar tus capas en Figma — profesionalismo puro.",
      },
      {
        type: "exercise",
        title: "Anota los Datos de una Pantalla",
        text: "Toma la pantalla de perfil de usuario. Lista TODOS los datos que necesita mostrarse y para cada uno indica:\n\n1. ¿De qué endpoint/hook viene? (useIdentity.profile, useIdentity.badges, etc.)\n2. ¿Cuánto tarda en cargar? (instantáneo si está en caché, ~200ms si no)\n3. ¿Qué muestra mientras carga? (shimmer, spinner, placeholder)\n4. ¿Qué muestra si falla? (mensaje de error amigable)\n\nMínimo 8 datos diferentes (nombre, nivel, XP, badges, racha, tokens, etc.)",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Sé qué datos da cada endpoint de Identity API",
          "Entiendo la diferencia entre useIdentity (datos) y useEngagement (acciones)",
          "Puedo anotar wireframes con referencias al SDK",
          "Comprendo que cada dato tiene un tiempo de carga y necesita un loading state",
        ],
      },
    ],
  },

  // ─── Lección 6.3: Diseño de Estados ───
  {
    id: "6-3",
    blocks: [
      {
        type: "concept",
        title: "Los 5 Estados Obligatorios",
        text: "Cada componente de gamificación necesita TODOS estos estados diseñados: Loading, Empty, Error, Success/Normal, y Special. Si diseñas solo el estado 'normal' (con datos cargados y bonitos), has diseñado el 20% del componente. El 80% restante es lo que pasa cuando los datos no están, fallan, o son especiales.",
      },
      {
        type: "concept",
        title: "Estado 1: Loading",
        text: "Shimmer/skeleton mientras los datos cargan. NUNCA pantalla en blanco — el usuario piensa que algo se rompió. El skeleton debe tener la MISMA FORMA que el contenido final: si la XPBar es un rectángulo de 200x8px, el skeleton es un rectángulo de 200x8px con shimmer animado. Un buen loading state hace que la app se sienta más rápida aunque no lo sea — es una ilusión óptica de velocidad.",
      },
      {
        type: "concept",
        title: "Estado 2: Empty",
        text: "Cuando no hay datos: 0 badges, 0 XP, primer día del usuario. NO dejar vacío — usar como ONBOARDING. Un empty state bien diseñado educa al usuario: 'Aún no tienes badges. ¡Lee tu primer artículo para ganar Getting Started!' con un CTA que lo lleve a la acción. Los empty states son tu mejor oportunidad de enseñar al usuario qué hacer.",
      },
      {
        type: "concept",
        title: "Estado 3: Error",
        text: "Cuando la Identity API no responde. Mensaje amigable: 'No pudimos cargar tus datos. La app sigue funcionando — tu XP se guardará cuando volvamos.' NUNCA mostrar errores técnicos al usuario ('Error 500: Internal Server Error' es inaceptable). Si Identity cae, la app debe seguir funcionando. La gamificación es non-blocking — el usuario puede leer artículos y hacer scans sin ella.",
      },
      {
        type: "concept",
        title: "Estado 4: Success/Normal",
        text: "El estado por defecto con datos cargados correctamente. Es el que más tiempo se ve, así que debe ser el más pulido visualmente. Pero NO es el único estado que diseñas — es uno de cinco. Muchos diseñadores solo diseñan este estado y luego se sorprenden cuando el componente se ve roto en producción.",
      },
      {
        type: "concept",
        title: "Estado 5: Special States",
        text: "Estados que requieren atención visual especial: Almost level up — XPBar al 90%+ con glow pulsante dorado que dice 'casi lo logras'. Streak in danger — si no ha entrado hoy, el StreakCounter cambia a naranja con icono de alerta. New badge earned — el badge recién ganado tiene animación de brillo durante 24 horas en el perfil. Level up — overlay de celebración fullscreen. Estos estados son los que hacen que la gamificación se sienta VIVA.",
      },
      {
        type: "exercise",
        title: "Los 5 Estados del XPBar",
        text: "Diseña (en texto) los 5 estados del componente XPBar:\n\n1. LOADING: ¿Qué forma tiene el skeleton? ¿Color? ¿Animación?\n2. EMPTY (nivel 1, 0 XP): ¿Qué muestra? ¿Texto de ayuda? ¿CTA?\n3. NORMAL (nivel 3, 165/300 XP): ¿Cómo se ve la barra? ¿Qué texto?\n4. ALMOST-LEVEL-UP (nivel 4, 285/300 XP): ¿Qué efecto visual? ¿Glow? ¿Pulso?\n5. LEVEL-UP (animación de 4→5): ¿Qué secuencia de animación? ¿Duración?\n\nPara cada estado, describe exactamente qué VE el usuario.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Sé que cada componente necesita 5 estados diseñados, no solo 'normal'",
          "Entiendo que loading nunca es pantalla en blanco — siempre skeleton",
          "Puedo convertir empty states en oportunidades de onboarding",
          "Sé que los errores de API nunca se muestran técnicos al usuario",
          "Comprendo los special states y por qué hacen la gamificación 'viva'",
        ],
      },
    ],
  },

  // ─── Lección 6.4: Responsive y Cross-Producto ───
  {
    id: "6-4",
    blocks: [
      {
        type: "concept",
        title: "Un Componente, Cinco Productos",
        text: "Los MISMOS componentes de gamificación aparecen en TODOS los productos. Pero cada producto tiene su propia paleta de colores. Los componentes deben adaptarse al color del producto en el que están SIN perder su identidad funcional. La XPBar siempre es una barra de progreso — pero en RugPull News es cyan y en MemeScanner es naranja.",
      },
      {
        type: "info-callout",
        title: "Paleta de Acento por Producto",
        text: "RugPull News: Cyan #06B6D4 — informativo, serio pero accesible.\nMemeScanner: Naranja #F97316 + Púrpura #8B5CF6 — energético, divertido, viral.\nSmartScanner: Verde #22C55E — técnico, profesional, sobrio.\nSmart Academy: Violeta #8B5CF6 — educativo, gamificado, progresivo.\nGlobal Portal: Gradiente multi-color — unificador, premium, hogar del ecosistema.\n\nLos fondos, textos y borders son IGUALES en todos los productos. Solo cambia el color de acento.",
      },
      {
        type: "concept",
        title: "Responsive: 3 Breakpoints",
        text: "Mobile (<768px): Componentes stack verticalmente. XPBar compacta en el header (solo barra, sin texto detallado). Badges en scroll horizontal. MissionCards apiladas. StreakCounter inline. Tablet (768-1024px): Layout mixto. Sidebar visible con gamificación. Cards en grid de 2 columnas. Desktop (>1024px): Sidebar expandida con todos los componentes. Cards en grid de 3-4 columnas. Tooltips y hovers disponibles.",
      },
      {
        type: "example",
        title: "XPBar en Mobile vs Desktop",
        wrong: "Misma XPBar en mobile y desktop: en desktop se ve bien (200px de ancho, texto de nivel, porcentaje). En mobile queda aplastada, el texto no cabe, los números se superponen. El usuario no puede leer su progreso.",
        right: "XPBar adaptativa: en desktop muestra 'Nivel 4 — 285/300 XP (95%)' con barra ancha. En mobile muestra solo la barra con el número de nivel y porcentaje, sin texto extra. La información se reduce pero la función se mantiene.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Tabla de Component x Product x Breakpoint",
        text: "Crea una tabla de 'componente x producto x breakpoint' en tu Figma. Para cada celda, define el tamaño y la variación de color. Ejemplo: XPBar + MemeScanner + Mobile = barra naranja de 100% width x 6px height, sin texto, solo porcentaje en tooltip. Esto ES tu design system de gamificación — una referencia completa para cualquier developer.",
      },
      {
        type: "concept",
        title: "Mobile First: La Regla de Oro",
        text: "Diseña mobile first. Si funciona en 375px, funciona en todos lados. Los componentes de gamificación deben ser FUNCIONALES en mobile, no solo visibles. Funcional significa: el usuario puede VER su progreso, puede INTERACTUAR con misiones, puede CELEBRAR sus logros — todo en una pantalla de 375x812px. Si un componente no funciona en mobile, no lo incluyas en mobile — muéstralo solo en desktop.",
      },
      {
        type: "exercise",
        title: "Adapta 3 Componentes a Mobile",
        text: "Elige 3 componentes de gamificación y diseña su versión MOBILE (375px de ancho):\n\n1. ¿Qué información se mantiene? ¿Qué se oculta?\n2. ¿Qué tamaño tiene? (width, height en px)\n3. ¿Dónde se posiciona en la pantalla? (header, inline, bottom bar)\n4. ¿Cómo interactúa el usuario? (tap, swipe, long press)\n5. ¿Qué pasa si hay demasiada información? (truncar, tooltip, expandir)",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Entiendo que los mismos componentes se adaptan a 5 productos con diferente accent color",
          "Conozco los 3 breakpoints y qué cambia en cada uno",
          "Sé diseñar mobile first y luego escalar a desktop",
          "Puedo crear una tabla component x product x breakpoint",
        ],
      },
    ],
  },

  // ─── Lección 6.5: Notificaciones y Celebraciones ───
  {
    id: "6-5",
    blocks: [
      {
        type: "concept",
        title: "La Jerarquía de Celebraciones",
        text: "Los momentos de dopamina que retienen al usuario siguen una JERARQUÍA estricta. No todo puede ser confetti — si todo celebra igual, nada es especial. La regla: la intensidad de la celebración debe ser PROPORCIONAL a la rareza del logro. XP toast (cada acción) < Mission complete (varias veces al día) < Badge earned (raro) < Level up (muy raro).",
      },
      {
        type: "info-callout",
        title: "Nivel 1: Toast de XP (Cada Acción)",
        text: "Formato: Toast pequeño arriba-derecha\nContenido: '+10 XP' con icono de estrella\nColor: Dorado/amarillo\nDuración: 1.5 segundos\nAnimación: Slide in desde arriba + fade out\nSonido: Beep sutil (opcional, configurable por el usuario)\nFrecuencia: Cada vez que el usuario gana XP\nImpacto visual: BAJO — no debe interrumpir la actividad",
      },
      {
        type: "info-callout",
        title: "Nivel 2: Mission Complete",
        text: "Formato: Toast más grande con icono de check\nContenido: 'Misión completada: [nombre] — +50 XP'\nColor: Verde success + dorado XP\nDuración: 3 segundos\nAnimación: Slide in + scale sutil\nSonido: Ding satisfactorio (corto)\nFrecuencia: Varias veces al día máximo\nSi fue la última misión del día: toast extendido con 'Todas las misiones completadas — +100 XP bonus'",
      },
      {
        type: "info-callout",
        title: "Nivel 3: Badge Earned (Logro Raro)",
        text: "Formato: Modal centrado sobre overlay semi-transparente\nContenido: Imagen del badge, nombre, descripción, cómo se ganó\nColor: Gradiente del badge + confetti de fondo\nDuración: Permanece hasta que el usuario cierra\nAnimación: Scale from 0 + bounce + partículas\nSonido: Fanfarria corta (2 segundos)\nCTA: 'Ver en mi perfil' + 'Compartir'\nFrecuencia: Máximo 1-2 por sesión (raro)",
      },
      {
        type: "info-callout",
        title: "Nivel 4: Level Up (Muy Raro)",
        text: "Formato: Overlay FULLSCREEN, no se puede ignorar (3 segundos)\nContenido: Número de nivel GRANDE animado, nombre del nivel, lista de funciones desbloqueadas\nColor: Gradiente dorado + partículas brillantes\nDuración: 3-5 segundos de animación, luego botón de continuar\nAnimación: Explosión de partículas + número que crece + confetti persistente\nSonido: Celebración completa (fanfarria + aplausos)\nCTA: 'Continuar' o 'Ver lo que desbloqueaste'\nFrecuencia: Cada X sesiones (muy raro — ese es el punto)",
      },
      {
        type: "info-callout",
        title: "Nivel Extra: Streak Milestone",
        text: "Formato: Toast especial con icono de fuego animado\nContenido: '7 días seguidos — +100 XP bonus'\nColor: Gradiente naranja/rojo (fuego)\nDuración: 3 segundos\nAnimación: Fuego que crece + número que pulsa\nFrecuencia: Máximo 1 por día\nBadge de streak si aplica (ej: 30 días → badge 'Racha Mensual')",
      },
      {
        type: "callout",
        calloutType: "warning",
        title: "La Regla de la Proporcionalidad",
        text: "Las celebraciones deben ser proporcionales al logro. Si un '+5 XP' dispara confetti fullscreen, cuando el usuario suba de nivel no tendrás nada más grande que mostrar. Reserva los fuegos artificiales para lo importante. Un XP toast sutil pero consistente es más efectivo que confetti en cada click.",
      },
      {
        type: "exercise",
        title: "Diseña la Jerarquía para MemeScanner",
        text: "Diseña la jerarquía visual de celebraciones específica para MemeScanner. Para cada tipo, define:\n\n1. +XP por scan: ¿Tamaño? ¿Posición? ¿Duración? ¿Color (naranja)?\n2. Mission complete: ¿Toast o modal? ¿Qué texto? ¿Animación?\n3. Badge earned ('Scam Detective'): ¿Cómo se presenta? ¿Confetti naranja/púrpura?\n4. Level up: ¿Overlay? ¿Qué funciones se desbloquean visualmente?\n5. Streak (7 días de scans): ¿Cómo celebras? ¿Fuego naranja?\n\nRecuerda: los colores deben seguir la paleta de MemeScanner (naranja/púrpura).",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Conozco los 4 niveles de celebración y su jerarquía",
          "Entiendo que la intensidad debe ser proporcional a la rareza",
          "Sé que Level Up es el momento más impactante y debe ser memorable",
          "Puedo adaptar la jerarquía de celebraciones a un producto específico",
        ],
      },
    ],
  },

  // ─── Lección 6.6: Ejercicio — Diseña el Flujo de Badge ───
  {
    id: "6-6",
    blocks: [
      {
        type: "concept",
        title: "Ejercicio Final: El Flujo Completo de un Badge",
        text: "Vas a diseñar el flujo visual COMPLETO de ganar el badge 'Scam Detective' en MemeScanner. Este badge se otorga cuando el usuario reporta su 5ta estafa verificada. El flujo cubre desde la acción que lo dispara hasta que lo comparte en redes sociales. Cada paso necesita detalle visual.",
      },
      {
        type: "exercise",
        title: "Paso 1: La Acción que lo Dispara",
        text: "El usuario está en la pantalla de resultado de un scan. El token muestra risk score 12/100 (alto riesgo). Hace click en 'Reportar como scam'.\n\nDescribe:\n1. ¿Qué feedback inmediato ve? (loading button, spinner, texto de confirmación)\n2. ¿Cuánto tarda el backend en verificar? (~2 segundos)\n3. ¿Qué mensaje ve cuando el reporte se confirma? ('Reporte #5 verificado — ¡Gracias!')\n4. ¿El botón cambia de estado? (de 'Reportar' a 'Reportado' con check)",
      },
      {
        type: "exercise",
        title: "Paso 2: La Notificación de XP",
        text: "0.5 segundos después de la confirmación del reporte, aparece el toast de XP.\n\nDescribe:\n1. ¿Dónde aparece? (arriba-derecha, centro-arriba, flotante)\n2. ¿Qué tamaño tiene? (px aproximados)\n3. ¿Qué color? (dorado estándar o naranja de MemeScanner)\n4. ¿Qué texto? ('+75 XP' — los reportes valen más)\n5. ¿Animación? (slide in, fade, bounce)\n6. ¿Duración? (1.5 segundos antes de fade out)",
      },
      {
        type: "exercise",
        title: "Paso 3: El Badge Earned",
        text: "0.5 segundos después del XP toast, aparece la celebración del badge.\n\nDescribe:\n1. ¿Modal centrado u overlay fullscreen? ¿Por qué?\n2. ¿Qué imagen muestra? (el badge 'Scam Detective' con su artwork)\n3. ¿Qué texto? (nombre del badge, descripción de cómo se ganó)\n4. ¿Qué desbloqueó? ('Has desbloqueado: reportes prioritarios')\n5. ¿Confetti? ¿De qué color? (naranja/púrpura de MemeScanner)\n6. ¿Sonido? (fanfarria corta)\n7. ¿Botones? ('Ver en mi perfil', 'Compartir', 'Continuar')",
      },
      {
        type: "exercise",
        title: "Paso 4: Después de Cerrar",
        text: "El usuario cierra la celebración del badge.\n\nDescribe:\n1. ¿Dónde ve el badge ahora? (perfil, sidebar, header)\n2. ¿Tiene alguna animación especial por ser nuevo? (brillo durante 24h)\n3. ¿Aparece en el leaderboard junto a su nombre?\n4. ¿Puede hacer click en el badge para ver detalles?\n5. ¿Qué muestra la pantalla de detalle? (metadata del NFT, fecha, rareza)",
      },
      {
        type: "exercise",
        title: "Paso 5: Compartir en Redes",
        text: "El usuario decide compartir su badge en Twitter/X.\n\nDescribe:\n1. ¿Qué imagen se genera para compartir? (OG image con badge, nombre del usuario, nivel)\n2. ¿Qué dimensiones? (1200x630 para Twitter card)\n3. ¿Qué texto acompaña? ('Acabo de ganar el badge Scam Detective en @MemeScanner por detectar 5 estafas')\n4. ¿Se puede personalizar el texto antes de compartir?\n5. ¿Qué CTA tiene la card para quien la vea? ('Escanea tokens gratis en MemeScanner')",
      },
      {
        type: "quote",
        text: "Los componentes de gamificación son pequeños en tamaño pero enormes en impacto. Un '+10 XP' bien colocado retiene más usuarios que una feature entera mal diseñada.",
        author: "Regla #5 de EXP Academy",
      },
      {
        type: "checkpoint",
        title: "Checklist del Ejercicio",
        items: [
          "He diseñado el feedback inmediato del reporte (loading → confirmación)",
          "He detallado el toast de XP (posición, color, texto, animación, duración)",
          "He diseñado la celebración del badge (modal/overlay, imagen, confetti, sonido)",
          "He definido dónde aparece el badge después de cerrar la celebración",
          "He diseñado la experiencia de compartir en redes (OG image, texto, CTA)",
        ],
      },
    ],
  },
];

export default module6Lessons;
