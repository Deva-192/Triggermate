
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md py-3 border-b border-slate-800' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-extrabold tracking-tighter cursor-pointer flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center rotate-12">
            <span className="text-white -rotate-12">T</span>
          </div>
          <span className="text-white">TRIGGER<span className="text-indigo-500">MATE</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Services</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">How It Works</button>
          <button onClick={() => scrollToSection('case-studies')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Case Studies</button>
          <a 
            href={BOOKING_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all glow-effect flex items-center gap-2"
          >
            Book a Call <ArrowRight className="w-4 h-4" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <button onClick={() => scrollToSection('services')} className="text-slate-300 text-lg font-medium text-left">Services</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-slate-300 text-lg font-medium text-left">How It Works</button>
          <button onClick={() => scrollToSection('case-studies')} className="text-slate-300 text-lg font-medium text-left">Case Studies</button>
          <a 
            href={BOOKING_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-center font-bold"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
