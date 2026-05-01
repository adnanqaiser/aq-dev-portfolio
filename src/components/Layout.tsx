import { Analytics } from '@vercel/analytics/react';
import React, { useState, Suspense, lazy } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { 
  Code, 
  Mail, 
  X, 
  Phone, 
  Share2,
  MessageCircle,
  Users,
  ChevronDown,
  Sun,
  Moon
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from '../data/services';
import { useTheme } from '../context/ThemeContext';

const WhatsAppButton = lazy(() => import('./WhatsAppButton').then(m => ({ default: m.WhatsAppButton })));

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-12 lg:px-24 fixed top-0 left-0 w-full nav-header backdrop-blur-md z-50 border-b border-border">
      <Link to="/" className="flex items-center gap-3 group cursor-pointer">
        <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(0,255,136,0.2)] group-hover:shadow-brand-green/40 transition-all duration-300">
          <Code className="text-black" size={24} />
        </div>
        <div className="flex flex-col -space-y-1">
          <span className="text-lg font-bold font-display tracking-tight">Adnan</span>
          <span className="text-lg font-bold font-display tracking-tight text-brand-green">Qaiser</span>
        </div>
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <Link 
          to="/" 
          className={`${location.pathname === '/' ? 'text-brand-green' : 'hover:text-white'} transition-colors`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Home
        </Link>
        <a href="/#about" className="hover:text-white transition-colors">About</a>
        
        <div 
          className="relative group"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button className={`flex items-center gap-1 hover:text-white transition-colors ${location.pathname.startsWith('/services') ? 'text-brand-green' : ''}`}>
            Services <ChevronDown size={14} />
          </button>
          
          <AnimatePresence>
            {isServicesOpen && (
              <m.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 w-64 bg-background border border-border rounded-xl shadow-2xl p-2 mt-2"
              >
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="w-8 h-8 rounded bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors">
                      <service.icon size={16} />
                    </div>
                    <span className="text-xs font-medium text-gray-300 group-hover:text-white">{service.title}</span>
                  </Link>
                ))}
              </m.div>
            )}
          </AnimatePresence>
        </div>

        <a href="/#portfolio" className="hover:text-white transition-colors">Portfolio</a>
        <a href="/#blog" className="hover:text-white transition-colors">Blog</a>
        <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
      </div>

      <div className="hidden lg:flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center hover:bg-brand-green hover:text-black transition-all duration-300"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
              <m.div
                key="moon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon size={18} />
              </m.div>
            ) : (
              <m.div
                key="sun"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun size={18} />
              </m.div>
            )}
          </AnimatePresence>
        </button>
        <div className="text-xs">
          <p className="text-gray-400 uppercase tracking-widest font-bold">Get in touch</p>
          <p className="font-semibold">qaiseradnan51@gmail.com</p>
        </div>
      </div>

      <div className="flex lg:hidden items-center gap-3">
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
              <m.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Moon size={18} />
              </m.div>
            ) : (
              <m.div key="sun" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Sun size={18} />
              </m.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="py-10 px-6 md:px-12 lg:px-24 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400">
    <p>Professional Web Developer specializing in WordPress & App Development</p>
    <p>Copyright © 2025 | Designed by Adnan Qaiser | All Rights Reserved</p>
  </footer>
);

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-brand-green selection:text-black">
      <Navbar />
      <main className="pt-24 min-h-[80vh]">{children}</main>
      <Footer />
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};
