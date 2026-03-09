
import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const TriggermateLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#9333ea" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
    <rect width="36" height="36" rx="10" fill="url(#logoGrad)" />
    {/* Bold T */}
    <rect x="8" y="9" width="20" height="4" rx="2" fill="white" />
    <rect x="15" y="13" width="6" height="10" rx="2" fill="white" />
    {/* Spark bolt */}
    <path d="M17 23L13 29H17.5L15.5 35L23 27H18.5L20.5 23H17Z" fill="white" fillOpacity="0.9" />
  </svg>
);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[#030303]/85 backdrop-blur-xl py-3 border-b border-purple-500/10'
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="purple-glow-sm transition-all duration-300 group-hover:scale-105">
            <TriggermateLogo />
          </div>
          <span className="text-xl font-bold font-heading tracking-tight text-white">
            Triggermate <span className="text-purple-400">AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href={calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-2.5 rounded-full text-sm font-bold text-white flex items-center gap-2"
          >
            Book a Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden fixed inset-0 bg-[#030303]/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <button className="absolute top-6 right-6 w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center" onClick={() => setIsOpen(false)}>
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="flex flex-col items-center gap-2 mb-4">
          <TriggermateLogo />
          <span className="text-xl font-bold font-heading text-white mt-2">Triggermate <span className="text-purple-400">AI</span></span>
        </div>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold font-heading text-gray-300 hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href={calLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="mt-4 px-10 py-4 btn-primary text-white text-lg font-bold rounded-full"
        >
          Book Your Free Call
        </a>
      </div>
    </nav>
  );
};
