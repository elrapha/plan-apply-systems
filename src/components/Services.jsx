import React from 'react';

const services = [
  {
    id: 1,
    title: 'Plant Design & Build Consulting',
    description: 'From feasibility studies through to commissioning, we guide you through every stage of processing plant development across multiple sectors including food & beverage, chemical, pharmaceutical, and industrial manufacturing.',
    icon: '🏭',
    category: 'Design & Engineering',
    image: `${process.env.PUBLIC_URL}/plant_design.png`,
    imageAlt: 'Processing plant design and engineering consulting'
  },
  {
    id: 2,
    title: 'Maintenance Program Development',
    description: 'Structured preventive and predictive maintenance frameworks tailored to your operations. We conduct comprehensive audits and develop strategic maintenance plans to maximize equipment lifespan and minimize downtime.',
    icon: '🔧',
    category: 'Maintenance',
    image: `${process.env.PUBLIC_URL}/maintenance.png`,
    imageAlt: 'Maintenance consulting for a processing plant'
  },
  {
    id: 3,
    title: 'Quality Assurance & Compliance',
    description: 'Complete QA system design, HACCP implementation, ISO certification guidance, process validation, and compliance audits. We ensure your plant meets the highest quality and regulatory standards.',
    icon: '✓',
    category: 'Quality & Compliance',
    image: `${process.env.PUBLIC_URL}/quality.png`,
    imageAlt: 'Quality assurance and compliance consulting for processing plants'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pas-forest mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive consulting solutions for processing plant design, maintenance, and quality assurance.
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
                  <div className="bg-pas-forest h-[400px] rounded-lg shadow-lg flex items-center justify-center text-6xl opacity-80 md:h-[440px]">
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

        {/* Trust Bar */}
        <div className="mt-20 border-t border-gray-200 pt-12">
          <p className="text-center text-pas-forest font-semibold mb-6">We work with industry standards and sectors:</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-pas-forest mb-3">Industries Served</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-pas-forest rounded-full text-sm">Food & Beverage</span>
                <span className="px-4 py-2 bg-gray-100 text-pas-forest rounded-full text-sm">Chemical & Pharmaceutical</span>
                <span className="px-4 py-2 bg-gray-100 text-pas-forest rounded-full text-sm">Industrial Manufacturing</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-pas-forest mb-3">Standards & Certifications</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-pas-forest rounded-full text-sm">ISO</span>
                <span className="px-4 py-2 bg-gray-100 text-pas-forest rounded-full text-sm">HACCP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
