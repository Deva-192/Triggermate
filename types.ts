
// Add React import to resolve namespace error for React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  gradient: string;
}

export interface StatItem {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

export interface CaseStudy {
  title: string;
  category: string;
  image: string;
  result: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}
