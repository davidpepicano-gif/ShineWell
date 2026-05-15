import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HowItWorksPage() {
  const steps = [
    {
      step: "01",
      title: "Reach Out",
      desc: "Tell us a bit about your space and what you're looking for. No pressure, just a friendly chat. You can call us directly or fill out our online estimate form.",
      image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      step: "02",
      title: "Get a Custom Plan",
      desc: "We'll provide a clear, upfront estimate based on your specific needs. No hidden fees, no surprises. We tailor our checklist to your priorities.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop"
    },
    {
      step: "03",
      title: "Enjoy Your Space",
      desc: "Come home to that 'just cleaned' feeling. We handle the mess, you relax. Our professional team ensures every detail is perfect.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-[#2C302E] mb-6"
          >
            How It Works
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#5c635f] font-light"
          >
            Getting your space cleaned shouldn't be a chore. We've made our process as simple, transparent, and stress-free as possible.
          </motion.p>
        </div>

        <div className="space-y-24">
          {steps.map((item, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-20`}>
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 !== 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 !== 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 flex flex-col"
              >
                <div className="w-20 h-20 rounded-full bg-[#F9F8F6] flex items-center justify-center text-2xl font-serif text-[#4A5D4E] mb-6 border border-[#e8e5df]">
                  {item.step}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#2C302E] mb-6">{item.title}</h2>
                <p className="text-lg text-[#5c635f] font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center bg-[#4A5D4E] rounded-[3rem] p-12 md:p-20 text-white"
        >
          <h2 className="text-4xl font-serif mb-6">Ready for a cleaner space?</h2>
          <p className="text-[#e8ede9] font-light text-lg mb-10 max-w-2xl mx-auto">
            Take the first step towards a spotless home or office. Request your free, no-obligation estimate today.
          </p>
          <Link 
            to="/booking"
            className="inline-flex items-center gap-2 bg-[#C86B53] hover:bg-[#b55e47] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:-translate-y-1"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
