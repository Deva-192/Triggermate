
import React from 'react';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Subtle background glow for the whole section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-4 xl:gap-8">
          {STEPS.map((step, idx) => (
            <div 
              key={step.number} 
              className="flex-1 flex flex-col group relative"
            >
              {/* Step Number Box */}
              <div className={`mb-10 w-20 h-20 rounded-[1.5rem] flex items-center justify-center bg-[#0B0F1A] border transition-all duration-700 shadow-2xl relative z-10 ${
                idx === 1 
                ? 'border-indigo-500/80 shadow-indigo-500/10' 
                : 'border-white/[0.03] group-hover:border-indigo-500/40'
              }`}>
                <span className={`text-2xl font-black tracking-tighter transition-colors ${
                  idx === 1 ? 'text-indigo-400' : 'text-indigo-500/60 group-hover:text-indigo-400'
                }`}>
                  {step.number}
                </span>
                
                {/* Connector line for desktop - only between boxes */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-white/5 to-transparent -z-20 pointer-events-none"></div>
                )}
              </div>

              {/* Text Content Area */}
              <div className="flex flex-col h-full">
                <h4 className="text-[28px] font-bold text-white mb-6 leading-tight tracking-tight group-hover:text-indigo-100 transition-colors">
                  {step.title}
                </h4>

                <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-[280px]">
                  {step.description}
                </p>

                {/* Timeframe Badge */}
                <div className="mt-auto">
                  <div className="inline-block px-5 py-2.5 rounded-xl bg-[#0B0F1A] border border-white/[0.03] text-[11px] font-black text-indigo-400 tracking-[0.2em] uppercase shadow-sm group-hover:border-indigo-500/20 group-hover:bg-indigo-500/[0.02] transition-all">
                    {step.timeframe}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
