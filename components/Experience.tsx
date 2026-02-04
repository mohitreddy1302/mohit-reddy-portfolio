import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import SectionHeader from './SectionHeader';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-cyan-900/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-violet-900/10 rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="space-y-24">
          
          {/* Education */}
          <div>
             <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-violet-500/15 text-violet-400 rounded-xl border border-violet-500/25 shadow-glow-violet">
                    <GraduationCap size={28} />
                </div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight">Education</h3>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="glass-card p-8 rounded-2xl transition-all duration-300 hover:shadow-glow-violet">
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                    <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
                    <span className="text-xs font-bold text-violet-200 bg-violet-900/40 border border-violet-600/30 px-3 py-1.5 rounded-full">
                        {edu.gpa}
                    </span>
                  </div>
                  <div className="text-violet-300/90 font-medium mb-2">{edu.degree}</div>
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
                <div className="p-3 bg-cyan-500/15 text-cyan-400 rounded-xl border border-cyan-500/25 shadow-glow-cyan">
                    <Briefcase size={28} />
                </div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight">Experience</h3>
            </div>
            
            <div className="space-y-14 border-l-2 border-slate-700/80 pl-10 ml-3">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[46px] top-1.5 h-5 w-5 rounded-full border-[3px] border-slate-950 bg-slate-600 group-hover:bg-cyan-500 group-hover:scale-125 transition-all duration-300"></div>
                  
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-300/95 transition-colors">{exp.role}</h4>
                    <div className="text-lg font-medium text-slate-300">{exp.company}</div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mt-2 font-mono">
                        <Calendar size={14} /> {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-400 leading-relaxed text-sm flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 min-w-[6px] rounded-full bg-cyan-500/60 shrink-0"></span>
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