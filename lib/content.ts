export type Cta = { label: string; href: string } | { label: string; waMessage: string };

export const hero = {
  eyebrow: "AI Systems & Solutions · Lagos · Taking new projects",
  sub: "MVPs that get you in front of investors, online stores that sell while you sleep, and internal systems you own — no monthly fees.",
  primaryCta: {
    label: "Chat on WhatsApp",
    waMessage: "Hi Emmanuel, I have an idea I'd like to build.",
  },
  secondaryCta: { label: "See the work →", href: "#work" },
  portrait: {
    src: "/portrait.png",
    alt: "Emmanuel Ade",
    name: "Emmanuel Ade",
    role: "AI Systems Engineer · Full-stack",
  },
};

export const stats = [
  { value: "8+", label: "products taken from idea to live" },
  { value: "Weeks", label: "typical brief to launch, not months" },
  { value: "₦0/mo", label: "to keep most builds running", accent: true },
  { value: "100%", label: "your code, your data, your product" },
];

export const whoIHelp = {
  heading: "Whatever stage you're at.",
  cards: [
    {
      label: "01 · Founders",
      lead: "An MVP investors can click.",
      cta: {
        label: "Build my MVP →",
        waMessage: "Hi Emmanuel, I'm a founder and I want to build my MVP.",
      },
    },
    {
      label: "02 · Small businesses",
      lead: "Online, with no monthly fees.",
      cta: {
        label: "Get online →",
        waMessage: "Hi Emmanuel, I want a website for my business.",
      },
    },
    {
      label: "03 · Online sellers",
      lead: "Your store, no platform cut.",
      cta: { label: "See store plans →", href: "/pricing" },
    },
    {
      label: "04 · Companies",
      lead: "Cancel the subscriptions.",
      cta: {
        label: "Replace my tools →",
        waMessage: "Hi Emmanuel, I want to replace my software subscriptions with a system I own.",
      },
    },
  ] satisfies { label: string; lead: string; cta: Cta }[],
};

export const vendoor = {
  eyebrow: "Proof of work — I don't just build software. I've run a business on it.",
  title: "Vendoor Africa",
  lead: "I co-founded a logistics company and built every piece of software it runs on.",
  summary:
    "When a customer sends a WhatsApp message in Lagos, my systems read it, create the order, assign a rider, track the package, and settle the payment — automatically. No data entry team. No expensive logistics software. No monthly SaaS bills.",
  pipeline: [
    "Customer sends a WhatsApp message",
    "Order created automatically — no typing, no errors",
    "Warehouse packs it in the right wave",
    "Rider dispatched and tracked",
    "Delivered, paid, and settled — hands-free",
  ],
  body: 'This is what "buying your time back" looks like in practice. Work that would need a full back-office team happens automatically, around the clock. I designed, built, and operated the entire system across three kinds of users — merchants, riders, and dispatchers — so I know what it takes to build software that survives real customers, real chaos, and real Nigerian business conditions.',
  highlights: [
    {
      title: "Runs a real business daily",
      body: "Merchant orders, rider dispatch, payments, and wallets — the full operation, live in production, handling real money.",
    },
    {
      title: "Warehouse that thinks for itself",
      body: "Packages are automatically grouped, sorted, and routed for the fastest possible dispatch. Fewer errors, faster deliveries, no extra staff.",
    },
    {
      title: "Built to bank-grade standards",
      body: 'Security, testing, and access controls throughout — because when software touches money, "it mostly works" isn\'t good enough.',
    },
    {
      title: "Every user, every screen",
      body: "Dispatcher console, merchant app, and rider app — each role gets exactly the tool it needs, nothing it doesn't.",
    },
  ],
  stack: [
    "Laravel 11",
    "NestJS 11",
    "Next.js",
    "PostgreSQL",
    "Prisma",
    "Twilio",
    "Cloudflare R2",
    "Docker",
    "Render",
  ],
  secondaryCta: {
    label: "See the live product →",
    href: "https://mockups-five-silk.vercel.app",
  },
  primaryCta: {
    label: "I want a system like this →",
    waMessage: "Hi Emmanuel, I saw Vendoor — I want a system like this for my business.",
  },
};

export const ai = {
  eyebrow: "Buy your time back",
  title: "The work your team shouldn't be doing by hand.",
  intro:
    "Repetitive typing, copying data between apps, writing the same content every week, answering the same questions — that's payroll being spent on work a system can do overnight. Here's that principle running in the real world:",
  cards: [
    {
      tag: "AI Automation",
      name: "From WhatsApp chaos to clean records — automatically",
      description:
        "Customers send orders as messy, informal WhatsApp messages. This system reads every message, pulls out the customer, product, price, and address, and files it neatly into a spreadsheet — flagging anything uncertain for a quick human yes/no before it's saved.",
      outcomes: [
        "Hours of daily data entry → minutes of review",
        "Zero silent errors — nothing saved without a human glance at flagged items",
        "Works with your existing clients, rates, and product list",
      ],
      stack: ["Python", "Streamlit", "Llama 3.3 70B (Groq)", "Google Sheets API"],
    },
    {
      tag: "Agentic AI",
      name: "A content team of one — that never misses a week",
      description:
        "A system that writes on-brand weekly video scripts by itself. It knows the brand's voice, knows the Nigerian holiday calendar, and remembers what it wrote last week — so every script fits the series and the season without anyone briefing it.",
      outcomes: [
        "Weekly content, produced on schedule, hands-free",
        "Stays in your brand voice, every time",
        "Frees your team to focus on filming and selling, not drafting",
      ],
      stack: ["Python", "Streamlit", "Llama 3.3 70B (Groq)", "gspread"],
    },
    {
      tag: "Conversational AI",
      name: "A salesperson in every customer's pocket",
      description:
        "A WhatsApp chatbot that walks each user through a personalized 20-step financial analysis — including accurate Nigerian tax calculations — and ends by recommending the right product for them. It qualifies leads and sells 24/7 without a single staff member on the line.",
      outcomes: [
        "Every lead engaged instantly, day or night",
        "Personalized recommendations, not generic replies",
        "Built on WhatsApp — where your customers already are",
      ],
      stack: ["PHP", "Laravel", "Twilio WhatsApp API"],
    },
  ],
  banner: {
    text: "What's the most repetitive task in your business? Tell me — I'll tell you if it can run itself.",
    ctaLabel: "Ask me on WhatsApp →",
    waMessage: "Hi Emmanuel, I want to automate a repetitive task in my business: ",
  },
};

export type Project = {
  category: string;
  name: string;
  summary: string;
  image: string;
  imageAlt: string;
  cta: Cta;
};

export const work = {
  title: "Products that look funded.",
  titleLine2: "Built in weeks.",
  // Row one: two large tiles. Row two: smaller tiles, then the AI tile.
  featured: [
    {
      category: "Fintech MVP",
      name: "CashOS",
      summary: "Investor-ready prototype across 12 screens — wallets, billing, insights and reporting.",
      image: "/screenshots/cashos.jpeg",
      imageAlt: "CashOS fintech dashboard",
      cta: {
        label: "MVP like this →",
        waMessage: "Hi Emmanuel, I want an investor-ready MVP like CashOS.",
      },
    },
    {
      category: "Online store",
      name: "Yemcy Beauty World",
      summary: "Card, transfer and USSD checkout, with receipts sent to WhatsApp.",
      image: "/screenshots/yemcy.jpeg",
      imageAlt: "Yemcy Beauty World online store home page",
      cta: { label: "Visit live store →", href: "https://yemcy-store-ashy.vercel.app" },
    },
  ] satisfies Project[],
  more: [
    {
      category: "Student portal · AI matching",
      name: "DLISA Student Portal",
      summary: "Anonymous student complaints, grouped by AI and tracked to resolution.",
      image: "/screenshots/dlisa.jpeg",
      imageAlt: "DLI Students' Association student support portal",
      cta: {
        label: "Portal like this →",
        waMessage: "Hi Emmanuel, I saw the DLISA portal — I want a portal like this for my organisation.",
      },
    },
    {
      category: "Redesign",
      name: "MicroTech Hub Africa",
      summary: "A tech academy's site, rebuilt to turn visitors into students.",
      image: "/screenshots/microtech.jpeg",
      imageAlt: "MicroTech Hub Africa website",
      cta: { label: "Visit live site →", href: "https://microtech-africa.vercel.app" },
    },
    {
      category: "WordPress · Booking",
      name: "Dr. Busayo",
      summary: "A clinic, a foundation and a ministry on one fast site.",
      image: "/screenshots/drbusayo.jpeg",
      imageAlt: "Dr. Busayo website home page",
      cta: { label: "Visit live site →", href: "https://www.drbusayo.com" },
    },
  ] satisfies Project[],
  aiTile: {
    category: "AI automation",
    text: "WhatsApp chaos → clean records. Scripts that write themselves. A 24/7 sales bot.",
    cta: { label: "Automate my busywork →", href: "#ai" },
  },
};

export const pricing = {
  eyebrow: "Online store pricing",
  title: "Your own online store. One price.",
  titleAccent: "₦0/month after.",
  intro:
    "For SMEs and online vendors ready to sell beyond the DMs. Every plan is a one-off payment — no monthly fees, no commission on your sales, and the store is 100% yours.",
  plans: [
    {
      name: "Starter",
      price: "₦75,000",
      badge: "Most popular",
      tagline: "Everything you need to start selling online.",
      features: [
        "Your own storefront, fast on any phone",
        "Payment gateway — card, transfer, and USSD",
        "WhatsApp integration — order and chat in one tap",
        "Up to 20 products",
      ],
      ctaLabel: "Start with Starter →",
      waMessage: "Hi Emmanuel, I'd like the Starter online store plan (₦75,000).",
    },
    {
      name: "Premium",
      price: "₦149,000",
      tagline: "For growing stores with a bigger catalogue.",
      features: [
        "Everything in Starter",
        "Unlimited products — add as many as you sell",
      ],
      ctaLabel: "Go Premium →",
      waMessage: "Hi Emmanuel, I'd like the Premium online store plan (₦149,000).",
    },
    {
      name: "Gold",
      price: "₦250,000",
      tagline: "Your store, with AI support and automation built in.",
      features: [
        "Everything in Premium",
        "AI WhatsApp assistant that answers customers 24/7",
        "WhatsApp orders recorded automatically",
        "Automatic receipts and order updates by WhatsApp and email",
        "AI-written product descriptions",
      ],
      ctaLabel: "Go Gold →",
      waMessage: "Hi Emmanuel, I'd like the Gold online store plan (₦250,000).",
    },
  ],
  footnote:
    "Only third-party costs are yours: a domain name if you want one, and the payment gateway's standard fee on each sale.",
  benefits: [
    { title: "No monthly fees", body: "Pay once. Nothing renews." },
    { title: "No commission", body: "Every sale's margin stays yours." },
    { title: "100% yours", body: "Your code, your data, your store." },
  ],
  custom: {
    title: "Need something other than a store?",
    body: "MVPs, business websites, internal systems and AI automation are quoted per project. Tell me what you need and you'll get a clear plan and price.",
    ctaLabel: "Get a custom quote →",
    waMessage: "Hi Emmanuel, I'd like a quote for a project that isn't an online store.",
  },
  closing: {
    title: "Ready to sell beyond the DMs?",
    waLabel: "Chat on WhatsApp",
    waMessage: "Hi Emmanuel, I'd like to talk about an online store for my business.",
    workLabel: "See my work",
  },
  // The home page's one-line pointer to /pricing.
  teaser: {
    title: "Online stores from ₦75,000 — one-off, ₦0/month after.",
    body: "Three plans, no commission on your sales.",
    ctaLabel: "View pricing →",
  },
};

export const skillsSection = {
  eyebrow: "Under the hood",
  title: "One person. The whole build.",
  intro:
    'You don\'t need to hire a designer, a developer, a backend engineer, and a "tech guy" to hold it together. I take your project from first sketch to live product — design, build, automation, and deployment — with modern tools that keep it fast and keep your costs near zero after launch.',
  ctaLabel: "Let's plan your build →",
  groups: [
    {
      group: "The systems that buy your time back",
      items: [
        "LLM Integration",
        "Structured Extraction",
        "Agentic Architectures",
        "Human-in-the-loop Systems",
        "Prompt Engineering",
        "WhatsApp Automation",
      ],
    },
    {
      group: "The engine that runs your business",
      items: [
        "Node.js / TypeScript",
        "NestJS",
        "Laravel / PHP",
        "Python",
        "PostgreSQL",
        "Prisma",
        "REST APIs",
        "JWT Auth",
      ],
    },
    {
      group: "What your customers see and love",
      items: [
        "Next.js / React",
        "Tailwind CSS",
        "Framer Motion",
        "Streamlit",
        "Data Visualization",
        "UX Prototyping",
      ],
    },
    {
      group: "Live on the internet — often at ₦0/month",
      items: [
        "Vercel",
        "Render",
        "Docker",
        "Twilio",
        "Cloudflare R2",
        "Google Sheets API",
      ],
    },
  ],
};

export const contact = {
  eyebrow: "Start here",
  title: "That idea isn't going to build itself.",
  intro:
    "Tell me what you're trying to launch, automate, or stop paying for — and I'll tell you honestly what it takes, how fast we can ship it, and what it'll cost. First conversation is free, and you'll leave with a clear plan either way.",
  formTitle: "Send me your idea",
  talkNow: {
    title: "Prefer to talk now?",
    ctaLabel: "Chat on WhatsApp →",
    waMessage: "Hi Emmanuel, I'd like to discuss a project.",
  },
  footerLine:
    "Built and deployed the same way I'll build yours — fast, modern, ₦0/month.",
};
