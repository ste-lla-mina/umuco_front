import React from 'react';
import { ArrowRight, Compass, BookOpen, Users, Milestone } from 'lucide-react';

import cardImg1 from '../assets/tradi.jpg';
import cardImg2 from '../assets/book.png';
import cardImg3 from '../assets/conne.jpg';

export default function Hero() {
  const stats = [
    { value: '1,000+', label: 'ORAL STORIES' },
    { value: '50+', label: 'LANGUAGE MODULES' },
    { value: '24/7', label: 'AI ASSISTANT' }
  ];

  const features = [
    {
      title: 'Explore Traditions',
      desc: 'Immerse yourself in oral histories, rhythmic drums, and the art',
      img: cardImg1,
      icon: Compass
    },
    {
      title: 'Learn Kinyarwanda',
      desc: 'Master the language of thousand hills with our smart interactive',
      img: cardImg2,
      icon: BookOpen
    },
    {
      title: 'Connect & Share',
      desc: 'Join a global community dedicated to keeping Rwandan spirit...',
      img: cardImg3,
      icon: Users
    }
  ];

  return (
    <section className="w-full bg-[#FDFBF7] font-sans px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center space-x-2 bg-[#FCDFD3]/40 border border-[#EADBC8] rounded-full px-4 py-0 mb-6">
            <Milestone className="w-3.5 h-3.5 text-[#8D493A]" />
            <span className="text-xxs md:text-xs font-semibold tracking-widest text-[#6F5B55] uppercase">
              DIGITALIZING HERITAGE
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C1A14] leading-[1.1] mb-6">
            The Sanctuary of<br/> Our
            <span className="italic font-normal text-[#8D493A]"> Heritage.</span> 
          </h1>

          <p className="text-sm md:text-base text-[#6F5B55] max-w-xl leading-relaxed mb-8 font-normal">
             Sustaining the nation's pulse by remembering our roots, carrying the spoken 
            wisdom of our ancestors, and honoring the quiet strength of shared pact.
          </p>

          <div className="flex flex-wrap items-center gap-4 w-full border-b border-[#EADBC8]/60 pb-12">
            <button className="flex items-center space-x-2 bg-[#8D493A] hover:bg-[#3E2723] text-[#FDFBF7] px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200 rounded-lg shadow-sm group">
              <span>Get Involved</span>
              <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
            </button>

            <button className="border border-[#6F5B55]/40 hover:bg-[#8D493A]/5 text-[#2C1A14] px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 rounded-lg">
              Explore More
            </button>
          </div>

          <div className="w-full pt-8 grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-serif text-xl md:text-2xl font-bold text-[#2C1A14]">
                  {stat.value}
                </span>
                <span className="text-xxs md:text-xs text-[#6F5B55] tracking-wider font-medium mt-1 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col space-y-5 w-full">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="relative group h-40 md:h-44 w-full rounded-3xl overflow-hidden shadow-md border border-[#EADBC8]/40 transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-scale duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute inset-x-6 bottom-6 text-left text-white">
                  <div className="flex items-center space-x-2 mb-1.5">
                    <IconComponent className="w-4 h-4 text-[#FCDFD3]" />
                    <h3 className="font-serif text-lg md:text-xl font-medium tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-200/80 max-w-sm line-clamp-2 font-light tracking-wide">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}