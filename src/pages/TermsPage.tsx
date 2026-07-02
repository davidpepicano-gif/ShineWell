import { motion } from 'motion/react';
import { Scale, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <div id="terms-page" className="pt-24 pb-16 bg-[#F9F8F6] min-h-screen">
      <div id="terms-container" className="max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Navigation back */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-[#607564] hover:text-[#2C302E] font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Header Block */}
        <motion.div
          id="terms-header"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 border-b border-[#e8e5df] pb-8"
        >
          <span className="text-[#607564] uppercase tracking-widest text-xs font-mono font-bold block mb-2">Legal Terms</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2C302E] leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-[#5c635f] font-light">
            Last Updated: July 1, 2026 • ShineWell Commercial &amp; Home Cleaning Services
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
            <Scale className="w-10 h-10 text-[#C86B53] shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-serif font-semibold mb-1">Agreement of Service</h2>
              <p className="text-sm text-[#5c635f] leading-normal">
                By booking, scheduling, or receiving commercial or residential cleaning services from ShineWell, you agree to comply with and be bound by the following comprehensive terms.
              </p>
            </div>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-serif font-medium text-[#2C302E]">1. Scope of Services</h2>
            <p className="text-[#5c635f]">
              ShineWell agrees to perform the specific cleaning service package selected by the client during online booking or defined in a custom estimate (e.g., Routine Housekeeping, Deep Home Cleaning, Move-In/Move-Out, Light Commercial, or Specialized Treatments). Any add-on tasks (such as deep cleaning inside oven/refrigerator, organizing, or trash hauling) must be requested in advance and may incur additional charges.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-serif font-medium text-[#2C302E]">2. Estimation &amp; Pricing Policies</h2>
            <p className="text-[#5c635f]">
              Online and verbal estimates are initial approximations based on typical service times and standard client-described property sizes/conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base">
              <li><strong>Condition Adjustments</strong>: If our crew arrives and finds extreme clutter, extra heavy soil, debris, or pet conditions beyond the scope of a standard clean, we will contact you immediately to adjust the estimated hours and service price before beginning.</li>
              <li><strong>Initial Cleans</strong>: First-time visits or homes that have not been professionally cleaned in over 30 days require a Deep Clean rate to restore the home to a baseline level before routine maintenance pricing can apply.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-serif font-medium text-[#2C302E]">3. Scheduling &amp; Cancellation Policy</h2>
            <p className="text-[#5c635f]">
              To maintain reliable schedules for our background-checked crews and maintain our high standards of service:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base">
              <li><strong>24-Hour Notice</strong>: We require at least <strong>24 hours' notice</strong> for any cancellations or schedule modifications.</li>
              <li><strong>Late Fee</strong>: Cancellations or schedule changes made with less than 24 hours' notice, or lockout instances (where our crew arrives but cannot gain entry to the property), are subject to a late fee to offset crew transit and scheduling loss.</li>
              <li><strong>Key &amp; Access</strong>: Clients must provide reliable access details (key, smart-lock code, garage entry, or being physically present). All keys held by ShineWell are kept in secure safe storage when not in use.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-serif font-medium text-[#2C302E]">4. Satisfaction Guarantee</h2>
            <p className="text-[#5c635f]">
              We stand firmly behind the excellence of our cleaning. If you are ever unsatisfied with any portion of your service:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base">
              <li>You must notify us within <strong>24 hours</strong> of service completion.</li>
              <li>Our team will return to re-clean the specific missed area to your full satisfaction at <strong>no extra cost</strong>.</li>
              <li>Because we are fully committed to correcting any errors, we do not issue monetary refunds or credits.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-serif font-medium text-[#2C302E]">5. Liability &amp; Damage Protection</h2>
            <p className="text-[#5c635f]">
              ShineWell is fully <strong>bonded and carries a $2,000,000 General Liability insurance policy</strong> to defend your assets.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base">
              <li><strong>Report Window</strong>: Any physical property damage caused by our crew must be reported in writing within 24 hours of the cleaning session.</li>
              <li><strong>Limitations of Liability</strong>: We do not accept liability for damage to unstable, improperly mounted, or fragile items (such as unsecured shelving, loose plaster, or extremely delicate antiques/heirlooms) unless specifically warned in writing before the clean. We recommend moving irreplaceable items to safe storage during cleaning.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-serif font-medium text-[#2C302E]">6. Payment Terms</h2>
            <p className="text-[#5c635f]">
              Payments are processed securely online via Stripe:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base">
              <li>Payment is due immediately upon receipt of invoice, or on the day of service for scheduled recurring visits.</li>
              <li>A pre-authorization or deposit may be required to secure bookings for deep cleans, move-out cleans, or post-construction detailing.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-3xl border border-[#e8e5df] space-y-4">
            <h2 className="text-xl md:text-2xl font-serif font-medium text-[#2C302E]">Need clarification on our terms?</h2>
            <p className="text-[#5c635f] text-sm md:text-base">
              Please reach out directly. We are happy to clarify any item or adjust our instructions to match your comfort:
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
