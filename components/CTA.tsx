
import React from 'react';
import { Calendar, Check } from 'lucide-react';

export const CTA: React.FC = () => {
  const calLink = "https://cal.com/devendra-ahirwar-su2t8y/30min";

  return (
    <section id="book-a-call" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="relative glass border border-purple-500/20 rounded-[40px] overflow-hidden p-12 md:p-24 text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tight">
              Ready to <span className="text-gradient">Scale With AI?</span>
            </h2>
            <p className="text-xl text-gray-400">
              Book a free 30-minute strategy call to discover how AI automation can transform your business workflows and revenue.
            </p>

            <div className="flex flex-col items-center gap-6 pt-4">
              <a 
                href={calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-6 bg-white text-black font-black text-xl rounded-full hover:bg-gray-200 transition-all shadow-2xl shadow-white/10 flex items-center gap-3 active:scale-95"
              >
                <Calendar className="w-6 h-6" />
                Book Your Call Now
              </a>
              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> No commitment required
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> Typically $500 value
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> Personalized roadmap
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
