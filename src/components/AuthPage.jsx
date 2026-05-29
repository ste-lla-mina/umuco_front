import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Milestone } from 'lucide-react';
import authLeftBg from '../assets/download.jpg';

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false
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
      
      <div className="hidden lg:flex lg:w-7/12 relative items-end p-16 overflow-hidden">
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

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Umurage ni inkingi ya <br />
            <span className="text-[#FCDFD3]">Kazoza.</span>
          </h2>

          <div className="w-16 h-[2px] bg-[#8D493A] mb-6" />

          <p className="text-sm md:text-base text-gray-200/90 leading-relaxed font-light tracking-wide">
            "Heritage is the bridge that connects our ancestral wisdom with the digital horizon. 
            In every story told, a nation lives on."
          </p>

          <div className="mt-12 flex items-center space-x-3 text-xxs font-semibold tracking-widest text-white/40 uppercase">
            <span>PRESERVING RWANDA'S DIGITAL SOUL</span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-5/12 flex flex-col justify-between p-8 md:p-12 lg:p-16 bg-[#FDFBF7] border-l border-[#EADBC8]/30">
        
        <div className="flex items-center justify-between w-full mb-8">
          <div className="flex items-center space-x-1.5">
            <span className="font-serif text-xl font-bold tracking-wide text-[#2C1A14]">Umuco</span>
            <span className="font-sans text-xs bg-[#8D493A] text-white px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider">Core</span>
          </div>
        </div>

        <div className="w-full max-w-sm mx-auto my-auto">
          <div className="text-left mb-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#2C1A14] mb-2">
              {isSignUp ? 'Hanga Konti' : 'Murakaza Neza'}
            </h1>
            <p className="text-xs md:text-sm text-[#6F5B55]">
              {isSignUp ? 'Create your passport to heritage gateway.' : 'Welcome back to your heritage gateway.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex items-center justify-center space-x-2 border border-[#EADBC8] hover:bg-neutral-50 px-4 py-2.5 rounded-xl transition-all duration-200 text-xs font-semibold text-[#2C1A14]">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.66 1.54 14.98 1 12 1 7.35 1 3.37 3.67 1.39 7.56l3.85 2.99c.9-2.7 3.42-4.51 6.76-4.51z"/>
                <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.28 1.48-1.12 2.74-2.38 3.58l3.7 2.87c2.16-1.99 3.41-4.91 3.41-8.6z"/>
                <path fill="#FBBC05" d="M5.24 14.75c-.24-.72-.38-1.49-.38-2.31s.14-1.59.38-2.31L1.39 7.14C.51 8.9 0 10.89 0 13s.51 4.1 1.39 5.86l3.85-3.11z"/>
                <path fill="#34A853" d="M12 23c3.24 0 5.97-1.08 7.96-2.91l-3.7-2.87c-1.03.69-2.35 1.11-4.26 1.11-3.34 0-5.86-1.81-6.76-4.51L1.39 16.94C3.37 20.33 7.35 23 12 23z"/>
              </svg>
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center space-x-2 border border-[#EADBC8] hover:bg-neutral-50 px-4 py-2.5 rounded-xl transition-all duration-200 text-xs font-semibold text-[#2C1A14]">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.58 2.95-1.39z"/>
              </svg>
              <span>Apple</span>
            </button>
          </div>

          <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-[#EADBC8]/50"></div>
            <span className="flex-shrink mx-4 text-xxs text-[#6F5B55]/50 tracking-widest font-semibold uppercase">OR EMAIL</span>
            <div className="flex-grow border-t border-[#EADBC8]/50"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
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
                  />
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </span>
                </div>
              </div>
            )}

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
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xxs font-bold text-[#2C1A14] tracking-wider uppercase">Password</label>
                {!isSignUp && (
                  <button type="button" className="text-xxs font-bold text-[#8D493A] hover:underline focus:outline-none">
                    Forgot password?
                  </button>
                )}
              </div>
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
              <label className="flex items-center space-x-2 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="accent-[#8D493A] h-4 w-4 rounded border-neutral-300"
                />
                <span className="text-xs text-[#6F5B55]">Remember me for 30 days</span>
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#8D493A] hover:bg-[#3E2723] text-white py-3 px-4 rounded-xl font-semibold text-xs tracking-widest uppercase shadow-xs transition-colors duration-200 mt-2"
            >
              {isSignUp ? 'Sign Up / Kwiyandikisha' : 'Sign In / Injira'}
            </button>
          </form>

          <p className="text-xs text-[#6F5B55] mt-6">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-bold text-[#8D493A] hover:underline focus:outline-none"
            >
              {isSignUp ? 'Sign In' : 'Join Umuco'}
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
export default AuthPage;