import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "923004091441";
  const message = "Hi Adnan, I visited your website and I am interested in your services.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-8 right-8 z-100">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-87.5 bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white/20"
          >
            {/* Header */}
            <div className="bg-brand-green p-5 text-white relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center overflow-hidden border-2 border-white/30 shrink-0">
                  <img 
                    src="/images/core-values.webp" 
                    alt="Adnan Qaiser" 
                    width="48"
                    height="48"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg leading-tight">Adnan Qaiser</div>
                  <p className="text-xs text-white/90">Typically replies within minutes</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 bg-[#E5DDD5] min-h-37.5 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url('https://wweb.dev/assets/whatsapp-chat-check/whatsapp-bg.png')`, backgroundSize: '200px' }}></div>
              
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
                  <div className="absolute top-0 -left-2 w-0 h-0 border-t-10 border-t-white border-l-10 border-l-transparent"></div>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    "{message}"
                  </p>
                  <p className="text-[10px] text-gray-400 text-right mt-1">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors shadow-md"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <p className="text-[10px] text-gray-400 text-center mt-3">Online | Privacy policy</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-shadow relative z-101"
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? (
          <X className="text-white" size={28} />
        ) : (
          <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
      </motion.button>
    </div>
  );
};

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-12 lg:px-24 fixed top-0 left-0 w-full nav-header backdrop-blur-xl z-50 border-b border-border">
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
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 w-64 bg-dark-bg border border-border rounded-xl shadow-2xl p-2 mt-2"
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
              </motion.div>
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
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon size={18} />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun size={18} />
              </motion.div>
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
              <motion.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Moon size={18} />
              </motion.div>
            ) : (
              <motion.div key="sun" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Sun size={18} />
              </motion.div>
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
      <main className="pt-24">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
