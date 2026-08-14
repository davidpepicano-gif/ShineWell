import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import carpetDeepCleanImg from '../assets/images/carpet_deep_cleaned_1786068869326.jpg';
import { 
  ShieldCheck, 
  UserCheck, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Compass, 
  ChevronDown, 
  Phone,
  Star,
  Check,
  Building,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export default function PropertyManagementCleaningKansasCity() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const googleReviewUrl = "https://share.google/3oMRqAPyjGZaUcAO6";

  useEffect(() => {
    document.title = "Property & Common Area Cleaning in Kansas City | ShineWell";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Common area cleaning for apartments & properties in the KC metro. Lobbies, corridors, clubhouses & amenities kept immaculate. Free walkthrough.");
    }

    // Inject JSON-LD Service & FAQ Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Property management and common area cleaning",
      "provider": {
        "@type": "LocalBusiness",
        "name": "ShineWell Cleaning Services",
        "telephone": "+1-913-220-4748",
        "areaServed": "Kansas City metro (Overland Park, KS & MO)",
        "url": "https://shinewellcleaning.com/property-management-cleaning-kansas-city"
      },
      "areaServed": { "@type": "Place", "name": "Kansas City Metro" }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you clean apartment and property common areas in Kansas City?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ShineWell cleans lobbies, corridors, clubhouses, fitness rooms, elevators, and shared amenities across Overland Park and the KC metro."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer recurring service for properties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide reliable recurring schedules, daily, several times a week, or weekly, built around the property's needs."
          }
        },
        {
          "@type": "Question",
          "name": "Are you insured and background-checked?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We carry $2 million in general liability and bonding, and every cleaner is background-checked."
          }
        }
      ]
    };

    let scriptService = document.getElementById('json-ld-property-service') as HTMLScriptElement | null;
    if (!scriptService) {
      scriptService = document.createElement('script');
      scriptService.id = 'json-ld-property-service';
      scriptService.type = 'application/ld+json';
      document.head.appendChild(scriptService);
    }
    scriptService.textContent = JSON.stringify(serviceSchema);

    let scriptFaq = document.getElementById('json-ld-property-faq') as HTMLScriptElement | null;
    if (!scriptFaq) {
      scriptFaq = document.createElement('script');
      scriptFaq.id = 'json-ld-property-faq';
      scriptFaq.type = 'application/ld+json';
      document.head.appendChild(scriptFaq);
    }
    scriptFaq.textContent = JSON.stringify(faqSchema);

    return () => {
      const s1 = document.getElementById('json-ld-property-service');
      if (s1) s1.remove();
      const s2 = document.getElementById('json-ld-property-faq');
      if (s2) s2.remove();
    };
  }, []);

  const whatWeClean = [
    {
      title: "Lobbies & Grand Entryways",
      desc: "Floors vacuumed and mopped, entryway glass washed streak-free, and lobby seating kept spotless and welcoming."
    },
    {
      title: "Corridors & Stairwells",
      desc: "Carpet vacuumed, hard surfaces mopped, handrails disinfected, and baseboards dusted across all residential floors."
    },
    {
      title: "Clubhouses & Community Rooms",
      desc: "Entertaining kitchens sanitized, furniture straightened and dusted, trash emptied, and floors reset for residents."
    },
    {
      title: "Fitness Centers & Amenity Rooms",
      desc: "Sanitized cardio machines, wiped weight racks, disinfected yoga mats, fresh mirrors, and restocked wipe dispensers."
    },
    {
      title: "Elevators & Landings",
      desc: "Elevator tracks vacuumed, polished stainless steel walls and buttons disinfected, and polished floor tiles."
    },
    {
      title: "Common Area Restrooms",
      desc: "Fully scrubbed and sanitized toilets, sinks, mirrors, partition panels, and refilled soap/towel dispensers."
    },
    {
      title: "Mail & Package Hubs",
      desc: "Kept clean and orderly with trash bins emptied, tables wiped down, and dust removed."
    },
    {
      title: "High-Touch Point Disinfection",
      desc: "Disinfected door handles, access keypads, intercom buttons, elevator call panels, and stair handrails."
    }
  ];

  const valueProps = [
    {
      icon: <Clock className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Reliable Recurring Schedules",
      desc: "Consistent daily, multi-day, or weekly schedules so your community consistently looks immaculate for residents."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Fully Insured & Bonded",
      desc: "$2M general liability policy protecting property owners, management firms, and residential assets."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Background-Checked Crews",
      desc: "Vetted and trustworthy cleaning crews authorized to work securely in residential communities and secure access buildings."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Responsive Communication",
      desc: "Direct contact with management when you have special maintenance requests, turnover surges, or schedule adjustments."
    },
    {
      icon: <Star className="w-6 h-6 text-[#4A5D4E]" />,
      title: "5.0 Rating on Google",
      desc: "28 verified 5.0-star reviews reflecting our 20+ years of dedicated service across Kansas City."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#4A5D4E]" />,
      title: "100% Satisfaction Guarantee",
      desc: "Property inspection standards guaranteed. Any reported deficiency is re-addressed within 24 hours."
    }
  ];

  const faqs = [
    {
      q: "Do you clean apartment and property common areas in Kansas City?",
      a: "Yes. ShineWell cleans lobbies, corridors, clubhouses, fitness rooms, elevators, and shared amenities across Overland Park and the KC metro."
    },
    {
      q: "Do you offer recurring service for properties?",
      a: "Yes. We provide reliable recurring schedules — daily, several times a week, or weekly — built around your property's needs."
    },
    {
      q: "Are you insured and background-checked?",
      a: "Yes. We carry $2 million in general liability and bonding, and every cleaner is background-checked."
    }
  ];

  const serviceAreas = [
    "Overland Park", "Leawood", "Prairie Village", "Lenexa", "Olathe", 
    "Shawnee", "Mission", "Merriam", "Fairway", "Roeland Park", 
    "Stilwell", "Brookside", "Country Club Plaza", "Crossroads KC"
  ];

  return (
    <main id="main-content" className="bg-[#F9F8F6] min-h-screen pt-24 pb-16 text-[#2C302E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-sm text-[#5c635f] mb-6 flex items-center gap-2">
          <ol className="flex items-center gap-2 list-none p-0 m-0">
            <li><Link to="/" className="hover:text-[#607564] transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/commercial-cleaning-kansas-city" className="hover:text-[#607564] transition-colors">Commercial Cleaning</Link></li>
            <li aria-hidden="true">/</li>
            <li><span className="text-[#2C302E] font-medium" aria-current="page">Property &amp; Common Area Cleaning</span></li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="text-center max-w-4xl mx-auto mb-10">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#CAD4CD]/30 text-[#4A5D4E] uppercase tracking-wider border border-[#CAD4CD]/50">
              <Compass className="w-3.5 h-3.5" /> Multi-Family &amp; Commercial Common Areas
            </span>
            <a 
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#e8e5df] text-xs font-medium text-[#2C302E] shadow-xs hover:border-[#CAD4CD] transition-all"
              id="property-hero-google-badge"
            >
              <span className="text-[#FBBC05]">★★★★★</span>
              <span>5.0 (28 reviews on Google)</span>
            </a>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] font-medium leading-tight mb-6">
            Property Management &amp; Common Area Cleaning in Kansas City
          </h1>
        </header>

        {/* Quick Answer Box */}
        <aside aria-label="Quick Overview" className="bg-[#CAD4CD]/15 p-6 sm:p-8 rounded-2xl border border-[#CAD4CD]/40 max-w-4xl mx-auto shadow-sm mb-12">
          <p className="text-base sm:text-lg text-[#2C302E] leading-relaxed font-light">
            <strong>Quick answer:</strong> ShineWell keeps apartment and property common areas immaculate across the Kansas City metro — lobbies, corridors, clubhouses, fitness rooms, and shared amenities that residents and prospective tenants see every day. Clean common areas protect your property's reputation and help lease units. We're fully insured, background-checked, and offer reliable recurring schedules. Serving Overland Park and the greater KC area.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 items-center pt-4 border-t border-[#CAD4CD]/40">
            <a 
              href="tel:9132204748" 
              className="inline-flex items-center gap-2 bg-[#C86B53] hover:bg-[#b55e47] text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm"
              id="property-quick-answer-call-btn"
            >
              <Phone className="w-4 h-4" /> Call Us Now: (913) 220-4748
            </a>
            <a 
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F2F0EA] text-[#2C302E] border border-[#e8e5df] px-5 py-3 rounded-full text-sm font-medium transition-all shadow-xs"
              id="property-quick-answer-review-btn"
            >
              <span className="text-[#FBBC05]">⭐</span>
              <span>Leave us a Google Review</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#5c635f]" />
            </a>
          </div>
        </aside>

        {/* Featured Image */}
        <figure className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-md mb-16 border border-[#e8e5df]">
          <img 
            src={carpetDeepCleanImg} 
            alt="Apartment complex common area and corridor cleaning in Overland Park"
            className="w-full h-72 sm:h-96 object-cover"
            referrerPolicy="no-referrer"
          />
          <figcaption className="sr-only">Residential complex and apartment common area maintenance in KC</figcaption>
        </figure>

        {/* Why Common Areas Matter for a Property */}
        <article className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl border border-[#e8e5df] shadow-sm mb-16">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-4">
            Why common areas matter for a property
          </h2>
          <p className="text-[#5c635f] text-base sm:text-lg leading-relaxed font-light mb-4">
            Common areas are the first thing a prospective tenant sees and the space current residents live with daily. A clean, well-kept lobby, corridor, or clubhouse signals a well-managed property — and helps lease units and retain residents. Neglected common areas do the opposite. Consistent, reliable cleaning protects the value and reputation of the property you manage.
          </p>
          <p className="text-[#5c635f] text-base leading-relaxed font-light">
            Property managers across Johnson County and Kansas City trust ShineWell to maintain a spotless standard across multi-floor buildings, high-rise apartments, garden-style complexes, and corporate office parks.
          </p>
        </article>

        {/* What We Clean in Properties & Common Areas */}
        <section aria-labelledby="property-services-heading" className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 id="property-services-heading" className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-3">
              What we clean in properties &amp; common areas
            </h2>
            <p className="text-[#5c635f] text-base max-w-2xl mx-auto">
              Comprehensive maintenance checklists designed for high-traffic multi-family developments and commercial real estate assets.
            </p>
          </div>

          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-6 p-0 m-0 list-none">
            {whatWeClean.map((item, idx) => (
              <li key={idx} className="bg-white p-6 rounded-2xl border border-[#e8e5df] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#CAD4CD]/30 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[#4A5D4E]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-[#2C302E] font-medium mb-1">{item.title}</h3>
                    <p className="text-[#5c635f] text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Reliable Recurring Schedules */}
        <section aria-label="Recurring Schedule Options" className="max-w-4xl mx-auto bg-gradient-to-r from-[#8BA192]/10 via-[#CAD4CD]/20 to-[#8BA192]/10 p-8 sm:p-10 rounded-2xl border border-[#CAD4CD]/50 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#e8e5df]">
              <Clock className="w-7 h-7 text-[#4A5D4E]" />
            </div>
            <div>
              <h2 className="text-2xl font-serif text-[#2C302E] mb-2">Reliable recurring schedules</h2>
              <p className="text-[#5c635f] text-base leading-relaxed font-light">
                Property common areas need consistency. We offer dependable recurring schedules — daily, several times a week, or weekly — so your property always looks its best for residents and prospects. Reliable, on-schedule service is what property managers count on most.
              </p>
            </div>
          </div>
        </section>

        {/* Why KC Property Managers Choose ShineWell */}
        <section aria-labelledby="why-pm-heading" className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 id="why-pm-heading" className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-3">
              Why KC property managers choose ShineWell
            </h2>
            <p className="text-[#5c635f] text-base max-w-2xl mx-auto">
              Proudly partnering with local asset managers, HOAs, and residential communities for over 20 years.
            </p>
          </div>

          <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0 m-0 list-none">
            {valueProps.map((prop, idx) => (
              <li key={idx} className="bg-white p-6 rounded-2xl border border-[#e8e5df] shadow-sm flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-[#CAD4CD]/20 flex items-center justify-center mb-4">
                  {prop.icon}
                </div>
                <h3 className="text-lg font-serif text-[#2C302E] font-medium mb-2">{prop.title}</h3>
                <p className="text-[#5c635f] text-sm leading-relaxed font-light">{prop.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Service Area */}
        <section aria-labelledby="pm-areas-heading" className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl border border-[#e8e5df] shadow-sm mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#CAD4CD]/30 text-[#4A5D4E] uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" /> Metro KC Coverage
          </div>
          <h2 id="pm-areas-heading" className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-3">
            Serving Overland Park &amp; the KC metro
          </h2>
          <p className="text-[#5c635f] text-base leading-relaxed font-light max-w-2xl mx-auto mb-6">
            Overland Park, Leawood, Prairie Village, Lenexa, Olathe, Shawnee, Mission, Merriam, Fairway, Roeland Park, Stilwell (KS) + Brookside and the Plaza (MO).
          </p>
          <ul role="list" className="flex flex-wrap justify-center gap-2 text-xs font-medium text-[#4A5D4E] mb-6 p-0 list-none">
            {serviceAreas.map((area, i) => (
              <li key={i} className="bg-[#F9F8F6] px-3 py-1.5 rounded-lg border border-[#e8e5df]">
                {area}
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <a 
              href="tel:9132204748" 
              className="text-sm font-medium text-[#C86B53] hover:underline flex items-center gap-1"
            >
              Request a free walkthrough &raquo; or call (913) 220-4748
            </a>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section aria-labelledby="faq-heading" className="max-w-4xl mx-auto mb-16">
          <h2 id="faq-heading" className="text-2xl sm:text-3xl font-serif text-[#2C302E] text-center mb-8">
            Frequently asked questions
          </h2>
          <dl className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-[#e8e5df] overflow-hidden shadow-sm transition-all"
              >
                <dt>
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-[#F9F8F6]/50 transition-colors"
                    aria-expanded={activeFaq === idx}
                  >
                    <span className="font-serif text-lg text-[#2C302E] font-medium">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#4A5D4E] transition-transform duration-200 shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                </dt>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.dd
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden m-0"
                    >
                      <div className="p-6 pt-0 border-t border-[#e8e5df]/50 text-[#5c635f] leading-relaxed font-light">
                        {faq.a}
                      </div>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </dl>
        </section>

        {/* CTA Banner */}
        <section aria-labelledby="cta-heading" className="max-w-4xl mx-auto bg-[#2C302E] text-white p-8 sm:p-12 rounded-3xl shadow-xl text-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-medium text-[#CAD4CD] mb-4">
              <span className="text-[#FBBC05]">★★★★★</span>
              <span>Rated 5.0 on Google · 28 Verified Reviews</span>
            </div>
            <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium mb-4">
              Get a free walkthrough for your property
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light">
              Elevate the tenant experience and protect asset value with spotless common areas. Request your free property walkthrough and custom proposal.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a 
                href="tel:9132204748" 
                className="bg-[#C86B53] hover:bg-[#b55e47] text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-md inline-flex items-center gap-2"
                id="property-cta-call-btn"
              >
                <Phone className="w-5 h-5" /> Call Us Now: (913) 220-4748
              </a>
              <a 
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2C302E] hover:bg-gray-100 px-7 py-4 rounded-full text-base font-medium transition-all shadow-md inline-flex items-center gap-2"
                id="property-cta-review-btn"
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
        </section>

      </div>
    </main>
  );
}
