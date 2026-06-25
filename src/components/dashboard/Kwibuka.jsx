import React, { useState } from 'react';
import { Calendar, Ribbon, Eye, Headphones, FileText, ArrowUpRight, HelpCircle, BookOpen } from 'lucide-react';
import flame from '../../assets/flame.jpg';
import oral from '../../assets/oral.jpg'

function Kwibuka() {
  const [showFullTestimony, setShowFullTestimony] = useState(false);
  const [activeChronicle, setActiveChronicle] = useState(null);

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

  const visualStories = [
    {
      id: "flame",
      image: flame,
      title: "The Flame That Never Dies",
      excerpt: "Every year, the generation born after 1994 carries the torch forward, representing the resilient spirit and renewal of a modern nation built on shared identity.",
      fullStory: "Every year, the generation born after 1994 carries the torch forward, representing the resilient spirit and renewal of a modern nation built on shared identity. This torch passing symbolises that memory is active, historical preservation remains unbroken, and the commitment to unity is securely anchored.",
      tag: "Community & Renewal"
    },
    {
      id: "oral",
      image: oral,
      title: "Preserving Oral Landscapes",
      excerpt: "Through digital audio archiving projects, local youths record thousands of hours of historical narratives from elder survivors to safely preserve truth across decades.",
      fullStory: "Through digital audio archiving projects, local youths record thousands of hours of historical narratives from elder survivors to safely preserve truth across decades. These structural programs bridge technological tooling with living history, keeping native accounts verified, uncensored, and easily accessible.",
      tag: "Digital Preservation"
    }
  ];

  const handleShareReflection = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Kwibuka Reflection',
        text: '"The history written in blood can\'t be erased by the lies written in ink." — H.E Paul Kagame',
        url: window.location.href,
      }).catch(() => alert('Reflection link copied to clipboard!'));
    } else {
      navigator.clipboard.writeText('"The history written in blood can\'t be erased by the lies written in ink." — H.E Paul Kagame');
      alert('Reflection text copied to clipboard!');
    }
  };

  const handleExploreRepository = () => {
    alert('Navigating to the complete digital multimedia archive repository...');
  };

  const handleHighlightClick = (title) => {
    alert(`Opening multimedia record: ${title}`);
  };

  const handleContactAdmin = () => {
    alert('Submitting historical log request to the local archive administration framework...');
  };

  return (
    <div className="w-full min-h-screen bg-[#FAF8F5] p-3 sm:p-6 lg:p-8 font-sans text-left space-y-6 animate-in fade-in duration-300 overflow-x-hidden">
      
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

      <div className="relative w-full bg-[#8D493A] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 overflow-hidden border border-white/5 shadow-md">
        <div className="absolute inset-0 opacity-10 bg-white [background-size:16px_16px]" />
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="text-[9px] sm:text-[10px] font-black tracking-widest bg-white text-[#8D493A] px-2.5 py-1 rounded-md uppercase">
            Today's Reflection
          </span>
          <h2 className="text-base sm:text-xl lg:text-2xl font-sans text-gray-100 font-bold leading-snug">
            "The history written in blood can't be erased by the lies written in ink."
          </h2>
          <p className="text-[10px] sm:text-xs text-neutral-200 font-medium">
            — H.E Paul Kagame, 2024.
          </p>

          {showFullTestimony && (
            <div className="p-3 bg-white/10 rounded-xl text-xs text-neutral-100 leading-relaxed border border-white/10 animate-in fade-in duration-200">
              "We must preserve every detail, not out of anger, but to construct an unshakeable framework of truth. When the youth look back, they should see a solid foundation from which to build unity, ensuring that local dialogue completely replaces historical silence."
            </div>
          )}

          <div className="pt-2 flex flex-wrap gap-2.5">
            <button 
              onClick={() => setShowFullTestimony(!showFullTestimony)} 
              className="bg-white hover:bg-[#FAF8F5] text-[#8D493A] px-3 sm:px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold transition-all shadow-sm"
            >
              {showFullTestimony ? "Hide Details" : "Visit links"}
            </button>
            <button 
              onClick={handleShareReflection}
              className="bg-white/10 hover:bg-white/15 text-white border border-white/10 px-3 sm:px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold transition-all"
            >
              Share Reflection
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        <div className="lg:col-span-2 space-y-6 min-w-0">
          
          <div className="bg-[#8D493A] text-white border border-[#EADBC8]/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-xs sm:text-sm font-bold tracking-wide flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-300" /> Kwibuka 32: Commemorative Events
              </h3>
            </div>

            <div className="relative border-l border-white/10 pl-4 sm:pl-6 space-y-6 ml-1.5 py-1">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative text-left group">
                  <div className={`absolute -left-[21px] sm:-left-[29px] top-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#8D493A] transition-transform group-hover:scale-125 ${
                    event.status === 'active' ? 'bg-white' : 'bg-neutral-400'
                  }`} />
                  
                  <div className="space-y-0.5">
                    <span className="block text-[9px] sm:text-[10px] font-bold text-neutral-300 tracking-wider">
                      {event.date}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FCDFD3] transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-neutral-200 leading-relaxed max-w-2xl pt-0.5">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs sm:text-sm font-bold text-[#2C1A14] flex items-center gap-2 px-1">
              <BookOpen className="w-4 h-4 text-[#8D493A]" /> Featured Chronicles & Memory Narratives
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {visualStories.map((story) => (
                <div key={story.id} className="bg-white border border-[#EADBC8]/40 rounded-2xl overflow-hidden shadow-xs hover:shadow-md flex flex-col group transition-all duration-300">
                  <div className="h-40 sm:h-44 w-full bg-neutral-100 overflow-hidden relative">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#8D493A]/90 backdrop-blur-xs text-white text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-md uppercase">
                      {story.tag}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3 text-left">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#2C1A14] group-hover:text-[#8D493A] transition-colors">
                        {story.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#6F5B55] leading-relaxed">
                        {activeChronicle === story.id ? story.fullStory : story.excerpt}
                      </p>
                    </div>
                    <button 
                      onClick={() => setActiveChronicle(activeChronicle === story.id ? null : story.id)}
                      className="inline-flex items-center gap-1 bg-[#8D493A] hover:bg-[#723A2E] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl transition-all shadow-xs self-start"
                    >
                      {activeChronicle === story.id ? "Collapse" : "Read Chronicle"} <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="space-y-6">
          
          <div className="bg-white border border-[#EADBC8]/40 rounded-2xl sm:rounded-3xl p-5 shadow-3xs space-y-4">
            <h3 className="text-xs sm:text-sm font-bold text-[#2C1A14] border-b border-neutral-100 pb-2 flex items-center justify-between">
              Voices of Hope <span>🕊️</span>
            </h3>

            <div className="divide-y divide-neutral-100 space-y-3.5">
              {highlights.map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => handleHighlightClick(item.title)}
                  className="pt-3.5 first:pt-0 group cursor-pointer text-left"
                >
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

            <button 
              onClick={handleExploreRepository}
              className="w-full mt-2 py-2.5 bg-[#8D493A] hover:bg-[#723A2E] text-white font-black uppercase text-[10px] tracking-wider rounded-xl transition-all shadow-xs"
            >
              Explore Repository
            </button>
          </div>

          <div className="bg-[#FCDFD3]/20 border border-[#8D493A]/20 rounded-2xl p-4 flex gap-3 text-left">
            <HelpCircle className="w-5 h-5 text-[#8D493A] flex-shrink-0 mt-0.5" />
            <div className="space-y-2 w-full">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-[#2C1A14]">Need historical context?</h4>
                <p className="text-[10px] sm:text-[11px] text-[#6F5B55] leading-relaxed">
                  Connect with our local archive administrators or launch the AI workspace assistant inside the platform dashboard to query chronological data logs.
                </p>
              </div>
              <button 
                onClick={handleContactAdmin}
                className="text-[10px] font-bold text-[#8D493A] hover:text-[#723A2E] transition-colors underline decoration-[#8D493A]/40 underline-offset-2"
              >
                Contact Archive Specialist
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Kwibuka;