import Section from "../../components/layout/Section";
import { Code2, Database, Layout, Server } from "lucide-react";

const About = () => {
  return (
    <Section id="about" className="kagami-grid min-h-screen flex items-center py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-kagami-accent/50 blur-[150px] rounded-full pointer-events-none animate-[pulse_5s_ease-in-out_infinite]" />
      {/* Background visual element - Large 'K' watermark - Adjusted opacity */}
      <div className="absolute right-0 bottom-0 text-[400px] font-bold text-white/[0.01] font-space leading-none pointer-events-none select-none -z-10">
        K
      </div>

      {/* 1. Layout Fix: Used max-w-6xl to match Systems section. 
         2. Grid Fix: Simple 2-column grid with a large gap (gap-20) to let it breathe.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full max-w-6xl mx-auto relative z-10 px-4">
        
        {/* Left Side: The Manifesto (Story) */}
        <div className="flex flex-col items-start order-2 lg:order-1">
          <span className="text-kagami-accent font-space font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
            The Origin
          </span>
          <h2 className="font-space text-4xl lg:text-5xl font-bold text-white mb-8 leading-[1.1]">
            Built to reject <br />
            <span className="text-white/50">cheap dopamine.</span>
          </h2>
          
          <div className="space-y-6 font-inter text-kagami-muted text-lg leading-relaxed max-w-lg">
            <p>
              Most productivity apps are designed to keep you addicted to checking them. They trade your attention for engagement metrics.
            </p>
            <p>
              <strong className="text-white">Kagami is different.</strong> It was engineered with a single purpose: to reflect your reality without distorting it. No gamification, no notifications, no noise.
            </p>
          </div>

          {/* Signature / Creator Tag */}
          <div className="mt-12 flex items-center gap-5 p-4 border border-white/5 rounded-2xl bg-white/[0.02]">
            <div className="w-12 h-12 bg-kagami-accent/10 rounded-full flex items-center justify-center text-kagami-accent ring-1 ring-inset ring-white/10">
               <span className="font-space font-bold">B</span> 
            </div>
            <div>
              <div className="text-white font-bold font-space leading-tight">Bharadwaj Dasari</div>
              <div className="text-[10px] text-kagami-muted uppercase tracking-wider font-bold mt-1">Full Stack Engineer</div>
            </div>
          </div>
        </div>

        {/* Right Side: The Engineering (Tech Stack) */}
        {/* Added order-1 lg:order-2 to keep it right on desktop, top on mobile if desired */}
        <div className="order-1 lg:order-2 w-full">
          <div className="bg-[#16161D] border border-white/5 rounded-[32px] p-8 lg:p-10 relative group hover:border-kagami-accent/30 transition-colors duration-500 shadow-2xl">
            
            <div className="mb-8 border-b border-white/5 pb-6">
                <h3 className="font-space text-2xl font-bold text-white mb-2">Under the Hood</h3>
                <p className="text-kagami-muted text-sm">
                Engineered for speed, security, and scalability.
                </p>
            </div>

            {/* Tech Stack Grid - Increased gap to 8 to reduce clutter */}
            <div className="grid grid-cols-1 gap-8">
              <TechItem 
                icon={Layout} 
                title="Frontend" 
                tech="React + Vite + Tailwind" 
                desc="Component-driven architecture."
              />
              <TechItem 
                icon={Server} 
                title="Backend" 
                tech="Node.js + Express" 
                desc="Robust REST API for high-throughput."
              />
              <TechItem 
                icon={Database} 
                title="Database" 
                tech="MongoDB + Mongoose" 
                desc="Flexible schema for behavioral data."
              />
              <TechItem 
                icon={Code2} 
                title="DevOps" 
                tech="CI/CD Pipeline" 
                desc="Automated testing and deployment."
              />
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};

// Helper Component: Refined for cleaner look
const TechItem = ({ icon: Icon, title, tech, desc }) => (
  <div className="flex gap-5 items-start group/item">
    {/* Icon Container - Slightly larger for presence */}
    <div className="mt-1 w-10 h-10 shrink-0 rounded-xl bg-kagami-accent/5 border border-white/5 flex items-center justify-center text-kagami-muted group-hover/item:text-white group-hover/item:bg-kagami-accent group-hover/item:border-transparent transition-all duration-300">
      <Icon size={18} />
    </div>
    
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
          <h4 className="text-white font-bold font-space text-sm">{title}</h4>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20"></span>
          <div className="text-kagami-accent text-xs font-mono">{tech}</div>
      </div>
      
      {/* Shortened description width and muted color even more */}
      <p className="text-white/40 text-xs leading-relaxed max-w-[240px] group-hover/item:text-white/60 transition-colors">
        {desc}
      </p>
    </div>
  </div>
);

export default About;