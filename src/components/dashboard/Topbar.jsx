import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, Globe, Camera, X } from 'lucide-react';

function Topbar({ userProfile, onUpdateProfile }) {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const [editName, setEditName] = useState(userProfile?.name || 'Mugisha Jean');
  const [editEmail, setEditEmail] = useState(userProfile?.email || 'jean@umuco.rw');
  const [profilePic, setProfilePic] = useState(null);

  const langRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    if (onUpdateProfile) {
      onUpdateProfile({
        name: editName,
        email: editEmail,
        avatar: profilePic || userProfile?.avatar
      });
    }
    setProfileModalOpen(false);
  };
  
  const getInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : 'MJ';
  };

  return (
    <>
      <header className="w-full h-20 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#EADBC8]/60 px-4 sm:px-6 md:px-8 flex items-center justify-between sticky top-0 z-30 font-sans pl-16 lg:pl-8">
        
        {/* Search Field */}
        <div className="flex-1 max-w-xs sm:max-w-md md:max-w-xl">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#FDFBF7] border border-[#EADBC8] hover:border-[#8D493A]/50 focus:border-[#8D493A] text-sm text-[#2C1A14] placeholder-neutral-400 rounded-full pl-10 pr-4 py-2 outline-none transition-all duration-200"
            />
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Global Control Preferences Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4 ml-2 sm:ml-4">
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-1 px-2.5 py-2 text-xs font-bold text-[#8D493A] hover:bg-[#FCDFD3]/20 rounded-xl transition-all"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{currentLang}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-[#FDFBF7] border border-[#EADBC8] rounded-2xl shadow-xl p-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => { setCurrentLang('EN'); setLangDropdownOpen(false); }}
                  className={`w-full text-left px-3 py-2 text-xs rounded-xl transition-colors ${currentLang === 'EN' ? 'bg-[#8D493A] text-white font-semibold' : 'text-[#6F5B55] hover:bg-[#FCDFD3]/30'}`}
                >
                  English
                </button>
                <button
                  onClick={() => { setCurrentLang('KN'); setLangDropdownOpen(false); }}
                  className={`w-full text-left px-3 py-2 text-xs rounded-xl transition-colors ${currentLang === 'KN' ? 'bg-[#8D493A] text-white font-semibold' : 'text-[#6F5B55] hover:bg-[#FCDFD3]/30'}`}
                >
                  Kinyarwanda
                </button>
              </div>
            )}
          </div>

          <button className="p-2 text-[#6F5B55] hover:text-[#8D493A] hover:bg-[#FCDFD3]/20 rounded-full border border-[#EADBC8]/40 transition-all relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#8D493A] rounded-full" />
          </button>
          
          <button 
            onClick={() => setProfileModalOpen(true)}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#8D493A] text-white font-bold text-xs tracking-wide shadow-sm border border-[#8D493A]/20 hover:scale-105 transition-transform overflow-hidden shrink-0"
          >
            {profilePic || userProfile?.avatar ? (
              <img src={profilePic || userProfile?.avatar} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <span>{getInitials(editName)}</span>
            )}
          </button>

        </div>
      </header>

      {/* Profile Modification Backdrop Overlay Container */}
      {profileModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 font-sans animate-in fade-in duration-200">
          <div className="bg-[#FDFBF7] border border-[#EADBC8] w-full max-w-md rounded-2xl p-6 shadow-2xl relative text-left">
            <button 
              onClick={() => setProfileModalOpen(false)}
              className="absolute right-4 top-4 p-1 rounded-full text-neutral-400 hover:text-[#8D493A] hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-[#8D493A] mb-1">Edit Account Profile</h3>
            <p className="text-xs text-[#6F5B55] mb-6">Modify your interface preferences and display assets.</p>

            <form onSubmit={handleProfileSave} className="space-y-5">
              <div className="flex flex-col items-center justify-center space-y-2 mb-4">
                <div className="relative w-20 h-20 rounded-full bg-[#8D493A] text-white flex items-center justify-center font-bold text-2xl border-2 border-[#EADBC8] overflow-hidden group shadow-inner">
                  {profilePic || userProfile?.avatar ? (
                    <img src={profilePic || userProfile?.avatar} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span>{getInitials(editName)}</span>
                  )}
                  <label className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-5 h-5 text-white" />
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                </div>
                <span className="text-[10px] text-[#6F5B55]/70 font-semibold uppercase tracking-wider">Change Profile Pic</span>
              </div>
              
              <div>
                <label className="block text-[10px] font-bold text-[#2C1A14] uppercase tracking-wider mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full bg-white border border-[#EADBC8] rounded-xl px-4 py-2.5 text-xs text-[#2C1A14] focus:outline-none focus:border-[#8D493A]"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#2C1A14] uppercase tracking-wider mb-1.5">Email Instance Address</label>
                <input 
                  type="email" 
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  className="w-full bg-white border border-[#EADBC8] rounded-xl px-4 py-2.5 text-xs text-[#2C1A14] focus:outline-none focus:border-[#8D493A]"
                  required
                />
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setProfileModalOpen(false)}
                  className="flex-1 border border-[#EADBC8] hover:bg-neutral-50 text-[#6F5B55] py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#8D493A] hover:bg-[#3E2723] text-white py-2.5 rounded-xl text-xs font-semibold tracking-wide shadow-sm transition-colors"
                >
                  Save Updates
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Topbar;