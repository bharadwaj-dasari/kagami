import React, { useState } from "react";
import Section from "../../components/layout/Section";
import { Activity, Calendar, Settings, User, CheckCircle2, Search, Bell, Shield, Moon } from "lucide-react";
import logo from "../../assets/KA.png";

const Preview = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  // Renders the specific content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Dashboard Header */}
            <div className="flex justify-between items-end mb-10">
              <div>
                <h3 className="text-2xl font-space font-bold text-white">Good evening, Bharadwaj.</h3>
                <p className="text-kagami-muted text-sm">Your discipline score is up 12% this week.</p>
              </div>
              <div className="hidden lg:block text-right">
                <div className="text-3xl font-space font-bold text-kagami-accent">84</div>
                <div className="text-xs uppercase tracking-widest text-white/40">Consistency Score</div>
              </div>
            </div>

            {/* Visualization Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Large Chart Area */}
              <div className="lg:col-span-2 bg-[#16161D] rounded-xl border border-white/5 p-6 h-64 relative overflow-hidden group">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-sm font-bold text-white">Focus Consistency</h4>
                  <select className="bg-transparent text-xs text-white/50 border-none outline-none">
                    <option>Last 30 Days</option>
                  </select>
                </div>
                {/* CSS Bar Chart */}
                <div className="flex items-end justify-between h-32 gap-2 px-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="w-full bg-white/10 rounded-t-sm hover:bg-kagami-accent transition-colors duration-300"
                    />
                  ))}
                </div>
              </div>

              {/* Stat Card */}
              <div className="bg-[#16161D] rounded-xl border border-white/5 p-6 flex flex-col justify-between hover:border-kagami-accent/30 transition-colors">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Current Streak</h4>
                  <p className="text-xs text-kagami-muted">Keep the momentum going.</p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="text-5xl font-space font-bold text-white">12</div>
                  <div className="text-sm text-white/50 uppercase tracking-widest rotate-90 origin-left translate-y-1">
                    Days
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Journal":
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col">
            <h3 className="text-2xl font-space font-bold text-white mb-6">Daily Journal</h3>
            <div className="flex-1 space-y-4 overflow-hidden">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-[#16161D] p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium text-sm">Reflection #{104 - i}</span>
                    <span className="text-white/30 text-xs">Oct {24 - i}</span>
                  </div>
                  <div className="h-2 w-3/4 bg-white/10 rounded mb-2"></div>
                  <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                </div>
              ))}
              <div className="border border-dashed border-white/10 rounded-xl p-4 flex items-center justify-center text-white/30 text-sm hover:text-white/50 hover:border-white/20 transition-all cursor-pointer">
                + New Entry
              </div>
            </div>
          </div>
        );

      case "Habits":
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-space font-bold text-white mb-6">Habit Tracker</h3>
            <div className="space-y-3">
              {[
                { name: "Morning Meditation", done: true },
                { name: "Deep Work (4h)", done: true },
                { name: "No Sugar", done: false },
                { name: "Reading (30m)", done: false },
              ].map((habit, i) => (
                <div key={i} className="flex items-center justify-between bg-[#16161D] p-4 rounded-xl border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${habit.done ? "bg-kagami-accent border-kagami-accent" : "border-white/20"}`}>
                        {habit.done && <div className="w-2 h-2 bg-black rounded-full" />}
                    </div>
                    <span className={`text-sm ${habit.done ? "text-white line-through opacity-50" : "text-white"}`}>{habit.name}</span>
                  </div>
                  <span className="text-xs text-white/30 font-mono">🔥 {Math.floor(Math.random() * 20) + 1}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "Settings":
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-space font-bold text-white mb-6">Preferences</h3>
            <div className="space-y-6">
                <div className="bg-[#16161D] rounded-xl border border-white/5 p-1 overflow-hidden">
                    <div className="p-4 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-white/70">
                            <Bell size={16} /> <span className="text-sm">Notifications</span>
                        </div>
                        <div className="w-8 h-4 bg-kagami-accent rounded-full relative"><div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"/></div>
                    </div>
                    <div className="p-4 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-white/70">
                            <Shield size={16} /> <span className="text-sm">Privacy Mode</span>
                        </div>
                         <div className="w-8 h-4 bg-white/10 rounded-full relative"><div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white/50 rounded-full"/></div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-white/70">
                            <Moon size={16} /> <span className="text-sm">Dark Theme</span>
                        </div>
                         <div className="text-xs text-white/30">Always On</div>
                    </div>
                </div>
            </div>
          </div>
        );

      case "Profile":
        return (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col items-center justify-center h-full pt-10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-kagami-accent to-purple-600 mb-4 border-4 border-[#09090B] shadow-xl"></div>
                <h3 className="text-xl font-bold text-white">Bharadwaj</h3>
                <p className="text-white/40 text-sm mb-8">Active Member • Since 2025</p>
                
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                    <div className="bg-[#16161D] p-4 rounded-lg text-center border border-white/5">
                        <div className="text-2xl font-bold text-white">1,204</div>
                        <div className="text-xs text-white/30 uppercase">Hours Focused</div>
                    </div>
                    <div className="bg-[#16161D] p-4 rounded-lg text-center border border-white/5">
                        <div className="text-2xl font-bold text-white">88%</div>
                        <div className="text-xs text-white/30 uppercase">Completion</div>
                    </div>
                </div>
            </div>
        );

      default:
        return null;
    }
  };

  return (
    <Section id="preview" className="kagami-grid min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[800px] bg-kagami-accent/50 blur-[200px] rounded-full pointer-events-none animate-[pulse_5s_ease-in-out_infinite]" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 relative z-10 px-4">
        <span className="text-kagami-accent font-space font-bold tracking-[0.2em] uppercase text-sm mb-4">
          The Interface
        </span>
        <h2 className="font-space text-4xl lg:text-6xl font-bold text-white tracking-tighter mb-6">
          Everything at a <span className="text-white/50">glance.</span>
        </h2>
        <p className="font-inter text-kagami-muted text-lg max-w-2xl">
          No cluttered menus. No distractions. Just your progress, visualized in a clean, high-contrast dashboard.
        </p>
      </div>

      {/* The Browser Window Mockup */}
      <div className="w-full max-w-6xl mx-auto relative z-10 px-2 lg:px-0">
        {/* Window Frame */}
        <div className="rounded-xl bg-[#0E0E12] border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/5">
          {/* Window Title Bar */}
          <div className="h-12 bg-[#16161D] border-b border-white/5 flex items-center px-4 gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="mx-auto text-xs font-mono text-white/30">dashboard.kagami.app</div>
          </div>

          {/* Dashboard Internal Layout */}
          <div className="flex h-[500px] lg:h-[600px]">
            {/* Sidebar Mockup */}
            <div className="w-20 lg:w-64 border-r border-white/5 bg-[#0E0E12] hidden md:flex flex-col p-4 gap-6">
              <img
                src={logo}
                alt="Kagami Logo"
                className="h-10 w-auto object-contain" // Adjusted height to match Navbar
              />
              <div className="space-y-2">
                <SidebarItem 
                    icon={Activity} 
                    label="Overview" 
                    active={activeTab === "Overview"} 
                    onClick={() => setActiveTab("Overview")} 
                />
                <SidebarItem 
                    icon={Calendar} 
                    label="Journal" 
                    active={activeTab === "Journal"} 
                    onClick={() => setActiveTab("Journal")} 
                />
                <SidebarItem 
                    icon={CheckCircle2} 
                    label="Habits" 
                    active={activeTab === "Habits"} 
                    onClick={() => setActiveTab("Habits")} 
                />
              </div>
              <div className="mt-auto space-y-2">
                <SidebarItem 
                    icon={Settings} 
                    label="Settings" 
                    active={activeTab === "Settings"} 
                    onClick={() => setActiveTab("Settings")} 
                />
                <SidebarItem 
                    icon={User} 
                    label="Profile" 
                    active={activeTab === "Profile"} 
                    onClick={() => setActiveTab("Profile")} 
                />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-[#09090B] p-6 lg:p-10 overflow-hidden relative flex flex-col">
              
              {/* Render the dynamic content */}
              {renderContent()}

              {/* Decorative Blur inside dashboard */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-kagami-accent/5 blur-[80px] rounded-full pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Reflection/Glow under the window */}
        <div className="absolute -bottom-10 left-4 right-4 h-20 bg-kagami-accent/20 blur-[100px] -z-10" />
      </div>
    </Section>
  );
};

// Helper Component for Sidebar
const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
      active ? "bg-white/10 text-white shadow-inner" : "text-kagami-muted hover:text-white hover:bg-white/5"
    }`}
  >
    <Icon size={18} />
    <span className="text-sm font-medium hidden lg:inline-block">{label}</span>
  </div>
);

export default Preview;