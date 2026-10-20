export const hero = {
  eyebrow: "Lagos, Nigeria · Working with founders and business owners everywhere",
  h1: "Your idea, built and live — faster and cheaper than you thought possible.",
  sub: "I build the software that runs your business — so you can stop paying monthly fees for tools you don't own, stop waiting months for developers, and start buying your time back. From the MVP that gets you in front of investors, to the online store that sells while you sleep, to internal systems that keep your data in your hands.",
  primaryCta: {
    label: "Chat with me on WhatsApp",
    waMessage: "Hi Emmanuel, I have an idea I'd like to build.",
  },
  secondaryCta: { label: "See what's possible", href: "#who" },
};

export const stats = [
  { value: "8+ products", label: "taken from idea to live" },
  { value: "Weeks, not months", label: "typical time from brief to launch" },
  { value: "₦0/month", label: "what most builds cost to keep running after launch" },
  { value: "100% yours", label: "your code, your data, your product" },
];

export const whoIHelp = {
  heading: "Whatever stage you're at, you're closer to launch than you think.",
  cards: [
    {
      title: "Founders with an idea",
      lead: "You don't need 6 months and ₦10 million to test your idea.",
      body: "That idea you've been sitting on? I can turn it into a working prototype or MVP in weeks — something real you can put in front of investors, customers, and partners while your competitors are still writing business plans. Investors don't fund ideas anymore. They fund things they can click. Let's give them something to click.",
      ctaLabel: "Build my MVP →",
      waMessage: "Hi Emmanuel, I'm a founder and I want to build my MVP.",
    },
    {
      title: "Small business owners",
      lead: "Get your business online — without paying anyone monthly, ever.",
      body: "You don't need an agency. You don't need a subscription website builder charging you every month. You don't even need to buy a domain name if you don't want to yet. I'll build you a fast, professional website you fully own, show you how it works, and deploy it live — at zero ongoing cost. Your customers Google you. Make sure they find you.",
      ctaLabel: "Get my business online →",
      waMessage: "Hi Emmanuel, I want a website for my business.",
    },
    {
      title: "Ecommerce sellers",
      lead: "Your own store. Your own rules. No platform taking a cut.",
      body: "Stop renting shelf space on someone else's platform. I build complete online stores — products, cart, checkout, payments, order management — that belong to you. Launch fast, sell fast, keep your margins. And if you want to turn store-building into a business of its own, I'll set up the system and show you how to run it for your own clients.",
      ctaLabel: "Launch my store →",
      waMessage: "Hi Emmanuel, I want to launch an online store.",
    },
    {
      title: "Businesses drowning in subscriptions",
      lead: "Own your software. Own your data. Cancel the monthly fees.",
      body: 'Every month, money leaves your account for tools that were never built for your business — and your customer data sits on someone else\'s servers. I build internal systems tailored to exactly how your business works: inventory, orders, payroll, customer records, reporting. Built once, owned forever, running on your terms. No renewals. No "per seat" pricing. No third party holding your data.',
      ctaLabel: "Replace my subscriptions →",
      waMessage: "Hi Emmanuel, I want to replace my software subscriptions with a system I own.",
    },
  ],
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

export type ProjectCta =
  | { label: string; href: string }
  | { label: string; waMessage: string };

export type Project = {
  name: string;
  description: string;
  stack: string[];
  ctas: ProjectCta[];
  image?: string;
  imageAlt?: string;
};

export const webProjects = {
  eyebrow: "From idea to launch",
  title: "Products that look funded — built in weeks.",
  projects: [
    {
      name: "CashOS — an investor-ready fintech product, built to pitch",
      description:
        "A complete fintech app prototype — wallets, transactions, billing, insights, and reporting across 12 screens — polished enough to demo to investors. This is what your MVP can look like: real enough to raise money on, fast enough to beat your competition to the room.",
      stack: ["Next.js 16", "React 19", "Tailwind v4", "Recharts", "Zustand"],
      ctas: [
        {
          label: "I want an MVP like this →",
          waMessage: "Hi Emmanuel, I want an investor-ready MVP like CashOS.",
        },
      ],
      image: "/screenshots/cashos.jpeg",
      imageAlt: "CashOS fintech dashboard",
    },
    {
      name: "DLISA Student Portal — every complaint heard, none lost",
      description:
        "A welfare and academic support portal for the students' association of the University of Lagos Distance Learning Institute. Students raise a concern in under a minute with just a username — no name, no phone number, no matric number — and follow it privately to resolution. AI groups duplicate reports into one issue, so the executive sees what matters most, assigns it, sets a deadline, and publishes one update to everyone affected.",
      stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Tailwind v4", "AI Matching"],
      ctas: [
        {
          label: "I want a portal like this →",
          waMessage: "Hi Emmanuel, I saw the DLISA portal — I want a portal like this for my organisation.",
        },
      ],
      image: "/screenshots/dlisa.jpeg",
      imageAlt: "DLI Students' Association student support portal",
    },
    {
      name: "MicroTech Hub Africa — a redesign built to convert",
      description:
        "A tech academy's website, completely rebuilt to be fast, modern, and focused on one job: turning visitors into enrolled students. Shipped live to production.",
      stack: ["Next.js 16", "React 19", "Tailwind v4", "Framer Motion"],
      ctas: [
        { label: "Visit live site →", href: "https://microtech-africa.vercel.app" },
        {
          label: "Redesign my site →",
          waMessage: "Hi Emmanuel, I want my website redesigned.",
        },
      ],
      image: "/screenshots/microtech.jpeg",
      imageAlt: "MicroTech Hub Africa website",
    },
    {
      name: "Dr. Busayo — a clinic, a foundation, and a ministry on one site",
      description:
        "One website for a consultant psychiatrist's three ventures: a virtual clinic with online booking, a mental health foundation, and a faith-based healing ministry — each with its own colour and its own call to action. Her team edits everything without a developer, it scores 95+ on Google's mobile speed test over Nigerian networks, and it runs on low-cost shared hosting.",
      stack: ["WordPress", "PHP 8.1", "Custom Theme", "LatePoint Booking", "Schema SEO"],
      ctas: [
        { label: "Visit live site →", href: "https://www.drbusayo.com" },
        {
          label: "I want a site like this →",
          waMessage: "Hi Emmanuel, I saw drbusayo.com — I want a website like this.",
        },
      ],
      image: "/screenshots/drbusayo.jpeg",
      imageAlt: "Dr. Busayo website home page",
    },
    {
      name: "VenDoor Ops Suite — three products, one operation",
      description:
        "Clickable, hand-built product demos for a full delivery operation — the dispatcher's console, the merchant's app, and the rider's app. Proof that I design for the people who'll actually use the software, not just the person paying for it.",
      stack: ["HTML/CSS", "Product Design", "UX Flows"],
      ctas: [
        { label: "Explore the demos →", href: "https://mockups-five-silk.vercel.app" },
      ],
      image: "/screenshots/mockups.jpeg",
      imageAlt: "VenDoor product demo suite",
    },
  ] satisfies Project[],
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
