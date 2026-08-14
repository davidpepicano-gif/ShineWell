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
  Briefcase, 
  Check, 
  ChevronDown, 
  Building2, 
  Activity, 
  ShoppingBag, 
  Scissors, 
  Compass, 
  Hammer,
  DollarSign,
  Phone,
  Star,
  Quote,
  ExternalLink
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
      desc: "From small professional offices to multi-suite corporate floors in areas like Corporate Woods, Overland Park, and the Crossroads.",
      path: "/office-cleaning-kansas-city"
    },
    {
      icon: <Activity className="w-6 h-6 text-[#607564]" />,
      title: "Medical & Dental Offices",
      desc: "Sanitation-focused cleaning with extreme attention to clinical cleanliness and high-touch surfaces.",
      path: "/dental-office-cleaning-kansas-city"
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-[#607564]" />,
      title: "Retail & Showrooms",
      desc: "Spotless customer-facing spaces, bright floors, clean glass, and pristine entryways that welcome visitors.",
      path: "/retail-cleaning-kansas-city"
    },
    {
      icon: <Scissors className="w-6 h-6 text-[#607564]" />,
      title: "Salons, Studios & Fitness",
      desc: "High-standard hygiene and fresh environments for wellness and boutique lifestyle spaces.",
      path: "/salon-fitness-cleaning-kansas-city"
    },
    {
      icon: <Compass className="w-6 h-6 text-[#607564]" />,
      title: "Property Management Areas",
      desc: "Keeping apartment common areas, residential lobbies, corridors, and clubhouses immaculate.",
      path: "/property-management-cleaning-kansas-city"
    },
    {
      icon: <Hammer className="w-6 h-6 text-[#607564]" />,
      title: "Post-Construction Cleanup",
      desc: "Detailed dust removal and deep clean for newly built or renovated commercial environments.",
      path: "/services/post-construction"
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
      title: "Rated 5.0 on Google (28 Reviews)",
      desc: "Trusted by top local homeowners and businesses across the KC metro with 28 verified 5.0-star reviews."
    }
  ];

  const realReviews = [
    {
      name: "David Swaters",
      role: "Commercial Client in Kansas City",
      text: "ShineWell Commercial Cleaning Services were top notch ! On time , service and professionalism are second to none! They go out of their way to make sure everything is done right ! Came early and stayed late to get the job done. I couldn't be happier. Thanks",
      rating: 5
    },
    {
      name: "Ariana Goodridge",
      role: "Verified Client in Overland Park",
      text: "They came right out and did absolutely amazing!! Everything smelled and looked amazing. I will definitely be using their service again!! They cleaned every single detail.",
      rating: 5
    },
    {
      name: "Jessica Gilmore",
      role: "Verified Client in KC Metro",
      text: "ShineWell cleaning did an amazing job deep cleaning. I am a busy working mother of 3. I would recommend their work! Everything is sparkling clean! I will be using them going forward.",
      rating: 5
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

  const googleReviewUrl = "https://share.google/3oMRqAPyjGZaUcAO6";

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
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Top Google Trust Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-[#607564]/10 text-[#607564] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                Premium Commercial Services
              </span>
              <a 
                href={googleReviewUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#e8e5df] shadow-sm hover:shadow-md hover:border-[#CAD4CD] transition-all group"
                id="hero-google-trust-badge"
              >
                <svg aria-hidden="true" focusable="false" className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="flex text-[#FBBC05]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} aria-hidden="true" focusable="false" className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-medium text-[#2C302E]">5.0 (28 reviews on Google)</span>
              </a>
            </div>

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
              <a 
                href="tel:9132204748" 
                className="bg-[#C86B53] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#b55e47] transition-all text-center flex items-center justify-center gap-2 hover:shadow-lg"
                id="hero-call-button"
              >
                <Phone aria-hidden="true" focusable="false" className="w-5 h-5 shrink-0" />
                Call Us Now: (913) 220-4748
              </a>
              <a 
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2C302E] border border-[#e8e5df] px-6 py-4 rounded-full font-medium text-base hover:bg-[#F2F0EA] hover:border-[#CAD4CD] transition-all text-center flex items-center justify-center gap-2 shadow-sm"
                id="hero-review-button"
              >
                <span className="text-[#FBBC05]">★★★★★</span>
                <span>Leave us a Google Review</span>
                <ExternalLink className="w-4 h-4 text-[#5c635f]" />
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
                src={medicalOfficeCleanerImg} 
                alt="Commercial and office cleaning in Kansas City" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Floating Social Proof Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-[#e8e5df]/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <svg aria-hidden="true" focusable="false" className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-sm text-[#2C302E]">5.0</span>
                      <div className="flex text-[#FBBC05]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} aria-hidden="true" focusable="false" className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-[#5c635f]">28 Reviews on Google</p>
                  </div>
                </div>
                <a 
                  href={googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#607564] hover:text-[#C86B53] underline flex items-center gap-1"
                >
                  View Profile &raquo;
                </a>
              </div>
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
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link 
              to="/blog/bank-cleaning-kansas-city-overland-park" 
              className="text-[#C86B53] font-medium underline hover:text-[#4A5D4E] transition-colors"
            >
              Niche Guide: Bank & Financial Office Cleaning
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
                className="bg-white p-8 rounded-3xl border border-[#e8e5df] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#607564]/10 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif text-[#2C302E] mb-3">{item.title}</h3>
                  <p className="text-[#5c635f] font-light leading-relaxed mb-6">{item.desc}</p>
                </div>
                {item.path && (
                  <div>
                    <Link to={item.path} className="inline-flex items-center gap-1.5 text-sm font-medium text-[#607564] hover:text-[#2C302E] underline">
                      Learn more &raquo;
                    </Link>
                  </div>
                )}
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
                <h2 className="text-2xl font-serif text-[#2C302E]">
                  How Commercial Cleaning Pricing Works
                </h2>
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
                  <h3 className="text-lg font-serif text-[#2C302E] mb-2">{badge.title}</h3>
                  <p className="text-sm text-[#5c635f] font-light leading-relaxed">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Google Reviews Social Proof Section */}
        <section className="mb-20 bg-[#F9F8F6] p-8 md:p-12 rounded-[2.5rem] border border-[#e8e5df] shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2.5 bg-white px-4 py-2 rounded-full border border-[#e8e5df] shadow-xs mb-3">
                <svg aria-hidden="true" focusable="false" className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="flex text-[#FBBC05]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} aria-hidden="true" focusable="false" className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-[#2C302E]">5.0 · 28 reviews on Google</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C302E] mb-2">
                What Kansas City Businesses & Clients Say
              </h2>
              <p className="text-lg text-[#5c635f] font-light max-w-2xl">
                We're proud to hold a perfect 5.0 rating on Google across 28 client reviews throughout the Kansas City metro.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a 
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C86B53] hover:bg-[#b55e47] text-white px-6 py-3 rounded-full font-medium text-sm transition-all shadow-sm hover:shadow-md"
                id="social-proof-leave-review-btn"
              >
                <span>Leave us a Google Review ⭐</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F2F0EA] text-[#2C302E] border border-[#e8e5df] px-6 py-3 rounded-full font-medium text-sm transition-all shadow-sm"
                id="social-proof-read-reviews-btn"
              >
                <span>Read our 28 reviews</span>
                <ExternalLink className="w-4 h-4 text-[#5c635f]" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {realReviews.map((rev, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-7 rounded-3xl border border-[#e8e5df] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#FBBC05]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} aria-hidden="true" focusable="false" className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#5c635f] bg-[#F9F8F6] px-2.5 py-1 rounded-full border border-[#e8e5df]">
                      <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span>Google</span>
                    </div>
                  </div>
                  <p className="text-[#2C302E] font-light leading-relaxed text-sm mb-6 italic">
                    "{rev.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#e8e5df]">
                  <div className="w-10 h-10 rounded-full bg-[#607564] text-white flex items-center justify-center font-serif font-bold text-sm">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#2C302E] leading-tight">{rev.name}</h3>
                    <p className="text-xs text-[#5c635f] font-light">{rev.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Service area list */}
        <section className="mb-20 bg-[#CAD4CD]/10 p-8 md:p-12 rounded-[2.5rem] border border-[#e8e5df]/60 text-center">
          <div className="max-w-2xl mx-auto">
            <MapPin className="w-10 h-10 text-[#607564] mx-auto mb-4" />
            <h2 className="text-2xl font-serif text-[#2C302E] mb-4">Serving the Kansas City Metro</h2>
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
            {/* Google Rating Snippet inside CTA */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xs px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[#2C302E] mb-4">
              <span className="text-[#FBBC05]">★★★★★</span>
              <span>5.0 Star Rating · 28 Google Reviews</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#2C302E]">
              Get a Free Walkthrough & Quote
            </h2>
            <p className="text-lg text-[#2C302E]/90 font-light mb-8 max-w-xl mx-auto leading-relaxed">
              Ready for a cleaner, healthier, and more productive workplace? Request your custom commercial estimate walkthrough with our vetted teams.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:9132204748" 
                className="bg-[#C86B53] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#b55e47] transition-all hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center justify-center gap-2"
                id="cta-call-button"
              >
                <Phone className="w-5 h-5" />
                Call Us Now: (913) 220-4748
              </a>
              <a 
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2C302E] px-8 py-4 rounded-full font-medium text-base hover:bg-[#F9F8F6] transition-all hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center justify-center gap-2"
                id="cta-rate-us-button"
              >
                <span>Rate Us on Google</span>
                <ExternalLink className="w-4 h-4 text-[#5c635f]" />
              </a>
            </div>
          </div>
        </section>

        {/* Commercial Cleaning Guides & Resources Section */}
        <section className="mb-20 bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#e8e5df] shadow-sm">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-xs font-bold text-[#607564] uppercase tracking-wider mb-2 block">Office Insights</span>
            <h2 className="text-3xl font-serif text-[#2C302E] mb-3">Commercial Cleaning Guides for KC Office Managers</h2>
            <p className="text-[#5c635f] font-light leading-relaxed">
              Learn more about maintaining a healthy, high-standard workplace and choosing the right commercial cleaning partner:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F9F8F6] p-6 rounded-2xl border border-[#e8e5df]">
              <h3 className="font-serif text-xl text-[#2C302E] mb-2">
                <Link to="/blog/recurring-office-cleaning-kansas-city" className="hover:text-[#C86B53] transition-colors">
                  Recurring Office Cleaning in KC
                </Link>
              </h3>
              <p className="text-sm text-[#5c635f] font-light mb-4">
                Discover ideal schedules, customized scopes, and benefits of ongoing commercial service.
              </p>
              <Link to="/blog/recurring-office-cleaning-kansas-city" className="inline-flex items-center text-sm font-medium text-[#607564] hover:text-[#C86B53] transition-colors">
                Read guide <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="bg-[#F9F8F6] p-6 rounded-2xl border border-[#e8e5df]">
              <h3 className="font-serif text-xl text-[#2C302E] mb-2">
                <Link to="/blog/how-to-choose-commercial-cleaning-company-kansas-city" className="hover:text-[#C86B53] transition-colors">
                  How to Choose a Cleaner
                </Link>
              </h3>
              <p className="text-sm text-[#5c635f] font-light mb-4">
                What office managers should look for: insurance, background checks, and walkthrough quotes.
              </p>
              <Link to="/blog/how-to-choose-commercial-cleaning-company-kansas-city" className="inline-flex items-center text-sm font-medium text-[#607564] hover:text-[#C86B53] transition-colors">
                Read buyer's guide <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="bg-[#F9F8F6] p-6 rounded-2xl border border-[#e8e5df]">
              <h3 className="font-serif text-xl text-[#2C302E] mb-2">
                <Link to="/blog/how-to-keep-your-office-clean-and-healthy" className="hover:text-[#C86B53] transition-colors">
                  Keep Your Office Healthy
                </Link>
              </h3>
              <p className="text-sm text-[#5c635f] font-light mb-4">
                High-touch point sanitization routines, restroom care, and seasonal germ prevention.
              </p>
              <Link to="/blog/how-to-keep-your-office-clean-and-healthy" className="inline-flex items-center text-sm font-medium text-[#607564] hover:text-[#C86B53] transition-colors">
                Read health guide <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
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
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg md:text-xl text-[#2C302E] font-medium leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown aria-hidden="true" focusable="false" className={`w-5 h-5 text-[#5c635f] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#C86B53]' : ''}`} />
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
            "telephone": "+1-913-220-4748",
            "areaServed": "Kansas City metro (Overland Park, KS & MO)",
            "url": "https://shinewellcleaning.com/commercial-cleaning-kansas-city"
          },
          "areaServed": { "@type": "Place", "name": "Kansas City Metro" },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "28",
            "bestRating": "5"
          }
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
