/* =============================================================
   script.js – Fredy J Yanes Portfolio (Enhanced)
   ============================================================= */

// ==================== DATA ====================
const moreProjects = [
  {
    title: "Corazón Cocina Mexicana",
    description: "Brand refresh and four-page website for Corazón Cocina Mexicana, a family-owned Mexican restaurant in Orlando, built for my Interactive Graphic Design classes at Valencia College and published live on GitHub Pages.",
    category: "Web Design",
    image: "images/corazon/cover-collage.webp",
    details: {
      overview: "Corazón Cocina Mexicana is a real family-owned restaurant in Orlando. I redesigned its website and refreshed its brand while keeping every piece of real content: the family story, hours, address and all 93 menu items. The finished site has four pages (Home, Lunch, Dinner and Bar menus) built on a new vector logo system, the restaurant's own warm colors and a bold, photo-led layout.",
      role: "Brand Designer & Front-End Developer – I set the project goals, art-directed the new logo and turned it into vector files, designed the layouts and a small design system, and built the site in hand-coded HTML, CSS and JavaScript.",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "HTML", "CSS", "JavaScript", "SVG Vector Tracing", "GitHub Pages"],
      challenge: "The original site set thin blue text over busy photos and had no menu preview or ordering path, and the logo was a 484 × 340 px image in colors that didn't fit the food. My first redesign fixed the structure but looked like a template: rounded cards, serif and script type, and Aztec patterns everywhere. My goals were to make it feel high end and authentic without falling into cliché, use fewer images, keep animation light and make it accessible.",
      solution: "I rebuilt every page in plain CSS with no framework. Two typefaces (Oswald for headlines, DM Sans for text), the restaurant's original terracotta, gold, cream and dark brown, flat square cards and menus laid out like a printed menu replaced the template look. The Aztec greca pattern became one small accent line, so the agave and heart logo and real restaurant photos carry the culture.",
      processTitle: "From Template to Brand",
      stats: [
        { value: "PNG → SVG", label: "logo, from a 484 × 340 px image to vectors" },
        { value: "1 → 14", label: "logo files: color, black, white and horizontal" },
        { value: "2 → 0", label: "code libraries loaded from other sites" },
        { value: "0 → 4", label: "pages live online" }
      ],
      updates: [
        { title: "Started from my own goals", text: "I opened the project by listing what was wrong with my first version: it didn't look high end, the cards felt outdated, and I wasn't sure about the Aztec styling, the number of images, the animation or accessibility. Keeping all of the restaurant's real content was the one rule." },
        { title: "Kept the content, changed the look", text: "A script moved all 93 menu items from the old pages, so nothing was retyped. Each menu now reads like a printed menu: two columns, the price on the right and category tabs that stay on screen. Lunch, Dinner and Bar link from solid color blocks instead of more photos." },
        { title: "Redrew the logo", text: "The new mark keeps the agave and the heart, since corazón means heart, in agave gold and terracotta on dark brown. I traced it into vector paths and matched the artwork leaf by leaf, then made 14 files: color, black and white versions, stacked and horizontal, with transparent backgrounds." },
        { title: "Built a mini design system", text: "Six colors checked for contrast, two typefaces, square buttons, a five-star rating and one greca accent line. The horizontal logo fits the header bar, and the white logo anchors the footer next to Instagram, Facebook, Yelp and Google review links." },
        { title: "Put the brand in the restaurant", text: "I placed the logo on a framed wall sign behind a mariachi band, on a bartender's apron and on a server's apron and cap. The color version holds up on a dark wall and the one-color version reads clearly on fabric." },
        { title: "Added motion with restraint", text: "The Lunch and Dinner pages open with a slow, scrolling strip of restaurant photos behind a darker gradient that keeps the headline readable. The motion stops for visitors who ask their device for less motion, and dropping the outside code libraries made the pages lighter." },
        { title: "Published it", text: "I moved the site into a GitHub repository and launched it on GitHub Pages, so every update goes live and anyone can see the real site at any time." }
      ],
      gallery: [
        { src: "images/corazon/devices-mockup.webp", alt: "The Corazón homepage on a laptop and the Lunch menu page on a phone", caption: "The homepage on a laptop and the Lunch menu on a phone." },
        { src: "images/corazon/design-system.webp", alt: "Corazón mini design system: six brand colors with contrast ratios, Oswald and DM Sans type, buttons, a five-star rating, the greca accent and the logo on a server's and a bartender's apron", caption: "The mini design system: colors, type, buttons and the greca accent, with the brand on a server's and a bartender's apron." },
        { src: "images/corazon/logo-system.webp", alt: "Corazón logo system: stacked and horizontal logos in color, black and white on light and dark backgrounds", caption: "The logo system: stacked and horizontal versions in color, black and white." },
        { src: "images/corazon/phones.webp", alt: "Three phone screens of the Corazón site: the Lunch menu, the Dinner menu and the footer", caption: "On a phone: the Lunch and Dinner menus and the footer." }
      ],
      outcome: "A dated restaurant site became a branded, four-page website anyone can visit, with a logo system the restaurant can use from a favicon to a storefront sign. The project taught me that a brand depends on small details, and that setting clear goals at the start makes every later decision easier. Next I'd add online reservations, a Spanish version and a full accessibility audit.",
      link: { href: "https://fredyyanes-hash.github.io/Corazon/", label: "Visit the Live Site" },
    }
  },
  {
    title: "Voyageur Fine Wines",
    description: "eCommerce website for Voyageur Fine Wines, a fictional family winery in Temecula, California, designed for my User Interface Design class at Valencia College and redesigned and launched in 2026.",
    category: "Web Design",
    image: "images/voyageur/cover-collage.webp",
    details: {
      overview: "Voyageur Fine Wines is a fictional family winery in Temecula, California, founded in 1984 by Samuel Altavilla. I planned the brand and its online store in my User Interface Design class: a creative brief, two personas, wireframes and a prototype. In 2026 I compared the prototype with leading family winery sites and with my own plan, then redesigned it and published it. The site now has a homepage that shows the wines, a shop with filters, a product page for each of the 12 wines, a cart and checkout, a Wine Club, a Visit page, Our Story and a Blog.",
      role: "UX/UI Designer & Front-End Developer – I wrote the creative brief and personas, drew the wireframes, designed the screens in Figma, and directed the research, the redesign and the launch of the coded site.",
      tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "React", "TypeScript", "Tailwind CSS", "Vite", "GitHub Pages"],
      challenge: "The prototype looked as polished as real winery sites, but the substance was missing. It named no founder or year, the About Us link reloaded the homepage, the homepage showed no bottles or prices, and product pages had only a description, notes and reviews. My personas needed more: Marissa, 28, wants to find a wine by price or occasion without the jargon, and Camilo, 54, wants pairings and expert recommendations. All of it was in my wireframes but had not been built.",
      solution: "I chose three changes, each tied to a persona and to my brief. First, tell the family story: a new hero line, \"Family grown in Temecula since 1984\", and an Our Story page. Second, show the wines early and make them easy to find, with four featured bottles on the homepage and shop filters for price and occasion. Third, give every bottle a richer page with Wine Facts, pairings, a winemaker's note and related wines, plus a Blog for wine education. A midnight blue, rust and ember palette with Cormorant Garamond, Lora and Jost type holds it together.",
      processTitle: "From Prototype to Live Store",
      stats: [
        { value: "1 → 3", label: "rows of shop filters: type, price and occasion" },
        { value: "7 → 9", label: "pages, adding Our Story and the Blog" },
        { value: "0 → 4", label: "wines shown on the homepage" },
        { value: "0 → 3", label: "blog articles, each with its own page" }
      ],
      updates: [
        { title: "Planned the brand", text: "I started with word association, color and typeface studies and a creative brief. The audience is affluent wine enthusiasts aged 21 to 55, from collectors to newcomers shopping for gifts, and the brief asks the site to build trust with a national audience." },
        { title: "Wrote two personas", text: "Marissa Lopez, 28, enjoys wine but is not an expert. She wants a price range, a search by occasion and plain language. Camilo Ricci, 54, loves to learn. He wants pairing suggestions, expert recommendations and details about each varietal." },
        { title: "Wireframed the store", text: "My wireframes set the structure: a homepage, a catalog, a product detail page with Wine Facts, Pairs Well With and Recommended Products, a cart and checkout, and a member area. The navigation planned Shop, Visit, Wine Club, About Us and Blog." },
        { title: "Compared it with real wineries", text: "I reviewed the prototype against family wineries such as Sokol Blosser, Wente, Jordan and B Cellars. They name the family and its history up front, show the wines early and keep the club in view. My prototype matched their look but not their substance, which gave me three priorities." },
        { title: "Led with the family and the wines", text: "The homepage now opens with the heritage line and two clear actions, Shop Wines and Join the Club. An Our Wines row shows four bottles with the price, the member price and an Add to Cart button. Full-width photo bands became image and text split layouts, and a generic vision block became \"A Family Story, Four Decades Deep\"." },
        { title: "Made the shop easy to search", text: "Filters grew from wine type alone to three rows: Type, Price and Occasion, with choices such as Dinner Party, Gift, Celebration and Everyday. A live count shows how many wines match, and each card adds a plain taste label such as \"Light and refreshing\" next to the formal notes." },
        { title: "Built a richer product page", text: "Every bottle now has Wine Facts cards for taste profile, blend and appellation, a Pairs Well With list, a winemaker's note, member reviews and a You May Also Like row. The buy box shows one clear price with the member price beside it." },
        { title: "Published and polished it", text: "I moved the design from a Figma file into a GitHub repository and published it on GitHub Pages, restoring and compressing 23 photos that the export had dropped. Every page and every wine has its own address, the club plans show real prices and bottle counts, and the footer links to real pages." }
      ],
      gallery: [
        { src: "images/voyageur/devices-mockup.webp", alt: "The Voyageur homepage on a laptop and the Pinot Noir product page on a phone", caption: "The homepage on a laptop and a product page on a phone." },
        { src: "images/voyageur/design-system.webp", alt: "Voyageur design system: six brand colors, the grape logo, Cormorant Garamond, Lora and Jost type, buttons, price filters and a wine card", caption: "The design system: colors, logo, type, buttons, filters and the wine card." },
        { src: "images/voyageur/product-page.webp", alt: "The Voyageur Pinot Noir product page with its Wine Facts, Pairs Well With list and winemaker's note", caption: "The product page: Wine Facts, pairings and the winemaker's note." },
        { src: "images/voyageur/phones.webp", alt: "Three phone screens of the Voyageur site: the shop with its filters, a product page and the Our Story page", caption: "On a phone: the shop filters, a product page and Our Story." }
      ],
      outcome: "A good-looking prototype became a live store that tells a family's story, lets a shopper find a bottle by price or occasion and explains every wine in plain words. The project taught me to check a finished design against my own brief and personas, because the gaps I found were features I had already planned. Next I'd add the Food and Gift Card sections from my catalog wireframe, an email signup for the Wine Club and a more refined phone layout.",
      link: { href: "https://fredyyanes-hash.github.io/Voyageur/", label: "Visit the Live Site" },
    }
  },
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
    title: "VoteSource",
    description: "One-page, non-partisan infographic website that turns 2024 voting data into quick visual facts, designed and built for my Advanced Website Design class.",
    category: "Web Design",
    image: "images/votesource/cover-devices-mockup.webp",
    details: {
      overview: "VoteSource is a non-partisan voter education website I designed and built for my Advanced Website Design class. The brief asked for a one-page scrolling infographic that explains voting with neutral facts, encourages people to register and leans toward no party. The finished site walks visitors through five sections (Home, Your Impact, Elections, The Data and Register Now) and ends with a form that sends them a voter information packet.",
      role: "UX/UI Designer & Front-End Developer – I researched the audience, gathered inspiration, drew the desktop and mobile wireframes and comps, then built the site in hand-coded HTML, CSS and JavaScript.",
      tools: ["HTML", "CSS Grid & Flexbox", "CSS Animations", "JavaScript", "Font Awesome", "Adobe Express"],
      challenge: "Voting information is easy to read as political. I had to present turnout and demographic data so it feels neutral to every visitor, and make it quick enough for my audience: mostly 18 to 29 year olds, more than half of whom look for quick visual facts on their phones during commutes and breaks.",
      solution: "I built the page around short, visual facts from the U.S. Census Bureau and Pew Research Center, with the sources listed on the page. A purple gradient sits between red and blue so the color takes no side. Flip cards, hover effects and simple charts keep people scrolling, and the navigation keeps a Register Now button one tap away.",
      processTitle: "From Research to Responsive Site",
      stats: [
        { value: "5", label: "sections in one scrolling page" },
        { value: "2 → 3", label: "screen sizes, from wireframes to mockups" },
        { value: "3 → 1", label: "rows of hero stats on a phone" },
        { value: "3–5 min", label: "target time on the site" }
      ],
      updates: [
        { title: "Studied the audience", text: "I built a target market summary from U.S. Census Bureau 2024 voting and registration tables and Pew Research Center studies. Half of the audience is 18 to 29, and 55% want quick visual facts on social issues, the economy and civic education, read on their phones. That pointed me to a mobile-first design built from short reads." },
        { title: "Gathered inspiration", text: "I collected five pages of infographic references and noted what worked in each: icons paired with percentages, step-by-step timelines, percentage gauges, hover cards with a 3D feel and patriotic colors that add credibility." },
        { title: "Wireframed the story", text: "My desktop and mobile wireframes set the order of the page: a hero with turnout stats and a call to action, quick facts, why every vote matters, the types of elections on a ballot, the demographic charts, election facts, the registration form and a footer with sources." },
        { title: "Designed neutral comps", text: "In the comps, a purple gradient stands for the middle ground between red and blue. Each section gets its own visuals and hover effects, and the form sits on a patriotic backdrop meant to feel like civic duty." },
        { title: "Built it in code", text: "I hand-coded the page with CSS Grid for the layouts, Flexbox for the responsive pieces and CSS animations for subtle transitions. The quick-fact cards flip on hover on a computer and on tap on a phone, and the form has a state dropdown, a date-of-birth picker and a confirmation popup when it is sent." },
        { title: "Refined it after review", text: "After a design review I put the form on a white card with larger, darker labels, redrew the racial breakdown as bars sized to each share instead of four equal circles, fit the hero stats into one row on phones, gave the sections alternating backgrounds and set one heading scale across the page." }
      ],
      gallery: [
        { src: "images/votesource/phones.webp", alt: "Three phone screens of the finished VoteSource site: the hero, the Who Votes in America charts and the Why Every Single Vote Matters section", caption: "On a phone: the hero, the demographic charts and why every vote matters." },
        { src: "images/votesource/device-mockups.webp", alt: "VoteSource mockups on a tablet, a phone and a laptop, each held by a person at a table", caption: "Mockups from my report: the site on a tablet, a phone and a laptop." },
        { src: "images/votesource/target-market.webp", alt: "Target market summary infographic with bars for gender, age, income, marital status, ethnicity and residence, plus interests and a psychographic profile", caption: "The target market summary that shaped the design: who the audience is, what they want and how they browse." }
      ],
      outcome: "VoteSource turns a page of turnout data into a site someone can read on a phone in a few minutes. Every fact comes from a named source, the colors and wording take no side, and the page ends at a form that helps people take the next step. The project taught me to design from the audience out: who they are, how much time they have and what makes them trust the numbers.",
      link: { href: "https://fredyyanes-hash.github.io/VoteSource/", label: "Visit the Live Site" },
    }
  },
  {
    title: "Blade Comic Cover",
    description: "A comic book cover illustration inspired by the blood rave scene from the movie BLADE.",
    category: "Illustration",
    image: "https://cdn.myportfolio.com/3b674604-b9ac-4701-bc24-d881b2abd8fb/7c65051d-09e1-41f3-a825-d267fa8e69aa.jpg?h=184aca06b6d6981bdb97f17b7e714f00",
    details: {
      overview: "A dramatic comic book cover illustration inspired by the iconic blood rave scene from the BLADE film, exploring the intersection of cinematic atmosphere and comic book art.",
      role: "Illustrator & Designer – Conceptualized and executed the complete cover illustration from initial sketches through final digital artwork.",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Digital Drawing Tablet"],
      challenge: "Capture the cinematic intensity and atmospheric darkness of the BLADE universe while creating a compelling comic book cover composition.",
      solution: "Dynamic angles and dramatic lighting create depth and movement. Bold red and black color scheme evokes the blood rave while maintaining readability.",
      outcome: "A finished comic cover that carries the look of a film scene into a single printed image. It taught me how much lighting and a limited palette can set the mood of a piece.",
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
      outcome: "A finished, print-ready poster built from the visual language of the 1980s. It pushed me to study a period style closely before reworking it.",
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
      outcome: "A brand identity for a restaurant concept, from the logo to the color palette and collateral. It was practice in building a system that works across a menu, a sign and a screen.",
    }
  },
  {
    title: "Chocochitos Cereal",
    description: "Cereal box design celebrating Latino heritage with pastel colors, playful patterns and a cow mascot.",
    category: "Packaging Design",
    image: "https://cdn.myportfolio.com/3b674604-b9ac-4701-bc24-d881b2abd8fb/e6572677-8e38-47da-b182-56e5e0adac51.jpg?h=6e937fd89ed7267650d98552e185c8d3",
    details: {
      overview: "A joyful packaging design for Chocochitos Cereal that celebrates Latino culture through vibrant visuals and playful design elements.",
      role: "Packaging Designer – Conceptualized and executed the complete package design including illustrations, typography, and production files.",
      tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
      challenge: "Create a cereal box that stands out on crowded shelves while authentically representing Latino culture and appealing to both children and parents.",
      solution: "Charming cow mascot surrounded by lively pastel colors and patterns inspired by Latino folk art, with cheerful typography and clear information hierarchy.",
      outcome: "A finished cereal box design with an original mascot and full front panel. It taught me to balance a playful illustration with the information a package has to carry.",
    }
  },
  {
    title: "Back 2 The Future",
    description: "Fan redesign of the Back to the Future movie poster, drawn in Illustrator for a 2024 vector class assignment and reworked in 2026 for my portfolio review class into a campaign with billboards and an 8 ft lobby standee.",
    category: "Vector Illustration",
    image: "images/bttf/cover-billboard.webp",
    details: {
      overview: "Back 2 The Future is my fan redesign of the Back to the Future movie poster. It began in 2024 as Job 02, Vector Movie Poster, in my Vector Illustration class (GRA2156). The assignment: design a poster for a movie of your choice while emulating the style of a designer from a set list. I paired Back to the Future with Morag Myerscough and drew Marty, Doc Brown, Einstein and the DeLorean in vector. In 2026 I reworked the poster for my portfolio review class with a new Myerscough-inspired palette, then carried it into a campaign: a city billboard, a street poster, a billboard at night and an 8 ft layered floor standee for a theater lobby.",
      role: "Illustrator & Designer – I drew the characters and the DeLorean in vector, recolored the poster with a palette inspired by Morag Myerscough, and extended it into billboards and an 8 ft layered floor standee.",
      tools: ["Adobe Illustrator", "Adobe Photoshop"],
      challenge: "The brief asked for a poster that looks more like the designer's style than the movie's and doesn't recreate an existing poster, but still reads as a real movie poster: the title, top billing, at least three lines of credits, a release date, and studio logos and a rating in vector. Everything had to be made in Illustrator, with no photos, Image Trace, pre-made artwork, drop shadows, glows or blend modes, and a limited palette of CMYK global swatches. In 2026 the same illustration also had to hold up from a poster to a billboard to an 8 ft standee.",
      solution: "I sat Marty on the hood of the DeLorean, with the gull-wing doors open and Doc and Einstein beside it, and set them on a road of bright stripes that leads to the title. The bold, geometric color comes from Morag Myerscough's public art, and the BACK 2 THE FUTURE title is set in a blocky 80s style, in perspective.",
      processTitle: "From Sketches to Campaign",
      stats: [
        { value: "15 → 5", label: "thumbnail sketches narrowed to refined layouts" },
        { value: "1 → 3", label: "formats: poster, billboard and floor standee" },
        { value: "8 ft", label: "layered floor standee for a theater lobby" },
        { value: "2024 → 2026", label: "from class assignment to portfolio review campaign" }
      ],
      updates: [
        { title: "Brainstormed the film", text: "I started with word association: time travel, flux, 88 mph, the clock tower, Hill Valley in 1955 and 1985, the lightning strike and the hoverboard chase. For the style I listed neon and metallic colors, lightning, clocks and wires, retro-futurism and blocky 80s type." },
        { title: "Studied the film and a designer", text: "I collected screenshots from the movie and noted what stood out: the neon time machine, Marty in a cap and in sunglasses, and how much the placement of the characters matters. For my designer study I chose Morag Myerscough, whose bold colors and geometric patterns gave the poster its energy." },
        { title: "Sketched 15 ideas, then 5", text: "The brief asked for 15 thumbnails, each a unique concept with the main image, the title and a block for credits. Mine used the DeLorean, Marty, the hoverboard and the clock tower. I refined my top 5 with clean lines, the full title and the credit block. The final layout grew out of those: Marty with the DeLorean, the gull-wing doors open and a bold title in perspective." },
        { title: "Drew it in vector", text: "Following the brief, I made the whole poster in Illustrator with no photos or effects. I drew Marty, Doc Brown, Einstein and the DeLorean with clean outlines, then built the striped road, the arrows and the title around them, with top billing, credits and studio logos laid out like a real movie poster." },
        { title: "Reworked it for portfolio review", text: "In 2026 I went back to the poster for my portfolio review class and changed only its color. I kept the drawing as it was, finished coloring the outlines and moved the palette closer to Myerscough: pink, orange, yellow, green and purple stripes behind a teal DeLorean." },
        { title: "Took it to the street", text: "In Photoshop I placed the poster on a city billboard, on a brick wall under a rail bridge and on a billboard at night, to see how it reads at street scale, by day and after dark." },
        { title: "Built an 8 ft lobby standee", text: "I split the artwork into layers for an 8 ft floor standee: a back panel, a raised layer with the DeLorean and the characters, a raised title, and a base with COMING SOON, SUMMER 2027 and Myerscough-style color bars. Then I placed it in a theater lobby mockup." }
      ],
      gallery: [
        { src: "images/bttf/lobby-standee.webp", alt: "The Back 2 The Future floor standee in a movie theater lobby, with the DeLorean and characters raised off the back panel and a purple base that reads Coming Soon, Summer 2027", caption: "The 8 ft layered floor standee in a theater lobby." },
        { src: "images/bttf/street-poster.webp", alt: "The Back 2 The Future poster on a brick wall under a rail bridge, with bicycles parked on the wet sidewalk below", caption: "The poster on a street wall." },
        { src: "images/bttf/night-billboard.webp", alt: "The Back 2 The Future poster lit up on a roadside billboard at night, with streetlights and passing cars", caption: "The billboard at night." },
        { src: "images/bttf/sketches.webp", alt: "Pencil sketches for the poster: a page of 15 numbered thumbnails and a page of 5 refined layouts with Marty and the DeLorean", caption: "The 15 thumbnail sketches and the 5 refined layouts that led to the final poster." }
      ],
      outcome: "A 2024 class assignment became a small campaign that shows one illustration working at every size, from a poster to a billboard to an 8 ft standee. Coming back to it two years later showed me how much color alone can change a finished piece, and building the standee made me think of the artwork in layers instead of as one flat image.",
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
      challenge: "Convey Italian culinary tradition and an upscale dining experience in a way that feels distinct from other Italian restaurants.",
      solution: "Elegant wordmark with refined typography suggesting Italian heritage. Sophisticated palette of deep charcoal and warm accent tones.",
      outcome: "A brand identity for an upscale Italian restaurant concept. It showed me how much a restrained palette and careful typography say about price and tone.",
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
      outcome: "A finished can design for an energy drink concept. It was practice in making a package read from across a store shelf.",
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
  'Vibrant poster design capturing the nostalgic essence of 1980s aesthetics with neon colors, geometric patterns, and retro-futuristic elements.': 'Póster vibrante que captura la nostalgia de los años 80 con colores neón, patrones geométricos y elementos retrofuturistas.',
  'Modern and sleek branding for a vibrant taqueria, capturing the essence of Mexican cuisine with contemporary design elements.': 'Branding moderno y pulido para una taquería vibrante, capturando la esencia de la cocina mexicana con elementos contemporáneos.',
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
  'A dramatic comic book cover illustration inspired by the iconic blood rave scene from the BLADE film, exploring the intersection of cinematic atmosphere and comic book art.': 'Una portada dramática de cómic inspirada en la escena icónica del blood rave de BLADE, explorando la intersección entre atmósfera cinematográfica y arte de cómic.',
  'Illustrator & Designer – Conceptualized and executed the complete cover illustration from initial sketches through final digital artwork.': 'Ilustrador y diseñador: conceptualicé y ejecuté la ilustración completa de la portada desde bocetos iniciales hasta arte digital final.',
  'Capture the cinematic intensity and atmospheric darkness of the BLADE universe while creating a compelling comic book cover composition.': 'Capturar la intensidad cinematográfica y la oscuridad atmosférica del universo BLADE mientras se crea una composición potente de portada de cómic.',
  'Dynamic angles and dramatic lighting create depth and movement. Bold red and black color scheme evokes the blood rave while maintaining readability.': 'Ángulos dinámicos e iluminación dramática crean profundidad y movimiento. La paleta roja y negra evoca el blood rave sin perder legibilidad.',
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

Object.assign(enToEs, {
  'VoteSource': 'VoteSource',
  'One-page, non-partisan infographic website that turns 2024 voting data into quick visual facts, designed and built for my Advanced Website Design class.': 'Sitio web infográfico de una sola página y no partidista que convierte los datos de votación de 2024 en datos visuales rápidos, diseñado y construido para mi clase de Diseño Web Avanzado.',
  'VoteSource is a non-partisan voter education website I designed and built for my Advanced Website Design class. The brief asked for a one-page scrolling infographic that explains voting with neutral facts, encourages people to register and leans toward no party. The finished site walks visitors through five sections (Home, Your Impact, Elections, The Data and Register Now) and ends with a form that sends them a voter information packet.': 'VoteSource es un sitio web no partidista de educación electoral que diseñé y construí para mi clase de Diseño Web Avanzado. El encargo pedía una infografía de una sola página con desplazamiento que explicara el voto con datos neutrales, animara a la gente a registrarse y no se inclinara por ningún partido. El sitio terminado guía al visitante por cinco secciones (Inicio, Tu impacto, Elecciones, Los datos y Regístrate) y termina con un formulario que le envía un paquete de información electoral.',
  'UX/UI Designer & Front-End Developer – I researched the audience, gathered inspiration, drew the desktop and mobile wireframes and comps, then built the site in hand-coded HTML, CSS and JavaScript.': 'Diseñador UX/UI y desarrollador front-end: investigué al público, reuní inspiración, dibujé los wireframes y las composiciones para computadora y teléfono, y luego construí el sitio a mano en HTML, CSS y JavaScript.',
  'CSS Animations': 'Animaciones CSS',
  'Voting information is easy to read as political. I had to present turnout and demographic data so it feels neutral to every visitor, and make it quick enough for my audience: mostly 18 to 29 year olds, more than half of whom look for quick visual facts on their phones during commutes and breaks.': 'La información sobre el voto se interpreta fácilmente como política. Tenía que presentar los datos de participación y demográficos de forma que se sintieran neutrales para cualquier visitante, y lo bastante rápidos para mi público: en su mayoría jóvenes de 18 a 29 años, más de la mitad de los cuales buscan datos visuales rápidos en el teléfono durante sus trayectos y descansos.',
  'I built the page around short, visual facts from the U.S. Census Bureau and Pew Research Center, with the sources listed on the page. A purple gradient sits between red and blue so the color takes no side. Flip cards, hover effects and simple charts keep people scrolling, and the navigation keeps a Register Now button one tap away.': 'Construí la página alrededor de datos breves y visuales de la Oficina del Censo de EE. UU. y del Pew Research Center, con las fuentes citadas en la página. Un degradado morado se ubica entre el rojo y el azul para que el color no tome partido. Tarjetas que se voltean, efectos al pasar el cursor y gráficos sencillos mantienen a la gente desplazándose, y la navegación deja el botón Regístrate a un toque de distancia.',
  'From Research to Responsive Site': 'De la investigación al sitio adaptable',
  'sections in one scrolling page': 'secciones en una sola página con desplazamiento',
  'screen sizes, from wireframes to mockups': 'tamaños de pantalla, de los wireframes a los mockups',
  'rows of hero stats on a phone': 'filas de cifras principales en el teléfono',
  'target time on the site': 'tiempo objetivo en el sitio',
  'Studied the audience': 'Estudié al público',
  'I built a target market summary from U.S. Census Bureau 2024 voting and registration tables and Pew Research Center studies. Half of the audience is 18 to 29, and 55% want quick visual facts on social issues, the economy and civic education, read on their phones. That pointed me to a mobile-first design built from short reads.': 'Armé un resumen del mercado objetivo con las tablas de votación y registro de 2024 de la Oficina del Censo de EE. UU. y estudios del Pew Research Center. La mitad del público tiene entre 18 y 29 años, y el 55% quiere datos visuales rápidos sobre temas sociales, economía y educación cívica, leídos en el teléfono. Eso me llevó a un diseño pensado primero para el móvil y hecho de lecturas cortas.',
  'Gathered inspiration': 'Reuní inspiración',
  'I collected five pages of infographic references and noted what worked in each: icons paired with percentages, step-by-step timelines, percentage gauges, hover cards with a 3D feel and patriotic colors that add credibility.': 'Reuní cinco páginas de referencias de infografías y anoté lo que funcionaba en cada una: íconos junto a porcentajes, líneas de tiempo paso a paso, indicadores de porcentaje, tarjetas con efecto 3D al pasar el cursor y colores patrios que aportan credibilidad.',
  'Wireframed the story': 'Hice los wireframes de la historia',
  'My desktop and mobile wireframes set the order of the page: a hero with turnout stats and a call to action, quick facts, why every vote matters, the types of elections on a ballot, the demographic charts, election facts, the registration form and a footer with sources.': 'Mis wireframes para computadora y teléfono definieron el orden de la página: una portada con cifras de participación y una llamada a la acción, datos rápidos, por qué importa cada voto, los tipos de elecciones en una boleta, los gráficos demográficos, datos electorales, el formulario de registro y un pie de página con las fuentes.',
  'Designed neutral comps': 'Diseñé composiciones neutrales',
  'In the comps, a purple gradient stands for the middle ground between red and blue. Each section gets its own visuals and hover effects, and the form sits on a patriotic backdrop meant to feel like civic duty.': 'En las composiciones, un degradado morado representa el punto medio entre el rojo y el azul. Cada sección tiene sus propios elementos visuales y efectos al pasar el cursor, y el formulario está sobre un fondo patrio pensado para transmitir deber cívico.',
  'Built it in code': 'Lo construí en código',
  'I hand-coded the page with CSS Grid for the layouts, Flexbox for the responsive pieces and CSS animations for subtle transitions. The quick-fact cards flip on hover on a computer and on tap on a phone, and the form has a state dropdown, a date-of-birth picker and a confirmation popup when it is sent.': 'Programé la página a mano con CSS Grid para los diseños, Flexbox para las piezas adaptables y animaciones CSS para transiciones sutiles. Las tarjetas de datos rápidos se voltean al pasar el cursor en la computadora y al tocarlas en el teléfono, y el formulario tiene un menú de estados, un selector de fecha de nacimiento y una ventana de confirmación al enviarlo.',
  'Refined it after review': 'Lo refiné después de la revisión',
  'After a design review I put the form on a white card with larger, darker labels, redrew the racial breakdown as bars sized to each share instead of four equal circles, fit the hero stats into one row on phones, gave the sections alternating backgrounds and set one heading scale across the page.': 'Después de una revisión de diseño puse el formulario sobre una tarjeta blanca con etiquetas más grandes y oscuras, rehice el desglose racial como barras proporcionales a cada porcentaje en lugar de cuatro círculos iguales, acomodé las cifras principales en una sola fila en el teléfono, di a las secciones fondos alternados y fijé una sola escala de títulos en toda la página.',
  'On a phone: the hero, the demographic charts and why every vote matters.': 'En el teléfono: la portada, los gráficos demográficos y por qué importa cada voto.',
  'Mockups from my report: the site on a tablet, a phone and a laptop.': 'Mockups de mi informe: el sitio en una tableta, un teléfono y una laptop.',
  'The target market summary that shaped the design: who the audience is, what they want and how they browse.': 'El resumen del mercado objetivo que guió el diseño: quién es el público, qué quiere y cómo navega.',
  'VoteSource turns a page of turnout data into a site someone can read on a phone in a few minutes. Every fact comes from a named source, the colors and wording take no side, and the page ends at a form that helps people take the next step. The project taught me to design from the audience out: who they are, how much time they have and what makes them trust the numbers.': 'VoteSource convierte una página de datos de participación en un sitio que alguien puede leer en el teléfono en pocos minutos. Cada dato viene de una fuente citada, los colores y las palabras no toman partido, y la página termina en un formulario que ayuda a la gente a dar el siguiente paso. El proyecto me enseñó a diseñar desde el público: quiénes son, cuánto tiempo tienen y qué les hace confiar en los números.'
});

Object.assign(enToEs, {
  'Brand refresh and four-page website for Corazón Cocina Mexicana, a family-owned Mexican restaurant in Orlando, built for my Interactive Graphic Design classes at Valencia College and published live on GitHub Pages.': 'Renovación de marca y sitio web de cuatro páginas para Corazón Cocina Mexicana, un restaurante mexicano familiar en Orlando, creado en mis clases de Diseño Gráfico Interactivo en Valencia College y publicado en GitHub Pages.',
  'Corazón Cocina Mexicana is a real family-owned restaurant in Orlando. I redesigned its website and refreshed its brand while keeping every piece of real content: the family story, hours, address and all 93 menu items. The finished site has four pages (Home, Lunch, Dinner and Bar menus) built on a new vector logo system, the restaurant\'s own warm colors and a bold, photo-led layout.': 'Corazón Cocina Mexicana es un restaurante familiar real en Orlando. Rediseñé su sitio web y renové su marca manteniendo todo el contenido real: la historia de la familia, el horario, la dirección y los 93 platillos del menú. El sitio terminado tiene cuatro páginas (Inicio y los menús de Almuerzo, Cena y Bar) construidas sobre un nuevo sistema de logo vectorial, los colores cálidos del propio restaurante y un diseño audaz guiado por la fotografía.',
  'Brand Designer & Front-End Developer – I set the project goals, art-directed the new logo and turned it into vector files, designed the layouts and a small design system, and built the site in hand-coded HTML, CSS and JavaScript.': 'Diseñador de Marca y Desarrollador Front-End – Definí los objetivos del proyecto, dirigí el arte del nuevo logo y lo convertí en archivos vectoriales, diseñé las páginas y un pequeño sistema de diseño, y construí el sitio a mano en HTML, CSS y JavaScript.',
  'The original site set thin blue text over busy photos and had no menu preview or ordering path, and the logo was a 484 × 340 px image in colors that didn\'t fit the food. My first redesign fixed the structure but looked like a template: rounded cards, serif and script type, and Aztec patterns everywhere. My goals were to make it feel high end and authentic without falling into cliché, use fewer images, keep animation light and make it accessible.': 'El sitio original ponía texto azul delgado sobre fotos recargadas y no tenía vista previa del menú ni forma de ordenar, y el logo era una imagen de 484 × 340 px en colores que no iban con la comida. Mi primer rediseño arregló la estructura pero parecía una plantilla: tarjetas redondeadas, tipografía con serifa y cursiva, y patrones aztecas por todas partes. Mis objetivos eran que se sintiera de alto nivel y auténtico sin caer en el cliché, usar menos imágenes, mantener la animación ligera y hacerlo accesible.',
  'I rebuilt every page in plain CSS with no framework. Two typefaces (Oswald for headlines, DM Sans for text), the restaurant\'s original terracotta, gold, cream and dark brown, flat square cards and menus laid out like a printed menu replaced the template look. The Aztec greca pattern became one small accent line, so the agave and heart logo and real restaurant photos carry the culture.': 'Reconstruí cada página en CSS puro, sin framework. Dos tipografías (Oswald para los títulos y DM Sans para el texto), los colores originales del restaurante (terracota, dorado, crema y café oscuro), tarjetas planas y cuadradas, y menús organizados como un menú impreso reemplazaron el aspecto de plantilla. El patrón azteca de grecas quedó como una sola línea de acento, para que el logo del agave y el corazón y las fotos reales del restaurante transmitan la cultura.',
  'From Template to Brand': 'De la plantilla a la marca',
  'logo, from a 484 × 340 px image to vectors': 'logo, de una imagen de 484 × 340 px a vectores',
  'logo files: color, black, white and horizontal': 'archivos de logo: color, negro, blanco y horizontal',
  'code libraries loaded from other sites': 'librerías de código cargadas desde otros sitios',
  'pages live online': 'páginas publicadas en línea',
  'Started from my own goals': 'Empecé con mis propios objetivos',
  'I opened the project by listing what was wrong with my first version: it didn\'t look high end, the cards felt outdated, and I wasn\'t sure about the Aztec styling, the number of images, the animation or accessibility. Keeping all of the restaurant\'s real content was the one rule.': 'Abrí el proyecto haciendo una lista de lo que fallaba en mi primera versión: no se veía de alto nivel, las tarjetas se sentían anticuadas y no estaba seguro del estilo azteca, la cantidad de imágenes, la animación ni la accesibilidad. La única regla era conservar todo el contenido real del restaurante.',
  'Kept the content, changed the look': 'Conservé el contenido y cambié el aspecto',
  'A script moved all 93 menu items from the old pages, so nothing was retyped. Each menu now reads like a printed menu: two columns, the price on the right and category tabs that stay on screen. Lunch, Dinner and Bar link from solid color blocks instead of more photos.': 'Un script pasó los 93 platillos de las páginas anteriores, así que no se volvió a escribir nada. Cada menú ahora se lee como un menú impreso: dos columnas, el precio a la derecha y pestañas de categorías que se quedan en pantalla. Almuerzo, Cena y Bar se enlazan desde bloques de color sólido en lugar de más fotos.',
  'Redrew the logo': 'Redibujé el logo',
  'The new mark keeps the agave and the heart, since corazón means heart, in agave gold and terracotta on dark brown. I traced it into vector paths and matched the artwork leaf by leaf, then made 14 files: color, black and white versions, stacked and horizontal, with transparent backgrounds.': 'La nueva marca conserva el agave y el corazón, en dorado agave y terracota sobre café oscuro. La tracé en trazos vectoriales y la igualé al arte hoja por hoja, y luego creé 14 archivos: versiones a color, en negro y en blanco, apiladas y horizontales, con fondos transparentes.',
  'Built a mini design system': 'Creé un mini sistema de diseño',
  'Six colors checked for contrast, two typefaces, square buttons, a five-star rating and one greca accent line. The horizontal logo fits the header bar, and the white logo anchors the footer next to Instagram, Facebook, Yelp and Google review links.': 'Seis colores verificados por contraste, dos tipografías, botones cuadrados, una calificación de cinco estrellas y una sola línea de grecas como acento. El logo horizontal cabe en la barra del encabezado, y el logo blanco ancla el pie de página junto a los enlaces de Instagram, Facebook, Yelp y reseñas de Google.',
  'Put the brand in the restaurant': 'Llevé la marca al restaurante',
  'I placed the logo on a framed wall sign behind a mariachi band, on a bartender\'s apron and on a server\'s apron and cap. The color version holds up on a dark wall and the one-color version reads clearly on fabric.': 'Coloqué el logo en un letrero enmarcado en la pared detrás de un grupo de mariachis, en el delantal de una bartender y en el delantal y la gorra de un mesero. La versión a color se sostiene sobre una pared oscura y la versión de un solo color se lee con claridad sobre la tela.',
  'Added motion with restraint': 'Agregué movimiento con medida',
  'The Lunch and Dinner pages open with a slow, scrolling strip of restaurant photos behind a darker gradient that keeps the headline readable. The motion stops for visitors who ask their device for less motion, and dropping the outside code libraries made the pages lighter.': 'Las páginas de Almuerzo y Cena abren con una franja lenta de fotos del restaurante detrás de un degradado más oscuro que mantiene legible el título. El movimiento se detiene para quienes piden menos movimiento en su dispositivo, y quitar las librerías externas hizo las páginas más ligeras.',
  'Published it': 'Lo publiqué',
  'I moved the site into a GitHub repository and launched it on GitHub Pages, so every update goes live and anyone can see the real site at any time.': 'Pasé el sitio a un repositorio de GitHub y lo lancé en GitHub Pages, así cada actualización se publica sola y cualquiera puede ver el sitio real en cualquier momento.',
  'The homepage on a laptop and the Lunch menu on a phone.': 'La página de inicio en una laptop y el menú de Almuerzo en un teléfono.',
  'The mini design system: colors, type, buttons and the greca accent, with the brand on a server\'s and a bartender\'s apron.': 'El mini sistema de diseño: colores, tipografía, botones y el acento de grecas, con la marca en el delantal de un mesero y de una bartender.',
  'The logo system: stacked and horizontal versions in color, black and white.': 'El sistema de logo: versiones apiladas y horizontales a color, en negro y en blanco.',
  'On a phone: the Lunch and Dinner menus and the footer.': 'En el teléfono: los menús de Almuerzo y Cena y el pie de página.',
  'A dated restaurant site became a branded, four-page website anyone can visit, with a logo system the restaurant can use from a favicon to a storefront sign. The project taught me that a brand depends on small details, and that setting clear goals at the start makes every later decision easier. Next I\'d add online reservations, a Spanish version and a full accessibility audit.': 'Un sitio de restaurante anticuado se convirtió en un sitio web de cuatro páginas con marca propia que cualquiera puede visitar, con un sistema de logo que el restaurante puede usar desde un favicon hasta un letrero de fachada. El proyecto me enseñó que una marca depende de los pequeños detalles, y que fijar objetivos claros al inicio facilita cada decisión posterior. Lo siguiente sería agregar reservaciones en línea, una versión en español y una auditoría completa de accesibilidad.',
  'SVG Vector Tracing': 'Vectorización en SVG'
});

Object.assign(enToEs, {
  'A comic book cover illustration inspired by the blood rave scene from the movie BLADE.': 'Ilustración de portada de cómic inspirada en la escena del blood rave de la película BLADE.',
  'Cereal box design celebrating Latino heritage with pastel colors, playful patterns and a cow mascot.': 'Diseño de caja de cereal que celebra la herencia latina con colores pastel, patrones juguetones y una mascota de vaca.',
  'Convey Italian culinary tradition and an upscale dining experience in a way that feels distinct from other Italian restaurants.': 'Transmitir la tradición culinaria italiana y una experiencia gastronómica de alto nivel de una forma que se distinga de otros restaurantes italianos.',
  'A finished comic cover that carries the look of a film scene into a single printed image. It taught me how much lighting and a limited palette can set the mood of a piece.': 'Una portada de cómic terminada que lleva el estilo de una escena de cine a una sola imagen impresa. Me enseñó cuánto pueden definir el ambiente de una pieza la iluminación y una paleta limitada.',
  'A finished, print-ready poster built from the visual language of the 1980s. It pushed me to study a period style closely before reworking it.': 'Un póster terminado y listo para imprimir, construido con el lenguaje visual de los años 80. Me llevó a estudiar a fondo el estilo de una época antes de reinterpretarlo.',
  'A brand identity for a restaurant concept, from the logo to the color palette and collateral. It was practice in building a system that works across a menu, a sign and a screen.': 'Una identidad de marca para un concepto de restaurante, desde el logo hasta la paleta de colores y las piezas impresas. Fue práctica para crear un sistema que funcione en un menú, un letrero y una pantalla.',
  'A finished cereal box design with an original mascot and full front panel. It taught me to balance a playful illustration with the information a package has to carry.': 'Un diseño de caja de cereal terminado, con una mascota original y el panel frontal completo. Me enseñó a equilibrar una ilustración divertida con la información que debe llevar un empaque.',
  'A brand identity for an upscale Italian restaurant concept. It showed me how much a restrained palette and careful typography say about price and tone.': 'Una identidad de marca para un concepto de restaurante italiano de alto nivel. Me mostró cuánto comunican sobre precio y tono una paleta sobria y una tipografía cuidada.',
  'A finished can design for an energy drink concept. It was practice in making a package read from across a store shelf.': 'Un diseño de lata terminado para un concepto de bebida energética. Fue práctica para lograr que un empaque se lea desde el otro lado del pasillo de una tienda.'
});

Object.assign(enToEs, {
  "eCommerce website for Voyageur Fine Wines, a fictional family winery in Temecula, California, designed for my User Interface Design class at Valencia College and redesigned and launched in 2026.": "Sitio de comercio electrónico para Voyageur Fine Wines, una bodega familiar ficticia en Temecula, California, diseñado para mi clase de Diseño de Interfaz de Usuario en Valencia College y rediseñado y publicado en 2026.",
  "Voyageur Fine Wines is a fictional family winery in Temecula, California, founded in 1984 by Samuel Altavilla. I planned the brand and its online store in my User Interface Design class: a creative brief, two personas, wireframes and a prototype. In 2026 I compared the prototype with leading family winery sites and with my own plan, then redesigned it and published it. The site now has a homepage that shows the wines, a shop with filters, a product page for each of the 12 wines, a cart and checkout, a Wine Club, a Visit page, Our Story and a Blog.": "Voyageur Fine Wines es una bodega familiar ficticia en Temecula, California, fundada en 1984 por Samuel Altavilla. Planifiqué la marca y su tienda en línea en mi clase de Diseño de Interfaz de Usuario: un brief creativo, dos personas, wireframes y un prototipo. En 2026 comparé el prototipo con los sitios de bodegas familiares líderes y con mi propio plan, luego lo rediseñé y lo publiqué. El sitio ahora tiene una página de inicio que muestra los vinos, una tienda con filtros, una página de producto para cada uno de los 12 vinos, carrito y pago, un Club de Vinos, una página de Visitas, Nuestra Historia y un Blog.",
  "UX/UI Designer & Front-End Developer – I wrote the creative brief and personas, drew the wireframes, designed the screens in Figma, and directed the research, the redesign and the launch of the coded site.": "Diseñador UX/UI y desarrollador front-end: escribí el brief creativo y las personas, dibujé los wireframes, diseñé las pantallas en Figma y dirigí la investigación, el rediseño y el lanzamiento del sitio en código.",
  "The prototype looked as polished as real winery sites, but the substance was missing. It named no founder or year, the About Us link reloaded the homepage, the homepage showed no bottles or prices, and product pages had only a description, notes and reviews. My personas needed more: Marissa, 28, wants to find a wine by price or occasion without the jargon, and Camilo, 54, wants pairings and expert recommendations. All of it was in my wireframes but had not been built.": "El prototipo se veía tan pulido como los sitios de bodegas reales, pero le faltaba contenido. No nombraba a ningún fundador ni año, el enlace Nosotros recargaba la página de inicio, la página de inicio no mostraba botellas ni precios, y las páginas de producto solo tenían una descripción, notas y reseñas. Mis personas necesitaban más: Marissa, de 28 años, quiere encontrar un vino por precio u ocasión sin tecnicismos, y Camilo, de 54, quiere maridajes y recomendaciones de expertos. Todo eso estaba en mis wireframes, pero no se había construido.",
  "I chose three changes, each tied to a persona and to my brief. First, tell the family story: a new hero line, \"Family grown in Temecula since 1984\", and an Our Story page. Second, show the wines early and make them easy to find, with four featured bottles on the homepage and shop filters for price and occasion. Third, give every bottle a richer page with Wine Facts, pairings, a winemaker's note and related wines, plus a Blog for wine education. A midnight blue, rust and ember palette with Cormorant Garamond, Lora and Jost type holds it together.": "Elegí tres cambios, cada uno ligado a una persona y a mi brief. Primero, contar la historia de la familia: una nueva frase principal, \"Family grown in Temecula since 1984\", y una página Nuestra Historia. Segundo, mostrar los vinos desde el inicio y hacerlos fáciles de encontrar, con cuatro botellas destacadas en la página de inicio y filtros de tienda por precio y ocasión. Tercero, dar a cada botella una página más completa con Datos del Vino, maridajes, una nota del enólogo y vinos relacionados, además de un Blog de educación sobre vino. Una paleta de azul medianoche, óxido y naranja brasa con las tipografías Cormorant Garamond, Lora y Jost lo une todo.",
  "From Prototype to Live Store": "Del prototipo a la tienda en línea",
  "rows of shop filters: type, price and occasion": "filas de filtros en la tienda: tipo, precio y ocasión",
  "pages, adding Our Story and the Blog": "páginas, al sumar Nuestra Historia y el Blog",
  "wines shown on the homepage": "vinos visibles en la página de inicio",
  "blog articles, each with its own page": "artículos de blog, cada uno con su propia página",
  "Planned the brand": "Planifiqué la marca",
  "I started with word association, color and typeface studies and a creative brief. The audience is affluent wine enthusiasts aged 21 to 55, from collectors to newcomers shopping for gifts, and the brief asks the site to build trust with a national audience.": "Empecé con asociación de palabras, estudios de color y tipografía y un brief creativo. La audiencia son aficionados al vino de buen poder adquisitivo, de 21 a 55 años, desde coleccionistas hasta principiantes que buscan regalos, y el brief pide que el sitio genere confianza en una audiencia nacional.",
  "Wrote two personas": "Escribí dos personas",
  "Marissa Lopez, 28, enjoys wine but is not an expert. She wants a price range, a search by occasion and plain language. Camilo Ricci, 54, loves to learn. He wants pairing suggestions, expert recommendations and details about each varietal.": "Marissa Lopez, de 28 años, disfruta el vino pero no es experta. Quiere un rango de precios, una búsqueda por ocasión y lenguaje sencillo. Camilo Ricci, de 54, ama aprender. Quiere sugerencias de maridaje, recomendaciones de expertos y detalles sobre cada varietal.",
  "Wireframed the store": "Hice los wireframes de la tienda",
  "My wireframes set the structure: a homepage, a catalog, a product detail page with Wine Facts, Pairs Well With and Recommended Products, a cart and checkout, and a member area. The navigation planned Shop, Visit, Wine Club, About Us and Blog.": "Mis wireframes definieron la estructura: una página de inicio, un catálogo, una página de detalle de producto con Datos del Vino, Marida Bien Con y Productos Recomendados, carrito y pago, y un área de miembros. La navegación contemplaba Tienda, Visitas, Club de Vinos, Nosotros y Blog.",
  "Compared it with real wineries": "Lo comparé con bodegas reales",
  "I reviewed the prototype against family wineries such as Sokol Blosser, Wente, Jordan and B Cellars. They name the family and its history up front, show the wines early and keep the club in view. My prototype matched their look but not their substance, which gave me three priorities.": "Revisé el prototipo frente a bodegas familiares como Sokol Blosser, Wente, Jordan y B Cellars. Ellas nombran a la familia y su historia desde el inicio, muestran los vinos pronto y mantienen el club a la vista. Mi prototipo igualaba su apariencia pero no su contenido, y eso me dio tres prioridades.",
  "Led with the family and the wines": "Puse primero a la familia y los vinos",
  "The homepage now opens with the heritage line and two clear actions, Shop Wines and Join the Club. An Our Wines row shows four bottles with the price, the member price and an Add to Cart button. Full-width photo bands became image and text split layouts, and a generic vision block became \"A Family Story, Four Decades Deep\".": "La página de inicio ahora abre con la frase de herencia y dos acciones claras, Shop Wines y Join the Club. Una fila Our Wines muestra cuatro botellas con el precio, el precio para miembros y un botón Add to Cart. Las franjas de foto a todo el ancho pasaron a ser diseños divididos de imagen y texto, y un bloque genérico de visión se convirtió en \"A Family Story, Four Decades Deep\".",
  "Made the shop easy to search": "Hice la tienda fácil de explorar",
  "Filters grew from wine type alone to three rows: Type, Price and Occasion, with choices such as Dinner Party, Gift, Celebration and Everyday. A live count shows how many wines match, and each card adds a plain taste label such as \"Light and refreshing\" next to the formal notes.": "Los filtros pasaron de solo el tipo de vino a tres filas: Tipo, Precio y Ocasión, con opciones como Dinner Party, Gift, Celebration y Everyday. Un contador en vivo muestra cuántos vinos coinciden, y cada tarjeta suma una etiqueta de sabor sencilla, como \"Light and refreshing\", junto a las notas formales.",
  "Built a richer product page": "Construí una página de producto más completa",
  "Every bottle now has Wine Facts cards for taste profile, blend and appellation, a Pairs Well With list, a winemaker's note, member reviews and a You May Also Like row. The buy box shows one clear price with the member price beside it.": "Cada botella ahora tiene tarjetas de Datos del Vino con perfil de sabor, mezcla y denominación, una lista Marida Bien Con, una nota del enólogo, reseñas de miembros y una fila También Te Puede Gustar. El recuadro de compra muestra un precio claro con el precio para miembros al lado.",
  "Published and polished it": "Lo publiqué y lo pulí",
  "I moved the design from a Figma file into a GitHub repository and published it on GitHub Pages, restoring and compressing 23 photos that the export had dropped. Every page and every wine has its own address, the club plans show real prices and bottle counts, and the footer links to real pages.": "Pasé el diseño de un archivo de Figma a un repositorio de GitHub y lo publiqué en GitHub Pages, restaurando y comprimiendo 23 fotos que la exportación había omitido. Cada página y cada vino tiene su propia dirección, los planes del club muestran precios reales y cantidad de botellas, y el pie de página enlaza a páginas reales.",
  "The homepage on a laptop and a product page on a phone.": "La página de inicio en una laptop y una página de producto en un teléfono.",
  "The design system: colors, logo, type, buttons, filters and the wine card.": "El sistema de diseño: colores, logo, tipografía, botones, filtros y la tarjeta de vino.",
  "The product page: Wine Facts, pairings and the winemaker's note.": "La página de producto: Datos del Vino, maridajes y la nota del enólogo.",
  "On a phone: the shop filters, a product page and Our Story.": "En el teléfono: los filtros de la tienda, una página de producto y Nuestra Historia.",
  "A good-looking prototype became a live store that tells a family's story, lets a shopper find a bottle by price or occasion and explains every wine in plain words. The project taught me to check a finished design against my own brief and personas, because the gaps I found were features I had already planned. Next I'd add the Food and Gift Card sections from my catalog wireframe, an email signup for the Wine Club and a more refined phone layout.": "Un prototipo atractivo se convirtió en una tienda en línea que cuenta la historia de una familia, permite encontrar una botella por precio u ocasión y explica cada vino con palabras sencillas. El proyecto me enseñó a comparar un diseño terminado con mi propio brief y mis personas, porque los vacíos que encontré eran funciones que ya había planificado. Lo siguiente sería agregar las secciones de Comida y Tarjetas de Regalo de mi wireframe de catálogo, un registro por correo para el Club de Vinos y un diseño más refinado para teléfonos."
});

Object.assign(enToEs, {
  "Fan redesign of the Back to the Future movie poster, drawn in Illustrator for a 2024 vector class assignment and reworked in 2026 for my portfolio review class into a campaign with billboards and an 8 ft lobby standee.": "Rediseño de fan del póster de Volver al Futuro, dibujado en Illustrator para un proyecto de mi clase de vector en 2024 y retrabajado en 2026 para mi clase de revisión de portafolio como una campaña con vallas publicitarias y un standee de 8 pies para el vestíbulo de un cine.",
  "Back 2 The Future is my fan redesign of the Back to the Future movie poster. It began in 2024 as Job 02, Vector Movie Poster, in my Vector Illustration class (GRA2156). The assignment: design a poster for a movie of your choice while emulating the style of a designer from a set list. I paired Back to the Future with Morag Myerscough and drew Marty, Doc Brown, Einstein and the DeLorean in vector. In 2026 I reworked the poster for my portfolio review class with a new Myerscough-inspired palette, then carried it into a campaign: a city billboard, a street poster, a billboard at night and an 8 ft layered floor standee for a theater lobby.": "Back 2 The Future es mi rediseño de fan del póster de Volver al Futuro. Empezó en 2024 como el Job 02, Vector Movie Poster, de mi clase de Ilustración Vectorial (GRA2156). La tarea: diseñar el póster de una película a elección emulando el estilo de un diseñador de una lista. Combiné Volver al Futuro con Morag Myerscough y dibujé en vector a Marty, Doc Brown, Einstein y el DeLorean. En 2026 retrabajé el póster para mi clase de revisión de portafolio con una nueva paleta inspirada en Myerscough y lo llevé a una campaña: una valla en la ciudad, un póster en la calle, una valla de noche y un standee de piso de 8 pies, en capas, para el vestíbulo de un cine.",
  "Illustrator & Designer – I drew the characters and the DeLorean in vector, recolored the poster with a palette inspired by Morag Myerscough, and extended it into billboards and an 8 ft layered floor standee.": "Ilustrador y diseñador: dibujé en vector los personajes y el DeLorean, cambié el color del póster con una paleta inspirada en Morag Myerscough y lo extendí a vallas publicitarias y a un standee de piso de 8 pies en capas.",
  "The brief asked for a poster that looks more like the designer's style than the movie's and doesn't recreate an existing poster, but still reads as a real movie poster: the title, top billing, at least three lines of credits, a release date, and studio logos and a rating in vector. Everything had to be made in Illustrator, with no photos, Image Trace, pre-made artwork, drop shadows, glows or blend modes, and a limited palette of CMYK global swatches. In 2026 the same illustration also had to hold up from a poster to a billboard to an 8 ft standee.": "La tarea pedía un póster que se pareciera más al estilo del diseñador que al de la película y que no recreara un póster existente, pero que se leyera como un póster de cine real: el título, los actores principales, al menos tres líneas de créditos, una fecha de estreno, y logos de estudio y una clasificación en vector. Todo debía hacerse en Illustrator, sin fotos, Image Trace, arte prediseñado, sombras, resplandores ni modos de fusión, y con una paleta limitada de muestras globales CMYK. En 2026 la misma ilustración también tenía que funcionar en un póster, en una valla y en un standee de 8 pies.",
  "I sat Marty on the hood of the DeLorean, with the gull-wing doors open and Doc and Einstein beside it, and set them on a road of bright stripes that leads to the title. The bold, geometric color comes from Morag Myerscough's public art, and the BACK 2 THE FUTURE title is set in a blocky 80s style, in perspective.": "Senté a Marty sobre el capó del DeLorean, con las puertas de ala de gaviota abiertas y Doc y Einstein a su lado, sobre un camino de franjas brillantes que lleva al título. El color audaz y geométrico viene del arte público de Morag Myerscough, y el título BACK 2 THE FUTURE usa un estilo de bloques de los años 80, en perspectiva.",
  "From Sketches to Campaign": "De los bocetos a la campaña",
  "thumbnail sketches narrowed to refined layouts": "bocetos en miniatura reducidos a diseños refinados",
  "formats: poster, billboard and floor standee": "formatos: póster, valla y standee de piso",
  "layered floor standee for a theater lobby": "standee de piso en capas para el vestíbulo de un cine",
  "from class assignment to portfolio review campaign": "de la tarea de clase a la campaña para la revisión de portafolio",
  "Brainstormed the film": "Hice una lluvia de ideas sobre la película",
  "I started with word association: time travel, flux, 88 mph, the clock tower, Hill Valley in 1955 and 1985, the lightning strike and the hoverboard chase. For the style I listed neon and metallic colors, lightning, clocks and wires, retro-futurism and blocky 80s type.": "Empecé con asociación de palabras: viaje en el tiempo, flujo, 88 mph, la torre del reloj, Hill Valley en 1955 y 1985, el rayo y la persecución en patineta voladora. Para el estilo anoté colores neón y metálicos, rayos, relojes y cables, retrofuturismo y tipografía de bloques de los años 80.",
  "Studied the film and a designer": "Estudié la película y a una diseñadora",
  "I collected screenshots from the movie and noted what stood out: the neon time machine, Marty in a cap and in sunglasses, and how much the placement of the characters matters. For my designer study I chose Morag Myerscough, whose bold colors and geometric patterns gave the poster its energy.": "Reuní capturas de la película y anoté lo que destacaba: la máquina del tiempo en neón, Marty con gorra y con gafas de sol, y lo mucho que importa la posición de los personajes. Para mi estudio de diseñadores elegí a Morag Myerscough, cuyos colores audaces y patrones geométricos le dieron su energía al póster.",
  "Sketched 15 ideas, then 5": "Bocetos: 15 ideas, luego 5",
  "The brief asked for 15 thumbnails, each a unique concept with the main image, the title and a block for credits. Mine used the DeLorean, Marty, the hoverboard and the clock tower. I refined my top 5 with clean lines, the full title and the credit block. The final layout grew out of those: Marty with the DeLorean, the gull-wing doors open and a bold title in perspective.": "La tarea pedía 15 miniaturas, cada una un concepto distinto con la imagen principal, el título y un bloque para los créditos. Las mías usaban el DeLorean, a Marty, la patineta voladora y la torre del reloj. Refiné mis 5 mejores con líneas limpias, el título completo y el bloque de créditos. El diseño final salió de ellas: Marty con el DeLorean, las puertas de ala de gaviota abiertas y un título audaz en perspectiva.",
  "Drew it in vector": "Lo dibujé en vector",
  "Following the brief, I made the whole poster in Illustrator with no photos or effects. I drew Marty, Doc Brown, Einstein and the DeLorean with clean outlines, then built the striped road, the arrows and the title around them, with top billing, credits and studio logos laid out like a real movie poster.": "Siguiendo la tarea, hice todo el póster en Illustrator, sin fotos ni efectos. Dibujé a Marty, Doc Brown, Einstein y el DeLorean con contornos limpios, y construí a su alrededor el camino de franjas, las flechas y el título, con los actores principales, los créditos y los logos de estudio como en un póster de cine real.",
  "Reworked it for portfolio review": "Lo retrabajé para la revisión de portafolio",
  "In 2026 I went back to the poster for my portfolio review class and changed only its color. I kept the drawing as it was, finished coloring the outlines and moved the palette closer to Myerscough: pink, orange, yellow, green and purple stripes behind a teal DeLorean.": "En 2026 volví al póster para mi clase de revisión de portafolio y solo cambié su color. Mantuve el dibujo como estaba, terminé de colorear los contornos y acerqué la paleta a Myerscough: franjas rosas, naranjas, amarillas, verdes y moradas detrás de un DeLorean turquesa.",
  "Took it to the street": "Lo llevé a la calle",
  "In Photoshop I placed the poster on a city billboard, on a brick wall under a rail bridge and on a billboard at night, to see how it reads at street scale, by day and after dark.": "En Photoshop coloqué el póster en una valla de la ciudad, en una pared de ladrillo bajo un puente de tren y en una valla de noche, para ver cómo se lee a escala de calle, de día y de noche.",
  "Built an 8 ft lobby standee": "Creé un standee de 8 pies para el vestíbulo",
  "I split the artwork into layers for an 8 ft floor standee: a back panel, a raised layer with the DeLorean and the characters, a raised title, and a base with COMING SOON, SUMMER 2027 and Myerscough-style color bars. Then I placed it in a theater lobby mockup.": "Dividí la ilustración en capas para un standee de piso de 8 pies: un panel de fondo, una capa elevada con el DeLorean y los personajes, un título elevado y una base con COMING SOON, SUMMER 2027 y barras de color al estilo de Myerscough. Luego lo coloqué en un mockup del vestíbulo de un cine.",
  "The 8 ft layered floor standee in a theater lobby.": "El standee de piso de 8 pies, en capas, en el vestíbulo de un cine.",
  "The poster on a street wall.": "El póster en una pared de la calle.",
  "The billboard at night.": "La valla de noche.",
  "The 15 thumbnail sketches and the 5 refined layouts that led to the final poster.": "Los 15 bocetos en miniatura y los 5 diseños refinados que llevaron al póster final.",
  "A 2024 class assignment became a small campaign that shows one illustration working at every size, from a poster to a billboard to an 8 ft standee. Coming back to it two years later showed me how much color alone can change a finished piece, and building the standee made me think of the artwork in layers instead of as one flat image.": "Una tarea de clase de 2024 se convirtió en una pequeña campaña que muestra una ilustración funcionando en todos los tamaños, del póster a la valla y a un standee de 8 pies. Volver a ella dos años después me mostró cuánto puede cambiar una pieza terminada solo con el color, y crear el standee me hizo pensar la ilustración en capas en vez de como una imagen plana."
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
const mainSections = ['home','about','more-projects','contact'];

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
