import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative py-16 bg-slate-950 overflow-hidden">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-extrabold text-white mb-2 tracking-tight">Let's Connect</h2>
                    <p className="text-slate-400 text-sm max-w-sm">Open to full-time roles, internships, and exciting projects.</p>
                </div>
                
                <div className="flex gap-3">
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3.5 bg-slate-800/60 text-slate-400 hover:text-white hover:bg-cyan-600 rounded-full transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/40 hover:scale-110" title="Email"><Mail size={20}/></a>
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3.5 bg-slate-800/60 text-slate-400 hover:text-white hover:bg-blue-600 rounded-full transition-all duration-300 border border-slate-700/50 hover:border-blue-500/40 hover:scale-110" title="LinkedIn"><Linkedin size={20}/></a>
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3.5 bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-600 rounded-full transition-all duration-300 border border-slate-700/50 hover:border-slate-500 hover:scale-110" title="GitHub"><Github size={20}/></a>
                </div>
            </div>
            
            <div className="mt-14 pt-10 border-t border-slate-800/80 text-center">
                <a 
                    href="/Mohit_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-glow-cyan active:scale-[0.98] mb-6"
                >
                    <FileText size={18} />
                    View Resume
                </a>
                <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} Mohit Reddy Amanaganti. Built with React & Tailwind.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;