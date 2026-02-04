import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<Props> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="text-cyan-400/90 font-semibold tracking-[0.2em] text-xs uppercase mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
        {title}
      </h2>
      <div className={`h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-violet-500 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeader;