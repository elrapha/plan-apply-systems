import React from 'react';

export default function Hero() {
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-pas-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pas-lime">
              Process & Automation Company
            </p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Engineering Intelligent Solutions for
              <span className="text-pas-lime"> Modern Industry</span>
            </h2>
            <p className="text-xl text-green-100">
              We deliver advanced engineering, automation, and digital solutions that transform complex operations into efficient, reliable, and future-ready systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-pas-lime text-pas-forest rounded font-semibold hover:brightness-110 transition transform hover:scale-105"
              >
                Let's Work Together
              </button>
              <button
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-pas-lime text-pas-lime rounded font-semibold hover:bg-pas-lime hover:text-pas-forest transition"
              >
                Explore Our Services
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <img
                src={`${process.env.PUBLIC_URL}/home.png`}
                alt="Process automation and industrial engineering"
                className="w-full h-96 rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
