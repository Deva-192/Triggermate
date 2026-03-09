
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    quote: "Before Triggermate AI, we were losing 30% of our calls to voicemail after hours. Now their voice agent books appointments at 11 PM on a Saturday. We signed up three new patients last Sunday alone.",
    author: "Dr. Rachel Kim",
    role: "Owner, Midtown Dental Group",
    image: "https://picsum.photos/id/64/100/100",
    metric: "Zero After-Hours Missed Calls",
    metricColor: "text-cyan-400",
  },
  {
    quote: "Our intake team was spending 4 hours a day on first-touch calls. The AI voice agent now handles all of them — it qualifies better than our junior staff did, and sends me a full transcript instantly.",
    author: "James Whitfield",
    role: "Managing Partner, Whitfield Law",
    image: "https://picsum.photos/id/65/100/100",
    metric: "+210% Qualified Intakes",
    metricColor: "text-purple-400",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-700/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-400 mb-4">Client Results</p>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="gradient-border p-8 md:p-10 flex flex-col justify-between gap-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
                "{rev.quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={rev.image}
                    alt={rev.author}
                    className="w-12 h-12 rounded-full ring-2 ring-purple-500/30 object-cover"
                  />
                  <div>
                    <h4 className="font-bold font-heading text-white">{rev.author}</h4>
                    <p className="text-sm text-gray-500">{rev.role}</p>
                  </div>
                </div>
                <div className={`text-sm font-bold ${rev.metricColor} text-right hidden sm:block`}>
                  {rev.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
