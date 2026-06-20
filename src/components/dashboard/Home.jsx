import React from 'react';
import { Compass, Music, HelpCircle, Calendar, Quote, ChevronRight, FileText, Video, Radio } from 'lucide-react';

import royalPalaceImg from '../../assets/palace.jpg'; 
import intoreImg from '../../assets/intore.jpg';
import rwabugiriImg from '../../assets/king.jpg';
import traditionalMusicImg from '../../assets/inanga.jpg';
import danceImg from '../../assets/dance.jpg';

function Home({ userProfile, setActiveTab }) {
  const displayName = userProfile?.name || 'Stella';

  const recentExplorations = [
    { title: 'Intore Culture', category: 'History', detail: '12 mins left', img: intoreImg },
    { title: 'Kigeli IV Rwabugiri', category: 'Linkage', detail: 'New Activity', img: rwabugiriImg },
    { title: 'Traditional Music', category: 'Audio', detail: '4 Stories', img: traditionalMusicImg },
    { title: 'Cultural Events', category: 'Values', detail: 'Updated', img: danceImg },
  ];
  
  const today = new Date();
  const options={
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'

  }
  const formattedDate = today.toLocaleDateString('en-US',options);

  const popularTopics = [
    'Amateka y\'u Rwanda', 'Abami b\'u Rwanda', 'Indangagaciro', 'Kwibuka'
  ];

  return (
    <div className="space-y-8 font-sans pb-12 animate-in fade-in duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#EADBC8]/40 pb-5">
        <div>
          <h1 className="text-3xl font-bold text-[#4d4d4d] tracking-tight">
            Welcome <span className="text-[#8d493a] italic">{displayName}!</span> 
          </h1>
          <p className="text-xs md:text-sm text-[#6F5B55] mt-1">
            Explore, learn and contribute to preserving our sources.
          </p>
        </div>
        <div className="bg-[#FCDFD3]/30 px-4 py-2 rounded-2xl border border-[#EADBC8]/50 flex items-center space-x-2 shrink-0">
          <Calendar className="w-4 h-4 text-[#8D493A]" />
          <span className="text-xs font-bold text-[#8D493A]">{formattedDate}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white border border-[#EADBC8]/70 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 relative h-48 md:h-full min-h-[180px]">
              <img 
                src={royalPalaceImg} 
                alt="The Royal Palace" 
                className="w-full h-full object-cover" 
              />
              <span className="absolute top-3 left-3 bg-[#8D493A] text-[#FDFBF7] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-lg">
                Today's Highlight.
              </span>
            </div>
            
            <div className="md:col-span-3 p-6 flex flex-col justify-between text-left">
              <div>
                <h3 className="text-xl font-bold text-[#8D493A] mt-20 mb-2"> King's Palace – Mu Rukari.</h3>
                <p className="text-xs text-[#6F5B55] leading-relaxed mt-5">
                  The seat of Rwanda's monarchy. This is where the royal family in the traditional Rwanda lived and it has a great pact in our history. Experience the living history through immersive digitized and interactive archives.
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-4 mt-2 border-t border-neutral-100">
                <button 
                  onClick={() => setActiveTab('explore')} 
                  className="inline-flex items-center space-x-1 text-xs font-bold text-[#8D493A] hover:underline"
                >
                  <span>Explore Now</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold text-[#6F5B55]/70 tracking-wider uppercase">Continue Exploring.</h2>
              <button 
                onClick={() => setActiveTab('explore')} 
                className="text-xs font-bold text-[#8D493A] hover:underline"
              >
                View all →
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {recentExplorations.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#EADBC8]/50 rounded-2xl p-2.5 flex flex-col shadow-2xs hover:border-[#8D493A]/30 transition-all text-left group cursor-pointer">
                  <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 bg-neutral-100">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <span className="text-[9px] font-bold tracking-wider uppercase text-[#8D493A]/80">{item.category}</span>
                  <h4 className="text-xs font-bold text-[#2C1A14] truncate mt-0.5 mb-1">{item.title}</h4>
                  <span className="text-[10px] text-neutral-400 font-medium mt-auto">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6F5B55]/70">Popular Topics</h4>
            <div className="flex flex-wrap gap-2">
              {popularTopics.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="bg-white border border-[#EADBC8] text-[#6F5B55] hover:border-[#8D493A] hover:text-[#8D493A] px-3 py-1.5 rounded-xl text-xs font-medium cursor-pointer transition-colors shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-2">
            <div className="bg-white border border-[#EADBC8]/60 rounded-2xl p-5 flex flex-col justify-between shadow-2xs">
              <div>
                <h3 className="text-base font-extrabold text-[#8D493A]">Kwibuka 32</h3>
                <p className="text-[11px] text-neutral-400 font-semibold mt-0.5">7 April 2026</p>
                <p className="text-xs text-[#6F5B55] mt-3 leading-relaxed">
                  Remember, Unite, Renew. Honor the history and resilience of a nation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100/70 flex items-center justify-between">
                <div>
                  <span className="text-3xl font-black text-[#8D493A] tracking-tight">We</span>
                  <span className="text-[9px] font-bold text-neutral-400 block uppercase tracking-wider -mt-1">Stand As One.</span>
                </div>
                <button 
                  onClick={() => setActiveTab('kwibuka')}
                  className="bg-[#8D493A] hover:bg-[#2C1A14] text-white text-[11px] font-bold px-3.5 py-2 rounded-xl transition-colors shadow-sm"
                >
                  Explore Content
                </button>
              </div>
            </div>
            <div className="bg-white border border-[#EADBC8]/60 rounded-2xl p-5 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold text-[#6F5B55]/90 uppercase tracking-wider">Recently Added</h3>
                <button onClick={() => setActiveTab('explore')} className="text-[11px] font-bold text-[#8D493A] hover:underline">View all</button>
              </div>
              <div className="space-y-3.5">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-amber-50 rounded-xl text-amber-600 shrink-0"><Radio className="w-4 h-4" /></div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-[#2C1A14] truncate">Oral History – Nyamasheke</h4>
                    <p className="text-[10px] text-neutral-400 mt-0.5">Audio • 12 May 2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-rose-50 rounded-xl text-rose-600 shrink-0"><Video className="w-4 h-4" /></div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-[#2C1A14] truncate">Traditional Dance – Intore</h4>
                    <p className="text-[10px] text-neutral-400 mt-0.5">Video • 10 May 2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-50 rounded-xl text-blue-600 shrink-0"><FileText className="w-4 h-4" /></div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-[#2C1A14] truncate">Document – 1962 Letter</h4>
                    <p className="text-[10px] text-neutral-400 mt-0.5">Document • 8 May 2025</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#EADBC8]/60 rounded-2xl p-5 shadow-2xs">
              <h3 className="text-xs font-bold text-[#6F5B55]/90 uppercase tracking-wider mb-4">Your Activity</h3>
              <div className="relative border-l border-neutral-100 pl-4 space-y-4 text-xs">
                <div>
                  <p className="font-bold text-[#2C1A14]">Viewed: The Royal Palace – Nyanza</p>
                  <span className="text-[10px] text-neutral-400 font-medium block mt-0.5">16 May 2025</span>
                </div>
                <div>
                  <p className="font-bold text-[#2C1A14]">Saved: Intore Dance</p>
                  <span className="text-[10px] text-neutral-400 font-medium block mt-0.5">15 May 2025</span>
                </div>
                <div>
                  <p className="font-bold text-[#2C1A14]">Listened: Byivugo by Intore</p>
                  <span className="text-[10px] text-neutral-400 font-medium block mt-0.5">16 May 2025</span>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div className="space-y-6">
          <div className="bg-white border border-[#EADBC8]/70 rounded-2xl p-5 text-left relative overflow-hidden shadow-2xs">
            <div className="absolute right-3 top-3 text-[#FCDFD3]/40">
              <Quote className="w-12 h-12 rotate-180 transform" />
            </div>
            <span className="inline-flex items-center space-x-1.5 text-[10px] font-bold text-[#6F5B55]/70 uppercase tracking-wider mb-3">
              <span>Quote of the Day</span>
            </span>
            <p className="text-sm font-semibold italic text-[#8D493A] leading-relaxed mb-2">
              "Umuco ni u Rwanda, u Rwanda ni twe."
            </p>
            <p className="text-xs text-neutral-400">We are the one to preserve our roots.</p>
          </div>
          <div className="bg-white border border-[#EADBC8]/70 rounded-2xl p-5 text-left shadow-2xs space-y-3">
            <h3 className="text-xs font-bold text-[#6F5B55]/80 uppercase tracking-wider mb-1">Quick Actions</h3>
            
            <button 
              onClick={() => setActiveTab('listen')}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-[#FDFBF7] border border-[#EADBC8]/50 hover:border-[#8D493A]/40 transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <Music className="w-4 h-4 text-[#8D493A]" />
                <span className="text-xs font-bold text-[#2C1A14]">Listen</span>
              </div>
              <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-[#8D493A] transition-colors" />
            </button>

            <button 
              onClick={() => setActiveTab('contribute')}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-[#FDFBF7] border border-[#EADBC8]/50 hover:border-[#8D493A]/40 transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <span className="text-base font-medium text-[#8D493A] leading-none -mt-0.5">+</span>
                <span className="text-xs font-bold text-[#2C1A14]">Contribute</span>
              </div>
              <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-[#8D493A] transition-colors" />
            </button>

            <button 
              onClick={() => setActiveTab('explore')}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-[#FDFBF7] border border-[#EADBC8]/50 hover:border-[#8D493A]/40 transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <Compass className="w-4 h-4 text-[#8D493A]" />
                <span className="text-xs font-bold text-[#2C1A14]">Advanced Search</span>
              </div>
              <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-[#8D493A] transition-colors" />
            </button>
          </div>
          <div className="bg-white border border-[#EADBC8]/70 rounded-2xl p-5 text-left shadow-2xs flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold text-[#6F5B55]/80 uppercase tracking-wider">Upcoming Days</h3>
              <button className="text-xs font-bold text-neutral-400 hover:text-[#8D493A]">View all</button>
            </div>
            
            <div className="space-y-4 border-b border-neutral-100 pb-4">
              <div className="flex items-start space-x-3">
                <div className="flex flex-col items-center justify-center bg-neutral-50 border border-neutral-200/60 rounded-xl px-2.5 py-1.5 min-w-[42px] text-center">
                  <span className="text-sm font-black text-[#8D493A] leading-none">1</span>
                  <span className="text-[8px] font-bold text-[#6F5B55] uppercase tracking-wider mt-0.5">July</span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-[#8D493A] truncate">Independence Day</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">When Rwanda became free from colonial rule.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex flex-col items-center justify-center bg-neutral-50 border border-neutral-200/60 rounded-xl px-2.5 py-1.5 min-w-[42px] text-center">
                  <span className="text-sm font-black text-[#8D493A] leading-none">4</span>
                  <span className="text-[8px] font-bold text-[#6F5B55] uppercase tracking-wider mt-0.5">July</span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-[#8D493A] truncate">Liberation Day</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">The country became free from bad leadership.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex flex-col items-center justify-center bg-neutral-50 border border-neutral-200/60 rounded-xl px-2.5 py-1.5 min-w-[42px] text-center">
                  <span className="text-sm font-black text-[#8D493A] leading-none">07</span>
                  <span className="text-[8px] font-bold text-[#6F5B55] uppercase tracking-wider mt-0.5">Aug</span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-[#8D493A] truncate">Umuganura Day</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">National day for sharing harvest.</p>
                </div>
              </div>
            </div>

            <button className="w-full text-center text-xs font-bold text-[#2C1A14] hover:text-[#8D493A] pt-3.5 transition-colors">
              See Full Calendar
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;