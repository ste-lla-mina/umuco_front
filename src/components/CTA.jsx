import React from 'react';

export default function StatsBanner() {
  const stats = [
    { value: '10k+', label: 'DIGITAL ARTIFACTS' },
    { value: '500+', label: 'ORAL TESTIMONIES' },
    { value: '24/7', label: 'AI CULTURAL SUPPORT' }
  ];

  return (
    <section className="w-full bg-[#65350f] py-9 md:py-7 px-6 border-b border-[#EADBC8]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center justify-center text-center">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center justify-center md:px-6 ${
              index !== stats.length - 1 
                ? 'md:border-r border-white/10' 
                : ''
            }`}
          >
            <span className="font-sans text-[20px] md:text-5xl lg:text-6xl text-[#FCDFD3] font-medium tracking-wide mb-2">
              {stat.value}
            </span>
            <span className="font-sans text-xxs md:text-xs text-[#FCDFD3]/70 font-semibold tracking-widest uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}