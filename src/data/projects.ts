import { Globe } from 'lucide-react';

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl: string;
}

export const projectsData: ProjectDetail[] = [
  {
    id: 'growthstream-digital-agency',
    title: 'GrowthStream - High Performance Digital Agency',
    category: 'Digital Agency',
    description: 'Modern SaaS-style landing page built with React and Tailwind CSS for maximum conversion.',
    image: '/images/growthstream-thumb.webp',
    liveUrl: 'https://growthstream-digital-agency.vercel.app/'
  },
  {
    id: 'vitality-fitness-landing',
    title: 'Vitality Smart Watch Landing',
    category: 'E-commerce / Fitness',
    description: 'High-end fitness watch landing page featuring clean UI and modern product showcase.',
    image: '/images/vitality-thumb.webp',
    liveUrl: 'https://vitality-fitness-landing.vercel.app/'
  },
  {
    id: 'leadflow-crm',
    title: 'LeadFlow CRM - Real-time Analytics Dashboard',
    category: 'Full-Stack SaaS Development',
    description: 'A high-performance CRM with Google Auth, Firestore integration, and real-time data tracking.',
    image: '/images/leadflow-dashboard-preview.webp',
    liveUrl: 'https://leadflow-crm-sepia.vercel.app/'
  },
  {
    id: 'upcoming-project-placeholder',
    title: 'Your Next Amazing Project',
    category: 'Web Development / AI',
    description: 'This is a placeholder for your upcoming project. You can update this title, description, image, and Vercel link anytime in the projects.ts file.',
    image: '/images/project-placeholder.webp',
    liveUrl: 'https://your-project-link.vercel.app/'
  }
];