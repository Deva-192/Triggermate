
import React from 'react';
import { BOOKING_URL } from '../constants';
import { Calendar, CheckCircle, ShieldCheck } from 'lucide-react';

const BookingSection: React.FC = () => {
  return (
    <section id="book-call" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter font-display">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">Scale with AI?</span>
              </h2>
              <p className="text-slate-300 text-xl mb-12 leading-relaxed">
                Book a free 30-minute strategy call to discover how AI can transform your business workflows and revenue streams.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  "Detailed Automation Audit ($500 Value)",
                  "Custom Scalability Roadmap",
                  "Implementation Timeline & ROI Projections",
                  "Zero Obligation, Total Clarity"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-slate-400 font-medium">
                    <CheckCircle className="w-6 h-6 text-neon-blue shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.4)] rounded-full" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <ShieldCheck className="w-8 h-8 text-indigo-400" />
                <div>
                  <p className="text-white font-bold text-sm">Enterprise Grade Security</p>
                  <p className="text-slate-500 text-xs">Your data is encrypted and never shared.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-8 rounded-3xl border-indigo-500/20 shadow-2xl">
                <div className="text-center mb-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-neon-indigo to-neon-blue rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3 shadow-lg shadow-neon-indigo/30">
                    <Calendar className="w-10 h-10 text-white -rotate-3" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Schedule Your Audit</h3>
                  <p className="text-slate-400">Select a time that works for you</p>
                </div>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-5 bg-gradient-to-r from-neon-indigo to-neon-purple hover:bg-gradient-to-l text-white rounded-2xl font-black text-xl transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transform hover:-translate-y-1"
                >
                  Confirm Booking
                </a>

                <p className="text-center text-slate-500 text-xs mt-6">
                  Typically books 2-4 days in advance.
                  <br />Limited slots available for Q1 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
