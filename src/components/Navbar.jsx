import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = ['Home', 'About', 'Community'];

  return (
    <header className="w-full bg-[#FDFBF7] border-b border-[#EADBC8] px-6 py-4 font-sans shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center space-x-3 cursor-pointer">
          <span className="text-[20px] font-bold tracking-wide text-[#8D493A]">
            UmucoCore
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`relative pb-2 transition-colors duration-200 ${
                  isActive 
                    ? 'text-[#8D493A] font-semibold' 
                    : 'text-[#6F5B55] hover:text-[#8D493A]'
                }`}
              >
                {item}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8D493A] animate-fadeIn" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center space-x-6">
          <button className="text-sm font-semibold text-[#6F5B55] hover:text-[#8D493A] transition-colors tracking-wide">
            KN
          </button>

          <button className="text-sm font-medium text-[#8D493A] hover:text-[#3E2723] transition-colors">
            Login
          </button>

          <button className="flex items-center space-x-2 bg-[#8D493A] hover:bg-[#3E2723] text-[#FDFBF7] px-5 py-2 text-sm font-medium tracking-wide transition-all rounded-sm shadow-sm group">
            <span>Join</span>
            <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </header>
  );
}
export default Navbar;