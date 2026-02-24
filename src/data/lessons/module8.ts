import { LessonContent } from "./index";

const module8Lessons: LessonContent[] = [
  // ─── Lección 8.1: Traducir Seguridad en Visual Atractivo ───
  {
    id: "8-1",
    blocks: [
      {
        type: "concept",
        title: "El Reto: Seguridad Crypto es 'Aburrida'",
        text: "La seguridad crypto es un tema que la mayoría percibe como 'aburrido' o 'alarmista'. Los usuarios no quieren sentirse asustados — quieren sentirse PROTEGIDOS. Tu trabajo como diseñadora es traducir conceptos de seguridad en comunicación visual ATRACTIVA sin caer en el sensacionalismo. Es un equilibrio delicado pero crucial.",
      },
      {
        type: "example",
        title: "Comunicar Seguridad: Lo Que NO Hacer vs Lo Que SÍ Hacer",
        wrong: "Calaveras y huesos cruzados, candados rojos gigantes, sirenas de alarma, todo rojo/negro/agresivo, textos tipo '¡CUIDADO! ¡PELIGRO!' permanentes, estética de hacker/matrix con código verde cayendo. Resultado: el usuario siente MIEDO, no protección. Se va corriendo o se desensibiliza.",
        right: "Escudos elegantes y checkmarks, gradientes verdes de confianza, datos claros con jerarquía visual, visualizaciones de riesgo atractivas (gráficos limpios), historias de antes/después ('sin protección → con protección'). Resultado: el usuario siente CONFIANZA. Se queda porque se siente seguro.",
      },
      {
        type: "concept",
        title: "La Fórmula: Problema + Solución + Acción",
        text: "Toda comunicación de seguridad sigue esta fórmula de 3 pasos: PROBLEMA — '$3.8 billones perdidos en scams crypto en 2023' (shock controlado, dato real). SOLUCIÓN — 'Nuestro ecosistema detecta el 94% de los rug pulls antes de que ocurran' (esperanza, dato concreto). ACCIÓN — 'Escanea tu token ahora — gratis' (CTA claro, sin fricción). Esta secuencia mueve al usuario de 'tengo miedo' a 'tengo la solución' a 'voy a actuar'.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "El Tono Apple de Seguridad",
        text: "Piensa en cómo Apple comunica seguridad de iPhone: no es alarmista, es confiable. 'Tus datos están protegidos' con un icono de candado elegante y un fondo blanco limpio. Ese es el tono. No gritan. No asustan. Comunican control y protección. Tu ecosistema de seguridad crypto debe sentirse así — como un escudo silencioso, no como una alarma constante.",
      },
      {
        type: "concept",
        title: "Paleta Emocional de la Comunicación",
        text: "Cada tipo de comunicación tiene su paleta emocional: Confianza — verdes, azules, escudos, checkmarks. Urgencia controlada — naranjas, amarillos, iconos de alerta (no rojos agresivos). Logro — dorados, púrpuras, estrellas, confetti. Educación — violetas, azules claros, iconos de libro/graduación. Comunidad — gradientes cálidos, iconos de personas, celebración. NUNCA uses rojo como color dominante — solo como acento para errores específicos.",
      },
      {
        type: "exercise",
        title: "3 Headlines para el Risk Engine",
        text: "Escribe 3 headlines para la landing page del Risk Engine. Cada uno debe comunicar seguridad de forma ATRACTIVA, no alarmista.\n\nPara cada headline escribe:\n1. El headline (máximo 8 palabras)\n2. El subheadline (máximo 15 palabras)\n3. El CTA (máximo 4 palabras)\n4. Qué emoción transmite (confianza, curiosidad, urgencia)\n\nEjemplo de referencia:\nHeadline: 'Invierte con Certeza'\nSubheadline: 'Análisis de seguridad on-chain para cada token que consideres'\nCTA: 'Analiza Gratis'\nEmoción: Confianza + Acción",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Entiendo la diferencia entre comunicar miedo vs comunicar protección",
          "Conozco la fórmula Problema + Solución + Acción",
          "Sé qué paleta emocional usar para cada tipo de comunicación",
          "Puedo escribir headlines que atraigan sin ser sensacionalistas",
        ],
      },
    ],
  },

  // ─── Lección 8.2: Templates para Redes Sociales ───
  {
    id: "8-2",
    blocks: [
      {
        type: "concept",
        title: "Twitter/X: El Canal Principal del Ecosistema",
        text: "Twitter/X es donde vive la comunidad crypto. Es tu canal principal de comunicación, crecimiento viral, y engagement. Cada tipo de contenido necesita un template visual diferente. La clave: crear templates en Figma que se puedan reutilizar cambiando solo el texto y los datos. Así cualquiera del equipo puede generar contenido visual en 5 minutos.",
      },
      {
        type: "info-callout",
        title: "Formato 1: Thread Card (Análisis)",
        text: "Dimensiones: 1080x1080 o 1200x675\nContenido: Imagen con dato impactante + logo del ecosistema\nEstilo: Texto grande, poco texto, dato numérico prominente\nFondo: Gradiente oscuro con accent del producto\nEjemplo: '87% del supply en 1 wallet' con gráfico de distribución\nUso: Primer tweet de un thread de análisis — el gancho visual que hace que la gente lea el hilo",
      },
      {
        type: "info-callout",
        title: "Formato 2: Alert Banner (Urgente)",
        text: "Dimensiones: 1200x675\nContenido: Fondo naranja/amber + icono de alerta + qué pasó + qué hacer\nEstilo: Urgente pero NO alarmista. Texto claro, acción sugerida.\nEjemplo: 'Nuevo rug pull detectado: $2M perdidos en [token]. Lee el análisis completo →'\nUso: Cuando el Risk Engine detecta algo importante. Frecuencia: máximo 2-3 por semana para no desensibilizar.",
      },
      {
        type: "info-callout",
        title: "Formato 3: Scan Result (Viral)",
        text: "Dimensiones: 1080x1080\nContenido: Screenshot estilizado del resultado de scan con risk score prominente y color\nEstilo: El resultado de scan como card visual compartible. Logo + 'Escaneado con MemeScanner'\nEjemplo: Card con risk score 15/100, etiqueta 'ALTO RIESGO', factores principales\nUso: Los usuarios comparten resultados de sus tokens. ESTE es el formato más viral — la gente etiqueta a sus amigos.",
      },
      {
        type: "info-callout",
        title: "Formatos 4 y 5: Educational + Milestone",
        text: "Educational: Tip o dato educativo con diseño visual atractivo. '¿Sabías que el 73% de memecoins pierden todo su valor en 30 días?' o '3 señales de un rug pull'. Carrusel si son varios puntos. Formato: 1080x1080 o carrusel de 4-6 slides.\n\nMilestone: '¡Ya somos 10,000 usuarios!' con diseño celebratorio. Números grandes, confetti visual, agradecimiento a la comunidad. Formato: 1200x675. Frecuencia: cada hito significativo.",
      },
      {
        type: "concept",
        title: "LinkedIn: Tono Profesional",
        text: "LinkedIn requiere un tono completamente diferente. Artículos de opinión sobre seguridad crypto con imagen de header profesional. Logros del ecosistema (partnerships, hitos técnicos). Formato de preview: 1200x627. Sin emojis excesivos. Datos y métricas sobre entretenimiento. Target: inversores profesionales, empresas, potenciales partners. David (el inversor profesional) está aquí.",
      },
      {
        type: "exercise",
        title: "Diseña 3 Templates de Twitter",
        text: "Diseña (en texto) 3 templates de Twitter para MemeScanner:\n\n1. ALERT BANNER (rug pull detectado):\n   - Dimensiones, fondo, colores dominantes\n   - Qué elementos tiene (icono, texto, datos, logo)\n   - Texto del tweet que lo acompaña\n\n2. SCAN RESULT (para compartir):\n   - Layout del resultado como card visual\n   - Dónde está el risk score, qué color, qué tamaño\n   - CTA para que otros escaneen\n\n3. EDUCATIONAL TIP:\n   - Tema del tip (elige uno de seguridad crypto)\n   - Layout: ¿slide único o carrusel?\n   - Estilo visual: colores, tipografía, icono",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Conozco los 5 formatos de contenido para Twitter/X",
          "Sé las dimensiones correctas para cada formato",
          "Entiendo que el scan result es el formato más viral",
          "Puedo adaptar el tono de Twitter (informal) vs LinkedIn (profesional)",
        ],
      },
    ],
  },

  // ─── Lección 8.3: Landing Pages que Convierten ───
  {
    id: "8-3",
    blocks: [
      {
        type: "concept",
        title: "La Estructura de 7 Secciones que Convierte",
        text: "Cada producto del ecosistema necesita una landing page que CONVENZA al usuario de quedarse. La estructura de 7 secciones está probada en miles de startups: Hero → Problema → Solución → Social Proof → Features → Pricing → CTA Final. Cada sección tiene un trabajo específico. Saltarte una debilita toda la página.",
      },
      {
        type: "concept",
        title: "Sección 1: Hero (Above the Fold)",
        text: "El hero es lo primero que ve el usuario — y decide si se queda en 5 segundos. Debe contener: Headline (qué haces, 1 frase clara), Subheadline (para quién, 1 frase), CTA primario ('Escanea gratis' / 'Lee ahora'), y un visual (screenshot del producto o dato impactante). NADA más. Sin menú complejo, sin 5 botones, sin párrafos de texto. El hero decide si el usuario se queda o se va.",
      },
      {
        type: "concept",
        title: "Secciones 2 y 3: Problema → Solución",
        text: "Problema: Dato que genera urgencia ('$3.8B perdidos en scams crypto en 2023'), 3 pain points visuales con iconos ('No sabes si es seguro', 'Las herramientas son lentas', 'Los datos son confusos'), y un cierre: 'Sin [producto], estás expuesto'. Solución: Cómo tu producto resuelve CADA pain point, screenshots o demos del producto en acción, y un cierre: 'Con [producto], estás protegido'. La transición problema→solución debe sentirse como alivio.",
      },
      {
        type: "concept",
        title: "Secciones 4, 5, 6 y 7: Proof → Features → Pricing → CTA",
        text: "Social Proof: Números reales ('50,000+ usuarios', '2M scans realizados'), logos de medios que mencionaron el producto, testimonios cuando existan. Features: 3-6 features principales con iconos y descripción corta, las más importantes primero. Pricing: 3 columnas, plan recomendado destacado, beneficios con checkmarks, CTA en cada plan. CTA Final: Repite el headline, botón grande, 'Empieza gratis, sin compromiso'. La repetición del CTA al final captura a quienes leyeron toda la página.",
      },
      {
        type: "example",
        title: "Landing Buena vs Landing Mala",
        wrong: "Landing mala: 20 párrafos de texto sin imágenes, sin CTA claro visible, 5 botones diferentes que compiten por atención, menú de navegación complejo con 8 items, auto-play video que tarda en cargar, popup de newsletter a los 3 segundos. El usuario no sabe qué hacer → cierra.",
        right: "Landing buena: Hero potente (headline + CTA en 5 segundos), 3 secciones claras que fluyen como una historia, 1 CTA repetido 2 veces (arriba y abajo), sin distracciones visuales, carga en <2 segundos, mobile-first. El usuario entiende el valor → actúa.",
      },
      {
        type: "exercise",
        title: "Hero Section de MemeScanner",
        text: "Diseña la hero section de la landing de MemeScanner:\n\n1. HEADLINE: Máximo 6 palabras. ¿Qué dice?\n2. SUBHEADLINE: Máximo 15 palabras. ¿Para quién es?\n3. CTA PRIMARIO: ¿Qué texto tiene el botón? ¿Qué color?\n4. VISUAL: ¿Screenshot del scan? ¿Dato impactante? ¿Ambos?\n5. FONDO: ¿Color sólido, gradiente, imagen?\n6. ¿Qué emoción transmite toda la sección junta?",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Conozco las 7 secciones de una landing page que convierte",
          "Entiendo que el hero tiene 5 segundos para convencer",
          "Sé la transición problema→solución y por qué funciona",
          "Puedo diseñar una landing sin distracciones innecesarias",
        ],
      },
    ],
  },

  // ─── Lección 8.4: NFT Art Direction ───
  {
    id: "8-4",
    blocks: [
      {
        type: "concept",
        title: "NFTs del Ecosistema: Badges y Certificados",
        text: "Los NFTs de nuestro ecosistema no son arte especulativo — son badges de logro y certificados de completación. Son FUNCIONALES: representan algo que el usuario ganó con esfuerzo real. Tu art direction debe reflejar esto: cada badge cuenta una historia de logro, cada certificado comunica credibilidad profesional.",
      },
      {
        type: "info-callout",
        title: "Badges: Principios de Art Direction",
        text: "Forma base: Escudo, medalla o emblema (comunica logro y protección).\nCada categoría de badge tiene un color dominante (lectura=cyan, scan=naranja, social=verde).\nNiveles de rareza con bordes diferenciados:\n- Common: Borde gris sólido\n- Uncommon: Borde azul con brillo sutil\n- Rare: Borde púrpura con glow\n- Epic: Borde dorado con partículas\n- Legendary: Borde gradiente ANIMADO (en web)\n\nTamaños de diseño: 64x64 (thumbnail en listas), 256x256 (card en perfil), 512x512 (detalle), 1024x1024 (compartir en redes/imprimir).",
      },
      {
        type: "concept",
        title: "Certificados NFT: Formato Diploma",
        text: "Los certificados de Smart Academy tienen formato diploma profesional: orientación horizontal, diseño formal pero moderno. Elementos obligatorios: logo del ecosistema + logo del producto, nombre completo del usuario, nombre del curso completado, fecha de completación, hash de verificación visible (monoespaciado, truncado con '...'), QR code que lleva a la verificación on-chain. El certificado debe verse tan profesional que David lo ponga en su LinkedIn sin vergüenza.",
      },
      {
        type: "concept",
        title: "dNFTs: Badges que Evolucionan",
        text: "Los Dynamic NFTs (dNFTs) evolucionan visualmente según el nivel del usuario. Diseñar un dNFT es como diseñar 10 versiones de un personaje: Nivel 1-3 (Inicio): Diseño simple, colores fríos (azul/gris), formas básicas, sin efectos especiales. Nivel 4-6 (Progresión): Más detalle, colores cálidos se introducen (dorado, naranja), textura visual, primer efecto sutil. Nivel 7-9 (Avanzado): Efectos visuales complejos, brillos, partículas, la forma evoluciona significativamente. Nivel 10 (Máximo): Diseño completo premium, animado en web, colores vibrantes, máximo nivel de detalle, se siente LEGENDARIO.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Los dNFTs Son Tu Proyecto Creativo Más Ambicioso",
        text: "Diseñar la evolución visual de 10 niveles para un dNFT es como diseñar la evolución de un Pokémon o un personaje de RPG. Cada nivel debe ser claramente diferente del anterior PERO mantener la identidad base. El usuario debe poder mirar los 10 niveles lado a lado y ver UNA historia de evolución, no 10 diseños inconexos.",
      },
      {
        type: "exercise",
        title: "Evolución de un dNFT en 3 Niveles",
        text: "Diseña conceptualmente la evolución de un dNFT badge para 3 niveles clave:\n\nNIVEL 1 — 'Observador':\n- Forma base, colores, elementos visuales\n- Qué simboliza (el inicio del viaje)\n- Qué emoción transmite\n\nNIVEL 5 — 'Explorador':\n- Cómo evoluciona la forma, qué colores se añaden\n- Qué elementos nuevos aparecen\n- Qué simboliza (progresión media)\n\nNIVEL 10 — 'Guardián':\n- Forma final, colores premium, efectos visuales\n- Qué lo hace sentir LEGENDARIO\n- Qué emoción transmite (orgullo, maestría)",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Conozco los 5 niveles de rareza de badges y sus bordes",
          "Sé los 4 tamaños de diseño para badges",
          "Entiendo los elementos obligatorios de un certificado NFT",
          "Puedo diseñar la evolución visual de un dNFT en múltiples niveles",
        ],
      },
    ],
  },

  // ─── Lección 8.5: Materiales con $0 de Presupuesto ───
  {
    id: "8-5",
    blocks: [
      {
        type: "concept",
        title: "Presupuesto $0 ≠ Limitación",
        text: "No tienes presupuesto de diseño — tienes HERRAMIENTAS. Las herramientas gratuitas de hoy son más potentes que el software profesional de hace 5 años. Figma es gratis. Canva es gratis. Los iconos son open source. Las fuentes son de Google. El presupuesto $0 no es una limitación — es un constraint creativo. Muchas startups con millones hacen peor diseño que tú con Figma gratis.",
      },
      {
        type: "info-callout",
        title: "Tu Stack de Herramientas Gratuitas",
        text: "Figma: Diseño completo, colaborativo, componentes, prototipos. TODO tu trabajo vive aquí.\nCanva: Templates rápidos para redes sociales, presentaciones. Export rápido.\nRemove.bg: Quitar fondos de imágenes en 1 click.\nUnsplash/Pexels: Fotos stock de alta calidad, gratuitas, sin atribución.\nLucide Icons: Iconos consistentes, outline style, open source. Tu biblioteca oficial.\nGoogle Fonts: Space Grotesk, DM Sans, JetBrains Mono — tus 3 tipografías, gratis.\nCoolors.co: Generador de paletas armónicas a partir de un color base.",
      },
      {
        type: "concept",
        title: "OG Images Automáticas",
        text: "Cuando alguien comparte un link de tu producto en Twitter, se muestra una preview card con imagen (OG Image). Estas imágenes deben generarse AUTOMÁTICAMENTE para cada página. El developer implementa el código, pero tú diseñas el TEMPLATE. Un buen OG image template tiene: título de la página, dato clave o preview del contenido, logo del producto, gradiente de fondo coherente con la marca. Diseña 1 template, se genera para 1,000 páginas.",
      },
      {
        type: "concept",
        title: "Templates Reutilizables: Tu Multiplicador",
        text: "Crea en Figma un set de 10 templates base para todo tipo de contenido: post de Twitter (5 variantes), banner de LinkedIn, OG image, badge placeholder, certificado, presentación de slides, email header, notificación push, story de Instagram, y thumbnail de video. Cada template se reutiliza cambiando texto y datos. El equipo puede generar contenido SIN TI. Eso es escalar tu impacto.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "1 Template > 10 One-offs",
        text: "Prioriza: 1 buen template reutilizable vale más que 10 diseños one-off. Un template de scan result que se usa 500 veces tiene 500x más impacto que una ilustración bonita que se usa una vez. Automatiza lo visual. Tu tiempo es limitado — úsalo en lo que se MULTIPLICA.",
      },
      {
        type: "exercise",
        title: "Tu Set de Templates Mínimo Viable",
        text: "Lista los 5 templates MÁS IMPORTANTES que necesitas crear primero para MemeScanner. Para cada uno:\n\n1. Nombre del template\n2. Dónde se usa (Twitter, landing, perfil, etc.)\n3. Qué elementos tiene (texto, imagen, logo, datos)\n4. Con qué frecuencia se reutiliza (diario, semanal, mensual)\n5. Quién lo usará además de ti (marketing, developers, community)\n\nPrioriza por frecuencia de uso x impacto.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Conozco las herramientas gratuitas para cada necesidad de diseño",
          "Entiendo qué son las OG Images y por qué necesitan template",
          "Sé que 1 template reutilizable vale más que 10 diseños únicos",
          "Puedo priorizar templates por frecuencia de uso e impacto",
        ],
      },
    ],
  },

  // ─── Lección 8.6: Ejercicio — Pack de Marketing Visual ───
  {
    id: "8-6",
    blocks: [
      {
        type: "concept",
        title: "Ejercicio Final: Mini Pack de Marketing para Risk Engine",
        text: "Vas a crear tu primer pack de marketing visual real. El Risk Engine es el motor de análisis de riesgo del ecosistema — la tecnología detrás de MemeScanner y SmartScanner. Necesita su propia identidad visual y materiales de comunicación. Este ejercicio es tu primer entregable real de comunicación visual.",
      },
      {
        type: "exercise",
        title: "Parte 1: Headline + Subheadline de Landing",
        text: "Escribe el headline y subheadline para la landing page del Risk Engine:\n\n1. HEADLINE: Máximo 6 palabras. Debe comunicar protección + innovación.\n2. SUBHEADLINE: Máximo 20 palabras. Explica qué hace y para quién.\n3. CTA: El botón principal. ¿Qué texto? ¿Qué color?\n\nEscribe 3 variantes y elige la mejor. Explica por qué.",
      },
      {
        type: "exercise",
        title: "Parte 2: 3 Posts de Twitter",
        text: "Diseña 3 posts de Twitter para Risk Engine. Para CADA uno escribe el texto del tweet + la descripción de la imagen:\n\n1. ALERT: Un rug pull ha sido detectado por el Risk Engine.\n   - Texto del tweet (max 280 chars)\n   - Imagen: dimensiones, fondo, elementos, texto en la imagen\n\n2. EDUCATIONAL: Cómo funciona el Risk Engine por dentro.\n   - Texto del tweet\n   - Imagen: ¿infografía? ¿diagrama? ¿carrusel?\n\n3. MILESTONE: El Risk Engine ha analizado X contratos.\n   - Texto del tweet\n   - Imagen: número grande, celebración, dato de contexto",
      },
      {
        type: "exercise",
        title: "Parte 3: Hero Section de la Landing",
        text: "Describe la hero section completa de la landing del Risk Engine:\n\n1. ¿Qué se ve? Headline, subheadline, CTA, visual/imagen\n2. ¿Qué colores dominan? ¿Gradientes?\n3. ¿Hay un visual? (screenshot, dato, animación, ilustración)\n4. ¿Qué emoción transmite al verlo por primera vez?\n5. ¿Cómo se ve en mobile vs desktop?",
      },
      {
        type: "exercise",
        title: "Parte 4: Badge NFT del Risk Engine",
        text: "Diseña conceptualmente 1 badge NFT para el Risk Engine:\n\n1. ¿Para qué logro? (inventa uno relevante: ej. 'Smart Auditor')\n2. Forma base: ¿escudo, medalla, emblema, otro?\n3. Colores: ¿cuáles y por qué?\n4. Elementos visuales: ¿iconos, texturas, efectos?\n5. ¿Qué rareza tiene? (common, rare, epic...)\n6. ¿Qué comunica al verlo? ¿Qué debe sentir el usuario?",
      },
      {
        type: "quote",
        text: "El mejor marketing no parece marketing — parece valor. Cuando tu post de Twitter enseña algo, el usuario te sigue. Cuando solo vende, te ignora.",
        author: "Regla #7 de EXP Academy",
      },
      {
        type: "checkpoint",
        title: "Checklist del Ejercicio",
        items: [
          "He escrito headline + subheadline + CTA para la landing (3 variantes)",
          "He diseñado 3 posts de Twitter con texto + descripción de imagen",
          "He descrito la hero section completa con visual y emociones",
          "He diseñado conceptualmente 1 badge NFT con forma, colores y significado",
          "Mi pack es coherente con la identidad visual del ecosistema",
        ],
      },
    ],
  },
];

export default module8Lessons;
