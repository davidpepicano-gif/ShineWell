import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Star, ShieldCheck, CheckCircle, UserCheck, Sparkles } from 'lucide-react';
import storyImgMobile from '../assets/images/regenerated_image_1783363212830_mobile.webp';
import storyImgDesktop from '../assets/images/regenerated_image_1783363212830_desktop.webp';
import storyImgFallback from '../assets/images/regenerated_image_1783363212830.png';

export default function AboutPage() {
  const trustBadges = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#C86B53]" />,
      title: "$2M Insured & Bonded",
      desc: "We carry comprehensive $2 Million general liability and bonding protection to ensure absolute security and peace of mind for your home or business."
    },
    {
      icon: <UserCheck className="w-10 h-10 text-[#C86B53]" />,
      title: "100% Vetted & Background-Checked",
      desc: "Every member of our crew undergoes strict background checks, thorough vetting, and personal training under Lina's family standards."
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-[#C86B53]" />,
      title: "Satisfaction Guarantee",
      desc: "If any corner is overlooked, notify us within 24 hours. We will return immediately to re-clean the area to perfection, completely free of charge."
    }
  ];

  const testimonials = [
    {
      name: "Jessica Gilmore",
      role: "Homeowner",
      text: "ShineWell cleaning did an amazing job deep cleaning my home. I am a busy working mother of 3. I would recommend their work! My house is sparkling clean! I will be using them going forward.",
      response: "So great to meet you Jessica. We are so grateful to be able to help you not worry about cleaning your home. Our job is to clean and refresh your home so that you can be Mom to your kids."
    },
    {
      name: "David Swaters",
      role: "Commercial Client",
      text: "ShineWell Commercial Cleaning Services were top notch ! On time, service and professionalism are second to none! They go out of their way to make sure everything is done right ! Came early and stayed late to get the job done. I couldn't be happier. Thanks",
      response: "Thank you David! We were happy to help you cleaning your property! We appreciate you calling on ShineWell for your cleaning needs!"
    },
    {
      name: "Ariana Goodridge",
      role: "Homeowner",
      text: "I was going on vacation and wanted my house cleaned last minute. They came right out the next day and did absolutely amazing!! My house smelled and looked amazing I will definitely be using their service again!! They cleaned every single detail.",
      response: "Thank you for choosing ShineWell to serve you! We enjoyed meeting you and we were so happy to get your home cleaned so you can come home to a clean and refreshed space."
    },
    {
      name: "Robin Albin",
      role: "Home Seller",
      text: "I had ShineWell clean our empty house for the new buyers. They did a fantastic job! They worked so hard to make sure it was spotless. I highly recommend them!",
      response: "We love helping during move transitions! Best of luck to you and the new homeowners."
    }
  ];

  return (
    <div id="about-page" className="pt-24 pb-16 bg-[#F9F8F6] min-h-screen">
      <div id="about-container" className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Header Block */}
        <motion.div
          id="about-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#607564] uppercase tracking-widest text-sm font-semibold mb-2 block">Our Story</span>
          <h1 id="about-story-title" className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] leading-tight mb-4">
            The Family Story Behind ShineWell
          </h1>
          <p className="text-lg md:text-xl italic text-[#5c635f] font-light max-w-2xl mx-auto leading-relaxed mb-6">
            Combining Over 20 Years of Meticulous Professional Expertise with Brazilian Warmth
          </p>
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-[#e8e5df] max-w-3xl mx-auto text-center shadow-sm">
            <p className="text-base md:text-lg text-[#2C302E] leading-relaxed font-light">
              <strong>ShineWell</strong> is a fully insured, local family-owned cleaning business founded by Lina. Over 20 years of dedicated service in Overland Park and the greater Kansas City metropolitan area, we have built a reputation for perfectionism, client trust, and honest care.
            </p>
          </div>
          <div className="w-12 h-[1px] bg-[#607564] mx-auto mt-8"></div>
        </motion.div>

        {/* Narrative & Image Block */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-base md:text-lg text-[#5c635f] font-light leading-relaxed"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-[#2C302E] border-b border-[#e8e5df] pb-3">
              How did Brazilian heritage and professional nursing shape our standards?
            </h2>
            <p>
              In 2001, Lina achieved something she had worked toward for years: she graduated as a professional nurse. Nursing was a calling built around extreme precision, sanitation, and compassionate patient care. When Lina's son was born in 2003, followed shortly after by her daughter, she sought a path that would allow her to remain fully present for her family's daily childhood milestones while continuing to serve others.
            </p>
            <p>
              Drawing on the deep cultural warmth of her Brazilian heritage—where the neatness of a home is a beautiful expression of respect and active care (<em>cuidado</em>)—Lina recognized that professional cleaning is a profound form of daily restorative service. She founded ShineWell with a commitment to clinical-level sanitization, honest family work ethics, and meticulously polished living environments.
            </p>
            <p>
              Today, with <strong>over 20 years of hands-on expertise</strong>, ShineWell has grown from a personal project helping immediate neighbors in Overland Park into the area's most reliable premium cleaning team. We remain entirely local, family-owned, and devoted to the same fundamental values of trust, reliability, and precision detail.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div id="about-image-wrapper" className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500 bg-[#e8e5df] border-4 border-white">
              <picture>
                <source media="(max-width: 640px)" srcSet={storyImgMobile} type="image/webp" />
                <source media="(min-width: 641px)" srcSet={storyImgDesktop} type="image/webp" />
                <img 
                  id="about-hero-image"
                  src={storyImgDesktop} 
                  alt="ShineWell founder Lina" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                />
              </picture>
            </div>
            <p className="text-center text-xs font-mono text-[#607564] mt-4 uppercase tracking-widest">
              Founder Lina &amp; the ShineWell Family
            </p>
          </motion.div>
        </div>

        {/* Trust signals & badges section */}
        <div className="bg-white rounded-[2.5rem] border border-[#e8e5df] p-8 md:p-12 mb-20 shadow-sm">
          <div className="text-center mb-10">
            <span className="text-[#C86B53] uppercase tracking-widest text-xs font-mono font-bold block mb-2">Our Guarantees</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C302E]">What trust signals protect your ShineWell cleaning service?</h2>
            <div className="w-16 h-1 bg-[#CAD4CD] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trustBadges.map((badge, idx) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#F9F8F6] p-6 md:p-8 rounded-2xl border border-[#e8e5df] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="mb-4 bg-white p-4 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {badge.icon}
                </div>
                <h3 className="text-lg md:text-xl font-serif text-[#2C302E] mb-3">{badge.title}</h3>
                <p className="text-sm md:text-base text-[#5c635f] font-light leading-relaxed">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Real Attributed Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="text-[#607564] uppercase tracking-widest text-xs font-mono font-bold block mb-2">Google Reviews</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C302E]">What real Overland Park and Kansas City clients say about our service?</h2>
            <div className="w-16 h-1 bg-[#CAD4CD] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {testimonials.map((test, idx) => (
              <motion.div
                key={test.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-[#e8e5df] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-[#FBBC05]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                    <span className="text-xs font-mono font-medium text-[#2C302E] ml-2">5.0 Star Rated</span>
                  </div>
                  <p className="text-base md:text-lg text-[#2C302E] font-light italic leading-relaxed mb-6">
                    "{test.text}"
                  </p>
                </div>
                
                <div className="border-t border-[#f0ede6] pt-4 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#607564] rounded-full flex items-center justify-center text-white font-serif text-lg">
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#2C302E]">{test.name}</p>
                      <p className="text-xs text-[#607564] font-mono">{test.role} • Google Review</p>
                    </div>
                  </div>
                  {test.response && (
                    <div className="mt-4 bg-[#F9F8F6] p-4 rounded-xl text-xs md:text-sm text-[#5c635f] border-l-2 border-[#C86B53]">
                      <span className="font-semibold text-[#2C302E] block mb-1">Response from Owner Lina:</span>
                      "{test.response}"
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Card / Outro Sign-off */}
        <div className="bg-[#f0ede6] border border-[#e8e5df] rounded-2xl p-8 text-center space-y-4 max-w-2xl mx-auto shadow-sm">
          <Heart className="w-6 h-6 text-[#C86B53] mx-auto animate-pulse" />
          <h3 className="text-2xl font-serif text-[#2C302E]">ShineWell Commercial &amp; Home Cleaning</h3>
          <p className="text-[#607564] font-medium tracking-wide text-sm font-mono">EST. 2004 • OVERLAND PARK &amp; GREATER KC METRO</p>
          <p className="italic text-[#5c635f] text-base md:text-lg">
            "We treat your property as our own, protecting what matters most to you with background-checked crews and eco-friendly standards."
          </p>
        </div>

        {/* CTA Link */}
        <div id="about-cta-container" className="text-center pt-10">
          <Link 
            id="about-booking-link"
            to="/booking"
            className="inline-flex items-center gap-2 bg-[#C86B53] hover:bg-[#b55e47] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:-translate-y-1"
          >
            Get a Free Estimate
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
