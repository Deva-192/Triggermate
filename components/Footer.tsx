
import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const TriggermateLogo = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#9333ea" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
    <rect width="36" height="36" rx="10" fill="url(#footerLogoGrad)" />
    <rect x="8" y="9" width="20" height="4" rx="2" fill="white" />
    <rect x="15" y="13" width="6" height="10" rx="2" fill="white" />
    <path d="M17 23L13 29H17.5L15.5 35L23 27H18.5L20.5 23H17Z" fill="white" fillOpacity="0.9" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-10 border-t border-white/5 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-3 group w-fit">
              <div className="group-hover:scale-105 transition-transform">
                <TriggermateLogo />
              </div>
              <span className="text-xl font-bold font-heading tracking-tight text-white">
                Triggermate <span className="text-purple-400">AI</span>
              </span>
            </a>
            <p className="text-gray-500 leading-relaxed max-w-sm text-sm">
              Helping modern businesses scale through intelligent AI systems and bespoke automation. No more manual bottlenecks.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl border border-white/8 flex items-center justify-center hover:bg-white/5 hover:border-purple-500/30 transition-all"
                >
                  <Icon className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {['About', 'Careers', 'Contact', 'News'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {['Lead Generation', 'Voice AI', 'HR Systems', 'Custom Build'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-sm mb-3 text-white">AI Automation Insights</h4>
            <p className="text-sm text-gray-500 mb-5">Weekly strategies from Triggermate AI, delivered to your inbox.</p>
            <form className="relative" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-600"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-5 btn-primary rounded-full text-sm font-bold text-white"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            © {currentYear} Triggermate AI. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
