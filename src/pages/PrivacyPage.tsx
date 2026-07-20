import { motion } from 'motion/react';
import { ShieldCheck, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div id="privacy-page" className="pt-24 pb-16 bg-[#F9F8F6] min-h-screen">
      <div id="privacy-container" className="max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Navigation back */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-[#607564] hover:text-[#2C302E] font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Header Block */}
        <motion.div
          id="privacy-header"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 border-b border-[#e8e5df] pb-8"
        >
          <span className="text-[#607564] uppercase tracking-widest text-xs font-mono font-bold block mb-2">Legal Information</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2C302E] leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#5c635f] font-light">
            Last Updated: July 1, 2026 • ShineWell Commercial and Home Cleaning Services
          </p>
        </motion.div>

        {/* Content body */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8 text-[#2C302E] font-light leading-relaxed text-base md:text-lg"
        >
          <div className="bg-white p-6 rounded-2xl border border-[#e8e5df] shadow-sm flex items-start gap-4 mb-8">
            <ShieldCheck className="w-10 h-10 text-[#C86B53] shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-serif font-semibold mb-1">Your Privacy Matters</h2>
              <p className="text-sm text-[#5c635f] leading-normal">
                At ShineWell, trust is our primary asset. We treat your personal details, billing data, and home environment with the utmost confidentiality, discretion, and professional-level security.
              </p>
            </div>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-serif font-medium text-[#2C302E]">1. Information We Collect</h2>
            <p className="text-[#5c635f]">
              We only collect information that is strictly necessary to estimate, schedule, invoice, and perform cleaning services for your home or business. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base">
              <li><strong>Contact Information</strong>: Your name, phone number, email address, and physical service address.</li>
              <li><strong>Property Details</strong>: Square footage, bedroom/bathroom counts, pet presence, and specific custom cleaning instructions.</li>
              <li><strong>Billing &amp; Transaction Info</strong>: Credit card or banking details used to complete secure payments (processed entirely via PCI-compliant Stripe; we never store your full financial credentials locally).</li>
              <li><strong>Usage Information</strong>: Browser details and standard website analytics gathered to optimize our website loading and experience.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-serif font-medium text-[#2C302E]">2. How We Use Your Information</h2>
            <p className="text-[#5c635f]">
              We rely on your data to provide exceptional cleaning and client-relations management:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base">
              <li>Providing highly accurate price quotes and custom estimates.</li>
              <li>Sending appointment confirmations, reminders, arrival notifications, and follow-up satisfaction surveys.</li>
              <li>Processing invoices, payments, and deposits.</li>
              <li>Tailoring our eco-friendly cleaning methods to match specific sensitivities or pet-safety constraints in your home.</li>
              <li>Complying with necessary legal records, insurance audits, and tax obligations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-serif font-medium text-[#2C302E]">3. Data Sharing &amp; Third Parties</h2>
            <p className="text-[#5c635f]">
              <strong>We never sell, rent, lease, or trade your personal information</strong> with external marketing brokers or third parties. We share data only in the following restricted scenarios:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base">
              <li><strong>Payment Processors</strong>: Your financial information is securely processed via Stripe.</li>
              <li><strong>Service Crews</strong>: Your cleaning team is provided only with the service address, property characteristics, and specific custom instructions necessary to perform the clean.</li>
              <li><strong>Legal Compliance</strong>: If required by law, subpoena, or to protect the safety and rights of ShineWell, our employees, or our clients.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-serif font-medium text-[#2C302E]">4. Data Security</h2>
            <p className="text-[#5c635f]">
              We take information safety seriously. Our systems employ modern industry practices—including SSL encryption, secure API integrations, and tokenized payment networks—to defend your details. In the physical world, our trusted, background-checked crews are rigorously trained to respect client privacy, secure keys, and protect private physical documents in the home or office.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-serif font-medium text-[#2C302E]">5. Your Rights &amp; Choices</h2>
            <p className="text-[#5c635f]">
              You hold complete control over your details:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base">
              <li>You may opt-out of promotional emails at any time by clicking "unsubscribe" or emailing us directly.</li>
              <li>You may request access to, correction of, or complete deletion of your personal client records, provided there are no active outstanding balances, open insurance claims, or legal holding requirements.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-3xl border border-[#e8e5df] space-y-4">
            <h2 className="text-xl md:text-2xl font-serif font-medium text-[#2C302E]">Contact Our Privacy Officer</h2>
            <p className="text-[#5c635f] text-sm md:text-base">
              For questions regarding this Privacy Policy or to update your personal details, contact ShineWell directly:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C86B53]" />
                <a href="mailto:lina.swcleaning@gmail.com" className="hover:underline text-[#2C302E]">lina.swcleaning@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C86B53]" />
                <a href="tel:9133251400" className="hover:underline text-[#2C302E]">(913) 325-1400</a>
              </div>
              <div className="flex items-center gap-3 sm:col-span-2">
                <MapPin className="w-5 h-5 text-[#C86B53]" />
                <span className="text-[#5c635f]">Overland Park, KS &amp; Greater Kansas City Metro</span>
              </div>
            </div>
          </section>
        </motion.div>

      </div>
    </div>
  );
}
