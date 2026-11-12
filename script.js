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
    description: "Responsive website for a fictional Salvadoran coffee brand, built for my Interactive Graphic Design classes at Valencia College and refined in 2026 with a front-end shop, a design system pass and a live GitHub Pages launch.",
    category: "Web Design",
    image: "https://i.pinimg.com/736x/1d/ec/ed/1deced264a429964847ae24e541e3692.jpg",
    details: {
      overview: "Cristo Republic Coffee is a fictional family coffee brand from the Salvadoran highlands. The six-page site (Home, Shop, Our Coffee, About Us, Blog and a Coffee Club page) tells the brand's story through photography and cultural storytelling, with a shop you can actually click through.",
      role: "UI/UX Designer & Developer – Designed the complete user experience in Figma and Photoshop, then built the site in hand-coded HTML, CSS and JavaScript.",
      tools: ["Figma", "Adobe Photoshop", "HTML/CSS", "JavaScript", "GitHub Pages"],
      challenge: "Create an engaging digital experience that honors Salvadoran coffee traditions while feeling like a real, modern coffee shop online.",
      solution: "Designed an immersive scrolling experience with rich photography, cultural narratives, and a warm earthy color palette inspired by coffee and Salvadoran landscapes.",
      updates: [
        { title: "A design system layer", text: "I added one stylesheet that loads after the original class CSS, so the earlier work stays intact. It sets Bebas Neue for page titles and Montserrat for everything else, rose pill buttons with a gold hover, one shared left edge on every page, a mobile menu and a matching set of line icons." },
        { title: "A shop you can click through", text: "A small JavaScript catalog now drives the shop: 12 products, product pages generated from one template, category filters and price sort, a cart that remembers your picks, and a Coffee Club subscription page. It is a front-end demo for a fictional brand, so there is no real checkout." },
        { title: "Launched on GitHub Pages", text: "I published the site so it can be viewed live. That meant shrinking photos from as much as 16 MB down to web sizes, replacing product photos that were linked from other sites with local copies, and clearing a stuck deploy queue that had kept the live site on an old version." },
        { title: "Hero text that reads cleanly", text: "Every page hero now uses the same 600px text column, balanced headline wraps and the same spacing, so titles no longer break awkwardly and \"El Salvador\" always stays on one line." }
      ],
      gallery: [
        { src: "images/cristo/hero-before-desktop.webp", alt: "The six page heroes before the update, with headlines wrapping unevenly", caption: "Before: each hero wrapped its text differently." },
        { src: "images/cristo/hero-after-desktop.webp", alt: "The six page heroes after the update, with one consistent text column", caption: "After: one text column and balanced headlines on every page." },
        { src: "images/cristo/hero-after-phone.webp", alt: "The six page heroes on a phone after the update", caption: "The same heroes on a phone." }
      ],
      outcome: "A complete, responsive brand site that holds up on phones and desktops and is live for anyone to try.",
      link: { href: "https://fredyyanes-hash.github.io/cristo-republic-coffee/", label: "Visit the Live Site" },
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
  'E-commerce Redesign': 'Rediseño E-commerce',
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
  'Toggle menu': 'Abrir o cerrar menú',
  'Display settings': 'Opciones de visualización',
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
};

Object.assign(enToEs, {
  'A complete integrated marketing campaign for the romantic comedy film "Alpha Beta Gamma". The project encompassed multiple deliverables including theatrical posters, social media content, and outdoor advertising to build anticipation and drive ticket sales.': 'Una campaña integral de marketing para la comedia romántica "Alpha Beta Gamma". El proyecto incluyó múltiples entregables, como pósters teatrales, contenido para redes sociales y publicidad exterior para generar expectativa e impulsar ventas.',
  'Lead Designer – Responsible for developing the visual identity, creating all promotional materials, and ensuring brand consistency across all touchpoints.': 'Diseñador líder: responsable de desarrollar la identidad visual, crear todos los materiales promocionales y asegurar consistencia de marca en cada punto de contacto.',
  'Create a cohesive visual identity that captures the playful yet romantic tone of the film while standing out in a crowded entertainment market.': 'Crear una identidad visual cohesiva que capture el tono juguetón y romántico de la película mientras destaca en un mercado de entretenimiento saturado.',
  "Developed a vibrant color palette and dynamic composition style featuring the main characters in engaging scenarios. Used bold typography and energetic layouts to convey the film's comedic nature.": 'Desarrollé una paleta vibrante y un estilo de composición dinámico con los personajes principales en escenarios llamativos. Usé tipografía audaz y layouts enérgicos para comunicar el carácter cómico de la película.',
  'The campaign successfully generated buzz across social media platforms and contributed to strong opening weekend attendance.': 'La campaña generó conversación en redes sociales y contribuyó a una asistencia sólida durante el fin de semana de estreno.',
  'Designed an immersive scrolling experience with rich photography, cultural narratives, and a warm earthy color palette inspired by coffee and Salvadoran landscapes.': 'Diseñé una experiencia inmersiva con fotografía rica, narrativa cultural y una paleta cálida inspirada en el café y los paisajes salvadoreños.',
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
});

Object.assign(enToEs, {
  'Web Design · UX · Front-End': 'Diseño Web · UX · Front-End',
  'Discount Beds Belfast': 'Discount Beds Belfast',
  'A local bed shop with a dated website that was hard to use on phones and gave shoppers little reason to trust it.': 'Una tienda local de camas con un sitio web anticuado, difícil de usar en el teléfono y que daba pocos motivos a los compradores para confiar.',
  'I first redesigned it as a ten-week class project at Valencia College, from research and Figma mockups to a coded prototype. In 2026 I rebuilt it as a complete nine-page responsive site, with a new shop menu, fuller product pages, and delivery, returns and FAQ pages.': 'Primero lo rediseñé como un proyecto de clase de diez semanas en Valencia College, desde la investigación y los mockups en Figma hasta un prototipo codificado. En 2026 lo reconstruí como un sitio responsivo completo de nueve páginas, con un nuevo menú de tienda, páginas de producto más completas y páginas de entregas, devoluciones y preguntas frecuentes.'
});

Object.assign(enToEs, {
  'Responsive website for a fictional Salvadoran coffee brand, built for my Interactive Graphic Design classes at Valencia College and refined in 2026 with a front-end shop, a design system pass and a live GitHub Pages launch.': 'Sitio web responsive para una marca ficticia de café salvadoreño, creado en mis clases de Diseño Gráfico Interactivo en Valencia College y mejorado en 2026 con una tienda front-end, un sistema de diseño y su publicación en GitHub Pages.',
  'Cristo Republic Coffee is a fictional family coffee brand from the Salvadoran highlands. The six-page site (Home, Shop, Our Coffee, About Us, Blog and a Coffee Club page) tells the brand\'s story through photography and cultural storytelling, with a shop you can actually click through.': 'Cristo Republic Coffee es una marca familiar ficticia de café de las montañas de El Salvador. El sitio de seis páginas (Inicio, Tienda, Nuestro Café, Nosotros, Blog y Coffee Club) cuenta la historia de la marca con fotografía y narrativa cultural, y tiene una tienda que se puede recorrer de verdad.',
  'UI/UX Designer & Developer – Designed the complete user experience in Figma and Photoshop, then built the site in hand-coded HTML, CSS and JavaScript.': 'Diseñador UI/UX y desarrollador: diseñé la experiencia completa en Figma y Photoshop y luego construí el sitio a mano en HTML, CSS y JavaScript.',
  'Create an engaging digital experience that honors Salvadoran coffee traditions while feeling like a real, modern coffee shop online.': 'Crear una experiencia digital atractiva que honre las tradiciones del café salvadoreño y se sienta como una tienda de café moderna y real en línea.',
  'What I Improved': 'Lo que mejoré',
  'A design system layer': 'Una capa de sistema de diseño',
  'I added one stylesheet that loads after the original class CSS, so the earlier work stays intact. It sets Bebas Neue for page titles and Montserrat for everything else, rose pill buttons with a gold hover, one shared left edge on every page, a mobile menu and a matching set of line icons.': 'Agregué una hoja de estilos que se carga después del CSS original de la clase, para que el trabajo anterior quede intacto. Define Bebas Neue para los títulos y Montserrat para todo lo demás, botones redondeados rosados con hover dorado, un mismo margen izquierdo en cada página, un menú móvil y un conjunto coherente de íconos de línea.',
  'A shop you can click through': 'Una tienda que se puede recorrer',
  'A small JavaScript catalog now drives the shop: 12 products, product pages generated from one template, category filters and price sort, a cart that remembers your picks, and a Coffee Club subscription page. It is a front-end demo for a fictional brand, so there is no real checkout.': 'Un pequeño catálogo en JavaScript ahora mueve la tienda: 12 productos, páginas de producto generadas desde una sola plantilla, filtros por categoría y orden por precio, un carrito que recuerda tu selección y una página de suscripción al Coffee Club. Es una demo front-end para una marca ficticia, así que no hay pago real.',
  'Launched on GitHub Pages': 'Publicado en GitHub Pages',
  'I published the site so it can be viewed live. That meant shrinking photos from as much as 16 MB down to web sizes, replacing product photos that were linked from other sites with local copies, and clearing a stuck deploy queue that had kept the live site on an old version.': 'Publiqué el sitio para que se pueda ver en vivo. Eso implicó reducir fotos de hasta 16 MB a tamaños web, reemplazar fotos de productos enlazadas desde otros sitios por copias locales y destrabar una cola de publicación que había dejado el sitio en una versión vieja.',
  'Hero text that reads cleanly': 'Textos de portada que se leen mejor',
  'Every page hero now uses the same 600px text column, balanced headline wraps and the same spacing, so titles no longer break awkwardly and "El Salvador" always stays on one line.': 'Cada portada usa ahora la misma columna de texto de 600px, títulos equilibrados y el mismo espaciado, así que los títulos ya no se cortan de forma extraña y "El Salvador" siempre queda en una sola línea.',
  'Before: each hero wrapped its text differently.': 'Antes: cada portada acomodaba el texto de forma distinta.',
  'After: one text column and balanced headlines on every page.': 'Después: una sola columna de texto y títulos equilibrados en cada página.',
  'The same heroes on a phone.': 'Las mismas portadas en un teléfono.',
  'A complete, responsive brand site that holds up on phones and desktops and is live for anyone to try.': 'Un sitio de marca completo y responsive que funciona bien en teléfonos y computadoras, y está en línea para que cualquiera lo pruebe.',
  'Visit the Live Site': 'Ver el sitio en vivo'
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
  if (d.updates)   html += `<h3>What I Improved</h3><ul class="modal-updates">${d.updates.map(u=>`<li><h4>${u.title}</h4><p>${u.text}</p></li>`).join('')}</ul>`;
  if (d.gallery)   html += `<div class="modal-gallery">${d.gallery.map(g=>`<figure><img src="${g.src}" alt="${g.alt}" loading="lazy"><figcaption>${g.caption}</figcaption></figure>`).join('')}</div>`;
  if (d.outcome)   html += `<h3>Outcome</h3><p>${d.outcome}</p>`;
  if (d.link)      html += `<a href="${d.link.href}" target="_blank" rel="noopener" class="view-project-link modal-link">${d.link.label} <span class="external-icon" aria-hidden="true">↗</span></a>`;
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

// ==================== KEYBOARD ====================
// The Discount Beds Belfast case study now lives on its own page: /discount-beds-belfast/
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
