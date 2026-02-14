
import React from 'react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    quote: "Triggermate literally transformed our sales process. Our AI voice agent handles more calls than our entire previous front-desk team, and it never gets tired.",
    author: "Michael Lacefield",
    role: "Co-founder, XYZ SaaS",
    image: "https://picsum.photos/id/64/100/100"
  },
  {
    quote: "The lead generation system they built for us paid for itself within the first 14 days. The qualification is scarily accurate.",
    author: "Sarah Chen",
    role: "Marketing Director, BloomTech",
    image: "https://picsum.photos/id/65/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-purple-600/20 rounded-2xl flex items-center justify-center">
              <Quote className="w-6 h-6 text-purple-500" />
            </div>
            <h2 className="text-3xl font-bold font-heading">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((rev, idx) => (
              <div key={idx} className="p-10 rounded-3xl glass border border-white/5 space-y-8 flex flex-col justify-between">
                <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed italic">
                  "{rev.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={rev.image} alt={rev.author} className="w-12 h-12 rounded-full ring-2 ring-purple-500/20" />
                  <div>
                    <h4 className="font-bold font-heading">{rev.author}</h4>
                    <p className="text-sm text-gray-500">{rev.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
