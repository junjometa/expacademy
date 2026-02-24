import { LessonContent } from "./index";

const module2Lessons: LessonContent[] = [
  // ─── Lección 2.1: ¿Qué es el Diamond Proxy? ───
  {
    id: "2-1",
    blocks: [
      {
        type: "concept",
        title: "El Problema de los Smart Contracts Inmutables",
        text: "Cuando despliegas un smart contract en blockchain, su código queda grabado PARA SIEMPRE. No puedes editarlo, no puedes parchearlo, no puedes añadir funciones. Es como tatuar código en piedra. Esto es genial para la confianza del usuario ('nadie puede cambiar las reglas'), pero terrible para el desarrollo ('encontré un bug y no puedo arreglarlo').",
      },
      {
        type: "callout",
        calloutType: "warning",
        title: "El Dilema Real",
        text: "Imagina que lanzas un sistema de pagos en blockchain. 10,000 usuarios lo usan. Descubres un bug crítico. Sin un patrón proxy, tu ÚNICA opción es: desplegar un contrato NUEVO y pedirle a 10,000 usuarios que migren manualmente. La mayoría no lo hará.",
      },
      {
        type: "concept",
        title: "La Solución: Patrón Proxy",
        text: "Un proxy es un contrato 'fachada' que recibe todas las llamadas del usuario y las REDIRIGE al contrato real (llamado 'implementation'). El usuario siempre interactúa con la MISMA dirección, pero por detrás puedes cambiar a qué implementation apunta. Es como un recepcionista: siempre llamas al mismo número, pero el recepcionista puede transferirte a diferentes departamentos.",
      },
      {
        type: "example",
        title: "Proxy Simple vs Diamond",
        wrong: "Proxy Simple (ERC-1967): UN solo contrato de implementation. Si necesitas 50 funciones, TODAS van en un solo contrato. Problema: Ethereum tiene límite de 24KB por contrato. Te quedas sin espacio.",
        right: "Diamond Proxy (EIP-2535): MÚLTIPLES contratos de implementation (llamados 'facets'). Cada facet maneja un grupo de funciones. Sin límite de tamaño total. Puedes añadir, reemplazar o quitar facets individualmente.",
      },
      {
        type: "concept",
        title: "EIP-2535: El Estándar Diamond",
        text: "EIP-2535 define un estándar para crear contratos 'diamante'. Se llama así porque un diamante tiene múltiples caras (facets), y cada cara refleja la luz de forma diferente. En el Diamond Proxy, cada facet es un contrato separado que maneja funciones específicas. El diamante (proxy) mantiene un registro de qué facet maneja cada función.",
      },
      {
        type: "info-callout",
        title: "Los 3 Componentes del Diamond",
        text: "1) Diamond (Proxy): El contrato principal. Recibe llamadas y las redirige al facet correcto.\n2) Facets: Contratos de implementation. Cada uno tiene funciones específicas (UserFacet, PaymentFacet, etc.).\n3) DiamondCut: La función especial que permite añadir, reemplazar o quitar facets. Es el 'panel de control' del diamante.",
      },
      {
        type: "connection",
        title: "¿Por Qué Nuestro Ecosistema Usa Diamond?",
        text: "Nuestro ecosistema tiene 5 productos que comparten datos de usuario, gamificación, pagos y NFTs. Con un proxy simple, necesitaríamos un contrato gigante (imposible por el límite de 24KB). Con Diamond, cada funcionalidad es un facet independiente: UserFacet, XPFacet, BadgeFacet, PaymentFacet, NFTFacet... y todos comparten el MISMO storage.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Puedo explicar por qué un smart contract normal no se puede actualizar",
          "Entiendo la diferencia entre un proxy simple y un Diamond Proxy",
          "Sé qué son los facets y para qué sirve DiamondCut",
          "Comprendo por qué el ecosistema necesita el patrón Diamond",
        ],
      },
    ],
  },

  // ─── Lección 2.2: Identity Diamond — El Corazón del Usuario ───
  {
    id: "2-2",
    blocks: [
      {
        type: "concept",
        title: "¿Qué es el Identity Diamond?",
        text: "El Identity Diamond es el contrato diamante que gestiona TODO lo relacionado con la identidad y experiencia del usuario en el ecosistema. Piénsalo como el 'perfil central' del usuario, pero on-chain. Un usuario se registra UNA vez y ese perfil funciona en los 5 productos.",
      },
      {
        type: "callout",
        calloutType: "info",
        title: "Un Usuario, Una Identidad, Cinco Productos",
        text: "Cuando un usuario se registra en RugPull News, automáticamente tiene identidad en MemeScanner, SmartScanner, Smart Academy y el Global Portal. No necesita crear 5 cuentas. Su XP, nivel, badges y preferencias viajan con él por todo el ecosistema.",
      },
      {
        type: "concept",
        title: "Facet 1: UserManagementFacet",
        text: "Este facet maneja el registro, perfil y autenticación on-chain del usuario. Almacena: wallet address, username, fecha de registro, estado (activo/suspendido), tier de suscripción y referral code. Cada usuario tiene un ID único (uint256) que lo identifica en TODO el ecosistema.",
      },
      {
        type: "concept",
        title: "Facet 2: GamificationFacet",
        text: "Aquí vive toda la lógica de XP y niveles. Este facet: otorga XP por acciones verificadas, calcula el nivel del usuario, gestiona las rachas diarias (streaks), define los umbrales de nivel (100, 300, 600, 1000... XP) y emite eventos cuando el usuario sube de nivel. Es el motor que hace que la gamificación funcione cross-producto.",
      },
      {
        type: "concept",
        title: "Facet 3: ContentInteractionFacet",
        text: "Registra TODAS las interacciones del usuario con contenido del ecosistema: artículos leídos en RugPull News, scans realizados en MemeScanner/SmartScanner, lecciones completadas en Smart Academy, y votos/reportes en cualquier producto. Esto permite: recomendaciones personalizadas, detección de bots (patrones no humanos) y métricas de engagement.",
      },
      {
        type: "concept",
        title: "Facet 4: NFTBadgeFacet",
        text: "Gestiona los badges del usuario como NFTs reales. Cuando un usuario desbloquea un logro, este facet: verifica que cumple los requisitos, mintea el NFT badge a su wallet, actualiza el perfil on-chain con el nuevo badge, y emite un evento para que la UI pueda mostrar la celebración. Los badges son ERC-721 con metadata en IPFS.",
      },
      {
        type: "example",
        title: "Flujo Real: Usuario Completa 10 Artículos",
        wrong: "Sin Identity Diamond: RugPull News tiene su propia base de datos, MemeScanner no sabe nada del usuario, el badge se genera como imagen estática, no hay XP global. Cada producto es una isla.",
        right: "Con Identity Diamond: ContentInteractionFacet registra la lectura #10 → GamificationFacet otorga +50 XP → el usuario sube a nivel 3 → NFTBadgeFacet mintea el badge 'Lector Voraz' → el evento se propaga a TODOS los productos → la UI muestra celebración.",
      },
      {
        type: "info-callout",
        title: "AppStorage: El Estado Compartido",
        text: "Todos los facets del Identity Diamond comparten el MISMO almacenamiento (AppStorage). Esto significa que UserManagementFacet puede leer el nivel del usuario (escrito por GamificationFacet) y NFTBadgeFacet puede verificar las interacciones (escritas por ContentInteractionFacet). No hay silos de datos.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Puedo nombrar los 4 facets del Identity Diamond y su función",
          "Entiendo cómo un usuario tiene UNA identidad para 5 productos",
          "Comprendo el flujo completo de una acción (lectura → XP → nivel → badge)",
          "Sé qué es AppStorage y por qué es importante",
        ],
      },
    ],
  },

  // ─── Lección 2.3: Commerce Diamond — El Motor Económico ───
  {
    id: "2-3",
    blocks: [
      {
        type: "concept",
        title: "¿Qué es el Commerce Diamond?",
        text: "El Commerce Diamond es el contrato diamante que gestiona TODA la lógica comercial del ecosistema: productos, suscripciones, pagos, partners, referrals y distribución de ingresos. Si el Identity Diamond es el corazón del usuario, el Commerce Diamond es el sistema circulatorio del dinero.",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Separación de Responsabilidades",
        text: "¿Por qué dos diamantes separados en vez de uno gigante? Porque identidad y comercio tienen ciclos de actualización diferentes. Puedes actualizar la lógica de pagos sin tocar la identidad del usuario, y viceversa. Además, en caso de exploit financiero, el Identity Diamond (con los datos del usuario) permanece intacto.",
      },
      {
        type: "concept",
        title: "Facet 1: ProductCouponFacet",
        text: "Gestiona el catálogo de productos y el sistema de cupones. Almacena: lista de productos del ecosistema (cada uno con precio, descripción, estado), cupones de descuento (porcentaje, fecha de expiración, usos máximos), y la relación producto-cupón. Permite crear bundles (combos de productos con descuento).",
      },
      {
        type: "concept",
        title: "Facet 2: PartnerReferralFacet",
        text: "Maneja el programa de partners y referidos. Cada usuario puede generar un código de referral único. Cuando alguien se registra con ese código, el referidor recibe: un porcentaje de la primera compra (configurable), XP bonus, y badges especiales de referral. Los partners (influencers, medios, educadores) tienen condiciones especiales con porcentajes más altos y dashboards de métricas.",
      },
      {
        type: "concept",
        title: "Facet 3: PaymentRoutingFacet",
        text: "Este es el facet más crítico: gestiona cómo fluye el dinero. Cuando un usuario paga una suscripción, este facet: recibe el pago (crypto o fiat vía procesador), calcula la distribución (plataforma, partner, referidor, pool de rewards), ejecuta las transferencias on-chain, y registra la transacción para auditoría. Soporta múltiples tokens de pago.",
      },
      {
        type: "example",
        title: "Flujo de Pago: Suscripción Premium",
        wrong: "Sin Commerce Diamond: El usuario paga, el dinero va a una wallet, alguien manualmente reparte a partners y referidores cada mes. Lento, propenso a errores, sin transparencia.",
        right: "Con Commerce Diamond: Usuario paga $20 USDC → PaymentRoutingFacet calcula: 60% plataforma ($12), 15% referidor ($3), 15% partner ($3), 10% reward pool ($2) → ejecuta 4 transferencias atómicas → ProductCouponFacet activa la suscripción → GamificationFacet (Identity Diamond) otorga XP bonus. Todo en UNA transacción.",
      },
      {
        type: "info-callout",
        title: "Comunicación Entre Diamantes",
        text: "El Commerce Diamond necesita hablar con el Identity Diamond constantemente. Ejemplo: cuando un pago se confirma, Commerce Diamond llama al Identity Diamond para: otorgar XP de compra, verificar si el usuario tiene cupón de nivel, y actualizar el tier de suscripción en el perfil. Esta comunicación es directa entre contratos — sin intermediarios.",
      },
      {
        type: "connection",
        title: "Impacto en el Diseño UX",
        text: "Como diseñadora, el Commerce Diamond afecta directamente tu trabajo: el flujo de checkout debe mostrar la distribución transparente de pagos (genera confianza), los cupones por nivel son un incentivo visual ('sube al nivel 5 y obtén 20% de descuento'), el dashboard de referrals necesita métricas claras, y el estado de suscripción debe ser visible en TODO el ecosistema.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Puedo nombrar los 3 facets del Commerce Diamond",
          "Entiendo cómo fluye un pago desde el usuario hasta la distribución final",
          "Comprendo por qué Identity y Commerce son diamantes SEPARADOS",
          "Puedo identificar cómo el Commerce Diamond afecta el diseño UX",
        ],
      },
    ],
  },

  // ─── Lección 2.4: Eventos y Sincronización ───
  {
    id: "2-4",
    blocks: [
      {
        type: "concept",
        title: "¿Qué Son los Eventos en Blockchain?",
        text: "Los eventos (events) son mensajes que los smart contracts emiten cuando algo importante sucede. Son como señales de humo digitales: el contrato grita '¡pasó algo!' y cualquiera que esté escuchando puede reaccionar. Los eventos se guardan en el log de la blockchain — son baratos de emitir y fáciles de consultar.",
      },
      {
        type: "callout",
        calloutType: "info",
        title: "¿Por Qué Importan los Eventos para UX?",
        text: "Cada evento que emite el smart contract es una oportunidad de diseño UX. Un evento 'LevelUp' puede disparar una animación de celebración. Un evento 'BadgeMinted' puede mostrar una notificación push. Un evento 'PaymentReceived' puede actualizar el dashboard en tiempo real. Los eventos son el PUENTE entre blockchain y tu interfaz.",
      },
      {
        type: "concept",
        title: "Eventos del Identity Diamond",
        text: "El Identity Diamond emite eventos críticos que tu frontend debe escuchar: UserRegistered (nuevo usuario → onboarding flow), XPEarned (ganó XP → animación +XP), LevelUp (subió de nivel → celebración grande), BadgeMinted (nuevo badge → notificación con preview), StreakUpdated (racha actualizada → actualizar contador), ProfileUpdated (cambió perfil → refrescar UI).",
      },
      {
        type: "concept",
        title: "Eventos del Commerce Diamond",
        text: "El Commerce Diamond emite sus propios eventos: PaymentProcessed (pago exitoso → confirmación + receipt), SubscriptionActivated (suscripción activa → desbloquear features premium), CouponRedeemed (cupón usado → mostrar ahorro), ReferralReward (comisión de referido → notificación de ingreso), PartnerPayout (pago a partner → actualizar dashboard).",
      },
      {
        type: "concept",
        title: "El Flujo: Contrato → Evento → Backend → Frontend",
        text: "Cuando algo pasa on-chain, la información viaja así: 1) El facet ejecuta la lógica y emite un evento. 2) Un servicio de 'indexing' (como un listener) captura el evento de la blockchain. 3) El backend procesa el evento y actualiza la base de datos off-chain. 4) El backend envía una notificación al frontend (vía WebSocket o push). 5) El frontend actualiza la UI en tiempo real. Todo esto sucede en 2-15 segundos.",
      },
      {
        type: "example",
        title: "Ejemplo: Usuario Completa un Scan",
        wrong: "Sin sincronización de eventos: El usuario hace un scan en MemeScanner, ve un resultado, pero su XP no se actualiza hasta que refresca la página. Si va a Smart Academy, su nivel sigue sin actualizarse. La experiencia se siente desconectada.",
        right: "Con sincronización: Usuario hace scan → ContentInteractionFacet registra → GamificationFacet emite XPEarned(+25) → backend captura evento → WebSocket envía actualización → el contador de XP sube con animación EN TIEMPO REAL → si sube de nivel, LevelUp dispara celebración inmediata.",
      },
      {
        type: "info-callout",
        title: "Off-chain vs On-chain: El Balance",
        text: "No todo va a blockchain. Las interacciones ligeras (click, scroll, tiempo en página) se guardan off-chain en la base de datos tradicional. Solo las acciones significativas (completar artículo, hacer scan, ganar badge) van on-chain. Esto reduce costos de gas y mantiene la velocidad. Tu UI debe funcionar con datos off-chain para respuesta inmediata, y confirmar con datos on-chain para veracidad.",
      },
      {
        type: "connection",
        title: "Diseñando para la Latencia",
        text: "Blockchain no es instantánea. Una transacción puede tardar 2-15 segundos (o más en congestión). Como diseñadora, necesitas: estados de 'pending' claros (spinner con contexto), confirmación optimista (mostrar el resultado antes de que blockchain confirme, con indicador de 'confirmando...'), y manejo de errores (qué pasa si la transacción falla después de mostrar éxito provisional).",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Entiendo qué son los eventos de blockchain y para qué sirven",
          "Puedo nombrar al menos 4 eventos del Identity Diamond",
          "Comprendo el flujo completo: contrato → evento → backend → frontend",
          "Sé qué va on-chain vs off-chain y por qué",
          "Puedo diseñar para la latencia de blockchain",
        ],
      },
    ],
  },

  // ─── Lección 2.5: Reward Pools y Boosts ───
  {
    id: "2-5",
    blocks: [
      {
        type: "concept",
        title: "¿Qué Son los Reward Pools?",
        text: "Un Reward Pool es una reserva de tokens destinada a recompensar a los usuarios del ecosistema. Piénsalo como una 'hucha comunitaria': una parte de cada pago va al pool, y los usuarios que contribuyen al ecosistema (contenido, referidos, actividad) reciben recompensas de ese pool. Es lo que convierte usuarios pasivos en participantes activos.",
      },
      {
        type: "info-callout",
        title: "Tipos de Reward Pools en el Ecosistema",
        text: "1) Content Reward Pool: Recompensa a usuarios que crean o curan contenido de calidad en RugPull News.\n2) Referral Pool: Fondos para pagar comisiones de referidos.\n3) Staking Reward Pool: Recompensas para usuarios que hacen staking de tokens del ecosistema.\n4) Activity Pool: Bonus por actividad sostenida (rachas, challenges completados).\n5) Creator Pool: Fondos para creadores de contenido educativo en Smart Academy.",
      },
      {
        type: "concept",
        title: "Cómo se Llenan los Pools",
        text: "Los pools se alimentan de múltiples fuentes: un porcentaje de cada suscripción (configurable por el PaymentRoutingFacet), fees de transacciones especiales, aportes directos del equipo (en fases iniciales), y rendimientos de DeFi (los pools pueden estar invertidos en protocolos seguros generando yield mientras esperan ser distribuidos).",
      },
      {
        type: "concept",
        title: "Distribución de Rewards: El Algoritmo",
        text: "La distribución no es al azar — sigue un algoritmo ponderado: cada usuario acumula 'reward points' basados en sus acciones (crear contenido vale más que leer, referir vale más que votar). Al final de cada periodo (semanal), los rewards se distribuyen proporcionalmente a los puntos de cada usuario. Usuarios más activos = mayor porción del pool.",
      },
      {
        type: "concept",
        title: "¿Qué Son los Boosts?",
        text: "Los Boosts son multiplicadores temporales que aumentan las recompensas o XP del usuario. Funcionan como 'power-ups' en un videojuego: activas un boost y durante un tiempo limitado, tus acciones valen más. Hay boosts de XP (x2 durante 24h), boosts de rewards (x1.5 en reward points), y boosts de racha (protege tu streak por 1 día).",
      },
      {
        type: "example",
        title: "Boosts: Bien vs Mal Diseñados",
        wrong: "Boost mal diseñado: 'Boost x10 de XP por 1 hora'. Resultado: Los usuarios solo juegan durante boosts, inflación masiva de XP, los niveles pierden significado, la economía se rompe.",
        right: "Boost bien diseñado: 'Boost x1.5 de XP por 24h, máximo 500 XP extra, una vez por semana'. Resultado: Incentiva actividad sostenida, no distorsiona la economía, genera anticipación semanal, se siente como regalo justo.",
      },
      {
        type: "concept",
        title: "Boosts como Herramienta de Engagement",
        text: "Los boosts son tu arma secreta de retención: Boost de bienvenida (primeras 48h con x2 XP — acelera el onboarding), Boost de recuperación (si un usuario vuelve después de 7 días inactivo — facilita el retorno), Boost social (x1.5 por compartir en redes — impulsa el crecimiento orgánico), Boost de evento (durante eventos especiales del ecosistema — crea FOMO positivo).",
      },
      {
        type: "connection",
        title: "Diseñando el UI de Rewards y Boosts",
        text: "Como diseñadora, los pools y boosts necesitan UX excelente: un dashboard de rewards claro que muestre earnings acumulados y proyectados, indicadores visuales de boosts activos (timer, multiplicador visible en toda la app), un historial de rewards transparente (cada token ganado con su razón), y notificaciones de nuevos boosts disponibles que generen urgencia sin ser spam.",
      },
      {
        type: "checkpoint",
        title: "Verifica Tu Comprensión",
        items: [
          "Puedo explicar qué es un Reward Pool y cómo se llena",
          "Entiendo los 5 tipos de pools del ecosistema",
          "Comprendo cómo funciona la distribución ponderada de rewards",
          "Sé qué son los boosts y cómo diseñarlos sin romper la economía",
          "Puedo identificar oportunidades de diseño UX para rewards y boosts",
        ],
      },
    ],
  },

  // ─── Lección 2.6: Ejercicio — Tu Mapa de los Dos Diamantes ───
  {
    id: "2-6",
    blocks: [
      {
        type: "concept",
        title: "Ejercicio Final: Mapea los Dos Diamantes",
        text: "En este ejercicio vas a crear un mapa visual completo de los dos Diamond Proxies del ecosistema. El objetivo es que puedas explicar la arquitectura a cualquier persona — y que este mapa te sirva como referencia rápida en tu trabajo diario de diseño.",
      },
      {
        type: "exercise",
        title: "Parte 1: Mapa del Identity Diamond",
        text: "Crea un diagrama (en Figma, FigJam, o papel) del Identity Diamond con:\n\n1. El Diamond Proxy en el centro (caja principal)\n2. Los 4 facets como cajas conectadas: UserManagementFacet, GamificationFacet, ContentInteractionFacet, NFTBadgeFacet\n3. Para cada facet, lista 3-4 funciones principales que maneja\n4. Dibuja flechas mostrando qué facets se comunican entre sí\n5. Marca con color los datos que comparten vía AppStorage",
      },
      {
        type: "exercise",
        title: "Parte 2: Mapa del Commerce Diamond",
        text: "Ahora crea el diagrama del Commerce Diamond:\n\n1. El Diamond Proxy en el centro\n2. Los 3 facets: ProductCouponFacet, PartnerReferralFacet, PaymentRoutingFacet\n3. Para cada facet, lista sus funciones principales\n4. Dibuja el FLUJO DE DINERO: desde que el usuario paga hasta que se distribuye\n5. Marca los puntos donde Commerce Diamond habla con Identity Diamond",
      },
      {
        type: "exercise",
        title: "Parte 3: Mapa de Eventos",
        text: "Crea una tabla de eventos que conecte blockchain con UX:\n\n| Evento | Diamante | Qué pasa en UI | Prioridad UX |\n\nIncluye al menos 8 eventos (4 de cada diamante).\nPara cada uno, describe: qué componente de UI reacciona, qué animación/notificación se muestra, y cuánto tiempo tiene el usuario para esperar.",
      },
      {
        type: "exercise",
        title: "Parte 4: Flujo Cross-Diamond",
        text: "Diseña el flujo completo de este escenario:\n\n'Un usuario nuevo se registra vía referral, hace su primer scan en MemeScanner, sube a nivel 2, recibe un badge, y activa una suscripción premium con descuento de bienvenida.'\n\nTu diagrama debe mostrar:\n- Qué facets intervienen (de ambos diamantes)\n- Qué eventos se emiten\n- Qué ve el usuario en cada paso\n- Dónde hay latencia de blockchain y cómo la manejas visualmente",
      },
      {
        type: "callout",
        calloutType: "tip",
        title: "Consejo para el Ejercicio",
        text: "No necesitas que sea perfecto técnicamente. Lo importante es que ENTIENDAS el flujo y puedas COMUNICARLO visualmente. Este mapa será tu referencia cuando diseñes flujos de usuario que tocan blockchain. Si puedes explicárselo a alguien que no sabe nada de blockchain, lo has hecho bien.",
      },
      {
        type: "checkpoint",
        title: "Checklist del Ejercicio",
        items: [
          "He creado el mapa del Identity Diamond con sus 4 facets",
          "He creado el mapa del Commerce Diamond con sus 3 facets",
          "He mapeado al menos 8 eventos con su impacto en UI",
          "He diseñado el flujo cross-diamond completo",
          "Puedo explicar la arquitectura de ambos diamantes a alguien no-técnico",
        ],
      },
    ],
  },
];

export default module2Lessons;
