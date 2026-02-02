
import React from 'react';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { BOOKING_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-midnight border border-neon-indigo/30 text-xs font-semibold text-neon-blue mb-8 uppercase tracking-widest animate-float shadow-[0_0_15px_rgba(99,102,241,0.3)]">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
          Revolutionizing Business with AI
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight font-display">
          AI Automation That Drives <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-indigo via-neon-purple to-neon-blue animate-pulse-fast">Real Revenue Growth</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          We build intelligent AI systems that generate qualified leads, handle customer calls 24/7,
          and automate your hiring process—so you can scale without scaling headcount.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-neon-indigo to-neon-purple hover:from-neon-purple hover:to-neon-indigo text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] flex items-center justify-center gap-3 transform hover:-translate-y-1"
          >
            Book Your Strategy Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all border border-white/10 flex items-center justify-center gap-3"
          >
            See Our Solutions
            <Play className="w-4 h-4 fill-white" />
          </button>
        </div>

        {/* Abstract visual inspired by Robor */}
        <div className="mt-20 relative max-w-5xl mx-auto animate-float">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden glass-card relative p-2 shadow-2xl border border-neon-indigo/20 group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000"
              alt="AI Visualization"
              className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center p-8">
                <div className="mb-4 inline-block p-4 rounded-full bg-midnight/80 backdrop-blur-md border border-neon-blue/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <Zap className="w-12 h-12 text-neon-blue" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">The Triggermate Engine</h3>
                <p className="text-slate-300">Intelligent automation operating at lightspeed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;