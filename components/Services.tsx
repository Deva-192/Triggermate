
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-[#0B0F1A] p-10 lg:p-12 rounded-[2.5rem] border border-white/[0.03] flex flex-col hover:border-white/10 transition-all duration-500 group hover:-translate-y-1"
            >
              {/* Icon Container with subtle inner glow */}
              <div className={`mb-12 w-16 h-16 rounded-2xl flex items-center justify-center bg-slate-900/40 border border-white/5 shadow-inner group-hover:border-indigo-500/30 transition-all`}>
                <div className={`transition-transform duration-500 group-hover:scale-110`}>
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h4 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-[1.15] tracking-tight group-hover:text-indigo-100 transition-colors">
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Visual Indicator Line */}
              <div className="mt-auto pt-4 flex items-center gap-2">
                <div className={`h-1.5 rounded-full transition-all duration-500 group-hover:w-16 w-12 ${
                  service.color === 'purple' ? 'bg-purple-500/40 group-hover:bg-purple-500' : 
                  service.color === 'blue' ? 'bg-blue-500/40 group-hover:bg-blue-500' : 'bg-emerald-500/40 group-hover:bg-emerald-500'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
