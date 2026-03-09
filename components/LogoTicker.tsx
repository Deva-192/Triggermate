
import React from 'react';

const LOGOS = [
  { src: '/logos/logo1.png', alt: 'Partner 1' },
  { src: '/logos/logo2.png', alt: 'Calibrate' },
  { src: '/logos/logo3.png', alt: 'Progression' },
  { src: '/logos/logo5.png', alt: 'Partner 5' },
  { src: '/logos/logo6.png', alt: 'National Positions' },
];

const DOUBLE = [...LOGOS, ...LOGOS, ...LOGOS];

const LogoTicker: React.FC = () => {
  return (
    <section className="py-14 relative border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-white/[0.015]" />

      <div className="container mx-auto px-6 mb-8 text-center relative z-10">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-600">
          Trusted by industry leaders
        </p>
      </div>

      {/* Fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
        style={{ background: 'linear-gradient(to right, #030303, transparent)' }} />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
        style={{ background: 'linear-gradient(to left, #030303, transparent)' }} />

      <div className="relative overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24">
          {DOUBLE.map((logo, idx) => (
            <div key={idx} className="mx-4 flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-300">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 w-auto object-contain filter brightness-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
