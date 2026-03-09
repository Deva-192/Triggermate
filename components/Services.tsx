
import React from 'react';
import { Mic, Target, Users, CheckCircle2, ArrowUpRight, Radio } from 'lucide-react';

const featuredService = {
  label: 'Core Service',
  icon: <Mic className="w-8 h-8 text-cyan-400" />,
  title: 'AI Voice Agents',
  description: 'Human-like voice agents that answer every inbound call, make outbound follow-up calls, book appointments in real time, and handle FAQs — 24 hours a day, 7 days a week. No hold music. No voicemail. No missed revenue.',
  benefits: [
    'Inbound & Outbound Calls',
    'Real-Time Appointment Booking',
    'Live Call Transcription',
    'Multi-Language Support',
    'CRM & Calendar Integration',
    'Instant Call Analytics',
  ],
};

const supportingServices = [
  {
    label: '02',
    powerTag: 'Powered by Voice AI',
    powerTagColor: 'bg-purple-500/15 text-purple-300 border-purple-500/20',
    icon: <Target className="w-6 h-6 text-purple-400" />,
    title: 'AI Lead Qualification',
    description: 'Your voice agent calls every inbound lead within 60 seconds, asks the right qualifying questions, and routes hot prospects straight to your sales calendar.',
    benefits: [
      'Instant Lead Response',
      'Voice-Based Qualification',
      'Automated Calendar Routing',
      'CRM Sync & Lead Scoring',
    ],
    gradient: 'from-purple-600/15 to-indigo-600/10',
    borderHover: 'hover:border-purple-500/40',
    iconBg: 'bg-purple-500/10',
    accentColor: 'text-purple-400',
  },
  {
    label: '03',
    powerTag: 'Powered by Voice AI',
    powerTagColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
    icon: <Users className="w-6 h-6 text-emerald-400" />,
    title: 'AI Candidate Screening',
    description: 'Your voice agent conducts first-round phone screenings, asks structured interview questions, and delivers a written scorecard — before your HR team sees a single résumé.',
    benefits: [
      'Automated Phone Screens',
      'Structured Interview Questions',
      'Scorecard & Transcript Delivery',
      'ATS Integration',
    ],
    gradient: 'from-emerald-600/15 to-teal-600/10',
    borderHover: 'hover:border-emerald-500/40',
    iconBg: 'bg-emerald-500/10',
    accentColor: 'text-emerald-400',
  },
];

const WaveformBars = () => (
  <div className="flex items-end gap-[3px] h-8">
    {[6,10,16,20,14,22,18,12,20,16,10,14,20,18,8,16,22,12,18,14].map((h, i) => (
      <div
        key={i}
        className="w-1 rounded-full bg-gradient-to-t from-cyan-500 to-purple-500"
        style={{
          height: `${h}px`,
          opacity: 0.5 + (i % 3) * 0.15,
          animation: `pulse 1.2s ease-in-out ${i * 0.06}s infinite alternate`,
        }}
      />
    ))}
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-800/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-400 mb-4">What We Build</p>
          <h2 className="text-4xl md:text-6xl font-black font-heading mb-6 tracking-tight">
            Voice AI Is the Core.
            <br />
            <span className="text-gradient">Everything Else Follows.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every service we build runs through voice — your AI agent handles the conversation, while our systems handle the follow-through.
          </p>
        </div>

        {/* Featured: Voice AI — full width */}
        <div className="gradient-border rounded-3xl overflow-hidden mb-6 group hover:-translate-y-1 transition-transform duration-300">
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left: text */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-cyan-500/15 text-cyan-300 border border-cyan-500/20">
                    {featuredService.label}
                  </span>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                  {featuredService.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-black font-heading mb-4">{featuredService.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {featuredService.description}
                </p>
                <a
                  href="#book-a-call"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white"
                >
                  Deploy Your Voice Agent
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Right: benefits + waveform visual */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-3">
                  {featuredService.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/4 border border-white/6 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Live indicator + waveform */}
                <div className="glass rounded-2xl p-5 border border-cyan-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Voice Agent Live</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-[10px] text-gray-500">24/7 Active</span>
                    </div>
                  </div>
                  <WaveformBars />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting: 2-column grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {supportingServices.map((service, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-3xl glass border border-white/5 ${service.borderHover} transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              <div className="absolute top-6 right-6 text-[9px] font-black uppercase tracking-widest text-white/10 group-hover:text-white/20 transition-colors">
                {service.label}
              </div>

              <div className="relative z-10">
                {/* "Powered by" pill */}
                <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border ${service.powerTagColor} mb-5`}>
                  {service.powerTag}
                </span>

                <div className={`w-12 h-12 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-7 leading-relaxed text-sm">{service.description}</p>

                <ul className="space-y-3 mb-7">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 className={`w-4 h-4 ${service.accentColor} shrink-0`} />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className={`flex items-center gap-2 text-sm font-bold ${service.accentColor} group-hover:gap-3 transition-all`}>
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
