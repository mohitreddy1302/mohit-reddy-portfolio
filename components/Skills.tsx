import React from 'react';
import { SKILLS } from '../constants';
import SectionHeader from './SectionHeader';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative bg-slate-950">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader title="Technical Arsenal" subtitle="Skills & Expertise" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {SKILLS.map((category, idx) => (
            <div key={idx} className="group glass-card p-8 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 w-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:w-full transition-all duration-500"></div>
              
              <h3 className="text-xl font-bold text-white mb-6">
                {category.category}
              </h3>
              
              {category.subcategories ? (
                <div className="space-y-4">
                  {category.subcategories.map((subcat, subIdx) => (
                    <div key={subIdx} className="space-y-2">
                      <h4 className="text-sm font-semibold text-cyan-400">
                        {subcat.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {subcat.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx} 
                            className="px-3 py-1.5 text-sm text-slate-400 bg-slate-900/80 border border-slate-700 rounded-lg group-hover:border-cyan-500/30 group-hover:text-cyan-100 transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1.5 text-sm text-slate-400 bg-slate-900/80 border border-slate-700 rounded-lg group-hover:border-cyan-500/30 group-hover:text-cyan-100 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;