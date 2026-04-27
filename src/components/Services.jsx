import React from 'react';

const services = [
  {
    id: 1,
    title: 'Process Engineering',
    description: 'Process design and optimization, P&ID development, system analysis, and batch or continuous process solutions built for performance and reliability.',
    icon: '⚙️',
    image: `${process.env.PUBLIC_URL}/process.png`,
    imageAlt: 'Process engineering design and analysis'
  },
  {
    id: 2,
    title: 'Industrial Automation',
    description: 'PLC, SCADA, and DCS integration, control panel design, programming, and automation upgrades or retrofits for existing facilities.',
    icon: '🤖',
    image: `${process.env.PUBLIC_URL}/maintenance.jpg`,
    imageAlt: 'Industrial automation and control systems'
  },
  {
    id: 3,
    title: 'Digital & Smart Manufacturing',
    description: 'Industrial IoT solutions, data analytics, real-time monitoring, and Industry 4.0 integration to create connected, intelligent operations.',
    icon: '📊',
    image: `${process.env.PUBLIC_URL}/quality.png`,
    imageAlt: 'Digital manufacturing and data monitoring'
  },
  {
    id: 4,
    title: 'Validation & Compliance (Pharma Focus)',
    description: 'GMP-compliant system design, IQ/OQ/PQ validation, and data integrity support aligned with regulatory requirements.',
    icon: '✅',
    image: `${process.env.PUBLIC_URL}/compliance.jpg`,
    imageAlt: 'Digital manufacturing and data monitoring'
  },
  {
    id: 5,
    title: 'Project Execution',
    description: 'Turnkey delivery from installation and commissioning to operator training, lifecycle maintenance, and long-term support.',
    icon: '🚀',
    image: `${process.env.PUBLIC_URL}/execution.jpg`,
    imageAlt: 'Project execution and commissioning services'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pas-forest mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We design, implement, and support high-performance process and automation systems that improve productivity, ensure compliance, and optimize operational efficiency.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid md:grid-cols-2 gap-8 items-center py-8 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
            >
              <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    className="h-[400px] w-full rounded-lg object-cover shadow-lg md:h-[440px]"
                    loading="lazy"
                  />
                ) : (
                  <div className="bg-pas-forest h-[400px] rounded-lg shadow-lg flex items-center justify-center text-6xl md:h-[440px]">
                    {service.icon}
                  </div>
                )}
              </div>
              <div className={`order-2 flex h-full flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-3xl font-bold text-pas-forest mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg mb-6">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-gray-200 pt-12">
          <p className="text-center text-pas-forest font-semibold mb-6">Industries we serve and standards we support:</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-pas-forest mb-3">Industries Served</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-pas-forest rounded-full text-sm">Pharmaceuticals</span>
                <span className="px-4 py-2 bg-gray-100 text-pas-forest rounded-full text-sm">Oil & Gas</span>
                <span className="px-4 py-2 bg-gray-100 text-pas-forest rounded-full text-sm">Manufacturing</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-pas-forest mb-3">Compliance & Standards</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-pas-forest rounded-full text-sm">FDA</span>
                <span className="px-4 py-2 bg-gray-100 text-pas-forest rounded-full text-sm">EMA</span>
                <span className="px-4 py-2 bg-gray-100 text-pas-forest rounded-full text-sm">WHO</span>
                <span className="px-4 py-2 bg-gray-100 text-pas-forest rounded-full text-sm">GMP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
