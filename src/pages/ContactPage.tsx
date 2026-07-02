import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-14 bg-[#F9F8F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-[#2C302E] mb-6">Contact Us</h1>
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#e8e5df] text-left shadow-sm mb-6">
            <p className="text-base md:text-lg text-[#2C302E] leading-relaxed font-light">
              <strong>ShineWell</strong> makes contacting Overland Park and Kansas City's leading professional cleaning service simple and hassle-free. Whether you need an office deep clean or routine home care, you can reach us by calling (913) 325-1400 or filling out our quick online form to request a free estimate directly from our local, friendly team.
            </p>
          </div>
          <p className="text-lg text-[#5c635f] font-light">
            We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-[#e8e5df] flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 bg-[#F9F8F6] rounded-full flex items-center justify-center text-[#4A5D4E] mb-6">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-medium text-[#2C302E] mb-2">Phone</h3>
            <a href="tel:9133251400" className="text-[#C86B53] hover:underline font-semibold text-lg">(913) 325-1400</a>
            <p className="text-sm text-[#a3aba6] mt-2">Mon to Sat, 8am to 6pm</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-[#e8e5df] flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 bg-[#F9F8F6] rounded-full flex items-center justify-center text-[#4A5D4E] mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-medium text-[#2C302E] mb-2">Email</h3>
            <p className="text-[#5c635f] font-light">lina.swcleaning@gmail.com</p>
            <p className="text-sm text-[#a3aba6] mt-2">24/7 Support</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-[#e8e5df] flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 bg-[#F9F8F6] rounded-full flex items-center justify-center text-[#4A5D4E] mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-medium text-[#2C302E] mb-2">Service Area</h3>
            <p className="text-[#5c635f] font-light text-sm">Overland Park & Greater KC Metro</p>
            <p className="text-sm text-[#a3aba6] mt-2">Service-Area Business (No Public Lobby)</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-[#e8e5df] flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 bg-[#F9F8F6] rounded-full flex items-center justify-center text-[#4A5D4E] mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-medium text-[#2C302E] mb-2">Hours</h3>
            <p className="text-[#5c635f] font-light">Mon to Sat: 8am to 6pm</p>
            <p className="text-sm text-[#a3aba6] mt-2">Sunday: Closed</p>
          </motion.div>
        </div>

        {/* Centered GHL Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-[#e8e5df]"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-[#2C302E] mb-4">How can you request a free estimate?</h2>
            <p className="text-[#5c635f] font-light">
              Fill out the form below or call us directly at{' '}
              <a href="tel:9133251400" className="text-[#C86B53] hover:underline font-semibold">
                (913) 325-1400
              </a>{' '}
              to get a free estimate immediately.
            </p>
          </div>
          
          <div className="w-full min-h-[500px] rounded-2xl overflow-hidden border border-[#e8e5df] bg-white flex items-center justify-center">
            <iframe
              src="https://links.somosoverflow.com/widget/form/wCd628Bbw6Kdx6T546Nk"
              style={{ width: '100%', height: '100%', minHeight: '500px', border: 'none', overflow: 'hidden' }}
              scrolling="no"
              id="inline-wCd628Bbw6Kdx6T546Nk_contact" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Request a Free Estimate"
              data-height="500"
              data-layout-iframe-id="inline-wCd628Bbw6Kdx6T546Nk_contact"
              data-form-id="wCd628Bbw6Kdx6T546Nk"
              title="Request a Free Estimate"
            >
            </iframe>
            <script src="https://links.somosoverflow.com/js/form_embed.js" type="text/javascript"></script>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
