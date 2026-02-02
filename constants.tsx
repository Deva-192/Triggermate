
import React from 'react';
import { Target, Mic, Users, Zap, Search, Cog, BarChart3 } from 'lucide-react';

export const BOOKING_URL = "https://cal.com/devendra-ahirwar-su2t8y/30min";

export const SERVICES = [
  {
    id: 'lead-gen',
    title: "Lead Generation & Content",
    description: "Automated lead capture and nurturing systems that turn strangers into buyers using AI content and email sequences.",
    icon: <Target className="w-6 h-6 text-purple-400" />,
    color: "purple"
  },
  {
    id: 'voice-ai',
    title: "Voice AI Customer Systems",
    description: "Human-like voice agents that handle calls 24/7, book appointments, and provide instant customer support.",
    icon: <Mic className="w-6 h-6 text-blue-400" />,
    color: "blue"
  },
  {
    id: 'hr-systems',
    title: "HR & Interview Agents",
    description: "Scale your team without the headache. AI agents screen candidates and conduct first-round interviews automatically.",
    icon: <Users className="w-6 h-6 text-emerald-400" />,
    color: "emerald"
  }
];

export const STATS = [
  { label: "Leads Generated", value: "500k+" },
  { label: "AI Coverage", value: "24/7" },
  { label: "Hiring Time Saved", value: "85%" },
  { label: "Client Satisfaction", value: "98%" }
];

export const STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We dive deep into your business bottlenecks and identify where AI can have the biggest impact.",
    timeframe: "30 MINUTES"
  },
  {
    number: "02",
    title: "Custom Strategy",
    description: "Our team designs a bespoke automation roadmap tailored to your specific growth goals.",
    timeframe: "1 WEEK"
  },
  {
    number: "03",
    title: "Build & Train",
    description: "We develop your AI systems and train them on your unique business data and brand voice.",
    timeframe: "2-4 WEEKS"
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description: "Go live with your new systems. We provide ongoing monitoring to ensure peak performance.",
    timeframe: "ONGOING"
  }
];
