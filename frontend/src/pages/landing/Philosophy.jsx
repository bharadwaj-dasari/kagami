import Section from "../../components/layout/Section";
import { Sparkles, Fingerprint, RefreshCw } from "lucide-react"; // npm i lucide-react

const Philosophy = () => {
  return (
    <Section id="philosophy" className="kagami-grid min-h-[800px] flex items-center relative overflow-hidden py-24">
      
      {/* 1. ATMOSPHERIC DEPTH */}
      {/* A massive, subtle glow that anchors the left side, balancing the Hero's right-side glow */}
      <div className="absolute top-1/2 left-0 -translate-x-[30%] -translate-y-1/2 w-[1000px] h-[1000px] bg-kagami-accent/20 blur-[180px] rounded-full pointer-events-none animate-[pulse_5s_ease-in-out_infinite]" />

      {/* 2. CENTERED LAYOUT (Matching Hero) */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-32 w-full max-w-6xl mx-auto relative z-10 px-6">
        
        {/* LEFT SIDE: THE "INFINITE MIRROR" ARTIFACT */}
        {/* We replace the simple card with a complex, layered 3D object */}
        <div className="order-2 lg:order-1 relative group perspective-1000">
          
          {/* The Outer Container - Floats in space */}
          <div className="relative w-[360px] h-[500px] bg-[#0E0E12]/50 backdrop-blur-md rounded-[40px] border border-white/10 shadow-2xl flex flex-col items-center justify-center p-8 transition-all duration-700 group-hover:rotate-y-6 group-hover:rotate-x-6 transform-style-3d overflow-hidden">
            
            {/* Internal "Scanner" Line animation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-kagami-accent/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] animate-[scan_4s_ease-in-out_infinite]" />
            
            {/* The "Core" - Visual Metaphor for the Self */}
            <div className="relative w-48 h-48 flex items-center justify-center mb-10">
               {/* Ring 1: Outer Orbit */}
               <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
               {/* Ring 2: Middle Orbit (dashed) */}
               <div className="absolute inset-4 border border-kagami-accent/20 border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse]" />
               {/* Ring 3: Inner Glow */}
               <div className="absolute inset-10 bg-kagami-accent/5 blur-xl rounded-full animate-pulse" />
               
               {/* The Center Icon: Fingerprint (Identity) */}
               <div className="relative z-10 w-20 h-20 bg-[#16161D] rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                  <Fingerprint size={40} className="text-white/80" strokeWidth={1} />
               </div>
            </div>

            {/* Data Readout */}
            <div className="text-center space-y-2 relative z-10">
               <h3 className="font-space text-xl font-bold text-white tracking-wide">Reflective Loop</h3>
               <div className="flex items-center justify-center gap-2 text-[10px] text-kagami-accent font-mono uppercase tracking-widest">
                  <RefreshCw size={10} className="animate-spin-slow" />
                  Syncing Reality
               </div>
               <p className="text-kagami-muted text-xs leading-relaxed max-w-[260px] mx-auto mt-4 border-t border-white/5 pt-4">
                 "The mirror does not judge. It only reveals."
               </p>
            </div>

            {/* Decorative Corners for "Tech" feel */}
            <div className="absolute top-6 left-6 w-2 h-2 border-t border-l border-white/30" />
            <div className="absolute top-6 right-6 w-2 h-2 border-t border-r border-white/30" />
            <div className="absolute bottom-6 left-6 w-2 h-2 border-b border-l border-white/30" />
            <div className="absolute bottom-6 right-6 w-2 h-2 border-b border-r border-white/30" />
          </div>

          {/* Background blurred element for depth */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-kagami-accent/20 to-transparent blur-2xl -z-10 opacity-40 rounded-[50px] group-hover:opacity-60 transition-opacity duration-500" />
        </div>


        {/* RIGHT SIDE: THE PHILOSOPHY TEXT */}
        {/* Tighter typography, better contrast */}
        <div className="order-1 lg:order-2 flex flex-col items-start max-w-lg">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-kagami-accent" />
            <span className="text-kagami-accent font-space font-bold tracking-[0.2em] uppercase text-xs">
              The Philosophy
            </span>
          </div>
          
          <h2 className="font-space text-5xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
            Self-awareness <br />
            <span className="text-white/30">is the algorithm.</span>
          </h2>
          
          <div className="space-y-8">
            <p className="font-inter text-kagami-muted text-lg leading-relaxed">
              We believe discipline isn't about punishment—it's about <span className="text-white font-bold">clarity</span>. By removing the noise of traditional productivity apps, Kagami leaves you with the only thing that matters.
            </p>
            
            <div className="pl-6 border-l-2 border-white/10 relative">
               <Sparkles size={16} className="absolute -top-1 -left-[9px] text-kagami-accent bg-[#09090B]" />
               <p className="font-inter text-white/80 text-xl italic leading-relaxed font-light">
                "When the mirror is clean, the reflection is perfect. When the mind is clear, the discipline is effortless."
               </p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Philosophy;