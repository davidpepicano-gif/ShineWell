import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div id="about-page" className="pt-32 pb-24 bg-[#F9F8F6] min-h-screen">
      <div id="about-container" className="max-w-7xl mx-auto px-6 lg:px-12">
        <div id="about-grid" className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            id="about-story-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h1 id="about-story-title" className="text-5xl md:text-6xl font-serif text-[#2C302E] mb-8">Our Story</h1>
            <div className="space-y-6 text-lg font-light text-[#5c635f] leading-relaxed">
              <p>
                Hi, I'm Lina, and I started Shine Well with a simple belief: that a clean environment is the foundation for a peaceful life. 
              </p>
              <p>
                What began as a small passion for helping neighbors reclaim their weekends has grown into Kansas City's most dedicated cleaning team. We aren't just another cleaning company; we're a group of people who genuinely love the satisfaction of a job well done and the smile on a client's face when they walk into a transformed space.
              </p>
              <p>
                We've built our reputation on three pillars: **honesty**, **meticulousness**, and **respect**. Every home we enter is treated with the same care we'd give our own family's. We understand that your home is your sanctuary, and your business is your livelihood — and we treat both with the professional integrity they deserve.
              </p>
              <p>
                Today, our team of background-checked and highly trained professionals serves the entire Kansas City metro area, from commercial office buildings to cozy family homes. We use eco-friendly products because we care about the health of your family, your pets, and our planet.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-xl font-serif text-[#2C302E]">Lina</span>
                <p className="text-sm font-medium tracking-widest uppercase text-[#607564]">Founder, Shine Well Cleaning Services</p>
              </div>
            </div>
            
            <div id="about-cta-container" className="mt-12 pt-12 border-t border-[#e8e5df]">
              <Link 
                id="about-booking-link"
                to="/booking"
                className="inline-flex items-center gap-2 bg-[#C86B53] hover:bg-[#b55e47] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            id="about-image-motion-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div id="about-image-wrapper" className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                id="about-hero-image"
                src="/src/assets/images/regenerated_image_1778882241066.webp" 
                alt="Shine Well professional cleaning service story" 
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
