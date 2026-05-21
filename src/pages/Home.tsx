import { useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { 
  Sparkles, 
  Home as HomeIcon, 
  Briefcase, 
  Check, 
  Star, 
  Quote,
  ArrowRight,
  Building2,
  Droplets,
  Paintbrush,
  Phone,
  Clock,
  Video,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);
  const navigate = useNavigate();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 z-10"
            >
              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-serif text-[#2C302E] leading-[1.1] mb-6">
                Kansas City's Most Trusted <span className="text-[#607564] italic">Office & Home Cleaning Service</span>
              </h1>
              <p className="text-lg md:text-xl text-[#5c635f] mb-10 max-w-lg leading-relaxed font-light">
                Shine Well delivers spotless results for homes, apartments, offices, and short term rentals across Kansas City, MO. Fully insured, background checked, and eco friendly — every time.
              </p>
              
              <div className="flex flex-col gap-8">
                {/* GHL Booking Widget */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-[#e8e5df] relative overflow-hidden max-w-[600px] w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-serif text-[#2C302E]">Book Your Cleaning</h3>
                  </div>
                  <div className="w-full min-h-[500px] rounded-xl overflow-hidden border border-[#e8e5df] bg-[#F9F8F6] flex items-center justify-center relative">
                    <iframe
                      src="https://links.somosoverflow.com/widget/form/wCd628Bbw6Kdx6T546Nk"
                      style={{ width: '100%', height: '100%', minHeight: '500px', border: 'none', overflow: 'hidden' }}
                      scrolling="no"
                      id="inline-wCd628Bbw6Kdx6T546Nk" 
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Book Your Cleaning"
                      data-height="500"
                      data-layout-iframe-id="inline-wCd628Bbw6Kdx6T546Nk"
                      data-form-id="wCd628Bbw6Kdx6T546Nk"
                      title="Book Your Cleaning"
                    >
                    </iframe>
                    <script src="https://links.somosoverflow.com/js/form_embed.js" type="text/javascript"></script>
                  </div>
                </div>

                {/* Call Now Button */}
                <div className="flex items-center">
                  <a 
                    href="tel:+19133251400" 
                    className="text-[#607564] hover:text-[#C86B53] font-medium text-lg transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Or call us directly: +1 913 325 1400
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] shadow-2xl bg-white border border-[#e8e5df] flex items-center justify-center p-6 sm:p-12 hover:shadow-3xl transition-shadow duration-500">
                <img
                  src="/logo.png"
                  alt="Shine Well Commercial & Home Cleaning Services Logo"
                  className="max-w-[90%] max-h-[90%] w-auto h-auto object-contain transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex text-[#C86B53]">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                </div>
                <p className="font-serif text-[#2C302E] leading-snug">"It feels like a brand new house every time they leave."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Teaser Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#2C302E] mb-6">Professional Cleaning Services Tailored for Kansas City Businesses & Homes</h2>
              <p className="text-lg text-[#5c635f] max-w-2xl font-light">
                Whether you need a recurring office clean, a one time deep scrub, or a move out reset in Kansas City, Shine Well has a plan that fits your schedule and budget.
              </p>
            </div>
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 text-[#607564] font-medium hover:text-[#C86B53] transition-colors whitespace-nowrap"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <Building2 className="h-7 w-7 text-[#607564]" strokeWidth={1.5} />,
                title: "Business Cleaning",
                desc: "Elevate your workspace. We provide thorough, professional cleaning for offices and commercial spaces to ensure a healthy environment.",
                path: "/services/commercial-deep-cleaning"
              },
              {
                icon: <Sparkles className="h-7 w-7 text-[#607564]" strokeWidth={1.5} />,
                title: "Deep Cleaning",
                desc: "For when things have gotten a little out of hand. We get into the forgotten corners, baseboards, and behind the appliances.",
                path: "/services/deep-dives"
              },
              {
                icon: <HomeIcon className="h-7 w-7 text-[#607564]" strokeWidth={1.5} />,
                title: "Routine House Cleaning",
                desc: "Keeping your sanctuary fresh, week after week. We learn your preferences and treat your home with the utmost respect.",
                path: "/services/routine-housekeeping"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="bg-[#F9F8F6] rounded-3xl p-10 hover:bg-[#f2f0ea] transition-colors group"
              >
                <Link to={service.path} className="block h-full">
                  <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-[#2C302E] mb-4 group-hover:text-[#C86B53] transition-colors">{service.title}</h3>
                  <p className="text-[#5c635f] leading-relaxed font-light mb-6">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-[#607564] font-medium text-sm group-hover:text-[#C86B53] transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C302E] mb-6">What's Included in Every Shine Well Clean</h2>
            <p className="text-lg text-[#5c635f] font-light max-w-2xl mx-auto">
              We don't cut corners, we clean them. Every service comes with our commitment to quality, eco friendly products, and a meticulous attention to detail.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Vetted Professionals", desc: "Background checked, trained, and insured cleaners you can trust." },
              { title: "Eco Friendly Products", desc: "Safe for your family, pets, and the environment." },
              { title: "Custom Checklists", desc: "We clean according to your specific priorities and needs." },
              { title: "Satisfaction Guarantee", desc: "Not happy? Let us know within 24 hours and we'll make it right." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-[#e8e5df] text-center"
              >
                <div className="w-12 h-12 bg-[#607564]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-6 h-6 text-[#607564]" />
                </div>
                <h3 className="text-xl font-medium text-[#2C302E] mb-3">{item.title}</h3>
                <p className="text-[#5c635f] font-light text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Our Story Teaser */}
      <section className="py-24 bg-[#8BA192] text-[#2C302E] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#2C302E]">Our Kansas City Story: <span className="italic font-light">More Than Just a Clean.</span></h2>
              <div className="space-y-6 text-lg font-light text-[#2C302E]/80 leading-relaxed mb-10">
                <p>
                  I started Shine Well with a simple belief: that a clean environment is the foundation for a peaceful life. What began as a personal passion for helping neighbors in Kansas City reclaim their weekends has grown into the city's most dedicated cleaning team.
                </p>
                <p>
                  We aren't a faceless franchise. We're a local team of perfectionists who genuinely love the satisfaction of a job well done. Whether it's a corporate office or a family home, we treat every space as if it were our own—with honesty, meticulousness, and respect.
                </p>
              </div>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 bg-white text-[#8BA192] px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                Read Full Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" 
                  alt="Shine Well professional cleaning team at work" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C302E]/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center mb-16 gap-8">
            <div className="max-w-2xl flex flex-col items-center">
              {/* Google Badge */}
              <a 
                href="https://share.google/3oMRqAPyjGZaUcAO6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-6 bg-[#F9F8F6] px-5 py-2.5 rounded-full border border-[#e8e5df] hover:bg-white hover:shadow-md transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="flex text-[#FBBC05]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="text-sm font-medium text-[#2C302E]">5.0 on Google</span>
              </a>
              <h2 className="text-4xl md:text-5xl font-serif text-[#2C302E] mb-6">What Kansas City Businesses & Homeowners Are Saying</h2>
              <p className="text-lg text-[#5c635f] font-light">
                Don't just take our word for it. Here's what our commercial and residential clients have to say about the ShineWell experience.
              </p>
            </div>
            <div className="flex gap-4">
              <button onClick={scrollPrev} className="w-12 h-12 rounded-full border border-[#e8e5df] flex items-center justify-center text-[#607564] hover:bg-[#F9F8F6] transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={scrollNext} className="w-12 h-12 rounded-full border border-[#e8e5df] flex items-center justify-center text-[#607564] hover:bg-[#F9F8F6] transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden pb-12 -mx-6 px-6 lg:-mx-12 lg:px-12" ref={emblaRef}>
            <div className="flex gap-6 items-stretch">
              {[
                {
                  name: "Mary",
                  text: "They did an incredible job helping my son get his place cleaned up and back in order. The team is so compassionate and hardworking. Highly recommend!",
                  rating: 5,
                  ownerResponse: "Thank You Mary, Our Hearts Are Full After Helping Your Son Get On His Feet Again! This Was A Blessing For Us As It Was For You! God Bless!"
                },
                {
                  name: "David Swaters",
                  text: "Shine Well Commercial Cleaning Services were top notch ! On time , service and professionalism are second to none! They go out of their way to make sure everything is done right ! Came early and stayed late to get the job done. I couldn’t be happier. Thanks",
                  rating: 5,
                  ownerResponse: "Thank you David! We were Happy to help you cleaning your property! We Appreciate you calling on Shine Well For Your Cleaning Needs!"
                },
                {
                  name: "Ariana Goodridge",
                  text: "I was going on vacation and wanted my house cleaned last minute. They came right out the next day and did absolutely amazing!! My house smelled and looked amazing I will definitely be using their service again!! They cleaned every single detail.",
                  rating: 5,
                  ownerResponse: "Thank you for Choosing Shine Well Cleaning Services to Serve You! We enjoyed meeting you and we were so happy to get your home cleaned so you can come home to a clean and refreshed home. Enjoy your vacation! - Lina :-)"
                },
                {
                  name: "Jessica Gilmore",
                  text: "Shine well cleaning did an amazing job deep cleaning my home. I am a busy working mother of 3. I would recommend there work! My house is sparkling clean! I will be using them going forward",
                  rating: 5,
                  ownerResponse: "So great to meet you Jessica. We are so Grateful to be able to help you not worry about cleaning your home. Our job is to Clean & Refresh Your Home so that you can be Mom to your kids. We're looking forward to cleaning your home again! Blessings! - Lina :-)"
                },
                {
                  name: "Morgan Gordon",
                  text: "Nina and her helpers did an absolutely amazing job cleaning my home. They were professional and took their time. I am going to hire her again and you should hire her too.",
                  rating: 5
                },
                {
                  name: "Robin Albin",
                  text: "I had Shine Well clean our empty house for the new buyers. They did a fantastic job! They worked so hard to make sure it was spotless. I highly recommend them!",
                  rating: 5
                }
              ].map((review, idx) => (
                <div 
                  key={idx}
                  className="flex-[0_0_85vw] sm:flex-[0_0_350px] md:flex-[0_0_400px] min-w-0"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="h-full bg-[#F9F8F6] p-8 rounded-3xl flex flex-col items-center text-center relative group hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-[#e8e5df]"
                  >
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <div className="flex text-[#FBBC05]">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                      </div>
                    </div>
                    
                    <p className="text-[#2C302E] mb-8 text-[15px] leading-relaxed flex-grow font-light italic">"{review.text}"</p>
                    
                    <div className="flex flex-col items-center gap-3 mt-auto">
                      <div className="w-12 h-12 bg-[#607564] rounded-full flex items-center justify-center text-white font-serif text-xl">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-[#2C302E]">{review.name}</p>
                        <div className="flex items-center justify-center gap-1 mt-1">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          <span className="text-xs text-[#5c635f]">Google Review</span>
                        </div>
                      </div>
                    </div>

                    {review.ownerResponse && (
                      <div className="mt-6 pt-6 border-t border-[#e8e5df] w-full text-left">
                        <p className="text-xs font-bold text-[#607564] uppercase tracking-wider mb-2">Lina's Response</p>
                        <p className="text-sm text-[#5c635f] font-light leading-relaxed">
                          {review.ownerResponse}
                        </p>
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#8BA192] text-[#2C302E]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#2C302E]">Frequently Asked Questions</h2>
            <p className="text-lg text-[#2C302E]/80 font-light">
              Everything you need to know about our cleaning services in Kansas City.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How much does cleaning cost in Kansas City?",
                a: "The cost vary based on the size of your space, the type of cleaning (routine, deep, move out), and the frequency of service. Contact us for a free, personalized estimate tailored to your specific commercial or residential needs."
              },
              {
                q: "Do you offer same day cleaning in Kansas City?",
                a: "While we recommend booking in advance to secure your preferred time, we do our best to accommodate same day or last minute cleaning requests in Kansas City when our schedule allows. Please call us directly for urgent needs."
              },
              {
                q: "Are your cleaners background checked?",
                a: "Yes, absolutely. Every member of the Shine Well team undergoes a thorough background check before they are hired. We only send trusted, reliable professionals into your property."
              },
              {
                q: "Do you bring your own cleaning supplies?",
                a: "Yes! We bring our own professional-grade, eco-friendly cleaning supplies and equipment. If you have specific products you'd prefer us to use on certain surfaces, just let us know."
              },
              {
                q: "Do you clean Airbnb and short term rentals in Kansas City?",
                a: "Yes, we specialize in turnover cleaning for Airbnb and short term rentals across Kansas City. We ensure your property is spotless, sanitized, and guest ready between every stay."
              },
              {
                q: "What is included in a deep cleaning?",
                a: "A deep clean is a comprehensive, top to bottom service. It includes everything in our standard clean, plus detailed tasks like hand wiping baseboards, cleaning inside window sills, wiping down ceiling fans, and scrubbing grout lines."
              }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#718876] p-8 rounded-3xl border border-white/20 hover:border-white/40 transition-colors shadow-sm"
              >
                <h3 className="text-xl font-medium mb-4 text-white">{faq.q}</h3>
                <p className="text-white/90 font-light leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 bg-[#F9F8F6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C302E] mb-6">Experience the ShineWell Difference</h2>
            <p className="text-lg text-[#5c635f] font-light mb-10 max-w-2xl mx-auto">
              Ready to reclaim your time? Book your professional cleaning service today and let us take care of the rest.
            </p>
            <Link 
              to="/booking"
              className="inline-flex items-center gap-2 bg-[#607564] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:bg-[#526356] hover:shadow-xl hover:-translate-y-1"
            >
              Book Your Cleaning
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
