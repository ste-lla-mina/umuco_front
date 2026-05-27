import React from 'react';
import heroBg from '../assets/download.png';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center px-8 md:px-16 lg:px-24 overflow-hidden py-12">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/50 lg:to-transparent" />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="text-left text-white font-sans">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide leading-tight mb-6">
            The Sanctuary of Our Heritage.
          </h1>
          
          <p className="text-sm md:text-base text-gray-200/90 max-w-xl leading-relaxed tracking-wide mb-8 font-light">
            Sustaining the nation's pulse by remembering our roots, carrying the spoken 
            wisdom of our ancestors, and honoring the quiet strength of a shared pact.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#3E2723] hover:bg-[#2C1A19] text-[#FCDFD3] px-6 py-3 text-xs md:text-sm font-semibold tracking-wider transition-colors duration-200 rounded-[10px] shadow-md">
              Get Involved
            </button>
            
            <button className="border border-white/40 bg-black/10 hover:bg-white/10 hover:border-white text-white px-6 py-3 text-xs md:text-sm font-medium tracking-wider transition-all duration-200 rounded-[10px] backdrop-blur-xs">
              About Us
            </button>
          </div>
        </div>

        <div className="hidden lg:flex relative h-[450px] w-full items-center justify-center">
          <div className="absolute w-56 h-72 rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-neutral-800 transform -translate-x-16 -translate-y-8 -rotate-6 transition-transform duration-300 hover:z-30 hover:scale-105">
            <img src="/src/assets/mpara.jpg" alt="Heritage 1" className="w-full h-full object-cover" />
          </div>

          <div className="absolute w-56 h-72 rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-neutral-800 z-10 transform translate-x-0 translate-y-4 rotate-2 transition-transform duration-300 hover:z-30 hover:scale-105">
            <img src="/src/assets/nyambo.jpg" alt="Heritage 2" className="w-full h-full object-cover" />
          </div>

          <div className="absolute w-56 h-72 rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-neutral-800 z-20 transform translate-x-16 -translate-y-4 rotate-6 transition-transform duration-300 hover:z-30 hover:scale-105">
            <img src="/src/assets/iraba.jpg" alt="Heritage 3" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}