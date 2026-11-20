import {
  Code,
  Database,
  Layout as LayoutIcon,
  Bot,
  Zap,
  Monitor,
} from 'lucide-react';

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: any;
  features: {
    title: string;
    description: string;
  }[];
  longDescription: string;
  image: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'full-stack-web-development',
    title: 'Full-Stack Web App Development',
    description:
      'End-to-end scalable web applications engineered with Next.js, React, Node.js, and Laravel for production reliability.',
    icon: Code,
    features: [
      {
        title: 'Modern Full-Stack Architecture',
        description:
          'Production-ready applications built with Next.js, React, Node.js, and Laravel tailored to your business logic.',
      },
      {
        title: 'Type-Safe Engineering',
        description:
          'Strict TypeScript codebases designed for maintainability, predictable deployments, and zero runtime surprises.',
      },
      {
        title: 'Scalable Production Delivery',
        description:
          'Clean monorepo or modular architectures ready to scale across users, tenants, and high-traffic workloads.',
      },
    ],
    longDescription:
      'I build complete, production-grade web applications from database schema to deployed frontend. Combining Next.js, React, Node.js, and Laravel, every application is structured for clean scalability, fast iteration, and long-term maintainability.',
    image: '/images/app-development-overview.webp',
  },
  {
    id: 'apis-auth-database-architecture',
    title: 'REST APIs, Auth & Database Architecture',
    description:
      'Secure JWT and OAuth authentication, role-based access control, and resilient PostgreSQL, Prisma, Firebase, and Supabase backends.',
    icon: Database,
    features: [
      {
        title: 'Hardened Auth & RBAC',
        description:
          'HTTP-only JWT sessions, OAuth flows, and granular role-based access control for staff and multi-tenant teams.',
      },
      {
        title: 'Relational & Realtime Data',
        description:
          'Normalized schemas and type-safe queries using PostgreSQL, Prisma ORM, Supabase, and Firebase Firestore.',
      },
      {
        title: 'Clean RESTful Endpoints',
        description:
          'Validated, paginated, and well-documented API routes built with Express, Next.js Route Handlers, or Laravel.',
      },
    ],
    longDescription:
      'Reliable products start with solid data modeling and security. I design and implement REST APIs, HTTP-only JWT and OAuth authentication systems, strict Firestore/SQL security rules, and normalized database schemas using PostgreSQL, Prisma, Supabase, and Firebase.',
    image: '/images/maintenance-overview.webp',
  },
  {
    id: 'saas-dashboards-custom-crms',
    title: 'SaaS Dashboards & Custom CRMs',
    description:
      'Interactive Kanban boards, real-time analytics, admin panels, and multi-user business workflows built for operational speed.',
    icon: LayoutIcon,
    features: [
      {
        title: 'Kanban & Pipeline Workflows',
        description:
          'Drag-and-drop deal stages, paginated CRUD tables, follow-up reminders, and personalized outreach templates.',
      },
      {
        title: 'Real-Time Analytics & Sync',
        description:
          'Live KPI cards, WebSocket updates, and instant state synchronization across multi-user teams.',
      },
      {
        title: 'Role-Scoped Admin Panels',
        description:
          'Custom internal tools, staff portals, and multi-vendor dashboards tailored to real operational bottlenecks.',
      },
    ],
    longDescription:
      'Off-the-shelf tools rarely fit complex team workflows. I engineer custom SaaS dashboards and CRMs featuring drag-and-drop Kanban boards, real-time metrics, automated reminders, and role-based admin controls that teams actually enjoy using.',
    image: '/images/leadflow-dashboard-preview.webp',
  },
  {
    id: 'ai-agents-workflow-automation',
    title: 'Custom AI Agents & Workflow Automation',
    description:
      'Integrating LLMs, intelligent assistants, and automated data pipelines directly into modern web applications.',
    icon: Bot,
    features: [
      {
        title: 'LLM & Agent Integration',
        description:
          'Context-aware AI assistants embedded into your app for lead qualification, support triage, and smart drafting.',
      },
      {
        title: 'Automated Business Pipelines',
        description:
          'Connecting webhooks, CRMs, messaging channels, and backend APIs to eliminate repetitive manual work.',
      },
      {
        title: 'Structured AI Outputs',
        description:
          'Reliable function calling and schema-validated LLM responses that plug cleanly into your database.',
      },
    ],
    longDescription:
      'Turn AI capabilities into measurable product features. I integrate LLM-powered agents, automated outreach and scheduling workflows, and backend processing pipelines directly into your web stack with strict validation and predictable latency.',
    image: '/images/social-media-management.webp',
  },
  {
    id: 'core-web-vitals-speed-optimization',
    title: 'Core Web Vitals & Speed Optimization',
    description:
      'Sub-2-second load time engineering, LCP/CLS/INP fixes, bundle optimization, and technical SEO diagnostics.',
    icon: Zap,
    features: [
      {
        title: 'Sub-2-Second Load Targets',
        description:
          'Eliminating render-blocking assets, optimizing critical rendering paths, and tuning server caching strategies.',
      },
      {
        title: 'LCP, CLS & INP Fixes',
        description:
          'Targeted Core Web Vitals engineering to pass Google PageSpeed thresholds on both mobile and desktop.',
      },
      {
        title: 'Technical SEO Audits',
        description:
          'Structured metadata, crawlability fixes, semantic markup, and PageSpeed Insights diagnostic workflows.',
      },
    ],
    longDescription:
      'Performance directly impacts search rankings and conversions. I audit and optimize web applications to achieve sub-2-second load times, resolve Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) bottlenecks, and strengthen technical SEO foundations.',
    image: '/images/speed-optimization.webp',
  },
  {
    id: 'modern-ui-ux-frontend',
    title: 'Modern UI/UX & Responsive Frontend',
    description:
      'Pixel-perfect, mobile-first interfaces crafted with React, TypeScript, and Tailwind CSS for high conversion.',
    icon: Monitor,
    features: [
      {
        title: 'Mobile-First & Accessible',
        description:
          'Responsive layouts built with semantic HTML, keyboard navigation, and clean spacing across every viewport.',
      },
      {
        title: 'Component Design Systems',
        description:
          'Reusable React and Tailwind CSS component libraries with crisp typography and consistent visual hierarchy.',
      },
      {
        title: 'Smooth Micro-Interactions',
        description:
          'Polished transitions, optimistic UI updates, and intuitive user flows focused on clarity and conversion.',
      },
    ],
    longDescription:
      'Great engineering deserves an intuitive interface. I craft responsive, accessible frontends with React, TypeScript, and Tailwind CSS—translating complex product workflows into clean, high-converting user experiences.',
    image: '/images/ui-ux-overview.webp',
  },
];