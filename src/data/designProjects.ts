export interface DesignProjectPost {
  num: string;
  headline: string;
  supporting: string;
  theme?: string;
  image?: string;
}

export interface DesignProjectSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
}

export interface DesignProjectVideo {
  id: string;
  title: string;
  category: string;
  description: string;
}

export interface DesignProject {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  tags: string[];
  cover: string;
  featured: boolean;
  role: string;
  client: string;
  description: string;
  deliverables: string[];
  tools: string;
  decisions?: string[];
  posts?: DesignProjectPost[];
  videos?: DesignProjectVideo[];
  sections?: DesignProjectSection[];
  details?: { label: string; value: string }[];
  gallery: string[];
}

export const designProjects: DesignProject[] = [
  {
    slug: 'incodet-brand-identity',
    title: 'Incodet — Brand Identity & Design System',
    category: 'Branding',
    year: '2026',
    summary:
      'Building a consistent visual identity for a modern software company — logo system, colour, typography, and applications that stay recognisable on every surface.',
    tags: ['Brand Identity', 'Visual Design', 'Design Systems', 'Digital Branding'],
    cover: '/assets/images/Incodet-Brand-Identity_(1) copy.png',
    featured: true,
    role: 'Brand identity and visual design',
    client: 'Incodet',
    description:
      'Incodet is a software development company focused on turning ideas into scalable digital products. Its services include web applications, mobile apps, SaaS platforms, and custom software development.\n\nThe goal of this project was to establish a clear and consistent visual identity that reflects the company’s technical focus, modern approach, and ambition to help businesses bring digital ideas to life.\n\nRather than creating a logo in isolation, I developed a broader visual system covering the brand’s logo variations, colors, typography, interface elements, and marketing applications. The intention was to make Incodet recognizable across its website, social media, business materials, and future digital products.',
    deliverables: [
      'Brand identity board',
      'Logo applications',
      'Color palette',
      'Typography specification',
      'Component styles',
      'Digital application concepts',
    ],
    tools: 'Canva, Claude',
    sections: [
      {
        heading: 'The Challenge',
        paragraphs: [
          'Software companies often rely on similar visual elements: dark backgrounds, blue accents, technical imagery, and familiar interface patterns. While these elements communicate a technology-focused identity, using them without a consistent visual direction can make a brand feel generic.',
          'Incodet needed an identity that felt professional and technology-driven while remaining flexible enough to work across different platforms and communication formats.',
          'The challenge was to create a system that could maintain a recognizable identity across dark and light surfaces, accommodate different content types, and support the company’s long-term growth without making every design look the same.',
        ],
      },
      {
        heading: 'Design Objectives',
        paragraphs: ['The project was guided by five main objectives:'],
        bullets: [
          'Establish a recognizable identity: build a visual language around Incodet’s distinctive angular symbol and wordmark.',
          'Create consistency: define reusable rules for color, typography, spacing, shapes, and interface elements.',
          'Balance simplicity with character: use a minimal foundation supported by carefully applied blue and gradient accents.',
          'Support different applications: ensure the identity works across websites, social media graphics, business cards, and promotional materials.',
          'Build for scalability: create a system that can be extended as the company’s services, products, and marketing needs evolve.',
        ],
      },
      {
        heading: 'Brand Strategy',
        paragraphs: [
          'The central brand idea is expressed through the tagline: “Turning Ideas Into Scalable Software.”',
          'This statement communicates the role Incodet aims to play: helping transform concepts into useful digital products that can grow with a business.',
          'The visual direction translates this idea into a modern, structured, technology-focused identity. A dark foundation provides depth, electric blue introduces energy and emphasis, and a restrained range of supporting colors adds flexibility.',
          'The overall direction is minimal and confident, with clear typography, strong hierarchy, controlled use of gradients, and enough space for the content to remain the focus.',
        ],
      },
      {
        heading: 'Logo System',
        paragraphs: [
          'The Incodet logo combines an angular symbol with a clean lowercase wordmark. The symbol provides a distinctive visual element that can be recognized independently, while the wordmark makes the company name clear and readable.',
          'The identity includes two primary logo treatments:',
        ],
        bullets: [
          'Dark-background version — a blue-to-cyan gradient symbol paired with a light wordmark. This is the main treatment for dark surfaces and technology-focused compositions.',
          'Light-background version — a white symbol and wordmark placed against the brand’s electric-blue background. This version offers a high-contrast alternative for bold promotional graphics and selected brand applications.',
        ],
      },
      {
        heading: 'Colour System',
        paragraphs: [
          'The color palette establishes the visual foundation of the identity. Each color has a defined role, allowing the brand to maintain consistency while accommodating different layouts and content requirements.',
        ],
        table: {
          headers: ['Colour', 'Hex', 'Purpose'],
          rows: [
            ['Ink', '#0A0B11', 'Primary dark background and visual foundation'],
            ['Electric', '#155DFC', 'Primary accent for buttons, links, emphasis, and calls to action'],
            ['Violet', '#8B5CF6', 'Secondary accent for gradient details and selected highlights'],
            ['Teal', '#10C4A0', 'Supporting accent for freshness and variation'],
            ['Slate', '#62748E', 'Muted text, secondary information, and supporting interface elements'],
            ['Mist', '#F8F9FA', 'Primary light text and light-background applications'],
          ],
        },
      },
      {
        heading: 'Gradient & Balance',
        paragraphs: [
          'The signature gradient moves from deep blue through electric blue and violet to teal. It adds movement and depth without requiring every design element to use a gradient.',
          'A dark-first approach keeps the brand visually grounded, while electric blue provides a clear focal point. Violet and teal are used more selectively so that the palette remains controlled rather than competing for attention.',
        ],
      },
      {
        heading: 'Typography',
        paragraphs: [
          'Typography plays an important role in making the brand feel clear, modern, and technically capable.',
          'Geist — primary typeface. Geist is used for headings, body copy, and interface text. Its clean sans-serif design supports readable layouts, strong headline hierarchy, and consistent presentation across digital applications.',
          'Different weights establish the hierarchy between headlines, supporting statements, body text, and calls to action. Larger, heavier headings provide emphasis, while regular and medium weights keep supporting information readable.',
          'Geist Mono — technical typeface. Geist Mono is used for technical details, labels, code-related content, metadata, and compact supporting information. Its monospaced appearance introduces a subtle technical character and creates a visual distinction between primary communication and secondary system information.',
          'Together, the two typefaces establish a clear relationship between the brand’s human-facing messaging and its technology-focused subject matter.',
        ],
      },
      {
        heading: 'Shape Language & Interface Components',
        paragraphs: [
          'The visual system uses rounded corners, pill-shaped buttons, restrained borders, and clearly separated content areas.',
          'The base corner radius is 14px, while buttons and other pill-shaped elements use fully rounded edges. A consistent 4px spacing grid supports alignment and helps maintain predictable relationships between components.',
          'The component system includes three primary button styles:',
        ],
        bullets: [
          'Book a Call — a light button designed for a clear, direct action.',
          'View Our Work — a dark secondary button for portfolio and project discovery.',
          'Start a Project — an electric-blue primary button that draws attention to the main conversion action.',
        ],
      },
      {
        heading: 'Component Principles',
        paragraphs: [
          'These elements follow a consistent visual language while allowing different actions to have different levels of emphasis.',
          'The same principles guide cards, social graphics, interface previews, and other promotional components. Reusable visual rules make it easier to create new materials without rebuilding the identity from scratch.',
        ],
      },
      {
        heading: 'Brand Applications',
        paragraphs: [
          'A visual identity becomes more useful when it can be applied consistently across real touchpoints. To explore this, I developed a set of application concepts showing how Incodet’s identity translates into different formats.',
          'Social media graphics — the social media concepts use bold headlines, dark backgrounds, carefully placed blue accents, and concise messaging. They demonstrate how the identity can communicate the company’s positioning in a limited amount of space. One concept uses the headline “Launch in weeks, not months.” to explore a SaaS-focused message, supported by the brand’s electric-blue-to-violet gradient. Another uses “Ideas in. Software out.” to present a more direct, graphic interpretation of the company’s role.',
          'Business cards — the business card concepts explore dark and light treatments of the same identity. The dark version uses the blue gradient symbol against a near-black background, while the light version introduces a brighter surface with a restrained blue accent. The purpose is to maintain recognition across different treatments without changing the underlying identity.',
          'Digital and website applications — the same visual principles extend into web pages and SaaS interfaces through dark surfaces, clear typography, controlled color accents, rounded components, and consistent spacing. This creates a foundation that can connect marketing materials with the company’s digital presence.',
        ],
      },
      {
        heading: 'Design Process',
        paragraphs: [
          'The project began by defining the direction Incodet should communicate: modern, reliable, technically capable, and focused on building scalable software.',
          'From there, I organized the identity into a set of connected visual decisions.',
          'First, I established the logo treatments and core color palette. Next, I defined the typography and supporting visual rules, including spacing, corner radii, gradients, and button hierarchy.',
          'I then applied these rules to example social media graphics and business cards to explore how the identity performs across different formats. This application stage helped connect the brand guidelines with practical design outputs.',
          'The final system brings these elements together into a unified reference that can guide future website updates, promotional campaigns, and marketing materials.',
        ],
      },
      {
        heading: 'The Outcome',
        paragraphs: [
          'The result is a cohesive brand identity system for Incodet, built around a recognizable logo, a structured color palette, a consistent typographic hierarchy, and reusable interface components.',
          'Instead of treating each design as a separate creative exercise, the system provides a shared foundation for producing new materials across the company’s digital presence.',
          'The project establishes a direction for how Incodet presents itself visually: minimal, technology-focused, and driven by clear communication. It also provides a starting point for extending the identity into future advertising campaigns, service promotions, and product interfaces.',
        ],
      },
      {
        heading: 'Key Takeaway',
        paragraphs: [
          'A strong brand identity is not just a logo or a color palette. It is a set of visual decisions that work together wherever the brand appears.',
          'Through this project, I explored how typography, color, layout, and reusable components can create consistency while leaving enough flexibility for different communication needs.',
          'For Incodet, the objective was to create an identity that communicates one central idea across every touchpoint: turning ideas into scalable software.',
        ],
      },
    ],
    details: [
      { label: 'Project', value: 'Incodet Brand Identity & Design System' },
      { label: 'Brand', value: 'Incodet' },
      { label: 'Project Type', value: 'Brand identity and visual system' },
      {
        label: 'Scope',
        value: 'Logo variations, color system, typography, shape language, interface components, social media graphics, and business card concepts',
      },
      {
        label: 'Primary Deliverables',
        value: 'Brand identity board, logo applications, color palette, typography specification, component styles, and digital application concepts',
      },
      {
        label: 'Design Focus',
        value: 'Branding, visual consistency, digital design, and marketing applications',
      },
    ],
    gallery: ['/assets/images/Incodet-Brand-Identity_(1) copy.png'],
  },
  {
    slug: 'incodet-social-media-set',
    title: 'Incodet — Social Media Design Set',
    category: 'Social Media Design',
    year: '2026',
    summary:
      'A cohesive nine-post social media system for a modern software development brand — visually consistent yet individually distinctive.',
    tags: ['Social Media Design', 'Digital Branding', 'Art Direction', 'Campaign Design'],
    cover: '/assets/images/design-projects/incodet-social-set/Incodet-Social-Set_(1).png',
    featured: true,
    role: 'Social media design and art direction',
    client: 'Incodet',
    description:
      'Incodet is a software development company focused on turning ideas into scalable digital products, including websites, mobile applications, SaaS platforms, and custom software solutions.\n\nThis project explores how Incodet can communicate its services, capabilities, and brand personality through a cohesive collection of social media graphics.\n\nThe goal was to create a set of visually consistent yet individually distinctive posts that introduce the brand, communicate its offerings, explain its development approach, and encourage potential clients to start a conversation.\n\nRather than treating every post as an isolated design, I approached the collection as a unified social media series built around Incodet\u2019s existing brand identity.',
    deliverables: [
      'Nine social media graphic concepts',
      'Instagram and LinkedIn formats, portrait 4:5',
      'Brand introduction, service promotion, AI automation, positioning, process, and lead-generation posts',
    ],
    tools: 'Canva, Claude',
    sections: [
      {
        heading: 'The Challenge',
        paragraphs: [
          'Software development can be difficult to communicate through static graphics. Technical services often involve complex processes, abstract concepts, and features that may not be immediately clear to a potential client.',
          'The challenge was to make Incodet\u2019s services easier to understand while keeping the designs visually engaging and consistent with the company\u2019s technology-focused identity.',
          'Each graphic needed a clear message, a strong visual hierarchy, and enough variation to keep the collection interesting. At the same time, the designs needed to work together as a recognizable brand presence across social media.',
        ],
      },
      {
        heading: 'Creative Direction',
        paragraphs: [
          'The creative direction builds on Incodet\u2019s established visual identity, using a dark-first color palette, electric-blue accents, bold typography, subtle gradients, and clean interface-inspired elements.',
          'I explored a balance between minimal layouts and more expressive compositions. Some designs focus on large headlines and concise messaging, while others use interface mockups, workflow diagrams, and graphic elements to communicate specific ideas.',
          'The series uses a combination of dark backgrounds, light editorial-style cards, and blue-to-violet gradients. This variation helps distinguish different types of content without losing the overall brand identity.',
          'The visual language is intentionally modern and structured, reflecting Incodet\u2019s work in software development and digital product creation.',
        ],
      },
      {
        heading: 'Design Objectives',
        paragraphs: ['The project was guided by four main objectives:'],
        bullets: [
          'Communicate services clearly: present web development, mobile applications, SaaS products, and AI automation in an accessible way.',
          'Build brand recognition: apply the established Incodet logo, typography, colors, and visual elements consistently.',
          'Create content variety: explore service introductions, educational messages, process explanations, technical visuals, and calls to action.',
          'Encourage engagement: use concise headlines and clear next steps to make the graphics suitable for marketing communication.',
        ],
      },
      {
        heading: 'Visual System',
        paragraphs: [
          'Consistency across the nine graphics was achieved by applying the same underlying brand rules while allowing each post to communicate its message differently.',
        ],
        bullets: [
          'Colour \u2014 the core palette uses Ink (#0A0B11), Electric (#155DFC), Violet (#8B5CF6), Teal (#10C4A0), Slate (#62748E), and Mist (#F8F9FA). Dark backgrounds establish the technology-focused foundation. Electric blue highlights important messages and interface elements, while violet and teal provide selected contrast and variation. Light-background layouts are used selectively to create visual rhythm throughout the collection.',
          'Typography \u2014 bold sans-serif typography establishes the main headlines, while smaller supporting text provides context without competing with the primary message. Large type treatments help the posts communicate quickly in a social media environment. Compact labels, numbering, and technical-style details introduce structure and reinforce the identity system.',
          'Layout and composition \u2014 the collection uses rounded cards, subtle borders, structured grids, interface-inspired elements, and controlled negative space. Some graphics rely on typography as the main visual element, while others use mockups, diagrams, timelines, or lists. This variation helps each post serve a different communication purpose within the same visual system.',
          'Brand consistency \u2014 the Incodet symbol, established palette, and recognizable typography connect the individual concepts. Consistency comes from shared visual rules rather than repeating the exact same layout nine times.',
        ],
      },
      {
        heading: 'Design Process',
        paragraphs: [
          'The process began with the Incodet brand identity and design system as the foundation for the social media series.',
          'I then developed a range of content concepts around the company\u2019s services, positioning, development process, and potential client actions.',
          'Each concept was organized around a primary message and a supporting visual. I explored how typography, color, and layout could reinforce that message, then applied the established brand rules to maintain consistency across the collection.',
          'The final stage focused on creating a balanced sequence of graphics, mixing bold promotional posts with informative layouts and technical visual treatments.',
        ],
      },
      {
        heading: 'The Outcome',
        paragraphs: [
          'The result is a nine-post conceptual social media set exploring how Incodet can present its services and communicate its brand identity through different types of content.',
          'The collection includes brand introduction, service promotion, AI automation messaging, company positioning, process explanation, and lead-generation concepts.',
          'Together, the designs demonstrate how a consistent brand system can support a varied social media presence without making every post look identical.',
          'The project also provides a foundation for future content, allowing additional graphics to be developed using the same visual principles.',
        ],
      },
      {
        heading: 'Key Takeaway',
        paragraphs: [
          'Effective social media design requires more than a visually attractive graphic. Each post needs a clear communication goal, a well-structured layout, and a recognizable connection to the brand.',
          'Through this project, I explored how a single visual identity can support different messages across an entire content series, balancing consistency with variation and visual impact with clarity.',
          'The result is a flexible design direction for presenting Incodet\u2019s services in a modern, approachable, and visually cohesive way.',
        ],
      },
    ],
    details: [
      { label: 'Project', value: 'Incodet Social Media Design Set' },
      { label: 'Brand', value: 'Incodet' },
      { label: 'Project Type', value: 'Concept social media campaign' },
      { label: 'Deliverables', value: 'Nine social media graphic concepts' },
      { label: 'Intended Platforms', value: 'Instagram and LinkedIn' },
      { label: 'Format', value: 'Portrait, 4:5 aspect ratio' },
      {
        label: 'Focus Areas',
        value: 'Social media design, digital branding, art direction, typography, visual hierarchy, content design, and service promotion',
      },
    ],
    posts: [
      {
        num: '01',
        headline: 'Web. App. AI.',
        theme: 'Introducing Incodet\u2019s capabilities',
        image: '/assets/images/design-projects/incodet-social-set/posts/01-web-app-ai.png',
        supporting:
          'The opening graphic introduces three core areas of digital product development through an oversized typographic composition. The words \u201cWeb. App. AI.\u201d establish a direct and memorable headline, supported by a concise statement about software for local and global businesses. The restrained background and gradient accent keep the focus on the message, making this concept suitable as an introductory brand post.',
      },
      {
        num: '02',
        headline: 'Websites That Bring Customers.',
        theme: 'Website development',
        image: '/assets/images/design-projects/incodet-social-set/posts/02-websites-that-bring-customers.png',
        supporting:
          'This design focuses on website development through a clean, light-background composition and a simplified browser interface. The headline communicates the intended value of a business website, while the interface illustration gives the message a concrete visual reference. The contrast between the light card and dark interface also introduces visual variety into the broader series.',
      },
      {
        num: '03',
        headline: 'Mobile Apps People Keep Opening.',
        theme: 'Mobile application development',
        image: '/assets/images/design-projects/incodet-social-set/posts/03-mobile-apps-people-keep-opening.png',
        supporting:
          'A vibrant electric-blue background, a simplified mobile interface, and a prominent headline create a bold visual treatment for mobile app development. The composition uses a device mockup as its main supporting visual, keeping the subject immediately recognizable without relying on a complex technical explanation. The post expands the campaign beyond websites while maintaining the same typography and brand colors.',
      },
      {
        num: '04',
        headline: 'AI That Handles the Busy Work.',
        theme: 'AI automation',
        image: '/assets/images/design-projects/incodet-social-set/posts/04-ai-that-handles-the-busy-work.png',
        supporting:
          'This graphic explores AI automation through conversational interface elements. Example messages demonstrate how an assistant might handle routine business interactions and help draft responses. The design uses contrasting message bubbles and a dark-to-violet background to create a visual narrative around automation. Rather than presenting AI as an abstract technology, the concept illustrates practical tasks that businesses may be able to automate. The interface is a visual example, not a representation of a deployed Incodet product.',
      },
      {
        num: '05',
        headline: 'Local Roots. Global Reach.',
        theme: 'Brand positioning',
        image: '/assets/images/design-projects/incodet-social-set/posts/05-local-roots-global-reach.png',
        supporting:
          'This concept presents Incodet\u2019s positioning through a central logo surrounded by orbit-like circles and colored markers. The circular composition suggests connection, movement, and a broader digital ecosystem. Its restrained use of color and negative space provides a visual break from the more text-heavy designs. The goal is to communicate an ambitious, connected brand identity through a simple graphic rather than a detailed product illustration.',
      },
      {
        num: '06',
        headline: 'What We Build.',
        theme: 'Service overview',
        image: '/assets/images/design-projects/incodet-social-set/posts/06-what-we-build.png',
        supporting:
          'A clean, light-background layout introduces three service categories: websites, mobile applications, and AI automation. The structured list, clear numbering, and blue directional icons make the information easy to scan. This design takes a more informative approach, helping viewers understand the company\u2019s areas of focus without overwhelming them with technical details.',
      },
      {
        num: '07',
        headline: 'Idea to Live, in Weeks.',
        theme: 'The development process',
        image: '/assets/images/design-projects/incodet-social-set/posts/07-idea-to-live-in-weeks.png',
        supporting:
          'This concept presents the journey from an initial idea to a live digital product through four stages: Plan, Design, Build, and Launch. A vertical timeline gives the process a clear visual structure, while the blue and violet accents connect it to the broader brand identity. The accompanying headline communicates momentum and a streamlined approach to product development. The timing is conceptual marketing messaging, not a guarantee that every project will launch within a particular period.',
      },
      {
        num: '08',
        headline: 'Have an Idea? Let\u2019s Build It.',
        theme: 'Lead generation',
        image: '/assets/images/design-projects/incodet-social-set/posts/08-have-an-idea-lets-build-it.png',
        supporting:
          'A bold blue-to-violet gradient, centered Incodet symbol, and prominent call to action create a direct promotional graphic. The message is intentionally simple: invite potential clients to bring an idea forward and start a conversation. The rounded \u201cBook a Call\u201d button establishes a clear action and demonstrates how the brand\u2019s visual system can support conversion-focused social media content.',
      },
      {
        num: '09',
        headline: 'Production-Ready, Not Prototype.',
        theme: 'Software quality and delivery',
        image: '/assets/images/design-projects/incodet-social-set/posts/09-production-ready-not-prototype.png',
        supporting:
          'The final concept uses a dark background, a prominent headline, and a code-editor illustration to communicate a focus on practical software delivery. The code snippet introduces a technical visual element, reinforcing the development theme while giving the layout a different character from the other posts. The distinction between a prototype and production-ready software serves as the central message, positioning the concept around building digital products intended for real-world use.',
      },
    ],
    gallery: ['/assets/images/design-projects/incodet-social-set/Incodet-Social-Set_(1).png'],
  },
  {
    slug: 'incodet-ad-creatives-posters-flyers',
    title: 'Incodet \u2014 Ad Creatives, Posters & Flyers',
    category: 'Advertising Design',
    year: '2026',
    summary:
      'A multi-format advertising campaign for a modern software development brand \u2014 digital ads, conceptual posters, and an informational flyer under one identity.',
    tags: [
      'Art Direction',
      'Advertising Design',
      'Promotional Graphics',
      'Digital Branding',
      'Layout Design',
    ],
    cover: '/assets/images/design-projects/incodet-flyer/Incodet-Flyer-A4.png',
    featured: true,
    role: 'Art direction and design',
    client: 'Incodet',
    description:
      'Incodet is a software development company focused on turning ideas into scalable digital products, including websites, mobile applications, SaaS platforms, and custom software solutions.\n\nThis project explores how Incodet can promote its services through a collection of digital advertisements, conceptual posters, and an informational flyer. The goal was to communicate the company\u2019s value, make its services easier to understand, and create visually engaging marketing materials that remain consistent with the established brand identity.\n\nRather than using one layout for every design, I explored several creative directions, from minimal typography-led compositions to cinematic 3D imagery, interface mockups, and structured service layouts.\n\nEach piece serves a different communication purpose while maintaining the same foundation of typography, color, branding, and visual hierarchy.',
    deliverables: [
      'Six design concepts',
      'One A4 flyer, digital ad creatives, and promotional posters',
      'Minimal typography-led, bold gradient, interface-led, and cinematic conceptual directions',
      'Social media, digital campaign, service promotion, and informational marketing uses',
    ],
    tools: 'Canva, Claude',
    sections: [
      {
        heading: 'The Challenge',
        paragraphs: [
          'Software development services can be difficult to communicate through static advertising. Potential clients may know they need a website or digital product but may not understand the possibilities, the development process, or how a software partner can help.',
          'The challenge was to turn these services into clear, visually compelling messages without relying on lengthy technical explanations.',
          'At the same time, the designs needed to work across different formats and creative approaches. A service flyer should be informative and easy to scan, while an advertising poster needs a strong focal point and a memorable headline.',
          'The task was to balance clarity, visual impact, and brand consistency across the entire collection.',
        ],
      },
      {
        heading: 'Design Objectives',
        paragraphs: ['The project was guided by five main objectives:'],
        bullets: [
          'Communicate services clearly: present website development, mobile applications, SaaS products, AI automation, and custom software through accessible messaging.',
          'Build brand recognition: use Incodet\u2019s logo, color palette, typography, and visual language consistently.',
          'Explore different creative directions: combine minimal layouts, bold gradients, conceptual visuals, and interface-inspired compositions.',
          'Support different marketing needs: develop materials that can serve as social media advertisements, promotional posters, and informational flyers.',
          'Encourage action: incorporate clear calls to action that invite potential clients to learn more or discuss a project.',
        ],
      },
      {
        heading: 'Creative Direction',
        paragraphs: [
          'The collection builds on Incodet\u2019s established brand identity: a modern, technology-focused visual system built around dark backgrounds, electric-blue accents, clean typography, and controlled gradients.',
          'I explored three complementary visual directions.',
        ],
        bullets: [
          '01. Clean and informative \u2014 light backgrounds, subtle grid patterns, rounded service cards, interface mockups, and structured content make information easier to navigate. The compositions are designed to communicate Incodet\u2019s services quickly, making them suitable for informational graphics and service-focused advertising.',
          '02. Bold and contemporary \u2014 large typography, strong color fields, blue-to-violet gradients, and simplified 3D elements. Instead of explaining every service in detail, these designs focus on one central message. Their purpose is to grab attention, communicate a clear idea, and establish a recognizable visual presence.',
          '03. Cinematic and conceptual \u2014 glowing objects, reflective surfaces, atmospheric lighting, and futuristic compositions. These concepts use visual metaphors to communicate the transformation of ideas into real digital products. They give the brand a more expressive advertising style while retaining its core blue and cyan identity.',
          'Together, these approaches demonstrate how the same brand can support different visual moods without losing consistency.',
        ],
      },
      {
        heading: 'Visual System',
        paragraphs: [
          'Although the individual pieces use different compositions, they follow a shared set of brand principles.',
        ],
        bullets: [
          'Colour \u2014 the established Incodet palette provides the foundation: Ink (#0A0B11) for primary dark surfaces, Electric (#155DFC) as the main accent for headlines, buttons, and emphasis, Violet (#8B5CF6) as the secondary gradient accent, Teal (#10C4A0) as a supporting highlight, Slate (#62748E) for secondary text, and Mist (#F8F9FA) for light surfaces and primary text. The flyer and clean advertising concepts use more light space to improve readability, while the cinematic posters lean on dark navy and intense blue lighting.',
          'Typography \u2014 bold sans-serif typography establishes the main headlines, while smaller supporting copy explains the services or provides context. Large text creates a clear focal point in the posters, while the flyer and service-led graphics use more structured typography to organize multiple pieces of information.',
          'Composition and visual hierarchy \u2014 each design prioritizes one main message or visual element. Some rely on oversized headlines, while others use a dashboard interface, a conceptual object, or a sequence of service cards. Supporting information is arranged around this focal point rather than competing with it.',
          'Brand consistency \u2014 the Incodet symbol, wordmark, established color palette, and technology-focused visual language create continuity throughout the collection. The goal is not to make every piece identical, but to ensure each design feels like part of the same brand even when the layout, background, and visual concept change.',
        ],
      },
      {
        heading: 'Design Process',
        paragraphs: [
          'The process began with the Incodet brand identity and design system, which established the visual rules used throughout the campaign.',
          'I then organized the concepts around different marketing needs: explaining services, promoting website and app development, encouraging potential clients to start a project, and communicating the company\u2019s overall positioning.',
          'For each concept, I explored a central headline, supporting visual, color treatment, and layout. I used interface mockups, typography, 3D-style imagery, and graphic elements to develop different ways of communicating the same brand message.',
          'The designs were then brought together as a multi-format collection, balancing informational layouts with more expressive and conceptual advertising treatments.',
        ],
      },
      {
        heading: 'The Outcome',
        paragraphs: [
          'The result is a collection of six promotional design concepts for Incodet, covering an A4 flyer, service-led advertising graphics, and conceptual posters.',
          'The collection demonstrates how a single brand identity can be adapted to different communication goals, from explaining services clearly to creating a more memorable visual statement.',
          'The range of compositions also establishes a foundation for future marketing materials, allowing Incodet to explore new messages and formats while maintaining a consistent visual presence.',
        ],
      },
      {
        heading: 'Key Takeaway',
        paragraphs: [
          'Effective advertising design begins with a clear message. Typography, composition, color, and imagery should work together to make that message easy to understand and difficult to overlook.',
          'Through this project, I explored how Incodet\u2019s identity can move beyond a logo and color palette into a flexible visual language for service promotion and brand storytelling.',
          'The aim was to make complex digital services more approachable while giving the brand a confident, contemporary, and recognizable presence.',
        ],
      },
    ],
    posts: [
      {
        num: '01',
        headline: 'Your Shop Deserves a Website',
        theme: 'A4 promotional flyer',
        image: '/assets/images/design-projects/incodet-flyer/Incodet-Flyer-A4.png',
        supporting:
          'A practical, business-focused approach to website promotion. The headline speaks directly to business owners, while the service cards introduce websites, mobile applications, and AI automation. A four-stage timeline \u2014 Plan, Design, Build, and Launch \u2014 provides a simplified overview of the development process, and the bottom section introduces a call to action and a QR-code placement. The composition combines an informative layout with clear typography and accessible interface illustrations.',
      },
      {
        num: '02',
        headline: 'Websites That Work. Software That Scales.',
        theme: 'Digital advertising creative',
        image: '/assets/images/incodet-ads/Incodet-Ad-C-Websites-That-Work copy.png',
        supporting:
          'A light editorial layout with an oversized headline and a large software dashboard illustration. The headline establishes the main message immediately, while the dashboard provides a visual representation of digital product development. Blue and violet accents connect the interface to the Incodet identity. The design demonstrates how a service advertisement can communicate both the immediate purpose of a website and the broader idea of building software that can evolve with a business.',
      },
      {
        num: '03',
        headline: 'Website & App Development',
        theme: 'Promotional poster',
        image: '/assets/images/incodet-ads/Incodet-Ad-B-Web-App-Development copy.png',
        supporting:
          'A bold, gradient-led composition using large white typography and floating translucent panels labelled Web, App, and AI. The panels transform Incodet\u2019s service categories into a simple visual system. The bright blue and cyan palette creates depth while keeping the headline prominent. The result is a direct service-promotion concept that introduces the company\u2019s capabilities through a minimal but expressive visual treatment.',
      },
      {
        num: '04',
        headline: 'Switch Your Idea On.',
        theme: 'Conceptual advertising creative',
        image: '/assets/images/incodet-ads/Incodet-Ad-A-Switch-It-On copy.png',
        supporting:
          'The central visual is an oversized illuminated switch with the Incodet symbol integrated into its design. The headline connects the physical action of switching something on with the process of moving from an idea to a functioning digital product. Supporting labels introduce websites, mobile applications, and AI automation. The dark background, glowing gradient, and strong central metaphor give this concept a distinct identity within the collection.',
      },
      {
        num: '05',
        headline: 'Your Idea. Enter Reality.',
        theme: 'Cinematic conceptual poster',
        image: '/assets/images/design-projects/incodet-ads/Enter_Reality__From_Concept_to_Launch.png',
        supporting:
          'This poster explores the idea of turning an initial concept into a finished digital product through a visual journey. A sequence of illuminated keyboard keys leads toward a large Enter-key portal. Each step represents part of the process, including web development, UI/UX design, mobile applications, and SaaS platforms. The dark navy environment, electric-blue lighting, reflective surfaces, and glowing portal create a cinematic atmosphere.',
      },
      {
        num: '06',
        headline: 'Build Smarter Digital Experiences.',
        theme: 'Digital development poster',
        image: '/assets/images/design-projects/incodet-ads/INCODET_Digital_Development_Poster.png',
        supporting:
          'The final concept uses a dramatic 3D sculpture of code brackets emerging from a rugged, illuminated landscape. The bold \u201cWebsite & App Development\u201d headline is supported by service labels for custom websites, mobile applications, SaaS platforms, and ongoing support. Rock textures, blue crystalline edges, and intense rim lighting give the technical subject a tangible visual form, connecting software development with ideas of structure, engineering, and building something substantial.',
      },
    ],
    details: [
      { label: 'Project', value: 'Incodet \u2014 Ad Creatives, Posters & Flyers' },
      { label: 'Brand', value: 'Incodet' },
      { label: 'Project Type', value: 'Concept advertising and promotional design collection' },
      {
        label: 'Deliverables',
        value:
          'Six design concepts, including one A4 flyer, digital ad creatives, and promotional posters',
      },
      {
        label: 'Intended Uses',
        value: 'Social media, digital campaigns, service promotion, and informational marketing',
      },
      {
        label: 'Focus Areas',
        value:
          'Art direction, advertising design, visual hierarchy, typography, digital branding, conceptual imagery, layout design, and calls to action',
      },
    ],
    gallery: [
      '/assets/images/design-projects/incodet-flyer/Incodet-Flyer-A4.png',
      '/assets/images/incodet-ads/Incodet-Ad-C-Websites-That-Work copy.png',
      '/assets/images/incodet-ads/Incodet-Ad-B-Web-App-Development copy.png',
      '/assets/images/incodet-ads/Incodet-Ad-A-Switch-It-On copy.png',
      '/assets/images/design-projects/incodet-ads/Enter_Reality__From_Concept_to_Launch.png',
      '/assets/images/design-projects/incodet-ads/INCODET_Digital_Development_Poster.png',
    ],
  },
  {
    slug: 'motion-graphics-explainer-videos',
    title: 'Incodet — Motion Graphics & Explainer Videos',
    category: 'Motion Graphics & Explainer Videos',
    year: '2026',
    summary:
      'A collection of five video pieces exploring how motion, visual storytelling, and informative content can communicate Incodet\u2019s brand and software services.',
    tags: ['Motion Graphics', 'Explainer Videos', 'Video Editing', 'Visual Storytelling'],
    cover: '/assets/images/design-projects/motion/cover.jpg',
    featured: true,
    role: 'Video editing and motion design',
    client: 'Incodet',
    description:
      'This collection explores video as a way to introduce Incodet, communicate its services, and make software-related concepts easier to understand.\n\nThe collection includes a launch video, motion graphics pieces, software demonstrations, and an infographic-style explainer \u2014 five videos created to extend Incodet\u2019s visual communication beyond static graphics.\n\nEach video serves a different communication purpose, from introducing the brand to demonstrating its services, while remaining consistent with the established brand identity.',
    deliverables: [
      'Launch video \u2014 brand introduction',
      'Motion graphics video \u2014 service communication',
      'Two software demonstration videos',
      'Infographic-style explainer video',
    ],
    tools: 'Video editing and motion design tools',
    videos: [
      {
        id: 'VqLrxVFuXpU',
        title: 'Incodet Launch Video',
        category: 'Brand introduction',
        description:
          'The opening piece of the collection \u2014 a launch video introducing Incodet\u2019s brand, positioning, and services through motion-led visual storytelling.',
      },
      {
        id: '0extwx62RKY',
        title: 'Incodet Infographics Video',
        category: 'Infographic explainer',
        description:
          'An infographic-style explainer using animated information graphics to make Incodet\u2019s services and development approach easier to understand at a glance.',
      },
      {
        id: 'Cj3vuGjuRfM',
        title: 'Incodet Motion Graphics Video',
        category: 'Motion graphics',
        description:
          'A motion graphics piece exploring how animated typography, transitions, and brand elements can communicate Incodet\u2019s services in a short, engaging format.',
      },
      {
        id: '9NNtnTTWve4',
        title: 'Incodet Demo',
        category: 'Software demonstration',
        description:
          'A demonstration video walking through Incodet\u2019s software offerings, using screen-led visuals and editing to show the product in motion rather than describing it statically.',
      },
      {
        id: '78EDZdQ4ARw',
        title: 'Incodet Demo 2',
        category: 'Software demonstration',
        description:
          'A second demonstration piece continuing the software showcase, exploring a different product surface and editing rhythm within the same brand system.',
      },
    ],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'This collection explores video as a way to introduce Incodet, communicate its services, and make software-related concepts easier to understand.',
          'Static graphics can present a message clearly, but video adds time, motion, and sequence \u2014 tools that suit explaining how software works and why it matters.',
          'The five pieces each serve a different communication purpose: introducing the brand, animating its services, demonstrating its software, and explaining its approach through information graphics.',
        ],
      },
      {
        heading: 'Creative Direction',
        paragraphs: [
          'The presentation follows Incodet\u2019s established identity: a modern, technology-focused aesthetic built on dark backgrounds, blue and cyan accents, clean typography, and consistent branding.',
          'The videos extend the same visual system used across the brand identity, social media, and advertising projects \u2014 so the collection reads as part of one coherent brand presence rather than a separate style.',
        ],
      },
      {
        heading: 'Video Formats',
        paragraphs: [
          'The collection brings together four complementary formats, each chosen for the message it needs to carry.',
        ],
        bullets: [
          'Brand launch video \u2014 introduces Incodet and its positioning through motion-led storytelling.',
          'Motion graphics \u2014 uses animated typography, shapes, and transitions to present services in a short, engaging format.',
          'Software demonstrations \u2014 show Incodet\u2019s products in use, letting the interface and editing carry the explanation.',
          'Infographic explainer \u2014 turns services and process information into animated graphics that are easy to follow at a glance.',
        ],
      },
      {
        heading: 'Design Approach',
        paragraphs: [
          'Each piece is structured around a clear visual sequence: an opening that sets the message, a middle that develops it, and a close that reinforces the brand.',
          'Messaging, typography, editing rhythm, and motion are kept deliberately simple so the content stays legible \u2014 motion supports the message rather than competing with it.',
          'Consistent branding across all five videos \u2014 logo placement, colour treatment, and type \u2014 connects the collection while each piece explores a different format.',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'The result is a five-video collection that extends Incodet\u2019s visual communication beyond static graphics.',
          'Together the pieces demonstrate how a single brand identity can move into time-based media \u2014 covering brand introduction, motion graphics, software demonstration, and infographic explainer formats \u2014 while remaining consistent across every video.',
        ],
      },
    ],
    details: [
      { label: 'Project', value: 'Incodet \u2014 Motion Graphics & Explainer Videos' },
      { label: 'Brand', value: 'Incodet' },
      { label: 'Project Type', value: 'Brand video and informative content' },
      { label: 'Deliverables', value: 'Five videos \u2014 launch, motion graphics, two demos, infographic explainer' },
      {
        label: 'Services Demonstrated',
        value: 'Video editing, motion graphics, visual storytelling, informative content, and digital branding',
      },
    ],
    gallery: [],
  },
  {
    slug: 'chajoy-advertising-campaign',
    title: 'CHaJOY \u2014 A Little Joy in Every Sip',
    category: 'Advertising Campaign',
    year: '2026',
    summary:
      'A five-poster concept campaign for CHaJOY Ice Cream and Tea \u2014 one brand, one story per product, built on bold typography and flavour-led colour.',
    tags: ['Art direction', 'Typography', 'Posters', 'Concept campaign'],
    cover: '/assets/images/design-projects/CHaJOY/Matcha_Joy_in_Every_Swirl.png',
    featured: true,
    role: 'Art direction and visual design',
    client: 'CHaJOY Ice Cream and Tea',
    description:
      'A concept advertising campaign for CHaJOY, an ice cream and tea brand with a playful personality and a colourful menu. The goal was a cohesive campaign where every product feels distinctive \u2014 each poster developed around its flavour, ingredients, colours, and mood \u2014 without making every advertisement look the same. The direction: an editorial advertising style combining oversized typography, dramatic product compositions, rich textures, and floating ingredients, connected by the CHaJOY name and penguin mascot.',
    deliverables: [
      'Matcha ice cream poster \u2014 "A little joy in every swirl"',
      'Sundae poster \u2014 "Moments made sweeter"',
      'Brown sugar boba milk tea posters \u2014 two treatments, "Sweet moments as usual"',
      'Strawberry shake poster \u2014 "A little berry, a lot of joy"',
      'Lemon green tea poster \u2014 "A little zest, a lot of joy"',
      'Concept campaign note: this is concept work, not commissioned client work',
    ],
    tools: 'Canva, Claude',
    decisions: [
      'Product-first compositions: the featured drink remains the main focal point.',
      'Expressive typography: oversized headlines create hierarchy and help each ad stand out.',
      'Flavour-led colour palettes: colours are selected to reflect the character of each product.',
      'Ingredient-driven storytelling: supporting ingredients add context, texture, and visual movement.',
      'Consistent branding: the CHaJOY name, mascot, and brand language connect the collection.',
    ],
    posts: [
      {
        num: '01',
        headline: 'Matcha ice cream \u2014 A little joy in every swirl',
        supporting:
          'Sky-blue composition, oversized lettering, diagonal brand ribbon, and short editorial copy.',
      },
      {
        num: '02',
        headline: 'CHaJOY sundae \u2014 Moments made sweeter',
        supporting:
          'Warm sunlit setting, rich chocolate details, lifestyle imagery for a human, approachable feel.',
      },
      {
        num: '03',
        headline: 'Brown sugar boba milk tea \u2014 Sweet moments as usual',
        supporting:
          'Two complementary treatments: floating ingredients, and an editorial layout with torn paper and caf\u00e9 textures.',
      },
      {
        num: '04',
        headline: 'Strawberry shake \u2014 A little berry, a lot of joy',
        supporting:
          'Creamy pink tones against deep wood; strawberries, milk splashes, and glossy pearls for depth and movement.',
      },
      {
        num: '05',
        headline: 'Lemon green tea \u2014 A little zest, a lot of joy',
        supporting:
          'Soft sage-green background refined for contrast with the golden tea and yellow citrus.',
      },
    ],
    gallery: [
      '/assets/images/design-projects/CHaJOY/Matcha_Joy_in_Every_Swirl.png',
      '/assets/images/design-projects/CHaJOY/Summer_Sundae_Joy_with_Chajoy.png',
      '/assets/images/design-projects/CHaJOY/Sweet_Moments,_Brown_Sugar_Bliss.png',
      '/assets/images/design-projects/CHaJOY/CHaJOY_Strawberry_Shake_Poster.png',
      '/assets/images/design-projects/CHaJOY/Mint_Green_Lemon_Tea_Joy.png',
    ],
  },
];

export function getDesignProject(slug: string): DesignProject | undefined {
  return designProjects.find((p) => p.slug === slug);
}
