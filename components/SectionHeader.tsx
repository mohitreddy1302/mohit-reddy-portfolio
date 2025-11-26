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
        <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      <div className={`h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeader;