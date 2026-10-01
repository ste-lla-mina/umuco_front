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
  X,
  LayoutGrid,
  PlusCircle,
} from 'lucide-react';
import Logo from '../../assets/Logo';
import { useLanguage } from '../../contexts/Language';

function KwibukaNavIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 120 160" aria-hidden="true" width="20" height="20">
      <path
        d="M67 7C47 35 42 61 53 84c5 11 4 21-3 31 25-16 38-39 33-67-2-13-8-27-16-41Z"
        fill="currentColor"
      />
      <path
        d="M39 55C22 78 20 103 34 124c7 10 16 17 28 22-13-20-8-38 9-55-10 8-20 7-26-2-6-9-6-21-6-34Z"
        fill="currentColor"
      />
      <path
        d="M73 88c20 22 20 44-2 66 31-15 44-39 36-65-3-11-10-21-20-30 3 13-1 22-14 29Z"
        fill="currentColor"
      />
      <path
        d="M58 97c-12-10-11-24 4-42-3 24 5 32 18 39-19 6-30 22-28 47-14-15-13-31 6-44Z"
        fill="#FDFBF7"
      />
    </svg>
  );
}

function Sidebar({ activeTab, setActiveTab, onLogout }) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const mainNavItems = [
    { id: 'home', label: t('sidebar.home') || 'Home', icon: Home },
    { id: 'explore', label: t('sidebar.explore') || 'Explore', icon: Compass },
    { id: 'listen', label: t('sidebar.listen') || 'Listen', icon: Music },
    { id: 'collections', label: t('sidebar.collections') || 'Collections', icon: LayoutGrid },
    { id: 'kwibuka', label: t('sidebar.kwibuka') || 'Kwibuka', icon: BookOpen },
  ];
  const contributeNavItems = [
    { id: 'contribute', label: t('sidebar.contribute') || 'Contribute', icon: PlusCircle },
  ];

  const personalNavItems = [
    { id: 'saved', label: t('sidebar.saved') || 'Saved', icon: Bookmark },
    { id: 'history', label: t('sidebar.history') || 'History', icon: History },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  const renderNavItem = (item) => {
    const Icon = item.icon;
    const isActive = activeTab === item.id;
    const iconColorClass = isActive ? 'text-[#FDFBF7]' : 'text-[#6F5B55] group-hover:text-[#8D493A]';

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
        {item.id === 'kwibuka' ? (
          <KwibukaNavIcon className={`w-5 h-5 shrink-0 ${iconColorClass}`} />
        ) : (
          <Icon className={`w-5 h-5 shrink-0 ${iconColorClass}`} />
        )}
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
      <aside className={`w-64 h-screen bg-[#FDFBF7] border-r border-[#EADBC8]/60 flex flex-col justify-between py-6 px-4 font-sans shrink-0 fixed left-0 top-0 z-40 transition-transform duration-300 transform lg:translate-x-0 overflow-y-auto ${
        isOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'
      }`}>

        <div className="flex flex-col space-y-7 pt-12 lg:pt-0">
          <div className="px-2 py-1">
            <h2 className="flex text-xl gap-1 font-bold text-[#8D493A]">
               <Logo style={{ width: 36, height: 36, minWidth: 36, maxWidth: 36, overflow: 'hidden', borderRadius: '50%', display: 'block' }}/>
                  <span>{t('sidebar.appName') || 'Umuco Core'}</span>
            </h2>
            <p className="text-xs text-[#6F5B55]/80 tracking-tight ml-10 font-bold">{t('sidebar.tagline') || 'Rwanda Cultural Archive.'}</p>
          </div>

          <div>
            <nav className="flex flex-col space-y-1">
              {mainNavItems.map(renderNavItem)}
            </nav>
          </div>

          <div>
            <span className="block text-[10px] font-bold text-[#6F5B55]/60 uppercase tracking-widest px-4 mb-2">
              Contribute
            </span>
            <nav className="flex flex-col space-y-1">
              {contributeNavItems.map(renderNavItem)}
            </nav>
          </div>

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
            <span>{t('sidebar.settings') || 'Settings'}</span>
          </button>

          <button
            onClick={() => {
              setIsOpen(false);
              onLogout();
            }}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-[#6F5B55] hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
          >
            <LogOut className="w-5 h-5 text-[#6F5B55] group-hover:text-red-600 shrink-0" />
            <span>{t('sidebar.signout') || 'Sign Out'}</span>
          </button>
        </div>

      </aside>
    </>
  );
}

export default Sidebar;