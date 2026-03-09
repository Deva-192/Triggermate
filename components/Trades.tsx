
import React from 'react';
import { PhoneCall, CalendarCheck, MessageSquare, ArrowRight, Wrench, Thermometer, Zap, CheckCircle2, PhoneOff, DollarSign } from 'lucide-react';

const trades = [
  { icon: <Wrench className="w-5 h-5" />, label: 'Plumbers' },
  { icon: <Thermometer className="w-5 h-5" />, label: 'HVAC Techs' },
  { icon: <Zap className="w-5 h-5" />, label: 'Electricians' },
];

const stats = [
  { value: '78%', label: 'of callers book with the first company that answers', color: 'text-cyan-400' },
  { value: '67%', label: "of callers won't leave a voicemail — they just hang up", color: 'text-purple-400' },
  { value: '$350', label: 'average revenue lost per missed service call', color: 'text-emerald-400' },
];

const benefits = [
  'Answers every call while you\'re on-site',
  'Books the job directly into your calendar',
  'Collects address, issue type & urgency',
  'Texts you the job details instantly',
  'Handles after-hours & weekend calls',
  'Follows up with no-show leads automatically',
];

export const Trades: React.FC = () => {
  const calLink = "https://cal.com/devendra-ahirwar-su2t8y/30min";

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-700/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-700/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4">Built For Trades</p>
          <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tight mb-6 leading-[1.05]">
            Your Hands Are Full.
            <br />
            <span className="text-gradient">Your Phone Isn't.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            You're under a sink fixing a burst pipe. Your phone rings. Without an AI agent, that caller hangs up and books with your competitor in 30 seconds.
          </p>

          {/* Trade icons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {trades.map((trade, i) => (
              <div key={i} className="flex items-center gap-2.5 px-4 py-2.5 rounded-full glass border border-white/8 text-sm font-semibold text-gray-300">
                <span className="text-cyan-400">{trade.icon}</span>
                {trade.label}
              </div>
            ))}
          </div>
        </div>

        {/* Main content: before / after */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* WITHOUT panel */}
          <div className="relative rounded-3xl overflow-hidden border border-red-500/15 bg-gradient-to-br from-red-950/30 to-[#0a0515] p-8">
            <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/20 text-[10px] font-black uppercase tracking-widest text-red-400">
              Without Triggermate AI
            </div>

            <div className="mt-8 space-y-5">
              {/* Scenario */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/3 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 mt-1">
                  <Wrench className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">You're on a job. Phone rings.</p>
                  <p className="text-sm text-gray-500">Hands dirty. Under the sink. Can't answer.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 text-gray-600">
                <div className="h-px flex-1 bg-white/5" />
                <span className="text-xs">30 seconds later</span>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-red-500/5 border border-red-500/10">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 mt-1">
                  <PhoneOff className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">Caller hangs up. No voicemail.</p>
                  <p className="text-sm text-gray-500">They Google the next plumber and book with them.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-red-500/5 border border-red-500/10">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 mt-1">
                  <DollarSign className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">You lost a $350+ job.</p>
                  <p className="text-sm text-gray-500">Multiplied across every missed call this week.</p>
                </div>
              </div>
            </div>
          </div>

          {/* WITH panel */}
          <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-[#0a0515] p-8">
            <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/20 text-[10px] font-black uppercase tracking-widest text-cyan-400">
              With Triggermate AI
            </div>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/3 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 mt-1">
                  <Wrench className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">You're on a job. Phone rings.</p>
                  <p className="text-sm text-gray-500">Hands dirty. Under the sink. Can't answer.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 text-gray-600">
                <div className="h-px flex-1 bg-white/5" />
                <span className="text-xs">Instantly answered</span>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              {/* AI transcript snippet */}
              <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">AI Agent Answered</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-cyan-500 uppercase tracking-wider">Aria · AI Agent</span>
                  <div className="bg-cyan-500/10 border border-cyan-500/15 rounded-xl rounded-tl-none px-3 py-2">
                    <p className="text-xs text-gray-300">"Hi! Thanks for calling Mike's Plumbing. What can I help you with today?"</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[9px] font-bold text-gray-600 uppercase tracking-wider">Caller</span>
                  <div className="bg-white/5 border border-white/8 rounded-xl rounded-tr-none px-3 py-2">
                    <p className="text-xs text-gray-300">"My kitchen sink is leaking badly, need someone today."</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-cyan-500 uppercase tracking-wider">Aria · AI Agent</span>
                  <div className="bg-cyan-500/10 border border-cyan-500/15 rounded-xl rounded-tl-none px-3 py-2">
                    <p className="text-xs text-gray-300">"Got it — I have a 3 PM slot available today. Can I book that for you?"</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 mt-1">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">You get a text instantly.</p>
                  <p className="text-sm text-gray-500">"New job booked — 3 PM, 14 Oak St, kitchen leak. Contact: Sarah, 555-0198."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-6 border border-white/5 text-center">
              <div className={`text-4xl font-black font-heading ${stat.color} mb-2`}>{stat.value}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Benefits + CTA */}
        <div className="gradient-border rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-black font-heading mb-6">
                Everything Your AI Agent Does
                <br />
                <span className="text-gradient">While You're On The Job</span>
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="glass rounded-2xl p-5 border border-white/5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <PhoneCall className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Incoming call answered by AI</p>
                    <p className="text-sm font-bold text-white">Sarah M. — Kitchen leak, urgent</p>
                  </div>
                  <span className="ml-auto text-[10px] text-emerald-400 font-bold">Just now</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <CalendarCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Appointment booked automatically</p>
                    <p className="text-sm font-bold text-white">Today 3:00 PM — 14 Oak Street</p>
                  </div>
                  <span className="ml-auto text-[10px] text-emerald-400 font-bold">Just now</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">SMS sent to you</p>
                    <p className="text-sm font-bold text-white">"New job booked — details sent"</p>
                  </div>
                  <span className="ml-auto text-[10px] text-emerald-400 font-bold">Just now</span>
                </div>
              </div>

              <a
                href={calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-primary w-full py-4 rounded-full font-bold text-white text-center flex items-center justify-center gap-3"
              >
                Get Your AI Agent For Your Trade
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-center text-xs text-gray-600">Works with your existing phone number. Live in 7 days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
