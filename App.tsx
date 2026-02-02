
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import Stats from './components/Stats';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#020617] text-slate-50 selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <LogoTicker />

        {/* Services Showcase */}
        <Services />

        {/* Journey Section */}
        <HowItWorks />

        {/* Testimonial Section */}
        <section className="py-32 bg-indigo-600/[0.02] border-y border-white/[0.02]">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-10 text-6xl text-indigo-500/20 font-serif">"</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 italic leading-tight tracking-tight">
                "Triggermate's AI voice system completely transformed our customer service.
                We're handling 4x more inquiries with zero additional staff, and our CSAT scores have never been higher."
              </h3>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-500 shadow-xl shadow-indigo-500/20">
                  <img src="https://picsum.photos/100/100" alt="Client" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-lg">Michael Lacefield</p>
                  <p className="text-indigo-400 font-semibold tracking-wide uppercase text-xs">Co-founder, FutureScale SaaS</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
