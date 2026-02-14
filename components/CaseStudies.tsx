
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    title: 'E-commerce Scaling',
    category: 'Lead Generation',
    result: '+340% ROAS',
    image: 'https://picsum.photos/id/1/600/800'
  },
  {
    title: 'Law Firm Inbound',
    category: 'Voice AI Agent',
    result: 'Zero Missed Calls',
    image: 'https://picsum.photos/id/2/600/800'
  },
  {
    title: 'SaaS Recruitment',
    category: 'HR Automation',
    result: '12 Days Saved / Month',
    image: 'https://picsum.photos/id/3/600/800'
  },
  {
    title: 'Real Estate Nurture',
    category: 'Lead Generation',
    result: '5x Qual. Leads',
    image: 'https://picsum.photos/id/4/600/800'
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-20">
          <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tight">
            Case <span className="text-purple-500">Studies</span>
          </h2>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold border-b-2 border-purple-500 pb-1">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((project, idx) => (
            <div key={idx} className="group relative aspect-[3/4] rounded-3xl overflow-hidden glass border border-white/5">
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold font-heading mb-1">{project.title}</h3>
                <div className="text-emerald-400 font-bold flex items-center justify-between">
                  {project.result}
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
