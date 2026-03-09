
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X, Quote, Mic } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  result: string;
  resultColor: string;
  image: string;
  tag: string;
  // Full story
  industry: string;
  client: string;
  storyTitle: string;
  challenge: string;
  solution: string;
  quote: string;
  quotePerson: string;
  quoteRole: string;
  metrics: { value: string; label: string; color: string }[];
  accentColor: string;
  borderColor: string;
  bgGradient: string;
}

const cases: CaseStudy[] = [
  {
    id: 'dental',
    title: 'Dental Practice Chain',
    category: 'Voice AI Agent',
    result: 'Zero Missed Calls',
    resultColor: 'text-cyan-400',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=800&fit=crop&q=80',
    tag: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/20',
    industry: 'Healthcare · Dental Practice',
    client: 'Midtown Dental Group',
    storyTitle: 'Zero Missed Calls. 47 New Patients. One Month.',
    challenge: 'Midtown Dental had a packed schedule and a single receptionist managing a phone that never stopped ringing. During procedures, calls went unanswered. After 6 PM, they went to voicemail. A patient survey revealed that 3 in 10 new callers had already booked elsewhere by the time someone called them back — often within the same hour.',
    solution: 'We deployed Aria, a custom AI voice agent trained on Midtown\'s appointment types, insurance policies, and FAQs. Aria now answers every call in under 2 seconds, handles insurance questions, and books appointments directly into their scheduling system — 24 hours a day, including nights and weekends. The front desk now focuses entirely on in-clinic patient experience.',
    quote: 'We signed up three new patients last Sunday at 11 PM. Aria handled the whole thing while I was asleep. That never would have happened before.',
    quotePerson: 'Dr. Rachel Kim',
    quoteRole: 'Owner, Midtown Dental Group',
    metrics: [
      { value: '0', label: 'Missed Calls', color: 'text-cyan-400' },
      { value: '47', label: 'New Patients (Month 1)', color: 'text-emerald-400' },
      { value: '$23.4k', label: 'Added Revenue (Month 1)', color: 'text-purple-400' },
      { value: '4.9★', label: 'Google Rating', color: 'text-yellow-400' },
    ],
    accentColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    bgGradient: 'from-cyan-950/40 to-[#08030f]',
  },
  {
    id: 'law',
    title: 'Law Firm Intake',
    category: 'Voice AI Agent',
    result: '+210% Qualified Intakes',
    resultColor: 'text-purple-400',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=800&fit=crop&q=80',
    tag: 'bg-purple-500/20 text-purple-300 border-purple-500/20',
    industry: 'Legal · Personal Injury',
    client: 'Whitfield Law',
    storyTitle: 'From 4 Hours of Intake Calls a Day to 30 Minutes.',
    challenge: 'Whitfield Law handles high-value personal injury cases, but their intake team was drowning. Partners were in court during peak call hours. Junior staff spent 4+ hours daily on first-touch calls — many of which were not even qualified leads. An internal audit found that 40% of inbound inquiries were never followed up on simply because there were not enough hands.',
    solution: 'We built a voice intake agent trained on Whitfield\'s case qualification criteria — injury type, incident date, liability, and insurance status. The agent asks every qualifying question in natural conversation, determines case viability on the spot, and routes only qualified leads directly to a partner\'s calendar. Unqualified calls receive a polite, professional explanation and a referral.',
    quote: 'Our intake team used to dread Mondays. Now the agent handles everything over the weekend and we walk in on Monday to a calendar full of qualified appointments.',
    quotePerson: 'James Whitfield',
    quoteRole: 'Managing Partner, Whitfield Law',
    metrics: [
      { value: '+210%', label: 'Qualified Intakes', color: 'text-purple-400' },
      { value: '30min', label: 'Daily Intake Time (was 4hrs)', color: 'text-cyan-400' },
      { value: '0', label: 'Qualified Leads Missed (60 days)', color: 'text-emerald-400' },
      { value: '3×', label: 'Cases Opened Per Month', color: 'text-violet-400' },
    ],
    accentColor: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    bgGradient: 'from-purple-950/40 to-[#08030f]',
  },
  {
    id: 'realestate',
    title: 'Real Estate Agency',
    category: 'AI Lead Qualification',
    result: '3× Showing Bookings',
    resultColor: 'text-violet-400',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=800&fit=crop&q=80',
    tag: 'bg-violet-500/20 text-violet-300 border-violet-500/20',
    industry: 'Real Estate · Residential',
    client: 'Premier Realty Group',
    storyTitle: '3× More Showings Without Hiring a Single Extra Agent.',
    challenge: 'Premier Realty\'s agents were constantly mid-showing when new leads called in from listing ads. Those calls went unanswered. The leads — often buyers ready to move fast — did not leave voicemails. They opened Zillow and called the next agent. The brokerage was spending $8,000/month on ads to generate leads they were then failing to capture.',
    solution: 'We deployed listing-specific voice agents tied to Premier\'s active properties. When a buyer calls, the agent answers questions about the listing, qualifies the buyer (pre-approval status, timeline, budget), and books a showing directly into the agent\'s calendar. Warm qualified buyers get a follow-up text with listing details within 60 seconds of hanging up.',
    quote: 'I used to convert maybe 1 in 5 inquiries into showings. Now the AI qualifies them first and I\'m showing pre-approved buyers ready to make offers. My close rate has never been higher.',
    quotePerson: 'Marcus Reid',
    quoteRole: 'Senior Agent, Premier Realty Group',
    metrics: [
      { value: '3×', label: 'Showing Bookings', color: 'text-violet-400' },
      { value: '68%', label: 'Lead-to-Showing Rate (was 22%)', color: 'text-cyan-400' },
      { value: '12hrs', label: 'Saved Per Agent Per Week', color: 'text-emerald-400' },
      { value: '$8k/mo', label: 'Ad Spend Now Fully Captured', color: 'text-purple-400' },
    ],
    accentColor: 'text-violet-400',
    borderColor: 'border-violet-500/30',
    bgGradient: 'from-violet-950/40 to-[#08030f]',
  },
  {
    id: 'saas',
    title: 'SaaS Hiring at Scale',
    category: 'AI Candidate Screening',
    result: '12 Days Saved / Mo',
    resultColor: 'text-emerald-400',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&q=80',
    tag: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/20',
    industry: 'Technology · B2B SaaS',
    client: 'ScaleUp SaaS',
    storyTitle: '94 Candidates Screened in 30 Days. HR Team Reclaimed.',
    challenge: 'ScaleUp SaaS was hiring for 15 roles simultaneously during a growth sprint. Their 2-person HR team was spending entire days back-to-back on 15-minute phone screens — often with candidates who clearly did not meet basic requirements. Hiring managers waited weeks for shortlists. Good candidates were accepting competitor offers during the wait.',
    solution: 'We built a voice screening agent that conducts structured first-round interviews for each open role — asking role-specific technical and behavioral questions, scoring responses against a rubric, and delivering a written scorecard with a full transcript to the hiring manager within minutes of the call ending. HR now only joins the process at the second round.',
    quote: 'In the first month the agent screened 94 candidates. That would have taken my team three weeks of solid work. We filled 8 roles and the quality of shortlists was genuinely better than before.',
    quotePerson: 'Priya Nair',
    quoteRole: 'Head of People, ScaleUp SaaS',
    metrics: [
      { value: '94', label: 'Candidates Screened (Month 1)', color: 'text-emerald-400' },
      { value: '12 days', label: 'Saved Per Month', color: 'text-cyan-400' },
      { value: '60%', label: 'Faster Time-to-Offer', color: 'text-purple-400' },
      { value: '8 roles', label: 'Filled in 30 Days', color: 'text-violet-400' },
    ],
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    bgGradient: 'from-emerald-950/40 to-[#08030f]',
  },
  {
    id: 'plumbing',
    title: "Mike's Plumbing",
    category: 'Voice AI for Trades',
    result: '$14k New Revenue / Mo',
    resultColor: 'text-orange-400',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop&q=80',
    tag: 'bg-orange-500/20 text-orange-300 border-orange-500/20',
    industry: 'Trades · Plumbing & HVAC',
    client: "Mike's Plumbing",
    storyTitle: '$14,000 in New Revenue. Month One. Solo Operator.',
    challenge: "Mike runs a one-man plumbing business in a competitive local market. Every time his phone rang while he was under a sink or in a crawl space, he missed it. He estimated he was missing 8–12 calls a week. At an average job value of $300, that was potentially $2,400+ in revenue disappearing every single week. He had tried hiring an answering service — they were slow, impersonal, and could not actually book into his calendar.",
    solution: "We set up a voice agent on Mike's existing mobile number that answers every call instantly with his name and business. The agent asks about the issue type, urgency, and address, then checks Mike's calendar and books the job in real time. Mike gets a text message the moment a job is booked: customer name, address, issue, and contact number. The agent also handles after-hours calls and emergency requests with a separate urgent script.",
    quote: 'I made back the cost of this in the first week. I had no idea how many calls I was missing. Now I finish a job and there are two new ones already booked waiting for me.',
    quotePerson: 'Mike Donnelly',
    quoteRole: "Owner, Mike's Plumbing",
    metrics: [
      { value: '$14k', label: 'New Revenue (Month 1)', color: 'text-orange-400' },
      { value: '0', label: 'Missed Calls Since Launch', color: 'text-emerald-400' },
      { value: '+40%', label: 'More Jobs Per Week', color: 'text-cyan-400' },
      { value: '7 days', label: 'Time to Go Live', color: 'text-purple-400' },
    ],
    accentColor: 'text-orange-400',
    borderColor: 'border-orange-500/30',
    bgGradient: 'from-orange-950/30 to-[#08030f]',
  },
];

const Modal: React.FC<{ cs: CaseStudy; onClose: () => void }> = ({ cs, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Panel */}
      <div className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border ${cs.borderColor} bg-gradient-to-br ${cs.bgGradient} shadow-2xl`}>
        {/* Top accent line */}
        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-40 ${cs.accentColor}`} />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${cs.tag}`}>
                {cs.category}
              </span>
              <span className="text-xs text-gray-500">{cs.industry}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black font-heading text-white mb-1">{cs.client}</h2>
            <p className={`text-lg font-bold ${cs.accentColor}`}>{cs.storyTitle}</p>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {cs.metrics.map((m, i) => (
              <div key={i} className="glass rounded-2xl p-4 border border-white/5 text-center">
                <div className={`text-2xl md:text-3xl font-black font-heading ${m.color}`}>{m.value}</div>
                <p className="text-[10px] text-gray-500 mt-1 leading-snug">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Story */}
          <div className="space-y-6 mb-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-red-500/60 inline-block" /> The Challenge
              </p>
              <p className="text-gray-300 leading-relaxed">{cs.challenge}</p>
            </div>

            <div className="h-px bg-white/5" />

            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-emerald-500/60 inline-block" /> The Solution
              </p>
              <p className="text-gray-300 leading-relaxed">{cs.solution}</p>
            </div>
          </div>

          {/* Quote */}
          <div className="glass rounded-2xl p-6 border border-white/5 mb-8">
            <Quote className={`w-6 h-6 ${cs.accentColor} mb-3 opacity-50`} />
            <p className="text-lg text-gray-200 italic leading-relaxed mb-5">"{cs.quote}"</p>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm font-black ${cs.tag}`}>
                {cs.quotePerson.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-white">{cs.quotePerson}</p>
                <p className="text-sm text-gray-500">{cs.quoteRole}</p>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className={`flex items-center gap-3 p-4 rounded-2xl border ${cs.borderColor} bg-white/3`}>
            <Mic className={`w-5 h-5 ${cs.accentColor} shrink-0`} />
            <p className="text-sm text-gray-400 flex-1">Powered by Triggermate AI Voice Agent — deployed and live in under 7 days.</p>
            <a
              href="https://cal.com/devendra-ahirwar-su2t8y/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={`shrink-0 text-sm font-bold ${cs.accentColor} hover:text-white transition-colors flex items-center gap-1`}
            >
              Get This For Your Business <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CaseStudies: React.FC = () => {
  const [selected, setSelected] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-20 gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-400 mb-4">Our Work</p>
            <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tight">
              Real Businesses.
              <br />
              <span className="text-gradient">Real Results.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            Click any case study to read the full story — the problem, the solution, and the results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {cases.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelected(project)}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
              <div className="absolute inset-0 rounded-3xl border border-white/5 group-hover:border-purple-500/30 transition-colors duration-500" />

              {/* Click hint */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>

              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${project.tag} mb-3 w-fit`}>
                  {project.category}
                </span>
                <h3 className="text-lg font-bold font-heading text-white mb-2 leading-snug">{project.title}</h3>
                <div className="flex items-center justify-between">
                  <span className={`font-bold text-sm ${project.resultColor}`}>{project.result}</span>
                </div>
                <p className="text-[10px] text-gray-600 mt-2 group-hover:text-gray-400 transition-colors">
                  Tap to read full story →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <Modal cs={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};
