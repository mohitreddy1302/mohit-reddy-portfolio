import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import SectionHeader from './SectionHeader';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-20">
          
          {/* Education */}
          <div>
             <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-violet-500/10 text-violet-400 rounded-xl border border-violet-500/20">
                    <GraduationCap size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="glass-card p-8 rounded-2xl hover:border-violet-500/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
                    <span className="text-xs font-bold text-violet-200 bg-violet-900/30 border border-violet-700/30 px-3 py-1 rounded-full">
                        {edu.gpa}
                    </span>
                  </div>
                  <div className="text-violet-300 font-medium mb-3">{edu.degree}</div>
                  <div className="text-sm text-slate-500 flex items-center gap-2 font-mono">
                     <Calendar size={14} /> {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
                    <Briefcase size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="space-y-12 border-l-2 border-slate-800 pl-8 ml-4">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[43px] top-1 h-6 w-6 rounded-full border-4 border-slate-950 bg-slate-700 group-hover:bg-cyan-500 transition-colors"></div>
                  
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{exp.role}</h4>
                    <div className="text-lg font-medium text-slate-300">{exp.company}</div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mt-2 font-mono">
                        <Calendar size={14} /> {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-400 leading-relaxed text-sm flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 min-w-[6px] rounded-full bg-cyan-500/50"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;