
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We dive deep into your business bottlenecks and identify where AI can have the biggest impact.',
    timeframe: '30 Minutes'
  },
  {
    number: '02',
    title: 'Custom Strategy',
    description: 'Our team designs a bespoke automation roadmap tailored to your specific growth goals.',
    timeframe: '1 Week'
  },
  {
    number: '03',
    title: 'Build & Train',
    description: 'We develop your AI systems and train them on your unique business data and brand voice.',
    timeframe: '2-4 Weeks'
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    description: 'Go live with your new systems. We provide ongoing monitoring to ensure peak performance.',
    timeframe: 'Ongoing'
  }
];

export const HowItWorks: React.FC = () => {
  const calLink = "https://cal.com/devendra-ahirwar-su2t8y/30min";

  return (
    <section id="how-it-works" className="py-32 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black font-heading mb-6 tracking-tight">
              The Path To <br /> <span className="text-gradient">Efficiency</span>
            </h2>
            <p className="text-gray-400 text-lg">
              A streamlined 4-step process to transform your operations with intelligent automation.
            </p>
          </div>
          <a 
            href={calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-purple-600 rounded-full font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20 active:scale-95"
          >
            Start Your Journey
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Timeline connecting line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 -z-10" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative space-y-6 group">
              <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-2xl font-black font-heading text-purple-500 group-hover:scale-110 group-hover:border-purple-500 transition-all duration-500 bg-white/5">
                {step.number}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-heading">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
                <div className="inline-block px-3 py-1 rounded-md bg-white/5 text-[10px] font-bold uppercase tracking-widest text-purple-400">
                  {step.timeframe}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
