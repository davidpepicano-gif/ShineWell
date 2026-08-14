import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import commercialOfficeImg from '../assets/images/medical_office_cleaner_1786068880525.jpg';
import { 
  ShieldCheck, 
  UserCheck, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Building2, 
  ChevronDown, 
  Phone,
  Star,
  Check,
  Sparkles,
  ExternalLink,
  DollarSign,
  Users
} from 'lucide-react';

export default function OfficeCleaningKansasCity() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const googleReviewUrl = "https://share.google/3oMRqAPyjGZaUcAO6";

  useEffect(() => {
    document.title = "Office Cleaning in Kansas City & Overland Park | ShineWell";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Professional office & corporate cleaning across the KC metro. Insured, background-checked crews, after-hours scheduling. Free walkthrough.");
    }

    // Inject JSON-LD Service & FAQ Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Office and corporate cleaning",
      "provider": {
        "@type": "LocalBusiness",
        "name": "ShineWell Cleaning Services",
        "telephone": "+1-913-220-4748",
        "areaServed": "Kansas City metro (Overland Park, KS & MO)",
        "url": "https://shinewellcleaning.com/office-cleaning-kansas-city"
      },
      "areaServed": { "@type": "Place", "name": "Kansas City Metro" }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide office cleaning in Kansas City and Overland Park?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ShineWell provides professional office and corporate cleaning across the KC metro, from small offices to multi-suite corporate floors, with insured, background-checked crews and after-hours scheduling."
          }
        },
        {
          "@type": "Question",
          "name": "Can you clean our office after business hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Most clients choose after-hours or early-morning cleaning so their team is never disrupted during the workday."
          }
        },
        {
          "@type": "Question",
          "name": "How is office cleaning priced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After a free walkthrough, based on square footage, type of space, scope, and frequency. Recurring plans lower the per-visit cost compared to one-time cleaning."
          }
        },
        {
          "@type": "Question",
          "name": "Do you clean multi-suite corporate floors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We scale from a single office suite to full corporate floors in KC business districts like Corporate Woods."
          }
        }
      ]
    };

    let scriptService = document.getElementById('json-ld-office-service') as HTMLScriptElement | null;
    if (!scriptService) {
      scriptService = document.createElement('script');
      scriptService.id = 'json-ld-office-service';
      scriptService.type = 'application/ld+json';
      document.head.appendChild(scriptService);
    }
    scriptService.textContent = JSON.stringify(serviceSchema);

    let scriptFaq = document.getElementById('json-ld-office-faq') as HTMLScriptElement | null;
    if (!scriptFaq) {
      scriptFaq = document.createElement('script');
      scriptFaq.id = 'json-ld-office-faq';
      scriptFaq.type = 'application/ld+json';
      document.head.appendChild(scriptFaq);
    }
    scriptFaq.textContent = JSON.stringify(faqSchema);

    return () => {
      const s1 = document.getElementById('json-ld-office-service');
      if (s1) s1.remove();
      const s2 = document.getElementById('json-ld-office-faq');
      if (s2) s2.remove();
    };
  }, []);

  const whatIsIncluded = [
    {
      title: "Trash Removal & Liner Replacement",
      desc: "All desk, office, conference room, and kitchen bins emptied, sanitized, and re-lined."
    },
    {
      title: "Restrooms Fully Sanitized & Restocked",
      desc: "Toilets, urinals, sinks, mirrors, partition walls, and floors scrubbed, sanitized, and paper/soap dispensers fully replenished."
    },
    {
      title: "Break Rooms & Kitchen Sanitation",
      desc: "Counters, sinks, appliance exteriors wiped and sanitized, tables disinfected, and kitchen floors degreased and mopped."
    },
    {
      title: "High-Touch Point Disinfection",
      desc: "Door handles, push bars, light switches, conference room surfaces, and shared office equipment sanitized."
    },
    {
      title: "Desks & Common Area Dusting",
      desc: "Reception counters, desks, waiting room tables, and common area hard surfaces carefully dusted and wiped."
    },
    {
      title: "Complete Floor Care",
      desc: "Thorough vacuuming of carpets and mats, plus vacuuming and damp mopping of hardwood, tile, and vinyl floors."
    },
    {
      title: "Interior Glass & Partition Cleaning",
      desc: "Entry doors, glass partitions, sidelights, and conference room glass spot-cleaned for a streak-free shine."
    }
  ];

  const whyChooseUs = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Fully Insured & Bonded",
      desc: "$2M general liability policy protects your workplace, equipment, and sensitive corporate environment."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Background-Checked Crews",
      desc: "Every cleaner is thoroughly vetted and trained before receiving building keys or security access codes."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Over 20 Years Locally Owned",
      desc: "A trusted, consistent, family-run Kansas City team committed to long-term commercial relationships."
    },
    {
      icon: <Users className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Consistent Dedicated Teams",
      desc: "The same trained crew visits your building every time, learning your exact layout, preferences, and security protocols."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Clear Written Scope",
      desc: "Itemized checklists and clear communication ensure you know exactly what is cleaned and how often."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#4A5D4E]" />,
      title: "100% Satisfaction Guarantee",
      desc: "Any detail not meeting your high standards reported within 24 hours will be promptly re-cleaned free."
    }
  ];

  const faqs = [
    {
      q: "Do you provide office cleaning in Kansas City and Overland Park?",
      a: "Yes. ShineWell provides professional office and corporate cleaning across the KC metro, from small offices to multi-suite corporate floors, with insured, background-checked crews and after-hours scheduling."
    },
    {
      q: "Can you clean our office after business hours?",
      a: "Yes. Most clients choose after-hours or early-morning cleaning so their team is never disrupted during the workday."
    },
    {
      q: "How is office cleaning priced?",
      a: "After a free walkthrough, based on square footage, type of space, scope, and frequency. Recurring plans lower the per-visit cost compared to one-time cleaning."
    },
    {
      q: "Do you clean multi-suite corporate floors?",
      a: "Yes. We scale from a single office suite to full corporate floors in KC business districts like Corporate Woods."
    }
  ];

  const serviceAreas = [
    "Overland Park", "Corporate Woods", "College Boulevard Corridor", "Leawood", 
    "Prairie Village", "Lenexa", "Olathe", "Shawnee", "Mission", "Merriam", 
    "Fairway", "Roeland Park", "Stilwell", "Crossroads KC", "Brookside", "Country Club Plaza"
  ];

  return (
    <div className="bg-[#F9F8F6] min-h-screen pt-24 pb-16 text-[#2C302E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        
        {/* Breadcrumb Navigation */}
        <div className="text-sm text-[#5c635f] mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-[#607564] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/commercial-cleaning-kansas-city" className="hover:text-[#607564] transition-colors">Commercial Cleaning</Link>
          <span>/</span>
          <span className="text-[#2C302E] font-medium">Office &amp; Corporate Cleaning</span>
        </div>

        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-10">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#CAD4CD]/30 text-[#4A5D4E] uppercase tracking-wider border border-[#CAD4CD]/50">
              <Building2 className="w-3.5 h-3.5" /> Corporate Janitorial Services
            </span>
            <a 
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#e8e5df] text-xs font-medium text-[#2C302E] shadow-xs hover:border-[#CAD4CD] transition-all"
              id="office-hero-google-badge"
            >
              <span className="text-[#FBBC05]">★★★★★</span>
              <span>5.0 (28 reviews on Google)</span>
            </a>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] font-medium leading-tight mb-6">
            Office &amp; Corporate Cleaning in Kansas City &amp; Overland Park
          </h1>
        </section>

        {/* Quick Answer Box */}
        <div className="bg-[#CAD4CD]/15 p-6 sm:p-8 rounded-2xl border border-[#CAD4CD]/40 max-w-4xl mx-auto shadow-sm mb-12">
          <p className="text-base sm:text-lg text-[#2C302E] leading-relaxed font-light">
            <strong>Quick answer:</strong> ShineWell provides professional office and corporate cleaning across the Kansas City metro — from small professional offices to multi-suite corporate floors in areas like Corporate Woods, Overland Park, and the Crossroads. We're fully insured, our crews are background-checked, and we schedule after hours or early morning so your team is never interrupted. Flexible recurring janitorial service, a clear scope, and a satisfaction guarantee.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 items-center pt-4 border-t border-[#CAD4CD]/40">
            <a 
              href="tel:9132204748" 
              className="inline-flex items-center gap-2 bg-[#C86B53] hover:bg-[#b55e47] text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm"
              id="office-quick-answer-call-btn"
            >
              <Phone className="w-4 h-4" /> Call Us Now: (913) 220-4748
            </a>
            <a 
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F2F0EA] text-[#2C302E] border border-[#e8e5df] px-5 py-3 rounded-full text-sm font-medium transition-all shadow-xs"
              id="office-quick-answer-review-btn"
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
            src={commercialOfficeImg} 
            alt="Office cleaning in Corporate Woods Overland Park and Kansas City"
            className="w-full h-72 sm:h-96 object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* From Small Offices to Corporate Floors Section */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl border border-[#e8e5df] shadow-sm mb-16">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-4">
            From small offices to corporate floors
          </h2>
          <p className="text-[#5c635f] text-base sm:text-lg leading-relaxed font-light mb-4">
            Whether you run a small professional office — a law firm, agency, accounting practice — or manage a multi-suite corporate floor, ShineWell scales to your space. We serve everything from a single suite to full floors in KC's business districts, including Corporate Woods and the College Boulevard corridor, with a consistent, trained crew that learns your office and your standards.
          </p>
          <p className="text-[#5c635f] text-base leading-relaxed font-light">
            Our teams operate with strict respect for confidential documents, sensitive technology, and building security codes, ensuring seamless operations day in and day out.
          </p>
        </div>

        {/* What's Included in Office Cleaning */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-3">
              What's included in office cleaning
            </h2>
            <p className="text-[#5c635f] text-base max-w-2xl mx-auto">
              Every plan is customized after a walkthrough, but a typical office clean covers complete janitorial care:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatIsIncluded.map((item, idx) => (
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

        {/* After-Hours Scheduling Box */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#8BA192]/10 via-[#CAD4CD]/20 to-[#8BA192]/10 p-8 sm:p-10 rounded-2xl border border-[#CAD4CD]/50 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#e8e5df]">
              <Clock className="w-7 h-7 text-[#4A5D4E]" />
            </div>
            <div>
              <h2 className="text-2xl font-serif text-[#2C302E] mb-2">After-hours scheduling — the office cleaning you never see</h2>
              <p className="text-[#5c635f] text-base leading-relaxed font-light">
                The best office cleaning happens when your team isn't there. We work after hours or early morning, so your staff walks into a fresh space and cleaning never disrupts the workday. Recurring schedules — nightly, several times a week, or weekly — are built around your hours, with the security and reliability corporate spaces need.
              </p>
            </div>
          </div>
        </div>

        {/* Why KC Businesses Choose ShineWell */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-3">
              Why KC businesses choose ShineWell
            </h2>
            <p className="text-[#5c635f] text-base max-w-2xl mx-auto">
              Trusted by office managers, business owners, and facilities directors across Johnson County and the KC metro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((prop, idx) => (
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

        {/* How Office Cleaning is Priced */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl border border-[#e8e5df] shadow-sm mb-16">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#C86B53]/10 flex items-center justify-center shrink-0">
              <DollarSign className="w-6 h-6 text-[#C86B53]" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-2">
                How office cleaning is priced
              </h2>
              <p className="text-[#5c635f] text-base leading-relaxed font-light mb-4">
                Office cleaning is quoted after a quick free walkthrough, based on your square footage, the type of space, the scope, and how often you need service. Recurring plans lower the per-visit cost compared to one-time cleans. A walkthrough gives you an accurate number — no guessing over the phone.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="tel:9132204748" 
                  className="text-sm font-medium text-[#C86B53] hover:underline flex items-center gap-1"
                >
                  Schedule a walkthrough &raquo; Call (913) 220-4748
                </a>
                <span className="text-gray-300">|</span>
                <Link 
                  to="/commercial-cleaning-kansas-city" 
                  className="text-sm font-medium text-[#607564] hover:underline"
                >
                  Explore all commercial services &raquo;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service Area */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl border border-[#e8e5df] shadow-sm mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#CAD4CD]/30 text-[#4A5D4E] uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" /> Metro KC Coverage
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-3">
            Serving offices across Overland Park &amp; the KC metro
          </h2>
          <p className="text-[#5c635f] text-base leading-relaxed font-light max-w-2xl mx-auto mb-6">
            Overland Park, Corporate Woods, Leawood, Prairie Village, Lenexa, Olathe, the College Boulevard corridor, the Crossroads, and the greater KC area on both the Kansas and Missouri sides.
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
              Get a free walkthrough &amp; quote for your office
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light">
              Ready for a cleaner, healthier, and more productive workplace? Request your custom office cleaning quote with our vetted, insured team.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a 
                href="tel:9132204748" 
                className="bg-[#C86B53] hover:bg-[#b55e47] text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-md inline-flex items-center gap-2"
                id="office-cta-call-btn"
              >
                <Phone className="w-5 h-5" /> Call Us Now: (913) 220-4748
              </a>
              <a 
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2C302E] hover:bg-gray-100 px-7 py-4 rounded-full text-base font-medium transition-all shadow-md inline-flex items-center gap-2"
                id="office-cta-review-btn"
              >
                <span>Rate Us on Google</span>
                <ExternalLink className="w-4 h-4 text-[#5c635f]" />
              </a>
            </div>
            <div className="mt-6 flex justify-center items-center gap-4 text-xs text-gray-400">
              <span>Looking for general commercial janitorial info?</span>
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
