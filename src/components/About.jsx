import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f2fae8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-pas-forest mb-6">About Plan Apply Systems</h2>
            <p className="text-lg text-gray-700 mb-4">
              Plan Apply Systems is a specialized consultancy dedicated to helping organizations design, build, maintain, and optimize processing plants. With deep expertise across food & beverage, chemical, pharmaceutical, and industrial manufacturing sectors, we bring practical knowledge and strategic thinking to every engagement.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our approach combines industry best practices with tailored solutions. We don't just advise—we partner with you to ensure successful implementation, regulatory compliance, and operational excellence.
            </p>

            <div className="space-y-4">
              {[
                { title: 'Deep Industry Experience', desc: 'Proven track record in complex processing plant projects' },
                { title: 'Standards & Compliance', desc: 'Expert implementation of ISO, HACCP, and regulatory requirements' },
                { title: 'End-to-End Support', desc: 'From feasibility studies to operational optimization' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="text-2xl text-pas-lime flex-shrink-0">✓</div>
                  <div>
                    <h3 className="font-bold text-pas-forest">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {[
              { stat: '100+', label: 'Projects Completed' },
              { stat: '50+',  label: 'Manufacturing Organizations Served' },
              { stat: '25+',  label: 'Years Combined Industry Experience' },
              { stat: '98%',  label: 'Client Satisfaction Rate' },
            ].map(item => (
              <div key={item.label} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-pas-lime">
                <div className="text-4xl font-bold text-pas-forest mb-2">{item.stat}</div>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
