import { LessonContent } from "./index";

const module3Lessons: LessonContent[] = [
  // ─── Lección 3.1: XP — La Moneda de Atención ───
  {
    id: "3-1",
    blocks: [
      {
        type: "concept",
        title: "¿Qué es XP y Por Qué Importa?",
        text: "XP (Experience Points) es la unidad fundamental de progresión en el ecosistema. Cada acción significativa del usuario genera XP: leer un artículo, completar un scan, terminar una lección, referir a un amigo. XP NO es dinero — es una medida de ENGAGEMENT. Cuanto más XP tiene un usuario, más ha interactuado con el ecosistema.",
      },
      {
        type: "callout",
        calloutType: "info",
        title: "XP como Moneda de Atención",
        text: "En la economía de la atención, el recurso más escaso es el TIEMPO del usuario. XP es nuestra forma de decir 'valoramos tu tiempo aquí'. Cada punto de XP representa una acción real del usuario — no se puede comprar, no se puede transferir, no se puede falsificar. Es la métrica más honesta de participación.",
      },
      {
        type: "concept",
        title: "Principios del Sistema de XP",
        text: "El sistema de XP sigue 5 principios fundamentales: 1) Proporcionalidad — acciones más valiosas = más XP (un scan completo vale más que abrir la app). 2) Anti-spam — límites diarios por categoría para evitar farming. 3) Decrecimiento — la acción repetida da menos XP (el artículo #1 del día da 25 XP, el #20 da 5 XP). 4) Cross-producto — el XP es GLOBAL, no por producto. 5) Transparencia — el usuario siempre sabe cuánto XP ganó y por qué.",
      },
      {
        type: "example",
        title: "Anti-Spam: Bien vs Mal",
        wrong: "Sin anti-spam: Un bot lee 500 artículos en 1 hora, gana 12,500 XP, sube al nivel máximo en un día. Los usuarios reales se desmotivan porque ven cuentas de nivel 10 que claramente son bots. La gamificación pierde todo significado.",
        right: "Con anti-spam: Límite de 200 XP/día por categoría. Después de 8 artículos, el XP por artículo baja a 5. Cooldown de 5 minutos entre acciones de la misma categoría. Los bots no pueden farmear, los usuarios reales nunca tocan el límite con uso normal.",
      },
      {
        type: "info-callout",
        title: "Límites Diarios por Categoría",
        text: "Lectura de artículos: máx 200 XP/día (8 artículos a XP completo)\nScans: máx 150 XP/día (6 scans a XP completo)\nLecciones: máx 300 XP/día (6 lecciones a XP completo)\nInteracción social: máx 100 XP/día (votos, comentarios, shares)\nReferrals: sin límite diario (pero máx 1 referral por persona referida)\nTotal teórico máximo: ~750 XP/día para un usuario muy activo",
      },
      {
        type: "concept",
        title: "El Cooldown Inteligente",
        text: "El cooldown no es fijo — es inteligente. Si un usuario lee un artículo de 2,000 palabras en 30 segundos, el sistema sabe que no lo leyó realmente y reduce el XP. Si lo leyó en 4 minutos (velocidad realista), XP completo. Esto se calcula off-chain comparando el tiempo de lectura con la longitud del contenido. El resultado: los usuarios que realmente consumen contenido son recompensados, los que hacen click farming no.",
      },
      {
        type: "connection",
        title: "Impacto en Diseño UX",
        text: "Como diseñadora, necesitas hacer visible el sistema de XP sin que sea intrusivo: animación de +XP después de cada acción (sutil pero satisfactoria), indicador de XP restante del día por categoría (evita frustración), barra de progreso hacia el siguiente nivel (motivación constante), y historial de XP (transparencia y sentido de logro). El reto: que se sienta como recompensa natural, no como contador de videojuego.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Puedo explicar los 5 principios del sistema de XP",
          "Entiendo cómo funciona el anti-spam (límites, decrecimiento, cooldown)",
          "Sé por qué XP es global y no por producto",
          "Puedo identificar oportunidades de diseño UX para el sistema de XP",
        ],
      },
    ],
  },

  // ─── Lección 3.2: Tabla de XP por Producto ───
  {
    id: "3-2",
    blocks: [
      {
        type: "concept",
        title: "XP por Producto: Tabla Completa",
        text: "Cada producto del ecosistema otorga XP por acciones específicas. Los valores están calibrados para reflejar el VALOR de cada acción para el ecosistema. Una acción que protege al usuario (scan de seguridad) vale más que una acción pasiva (abrir la app). Una acción que genera contenido vale más que una que consume contenido.",
      },
      {
        type: "info-callout",
        title: "RugPull News — Acciones y XP",
        text: "Leer artículo completo: +25 XP\nVotar calidad del artículo: +5 XP\nCompartir artículo (con verificación): +15 XP\nReportar contenido falso (si se confirma): +50 XP\nComentario constructivo (mod approved): +10 XP\nPrimer artículo del día: +10 XP bonus\nRacha de lectura (7 días): +100 XP bonus semanal\nSubmit de noticia verificada: +75 XP",
      },
      {
        type: "info-callout",
        title: "MemeScanner — Acciones y XP",
        text: "Scan básico de token: +20 XP\nScan profundo (análisis completo): +35 XP\nGuardar resultado en watchlist: +5 XP\nCompartir resultado de scan: +15 XP\nReportar falso positivo (si se confirma): +40 XP\nPrimer scan del día: +10 XP bonus\nScanear token antes de que sea reportado: +50 XP bonus ('Early Detective')\n5 scans en un día: +25 XP bonus",
      },
      {
        type: "info-callout",
        title: "SmartScanner — Acciones y XP",
        text: "Scan de smart contract: +30 XP\nAnálisis de vulnerabilidades: +40 XP\nVerificación de auditoría: +20 XP\nReportar vulnerabilidad nueva (si se confirma): +100 XP\nCompartir análisis: +15 XP\nPrimer scan del día: +10 XP bonus\nScanear contrato con vulnerabilidad real: +60 XP bonus\nContribuir al database de patterns: +80 XP",
      },
      {
        type: "info-callout",
        title: "Smart Academy — Acciones y XP",
        text: "Completar lección: +50 XP\nCompletar módulo completo: +200 XP bonus\nPasar quiz con 100%: +30 XP bonus\nCompletar ejercicio práctico: +40 XP\nRacha de estudio (7 días): +150 XP bonus semanal\nPrimer lección del día: +10 XP bonus\nCompletar Smart Academy 100%: +1000 XP bonus ('Master Graduate')\nAyudar a otro usuario (respuesta verificada): +25 XP",
      },
      {
        type: "info-callout",
        title: "Global Portal — Acciones y XP",
        text: "Login diario: +5 XP\nCompletar perfil al 100%: +50 XP (una vez)\nConectar wallet: +30 XP (una vez)\nReferir usuario (que se registra): +100 XP\nReferir usuario (que hace primera compra): +200 XP adicional\nParticipación en evento: +75 XP\nFeedback del producto: +20 XP\nEncuesta completada: +15 XP",
      },
      {
        type: "example",
        title: "Un Día Típico de Usuario Activo",
        wrong: "Usuario casual: Abre la app (+5), lee un artículo (+25), cierra. Total: 30 XP. A este ritmo, tarda 4 días en subir del nivel 1 al 2. Riesgo: abandona por progresión lenta.",
        right: "Usuario activo: Login (+5), lee 3 artículos (+75), hace 2 scans (+55), completa 1 lección (+50), comparte un scan (+15). Total: ~200 XP. Sube de nivel cada 1-2 días. Cada sesión se siente productiva y recompensada.",
      },
      {
        type: "connection",
        title: "Diseñando la Tabla de XP para el Usuario",
        text: "El usuario NO necesita ver esta tabla completa — sería abrumador. Lo que sí necesita: saber cuánto ganó por su última acción (+25 XP con mini-animación), ver un resumen diario ('Hoy has ganado 180 XP'), y descubrir acciones de alto valor ('¿Sabías que compartir un scan te da +15 XP?'). Tu trabajo como diseñadora: hacer que el usuario DESCUBRA el sistema de XP de forma natural, no que lo estudie como un manual.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Conozco las acciones principales de cada producto y su XP",
          "Entiendo por qué algunas acciones valen más que otras",
          "Puedo calcular el XP de un día típico de usuario",
          "Sé cómo comunicar el sistema de XP sin abrumar al usuario",
        ],
      },
    ],
  },

  // ─── Lección 3.3: Niveles y Progresión ───
  {
    id: "3-3",
    blocks: [
      {
        type: "concept",
        title: "El Sistema de 10 Niveles",
        text: "El ecosistema tiene 10 niveles de progresión. Cada nivel requiere más XP que el anterior, siguiendo una curva exponencial suave. Los primeros niveles son rápidos (enganchar al usuario), los intermedios son constantes (mantener motivación), y los últimos son aspiracionales (solo los más dedicados llegan).",
      },
      {
        type: "info-callout",
        title: "Tabla de Niveles y XP Requerido",
        text: "Nivel 1: Explorer — 0 XP (inicio)\nNivel 2: Scout — 100 XP (~1 día activo)\nNivel 3: Analyst — 300 XP (~2-3 días)\nNivel 4: Investigator — 600 XP (~1 semana)\nNivel 5: Detective — 1,000 XP (~2 semanas)\nNivel 6: Specialist — 1,500 XP (~1 mes)\nNivel 7: Expert — 2,500 XP (~2 meses)\nNivel 8: Master — 4,000 XP (~3-4 meses)\nNivel 9: Guardian — 6,000 XP (~5-6 meses)\nNivel 10: Legend — 10,000 XP (~8-10 meses)",
      },
      {
        type: "concept",
        title: "La Curva de Progresión",
        text: "La curva está diseñada con psicología de juego: Nivel 1→2 (100 XP): 'Gratificación inmediata'. El usuario sube en su primera sesión activa. Esto crea el hook inicial. Nivel 2→5 (900 XP): 'Progresión constante'. Un nivel cada 1-2 semanas. El usuario siente momentum. Nivel 5→8 (3,000 XP): 'Compromiso'. Un nivel cada mes. Solo usuarios realmente enganchados. Nivel 8→10 (6,000 XP): 'Prestigio'. Estos niveles son para veteranos. Tener nivel 10 significa algo real.",
      },
      {
        type: "concept",
        title: "Access Gates: Funciones por Nivel",
        text: "Cada nivel no solo es un número — desbloquea funciones REALES del ecosistema. Esto crea aspiración concreta: el usuario no sube de nivel por un badge, sino porque necesita esa función.",
      },
      {
        type: "info-callout",
        title: "Access Gates por Nivel",
        text: "Nivel 1 (Explorer): Acceso básico a todos los productos, lectura de artículos, scans básicos.\nNivel 2 (Scout): Comentarios habilitados, watchlist de tokens, perfil personalizable.\nNivel 3 (Analyst): Scans profundos, alertas de tokens, historial completo.\nNivel 4 (Investigator): Reportes avanzados, acceso a datos en crudo, API básica.\nNivel 5 (Detective): Dashboard premium, filtros avanzados, exportar datos.\nNivel 6 (Specialist): Acceso beta a nuevas features, badges especiales, priority support.\nNivel 7 (Expert): Crear contenido en RugPull News, mentoring access.\nNivel 8 (Master): Acceso a reward pools avanzados, governance voting.\nNivel 9 (Guardian): Rol de moderador, verificación de contenido, boosts exclusivos.\nNivel 10 (Legend): NFT legendario, acceso a inner circle, 'Legend' badge visible en todo el ecosistema.",
      },
      {
        type: "example",
        title: "Access Gates: Motivación Real",
        wrong: "Sin Access Gates: 'Felicidades, subiste al nivel 5. Aquí tienes un badge.' El usuario piensa: '¿Y? No cambió nada.' La progresión se siente vacía.",
        right: "Con Access Gates: 'Bienvenido al nivel 5: Detective. Has desbloqueado: Dashboard Premium con métricas avanzadas, filtros de scan por riesgo, y exportación de datos.' El usuario piensa: 'POR FIN puedo exportar datos. Valió la pena.' La progresión se siente significativa.",
      },
      {
        type: "connection",
        title: "Diseñando la Experiencia de Nivel",
        text: "Tu trabajo como diseñadora en el sistema de niveles incluye: mostrar SIEMPRE la barra de progreso hacia el siguiente nivel (motivación visual constante), un 'preview' de qué desbloquea el siguiente nivel (aspiración), una celebración épica al subir de nivel (animación, sonido, confetti — proporcional al nivel), indicadores de nivel visibles en el perfil y en interacciones (status social), y una página de 'Roadmap de Niveles' donde el usuario vea todo el journey.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Conozco los 10 niveles, sus nombres y XP requerido",
          "Entiendo la lógica detrás de la curva de progresión",
          "Puedo explicar al menos 5 Access Gates y por qué motivan",
          "Sé cómo diseñar la experiencia de subir de nivel",
        ],
      },
    ],
  },

  // ─── Lección 3.4: Badges y NFTs ───
  {
    id: "3-4",
    blocks: [
      {
        type: "concept",
        title: "Badges como Logros Verificables",
        text: "Los badges en nuestro ecosistema no son imágenes decorativas — son NFTs reales en blockchain. Esto significa que: son verificablemente únicos (nadie puede falsificarlos), son propiedad del usuario (no del ecosistema), son transferibles (el usuario puede mostrarlos en otras plataformas), y son permanentes (aunque el ecosistema desaparezca, el badge sigue existiendo).",
      },
      {
        type: "callout",
        calloutType: "info",
        title: "¿Por Qué NFTs y No Solo Imágenes?",
        text: "Un badge como imagen PNG puede ser copiado por cualquiera. Un badge como NFT es criptográficamente único. Cuando un usuario dice 'tengo el badge Legend', cualquiera puede verificarlo on-chain. Esto crea STATUS REAL — como tener un diploma verificable vs un certificado de Canva.",
      },
      {
        type: "concept",
        title: "Los 11 Tipos de Badges de RugPull News",
        text: "Cada producto tiene su propia colección de badges. En RugPull News, los 11 tipos son: 1) Primer Artículo: leer el primer artículo. 2) Lector Voraz: leer 50 artículos. 3) Compartidor: compartir 10 artículos. 4) Detector: reportar un scam que se confirma. 5) Reportero: submittear 5 noticias verificadas. 6) Comentarista: 25 comentarios constructivos. 7) Racha Semanal: 7 días seguidos leyendo. 8) Racha Mensual: 30 días seguidos. 9) Early Bird: leer una noticia en sus primeros 10 minutos. 10) Community Voice: 100 votos dados. 11) RugPull Veteran: completar todos los badges anteriores.",
      },
      {
        type: "concept",
        title: "El Proceso de Minting: Off-chain → On-chain",
        text: "Cuando un usuario desbloquea un badge, el proceso tiene dos fases: FASE 1 (Off-chain, instantánea): El backend detecta que el usuario cumple los requisitos → genera la metadata del badge → muestra el badge en la UI inmediatamente → el usuario ve su logro al instante. FASE 2 (On-chain, 10-60 segundos): El backend envía la transacción de mint al NFTBadgeFacet → la blockchain confirma → el NFT aparece en la wallet del usuario → el badge se marca como 'verified on-chain'. El usuario no espera — ve el badge inmediato, con un indicador de 'confirmando en blockchain...' hasta que se verifica.",
      },
      {
        type: "info-callout",
        title: "Metadata del Badge NFT",
        text: "Cada badge NFT tiene metadata almacenada en IPFS:\n- name: Nombre del badge (ej: 'Lector Voraz')\n- description: Cómo se ganó\n- image: Artwork del badge (diseñado por TI)\n- attributes: producto (RugPull News), tipo (achievement), rareza (common/rare/epic/legendary), fecha de obtención, nivel del usuario al obtenerlo\n- external_url: Link al perfil del usuario en el ecosistema",
      },
      {
        type: "concept",
        title: "Dynamic NFTs (dNFTs): Badges que Evolucionan",
        text: "Algunos badges especiales son dNFTs — NFTs dinámicos cuyo aspecto visual cambia con el tiempo. Ejemplo: el badge 'Racha' empieza como una llama pequeña (7 días). A los 30 días la llama crece. A los 90 días se vuelve dorada. A los 365 días se transforma en un fénix. La metadata se actualiza on-chain, y el artwork cambia en IPFS. El usuario ve su badge EVOLUCIONAR — lo que incentiva mantener la racha.",
      },
      {
        type: "example",
        title: "Diseño de Badges: Que Sean Deseables",
        wrong: "Badge genérico: Un círculo azul con una estrella. Todos los badges se parecen. El usuario los colecciona pero no los muestra. No hay status ni orgullo.",
        right: "Badge con identidad: Cada badge tiene un artwork único, colores de la categoría, animación sutil, y rareza visual clara (los legendarios BRILLAN). El badge 'RugPull Veteran' es tan impresionante visualmente que los usuarios lo usan como foto de perfil. DESEAN mostrarlo.",
      },
      {
        type: "connection",
        title: "Tu Rol: Diseñar Badges Deseables",
        text: "Como diseñadora, los badges son 100% tu territorio. Necesitas definir: el sistema visual de rarezas (common → rare → epic → legendary con diferenciación clara), el artwork de cada badge (coherente con la marca pero único por logro), los estados de los dNFTs (cada evolución visual), la presentación en el perfil (galería, favoritos, showcase), y el momento de entrega (animación de 'unboxing' que genere emoción). Un badge bien diseñado es marketing gratuito — los usuarios lo comparten en redes.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Entiendo por qué los badges son NFTs y no solo imágenes",
          "Conozco el proceso off-chain → on-chain de minting",
          "Sé qué son los dNFTs y cómo evolucionan",
          "Puedo nombrar al menos 6 de los 11 badges de RugPull News",
          "Entiendo mi rol como diseñadora en el sistema de badges",
        ],
      },
    ],
  },

  // ─── Lección 3.5: Tokens del Ecosistema ───
  {
    id: "3-5",
    blocks: [
      {
        type: "concept",
        title: "Tres Tokens, Un Ecosistema",
        text: "El ecosistema tiene tres tokens especializados, cada uno vinculado a un grupo de productos: YAI Token (RugPull News), SCAN Token (MemeScanner + SmartScanner), y SMART Token (Smart Academy). Los tres son ERC-20 (tokens fungibles estándar) con funciones específicas dentro de su dominio.",
      },
      {
        type: "callout",
        calloutType: "info",
        title: "¿Por Qué Tres Tokens y No Uno?",
        text: "Un solo token crearía dependencia total: si el precio del token baja, TODOS los productos sufren. Con tres tokens especializados: cada uno refleja el valor de su dominio, los usuarios pueden diversificar su participación, los fallos de un token no arrastran a los otros, y el ecosistema puede ajustar la economía de cada token independientemente.",
      },
      {
        type: "info-callout",
        title: "YAI Token — El Token de la Información",
        text: "Producto: RugPull News\nUso principal: Recompensar contenido de calidad y participación en la comunidad de noticias.\nSe gana: Reportando scams verificados, submitteando noticias, generando contenido de calidad, participación activa en la comunidad.\nSe gasta: Acceso a análisis premium, boost de visibilidad de contenido, votación con peso en gobernanza de contenido.\nSupply: Dinámico con emisión controlada por actividad de la plataforma.",
      },
      {
        type: "info-callout",
        title: "SCAN Token — El Token de la Seguridad",
        text: "Productos: MemeScanner + SmartScanner\nUso principal: Recompensar detección de amenazas y mejora del motor de análisis.\nSe gana: Scans que detectan amenazas reales, reportes de vulnerabilidades confirmadas, contribución a la base de datos de patterns, detección temprana de scams.\nSe gasta: Scans profundos ilimitados, acceso a API avanzada, alertas personalizadas, datos raw de análisis.\nSupply: Emitido proporcionalmente al uso de los scanners.",
      },
      {
        type: "info-callout",
        title: "SMART Token — El Token del Conocimiento",
        text: "Producto: Smart Academy\nUso principal: Recompensar aprendizaje y creación de contenido educativo.\nSe gana: Completar módulos y lecciones, aprobar quizzes con alta puntuación, crear contenido educativo verificado, mentoring a otros usuarios.\nSe gasta: Acceso a cursos avanzados, certificaciones verificables, tutorías 1-a-1, recursos premium.\nSupply: Basado en la creación y consumo de contenido educativo.",
      },
      {
        type: "concept",
        title: "Conversión Entre Tokens",
        text: "Los tres tokens se pueden intercambiar entre sí con ratios dinámicos basados en la oferta y demanda: 100 YAI ≈ 50 SCAN ≈ 33 SMART (ratio aproximado). SMART tiene mayor valor unitario porque se gana más lentamente y sus utilidades son más exclusivas. El intercambio se hace vía un DEX interno del ecosistema — sin salir a exchanges externos.",
      },
      {
        type: "example",
        title: "Economía de Tokens: Balance Correcto",
        wrong: "Tokens sin utilidad real: El usuario acumula miles de tokens pero no puede hacer nada con ellos. Se sienten como puntos vacíos. Sin demanda real, el precio tiende a cero. Los usuarios pierden interés.",
        right: "Tokens con utilidad clara: Cada token tiene USOS REALES que solo se desbloquean gastando el token. El usuario quiere SCAN tokens para hacer scans profundos. Quiere SMART tokens para certificarse. La utilidad crea demanda. La demanda mantiene el valor. El usuario siente que sus tokens valen algo.",
      },
      {
        type: "connection",
        title: "Diseñando la Experiencia de Tokens",
        text: "Como diseñadora, tu trabajo con tokens incluye: wallet integrada visible en toda la app (saldo de los 3 tokens siempre accesible), flujo de intercambio simple (seleccionar token origen, token destino, cantidad, confirmar), historial de transacciones claro (ganados, gastados, intercambiados), indicadores de 'para qué sirve cada token' accesibles para novatos, y alertas de precio/valor cuando hay cambios significativos. El reto: que un usuario que nunca usó crypto entienda sus tokens en 30 segundos.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Puedo nombrar los 3 tokens y sus productos asociados",
          "Entiendo cómo se gana y se gasta cada token",
          "Comprendo los ratios de conversión y por qué SMART vale más",
          "Sé diseñar la experiencia de wallet y tokens para un novato en crypto",
        ],
      },
    ],
  },

  // ─── Lección 3.6: Ejercicio — Diseña el Sistema de Niveles Visual ───
  {
    id: "3-6",
    blocks: [
      {
        type: "concept",
        title: "Ejercicio Final: Sistema Visual de 10 Niveles",
        text: "En este ejercicio vas a diseñar el sistema visual COMPLETO de los 10 niveles del ecosistema. Este es un ejercicio central porque los niveles son la columna vertebral de la gamificación — el usuario los ve constantemente, y tu diseño determinará si se sienten motivados o indiferentes.",
      },
      {
        type: "exercise",
        title: "Parte 1: Identidad Visual de Cada Nivel",
        text: "Para cada uno de los 10 niveles, diseña:\n\n1. Un icono/emblema único (puede ser abstracto o figurativo)\n2. Un color principal y secundario (la paleta debe progresar lógicamente)\n3. Un nombre del nivel visible y memorable\n4. Un tooltip con el XP requerido y las funciones desbloqueadas\n\nRegla: Un usuario debe poder distinguir un nivel 3 de un nivel 8 A PRIMERA VISTA, sin leer texto.",
      },
      {
        type: "exercise",
        title: "Parte 2: Barra de Progreso Global",
        text: "Diseña la barra de progreso que aparecerá en toda la aplicación:\n\n1. Debe mostrar: nivel actual, XP actual / XP para siguiente nivel, porcentaje completado\n2. Diseña 3 variantes: completa (para TopBar), compacta (para sidebar), mini (para mobile)\n3. Incluye micro-animación cuando el usuario gana XP\n4. Diseña el estado 'casi lleno' (90%+) con efecto visual de urgencia/emoción\n5. Diseña el estado de nivel máximo (nivel 10) — debe sentirse épico y final",
      },
      {
        type: "exercise",
        title: "Parte 3: Celebración de Level Up",
        text: "Diseña la animación/pantalla de celebración cuando el usuario sube de nivel. Debe incluir:\n\n1. Animación de transición del emblema anterior al nuevo\n2. Texto de felicitación personalizado con el nombre del nivel\n3. Lista de nuevas funciones desbloqueadas (Access Gates)\n4. Botón para compartir en redes (con preview visual atractivo)\n5. Diseña 3 niveles de celebración: sutil (niveles 1-3), notable (niveles 4-7), épica (niveles 8-10)\n\nEl level up al nivel 10 debe ser MEMORABLE — es el momento cumbre del usuario.",
      },
      {
        type: "exercise",
        title: "Parte 4: Página de Roadmap de Niveles",
        text: "Diseña una página donde el usuario pueda ver su journey completo:\n\n1. Los 10 niveles en progresión visual (vertical u horizontal)\n2. Su posición actual claramente marcada\n3. Para cada nivel: icono, nombre, XP requerido, Access Gates\n4. Niveles completados con checkmark y fecha\n5. Niveles futuros con preview de lo que desbloquean (motivación)\n6. Estimación de tiempo para el siguiente nivel basada en su ritmo actual\n\nEsta página debe responder: '¿Dónde estoy, qué viene, y cuánto falta?'",
      },
      {
        type: "exercise",
        title: "Parte 5: Indicador de Nivel en el Perfil",
        text: "Diseña cómo se muestra el nivel del usuario en diferentes contextos:\n\n1. En su perfil propio (prominente, con stats detallados)\n2. En comentarios y posts (badge compacto junto al nombre)\n3. En leaderboards (nivel + posición + tendencia)\n4. En el perfil público (visible para otros usuarios)\n5. Como hover/tooltip (al pasar sobre el badge de nivel de cualquier usuario)\n\nConsejo: El nivel es la identidad pública del usuario en el ecosistema. Debe ser algo que ORGULLOSAMENTE muestre.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Criterios de Éxito del Ejercicio",
        text: "Tu diseño es exitoso si: 1) Un usuario nuevo entiende el sistema de niveles en menos de 10 segundos. 2) La progresión visual de nivel 1 a 10 se siente como un viaje ascendente. 3) Cada level up genera emoción real, no indiferencia. 4) Los Access Gates se comunican como beneficios deseables. 5) El usuario QUIERE mostrar su nivel a otros.",
      },
      {
        type: "checkpoint",
        title: "Checklist del Ejercicio",
        items: [
          "He diseñado la identidad visual de los 10 niveles (icono + color + nombre)",
          "He creado las 3 variantes de barra de progreso (completa, compacta, mini)",
          "He diseñado las 3 niveles de celebración de level up",
          "He creado la página de Roadmap de Niveles",
          "He diseñado el indicador de nivel para 5 contextos diferentes",
          "Un usuario nuevo entendería mi sistema en menos de 10 segundos",
        ],
      },
    ],
  },
];

export default module3Lessons;
