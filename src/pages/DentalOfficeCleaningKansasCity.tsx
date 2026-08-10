import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import medicalOfficeCleanerImg from '../assets/images/medical_office_cleaner_1786068880525.jpg';
import { 
  ShieldCheck, 
  UserCheck, 
  CheckCircle, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Activity, 
  ChevronDown, 
  Phone,
  Star,
  Building,
  Check
} from 'lucide-react';

export default function DentalOfficeCleaningKansasCity() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Dental & Medical Office Cleaning in Kansas City | ShineWell";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Dental & medical office cleaning across the KC metro. Insured, background-checked, after-hours scheduling. Free walkthrough & quote.");
    }

    // Inject JSON-LD Service & FAQ Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Dental and medical office cleaning",
      "provider": {
        "@type": "LocalBusiness",
        "name": "ShineWell Cleaning Services",
        "telephone": "+1-913-220-4748",
        "areaServed": "Kansas City metro (Overland Park, KS & MO)",
        "url": "https://shinewellcleaning.com/dental-office-cleaning-kansas-city"
      },
      "areaServed": { "@type": "Place", "name": "Kansas City Metro" }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who provides dental and medical office cleaning in Kansas City?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ShineWell offers dental and medical office cleaning across the KC metro, including Overland Park and Corporate Woods, with insured, background-checked crews, after-hours scheduling, and health-conscious sanitation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you clean outside of patient hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We schedule after hours or early morning so cleaning never disrupts appointments or patient care."
          }
        },
        {
          "@type": "Question",
          "name": "Are you insured for cleaning healthcare offices?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we carry $2 million in general liability and bonding, and all crews are background-checked."
          }
        },
        {
          "@type": "Question",
          "name": "Does ShineWell handle clinical sterilization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide general and high-touch cleaning and sanitation of the office. Clinical sterilization of instruments and treatment surfaces stays with clinical staff per their protocols."
          }
        }
      ]
    };

    let scriptService = document.getElementById('json-ld-dental-service') as HTMLScriptElement | null;
    if (!scriptService) {
      scriptService = document.createElement('script');
      scriptService.id = 'json-ld-dental-service';
      scriptService.type = 'application/ld+json';
      document.head.appendChild(scriptService);
    }
    scriptService.textContent = JSON.stringify(serviceSchema);

    let scriptFaq = document.getElementById('json-ld-dental-faq') as HTMLScriptElement | null;
    if (!scriptFaq) {
      scriptFaq = document.createElement('script');
      scriptFaq.id = 'json-ld-dental-faq';
      scriptFaq.type = 'application/ld+json';
      document.head.appendChild(scriptFaq);
    }
    scriptFaq.textContent = JSON.stringify(faqSchema);

    return () => {
      const s1 = document.getElementById('json-ld-dental-service');
      if (s1) s1.remove();
      const s2 = document.getElementById('json-ld-dental-faq');
      if (s2) s2.remove();
    };
  }, []);

  const whatWeClean = [
    {
      title: "Reception & Waiting Areas",
      desc: "Seating, check-in desks, glass entry doors, door handles, light switches, and spotless floors that instill patient confidence."
    },
    {
      title: "Exam & Operatory Rooms",
      desc: "Surfaces, fixtures, and high-touch points (general & non-clinical cleaning that complements clinical protocols)."
    },
    {
      title: "Patient & Staff Restrooms",
      desc: "Thoroughly sanitized fixtures, mirrors, partitions, tile grout, and fully restocked paper/soap supplies."
    },
    {
      title: "Break Rooms & Staff Areas",
      desc: "Counters, tables, sink areas, exterior appliances, trash disposal, and sanitized floors for staff comfort."
    },
    {
      title: "High-Touch Point Disinfection",
      desc: "Frequent sanitization of door knobs, handles, counter edges, light switches, and shared office equipment."
    },
    {
      title: "Floors & Entryways",
      desc: "HEPA-vacuumed carpets, hard floor mopping with hospital-grade disinfectant solutions, and clean glass."
    }
  ];

  const valueProps = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Fully Insured & Bonded",
      desc: "$2M general liability insurance protection so your practice is completely covered."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Background-Checked Crews",
      desc: "Every cleaner is thoroughly vetted and trained prior to accessing your office facility."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#4A5D4E]" />,
      title: "After-Hours Scheduling",
      desc: "Nightly or early morning cleanings so patient appointments and clinic routines are never interrupted."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Health-Conscious Sanitation",
      desc: "Focus on high-touch surfaces, waiting room hygiene, and commercial-grade infection prevention."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#4A5D4E]" />,
      title: "Consistency & Reliability",
      desc: "The same dedicated crew learns your practice layout, preferences, and security protocols."
    },
    {
      icon: <Star className="w-6 h-6 text-[#4A5D4E]" />,
      title: "24-Hour Guarantee",
      desc: "Locally owned for 20+ years with a 5.0 Google rating. Any miss reported within 24h is re-cleaned free."
    }
  ];

  const faqs = [
    {
      q: "Who provides dental and medical office cleaning in Kansas City?",
      a: "ShineWell offers dental and medical office cleaning across the KC metro — Overland Park, Corporate Woods, Leawood, and beyond — with insured, background-checked crews, after-hours scheduling, and health-conscious sanitation."
    },
    {
      q: "Do you clean outside of patient hours?",
      a: "Yes. We schedule after hours or early morning so cleaning never disrupts appointments, staff routines, or patient care."
    },
    {
      q: "Are you insured for cleaning healthcare offices?",
      a: "Yes — we carry $2 million in general liability insurance and bonding, and all crew members undergo background checks."
    },
    {
      q: "Does ShineWell handle clinical sterilization?",
      a: "ShineWell provides general and high-touch cleaning and sanitation of the office facilities. Clinical sterilization of treatment instruments and clinical surfaces is handled by your clinical staff per your medical protocols."
    }
  ];

  return (
    <div className="bg-[#F9F8F6] min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#CAD4CD]/30 text-[#4A5D4E] uppercase tracking-wider mb-4 border border-[#CAD4CD]/50">
            <Activity className="w-3.5 h-3.5" /> Healthcare & Dental Facility Cleaning
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2C302E] font-medium leading-tight mb-6">
            Dental &amp; Medical Office Cleaning in Kansas City
          </h1>
        </div>

        {/* Quick Answer Box */}
        <div className="bg-[#CAD4CD]/15 p-6 sm:p-8 rounded-2xl border border-[#CAD4CD]/40 max-w-4xl mx-auto shadow-sm mb-12">
          <p className="text-base sm:text-lg text-[#2C302E] leading-relaxed font-light">
            <strong>Quick answer:</strong> ShineWell provides dental and medical office cleaning across the Kansas City metro — dental practices, clinics, labs, and healthcare offices in Overland Park, Corporate Woods, and beyond. We're fully insured, our crews are background-checked, and we schedule after hours or early morning so patient care is never disrupted, with health-conscious sanitation focused on high-touch surfaces, restrooms, and waiting areas. Free walkthrough and quote.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 items-center pt-4 border-t border-[#CAD4CD]/40">
            <a 
              href="tel:9132204748" 
              className="inline-flex items-center gap-2 bg-[#C86B53] hover:bg-[#b55e47] text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm"
            >
              <Phone className="w-4 h-4" /> Call Us Now: (913) 220-4748
            </a>
          </div>
        </div>

        {/* High quality imagery */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-md mb-16 border border-[#e8e5df]">
          <img 
            src={medicalOfficeCleanerImg} 
            alt="dental and medical office cleaning in Overland Park & Kansas City"
            className="w-full h-72 sm:h-96 object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Section: Why healthcare spaces need a specialized approach */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl border border-[#e8e5df] shadow-sm mb-16">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-4">
            Why healthcare spaces need a specialized cleaning approach
          </h2>
          <p className="text-[#5c635f] text-base sm:text-lg leading-relaxed mb-6 font-light">
            A dental or medical office isn't a regular office. Patients notice cleanliness the moment they walk in, and it's inseparable from their trust in your practice. Beyond appearance, healthcare spaces demand consistent sanitation of high-touch surfaces and shared areas. ShineWell brings a health-conscious, detail-first approach built for these environments.
          </p>
          <div className="p-4 bg-[#F9F8F6] rounded-xl border border-[#e8e5df] text-sm text-[#5c635f]">
            <strong>Note:</strong> ShineWell provides general and high-touch cleaning and sanitation. Clinical/biohazard sterilization of instruments and treatment surfaces is handled by your clinical staff per your protocols.
          </div>
        </div>

        {/* What We Clean Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-3">
              What we clean in dental &amp; medical offices
            </h2>
            <p className="text-[#5c635f] text-base max-w-2xl mx-auto">
              From patient reception lobbies to non-clinical exam room surfaces and staff lounges.
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

        {/* Scheduling Built Around Your Practice */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#8BA192]/10 via-[#CAD4CD]/20 to-[#8BA192]/10 p-8 sm:p-10 rounded-2xl border border-[#CAD4CD]/50 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#e8e5df]">
              <Clock className="w-7 h-7 text-[#4A5D4E]" />
            </div>
            <div>
              <h2 className="text-2xl font-serif text-[#2C302E] mb-2">Scheduling built around your practice</h2>
              <p className="text-[#5c635f] text-base leading-relaxed font-light">
                We work after hours or early morning, so your team arrives to a fresh, ready space and cleaning never interrupts appointments. Recurring schedules — nightly, several times a week, or weekly — are built around your hours and patient flow.
              </p>
            </div>
          </div>
        </div>

        {/* Why KC Practices Choose ShineWell */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2C302E] mb-3">
              Why KC practices choose ShineWell
            </h2>
            <p className="text-[#5c635f] text-base max-w-2xl mx-auto">
              Over 20 years of family-owned, trusted commercial cleaning experience across Kansas City.
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
            Serving healthcare offices across the KC metro
          </h2>
          <p className="text-[#5c635f] text-base leading-relaxed font-light max-w-2xl mx-auto mb-6">
            Overland Park, Corporate Woods, Leawood, Prairie Village, the College Boulevard corridor, and the greater Kansas City metro on both the Kansas and Missouri sides.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs font-medium text-[#4A5D4E]">
            <span className="bg-[#F9F8F6] px-3 py-1.5 rounded-lg border border-[#e8e5df]">Overland Park</span>
            <span className="bg-[#F9F8F6] px-3 py-1.5 rounded-lg border border-[#e8e5df]">Corporate Woods</span>
            <span className="bg-[#F9F8F6] px-3 py-1.5 rounded-lg border border-[#e8e5df]">Leawood</span>
            <span className="bg-[#F9F8F6] px-3 py-1.5 rounded-lg border border-[#e8e5df]">Prairie Village</span>
            <span className="bg-[#F9F8F6] px-3 py-1.5 rounded-lg border border-[#e8e5df]">College Blvd Corridor</span>
            <span className="bg-[#F9F8F6] px-3 py-1.5 rounded-lg border border-[#e8e5df]">Kansas City Metro</span>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium mb-4">
              Get a free walkthrough for your practice
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light">
              Ready for a cleaner, healthier practice? Request your free walkthrough and custom quote, or contact our team directly.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a 
                href="tel:9132204748" 
                className="bg-[#C86B53] hover:bg-[#b55e47] text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-md inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call Us Now: (913) 220-4748
              </a>
            </div>
            <div className="mt-6 flex justify-center items-center gap-4 text-xs text-gray-400">
              <span>Looking for general commercial services?</span>
              <Link to="/commercial-cleaning-kansas-city" className="text-[#CAD4CD] underline hover:text-white">
                View Commercial Cleaning Kansas City »
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
