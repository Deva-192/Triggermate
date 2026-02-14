
import React from 'react';
import { Zap, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-2 text-2xl font-bold font-heading">
              <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Zap className="text-white w-6 h-6 fill-current" />
              </div>
              <span className="tracking-tight">Triggermate</span>
            </a>
            <p className="text-gray-500 leading-relaxed max-w-sm">
              Helping modern businesses scale through intelligent AI systems and bespoke automation. No more manual bottlenecks.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <Icon className="w-5 h-5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Lead Gen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Voice AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HR Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Build</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold mb-6">Subscribe to Newsletter</h4>
            <p className="text-sm text-gray-500 mb-6">Get weekly AI automation insights delivered to your inbox.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 bg-purple-600 rounded-full text-sm font-bold hover:bg-purple-700 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500">
            © {currentYear} Triggermate AI Agency. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
