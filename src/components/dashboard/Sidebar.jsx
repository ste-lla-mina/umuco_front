import React, { useState } from 'react';
import { 
  Home, 
  Compass, 
  Music, 
  BookOpen, 
  Bookmark, 
  History, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import Logo from '../../assets/Logo'

function Sidebar({ activeTab, setActiveTab, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

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

  const handleTabClick = (id) => {
    setActiveTab(id);
    setIsOpen(false); 
  };

  const renderNavItem = (item) => {
    const Icon = item.icon;
    const isActive = activeTab === item.id;

    return (
      <button
        key={item.id}
        onClick={() => handleTabClick(item.id)}
        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
          isActive
            ? 'bg-[#8D493A] text-[#FDFBF7] shadow-xs font-semibold'
            : 'text-[#6F5B55] hover:bg-[#FCDFD3]/30 hover:text-[#8D493A]'
        }`}
      >
        <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-[#FDFBF7]' : 'text-[#6F5B55] group-hover:text-[#8D493A]'}`} />
        <span>{item.label}</span>
      </button>
    );
  };

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2.5 rounded-xl bg-white border border-[#EADBC8]/60 text-[#2C1A14] hover:bg-[#FAF8F5] transition-colors shadow-xs flex items-center justify-center"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-[#2C1A14]/20 backdrop-blur-xs z-40 transition-opacity"
        />
      )}
      <aside className={`w-64 h-screen bg-[#FDFBF7] border-r border-[#EADBC8]/60 flex flex-col justify-between py-6 px-4 font-sans shrink-0 fixed left-0 top-0 z-40 transition-transform duration-300 transform lg:translate-x-0 ${
        isOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'
      }`}>
        
        <div className="flex flex-col space-y-7 pt-12 lg:pt-0">
          <div className="px-2 py-1">
            <h2 className="flex text-xl gap-1 font-bold text-[#8D493A]">
               <Logo style={{ width: 36, height: 36, minWidth: 36, maxWidth: 36, overflow: 'hidden', borderRadius: '50%', display: 'block' }}/>
                  <span>Umuco Core</span>
            </h2>
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
            onClick={() => handleTabClick('settings')}
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
            onClick={() => {
              setIsOpen(false);
              onLogout();
            }}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-[#6F5B55] hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
          >
            <LogOut className="w-5 h-5 text-[#6F5B55] group-hover:text-red-600 shrink-0" />
            <span>Sign Out</span>
          </button>
        </div>

      </aside>
    </>
  );
}

export default Sidebar;