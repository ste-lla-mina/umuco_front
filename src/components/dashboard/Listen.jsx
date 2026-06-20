import React, { useState } from 'react';
import { Play, Pause, Volume2, Clock, Music, BookOpen, Radio, Search, Headphones, Heart } from 'lucide-react';

import royalPalaceImg from '../../assets/palace.jpg'; 
import intoreImg from '../../assets/intore.jpg';
import rwabugiriImg from '../../assets/king.jpg';
import traditionalMusicImg from '../../assets/inanga.jpg';
import danceImg from '../../assets/dance.jpg';
import museumImg from '../../assets/museum.jpg';
import imigongoImg from '../../assets/imigongo.jpg';
import poetImg from '../../assets/poet.jpg';
import folkImg from '../../assets/folktale.jpg';

function Listen() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioTracks = [
    {
      id: 'a1',
      title: "King's Palace Chronicles – Mu Rukari",
      category: 'history',
      narrator: "Mzee Jean-Baptiste",
      duration: "18:45",
      img: royalPalaceImg,
      description: "An audio walkthrough of Rwanda's pre-colonial monarchy geometry, court lifestyles, and royal rituals recorded live from Nyanza."
    },
    {
      id: 'a2',
      title: "Kigeli IV Rwabugiri Expansionist Campaigns",
      category: 'history',
      narrator: "Dr. Alphonse Mutangana",
      duration: "24:15",
      img: rwabugiriImg,
      description: "A deep dive into the military tactics, decentralized power, and border consolidation strategies of King Rwabugiri."
    },
    {
      id: 'a3',
      title: "Testimonies from the Campaign Against Genocide",
      category: 'history',
      narrator: "Hon. Alphonsine Mukama",
      duration: "32:10",
      img: museumImg,
      description: "Audio documentaries and veteran accounts of the heroic rescue operations executed from the Parliament building."
    },
    {
      id: 'a4',
      title: "The Code of the Intore Warriors",
      category: 'traditions',
      narrator: "Pastor Ezra Kayishema",
      duration: "14:20",
      img: intoreImg,
      description: "Oral breakdown of character development, community accountability, and courage training inside ancestral academies."
    },
    {
      id: 'a5',
      title: "Umuganda: Ancient Roots of Cohesion",
      category: 'traditions',
      narrator: "Mama Uwimana",
      duration: "11:05",
      img: danceImg,
      description: "Exploring the cooperative philosophical systems used by communities during home construction and seasonal harvests."
    },
    {
      id: 'a6',
      title: "Imigongo Geometries & Philosophical Designs",
      category: 'traditions',
      narrator: "Gisaka Artisans Guild",
      duration: "09:50",
      img: imigongoImg,
      description: "Audio commentary detailing Prince Kakira's 18th-century natural composition patterns and home balance aesthetics."
    },
    {
      id: 'a7',
      title: "Classical Inanga Epic Compositions",
      category: 'literature',
      subcategory: 'Music',
      narrator: "Master Inanga Player Kirusu",
      duration: "21:30",
      img: traditionalMusicImg,
      description: "Acoustic strings accompanying vocal records of dynastic battles, moral epics, and ancient cosmic philosophies."
    },
    {
      id: 'a8',
      title: "Generational Fireside Folktales",
      category: 'literature',
      subcategory: 'Folktales',
      narrator: "Grandmother Mukandutiye",
      duration: "13:15",
      img: folkImg,
      description: "Traditional moral stories passed down across families to enforce wit, societal logic, and ethical boundaries."
    },
    {
      id: 'a9',
      title: "Imigenurano n'Ibisakuzo (Riddles & Wit Games)",
      category: 'literature',
      subcategory: 'Riddles',
      narrator: "Linguistic Panel",
      duration: "08:40",
      img: folkImg,
      description: "An interactive verbal presentation testing rapid metaphorical interpretations and deep Kinyarwanda mastery."
    },
    {
      id: 'a10',
      title: "Ibyivugo: High-Stakes Bravery Declations",
      category: 'literature',
      subcategory: 'Imivugo',
      narrator: "Poet Rugamba Jr.",
      duration: "12:05",
      img: poetImg,
      description: "Rhythmic vocabulary deliveries honoring heroic milestones, ancestral lineages, and outstanding acts of community defense."
    },
    {
      id: 'a11',
      title: "Ibisigo by'Abami: Esoteric Court Poetry",
      category: 'literature',
      subcategory: "Ibisigo by' abami",
      narrator: "Abasizi Royal Historians",
      duration: "45:00",
      img: poetImg,
      description: "Archived complex poetry mapping historical king lineages, cosmic protective systems, and symbolic dynastic triumphs."
    }
  ];

  const handlePlayToggle = (track) => {
    if (currentPlaying?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentPlaying(track);
      setIsPlaying(true);
    }
  };

  const filteredTracks = audioTracks.filter(track => {
    const matchesCategory = activeCategory === 'all' || track.category === activeCategory;
    const matchesSearch = track.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          track.narrator.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (track.subcategory && track.subcategory.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 font-sans pb-32 text-left animate-in fade-in duration-300">
      
      <div className="border-b border-[#EADBC8]/40 pb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#8D493A] tracking-tight flex items-center gap-2">
            <Headphones className="w-8 h-8 text-[#8D493A]" /> All in Sound.
          </h1>
          <p className="text-xs md:text-sm text-[#6F5B55] mt-1">
            Listen to oral recitations, dramatic epics, instrumental strings, and master narration archives of Rwandan heritage.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#6F5B55]/50" />
          <input
            type="text"
            placeholder="Search narrators, tracks, epics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 bg-white border border-[#EADBC8]/60 rounded-xl text-xs focus:outline-none focus:border-[#8D493A] text-[#2C1A14]"
          />
        </div>
      </div>

      <div className="bg-white p-2 rounded-2xl border border-[#EADBC8]/40 inline-flex flex-wrap items-center gap-1.5 shadow-3xs">
        <button 
          onClick={() => setActiveCategory('all')} 
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all uppercase ${activeCategory === 'all' ? 'bg-[#8D493A] text-white shadow-xs' : 'text-[#6F5B55] hover:bg-[#FDFBF7]'}`}
        >
          🎵 All Audio
        </button>
        <button 
          onClick={() => setActiveCategory('history')} 
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all uppercase ${activeCategory === 'history' ? 'bg-[#8D493A] text-white shadow-xs' : 'text-[#6F5B55] hover:bg-[#FDFBF7]'}`}
        >
          <Radio className="w-3 h-3 inline mr-1" /> History Logs
        </button>
        <button 
          onClick={() => setActiveCategory('traditions')} 
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all uppercase ${activeCategory === 'traditions' ? 'bg-[#8D493A] text-white shadow-xs' : 'text-[#6F5B55] hover:bg-[#FDFBF7]'}`}
        >
          <BookOpen className="w-3 h-3 inline mr-1" /> Traditions
        </button>
        <button 
          onClick={() => setActiveCategory('literature')} 
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all uppercase ${activeCategory === 'literature' ? 'bg-[#8D493A] text-white shadow-xs' : 'text-[#6F5B55] hover:bg-[#FDFBF7]'}`}
        >
          <Music className="w-3 h-3 inline mr-1" /> Oral Literature
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTracks.length > 0 ? (
          filteredTracks.map((track) => {
            const isThisPlaying = currentPlaying?.id === track.id && isPlaying;
            return (
              <div 
                key={track.id} 
                className={`bg-white border rounded-2xl p-3 flex flex-col justify-between shadow-2xs transition-all text-left relative overflow-hidden group ${isThisPlaying ? 'border-[#8D493A] ring-2 ring-[#8D493A]/5' : 'border-[#EADBC8]/50 hover:border-[#8D493A]/30'}`}
              >
                <div>
                  <div className="flex gap-3">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0 relative">
                      <img src={track.img} alt={track.title} className="w-full h-full object-cover" />
                      <button 
                        onClick={() => handlePlayToggle(track)}
                        className="absolute inset-0 bg-[#2C1A14]/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        {isThisPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                      </button>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[8px] font-black tracking-wider uppercase bg-[#FCDFD3]/30 text-[#8D493A] px-1.5 py-0.5 rounded">
                          {track.subcategory || track.category}
                        </span>
                        <span className="text-[9px] text-[#6F5B55]/60 font-bold flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" /> {track.duration}
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-[#2C1A14] mt-1 line-clamp-1 group-hover:text-[#8D493A] transition-colors">{track.title}</h3>
                      <p className="text-[10px] text-[#6F5B55]/80 font-medium mt-0.5">Narrator: {track.narrator}</p>
                    </div>
                  </div>
                  
                  <p className="text-[11px] text-[#6F5B55] mt-3 line-clamp-2 leading-relaxed bg-[#FDFBF7] p-2 rounded-xl border border-[#EADBC8]/20">
                    {track.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-100">
                  <button 
                    onClick={() => handlePlayToggle(track)}
                    className={`text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 py-1 px-3 rounded-lg transition-all ${isThisPlaying ? 'bg-[#8D493A] text-white' : 'bg-[#FDFBF7] text-[#8D493A] border border-[#EADBC8]/60 hover:bg-[#8D493A] hover:text-white'}`}
                  >
                    {isThisPlaying ? (
                      <>
                        <Pause className="w-3 h-3 fill-current" /> Pause Broadcast
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current ml-0.5" /> Stream Track
                      </>
                    )}
                  </button>

                  <button className="p-1.5 rounded-lg border border-neutral-100 text-neutral-300 hover:text-red-400 transition-colors">
                    <Heart className="w-3.5 h-3.5" />
                  </button>
                </div>

                {isThisPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#8D493A]/10 flex items-end justify-center gap-0.5 px-4 overflow-hidden">
                    <div className="w-1 bg-[#8D493A] h-3 animate-pulse"></div>
                    <div className="w-1 bg-[#8D493A] h-1 animate-pulse delay-75"></div>
                    <div className="w-1 bg-[#8D493A] h-4 animate-pulse delay-150"></div>
                    <div className="w-1 bg-[#8D493A] h-2 animate-pulse delay-200"></div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-16 text-center text-xs text-neutral-400 font-medium bg-white rounded-3xl border border-[#EADBC8]/40">
            No audio programs match your current filter settings or search string.
          </div>
        )}
      </div>

      {currentPlaying && (
        <div className="fixed bottom-6 left-6 right-6 md:left-1/4 md:right-1/4 bg-[#2C1A14] text-white p-3.5 rounded-2xl shadow-xl border border-white/10 flex items-center justify-between z-50 animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 bg-white/10 relative">
              <img src={currentPlaying.img} alt={currentPlaying.title} className="w-full h-full object-cover" />
              {isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Volume2 className="w-4 h-4 text-[#8D493A] animate-bounce" />
                </div>
              )}
            </div>
            <div className="min-w-0 text-left">
              <p className="text-[11px] font-black truncate text-white">{currentPlaying.title}</p>
              <p className="text-[9px] text-neutral-400 font-medium truncate">Speaker: {currentPlaying.narrator}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 pl-2">
            <div className="hidden sm:flex items-center space-x-1.5 text-[10px] text-neutral-400 font-bold">
              <Clock className="w-3 h-3" /> <span>{currentPlaying.duration}</span>
            </div>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-full bg-[#8D493A] hover:bg-[#8D493A]/80 text-white shadow-md flex items-center justify-center transition-all"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Listen;