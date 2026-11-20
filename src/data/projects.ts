export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl?: string;
  techStack?: string[];
}

export const projectsData: ProjectDetail[] = [
  {
    id: "docnow-telehealth-crm",
    title: "DocNow Telehealth Sales CRM",
    category: "Full-Stack SaaS • Next.js & PostgreSQL",
    description:
      "Full-stack telehealth sales CRM featuring HTTP-only JWT staff authentication, paginated leads CRUD, drag-and-drop Kanban pipeline board, future follow-up reminders, and personalized outreach templates.",
    image: "/images/app-development-overview.webp",
    liveUrl: "https://staff-auth-system-phi.vercel.app",
    githubUrl: "https://github.com/adnanqaiser/staff-auth-system",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    id: "leadflow-crm",
    title: "LeadFlow CRM",
    category: "Full-Stack SaaS • React & Firebase",
    description:
      "Real-time Customer Relationship Management platform with user authentication, pipeline tracking, analytics cards, and Firestore security rules.",
    image: "/images/leadflow-dashboard-preview.webp",
    liveUrl: "https://leadflow-crm-sepia.vercel.app/",
    techStack: ["React.js", "Firebase", "Firestore", "Tailwind CSS"],
  },
  {
    id: "nexvia-marketplace-workspace",
    title: "Nexvia Multi-Vendor Marketplace & Workspace",
    category: "Monorepo Architecture • Node.js & WebSockets",
    description:
      "Full-stack monorepo integrating a multi-vendor e-commerce marketplace and real-time collaborative workspace backend.",
    image: "/images/ecommerce-overview.webp",
    liveUrl: "https://github.com/adnanqaiser",
    techStack: ["Node.js", "Express", "WebSockets", "Prisma", "MongoDB"],
  },
  {
    id: "core-web-vitals-audit-suite",
    title: "Website Performance & Core Web Vitals Audit Suite",
    category: "Performance Engineering • Next.js & Technical SEO",
    description:
      "Speed optimization and technical SEO diagnostic workflows improving mobile Largest Contentful Paint (LCP) and conversion rates for client websites.",
    image: "/images/speed-optimization.webp",
    liveUrl: "https://github.com/adnanqaiser",
    techStack: ["Next.js", "PageSpeed Insights API", "Technical SEO"],
  },
];
