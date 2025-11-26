import React from 'react';
import { PROJECTS } from '../constants';
import SectionHeader from './SectionHeader';
import { ExternalLink, Code2, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeader title="Featured Projects" subtitle="Development Portfolio" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group flex flex-col glass-card rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500 border border-slate-800 hover:border-cyan-500/30">
              
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-800 text-cyan-400 rounded-xl border border-slate-700 group-hover:scale-110 transition-transform duration-300">
                    <Layers size={24} />
                  </div>
                  {project.link && (
                    <a href={project.link} className="text-slate-500 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                <h4 className="text-sm font-semibold text-slate-400 mb-6 uppercase tracking-wider">{project.subtitle}</h4>
                
                <ul className="space-y-3 mb-8">
                   {project.description.map((desc, i) => (
                       <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-3">
                           <span className="mt-1.5 h-1.5 min-w-[6px] rounded-full bg-slate-600 group-hover:bg-cyan-500/50 transition-colors"></span>
                           {desc}
                       </li>
                   ))}
                </ul>
              </div>
              
              <div className="px-8 py-5 bg-slate-950/30 border-t border-slate-800 flex flex-wrap gap-2">
                {project.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-semibold text-cyan-100/70 bg-cyan-900/20 px-3 py-1 rounded-full border border-cyan-800/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;