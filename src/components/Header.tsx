import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        <div className="flex justify-between items-center py-2 sm:py-3 lg:py-4" style={{ height: '77px' }}>
          <a href="#" className="flex items-center">
            <img 
              src="/logo4.png" 
              alt="Sprout Foundation Logo" 
              className="w-[180px] sm:w-[240px] md:w-[320px] lg:w-[400px] h-auto max-h-[4rem] sm:max-h-[5rem] md:max-h-[6rem] lg:max-h-[7rem] object-contain"
              style={{ height: '62px', width: '179px' }}
            />
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 items-center">
            <a href="#mission" className="text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-green-700 transition-colors">Impact</a>
            <a href="#programs" className="text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-green-700 transition-colors">Our Work</a>
            <a href="#activities" className="text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-green-700 transition-colors">In Action</a>
            <a href="#donate" className="btn-primary text-xs tracking-tighter">DONATE NOW</a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 p-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top duration-300">
          <a href="#mission" onClick={() => setIsMenuOpen(false)} className="text-sm font-black text-gray-900 uppercase tracking-widest">Impact</a>
          <a href="#programs" onClick={() => setIsMenuOpen(false)} className="text-sm font-black text-gray-900 uppercase tracking-widest">Our Work</a>
          <a href="#activities" onClick={() => setIsMenuOpen(false)} className="text-sm font-black text-gray-900 uppercase tracking-widest">In Action</a>
          <a href="#donate" onClick={() => setIsMenuOpen(false)} className="btn-primary text-center justify-center">DONATE NOW</a>
        </div>
      )}
    </header>
  );
}
