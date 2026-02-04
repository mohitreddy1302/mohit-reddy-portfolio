import React, { useState } from 'react';
import { CERTIFICATIONS } from '../constants';
import SectionHeader from './SectionHeader';
import { ZoomIn, X, Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-28 bg-slate-950 relative overflow-hidden">
       <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-cyan-900/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <SectionHeader title="Certifications" subtitle="Credentials & Awards" centered />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <div 
              key={idx} 
              className="group glass-card rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-glow-cyan transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 cursor-pointer rounded-t-2xl" onClick={() => setSelectedImage(cert.image)}>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <span className="p-3 bg-white/10 rounded-full text-white backdrop-blur-md border border-white/10" title="View Full Size">
                        <ZoomIn size={24} />
                    </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-bold text-lg text-white leading-tight">{cert.title}</h3>
                    {cert.link && (
                        <a href={cert.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors mt-1 p-1 rounded-lg hover:bg-slate-700/50 shrink-0">
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
                
                <div className="flex flex-col gap-1 mt-3">
                     <div className="flex items-center gap-2 text-sm text-cyan-400/90 font-medium">
                        <Award size={14} /> {cert.issuer}
                    </div>
                    <div className="text-sm text-slate-500">
                        Issued: {cert.date}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors bg-slate-800/70 p-2.5 rounded-full border border-slate-600/50 hover:border-slate-500"
                onClick={() => setSelectedImage(null)}
            >
                <X size={28} />
            </button>
            <img 
                src={selectedImage} 
                alt="Certificate Full View" 
                className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border border-slate-600/50"
                onClick={(e) => e.stopPropagation()} 
            />
        </div>
      )}
    </section>
  );
};

export default Certifications;