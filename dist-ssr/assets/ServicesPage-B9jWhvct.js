import { jsxDEV } from "react/jsx-dev-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { c as commercialDeepCleaningImg, j as junkRemovalImg, h as hoarderImg, o as organizingImg, s as specializedImg } from "./regenerated_image_1783363406981-B8kgEWeO.js";
import { r as routineHousekeepingImg, d as deepCleaningImg } from "./regenerated_image_1783364438283-B-EPbRp7.js";
import { ArrowRight, Check } from "lucide-react";
function ServicesPage() {
  const [activeTab, setActiveTab] = useState("All Rooms");
  const residentialServices = [
    {
      image: routineHousekeepingImg,
      title: "Routine House Cleaning",
      desc: "Keeping your sanctuary fresh, week after week. We learn your preferences and treat your home with the utmost respect.",
      path: "/services/routine-housekeeping"
    },
    {
      image: deepCleaningImg,
      title: "Deep Cleaning",
      desc: "For when things have gotten a little out of hand. We get into the forgotten corners, baseboards, and behind the appliances.",
      path: "/services/deep-dives"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      title: "Move In / Move Out",
      desc: "Start fresh or leave a blank slate. We make transitions seamless with a meticulous, top to bottom clean.",
      path: "/services/move-in-move-out"
    }
  ];
  const specializedServices = [
    {
      image: hoarderImg,
      title: "Hoarder House Clean Up",
      desc: "Compassionate, efficient restoration for cluttered environments. We handle the heavy lifting with care and discretion.",
      path: "/services/hoarder-cleanup"
    },
    {
      image: organizingImg,
      title: "Organizing Service",
      desc: "Functional systems for your home or office. We help you declutter and create spaces that work for your daily life.",
      path: "/services/organizing"
    },
    {
      image: specializedImg,
      title: "Specialized Treatments",
      desc: "Targeted care for specific needs, including upholstery, carpet spot treatments, and eco friendly sanitization for sensitive spaces.",
      path: "/services/specialized-treatments"
    }
  ];
  const commercialServices = [
    {
      image: commercialDeepCleaningImg,
      title: "Light Commercial Cleaning",
      desc: "Elevate your workspace. We provide thorough, professional cleaning for offices and commercial spaces to ensure a healthy environment.",
      path: "/commercial-cleaning-kansas-city"
    },
    {
      image: junkRemovalImg,
      title: "Junk Removal with Dumpster",
      desc: "Full service removal of unwanted items with dumpster logistics handled. Perfect for office clear outs or large home projects.",
      path: "/services/junk-removal"
    },
    {
      image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop",
      title: "Post Construction",
      desc: "We clear the dust and debris after your renovation, leaving your newly updated space sparkling and ready to enjoy.",
      path: "/services/post-construction"
    }
  ];
  const comparisonData = {
    "All Rooms": [
      { name: "Dust light fixtures", routine: true, deep: true, move: true },
      { name: "Dust windowsills & window frames & ledges", routine: true, deep: true, move: true },
      { name: "Dust & tidy decor & personal items", routine: true, deep: true, move: true },
      { name: "Dust ceiling fans", routine: true, deep: true, move: true },
      { name: "Dust furniture, lamps & lampshades", routine: true, deep: true, move: true },
      { name: "Tidy area(s), fold blankets, arrange pillows, etc.", routine: true, deep: true, move: false },
      { name: "Clean all mirrors", routine: true, deep: true, move: true },
      { name: "Clean all light switches & doorknobs", routine: true, deep: true, move: true },
      { name: "Vacuum / sweep / mop floors", routine: true, deep: true, move: true },
      { name: "Empty garbage and replace the bag", routine: true, deep: true, move: true },
      { name: "Wipe down all doors and door frames", routine: false, deep: true, move: true },
      { name: "Clean baseboards", routine: false, deep: true, move: true },
      { name: "Wipe down inside of window sills & tracks", routine: false, deep: true, move: true }
    ],
    "Kitchen": [
      { name: "Wipe down exterior of all appliances", routine: true, deep: true, move: true },
      { name: "Clean microwave inside and out", routine: true, deep: true, move: true },
      { name: "Wipe down countertops & backsplash", routine: true, deep: true, move: true },
      { name: "Clean and sanitize sink & faucet", routine: true, deep: true, move: true },
      { name: "Wipe down exterior of cabinets", routine: true, deep: true, move: true },
      { name: "Clean inside refrigerator", routine: false, deep: false, move: true },
      { name: "Clean inside oven", routine: false, deep: false, move: true },
      { name: "Clean inside all cabinets and drawers", routine: false, deep: false, move: true },
      { name: "Degrease stovetop and hood exterior", routine: false, deep: true, move: true }
    ],
    "Bathrooms": [
      { name: "Clean and sanitize toilet, shower, and tub", routine: true, deep: true, move: true },
      { name: "Wipe down mirrors and glass", routine: true, deep: true, move: true },
      { name: "Sanitize sink and counters", routine: true, deep: true, move: true },
      { name: "Wipe down exterior of cabinets", routine: true, deep: true, move: true },
      { name: "Scrub grout lines", routine: false, deep: true, move: true },
      { name: "Descale showerheads and faucets", routine: false, deep: true, move: true },
      { name: "Clean inside all cabinets and drawers", routine: false, deep: false, move: true }
    ],
    "Bedrooms": [
      { name: "Make beds (upon request)", routine: true, deep: true, move: false },
      { name: "Change bed linens (if left out)", routine: true, deep: true, move: false },
      { name: "Detailed cleaning of all closets", routine: false, deep: false, move: true }
    ]
  };
  const tabs = ["Kitchen", "Bathrooms", "Bedrooms", "All Rooms"];
  const commercialFeatures = [
    {
      section: "Front Desk & Reception",
      items: [
        "Wiping down reception desk and visitor seating",
        "Organizing magazines and tidying lobby area",
        "Cleaning glass entrance doors and interior windows",
        "Sanitizing high touch areas in the waiting room"
      ]
    },
    {
      section: "Office Areas",
      items: [
        "Sanitizing all high touch surfaces (doorknobs, light switches)",
        "Dusting and wiping down all desks and workstations",
        "Emptying all trash and recycling receptacles",
        "Cleaning interior glass and windows"
      ]
    },
    {
      section: "Restrooms",
      items: [
        "Deep cleaning and disinfecting restrooms",
        "Sanitizing sinks, toilets, and urinals",
        "Restocking paper products and soap"
      ]
    },
    {
      section: "Breakrooms & Floors",
      items: [
        "Cleaning breakrooms and kitchenettes (including inside appliances)",
        "Vacuuming and spot treating commercial carpets",
        "Sweeping and mopping hard floors"
      ]
    }
  ];
  const postConstructionFeatures = [
    {
      section: "All Rooms",
      items: [
        "Removal of fine construction dust from all surfaces",
        "Cleaning interior windows, sills, and frames",
        "Wiping down all walls and ceilings",
        "Removing minor paint splatters and adhesive residue"
      ]
    },
    {
      section: "Kitchen & Bath",
      items: [
        "Cleaning inside all new cabinetry and drawers",
        "Cleaning and polishing all new fixtures and appliances",
        "Removing stickers and protective film from new items"
      ]
    },
    {
      section: "Floors",
      items: [
        "Detailed vacuuming of all carpets and hard floors",
        "Multiple moppings to remove drywall dust residue",
        "Baseboard and floor vent detailing"
      ]
    }
  ];
  return /* @__PURE__ */ jsxDEV("div", { className: "pt-24 pb-14 bg-[#F9F8F6] min-h-screen", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "mb-10 md:mb-14 text-center max-w-3xl mx-auto",
        children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "text-5xl md:text-6xl font-serif text-[#2C302E] mb-6", children: "Our Services" }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 207,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 md:p-8 rounded-2xl border border-[#e8e5df] text-left shadow-sm mb-6", children: /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-[#2C302E] leading-relaxed font-light", children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "ShineWell" }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 210,
              columnNumber: 15
            }, this),
            " provides a complete suite of professional cleaning services across Kansas City, custom-tailored to suit homes, offices, construction sites, and specialized cluttered spaces. Backed by our 100% satisfaction guarantee, our fully insured and highly trained cleaners handle everything from routine housekeeping to deep restorative commercial sanitization."
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 209,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 208,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light", children: "No cookie cutter checklists here. We adapt to your space, your preferences, and your life. Explore our comprehensive cleaning solutions." }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 213,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 202,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-14", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-serif text-[#2C302E] mb-4", children: "What commercial cleaning solutions do we offer?" }, void 0, false, {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 221,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-1 bg-[#CAD4CD] mx-auto rounded-full mb-4" }, void 0, false, {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 222,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light max-w-3xl mx-auto mb-8", children: "ShineWell offers professional light commercial office cleaning, eco-friendly junk removal, and comprehensive post-construction cleanups for businesses across Overland Park and Kansas City. Our fully insured, background-checked commercial crews work around your operating hours to sanitize workstations, disinfect restrooms, and maintain a highly professional, pristine workspace for employees and clients." }, void 0, false, {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 223,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 220,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-center", children: commercialServices.map((service, idx) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: idx * 0.1, duration: 0.6 },
          className: "bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#e8e5df] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "relative h-64 overflow-hidden", children: [
              /* @__PURE__ */ jsxDEV(
                "img",
                {
                  src: service.image,
                  alt: service.title,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
                  referrerPolicy: "no-referrer"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 238,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 244,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 237,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "p-8 md:p-10 flex flex-col flex-grow", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-serif text-[#2C302E] mb-4 group-hover:text-[#C86B53] transition-colors", children: service.title }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 247,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] text-lg leading-relaxed font-light mb-8 flex-grow", children: service.desc }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 248,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: service.path,
                  className: "inline-flex items-center text-[#607564] font-medium group-hover:text-[#C86B53] transition-colors mt-auto",
                  children: [
                    "View Details ",
                    /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" }, void 0, false, {
                      fileName: "/app/applet/src/pages/ServicesPage.tsx",
                      lineNumber: 255,
                      columnNumber: 34
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 251,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 246,
              columnNumber: 17
            }, this)
          ]
        },
        idx,
        true,
        {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 229,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 227,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/ServicesPage.tsx",
      lineNumber: 219,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "bg-white rounded-[2rem] shadow-sm border border-[#e8e5df] overflow-hidden mb-14",
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "relative p-12 md:p-16 text-center text-white overflow-hidden", children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
                alt: "Commercial cleaning service",
                className: "absolute inset-0 w-full h-full object-cover",
                referrerPolicy: "no-referrer"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 271,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-[#2C302E]/70 backdrop-blur-[1px]" }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 277,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-serif mb-4", children: "What is included in our commercial cleaning checklist?" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 279,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[#a3aba6] font-light max-w-2xl mx-auto text-lg leading-relaxed", children: "Our commercial cleaning checklist delivers detailed sanitization across all high-touch areas in your workplace. We disinfect lobbies and reception counters, sanitize individual desk workstations, deep-clean and restock public restrooms, clean breakroom appliances, and vacuum commercial-grade carpets. Our custom checklists ensure that every area is pristine and aligned with your operational requirements." }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 280,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 278,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 270,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-8 md:p-12 bg-[#F9F8F6]", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 lg:gap-12", children: commercialFeatures.map((feature, idx) => /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-2xl shadow-sm border border-[#e8e5df]", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-serif text-[#4A5D4E] mb-6 pb-4 border-b border-[#e8e5df]", children: feature.section }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 290,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4", children: feature.items.map((item, itemIdx) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV(Check, { className: "w-5 h-5 text-[#CAD4CD] shrink-0 mt-0.5", strokeWidth: 2 }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 296,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-[#5c635f] font-light leading-relaxed", children: item }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 297,
                columnNumber: 25
              }, this)
            ] }, itemIdx, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 295,
              columnNumber: 23
            }, this)) }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 293,
              columnNumber: 19
            }, this)
          ] }, idx, true, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 289,
            columnNumber: 17
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 287,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 286,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 264,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "bg-white rounded-[2rem] shadow-sm border border-[#e8e5df] overflow-hidden mb-14",
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "relative p-12 md:p-16 text-center text-white overflow-hidden", children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
                alt: "Post construction cleaning",
                className: "absolute inset-0 w-full h-full object-cover",
                referrerPolicy: "no-referrer"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 315,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-[#2C302E]/60 backdrop-blur-[2px]" }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 321,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-serif mb-4", children: "What is included in our post-construction checklist?" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 323,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[#e8e5df] font-light max-w-2xl mx-auto text-lg leading-relaxed", children: "Our post-construction checklist focuses on removing fine drywall dust, paint splatters, and adhesive residues left behind after remodeling projects. Our specialized cleaners utilize HEPA-filter vacuums on all walls, clean interior window tracks, wash baseboards, and polish new kitchen and bathroom fixtures, ensuring that your newly renovated space is safe, clean, and move-in ready." }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 324,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 322,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 314,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-8 md:p-12 bg-[#F9F8F6]", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12", children: postConstructionFeatures.map((feature, idx) => /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-2xl shadow-sm border border-[#e8e5df]", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-serif text-[#4A5D4E] mb-6 pb-4 border-b border-[#e8e5df]", children: feature.section }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 334,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4", children: feature.items.map((item, itemIdx) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV(Check, { className: "w-5 h-5 text-[#CAD4CD] shrink-0 mt-0.5", strokeWidth: 2 }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 340,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-[#5c635f] font-light leading-relaxed", children: item }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 341,
                columnNumber: 25
              }, this)
            ] }, itemIdx, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 339,
              columnNumber: 23
            }, this)) }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 337,
              columnNumber: 19
            }, this)
          ] }, idx, true, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 333,
            columnNumber: 17
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 331,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 330,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 308,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-14", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-serif text-[#2C302E] mb-4", children: "What residential cleaning packages are available?" }, void 0, false, {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 354,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-1 bg-[#CAD4CD] mx-auto rounded-full mb-4" }, void 0, false, {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 355,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light max-w-3xl mx-auto mb-8", children: "We provide tailored residential cleaning packages including routine weekly, bi-weekly, or monthly housekeeping, top-to-bottom deep sanitizing, and move-in/out transition cleaning across Overland Park and Kansas City. Our background-checked home cleaning professionals use non-toxic, eco-friendly products to thoroughly sanitize kitchens, disinfect bathrooms, vacuum floors, and dust every corner of your living space." }, void 0, false, {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 356,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 353,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12", children: residentialServices.map((service, idx) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: idx * 0.1, duration: 0.6 },
          className: "bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#e8e5df] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "relative h-64 overflow-hidden", children: [
              /* @__PURE__ */ jsxDEV(
                "img",
                {
                  src: service.image,
                  alt: service.title,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
                  referrerPolicy: "no-referrer"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 371,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 377,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 370,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "p-8 md:p-10 flex flex-col flex-grow", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-serif text-[#2C302E] mb-4 group-hover:text-[#C86B53] transition-colors", children: service.title }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 380,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] text-lg leading-relaxed font-light mb-8 flex-grow", children: service.desc }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 381,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: service.path,
                  className: "inline-flex items-center text-[#607564] font-medium group-hover:text-[#C86B53] transition-colors mt-auto",
                  children: [
                    "View Details ",
                    /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" }, void 0, false, {
                      fileName: "/app/applet/src/pages/ServicesPage.tsx",
                      lineNumber: 388,
                      columnNumber: 34
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 384,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 379,
              columnNumber: 17
            }, this)
          ]
        },
        idx,
        true,
        {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 362,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 360,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/ServicesPage.tsx",
      lineNumber: 352,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-14", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-serif text-[#2C302E] mb-4", children: "What specialized property restoration services do we handle?" }, void 0, false, {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 399,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-1 bg-[#CAD4CD] mx-auto rounded-full mb-4" }, void 0, false, {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 400,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light max-w-3xl mx-auto mb-8", children: "Our specialized property services handle challenging restoration tasks including compassionate hoarding and extreme clutter cleanup, custom home organization, and targeted fabric upholstery treatments. We prioritize client confidentiality and safety across Overland Park and Kansas City, sorting personal valuables with care, removing bulk debris, and restoring healthy, comfortable conditions to your living environments." }, void 0, false, {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 401,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 398,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12", children: specializedServices.map((service, idx) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: idx * 0.1, duration: 0.6 },
          className: "bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#e8e5df] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "relative h-64 overflow-hidden", children: [
              /* @__PURE__ */ jsxDEV(
                "img",
                {
                  src: service.image,
                  alt: service.title,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
                  referrerPolicy: "no-referrer"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 416,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 422,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 415,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "p-8 md:p-10 flex flex-col flex-grow", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-serif text-[#2C302E] mb-4 group-hover:text-[#C86B53] transition-colors", children: service.title }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 425,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] text-lg leading-relaxed font-light mb-8 flex-grow", children: service.desc }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 426,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: service.path,
                  className: "inline-flex items-center text-[#607564] font-medium group-hover:text-[#C86B53] transition-colors mt-auto",
                  children: [
                    "View Details ",
                    /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" }, void 0, false, {
                      fileName: "/app/applet/src/pages/ServicesPage.tsx",
                      lineNumber: 433,
                      columnNumber: 34
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 429,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 424,
              columnNumber: 17
            }, this)
          ]
        },
        idx,
        true,
        {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 407,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 405,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/ServicesPage.tsx",
      lineNumber: 397,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "mb-14 max-w-5xl mx-auto",
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-serif text-[#2C302E] mb-3", children: "How do our residential cleaning packages compare?" }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 449,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-1 bg-[#CAD4CD] mx-auto rounded-full mb-6" }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 450,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light max-w-2xl mx-auto leading-relaxed", children: "Our comparison chart details exactly how our routine housekeeping, deep cleaning, and move-in/out services differ across every room in your home. While routine cleaning maintains basic surface freshness, deep cleaning hand-wipes baseboards and scrubs grout lines, and move-out cleans sanitize the interiors of empty appliances and cabinets for a complete residential reset." }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 451,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 448,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-3 mb-8", children: tabs.map((tab) => /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setActiveTab(tab),
              className: `px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab ? "bg-[#607564] text-white shadow-md" : "bg-white text-[#5c635f] hover:bg-[#F9F8F6] border border-[#e8e5df]"}`,
              children: tab.toUpperCase()
            },
            tab,
            false,
            {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 458,
              columnNumber: 15
            },
            this
          )) }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 456,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-[2rem] shadow-sm border border-[#e8e5df] overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV("table", { className: "w-full text-left border-collapse min-w-[800px]", children: [
            /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { className: "bg-[#F9F8F6] border-b border-[#e8e5df]", children: [
              /* @__PURE__ */ jsxDEV("th", { className: "p-6 font-serif text-[#2C302E] text-xl w-2/5", children: "Cleaning Task" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 477,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("th", { className: "p-6 font-medium text-[#2C302E] text-center w-1/5", children: [
                "Routine",
                /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 478,
                  columnNumber: 93
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-light text-[#5c635f]", children: "Cleaning" }, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 478,
                  columnNumber: 98
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 478,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("th", { className: "p-6 font-medium text-[#2C302E] text-center w-1/5", children: [
                "Deep",
                /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 479,
                  columnNumber: 90
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-light text-[#5c635f]", children: "Cleaning" }, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 479,
                  columnNumber: 95
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 479,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("th", { className: "p-6 font-medium text-[#2C302E] text-center w-1/5", children: [
                "Move In /",
                /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 480,
                  columnNumber: 95
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-light text-[#5c635f]", children: "Move Out" }, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 480,
                  columnNumber: 100
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 480,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 476,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 475,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("tbody", { children: comparisonData[activeTab].map((feature, idx) => /* @__PURE__ */ jsxDEV("tr", { className: "border-b border-[#e8e5df] last:border-0 hover:bg-[#F9F8F6]/50 transition-colors", children: [
              /* @__PURE__ */ jsxDEV("td", { className: "p-5 pl-6 text-[#5c635f] font-light", children: feature.name }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 486,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("td", { className: "p-5 text-center", children: feature.routine ? /* @__PURE__ */ jsxDEV(Check, { className: "w-5 h-5 text-[#CAD4CD] mx-auto", strokeWidth: 2.5 }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 489,
                columnNumber: 27
              }, this) : /* @__PURE__ */ jsxDEV("span", { className: "text-[#d1d5db] font-medium", children: "—" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 491,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 487,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("td", { className: "p-5 text-center", children: feature.deep ? /* @__PURE__ */ jsxDEV(Check, { className: "w-5 h-5 text-[#CAD4CD] mx-auto", strokeWidth: 2.5 }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 496,
                columnNumber: 27
              }, this) : /* @__PURE__ */ jsxDEV("span", { className: "text-[#d1d5db] font-medium", children: "—" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 498,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 494,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("td", { className: "p-5 text-center", children: feature.move ? /* @__PURE__ */ jsxDEV(Check, { className: "w-5 h-5 text-[#CAD4CD] mx-auto", strokeWidth: 2.5 }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 503,
                columnNumber: 27
              }, this) : /* @__PURE__ */ jsxDEV("span", { className: "text-[#d1d5db] font-medium", children: "—" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 505,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 501,
                columnNumber: 23
              }, this)
            ] }, idx, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 485,
              columnNumber: 21
            }, this)) }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 483,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 474,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 473,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 472,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 442,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center",
        children: /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/booking",
            className: "inline-flex items-center gap-2 bg-[#C86B53] hover:bg-[#b55e47] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:-translate-y-1",
            children: [
              "Get a Free Estimate",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 527,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 522,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 516,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/ServicesPage.tsx",
    lineNumber: 201,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/ServicesPage.tsx",
    lineNumber: 200,
    columnNumber: 5
  }, this);
}
export {
  ServicesPage as default
};
