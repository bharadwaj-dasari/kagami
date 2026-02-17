import { Github, Twitter, Linkedin, Send, Radio, Terminal } from "lucide-react";
import logo from "../../assets/KA.png";
const Footer = () => {
  return (
    <footer className="bg-[#09090B] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      
      {/* 1. ATMOSPHERIC GLOW */}
      {/* Adds a spotlight effect at the bottom to give the page 'weight' */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-kagami-accent/5 blur-[120px] rounded-full pointer-events-none" />

      {/* 2. GRID PATTERN (Faded) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-20">
          
          {/* BRAND & NEWSLETTER (Cols 1-5) */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-start">
            <div className="mb-6 flex items-center gap-3">
               <img 
                 src={logo} 
                 alt="Kagami Logo" 
                 className="h-10 w-auto object-contain" // Adjusted height to match Navbar
               />
               <span className="text-kagami-accent text-[10px] font-mono tracking-normal px-2 py-0.5 rounded-full bg-kagami-accent/10 border border-kagami-accent/20 uppercase">Beta v2.0</span>
            </div>
            <p className="font-inter text-kagami-muted text-base leading-relaxed max-w-sm mb-8">
              A digital mirror for the disciplined mind. We replace cheap dopamine with raw data and honest reflection.
            </p>
            
            {/* "Command Line" Newsletter Input */}
            <div className="w-full max-w-sm mb-10">
              <label className="text-[10px] font-bold text-kagami-muted uppercase tracking-widest mb-3 block flex items-center gap-2">
                 <Terminal size={12} />
                 Join the Protocol
              </label>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="enter_email_address" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-kagami-accent/50 focus:bg-white/10 transition-all font-mono"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-kagami-accent/10 rounded-lg flex items-center justify-center text-kagami-accent hover:bg-kagami-accent hover:text-black transition-all duration-300">
                  <Send size={14} />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Github} />
              <SocialLink href="#" icon={Linkedin} />
            </div>
          </div>

          {/* LINKS SECTION (Cols 7-12) */}
          <div className="col-span-1 md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 mt-4">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <h4 className="font-space text-white font-bold text-lg">Product</h4>
              <ul className="space-y-3">
                <FooterLink href="#philosophy">Philosophy</FooterLink>
                <FooterLink href="#systems">The Systems</FooterLink>
                <FooterLink href="#roadmap">Roadmap</FooterLink>
                <FooterLink href="#changelog">Changelog</FooterLink>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <h4 className="font-space text-white font-bold text-lg">Company</h4>
              <ul className="space-y-3">
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/manifesto">Manifesto</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <h4 className="font-space text-white font-bold text-lg">Legal</h4>
              <ul className="space-y-3">
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                <FooterLink href="/terms">Terms of Service</FooterLink>
                <FooterLink href="/cookies">Cookie Settings</FooterLink>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: TECH STATS */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs font-mono text-kagami-muted">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <span>&copy; {new Date().getFullYear()} Kagami Inc.</span>
            <span className="hidden md:inline text-white/10">|</span> 
            {/* Personal Portfolio Touch */}
            <span className="hover:text-white transition-colors cursor-pointer">
              Engineered by Bharadwaj Dasari
            </span>
          </div>

          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-500/80 uppercase tracking-wider text-[10px] font-bold">Still in Development</span>
             </div>
             {/* Tech Badge */}
             <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5 hover:border-kagami-accent/30 transition-colors cursor-default">
                <Radio size={12} className="text-kagami-accent" />
                <span>Vizag, IN</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const SocialLink = ({ href, icon: Icon }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-kagami-muted hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
  >
    <Icon size={16} className="group-hover:scale-110 transition-transform" />
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-sm text-kagami-muted hover:text-kagami-accent transition-colors duration-200 flex items-center gap-2 group">
      <span className="w-0 h-[1px] bg-kagami-accent transition-all duration-300 group-hover:w-3"></span>
      {children}
    </a>
  </li>
);

export default Footer;