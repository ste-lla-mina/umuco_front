import React from 'react';
import { Quote, FilePlus, ShieldAlert } from 'lucide-react';
import studioImg from '../assets/iraba.jpg'; 
export default function CommunityGuardian() {
  return (
    <div className="w-full bg-[#FDFBF7] font-sans">
      
      {/* --- SECTION 1: PROVERBS SHOWCASE --- */}
      <section className="w-full px-6 py-20 md:py-28 text-center bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-[#8D493A]/30 mb-4">
            <Quote className="w-12 h-12 fill-current" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C1A14] tracking-tight mb-4">
            "Abari bose si ko bameze."
          </h2>
          
          <p className="text-base md:text-lg font-medium text-[#8D493A] tracking-wide mb-3">
            Not everyone who seems the same is actually the same.
          </p>
          
          <p className="text-xs md:text-sm text-[#6F5B55] italic font-normal max-w-md mb-8">
            Explore the deep wisdom of Rwandan proverbs.
          </p>
          
          <button className="bg-[#2C1A14] hover:bg-[#3E2723] text-[#FDFBF7] px-6 py-3 text-xs md:text-sm font-semibold tracking-wide rounded-xl transition-all duration-200 shadow-sm">
            Discover More Proverbs
          </button>
        </div>
      </section>

      {/* --- SECTION 2: CULTURAL GUARDIAN BANNER --- */}
      <section className="w-full px-6 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-[#3E2319] text-white grid grid-cols-1 lg:grid-cols-12 min-h-[460px] shadow-xl">
          
          {/* Left Text Content Grid Panel */}
          <div className="lg:col-span-6 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start text-left bg-gradient-to-br from-[#3E2319] to-[#2C1A14]">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-[#FDFBF7] mb-6">
              Become a Cultural <br />Guardian.
            </h2>
            
            <p className="text-xs md:text-sm text-[#EADBC8]/80 leading-relaxed font-normal max-w-xl mb-8">
              Join our network of institutions, historians, and individuals dedicated to preserving 
              the Rwandan narrative. Your contribution ensures that the voices of today become 
              the wisdom of tomorrow.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 w-full">
              <button className="inline-flex items-center space-x-2.5 bg-[#FCDFD3] hover:bg-[#EADBC8] text-[#2C1A14] px-6 py-3.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 tracking-wide shadow-sm shrink-0">
                <FilePlus className="w-4 h-4 text-[#8D493A]" />
                <span>Contribute to Archive</span>
              </button>
              
              <button className="inline-flex items-center space-x-2.5 border border-[#EADBC8]/30 hover:bg-white/5 text-[#FDFBF7] px-6 py-3.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 tracking-wide shrink-0">
                <ShieldAlert className="w-4 h-4 text-[#EADBC8]/60" />
                <span>Institutional Access</span>
              </button>
            </div>
          </div>

          {/* Right Image Grid Panel */}
          <div className="lg:col-span-6 relative w-full h-64 lg:h-auto min-h-[300px]">
            <img 
              src={studioImg} 
              alt="Rwandan Audio Archive Workstation Studio" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Soft overlay matching the theme profile palette colors to unify style */}
            <div className="absolute inset-0 bg-[#3E2319]/10 blend-multiply" />
          </div>

        </div>
      </section>

    </div>
  );
}