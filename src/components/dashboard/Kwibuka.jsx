import React from 'react';
import { Calendar, Ribbon, Eye, Headphones, FileText, ArrowUpRight, HelpCircle } from 'lucide-react';

function Kwibuka() {
  const timelineEvents = [
    {
      date: "April 7",
      title: "Lighting of the Flame of Remembrance",
      description: "The national commemoration period begins with the lighting of the eternal flame at the Kigali Genocide Memorial.",
      status: "upcoming"
    },
    {
      date: "April 13",
      title: "National Dialogue on Reconstruction",
      description: "A youth-led forum discussing the progress of Rwanda's social fabric and economic transformation over three decades.",
      status: "active"
    },
    {
      date: "May 20",
      title: "The International Symposium of Memory",
      description: "Global scholars and survivors convene to share insights on genocide prevention and archival technologies.",
      status: "upcoming"
    }
  ];

  const highlights = [
    {
      type: "AUDIO TESTIMONY",
      title: "The Hill of Bisesero",
      meta: "\"We stood together on those slopes for weeks. Our unity...\"",
      color: "text-[#8D493A]",
      icon: <Headphones className="w-3.5 h-3.5" />
    },
    {
      type: "WRITTEN ARCHIVE",
      title: "Letters from Nyamata",
      meta: "A collection of recovered letters documenting the final...",
      color: "text-amber-700",
      icon: <FileText className="w-3.5 h-3.5" />
    },
    {
      type: "VIDEO INTERVIEW",
      title: "Finding Forgiveness",
      meta: "Jean-Claude reflects on 30 years of reconciliation and...",
      color: "text-blue-600",
      icon: <Eye className="w-3.5 h-3.5" />
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#FAF8F5] p-3 sm:p-6 lg:p-8 font-sans text-left space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-[#EADBC8]/40 pb-4 gap-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#8D493A] tracking-tight flex items-center gap-2">
            <Ribbon className="w-6 h-6 text-[#8D493A] flex-shrink-0" /> Kwibuka 32
          </h1>
          <p className="text-xs sm:text-sm text-[#6F5B55] mt-0.5">
            Remember, Unite, Renew. Exploring the repository of memory, testimonials, and regional history.
          </p>
        </div>
      </div>
      <div className="relative w-full bg-[#2C1A14] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 overflow-hidden border border-white/5 shadow-md">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8D493A_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="text-[9px] sm:text-[10px] font-black tracking-widest bg-[#8D493A] text-white px-2.5 py-1 rounded-md uppercase">
            Today's Reflection
          </span>
          <h2 className="text-base sm:text-xl lg:text-2xl font-serif italic font-bold leading-snug">
            "Memory is not just about the past; it is the seed of our future peace."
          </h2>
          <p className="text-[10px] sm:text-xs text-neutral-400 font-medium">
            — Honorine U., Survivor Testimony, 2024
          </p>
          <div className="pt-2 flex flex-wrap gap-2.5">
            <button className="bg-[#8D493A] hover:bg-[#723A2E] text-white px-3 sm:px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold transition-all shadow-sm">
              Read Full Testimony
            </button>
            <button className="bg-white/10 hover:bg-white/15 text-white border border-white/10 px-3 sm:px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold transition-all">
              Share Reflection
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        <div className="lg:col-span-2 bg-[#2C1A14] text-white border border-[#EADBC8]/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="text-xs sm:text-sm font-bold tracking-wide flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#8D493A]" /> Kwibuka 32: Commemorative Events
            </h3>
          </div>

          <div className="relative border-l border-white/10 pl-4 sm:pl-6 space-y-6 ml-1.5 py-1">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative text-left group">
                <div className={`absolute -left-[21px] sm:-left-[29px] top-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#2C1A14] transition-transform group-hover:scale-125 ${
                  event.status === 'active' ? 'bg-[#8D493A]' : 'bg-neutral-500'
                }`} />
                
                <div className="space-y-0.5">
                  <span className="block text-[9px] sm:text-[10px] font-bold text-neutral-400 tracking-wider">
                    {event.date}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FCDFD3] transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-300 leading-relaxed max-w-2xl pt-0.5">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-[#EADBC8]/40 rounded-2xl sm:rounded-3xl p-5 shadow-3xs space-y-4">
            <h3 className="text-xs sm:text-sm font-bold text-[#2C1A14] border-b border-neutral-100 pb-2 flex items-center justify-between">
              Voices of Hope <span>🕊️</span>
            </h3>

            <div className="divide-y divide-neutral-100 space-y-3.5">
              {highlights.map((item, idx) => (
                <div key={idx} className="pt-3.5 first:pt-0 group cursor-pointer text-left">
                  <span className={`block text-[8px] font-black tracking-widest uppercase mb-0.5 ${item.color} flex items-center gap-1`}>
                    {item.icon} {item.type}
                  </span>
                  <h4 className="text-xs font-bold text-[#2C1A14] group-hover:text-[#8D493A] transition-colors flex items-center gap-1">
                    {item.title} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#6F5B55] mt-0.5 leading-normal">
                    {item.meta}
                  </p>
                </div>
              ))}
            </div>

            <button className="w-full mt-2 py-2.5 border border-[#8D493A]/30 hover:border-[#8D493A] text-[#8D493A] hover:bg-[#8D493A]/5 bg-[#FDFBF7] font-black uppercase text-[10px] tracking-wider rounded-xl transition-all">
              Explore Repository
            </button>
          </div>

          <div className="bg-[#FCDFD3]/20 border border-[#8D493A]/20 rounded-2xl p-4 flex gap-3 text-left">
            <HelpCircle className="w-5 h-5 text-[#8D493A] flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-[#2C1A14]">Need historical context?</h4>
              <p className="text-[10px] sm:text-[11px] text-[#6F5B55] leading-relaxed">
                Connect with our local archive administrators or launch the AI workspace assistant inside the platform dashboard to query chronological data logs.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Kwibuka;