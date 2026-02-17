import Section from "../../components/layout/Section";
import { Activity, Zap, Brain, ArrowRight, Play } from "lucide-react"; 

const Hero = () => {
  return (
    <Section id="home" className="kagami-grid min-h-[90vh] relative overflow-hidden flex items-center pt-32 lg:pt-40">
      
      {/* 1. ATMOSPHERIC DEPTH (Matching Philosophy) */}
      <div className="absolute top-1/2 left-[80%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-kagami-accent/40 blur-[180px] rounded-full pointer-events-none animate-[pulse_5s_ease-in-out_infinite]" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full max-w-6xl mx-auto relative z-10 px-6">
        
        {/* LEFT: CONTENT & TYPOGRAPHY */}
        <div className="flex-1 flex flex-col items-start max-w-xl lg:-mt-24">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#16161D] border border-white/10 text-white/70 text-[10px] font-mono uppercase tracking-widest mb-8 hover:border-kagami-accent/50 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>System Online v2.4</span>
          </div>

          <h1 className="font-space text-6xl lg:text-[88px] font-bold text-white leading-[0.9] tracking-tighter mb-8">
            Discipline <br />
            <span className="text-white/30">is data.</span>
          </h1>

          <p className="font-inter text-kagami-muted text-lg lg:text-xl leading-relaxed mb-10 max-w-md">
            Stop relying on motivation. Start engineering your behavior with raw, unfiltered feedback loops.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="group px-8 py-4 bg-white text-black font-space font-bold rounded-lg hover:bg-gray-200 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
              Initialize Protocol
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 text-white border border-white/10 font-space font-bold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-md">
               <Play size={16} fill="currentColor" />
               <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* RIGHT: THE INTERFACE ARTIFACT */}
        <div className="flex-shrink-0 relative w-full lg:w-auto perspective-1000 flex justify-center lg:justify-end">
          
          {/* Main Interface Container */}
          <div className="relative w-[360px] h-[520px] transition-transform duration-700 hover:rotate-y-[-6deg] hover:rotate-x-6 transform-style-3d group">
            
            {/* The Glass Card */}
            <div className="absolute inset-0 bg-[#0E0E12]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl z-20 flex flex-col justify-between overflow-hidden">
               
               {/* Scanner Line (Matching Philosophy) */}
               <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-kagami-accent/50 to-transparent animate-[scan_6s_ease-in-out_infinite]" />

               {/* Header */}
               <div className="flex justify-between items-start">
                 <div>
                   <div className="text-kagami-muted text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Current State</div>
                   <div className="text-white font-space text-2xl font-bold flex items-center gap-3">
                     <Brain size={24} className="text-kagami-accent" />
                     Deep Flow
                   </div>
                 </div>
                 <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] rounded font-mono tracking-widest">
                   OPTIMAL
                 </div>
               </div>

               {/* Center Visualization: The "Engine" */}
               <div className="relative flex-1 flex items-center justify-center my-6">
                  {/* Outer Rings */}
                  <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-12 border-t border-b border-kagami-accent/30 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
                  
                  {/* Digital Time Core */}
                  <div className="text-center z-10">
                     <div className="font-mono text-5xl text-white font-bold tracking-widest tabular-nums">
                       01:45
                     </div>
                     <div className="text-[10px] text-kagami-muted uppercase tracking-[0.3em] mt-2">Duration</div>
                  </div>

                  {/* Glow */}
                  <div className="absolute inset-0 bg-kagami-accent/5 blur-2xl rounded-full" />
               </div>

               {/* Footer Data */}
               <div className="space-y-3">
                 <div className="flex justify-between text-xs text-white/50 font-mono">
                    <span>SESSION_ID</span>
                    <span>#8492</span>
                 </div>
                 <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[94%] bg-kagami-accent shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                 </div>
                 <div className="flex justify-between text-[10px] uppercase tracking-widest text-kagami-muted">
                    <span>Efficiency</span>
                    <span className="text-white">94%</span>
                 </div>
               </div>

               {/* Decorative Tech Corners (Matching Philosophy) */}
               <div className="absolute top-6 left-6 w-2 h-2 border-t border-l border-white/30" />
               <div className="absolute top-6 right-6 w-2 h-2 border-t border-r border-white/30" />
               <div className="absolute bottom-6 left-6 w-2 h-2 border-b border-l border-white/30" />
               <div className="absolute bottom-6 right-6 w-2 h-2 border-b border-r border-white/30" />
            </div>

            {/* Floating Card: Analytics */}
            <div className="absolute -top-6 -right-12 w-48 bg-[#16161D]/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl z-30 animate-[float_8s_ease-in-out_infinite_reverse]">
              <div className="flex items-center gap-2 mb-3">
                <Activity size={14} className="text-blue-400" />
                <span className="text-white font-bold text-xs uppercase tracking-wider">Dopamine</span>
              </div>
              <div className="flex items-end gap-1 h-10 opacity-80">
                {[40, 70, 45, 90, 60].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-blue-500/50 rounded-t-[2px]" />
                ))}
              </div>
            </div>

            {/* Floating Card: Streak */}
            <div className="absolute bottom-12 -left-12 bg-[#09090B]/90 backdrop-blur-md border border-kagami-accent/30 rounded-full p-2 pr-5 flex items-center gap-3 shadow-[0_0_30px_rgba(59,130,246,0.2)] z-30 animate-[float_6s_ease-in-out_infinite_1s]">
              <div className="w-8 h-8 rounded-full bg-kagami-accent flex items-center justify-center text-black">
                <Zap size={14} fill="currentColor" />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-none">12 Days</div>
                <div className="text-[9px] text-kagami-muted uppercase tracking-wider mt-0.5">Active</div>
              </div>
            </div>

            {/* Back Glow Layer */}
             <div className="absolute -inset-4 bg-gradient-to-tr from-kagami-accent/10 to-transparent blur-2xl -z-10 opacity-30 rounded-[40px]" />
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Hero;