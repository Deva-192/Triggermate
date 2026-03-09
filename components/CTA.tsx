
import React from 'react';
import { Calendar, Check, ArrowRight, Mic } from 'lucide-react';

export const CTA: React.FC = () => {
  const calLink = "https://cal.com/devendra-ahirwar-su2t8y/30min";

  return (
    <section id="book-a-call" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[40px]">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/80 via-[#0a0515] to-indigo-950/60" />
          <div className="absolute inset-0 hero-grid opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 blur-[100px] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

          <div className="relative z-10 p-12 md:p-24 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm font-semibold text-purple-300 mb-8 shimmer-badge">
              <Mic className="w-4 h-4" />
              Free Voice Agent Demo Call
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-6 max-w-4xl mx-auto leading-[1.05]">
              Stop Losing Calls.
              <br />
              <span className="text-gradient">Start Closing Them.</span>
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Book a free demo call — hear your AI voice agent live, ask it your own questions, and see exactly how it handles your business calls before you commit to anything.
            </p>

            <div className="flex flex-col items-center gap-6">
              <a
                href={calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-primary px-12 py-5 rounded-full text-white font-black text-xl flex items-center gap-4"
              >
                <Calendar className="w-6 h-6" />
                Book Your Free Demo Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500">
                {[
                  'No commitment required',
                  'Hear your agent live on the call',
                  'Deploy in 7 days if you proceed',
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
