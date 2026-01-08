import { Shield, TrendingUp, Layers } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            The Infrastructure Behind Secure AI & Automation
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Enterprise-grade cloud, security, integration, and AI-assisted automation—delivered reliably, compliantly, and with clear operational ownership.
          </p>
          <p className="text-sm md:text-base text-gray-400 mb-10">
            Built for agencies and growing businesses that need results without introducing risk.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20 border-t border-gray-800">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 md:mb-12">What We Deliver</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="border border-gray-800 bg-[#0f0f0f] p-6 md:p-8">
            <Shield className="w-10 h-10 mb-4 text-gray-300" strokeWidth={1.5} />
            <h3 className="text-lg md:text-xl font-semibold mb-3">Security-First Architecture</h3>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Infrastructure and automation designed with identity controls, network boundaries, and data governance built in—suited for security-conscious and regulated environments.
            </p>
          </div>

          <div className="border border-gray-800 bg-[#0f0f0f] p-6 md:p-8">
            <TrendingUp className="w-10 h-10 mb-4 text-gray-300" strokeWidth={1.5} />
            <h3 className="text-lg md:text-xl font-semibold mb-3">Predictable Delivery</h3>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Fixed-scope projects and clearly defined retainers. No hourly billing or surprise overruns—so agencies can protect margins while scaling capabilities.
            </p>
          </div>

          <div className="border border-gray-800 bg-[#0f0f0f] p-6 md:p-8">
            <Layers className="w-10 h-10 mb-4 text-gray-300" strokeWidth={1.5} />
            <h3 className="text-lg md:text-xl font-semibold mb-3">Whitelabel Partnership</h3>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              A behind-the-scenes technical partner model, supporting agencies under their brand with discretion, clear boundaries, and delivery discipline.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20 border-t border-gray-800">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Who We Work With</h2>
        <ul className="space-y-4 text-base md:text-lg text-gray-300 max-w-3xl">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1 flex-shrink-0">—</span>
            <span>Digital and RevOps agencies expanding into automation and AI</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1 flex-shrink-0">—</span>
            <span>Professional services firms with sensitive or regulated data</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1 flex-shrink-0">—</span>
            <span>Mid-market teams modernizing internal operations</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1 flex-shrink-0">—</span>
            <span>Security-conscious or compliance-driven environments</span>
          </li>
        </ul>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20 border-t border-gray-800">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">How We Engage</h2>
        <ul className="space-y-4 text-base md:text-lg text-gray-300 max-w-3xl">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1 flex-shrink-0">—</span>
            <span>Fixed-scope projects and ongoing operational support</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1 flex-shrink-0">—</span>
            <span>Whitelabel delivery available for agency partners</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1 flex-shrink-0">—</span>
            <span>Limited concurrent engagements to maintain quality</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1 flex-shrink-0">—</span>
            <span>Async-first collaboration with clear ownership boundaries</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
