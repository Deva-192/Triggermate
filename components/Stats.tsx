
import React from 'react';

const stats = [
  { label: 'Calls Handled by AI', value: '50k', suffix: '+', color: 'from-purple-500 to-indigo-500' },
  { label: 'Missed Call Rate', value: '0', suffix: '%', color: 'from-cyan-500 to-blue-500' },
  { label: 'Avg Booking Conversion', value: '68', suffix: '%', color: 'from-emerald-500 to-teal-500' },
  { label: 'Client Satisfaction', value: '98', suffix: '%', color: 'from-violet-500 to-purple-500' },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-white/[0.02] border-y border-white/5 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className={`text-4xl md:text-6xl font-black font-heading tracking-tighter bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-[0.15em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
