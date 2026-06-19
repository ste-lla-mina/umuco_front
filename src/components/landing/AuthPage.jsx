import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, Milestone, ArrowLeft, ShieldCheck } from 'lucide-react';
import authLeftBg from '../../assets/tra.png';

function SignUpPage({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const handleCodeChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setVerificationCode([...verificationCode.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !verificationCode[index] && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setIsVerifying(true);
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    const codeString = verificationCode.join('');
    if (codeString.length === 6) {
      setIsSuccess(true);
    }
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
            Heritage is our
            <span className="text-[#FCDFD3]"> Legacy.</span>
          </h2>

          <div className="w-16 h-[2px] bg-[#8D493A] mb-6" />

          <p className="text-sm text-gray-200/90 leading-relaxed font-light tracking-wide">
            "Heritage is the bridge that connects our ancestral wisdom with the digital horizon. 
            In every story told, a nation lives on."
          </p>

          <div className="mt-12 flex items-center space-x-3 text-xxs font-semibold tracking-widest text-white/40">
            <span>Preserving Rwandan Roots and Culture.</span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-7/12 flex flex-col justify-between p-8 md:p-12 lg:p-16 bg-[#FDFBF7] border-l border-[#EADBC8]/30">
        <div className="flex items-center justify-between w-full mb-8">
          <div onClick={() => onNavigate('home')} className="flex items-center space-x-1.5 cursor-pointer">
            <span className="font-sans text-xs bg-[#8D493A] text-white px-1.5 py-0.5 rounded-md font-bold tracking-wider">UmucoCore</span>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto my-auto">
          {!isVerifying ? (
            <>
              <div className="text-left mb-8">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#8D493A] mb-2">
                  Create Account
                </h1>
                <p className="text-xs md:text-sm text-[#6F5B55]">
                  Set up your profile to the heritage gateway.
                </p>
              </div>

              <form onSubmit={handleSignUpSubmit} className="space-y-5">
                <div className="relative text-left">
                  <label className="block text-[10px] font-bold text-[#2C1A14] tracking-wider uppercase mb-1.5">Full Name</label>
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
                  <label className="block text-[10px] font-bold text-[#2C1A14] tracking-wider uppercase mb-1.5">Email Address</label>
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
                  <label className="block text-[10px] font-bold text-[#2C1A14] tracking-wider uppercase mb-1.5">Password</label>
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
                  Sign Up 
                </button>
              </form>

              <p className="text-xs text-[#6F5B55] mt-6">
                Already have an account?{' '}
                <button onClick={() => onNavigate('login')} className="font-bold text-[#8D493A] hover:underline bg-transparent border-none p-0 cursor-pointer">
                  Sign In
                </button>
              </p>
            </>
          ) : !isSuccess ? (
            <>
              <div className="text-left mb-8">
                <button 
                  onClick={() => setIsVerifying(false)} 
                  className="inline-flex items-center space-x-2 text-xs font-semibold text-[#8D493A] hover:text-[#3E2723] mb-4 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to SignUp</span>
                </button>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#8D493A] mb-2">
                  Verify Your Email
                </h1>
                <p className="text-xs md:text-sm text-[#6F5B55]">
                  Enter the 6-digit verification code sent to <span className="font-semibold text-[#2C1A14]">{formData.email}</span>.
                </p>
              </div>

              <form onSubmit={handleCodeSubmit} className="space-y-6">
                <div className="text-left">
                  <label className="block text-[10px] font-bold text-[#2C1A14] tracking-wider uppercase mb-3 text-center">
                    Verification Code
                  </label>
                  <div className="flex justify-between gap-2 max-w-sm mx-auto">
                    {verificationCode.map((data, index) => (
                      <input
                        key={index}
                        type="text"
                        name="code"
                        maxLength="1"
                        value={data}
                        onChange={(e) => handleCodeChange(e.target, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onFocus={(e) => e.target.select()}
                        className="w-12 h-12 bg-white border border-[#EADBC8] rounded-xl text-center text-sm font-bold text-[#2C1A14] focus:outline-none focus:border-[#8D493A] focus:ring-1 focus:ring-[#8D493A] transition-all"
                      />
                    ))}
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#8D493A] hover:bg-[#3E2723] text-white py-3 px-4 rounded-xl font-semibold text-xs tracking-widest uppercase shadow-xs transition-colors duration-200"
                >
                  Confirm Account
                </button>
              </form>
            </>
          ) : (
            <div className="bg-[#FCDFD3]/15 border border-[#EADBC8]/30 rounded-xl p-5 text-left flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#34A853]/20 rounded-full flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6 text-[#34A853]" />
              </div>
              <p className="text-sm font-bold text-[#8D493A] mb-1">
                Registration Complete.
              </p>
              <p className="text-xs text-[#6F5B55] leading-relaxed max-w-xs">
                Welcome to UmucoCore, <span className="font-semibold text-[#2C1A14]">{formData.name}</span>! Your cultural gateway identity has been officially provisioned.
              </p>
              <button 
                onClick={() => onNavigate('login')}
                className="mt-5 w-full bg-[#8D493A] hover:bg-[#3E2723] text-white py-2.5 px-4 rounded-xl font-semibold text-xs tracking-wide transition-colors"
              >
                Go to Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default SignUpPage;