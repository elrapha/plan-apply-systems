import React from 'react';

const reasons = [
  'Industry-specific expertise',
  'Compliance with global standards (FDA, EMA, WHO)',
  'Customized and scalable solutions',
  'Strong focus on quality, safety, and reliability',
  'End-to-end project support'
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f2fae8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-pas-forest mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-4">
              We are a dynamic process and automation company delivering advanced engineering, automation, and digital solutions to industries including pharmaceuticals, oil & gas, and manufacturing.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              From concept to commissioning, we provide end-to-end solutions tailored to each client, helping transform complex operations into efficient, reliable, and future-ready systems.
            </p>

            <h3 className="text-2xl font-bold text-pas-forest mb-4">Why Choose Us</h3>
            <div className="space-y-3">
              {reasons.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-pas-lime font-bold">✔</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-pas-lime">
              <h3 className="text-2xl font-bold text-pas-forest mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To be a trusted partner in delivering intelligent automation and process excellence across global industries.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-pas-lime">
              <h3 className="text-2xl font-bold text-pas-forest mb-3">Pharmaceutical Focus</h3>
              <p className="text-gray-700">
                We support GMP-ready operations with validation services, data integrity controls, and compliant automation architectures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-pas-lime">
              <h3 className="text-2xl font-bold text-pas-forest mb-3">Execution Excellence</h3>
              <p className="text-gray-700">
                Our team delivers turnkey projects with installation, commissioning, training, and lifecycle support to sustain long-term value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
