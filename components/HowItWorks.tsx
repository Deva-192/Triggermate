
import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Voice Audit Call',
    description: 'We map your call flows — inbound volume, call types, booking logic, and FAQs — and identify exactly where a voice agent replaces cost and captures lost revenue.',
    timeframe: '30 Minutes',
    color: 'border-purple-500/40 bg-purple-500/10 text-purple-400',
  },
  {
    number: '02',
    title: 'Agent Design & Scripting',
    description: 'We write your agent\'s full conversation scripts and train it on your brand voice, products, and objections. You review and approve every word before we build.',
    timeframe: '2–3 Days',
    color: 'border-indigo-500/40 bg-indigo-500/10 text-indigo-400',
  },
  {
    number: '03',
    title: 'Build, Integrate & Test',
    description: 'We connect your agent to your phone number, CRM, and calendar. Rigorous call simulation testing ensures it handles edge cases before a single real caller hears it.',
    timeframe: '3–5 Days',
    color: 'border-violet-500/40 bg-violet-500/10 text-violet-400',
  },
  {
    number: '04',
    title: 'Go Live & Optimize',
    description: 'Your agent goes live on your number. We monitor call quality, review transcripts weekly, and continuously improve performance. You get a monthly results report.',
    timeframe: 'Ongoing',
    color: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400',
  },
];

export const HowItWorks: React.FC = () => {
  const calLink = "https://cal.com/devendra-ahirwar-su2t8y/30min";

  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="absolute inset-0 bg-white/[0.015] border-y border-white/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-400 mb-4">The Process</p>
            <h2 className="text-4xl md:text-6xl font-black font-heading mb-6 tracking-tight">
              Your Voice Agent,
              <br />
              <span className="text-gradient">Live in 7 Days</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              A focused deployment process — from your first call to your first AI-handled call in under a week.
            </p>
          </div>
          <a
            href={calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 rounded-full font-bold text-white flex items-center gap-2 shrink-0"
          >
            Deploy Your Voice Agent
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-full w-8 -translate-x-4 z-10">
                  <ArrowRight className="w-4 h-4 text-white/10 mx-auto" />
                </div>
              )}
              <div className="space-y-5">
                <div className={`w-14 h-14 rounded-2xl border ${step.color} flex items-center justify-center text-xl font-black font-heading group-hover:scale-110 transition-transform duration-300`}>
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border ${step.color}`}>
                    {step.timeframe}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
