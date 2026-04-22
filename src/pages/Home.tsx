import React, { useState, memo } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/services";
import { projectsData } from "../data/projects";
import { Download, Star, MapPin, Globe, Zap, Palette } from "lucide-react";

const ServiceCard = memo(({
  id,
  icon: Icon,
  title,
  description,
}: {
  id: string;
  icon: any;
  title: string;
  description: string;
}) => (
  <Link to={`/services/${id}`}>
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="glass-card p-8 flex flex-col gap-4 h-full cursor-pointer"
    >
      <div className="w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold font-display">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </motion.div>
  </Link>
));

const SkillBar = memo(({
  label,
  percentage,
}: {
  label: string;
  percentage: number;
}) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">{label}</span>
      <span className="text-sm font-bold text-brand-green">{percentage}%</span>
    </div>
    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: percentage / 100 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full w-full bg-brand-green shadow-[0_0_10px_rgba(0,255,136,0.5)]"
      />
    </div>
  </div>
));

const ProjectCard = memo(({
  image,
  category,
  title,
  description,
  liveUrl,
}: {
  image: string;
  category: string;
  title: string;
  description: string;
  liveUrl?: string;
}) => {
  if (liveUrl) {
    return (
      <Link to={liveUrl} target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="glass-card overflow-hidden group cursor-pointer"
        >
          <div className="relative aspect-video overflow-hidden bg-white/5">
            <img
              src={image}
              alt={title}
              loading="lazy"
              width="400"
              height="225"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
              decoding="async"
            />
          </div>
          <div className="p-6">
            <span className="text-[9px] uppercase tracking-widest text-brand-green font-bold mb-2 block">
              {category}
            </span>
            <h3 className="text-xl font-bold font-display mb-1">{title}</h3>
            <p className="text-text-muted text-xs line-clamp-2">{description}</p>
            <div className="mt-4 flex items-center gap-2 text-brand-green">
              <Globe size={14} className="text-brand-green" />
              <span className="text-xs text-brand-green font-bold">View Live</span>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="glass-card overflow-hidden group cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden bg-white/5">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width="400"
          height="225"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
          decoding="async"
        />
      </div>
      <div className="p-6">
        <span className="text-[9px] uppercase tracking-widest text-brand-green font-bold mb-2 block">
          {category}
        </span>
        <h3 className="text-xl font-bold font-display mb-1">{title}</h3>
        <p className="text-text-muted text-xs line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
});

const BlogCard = memo(({
  image,
  date,
  title,
  author,
  comments,
}: {
  image: string;
  date: string;
  title: string;
  author: string;
  comments: string;
}) => (
  <div className="glass-card overflow-hidden group">
    <div className="relative aspect-video overflow-hidden bg-white/5">
      <img
        src={image}
        alt={title}
        loading="lazy"
        width="400"
        height="225"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
        decoding="async"
      />
      <div className="absolute top-4 right-4 bg-brand-green text-black px-3 py-1 rounded text-xs font-bold">
        {date}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold mb-4 group-hover:text-brand-green transition-colors">
        {title}
      </h3>
      <div className="flex items-center gap-4 text-xs text-gray-400">
        <span>{author}</span>
        <span>•</span>
        <span>{comments}</span>
      </div>
    </div>
  </div>
));

const MainHero = memo(({ heroImage }: { heroImage: string }) => (
  <section className="px-6 md:px-20 lg:px-24 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 min-h-[70vh] py-20">
    <div className="flex-1 space-y-6 z-10 text-center lg:text-left">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold font-display leading-tight"
      >
        Hi, I'm <span className="text-brand-green">Adnan Qaiser</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-lg text-text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed"
      >
        I build high-performance websites & custom AI agents for business
        automation. 🚀
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex gap-4 justify-center lg:justify-start"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-green text-black px-6 py-3 rounded-xl font-semibold hover:shadow-[0_0_25px_rgba(0,255,136,0.3)] transition duration-300 inline-block"
        >
          Hire Me
        </motion.a>
        <motion.a
          href="#portfolio"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border border-border px-6 py-3 rounded-xl hover:bg-white/10 transition duration-300 inline-block"
        >
          View Projects
        </motion.a>
      </motion.div>
    </div>

    <div className="flex-1 relative flex justify-center lg:justify-end items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-64 h-80 md:w-80 md:h-96 lg:w-[320px] lg:h-110 group bg-brand-green/5 rounded-3xl"
      >
        <div className="w-full h-full relative">
          <img
            src={heroImage}
            alt="Adnan Qaiser"
            width={320}
            height={440}
            className="w-full h-full object-contain object-bottom transition-all duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </motion.div>
    </div>
  </section>
));

export default function Home() {
  const [heroImage] = useState(
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop&fm=webp",
  );

  return (
    <>
      <MainHero heroImage={heroImage} />

      {/* Services Section */}
      <motion.section
        id="services"
        className="section-padding"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </motion.section>

      {/* About Me Section */}
      <section
        id="about"
        className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <div className="relative">
          <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            I can develop solutions that help people
          </h2>
          <p className="text-text-muted leading-relaxed mb-8">
            I'm a Full-Stack Developer & AI Specialist working remotely with
            global clients. With 8+ years of experience, I help businesses grow
            with fast, modern, and SEO-optimized websites. I focus on
            performance, clean design, and real results.
          </p>

          <a
           href="/Adnan-Qaiser-Automation-Test-Engineer.pdf"
download="Adnan-Qaiser-Automation-Test-Engineer.pdf"
            className="bg-brand-green text-black px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_25px_rgba(0,255,136,0.3)] transition-all w-fit"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>

        <div className="glass-card p-8 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-green text-black px-6 py-1 rounded-full text-xs font-bold">
            Biography
          </div>

          <div className="grid grid-cols-2 gap-y-8 mt-4">
            <div>
              <p className="text-gray-400 text-xs uppercase mb-1 font-medium">Name</p>
              <p className="font-bold">Adnan Qaiser</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase mb-1 font-medium">Experience</p>
              <p className="font-bold">8+ Years</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase mb-1 font-medium">
                Specialization
              </p>
              <p className="font-bold">
                WordPress &<br></br> AI Automation
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase mb-1 font-medium">Email</p>
              <p className="font-bold text-sm">qaiseradnan51@gmail.com</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase mb-1">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/adnan-qaiser-developer"
                target="_blank"
                className="font-bold hover:text-brand-green transition-colors"
              >
                adnan-qaiser
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Education */}
      <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-20">
        <h2 className="sr-only">Skills and Education</h2>
        <div>
          <div className="relative mb-12">
            <div className="absolute -top-4 left-0 bg-brand-green text-black px-6 py-1 rounded-full text-xs font-bold">
              Personal Skill
            </div>
          </div>
          <SkillBar label="WordPress & AI Development" percentage={95} />
          <SkillBar label="Custom HTML5 & CSS3" percentage={90} />
          <SkillBar label="JavaScript & Logic" percentage={75} />
          <SkillBar label="UI/UX & Responsive Design" percentage={85} />
          <SkillBar label="AI Integration (LLMs/Bots)" percentage={92} />
          <SkillBar label="Technical SEO & Optimization" percentage={90} />
          <SkillBar label="Database & Backend Management" percentage={88} />
        </div>

        <div>
          <div className="relative mb-12">
            <div className="absolute -top-4 left-0 bg-brand-green text-black px-6 py-1 rounded-full text-xs font-bold">
              Education
            </div>
          </div>
          <div className="space-y-12">
            <div className="relative pl-8 border-l border-brand-green/30">
              <div className="absolute -left-1.25 top-0 w-2.5 h-2.5 rounded-full bg-brand-green shadow-[0_0_10px_rgba(0,255,136,1)]" />
              <h3 className="text-lg font-bold mb-1">Graduation</h3>
              <p className="text-brand-green text-xs font-bold mb-2 uppercase">
                University of Karachi
              </p>
              <p className="text-gray-400 text-xs mb-4">2010-2014</p>
              <p className="text-text-muted text-sm leading-relaxed">
                Gained a solid foundation in computer science and software
                principles at the University of Karachi, focusing on web
                technologies and user experience design.
              </p>
            </div>
            <div className="relative pl-8 border-l border-brand-green/30">
              <div className="absolute -left-1.25 top-0 w-2.5 h-2.5 rounded-full bg-brand-green shadow-[0_0_10px_rgba(0,255,136,1)]" />
              <h3 className="text-lg font-bold mb-1">
                Freelance WordPress Developer Automation & Test Engineer
              </h3>
              <p className="text-brand-green text-xs font-bold mb-2 uppercase">
                Self-Employed / Fiverr & Upwork
              </p>
              <p className="text-gray-400 text-xs mb-4">2017 - Present</p>
              <p className="text-text-muted text-sm leading-relaxed">
                Specializing in building high-performance web applications and
                AI-driven automation workflows. Expert in full-stack development
                and automated testing to ensure scalable, bug-free solutions.
                Proven track record of delivering ultra-fast WordPress platforms
                and custom SaaS dashboards for global clients on Fiverr, Upwork,
                and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding">
        <div className="text-center mb-16">
          <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-4 block">
            Recent Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">My Projects</h2>
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {projectsData.map((project) => (
    <ProjectCard
      key={project.id}
      image={project.image}
      category={project.category}
      title={project.title}
      description={project.description}
      liveUrl={project.liveUrl}
    />
  ))}
</div>
      </section>

      {/* Why Choose Me */}
      <section className="section-padding text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Me?</h2>
        <p className="text-text-muted max-w-2xl mx-auto mb-12">
          With 8+ years of experience, I help businesses grow with fast, modern,
          and SEO-optimized websites. I focus on performance, clean design, and
          real results.
        </p>

        <div className="relative w-32 h-32 mx-auto mb-8 rounded-full bg-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-brand-green rounded-full blur-2xl opacity-20" />
          <img
            src="/images/core-values.webp"
            alt="Avatar"
            loading="lazy"
            width="128"
            height="128"
            className="w-full h-full object-cover border-2 border-brand-green p-1 relative z-10 rounded-full"
            referrerPolicy="no-referrer"
            decoding="async"
          />
        </div>
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-500 fill-current" size={16} />
          ))}
        </div>
        <h3 className="text-xl font-bold">Adnan Qaiser</h3>
        <p className="text-brand-green text-xs font-bold uppercase tracking-widest">
          Senior WordPress & AI Developer
        </p>
      </section>

      {/* Trust Logos */}
      <section className="py-12 border-y border-border overflow-hidden" aria-label="Trusted Partners">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-20 bg-border" />
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Trusted By <span className="text-brand-green">10K+</span> Customers
          </span>
          <div className="h-px w-20 bg-border" />
        </div>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale contrast-125">
          <span className="text-2xl font-bold">envato</span>
          <span className="text-2xl font-bold">Instagram</span>
          <span className="text-2xl font-bold">Bootstrap</span>
          <span className="text-2xl font-bold">dribbble</span>
          <span className="text-2xl font-bold">jQuery</span>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-padding">
        <div className="text-center mb-16">
          <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-4 block">
            Advanced Web Development with AI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Expert Insights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard
            image="/images/web-dev-ai.webp"
            date="12 Mar, 2026"
            title="Advanced Web Development with AI"
            author="Adnan Qaiser"
            comments="5 Comments"
          />
          <BlogCard
            image="/images/wordpress-seo.webp"
            date="10 Mar, 2026"
            title="AI-Driven SEO Strategies for WordPress"
            author="Adnan Qaiser"
            comments="3 Comments"
          />
          <BlogCard
            image="/images/fullstack-wordpress.webp"
            date="08 Mar, 2026"
            title="Full-Stack WordPress Solutions"
            author="Adnan Qaiser"
            comments="7 Comments"
          />
          <BlogCard
            image="/images/web-security.webp"
            date="05 Mar, 2026"
            title="High-Performance Web Security"
            author="Adnan Qaiser"
            comments="4 Comments"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Heading */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Work Together 🚀
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Have a project in mind? Let's build something amazing.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 7.89a2 2 0 002.82 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase mb-1 font-medium">Email</p>
                  <a
                    href="mailto:qaiseradnan51@gmail.com"
                    className="font-semibold hover:text-brand-green transition-colors"
                  >
                    qaiseradnan51@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase mb-1 font-medium">Phone</p>
                  <a
                    href="tel:+923004091441"
                    className="font-semibold hover:text-brand-green transition-colors"
                  >
                    +92-300-4091441
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass-card p-8">
            <form
              name="contact-portfolio"
              method="POST"
              data-netlify="true"
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                fetch("/", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: new URLSearchParams(formData as any).toString(),
                })
                  .then(() => {
                    alert("Message sent successfully!");
                    form.reset();
                  })
                  .catch((error) => alert(error));
              }}
            >
              <input type="hidden" name="form-name" value="contact-portfolio" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-gray-400 uppercase mb-2 block font-medium">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 outline-none focus:border-brand-green transition-all placeholder:text-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 uppercase mb-2 block font-medium">
                    Email Address
                  </label>
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
                <label className="text-xs text-gray-400 uppercase mb-2 block font-medium">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 outline-none focus:border-brand-green transition-all placeholder:text-gray-600 text-white"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 uppercase mb-2 block font-medium">
                  Project Details
                </label>
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
                className="w-full bg-brand-green text-black font-bold py-4 rounded-xl hover:shadow-[0_0_25px_rgba(0,255,136,0.3)] transition-all"
              >
                FREE CONSULTATION
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-12 px-6 md:px-20 lg:px-24">
        <div className="text-center mb-8">
          <h2 className="text-brand-green text-xl md:text-2xl font-bold mb-2">
            Find Us Worldwide
          </h2>
          <p className="text-gray-400 text-sm">
            Delivering AI-powered web solutions to clients worldwide.
          </p>
        </div>

        <div className="glass-card overflow-hidden mb-8">
          <div className="aspect-video w-full bg-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38719333.31638171!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMzIuMSJX!5e0!3m2!1sen!2sus!4v1647587222222!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Worldwide Service Map"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="glass-card p-6">
            <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mx-auto mb-4">
              <MapPin size={20} />
            </div>
            <h3 className="text-lg font-bold mb-2">Remote Services</h3>
            <p className="text-text-muted text-sm">
              Providing top-quality development services from anywhere in the
              world
            </p>
          </div>

          <div className="glass-card p-6">
            <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mx-auto mb-4">
              <Globe size={20} />
            </div>
            <h3 className="text-lg font-bold mb-2">Global Clients</h3>
            <p className="text-text-muted text-sm">
              Working with businesses across multiple continents and time zones
            </p>
          </div>

          <div className="glass-card p-6">
            <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mx-auto mb-4">
              <Zap size={20} />
            </div>
            <h3 className="text-lg font-bold mb-2">Fast Communication</h3>
            <p className="text-text-muted text-sm">
              Quick response times and efficient project management
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
