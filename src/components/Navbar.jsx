import React, { useState } from 'react';
import { ArrowRight, Globe } from 'lucide-react';

function Navbar({ onNavigate, activeSection }) {
  const [currentLang, setCurrentLang] = useState('EN');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: '#home-section' },
    { label: 'About', id: '#archive' },
    { label: 'Community', id: '#community' }
  ];

  const toggleLanguage = (lang) => {
    setCurrentLang(lang);
    setIsDropdownOpen(false);
  };

  return (
    <header className="w-full bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EADBC8] px-6 py-2 font-sans shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div onClick={() => onNavigate('home')} className="flex items-center space-x-3 cursor-pointer">
          <span className="text-[20px] font-bold tracking-wide text-[#8D493A]">
            UmucoCore
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.label;
            return (
              <a
                key={item.label}
                href={item.id}
                className={`relative pb-2 transition-colors duration-200 ${
                  isActive 
                    ? 'text-[#8D493A] font-semibold' 
                    : 'text-[#6F5B55] hover:text-[#8D493A]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8D493A] animate-fadeIn" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1.5 text-sm font-semibold text-[#8D493A] hover:text-[#6f5b55] transition-colors tracking-wide focus:outline-none"
            >
              <Globe size={18} />
              <span className="text-xs uppercase font-bold">{currentLang}</span>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-[#FDFBF7] border border-[#EADBC8] rounded-xl shadow-lg py-1 z-50 animate-fadeIn">
                {currentLang === 'EN' ? (
                  <button
                    onClick={() => toggleLanguage('KN')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-[#6F5B55] hover:bg-[#FCDFD3]/30 hover:text-[#8D493A] transition-colors"
                  >
                    Kinyarwanda
                  </button>
                ) : (
                  <button
                    onClick={() => toggleLanguage('EN')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-[#6F5B55] hover:bg-[#FCDFD3]/30 hover:text-[#8D493A] transition-colors"
                  >
                    English
                  </button>
                )}
              </div>
            )}
          </div>

          <button 
            onClick={() => onNavigate('login')}
            className="text-sm font-medium text-[#8D493A] hover:text-[#6f5b55] transition-colors"
          >
            Login
          </button>

          <button 
            onClick={() => onNavigate('signup')}
            className="flex items-center space-x-2 bg-[#8D493A] hover:bg-[#3E2723] text-[#FDFBF7] px-5 py-2 text-sm font-medium tracking-wide transition-all rounded-[25px] shadow-sm group"
          >
            <span>Join</span>
            <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;