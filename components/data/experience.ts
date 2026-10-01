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
    id: "hb-gadget",
    company: "HB Gadget Technology",
    role: "Full Stack Developer",
    duration: "April 2026 - Present",
    isCurrent: true,
    workType: "Full-Time",
    location: "Nagpur, Maharashtra, India",
    companyUrl: "https://hbgadget.in/",
    summary:
      "Core full-stack engineer driving enterprise multi-tenant SaaS & CRM architecture, omni-channel lead ingestion pipelines, real-time inventory aggregation, AI-driven attendance systems, and e-commerce integrations.",
    keyContributions: [
      "Architected an enterprise multi-tenant Lead Management System (LMS - Leads by RocketSales) featuring a dual-database MongoDB connection pattern and a 5-tier hierarchical RBAC model (SuperAdmin to Salesman) with stateless JWT tenant scoping.",
      "Engineered omni-channel webhook receivers and API integrations for Google Ads API, Meta Lead Ads (Facebook/Instagram), and LinkedIn Ads API with click ID tracking (gclId) and bulk Excel/CSV ingestion pipelines.",
      "Built a visual drag-and-drop dynamic form builder with schema versioning and branch impact analysis, paired with a high-performance TanStack Table v8 lead pipeline and dynamic quotation PDF generator (jsPDF).",
      "Engineered real-time Stock In/Stock Out workflows using MongoDB aggregation pipelines across company, branch, and date dimensions with automatic synchronization from purchase bills and deliveries.",
      "Integrated a FastAPI face-recognition engine via Node.js proxy for real-time employee attendance featuring geofencing, timestamping, and fallback enrollment.",
      "Built automated Shopify REST and GraphQL synchronization pipelines for products, live inventory, orders, and fulfillment updates.",
      "Implemented GST-compliant invoicing, vendor accounting ledgers, shipping label generation, and point-of-sale (POS) terminal interfaces.",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "FastAPI",
      "TanStack Table",
      "TanStack Query",
      "Shopify API",
      "Google Ads API",
      "REST & GraphQL",
    ],
    projectsLinked: [
      { title: "RocketSales", link: "https://rocketsalestracker.com/" },
      {
        title: "Lead Management System (LMS)",
        link: "https://lead.rocketsalestracker.com/",
      },
      {
        title: "Repair Shop Management",
        link: "https://repair.rocketsalestracker.com/",
      },
      { title: "Parents Eye", link: "https://parentseye.in/" },
      { title: "Kord Enviro", link: "https://kordeenviro.com/" },
      { title: "Athletica", link: "https://athletica.in/" },
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
      "Full-stack engineering intern developing production React components and resolving mission-critical data integrity issues on a high-throughput digital music distribution platform.",
    keyContributions: [
      "Developed and shipped production React components for suspension management, royalty distribution dashboards, and artist profile workflows.",
      "Audited and resolved critical data-integrity issues in artist and label backend APIs that were blocking key features.",
      "Collaborated through structured Git version control, rigorous pull-request reviews, and agile release cycles.",
    ],
    techStack: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Python",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Git & GitHub",
    ],
    projectsLinked: [
      { title: "LabelLift Music Distribution", link: "https://labellift.in/" },
    ],
  },
];

export default experiences;
