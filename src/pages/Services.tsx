export default function Services() {
  const services = [
    {
      title: 'Secure Cloud Architecture & Modernization',
      description: 'Design, review, and modernization of cloud environments with a focus on security, compliance readiness, reliability, and cost efficiency.',
    },
    {
      title: 'Security Architecture & Compliance Enablement',
      description: 'Identity and access design, network segmentation, logging and monitoring, and security guardrails to support internal standards and regulatory requirements.',
    },
    {
      title: 'AI Automation & Workflow Engineering',
      description: 'Design and implementation of governed, AI-assisted automation with production guardrails, auditability, and clear ownership.',
    },
    {
      title: 'Systems Integration',
      description: 'Secure integration of systems and data flows to reduce manual work and improve operational consistency.',
    },
    {
      title: 'Operational Support',
      description: 'Ongoing advisory and optimization to keep systems stable, secure, and cost-effective as requirements evolve.',
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-semibold mb-12 md:mb-16">Services</h1>
        <div className="space-y-10 md:space-y-12">
          {services.map((service, index) => (
            <div key={index} className="border-l-2 border-gray-800 pl-4 md:pl-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                {service.title}
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
