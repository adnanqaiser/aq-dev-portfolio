import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { servicesData } from '../data/services';
import { Star, Zap, Mail, Phone as PhoneIcon, Download } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-background text-white">
        <h2 className="text-4xl font-bold mb-4">Service Not Found</h2>
        <Link to="/" className="text-brand-green hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: '"Nunito", ui-sans-serif, system-ui, sans-serif' }}>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-125 h-125 bg-brand-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-6 mx-auto"
            >
              <service.icon size={32} />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-4">{service.title}</h1>
            <div className="w-20 h-1 bg-brand-green mx-auto rounded-full" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">Overview</h2>
              <p className="text-text-muted text-lg mb-8 leading-relaxed">{service.longDescription}</p>
              <div className="space-y-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex gap-4 p-6 rounded-2xl glass-card border border-white/5 hover:border-brand-green/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                      <Star size={20} className="fill-current" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-text-muted text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-border aspect-square shadow-2xl shadow-brand-green/5">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  width="600"
                  height="600"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-4 block">Get In Touch</span>
                <h2 className="text-5xl md:text-6xl font-bold font-display mb-6 tracking-tight">
                  Let's Work Together
                </h2>
                <p className="text-text-muted text-lg leading-relaxed">
                  Ready to start your next project with AI & Automation?
                </p>
              </div>

              <div className="glass-card p-8 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-green text-black px-6 py-1 rounded-full text-xs font-bold">Quick Inquiry</div>
                
                <div className="grid grid-cols-2 gap-y-8 mt-4">
                  <div>
                    <p className="text-gray-400 text-xs uppercase mb-1 font-medium">Email</p>
                    <a href="mailto:qaiseradnan51@gmail.com" className="font-bold hover:text-brand-green transition-colors">
                      qaiseradnan51@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase mb-1 font-medium">Phone</p>
                    <a href="tel:+923004091441" className="font-bold hover:text-brand-green transition-colors">
                      +92 300 4091441
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase mb-1 font-medium">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/adnan-qaiser-developer"
                      target="_blank"
                      className="font-bold hover:text-brand-green transition-colors"
                    >
                      adnan-qaiser
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase mb-1 font-medium">Availability</p>
                    <p className="font-bold">Remote / Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 md:p-10 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-green text-black px-6 py-1 rounded-full text-xs font-bold shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                Quick Inquiry
              </div>

              <form
                name="contact-service"
                method="POST"
                data-netlify="true"
                className="space-y-5 mt-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData as any).toString(),
                  })
                    .then(() => {
                      alert("Thank you! I will get back to you soon.");
                      form.reset();
                    })
                    .catch((error) => alert(error));
                }}
              >
                <input type="hidden" name="form-name" value="contact-service" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs text-gray-500 uppercase mb-2 block">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 outline-none focus:border-brand-green transition-all placeholder:text-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase mb-2 block">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 outline-none focus:border-brand-green transition-all placeholder:text-gray-600 text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 uppercase mb-2 block">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    value={service.title} 
                    readOnly
                    className="w-full bg-white/5 border border-brand-green/20 rounded-xl px-4 py-3 outline-none text-brand-green text-sm font-semibold cursor-default"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 uppercase mb-2 block">Project Details</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 outline-none focus:border-brand-green transition-all placeholder:text-gray-600 text-white resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-green text-black font-bold py-4 rounded-xl hover:shadow-[0_0_25px_rgba(0,255,136,0.3)] transition-all flex items-center justify-center gap-3"
                >
                  FREE CONSULTATION
                  <Zap size={18} className="fill-current" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;