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
      "Core full-stack engineer driving multi-tenant SaaS architecture, real-time inventory aggregation pipelines, AI-driven attendance systems, and multi-channel e-commerce integrations.",
    keyContributions: [
      "Engineered real-time Stock In/Stock Out workflows using MongoDB aggregation pipelines across company, branch, and date dimensions with automatic synchronization from purchase bills and deliveries.",
      "Integrated a FastAPI face-recognition engine via Node.js proxy for real-time employee attendance featuring geofencing, timestamping, and fallback enrollment.",
      "Built automated Shopify REST and GraphQL synchronization pipelines for products, live inventory, orders, and fulfillment updates.",
      "Implemented GST-compliant invoicing, vendor accounting ledgers, shipping label generation, and point-of-sale (POS) terminal interfaces.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "FastAPI",
      "MongoDB",
      "PostgreSQL",
      "Shopify API",
      "Python",
      "REST & GraphQL",
    ],
    projectsLinked: [
      { title: "RocketSales", link: "https://rocketsalestracker.com/" },
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
