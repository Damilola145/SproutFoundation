import { Twitter, Youtube, Heart, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 py-20 px-6 sm:px-12 mx-4 md:mx-12 mb-12 rounded-[2.5rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start lg:items-center">
          
          <div className="text-center sm:text-left">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Contact Us</p>
            <p className="text-[13px] md:text-sm font-medium text-white mb-1 break-all sm:break-words">sproutfoundationforyouth@gmail.com</p>
            <p className="text-xs italic text-slate-500">Fast reach via email</p>
          </div>

          <div className="lg:border-x lg:border-slate-800 text-center sm:text-right lg:text-center px-0 lg:px-2 xl:px-4">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Office Line</p>
            <p className="text-[13px] md:text-sm font-medium text-white tracking-widest">+234-706-8250-836</p>
            <p className="text-xs italic text-slate-500">Mon - Fri, 9am - 5pm</p>
          </div>

          <div className="text-center sm:text-left lg:text-right px-0 lg:px-2 xl:px-4">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Weekly Content</p>
            <p className="text-[13px] md:text-sm italic text-white">Reels & Stories every week</p>
            <p className="text-[11px] md:text-xs text-slate-500 line-clamp-1">Subscribe @Sproutfoundatio</p>
          </div>

          <div className="flex justify-center sm:justify-end lg:justify-end gap-2 xl:gap-3">
            <div className="flex gap-2">
              <a href="https://web.facebook.com/sproutfoundationforyouthreintegration" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Facebook size={18} fill="white" strokeWidth={0} />
              </a>
              <a href="https://instagram.com/sproutfoundatio?igsh=MXIycjB1cnFkYTRjbQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white border border-slate-700 hover:scale-110 transition-transform">
                <Instagram size={18} />
              </a>
              <a href="https://x.com/SproutFoundatio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-slate-400 hover:text-white border border-slate-700 hover:scale-110 transition-transform">
                <Twitter size={16} fill="currentColor" />
              </a>
              <a href="https://www.youtube.com/@sproutfoundatio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 text-[10px] uppercase font-bold tracking-widest flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600">
          <p>&copy; {new Date().getFullYear()} Sprout Foundation for Youth Reintegration. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Rebuilding Futures <Heart size={10} className="text-brand-green fill-brand-green mx-1" /> Transforming Communities.
          </div>
        </div>
      </div>
    </footer>
  );
}
