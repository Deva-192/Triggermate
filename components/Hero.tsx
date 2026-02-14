
import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const calLink = "https://cal.com/devendra-ahirwar-su2t8y/30min";

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium text-purple-400 mb-8 animate-bounce">
          <Sparkles className="w-4 h-4" />
          <span>The Next Generation of AI Automation</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black font-heading mb-8 leading-[1.1] tracking-tight">
          AI Automation That Drives <br />
          <span className="text-gradient">Real Revenue Growth</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
          We build intelligent AI systems that generate qualified leads, handle customer calls 24/7, and automate your hiring process—so you can scale without scaling headcount.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-5 bg-white text-black font-bold rounded-full flex items-center gap-3 transition-all hover:pr-10 active:scale-95 text-lg"
          >
            Book Your Strategy Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
          <button className="px-8 py-5 glass text-white font-bold rounded-full flex items-center gap-3 hover:bg-white/5 transition-all text-lg">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="w-4 h-4 fill-current" />
            </div>
            See Our Solutions
          </button>
        </div>

        {/* Hero Visual Mockup */}
        <div className="mt-20 relative mx-auto max-w-5xl rounded-2xl overflow-hidden glass border border-white/10 shadow-2xl animate-pulse-slow">
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10" />
            <img 
              src="https://picsum.photos/id/180/1200/600" 
              alt="Dashboard Preview" 
              className="w-full h-auto opacity-40 grayscale"
            />
            {/* Overlay AI circuit lines effect could go here */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
               <div className="w-24 h-24 bg-purple-600/30 rounded-full blur-2xl animate-ping" />
            </div>
        </div>
      </div>
    </section>
  );
};
