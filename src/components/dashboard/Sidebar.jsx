import React from 'react';
import { 
  Home, 
  Compass, 
  Music, 
  BookOpen, 
  Bookmark, 
  History, 
  Settings, 
  LogOut 
} from 'lucide-react';

function Sidebar({ activeTab, setActiveTab, onLogout }) {
  const mainNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'listen', label: 'Listen', icon: Music },
    { id: 'kwibuka', label: 'Kwibuka', icon: BookOpen },
  ];

  const personalNavItems = [
    { id: 'saved', label: 'Saved', icon: Bookmark },
    { id: 'history', label: 'History', icon: History },
  ];

  const renderNavItem = (item) => {
    const Icon = item.icon;
    const isActive = activeTab === item.id;

    return (
      <button
        key={item.id}
        onClick={() => setActiveTab(item.id)}
        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
          isActive
            ? 'bg-[#8D493A] text-[#FDFBF7] shadow-sm font-semibold'
            : 'text-[#6F5B55] hover:bg-[#FCDFD3]/30 hover:text-[#8D493A]'
        }`}
      >
        <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-[#FDFBF7]' : 'text-[#6F5B55] group-hover:text-[#8D493A]'}`} />
        <span>{item.label}</span>
      </button>
    );
  };

  return (
    <aside className="w-64 h-screen bg-[#FDFBF7] border-r border-[#EADBC8]/60 flex flex-col justify-between py-6 px-4 font-sans shrink-0 fixed left-0 top-0 z-40">
      
      <div className="flex flex-col space-y-7">
        <div className="px-2 py-1">
          <h2 className="text-xl font-bold tracking-wide text-[#8D493A]">Umuco Core.</h2>
          <p className="text-xs text-[#6F5B55]/70 tracking-tight">Rwanda Cultural Archive.</p>
        </div>
        <nav className="flex flex-col space-y-1">
          {mainNavItems.map(renderNavItem)}
        </nav>
        <div>
          <span className="block text-[10px] font-bold text-[#6F5B55]/60 uppercase tracking-widest px-4 mb-2">
            Personal
          </span>
          <nav className="flex flex-col space-y-1">
            {personalNavItems.map(renderNavItem)}
          </nav>
        </div>
      </div>
      <div className="flex flex-col space-y-1 pt-6 border-t border-[#EADBC8]/40">
        <button
          onClick={() => setActiveTab('settings')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
            activeTab === 'settings'
              ? 'bg-[#8D493A] text-[#FDFBF7] font-semibold'
              : 'text-[#6F5B55] hover:bg-[#FCDFD3]/30 hover:text-[#8D493A]'
          }`}
        >
          <Settings className={`w-5 h-5 shrink-0 ${activeTab === 'settings' ? 'text-[#FDFBF7]' : 'text-[#6F5B55] group-hover:text-[#8D493A]'}`} />
          <span>Settings</span>
        </button>

        <button
          onClick={onLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-[#6F5B55] hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
        >
          <LogOut className="w-5 h-5 text-[#6F5B55] group-hover:text-red-600 shrink-0" />
          <span>Sign Out</span>
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;