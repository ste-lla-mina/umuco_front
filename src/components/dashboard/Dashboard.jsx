import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Home from './Home';
import Explore from './Explore'

function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('home');

  const [userProfile, setUserProfile] = useState({
     name: "Stella",
     email: 'stella@gmail.com',
     avatar: null
  })
  const renderContent = () => {
    switch(activeTab){
      case 'home':
        return <Home userProfile={userProfile} setActiveTab={setActiveTab}/>;
      case 'explore':
        return <Explore setActiveTab={setActiveTab}/>
      default:
        return "content coming soon.."

    }
  };
  return (
   <div className="flex w-full min-h-screen bg-[#FDFBF7]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} />

      <div className="flex-1 min-h-screen pl-64 flex flex-col bg-[#FDFBF7]">
        <Topbar userProfile={userProfile} onUpdateProfile={setUserProfile} />
        
        <main className="w-full h-full max-w-7xl mx-auto py-6 px-8 text-[#2C1A14]">
          {renderContent() }
        </main>
      </div>
    </div>
  );
}

export default Dashboard;