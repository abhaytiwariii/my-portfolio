export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  duration: string;
  isCurrent?: boolean;
  workType: "Full-Time" | "Internship" | "Contract" | "Part-Time";
  location: string;
  companyUrl?: string;
  summary: string;
  keyContributions: string[];
  techStack: string[];
  projectsLinked?: { title: string; link?: string }[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "icad",
    company: "ICAD Technologies Pvt. Ltd.",
    role: "Full Stack Developer",
    duration: "Oct 2026 - Present",
    isCurrent: true,
    workType: "Full-Time",
    location: "Nagpur, Maharashtra, India",
    companyUrl: "https://icad.org.in/",
    summary:
      "Working as the sole developer responsible for designing, developing, deploying, and maintaining ICAD's web applications, including the official website and online registration campaigns.",
    keyContributions: [
      "Built and deployed ICAD's new website (icad.org.in) using Next.js, TypeScript, and Tailwind CSS, featuring Google Sheets and ERP integration, HDFC Bank payment gateway, SEO, responsive design, and performance optimization.",
      "Managed production deployment using Hostinger, Nginx, and GitHub for reliable delivery and continuous updates.",
      "Built and deployed the CPA registration landing page (register.icad.org.in/cpa) in 5 days, implementing the complete registration flow, responsive UI, and production deployment.",
      "Integrated registration workflows with Google Sheets and ICAD's ERP system to streamline data collection, student onboarding, and administrative management.",
      "Integrated HDFC Bank's payment gateway API to enable seamless, secure online fee transactions.",
      "Managing the complete end-to-end development lifecycle as the sole developer, from UI/UX design to testing, deployment, and ongoing maintenance.",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Google Sheets API",
      "ERP Integration",
      "HDFC Bank API",
      "Payment Gateway Integration",
      "Hostinger",
      "Nginx",
      "Git & GitHub",
      "Vercel",
    ],
    projectsLinked: [
      {
        title: "ICAD Official Website",
        link: "https://icad.org.in/",
      },
      {
        title: "CPA Registration Landing Page",
        link: "https://register.icad.org.in/cpa",
      },
    ],
  },

  {
    id: "hb-gadget",
    company: "HB Gadget Technology",
    role: "Full Stack Developer Intern",
    duration: "April 2026 - October 2026",
    isCurrent: false,
    workType: "Internship",
    location: "Nagpur, Maharashtra, India",
    companyUrl: "https://hbgadget.in/",
    summary:
      "Worked as a full-stack development intern on RocketSales, contributing to multi-tenant SaaS applications covering sales management, inventory, billing, attendance, CRM, and e-commerce integrations.",
    keyContributions: [
      "Developed inventory management workflows covering product listings, stock in/out, purchase bills, deliveries, returns, replacements, and defect tracking.",
      "Implemented MongoDB aggregation pipelines to generate stock and sales data across companies, branches, and date ranges.",
      "Integrated Shopify REST and GraphQL APIs to synchronize products, inventory, orders, and billing workflows between Shopify and the inventory platform.",
      "Developed client and vendor management workflows with reusable records, purchase billing, and vendor accounting ledgers.",
      "Built sales dashboard components displaying top and least-selling products, sales, orders, average order value, collections, pending payments, and profit margins.",
      "Integrated a FastAPI face-recognition service through a Node.js proxy for employee attendance, including geofencing, timestamps, and fallback enrollment.",
      "Implemented employee management, role-based payroll and leave workflows, shipping label generation, and POS interfaces.",
      "Contributed to Leads by RocketSales, a multi-tenant CRM with hierarchical JWT-based roles, company and branch-level data isolation, and Google Ads and Meta lead integrations.",
      "Implemented appointment tracking with YES/NO/MAYBE outcomes, automatic follow-ups, quotation PDFs, and invoice synchronization.",
      "Worked on Repair Shop Management workflows for repair orders, customer history, payment collection, and financial reporting.",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Python",
      "MongoDB",
      "Mongoose",
      "MongoDB Aggregation",
      "Shopify REST API",
      "Shopify GraphQL API",
      "Google Ads API",
      "Meta Graph API",
      "JWT Authentication",
      "Git & GitHub",
    ],
    projectsLinked: [
      {
        title: "RocketSales",
        link: "https://rocketsalestracker.com/",
      },
      {
        title: "Sales & Inventory Platform",
        link: "https://salestrack.rocketsalestracker.com/",
      },
      {
        title: "Lead Management System (LMS)",
        link: "https://lead.rocketsalestracker.com/",
      },
      {
        title: "Repair Shop Management",
        link: "https://repair.rocketsalestracker.com/",
      },
      {
        title: "Parents Eye",
        link: "https://parentseye.in/",
      },
      {
        title: "Kord Enviro",
        link: "https://kordeenviro.com/",
      },
      {
        title: "Athletica",
        link: "https://athletica.in/",
      },
    ],
  },

  {
    id: "labellift",
    company: "LabelLift",
    role: "Full Stack Developer Intern",
    duration: "Oct 2025 - Feb 2026",
    isCurrent: false,
    workType: "Internship",
    location: "Remote",
    companyUrl: "https://labellift.in/",
    summary:
      "Worked on a digital music distribution platform, developing production React components and resolving backend API and data-integrity issues.",
    keyContributions: [
      "Developed and shipped 10+ production React components for suspension management, royalty distribution, and artist profile workflows.",
      "Identified and fixed data-integrity issues in artist and label backend API endpoints that were blocking important features.",
      "Worked with FastAPI and PostgreSQL to understand backend functionality and resolve API-related issues.",
      "Collaborated through Git and GitHub, contributing 15+ pull requests and participating in code reviews.",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Tailwind CSS",
      "Git & GitHub",
    ],
    projectsLinked: [
      {
        title: "LabelLift Music Distribution",
        link: "https://labellift.in/",
      },
    ],
  },
];

export default experiences;
