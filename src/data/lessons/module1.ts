import { LessonContent } from "./index";

const module1Lessons: LessonContent[] = [
  // ═══════════════════════════════════════
  // LECCIÓN 1.1 — El Problema que Resolvemos
  // ═══════════════════════════════════════
  {
    id: "1-1",
    blocks: [
      {
        type: "concept",
        title: "Un problema de $3.8 mil millones",
        text: "En 2024 se perdieron más de $3.8 mil millones en el ecosistema crypto por estafas, rugpulls y vulnerabilidades en smart contracts. No hablamos de hackeos sofisticados a protocolos — hablamos de usuarios normales que perdieron sus ahorros porque la interfaz les dijo que todo estaba bien cuando no lo estaba.",
      },
      {
        type: "concept",
        title: "El problema no es técnico — es de EXPERIENCIA",
        text: "Los usuarios no entienden lo que firman cuando aprueban una transacción. No saben leer un contrato inteligente. Las herramientas que existen para verificar tokens son crípticas, llenas de jerga técnica y diseñadas por developers para developers. El resultado: la gente confía en lo que VE, y lo que ve está diseñado para engañarla.",
        items: [
          "El usuario promedio no sabe qué significa 'aprobar acceso ilimitado a tus tokens'",
          "Las interfaces de estafa copian pixel por pixel a las legítimas — y funcionan porque nadie verifica",
          "Las herramientas de análisis existentes muestran datos técnicos que solo un developer entiende",
          "No existe un 'semáforo' claro que diga: PELIGRO, NO FIRMES ESTO",
        ],
      },
      {
        type: "concept",
        title: "Aquí es donde tú entras",
        text: "Tu rol como Ecosystem Experience Designer es TRADUCIR la complejidad técnica en experiencias claras que protejan al usuario. No necesitas entender el código de un smart contract — necesitas entender al USUARIO que interactúa con ese código. Necesitas saber qué le da miedo, qué le confunde, y qué necesita ver para tomar buenas decisiones.",
      },
      {
        type: "concept",
        title: "¿Por qué un ecosistema completo?",
        text: "El ecosistema existe porque ninguna empresa resolvía esto de forma completa. Había herramientas de análisis, pero sin contexto. Había noticias, pero sin verificación. Había educación, pero sin práctica. Había pagos crypto, pero sin protección. Nosotros unimos todo: analizar + informar + educar + proteger. Y tú diseñas la experiencia que conecta cada pieza.",
      },
      {
        type: "info-callout",
        title: "Dato clave",
        text: "El 70% de víctimas de estafas crypto dicen que 'la interfaz parecía legítima'. Esto significa algo brutal: el diseño ES seguridad. Una interfaz bien diseñada que comunica riesgo correctamente puede literalmente salvar el dinero de las personas. Una mal diseñada es cómplice del fraude.",
      },
      {
        type: "connection",
        title: "Tu impacto real",
        text: "Tu trabajo como Experience Designer no es decorativo — es la primera línea de defensa del usuario. Si tú diseñas bien, el usuario entiende los riesgos. Si diseñas mal, pierde dinero. Esto no es una exageración: cada decisión de diseño que tomes en este ecosistema tiene consecuencias reales para personas reales.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Tu filtro de diseño",
        text: "Cada vez que diseñes algo en este ecosistema, pregúntate: ¿un usuario que no sabe nada de crypto entendería esto en 5 segundos? Si la respuesta es no, rediseña. Este es tu estándar. Memorízalo.",
      },
      {
        type: "exercise",
        title: "Mal diseño = dinero perdido",
        text: "Escribe 3 situaciones donde un mal diseño de interfaz podría hacer que un usuario perdiera dinero en crypto. Piensa en botones confusos, textos técnicos, o flujos poco claros. Para cada situación, describe: qué ve el usuario, qué hace, y qué pasa después.",
      },
    ],
  },

  // ═══════════════════════════════════════
  // LECCIÓN 1.2 — Los 5 Productos y Su Rol
  // ═══════════════════════════════════════
  {
    id: "1-2",
    blocks: [
      {
        type: "concept",
        title: "El mapa del ecosistema",
        text: "El ecosistema tiene 5 productos principales. Cada uno resuelve una parte del problema de seguridad crypto. Juntos, crean una experiencia completa. Vamos a conocerlos uno por uno — y lo más importante: vas a entender qué significa cada uno para TU trabajo como diseñadora.",
      },
      {
        type: "concept",
        title: "1. Risk Intelligence Engine — \"El Cerebro\"",
        text: "Es el motor de análisis que escanea contratos inteligentes en 6+ blockchains (Ethereum, BSC, Polygon, Solana, Arbitrum, Base). Detecta patrones de fraude, honeypots, rugpulls y vulnerabilidades técnicas. Es lo que hace que todo el ecosistema sea posible.",
        items: [
          "Stack técnico: FastAPI, Celery, PostgreSQL, Redis, Docker — tú no tocas nada de esto, pero es útil saberlo",
          "Lo que genera: risk scores de 0 a 100, alertas en tiempo real, reportes detallados, clasificación de riesgo (bajo/medio/alto/crítico)",
          "Para ti: necesitas entender QUÉ datos genera el Engine para diseñar CÓMO se muestran al usuario",
          "Piénsalo como el laboratorio médico: tú no haces los análisis, pero diseñas el informe que el paciente lee y entiende",
        ],
      },
      {
        type: "concept",
        title: "2. RugPull News — \"La Voz\"",
        text: "Portal de noticias y alertas de seguridad crypto. Lo que lo hace único: tiene 10 agentes de IA que generan contenido — 4 con tono satírico/humorístico y 6 con tono serio/analítico. Cada agente tiene personalidad y avatar propios.",
        items: [
          "Páginas principales: Home, Article, Feed, Leaderboard, Profile, Saved, Liked, Alerts, Reporters, Humor",
          "Es la web donde más trabajarás la experiencia de contenido — cómo se consume, se comparte, se interactúa con las noticias",
          "El usuario llega aquí por SEO o redes sociales — es el primer contacto con el ecosistema para muchos",
          "Dato clave: RugPull News es el top-of-funnel. Si la experiencia aquí es mala, perdemos al usuario antes de que vea los demás productos",
        ],
      },
      {
        type: "concept",
        title: "3. Scanners — \"Las Herramientas\"",
        text: "Son 3 scanners especializados, cada uno con su propia identidad visual y su público objetivo. Los 3 comparten el mismo Risk Engine por debajo, pero la experiencia de cada uno es distinta.",
        items: [
          "ScamScanner: detección de estafas. Tono serio, colores que comunican seguridad. El usuario pega una dirección de contrato y obtiene un veredicto claro",
          "MemeScanner: evaluación de memecoins. Tono más viral y divertido, paleta naranja/púrpura. Diseñado para compartir en Twitter — el resultado tiene que ser 'screenshotteable'",
          "SmartScanner: análisis técnico profundo. Para usuarios avanzados que quieren ver el detalle de cada vulnerabilidad",
          "Para ti: los scanners son el hook viral del ecosistema. El flujo Scan → Result → Share tiene que ser IMPECABLE. Un segundo de fricción = un share perdido",
        ],
      },
      {
        type: "concept",
        title: "4. Holding Commerce — \"La Infraestructura\"",
        text: "Sistema de pagos blockchain multi-tenant construido con Diamond Proxy (un patrón avanzado de smart contracts). Gestiona cupones, referidos y partners de forma automatizada en blockchain.",
        items: [
          "Tú no diseñas Commerce directamente — es infraestructura invisible",
          "PERO sí diseñas la experiencia de pago que el usuario ve en cada producto cuando quiere funciones premium",
          "Incluye: pasarela de pago, cupones automáticos, programa de referidos, sistema de partners",
          "Para ti: cuando diseñes un checkout o un paywall en cualquier producto, el dinero fluye por Commerce",
        ],
      },
      {
        type: "concept",
        title: "5. Smart Academy — \"La Puerta de Entrada\"",
        text: "Plataforma de educación blockchain gamificada. Es donde el usuario novato se convierte en usuario avanzado. Incluye cursos estructurados, ejercicios prácticos, y certificaciones NFT al completar cada nivel.",
        items: [
          "El diseño del flujo de aprendizaje es CRÍTICO — un mal onboarding educativo pierde al usuario en la primera lección",
          "Las certificaciones NFT son más que un diploma: son identidad y logro visible en todo el ecosistema",
          "Academy alimenta a los demás productos: un usuario que aprende sobre seguridad usa más los scanners",
          "Para ti: esta plataforma (EXP Academy donde estás ahora) está inspirada en Smart Academy. La estructura es similar",
        ],
      },
      {
        type: "connection",
        title: "La visión completa",
        text: "Ahora tienes el mapa. 5 productos, cada uno con su función específica, todos conectados por un mismo objetivo: hacer que crypto sea más seguro para todo el mundo. Tu trabajo es que esta conexión no solo exista en la arquitectura técnica, sino que el usuario la SIENTA en cada interacción.",
      },
      {
        type: "checkpoint",
        title: "Verifica tu comprensión",
        items: [
          "Puedo nombrar los 5 productos del ecosistema",
          "Entiendo qué hace cada uno sin necesitar explicación técnica",
          "Sé cuál es la función del Risk Engine aunque yo no lo toque directamente",
          "Entiendo qué es un scanner y por qué es el hook viral del ecosistema",
          "Sé qué producto es la 'puerta de entrada' para usuarios novatos",
        ],
      },
    ],
  },

  // ═══════════════════════════════════════
  // LECCIÓN 1.3 — El Global Portal
  // ═══════════════════════════════════════
  {
    id: "1-3",
    blocks: [
      {
        type: "concept",
        title: "El hub donde todo se une",
        text: "El Global Portal es el centro neurálgico del ecosistema. Piénsalo como el 'menú principal' de un videojuego: desde aquí el usuario accede a cada producto, ve su progreso, gestiona su perfil y entiende el ecosistema completo de un vistazo.",
      },
      {
        type: "concept",
        title: "Las dos caras del Portal",
        text: "El Global Portal tiene dos componentes principales que trabajan juntos para crear la experiencia central.",
        items: [
          "Frontend — Central Hub: es lo que el usuario ve. Una interfaz que muestra el ecosistema completo, los productos disponibles, el perfil del usuario, sus logros y su actividad reciente",
          "Backend — Global Backend: es lo que coordina todos los servicios. Gestiona la identidad del usuario, sincroniza datos entre productos, y mantiene el sistema de gamificación global",
          "Para el usuario: es simplemente 'la app principal'. No sabe ni necesita saber que hay un backend detrás",
        ],
      },
      {
        type: "concept",
        title: "Identidad global",
        text: "Una de las decisiones más importantes del ecosistema: el perfil del usuario es GLOBAL. Esto significa que su nombre, avatar, XP, badges y nivel son los mismos en todos los productos. Si gana XP en un scanner, lo ve reflejado en RugPull News y en Academy.",
        items: [
          "Un solo login para todos los productos — no hay que crear cuenta en cada uno",
          "El nivel y los badges se muestran en todas partes — el usuario SIENTE su progreso",
          "Las notificaciones son centralizadas — todo pasa por el Portal",
          "Para ti: esto significa que el componente de perfil/avatar que diseñes debe funcionar en TODOS los contextos",
        ],
      },
      {
        type: "concept",
        title: "Tu canvas principal",
        text: "El Global Portal es donde el usuario entiende que esto no son 5 apps sueltas sino UN ecosistema. Es la primera impresión. Es donde decides si un visitante se convierte en usuario. Cada decisión de diseño que tomes aquí afecta la percepción de todo lo demás.",
      },
      {
        type: "callout",
        calloutType: "info",
        title: "Oportunidad única",
        text: "El Global Portal aún está en fase de diseño. Tú tienes la oportunidad de definir cómo será la experiencia desde cero. No estás rediseñando algo existente — estás creando algo nuevo. Esto es raro y valioso: la mayoría de diseñadores heredan decisiones de otros. Tú las tomas.",
      },
      {
        type: "exercise",
        title: "Los primeros 10 segundos",
        text: "Imagina que eres un usuario nuevo que llega al Global Portal por primera vez. No sabes nada de crypto, alguien te pasó un link. ¿Qué deberías ver? ¿Qué deberías entender en los primeros 10 segundos? Escribe tu propuesta: qué elementos pondrías en la pantalla, en qué orden, y qué acción principal debería hacer el usuario.",
      },
    ],
  },

  // ═══════════════════════════════════════
  // LECCIÓN 1.4 — Cómo se Conectan Entre Sí
  // ═══════════════════════════════════════
  {
    id: "1-4",
    blocks: [
      {
        type: "concept",
        title: "No son 5 apps — es un SISTEMA",
        text: "El ecosistema no son 5 productos independientes que comparten un logo. Es un SISTEMA donde cada pieza alimenta a las demás. Cuando un producto funciona bien, los demás se benefician. Cuando uno falla, todos sufren. Entender estas conexiones es fundamental para tu trabajo.",
      },
      {
        type: "concept",
        title: "El flujo principal del ecosistema",
        text: "Existe un flujo natural por el que los usuarios viajan a través de los productos. No es lineal ni obligatorio, pero es el camino más común.",
        items: [
          "Risk Engine analiza contratos inteligentes → genera datos de riesgo en tiempo real",
          "RugPull News publica alertas y noticias basadas en esos datos → atrae usuarios por SEO y redes sociales",
          "Los usuarios descubren RugPull News (Twitter, Google, viral) → leen sobre estafas y riesgos",
          "Quieren verificar sus propios tokens → van a los Scanners (ScamScanner, MemeScanner o SmartScanner)",
          "Quieren entender más sobre crypto seguro → van a Smart Academy",
          "Quieren funciones premium (más escaneos, alertas, etc.) → pagan via Holding Commerce",
          "Commerce procesa el pago y notifica al sistema → el usuario gana XP por su compra",
          "El ciclo se retroalimenta: más confianza → más uso → más datos → mejores análisis",
        ],
      },
      {
        type: "concept",
        title: "La analogía Apple",
        text: "Piensa en cómo funciona Apple: tienes un iPhone, y de repente quieres un Mac porque se sincronizan. Después un Apple Watch porque se conecta. Después iCloud porque guarda todo. Después Apple Music porque ya estás dentro. Cada producto te atrae al siguiente. Tu ecosistema funciona exactamente igual: News te atrae a Scanners, Scanners te atraen a Academy, Academy te lleva a premium via Commerce.",
      },
      {
        type: "connection",
        title: "Tu rol en las conexiones",
        text: "Estas conexiones entre productos no suceden por arte de magia — suceden porque alguien DISEÑA los puentes. Un CTA en un artículo de News que dice 'Escanea este token tú mismo'. Un banner en el Scanner que dice 'Aprende a leer estos resultados en Academy'. Esos puentes son tu responsabilidad.",
      },
      {
        type: "example",
        title: "Ecosistema conectado vs. apps sueltas",
        wrong: "5 apps separadas, cada una con su propia marca, su propio login, su propia estética. El usuario no entiende que están conectadas. Tiene que crear cuenta en cada una. Los datos no se comparten. Se siente como 5 empresas diferentes.",
        right: "5 productos con identidad propia PERO pertenencia clara al mismo ecosistema. Un login, un perfil, un sistema de recompensas. Cada producto tiene su personalidad visual pero comparte los mismos principios de diseño. El usuario SIENTE la conexión sin que nadie se la explique.",
      },
      {
        type: "exercise",
        title: "El flujo cross-producto",
        text: "Dibuja (en texto) el flujo completo de un usuario que: descubre un tweet de RugPull News → lee el artículo → escanea un token → se registra en el ecosistema → gana XP → decide comprar premium. Para cada paso, escribe: 1) qué producto del ecosistema está usando, 2) qué ve en pantalla, 3) qué acción hace para pasar al siguiente producto.",
      },
    ],
  },

  // ═══════════════════════════════════════
  // LECCIÓN 1.5 — Frontend, Backend y Blockchain
  // ═══════════════════════════════════════
  {
    id: "1-5",
    blocks: [
      {
        type: "concept",
        title: "Las 3 capas — explicadas sin código",
        text: "Cada producto del ecosistema tiene 3 capas. No necesitas programar ninguna, pero necesitas entender qué hace cada una para diseñar correctamente. Vamos a usar analogías que puedas recordar.",
      },
      {
        type: "concept",
        title: "Frontend — El Restaurante",
        text: "El Frontend es lo que el usuario VE y TOCA. Las pantallas, los botones, los colores, las animaciones, los textos. Es tu mundo. Es donde vive tu trabajo.",
        items: [
          "Analogía: es el restaurante — la decoración, el menú, los camareros, la música, la iluminación",
          "El cliente (usuario) solo interactúa con el restaurante. No ve lo que pasa en la cocina",
          "Tecnología: React y Next.js (no necesitas saberlo, pero lo verás mencionado en reuniones)",
          "Lo que tú diseñas en Figma se convierte en Frontend. Literalmente, tus diseños son el plano del restaurante",
        ],
      },
      {
        type: "concept",
        title: "Backend — La Cocina",
        text: "El Backend es lo que PROCESA la información detrás de cada acción. Cuando el usuario hace click en 'Escanear', el backend recibe la petición, la procesa, consulta el Risk Engine, y devuelve el resultado.",
        items: [
          "Analogía: es la cocina del restaurante — el usuario no la ve, pero sin ella no hay comida",
          "Cuando tú diseñas un botón de 'Escanear', el backend es el que hace el trabajo pesado al hacer click",
          "Tecnología: Python (FastAPI) y Node.js — de nuevo, no lo programas, pero sabes que existe",
          "Dato importante para diseño: el backend responde en milisegundos. Lo que diseñes se carga casi instantáneamente",
        ],
      },
      {
        type: "concept",
        title: "Blockchain — La Notaría",
        text: "La Blockchain es donde viven los datos PERMANENTES e INMUTABLES. Los pagos, los NFTs de certificación, los contratos inteligentes, los tokens. Una vez que algo se escribe en blockchain, no se puede cambiar ni borrar.",
        items: [
          "Analogía: es la escritura notarial — una vez firmado ante notario, queda registrado para siempre",
          "Los pagos crypto van por blockchain. Los badges NFT viven en blockchain. Los smart contracts están en blockchain",
          "Tecnología: Solidity (Ethereum), smart contracts — tu founder lo programa, tú diseñas la experiencia alrededor",
          "IMPORTANTE: las transacciones en blockchain pueden tardar segundos o minutos en confirmarse. Esto NO es como un click instantáneo",
        ],
      },
      {
        type: "concept",
        title: "Las 3 capas en cada producto",
        text: "Cada producto tiene las 3 capas trabajando juntas. Tú diseñas el Frontend. No necesitas programar el Backend ni la Blockchain. Pero necesitas saber qué datos vienen de cada capa para diseñar las pantallas correctas.",
        items: [
          "Dato que viene del Backend (instantáneo): lista de noticias, resultados de búsqueda, perfil del usuario",
          "Dato que viene de Blockchain (puede tardar): confirmación de pago, mint de un NFT, verificación de un contrato en tiempo real",
          "Tu diseño debe reflejar esta diferencia: loading states diferentes, mensajes de 'confirmando en blockchain...', indicadores de progreso",
        ],
      },
      {
        type: "callout",
        calloutType: "warning",
        title: "Regla de oro para tus diseños",
        text: "Cuando diseñes, siempre pregunta: ¿este dato viene del backend o de blockchain? Los datos de blockchain pueden tardar más en llegar (necesitan confirmaciones de la red). Los del backend son instantáneos. Esto afecta directamente tu diseño: necesitas loading states, mensajes de confirmación, y feedback visual diferente para cada caso. Un spinner genérico no es suficiente — el usuario necesita saber QUÉ está esperando.",
      },
      {
        type: "checkpoint",
        title: "Verifica tu comprensión",
        items: [
          "Entiendo la diferencia entre frontend, backend y blockchain",
          "Sé que mi trabajo como diseñadora se centra en el frontend",
          "Entiendo que los datos de blockchain pueden tardar más que los del backend",
          "Sé que cada producto del ecosistema tiene las 3 capas",
          "Puedo explicar la analogía restaurante (frontend) / cocina (backend) / notaría (blockchain)",
        ],
      },
    ],
  },

  // ═══════════════════════════════════════
  // LECCIÓN 1.6 — Tu Mapa del Ecosistema
  // ═══════════════════════════════════════
  {
    id: "1-6",
    blocks: [
      {
        type: "concept",
        title: "Es hora de demostrar lo que sabes",
        text: "Has recorrido las 5 lecciones anteriores. Conoces los 5 productos, sabes cómo se conectan, entiendes las 3 capas técnicas, y tienes claro cuál es tu rol. Ahora viene la prueba: vas a mapear el ecosistema completo a través de los ojos de 3 usuarios muy diferentes.",
      },
      {
        type: "exercise",
        title: "USUARIO 1 — El Novato Curioso",
        text: "Ve un tweet viral sobre una estafa crypto → llega a RugPull News → lee el artículo → quiere verificar un token que le recomendaron en un grupo de Telegram → ¿qué producto usa? → escanea → ve el resultado → quiere aprender más sobre cómo protegerse → ¿a dónde va?\n\nPara cada paso, escribe: 1) qué producto del ecosistema está usando, 2) qué ve en pantalla, y 3) qué emoción siente el usuario en ese momento.",
      },
      {
        type: "exercise",
        title: "USUARIO 2 — La Trader Activa",
        text: "Ya conoce MemeScanner y lo usa todos los días → escanea 5 tokens al día pero quiere más (el plan gratuito tiene límite) → quiere funciones premium → ¿cómo paga? → ¿qué sistema del ecosistema procesa ese pago? → después de pagar, ¿qué pasa con su XP y su nivel en el ecosistema?\n\nDescribe el flujo completo y nombra cada producto que interviene.",
      },
      {
        type: "exercise",
        title: "USUARIO 3 — La Empresa",
        text: "Una startup lanza un nuevo token y quiere demostrar que es legítimo y seguro → ¿qué producto del ecosistema le sirve para obtener una verificación? → obtiene un certificado/badge de seguridad → ¿cómo lo muestra al mundo para generar confianza?\n\nPiensa en el flujo B2B: qué necesita la empresa, qué productos toca, y cómo el resultado se traduce en confianza pública.",
      },
      {
        type: "quote",
        text: "Diseñar sin entender el sistema es decorar. Diseñar entendiendo el sistema es crear experiencia.",
        author: "Regla #1 de EXP Academy",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "¿Te cuesta?",
        text: "Si te cuesta este ejercicio, vuelve a las lecciones 1.2 y 1.4. No hay prisa. Cuando puedas hacer esto sin mirar las lecciones anteriores, estás lista para el Módulo 2. Este ejercicio es tu pasaporte al siguiente nivel.",
      },
    ],
  },
];

export default module1Lessons;
