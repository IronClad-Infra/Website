import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-semibold mb-12 md:mb-16">Contact</h1>
        <div className="border border-gray-800 bg-[#0f0f0f] p-6 md:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
            <Mail className="w-6 h-6 text-blue-400 flex-shrink-0" strokeWidth={1.5} />
            <a
              href="mailto:partners@ironcladinfra.com"
              className="text-xl md:text-2xl text-blue-400 hover:text-blue-300 transition-colors font-medium break-all"
            >
              partners@ironcladinfra.com
            </a>
          </div>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            We work with a limited number of partners and engagements at a time to maintain quality and responsiveness.
          </p>
        </div>
      </section>
    </div>
  );
}
