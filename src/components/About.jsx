import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Plan Apply Systems</h2>
            <p className="text-lg text-gray-700 mb-4">
              Plan Apply Systems is a specialized consultancy dedicated to helping organizations design, build, maintain, and optimize processing plants. With deep expertise across food & beverage, chemical, pharmaceutical, and industrial manufacturing sectors, we bring practical knowledge and strategic thinking to every engagement.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our approach combines industry best practices with tailored solutions. We don't just advise—we partner with you to ensure successful implementation, regulatory compliance, and operational excellence.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl text-amber-400 flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-slate-900">Deep Industry Experience</h3>
                  <p className="text-gray-600">Proven track record in complex processing plant projects</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl text-amber-400 flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-slate-900">Standards & Compliance</h3>
                  <p className="text-gray-600">Expert implementation of ISO, HACCP, and regulatory requirements</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl text-amber-400 flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-slate-900">End-to-End Support</h3>
                  <p className="text-gray-600">From feasibility studies to operational optimization</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-400">
              <div className="text-4xl font-bold text-slate-900 mb-2">100+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-400">
              <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
              <p className="text-gray-600">Manufacturing Organizations Served</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-400">
              <div className="text-4xl font-bold text-slate-900 mb-2">25+</div>
              <p className="text-gray-600">Years Combined Industry Experience</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-400">
              <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

