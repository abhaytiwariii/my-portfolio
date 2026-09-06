export type Project = {
  id: number;
  img: string;
  title: string;
  description?: string;
  link?: string;
  github?: string;
  tags?: string[];
  type?:
    | "Professional"
    | "Personal"
    | "Open Source"
    | "Academic"
    | "In Progress"
    | "Other";
  myContribution?: string;
};

const projects: Project[] = [
  {
    id: 1,
    img: "/project3.png",
    title: "RocketSales — Sales & Inventory Platform",
    description:
      "A multi-tenant business management platform for handling sales, inventory, attendance, financial tracking, POS operations, and branch management.",
    link: "https://rocketsalestracker.com/",
    tags: [
      "React",
      "Node.js",
      "FastAPI",
      "MongoDB",
      "Shopify",
      "POS",
      "Multi-tenant",
      "AI Attendance",
    ],
    type: "Professional",
    myContribution:
      "Worked across the frontend and backend, owning features from database and API design through production delivery. Engineered real-time Stock In/Stock Out workflows using MongoDB aggregation pipelines across company, branch, and date dimensions, with automatic synchronization from Purchase Bills and Deliveries. Integrated a FastAPI face-recognition engine through a Node.js proxy for real-time attendance with geofencing, timestamping, and fallback enrollment. Integrated Shopify REST and GraphQL APIs for two-way synchronization of products, stock, orders, and fulfillment. Also contributed to employee payroll and leave workflows, GST-aware billing, vendor ledgers, shipping labels, and POS functionality.",
  },

  {
    id: 2,
    img: "/project8.png",
    title: "LabelLift — Music Distribution Platform",
    description:
      "A production music distribution platform for artists and labels, providing workflows for artist management, label management, royalties, and music distribution.",
    link: "https://labellift.in/",
    tags: [
      "React",
      "REST API",
      "Production",
      "Dashboard",
      "Music Distribution",
    ],
    type: "Professional",
    myContribution:
      "Worked as a Full-Stack Developer Intern, developing production React components for suspension, royalty, and profile management workflows. Fixed critical data-integrity issues in artist and label APIs that were blocking features, and contributed production changes through a structured Git and pull-request workflow.",
  },

  {
    id: 3,
    img: "/project1.png",
    title: "Task Management System",
    description:
      "A full-stack Kanban task management platform for organizing work through boards, tasks, status transitions, and authentication.",
    link: "https://task-management-abhay.vercel.app/",
    github: "https://github.com/abhaytiwariii/Task-Management-System",
    tags: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Zustand",
      "Kanban",
    ],
    type: "Personal",
    myContribution:
      "Built the application end-to-end using Next.js, TypeScript, NestJS, Prisma, and PostgreSQL. Implemented drag-and-drop task status transitions, optimistic UI updates with automatic rollback on failure, DTO validation, relational database design, and hybrid Google OAuth and guest authentication.",
  },

  {
    id: 4,
    img: "/project4.png",
    title: "Repair Shop Management",
    description:
      "A business management system for handling repair jobs, customers, payments, shop operations, and financial tracking.",
    link: "https://repair.rocketsalestracker.com/",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "REST API",
      "Repair Management",
      "Financial Tracking",
    ],
    type: "Professional",
    myContribution:
      "Built repair order lifecycle management from customer intake through completion, including per-customer repair history, payment collection, and shop-level financial reporting.",
  },

  {
    id: 5,
    img: "/project2.png",
    title: "Stock Market Analyzer",
    description:
      "An interactive stock analysis dashboard for exploring historical market data, filtering different timeframes, and visualizing market trends through charts.",
    link: "https://stock-market-analyzer-delta.vercel.app/",
    github: "https://github.com/abhaytiwariii/stock-market-analyzer",
    tags: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "Data Visualization",
      "REST API",
    ],
    type: "Personal",
    myContribution:
      "Developed the frontend using Next.js and TypeScript and built the FastAPI/Python backend for processing historical market data through RESTful APIs. Implemented timeframe filtering and interactive chart-based trend visualization.",
  },

  {
    id: 6,
    img: "/project9.png",
    title: "Parents Eye",
    description:
      "A multi-page business website designed to provide an online presence for the organization, with responsive layouts and structured pages for its services and information.",
    link: "https://parentseye.in/",
    tags: [
      "WordPress",
      "Web Design",
      "Responsive Design",
      "UI/UX",
      "AI-Assisted Development",
    ],
    type: "Professional",
    myContribution:
      "Independently designed and developed the website end-to-end using WordPress. Created and structured multiple pages, designed responsive layouts, implemented website sections, and used AI-assisted workflows for design ideation, content structuring, and development.",
  },

  {
    id: 7,
    img: "/project10.png",
    title: "Kord Enviro",
    description:
      "A multi-page business website built to present the company's services, information, and online presence through a responsive WordPress website.",
    link: "https://kordeenviro.com/",
    tags: [
      "WordPress",
      "Web Design",
      "Responsive Design",
      "UI/UX",
      "AI-Assisted Development",
    ],
    type: "Professional",
    myContribution:
      "Independently designed and developed the website end-to-end using WordPress. Created and structured multiple pages, implemented responsive layouts and website sections, and used AI-assisted workflows to accelerate design ideation, content structuring, and implementation.",
  },

  {
    id: 8,
    img: "/project11.png",
    title: "Athletica — Shopify Website",
    description:
      "A Shopify e-commerce website for an athletic and sports-focused business, with custom page sections and a responsive storefront experience.",
    link: "https://athletica.in/",
    tags: [
      "Shopify",
      "E-commerce",
      "UI Development",
      "Responsive Design",
      "Liquid",
    ],
    type: "Professional",
    myContribution:
      "Contributed to the Shopify website by creating custom sections for pages and fixing UI styling and layout issues. Worked on improving visual consistency, responsiveness, and the overall frontend experience across different parts of the website.",
  },

  {
    id: 9,
    img: "/project6.png",
    title: "NCC Cadet Hub",
    description:
      "A role-based digital headquarters for NCC units that replaces physical registers with a centralized system for managing cadets, parade attendance, nominal rolls, and academic mock tests.",
    link: "https://ncc-cadet-hub.vercel.app/",
    github: "https://github.com/abhaytiwariii/ncc-cadet-hub",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Role-Based Access", "NCC"],
    type: "In Progress",
    myContribution:
      "Developed the role-based platform for managing cadet rosters, parade attendance, nominal roll generation, and bilingual academic mock tests using Next.js, Supabase, and Tailwind CSS.",
  },

  {
    id: 10,
    img: "/project5.png",
    title: "Therapist Maya",
    description:
      "A modern responsive website designed to provide a professional online presence for a therapist, with a clean interface and accessible user experience.",
    link: "https://therapist-maya.vercel.app/",
    github: "https://github.com/abhaytiwariii/Therapist-Maya",
    tags: ["React", "Responsive Design", "Accessibility", "UI/UX"],
    type: "Personal",
    myContribution:
      "Designed and developed the responsive website with a focus on accessibility, usability, responsive layouts, and a clean modern interface.",
  },

  {
    id: 11,
    img: "/project7.png",
    title: "Itzfizz Scroll-Driven Hero Section",
    description:
      "A scroll-driven hero section designed to create an engaging visual experience through animated transitions and interactive scrolling.",
    link: "https://welcome-scroll-animation.vercel.app/",
    github: "https://github.com/abhaytiwariii/itzfizz-hero-scroll-assignment",
    tags: ["GSAP", "Scroll Animation", "Hero Section", "Frontend"],
    type: "Personal",
    myContribution:
      "Implemented the scroll-driven animation experience using GSAP, focusing on smooth transitions, visual hierarchy, interactive frontend behavior, and responsive presentation.",
  },
];

export default projects;
