import React from 'react';
import heroBg from '../assets/download.png';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center px-8 md:px-16 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/70 md:to-black/20" />

      <div className="relative z-10 max-w-3xl text-left text-white font-sans">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide leading-tight mb-6">
          The Sanctuary of <br />
          Rwandan Heritage.
        </h1>
        
        <p className="text-sm md:text-base text-gray-200/90 max-w-xl leading-relaxed tracking-wide mb-8 font-light">
          Sustaining the nation’s pulse by remembering our roots, carrying the spoken wisdom of our ancestors, and honoring the quiet strength of our shared pact. 
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-[#FCDFD3] hover:bg-[#ebd0c4] text-[#2C1A14] px-6 py-3 text-xs md:text-sm font-semibold tracking-wider transition-colors duration-200 rounded-sm shadow-md">
            Get Involved
          </button>
          
          <button className="border border-white/40 bg-black/10 hover:bg-white/10 hover:border-white text-white px-6 py-3 text-xs md:text-sm font-medium tracking-wider transition-all duration-200 rounded-sm backdrop-blur-xs">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
}