"use client";

import React, { useState, useMemo } from "react";
import {
  BookText, Search, Palette, Link2, Gamepad2,
  Briefcase, Code2,
} from "lucide-react";
import { motion } from "framer-motion";
import AppShell from "@/components/layout/AppShell";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════
   TERM DATA (100+ terms)
   ═══════════════════════════════════════════════ */

type Category = "ux" | "blockchain" | "gamificacion" | "negocio" | "tecnico";

interface Term {
  name: string;
  category: Category;
  definition: string;
  example?: string;
}

const CATEGORY_META: Record<Category, { label: string; icon: React.ReactNode; color: string }> = {
  ux: { label: "UX / Design", icon: <Palette size={14} />, color: "text-pink-400" },
  blockchain: { label: "Blockchain / Web3", icon: <Link2 size={14} />, color: "text-cyan-400" },
  gamificacion: { label: "Gamificación", icon: <Gamepad2 size={14} />, color: "text-amber-400" },
  negocio: { label: "Negocio", icon: <Briefcase size={14} />, color: "text-emerald-400" },
  tecnico: { label: "Técnico", icon: <Code2 size={14} />, color: "text-violet-400" },
};

const TERMS: Term[] = [
  /* ── UX / Design (28) ── */
  { name: "UX (User Experience)", category: "ux", definition: "Experiencia completa que tiene un usuario al interactuar con un producto. Incluye emociones, percepciones y respuestas.", example: "La UX de MemeScanner debe hacer que escanear sea rápido y satisfactorio." },
  { name: "UI (User Interface)", category: "ux", definition: "Interfaz visual con la que el usuario interactúa: botones, colores, tipografía, layouts. Es la capa visible de la UX.", example: "La UI del ecosistema usa púrpura + cyan como colores accent." },
  { name: "Wireframe", category: "ux", definition: "Esquema de baja fidelidad que muestra la estructura y layout de una página sin diseño visual. Se centra en jerarquía y contenido.", example: "Antes de diseñar la landing, haz un wireframe del flujo de escaneo." },
  { name: "Prototipo", category: "ux", definition: "Versión interactiva de un diseño que simula el comportamiento real del producto. Puede ser de baja o alta fidelidad.", example: "Un prototipo en Figma del onboarding de MemeScanner para testear con usuarios." },
  { name: "Design System", category: "ux", definition: "Conjunto organizado de componentes reutilizables, tokens de diseño y reglas que garantizan consistencia visual en un producto.", example: "El design system del ecosistema define botones, cards e inputs compartidos por todos los productos." },
  { name: "Token de diseño", category: "ux", definition: "Valor abstracto que define una propiedad visual: color, spacing, tipografía, border-radius. Es la unidad más pequeña del design system.", example: "--color-accent-primary: #6C5CE7 es un token de color compartido." },
  { name: "Responsive", category: "ux", definition: "Diseño que se adapta a diferentes tamaños de pantalla (móvil, tablet, desktop) sin perder funcionalidad ni estética.", example: "El dashboard debe funcionar en 375px (móvil) y 1280px (desktop)." },
  { name: "Breakpoint", category: "ux", definition: "Punto de ancho de pantalla donde el layout cambia para adaptarse a un nuevo tamaño. Los más comunes: 375px, 768px, 1024px, 1280px.", example: "En breakpoint 768px el sidebar pasa de fijo a menú hamburguesa." },
  { name: "Mobile First", category: "ux", definition: "Estrategia de diseño que prioriza la experiencia móvil y luego escala hacia pantallas más grandes.", example: "El 80% del tráfico crypto es móvil — diseña mobile first." },
  { name: "Above the fold", category: "ux", definition: "Contenido visible sin hacer scroll al cargar la página. Es el espacio de mayor impacto visual e informativo.", example: "El hero de la landing con CTA debe estar above the fold." },
  { name: "CTA (Call to Action)", category: "ux", definition: "Elemento visual (generalmente un botón) que invita al usuario a realizar una acción específica: registrarse, escanear, comprar.", example: "El CTA principal de MemeScanner: 'Escanear Token Ahora'." },
  { name: "Hero Section", category: "ux", definition: "Sección principal y más prominente de una página, generalmente con headline grande, subtítulo y CTA.", example: "Hero de RugPull News: headline + buscador + últimas alertas." },
  { name: "Progressive Disclosure", category: "ux", definition: "Técnica que muestra información gradualmente según el usuario la necesita, evitando sobrecarga cognitiva.", example: "En el resultado del scan, primero muestra el score y permite expandir detalles técnicos." },
  { name: "Micro-interacción", category: "ux", definition: "Animación pequeña y sutil que da feedback al usuario sobre una acción: hover en botón, toggle de switch, confirmación de envío.", example: "La animación de +XP al completar una lección es una micro-interacción." },
  { name: "Empty State", category: "ux", definition: "Pantalla o sección que se muestra cuando no hay datos. Es una oportunidad de onboarding y orientación.", example: "Empty state del perfil: ilustración + texto 'Completa tu primera lección para ver tu progreso'." },
  { name: "Loading State", category: "ux", definition: "Estado visual durante una operación asíncrona. Debe comunicar QUÉ está pasando, no solo que algo se carga.", example: "Mientras escanea un token: 'Analizando smart contract en Ethereum...' con barra de progreso." },
  { name: "Onboarding", category: "ux", definition: "Proceso guiado que introduce al usuario nuevo en el producto. Debe ser corto, visual y enfocado en el primer valor.", example: "Onboarding de MemeScanner en 3 pasos: pegar dirección → ver resultado → compartir." },
  { name: "User Persona", category: "ux", definition: "Representación ficticia pero basada en datos de un tipo de usuario. Incluye nombre, edad, objetivos, frustraciones y contexto.", example: "Carlos (28, novato crypto, busca seguridad) es la persona principal del ecosistema." },
  { name: "JTBD (Jobs To Be Done)", category: "ux", definition: "Framework que define qué 'trabajo' contrata el usuario a tu producto. Se enfoca en la motivación, no en la funcionalidad.", example: "'Cuando encuentro un token nuevo, quiero saber si es seguro, para no perder mi dinero'." },
  { name: "Customer Journey", category: "ux", definition: "Mapa del recorrido completo del usuario desde el descubrimiento hasta la retención. Incluye acciones, emociones y touchpoints.", example: "Journey del novato: Descubrimiento (Twitter) → Primer scan → Registro → Uso regular → Recomendación." },
  { name: "Pain Point", category: "ux", definition: "Problema, frustración o fricción que el usuario experimenta al usar un producto. Identificarlos es clave para diseñar soluciones.", example: "Pain point: el usuario no entiende qué significa 'honeypot detected' en el resultado del scan." },
  { name: "Heurísticas", category: "ux", definition: "Principios generales de usabilidad (como las 10 de Nielsen) que se usan para evaluar interfaces sin necesidad de tests con usuarios.", example: "Heurística #1: visibilidad del estado del sistema — el usuario debe saber siempre dónde está." },
  { name: "A/B Test", category: "ux", definition: "Experimento donde se muestran dos versiones de un elemento a grupos diferentes de usuarios para medir cuál funciona mejor.", example: "A/B test del CTA: 'Escanear Ahora' vs 'Verificar Token' — ¿cuál tiene más clicks?" },
  { name: "Usabilidad", category: "ux", definition: "Facilidad con la que un usuario puede usar un producto para lograr sus objetivos de forma eficiente y satisfactoria." },
  { name: "Accesibilidad", category: "ux", definition: "Diseño que permite usar un producto a personas con diferentes capacidades: visual, motora, cognitiva o auditiva. Estándares: WCAG." },
  { name: "Contraste", category: "ux", definition: "Diferencia visual entre elementos (texto/fondo). WCAG exige mínimo 4.5:1 para texto normal y 3:1 para texto grande.", example: "El texto blanco sobre fondo oscuro del ecosistema cumple contraste WCAG AA." },
  { name: "Jerarquía visual", category: "ux", definition: "Orden de importancia visual de los elementos en una página. Se logra con tamaño, color, posición y espacio.", example: "En el resultado del scan, el score es el elemento más grande — tiene la mayor jerarquía." },
  { name: "Whitespace", category: "ux", definition: "Espacio vacío intencional entre elementos. No es desperdicio — es respiración visual que mejora legibilidad y enfoque.", example: "Las cards del dashboard tienen 24px de padding para dar whitespace suficiente." },

  /* ── Blockchain / Web3 (26) ── */
  { name: "Blockchain", category: "blockchain", definition: "Base de datos distribuida e inmutable donde se registran transacciones. Cada bloque contiene datos y se enlaza al anterior criptográficamente.", example: "El ecosistema analiza 6+ blockchains: Ethereum, BSC, Polygon, Arbitrum, Base, Solana." },
  { name: "Smart Contract", category: "blockchain", definition: "Programa autoejectable almacenado en la blockchain que se ejecuta cuando se cumplen condiciones predefinidas. Es código inmutable.", example: "Commerce Diamond tiene smart contracts que gestionan pagos, cupones y referidos automáticamente." },
  { name: "Wallet", category: "blockchain", definition: "Aplicación que almacena las claves privadas del usuario para firmar transacciones en blockchain. No guarda dinero, guarda acceso.", example: "MetaMask es la wallet más popular para interactuar con apps del ecosistema." },
  { name: "MetaMask", category: "blockchain", definition: "Extensión de navegador y app móvil que funciona como wallet Ethereum. Permite conectarse a dApps y firmar transacciones.", example: "El flujo de login con MetaMask: click 'Conectar Wallet' → aprobar en MetaMask → autenticado." },
  { name: "Transaction (Tx)", category: "blockchain", definition: "Operación registrada en la blockchain: transferencia de tokens, ejecución de smart contract o interacción con un protocolo.", example: "Cada pago en Commerce genera una transaction visible en el explorador de bloques." },
  { name: "Gas", category: "blockchain", definition: "Comisión que se paga a los validadores por procesar transacciones en la blockchain. Varía según congestión de la red.", example: "El diseño de checkout debe mostrar el gas estimado antes de confirmar el pago." },
  { name: "Confirmación", category: "blockchain", definition: "Validación de una transacción por la red blockchain. Más confirmaciones = más seguridad. ETH suele considerar 12 confirmaciones como final.", example: "Mostrar un progress bar con el número de confirmaciones durante el proceso de pago." },
  { name: "NFT (Non-Fungible Token)", category: "blockchain", definition: "Token único en blockchain que representa propiedad de un activo digital: arte, badge, certificado, membresía.", example: "Los badges de gamificación se mintean como NFTs verificables en la wallet del usuario." },
  { name: "dNFT (Dynamic NFT)", category: "blockchain", definition: "NFT cuyos metadatos pueden cambiar con el tiempo según condiciones. Evoluciona visualmente basado en el comportamiento del usuario.", example: "El dNFT de perfil cambia de apariencia cuando el usuario sube de nivel." },
  { name: "Token", category: "blockchain", definition: "Activo digital en blockchain. Puede ser fungible (ERC-20: monedas) o no fungible (ERC-721/1155: NFTs).", example: "YAI, SCAN y SMART son los tokens de recompensa del ecosistema." },
  { name: "ERC-20", category: "blockchain", definition: "Estándar de Ethereum para tokens fungibles (intercambiables). Define funciones como transfer, approve y balanceOf.", example: "YAI Token sigue el estándar ERC-20 — todos los tokens YAI son iguales." },
  { name: "ERC-721", category: "blockchain", definition: "Estándar de Ethereum para tokens no fungibles (NFTs). Cada token tiene un ID único e irrepetible.", example: "Los badges del ecosistema se implementan como ERC-721 para garantizar unicidad." },
  { name: "ERC-1155", category: "blockchain", definition: "Estándar multi-token que permite fungibles y no fungibles en un solo contrato. Más eficiente en gas.", example: "Ideal para badges donde varios usuarios pueden tener el mismo tipo pero cada emisión es trackeable." },
  { name: "DeFi (Finanzas Descentralizadas)", category: "blockchain", definition: "Ecosistema de servicios financieros construidos sobre blockchain sin intermediarios: préstamos, exchanges, staking.", example: "Entender DeFi es clave para diseñar flujos de pago en Commerce." },
  { name: "DEX (Exchange Descentralizado)", category: "blockchain", definition: "Plataforma de intercambio de tokens sin intermediario central. Los usuarios tradean directamente wallet-a-wallet.", example: "Uniswap es un DEX donde se podrían listar los tokens de recompensa del ecosistema." },
  { name: "Rugpull", category: "blockchain", definition: "Estafa donde los creadores de un token retiran toda la liquidez dejando a los inversores con tokens sin valor.", example: "El Risk Engine analiza contratos para detectar señales de rugpull antes de que ocurran." },
  { name: "Honeypot", category: "blockchain", definition: "Tipo de estafa donde puedes comprar un token pero el contrato impide que lo vendas. Trampa irreversible.", example: "MemeScanner detecta funciones de honeypot en el smart contract y alerta al usuario." },
  { name: "Audit (Auditoría)", category: "blockchain", definition: "Revisión profesional del código de un smart contract para encontrar vulnerabilidades, bugs o puertas traseras.", example: "Diseña la UI para mostrar si un contrato ha sido auditado y por quién." },
  { name: "Testnet", category: "blockchain", definition: "Red blockchain de pruebas que funciona igual que la principal pero con tokens sin valor. Para testing y desarrollo.", example: "Commerce Diamond está desplegado en testnet antes de ir a mainnet." },
  { name: "Mainnet", category: "blockchain", definition: "Red blockchain principal donde las transacciones tienen valor real. Deploy a mainnet = producción.", example: "Solo se despliega a mainnet después de testing exhaustivo en testnet." },
  { name: "Deploy", category: "blockchain", definition: "Acción de publicar un smart contract en la blockchain. Una vez desplegado, el código es inmutable.", example: "Cada facet del Diamond se despliega por separado y se registra en el contrato principal." },
  { name: "Diamond Proxy (EIP-2535)", category: "blockchain", definition: "Patrón de smart contract modular con facets independientes que comparten almacenamiento. Permite actualizar lógica sin perder datos.", example: "Identity y Commerce usan Diamond Proxy: 7 facets cada uno, actualizables independientemente." },
  { name: "Facet", category: "blockchain", definition: "Módulo de lógica dentro de un Diamond Proxy. Cada facet maneja una funcionalidad específica (UserManager, GamificationEngine, etc.).", example: "GamificationEngine Facet gestiona XP, niveles y badges en Identity Diamond." },
  { name: "Multi-tenant", category: "blockchain", definition: "Arquitectura donde un solo contrato o sistema sirve a múltiples clientes (tenants) con datos aislados.", example: "Commerce Diamond es multi-tenant: cada producto del ecosistema es un tenant con su configuración." },
  { name: "Mint", category: "blockchain", definition: "Crear un nuevo token o NFT en la blockchain. El proceso de emisión inicial de un activo digital.", example: "Cuando el usuario gana un badge, el sistema mintea el NFT a su wallet." },
  { name: "Burn", category: "blockchain", definition: "Destruir permanentemente un token enviándolo a una dirección inaccesible. Reduce el supply total.", example: "Los tokens usados para canjear descuentos se queman para mantener el valor." },

  /* ── Gamificación (17) ── */
  { name: "XP (Experience Points)", category: "gamificacion", definition: "Puntos de experiencia que el usuario acumula al realizar acciones. Es la moneda de atención del ecosistema.", example: "Leer un artículo en RugPull News: +10 XP. Completar un scan: +25 XP." },
  { name: "Nivel", category: "gamificacion", definition: "Categoría de progreso basada en XP acumulado. Cada nivel desbloquea funciones, badges y beneficios.", example: "10 niveles del ecosistema: desde Explorer (0 XP) hasta Legend (10,000 XP)." },
  { name: "Badge", category: "gamificacion", definition: "Insignia digital que reconoce un logro específico. Puede ser off-chain (visual) o on-chain (NFT verificable).", example: "'Primer Scan' badge: se otorga al completar tu primer escaneo de token." },
  { name: "Streak (Racha)", category: "gamificacion", definition: "Contador de días consecutivos de actividad. Crea hábito y genera urgencia por no perder la racha.", example: "7 días seguidos activo = 'Weekly Warrior' badge + bonus de XP." },
  { name: "Leaderboard", category: "gamificacion", definition: "Tabla de clasificación que muestra a los usuarios con más XP, badges o actividad. Genera competencia social.", example: "Leaderboard semanal de RugPull News con los lectores más activos." },
  { name: "Misión", category: "gamificacion", definition: "Tarea específica con recompensa definida. Puede ser diaria, semanal o de una sola vez.", example: "Misión diaria: 'Lee 3 artículos hoy' → +30 XP." },
  { name: "Reward", category: "gamificacion", definition: "Recompensa que recibe el usuario al completar una acción, misión o alcanzar un nivel. Puede ser XP, badge, token o acceso.", example: "Reward por nivel 5: acceso a SmartScanner + 100 SCAN tokens." },
  { name: "Access Gate", category: "gamificacion", definition: "Restricción de contenido o funcionalidad basada en nivel. Muestra al usuario qué se desbloquea al progresar.", example: "PDF reports de SmartScanner requieren nivel 3. El gate muestra el beneficio y cuánto falta." },
  { name: "Cooldown", category: "gamificacion", definition: "Tiempo de espera obligatorio entre acciones repetidas. Previene abuso y crea anticipación.", example: "Cooldown de 1 hora entre scans gratuitos de MemeScanner." },
  { name: "Daily Limit", category: "gamificacion", definition: "Límite máximo de acciones o recompensas por día. Distribuye el engagement en el tiempo.", example: "Máximo 300 XP/día por lectura de artículos. Fomenta consistencia sobre binge." },
  { name: "Engagement Loop", category: "gamificacion", definition: "Ciclo de acciones que mantiene al usuario activo: trigger → acción → recompensa → trigger. Se retroalimenta.", example: "Notificación de streak → abrir app → leer artículo → +XP → siguiente nivel cerca → seguir leyendo." },
  { name: "Retention", category: "gamificacion", definition: "Capacidad de un producto para mantener usuarios activos a lo largo del tiempo. Se mide con métricas D1, D7, D30.", example: "El sistema de rachas mejora la retention D7 porque el usuario no quiere perder su streak." },
  { name: "Churn", category: "gamificacion", definition: "Pérdida de usuarios activos. Un usuario que deja de usar el producto ha 'churneado'.", example: "Emails de re-engagement se envían cuando un usuario lleva 7 días sin actividad." },
  { name: "DAU (Daily Active Users)", category: "gamificacion", definition: "Usuarios únicos que usan el producto al menos una vez al día. Métrica clave de engagement.", example: "Objetivo: DAU de RugPull News > 5,000 en el primer trimestre." },
  { name: "MAU (Monthly Active Users)", category: "gamificacion", definition: "Usuarios únicos que usan el producto al menos una vez al mes. Indica el tamaño de la base activa.", example: "Ratio DAU/MAU indica cuán sticky es el producto. >20% es bueno." },
  { name: "D1/D7/D30", category: "gamificacion", definition: "Métricas de retención: porcentaje de usuarios que vuelven después de 1, 7 y 30 días desde su primer uso.", example: "D1: 40% (bueno), D7: 20% (aceptable), D30: 10% (mejorable con gamificación)." },
  { name: "Racha", category: "gamificacion", definition: "Sinónimo español de streak. Contador de días consecutivos de actividad que motiva la constancia.", example: "Racha de 30 días = badge 'Monthly Master' + 500 XP bonus." },

  /* ── Negocio (15) ── */
  { name: "SaaS (Software as a Service)", category: "negocio", definition: "Modelo de negocio donde el software se ofrece como servicio por suscripción, accesible vía web.", example: "SmartScanner B2B funciona como SaaS: empresas pagan mensual por análisis ilimitados." },
  { name: "B2B (Business to Business)", category: "negocio", definition: "Modelo donde el cliente es otra empresa, no un consumidor final. Ciclos de venta más largos, tickets más altos.", example: "SmartScanner tiene un modelo B2B para empresas que necesitan auditorías automáticas." },
  { name: "B2C (Business to Consumer)", category: "negocio", definition: "Modelo donde el cliente es el consumidor final. Decisiones de compra más rápidas, volumen alto.", example: "MemeScanner es B2C puro: cualquier persona escanea gratis y paga por features premium." },
  { name: "Freemium", category: "negocio", definition: "Modelo donde la versión básica es gratis y se cobra por funcionalidades avanzadas.", example: "MemeScanner gratis (5 scans/día) + Premium (ilimitados + historial + alerts)." },
  { name: "Conversion Rate", category: "negocio", definition: "Porcentaje de usuarios que completan una acción deseada sobre el total de visitantes.", example: "Si 1000 visitan la landing y 50 se registran, el conversion rate es 5%." },
  { name: "Funnel", category: "negocio", definition: "Embudo de conversión: las etapas por las que pasa un usuario desde el descubrimiento hasta la compra o acción deseada.", example: "Funnel de MemeScanner: Visita → Primer scan → Registro → Scan recurrente → Premium." },
  { name: "CAC (Costo de Adquisición)", category: "negocio", definition: "Cuánto cuesta adquirir un nuevo cliente. Se calcula: gasto total en marketing / nuevos clientes.", example: "Si gastas $1000 en ads y consigues 100 usuarios, el CAC es $10 por usuario." },
  { name: "LTV (Lifetime Value)", category: "negocio", definition: "Valor total que genera un cliente durante toda su relación con el producto. Debe ser mayor que el CAC.", example: "Si un usuario premium paga $10/mes durante 12 meses, LTV = $120." },
  { name: "NPS (Net Promoter Score)", category: "negocio", definition: "Métrica de satisfacción: pregunta '¿Recomendarías este producto del 0 al 10?' Los 9-10 son promotores, 0-6 detractores.", example: "NPS = % promotores - % detractores. Un NPS > 50 es excelente." },
  { name: "Churn Rate", category: "negocio", definition: "Porcentaje de usuarios que dejan de usar el producto en un período. Mensual o anual.", example: "Si en enero tienes 1000 usuarios y en febrero quedan 900, el churn rate mensual es 10%." },
  { name: "MRR (Monthly Recurring Revenue)", category: "negocio", definition: "Ingresos recurrentes mensuales de suscripciones. Es la métrica financiera clave para SaaS.", example: "100 usuarios premium × $10/mes = $1,000 MRR." },
  { name: "ARR (Annual Recurring Revenue)", category: "negocio", definition: "Ingresos recurrentes anuales. ARR = MRR × 12. Indica la escala del negocio.", example: "$1,000 MRR = $12,000 ARR. Objetivo: $100K ARR en el primer año." },
  { name: "Pricing", category: "negocio", definition: "Estrategia de precios del producto. Incluye tiers, descuentos, trials y psicología de precios.", example: "Pricing de MemeScanner: Free, Pro ($9.99/mes), Enterprise (custom)." },
  { name: "Upsell", category: "negocio", definition: "Vender un plan o producto de mayor valor a un cliente existente.", example: "Después de 10 scans gratuitos, sugerir upgrade a Pro con análisis avanzados." },
  { name: "Cross-sell", category: "negocio", definition: "Vender un producto complementario a un cliente existente de otro producto.", example: "Usuario de RugPull News → sugerir MemeScanner Premium como complemento." },

  /* ── Técnico (18) ── */
  { name: "API (Application Programming Interface)", category: "tecnico", definition: "Interfaz que permite a dos sistemas comunicarse. Define los endpoints, métodos y formato de datos.", example: "Identity API expone endpoints como /users, /xp, /badges para que los productos consuman datos." },
  { name: "Endpoint", category: "tecnico", definition: "URL específica de una API que realiza una acción concreta. Tiene método HTTP (GET, POST, PUT, DELETE).", example: "GET /api/v1/users/:id devuelve los datos del usuario desde Identity." },
  { name: "Request", category: "tecnico", definition: "Petición que un cliente envía a un servidor. Incluye método, URL, headers y opcionalmente un body.", example: "POST /api/v1/scan { address: '0x...' } envía una petición de escaneo." },
  { name: "Response", category: "tecnico", definition: "Respuesta del servidor a una petición. Incluye status code (200, 404, 500), headers y body con datos.", example: "Response 200: { score: 85, risk: 'low', details: {...} } — resultado del scan." },
  { name: "SDK (Software Development Kit)", category: "tecnico", definition: "Kit de herramientas para integrar una plataforma en tu código. Incluye funciones, tipos y documentación.", example: "Identity SDK para React: hooks como useUser(), useXP(), useBadges()." },
  { name: "Hook (React)", category: "tecnico", definition: "Función de React que permite usar estado y efectos en componentes funcionales: useState, useEffect, useCallback.", example: "useProgress() es un custom hook que lee y actualiza el progreso del usuario desde localStorage." },
  { name: "Component (Componente)", category: "tecnico", definition: "Pieza reutilizable de UI en React. Recibe props, tiene lógica interna y renderiza HTML/JSX.", example: "XPBar es un componente que muestra la barra de experiencia actual del usuario." },
  { name: "State (Estado)", category: "tecnico", definition: "Datos internos de un componente que pueden cambiar y causan re-renderizado al actualizarse.", example: "El estado 'completedLessons' trackea qué lecciones ha terminado el usuario." },
  { name: "Props", category: "tecnico", definition: "Datos que un componente padre pasa a un hijo. Son de solo lectura y definen cómo se configura el componente.", example: "<ProgressRing percent={75} /> — percent es una prop." },
  { name: "Frontend", category: "tecnico", definition: "Parte del producto que el usuario ve e interactúa. HTML, CSS, JavaScript, React, Next.js.", example: "Tu trabajo como designer se materializa en el frontend de cada producto." },
  { name: "Backend", category: "tecnico", definition: "Parte del servidor que procesa lógica, gestiona datos y responde peticiones del frontend.", example: "El Risk Engine es 100% backend: FastAPI procesando contratos y exponiendo resultados vía API." },
  { name: "Database (Base de datos)", category: "tecnico", definition: "Sistema para almacenar datos de forma estructurada: PostgreSQL (relacional), MongoDB (documentos), Redis (cache).", example: "PostgreSQL almacena los análisis del Risk Engine. Redis cachea resultados frecuentes." },
  { name: "Redis", category: "tecnico", definition: "Base de datos en memoria ultrarrápida. Se usa como cache, colas de mensajes y almacenamiento temporal.", example: "Redis cachea resultados de scans populares para respuesta instantánea sin re-analizar." },
  { name: "Deploy (Despliegue)", category: "tecnico", definition: "Proceso de publicar código en un servidor para que sea accesible por los usuarios finales.", example: "Deploy del frontend a Vercel. Deploy de smart contracts a la blockchain." },
  { name: "Build", category: "tecnico", definition: "Proceso de compilar y optimizar el código fuente para producción. TypeScript → JavaScript, bundling, minificación.", example: "npm run build compila Next.js y genera los archivos estáticos optimizados." },
  { name: "PR (Pull Request)", category: "tecnico", definition: "Solicitud para integrar cambios de código de una rama a otra. Incluye revisión de código antes de aprobar.", example: "Abres un PR con los nuevos componentes de gamificación para que el founder lo revise." },
  { name: "Branch (Rama)", category: "tecnico", definition: "Copia paralela del código donde se trabaja en una feature sin afectar la versión principal (main).", example: "Branch 'feature/new-xp-bar' para desarrollar el nuevo componente sin romper main." },
  { name: "Latencia", category: "tecnico", definition: "Tiempo que tarda una petición en ir del cliente al servidor y volver. Se mide en milisegundos (ms).", example: "Un scan que tarda 3 segundos tiene alta latencia. Objetivo: <500ms para resultados cacheados." },
];

/* ═══════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════ */

export default function GlosarioPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const filtered = useMemo(() => {
    let list = TERMS;
    if (activeCategory !== "all") {
      list = list.filter((t) => t.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q)
      );
    }
    return list;
  }, [search, activeCategory]);

  return (
    <AppShell>
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-heading font-bold mb-1">Glosario</h1>
        <p className="text-text-secondary text-sm">
          {TERMS.length} términos clave del ecosistema y diseño de experiencia
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar término..."
          className="w-full bg-bg-surface/50 border border-border rounded-xl pl-9 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-secondary/50"
        />
      </div>

      {/* Category filters */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        <button
          onClick={() => setActiveCategory("all")}
          className={cn(
            "px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0",
            activeCategory === "all"
              ? "bg-gradient-to-r from-accent-primary to-accent-secondary text-white"
              : "glass-card text-text-tertiary hover:text-text-primary"
          )}
        >
          <BookText size={12} className="inline mr-1" />
          Todos ({TERMS.length})
        </button>
        {(Object.keys(CATEGORY_META) as Category[]).map((cat) => {
          const meta = CATEGORY_META[cat];
          const count = TERMS.filter((t) => t.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0",
                activeCategory === cat
                  ? "bg-gradient-to-r from-accent-primary to-accent-secondary text-white"
                  : "glass-card text-text-tertiary hover:text-text-primary"
              )}
            >
              {meta.icon}
              {meta.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Results count */}
      <p className="text-xs text-text-tertiary mb-3">
        {filtered.length} {filtered.length === 1 ? "resultado" : "resultados"}
      </p>

      {/* Terms list */}
      <div className="space-y-2">
        {filtered.map((term, i) => {
          const meta = CATEGORY_META[term.category];
          return (
            <motion.div
              key={term.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.02, 0.5) }}
              className="glass-card p-4"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="font-heading font-semibold text-sm">{term.name}</h3>
                <span className={cn("text-[10px] font-medium flex items-center gap-0.5", meta.color)}>
                  {meta.icon} {meta.label}
                </span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">{term.definition}</p>
              {term.example && (
                <p className="text-xs text-text-tertiary mt-1.5 italic border-l-2 border-accent-secondary/30 pl-2">
                  {term.example}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="glass-card p-12 text-center">
          <BookText size={32} className="text-text-tertiary mx-auto mb-3 opacity-50" />
          <p className="text-sm text-text-secondary">
            No se encontraron términos para &ldquo;{search}&rdquo;
          </p>
        </div>
      )}
    </AppShell>
  );
}
