
import React from 'react';

const LOGOS = [
    { src: '/logos/logo1.png', alt: 'Partner 1' },
    { src: '/logos/logo2.png', alt: 'Partner 2' },
    { src: '/logos/logo3.png', alt: 'Partner 3' },

    { src: '/logos/logo5.png', alt: 'Partner 5' },
    { src: '/logos/logo6.png', alt: 'National Positions' },
];

const LogoTicker: React.FC = () => {
    return (
        <section className="py-12 bg-slate-950 border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest">Trusted by industry leaders</p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24">
                    {/* First set of logos */}
                    {LOGOS.map((logo, idx) => (
                        <div key={`logo-1-${idx}`} className="mx-4 flex-shrink-0">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-10 md:h-16 w-auto object-contain opacity-100"
                            />
                        </div>
                    ))}

                    {/* Duplicate set for seamless scrolling */}
                    {LOGOS.map((logo, idx) => (
                        <div key={`logo-2-${idx}`} className="mx-4 flex-shrink-0">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-10 md:h-16 w-auto object-contain opacity-100"
                            />
                        </div>
                    ))}

                    {/* Triplicate set for wide screens */}
                    {LOGOS.map((logo, idx) => (
                        <div key={`logo-3-${idx}`} className="mx-4 flex-shrink-0">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-10 md:h-16 w-auto object-contain opacity-100"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100 ml-full">
                    {/* Duplicate structure if needed for CSS only marquee - but typically flex gap is enough with simple animation */}
                </div>
            </div>
        </section>
    );
};

export default LogoTicker;
