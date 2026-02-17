import Section from "../../components/layout/Section";
import { Zap, BarChart3, ScanFace } from "lucide-react"; // Install: npm i lucide-react

const SystemCard = ({ icon: Icon, title, description, features }) => (
  <div className="bg-[#16161D] border border-white/5 rounded-[32px] p-8 flex flex-col items-start hover:border-kagami-accent/30 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
    
    {/* Subtle Inner Glow on Hover */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-kagami-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="w-14 h-14 bg-kagami-accent/10 rounded-2xl flex items-center justify-center mb-6 text-kagami-accent group-hover:scale-110 transition-transform duration-300">
      <Icon size={28} strokeWidth={1.5} />
    </div>
    
    <h3 className="font-space text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="font-inter text-kagami-muted text-sm leading-relaxed mb-8 border-l-2 border-white/5 pl-4">
      {description}
    </p>
    
    <ul className="space-y-4 w-full mt-auto">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3 text-sm font-medium text-white/70">
          <div className="w-1.5 h-1.5 rounded-full bg-kagami-accent shadow-[0_0_8px_rgba(91,108,255,0.6)]" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Systems = () => {
  return (
    <Section id="systems" className="kagami-grid min-h-screen flex flex-col justify-center py-24 relative">
      
      {/* Background Glow to tie it to the Hero */}
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] bg-kagami-accent/50 blur-[200px] rounded-full pointer-events-none animate-[pulse_5s_ease-in-out_infinite]" />

      {/* Header - Centered with specific width constraints */}
      <div className="flex flex-col items-center text-center mb-20 relative z-10 px-4">
        <span className="text-kagami-accent font-space font-bold tracking-[0.2em] uppercase text-sm mb-4">
          The Architecture
        </span>
        <h2 className="font-space text-4xl lg:text-6xl font-bold text-white tracking-tighter leading-tight">
          Systems designed for <br />
          <span className="text-white/40">radical honesty.</span>
        </h2>
      </div>

      {/* Grid Container - The "Fix" for sticking edges */}
      {/* max-w-6xl ensures it never touches the far left/right on big screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-6 relative z-10">
        
        <SystemCard 
          icon={Zap}
          title="Daily Reflection"
          description="The micro-loop. Capture your focus, energy, and intent in real-time without the friction of complex logging."
          features={["Focus Tracking", "Mood Mapping", "Daily Shutdown"]}
        />
        
        <SystemCard 
          icon={BarChart3}
          title="Weekly Review"
          description="The macro-loop. Analyze patterns across 7 days to identify where your discipline flourished and where it faded."
          features={["Pattern Analysis", "Goal Alignment", "Cycle Reset"]}
        />
        
        {/* If 'Mirror' icon isn't found, use 'Zap' as fallback or import another icon */}
        <SystemCard 
          icon={ScanFace} 
          title="The Mirror"
          description="Monthly deep dives. The ultimate truth. A high-level visualization of your character growth over time."
          features={["Character Growth", "Long-term Stats", "System Tuning"]}
        />

      </div>
    </Section>
  );
};

export default Systems; 