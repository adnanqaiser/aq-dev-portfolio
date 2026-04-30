import React, { memo } from "react";
import { motion } from "motion/react";
import { Bot, Zap, Cpu, ArrowRight, CheckCircle2, Layout, Database, MessageSquare } from "lucide-react";

const WorkflowStep = ({ icon: Icon, title, description, isLast }: { icon: any, title: string, description: string, isLast?: boolean }) => (
  <div className="relative flex flex-col items-center group">
    <motion.div 
      whileHover={{ scale: 1.1 }}
      className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green border border-brand-green/20 relative z-10 bg-dark-bg/80 backdrop-blur-sm"
    >
      <Icon size={28} />
    </motion.div>
    <h4 className="mt-4 font-bold text-sm text-center">{title}</h4>
    <p className="text-[10px] text-text-muted text-center max-w-[120px] mt-1">{description}</p>
    
    {!isLast && (
      <div className="hidden lg:block absolute top-8 left-[100%] w-full h-[2px] bg-gradient-to-r from-brand-green/50 to-transparent -translate-x-4 z-0">
        <motion.div 
          animate={{ x: ["0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-4 h-full bg-brand-green shadow-[0_0_10px_rgba(0,255,136,1)]"
        />
      </div>
    )}
  </div>
);

const CaseStudyCard = ({ title, results, description }: { title: string, results: string[], description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-8 border border-white/5 hover:border-brand-green/30 transition-all"
  >
    <div className="inline-block px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-[10px] font-bold uppercase tracking-widest mb-4">
      Case Study
    </div>
    <h3 className="text-2xl font-bold mb-4 font-display">{title}</h3>
    <p className="text-text-muted text-sm mb-6 leading-relaxed">{description}</p>
    <div className="space-y-3">
      {results.map((result, i) => (
        <div key={i} className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-brand-green" />
          <span className="text-sm font-medium">{result}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const AutomationLab = () => {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="px-6 md:px-20 lg:px-24 pt-20 pb-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-green/5 blur-[120px] rounded-full -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-4 block">
            The Future of Efficiency
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
            Automation <span className="text-brand-green">Lab</span>
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Where AI Agents and Low-Code Workflows meet to transform business operations. 
            We build the "Digital Employees" that never sleep.
          </p>
        </motion.div>
      </section>

      {/* Workflow Visualizer (n8n/Zapier Style) */}
      <section className="section-padding px-6 md:px-20 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visualizing the Magic</h2>
          <p className="text-text-muted">How we automate your lead generation workflow</p>
        </div>

        <div className="glass-card p-10 relative overflow-hidden">
          {/* Grid Background Effect */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 0)`, backgroundSize: '30px 30px' }}>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-4">
            <WorkflowStep 
              icon={Layout} 
              title="Form Submission" 
              description="Client fills the Audit form on your website"
            />
            <WorkflowStep 
              icon={Cpu} 
              title="n8n Engine" 
              description="Logic processor validates & categorizes data"
            />
            <WorkflowStep 
              icon={Database} 
              title="CRM Sync" 
              description="Data stored in Google Sheets / Airtable"
            />
            <WorkflowStep 
              icon={MessageSquare} 
              title="Instant Alert" 
              description="Notification sent to your WhatsApp/Slack"
              isLast
            />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding px-6 md:px-20 lg:px-24 bg-white/[0.02]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CaseStudyCard 
            title="Real Estate Lead Automation"
            description="Automated the process of lead capturing from Facebook Ads to direct WhatsApp booking for a real estate client."
            results={[
              "10 hours/week saved on manual entry",
              "100% Lead Response Rate within 2 mins",
              "30% Increase in meeting bookings"
            ]}
          />
          <CaseStudyCard 
            title="AI Support Agent"
            description="Integrated a custom LLM-based AI Agent into a WordPress site to handle 70% of common customer queries."
            results={[
              "24/7 Support availability",
              "Reduced support tickets by 60%",
              "Increased customer satisfaction (CSAT)"
            ]}
          />
        </div>
      </section>

      {/* Lead Magnet / Audit Section */}
      <section className="section-padding px-6 md:px-20 lg:px-24">
        <div className="glass-card bg-brand-green/5 border-brand-green/20 p-8 md:p-16 text-center">
          <Zap className="text-brand-green w-16 h-16 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl font-bold mb-6">Ready to Automate?</h2>
          <p className="text-text-muted max-w-xl mx-auto mb-10">
            Let's build a custom AI Agent or Workflow that saves you time and grows your business. 
            Get a <strong>Free Automation Audit</strong> today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                // Navigate to home and scroll to contact with audit intent
                window.location.href = "/#contact";
                // We'll use localStorage to pass the intent across pages
                localStorage.setItem("form_intent", "Performance Audit");
              }}
              className="bg-brand-green text-black px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_25px_rgba(0,255,136,0.3)] transition-all"
            >
              Claim Free Audit
            </button>
            <button className="border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
              View Workflow Samples
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomationLab;
