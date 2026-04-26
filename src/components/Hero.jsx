import React from 'react';

export default function Hero() {
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Processing Plant
              <span className="text-amber-400"> Excellence</span>
            </h2>
            <p className="text-xl text-gray-300">
              Expert consultancy for designing, maintaining, and optimizing processing plants across food & beverage, chemical, pharmaceutical, and industrial manufacturing sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-amber-400 text-slate-900 rounded font-semibold hover:bg-amber-500 transition transform hover:scale-105"
              >
                Get in Touch
              </button>
              <button
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-amber-400 text-amber-400 rounded font-semibold hover:bg-amber-400 hover:text-slate-900 transition"
              >
                Our Services
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <img
                src={`${process.env.PUBLIC_URL}/home.png`}
                alt="Processing plant facility"
                className="w-full h-96 rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
