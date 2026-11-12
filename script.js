/* =============================================================
   script.js – Fredy J Yanes Portfolio (Enhanced)
   ============================================================= */

// ==================== DATA ====================
const moreProjects = [
  {
    title: "VersaEmerge: Paint It Black",
    description: "Five-page band website redesigned around the song \"Paint It Black\" by VersaEmerge, built for my Interactive Graphic Design classes at Valencia College and published live on GitHub Pages.",
    category: "Web Design",
    image: "images/versaemerge/cover-devices-mockup.webp",
    details: {
      overview: "I redesigned the VersaEmerge band website around a single song, \"Paint It Black.\" The brief asked for a site that tells the song's story through imagery and is easy to navigate. The finished site has five connected pages (Home, The Story, The Band, Tours and a Merch store) in one gothic visual system: dark forest and corridor photography, red-to-pink gradients and glass panels.",
      role: "UI/UX Designer & Front-End Developer – I designed the layouts, type and color in Figma, then moved the code into its own GitHub repository and built each page in React and TypeScript.",
      tools: ["Figma", "Figma Make", "React", "TypeScript", "Tailwind CSS", "Vite", "GitHub Pages"],
      challenge: "The project started as a two-page prototype that only worked inside the Figma preview. The Story, Band and Merch links did nothing, several buttons were only for show, and some photos weighed up to 4.9 MB. I had to turn a good-looking mockup into a real website a fan could use on any device.",
      solution: "I kept the visual system the same on every page and designed each new page around what a fan does next: hear the song, meet the band, find a show or buy a shirt. Each page went in as its own reviewed update, and the site publishes itself to GitHub Pages every time I make a change.",
      processTitle: "From Prototype to Live Site",
      stats: [
        { value: "2 → 5", label: "pages live online" },
        { value: "6 → 17", label: "tour dates in one list" },
        { value: "0 → 3", label: "products you can add to a cart" },
        { value: "4.9 MB → 67 KB", label: "band photo size" }
      ],
      updates: [
        { title: "Published the site", text: "I exported the design from Figma to a GitHub repository and set up automatic publishing, so every update goes live on its own and my class can review the real site at any time." },
        { title: "Told the song's story", text: "The new Story page is built around the \"Paint It Black\" concept and the song's Rolling Stones roots: a forest hero, a Spotify player, a pull quote from the lyric that inspired the site and a paint-drip image frame that ties the visuals to the title. Before, the Story link fell back to the homepage." },
        { title: "Gave the band a page", text: "I grew the homepage's band section into a full Band page with member profiles, a timeline of nine milestones from 2006 to 2025 and a discography list." },
        { title: "Redesigned Tours", text: "Six identical ticket cards became a tour hub: a \"Paint It Black World Tour\" hero with a live countdown, 17 dates in one list with status badges, upcoming and past tabs, a region filter, a city search, three VIP packages and an FAQ. Dates and prices are placeholder content." },
        { title: "Opened a merch store", text: "The homepage's merch button used to do nothing. Now it opens a store with product cards, a quick-view window, a size guide and a working cart. The add-to-cart button shows the running price and asks for a size first, and checkout is labeled \"opens soon\" until a real shop is connected." },
        { title: "Put the logo on apparel", text: "I placed the new Halo Wings logo on a hoodie and a trucker hat to test it as a product graphic, large across a chest and small on a cap panel. It reads clearly at both sizes, so both mockups became the store's lead products." },
        { title: "Made it light and mobile", text: "Every new page works on phones. I converted the heaviest photos to WebP: the band photo went from 4.9 MB to 67 KB with no visible loss, and each product photo is 10 to 42 KB." }
      ],
      gallery: [
        { src: "images/versaemerge/phones.webp", alt: "Four phone screens of the VersaEmerge site: the Story, Band, Tours and Merch pages", caption: "On a phone: the Story, Band, Tours and Merch pages." },
        { src: "images/versaemerge/pages.webp", alt: "Four desktop pages of the VersaEmerge site: The Story, The Band, Tours and the Merch store", caption: "The new pages on desktop: The Story, The Band, Tours and the Merch store." },
        { src: "images/versaemerge/shop-flow.webp", alt: "Merch store quick-view window for the Halo Wings Hoodie next to the slide-out cart", caption: "The shopping flow: pick a color, size and quantity in quick view, then check the slide-out cart." },
        { src: "images/versaemerge/logo-apparel.webp", alt: "The Halo Wings logo on a white hoodie and a trucker hat, next to the logo on its own", caption: "The Halo Wings logo on a hoodie and a trucker hat, the store's lead products." }
      ],
      outcome: "A two-page prototype became a five-page website anyone can visit. Every navigation link now opens a real page, and a fan can find a show or fill a cart in a few taps. Building it for real taught me to plan for what a visitor does next, how each page works on a phone and how heavy each image is.",
      link: { href: "https://fredyyanes-hash.github.io/versaemerge/", label: "Visit the Live Site" },
    }
  },
  {
    title: "Cristo Republic Coffee",
    description: "Responsive website for a fictional Salvadoran coffee brand, built for my Interactive Graphic Design classes at Valencia College and refined in 2026 with a front-end shop, a design system pass and a live GitHub Pages launch.",
    category: "Web Design",
    image: "images/cristo/cover-imac-mockup.webp",
    details: {
      overview: "Cristo Republic Coffee is a fictional family coffee brand from the Salvadoran highlands. The six-page site (Home, Shop, Our Coffee, About Us, Blog and a Coffee Club page) tells the brand's story through photography and cultural storytelling, with a shop you can actually click through.",
      role: "UI/UX Designer & Developer – Designed the complete user experience in Figma and Photoshop, then built the site in hand-coded HTML, CSS and JavaScript.",
      tools: ["Figma", "Adobe Photoshop", "HTML/CSS", "JavaScript", "GitHub Pages"],
      challenge: "Create an engaging digital experience that honors Salvadoran coffee traditions while feeling like a real, modern coffee shop online.",
      solution: "Designed an immersive scrolling experience with rich photography, cultural narratives, and a warm earthy color palette inspired by coffee and Salvadoran landscapes.",
      processTitle: "From Critique to Redesign",
      stats: [
        { value: "0 → 12", label: "coffees you can add to a cart" },
        { value: "3.6 → 6.3:1", label: "button text contrast" },
        { value: "119 → 5 MB", label: "total photo weight" },
        { value: "8", label: "revision rounds" }
      ],
      updates: [
        { title: "Started with an honest critique", text: "I opened the redesign with a full UX/UI review of every page comp and the code. The site looked premium but couldn't sell coffee: no product could be added to a cart, white-on-rose text failed contrast at 3.6:1, photos weighed 3 to 16 MB each, and many links went nowhere. I ranked the problems by impact on sales and kept what was already working: the real photography, a consistent header and footer, and a short nav." },
        { title: "Made it shoppable", text: "I added a cart that remembers items between pages, one product template that serves all 12 coffees with grind and quantity options, and an Add to Cart button that is always visible instead of hover-only, which phones can't do. The shop gained category filters, a price sort and tasting-note chips, and a new Coffee Club page makes the case for the subscription using only facts from the site, with no invented reviews or terms." },
        { title: "Built a design system", text: "I cut the type to two faces, Bebas Neue for page titles and Montserrat for everything else, with one size per heading level. Buttons moved to a deeper rose with an espresso-on-gold hover, and both pass WCAG AA. Each page gets one photo-overlay hero, every other section puts the photo beside the text, every page shares one left edge, and one family of thin line icons runs throughout. All of it lives in its own stylesheet, so the original class work stays intact." },
        { title: "Designed for the phone", text: "Before, the nav links disappeared on small screens. Now a hamburger opens a full-screen menu, hero text sits on a soft shade so the photo stays visible, split sections stack cleanly, and everything was tested at phone, tablet and desktop widths." },
        { title: "Iterated, and reversed when it mattered", text: "The work ran in eight revision rounds, each one backed up first and tested in the browser after. In one round I replaced the Shop hero photo and put the headline in a frosted box. In the next I brought the original photo back and swapped the box for a side shade, because the text was covering the photography that makes the brand." },
        { title: "Shipped it", text: "I compressed the published photos from 119 MB to 5 MB and the Our Coffee hero video from 107 MB to 0.9 MB, then launched the site on GitHub Pages." }
      ],
      gallery: [
        { src: "images/cristo/design-system.webp", alt: "Cristo Republic Coffee design system: color palette with contrast checks, Bebas Neue and Montserrat type, pill buttons and layout rules", caption: "The design system: five brand colors checked for WCAG contrast, two typefaces, pill buttons and a short set of layout rules." },
        { src: "images/cristo/phone-mockups.webp", alt: "Three phone screens of the site: the home page, the full-screen menu and the shopping cart", caption: "On a phone: the home page, the full-screen menu and the cart." },
        { src: "images/cristo/hero-after-desktop.webp", alt: "The six pages of the finished site on desktop: Home, Shop, Coffee Club, Our Coffee, About Us and Blog", caption: "The finished site on desktop: Home, Shop, Coffee Club, Our Coffee, About Us and Blog." }
      ],
      outcome: "A good-looking brochure became a store people can shop. A first-time visitor now learns what the brand sells, why it's different and how to buy it on the first screen, on any device, and the site is live for anyone to try.",
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
  'Visit the Live Site': 'Ver el sitio en vivo'
});

Object.assign(enToEs, {
  'From Critique to Redesign': 'De la crítica al rediseño',
  'The Process': 'El proceso',
  'coffees you can add to a cart': 'cafés que puedes agregar al carrito',
  'button text contrast': 'contraste del texto en botones',
  'total photo weight': 'peso total de las fotos',
  'revision rounds': 'rondas de revisión',
  'Started with an honest critique': 'Empecé con una crítica honesta',
  'I opened the redesign with a full UX/UI review of every page comp and the code. The site looked premium but couldn\'t sell coffee: no product could be added to a cart, white-on-rose text failed contrast at 3.6:1, photos weighed 3 to 16 MB each, and many links went nowhere. I ranked the problems by impact on sales and kept what was already working: the real photography, a consistent header and footer, and a short nav.': 'Comencé el rediseño con una revisión UX/UI completa de cada página y del código. El sitio se veía premium pero no podía vender café: ningún producto se podía agregar al carrito, el texto blanco sobre rosa no pasaba el contraste con 3.6:1, las fotos pesaban de 3 a 16 MB cada una y muchos enlaces no llevaban a ninguna parte. Ordené los problemas según su impacto en las ventas y conservé lo que ya funcionaba: la fotografía real, un encabezado y pie de página consistentes y un menú corto.',
  'Made it shoppable': 'Lo hice comprable',
  'I added a cart that remembers items between pages, one product template that serves all 12 coffees with grind and quantity options, and an Add to Cart button that is always visible instead of hover-only, which phones can\'t do. The shop gained category filters, a price sort and tasting-note chips, and a new Coffee Club page makes the case for the subscription using only facts from the site, with no invented reviews or terms.': 'Agregué un carrito que recuerda los productos entre páginas, una sola plantilla de producto para los 12 cafés con opciones de molienda y cantidad, y un botón Agregar al carrito siempre visible en lugar de solo al pasar el cursor, algo que los teléfonos no pueden hacer. La tienda ganó filtros por categoría, orden por precio y etiquetas de notas de sabor, y una nueva página del Coffee Club presenta la suscripción usando solo datos del sitio, sin reseñas ni condiciones inventadas.',
  'Built a design system': 'Creé un sistema de diseño',
  'I cut the type to two faces, Bebas Neue for page titles and Montserrat for everything else, with one size per heading level. Buttons moved to a deeper rose with an espresso-on-gold hover, and both pass WCAG AA. Each page gets one photo-overlay hero, every other section puts the photo beside the text, every page shares one left edge, and one family of thin line icons runs throughout. All of it lives in its own stylesheet, so the original class work stays intact.': 'Reduje la tipografía a dos familias, Bebas Neue para los títulos de página y Montserrat para todo lo demás, con un solo tamaño por nivel de encabezado. Los botones pasaron a un rosa más profundo con hover café sobre dorado, y ambos cumplen WCAG AA. Cada página tiene una sola portada con foto de fondo, las demás secciones ponen la foto junto al texto, todas las páginas comparten el mismo margen izquierdo y una sola familia de íconos de línea recorre el sitio. Todo vive en su propia hoja de estilos, así el trabajo original de la clase queda intacto.',
  'Designed for the phone': 'Diseñado para el teléfono',
  'Before, the nav links disappeared on small screens. Now a hamburger opens a full-screen menu, hero text sits on a soft shade so the photo stays visible, split sections stack cleanly, and everything was tested at phone, tablet and desktop widths.': 'Antes, los enlaces del menú desaparecían en pantallas pequeñas. Ahora un menú hamburguesa abre un menú a pantalla completa, el texto de la portada descansa sobre una sombra suave para que la foto siga visible, las secciones divididas se apilan bien y todo se probó en teléfono, tableta y computadora.',
  'Iterated, and reversed when it mattered': 'Iteré, y di marcha atrás cuando importaba',
  'The work ran in eight revision rounds, each one backed up first and tested in the browser after. In one round I replaced the Shop hero photo and put the headline in a frosted box. In the next I brought the original photo back and swapped the box for a side shade, because the text was covering the photography that makes the brand.': 'El trabajo se hizo en ocho rondas de revisión, cada una respaldada antes y probada en el navegador después. En una ronda cambié la foto de portada de la Tienda y puse el título en una caja esmerilada. En la siguiente recuperé la foto original y cambié la caja por una sombra lateral, porque el texto tapaba la fotografía que define la marca.',
  'Shipped it': 'Lo publiqué',
  'I compressed the published photos from 119 MB to 5 MB and the Our Coffee hero video from 107 MB to 0.9 MB, then launched the site on GitHub Pages.': 'Comprimí las fotos publicadas de 119 MB a 5 MB y el video de portada de Nuestro Café de 107 MB a 0.9 MB, y luego publiqué el sitio en GitHub Pages.',
  'A good-looking brochure became a store people can shop. A first-time visitor now learns what the brand sells, why it\'s different and how to buy it on the first screen, on any device, and the site is live for anyone to try.': 'Un folleto bonito se convirtió en una tienda donde la gente puede comprar. Quien visita por primera vez ahora entiende qué vende la marca, qué la hace distinta y cómo comprar desde la primera pantalla, en cualquier dispositivo, y el sitio está en línea para que cualquiera lo pruebe.'
});

Object.assign(enToEs, {
  'The design system: five brand colors checked for WCAG contrast, two typefaces, pill buttons and a short set of layout rules.': 'El sistema de diseño: cinco colores de marca verificados con el contraste WCAG, dos tipografías, botones redondeados y un conjunto breve de reglas de diseño.',
  'On a phone: the home page, the full-screen menu and the cart.': 'En el teléfono: la página de inicio, el menú a pantalla completa y el carrito.',
  'The finished site on desktop: Home, Shop, Coffee Club, Our Coffee, About Us and Blog.': 'El sitio terminado en computadora: Inicio, Tienda, Coffee Club, Nuestro Café, Nosotros y Blog.'
});

Object.assign(enToEs, {
  'VersaEmerge: Paint It Black': 'VersaEmerge: Paint It Black',
  'Five-page band website redesigned around the song "Paint It Black" by VersaEmerge, built for my Interactive Graphic Design classes at Valencia College and published live on GitHub Pages.': 'Sitio web de cinco páginas para una banda, rediseñado en torno a la canción "Paint It Black" de VersaEmerge, creado en mis clases de Diseño Gráfico Interactivo en Valencia College y publicado en GitHub Pages.',
  'I redesigned the VersaEmerge band website around a single song, "Paint It Black." The brief asked for a site that tells the song\'s story through imagery and is easy to navigate. The finished site has five connected pages (Home, The Story, The Band, Tours and a Merch store) in one gothic visual system: dark forest and corridor photography, red-to-pink gradients and glass panels.': 'Rediseñé el sitio web de la banda VersaEmerge en torno a una sola canción, "Paint It Black". El encargo pedía un sitio que contara la historia de la canción a través de imágenes y que fuera fácil de navegar. El sitio terminado tiene cinco páginas conectadas (Inicio, La Historia, La Banda, Giras y una tienda de Merch) con un solo sistema visual gótico: fotografía de bosques y pasillos oscuros, degradados de rojo a rosa y paneles de vidrio.',
  'UI/UX Designer & Front-End Developer – I designed the layouts, type and color in Figma, then moved the code into its own GitHub repository and built each page in React and TypeScript.': 'Diseñador UI/UX y desarrollador front-end: diseñé las composiciones, la tipografía y el color en Figma, luego pasé el código a su propio repositorio de GitHub y construí cada página en React y TypeScript.',
  'The project started as a two-page prototype that only worked inside the Figma preview. The Story, Band and Merch links did nothing, several buttons were only for show, and some photos weighed up to 4.9 MB. I had to turn a good-looking mockup into a real website a fan could use on any device.': 'El proyecto empezó como un prototipo de dos páginas que solo funcionaba dentro de la vista previa de Figma. Los enlaces de Story, Band y Merch no hacían nada, varios botones eran solo decorativos y algunas fotos pesaban hasta 4.9 MB. Tenía que convertir una maqueta atractiva en un sitio web real que un fan pudiera usar en cualquier dispositivo.',
  'I kept the visual system the same on every page and designed each new page around what a fan does next: hear the song, meet the band, find a show or buy a shirt. Each page went in as its own reviewed update, and the site publishes itself to GitHub Pages every time I make a change.': 'Mantuve el mismo sistema visual en todas las páginas y diseñé cada página nueva en torno a lo siguiente que hace un fan: escuchar la canción, conocer a la banda, encontrar un concierto o comprar una camiseta. Cada página entró como una actualización revisada por separado, y el sitio se publica solo en GitHub Pages cada vez que hago un cambio.',
  'From Prototype to Live Site': 'Del prototipo al sitio en vivo',
  'pages live online': 'páginas publicadas en línea',
  'tour dates in one list': 'fechas de gira en una sola lista',
  'products you can add to a cart': 'productos que puedes agregar al carrito',
  'band photo size': 'peso de la foto de la banda',
  'Published the site': 'Publiqué el sitio',
  'I exported the design from Figma to a GitHub repository and set up automatic publishing, so every update goes live on its own and my class can review the real site at any time.': 'Exporté el diseño de Figma a un repositorio de GitHub y configuré la publicación automática, así cada actualización sale en vivo por sí sola y mi clase puede revisar el sitio real en cualquier momento.',
  'Told the song\'s story': 'Conté la historia de la canción',
  'The new Story page is built around the "Paint It Black" concept and the song\'s Rolling Stones roots: a forest hero, a Spotify player, a pull quote from the lyric that inspired the site and a paint-drip image frame that ties the visuals to the title. Before, the Story link fell back to the homepage.': 'La nueva página Story gira en torno al concepto de "Paint It Black" y a las raíces de la canción en los Rolling Stones: un encabezado con un bosque, un reproductor de Spotify, una cita destacada de la letra que inspiró el sitio y un marco de pintura que gotea y conecta las imágenes con el título. Antes, el enlace de Story regresaba a la página de inicio.',
  'Gave the band a page': 'Le di una página a la banda',
  'I grew the homepage\'s band section into a full Band page with member profiles, a timeline of nine milestones from 2006 to 2025 and a discography list.': 'Convertí la sección de la banda de la página de inicio en una página completa con perfiles de los integrantes, una línea de tiempo de nueve momentos clave de 2006 a 2025 y una discografía.',
  'Redesigned Tours': 'Rediseñé la página de giras',
  'Six identical ticket cards became a tour hub: a "Paint It Black World Tour" hero with a live countdown, 17 dates in one list with status badges, upcoming and past tabs, a region filter, a city search, three VIP packages and an FAQ. Dates and prices are placeholder content.': 'Seis tarjetas de boletos idénticas se convirtieron en un centro de giras: un encabezado de la "Paint It Black World Tour" con cuenta regresiva en vivo, 17 fechas en una sola lista con etiquetas de estado, pestañas de próximos y pasados, un filtro por región, una búsqueda por ciudad, tres paquetes VIP y preguntas frecuentes. Las fechas y los precios son contenido de muestra.',
  'Opened a merch store': 'Abrí una tienda de merch',
  'The homepage\'s merch button used to do nothing. Now it opens a store with product cards, a quick-view window, a size guide and a working cart. The add-to-cart button shows the running price and asks for a size first, and checkout is labeled "opens soon" until a real shop is connected.': 'El botón de merch de la página de inicio antes no hacía nada. Ahora abre una tienda con tarjetas de producto, una ventana de vista rápida, una guía de tallas y un carrito que funciona. El botón de agregar al carrito muestra el precio total y pide primero una talla, y el pago dice "abre pronto" hasta que se conecte una tienda real.',
  'Put the logo on apparel': 'Llevé el logo a la ropa',
  'I placed the new Halo Wings logo on a hoodie and a trucker hat to test it as a product graphic, large across a chest and small on a cap panel. It reads clearly at both sizes, so both mockups became the store\'s lead products.': 'Coloqué el nuevo logo Halo Wings en una sudadera y una gorra trucker para probarlo como gráfico de producto, grande en el pecho y pequeño en el frente de la gorra. Se lee con claridad en ambos tamaños, así que las dos maquetas se convirtieron en los productos principales de la tienda.',
  'Made it light and mobile': 'Lo hice ligero y móvil',
  'Every new page works on phones. I converted the heaviest photos to WebP: the band photo went from 4.9 MB to 67 KB with no visible loss, and each product photo is 10 to 42 KB.': 'Cada página nueva funciona en el teléfono. Convertí las fotos más pesadas a WebP: la foto de la banda pasó de 4.9 MB a 67 KB sin pérdida visible, y cada foto de producto pesa entre 10 y 42 KB.',
  'On a phone: the Story, Band, Tours and Merch pages.': 'En el teléfono: las páginas Story, Band, Tours y Merch.',
  'The new pages on desktop: The Story, The Band, Tours and the Merch store.': 'Las páginas nuevas en computadora: The Story, The Band, Tours y la tienda de Merch.',
  'The shopping flow: pick a color, size and quantity in quick view, then check the slide-out cart.': 'El flujo de compra: eliges color, talla y cantidad en la vista rápida y luego revisas el carrito lateral.',
  'The Halo Wings logo on a hoodie and a trucker hat, the store\'s lead products.': 'El logo Halo Wings en una sudadera y una gorra trucker, los productos principales de la tienda.',
  'A two-page prototype became a five-page website anyone can visit. Every navigation link now opens a real page, and a fan can find a show or fill a cart in a few taps. Building it for real taught me to plan for what a visitor does next, how each page works on a phone and how heavy each image is.': 'Un prototipo de dos páginas se convirtió en un sitio web de cinco páginas que cualquiera puede visitar. Cada enlace de navegación ahora abre una página real, y un fan puede encontrar un concierto o llenar un carrito en pocos toques. Construirlo de verdad me enseñó a planear lo siguiente que hace un visitante, cómo funciona cada página en el teléfono y cuánto pesa cada imagen.'
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
  if (d.updates)   html += `<h3>${d.processTitle || 'The Process'}</h3>`;
  if (d.stats)     html += `<div class="modal-stats">${d.stats.map(st=>`<div class="modal-stat"><span class="modal-stat-value">${st.value}</span><span class="modal-stat-label">${st.label}</span></div>`).join('')}</div>`;
  if (d.updates)   html += `<ul class="modal-updates">${d.updates.map(u=>`<li><h4>${u.title}</h4><p>${u.text}</p></li>`).join('')}</ul>`;
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
