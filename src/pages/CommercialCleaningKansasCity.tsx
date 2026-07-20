import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  UserCheck, 
  CheckCircle, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Briefcase, 
  Check, 
  ChevronDown, 
  Building2, 
  Activity, 
  ShoppingBag, 
  Scissors, 
  Compass, 
  Hammer,
  DollarSign
} from 'lucide-react';

export default function CommercialCleaningKansasCity() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Commercial Cleaning Services in Kansas City | ShineWell";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Reliable commercial & office cleaning across the Kansas City metro. Fully insured, background-checked crews, flexible schedules, free walkthrough.");
    }
  }, []);

  const whatWeClean = [
    {
      icon: <Building2 className="w-6 h-6 text-[#607564]" />,
      title: "Offices & Corporate Suites",
      desc: "From small professional offices to multi-suite corporate floors in areas like Corporate Woods, Overland Park, and the Crossroads."
    },
    {
      icon: <Activity className="w-6 h-6 text-[#607564]" />,
      title: "Medical & Dental Offices",
      desc: "Sanitation-focused cleaning with extreme attention to clinical-level cleanliness and disinfecting high-touch surfaces."
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-[#607564]" />,
      title: "Retail & Showrooms",
      desc: "Spotless customer-facing spaces, bright floors, clean glass, and pristine entryways that welcome visitors."
    },
    {
      icon: <Scissors className="w-6 h-6 text-[#607564]" />,
      title: "Salons, Studios & Fitness",
      desc: "High-standard hygiene and fresh environments for wellness and boutique lifestyle spaces."
    },
    {
      icon: <Compass className="w-6 h-6 text-[#607564]" />,
      title: "Property Management Areas",
      desc: "Keeping apartment common areas, residential lobbies, corridors, and clubhouses immaculate."
    },
    {
      icon: <Hammer className="w-6 h-6 text-[#607564]" />,
      title: "Post-Construction Cleanup",
      desc: "Detailed dust removal and deep clean for newly built or renovated commercial environments."
    }
  ];

  const typicalScope = [
    "Trash removal and liner replacement",
    "Restrooms fully cleaned, sanitized, and restocked",
    "Break rooms and kitchens wiped, sanitized, and floors done",
    "All high-touch points disinfected — door handles, light switches, shared equipment",
    "Desks, surfaces, and reception dusted and wiped",
    "Floors vacuumed and mopped throughout",
    "Glass, entry doors, and interior windows spot-cleaned"
  ];

  const whyChooseUs = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#C86B53]" />,
      title: "Fully Insured & Bonded",
      desc: "We carry $2 million in general liability insurance, ensuring your commercial property is fully protected."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-[#C86B53]" />,
      title: "Background-Checked Crews",
      desc: "Every member of our crew is vetted and background-checked before they ever step foot inside your space."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#C86B53]" />,
      title: "Over 20 Years Locally Owned",
      desc: "A dedicated family-run KC team, not a faceless national franchise. We hold ourselves to real personal standards."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#C86B53]" />,
      title: "100% Satisfaction Guarantee",
      desc: "If any area is missed, notify us within 24 hours. We return to re-clean it immediately, completely free of charge."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#C86B53]" />,
      title: "Consistent Vetted Teams",
      desc: "We assign dedicated, trained teams to your property so they learn your specific layout, requirements, and standards."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#C86B53]" />,
      title: "Rated 5.0 on Google",
      desc: "Trusted by top local homeowners and businesses in the Kansas City metro for precision and reliability."
    }
  ];

  const faqs = [
    {
      q: "Who provides reliable recurring office cleaning in the Kansas City metro?",
      a: "ShineWell offers recurring commercial and office cleaning across the KC metro — Overland Park, Corporate Woods, the Crossroads, and beyond — with flexible nightly, weekly, or biweekly schedules, fully insured and background-checked crews, and a satisfaction guarantee."
    },
    {
      q: "Do you clean outside of business hours?",
      a: "Yes. Most commercial clients choose after-hours or early-morning cleaning so your team walks into a fresh space and is never disrupted mid-day."
    },
    {
      q: "Are you insured for commercial work?",
      a: "Yes — we carry $2 million in general liability and bonding, and all crews are background-checked."
    },
    {
      q: "What types of businesses do you clean?",
      a: "Offices, medical and dental suites, retail, salons and studios, property-management common areas, and post-construction spaces across the KC metro."
    },
    {
      q: "How is commercial cleaning priced?",
      a: "After a free walkthrough, based on square footage, space type, scope, and frequency. Recurring plans reduce the per-visit cost."
    }
  ];

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="pt-24 pb-16 bg-[#F9F8F6] min-h-screen text-[#2C302E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex gap-2 text-sm text-[#5c635f] font-light">
          <Link to="/" className="hover:text-[#607564] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-[#607564] transition-colors">Services</Link>
          <span>/</span>
          <span className="text-[#2C302E] font-normal">Commercial Cleaning</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-block bg-[#607564]/10 text-[#607564] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
              Premium Commercial Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] mb-6 leading-tight">
              Commercial Cleaning Services in Kansas City
            </h1>
            
            {/* Quick Answer Block */}
            <div className="bg-[#CAD4CD]/20 p-6 md:p-8 rounded-2xl border border-[#e8e5df] text-left shadow-sm mb-6">
              <p className="text-base md:text-lg text-[#2C302E] leading-relaxed font-light">
                <strong>Quick answer:</strong> ShineWell provides reliable commercial and office cleaning across the Kansas City metro — offices, medical and dental suites, retail, salons, and property-management spaces. We're fully insured, our crews are background-checked, and we build flexible recurring schedules (nightly, weekly, or biweekly) around your business hours, all backed by a 100% satisfaction guarantee. We serve Overland Park, Corporate Woods, the Crossroads, and the greater KC metro.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link 
                to="/booking" 
                className="bg-[#C86B53] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#b55e47] transition-all text-center flex items-center justify-center gap-2 hover:shadow-lg"
              >
                Request a Free Walkthrough
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="tel:9133251400" 
                className="border border-[#e8e5df] text-[#2C302E] bg-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-all text-center"
              >
                Call (913) 325-1400
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-[#e8e5df]">
              <img 
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop" 
                alt="Commercial and office cleaning in Kansas City" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Link Interlinking Hub */}
        <div className="bg-[#CAD4CD]/10 py-4 px-6 rounded-2xl border border-[#e8e5df]/60 mb-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm">
          <span className="font-medium text-[#5c635f]">Related Commercial Resources:</span>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/blog/how-to-choose-commercial-cleaning-company-kansas-city" 
              className="text-[#C86B53] font-medium underline hover:text-[#4A5D4E] transition-colors"
            >
              Buyer's Guide: How to Choose a KC Commercial Cleaner
            </Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link 
              to="/blog/how-to-keep-your-office-clean-and-healthy" 
              className="text-[#C86B53] font-medium underline hover:text-[#4A5D4E] transition-colors"
            >
              Office Guide: Keep Your Workplace Clean & Healthy
            </Link>
          </div>
        </div>

        {/* What We Clean Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C302E] mb-4">
              What We Clean
            </h2>
            <p className="text-lg text-[#5c635f] font-light max-w-2xl mx-auto">
              We handle the spaces your business runs in. Every corner, every surface, handled with extreme care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeClean.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white p-8 rounded-3xl border border-[#e8e5df] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#607564]/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif text-[#2C302E] mb-3">{item.title}</h3>
                <p className="text-[#5c635f] font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What's Included & Recurring Schedule Section */}
        <section className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Scope details */}
          <div className="lg:col-span-6 bg-white p-8 md:p-12 rounded-[2rem] border border-[#e8e5df] shadow-sm">
            <h2 className="text-3xl font-serif text-[#2C302E] mb-6">
              What's Included in a Commercial Clean
            </h2>
            <p className="text-[#5c635f] font-light mb-8 leading-relaxed">
              Every commercial cleaning plan is completely customized after an initial walkthrough, but a typical regular scope covers:
            </p>
            <ul className="space-y-4">
              {typicalScope.map((scope, idx) => (
                <li key={idx} className="flex gap-3 items-start text-left">
                  <div className="w-6 h-6 rounded-full bg-[#607564]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#607564]" />
                  </div>
                  <span className="text-[#2C302E] font-light leading-relaxed">{scope}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Schedulers */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-[#CAD4CD]/20 p-8 md:p-12 rounded-[2rem] border border-[#e8e5df]">
              <h2 className="text-3xl font-serif text-[#2C302E] mb-4">
                Flexible Recurring Schedules
              </h2>
              <p className="text-[#5c635f] font-light leading-relaxed mb-6">
                We work around your operations, not the other way around. Most commercial clients choose after-hours or early-morning service so your team walks into a fresh, inviting space and never sees us mid-day.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-[#e8e5df] text-center shadow-sm">
                  <span className="block text-xs font-semibold tracking-wider text-[#607564] uppercase mb-1">Nightly</span>
                  <span className="text-sm font-light text-[#5c635f]">High traffic suites & clinics</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#e8e5df] text-center shadow-sm">
                  <span className="block text-xs font-semibold tracking-wider text-[#607564] uppercase mb-1">Weekly</span>
                  <span className="text-sm font-light text-[#5c635f]">Busy professional offices</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#e8e5df] text-center shadow-sm">
                  <span className="block text-xs font-semibold tracking-wider text-[#607564] uppercase mb-1">Bi-Weekly</span>
                  <span className="text-sm font-light text-[#5c635f]">Small quiet workspaces</span>
                </div>
              </div>
              <p className="text-sm text-[#5c635f] font-light mt-6 italic">
                * We also offer flexible one-time deep cleaning and custom post-construction detailing.
              </p>
            </div>

            {/* Pricing works */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-[#e8e5df] shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#C86B53]/10 flex items-center justify-center shrink-0">
                  <DollarSign className="w-6 h-6 text-[#C86B53]" />
                </div>
                <h3 className="text-2xl font-serif text-[#2C302E]">
                  How Commercial Cleaning Pricing Works
                </h3>
              </div>
              <p className="text-[#5c635f] font-light leading-relaxed">
                Commercial cleaning is priced after a quick free walkthrough, based on your square footage, the type of space, the scope, and how often you need service. 
              </p>
              <p className="text-[#5c635f] font-light leading-relaxed mt-4">
                Recurring office cleaning in the KC area commonly runs in the range of about <strong>$0.08–$0.20 per square foot per visit</strong>, but the honest answer is that it depends on your space — a walkthrough gives you an accurate, no-obligation number. Recurring plans lower your per-visit cost.
              </p>
            </div>
          </div>
        </section>

        {/* Why KC Businesses Choose ShineWell */}
        <section className="mb-20 bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#e8e5df] shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C302E] mb-4">
              Why Kansas City Businesses Choose ShineWell
            </h2>
            <p className="text-lg text-[#5c635f] font-light">
              Built on precision care, transparent communication, and over 20 years of local family trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((badge, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="shrink-0 p-2 rounded-xl bg-[#C86B53]/10">
                  {badge.icon}
                </div>
                <div>
                  <h4 className="text-lg font-serif text-[#2C302E] mb-2">{badge.title}</h4>
                  <p className="text-sm text-[#5c635f] font-light leading-relaxed">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service area list */}
        <section className="mb-20 bg-[#CAD4CD]/10 p-8 md:p-12 rounded-[2.5rem] border border-[#e8e5df]/60 text-center">
          <div className="max-w-2xl mx-auto">
            <MapPin className="w-10 h-10 text-[#607564] mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-[#2C302E] mb-4">Serving the Kansas City Metro</h3>
            <p className="text-[#5c635f] font-light leading-relaxed mb-6">
              We proudly clean businesses across <strong>Overland Park, Corporate Woods, Leawood, Prairie Village, the Crossroads, Lee's Summit,</strong> and the greater KC metro on both the Kansas and Missouri sides.
            </p>
          </div>
        </section>

        {/* Get a Free Walkthrough CTA Box */}
        <section className="mb-20 bg-[#8BA192] text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-64 h-64 rounded-full bg-white/5 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 transform -translate-x-12 translate-y-12 w-64 h-64 rounded-full bg-white/5 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-serif mb-4 text-[#2C302E]">
              Get a Free Walkthrough & Quote
            </h3>
            <p className="text-lg text-[#2C302E]/90 font-light mb-8 max-w-xl mx-auto leading-relaxed">
              Ready for a cleaner, healthier, and more productive workplace? Request your custom commercial estimate walkthrough with our vetted teams.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/booking" 
                className="bg-[#C86B53] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#b55e47] transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Request Free Commercial Walkthrough »
              </Link>
              <a 
                href="tel:9133251400" 
                className="bg-white text-[#2C302E] px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Call ShineWell: (913) 325-1400
              </a>
            </div>
          </div>
        </section>

        {/* Interactive FAQ Accordion */}
        <section className="max-w-4xl mx-auto mb-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-[#2C302E] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#5c635f] font-light">
              Clear answers to help you choose the right partner for your facility.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-[#e8e5df] shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-lg md:text-xl text-[#2C302E] font-medium leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#5c635f] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#C86B53]' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-[#5c635f] font-light leading-relaxed border-t border-gray-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Schema markup tags directly rendered inside page context */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Commercial and office cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": "ShineWell Cleaning Services",
            "telephone": "+1-913-325-1400",
            "areaServed": "Kansas City metro (Overland Park, KS & MO)",
            "url": "https://shinewellcleaning.com/commercial-cleaning-kansas-city"
          },
          "areaServed": { "@type": "Place", "name": "Kansas City Metro" }
        }
        `}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Who provides reliable recurring office cleaning in the Kansas City metro?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ShineWell offers recurring commercial and office cleaning across the KC metro, including Overland Park, Corporate Woods, and the Crossroads, with flexible nightly, weekly, or biweekly schedules, fully insured and background-checked crews, and a satisfaction guarantee."
              }
            },
            {
              "@type": "Question",
              "name": "Do you clean outside of business hours?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Most commercial clients choose after-hours or early-morning cleaning so their team is never disrupted during the workday."
              }
            },
            {
              "@type": "Question",
              "name": "How is commercial cleaning priced in Kansas City?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Commercial cleaning is priced after a free walkthrough, based on square footage, type of space, scope, and frequency. Recurring plans lower the per-visit cost."
              }
            }
          ]
        }
        `}} />

      </div>
    </div>
  );
}
