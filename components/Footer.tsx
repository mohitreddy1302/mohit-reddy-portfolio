import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">Let's Connect</h2>
                    <p className="text-slate-400 text-sm">Open for Full Stack Developer opportunities.</p>
                </div>
                
                <div className="flex gap-4">
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 bg-slate-900 text-slate-400 hover:text-white hover:bg-cyan-600 rounded-full transition-all duration-300 border border-slate-800"><Mail size={20}/></a>
                    <a href={PERSONAL_INFO.linkedin} className="p-3 bg-slate-900 text-slate-400 hover:text-white hover:bg-blue-600 rounded-full transition-all duration-300 border border-slate-800"><Linkedin size={20}/></a>
                    <a href={PERSONAL_INFO.github} className="p-3 bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-700 rounded-full transition-all duration-300 border border-slate-800"><Github size={20}/></a>
                </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
                <p>&copy; {new Date().getFullYear()} Mohit Reddy Amanaganti. Built with React & Tailwind.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;