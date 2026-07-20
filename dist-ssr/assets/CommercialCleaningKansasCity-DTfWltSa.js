import { jsxDEV } from "react/jsx-dev-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, DollarSign, MapPin, ChevronDown, Building2, Activity, ShoppingBag, Scissors, Compass, Hammer, ShieldCheck, UserCheck, Clock, CheckCircle, Sparkles, Briefcase } from "lucide-react";
function CommercialCleaningKansasCity() {
  const [activeFaq, setActiveFaq] = useState(null);
  useEffect(() => {
    document.title = "Commercial Cleaning Services in Kansas City | ShineWell";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Reliable commercial & office cleaning across the Kansas City metro. Fully insured, background-checked crews, flexible schedules, free walkthrough.");
    }
  }, []);
  const whatWeClean = [
    {
      icon: /* @__PURE__ */ jsxDEV(Building2, { className: "w-6 h-6 text-[#607564]" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      title: "Offices & Corporate Suites",
      desc: "From small professional offices to multi-suite corporate floors in areas like Corporate Woods, Overland Park, and the Crossroads."
    },
    {
      icon: /* @__PURE__ */ jsxDEV(Activity, { className: "w-6 h-6 text-[#607564]" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      title: "Medical & Dental Offices",
      desc: "Sanitation-focused cleaning with extreme attention to clinical-level cleanliness and disinfecting high-touch surfaces."
    },
    {
      icon: /* @__PURE__ */ jsxDEV(ShoppingBag, { className: "w-6 h-6 text-[#607564]" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this),
      title: "Retail & Showrooms",
      desc: "Spotless customer-facing spaces, bright floors, clean glass, and pristine entryways that welcome visitors."
    },
    {
      icon: /* @__PURE__ */ jsxDEV(Scissors, { className: "w-6 h-6 text-[#607564]" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this),
      title: "Salons, Studios & Fitness",
      desc: "High-standard hygiene and fresh environments for wellness and boutique lifestyle spaces."
    },
    {
      icon: /* @__PURE__ */ jsxDEV(Compass, { className: "w-6 h-6 text-[#607564]" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this),
      title: "Property Management Areas",
      desc: "Keeping apartment common areas, residential lobbies, corridors, and clubhouses immaculate."
    },
    {
      icon: /* @__PURE__ */ jsxDEV(Hammer, { className: "w-6 h-6 text-[#607564]" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
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
      icon: /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-8 h-8 text-[#C86B53]" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this),
      title: "Fully Insured & Bonded",
      desc: "We carry $2 million in general liability insurance, ensuring your commercial property is fully protected."
    },
    {
      icon: /* @__PURE__ */ jsxDEV(UserCheck, { className: "w-8 h-8 text-[#C86B53]" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      title: "Background-Checked Crews",
      desc: "Every member of our crew is vetted and background-checked before they ever step foot inside your space."
    },
    {
      icon: /* @__PURE__ */ jsxDEV(Clock, { className: "w-8 h-8 text-[#C86B53]" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this),
      title: "Over 20 Years Locally Owned",
      desc: "A dedicated family-run KC team, not a faceless national franchise. We hold ourselves to real personal standards."
    },
    {
      icon: /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-8 h-8 text-[#C86B53]" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this),
      title: "100% Satisfaction Guarantee",
      desc: "If any area is missed, notify us within 24 hours. We return to re-clean it immediately, completely free of charge."
    },
    {
      icon: /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-8 h-8 text-[#C86B53]" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 100,
        columnNumber: 13
      }, this),
      title: "Consistent Vetted Teams",
      desc: "We assign dedicated, trained teams to your property so they learn your specific layout, requirements, and standards."
    },
    {
      icon: /* @__PURE__ */ jsxDEV(Briefcase, { className: "w-8 h-8 text-[#C86B53]" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 105,
        columnNumber: 13
      }, this),
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
  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "pt-24 pb-16 bg-[#F9F8F6] min-h-screen text-[#2C302E]", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "mb-6 flex gap-2 text-sm text-[#5c635f] font-light", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:text-[#607564] transition-colors", children: "Home" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("span", { children: "/" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/services", className: "hover:text-[#607564] transition-colors", children: "Services" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 146,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("span", { children: "/" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "text-[#2C302E] font-normal", children: "Commercial Cleaning" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-12 gap-12 items-center mb-16", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "lg:col-span-7",
          children: [
            /* @__PURE__ */ jsxDEV("span", { className: "inline-block bg-[#607564]/10 text-[#607564] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4", children: "Premium Commercial Services" }, void 0, false, {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 159,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] mb-6 leading-tight", children: "Commercial Cleaning Services in Kansas City" }, void 0, false, {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 162,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-[#CAD4CD]/20 p-6 md:p-8 rounded-2xl border border-[#e8e5df] text-left shadow-sm mb-6", children: /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-[#2C302E] leading-relaxed font-light", children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "Quick answer:" }, void 0, false, {
                fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
                lineNumber: 169,
                columnNumber: 17
              }, this),
              " ShineWell provides reliable commercial and office cleaning across the Kansas City metro — offices, medical and dental suites, retail, salons, and property-management spaces. We're fully insured, our crews are background-checked, and we build flexible recurring schedules (nightly, weekly, or biweekly) around your business hours, all backed by a 100% satisfaction guarantee. We serve Overland Park, Corporate Woods, the Crossroads, and the greater KC metro."
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 168,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 167,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 mt-8", children: [
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/booking",
                  className: "bg-[#C86B53] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#b55e47] transition-all text-center flex items-center justify-center gap-2 hover:shadow-lg",
                  children: [
                    "Request a Free Walkthrough",
                    /* @__PURE__ */ jsxDEV(ArrowRight, { "aria-hidden": "true", focusable: "false", className: "w-5 h-5" }, void 0, false, {
                      fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
                      lineNumber: 179,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
                  lineNumber: 174,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "tel:9133251400",
                  className: "border border-[#e8e5df] text-[#2C302E] bg-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-all text-center",
                  children: "Call (913) 325-1400"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
                  lineNumber: 181,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 173,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 153,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.8, delay: 0.1 },
          className: "lg:col-span-5",
          children: /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-[4/3] md:aspect-[16/10] lg:aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-[#e8e5df]", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop",
              alt: "Commercial and office cleaning in Kansas City",
              className: "w-full h-full object-cover",
              referrerPolicy: "no-referrer"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 197,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
            lineNumber: 196,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 190,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
      lineNumber: 152,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-[#CAD4CD]/10 py-4 px-6 rounded-2xl border border-[#e8e5df]/60 mb-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm", children: [
      /* @__PURE__ */ jsxDEV("span", { className: "font-medium text-[#5c635f]", children: "Related Commercial Resources:" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 209,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/blog/how-to-choose-commercial-cleaning-company-kansas-city",
            className: "text-[#C86B53] font-medium underline hover:text-[#4A5D4E] transition-colors",
            children: "Buyer's Guide: How to Choose a KC Commercial Cleaner"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
            lineNumber: 211,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("span", { className: "text-gray-300 hidden md:inline", children: "|" }, void 0, false, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 217,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/blog/how-to-keep-your-office-clean-and-healthy",
            className: "text-[#C86B53] font-medium underline hover:text-[#4A5D4E] transition-colors",
            children: "Office Guide: Keep Your Workplace Clean & Healthy"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
            lineNumber: 218,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 210,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
      lineNumber: 208,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "mb-20", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-serif text-[#2C302E] mb-4", children: "What We Clean" }, void 0, false, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 230,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light max-w-2xl mx-auto", children: "We handle the spaces your business runs in. Every corner, every surface, handled with extreme care." }, void 0, false, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 233,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 229,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: whatWeClean.map((item, idx) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 15 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: idx * 0.05 },
          className: "bg-white p-8 rounded-3xl border border-[#e8e5df] shadow-sm hover:shadow-md transition-shadow",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-full bg-[#607564]/10 flex items-center justify-center mb-6", children: item.icon }, void 0, false, {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 248,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-serif text-[#2C302E] mb-3", children: item.title }, void 0, false, {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 251,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light leading-relaxed", children: item.desc }, void 0, false, {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 252,
              columnNumber: 17
            }, this)
          ]
        },
        idx,
        true,
        {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 240,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 238,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
      lineNumber: 228,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "grid lg:grid-cols-12 gap-12 items-start mb-20", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-6 bg-white p-8 md:p-12 rounded-[2rem] border border-[#e8e5df] shadow-sm", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-serif text-[#2C302E] mb-6", children: "What's Included in a Commercial Clean" }, void 0, false, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 263,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light mb-8 leading-relaxed", children: "Every commercial cleaning plan is completely customized after an initial walkthrough, but a typical regular scope covers:" }, void 0, false, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 266,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4", children: typicalScope.map((scope, idx) => /* @__PURE__ */ jsxDEV("li", { className: "flex gap-3 items-start text-left", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-6 h-6 rounded-full bg-[#607564]/10 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxDEV(Check, { className: "w-4 h-4 text-[#607564]" }, void 0, false, {
            fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
            lineNumber: 273,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
            lineNumber: 272,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[#2C302E] font-light leading-relaxed", children: scope }, void 0, false, {
            fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
            lineNumber: 275,
            columnNumber: 19
          }, this)
        ] }, idx, true, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 271,
          columnNumber: 17
        }, this)) }, void 0, false, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 269,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 262,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-6 space-y-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-[#CAD4CD]/20 p-8 md:p-12 rounded-[2rem] border border-[#e8e5df]", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-serif text-[#2C302E] mb-4", children: "Flexible Recurring Schedules" }, void 0, false, {
            fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
            lineNumber: 284,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light leading-relaxed mb-6", children: "We work around your operations, not the other way around. Most commercial clients choose after-hours or early-morning service so your team walks into a fresh, inviting space and never sees us mid-day." }, void 0, false, {
            fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
            lineNumber: 287,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-5 rounded-2xl border border-[#e8e5df] text-center shadow-sm", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "block text-xs font-semibold tracking-wider text-[#607564] uppercase mb-1", children: "Nightly" }, void 0, false, {
                fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
                lineNumber: 292,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-light text-[#5c635f]", children: "High traffic suites & clinics" }, void 0, false, {
                fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
                lineNumber: 293,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 291,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-5 rounded-2xl border border-[#e8e5df] text-center shadow-sm", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "block text-xs font-semibold tracking-wider text-[#607564] uppercase mb-1", children: "Weekly" }, void 0, false, {
                fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
                lineNumber: 296,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-light text-[#5c635f]", children: "Busy professional offices" }, void 0, false, {
                fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
                lineNumber: 297,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 295,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-5 rounded-2xl border border-[#e8e5df] text-center shadow-sm", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "block text-xs font-semibold tracking-wider text-[#607564] uppercase mb-1", children: "Bi-Weekly" }, void 0, false, {
                fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
                lineNumber: 300,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-light text-[#5c635f]", children: "Small quiet workspaces" }, void 0, false, {
                fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
                lineNumber: 301,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 299,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
            lineNumber: 290,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-[#5c635f] font-light mt-6 italic", children: "* We also offer flexible one-time deep cleaning and custom post-construction detailing." }, void 0, false, {
            fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
            lineNumber: 304,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 283,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 md:p-12 rounded-[2rem] border border-[#e8e5df] shadow-sm", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-full bg-[#C86B53]/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(DollarSign, { className: "w-6 h-6 text-[#C86B53]" }, void 0, false, {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 313,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 312,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-serif text-[#2C302E]", children: "How Commercial Cleaning Pricing Works" }, void 0, false, {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 315,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
            lineNumber: 311,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light leading-relaxed", children: "Commercial cleaning is priced after a quick free walkthrough, based on your square footage, the type of space, the scope, and how often you need service." }, void 0, false, {
            fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
            lineNumber: 319,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light leading-relaxed mt-4", children: [
            "Recurring office cleaning in the KC area commonly runs in the range of about ",
            /* @__PURE__ */ jsxDEV("strong", { children: "$0.08–$0.20 per square foot per visit" }, void 0, false, {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 323,
              columnNumber: 94
            }, this),
            ", but the honest answer is that it depends on your space — a walkthrough gives you an accurate, no-obligation number. Recurring plans lower your per-visit cost."
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
            lineNumber: 322,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 310,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 282,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
      lineNumber: 259,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "mb-20 bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#e8e5df] shadow-sm", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-serif text-[#2C302E] mb-4", children: "Why Kansas City Businesses Choose ShineWell" }, void 0, false, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 332,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light", children: "Built on precision care, transparent communication, and over 20 years of local family trust." }, void 0, false, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 335,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 331,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: whyChooseUs.map((badge, idx) => /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4 items-start", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "shrink-0 p-2 rounded-xl bg-[#C86B53]/10", children: badge.icon }, void 0, false, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 343,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-serif text-[#2C302E] mb-2", children: badge.title }, void 0, false, {
            fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
            lineNumber: 347,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-[#5c635f] font-light leading-relaxed", children: badge.desc }, void 0, false, {
            fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
            lineNumber: 348,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 346,
          columnNumber: 17
        }, this)
      ] }, idx, true, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 342,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 340,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
      lineNumber: 330,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "mb-20 bg-[#CAD4CD]/10 p-8 md:p-12 rounded-[2.5rem] border border-[#e8e5df]/60 text-center", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV(MapPin, { className: "w-10 h-10 text-[#607564] mx-auto mb-4" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 358,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-serif text-[#2C302E] mb-4", children: "Serving the Kansas City Metro" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 359,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light leading-relaxed mb-6", children: [
        "We proudly clean businesses across ",
        /* @__PURE__ */ jsxDEV("strong", { children: "Overland Park, Corporate Woods, Leawood, Prairie Village, the Crossroads, Lee's Summit," }, void 0, false, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 361,
          columnNumber: 50
        }, this),
        " and the greater KC metro on both the Kansas and Missouri sides."
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 360,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
      lineNumber: 357,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
      lineNumber: 356,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "mb-20 bg-[#8BA192] text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl text-center relative overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-64 h-64 rounded-full bg-white/5 pointer-events-none" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 368,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 left-0 transform -translate-x-12 translate-y-12 w-64 h-64 rounded-full bg-white/5 pointer-events-none" }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 369,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-serif mb-4 text-[#2C302E]", children: "Get a Free Walkthrough & Quote" }, void 0, false, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 372,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#2C302E]/90 font-light mb-8 max-w-xl mx-auto leading-relaxed", children: "Ready for a cleaner, healthier, and more productive workplace? Request your custom commercial estimate walkthrough with our vetted teams." }, void 0, false, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 375,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row justify-center gap-4", children: [
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/booking",
              className: "bg-[#C86B53] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#b55e47] transition-all hover:-translate-y-0.5 hover:shadow-lg",
              children: "Request Free Commercial Walkthrough »"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 379,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "tel:9133251400",
              className: "bg-white text-[#2C302E] px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-all hover:-translate-y-0.5 hover:shadow-lg",
              children: "Call ShineWell: (913) 325-1400"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
              lineNumber: 385,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 378,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 371,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
      lineNumber: 367,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "max-w-4xl mx-auto mb-10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-serif text-[#2C302E] mb-4", children: "Frequently Asked Questions" }, void 0, false, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 398,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light", children: "Clear answers to help you choose the right partner for your facility." }, void 0, false, {
          fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
          lineNumber: 401,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 397,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: faqs.map((faq, idx) => {
        const isOpen = activeFaq === idx;
        return /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "bg-white rounded-2xl border border-[#e8e5df] shadow-sm overflow-hidden transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => toggleFaq(idx),
                  className: "w-full text-left p-6 md:p-8 flex justify-between items-center gap-4 focus:outline-none",
                  "aria-expanded": isOpen,
                  children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "font-serif text-lg md:text-xl text-[#2C302E] font-medium leading-snug", children: faq.q }, void 0, false, {
                      fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
                      lineNumber: 419,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV(ChevronDown, { "aria-hidden": "true", focusable: "false", className: `w-5 h-5 text-[#5c635f] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#C86B53]" : ""}` }, void 0, false, {
                      fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
                      lineNumber: 422,
                      columnNumber: 21
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
                  lineNumber: 414,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.3, ease: "easeInOut" },
                  children: /* @__PURE__ */ jsxDEV("div", { className: "px-6 pb-6 md:px-8 md:pb-8 pt-0 text-[#5c635f] font-light leading-relaxed border-t border-gray-50", children: faq.a }, void 0, false, {
                    fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
                    lineNumber: 432,
                    columnNumber: 25
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
                  lineNumber: 426,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
                lineNumber: 424,
                columnNumber: 19
              }, this)
            ]
          },
          idx,
          true,
          {
            fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
            lineNumber: 410,
            columnNumber: 17
          },
          this
        );
      }) }, void 0, false, {
        fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
        lineNumber: 406,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
      lineNumber: 396,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: `
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
        ` } }, void 0, false, {
      fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
      lineNumber: 445,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: `
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
        ` } }, void 0, false, {
      fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
      lineNumber: 461,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
    lineNumber: 140,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/CommercialCleaningKansasCity.tsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}
export {
  CommercialCleaningKansasCity as default
};
