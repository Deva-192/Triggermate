
import React from 'react';

const stats = [
  { label: 'Leads Generated', value: '500k', suffix: '+' },
  { label: 'AI Support Coverage', value: '24/7', suffix: '' },
  { label: 'Hiring Time Saved', value: '85', suffix: '%' },
  { label: 'Customer Satisfaction', value: '98', suffix: '%' },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-white/5 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-white">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
