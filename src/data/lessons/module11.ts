import { LessonContent } from "./index";

const module11Lessons: LessonContent[] = [
  // ─── Lección 11.1: De Pantallas a Producto ───
  {
    id: "11-1",
    blocks: [
      {
        type: "concept",
        title: "Junior vs Senior: La Diferencia Real",
        text: "La diferencia entre una diseñadora junior y una senior no es la calidad visual — es el PENSAMIENTO. Junior: 'Diseño pantallas bonitas'. Senior: 'Diseño experiencias que resuelven problemas de negocio'. La pantalla es el OUTPUT. El problema de negocio es el INPUT. Si no entiendes el input, tu output es decoración, no diseño.",
      },
      {
        type: "concept",
        title: "Pensar en Producto: 4 Principios",
        text: "1) Empezar por el PROBLEMA, no por la pantalla. '¿Qué problema del usuario resuelve esta pantalla?' Si no puedes responder, la pantalla sobra. 2) Medir el RESULTADO, no el output. No 'diseñé 15 pantallas' sino 'el nuevo flujo redujo el tiempo de tarea de 30s a 12s'. 3) Pensar en SISTEMA, no en páginas sueltas. Un cambio en onboarding afecta retención. Un cambio en pricing afecta conversión. Todo está conectado. 4) Anticipar CONSECUENCIAS. '¿Qué pasa si el usuario pulsa esto 100 veces? ¿Y si es un bot? ¿Y si no tiene internet?'",
      },
      {
        type: "example",
        title: "Pensamiento de Pantalla vs Pensamiento de Producto",
        wrong: "Pensamiento de pantalla: 'Voy a diseñar la home de MemeScanner con un hero bonito, cards de trending, y un footer'. Resultado: pantalla visualmente correcta pero que no mueve ninguna métrica porque no fue diseñada con un objetivo medible.",
        right: "Pensamiento de producto: '¿Cuál es el JOB de la home? Que Carlos haga su primer scan en menos de 30 segundos. Entonces: CTA de scan prominente, input pre-enfocado, ejemplo precargado, zero clicks to value. Mido: time to first scan.' Resultado: pantalla que RESUELVE un problema y se puede medir.",
      },
      {
        type: "callout",
        calloutType: "info",
        title: "De Ejecutora a Co-Creadora",
        text: "Tu founder piensa en producto 24/7. Cuando tú también pienses así, dejas de ser una ejecutora ('hazme esta pantalla') y te conviertes en una CO-CREADORA del ecosistema ('he detectado este problema y propongo esta solución'). La próxima vez que te pidan diseñar algo, antes de abrir Figma pregunta: ¿Qué problema resuelve? ¿Para quién? ¿Cómo sabemos si funciona?",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Entiendo la diferencia entre pensamiento de pantalla y pensamiento de producto",
          "Puedo nombrar los 4 principios de pensar en producto",
          "Sé que cada pantalla debe resolver un problema medible",
          "Comprendo que las pantallas están conectadas como sistema, no aisladas",
        ],
      },
    ],
  },

  // ─── Lección 11.2: Proponer Mejoras sin Esperar Instrucciones ───
  {
    id: "11-2",
    blocks: [
      {
        type: "concept",
        title: "En Startup, Esperar = Perder Tiempo",
        text: "En una startup, esperar instrucciones es PERDER TIEMPO. El founder no puede pensar en todo — está ocupado con código, fundraising, partnerships, y 50 cosas más. Tú ves cosas que él NO ve porque tú piensas en experiencia de usuario y él piensa en arquitectura técnica. Tu perspectiva es VALIOSA. Úsala proactivamente.",
      },
      {
        type: "info-callout",
        title: "Cómo Identificar Oportunidades",
        text: "1) USA el producto tú misma — CONSTANTEMENTE:\n- Abre MemeScanner cada día y escanea un token real\n- Lee RugPull News como usuario, no como diseñadora\n- Completa flujos enteros de principio a fin\n- Anota cada momento de confusión o fricción\n\n2) Mira los datos (si tienes acceso):\n- ¿Dónde abandonan los usuarios? (funnel drops)\n- ¿Qué funciones no se usan? (feature adoption bajo)\n- ¿Qué preguntan los usuarios? (support tickets)\n\n3) Mira a la competencia:\n- ¿Qué hacen otros que nosotros no?\n- ¿Qué hacen MAL que nosotros podemos hacer BIEN?",
      },
      {
        type: "example",
        title: "Propuesta: Queja vs Solución",
        wrong: "'Creo que deberíamos cambiar el home' — vago, sin evidencia, sin propuesta concreta. El founder piensa 'ok, ¿y qué quieres que haga con eso?' Se ignora. Nada cambia.",
        right: "'He detectado que el 60% de usuarios nuevos no completan su primer scan (dato de analytics). Creo que es porque el CTA de scan no es visible above the fold en mobile (screenshot). Propongo mover el input de scan al hero section (wireframe adjunto). Esto mejoraría el time-to-first-scan. Esfuerzo estimado: M (3-4 días).' Se aprueba en 5 minutos.",
      },
      {
        type: "info-callout",
        title: "Formato de Propuesta (1 Página)",
        text: "1) PROBLEMA detectado: Una frase clara y específica.\n2) EVIDENCIA: Dato, screenshot, feedback de usuario, o experiencia propia.\n3) SOLUCIÓN propuesta: Wireframe, descripción visual, o referencia.\n4) IMPACTO esperado: Qué métrica mejora y en cuánto (estimación).\n5) ESFUERZO estimado: S (1-2 días) / M (3-5 días) / L (1-2 semanas).\n\nUna propuesta bien presentada se aprueba en 5 minutos. Una queja sin solución se ignora. SIEMPRE propón CON solución.",
      },
      {
        type: "exercise",
        title: "3 Propuestas de Mejora",
        text: "Identifica 3 problemas en el ecosistema (usa los productos si puedes, o imagina basándote en lo que has aprendido en los 10 módulos anteriores).\n\nPara cada uno, escribe la propuesta de 1 página:\n1. PROBLEMA: (1 frase)\n2. EVIDENCIA: (dato o observación)\n3. SOLUCIÓN: (descripción concreta)\n4. IMPACTO: (qué métrica mejora)\n5. ESFUERZO: (S/M/L)\n\nEstas 3 propuestas son el tipo de entregable que presentarías en tu primera semana de trabajo.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Sé que esperar instrucciones es perder tiempo en una startup",
          "Puedo identificar oportunidades usando el producto, datos, y competencia",
          "Conozco el formato de propuesta de 5 puntos",
          "Entiendo que una queja sin solución se ignora — siempre propongo con solución",
        ],
      },
    ],
  },

  // ─── Lección 11.3: Documentar Decisiones de Diseño ───
  {
    id: "11-3",
    blocks: [
      {
        type: "concept",
        title: "El DDR: Design Decision Record",
        text: "Cada decisión de diseño tiene un POR QUÉ. Si no lo documentas, se pierde. En 3 meses, cuando alguien pregunte '¿por qué la home tiene este layout?', sin documentación la respuesta es 'no sé, siempre estuvo así'. Con un DDR (Design Decision Record), la respuesta es clara, racional, y facilita futuras iteraciones.",
      },
      {
        type: "info-callout",
        title: "Estructura del DDR",
        text: "DECISIÓN: Qué decidiste.\n'Usar grid de 3 columnas en desktop para el scan result'\n\nCONTEXTO: Por qué había que decidir.\n'El scan result mostraba 12 métricas en lista vertical. Los usuarios no scrolleaban hasta el final.'\n\nOPCIONES: Qué alternativas consideraste.\n'A) Lista vertical (actual) — familiar pero largo\nB) Grid 3 columnas — compacto, todo visible\nC) Tabs — oculta info pero organizada'\n\nDECISIÓN FINAL: Cuál elegiste y POR QUÉ.\n'Grid 3 columnas. Testing informal mostró que los usuarios procesan mejor datos en grid.'\n\nCONSECUENCIAS:\n'Mobile: stack a 1 columna. Developer: necesita CSS grid. Riesgo: si añadimos métricas, puede quedar crowded.'",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "No Documentes TODO — Solo lo Importante",
        text: "No documentes cada decisión — solo las importantes. Regla práctica: si tardaste más de 10 minutos en decidir, documéntalo. Si fue obvio (el botón es del accent color), no necesita DDR. Si generó debate (grid vs lista vs tabs), SÍ necesita DDR. 3-5 DDRs por proyecto grande es suficiente.",
      },
      {
        type: "concept",
        title: "Dónde Guardar los DDRs",
        text: "Los DDRs deben ser ACCESIBLES para todo el equipo. Opciones: una página de Notion llamada 'Design Decisions' con tabla (fecha, decisión, contexto, link a Figma), un frame en Figma dentro de cada proyecto con notas de decisiones, o un documento compartido que se actualiza con cada proyecto. Lo importante no es el formato — es que EXISTAN y que el equipo sepa dónde están.",
      },
      {
        type: "exercise",
        title: "Escribe 2 DDRs",
        text: "Escribe 2 Design Decision Records para decisiones que tomarías en el ecosistema:\n\nDDR 1: Una decisión sobre el layout del scan result de MemeScanner.\n- Decisión\n- Contexto\n- Opciones consideradas (mínimo 3)\n- Decisión final + por qué\n- Consecuencias\n\nDDR 2: Una decisión sobre cómo mostrar los niveles de usuario en el header.\n- Misma estructura\n\nCada DDR debe ser lo suficientemente claro para que alguien nuevo en el equipo entienda por qué se tomó esa decisión.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Sé qué es un DDR y por qué es importante",
          "Conozco la estructura: decisión, contexto, opciones, decisión final, consecuencias",
          "Entiendo la regla: si tardaste 10+ minutos en decidir, documéntalo",
          "Puedo escribir DDRs claros que cualquiera del equipo entienda",
        ],
      },
    ],
  },

  // ─── Lección 11.4: User Testing con $0 ───
  {
    id: "11-4",
    blocks: [
      {
        type: "concept",
        title: "No Tienes Lab de UX — Pero SÍ Puedes Testear",
        text: "No tienes laboratorio de UX. No tienes presupuesto para herramientas caras. Pero SÍ puedes testear. 5 guerrilla tests de 10 minutos cada uno te dan más insights que 3 meses de suposiciones. La regla de Jakob Nielsen se mantiene: 5 usuarios detectan el 85% de los problemas de usabilidad. Solo necesitas 5 personas y 50 minutos.",
      },
      {
        type: "info-callout",
        title: "4 Métodos de Testing Gratis",
        text: "1) GUERRILLA TESTING: Pídele a 3-5 personas que completen una tarea. 'Escanea este token y dime si es seguro'. Observa SIN ayudar. Dónde dudan, dónde se confunden, dónde se frustran. Cada test: 10 minutos.\n\n2) 5-SECOND TEST: Muestra una pantalla durante 5 segundos. Pregunta: '¿De qué trata esta página?' Si no pueden responder, tu jerarquía visual falla.\n\n3) FIRST CLICK TEST: Da una tarea ('quieres ver tu nivel'). Observa dónde hacen el PRIMER click. Si el primer click es correcto, el 87% completa la tarea.\n\n4) GRABACIÓN DE SESIONES: Hotjar (plan gratis) o Microsoft Clarity (100% gratis) — graban sesiones reales. Instalar → ver cómo REALMENTE navegan.",
      },
      {
        type: "concept",
        title: "A/B Testing Manual",
        text: "No necesitas herramientas caras para A/B test. Versión simple: muestra el diseño A a la mitad de tus testers y el B a la otra mitad. Mide: ¿cuál completa la tarea más rápido? ¿Cuál genera menos confusión? ¿Cuál prefieren? Con 10 personas (5 por versión) tienes suficiente señal para una startup temprana. Google Analytics (gratis) te da datos de comportamiento real en producción.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Testea Temprano, Testea Seguido",
        text: "El error más caro en diseño es testear TARDE. Si testeas después de 2 semanas de diseño y descubres que el flujo está mal, pierdes 2 semanas. Si testeas el wireframe de baja fidelidad en el día 2, descubres problemas cuando son BARATOS de arreglar. La regla: testea tu wireframe antes de diseñar, tu diseño antes de implementar, y tu implementación antes de lanzar.",
      },
      {
        type: "exercise",
        title: "Plan de Testing para MemeScanner",
        text: "Diseña un plan de testing completo para el flujo de scan de MemeScanner:\n\n1. TAREA: ¿Qué le pides al usuario? (1 frase clara)\n2. PREGUNTAS POST-TEST: 5 preguntas que le haces después de completar (o intentar) la tarea\n3. MÉTRICAS: 3 cosas que observas durante el test (tiempo, clicks, errores, expresión facial)\n4. PARTICIPANTES: ¿Cuántas personas? ¿De qué perfil? (novatos, intermedios, expertos)\n5. DOCUMENTACIÓN: ¿Cómo registras los resultados? (video, notas, tabla)\n\nEste plan es ejecutable MAÑANA con 5 amigos y un teléfono.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Conozco 4 métodos de testing gratuitos",
          "Sé que 5 usuarios detectan el 85% de los problemas",
          "Entiendo que testear temprano ahorra semanas de trabajo",
          "Puedo diseñar un plan de testing ejecutable con $0",
        ],
      },
    ],
  },

  // ─── Lección 11.5: Tu Roadmap de 30 Días ───
  {
    id: "11-5",
    blocks: [
      {
        type: "concept",
        title: "Tienes el Conocimiento — Ahora Necesitas un Plan",
        text: "Has completado 10 módulos. Entiendes el ecosistema, los usuarios, la gamificación, el design system, las herramientas, la comunicación, la IA, y la colaboración con tu founder. Ahora necesitas un PLAN concreto para tu primer mes de trabajo. No un plan vago — un roadmap día a día que puedas ejecutar.",
      },
      {
        type: "info-callout",
        title: "Semana 1: Foundation (Entender)",
        text: "Día 1-2: Usar TODOS los productos como usuario. Escanear tokens en MemeScanner, leer artículos en RugPull News, analizar contratos en SmartScanner, explorar Smart Academy. Tomar notas de cada momento de confusión.\nDía 3: Auditoría visual completa. Screenshots + notas de problemas en cada producto. Crear un documento con hallazgos organizados por producto.\nDía 4-5: Crear el design system v0.1 en Figma. Tokens de color (base + 5 productos), tipografía, spacing, y los 5 componentes core más usados.",
      },
      {
        type: "info-callout",
        title: "Semana 2: Quick Wins (Impacto Rápido)",
        text: "Día 6-7: Identificar 5 quick wins — cosas que se mejoran en HORAS, no días. Ejemplos: fix de contraste en un botón, mejora de un CTA confuso, ajuste de layout mobile que se rompe, texto de error ilegible.\nDía 8-10: Diseñar y entregar los 3 quick wins de mayor impacto (según ICE score). Cada quick win: diseño en Figma + handoff al developer + antes/después documentado. Los quick wins generan CONFIANZA rápida con tu founder.",
      },
      {
        type: "info-callout",
        title: "Semana 3-4: Big Bet + Sistema",
        text: "Semana 3 — Big Bet (Proyecto principal):\nDía 11: Brief del proyecto más importante (mayor ICE score)\nDía 12-13: Research con IA + wireframes\nDía 14-15: Design de alta fidelidad, mobile first\n\nSemana 4 — Sistema (Escalar):\nDía 16-17: Ampliar design system con 5 componentes más\nDía 18-19: Crear 5 templates de redes sociales reutilizables\nDía 20: Documentar 3 DDRs de las decisiones tomadas\nDía 21: Presentar roadmap del MES 2 al founder",
      },
      {
        type: "callout",
        calloutType: "warning",
        title: "El Mayor Enemigo: Parálisis por Análisis",
        text: "Este roadmap es AGRESIVO pero alcanzable. La clave: no intentes hacerlo todo perfecto. Haz ALGO cada día y itera. El mayor enemigo del roadmap es la parálisis por análisis. Si llevas más de 30 minutos decidiendo qué hacer, haz CUALQUIER cosa de la lista. Movimiento > perfección. Un design system imperfecto que existe es infinitamente mejor que uno perfecto que está en tu cabeza.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Conozco la estructura de 4 semanas del roadmap",
          "Entiendo que la semana 1 es entender, no diseñar",
          "Sé que los quick wins de semana 2 generan confianza rápida",
          "Comprendo que movimiento > perfección",
        ],
      },
    ],
  },

  // ─── Lección 11.6: Ejercicio Final — Tu Plan de 30 Días ───
  {
    id: "11-6",
    blocks: [
      {
        type: "concept",
        title: "Tu Ejercicio Final: El Plan de 30 Días",
        text: "Este es tu EJERCICIO FINAL — el cierre de EXP Academy. Vas a crear tu plan personalizado de 30 días para el ecosistema. Lo que escribas aquí no es un ejercicio académico — es tu CARTA DE PRESENTACIÓN como Ecosystem Experience Designer. Demuestra que entiendes el ecosistema, los usuarios, y el producto. Demuestra que estás lista para actuar.",
      },
      {
        type: "exercise",
        title: "Semana 1: Auditoría",
        text: "1. ¿Qué producto vas a auditar PRIMERO y por qué? (elige basándote en ICE score)\n2. ¿Qué 5 aspectos vas a evaluar en cada producto?\n   (ej: navegación, jerarquía visual, mobile responsive, loading states, microcopy)\n3. ¿Cómo documentas la auditoría?\n   (formato: screenshots + notas, tabla de hallazgos, presentación)\n4. ¿Cuánto tiempo le dedicas a cada producto?\n5. ¿Cómo presentas los hallazgos a tu founder? (Loom, documento, presentación)",
      },
      {
        type: "exercise",
        title: "Semana 2: Quick Wins",
        text: "1. Lista 5 mejoras que puedes hacer en MENOS DE 4 HORAS cada una.\n   Para cada una: descripción + producto + impacto esperado.\n\n2. Priorízalas con ICE Score:\n   Mejora 1: Impact ___ x Confidence ___ x Ease ___ = ___\n   Mejora 2: Impact ___ x Confidence ___ x Ease ___ = ___\n   (repite para las 5)\n\n3. ¿Cuáles 3 harías primero y por qué?\n4. ¿Cómo mides si funcionaron? (qué métrica antes vs después)",
      },
      {
        type: "exercise",
        title: "Semana 3: Proyecto Principal",
        text: "1. ¿Cuál es el proyecto de MAYOR IMPACTO del ecosistema? ¿Por qué?\n2. Escribe el brief completo usando el formato de la lección 10.6:\n   - Contexto (problema + evidencia + oportunidad)\n   - Objetivo (métrica medible)\n   - Target (persona principal + secundaria)\n   - Scope (incluye/excluye)\n   - Restricciones (técnicas, tiempo, budget)\n   - Criterios de éxito\n3. Timeline detallado:\n   - Research: ___ días (qué haces exactamente)\n   - Wireframe: ___ días (cuántas iteraciones)\n   - Design: ___ días (mobile first, luego desktop)\n   - Feedback: ___ días (con quién, cómo)\n   - Handoff: ___ días (qué entregas)",
      },
      {
        type: "exercise",
        title: "Semana 4: Design System + Presentación",
        text: "DESIGN SYSTEM:\n1. ¿Qué tokens defines primero? (color, tipo, spacing — en qué orden)\n2. ¿Qué 10 componentes core necesitas? (lista en orden de prioridad)\n3. ¿Cómo organizas el Figma? (estructura de páginas y frames)\n\nPRESENTACIÓN AL FOUNDER:\n4. Imagina que presentas este plan de 30 días a tu founder.\n   - Headline: 1 frase que capture el valor de tu plan\n   - 3 beneficios concretos que el founder obtendrá\n   - 1 CTA: qué necesitas del founder para empezar\n   - ¿Cómo lo presentas? (Loom, reunión, documento)",
      },
      {
        type: "quote",
        text: "No eres una diseñadora que trabaja en crypto. Eres la persona que hace que la seguridad crypto sea ACCESIBLE para millones. Eso importa. Eso cambia vidas. Y estás lista.",
        author: "Regla #10 de EXP Academy",
      },
      {
        type: "checkpoint",
        title: "Checklist Final de EXP Academy",
        items: [
          "He diseñado mi plan de auditoría de Semana 1",
          "He identificado y priorizado 5 quick wins con ICE score",
          "He escrito un brief completo para mi proyecto principal",
          "He definido mi design system v0.1 (tokens + 10 componentes)",
          "He preparado una presentación de mi plan para el founder",
          "Entiendo el ecosistema, los usuarios, la gamificación, y el design system",
          "Sé usar IA como herramienta de productividad",
          "Puedo colaborar productivamente con un founder técnico",
          "Estoy lista para empezar mi primer día como Ecosystem Experience Designer",
        ],
      },
    ],
  },
];

export default module11Lessons;
