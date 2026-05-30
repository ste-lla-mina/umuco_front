import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, Milestone } from 'lucide-react';
import authLeftBg from '../assets/download.png';

export default function SignUpPage({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    termsAccepted: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full min-h-screen flex font-sans bg-[#FDFBF7]">
      <div className="hidden lg:flex lg:w-5/12 relative items-end p-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105"
          style={{ backgroundImage: `url(${authLeftBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        
        <div className="relative z-10 text-left max-w-xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Milestone className="w-3.5 h-3.5 text-[#FCDFD3]" />
            <span className="text-xxs tracking-widest text-[#FDFBF7] uppercase font-semibold">
              CULTURAL EXCELLENCE
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white leading-tight mb-4">
            Umurage ni inkingi ya <br />
            <span className="text-[#FCDFD3]">Kazoza.</span>
          </h2>

          <div className="w-16 h-[2px] bg-[#8D493A] mb-6" />

          <p className="text-sm text-gray-200/90 leading-relaxed font-light tracking-wide">
            "Heritage is the bridge that connects our ancestral wisdom with the digital horizon. 
            In every story told, a nation lives on."
          </p>

          <div className="mt-12 flex items-center space-x-3 text-xxs font-semibold tracking-widest text-white/40 uppercase">
            <span>PRESERVING RWANDA'S DIGITAL SOUL</span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-7/12 flex flex-col justify-between p-8 md:p-12 lg:p-16 bg-[#FDFBF7] border-l border-[#EADBC8]/30">
        <div className="flex items-center justify-between w-full mb-8">
          <div onClick={() => onNavigate('home')} className="flex items-center space-x-1.5 cursor-pointer">
            <span className="font-serif text-xl font-bold tracking-wide text-[#2C1A14]">Umuco</span>
            <span className="font-sans text-xs bg-[#8D493A] text-white px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider">Core</span>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto my-auto">
          <div className="text-left mb-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#2C1A14] mb-2">
              Hanga Konti
            </h1>
            <p className="text-xs md:text-sm text-[#6F5B55]">
              Create your passport to heritage gateway.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative text-left">
              <label className="block text-xxs font-bold text-[#2C1A14] tracking-wider uppercase mb-1.5">Full Name</label>
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name" 
                  className="w-full bg-white border border-[#EADBC8] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#2C1A14] placeholder-neutral-400 focus:outline-none focus:border-[#8D493A] transition-colors"
                  required
                />
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400">
                  <User className="w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="relative text-left">
              <label className="block text-xxs font-bold text-[#2C1A14] tracking-wider uppercase mb-1.5">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@domain.com" 
                  className="w-full bg-white border border-[#EADBC8] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#2C1A14] placeholder-neutral-400 focus:outline-none focus:border-[#8D493A] transition-colors"
                  required
                />
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400">
                  <Mail className="w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="relative text-left">
              <label className="block text-xxs font-bold text-[#2C1A14] tracking-wider uppercase mb-1.5">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••" 
                  className="w-full bg-white border border-[#EADBC8] rounded-xl pl-10 pr-10 py-2.5 text-xs text-[#2C1A14] placeholder-neutral-400 focus:outline-none focus:border-[#8D493A] transition-colors"
                  required
                />
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400">
                  <Lock className="w-4 h-4" />
                </span>
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-start space-x-2 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  className="accent-[#8D493A] h-4 w-4 rounded border-neutral-300 mt-0.5"
                  required
                />
                <span className="text-xs text-[#6F5B55] leading-normal">
                  I agree to the <a href="#" className="text-[#8D493A] font-medium hover:underline">Terms of Service</a> and <a href="#" className="text-[#8D493A] font-medium hover:underline">Privacy Policy</a>.
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#8D493A] hover:bg-[#3E2723] text-white py-3 px-4 rounded-xl font-semibold text-xs tracking-widest uppercase shadow-xs transition-colors duration-200 mt-2"
            >
              Sign Up / Kwiyandikisha
            </button>
          </form>

          <p className="text-xs text-[#6F5B55] mt-6">
            Already have an account?{' '}
            <button onClick={() => onNavigate('login')} className="font-bold text-[#8D493A] hover:underline bg-transparent border-none p-0 cursor-pointer">
              Sign In
            </button>
          </p>
        </div>

        <div className="w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#EADBC8]/40 text-xxs tracking-wide text-neutral-400 font-medium">
          <div className="flex items-center space-x-1">
            <svg className="w-3.5 h-3.5 text-[#34A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="uppercase font-bold tracking-wider text-[#34A853]">SECURE ENCRYPTED ACCESS</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-neutral-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neutral-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-neutral-600 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </section>
  );
}