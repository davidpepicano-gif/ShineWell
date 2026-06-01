import { motion } from 'motion/react';

export default function BookingPage() {
  return (
    <div className="pt-24 pb-14 bg-[#F9F8F6] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-[#2C302E] mb-4">Book Your Cleaning</h1>
          <p className="text-lg text-[#5c635f] font-light">
            Select a time that works for you. We'll confirm your appointment shortly.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[2.5rem] p-4 md:p-8 shadow-sm border border-[#e8e5df] min-h-[800px] flex items-center justify-center relative overflow-hidden"
        >
          <div className="w-full h-full min-h-[800px]">
            <iframe
              src="https://links.somosoverflow.com/widget/service-menu/6a07b8ccd950f271fd495202"
              style={{ width: '100%', height: '100%', minHeight: '800px', border: 'none', overflow: 'auto' }}
              scrolling="auto"
              id="6a07b8ccd950f271fd495202_service_menu"
              title="Book Your Cleaning"
            ></iframe>
            <script src="https://links.somosoverflow.com/js/form_embed.js" type="text/javascript"></script>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
