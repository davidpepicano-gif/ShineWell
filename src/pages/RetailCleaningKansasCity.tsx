import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import commercialDeepCleaningImg from '../assets/images/regenerated_image_1783363406981.png';
import { 
  ShieldCheck, 
  UserCheck, 
  CheckCircle, 
  Clock, 
  MapPin, 
  ShoppingBag, 
  ChevronDown, 
  Phone,
  Star,
  Check,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function RetailCleaningKansasCity() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const googleReviewUrl = "https://share.google/3oMRqAPyjGZaUcAO6";

  useEffect(() => {
    document.title = "Retail & Showroom Cleaning in Kansas City | ShineWell";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Professional retail and showroom cleaning across Overland Park & the KC metro. Spotless floors, clean glass, and welcoming entryways. Free walkthrough.");
    }

    // Inject JSON-LD Service & FAQ Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Retail and showroom cleaning",
      "provider": {
        "@type": "LocalBusiness",
        "name": "ShineWell Cleaning Services",
        "telephone": "+1-913-220-4748",
        "areaServed": "Kansas City metro (Overland Park, KS & MO)",
        "url": "https://shinewellcleaning.com/retail-cleaning-kansas-city"
      },
      "areaServed": { "@type": "Place", "name": "Kansas City Metro" }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you clean retail stores and showrooms in Kansas City?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ShineWell provides professional retail and showroom cleaning across Overland Park and the KC metro, including floors, glass, displays, restrooms, and high-touch areas."
          }
        },
        {
          "@type": "Question",
          "name": "Can you clean outside of store hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We clean before opening, after closing, or overnight so your store is always ready and business is never interrupted."
          }
        },
        {
          "@type": "Question",
          "name": "Are you insured for retail cleaning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We carry $2 million in general liability and bonding, and all crews are background-checked."
          }
        }
      ]
    };

    let scriptService = document.getElementById('json-ld-retail-service') as HTMLScriptElement | null;
    if (!scriptService) {
      scriptService = document.createElement('script');
      scriptService.id = 'json-ld-retail-service';
      scriptService.type = 'application/ld+json';
      document.head.appendChild(scriptService);
    }
    scriptService.textContent = JSON.stringify(serviceSchema);

    let scriptFaq = document.getElementById('json-ld-retail-faq') as HTMLScriptElement | null;
    if (!scriptFaq) {
      scriptFaq = document.createElement('script');
      scriptFaq.id = 'json-ld-retail-faq';
      scriptFaq.type = 'application/ld+json';
      document.head.appendChild(scriptFaq);
    }
    scriptFaq.textContent = JSON.stringify(faqSchema);

    return () => {
      const s1 = document.getElementById('json-ld-retail-service');
      if (s1) s1.remove();
      const s2 = document.getElementById('json-ld-retail-faq');
      if (s2) s2.remove();
    };
  }, []);

  const whatWeClean = [
    {
      title: "Floors & Entryways",
      desc: "Swept, vacuumed, mopped, or polished to a bright, spotless, customer-ready finish that withstands high foot traffic."
    },
    {
      title: "Glass & Entry Doors",
      desc: "Streak-free entry doors, storefront display windows, and glass display cases that showcase merchandise clearly."
    },
    {
      title: "Display Areas & Shelving",
      desc: "Dusted and meticulously kept presentable without disturbing your store inventory or delicate product displays."
    },
    {
      title: "Fitting Rooms & Counters",
      desc: "Thoroughly cleaned, sanitized mirrors, wiped bench seating, and spotless checkout counters."
    },
    {
      title: "Customer & Staff Restrooms",
      desc: "Fully cleaned, sanitized fixtures, wiped mirrors, degreased floors, and fully restocked soap and paper supplies."
    },
    {
      title: "Break Rooms & Stock Areas",
      desc: "Sanitized tables, sinks, trash disposal, and clean corridors kept fresh for your retail staff."
    },
    {
      title: "High-Touch Point Disinfection",
      desc: "Disinfected door handles, checkout countertops, register screens, and POS payment terminal stations."
    }
  ];

  const valueProps = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Fully Insured & Bonded",
      desc: "$2M general liability insurance protection so your storefront and inventory are completely safeguarded."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Background-Checked Crews",
      desc: "Vetted and trained professionals who respect your store security protocols and merchandise."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Flexible Store Hours",
      desc: "Before-opening, after-closing, or overnight scheduling so your business and shoppers are never interrupted."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Over 20 Years Locally Owned",
      desc: "Family-run cleaning service trusted across Overland Park and the greater KC metro since 2004."
    },
    {
      icon: <Star className="w-6 h-6 text-[#4A5D4E]" />,
      title: "5.0 Rating on Google",
      desc: "Backed by 28 verified 5-star Google reviews from satisfied local businesses and homeowners."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#4A5D4E]" />,
      title: "100% Satisfaction Guarantee",
      desc: "Our commitment to flawless store cleanliness. Any detail not right is re-cleaned within 24 hours free."
    }
  ];

  const faqs = [
    {
      q: "Do you clean retail stores and showrooms in Kansas City?",
      a: "Yes. ShineWell provides professional retail and showroom cleaning across Overland Park and the KC metro, including floors, glass, displays, restrooms, and high-touch areas."
    },
    {
      q: "Can you clean outside of store hours?",
      a: "Yes. We clean before opening, after closing, or overnight so your store is always ready and business is never interrupted."
    },
    {
      q: "Are you insured for retail cleaning?",
      a: "Yes — we carry $2 million in general liability and bonding, and all crews are background-checked."
    }
  ];

  const serviceAreas = [
    "Overland Park", "Leawood", "Prairie Village", "Lenexa", "Olathe", 
    "Shawnee", "Mission", "Merriam", "Fairway", "Roeland Park", 
    "Stilwell", "Crossroads KC", "Corporate Woods", "Brookside", "Country Club Plaza"
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
            <li><span className="text-[#2C302E] font-medium" aria-current="page">Retail &amp; Showroom Cleaning</span></li>
          </ol>
        </nav>

        {/* Hero Header Section */}
        <header className="text-center max-w-4xl mx-auto mb-10">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#CAD4CD]/30 text-[#4A5D4E] uppercase tracking-wider border border-[#CAD4CD]/50">
              <ShoppingBag className="w-3.5 h-3.5" /> Retail &amp; Showroom Services
            </span>
            <a 
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#e8e5df] text-xs font-medium text-[#2C302E] shadow-xs hover:border-[#CAD4CD] transition-all"
              id="retail-hero-google-badge"
            >
              <span className="text-[#FBBC05]">★★★★★</span>
              <span>5.0 (28 reviews on Google)</span>
            </a>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] font-medium leading-tight mb-6">
            Retail &amp; Showroom Cleaning in Kansas City &amp; Overland Park
          </h1>
        </header>

        {/* Quick Answer Box */}
        <aside aria-label="Quick Overview" className="bg-[#CAD4CD]/15 p-6 sm:p-8 rounded-2xl border border-[#CAD4CD]/40 max-w-4xl mx-auto shadow-sm mb-12">
          <p className="text-base sm:text-lg text-[#2C302E] leading-relaxed font-light">
            <strong>Quick answer:</strong> ShineWell provides professional retail and showroom cleaning across the Kansas City metro — bright floors, streak-free glass, spotless displays, and welcoming entryways that make the right first impression on every customer who walks in. We're fully insured, our crews are background-checked, and we schedule around your store hours. Serving Overland Park, Corporate Woods, the Crossroads, and the greater KC area.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 items-center pt-4 border-t border-[#CAD4CD]/40">
            <a 
              href="tel:9132204748" 
              className="inline-flex items-center gap-2 bg-[#C86B53] hover:bg-[#b55e47] text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm"
              id="retail-quick-answer-call-btn"
            >
              <Phone className="w-4 h-4" /> Call Us Now: (913) 220-4748
            </a>
            <a 
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F2F0EA] text-[#2C302E] border border-[#e8e5df] px-5 py-3 rounded-full text-sm font-medium transition-all shadow-xs"
              id="retail-quick-answer-review-btn"
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
            src={commercialDeepCleaningImg} 
            alt="Retail and showroom cleaning in Overland Park and Kansas City"
            className="w-full h-72 sm:h-96 object-cover"
            referrerPolicy="no-referrer"
          />
          <figcaption className="sr-only">Spotless retail storefront and showroom cleaning in Kansas City</figcaption>
        </figure>

        {/* Why a Clean Store Sells Section */}
        <article className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl border border-[#e8e5df] shadow-sm mb-16">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-4">
            Why a clean store sells
          </h2>
          <p className="text-[#5c635f] text-base sm:text-lg leading-relaxed font-light mb-4">
            In retail, the space is part of the product. A spotless floor, clean glass, and a fresh, welcoming entryway shape a customer's impression the moment they walk in — and a dusty display or smudged door can quietly cost you a sale. Professional retail cleaning keeps your store looking its best so it always reflects the quality of what you sell.
          </p>
          <p className="text-[#5c635f] text-base leading-relaxed font-light">
            Whether you operate a high-end apparel boutique on the Country Club Plaza, a design showroom in Overland Park, or a specialty retail store in the Crossroads, our dedicated cleaners uphold your brand's standards with precision.
          </p>
        </article>

        {/* What We Clean in Retail Spaces */}
        <section aria-labelledby="retail-services-heading" className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 id="retail-services-heading" className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-3">
              What we clean in retail spaces
            </h2>
            <p className="text-[#5c635f] text-base max-w-2xl mx-auto">
              Complete customer-facing and back-of-house retail cleaning customized to your layout and merchandising.
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

        {/* Scheduled Around Your Store Hours */}
        <section aria-label="Flexible Store Hours Scheduling" className="max-w-4xl mx-auto bg-gradient-to-r from-[#8BA192]/10 via-[#CAD4CD]/20 to-[#8BA192]/10 p-8 sm:p-10 rounded-2xl border border-[#CAD4CD]/50 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#e8e5df]">
              <Clock className="w-7 h-7 text-[#4A5D4E]" />
            </div>
            <div>
              <h2 className="text-2xl font-serif text-[#2C302E] mb-2">Scheduled around your store hours</h2>
              <p className="text-[#5c635f] text-base leading-relaxed font-light">
                We clean before opening, after closing, or overnight, so your store is always fresh for customers and cleaning never interrupts business. Recurring schedules are built around your hours and foot traffic.
              </p>
            </div>
          </div>
        </section>

        {/* Why KC Retailers Choose ShineWell */}
        <section aria-labelledby="why-retailers-heading" className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 id="why-retailers-heading" className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-3">
              Why KC retailers choose ShineWell
            </h2>
            <p className="text-[#5c635f] text-base max-w-2xl mx-auto">
              Trusted by local store managers and retail owners across Johnson County and the KC metro.
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
        <section aria-labelledby="retail-areas-heading" className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl border border-[#e8e5df] shadow-sm mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#CAD4CD]/30 text-[#4A5D4E] uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" /> Metro KC Coverage
          </div>
          <h2 id="retail-areas-heading" className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-3">
            Retail cleaning across Overland Park &amp; the KC metro
          </h2>
          <p className="text-[#5c635f] text-base leading-relaxed font-light max-w-2xl mx-auto mb-6">
            Serving Overland Park, Leawood, Prairie Village, Lenexa, Olathe, Shawnee, Mission, Merriam, Fairway, Roeland Park, Stilwell (KS) + Brookside, the Crossroads, and the Plaza (MO).
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
              Get a free walkthrough for your retail space
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light">
              Keep your showroom and retail floors customer-ready every single day. Request your free estimate walkthrough with our vetted commercial team.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a 
                href="tel:9132204748" 
                className="bg-[#C86B53] hover:bg-[#b55e47] text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-md inline-flex items-center gap-2"
                id="retail-cta-call-btn"
              >
                <Phone className="w-5 h-5" /> Call Us Now: (913) 220-4748
              </a>
              <a 
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2C302E] hover:bg-gray-100 px-7 py-4 rounded-full text-base font-medium transition-all shadow-md inline-flex items-center gap-2"
                id="retail-cta-review-btn"
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
