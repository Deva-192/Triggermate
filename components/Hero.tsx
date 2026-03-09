
import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, PhoneCall, CalendarCheck, Mic, PhoneOff } from 'lucide-react';

const WaveformBars = () => (
  <div className="flex items-end gap-[2px] h-7 mt-3">
    {[8,12,18,22,14,20,16,10,20,18,12,16,22,14,8,18,22,10,16,12].map((h, i) => (
      <div
        key={i}
        className="flex-1 rounded-full"
        style={{
          height: `${h}px`,
          background: 'linear-gradient(to top, rgba(124,58,237,0.9), rgba(6,182,212,0.6))',
          animation: `pulse 1.0s ease-in-out ${i * 0.07}s infinite alternate`,
        }}
      />
    ))}
  </div>
);

export const Hero: React.FC = () => {
  const calLink = "https://cal.com/devendra-ahirwar-su2t8y/30min";

  return (
    <section className="relative pt-36 pb-24 md:pt-52 md:pb-36 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 hero-grid opacity-100 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-purple-700/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-600/8 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-indigo-600/8 blur-[100px] rounded-full pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-purple-400/60 blur-[1px] animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 left-1/5 w-2 h-2 rounded-full bg-cyan-400/50 blur-[1px] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-4 h-4 rounded-full bg-indigo-400/40 blur-[2px] animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass border border-cyan-500/20 text-sm font-semibold text-cyan-300 mb-10 shimmer-badge">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>AI Voice Agents — Live 24/7</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-8 leading-[1.05] tracking-tight">
          Your Business Answers
          <br />
          <span className="text-gradient-white">Every Call. Always.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-4 leading-relaxed">
          We deploy human-like AI voice agents that handle inbound and outbound calls around the clock — booking appointments, qualifying leads, and screening candidates without a single hold time or missed call.
        </p>

        {/* Social proof pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 text-sm">
          {[
            { icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />, text: '50,000+ Calls Handled' },
            { icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />, text: '0 Missed Calls Guaranteed' },
            { icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />, text: 'Live in 7 Days or Less' },
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-gray-400">
              {item.icon} {item.text}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <a
            href={calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-primary px-8 py-4 rounded-full font-bold text-white text-lg flex items-center gap-3"
          >
            Deploy Your Voice Agent
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="px-8 py-4 glass rounded-full font-bold text-white text-lg flex items-center gap-3 hover:bg-white/5 transition-all border border-white/10 hover:border-cyan-500/30"
          >
            <Mic className="w-5 h-5 text-cyan-400" />
            Hear It In Action
          </a>
        </div>

        {/* Hero Dashboard — Live Call Interface */}
        <div className="relative mx-auto max-w-5xl">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-3xl bg-purple-600/10 blur-2xl scale-105 pointer-events-none" />

          <div className="relative gradient-border rounded-3xl overflow-hidden p-1">
            <div className="bg-[#0a0515] rounded-[22px] p-6 md:p-8">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <div className="ml-4 flex-1 h-6 rounded-md bg-white/5 max-w-xs" />
                <div className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Agent Live</span>
                </div>
              </div>

              {/* KPI cards */}
              <div className="grid grid-cols-3 gap-4 mb-5">
                {[
                  { label: 'Active Calls', value: '12', color: 'text-cyan-400', icon: <PhoneCall className="w-4 h-4" />, bar: 75 },
                  { label: 'Avg Handle Time', value: '1m 42s', color: 'text-purple-400', icon: <Mic className="w-4 h-4" />, bar: 60 },
                  { label: 'Booked Today', value: '34', color: 'text-emerald-400', icon: <CalendarCheck className="w-4 h-4" />, bar: 90 },
                ].map((card, i) => (
                  <div key={i} className="glass rounded-2xl p-4 border border-white/5">
                    <div className={`flex items-center gap-2 ${card.color} mb-2 text-sm font-medium`}>
                      {card.icon} {card.label}
                    </div>
                    <div className={`text-2xl md:text-3xl font-black font-heading ${card.color}`}>{card.value}</div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div className={`h-full rounded-full bg-current opacity-40 animate-pulse`} style={{ width: `${card.bar}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Live call transcript panel */}
              <div className="glass rounded-2xl p-5 border border-white/5">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Live Call</span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-500">02:14</span>
                </div>

                <div className="h-px bg-white/5 mb-4" />

                {/* Transcript bubbles */}
                <div className="space-y-3">
                  {/* AI message */}
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-cyan-500 pl-1">Aria · AI Agent</span>
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl rounded-tl-none px-3 py-2 max-w-[85%]">
                      <p className="text-xs text-gray-300">Hi! This is Aria from Midtown Dental. Are you calling to book an appointment?</p>
                    </div>
                  </div>

                  {/* Caller message */}
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-600 pr-1">Caller</span>
                    <div className="bg-white/5 border border-white/8 rounded-xl rounded-tr-none px-3 py-2 max-w-[85%]">
                      <p className="text-xs text-gray-300">Yes, I need a cleaning for next Tuesday if possible.</p>
                    </div>
                  </div>

                  {/* AI message 2 */}
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-cyan-500 pl-1">Aria · AI Agent</span>
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl rounded-tl-none px-3 py-2 max-w-[85%]">
                      <p className="text-xs text-gray-300">Perfect — I have 10 AM or 2 PM open on Tuesday. Which works better for you?</p>
                    </div>
                  </div>
                </div>

                {/* Waveform */}
                <WaveformBars />
              </div>
            </div>
          </div>

          {/* Floating badge — left */}
          <div className="absolute -left-4 top-1/3 glass border border-red-500/20 rounded-2xl px-4 py-3 hidden md:flex items-center gap-3 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="w-8 h-8 rounded-xl bg-red-500/15 flex items-center justify-center">
              <PhoneOff className="w-4 h-4 text-red-400" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Missed Calls</div>
              <div className="text-sm font-bold text-white">0 This Month</div>
            </div>
          </div>

          {/* Floating badge — right */}
          <div className="absolute -right-4 top-1/2 glass border border-cyan-500/20 rounded-2xl px-4 py-3 hidden md:flex items-center gap-3 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="w-8 h-8 rounded-xl bg-cyan-500/15 flex items-center justify-center">
              <CalendarCheck className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Appointments Set</div>
              <div className="text-sm font-bold text-white">+34 Today</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
