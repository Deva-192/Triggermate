
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

export interface StatProps {
  label: string;
  value: string;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
  timeframe: string;
}