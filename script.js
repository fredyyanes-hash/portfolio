/* =============================================================
   script.js – Fredy J Yanes Portfolio (Enhanced)
   ============================================================= */

// ==================== DATA ====================
const moreProjects = [
  {
    title: "Alpha Beta Gamma Campaign",
    description: "Comprehensive promotional campaign for a romantic comedy film featuring vibrant poster design, social media ads, and billboard campaign.",
    category: "Branding & Promotional",
    image: "https://i.pinimg.com/736x/4b/6d/cf/4b6dcfd42e97d14f63bd6beeb485e7b5.jpg",
    details: {
      overview: "A complete integrated marketing campaign for the romantic comedy film \"Alpha Beta Gamma\". The project encompassed multiple deliverables including theatrical posters, social media content, and outdoor advertising to build anticipation and drive ticket sales.",
      role: "Lead Designer – Responsible for developing the visual identity, creating all promotional materials, and ensuring brand consistency across all touchpoints.",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"],
      challenge: "Create a cohesive visual identity that captures the playful yet romantic tone of the film while standing out in a crowded entertainment market.",
      solution: "Developed a vibrant color palette and dynamic composition style featuring the main characters in engaging scenarios. Used bold typography and energetic layouts to convey the film's comedic nature.",
      outcome: "The campaign successfully generated buzz across social media platforms and contributed to strong opening weekend attendance.",
    }
  },
  {
    title: "Cristo Republic Coffee",
    description: "Responsive website promoting Salvadoran coffee culture with e-commerce functionality, educational content, and immersive cultural storytelling.",
    category: "Web Design",
    image: "https://i.pinimg.com/736x/1d/ec/ed/1deced264a429964847ae24e541e3692.jpg",
    details: {
      overview: "A comprehensive web design project celebrating Salvadoran coffee culture through an immersive digital experience combining e-commerce functionality with rich educational content.",
      role: "UI/UX Designer & Developer – Designed the complete user experience and implemented the responsive website with e-commerce integration.",
      tools: ["Figma", "Adobe Photoshop", "HTML/CSS", "JavaScript"],
      challenge: "Create an engaging digital experience that honors Salvadoran coffee traditions while providing modern e-commerce functionality.",
      solution: "Designed an immersive scrolling experience with rich photography, cultural narratives, and a warm earthy color palette inspired by coffee and Salvadoran landscapes.",
      outcome: "Delivered a fully functional responsive website that effectively communicates brand values and facilitates online coffee sales.",
    }
  },
  {
    title: "Vote Source Platform",
    description: "Voter education platform designed to empower citizens with accessible, unbiased information for informed democratic participation.",
    category: "UI/UX Design",
    image: "https://cdn.myportfolio.com/3b674604-b9ac-4701-bc24-d881b2abd8fb/efd0f0cc-5dc5-4263-841a-2dafcc9d1ecb_rw_1920.jpg?h=cd23e3ffa8cf20e0209dc058cea283a4",
    details: {
      overview: "VoteSource is a civic engagement platform providing voters with accessible, nonpartisan information about candidates, ballot measures, and the voting process.",
      role: "UX/UI Designer – Conducted user research, developed information architecture, created wireframes and high-fidelity mockups.",
      tools: ["Figma", "Adobe Illustrator", "User Research Tools"],
      challenge: "Design a platform that presents complex political information in an unbiased, easily digestible format for users of varying technical abilities.",
      solution: "Clean interface with clear information hierarchy, neutral color scheme, filtering and comparison tools, and generous whitespace for readability.",
      outcome: "Comprehensive design system and prototype that successfully tested with diverse user groups across political backgrounds.",
    }
  },
  {
    title: "Blade Comic Cover",
    description: "A thrilling fusion of graphic design and cinematic inspiration, capturing the intense blood rave scene from the iconic BLADE movie.",
    category: "Illustration",
    image: "https://cdn.myportfolio.com/3b674604-b9ac-4701-bc24-d881b2abd8fb/7c65051d-09e1-41f3-a825-d267fa8e69aa.jpg?h=184aca06b6d6981bdb97f17b7e714f00",
    details: {
      overview: "A dramatic comic book cover illustration inspired by the iconic blood rave scene from the BLADE film, exploring the intersection of cinematic atmosphere and comic book art.",
      role: "Illustrator & Designer – Conceptualized and executed the complete cover illustration from initial sketches through final digital artwork.",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Digital Drawing Tablet"],
      challenge: "Capture the cinematic intensity and atmospheric darkness of the BLADE universe while creating a compelling comic book cover composition.",
      solution: "Dynamic angles and dramatic lighting create depth and movement. Bold red and black color scheme evokes the blood rave while maintaining readability.",
      outcome: "A striking cover that bridges cinematic and comic book aesthetics with professional production quality.",
    }
  },
  {
    title: "80s Retro Poster",
    description: "Vibrant poster design capturing the nostalgic essence of 1980s aesthetics with neon colors, geometric patterns, and retro-futuristic elements.",
    category: "Print Design",
    image: "https://cdn.myportfolio.com/3b674604-b9ac-4701-bc24-d881b2abd8fb/a26b8733-7a1f-4cee-bb00-11f33ec1943c.jpg?h=8010aaefc19af417df2fdd3ff40a597f",
    details: {
      overview: "A vibrant poster design celebrating 1980s aesthetic with modern design sensibilities, exploring retro-futuristic themes and neon color palettes.",
      role: "Graphic Designer – Concept development, design execution, and final production preparation for print.",
      tools: ["Adobe Illustrator", "Adobe Photoshop"],
      challenge: "Create an authentic 80s aesthetic that feels nostalgic yet fresh for modern audiences.",
      solution: "Incorporated signature 80s elements: neon gradients, geometric grids, chrome effects, and period-appropriate typography.",
      outcome: "Print-ready poster that successfully evokes 80s nostalgia while maintaining contemporary appeal.",
    }
  },
  {
    title: "Nacho Daddys Taqueria",
    description: "Modern and sleek branding for a vibrant taqueria, capturing the essence of Mexican cuisine with contemporary design elements.",
    category: "Branding",
    image: "https://cdn.myportfolio.com/3b674604-b9ac-4701-bc24-d881b2abd8fb/758981ee-c284-410a-ab32-8bc839084cfc_rw_1920.png?h=da6e1a38fae8548ec6084a90a1c13ed0",
    details: {
      overview: "Complete brand identity development for Nacho Daddy's Taqueria, a modern Mexican restaurant concept including logo, color palette, menu design, and branded collateral.",
      role: "Brand Designer – Developed complete visual identity system including logo, color palette, typography, and brand guidelines.",
      tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
      challenge: "Create a brand identity that honors authentic Mexican food culture while appealing to modern urban audiences.",
      solution: "Bold, playful visual identity with vibrant colors inspired by Mexican culture, custom logotype, patterns, and a flexible system across digital and physical touchpoints.",
      outcome: "Comprehensive brand identity that positions Nacho Daddy's as a modern, vibrant dining destination.",
    }
  },
  {
    title: "Chocochitos Cereal",
    description: "Delightful cereal box design celebrating Latino heritage with lively pastel shades, playful patterns, and a charming cow mascot.",
    category: "Packaging Design",
    image: "https://cdn.myportfolio.com/3b674604-b9ac-4701-bc24-d881b2abd8fb/e6572677-8e38-47da-b182-56e5e0adac51.jpg?h=6e937fd89ed7267650d98552e185c8d3",
    details: {
      overview: "A joyful packaging design for Chocochitos Cereal that celebrates Latino culture through vibrant visuals and playful design elements.",
      role: "Packaging Designer – Conceptualized and executed the complete package design including illustrations, typography, and production files.",
      tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
      challenge: "Create a cereal box that stands out on crowded shelves while authentically representing Latino culture and appealing to both children and parents.",
      solution: "Charming cow mascot surrounded by lively pastel colors and patterns inspired by Latino folk art, with cheerful typography and clear information hierarchy.",
      outcome: "Distinctive package design that merges cultural celebration with commercial appeal.",
    }
  },
  {
    title: "Back to the Future Poster",
    description: "Iconic movie poster reimagining with bold vector illustration, dynamic composition and retro-futuristic style.",
    category: "Vector Illustration",
    image: "https://i.pinimg.com/736x/14/e0/df/14e0df5267c561d4d96eddc182dd1917.jpg",
    details: {
      overview: "A creative reinterpretation of the classic \"Back to the Future\" poster using vector illustration techniques.",
      role: "Vector Illustrator & Designer – Conceptualized and created the complete illustration from sketch to final vector artwork.",
      tools: ["Adobe Illustrator", "Adobe Photoshop"],
      challenge: "Reimagine an iconic movie poster that respects the beloved original while bringing something visually striking and new.",
      solution: "Dynamic vector illustrations of key characters and the iconic DeLorean with bold shapes, vibrant colors, and classic movie poster composition.",
      outcome: "A striking poster that pays homage to the original film while demonstrating strong vector illustration skills.",
    }
  },
  {
    title: "Carbonellas Restaurant",
    description: "Elegant restaurant branding featuring sophisticated typography, refined color palette, and cohesive visual identity for an upscale Italian dining experience.",
    category: "Restaurant Branding",
    image: "https://i.pinimg.com/736x/f6/b5/cd/f6b5cd3090c7073dc650888fbd29a967.jpg",
    details: {
      overview: "Comprehensive brand identity for Carbonella's Restaurant, an upscale Italian dining establishment including logo, menus, signage, and branded collateral.",
      role: "Brand Designer – Complete visual identity including logo, typography system, color palette, menu design, and brand guidelines.",
      tools: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop"],
      challenge: "Convey Italian culinary tradition and upscale dining while differentiating from competitors in a saturated market.",
      solution: "Elegant wordmark with refined typography suggesting Italian heritage. Sophisticated palette of deep charcoal and warm accent tones.",
      outcome: "Comprehensive brand identity that positions Carbonella's as a destination for upscale Italian cuisine.",
    }
  },
  {
    title: "Zens Bolt Energy Drink",
    description: "Bold energy drink packaging with electrifying graphics, dynamic typography, and vibrant color scheme designed to capture attention.",
    category: "Product Packaging",
    image: "https://i.pinimg.com/736x/46/c0/5a/46c05ad62207032d9ea807a351b37249.jpg",
    details: {
      overview: "High-impact packaging design for Zen's Bolt Energy Drink, focused on shelf impact through bold graphics and strategic use of color and typography.",
      role: "Packaging Designer – Concept development, graphic design, illustration, and production-ready package artwork.",
      tools: ["Adobe Illustrator", "Adobe Photoshop", "3D Mockup Tools"],
      challenge: "Break through in the competitive energy drink category with packaging that captures attention and communicates energy and performance.",
      solution: "Electrifying graphics with lightning bolt motifs, explosive color combinations, aggressive typography, and dynamic angles.",
      outcome: "Bold, eye-catching package design that successfully competes for attention in the energy drink category.",
    }
  }
];

// ==================== UTILITY ====================
function qs(sel, ctx = document) { return ctx.querySelector(sel); }
function qsa(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function setGlowEffectRx(ctx = document) {
  qsa('.glow', ctx).forEach(element => {
    const rx = getComputedStyle(element).borderRadius;
    qsa('rect', element).forEach(rect => rect.setAttribute('rx', rx));
  });
}

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
  });
  setGlowEffectRx(ctx);
}

(function initGlowEffectRx() {
  setGlowEffectRx();
})();

// ==================== THEME TOGGLE ====================
var currentLanguage = 'en';
const themeToggle = qs('#theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');

function setTheme(theme) {
  const isLight = theme === 'light';
  const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'en';
  document.body.classList.toggle('light-theme', isLight);
  themeToggle?.setAttribute('aria-pressed', String(isLight));
  themeToggle?.setAttribute(
    'aria-label',
    lang === 'es'
      ? (isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro')
      : (isLight ? 'Switch to dark mode' : 'Switch to light mode')
  );
}

setTheme(savedTheme || 'dark');

themeToggle?.addEventListener('click', () => {
  const nextTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
  localStorage.setItem('portfolio-theme', nextTheme);
  setTheme(nextTheme);
});

// ==================== LANGUAGE TOGGLE ====================
const languageToggle = qs('#language-toggle');
const savedLanguage = localStorage.getItem('portfolio-language') || 'en';

const enToEs = {
  'Home': 'Inicio',
  'About': 'Acerca',
  'Projects': 'Proyectos',
  'Contact': 'Contacto',
  "HI, I'M FREDY J YANES": 'HOLA, SOY FREDY J YANES',
  'GRAPHIC': 'DISEÑADOR',
  'DESIGNER': 'GRÁFICO',
  'From fine dining kitchens to digital interfaces — I bring the same precision, systems thinking, and obsession with craft to every brief.': 'De cocinas de alta gastronomía a interfaces digitales: llevo la misma precisión, pensamiento de sistemas y obsesión por el oficio a cada proyecto.',
  'See My Work': 'Ver Mi Trabajo',
  'Get in Touch': 'Hablemos',
  'scroll': 'desplazar',
  'About': 'Acerca',
  'me.': 'de mí.',
  "I built my career in professional kitchens — working my way from entry-level roles to Chef de Cuisine across high-volume and fine dining environments. Precision, consistency, and execution under pressure weren't soft skills. They were survival.": 'Construí mi carrera en cocinas profesionales, avanzando desde puestos iniciales hasta Chef de Cuisine en entornos de alto volumen y alta gastronomía. La precisión, la consistencia y la ejecución bajo presión no eran habilidades blandas. Eran supervivencia.',
  "The pivot to design was intentional, not accidental. After years in leadership I wanted a creative challenge that matched my standards. Graphic & Interactive Design at Valencia College gave me that — and it turns out a kitchen and a design system aren't that different. Both run on prep, structure, refinement, and delivery.": 'El cambio hacia el diseño fue intencional, no accidental. Después de años liderando equipos, quería un reto creativo que estuviera a la altura de mis estándares. Graphic & Interactive Design en Valencia College me dio eso, y resulta que una cocina y un sistema de diseño no son tan distintos. Ambos funcionan con preparación, estructura, refinamiento y entrega.',
  'I approach design the same way I approached the kitchen: with discipline, clarity, and a focus on delivering work that performs.': 'Abordo el diseño de la misma forma en que abordé la cocina: con disciplina, claridad y enfoque en entregar trabajo que funcione.',
  "Let's Work Together": 'Trabajemos Juntos',
  'What I Work With': 'Herramientas y Enfoques',
  'Brand Identity': 'Identidad de Marca',
  'Typography': 'Tipografía',
  'Print Design': 'Diseño Impreso',
  'Digital Design': 'Diseño Digital',
  'Illustration': 'Ilustración',
  'What I Bring': 'Lo Que Aporto',
  'Systems Thinking': 'Pensamiento Sistémico',
  'Execution Under Pressure': 'Ejecución Bajo Presión',
  'Precision': 'Precisión',
  'Leadership': 'Liderazgo',
  'Process-Driven': 'Orientado al Proceso',
  'Adaptability': 'Adaptabilidad',
  'Calm in Complexity': 'Calma en la Complejidad',
  'Featured Project': 'Proyecto Destacado',
  'Selected case study — UX to front-end': 'Caso de estudio seleccionado: de UX a front-end',
  'Web Design · Advanced Web Design · Valencia College': 'Diseño Web · Diseño Web Avanzado · Valencia College',
  'Belfast Discount Beds': 'Belfast Discount Beds',
  'E-commerce Redesign': 'Rediseño E-commerce',
  'A struggling local furniture retailer with an outdated, trust-eroding website. Seven documented user pain points. Ten weeks.': 'Una tienda local de muebles con un sitio anticuado que debilitaba la confianza. Siete puntos de dolor documentados. Diez semanas.',
  'I led the full process — research, IA, Figma mockups, usability testing, and a coded prototype — to deliver a modern e-commerce experience that makes finding and buying a bed feel as simple as it should be. Peers and instructors specifically noted improvements in layout clarity and navigation structure.': 'Lideré todo el proceso: investigación, arquitectura de información, mockups en Figma, pruebas de usabilidad y un prototipo codificado, para entregar una experiencia e-commerce moderna que hace que encontrar y comprar una cama se sienta tan simple como debería. Compañeros e instructores destacaron especialmente las mejoras en claridad de layout y estructura de navegación.',
  'Read the Case Study': 'Leer el Caso de Estudio',
  'More Projects': 'Más Proyectos',
  'A range of work across branding, illustration, packaging, and UI — built while learning to think like a designer.': 'Una variedad de trabajos en branding, ilustración, empaque e UI, desarrollados mientras aprendía a pensar como diseñador.',
  'Scroll left': 'Desplazar a la izquierda',
  'Scroll right': 'Desplazar a la derecha',
  "Let's Build Something.": 'Construyamos Algo.',
  "I'm actively looking for junior design roles and internships in Orlando and beyond — particularly in agencies, hospitality brands, lifestyle brands, or digital product teams where strong process matters as much as the final deliverable.": 'Estoy buscando activamente roles junior de diseño e internships en Orlando y más allá, especialmente en agencias, marcas de hospitalidad, marcas lifestyle o equipos de producto digital donde un proceso sólido importe tanto como el resultado final.',
  'I respond fast and I come prepared.': 'Respondo rápido y llego preparado.',
  'Graphic & Interactive Design': 'Diseño Gráfico e Interactivo',
  'Close modal': 'Cerrar modal',
  'Back': 'Volver',
  'Overview': 'Resumen',
  'Problem': 'Problema',
  'Research': 'Investigación',
  'Users': 'Usuarios',
  'Roles': 'Roles',
  'Scope': 'Alcance',
  'Process': 'Proceso',
  'Outcome': 'Resultado',
  'Users & Audience': 'Usuarios y Audiencia',
  'Roles & Responsibilities': 'Roles y Responsabilidades',
  'Scope & Constraints': 'Alcance y Restricciones',
  'Process & Actions': 'Proceso y Acciones',
  'Outcome & Takeaways': 'Resultado y Aprendizajes',
  'Toggle menu': 'Abrir o cerrar menú',
  'Display settings': 'Opciones de visualización',
  'Scroll to top': 'Volver arriba',
  'Close lightbox': 'Cerrar visor',
  'Click outside or press ESC to close': 'Haz clic fuera o presiona ESC para cerrar',
  'Go to project 1': 'Ir al proyecto 1',
  'Go to project 2': 'Ir al proyecto 2',
  'Go to project 3': 'Ir al proyecto 3',
  'Go to project 4': 'Ir al proyecto 4',
  'Go to project 5': 'Ir al proyecto 5',
  'Go to project 6': 'Ir al proyecto 6',
  'Go to project 7': 'Ir al proyecto 7',
  'Go to project 8': 'Ir al proyecto 8',
  'Go to project 9': 'Ir al proyecto 9',
  'Go to project 10': 'Ir al proyecto 10',
  'Branding & Promotional': 'Branding y Promoción',
  'Web Design': 'Diseño Web',
  'UI/UX Design': 'Diseño UI/UX',
  'Print Design': 'Diseño Impreso',
  'Branding': 'Branding',
  'Packaging Design': 'Diseño de Empaque',
  'Vector Illustration': 'Ilustración Vectorial',
  'Restaurant Branding': 'Branding de Restaurante',
  'Product Packaging': 'Empaque de Producto',
  'Comprehensive promotional campaign for a romantic comedy film featuring vibrant poster design, social media ads, and billboard campaign.': 'Campaña promocional integral para una comedia romántica con pósters vibrantes, anuncios para redes sociales y vallas publicitarias.',
  'Responsive website promoting Salvadoran coffee culture with e-commerce functionality, educational content, and immersive cultural storytelling.': 'Sitio responsive que promueve la cultura cafetera salvadoreña con e-commerce, contenido educativo y narrativa cultural inmersiva.',
  'Voter education platform designed to empower citizens with accessible, unbiased information for informed democratic participation.': 'Plataforma de educación electoral diseñada para empoderar a ciudadanos con información accesible e imparcial para participar de forma informada.',
  'A thrilling fusion of graphic design and cinematic inspiration, capturing the intense blood rave scene from the iconic BLADE movie.': 'Una fusión intensa de diseño gráfico e inspiración cinematográfica que captura la famosa escena del blood rave de BLADE.',
  'Vibrant poster design capturing the nostalgic essence of 1980s aesthetics with neon colors, geometric patterns, and retro-futuristic elements.': 'Póster vibrante que captura la nostalgia de los años 80 con colores neón, patrones geométricos y elementos retrofuturistas.',
  'Modern and sleek branding for a vibrant taqueria, capturing the essence of Mexican cuisine with contemporary design elements.': 'Branding moderno y pulido para una taquería vibrante, capturando la esencia de la cocina mexicana con elementos contemporáneos.',
  'Delightful cereal box design celebrating Latino heritage with lively pastel shades, playful patterns, and a charming cow mascot.': 'Diseño alegre de caja de cereal que celebra la herencia latina con tonos pastel, patrones juguetones y una mascota encantadora.',
  'Iconic movie poster reimagining with bold vector illustration, dynamic composition and retro-futuristic style.': 'Reinterpretación de un póster icónico con ilustración vectorial audaz, composición dinámica y estilo retrofuturista.',
  'Elegant restaurant branding featuring sophisticated typography, refined color palette, and cohesive visual identity for an upscale Italian dining experience.': 'Branding elegante para restaurante con tipografía sofisticada, paleta refinada e identidad visual cohesiva para una experiencia italiana upscale.',
  'Bold energy drink packaging with electrifying graphics, dynamic typography, and vibrant color scheme designed to capture attention.': 'Empaque audaz para bebida energética con gráficos eléctricos, tipografía dinámica y colores vibrantes diseñados para llamar la atención.',
  'Overview': 'Resumen',
  'My Role': 'Mi Rol',
  'Tools': 'Herramientas',
  'The Challenge': 'El Reto',
  'The Solution': 'La Solución',
  'Outcome': 'Resultado',
  'Web Design Case Study': 'Caso de Estudio de Diseño Web',
  'Transforming a struggling e-commerce experience into a modern, user-centered website that builds trust and drives sales.': 'Transformar una experiencia e-commerce con problemas en un sitio moderno y centrado en el usuario que construye confianza e impulsa ventas.',
  'Click to flip': 'Haz clic para girar',
  'Before': 'Antes',
  'After': 'Después',
  'Role': 'Rol',
  'Lead Designer': 'Diseñador Líder',
  'Timeline': 'Cronograma',
  '10 Weeks': '10 Semanas',
  'Platform': 'Plataforma',
  'E-commerce Web': 'Web E-commerce',
  'Problem Statement': 'Planteamiento del Problema',
  'Outdated Visual Design': 'Diseño Visual Anticuado',
  'Poor Usability': 'Baja Usabilidad',
  'Missing Key Information': 'Información Clave Faltante',
  'Lack of Trust Signals': 'Falta de Señales de Confianza',
  'Impact': 'Impacto',
  'Research & Insights': 'Investigación e Insights',
  'User Research': 'Investigación de Usuarios',
  'Competitive Analysis': 'Análisis Competitivo',
  'Usability Testing': 'Pruebas de Usabilidad',
  'The Value-Driven Homeowner': 'El Dueño de Casa Orientado al Valor',
  'The Busy Renter/Family': 'El Inquilino o Familia Ocupada',
  'The Budget-Conscious Student': 'El Estudiante con Presupuesto Ajustado',
  'User Goals': 'Objetivos del Usuario',
  'Pain Points': 'Puntos de Dolor',
  'Lead Designer — Fredy Yanes': 'Diseñador Líder — Fredy Yanes',
  'UX Research & Strategy': 'Investigación UX y Estrategia',
  'Information Architecture': 'Arquitectura de Información',
  'Visual/UI Design': 'Diseño Visual/UI',
  'Prototyping': 'Prototipado',
  'Front-End Development': 'Desarrollo Front-End',
  'Pages': 'Páginas',
  'Content': 'Contenido',
  'E-commerce Functionality': 'Funcionalidad E-commerce',
  'Discovery': 'Descubrimiento',
  'Information Architecture & Wireframing': 'Arquitectura de Información y Wireframes',
  'Visual Design & Branding': 'Diseño Visual y Branding',
  'Development': 'Desarrollo',
  'Final Product': 'Producto Final',
  'Key Takeaway': 'Aprendizaje Clave',
  'Next Steps': 'Próximos Pasos',
  'View Live Website': 'Ver Sitio en Vivo',
  'Explore more work': 'Explorar más trabajos',
  'View Full Portfolio': 'Ver Portafolio Completo'
};

Object.assign(enToEs, {
  'A complete integrated marketing campaign for the romantic comedy film "Alpha Beta Gamma". The project encompassed multiple deliverables including theatrical posters, social media content, and outdoor advertising to build anticipation and drive ticket sales.': 'Una campaña integral de marketing para la comedia romántica "Alpha Beta Gamma". El proyecto incluyó múltiples entregables, como pósters teatrales, contenido para redes sociales y publicidad exterior para generar expectativa e impulsar ventas.',
  'Lead Designer – Responsible for developing the visual identity, creating all promotional materials, and ensuring brand consistency across all touchpoints.': 'Diseñador líder: responsable de desarrollar la identidad visual, crear todos los materiales promocionales y asegurar consistencia de marca en cada punto de contacto.',
  'Create a cohesive visual identity that captures the playful yet romantic tone of the film while standing out in a crowded entertainment market.': 'Crear una identidad visual cohesiva que capture el tono juguetón y romántico de la película mientras destaca en un mercado de entretenimiento saturado.',
  "Developed a vibrant color palette and dynamic composition style featuring the main characters in engaging scenarios. Used bold typography and energetic layouts to convey the film's comedic nature.": 'Desarrollé una paleta vibrante y un estilo de composición dinámico con los personajes principales en escenarios llamativos. Usé tipografía audaz y layouts enérgicos para comunicar el carácter cómico de la película.',
  'The campaign successfully generated buzz across social media platforms and contributed to strong opening weekend attendance.': 'La campaña generó conversación en redes sociales y contribuyó a una asistencia sólida durante el fin de semana de estreno.',
  'A comprehensive web design project celebrating Salvadoran coffee culture through an immersive digital experience combining e-commerce functionality with rich educational content.': 'Un proyecto integral de diseño web que celebra la cultura cafetera salvadoreña mediante una experiencia digital inmersiva que combina e-commerce con contenido educativo.',
  'UI/UX Designer & Developer – Designed the complete user experience and implemented the responsive website with e-commerce integration.': 'Diseñador UI/UX y desarrollador: diseñé la experiencia completa e implementé el sitio responsive con integración e-commerce.',
  'Create an engaging digital experience that honors Salvadoran coffee traditions while providing modern e-commerce functionality.': 'Crear una experiencia digital atractiva que honre las tradiciones del café salvadoreño y ofrezca funcionalidad e-commerce moderna.',
  'Designed an immersive scrolling experience with rich photography, cultural narratives, and a warm earthy color palette inspired by coffee and Salvadoran landscapes.': 'Diseñé una experiencia inmersiva con fotografía rica, narrativa cultural y una paleta cálida inspirada en el café y los paisajes salvadoreños.',
  'Delivered a fully functional responsive website that effectively communicates brand values and facilitates online coffee sales.': 'Entregué un sitio responsive funcional que comunica los valores de marca y facilita la venta de café en línea.',
  'VoteSource is a civic engagement platform providing voters with accessible, nonpartisan information about candidates, ballot measures, and the voting process.': 'VoteSource es una plataforma de participación cívica que ofrece a los votantes información accesible y no partidista sobre candidatos, propuestas y el proceso electoral.',
  'UX/UI Designer – Conducted user research, developed information architecture, created wireframes and high-fidelity mockups.': 'Diseñador UX/UI: realicé investigación de usuarios, desarrollé la arquitectura de información y creé wireframes y mockups de alta fidelidad.',
  'Design a platform that presents complex political information in an unbiased, easily digestible format for users of varying technical abilities.': 'Diseñar una plataforma que presente información política compleja de forma imparcial y fácil de entender para usuarios con distintos niveles técnicos.',
  'Clean interface with clear information hierarchy, neutral color scheme, filtering and comparison tools, and generous whitespace for readability.': 'Interfaz limpia con jerarquía clara, paleta neutral, herramientas de filtrado y comparación, y buen uso del espacio para mejorar la lectura.',
  'Comprehensive design system and prototype that successfully tested with diverse user groups across political backgrounds.': 'Sistema de diseño y prototipo integral validado con grupos diversos de usuarios de distintos contextos políticos.',
  'A dramatic comic book cover illustration inspired by the iconic blood rave scene from the BLADE film, exploring the intersection of cinematic atmosphere and comic book art.': 'Una portada dramática de cómic inspirada en la escena icónica del blood rave de BLADE, explorando la intersección entre atmósfera cinematográfica y arte de cómic.',
  'Illustrator & Designer – Conceptualized and executed the complete cover illustration from initial sketches through final digital artwork.': 'Ilustrador y diseñador: conceptualicé y ejecuté la ilustración completa de la portada desde bocetos iniciales hasta arte digital final.',
  'Capture the cinematic intensity and atmospheric darkness of the BLADE universe while creating a compelling comic book cover composition.': 'Capturar la intensidad cinematográfica y la oscuridad atmosférica del universo BLADE mientras se crea una composición potente de portada de cómic.',
  'Dynamic angles and dramatic lighting create depth and movement. Bold red and black color scheme evokes the blood rave while maintaining readability.': 'Ángulos dinámicos e iluminación dramática crean profundidad y movimiento. La paleta roja y negra evoca el blood rave sin perder legibilidad.',
  'A striking cover that bridges cinematic and comic book aesthetics with professional production quality.': 'Una portada impactante que conecta estética cinematográfica y de cómic con calidad profesional.',
  'Belfast Discount Beds is a local furniture retailer whose outdated website was actively hurting their business. The site suffered from poor navigation, an unprofessional visual design, and a broken mobile experience.': 'Belfast Discount Beds es una tienda local de muebles cuyo sitio web anticuado estaba afectando activamente su negocio. El sitio tenía navegación deficiente, diseño visual poco profesional y una experiencia móvil rota.',
  'My role was to lead the entire design process — from initial research to a final coded prototype — creating a modern, user-centered website that makes browsing and purchasing simple and intuitive.': 'Mi rol fue liderar todo el proceso de diseño, desde la investigación inicial hasta un prototipo codificado final, creando un sitio moderno y centrado en el usuario que hace que explorar y comprar sea simple e intuitivo.',
  "The website appeared unprofessional, eroding trust and raising doubts about the business's legitimacy.": 'El sitio se veía poco profesional, debilitaba la confianza y generaba dudas sobre la legitimidad del negocio.',
  'Confusing navigation hindered product discovery, while the mobile experience suffered from cramped text and unresponsive elements.': 'La navegación confusa dificultaba encontrar productos, mientras que la experiencia móvil tenía texto apretado y elementos poco responsivos.',
  'Product pages lacked crucial details like dimensions, materials, and customer reviews, leaving users puzzled.': 'Las páginas de producto carecían de detalles clave como dimensiones, materiales y reseñas, dejando a los usuarios con dudas.',
  'Absence of visible reviews, clear return policies, and delivery info deterred purchases.': 'La ausencia de reseñas visibles, políticas de devolución claras e información de entrega frenaba las compras.',
  'These factors led to a frustrating user experience, high bounce rates, and missed sales to competitors.': 'Estos factores generaban una experiencia frustrante, altas tasas de abandono y ventas perdidas frente a competidores.',
  'Conducted interviews with 15 potential customers to understand pain points in the current shopping experience. Key findings included confusion around product specifications and difficulty comparing options.': 'Realicé entrevistas con 15 clientes potenciales para entender puntos de dolor en la experiencia de compra actual. Los hallazgos clave incluyeron confusión sobre especificaciones y dificultad para comparar opciones.',
  'Analyzed 8 competitor websites including IKEA and Wayfair to identify industry best practices. Discovered gaps in mobile optimization and product filtering capabilities.': 'Analicé 8 sitios competidores, incluidos IKEA y Wayfair, para identificar buenas prácticas de la industria. Encontré brechas en optimización móvil y filtrado de productos.',
  'Tested initial prototypes with 10 users to validate design decisions. Iterated on navigation structure and checkout flow based on feedback, reducing cart abandonment by 35%.': 'Probé prototipos iniciales con 10 usuarios para validar decisiones de diseño. Iteré la navegación y el flujo de checkout según feedback, reduciendo el abandono del carrito en 35%.',
  'Age 30–50. Seeks affordable furnishings, excels at online deal-hunting, requires clear specs, delivery info, and financing options.': 'Edad 30-50. Busca muebles accesibles, compara ofertas en línea y necesita especificaciones claras, información de entrega y opciones de financiamiento.',
  'Age 25–40. Needs a durable mattress swiftly, emphasizing convenience, mobile shopping, quick checkout, and reliable delivery.': 'Edad 25-40. Necesita un colchón durable rápidamente, priorizando conveniencia, compra móvil, checkout rápido y entrega confiable.',
  'Age 18–25. Searching for their first "adult" bed, price-sensitive, attracted to sales, values peer reviews.': 'Edad 18-25. Busca su primera cama "adulta", es sensible al precio, se interesa por ofertas y valora reseñas de otros compradores.',
  'Quickly find products, easily compare prices and specs, understand all costs, and feel confident in their purchase decision.': 'Encontrar productos rápido, comparar precios y especificaciones fácilmente, entender todos los costos y sentirse seguro al comprar.',
  'Overwhelmed by choices, cautious of unreliable sites, struggling to locate crucial details like dimensions or warranties.': 'Se abruma con demasiadas opciones, desconfía de sitios poco fiables y tiene dificultad para encontrar detalles clave como dimensiones o garantías.',
  'Oversaw all project phases from discovery to development.': 'Supervisé todas las fases del proyecto, desde descubrimiento hasta desarrollo.',
  'Addressed client pain points, defined user personas, and analyzed competitors like IKEA and Wayfair.': 'Abordé puntos de dolor del cliente, definí personas usuarias y analicé competidores como IKEA y Wayfair.',
  'Revamped the sitemap and designed an intuitive navigation system.': 'Reestructuré el sitemap y diseñé un sistema de navegación intuitivo.',
  'Developed wireframes, high-fidelity mockups, and a comprehensive design system in Figma.': 'Desarrollé wireframes, mockups de alta fidelidad y un sistema de diseño completo en Figma.',
  'Built clickable prototypes to test user flows and gather stakeholder feedback.': 'Construí prototipos clicables para probar flujos de usuario y recoger feedback de stakeholders.',
  'Conducted testing sessions with real users and iterated based on insights.': 'Realicé sesiones de prueba con usuarios reales e iteré según los hallazgos.',
  'Implemented the design using HTML/CSS, ensuring responsiveness and accessibility.': 'Implementé el diseño con HTML/CSS, asegurando responsividad y accesibilidad.',
  'Completed in a 10-week semester, from concept to coded case study page.': 'Completado en un semestre de 10 semanas, desde el concepto hasta una página de caso de estudio codificada.',
  'Focused on five essential pages: Home, Shop, Product Detail, About, and Contact.': 'Enfoque en cinco páginas esenciales: Home, Shop, Detalle de Producto, About y Contact.',
  'Hand-coded in HTML, CSS, and JavaScript; original prototype built in Codepen.': 'Codificado a mano en HTML, CSS y JavaScript; el prototipo original fue creado en CodePen.',
  'Existing client photography and placeholder text were used, with original writing for the case study.': 'Se usó fotografía existente del cliente y texto placeholder, con redacción original para el caso de estudio.',
  'The prototype simulates the purchase process but does not include a live payment gateway.': 'El prototipo simula el proceso de compra, pero no incluye una pasarela de pago activa.',
  "Analyzed the client's brief, pinpointing 7 user pain points and conducting a visual audit of three competitors to uncover industry standards and opportunities.": 'Analicé el brief del cliente, identifiqué 7 puntos de dolor y realicé una auditoría visual de tres competidores para descubrir estándares y oportunidades.',
  'Developed a new sitemap for enhanced content organization and created low-fidelity wireframes in Whimsical, exploring three layout ideas for the homepage and product pages.': 'Desarrollé un nuevo sitemap para mejorar la organización del contenido y creé wireframes de baja fidelidad en Whimsical, explorando tres ideas de layout para la página principal y las páginas de producto.',
  'Crafted a mood board for a fresh visual approach, resulting in high-fidelity mockups in Figma featuring a calming color scheme and modern typography.': 'Creé un mood board para una dirección visual renovada, resultando en mockups de alta fidelidad en Figma con una paleta calmada y tipografía moderna.',
  'Transformed mockups into a clickable Figma prototype for testing user flows and gathering stakeholder feedback.': 'Transformé los mockups en un prototipo clicable de Figma para probar flujos y reunir feedback.',
  'Built the final website using HTML, CSS, and JavaScript, ensuring responsiveness and accessibility across all devices.': 'Construí el sitio final con HTML, CSS y JavaScript, asegurando responsividad y accesibilidad en todos los dispositivos.',
  'A modern and responsive 5-page website prototype that directly addresses the seven pain points of the current user base. Clean, intuitive design with clear visual hierarchy and an easy path to the product.': 'Un prototipo moderno y responsive de 5 páginas que aborda directamente los siete puntos de dolor de la base de usuarios. Diseño limpio e intuitivo con jerarquía visual clara y un camino sencillo hacia el producto.',
  'The design positions Belfast Discount Beds as a trustworthy, modern alternative to existing competitors in the Belfast market.': 'El diseño posiciona a Belfast Discount Beds como una alternativa confiable y moderna frente a competidores del mercado de Belfast.',
  'A methodical, problem-focused approach to design yields better and more defensible results. A well-designed product has a much greater chance of success than one that simply looks good.': 'Un enfoque metódico y centrado en el problema produce resultados mejores y más defendibles. Un producto bien diseñado tiene más posibilidades de éxito que uno que solo se ve bien.',
  'User feedback is invaluable. Usability testing revealed a critical flaw in my initial filter design that I would not have caught on my own.': 'El feedback de usuarios es invaluable. Las pruebas de usabilidad revelaron una falla crítica en mi diseño inicial de filtros que no habría detectado solo.',
  'Conduct further usability testing with a larger user base': 'Realizar más pruebas de usabilidad con una base de usuarios más amplia',
  'Implement analytics to track user behavior and conversion rates': 'Implementar analítica para medir comportamiento de usuarios y tasas de conversión',
  'Develop a fully functional e-commerce backend with payment integration': 'Desarrollar un backend e-commerce funcional con integración de pagos',
  'Continue iterating based on real user feedback and data': 'Seguir iterando con feedback y datos reales'
});

const esToEn = Object.fromEntries(Object.entries(enToEs).map(([en, es]) => [es, en]));
currentLanguage = savedLanguage === 'es' ? 'es' : 'en';

function translateString(value, lang = currentLanguage) {
  const trimmed = value.trim();
  if (!trimmed) return value;
  const dictionary = lang === 'es' ? enToEs : esToEn;
  const translated = dictionary[trimmed];
  if (translated) return value.replace(trimmed, translated);
  let output = value;
  Object.entries(dictionary)
    .sort((a, b) => b[0].length - a[0].length)
    .forEach(([source, target]) => {
      if (source.length > 2 && output.includes(source)) {
        output = output.split(source).join(target);
      }
    });
  return output;
}

function translateTextNodes(root = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => { node.nodeValue = translateString(node.nodeValue); });
}

function setLanguage(lang) {
  currentLanguage = lang === 'es' ? 'es' : 'en';
  document.documentElement.lang = currentLanguage;
  languageToggle?.classList.toggle('is-spanish', currentLanguage === 'es');
  languageToggle?.setAttribute('aria-pressed', String(currentLanguage === 'es'));
  languageToggle?.setAttribute('aria-label', currentLanguage === 'es' ? 'Switch to English' : 'Cambiar a español');
  const isLightTheme = document.body.classList.contains('light-theme');
  themeToggle?.setAttribute(
    'aria-label',
    currentLanguage === 'es'
      ? (isLightTheme ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro')
      : (isLightTheme ? 'Switch to dark mode' : 'Switch to light mode')
  );
  document.title = currentLanguage === 'es'
    ? 'Fredy J Yanes – Portafolio de Diseñador Gráfico'
    : 'Fredy J Yanes – Graphic Designer Portfolio';
  translateTextNodes();
  qsa('[aria-label]').forEach(el => {
    if (el !== languageToggle && el !== themeToggle) {
      el.setAttribute('aria-label', translateString(el.getAttribute('aria-label')));
    }
  });
}

languageToggle?.addEventListener('click', () => {
  const nextLanguage = currentLanguage === 'es' ? 'en' : 'es';
  localStorage.setItem('portfolio-language', nextLanguage);
  setLanguage(nextLanguage);
});

// ==================== MAIN NAV ====================
const mainNav = qs('#main-nav');
const allNavLinks = qsa('[data-section]');
const mainSections = ['home','about','projects','contact'];

function setActiveNav(id) {
  allNavLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id));
}

allNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    const id = link.dataset.section;
    const el = document.getElementById(id);
    if (!el) return;
    const navH = mainNav.offsetHeight;
    window.scrollTo({ top: el.offsetTop - navH, behavior: 'smooth' });
    setActiveNav(id);
    qs('#mobile-menu').classList.add('hidden');
  });
});

// Scroll spy + parallax + nav shrink
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 160;
  const windowBottom = scrollPos + window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;
  let current = 'home';
  if (windowBottom >= docHeight - 100) {
    current = 'contact';
  } else {
    for (const id of [...mainSections].reverse()) {
      const el = document.getElementById(id);
      if (el && scrollPos >= el.offsetTop - 100) { current = id; break; }
    }
  }
  setActiveNav(current);

  // Nav shrink on scroll
  if (window.scrollY > 50) {
    mainNav.classList.add('nav-scrolled');
  } else {
    mainNav.classList.remove('nav-scrolled');
  }

  // About parallax layers
  const aboutSection = qs('#about');
  if (aboutSection) {
    const rect = aboutSection.getBoundingClientRect();
    const progress = -rect.top / (rect.height + window.innerHeight);
    const layer1 = qs('.layer-1');
    const layer2 = qs('.layer-2');
    if (layer1) layer1.style.transform = `translateY(${progress * 80}px)`;
    if (layer2) layer2.style.transform = `translateY(${progress * -60}px)`;
  }

  // Hero parallax layers + decos
  const heroImage = document.querySelector('.parallax-hero');
  const deco1 = document.querySelector('.deco-1');
  const deco2 = document.querySelector('.deco-2');
  const scrollY = window.scrollY;

  if (heroImage) heroImage.style.transform = `translateY(${scrollY * 0.08}px) scale(1.08)`;
  if (deco1) deco1.style.transform = `translateY(${scrollY * 0.05}px) translateX(${scrollY * 0.03}px)`;
  if (deco2) deco2.style.transform = `translateY(${scrollY * -0.06}px) translateX(${scrollY * -0.02}px)`;

  // H1 Text Sliding Animation on Scroll
  const heroSection = qs('#home');
  const heroTitle = qs('.hero-title');
  if (heroSection && heroTitle) {
    const heroRect = heroSection.getBoundingClientRect();
    const heroProgress = -heroRect.top / (heroRect.height + window.innerHeight);
    const slideAmount = Math.min(Math.max(heroProgress * 15, 0), 8);
    heroTitle.style.transform = `translateX(${slideAmount}%)`;
  }
}, { passive: true });

qs('#mobile-menu-btn').addEventListener('click', () =>
  qs('#mobile-menu').classList.toggle('hidden'));

// ==================== TAG FLOATING ====================
function initTagFloating() {
  qsa('.skills-cloud .tag').forEach((tag, i) => {
    const dur  = (3.5 + Math.random() * 2.5).toFixed(2) + 's';
    const del  = (Math.random() * 2).toFixed(2) + 's';
    tag.style.setProperty('--float-dur', dur);
    tag.style.setProperty('--float-delay', del);
    const delay = (parseInt(tag.style.getPropertyValue('--d') || 0) * 60 + 200);
    setTimeout(() => tag.classList.add('floating'), delay + 420);
  });
}
initTagFloating();

// ==================== SLIDER ====================
const slider      = qs('#slider');
const prevBtn     = qs('#slider-prev');
const nextBtn     = qs('#slider-next');
const dotsWrap    = qs('#slider-dots');
const CARD_W      = 286 + 20;

function renderSlider() {
  slider.innerHTML = moreProjects.map((p, i) => `
    <div class="slider-card" data-index="${i}" role="button" tabindex="0" aria-label="${p.title}">
      <div class="slider-card-image">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        <span class="slider-card-category">${p.category}</span>
      </div>
      <div class="slider-card-info">
        <h3 class="slider-card-title">${p.title}</h3>
        <p class="slider-card-desc">${p.description}</p>
      </div>
    </div>
  `).join('');

  dotsWrap.innerHTML = moreProjects.map((_,i) =>
    `<button class="dot" data-slide="${i}" aria-label="Go to project ${i+1}"></button>`
  ).join('');

  qsa('.slider-card').forEach(card => {
    const open = () => openProjectModal(moreProjects[+card.dataset.index]);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
  });
  qsa('.dot').forEach(dot => dot.addEventListener('click', () => scrollToSlide(+dot.dataset.slide)));
  updateSlider();
}

function updateSlider() {
  const canLeft  = slider.scrollLeft > 2;
  const canRight = slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 2;
  prevBtn.disabled = !canLeft;
  nextBtn.disabled = !canRight;
  const maxIndex = moreProjects.length - 1;
  const active = Math.max(0, Math.min(maxIndex, Math.round(slider.scrollLeft / CARD_W)));
  qsa('.dot').forEach((d,i) => d.classList.toggle('active', i === active));
}

function scrollToSlide(i) { slider.scrollTo({ left: i * CARD_W, behavior: 'smooth' }); }
prevBtn.addEventListener('click', () => slider.scrollBy({ left: -CARD_W, behavior: 'smooth' }));
nextBtn.addEventListener('click', () => slider.scrollBy({ left:  CARD_W, behavior: 'smooth' }));
slider.addEventListener('scroll', updateSlider, { passive: true });
renderSlider();
setLanguage(currentLanguage);
enhanceGlowButtons();

// ==================== PROJECT MODAL ====================
const modalOverlay  = qs('#project-modal');
const modalClose    = qs('#modal-close');
const modalImage    = qs('#modal-image');
const modalCategory = qs('#modal-category');
const modalTitle    = qs('#modal-title');
const modalDesc     = qs('#modal-description');
const modalDetails  = qs('#modal-details');

function openProjectModal(project) {
  modalImage.src     = project.image;
  modalImage.alt     = project.title;
  modalCategory.textContent = project.category;
  modalTitle.textContent    = project.title;
  modalDesc.textContent     = project.description;

  let html = '';
  const d = project.details || {};
  if (d.overview)  html += `<h3>Overview</h3><p>${d.overview}</p>`;
  if (d.role)      html += `<h3>My Role</h3><p>${d.role}</p>`;
  if (d.tools)     html += `<h3>Tools</h3><div class="skills-tags">${d.tools.map(t=>`<span class="tag">${t}</span>`).join('')}</div>`;
  if (d.challenge) html += `<h3>The Challenge</h3><p>${d.challenge}</p>`;
  if (d.solution)  html += `<h3>The Solution</h3><p>${d.solution}</p>`;
  if (d.outcome)   html += `<h3>Outcome</h3><p>${d.outcome}</p>`;
  modalDetails.innerHTML = html;
  translateTextNodes(modalOverlay);

  modalOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

// ==================== PROJECT DETAIL ====================
const detailOverlay = qs('#project-detail');
const detailMain    = qs('#detail-main');
const detailBack    = qs('#detail-back');
const scrollTopBtn  = qs('#scroll-top-btn');
const lightbox      = qs('#lightbox');
const lightboxImg   = qs('#lightbox-img');
const lightboxClose = qs('#lightbox-close');

function buildDetailHTML() {
  return `
    <section id="detail-overview">
      <div class="badge detail-spacer-sm">Web Design Case Study</div>
      <h1>Belfast Discount Beds</h1>
      <p class="detail-hero-copy">
        Transforming a struggling e-commerce experience into a modern, user-centered website that builds trust and drives sales.
      </p>
      <div class="flip-card" id="flip-card" role="button" aria-label="Flip to see before and after">
        <p class="flip-card-label">Click to flip — <span>Before</span> vs <span>After</span></p>
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <p class="flip-side-label">Before</p>
            <img src="https://cdn.myportfolio.com/3b674604-b9ac-4701-bc24-d881b2abd8fb/c2fb168c-acdf-448c-a858-4023e094e798.jpg?h=04ca052916a707db474e85a6e2ebf875" alt="Website before redesign">
          </div>
          <div class="flip-card-back">
            <p class="flip-side-label">After</p>
            <img src="https://cdn.myportfolio.com/3b674604-b9ac-4701-bc24-d881b2abd8fb/c2b02629-40fe-4a4d-b185-cddba0625d0e_rw_1920.jpg?h=7a38bbbe6a01d509242cad57711c9619" alt="Website after redesign">
          </div>
        </div>
      </div>
      <div class="d-grid-4 detail-spacer-lg">
        <div class="meta-item d-card"><span class="label">Role</span><strong>Lead Designer</strong></div>
        <div class="meta-item d-card"><span class="label">Timeline</span><strong>10 Weeks</strong></div>
        <div class="meta-item d-card"><span class="label">Tools</span><strong>Figma, HTML/CSS</strong></div>
        <div class="meta-item d-card"><span class="label">Platform</span><strong>E-commerce Web</strong></div>
      </div>
      <div class="d-card detail-spacer-md">
        <p>Belfast Discount Beds is a local furniture retailer whose outdated website was actively hurting their business. The site suffered from poor navigation, an unprofessional visual design, and a broken mobile experience.</p>
        <p class="detail-spacer-sm">My role was to lead the entire design process — from initial research to a final coded prototype — creating a modern, user-centered website that makes browsing and purchasing simple and intuitive.</p>
      </div>
    </section>

    <section id="detail-problem">
      <h2>Problem Statement</h2>
      <div class="d-stack">
        <div class="d-card">
          <div class="detail-row">
            <span class="step-num">1</span>
            <div><h3>Outdated Visual Design</h3><p>The website appeared unprofessional, eroding trust and raising doubts about the business's legitimacy.</p></div>
          </div>
        </div>
        <div class="d-card">
          <div class="detail-row">
            <span class="step-num">2</span>
            <div><h3>Poor Usability</h3><p>Confusing navigation hindered product discovery, while the mobile experience suffered from cramped text and unresponsive elements.</p></div>
          </div>
        </div>
        <div class="d-card">
          <div class="detail-row">
            <span class="step-num">3</span>
            <div><h3>Missing Key Information</h3><p>Product pages lacked crucial details like dimensions, materials, and customer reviews, leaving users puzzled.</p></div>
          </div>
        </div>
        <div class="d-card">
          <div class="detail-row">
            <span class="step-num">4</span>
            <div><h3>Lack of Trust Signals</h3><p>Absence of visible reviews, clear return policies, and delivery info deterred purchases.</p></div>
          </div>
        </div>
        <div class="d-card d-card-highlight">
          <h3 class="accent-heading">Impact</h3>
          <p>These factors led to a frustrating user experience, high bounce rates, and missed sales to competitors.</p>
        </div>
      </div>
    </section>

    <section id="detail-research">
      <h2>Research & Insights</h2>
      <div class="d-card detail-card-flush">
        <div class="tab-bar">
          <button class="tab-btn active" data-tab="tab1">User Research</button>
          <button class="tab-btn" data-tab="tab2">Competitive Analysis</button>
          <button class="tab-btn" data-tab="tab3">Usability Testing</button>
        </div>
        <div id="tab1" class="tab-panel"><p>Conducted interviews with 15 potential customers to understand pain points in the current shopping experience. Key findings included confusion around product specifications and difficulty comparing options.</p></div>
        <div id="tab2" class="tab-panel hidden"><p>Analyzed 8 competitor websites including IKEA and Wayfair to identify industry best practices. Discovered gaps in mobile optimization and product filtering capabilities.</p></div>
        <div id="tab3" class="tab-panel hidden"><p>Tested initial prototypes with 10 users to validate design decisions. Iterated on navigation structure and checkout flow based on feedback, reducing cart abandonment by 35%.</p></div>
      </div>
    </section>

    <section id="detail-users">
      <h2>Users & Audience</h2>
      <img src="https://i.pinimg.com/736x/51/1e/bf/511ebff7e25e2b6edcbfa01b2badc2ca.jpg" alt="User persona board" class="lightbox-trigger detail-image detail-image-lg">
      <div class="d-stack">
        <div class="d-card">
          <div class="detail-row">
            <span class="step-num">01</span>
            <div><h3>The Value-Driven Homeowner</h3><p>Age 30–50. Seeks affordable furnishings, excels at online deal-hunting, requires clear specs, delivery info, and financing options.</p></div>
          </div>
        </div>
        <div class="d-card">
          <div class="detail-row">
            <span class="step-num">02</span>
            <div><h3>The Busy Renter/Family</h3><p>Age 25–40. Needs a durable mattress swiftly, emphasizing convenience, mobile shopping, quick checkout, and reliable delivery.</p></div>
          </div>
        </div>
        <div class="d-card">
          <div class="detail-row">
            <span class="step-num">03</span>
            <div><h3>The Budget-Conscious Student</h3><p>Age 18–25. Searching for their first "adult" bed, price-sensitive, attracted to sales, values peer reviews.</p></div>
          </div>
        </div>
      </div>
      <div class="d-grid-2 detail-spacer-sm">
        <div class="d-card d-card-highlight">
          <h3 class="accent-heading">User Goals</h3>
          <p>Quickly find products, easily compare prices and specs, understand all costs, and feel confident in their purchase decision.</p>
        </div>
        <div class="d-card">
          <h3>Pain Points</h3>
          <p>Overwhelmed by choices, cautious of unreliable sites, struggling to locate crucial details like dimensions or warranties.</p>
        </div>
      </div>
    </section>

    <section id="detail-roles">
      <h2>Roles & Responsibilities</h2>
      <div class="d-card d-card-highlight detail-spacer-sm">
        <h3 class="accent-heading">Lead Designer — Fredy Yanes</h3>
        <p>Oversaw all project phases from discovery to development.</p>
      </div>
      <div class="d-stack">
        ${[
          ['UX Research & Strategy', 'Addressed client pain points, defined user personas, and analyzed competitors like IKEA and Wayfair.'],
          ['Information Architecture', 'Revamped the sitemap and designed an intuitive navigation system.'],
          ['Visual/UI Design', 'Developed wireframes, high-fidelity mockups, and a comprehensive design system in Figma.'],
          ['Prototyping', 'Built clickable prototypes to test user flows and gather stakeholder feedback.'],
          ['Usability Testing', 'Conducted testing sessions with real users and iterated based on insights.'],
          ['Front-End Development', 'Implemented the design using HTML/CSS, ensuring responsiveness and accessibility.'],
        ].map(([title, desc], i) => `
          <div class="d-card detail-row">
            <span class="step-num">${i+1}</span>
            <div><h3>${title}</h3><p>${desc}</p></div>
          </div>
        `).join('')}
      </div>
    </section>

    <section id="detail-scope">
      <h2>Scope & Constraints</h2>
      <div class="d-grid-2">
        <div class="d-card"><h3>Timeline</h3><p>Completed in a 10-week semester, from concept to coded case study page.</p></div>
        <div class="d-card"><h3>Pages</h3><p>Focused on five essential pages: Home, Shop, Product Detail, About, and Contact.</p></div>
        <div class="d-card"><h3>Platform</h3><p>Hand-coded in HTML, CSS, and JavaScript; original prototype built in Codepen.</p></div>
        <div class="d-card"><h3>Content</h3><p>Existing client photography and placeholder text were used, with original writing for the case study.</p></div>
      </div>
      <div class="d-card d-card-highlight detail-spacer-sm">
        <h3 class="accent-heading">E-commerce Functionality</h3>
        <p>The prototype simulates the purchase process but does not include a live payment gateway.</p>
      </div>
    </section>

    <section id="detail-process">
      <h2>Process & Actions</h2>
      <div class="d-stack">
        <div class="d-card">
          <div class="detail-row">
            <span class="step-num">01</span>
            <div><h3>Discovery</h3><p>Analyzed the client's brief, pinpointing 7 user pain points and conducting a visual audit of three competitors to uncover industry standards and opportunities.</p></div>
          </div>
        </div>
        <div class="d-card">
          <div class="detail-row">
            <span class="step-num">02</span>
            <div>
              <h3>Information Architecture & Wireframing</h3>
              <p>Developed a new sitemap for enhanced content organization and created low-fidelity wireframes in Whimsical, exploring three layout ideas for the homepage and product pages.</p>
              <img src="https://i.pinimg.com/736x/34/16/67/34166772b50f8c2245ceed60b5da7f94.jpg" alt="Wireframe sketch" class="detail-image">
            </div>
          </div>
        </div>
        <div class="d-card">
          <div class="detail-row">
            <span class="step-num">03</span>
            <div>
              <h3>Visual Design & Branding</h3>
              <p>Crafted a mood board for a fresh visual approach, resulting in high-fidelity mockups in Figma featuring a calming color scheme and modern typography.</p>
              <img src="https://i.pinimg.com/736x/9d/b1/10/9db11092163b5cdf0224dbdc8e396cc5.jpg" alt="Visual design" class="lightbox-trigger detail-image">
            </div>
          </div>
        </div>
        <div class="d-card">
          <div class="detail-row">
            <span class="step-num">04</span>
            <div>
              <h3>Prototyping</h3>
              <p>Transformed mockups into a clickable Figma prototype for testing user flows and gathering stakeholder feedback.</p>
              <div class="detail-image-grid">
                <img src="https://i.pinimg.com/474x/1d/bf/7b/1dbf7b8fe915975c0d530ae60ba0a26d.jpg" alt="Prototype 1" class="lightbox-trigger detail-image">
                <img src="https://i.pinimg.com/1200x/f6/c7/32/f6c732955479de00de8da776da15a965.jpg" alt="Prototype 2" class="lightbox-trigger detail-image">
              </div>
            </div>
          </div>
        </div>
        <div class="d-card">
          <div class="detail-row">
            <span class="step-num">05</span>
            <div>
              <h3>Development</h3>
              <p>Built the final website using HTML, CSS, and JavaScript, ensuring responsiveness and accessibility across all devices.</p>
              <img src="https://i.pinimg.com/736x/39/8c/7f/398c7ffafd87cc3fce4d93a5570d7635.jpg" alt="Final site" class="lightbox-trigger detail-image">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="detail-outcome">
      <h2>Outcome & Takeaways</h2>
      <div class="d-card d-card-highlight detail-spacer-sm">
        <h3 class="accent-heading">Final Product</h3>
        <p>A modern and responsive 5-page website prototype that directly addresses the seven pain points of the current user base. Clean, intuitive design with clear visual hierarchy and an easy path to the product.</p>
        <p class="detail-spacer-sm">The design positions Belfast Discount Beds as a trustworthy, modern alternative to existing competitors in the Belfast market.</p>
        <a href="https://valenciawebstudio.com/janelle2143/students/martinez-yanes/p1-final/index.html" target="_blank" class="btn-primary detail-spacer-sm">View Live Website →</a>
      </div>
      <div class="d-stack">
        <div class="d-card">
          <div class="detail-row">
            <span class="step-num">1</span>
            <div><h3>Key Takeaway</h3><p>A methodical, problem-focused approach to design yields better and more defensible results. A well-designed product has a much greater chance of success than one that simply looks good.</p></div>
          </div>
        </div>
        <div class="d-card">
          <div class="detail-row">
            <span class="step-num">2</span>
            <div><h3>Key Takeaway</h3><p>User feedback is invaluable. Usability testing revealed a critical flaw in my initial filter design that I would not have caught on my own.</p></div>
          </div>
        </div>
        <div class="d-card">
          <h3>Next Steps</h3>
          <ul class="detail-list">
            ${[
              'Conduct further usability testing with a larger user base',
              'Implement analytics to track user behavior and conversion rates',
              'Develop a fully functional e-commerce backend with payment integration',
              'Continue iterating based on real user feedback and data',
            ].map(s => `<li><span>→</span>${s}</li>`).join('')}
          </ul>
        </div>
      </div>
    </section>

    <section class="detail-center">
      <p class="detail-eyebrow">Explore more work</p>
      <button id="back-to-portfolio-btn" class="btn-secondary">View Full Portfolio →</button>
    </section>
  `;
}

function attachDetailEvents() {
  const fc = qs('#flip-card', detailMain);
  if (fc) fc.addEventListener('click', () => qs('.flip-card-inner', fc).classList.toggle('flipped'));

  qsa('.lightbox-trigger', detailMain).forEach(img => {
    img.addEventListener('click', e => { e.stopPropagation(); lightboxImg.src = img.src; lightbox.classList.remove('hidden'); });
  });

  const tabBtns = qsa('.tab-btn', detailMain);
  const tabPanels = qsa('.tab-panel', detailMain);
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.add('hidden'));
      btn.classList.add('active');
      qs(`#${btn.dataset.tab}`, detailMain)?.classList.remove('hidden');
    });
  });

  qsa('[data-detail-section]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = qs(`#detail-${btn.dataset.detailSection}`, detailMain);
      if (target) detailMain.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
      qs('#detail-mobile-menu')?.classList.add('hidden');
    });
  });

  qs('#detail-mobile-menu-btn')?.addEventListener('click', () =>
    qs('#detail-mobile-menu')?.classList.toggle('hidden'));

  qs('#back-to-portfolio-btn', detailMain)?.addEventListener('click', () => {
    detailOverlay.classList.add('hidden');
    document.body.style.overflow = '';
    const s = qs('#more-projects');
    if (s) window.scrollTo({ top: s.offsetTop - qs('#main-nav').offsetHeight, behavior: 'smooth' });
  });
}

function setupDetailScrollspy() {
  const sectionIds = ['overview','problem','research','users','roles','scope','process','outcome'];
  const progressBar = qs('#detail-progress-bar');
  detailMain.addEventListener('scroll', () => {
    const scrollTop = detailMain.scrollTop;
    const scrollable = detailMain.scrollHeight - detailMain.clientHeight;
    if (progressBar && scrollable > 0) {
      progressBar.style.width = ((scrollTop / scrollable) * 100).toFixed(1) + '%';
    }
    let current = sectionIds[0];
    for (const id of sectionIds) {
      const el = qs(`#detail-${id}`, detailMain);
      if (el && detailMain.scrollTop >= el.offsetTop - 80) current = id;
    }
    qsa('.detail-nav-btn').forEach(b => b.classList.toggle('active', b.dataset.detailSection === current));
    qsa('.detail-mobile-link').forEach(b => b.classList.toggle('active', b.dataset.detailSection === current));
  }, { passive: true });
}

qs('#view-project-btn').addEventListener('click', () => {
  detailOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  detailMain.innerHTML = buildDetailHTML();
  enhanceGlowButtons(detailMain);
  translateTextNodes(detailOverlay);
  attachDetailEvents();
  setupDetailScrollspy();
  detailMain.scrollTop = 0;
});

detailBack.addEventListener('click', () => {
  detailOverlay.classList.add('hidden');
  document.body.style.overflow = '';
});

scrollTopBtn.addEventListener('click', () => detailMain.scrollTo({ top: 0, behavior: 'smooth' }));
detailMain.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', detailMain.scrollTop > 400);
}, { passive: true });

lightboxClose.addEventListener('click', () => lightbox.classList.add('hidden'));
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.add('hidden'); });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    lightbox.classList.add('hidden');
    closeModal();
    detailOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }
});
