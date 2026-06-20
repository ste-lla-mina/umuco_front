import React, { useState } from 'react';
import { Bell, Eye, Lock, Globe, Volume2, Shield, Trash2, ShieldAlert, Check } from 'lucide-react';

function Settings() {
  const [notifications, setNotifications] = useState({
    archiveUpdates: true,
    monthlyNewsletter: false,
    nationalDayReminders: true,
  });

  const [accessibility, setAccessibility] = useState({
    fontSize: 50, 
    highContrast: false,
    reduceMotion: false,
  });

  const [displaySettings, setDisplaySettings] = useState({
    interfaceLanguage: 'English (UK)',
    dateFormat: 'DD / MM / YYYY',
    timeZone: 'Africa/Kigali (CAT, UTC+2)',
  });

  const [activeVoice, setActiveVoice] = useState('umutoni');

  const handleToggleNotification = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAccessibilityChange = (key, value) => {
    setAccessibility(prev => ({ ...prev, [key]: value }));
  };

  const handleDisplayChange = (key, value) => {
    setDisplaySettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSaveAccessibility = () => {
    alert(`Accessibility Profile Saved!\nFont Size weight: ${accessibility.fontSize}%\nHigh Contrast: ${accessibility.highContrast ? 'On' : 'Off'}\nReduce Motion: ${accessibility.reduceMotion ? 'On' : 'Off'}`);
  };

  const handleManageSecurity = (type) => {
    alert(`Redirecting to manage your secure ${type} settings...`);
  };

  const handleViewSessions = () => {
    alert('Active Sessions Profile:\n1. macOS - Kigali, Rwanda (Current Session)\n2. Android Phone - Gisenyi, Rwanda');
  };

  const handleAccountAction = (actionType) => {
    if (actionType === 'deactivate') {
      const confirm = window.confirm("Are you sure you want to temporarily deactivate your archive workspace profile?");
      if (confirm) alert("Profile deactivated successfully.");
    } else if (actionType === 'delete') {
      const confirm = window.confirm("CRITICAL ACTION: This will permanently purge your saved collections, historical logs, and custom configurations. Type OK to execute.");
      if (confirm) alert("Account scheduled for deletion.");
    }
  };

  const getPreviewFontSize = () => {
    const minSize = 11;
    const maxSize = 18;
    return minSize + ((maxSize - minSize) * accessibility.fontSize) / 100;
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6 font-sans text-left bg-[#FAF8F5] min-h-screen animate-in fade-in duration-300">
      
      <div>
        <h1 className="text-3xl font-extrabold text-[#8D493A] tracking-tight">Settings.</h1>
        <p className="text-xs md:text-sm text-[#6F5B55] mt-1">
          Control your experience — notifications, accessibility, audio, language, and account security.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        <div className="space-y-6">
          <div className="bg-white border border-[#EADBC8]/40 rounded-2xl p-5 shadow-3xs space-y-4">
            <h2 className="text-sm font-bold text-[#8D493A] flex items-center gap-2 border-b border-neutral-100 pb-2">
              <Bell className="w-4 h-4 text-[#8D493A]" /> Notifications.
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-xs font-bold text-[#8D493A]">Archive Updates.</h3>
                  <p className="text-[10px] text-[#6F5B55]">New artifacts and stories matching your interests.</p>
                </div>
                <button 
                  onClick={() => handleToggleNotification('archiveUpdates')}
                  className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${notifications.archiveUpdates ? 'bg-[#8D493A]' : 'bg-neutral-200'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${notifications.archiveUpdates ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-xs font-bold text-[#2C1A14]">Monthly Newsletter</h3>
                  <p className="text-[10px] text-[#6F5B55]">Cultural highlights digest, delivered monthly.</p>
                </div>
                <button 
                  onClick={() => handleToggleNotification('monthlyNewsletter')}
                  className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${notifications.monthlyNewsletter ? 'bg-[#8D493A]' : 'bg-neutral-200'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${notifications.monthlyNewsletter ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-xs font-bold text-[#8D493A]">National Day Reminders.</h3>
                  <p className="text-[10px] text-[#6F5B55]">Alerts before upcoming heritage calendar events.</p>
                </div>
                <button 
                  onClick={() => handleToggleNotification('nationalDayReminders')}
                  className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${notifications.nationalDayReminders ? 'bg-[#8D493A]' : 'bg-neutral-200'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${notifications.nationalDayReminders ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#EADBC8]/40 rounded-2xl p-5 shadow-3xs space-y-4">
            <h2 className="text-sm font-bold text-[#8D493A] flex items-center gap-2 border-b border-neutral-100 pb-2">
              <Globe className="w-4 h-4 text-[#8D493A]" /> Language & Display.
            </h2>
            
            <div className="space-y-3.5">
              <div>
                <label className="block text-[9px] font-black tracking-wider uppercase text-[#8D493A] mb-1">Interface Language.</label>
                <select 
                  value={displaySettings.interfaceLanguage}
                  onChange={(e) => handleDisplayChange('interfaceLanguage', e.target.value)}
                  className="w-full text-xs border border-[#EADBC8]/60 bg-white rounded-xl px-3 py-2 text-[#2C1A14] focus:outline-none focus:border-[#8D493A]"
                >
                  <option>English </option>
                  <option>Kinyarwanda</option>
                </select>
              </div>

              <div>
                <label className="block text-[9px] font-black tracking-wider uppercase text-[#8D493A] mb-1">Date Format.</label>
                <select 
                  value={displaySettings.dateFormat}
                  onChange={(e) => handleDisplayChange('dateFormat', e.target.value)}
                  className="w-full text-xs border border-[#EADBC8]/60 bg-white rounded-xl px-3 py-2 text-[#2C1A14] focus:outline-none focus:border-[#8D493A]"
                >
                  <option>DD / MM / YYYY</option>
                  <option>MM / DD / YYYY</option>
                  <option>YYYY - MM - DD</option>
                </select>
              </div>

              <div>
                <label className="block text-[9px] font-black tracking-wider uppercase text-[#8D493A] mb-1">Time Zone.</label>
                <select 
                  value={displaySettings.timeZone}
                  onChange={(e) => handleDisplayChange('timeZone', e.target.value)}
                  className="w-full text-xs border border-[#EADBC8]/60 bg-white rounded-xl px-3 py-2 text-[#2C1A14] focus:outline-none focus:border-[#8D493A]"
                >
                  <option>Africa/Kigali (CAT, UTC+2)</option>
                  <option>Europe/London (GMT, UTC+0)</option>
                  <option>America/New_York (EST, UTC-5)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-[#EADBC8]/40 rounded-2xl p-5 shadow-3xs space-y-4">
            <h2 className="text-sm font-bold text-[#8D493A] flex items-center gap-2 border-b border-neutral-100 pb-2">
              <Eye className="w-4 h-4 text-[#8D493A]" /> Accessibility.
            </h2>
            
            <div className="space-y-4">
              <div>
                <span className="block text-[9px] font-black tracking-wider uppercase text-[#8D493A] mb-1">Content Font Size.</span>
                <div className="flex items-center space-x-3">
                  <span className="text-xs text-neutral-400 font-bold">A</span>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={accessibility.fontSize}
                    onChange={(e) => handleAccessibilityChange('fontSize', parseInt(e.target.value))}
                    className="w-full accent-[#8D493A] h-1.5 bg-neutral-100 rounded-lg cursor-pointer"
                  />
                  <span className="text-lg text-neutral-600 font-bold">A</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] border border-[#EADBC8]/30 rounded-xl p-3 text-center transition-all">
                <p 
                  className="italic text-[#2C1A14] leading-relaxed font-serif" 
                  style={{ fontSize: `${getPreviewFontSize()}px` }}
                >
                  "Inyambo cattle were revered across the hills of Rwanda."
                </p>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xs font-bold text-[#2C1A14]">High Contrast Mode</h3>
                  <p className="text-[10px] text-[#6F5B55]">Increases color contrast for readability.</p>
                </div>
                <button 
                  onClick={() => handleAccessibilityChange('highContrast', !accessibility.highContrast)}
                  className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${accessibility.highContrast ? 'bg-[#8D493A]' : 'bg-neutral-200'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${accessibility.highContrast ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xs font-bold text-[#2C1A14]">Reduce Motion</h3>
                  <p className="text-[10px] text-[#6F5B55]">Disables animations and transitions.</p>
                </div>
                <button 
                  onClick={() => handleAccessibilityChange('reduceMotion', !accessibility.reduceMotion)}
                  className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${accessibility.reduceMotion ? 'bg-[#8D493A]' : 'bg-neutral-200'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${accessibility.reduceMotion ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              <button 
                onClick={handleSaveAccessibility}
                className="w-full py-2 bg-[#8D493A] hover:bg-[#723A2E] text-white font-black uppercase text-[10px] tracking-wider rounded-xl transition-all shadow-xs"
              >
                Save Accessibility Profile
              </button>
            </div>
          </div>

          <div className="bg-white border border-[#EADBC8]/40 rounded-2xl p-5 shadow-3xs space-y-4">
            <h2 className="text-sm font-bold text-[#8D493A] flex items-center gap-2 border-b border-neutral-100 pb-2">
              <Volume2 className="w-4 h-4 text-[#8D493A]" /> Tega Amatwi — Voice Selection
            </h2>
            <p className="text-[10px] text-[#6F5B55] -mt-1">Choose the text-to-speech voice for the archive reader.</p>
            
            <div className="space-y-2.5">
              <button 
                onClick={() => setActiveVoice('umutoni')}
                className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${activeVoice === 'umutoni' ? 'bg-[#FCDFD3]/40 border-[#8D493A]' : 'border-[#EADBC8]/40 bg-white hover:bg-neutral-50/60'}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-xs font-bold text-[#8D493A]">U</div>
                  <div>
                    <h3 className="text-xs font-bold text-[#2C1A14]">Female</h3>
                    <p className="text-[9px] text-neutral-400 font-medium">Female, Soft</p>
                  </div>
                </div>
                {activeVoice === 'umutoni' && (
                  <span className="text-[10px] font-black text-[#8D493A] tracking-wider uppercase flex items-center gap-1">
                    <Check className="w-3 h-3" /> Active
                  </span>
                )}
              </button>

              <button 
                onClick={() => setActiveVoice('kamanzi')}
                className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${activeVoice === 'kamanzi' ? 'bg-[#FCDFD3]/40 border-[#8D493A]' : 'border-[#EADBC8]/40 bg-white hover:bg-neutral-50/60'}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-700">K</div>
                  <div>
                    <h3 className="text-xs font-bold text-[#2C1A14]">Male</h3>
                    <p className="text-[9px] text-neutral-400 font-medium">Male, Deep</p>
                  </div>
                </div>
                {activeVoice === 'kamanzi' && (
                  <span className="text-[10px] font-black text-[#8D493A] tracking-wider uppercase flex items-center gap-1">
                    <Check className="w-3 h-3" /> Active
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-[#EADBC8]/40 rounded-2xl p-5 shadow-3xs space-y-4">
            <h2 className="text-sm font-bold text-[#8D493A] flex items-center gap-2 border-b border-neutral-100 pb-2">
              <Lock className="w-4 h-4 text-[#8D493A]" /> Account Security
            </h2>
            
            <div className="divide-y divide-neutral-100 text-xs">
              <div className="py-3 flex items-center justify-between gap-4 first:pt-0">
                <div>
                  <h3 className="font-bold text-[#2C1A14]">Change Password</h3>
                  <p className="text-[10px] text-neutral-400 font-medium mt-0.5">Last changed 4 months ago</p>
                </div>
                <button 
                  onClick={() => handleManageSecurity('password')}
                  className="text-[10px] font-black text-[#8D493A] tracking-wider uppercase hover:underline"
                >
                  ➔
                </button>
              </div>

              <div className="py-3 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-[#2C1A14]">Two-Factor Authentication</h3>
                  <p className="text-[10px] text-green-600 font-semibold mt-0.5">Active — SMS verification</p>
                </div>
                <button 
                  onClick={() => handleManageSecurity('2FA')}
                  className="text-[10px] font-black text-[#8D493A] tracking-wider uppercase hover:underline"
                >
                  Manage
                </button>
              </div>

              <div className="py-3 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-[#2C1A14]">Active Sessions</h3>
                  <p className="text-[10px] text-neutral-400 font-medium mt-0.5">2 devices logged in</p>
                </div>
                <button 
                  onClick={handleViewSessions}
                  className="text-[10px] font-black text-[#8D493A] tracking-wider uppercase hover:underline"
                >
                  View
                </button>
              </div>

              <div className="py-3 flex items-center justify-between gap-4 last:pb-0">
                <div>
                  <h3 className="font-bold text-[#2C1A14]">Login History</h3>
                  <p className="text-[10px] text-neutral-400 font-medium mt-0.5">Last login: Today, 07:42 AM</p>
                </div>
                <button 
                  onClick={() => handleManageSecurity('logs')}
                  className="text-[10px] font-black text-[#8D493A] tracking-wider uppercase hover:underline"
                >
                  ➔
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#EADBC8]/40 rounded-2xl p-5 shadow-3xs space-y-4">
            <h2 className="text-sm font-bold text-[#8D493A] flex items-center gap-2 border-b border-neutral-100 pb-2">
              <Shield className="w-4 h-4 text-[#8D493A]" /> Privacy
            </h2>
            
            <div className="divide-y divide-neutral-100 text-xs">
              <div className="py-3 flex items-center justify-between gap-4 first:pt-0">
                <div>
                  <h3 className="font-bold text-[#2C1A14]">Data & Download</h3>
                  <p className="text-[10px] text-neutral-400 font-medium mt-0.5">Export a copy of your archive data.</p>
                </div>
                <button 
                  onClick={() => handleManageSecurity('data export')}
                  className="text-[10px] font-black text-[#8D493A] tracking-wider uppercase hover:underline"
                >
                  ➔
                </button>
              </div>

              <div className="py-3 flex items-center justify-between gap-4 last:pb-0">
                <div>
                  <h3 className="font-bold text-[#2C1A14]">Cookie Preferences</h3>
                  <p className="text-[10px] text-neutral-400 font-medium mt-0.5">Manage what data we store locally.</p>
                </div>
                <button 
                  onClick={() => handleManageSecurity('cookies')}
                  className="text-[10px] font-black text-[#8D493A] tracking-wider uppercase hover:underline"
                >
                  Manage
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-red-200 rounded-2xl p-5 shadow-3xs space-y-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-500/20" />
            <h2 className="text-sm font-bold text-red-700 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-600" /> Account Management
            </h2>
            <p className="text-[10px] text-[#6F5B55] leading-relaxed">
              Deleting your account will permanently remove your saved collections, contributions, and history. This action cannot be undone.
            </p>
            
            <div className="pt-2 flex items-center justify-between gap-2">
              <button 
                onClick={() => handleAccountAction('deactivate')}
                className="text-[10px] font-black text-[#6F5B55] tracking-wider uppercase bg-neutral-100 hover:bg-neutral-200/80 px-3 py-2 rounded-xl transition-all"
              >
                Deactivate
              </button>
              <button 
                onClick={() => handleAccountAction('delete')}
                className="text-[10px] font-black text-white tracking-wider uppercase bg-[#8D493A] hover:bg-red-700 px-3 py-2 rounded-xl transition-all flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" /> Delete Account
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Settings;