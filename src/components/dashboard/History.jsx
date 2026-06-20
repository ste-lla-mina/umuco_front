import React, { useState } from 'react';
import { Clock, Eye, Headphones, FileText, Video, MapPin, Trash2, Calendar, RotateCcw } from 'lucide-react';

function History({ onRevisitItem }) {
  const [filter, setFilter] = useState('all');
  const [historyItems, setHistoryItems] = useState([
    {
      id: 'h1',
      title: "King's Palace Nyanza",
      type: "place",
      viewedAt: "Viewed 2 hours ago",
      region: "South",
      era: "Pre-colonial",
      details: "Interactive 3D virtual tour of the traditional dome structures."
    },
    {
      id: 'h2',
      title: "Intore Traditional Dance",
      type: "video",
      viewedAt: "Viewed Yesterday",
      region: "National",
      era: "Pre-colonial",
      details: "Watched 15-minute documentary showcasing rhythmic warrior choreographies."
    },
    {
      id: 'h3',
      title: "Byivugo by Intore",
      type: "audio",
      viewedAt: "Viewed 2 days ago",
      region: "National",
      era: "Pre-colonial",
      details: "Listened to 12-minute oral recitation of bravery declarations."
    },
    {
      id: 'h4',
      title: "King Kigeli IV Rwabugiri",
      type: "article",
      viewedAt: "Viewed 3 days ago",
      region: "West",
      era: "Pre-colonial",
      details: "Read analysis on expansionist campaigns and border consolidation."
    }
  ]);

  const handleClearAll = () => {
    setHistoryItems([]);
  };

  const handleRemoveItem = (id) => {
    setHistoryItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleRevisit = (item) => {
    if (onRevisitItem) {
      onRevisitItem(item);
    }
  };

  const getTypeStyles = (type) => {
    switch (type) {
      case 'place': return { bg: 'bg-orange-50 text-orange-600 border-orange-100', icon: <MapPin className="w-4 h-4" />, label: 'PLACE' };
      case 'video': return { bg: 'bg-blue-50 text-blue-600 border-blue-100', icon: <Video className="w-4 h-4" />, label: 'VIDEO' };
      case 'audio': return { bg: 'bg-purple-50 text-purple-600 border-purple-100', icon: <Headphones className="w-4 h-4" />, label: 'AUDIO' };
      case 'article': return { bg: 'bg-amber-50 text-amber-700 border-amber-100', icon: <FileText className="w-4 h-4" />, label: 'ARTICLE' };
      default: return { bg: 'bg-gray-50 text-gray-600 border-gray-100', icon: <Eye className="w-4 h-4" />, label: 'VIEW' };
    }
  };

  const filteredItems = filter === 'all' ? historyItems : historyItems.filter(item => item.type === filter);

  const totalItems = historyItems.length;
  const audioCount = historyItems.filter(i => i.type === 'audio').length;
  const articleCount = historyItems.filter(i => i.type === 'article').length;

  return (
    <div className="space-y-6 font-sans pb-12 text-left animate-in fade-in duration-300">
      
      <div className="border-b border-[#EADBC8]/40 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#8D493A] tracking-tight">History.</h1>
          <p className="text-xs md:text-sm text-[#6F5B55] mt-1">Your recently explored cultural content across the archive platform.</p>
        </div>
        {historyItems.length > 0 && (
          <button 
            onClick={handleClearAll}
            className="self-start sm:self-center text-xs font-bold text-[#8D493A] flex items-center gap-1.5 hover:bg-[#8D493A]/5 bg-white px-3 py-1.5 rounded-xl border border-[#EADBC8]/40 shadow-3xs transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" /> Clear Logs
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-[#EADBC8]/30 rounded-2xl p-4 flex items-center justify-between shadow-3xs">
          <div>
            <span className="text-2xl font-bold text-[#2C1A14]">{totalItems}</span>
            <p className="text-[11px] text-[#6F5B55] font-semibold mt-0.5">Items Viewed</p>
          </div>
          <div className="p-3 bg-neutral-50 rounded-xl text-neutral-400">
            <Eye className="w-5 h-5" />
          </div>
        </div>
        <div className="bg-white border border-[#EADBC8]/30 rounded-2xl p-4 flex items-center justify-between shadow-3xs">
          <div>
            <span className="text-2xl font-bold text-[#2C1A14]">{audioCount}</span>
            <p className="text-[11px] text-[#6F5B55] font-semibold mt-0.5">Audio Sessions</p>
          </div>
          <div className="p-3 bg-neutral-50 rounded-xl text-neutral-400">
            <Headphones className="w-5 h-5" />
          </div>
        </div>
        <div className="bg-white border border-[#EADBC8]/30 rounded-2xl p-4 flex items-center justify-between shadow-3xs">
          <div>
            <span className="text-2xl font-bold text-[#2C1A14]">{articleCount}</span>
            <p className="text-[11px] text-[#6F5B55] font-semibold mt-0.5">Articles Read</p>
          </div>
          <div className="p-3 bg-neutral-50 rounded-xl text-neutral-400">
            <FileText className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 border-b border-neutral-100 pb-2">
        {['all', 'place', 'video', 'audio', 'article'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1.5 text-[11px] font-bold rounded-lg transition-all capitalize ${filter === type ? 'bg-[#8D493A] text-white shadow-xs' : 'text-[#6F5B55] hover:bg-neutral-50'}`}
          >
            {type === 'all' ? 'All Activity' : `${type}s`}
          </button>
        ))}
      </div>

      <div className="bg-white border border-[#EADBC8]/40 rounded-3xl overflow-hidden shadow-2xs">
        {filteredItems.length > 0 ? (
          <div className="divide-y divide-neutral-100">
            {filteredItems.map((item) => {
              const styles = getTypeStyles(item.type);
              return (
                <div key={item.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-neutral-50/50 transition-colors">
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${styles.bg}`}>
                      {styles.icon}
                    </div>

                    <div className="min-w-0 text-left">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[9px] font-black tracking-wider uppercase bg-neutral-100 text-[#2C1A14]/70 px-1.5 py-0.5 rounded">
                          {styles.label}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-medium flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5" /> {item.region} Region
                        </span>
                        <span className="text-[10px] text-neutral-400 font-medium flex items-center gap-1">
                          <Calendar className="w-2.5 h-2.5" /> {item.era} Era
                        </span>
                      </div>

                      <h3 className="text-xs font-bold text-[#2C1A14] mt-1.5">{item.title}</h3>
                      <p className="text-[11px] text-[#6F5B55] mt-0.5 line-clamp-1">{item.details}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-3 border-t md:border-t-0 border-neutral-100 pt-2 md:pt-0">
                    <span className="text-[10px] font-bold text-[#6F5B55]/70 flex items-center gap-1 mr-1">
                      <Clock className="w-3 h-3 text-neutral-300" /> {item.viewedAt}
                    </span>
                    
                    <div className="flex items-center gap-1.5">
                      <button 
                        onClick={() => handleRevisit(item)}
                        className="text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#FDFBF7] text-[#8D493A] border border-[#EADBC8]/60 hover:bg-[#8D493A] hover:text-white transition-all shadow-3xs"
                      >
                        <RotateCcw className="w-3 h-3" /> Revisit
                      </button>
                      <button 
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-2 text-neutral-400 hover:text-red-500 hover:bg-red-50/50 rounded-lg transition-colors border border-transparent hover:border-red-100"
                        title="Delete log entry"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-16 text-center text-xs text-neutral-400 font-medium bg-white rounded-3xl">
            No history logs match this filter or your logs have been cleared.
          </div>
        )}
      </div>

    </div>
  );
}

export default History;