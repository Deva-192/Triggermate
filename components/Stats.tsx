
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-indigo-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Stats;
