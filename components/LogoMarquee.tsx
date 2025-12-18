import React from 'react';

const logos = [
  { name: 'tailwind', text: 'tailwindcss' },
  { name: 'motion', text: 'Motion' },
  { name: 'next', text: 'NEXT.js' },
  { name: 'aws', text: 'aws' },
];

export const LogoMarquee: React.FC = () => {
  return (
    <section className="py-10 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="flex justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Duplicating for visual balance as per image roughly */}
          {[...logos, ...logos].map((logo, idx) => (
            <div key={`${logo.name}-${idx}`} className="flex items-center gap-2 mx-8">
                {/* Placeholder Icon */}
                <div className="w-5 h-5 bg-gray-500 rounded-sm"></div>
                <span className="font-semibold text-lg text-gray-400">{logo.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};