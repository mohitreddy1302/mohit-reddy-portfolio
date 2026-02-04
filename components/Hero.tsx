import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Github, Linkedin, MapPin, ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[520px] h-[520px] bg-violet-500/15 rounded-full blur-[130px] animate-blob" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[15%] right-[-5%] w-[420px] h-[420px] bg-cyan-500/18 rounded-full blur-[110px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-5%] left-[15%] w-[580px] h-[580px] bg-blue-600/15 rounded-full blur-[130px] animate-blob" style={{ animationDelay: '4s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.08),transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-slate-800/40 border border-slate-600/30 backdrop-blur-md animate-fade-in shadow-lg shadow-black/20" style={{ animationDelay: '0.05s', animationFillMode: 'both' }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-70"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-sm font-medium text-cyan-200/90 tracking-wide">Open to opportunities</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-[1.05] animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Building the <br />
            <span className="text-gradient-hero">Digital Future</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            {PERSONAL_INFO.summary}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-20 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-[0.98]">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-slate-800/60 hover:bg-slate-700/80 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 border border-slate-600/50 hover:border-cyan-500/40 backdrop-blur-sm">
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              Connect
            </a>
          </div>

          {/* Social / Location */}
          <div className="flex flex-wrap justify-center gap-8 text-slate-500 animate-fade-in border-t border-slate-700/50 pt-8 w-full max-w-3xl" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200">
              <Github size={20} /> <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200">
              <Mail size={20} /> <span className="text-sm font-medium">Email</span>
            </a>
            <div className="flex items-center gap-2 text-slate-500">
              <MapPin size={20} /> <span className="text-sm font-medium">{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#skills" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors duration-300 animate-bounce" style={{ animationDuration: '2.5s' }}>
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default Hero;