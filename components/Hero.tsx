import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Github, Linkedin, MapPin, Download, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-cyan-950/30 border border-cyan-500/20 backdrop-blur-sm animate-fade-in">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-sm font-medium text-cyan-200 tracking-wide">Ready to Innovate</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight animate-fade-in" style={{animationDelay: '0.1s'}}>
            Building the <br />
            <span className="text-gradient">Digital Future</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            {PERSONAL_INFO.summary}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium transition-all border border-slate-700 hover:border-cyan-500/50 backdrop-blur-sm">
              <Linkedin size={18} />
              Connect
            </a>
          </div>

          {/* Social Proof / Links */}
          <div className="flex flex-wrap justify-center gap-8 text-slate-500 animate-fade-in border-t border-slate-800 pt-8 w-full max-w-3xl" style={{animationDelay: '0.4s'}}>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Github size={20} /> <span className="text-sm">GitHub</span>
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Mail size={20} /> <span className="text-sm">Email</span>
            </a>
             <div className="flex items-center gap-2">
              <MapPin size={20} /> <span className="text-sm">{PERSONAL_INFO.location}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;