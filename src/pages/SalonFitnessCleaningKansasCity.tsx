import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import specializedTreatmentImg from '../assets/images/specialized_treatment_1779460554949.png';
import { 
  ShieldCheck, 
  UserCheck, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Scissors, 
  ChevronDown, 
  Phone,
  Star,
  Check,
  Sparkles,
  ExternalLink,
  Activity
} from 'lucide-react';

export default function SalonFitnessCleaningKansasCity() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const googleReviewUrl = "https://share.google/3oMRqAPyjGZaUcAO6";

  useEffect(() => {
    document.title = "Salon, Studio & Gym Cleaning in Kansas City | ShineWell";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Professional cleaning for salons, studios, spas & fitness spaces in the KC metro. Hygiene-focused, fresh environments your clients trust. Free walkthrough.");
    }

    // Inject JSON-LD Service & FAQ Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Salon, studio, and fitness cleaning",
      "provider": {
        "@type": "LocalBusiness",
        "name": "ShineWell Cleaning Services",
        "telephone": "+1-913-220-4748",
        "areaServed": "Kansas City metro (Overland Park, KS & MO)",
        "url": "https://shinewellcleaning.com/salon-fitness-cleaning-kansas-city"
      },
      "areaServed": { "@type": "Place", "name": "Kansas City Metro" }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you clean salons, spas, and gyms in Kansas City?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ShineWell provides hygiene-focused cleaning for salons, studios, spas, and fitness spaces across Overland Park and the KC metro."
          }
        },
        {
          "@type": "Question",
          "name": "Can you clean between appointments or classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We schedule before opening, after closing, or between sessions so the space is always fresh and appointments are never disrupted."
          }
        },
        {
          "@type": "Question",
          "name": "Do you sanitize stations and equipment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We clean and sanitize stations, chairs, equipment surfaces, restrooms, and high-touch points as part of the service."
          }
        }
      ]
    };

    let scriptService = document.getElementById('json-ld-salon-service') as HTMLScriptElement | null;
    if (!scriptService) {
      scriptService = document.createElement('script');
      scriptService.id = 'json-ld-salon-service';
      scriptService.type = 'application/ld+json';
      document.head.appendChild(scriptService);
    }
    scriptService.textContent = JSON.stringify(serviceSchema);

    let scriptFaq = document.getElementById('json-ld-salon-faq') as HTMLScriptElement | null;
    if (!scriptFaq) {
      scriptFaq = document.createElement('script');
      scriptFaq.id = 'json-ld-salon-faq';
      scriptFaq.type = 'application/ld+json';
      document.head.appendChild(scriptFaq);
    }
    scriptFaq.textContent = JSON.stringify(faqSchema);

    return () => {
      const s1 = document.getElementById('json-ld-salon-service');
      if (s1) s1.remove();
      const s2 = document.getElementById('json-ld-salon-faq');
      if (s2) s2.remove();
    };
  }, []);

  const whatWeClean = [
    {
      title: "Floors & Treatment Areas",
      desc: "Swept, mopped, and kept spotless — including detailed hair, powder, and styling product cleanup for salons and studios."
    },
    {
      title: "Mirrors & Glass Surfaces",
      desc: "Crystal-clear, streak-free mirrors across styling stations, yoga studio walls, dance rooms, and gym weight areas."
    },
    {
      title: "Stations, Chairs & Equipment",
      desc: "Sanitized styling chairs, shampoo bowls, treatment tables, massage suites, and fitness equipment touchpoints."
    },
    {
      title: "Restrooms & Changing Areas",
      desc: "Fully sanitized, disinfected showers, tile floors, odor-neutralized lockers, and restocked essentials."
    },
    {
      title: "High-Touch Point Disinfection",
      desc: "Disinfected door handles, dumbbells, free weights, reception desks, and shared fitness touchscreens."
    },
    {
      title: "Reception & Waiting Lounges",
      desc: "Fresh, welcoming seating, pristine coffee bars, retail display shelves, and clean entryways."
    },
    {
      title: "Break Rooms & Staff Areas",
      desc: "Cleaned and fresh staff rooms, sinks, microwave counters, and trash removal."
    }
  ];

  const valueProps = [
    {
      icon: <Activity className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Hygiene-Focused Cleaning",
      desc: "Engineered specifically for client-facing spaces where hygiene, fresh scent, and spotless details define client trust."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Fully Insured & Bonded",
      desc: "$2M general liability insurance protection covering your facility, specialized fixtures, and equipment."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Background-Checked Crews",
      desc: "Reliable, vetted cleaning specialists trained to handle boutique wellness spaces with care and confidentiality."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Flexible Class/Session Hours",
      desc: "Scheduled before opening, after closing, or between workout blocks so client appointments are never disrupted."
    },
    {
      icon: <Star className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Rated 5.0 on Google",
      desc: "Over 20 years of family-owned excellence in KC with 28 verified 5.0-star reviews."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#4A5D4E]" />,
      title: "100% Satisfaction Guarantee",
      desc: "If any station or restroom needs attention, we re-clean within 24 hours at no additional charge."
    }
  ];

  const faqs = [
    {
      q: "Do you clean salons, spas, and gyms in Kansas City?",
      a: "Yes. ShineWell provides hygiene-focused cleaning for salons, studios, spas, and fitness spaces across Overland Park and the KC metro."
    },
    {
      q: "Can you clean between appointments or classes?",
      a: "Yes. We schedule before opening, after closing, or between sessions so the space is always fresh and appointments are never disrupted."
    },
    {
      q: "Do you sanitize stations and equipment?",
      a: "Yes. We clean and sanitize stations, chairs, equipment surfaces, restrooms, and high-touch points as part of the service."
    }
  ];

  const serviceAreas = [
    "Overland Park", "Leawood", "Prairie Village", "Lenexa", "Olathe", 
    "Shawnee", "Mission", "Merriam", "Fairway", "Roeland Park", 
    "Stilwell", "Brookside", "Country Club Plaza", "Crossroads KC"
  ];

  return (
    <div className="bg-[#F9F8F6] min-h-screen pt-24 pb-16 text-[#2C302E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        
        {/* Breadcrumbs */}
        <div className="text-sm text-[#5c635f] mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-[#607564] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/commercial-cleaning-kansas-city" className="hover:text-[#607564] transition-colors">Commercial Cleaning</Link>
          <span>/</span>
          <span className="text-[#2C302E] font-medium">Salon, Studio &amp; Fitness Cleaning</span>
        </div>

        {/* Hero Header */}
        <section className="text-center max-w-4xl mx-auto mb-10">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#CAD4CD]/30 text-[#4A5D4E] uppercase tracking-wider border border-[#CAD4CD]/50">
              <Scissors className="w-3.5 h-3.5" /> Wellness &amp; Boutique Studio Cleaning
            </span>
            <a 
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#e8e5df] text-xs font-medium text-[#2C302E] shadow-xs hover:border-[#CAD4CD] transition-all"
              id="salon-hero-google-badge"
            >
              <span className="text-[#FBBC05]">★★★★★</span>
              <span>5.0 (28 reviews on Google)</span>
            </a>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] font-medium leading-tight mb-6">
            Salon, Studio &amp; Fitness Cleaning in Kansas City &amp; Overland Park
          </h1>
        </section>

        {/* Quick Answer Box */}
        <div className="bg-[#CAD4CD]/15 p-6 sm:p-8 rounded-2xl border border-[#CAD4CD]/40 max-w-4xl mx-auto shadow-sm mb-12">
          <p className="text-base sm:text-lg text-[#2C302E] leading-relaxed font-light">
            <strong>Quick answer:</strong> ShineWell provides specialized cleaning for salons, studios, spas, and fitness spaces across the Kansas City metro — hygiene-focused cleaning and fresh, welcoming environments that keep clients comfortable and coming back. In wellness and beauty spaces, cleanliness is part of the experience. We're fully insured, background-checked, and schedule around your hours. Serving Overland Park and the greater KC area.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 items-center pt-4 border-t border-[#CAD4CD]/40">
            <a 
              href="tel:9132204748" 
              className="inline-flex items-center gap-2 bg-[#C86B53] hover:bg-[#b55e47] text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm"
              id="salon-quick-answer-call-btn"
            >
              <Phone className="w-4 h-4" /> Call Us Now: (913) 220-4748
            </a>
            <a 
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F2F0EA] text-[#2C302E] border border-[#e8e5df] px-5 py-3 rounded-full text-sm font-medium transition-all shadow-xs"
              id="salon-quick-answer-review-btn"
            >
              <span className="text-[#FBBC05]">⭐</span>
              <span>Leave us a Google Review</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#5c635f]" />
            </a>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-md mb-16 border border-[#e8e5df]">
          <img 
            src={specializedTreatmentImg} 
            alt="Salon studio and fitness gym cleaning in Kansas City"
            className="w-full h-72 sm:h-96 object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Why Cleanliness is the Experience */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl border border-[#e8e5df] shadow-sm mb-16">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-4">
            Why cleanliness is the experience
          </h2>
          <p className="text-[#5c635f] text-base sm:text-lg leading-relaxed font-light mb-4">
            For a salon, spa, yoga studio, or gym, the environment is the service. Clients notice everything — a spotless floor, a fresh-smelling space, clean mirrors, sanitized stations and equipment. Cleanliness signals professionalism and care, and it's a major reason clients return and refer friends. A single overlooked detail can undo an otherwise great experience.
          </p>
          <p className="text-[#5c635f] text-base leading-relaxed font-light">
            ShineWell's team understands the unique sanitation demands of personal care and athletic facilities — eliminating hair buildup, sweat residues, product films, and locker room odors with medical-grade attention to detail.
          </p>
        </div>

        {/* What We Clean in Salons, Studios & Fitness Spaces */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-3">
              What we clean in salons, studios &amp; fitness spaces
            </h2>
            <p className="text-[#5c635f] text-base max-w-2xl mx-auto">
              Hygiene-first cleaning checklists developed specifically for beauty salons, day spas, pilates studios, and fitness facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeClean.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#e8e5df] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#CAD4CD]/30 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[#4A5D4E]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-[#2C302E] font-medium mb-1">{item.title}</h3>
                    <p className="text-[#5c635f] text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fresh Spaces, Scheduled Around You */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#8BA192]/10 via-[#CAD4CD]/20 to-[#8BA192]/10 p-8 sm:p-10 rounded-2xl border border-[#CAD4CD]/50 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#e8e5df]">
              <Clock className="w-7 h-7 text-[#4A5D4E]" />
            </div>
            <div>
              <h2 className="text-2xl font-serif text-[#2C302E] mb-2">Fresh spaces, scheduled around you</h2>
              <p className="text-[#5c635f] text-base leading-relaxed font-light">
                We clean before opening, after closing, or between sessions, so your space is always fresh for the next client and cleaning never disrupts appointments or classes. Recurring schedules are built around your hours.
              </p>
            </div>
          </div>
        </div>

        {/* Why KC Wellness & Beauty Businesses Choose ShineWell */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-3">
              Why KC wellness &amp; beauty businesses choose ShineWell
            </h2>
            <p className="text-[#5c635f] text-base max-w-2xl mx-auto">
              Trusted by studio directors, spa owners, and gym managers in Johnson County and Kansas City.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueProps.map((prop, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#e8e5df] shadow-sm flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-[#CAD4CD]/20 flex items-center justify-center mb-4">
                  {prop.icon}
                </div>
                <h3 className="text-lg font-serif text-[#2C302E] font-medium mb-2">{prop.title}</h3>
                <p className="text-[#5c635f] text-sm leading-relaxed font-light">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Area */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl border border-[#e8e5df] shadow-sm mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#CAD4CD]/30 text-[#4A5D4E] uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" /> Metro KC Coverage
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-3">
            Serving Overland Park &amp; the KC metro
          </h2>
          <p className="text-[#5c635f] text-base leading-relaxed font-light max-w-2xl mx-auto mb-6">
            Overland Park, Leawood, Prairie Village, Lenexa, Olathe, Shawnee, Mission, Merriam, Fairway, Roeland Park, Stilwell (KS) + Brookside and the Country Club Plaza (MO).
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs font-medium text-[#4A5D4E] mb-6">
            {serviceAreas.map((area, i) => (
              <span key={i} className="bg-[#F9F8F6] px-3 py-1.5 rounded-lg border border-[#e8e5df]">
                {area}
              </span>
            ))}
          </div>
          <div className="flex justify-center">
            <a 
              href="tel:9132204748" 
              className="text-sm font-medium text-[#C86B53] hover:underline flex items-center gap-1"
            >
              Request a free walkthrough &raquo; or call (913) 220-4748
            </a>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#2C302E] text-center mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-[#e8e5df] overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-[#F9F8F6]/50 transition-colors"
                  aria-expanded={activeFaq === idx}
                >
                  <span className="font-serif text-lg text-[#2C302E] font-medium">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#4A5D4E] transition-transform duration-200 shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-[#e8e5df]/50 text-[#5c635f] leading-relaxed font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="max-w-4xl mx-auto bg-[#2C302E] text-white p-8 sm:p-12 rounded-3xl shadow-xl text-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-medium text-[#CAD4CD] mb-4">
              <span className="text-[#FBBC05]">★★★★★</span>
              <span>Rated 5.0 on Google · 28 Verified Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium mb-4">
              Get a free walkthrough for your studio or salon
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light">
              Elevate your studio's cleanliness with specialized cleaning that delights every client. Schedule your complimentary walkthrough quote today.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a 
                href="tel:9132204748" 
                className="bg-[#C86B53] hover:bg-[#b55e47] text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-md inline-flex items-center gap-2"
                id="salon-cta-call-btn"
              >
                <Phone className="w-5 h-5" /> Call Us Now: (913) 220-4748
              </a>
              <a 
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2C302E] hover:bg-gray-100 px-7 py-4 rounded-full text-base font-medium transition-all shadow-md inline-flex items-center gap-2"
                id="salon-cta-review-btn"
              >
                <span>Rate Us on Google</span>
                <ExternalLink className="w-4 h-4 text-[#5c635f]" />
              </a>
            </div>
            <div className="mt-6 flex justify-center items-center gap-4 text-xs text-gray-400">
              <span>Looking for all commercial options?</span>
              <Link to="/commercial-cleaning-kansas-city" className="text-[#CAD4CD] underline hover:text-white">
                View Commercial Cleaning Kansas City »
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
