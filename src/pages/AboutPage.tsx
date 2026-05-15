import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-[#F9F8F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-5xl md:text-6xl font-serif text-[#2C302E] mb-8">Hi, I'm Lina.</h1>
            <div className="space-y-6 text-lg font-light text-[#5c635f] leading-relaxed">
              <p>
                I started ShineWell because I believe a clean space isn't just about aesthetics—it's about peace of mind. 
              </p>
              <p>
                We're not a faceless franchise. We're a small, dedicated team of perfectionists who genuinely care about the spaces we care for. When you invite us into your home or business, we treat it as if it were our own.
              </p>
              <p>
                My goal is simple: to give you back your time, so you can spend it on what truly matters to you. Whether that's spending more time with your family, focusing on your business, or simply enjoying a quiet weekend, we're here to make that possible.
              </p>
              <p>
                Every member of our team is carefully selected, thoroughly trained, and shares our core values of honesty, meticulousness, and respect. We don't just clean; we care.
              </p>
            </div>
            <div className="mt-12">
              <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2079&auto=format&fit=crop" alt="Lina's signature" className="h-12 opacity-80 mix-blend-multiply grayscale" referrerPolicy="no-referrer" />
              <p className="mt-2 text-sm font-medium tracking-widest uppercase text-[#4A5D4E]">Founder, ShineWell</p>
            </div>
            
            <div className="mt-12 pt-12 border-t border-[#e8e5df]">
              <Link 
                to="/booking"
                className="inline-flex items-center gap-2 bg-[#C86B53] hover:bg-[#b55e47] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                Book a Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://i.ibb.co/s9BnKg2h/download.jpg" 
                alt="Lina, Founder of ShineWell" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
