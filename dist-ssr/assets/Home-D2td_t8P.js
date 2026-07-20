import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { L as LazyGHLEmbed } from "./LazyGHLEmbed-lKRVJtfK.js";
import { c as cleanersWorkImg } from "./regenerated_image_1783362695919-CInR4yp8.js";
import { Phone, Star, ArrowRight, Building2, Sparkles, Home as Home$1, Check, ChevronLeft, ChevronRight } from "lucide-react";
const heroHomeImg = "/assets/regenerated_image_1783362481160-DbNwRHSy.png";
function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay({ delay: 5e3, stopOnInteraction: true })]);
  useNavigate();
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("section", { className: "relative pt-24 pb-14 lg:pt-36 lg:pb-24 overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-8 items-center", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: "easeOut" },
          className: "lg:col-span-6 z-10",
          children: [
            /* @__PURE__ */ jsxDEV("h1", { className: "text-5xl md:text-6xl lg:text-[72px] font-serif text-[#2C302E] leading-[1.1] mb-4", children: [
              "Kansas City's Most Trusted ",
              /* @__PURE__ */ jsxDEV("span", { className: "text-[#607564] italic", children: "Office & Home Cleaning Service" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 60,
                columnNumber: 44
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-[#5c635f] mb-6 max-w-lg leading-relaxed font-light", children: "ShineWell provides Kansas City's most reliable commercial and residential cleaning services, delivering pristine results for homes, offices, apartments, and short-term rentals. As a fully insured, locally owned company with over 20 years of experience, we offer eco-friendly products and meticulous attention to detail with our 100% satisfaction guarantee." }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 62,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-3xl shadow-xl border border-[#e8e5df] relative overflow-hidden max-w-[600px] w-full", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mb-4", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-serif text-[#2C302E]", children: "Book Your Cleaning" }, void 0, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 70,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 69,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "w-full min-h-[500px] rounded-xl overflow-hidden border border-[#e8e5df] bg-[#F9F8F6] relative", children: /* @__PURE__ */ jsxDEV(
                  LazyGHLEmbed,
                  {
                    src: "https://links.somosoverflow.com/widget/form/wCd628Bbw6Kdx6T546Nk",
                    id: "inline-wCd628Bbw6Kdx6T546Nk",
                    title: "Book Your Cleaning",
                    minHeight: "500px",
                    formId: "wCd628Bbw6Kdx6T546Nk",
                    formName: "Book Your Cleaning"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 73,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 72,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 68,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "tel:9133251400",
                  className: "text-[#607564] hover:text-[#C86B53] font-medium text-lg transition-colors flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsxDEV(Phone, { "aria-hidden": "true", focusable: "false", className: "w-5 h-5" }, void 0, false, {
                      fileName: "/app/applet/src/pages/Home.tsx",
                      lineNumber: 90,
                      columnNumber: 21
                    }, this),
                    "Or call us directly: 913-325-1400"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 86,
                  columnNumber: 19
                },
                this
              ) }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 85,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 66,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 53,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 1, delay: 0.2, ease: "easeOut" },
          className: "lg:col-span-6 relative",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] shadow-2xl", children: [
              /* @__PURE__ */ jsxDEV(
                "img",
                {
                  src: heroHomeImg,
                  alt: "Professional house cleaning service in Overland Park & KC Metro",
                  className: "w-full h-full object-cover",
                  referrerPolicy: "no-referrer"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 104,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 110,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 103,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] hidden md:block", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-2", children: /* @__PURE__ */ jsxDEV("div", { className: "flex text-[#C86B53]", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxDEV(Star, { className: "h-4 w-4 fill-current" }, i, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 117,
                columnNumber: 49
              }, this)) }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 116,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 115,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "font-serif text-[#2C302E] leading-snug", children: '"It feels like a brand new house every time they leave."' }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 120,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 114,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 97,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-14 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6",
          children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-serif text-[#2C302E] mb-4", children: "What professional cleaning services do we provide in Kansas City?" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 137,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] max-w-2xl font-light", children: "ShineWell provides a comprehensive range of professional cleaning services in Overland Park and the Kansas City metro area. Our customized options include routine weekly or bi-weekly housekeeping, top-to-bottom deep sanitizing, move-in or move-out transitions, light commercial office cleaning, professional organization, compassionate hoarding cleanup, post-construction detailing, and eco-friendly junk removal." }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 138,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 136,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: "/services",
                className: "inline-flex items-center gap-2 text-[#607564] font-medium hover:text-[#C86B53] transition-colors whitespace-nowrap",
                children: [
                  "View All Services ",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 146,
                    columnNumber: 33
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 142,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 130,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 lg:gap-8", children: [
        {
          icon: /* @__PURE__ */ jsxDEV(Building2, { className: "h-7 w-7 text-[#607564]", strokeWidth: 1.5 }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 153,
            columnNumber: 23
          }, this),
          title: "Business Cleaning",
          desc: "Elevate your workspace. We provide thorough, professional cleaning for offices and commercial spaces to ensure a healthy environment.",
          path: "/commercial-cleaning-kansas-city"
        },
        {
          icon: /* @__PURE__ */ jsxDEV(Sparkles, { className: "h-7 w-7 text-[#607564]", strokeWidth: 1.5 }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 159,
            columnNumber: 23
          }, this),
          title: "Deep Cleaning",
          desc: "For when things have gotten a little out of hand. We get into the forgotten corners, baseboards, and behind the appliances.",
          path: "/services/deep-dives"
        },
        {
          icon: /* @__PURE__ */ jsxDEV(Home$1, { className: "h-7 w-7 text-[#607564]", strokeWidth: 1.5 }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 165,
            columnNumber: 23
          }, this),
          title: "Routine House Cleaning",
          desc: "Keeping your sanctuary fresh, week after week. We learn your preferences and treat your home with the utmost respect.",
          path: "/services/routine-housekeeping"
        }
      ].map((service, idx) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: idx * 0.15, duration: 0.6 },
          className: "bg-[#F9F8F6] rounded-3xl p-8 hover:bg-[#f2f0ea] transition-colors group",
          children: /* @__PURE__ */ jsxDEV(Link, { to: service.path, className: "block h-full", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 transition-transform duration-500", children: service.icon }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 180,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-serif text-[#2C302E] mb-2 group-hover:text-[#C86B53] transition-colors", children: service.title }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 183,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] leading-relaxed font-light mb-4", children: service.desc }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 184,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center text-[#607564] font-medium text-sm group-hover:text-[#C86B53] transition-colors", children: [
              "Learn more ",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 188,
                columnNumber: 32
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 187,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 179,
            columnNumber: 17
          }, this)
        },
        idx,
        false,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 171,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 150,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 129,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-14 bg-[#F9F8F6]", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-serif text-[#2C302E] mb-4", children: "Why should you choose ShineWell for your residential and commercial cleaning needs?" }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 201,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light max-w-2xl mx-auto", children: "You should choose ShineWell because we bring over 20 years of professional cleaning experience to every Overland Park and Kansas City property. Our fully insured, locally owned family business utilizes highly trained, background-checked crews and eco-friendly supplies to deliver reliable housekeeping, office cleaning, and deep sanitization backed by our 100% satisfaction guarantee." }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 202,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 200,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-[#e8e5df]", children: /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-y-6 gap-x-12", children: [
        "Fully Insured",
        "Locally Owned",
        "Over 20 Years Experience",
        "Residential & Commercial Cleaning",
        "Satisfaction Guarantee",
        "Flexible Scheduling",
        "Eco-Friendly Products Available",
        "Free Estimates"
      ].map((point, idx) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, x: -10 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: idx * 0.05, duration: 0.4 },
          className: "flex items-center gap-4 py-1.5 border-b border-[#e8e5df]/50 last:border-b-0 sm:last:border-b-0",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 rounded-full bg-[#607564]/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(Check, { className: "w-5 h-5 text-[#607564] stroke-[2.5]" }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 227,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 226,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-medium text-[#2C302E]", children: point }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 229,
              columnNumber: 19
            }, this)
          ]
        },
        idx,
        true,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 218,
          columnNumber: 17
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 207,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 206,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 199,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-14 bg-[#8BA192] text-[#2C302E] overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "order-2 lg:order-1",
          children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-serif mb-4 text-[#2C302E]", children: "How does our story define our commitment to cleaning?" }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 248,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 text-lg font-light text-[#2C302E]/80 leading-relaxed mb-6", children: [
              /* @__PURE__ */ jsxDEV("p", { children: "Our story began with Lina's personal passion for helping neighbors in Kansas City reclaim their weekends, which has grown into the area's most reliable family-owned cleaning team with over 20 years of experience. We provide meticulous, client-first home and commercial cleaning services designed to restore peace of mind and maintain healthy living spaces." }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 250,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { children: "We aren't a faceless franchise. We're a local team of perfectionists who genuinely love the satisfaction of a job well done. Whether it's a corporate office or a family home, we treat every space as if it were our own—with honesty, meticulousness, and respect." }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 253,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 249,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: "/about",
                className: "inline-flex items-center gap-2 bg-white text-[#8BA192] px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:-translate-y-1",
                children: [
                  "Read Full Story",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 262,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 257,
                columnNumber: 15
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 241,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "order-1 lg:order-2 relative",
          children: /* @__PURE__ */ jsxDEV("div", { className: "aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group", children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: cleanersWorkImg,
                alt: "ShineWell professional cleaning team at work",
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                referrerPolicy: "no-referrer"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 274,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-[#2C302E]/40 to-transparent" }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 280,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 273,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 266,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 240,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 239,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 238,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { id: "reviews", className: "py-14 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center text-center mb-10 gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "https://share.google/3oMRqAPyjGZaUcAO6",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-3 mb-3 bg-[#F9F8F6] px-5 py-2.5 rounded-full border border-[#e8e5df] hover:bg-white hover:shadow-md transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ jsxDEV("svg", { "aria-hidden": "true", focusable: "false", className: "w-5 h-5", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsxDEV("path", { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 300,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 301,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("path", { fill: "#FBBC05", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 302,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 303,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 299,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex text-[#FBBC05]", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxDEV(Star, { "aria-hidden": "true", focusable: "false", className: "h-4 w-4 fill-current" }, i, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 306,
                  columnNumber: 48
                }, this)) }, void 0, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 305,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium text-[#2C302E]", children: "5.0 on Google" }, void 0, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 308,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 293,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-serif text-[#2C302E] mb-3", children: "What do our Kansas City commercial and home clients say?" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 310,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light", children: "Our commercial and residential clients in Overland Park and the Kansas City area rate us 5.0 on Google for our extremely detailed, reliable, and respectful cleaning services. Our vetted, professional cleaners consistently arrive on time, communicate clearly, and treat every home or corporate office with the deep personal care that ensures a sparkling clean result." }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 311,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 291,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxDEV("button", { onClick: scrollPrev, "aria-label": "Previous testimonial", className: "w-12 h-12 rounded-full border border-[#e8e5df] flex items-center justify-center text-[#607564] hover:bg-[#F9F8F6] transition-colors", children: /* @__PURE__ */ jsxDEV(ChevronLeft, { "aria-hidden": "true", focusable: "false", className: "w-6 h-6" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 317,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 316,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("button", { onClick: scrollNext, "aria-label": "Next testimonial", className: "w-12 h-12 rounded-full border border-[#e8e5df] flex items-center justify-center text-[#607564] hover:bg-[#F9F8F6] transition-colors", children: /* @__PURE__ */ jsxDEV(ChevronRight, { "aria-hidden": "true", focusable: "false", className: "w-6 h-6" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 320,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 319,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 315,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 290,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "overflow-hidden pb-6 -mx-6 px-6 lg:-mx-12 lg:px-12", ref: emblaRef, children: /* @__PURE__ */ jsxDEV("div", { className: "flex gap-6 items-stretch", children: [
        {
          name: "Mary",
          text: "They did an incredible job helping my son get his place cleaned up and back in order. The team is so compassionate and hardworking. Highly recommend!",
          rating: 5,
          ownerResponse: "Thank You Mary, Our Hearts Are Full After Helping Your Son Get On His Feet Again! This Was A Blessing For Us As It Was For You! God Bless!"
        },
        {
          name: "David Swaters",
          text: "ShineWell Commercial Cleaning Services were top notch ! On time , service and professionalism are second to none! They go out of their way to make sure everything is done right ! Came early and stayed late to get the job done. I couldn’t be happier. Thanks",
          rating: 5,
          ownerResponse: "Thank you David! We were Happy to help you cleaning your property! We Appreciate you calling on ShineWell For Your Cleaning Needs!"
        },
        {
          name: "Ariana Goodridge",
          text: "I was going on vacation and wanted my house cleaned last minute. They came right out the next day and did absolutely amazing!! My house smelled and looked amazing I will definitely be using their service again!! They cleaned every single detail.",
          rating: 5,
          ownerResponse: "Thank you for Choosing ShineWell Cleaning Services to Serve You! We enjoyed meeting you and we were so happy to get your home cleaned so you can come home to a clean and refreshed home. Enjoy your vacation! - Lina :-)"
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
          text: "I had ShineWell clean our empty house for the new buyers. They did a fantastic job! They worked so hard to make sure it was spotless. I highly recommend them!",
          rating: 5
        }
      ].map((review, idx) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "flex-[0_0_85vw] sm:flex-[0_0_350px] md:flex-[0_0_400px] min-w-0",
          children: /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: idx * 0.1 },
              className: "h-full bg-[#F9F8F6] p-6 rounded-3xl flex flex-col items-center text-center relative group hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-[#e8e5df]",
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-2 mb-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex text-[#FBBC05]", children: [...Array(review.rating)].map((_, i) => /* @__PURE__ */ jsxDEV(Star, { className: "h-5 w-5 fill-current" }, i, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 376,
                  columnNumber: 66
                }, this)) }, void 0, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 375,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 374,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-[#2C302E] mb-4 text-[15px] leading-relaxed flex-grow font-light italic", children: [
                  '"',
                  review.text,
                  '"'
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 380,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center gap-3 mt-auto", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 bg-[#607564] rounded-full flex items-center justify-center text-white font-serif text-xl", children: review.name.charAt(0) }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 383,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("p", { className: "font-medium text-[#2C302E]", children: review.name }, void 0, false, {
                      fileName: "/app/applet/src/pages/Home.tsx",
                      lineNumber: 387,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-1 mt-1", children: [
                      /* @__PURE__ */ jsxDEV("svg", { className: "w-3.5 h-3.5", viewBox: "0 0 24 24", children: [
                        /* @__PURE__ */ jsxDEV("path", { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }, void 0, false, {
                          fileName: "/app/applet/src/pages/Home.tsx",
                          lineNumber: 390,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ jsxDEV("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }, void 0, false, {
                          fileName: "/app/applet/src/pages/Home.tsx",
                          lineNumber: 391,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ jsxDEV("path", { fill: "#FBBC05", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }, void 0, false, {
                          fileName: "/app/applet/src/pages/Home.tsx",
                          lineNumber: 392,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ jsxDEV("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" }, void 0, false, {
                          fileName: "/app/applet/src/pages/Home.tsx",
                          lineNumber: 393,
                          columnNumber: 29
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/pages/Home.tsx",
                        lineNumber: 389,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-[#5c635f]", children: "Google Review" }, void 0, false, {
                        fileName: "/app/applet/src/pages/Home.tsx",
                        lineNumber: 395,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/pages/Home.tsx",
                      lineNumber: 388,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 386,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 382,
                  columnNumber: 21
                }, this),
                review.ownerResponse && /* @__PURE__ */ jsxDEV("div", { className: "mt-6 pt-6 border-t border-[#e8e5df] w-full text-left", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-bold text-[#607564] uppercase tracking-wider mb-2", children: "Lina's Response" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 402,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-[#5c635f] font-light leading-relaxed", children: review.ownerResponse }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 403,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 401,
                  columnNumber: 23
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 367,
              columnNumber: 19
            },
            this
          )
        },
        idx,
        false,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 363,
          columnNumber: 17
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 326,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 325,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 289,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 288,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-14 bg-[#8BA192] text-[#2C302E]", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-serif mb-3 text-[#2C302E]", children: "What are the most frequently asked questions about ShineWell cleaning services?" }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 420,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#2C302E]/90 font-light", children: "We address frequently asked questions regarding our employee background checks, liability insurance, supply provisions, pet guidelines, custom quotes, and service areas in Overland Park and Kansas City. Our family-owned business maintains transparent policies, flexible scheduling, and clear pricing structure to make booking your next cleaning service completely stress-free and straightforward." }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 421,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 419,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-4", children: [
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
          a: "Yes, absolutely. Every member of the ShineWell team undergoes a thorough background check before they are hired. We only send trusted, reliable professionals into your property."
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
      ].map((faq, idx) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: idx * 0.1 },
          className: "bg-[#718876] p-6 rounded-3xl border border-white/20 hover:border-white/40 transition-colors shadow-sm",
          children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-medium mb-2 text-white", children: faq.q }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 461,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-white/90 font-light leading-relaxed", children: faq.a }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 462,
              columnNumber: 17
            }, this)
          ]
        },
        idx,
        true,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 453,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 426,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 418,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 417,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-14 bg-[#F9F8F6]", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-6 lg:px-12 text-center", children: /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-serif text-[#2C302E] mb-3", children: "How can you experience the ShineWell cleaning difference today?" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 479,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light mb-6 max-w-2xl mx-auto", children: "You can experience the ShineWell difference by calling us at (913) 325-1400 or booking online to request a free estimate. We will coordinate a tailored weekly, bi-weekly, or monthly cleaning plan that restores your free time while keeping your Overland Park or Kansas City property exceptionally fresh and clean." }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 480,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row justify-center items-center gap-4", children: [
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: "/booking",
                className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C86B53] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:bg-[#b55e47] hover:shadow-xl hover:-translate-y-1",
                children: [
                  "Get a Free Estimate",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { "aria-hidden": "true", focusable: "false", className: "w-5 h-5" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 489,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 484,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "tel:9133251400",
                className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#2C302E] border border-[#e8e5df] px-8 py-4 rounded-full font-medium text-lg transition-all hover:bg-[#F9F8F6] hover:shadow-xl hover:-translate-y-1",
                children: [
                  /* @__PURE__ */ jsxDEV(Phone, { "aria-hidden": "true", focusable: "false", className: "w-5 h-5 text-[#607564]" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 495,
                    columnNumber: 17
                  }, this),
                  "Call 913-325-1400"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 491,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 483,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 473,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 472,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 471,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/Home.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}
export {
  Home as default
};
