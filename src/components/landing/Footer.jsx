import React from 'react';
import Logo from '../../assets/Logo'
import { Share2, MessageSquare } from 'lucide-react';
function Footer() {
  return (
    <footer className="w-full bg-[#3E2319] text-white font-sans px-6 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          <div className="lg:col-span-4 flex flex-col items-start text-left">
           <h3 className="flex items-center gap-2 font-sans text-2xl font-bold tracking-wide text-[#FDFBF7] mb-3">
            <Logo style={{ width: 36, height: 36, minWidth: 36, maxWidth: 36, overflow: 'hidden', borderRadius: '50%', display: 'block' }}/>
             <span>UmucoCore</span>
            </h3>

            <p className="text-sm text-[#A39E93] leading-relaxed max-w-sm mb-6 font-normal">
              Connecting the world to the heart of Rwanda. Experience roots of our 
              traditions and the spirit of our people.
            </p>
            <div className="flex items-center space-x-3">
              <button className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#A39E93] hover:text-white transition-colors duration-200">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#A39E93] hover:text-white transition-colors duration-200">
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-serif text-lg font-bold tracking-wide text-[#EADBC8] mb-4">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-[#A39E93]">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Explore Culture</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Kinyarwanda Basics</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Oral Traditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Virtual Museum</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-serif text-lg font-bold tracking-wide text-[#EADBC8] mb-4">
              Community
            </h4>
            <ul className="space-y-3 text-sm text-[#A39E93]">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Join Discussions</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Upcoming Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contributor Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Partnerships</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <h4 className="font-serif text-lg font-bold tracking-wide text-[#EADBC8] mb-4">
              Subscribe
            </h4>
            <p className="text-sm text-[#A39E93] mb-4 font-normal">
              Receive monthly cultural insights directly to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-md items-center space-x-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-[#A39E93]/60 focus:outline-none focus:border-[#8D493A] transition-colors duration-200"
              />
              <button 
                type="submit" 
                className="bg-[#8D493A] hover:bg-[#614800] text-white px-5 py-3 text-sm font-semibold tracking-wide rounded-lg transition-colors duration-200"
              >
                Send
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A39E93]/60 font-normal">
          <p>© 2026 Umuco Hub. Preserving heritage digitally for future generations.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Help Center</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;