
import React from 'react';
import { Target, Mic, Users, CheckCircle2, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: <Target className="w-8 h-8 text-purple-400" />,
    title: 'Lead Generation & Content',
    description: 'Automated lead capture and nurturing systems that turn strangers into buyers using AI content and email sequences.',
    benefits: ['AI Content Engines', 'Lead Magnet Funnels', 'Smart CRM Syncing'],
    color: 'from-purple-600/20 to-indigo-600/20'
  },
  {
    icon: <Mic className="w-8 h-8 text-blue-400" />,
    title: 'Voice AI Customer Systems',
    description: 'Human-like voice agents that handle calls 24/7, book appointments, and provide instant customer support.',
    benefits: ['No Hold Times', 'Automated Scheduling', 'Multi-lingual Support'],
    color: 'from-blue-600/20 to-cyan-600/20'
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-400" />,
    title: 'HR & Interview Agents',
    description: 'Scale your team without the headache. AI agents screen candidates and conduct first-round interviews automatically.',
    benefits: ['Faster Screening', 'Bias-Free Evaluation', 'Scorecard Reporting'],
    color: 'from-emerald-600/20 to-teal-600/20'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black font-heading mb-6 tracking-tight">
            How We Help You <span className="text-purple-500">Scale</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our specialized AI systems are built to integrate seamlessly into your existing workflows and drive measurable ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className={`group relative p-10 rounded-3xl glass border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                  Learn More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
