import { 
  Wrench, 
  Share2, 
  PenTool, 
  Zap, 
  Palette, 
  Search, 
  Smartphone,
  Globe,
  Code,
  ShoppingCart,
  RefreshCw,
  Monitor,
  Layout as LayoutIcon,
  Bot
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
    id: 'website-maintenance',
    title: 'AI-Powered Website Maintenance & Tech Support',
    description: 'Our maintenance services use AI-driven monitoring to ensure your digital presence remains robust, secure, and up-to-date.',
    icon: Wrench,
    features: [
      { title: 'AI Security Patches', description: 'Automated security updates to keep your site safe 24/7.' },
      { title: 'Performance Tuning', description: 'Continuous AI monitoring to ensure maximum speed and uptime.' },
      { title: 'Expert Tech Support', description: '8+ years of expertise in troubleshooting and technical fixes.' }
    ],
    longDescription: 'Our AI-enhanced maintenance services ensure your website stays robust and secure. We handle everything from automated plugin updates and patches to deep performance tuning, allowing you to focus on your business while we handle the tech.',
    image: "/images/maintenance-overview.webp"
  },
  {
    id: 'social-media-marketing',
    title: 'AI-Powered Social Media Automation',
    description: 'Strategic social media management using AI tools to grow your brand presence and automate engagement.',
    icon: Share2,
    features: [
      { title: 'Automated Scheduling', description: 'AI-driven content plans designed for maximum audience reach.' },
      { title: 'Smart Engagement', description: 'Using automation to build and manage a loyal online community.' },
      { title: 'Data-Driven Ads', description: 'Optimized social media advertising to maximize your conversion ROI.' }
    ],
    longDescription: 'Elevate your brand with our AI-powered social media services. We build automated workflows for content scheduling and targeted ad campaigns across Facebook, Instagram, and LinkedIn to drive consistent growth.',
    image: "/images/social-media-management.webp"
  },
  {
    id: 'content-copywriting',
    title: 'AI-Driven Content & Copywriting',
    description: 'High-conversion, SEO-optimized content created with the power of advanced AI and human creativity.',
    icon: PenTool,
    features: [
      { title: 'AI-SEO Copywriting', description: 'Content optimized via LLMs for higher search engine visibility.' },
      { title: 'Brand Storytelling', description: 'Compelling narratives that connect your brand with your audience.' },
      { title: 'Conversion Focus', description: 'Persuasive copy designed using AI insights to drive customer action.' }
    ],
    longDescription: 'Words have power. Our AI-enhanced copywriting services help you communicate your value proposition clearly. From website copy to technical blogs, we deliver content that engages and converts visitors into customers.',
    image: '/images/maintenance-contact.webp'
  },
  {
    id: 'website-speed-optimization',
    title: 'Expert Speed & Core Web Vitals Optimization',
    description: 'Advanced performance optimization targeting Google PageSpeed 90+ for superior user experience.',
    icon: Zap,
    features: [
      { title: '90+ Score Guarantee', description: 'Optimization focused on Google\'s Core Web Vitals for top rankings.' },
      { title: 'AI Image Compression', description: 'Advanced techniques to reduce load times without losing quality.' },
      { title: 'Code Efficiency', description: 'Streamlining your website\'s code for maximum efficiency and speed.' }
    ],
    longDescription: 'A slow website is a lost opportunity. With over 8 years of experience in performance tuning, I specialize in making websites lightning-fast, improving both user satisfaction and SEO rankings.',
    image: '/images/speed-optimization.webp'
  },
  {
    id: 'graphic-designing',
    title: 'Modern UI/UX & AI Graphic Design',
    description: 'Creative and impactful design solutions combining human art with AI tools for modern branding.',
    icon: Palette,
    features: [
      { title: 'AI-Enhanced Branding', description: 'Logo design and brand guidelines using modern AI design assets.' },
      { title: 'Marketing Materials', description: 'Eye-catching designs for brochures and social media posts.' },
      { title: 'Dark Aesthetic UI', description: 'Custom icons and graphics that enhance your website\'s interface.' }
    ],
    longDescription: 'Visual communication is key. Our graphic design services cover everything from logo creation to digital assets, combining 8+ years of design experience with modern AI tools to leave a lasting impression.',
    image: '/images/graphic-design-overview.webp'
  },
  {
    id: 'seo-optimization',
    title: 'Technical & AI-Driven SEO Solutions',
    description: 'Comprehensive SEO strategies using AI data to improve search visibility and drive organic traffic.',
    icon: Search,
    features: [
      { title: 'AI Keyword Research', description: 'Identifying high-value search terms using AI-driven data tools.' },
      { title: 'Technical SEO Audit', description: 'Improving backend structure for better search engine crawling.' },
      { title: 'On-Page Optimization', description: 'Optimizing content to rank higher and attract qualified leads.' }
    ],
    longDescription: 'Get found by the right people. Our SEO services are data-driven and powered by AI insights to ensure your website ranks higher on search engines and attracts the right audience for long-term growth.',
    image: '/images/seo-overview.webp'
  },
  {
    id: 'app-development',
    title: 'Custom Web & AI App Development',
    description: 'Scalable web applications integrated with AI agents and automation for seamless experiences.',
    icon: Bot,
    features: [
      { title: 'AI Agent Integration', description: 'Tailor-made apps integrated with custom AI bots and LLMs.' },
      { title: 'Modern Frameworks', description: 'Built with React.js and Tailwind CSS for high performance.' },
      { title: 'Scalable Solutions', description: 'Future-ready tech that grows alongside your business needs.' }
    ],
    longDescription: 'Transform your ideas into digital products. I develop custom web applications that are user-friendly, performant, and integrated with the latest AI automation to streamline your business workflows.',
    image: '/images/app-development-overview.webp'
  },
  {
    id: 'ecommerce-development',
    title: 'AI-Enhanced E-Commerce Solutions',
    description: 'Complete online store development with AI-driven inventory and smart payment integrations.',
    icon: ShoppingCart,
    features: [
      { title: 'Smart Product Setup', description: 'AI-optimized product descriptions and category management.' },
      { title: 'Secure Payments', description: 'Integrating Stripe, PayPal, and local transfers for safe shopping.' },
      { title: 'Conversion Tracking', description: 'Ensuring a smooth checkout process to maximize global sales.' }
    ],
    longDescription: 'I build high-converting e-commerce stores that stay online 24/7. With secure payment methods and AI-assisted product management, I help you grow your business and sell products worldwide.',
    image: '/images/ecommerce-overview.webp'
  },
  {
    id: 'ui-ux-design',
    title: 'Conversion-Focused UI/UX Design',
    description: 'Intuitive interface designs focused on clean layouts, glassmorphism, and user conversion.',
    icon: LayoutIcon,
    features: [
      { title: 'Prototyping', description: 'Interactive designs to see exactly how your final site will feel.' },
      { title: 'User Research', description: 'Understanding your audience to design exactly what they need.' },
      { title: 'Modern Aesthetics', description: 'Clean, modern layouts focused on a premium user experience.' }
    ],
    longDescription: 'A great website is about how it works. I design intuitive and user-friendly interfaces that make it easy for visitors to become customers, using modern design trends like Glassmorphism and Dark Mode.',
    image: '/images/ui-ux-overview.webp'
  }
];