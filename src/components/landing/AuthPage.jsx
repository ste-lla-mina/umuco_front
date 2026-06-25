import React, { useState, useEffect, useRef } from 'react';
import { Mail, Lock, Eye, EyeOff, User, Milestone, ArrowLeft, ShieldCheck,ArrowUpRight } from 'lucide-react';
import authLeftBg from '../../assets/tra.png';
import authLeftBg2 from '../../assets/tradi.jpg';
import authLeftBg3 from '../../assets/rda.jpg';
import TribalLogo from '../../assets/Logo';

const SLIDES = [
  {
    src: authLeftBg,
    heading: 'Begin your',
    accent: 'Journey.',
    quote:
      '"Preserve Rwanda’s living heritage start your journey today."',
  },
  {
    src: authLeftBg2,
    heading: 'Enter the',
    accent: 'Archive.',
    quote:
      '"Be part of Rwanda’s living treasury of culture and tradition."',
  },
  {
    src: authLeftBg3,
    heading: 'Become part of',
    accent: 'History.',
    quote:
      '"Your story matters—preserved, celebrated, and passed on."',
  },
];

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M47.5 24.6c0-1.6-.1-3.1-.4-4.6H24v8.7h13.2c-.6 3-2.3 5.5-4.9 7.2v6h7.9c4.6-4.3 7.3-10.6 7.3-17.3z"/>
    <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.9-6c-2.1 1.4-4.8 2.2-8 2.2-6.1 0-11.3-4.1-13.2-9.7H2.7v6.2C6.7 42.7 14.8 48 24 48z"/>
    <path fill="#FBBC04" d="M10.8 28.7c-.5-1.4-.7-2.9-.7-4.7s.2-3.3.7-4.7v-6.2H2.7C1 16.6 0 20.2 0 24s1 7.4 2.7 10.9l8.1-6.2z"/>
    <path fill="#EA4335" d="M24 9.5c3.4 0 6.5 1.2 8.9 3.5l6.6-6.6C35.8 2.5 30.4 0 24 0 14.8 0 6.7 5.3 2.7 13.1l8.1 6.2C12.7 13.6 17.9 9.5 24 9.5z"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="17" height="17" viewBox="0 0 814 1000" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.4C46 790.9 0 663 0 541.8c0-207.9 143.9-318.3 285.2-318.3 75.2 0 137.7 49.5 183.7 49.5 43.4 0 113.8-52.5 197.3-52.5zm-64.5-198.2c36.6-43.4 62.5-103.7 62.5-164 0-9-.6-18.1-2.2-25.7-58.6 2.2-128.8 38.9-170.5 88.2-33.2 37.5-64 98.1-64 159.1 0 9.6 1.6 19.2 2.2 22.1 3.5.6 9.6 1.3 15.6 1.3 52.5 0 117.1-35.3 156.4-80.9z"/>
  </svg>
);

function LeftSlideshow() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % SLIDES.length);
        setTransitioning(false);
      }, 500);
    }, 3700);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
      {SLIDES.map((s, idx) => (
        <img
          key={idx}
          src={s.src}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            opacity: idx === current && !transitioning ? 1 : 0,
            transform:
              idx === current && !transitioning
                ? 'translateY(0px)'
                : transitioning && idx === current
                ? 'translateY(-16px)'
                : 'translateY(24px)',
            zIndex: idx === current ? 1 : 0,
          }}
        />
      ))}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.10) 100%)',
          zIndex: 2,
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-12" style={{ zIndex: 3 }}>
        <div
          style={{
            transition: 'opacity 0.6s ease, transform 0.6s ease',
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? 'translateY(10px)' : 'translateY(0px)',
          }}
        >
         

          <h2 className="text-4xl font-bold text-white leading-tight mb-4">
            {slide.heading}{' '}
            <span className="text-[#FCDFD3]">{slide.accent}</span>
          </h2>

          <div className="w-16 h-[2px] bg-[#8D493A] mb-6" />

          <p className="text-sm text-gray-200/90 leading-relaxed font-light max-w-sm">
            {slide.quote}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-10">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setTransitioning(true);
                setTimeout(() => { setCurrent(idx); setTransitioning(false); }, 400);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: idx === current ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: idx === current ? '#FCDFD3' : 'rgba(255,255,255,0.35)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'width 0.4s ease, background 0.4s ease',
              }}
            />
          ))}
        </div>

        <div className="mt-6 text-xs font-semibold tracking-widest text-white/40">
          Preserving Rwandan Roots and Culture.
        </div>
      </div>
    </div>
  );
}
function Confetti() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const COLORS = ['var(--primary)', 'var(--primary)', 'var(--primary)', 'var(--primary)', '#8D493A', '#FCDFD3', '#fff', 'var(--primary-soft)', 'var(--primary)'];
    const SHAPES = ['circle', 'rect', 'star', 'ribbon'];

    const particles = Array.from({ length: 220 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 200,
      size: 6 + Math.random() * 12,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      speedY: 2.5 + Math.random() * 4,
      speedX: (Math.random() - 0.5) * 3,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8,
      opacity: 1,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.05 + Math.random() * 0.08,
    }));

    function drawStar(ctx, x, y, r) {
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        const fn = i === 0 ? 'moveTo' : 'lineTo';
        ctx[fn](x + r * Math.cos(angle), y + r * Math.sin(angle));
      }
      ctx.closePath();
      ctx.fill();
    }

    let animId;
    let frame = 0;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      particles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.wobble) * 1.2;
        p.wobble += p.wobbleSpeed;
        p.rotation += p.rotSpeed;
        if (frame > 120) p.opacity = Math.max(0, p.opacity - 0.008);

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else if (p.shape === 'star') {
          drawStar(ctx, 0, 0, p.size / 2);
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 6, p.size, p.size / 3);
        }

        ctx.restore();
      });

      if (particles.some(p => p.opacity > 0)) {
        animId = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50 }}
    />
  );
}
function SignUpPage({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', termsAccepted: false });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleCodeChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setVerificationCode([...verificationCode.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling && element.value) element.nextSibling.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !verificationCode[index] && e.target.previousSibling)
      e.target.previousSibling.focus();
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); setIsVerifying(true); }, 800);
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (verificationCode.join('').length === 6) setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <>
        <Confetti />
        <div className="fixed inset-0 w-full min-h-screen flex items-center justify-center bg-[#FDFBF7]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="flex flex-col items-center text-center px-8 max-w-md mx-auto">
            <div className="relative mb-8">
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255,215,0,0.35) 0%, rgba(255,140,0,0.12) 60%, transparent 80%)',
                  animation: 'pulse-glow 1.5s ease-in-out infinite',
                }}
              />
              <TribalLogo style={{ width: 100, height: 100, display: 'block', overflow: 'hidden', borderRadius: '50%', position: 'relative', zIndex: 1 }} />
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <span
                  key={i}
                  style={{
                    position: 'absolute',
                    width: i % 2 === 0 ? '10px' : '7px',
                    height: i % 2 === 0 ? '10px' : '7px',
                    borderRadius: '50%',
                    background: i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--primary)' : '#FCDFD3',
                    top: `${50 - 55 * Math.cos((deg * Math.PI) / 180)}%`,
                    left: `${50 + 55 * Math.sin((deg * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                    animation: `bounce-dot 0.8s ease-in-out infinite`,
                    animationDelay: `${i * 0.13}s`,
                  }}
                />
              ))}
            </div>

            <h1 className="text-3xl font-bold text-[#2C1A14] mb-3 leading-tight">
              You're in! 🎉
            </h1>
            <p className="text-sm text-[#6F5B55] leading-relaxed mb-1">
              Welcome to UmucoCore,{' '}
              <span className="font-semibold text-[#2C1A14]">{formData.name}</span>.
            </p>
            <p className="text-xs text-[#8D493A]/70 mb-10 tracking-wide">
              Your cultural gateway is ready.
            </p>

            <div className="w-12 h-[2px] bg-[#8D493A]/30 rounded-full mb-10" />

            <button
              onClick={() => onNavigate('login')}
              className="w-full bg-[#8D493A] hover:bg-[#3E2723] text-white py-3.5 px-6 rounded-xl font-semibold text-sm tracking-wide transition-colors duration-200 mb-3"
            >
              Login →
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="w-full border border-[#EADBC8] text-[#6F5B55] hover:bg-[#FCDFD3]/20 py-3 px-6 rounded-xl text-xs font-medium transition-colors duration-200"
            >
              Back to Home
            </button>

            <p className="text-[10px] text-[#8D493A]/40 mt-8 tracking-widest uppercase">
              Preserving Rwandan Roots and Culture
            </p>
          </div>

          <style>{`
            @keyframes pulse-glow {
              0%, 100% { opacity: 0.7; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.08); }
            }
            @keyframes bounce-dot {
              0%, 100% { transform: translate(-50%, -50%) scale(1); }
              50% { transform: translate(-50%, -50%) scale(1.5); }
            }
          `}</style>
        </div>
      </>
    );
  }

  return (
    <section className="w-full min-h-screen flex font-sans bg-[#FDFBF7]">
      <LeftSlideshow />
     
           <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-10 bg-[#FAF8F5]">
  <div className="flex items-center justify-between w-full mb-8">
    <button
      onClick={() => onNavigate('home')}
      className="inline-flex items-center space-x-2 text-xs font-semibold text-[#8D493A] hover:text-[#3E2723] transition-colors focus:outline-none"
    >
      <ArrowLeft className="w-4 h-4" />
      <span style={{ fontFamily: 'Poppins, sans-serif' }} className="font-semibold">Back to Home</span>
    </button>
    <div className="flex items-center space-x-1.5">
      <TribalLogo style={{ width: 50, height: 50, display: 'block', flexShrink: 0, overflow: 'hidden', borderRadius: '50%' }} />
    </div>
  </div>

  <div className="w-full max-w-sm mx-auto my-auto">
    {!isVerifying ? (
      <>
        <div className="text-left mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-[#8D493A] mb-2 font-sans">Create Account.</h1>
          <p className="text-xs md:text-sm text-[#6F5B55]">Start exploring Rwanda's cultural heritage today.</p>
        </div>

        <form onSubmit={handleSignUpSubmit} className="space-y-4">
          <div className="relative text-left">
            <label className="block text-[10px] font-bold text-[#2C1A14] tracking-wider uppercase mb-1.5">Full Name</label>
            <div className="relative">
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange}
                placeholder="Your full name"
                className="w-full bg-white border border-[#EADBC8]/60 rounded-xl pl-10 pr-4 py-3 text-xs text-[#2C1A14] placeholder-neutral-400/70 focus:outline-none focus:border-[#8D493A] transition-colors"
                required 
              />
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"><User className="w-4 h-4" /></span>
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
                className="w-full bg-white border border-[#EADBC8]/60 rounded-xl pl-10 pr-4 py-3 text-xs text-[#2C1A14] placeholder-neutral-400/70 focus:outline-none focus:border-[#8D493A] transition-colors"
                required 
              />
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"><Mail className="w-4 h-4" /></span>
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
                placeholder="Create a strong password"
                className="w-full bg-white border border-[#EADBC8]/60 rounded-xl pl-10 pr-10 py-3 text-xs text-[#2C1A14] placeholder-neutral-400/70 focus:outline-none focus:border-[#8D493A] transition-colors"
                required 
              />
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"><Lock className="w-4 h-4" /></span>
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 focus:outline-none">
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="relative text-left">
            <label className="block text-[10px] font-bold text-[#2C1A14] tracking-wider uppercase mb-1.5">Confirm Password</label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'} 
                name="confirmPassword" 
                placeholder="Repeat your password"
                className="w-full bg-white border border-[#EADBC8]/60 rounded-xl pl-10 pr-10 py-3 text-xs text-[#2C1A14] placeholder-neutral-400/70 focus:outline-none focus:border-[#8D493A] transition-colors"
                required 
              />
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"><Lock className="w-4 h-4" /></span>
            </div>
          </div>

          <label className="flex items-start space-x-2 cursor-pointer select-none pt-2">
            <input 
              type="checkbox" 
              name="termsAccepted" 
              checked={formData.termsAccepted}
              onChange={handleInputChange}
              className="accent-[#8D493A] h-4 w-4 rounded border-neutral-300 mt-0.5" 
              required 
            />
            <span className="text-xs text-[#6F5B55] leading-normal">
              I agree to the <a href="#" className="text-[#8D493A] font-medium hover:underline">Terms of Service</a> and <a href="#" className="text-[#8D493A] font-medium hover:underline">Privacy Policy</a>
            </span>
          </label>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#AF8272] hover:bg-[#8D493A] disabled:opacity-70 text-white py-3.5 px-4 rounded-xl font-bold text-xs tracking-widest uppercase transition-all duration-200 mt-4 flex items-center justify-center space-x-2 shadow-xs"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                <span>Creating Account...</span>
              </>
            ) : (
              <span className="flex items-center gap-1">Create Account <ArrowUpRight className="w-4 h-4" /></span>
            )}
          </button>
        </form>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-neutral-200"></div>
          <span className="flex-shrink mx-4 text-neutral-400 text-[11px] font-medium">or register with</span>
          <div className="flex-grow border-t border-neutral-200"></div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button type="button" className="flex items-center justify-center gap-2 border border-neutral-200 bg-white hover:bg-neutral-50 rounded-full py-2.5 text-xs font-semibold text-neutral-700 transition-colors shadow-2xs">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.64 14.96 1 12 1 7.36 1 3.4 3.68 1.48 7.6l3.8 2.96C6.24 7.4 8.88 5.04 12 5.04z"/>
              <path fill="#4285F4" d="M23.52 12.32c0-.8-.08-1.56-.2-2.32H12v4.4h6.48c-.28 1.48-1.12 2.72-2.36 3.56l3.68 2.84c2.16-2 3.4-4.96 3.4-8.48z"/>
              <path fill="#FBBC05" d="M5.28 14.76c-.24-.72-.36-1.48-.36-2.28s.12-1.56.36-2.28L1.48 7.24C.52 9.16 0 11.28 0 13.5s.52 4.34 1.48 6.26l3.8-3z"/>
              <path fill="#34A853" d="M12 23c3.24 0 5.96-1.08 7.96-2.92l-3.68-2.84c-1.04.7-2.36 1.12-4.28 1.12-3.12 0-5.76-2.36-6.72-5.52l-3.8 2.96C3.4 20.32 7.36 23 12 23z"/>
            </svg>
            Google
          </button>
          <button type="button" className="flex items-center justify-center gap-2 border border-neutral-200 bg-[#161212] hover:bg-black rounded-full py-2.5 text-xs font-semibold text-white transition-colors shadow-2xs">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.17c.65-.8 1.09-1.92.97-3.04-1 .04-2.22.67-2.94 1.52-.64.74-1.2 1.88-1.05 2.99 1.11.09 2.27-.58 3.02-1.47z"/>
            </svg>
            Apple
          </button>
        </div>

        <p className="text-xs text-[#6F5B55] text-center mt-2">
          Already have an account?{' '}
          <button onClick={() => onNavigate('login')} className="font-bold text-[#8D493A] hover:underline bg-transparent border-none p-0 cursor-pointer">
            Sign In
          </button>
        </p>
      </>
          ) : (
            <>
              <div className="text-left mb-8">
                <button
                  onClick={() => setIsVerifying(false)}
                  className="text-xs font-semibold text-[#8D493A] hover:text-[#3E2723] mb-5 transition-colors block"
                >
                  Back to Sign Up
                </button>

                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#8D493A] mb-2">Verify Your Email</h1>
                <p className="text-xs md:text-sm text-[#6F5B55]">
                  Enter the 6-digit verification code sent to{' '}
                  <span className="font-semibold text-[#2C1A14]">{formData.email}</span>.
                </p>
              </div>

              <form onSubmit={handleCodeSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-[#2C1A14] tracking-wider uppercase mb-3">
                    Verification Code
                  </label>
                  <div className="flex justify-between gap-2">
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
                  className="w-full bg-[#8D493A] hover:bg-[#3E2723] text-white py-3 px-4 rounded-xl font-semibold text-xs tracking-widest uppercase transition-colors duration-200"
                >
                  Confirm Account
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default SignUpPage;