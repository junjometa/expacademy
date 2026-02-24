import { LessonContent } from "./index";

const module10Lessons: LessonContent[] = [
  // ─── Lección 10.1: Lenguaje Común con un Founder Técnico ───
  {
    id: "10-1",
    blocks: [
      {
        type: "concept",
        title: "El Problema de Comunicación",
        text: "Tu founder habla en código. Tú hablas en diseño. Sin un idioma común, las reuniones se convierten en monólogos paralelos donde nadie entiende al otro. No necesitas aprender a programar — necesitas entender los TÉRMINOS que tu founder usa para poder comunicarte eficientemente y tomar decisiones de diseño informadas.",
      },
      {
        type: "info-callout",
        title: "Vocabulario Frontend",
        text: "Componente: Pieza reutilizable de interfaz (un botón, una card, un modal). Cuando diseñas en Figma, cada elemento que repites es un componente.\nEstado (state): Datos que cambian en pantalla (loading, error, datos cargados). Tú diseñas cómo se ve cada estado.\nProps: Datos que le pasas a un componente para personalizarlo (color, tamaño, texto). Tus variantes en Figma son props.\nResponsive: Que se adapta a diferentes pantallas. Tu diseño mobile vs desktop.\nBreakpoint: El punto exacto donde el diseño cambia (768px = mobile→tablet, 1024px = tablet→desktop).",
      },
      {
        type: "info-callout",
        title: "Vocabulario Backend",
        text: "Endpoint/API: La 'puerta' donde el frontend pide datos. Cuando diseñas una pantalla, los datos vienen de un endpoint.\nRequest: Lo que el frontend ENVÍA ('dame el perfil del usuario 123').\nResponse: Lo que el backend DEVUELVE (los datos del perfil).\nLatencia: Cuánto TARDA en responder. 200ms = rápido. 2000ms = necesitas un loading state serio.\nCaché: Datos guardados temporalmente para no pedirlos otra vez. Hace que la app se sienta más rápida.",
      },
      {
        type: "info-callout",
        title: "Vocabulario Blockchain",
        text: "Smart contract: Programa que vive en blockchain, se ejecuta automáticamente cuando se cumplen condiciones.\nWallet: Monedero digital del usuario (MetaMask, etc.). Es su 'cuenta' en blockchain.\nTransaction (tx): Operación en blockchain (pagar, mintear NFT, registrarse).\nGas: Coste de ejecutar una transacción. Varía según la congestión de la red.\nConfirmación: Tiempo que tarda blockchain en verificar una tx. De 10 segundos a 2 minutos. TÚ diseñas qué ve el usuario mientras espera.",
      },
      {
        type: "info-callout",
        title: "Vocabulario de Desarrollo",
        text: "Deploy: Publicar código para que los usuarios lo vean. 'Deployamos mañana' = mañana los usuarios ven los cambios.\nBuild: Compilar el código para verificar que funciona. Si el build falla, hay errores.\nBranch: Versión paralela del código para probar cosas sin romper lo que funciona.\nPR (Pull Request): Propuesta de cambio de código que se revisa antes de aprobar. Tu diseño se convierte en código en una PR.\nBug: Error en el código. Hotfix: arreglo urgente de un bug crítico.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Por Qué Esto Importa para Tu Diseño",
        text: "No necesitas saber programar. Necesitas entender estos términos para que cuando tu founder diga 'el endpoint tiene 500ms de latencia', tú entiendas que necesitas un loading state de al menos medio segundo. Cuando diga 'la tx puede tardar 2 minutos', tú diseñes un loading informativo. El vocabulario técnico es tu puente hacia decisiones de diseño informadas.",
      },
      {
        type: "exercise",
        title: "Traduce Técnico a Diseño",
        text: "Traduce estas frases técnicas a lo que significan para TU DISEÑO:\n\n1. 'El componente recibe props de color y tamaño'\n   → ¿Qué variantes necesitas diseñar en Figma?\n\n2. 'El endpoint devuelve un array de badges'\n   → ¿Qué estados necesita tu componente? (¿y si devuelve 0? ¿y si devuelve 50?)\n\n3. 'La tx puede tardar entre 10s y 2min en confirmar'\n   → ¿Qué experiencia de loading diseñas?\n\n4. 'El state de loading se activa mientras el fetch está en pending'\n   → ¿Qué skeleton/shimmer muestras y por cuánto tiempo?\n\n5. 'El deploy de hoy rompió el responsive en mobile'\n   → ¿Qué breakpoints revisas y qué componentes verificas?",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Puedo explicar qué son componentes, estados y props en diseño",
          "Entiendo qué son endpoints y latencia y cómo afectan mi diseño",
          "Sé qué son transacciones, gas y confirmaciones de blockchain",
          "Puedo traducir frases técnicas del founder a decisiones de diseño",
        ],
      },
    ],
  },

  // ─── Lección 10.2: De Brief a Entrega ───
  {
    id: "10-2",
    blocks: [
      {
        type: "concept",
        title: "El Proceso Comprimido de Startup",
        text: "En una empresa grande, un feature toma 6 semanas. En tu startup, tienes 6 DÍAS máximo. El proceso de diseño en startup es comprimido pero NO desordenado. Cada fase existe por una razón. Saltarte una fase no ahorra tiempo — lo multiplica después en iteraciones, malentendidos y trabajo rehecho.",
      },
      {
        type: "info-callout",
        title: "Las 6 Fases del Proceso",
        text: "1) BRIEF (30 min): ¿Qué problema? ¿Para quién? ¿Restricciones? ¿Cómo medimos éxito?\n2) RESEARCH (2-4 horas): Competidores, usuarios, datos. USA IA para comprimir.\n3) WIREFRAME (2-4 horas): Boceto rápido, baja fidelidad. Solo estructura y flujo.\n4) DESIGN (1-2 días): Alta fidelidad en Figma. Design system. 5 estados. Mobile first.\n5) FEEDBACK (1-2 horas): Presenta al founder. Feedback técnico. Itera 1-2 veces.\n6) HANDOFF (1 hora): Figma organizado, assets exportados, anotaciones de comportamiento.",
      },
      {
        type: "concept",
        title: "Fase 1: Brief — 30 Minutos que Ahorran 30 Horas",
        text: "Un brief de 30 minutos ahorra 30 horas de iteración. Las 4 preguntas esenciales: ¿Qué problema resolvemos? (si no hay problema claro, no hay feature). ¿Para qué usuario? (Carlos, María, David — sé específica). ¿Qué restricciones hay? (tiempo, limitaciones técnicas, presupuesto). ¿Cómo medimos éxito? (qué métrica debe mejorar). Si no puedes responder las 4, el brief no está listo.",
      },
      {
        type: "concept",
        title: "Fase 3: Wireframe — Valida ANTES de Diseñar",
        text: "El wireframe es un boceto rápido de baja fidelidad. Solo estructura y flujo, sin colores ni detalles. Su propósito: validar la IDEA con tu founder ANTES de invertir tiempo en diseño bonito. Si tu wireframe es malo, tu diseño final será bonito pero inútil. Un wireframe aprobado en 30 minutos te ahorra rehacer un diseño de alta fidelidad que tomó 2 días.",
      },
      {
        type: "concept",
        title: "Fase 5-6: Feedback y Handoff",
        text: "Feedback: Presenta al founder, recibe feedback técnico ('esto no es implementable porque X'), itera 1-2 veces MÁXIMO. El feedback NO es personal — si algo no funciona técnicamente, es información útil que mejora tu diseño. Handoff: Tu Figma es el plano del developer. Si está desordenado, implementará desordenado. Organiza frames por flujo, nombra capas, añade anotaciones de comportamiento ('este modal aparece con fade in 200ms'), y exporta assets necesarios.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Velocidad ≠ Hacer Mal",
        text: "La velocidad en startup NO significa hacer mal. Significa hacer MENOS pero MEJOR. Un feature perfecto vale más que 5 features mediocres. Cada fase se comprime, no se elimina. El brief pasa de 2 horas a 30 minutos. La research de 2 semanas a 4 horas (con IA). El diseño de 2 semanas a 2 días. Pero cada fase EXISTE.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Conozco las 6 fases del proceso de diseño en startup",
          "Entiendo que el brief de 30 minutos ahorra 30 horas después",
          "Sé que el wireframe se valida ANTES del diseño de alta fidelidad",
          "Comprendo que el Figma organizado es esencial para un buen handoff",
        ],
      },
    ],
  },

  // ─── Lección 10.3: Feedback Loops Productivos ───
  {
    id: "10-3",
    blocks: [
      {
        type: "concept",
        title: "Feedback Brutal vs Feedback Productivo",
        text: "El feedback entre founder y designer puede ser BRUTAL o PRODUCTIVO. La diferencia no es la honestidad — es la ESTRUCTURA. Feedback honesto Y estructurado = crecimiento. Feedback honesto pero desestructurado = frustración. Ambas partes necesitan aprender a dar y recibir feedback de forma que avance el producto.",
      },
      {
        type: "example",
        title: "Feedback del Founder: Mal vs Bien",
        wrong: "'No me gusta este color' — no es accionable, es subjetivo. '¿Qué color quieres?' '¡No sé, otro!' Resultado: 10 iteraciones hasta que por suerte aciertas. 'Hazlo más bonito' — ¿Qué significa 'bonito'? Imposible de ejecutar.",
        right: "'Este color no tiene suficiente contraste con el fondo para ser legible en mobile' — específico, objetivo, tiene razón técnica. Puedes verificar con herramientas de contraste y proponer alternativa. 'Necesita más jerarquía visual — el CTA no destaca del resto' — específico, se puede medir, se puede resolver.",
      },
      {
        type: "example",
        title: "Cómo Recibes Feedback: Mal vs Bien",
        wrong: "'Pero es que yo lo diseñé así por algo' — defensiva, no aporta. Cierra la conversación. El founder se frustra porque siente que no puedes iterar. Resultado: deja de darte feedback y hace cambios él mismo.",
        right: "'Lo diseñé así porque [razón específica]. ¿Tu preocupación es [X]? Puedo probar otra opción que resuelva eso manteniendo [Y].' — explica el por qué, valida la preocupación, propone alternativa. El founder se siente escuchado. Resultado: colaboración real.",
      },
      {
        type: "concept",
        title: "Cómo DAS Feedback Tú al Founder",
        text: "Tú también necesitas dar feedback sobre la implementación. MAL: 'Esto se ve mal en mobile' — vago, no accionable. BIEN: 'En el breakpoint 375px, las cards se solapan porque el gap es de 24px. ¿Podemos reducirlo a 12px en mobile? Aquí un screenshot.' — específico, con datos, con solución propuesta. La diferencia: datos + propuesta > opinión.",
      },
      {
        type: "concept",
        title: "La Regla del POR QUÉ",
        text: "Antes de decir 'cambia esto', explica POR QUÉ. 'El botón debería ser más grande PORQUE el target mínimo para touch en mobile es 44px y el actual tiene 32px'. 'El color del CTA debería ser más saturado PORQUE está compitiendo visualmente con el header'. El 'por qué' convierte una OPINIÓN en un ARGUMENTO. Los argumentos se resuelven con datos. Las opiniones se resuelven con poder — y eso destruye equipos.",
      },
      {
        type: "exercise",
        title: "Reescribe Feedback Improductivo",
        text: "Reescribe estas 5 frases de feedback para hacerlas PRODUCTIVAS. Para cada una: versión mejorada con QUÉ, POR QUÉ, y PROPUESTA:\n\n1. 'Esto no me gusta'\n2. 'Hazlo como Apple'\n3. 'El diseño está mal'\n4. 'No entiendo para qué sirve esto'\n5. 'Está bien pero no sé, falta algo'\n\nCada versión mejorada debe ser específica, accionable, y constructiva.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Sé la diferencia entre feedback subjetivo y feedback accionable",
          "Puedo recibir feedback sin ponerme a la defensiva",
          "Sé dar feedback técnico con datos y propuesta de solución",
          "Entiendo que el POR QUÉ convierte opiniones en argumentos",
        ],
      },
    ],
  },

  // ─── Lección 10.4: Herramientas de Colaboración ───
  {
    id: "10-4",
    blocks: [
      {
        type: "concept",
        title: "Tu Stack de Colaboración",
        text: "La colaboración founder-designer funciona cuando cada herramienta tiene su rol claro. No uses Slack para feedback visual (usa Figma comments). No uses Figma para gestionar tareas (usa Notion/Linear). No uses reuniones de 1 hora para algo que un Loom de 3 minutos resuelve. Cada herramienta tiene su territorio.",
      },
      {
        type: "info-callout",
        title: "Figma: Tu Territorio Principal",
        text: "Figma es donde vive TODO tu trabajo de diseño: diseños, prototipos, design system, presentaciones.\n\nOrganización profesional:\n📁 Proyecto → 📄 Página → 🖼️ Frame\nNaming convention: 'MemeScanner / Home / Mobile / V2'\n\nColaboración en Figma:\n- Comparte links DIRECTOS a frames específicos (no 'mira mi Figma')\n- Usa comments de Figma para feedback visual — click en el pixel exacto\n- Mantén un frame de 'Changelog' con screenshots del antes/después\n\nDominar Figma es dominar tu idioma profesional.",
      },
      {
        type: "info-callout",
        title: "Gestión de Tareas + Git (Lo que Necesitas Saber)",
        text: "Notion o Linear para gestión compartida:\n- Cada tarea tiene: descripción, prioridad, asignado, deadline, link a Figma\n- Regla: si no está en el board, no existe. No aceptes tareas verbales sin registrar.\n\nGit (territorio del founder, pero entiéndelo):\n- Repositorio: donde vive el código (como tu proyecto de Figma)\n- Branch: versión paralela para probar sin romper (como duplicar un frame)\n- Pull Request (PR): propuesta de cambio con revisión antes de aprobar\n- Deploy: publicar a producción — los usuarios ven los cambios\n- 'Está en la PR' = los cambios están en revisión, aún no están live",
      },
      {
        type: "concept",
        title: "Comunicación Eficiente",
        text: "Slack/Discord: Mensajes rápidos, preguntas cortas, links. NO para feedback de diseño (se pierde). Loom: Video de 3-5 minutos explicando tu diseño mientras recorres el Figma. Un Loom de 3 minutos explicando tu diseño ahorra 30 minutos de reunión. El founder lo ve cuando puede, lo pausa, lo revisa. Figma Comments: Para feedback visual específico — el founder clickea exactamente en el elemento que comenta. Contexto visual perfecto.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Loom Es Tu Arma Secreta",
        text: "Un Loom de 3 minutos recorriendo tu diseño, explicando las decisiones, y mostrando las interacciones reemplaza: 1 reunión de 30 minutos + 5 mensajes de Slack + 3 emails de contexto. Graba un Loom para cada entrega importante. El founder lo ve cuando puede, sin coordinar horarios. Multiplica tu comunicación sin multiplicar tu tiempo.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Sé organizar un proyecto en Figma profesionalmente",
          "Entiendo qué es un repositorio, branch y PR",
          "Puedo usar Loom para explicar mis diseños eficientemente",
          "Sé cómo dar feedback visual en Figma con comments",
          "Entiendo el workflow brief → design → handoff",
        ],
      },
    ],
  },

  // ─── Lección 10.5: Priorización — Qué Diseñar Primero ───
  {
    id: "10-5",
    blocks: [
      {
        type: "concept",
        title: "El Framework ICE para Priorizar",
        text: "5 productos, cientos de pantallas, recursos limitados. Necesitas un FRAMEWORK de priorización para no ahogarte. ICE Score calcula: Impact (1-10) x Confidence (1-10) x Ease (1-10). Impact: ¿cuánto mejora la experiencia? Confidence: ¿qué tan segura estás de que funcionará? Ease: ¿qué tan fácil es de implementar? Score alto = prioridad alta.",
      },
      {
        type: "example",
        title: "ICE Score Aplicado",
        wrong: "'Añadir dark/light mode toggle' — Impact: 3 (nice to have, no resuelve un problema real). Confidence: 5 (no sabemos si los usuarios lo quieren). Ease: 4 (requiere duplicar todos los tokens de color). Score: 3 x 5 x 4 = 60 → BAJA PRIORIDAD. Mucho esfuerzo, poco impacto, poca certeza.",
        right: "'Rediseñar el scan result de MemeScanner' — Impact: 9 (es el momento de verdad del producto). Confidence: 8 (sabemos que es confuso por feedback real). Ease: 6 (requiere cambiar varios componentes pero es factible). Score: 9 x 8 x 6 = 432 → ALTA PRIORIDAD. Alto impacto, alta certeza, esfuerzo razonable.",
      },
      {
        type: "info-callout",
        title: "5 Reglas de Priorización del Ecosistema",
        text: "1) Lo que el usuario ve PRIMERO va primero: onboarding, landing, primera pantalla. Si la primera impresión falla, nada más importa.\n2) Lo que genera DINERO va antes que lo decorativo: pricing page > about page. El revenue paga tu sueldo.\n3) Lo que RETIENE va antes que lo que atrae: engagement > acquisition. Retener 1 usuario cuesta 5x menos que conseguir uno nuevo.\n4) Mobile va antes que desktop: 80% del tráfico crypto es mobile. Siempre.\n5) Un producto COMPLETO > dos productos a medias: es mejor que MemeScanner sea excelente que tener MemeScanner y SmartScanner mediocres.",
      },
      {
        type: "exercise",
        title: "Prioriza 5 Proyectos con ICE",
        text: "Calcula el ICE Score para estos 5 proyectos y ordénalos de mayor a menor prioridad:\n\n1. Rediseñar la landing de RugPull News\n   Impact: ___ | Confidence: ___ | Ease: ___ | Score: ___\n\n2. Crear el design system completo en Figma\n   Impact: ___ | Confidence: ___ | Ease: ___ | Score: ___\n\n3. Mejorar el flujo de scan en MemeScanner\n   Impact: ___ | Confidence: ___ | Ease: ___ | Score: ___\n\n4. Diseñar el Global Portal desde cero\n   Impact: ___ | Confidence: ___ | Ease: ___ | Score: ___\n\n5. Crear 5 templates de redes sociales\n   Impact: ___ | Confidence: ___ | Ease: ___ | Score: ___\n\n¿Cuál harías primero y por qué? Justifica con las 5 reglas de priorización.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Cuando Todo Parece Urgente",
        text: "Cuando todo parece urgente, usa ICE. Te da claridad en 5 minutos. Si dos proyectos tienen score similar, aplica la regla del founder: '¿Cuál de estos dos mueve más la aguja del negocio ESTA semana?' Si aún no puedes decidir, elige el más rápido — el momentum importa.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Puedo calcular ICE Score para cualquier proyecto",
          "Conozco las 5 reglas de priorización del ecosistema",
          "Sé que retention > acquisition en prioridad",
          "Puedo justificar mis prioridades con datos, no con opiniones",
        ],
      },
    ],
  },

  // ─── Lección 10.6: Ejercicio — Brief de Diseño Completo ───
  {
    id: "10-6",
    blocks: [
      {
        type: "concept",
        title: "Ejercicio Final: Tu Primer Brief Profesional",
        text: "Un buen brief es tu HERRAMIENTA más poderosa. Si aprendes a escribir buenos briefs, todo lo demás fluye: el research tiene dirección, el wireframe tiene propósito, el diseño tiene criterio, y el founder sabe exactamente qué esperar. Vas a escribir un brief completo para el redesign de la home de MemeScanner.",
      },
      {
        type: "exercise",
        title: "Sección 1: Contexto",
        text: "¿Por qué hacemos este redesign?\n\n1. PROBLEMA ACTUAL: ¿Qué no funciona en la home actual de MemeScanner? (sé específica)\n2. DATOS: ¿Qué evidencia respalda que hay un problema? (bounce rate alto, feedback de usuarios, métricas de engagement bajo, etc.)\n3. OPORTUNIDAD: ¿Qué ganamos si lo resolvemos? (más usuarios, más engagement, más conversión)",
      },
      {
        type: "exercise",
        title: "Sección 2: Objetivo y Target",
        text: "¿Qué queremos lograr y para quién?\n\n1. OBJETIVO: Describe el resultado esperado en UNA frase medible ('Reducir el bounce rate de la home del 65% al 40%')\n2. MÉTRICA PRINCIPAL: ¿Qué número miramos para saber si funcionó?\n3. PERSONA PRINCIPAL: ¿Para qué persona optimizamos? (Carlos, María, David) ¿Por qué?\n4. PERSONA SECUNDARIA: ¿Quién más se beneficia?",
      },
      {
        type: "exercise",
        title: "Sección 3: Scope y Restricciones",
        text: "¿Qué incluye y qué NO incluye?\n\n1. PANTALLAS INCLUIDAS: Lista exacta de qué diseñas (home mobile, home desktop, etc.)\n2. PANTALLAS EXCLUIDAS: Qué NO tocas en este proyecto (para evitar scope creep)\n3. BREAKPOINTS: ¿Qué dispositivos? (375px mobile, 768px tablet, 1280px desktop)\n4. RESTRICCIONES TÉCNICAS: ¿Qué puede y no puede hacer el frontend actual?\n5. RESTRICCIÓN DE TIEMPO: ¿Para cuándo tiene que estar?\n6. PRESUPUESTO: $0 (herramientas gratuitas)",
      },
      {
        type: "exercise",
        title: "Sección 4: Referencia, Criterios y Timeline",
        text: "REFERENCIA:\n1. 3 ejemplos de lo que queremos lograr (URLs o screenshots con explicación de qué te gusta)\n2. 2 ejemplos de lo que NO queremos (URLs o screenshots con explicación de qué evitar)\n\nCRITERIOS DE ÉXITO:\n1. ¿Cómo sabremos que el redesign funcionó? (métricas específicas)\n2. ¿En cuánto tiempo medimos? (1 semana, 1 mes)\n\nTIMELINE:\n- Research: ___ días\n- Wireframe: ___ días\n- Design: ___ días\n- Feedback: ___ días\n- Handoff: ___ días\n- Total: ___ días",
      },
      {
        type: "quote",
        text: "El proceso no es burocracia — es protección. Un buen proceso evita que pierdas tiempo diseñando algo que nadie pidió, nadie necesita, o nadie puede construir.",
        author: "Regla #9 de EXP Academy",
      },
      {
        type: "checkpoint",
        title: "Checklist del Brief",
        items: [
          "He definido el problema actual con evidencia concreta",
          "He establecido un objetivo medible con métrica principal",
          "He identificado persona principal y secundaria",
          "He definido scope claro (qué incluye y qué excluye)",
          "He listado restricciones técnicas, de tiempo y presupuesto",
          "He incluido 3 referencias positivas y 2 negativas",
          "He definido criterios de éxito y timeline completo",
          "Mi brief es suficiente para que el founder lo apruebe en 10 minutos",
        ],
      },
    ],
  },
];

export default module10Lessons;
