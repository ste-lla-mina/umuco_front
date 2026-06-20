import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Home from './Home';
import Explore from './Explore';
import Listen from './Listen';
import Saved from './Saved';
import History from './History';
import Settings from './Settings';
import Kwibuka from './Kwibuka';
import { MessageCircle, X } from 'lucide-react';

function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('home');
  const [savedTracks, setSavedTracks] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [userProfile, setUserProfile] = useState({
     name: "Stella",
     email: 'stella@gmail.com',
     avatar: null
  });

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return <Home userProfile={userProfile} setActiveTab={setActiveTab}/>;
      case 'explore':
        return (
          <Explore 
            setActiveTab={setActiveTab} />
        );
      case 'listen': 
         return (
           <Listen setActiveTab={setActiveTab}  />
         );
      case 'saved': 
         return (
           <Saved setActiveTab={setActiveTab} />
         );
      case 'history': 
        return <History setActiveTab={setActiveTab}/>;
      case 'settings':
         return <Settings setActiveTab={setActiveTab}/>;
      case 'kwibuka':
        return <Kwibuka setActiveTab={setActiveTab}/>
      default:
        return "content coming soon..";
    }
  };

  return (
    <div className="flex w-full min-h-screen bg-[#FDFBF7] relative overflow-x-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} />
      <div className="flex-1 min-h-screen pl-0 lg:pl-64 flex flex-col bg-[#FDFBF7] min-w-0 max-w-full">
        <Topbar userProfile={userProfile} onUpdateProfile={setUserProfile} />
        <main className="w-full h-full max-w-7xl mx-auto py-6 px-4 sm:px-6 md:px-8 text-[#2C1A14] overflow-x-hidden">
          {renderContent()}
        </main>
      </div>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 max-w-[calc(100vw-2rem)]">
        {isChatOpen && (
          <div className="w-72 sm:w-80 h-96 bg-white border border-[#EADBC8]/60 rounded-2xl shadow-xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-200">
            <div className="bg-[#2C1A14] text-white p-4 flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold tracking-wide">Gasindi</h3>
                <p className="text-[10px] text-neutral-300">Ask about history, regions, or oral literature</p>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 bg-[#FAF8F5] p-4 text-xs overflow-y-auto space-y-3">
              <div className="bg-[#FCDFD3]/40 border border-[#8D493A]/10 text-[#2C1A14] p-2.5 rounded-xl max-w-[85%] text-left">
                Muraho Stella! I am your cultural helper. How can I guide your discovery through our digital archives today?
              </div>
            </div>
            <div className="p-3 border-t border-[#EADBC8]/40 bg-white flex gap-2">
              <input 
                type="text" 
                placeholder="Type your question..." 
                className="flex-1 px-3 py-1.5 border border-[#EADBC8]/60 rounded-xl text-xs focus:outline-none focus:border-[#8D493A] min-w-0"
              />
              <button className="px-3 py-1.5 bg-[#8D493A] hover:bg-[#723A2E] text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shrink-0">
                Send
              </button>
            </div>
          </div>
        )}

        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="p-3.5 rounded-full bg-[#8D493A] hover:bg-[#723A2E] text-white shadow-lg transition-all hover:scale-105 flex items-center justify-center border border-white/10"
          title="Open Assistant"
        >
          {isChatOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5 fill-current" />}
        </button>
      </div>
    </div>
  );
}

export default Dashboard;