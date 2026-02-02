
import React from 'react';
import { Linkedin, Twitter, Github, Mail, ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-32 pb-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="text-2xl font-extrabold tracking-tighter flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center rotate-12">
                <span className="text-white -rotate-12">T</span>
              </div>
              <span className="text-white">TRIGGER<span className="text-indigo-500">MATE</span></span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We architect the digital workforce of tomorrow. High-performance AI automation for revenue, support, and talent.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Github].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Solutions</h5>
            <ul className="space-y-4">
              {['Lead Generation', 'Voice AI Systems', 'HR Automation', 'Custom Workflows'].map((link) => (
                <li key={link}><a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Company</h5>
            <ul className="space-y-4">
              {['About Us', 'Case Studies', 'Resources', 'Careers'].map((link) => (
                <li key={link}><a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Stay Updated</h5>
            <p className="text-slate-500 text-sm mb-6">Get weekly AI automation insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all w-full"
              />
              <button className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-600 text-sm font-medium">
            © 2026 Triggermate. All rights reserved.
          </div>
          <div className="flex gap-8 text-slate-600 text-sm">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
