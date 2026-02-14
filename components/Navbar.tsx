
import React, { useState } from 'react';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const calLink = "https://cal.com/devendra-ahirwar-su2t8y/30min";

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#030303]/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold font-heading">
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center purple-glow">
            <Zap className="text-white w-6 h-6 fill-current" />
          </div>
          <span className="tracking-tight">Triggermate</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2 active:scale-95"
          >
            Book a Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden fixed inset-0 bg-[#030303] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
          <X className="w-8 h-8" />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold font-heading hover:text-purple-400 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href={calLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="mt-4 px-10 py-4 bg-purple-600 text-white text-lg font-bold rounded-full shadow-lg shadow-purple-600/20"
        >
          Book Your Call
        </a>
      </div>
    </nav>
  );
};
