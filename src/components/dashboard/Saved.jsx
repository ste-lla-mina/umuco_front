import React from 'react';
import { Play, Pause, Trash2, Headphones, Clock, Music, BookOpen, Radio } from 'lucide-react';

function Saved({ savedTracks = [], onPlayToggle, currentPlaying, isPlaying, onRemoveTrack }) {
  
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'history': return <Radio className="w-3.5 h-3.5" />;
      case 'traditions': return <BookOpen className="w-3.5 h-3.5" />;
      case 'literature': return <Music className="w-3.5 h-3.5" />;
      default: return <Headphones className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="space-y-6 font-sans pb-12 text-left animate-in fade-in duration-300">
      
      <div className="border-b border-[#EADBC8]/40 pb-4">
        <h1 className="text-3xl font-bold text-[#8D493A] tracking-tight flex items-center gap-2">
          Saved Library.
        </h1>
        <p className="text-xs md:text-sm text-[#6F5B55] mt-1">
          Review and replay your bookmarked historical broadcasts, traditional guidelines, and oral literature.
        </p>
      </div>

      {savedTracks.length > 0 ? (
        <div className="bg-white border border-[#EADBC8]/40 rounded-3xl overflow-hidden shadow-2xs">
          <div className="divide-y divide-neutral-100">
            {savedTracks.map((track) => {
              const isThisPlaying = currentPlaying?.id === track.id && isPlaying;
              
              return (
                <div 
                  key={track.id} 
                  className={`p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${isThisPlaying ? 'bg-[#8D493A]/5' : 'hover:bg-neutral-50/60'}`}
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0 relative group">
                      <img src={track.img} alt={track.title} className="w-full h-full object-cover" />
                      <button 
                        onClick={() => onPlayToggle(track)}
                        className="absolute inset-0 bg-[#2C1A14]/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        {isThisPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                      </button>
                    </div>

                    <div className="min-w-0 text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] font-black tracking-wider uppercase bg-[#FCDFD3]/40 text-[#8D493A] px-2 py-0.5 rounded flex items-center gap-1">
                          {getCategoryIcon(track.category)}
                          {track.subcategory || track.category}
                        </span>
                        <span className="text-[9px] text-[#6F5B55]/60 font-bold flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" /> {track.duration}
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-[#2C1A14] mt-1.5 truncate group-hover:text-[#8D493A]">{track.title}</h3>
                      <p className="text-[10px] text-[#6F5B55]/70 font-medium">Narrator: {track.narrator}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 self-end sm:self-center">
                    <button 
                      onClick={() => onPlayToggle(track)}
                      className={`text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 py-1.5 px-3 rounded-lg transition-all ${isThisPlaying ? 'bg-[#8D493A] text-white' : 'bg-[#FDFBF7] text-[#8D493A] border border-[#EADBC8]/60 hover:bg-[#8D493A] hover:text-white'}`}
                    >
                      {isThisPlaying ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current ml-0.5" />}
                      {isThisPlaying ? 'Playing' : 'Listen'}
                    </button>

                    <button 
                      onClick={() => onRemoveTrack(track.id)}
                      className="p-2 rounded-lg border border-neutral-200 text-neutral-400 hover:text-red-500 hover:bg-red-50/50 hover:border-red-200 transition-colors"
                      title="Remove Bookmark"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="py-20 text-center bg-white rounded-3xl border border-[#EADBC8]/40 space-y-2">
          <span className="text-3xl block">🔖</span>
          <p className="text-xs font-bold text-[#6F5B55]">Your library is currently empty</p>
          <p className="text-[11px] text-neutral-400 max-w-[260px] mx-auto">The things that you save will appear here.</p>
        </div>
      )}

    </div>
  );
}

export default Saved;