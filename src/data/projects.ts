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
    id: 'ai-sales-assistant',
    title: 'AI-Powered Sales & Booking Assistant',
    category: 'AI Automation / SaaS',
    description: 'An intelligent AI receptionist that qualifies leads 24/7 and schedules appointments automatically via WhatsApp integration.',
    image: '/images/app-development-overview.webp',
    liveUrl: '/automation-lab'
  }
];