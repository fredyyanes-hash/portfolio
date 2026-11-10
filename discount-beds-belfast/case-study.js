/* =============================================================
   case-study.js – Discount Beds Belfast case study page
   Shares theme and language settings with the home page
   (same localStorage keys as script.js).
   ============================================================= */

function qs(sel, ctx = document) { return ctx.querySelector(sel); }
function qsa(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function readSetting(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function saveSetting(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* private mode */ }
}

// ==================== GLOW BUTTONS (same effect as home page) ====================
function enhanceGlowButtons(ctx = document) {
  qsa('.btn-primary, .btn-secondary', ctx).forEach(button => {
    button.classList.add('glow');
    if (!button.querySelector('.glow-container')) {
      button.insertAdjacentHTML('beforeend', `
        <svg class="glow-container" aria-hidden="true">
          <rect pathLength="100" stroke-linecap="round" class="glow-blur"></rect>
          <rect pathLength="100" stroke-linecap="round" class="glow-line"></rect>
        </svg>
      `);
    }
    const rx = getComputedStyle(button).borderRadius;
    qsa('rect', button).forEach(rect => rect.setAttribute('rx', rx));
  });
}
enhanceGlowButtons();

// ==================== TRANSLATIONS ====================
const enToEs = {
  'Skip to content': 'Saltar al contenido',
  'Portfolio': 'Portafolio',
  'Overview': 'Resumen',
  'Problem': 'Problema',
  'Research': 'Investigación',
  'Users': 'Usuarios',
  '2025 Prototype': 'Prototipo 2025',
  '2026 Revamp': 'Rediseño 2026',
  'Takeaways': 'Aprendizajes',
  'Users & Audience': 'Usuarios y Audiencia',
  'Web Design Case Study': 'Caso de Estudio de Diseño Web',
  "Turning a local bed shop's dated website into a modern, mobile-friendly store that answers shoppers' questions before they have to ask.": 'Transformar el sitio anticuado de una tienda local de camas en una tienda moderna, pensada para el móvil, que responde las preguntas de los compradores antes de que tengan que hacerlas.',
  'View the live redesign': 'Ver el rediseño en vivo',
  'See the code': 'Ver el código',
  'Role': 'Rol',
  'Designer & Developer': 'Diseñador y Desarrollador',
  'Timeline': 'Duración',
  '2025 class · 2026 revamp': 'Clase 2025 · rediseño 2026',
  'Tools': 'Herramientas',
  'Scope': 'Alcance',
  '9 responsive pages': '9 páginas responsivas',
  'Discount Beds Belfast is a local bed and mattress shop in Belfast, Northern Ireland. Its website looked dated, was hard to navigate, and broke down on phones, which made a trustworthy local business look less trustworthy online.': 'Discount Beds Belfast es una tienda local de camas y colchones en Belfast, Irlanda del Norte. Su sitio web se veía anticuado, era difícil de navegar y fallaba en los teléfonos, lo que hacía que un negocio local confiable pareciera menos confiable en línea.',
  'I first redesigned it as a ten-week project in Advanced Web Design at Valencia College, taking it from research to a five-page coded prototype. In 2026 I came back to it and rebuilt it as a complete nine-page site, using everything I had learned since.': 'Primero lo rediseñé como un proyecto de diez semanas en Advanced Web Design en Valencia College, desde la investigación hasta un prototipo codificado de cinco páginas. En 2026 volví a él y lo reconstruí como un sitio completo de nueve páginas, aplicando todo lo que había aprendido desde entonces.',
  'Problem Statement': 'Planteamiento del Problema',
  'Outdated Visual Design': 'Diseño Visual Anticuado',
  'The website looked unprofessional, which eroded trust and raised doubts about the business.': 'El sitio web se veía poco profesional, lo que debilitaba la confianza y generaba dudas sobre el negocio.',
  'Poor Usability': 'Usabilidad Deficiente',
  'Confusing navigation made products hard to find, and on phones the text was cramped and some elements did not respond.': 'La navegación confusa dificultaba encontrar productos, y en los teléfonos el texto se veía apretado y algunos elementos no respondían.',
  'Missing Key Information': 'Falta de Información Clave',
  'Product pages lacked basics like sizes, materials and reviews, so shoppers were left guessing.': 'Las páginas de producto no tenían datos básicos como tamaños, materiales y reseñas, así que los compradores tenían que adivinar.',
  'Lack of Trust Signals': 'Falta de Señales de Confianza',
  'Reviews, delivery details and the returns policy were hard to find or missing, which held people back from buying.': 'Las reseñas, los detalles de entrega y la política de devoluciones eran difíciles de encontrar o no existían, lo que frenaba las compras.',
  'Why it mattered': 'Por qué importaba',
  'A bed is a big purchase. When a site feels unreliable and hides the details, shoppers leave and buy from a competitor they trust more.': 'Una cama es una compra importante. Cuando un sitio parece poco confiable y esconde los detalles, los compradores se van y compran a un competidor en quien confían más.',
  'Research & Insights': 'Investigación y Hallazgos',
  'Site Audit': 'Auditoría del Sitio',
  'Competitive Analysis': 'Análisis Competitivo',
  'Feedback': 'Retroalimentación',
  'I worked through the existing site as a shopper would, from the home page to a product and on to checkout, and listed seven pain points around navigation, missing product details and trust.': 'Recorrí el sitio existente como lo haría un comprador, desde la página de inicio hasta un producto y el pago, y anoté siete problemas de navegación, detalles de producto faltantes y confianza.',
  'I studied larger furniture retailers such as IKEA and Wayfair to see how they handle categories, filters, product details and delivery information, and where a small local shop could compete.': 'Estudié grandes tiendas de muebles como IKEA y Wayfair para ver cómo manejan categorías, filtros, detalles de producto e información de entrega, y dónde podía competir una pequeña tienda local.',
  'Classmates and my instructor reviewed the wireframes and prototype during critiques. Their comments shaped the navigation structure and the layout of the product pages.': 'Mis compañeros y mi instructora revisaron los wireframes y el prototipo durante las críticas. Sus comentarios definieron la estructura de navegación y el diseño de las páginas de producto.',
  'The Value-Driven Homeowner': 'El Propietario que Busca Valor',
  'Age 30–50. Looks for affordable furniture and is good at hunting for deals online. Needs clear specs, delivery details and financing options.': 'Edad 30–50. Busca muebles asequibles y sabe encontrar ofertas en línea. Necesita especificaciones claras, detalles de entrega y opciones de financiamiento.',
  'The Busy Renter or Family': 'El Inquilino o la Familia Ocupada',
  'Age 25–40. Needs a durable mattress quickly. Values convenience, shopping on a phone, fast checkout and reliable delivery.': 'Edad 25–40. Necesita un colchón duradero pronto. Valora la comodidad, comprar desde el teléfono, un pago rápido y una entrega confiable.',
  'The Budget-Conscious Student': 'El Estudiante con Presupuesto Ajustado',
  'Age 18–25. Shopping for a first "adult" bed. Price-sensitive, drawn to sales, and trusts reviews from other buyers.': 'Edad 18–25. Busca su primera cama "de adulto". Sensible al precio, atraído por las ofertas y confía en las reseñas de otros compradores.',
  'User Goals': 'Objetivos del Usuario',
  'Find products quickly, compare prices and specs easily, understand the full cost, and feel confident about buying.': 'Encontrar productos rápido, comparar precios y especificaciones con facilidad, entender el costo total y sentirse seguro al comprar.',
  'Pain Points': 'Puntos de Dolor',
  'Too many choices, wary of unreliable sites, and unable to find key details like dimensions or warranties.': 'Demasiadas opciones, desconfianza de sitios poco fiables y dificultad para encontrar detalles clave como medidas o garantías.',
  'Chapter 1 · 2025': 'Capítulo 1 · 2025',
  'The Class Prototype': 'El Prototipo de Clase',
  'Ten weeks in Advanced Web Design at Valencia College, focused on five essential pages: Home, Shop, Product Detail, About and Contact.': 'Diez semanas en Advanced Web Design en Valencia College, enfocadas en cinco páginas esenciales: Inicio, Tienda, Detalle de Producto, Nosotros y Contacto.',
  'Discovery': 'Descubrimiento',
  'Reviewed the client brief, listed seven user pain points, and did a visual audit of three competitors to see what shoppers expect.': 'Revisé el brief del cliente, identifiqué siete problemas de los usuarios e hice una auditoría visual de tres competidores para ver qué esperan los compradores.',
  'Information Architecture & Wireframing': 'Arquitectura de Información y Wireframes',
  'Created a new sitemap to organize the content, then sketched low-fidelity wireframes in Whimsical, exploring three layouts for the home and product pages.': 'Creé un nuevo mapa del sitio para organizar el contenido y luego dibujé wireframes de baja fidelidad en Whimsical, explorando tres diseños para las páginas de inicio y de producto.',
  'Visual Design & Branding': 'Diseño Visual y Marca',
  'Made a mood board for a fresh visual direction, which led to high-fidelity Figma mockups with a calm color scheme and modern typography.': 'Hice un mood board para una nueva dirección visual, que llevó a mockups de alta fidelidad en Figma con una paleta tranquila y tipografía moderna.',
  'Prototyping': 'Prototipado',
  'Turned the mockups into a clickable Figma prototype to test the main user flows and gather feedback.': 'Convertí los mockups en un prototipo interactivo en Figma para probar los flujos principales y recibir comentarios.',
  'Development': 'Desarrollo',
  'Hand-coded the prototype in HTML, CSS and JavaScript. It simulated shopping but had no live checkout.': 'Programé el prototipo a mano en HTML, CSS y JavaScript. Simulaba la compra, pero no tenía un pago real.',
  'Where it landed': 'Dónde terminó',
  "A five-page responsive prototype that addressed the seven pain points. It proved the direction, but it was still a class prototype: some pages were thin, and shoppers still had questions it didn't answer.": 'Un prototipo responsivo de cinco páginas que atendía los siete problemas. Validó la dirección, pero seguía siendo un prototipo de clase: algunas páginas eran escasas y los compradores aún tenían preguntas sin respuesta.',
  'View the 2025 prototype': 'Ver el prototipo de 2025',
  'Chapter 2 · 2026': 'Capítulo 2 · 2026',
  'The Revamp': 'El Rediseño',
  'A year later I came back to the project with fresh eyes. I kept what worked, rebuilt the rest, and grew the site from five pages to nine.': 'Un año después volví al proyecto con otra mirada. Mantuve lo que funcionaba, reconstruí el resto y amplié el sitio de cinco a nueve páginas.',
  '2025 prototype': 'Prototipo 2025',
  '5 pages': '5 páginas',
  'Simple top navigation': 'Navegación superior simple',
  'Product page with basic details': 'Página de producto con datos básicos',
  'No delivery, returns or FAQ pages': 'Sin páginas de entrega, devoluciones ni preguntas frecuentes',
  'Images loaded from other websites': 'Imágenes cargadas desde otros sitios',
  '2026 revamp': 'Rediseño 2026',
  '9 pages, including Specials, Delivery, FAQ and Account': '9 páginas, incluidas Ofertas, Entregas, Preguntas Frecuentes y Cuenta',
  'Shop menu with photo categories': 'Menú de tienda con categorías con fotos',
  'Product page with gallery, sizes, specs and reviews': 'Página de producto con galería, tamaños, especificaciones y reseñas',
  'Delivery, returns and FAQ answered up front': 'Entregas, devoluciones y preguntas frecuentes respondidas desde el inicio',
  'Compressed images stored with the site': 'Imágenes comprimidas guardadas con el sitio',
  'What I changed, and why': 'Qué cambié y por qué',
  'Trust, from the very first screen': 'Confianza desde la primera pantalla',
  'A slim bar at the top shows free Belfast delivery, the phone number and opening hours on every page. The home page leads with the current offer and a row of trust points: free delivery, a 30-day guarantee, five-star reviews, and a tree planted with every order.': 'Una barra delgada arriba muestra la entrega gratis en Belfast, el teléfono y el horario en todas las páginas. La página de inicio abre con la oferta del momento y una fila de señales de confianza: entrega gratis, garantía de 30 días, reseñas de cinco estrellas y un árbol plantado con cada pedido.',
  'Finding a bed without hunting': 'Encontrar una cama sin buscar de más',
  'The Shop menu opens into photo tiles for each category, and the shop page adds category cards and quick filters, so people can jump straight to divans, mattresses or sofa beds.': 'El menú Tienda se abre en mosaicos con fotos para cada categoría, y la página de tienda suma tarjetas de categoría y filtros rápidos, para ir directo a divanes, colchones o sofás cama.',
  'A product page that answers questions': 'Una página de producto que responde preguntas',
  'The missing details from the original site now have a home: a photo gallery with zoom, a clear price range, size options, a checklist of features, and customer reviews.': 'Los detalles que faltaban en el sitio original ahora tienen su lugar: una galería de fotos con zoom, un rango de precios claro, opciones de tamaño, una lista de características y reseñas de clientes.',
  'Answers before people have to call': 'Respuestas antes de tener que llamar',
  'New Delivery & Returns and FAQ pages cover the questions that stop a purchase: delivery areas and times, assembly, payment and faulty items. The FAQ is searchable and grouped by topic.': 'Las nuevas páginas de Entregas y Devoluciones y de Preguntas Frecuentes cubren las dudas que frenan una compra: zonas y tiempos de entrega, montaje, pago y productos defectuosos. Las preguntas frecuentes se pueden buscar y están agrupadas por tema.',
  'A real story behind the shop': 'Una historia real detrás de la tienda',
  'The About page introduces the showroom and the people who run it, and the Contact page brings together the phone number, email, directions and a message form.': 'La página Nosotros presenta la sala de exposición y a las personas que la atienden, y la página de Contacto reúne el teléfono, el correo, cómo llegar y un formulario de mensaje.',
  'Designed for the phone in your hand': 'Diseñado para el teléfono en tu mano',
  'On phones the header keeps a one-tap call button and the cart in reach, buttons stretch to full width, and long lists turn into easy-to-scan stacks.': 'En el teléfono, el encabezado mantiene a mano un botón para llamar con un toque y el carrito, los botones ocupan todo el ancho y las listas largas se convierten en bloques fáciles de leer.',
  'Polish under the hood': 'Detalles bajo el capó',
  'Photos are compressed and stored with the site, with smaller versions for smaller screens. A gentle parallax effect adds depth to the page headers and photos, and switches itself off for visitors who have asked their device to reduce motion. Menus are announced to screen readers when they open and close.': 'Las fotos están comprimidas y guardadas con el sitio, con versiones más pequeñas para pantallas pequeñas. Un suave efecto parallax da profundidad a los encabezados y fotos, y se desactiva solo para quienes pidieron a su dispositivo reducir el movimiento. Los lectores de pantalla anuncian cuándo los menús se abren y se cierran.',
  'Outcome & Takeaways': 'Resultado y Aprendizajes',
  'Where it is now': 'Dónde está hoy',
  'A complete nine-page responsive website, live on GitHub Pages, that fixes the seven original pain points and adds the delivery, returns and FAQ content shoppers need to buy with confidence.': 'Un sitio web responsivo completo de nueve páginas, publicado en GitHub Pages, que resuelve los siete problemas originales y suma la información de entregas, devoluciones y preguntas frecuentes que los compradores necesitan para comprar con confianza.',
  'Start from the problem': 'Empezar por el problema',
  "Working from a clear list of pain points made every design decision easier to make and easier to explain. A good-looking site that doesn't solve them is still a weak site.": 'Trabajar a partir de una lista clara de problemas hizo que cada decisión de diseño fuera más fácil de tomar y de explicar. Un sitio bonito que no los resuelve sigue siendo un sitio débil.',
  'Trust is designed, too': 'La confianza también se diseña',
  'Delivery details, a visible phone number, reviews and a clear returns policy did as much for this shop as the new colors and type. Content is part of the design.': 'Los detalles de entrega, un teléfono visible, las reseñas y una política de devoluciones clara hicieron tanto por esta tienda como los nuevos colores y tipografía. El contenido es parte del diseño.',
  'Revisiting old work pays off': 'Volver al trabajo anterior vale la pena',
  'Coming back a year later showed me what my first version missed. Rebuilding it taught me more than starting something new would have.': 'Volver un año después me mostró lo que mi primera versión no tenía. Reconstruirlo me enseñó más de lo que me habría enseñado empezar algo nuevo.',
  'Performance and motion are design choices': 'El rendimiento y el movimiento son decisiones de diseño',
  'Compressing images and respecting reduced-motion settings are small details that decide whether a site feels fast and comfortable for everyone.': 'Comprimir imágenes y respetar la preferencia de movimiento reducido son pequeños detalles que deciden si un sitio se siente rápido y cómodo para todos.',
  'Next steps': 'Próximos pasos',
  'Test the new pages with real shoppers': 'Probar las nuevas páginas con compradores reales',
  'Add analytics to see where people drop off': 'Agregar analítica para ver dónde abandonan las personas',
  'Connect a real cart and checkout': 'Conectar un carrito y un pago reales',
  'Explore more work': 'Explorar más trabajos',
  'View Full Portfolio →': 'Ver Portafolio Completo →',
  'Click outside or press ESC to close': 'Haz clic afuera o presiona ESC para cerrar',
  // aria-labels
  'Case study sections': 'Secciones del caso de estudio',
  'Toggle menu': 'Abrir o cerrar menú',
  'Scroll to top': 'Volver arriba',
  'Image viewer': 'Visor de imágenes',
  'Close image': 'Cerrar imagen',
};
const esToEn = Object.fromEntries(Object.entries(enToEs).map(([en, es]) => [es, en]));

const TITLES = {
  en: 'Discount Beds Belfast – E-commerce Redesign Case Study | Fredy J Yanes',
  es: 'Discount Beds Belfast – Caso de Estudio de Rediseño E-commerce | Fredy J Yanes',
};

let currentLanguage = 'en';

function translateString(value, lang) {
  const trimmed = value.trim();
  if (!trimmed) return value;
  const dictionary = lang === 'es' ? enToEs : esToEn;
  const translated = dictionary[trimmed];
  return translated ? value.replace(trimmed, translated) : value;
}

function translateTextNodes(lang, root = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => { node.nodeValue = translateString(node.nodeValue, lang); });
  qsa('[aria-label]').forEach(el => {
    if (el.id === 'language-toggle' || el.id === 'theme-toggle') return;
    el.setAttribute('aria-label', translateString(el.getAttribute('aria-label'), lang));
  });
}

// ==================== THEME + LANGUAGE ====================
const themeToggle = qs('#theme-toggle');
const languageToggle = qs('#language-toggle');

function themeLabel() {
  const isLight = document.body.classList.contains('light-theme');
  if (currentLanguage === 'es') return isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro';
  return isLight ? 'Switch to dark mode' : 'Switch to light mode';
}

function setTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-theme', isLight);
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute('aria-label', themeLabel());
}

function setLanguage(lang) {
  const next = lang === 'es' ? 'es' : 'en';
  if (next !== currentLanguage) translateTextNodes(next);
  currentLanguage = next;
  document.documentElement.lang = next;
  document.title = TITLES[next];
  languageToggle.classList.toggle('is-spanish', next === 'es');
  languageToggle.setAttribute('aria-pressed', String(next === 'es'));
  languageToggle.setAttribute('aria-label', next === 'es' ? 'Switch to English' : 'Cambiar a español');
  themeToggle.setAttribute('aria-label', themeLabel());
}

setTheme(readSetting('portfolio-theme') || 'dark');
setLanguage(readSetting('portfolio-language') || 'en');

themeToggle.addEventListener('click', () => {
  const next = document.body.classList.contains('light-theme') ? 'dark' : 'light';
  saveSetting('portfolio-theme', next);
  setTheme(next);
});

languageToggle.addEventListener('click', () => {
  const next = currentLanguage === 'es' ? 'en' : 'es';
  saveSetting('portfolio-language', next);
  setLanguage(next);
});

// ==================== SECTION NAV ====================
const nav = qs('#detail-nav');
const mobileMenu = qs('#detail-mobile-menu');
const mobileMenuBtn = qs('#detail-mobile-menu-btn');

function closeMobileMenu() {
  mobileMenu.classList.add('hidden');
  mobileMenuBtn.setAttribute('aria-expanded', 'false');
}

mobileMenuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('hidden') === false;
  mobileMenuBtn.setAttribute('aria-expanded', String(open));
});

qsa('[data-detail-section]').forEach(link => {
  link.addEventListener('click', e => {
    const target = qs(`#detail-${link.dataset.detailSection}`);
    if (!target) return;
    e.preventDefault();
    closeMobileMenu();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', `#detail-${link.dataset.detailSection}`);
  });
});

// Scrollspy + reading progress + back-to-top button
const sectionIds = ['overview', 'problem', 'research', 'users', 'process', 'revamp', 'outcome'];
const progressBar = qs('#detail-progress-bar');
const scrollTopBtn = qs('#scroll-top-btn');

function onScroll() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  if (progressBar && scrollable > 0) {
    progressBar.style.width = ((window.scrollY / scrollable) * 100).toFixed(1) + '%';
  }
  let current = sectionIds[0];
  for (const id of sectionIds) {
    const el = qs(`#detail-${id}`);
    if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id;
  }
  qsa('.detail-nav-btn, .detail-mobile-link').forEach(b => {
    const active = b.dataset.detailSection === current;
    b.classList.toggle('active', active);
    if (active) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
  });
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

scrollTopBtn.addEventListener('click', () => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
});

// ==================== RESEARCH TABS ====================
const tabBtns = qsa('.tab-btn');
const tabPanels = qsa('.tab-panel');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    tabPanels.forEach(p => p.classList.add('hidden'));
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    qs(`#${btn.dataset.tab}`)?.classList.remove('hidden');
  });
});

// ==================== LIGHTBOX ====================
const lightbox = qs('#lightbox');
const lightboxImg = qs('#lightbox-img');
const lightboxClose = qs('#lightbox-close');
let lastFocus = null;

function openLightbox(img) {
  lastFocus = img;
  lightboxImg.src = img.currentSrc || img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}
function closeLightbox() {
  if (lightbox.classList.contains('hidden')) return;
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
  lastFocus?.focus();
}

qsa('.lightbox-trigger').forEach(img => {
  img.setAttribute('tabindex', '0');
  img.setAttribute('role', 'button');
  img.addEventListener('click', () => openLightbox(img));
  img.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(img); }
  });
  // Hide an image cleanly if it fails to load instead of showing a broken icon
  img.addEventListener('error', () => { img.hidden = true; });
  if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) img.hidden = true;
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLightbox(); closeMobileMenu(); }
});
