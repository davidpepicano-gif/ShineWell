import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import fs from "fs";
import path from "path";
import { renderToString } from "react-dom/server";
import { useLocation, Link, useNavigate, useParams, Routes, Route, MemoryRouter } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Phone, X, Menu, Mail, MapPin, Star, ArrowRight, Building2, Sparkles, Home as Home$1, Check, ChevronLeft, ChevronRight, CheckCircle2, Paintbrush, Droplets, Briefcase, Heart, Clock, Calendar, User, ArrowLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
const logoImg = "/assets/regenerated_image_1780271530148-CARKrjdn.png";
const services = [
  { name: "Commercial Cleaning", path: "/services/commercial-deep-cleaning" },
  { name: "Routine House Cleaning", path: "/services/routine-housekeeping" },
  { name: "Deep Cleaning", path: "/services/deep-dives" },
  { name: "Move In / Move Out", path: "/services/move-in-move-out" },
  { name: "Post Construction", path: "/services/post-construction" },
  { name: "Hoarder House Clean Up", path: "/services/hoarder-cleanup" },
  { name: "Organizing Service", path: "/services/organizing" },
  { name: "Specialized Treatments", path: "/services/specialized-treatments" },
  { name: "Junk Removal", path: "/services/junk-removal" }
];
const Logo = ({ className = "h-10 w-10" }) => /* @__PURE__ */ jsxDEV(
  "img",
  {
    src: logoImg,
    alt: "ShineWell Logo",
    className: `${className} object-cover aspect-square rounded-full shadow-md border border-[#e8e5df] bg-white hover:brightness-105 transition-all duration-300`,
    id: "navbar-logo",
    referrerPolicy: "no-referrer"
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/Layout.tsx",
    lineNumber: 28,
    columnNumber: 3
  },
  void 0
);
function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-[#F9F8F6] font-sans text-[#2C302E] selection:bg-[#CAD4CD] selection:text-white flex flex-col", children: [
    /* @__PURE__ */ jsxDEV(
      "nav",
      {
        className: `fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[#F9F8F6]/98 backdrop-blur-md shadow-md border-b border-[#e8e5df]/60 py-2" : "bg-[#F9F8F6]/60 backdrop-blur-sm border-b border-transparent py-4"}`,
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center gap-3 cursor-pointer group", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "group-hover:scale-105 transition-transform duration-300 shrink-0", children: /* @__PURE__ */ jsxDEV(Logo, { className: `transition-all duration-500 ${isScrolled ? "h-16 w-16 md:h-[80px] md:w-[80px]" : "h-24 w-24 md:h-[112px] md:w-[112px]"}` }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 83,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 82,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col justify-center", children: [
                /* @__PURE__ */ jsxDEV("span", { className: `font-script font-bold tracking-tight text-[#2C302E] leading-none mb-1 transition-all duration-500 ${isScrolled ? "text-xl md:text-2xl lg:text-3xl" : "text-2xl md:text-3xl lg:text-4xl"}`, children: "ShineWell" }, void 0, false, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 88,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: `uppercase tracking-[0.25em] text-[#607564] font-semibold leading-none pl-1 transition-all duration-500 ${isScrolled ? "text-[7px] sm:text-[9px] md:text-[10px]" : "text-[8px] sm:text-[10px] md:text-[11px]"}`, children: "Commercial & Home Cleaning Services" }, void 0, false, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 93,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 87,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "hidden md:flex items-center space-x-10", children: [
              /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: "relative group",
                  onMouseEnter: () => setIsServicesOpen(true),
                  onMouseLeave: () => setIsServicesOpen(false),
                  children: [
                    /* @__PURE__ */ jsxDEV(
                      Link,
                      {
                        to: "/services",
                        className: "flex items-center gap-1 text-[15px] text-[#5c635f] hover:text-[#C86B53] transition-colors font-medium",
                        children: [
                          "Services",
                          /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-4 h-4" }, void 0, false, {
                            fileName: "/app/applet/src/components/Layout.tsx",
                            lineNumber: 113,
                            columnNumber: 19
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/app/applet/src/components/Layout.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV(AnimatePresence, { children: isServicesOpen && /* @__PURE__ */ jsxDEV(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 10 },
                        transition: { duration: 0.2 },
                        className: "absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#e8e5df] py-3 overflow-hidden",
                        children: services.map((service) => /* @__PURE__ */ jsxDEV(
                          Link,
                          {
                            to: service.path,
                            className: "block px-5 py-2.5 text-sm text-[#5c635f] hover:text-[#C86B53] hover:bg-[#F9F8F6] transition-colors",
                            children: service.name
                          },
                          service.path,
                          false,
                          {
                            fileName: "/app/applet/src/components/Layout.tsx",
                            lineNumber: 126,
                            columnNumber: 25
                          },
                          this
                        ))
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/components/Layout.tsx",
                        lineNumber: 118,
                        columnNumber: 21
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "/app/applet/src/components/Layout.tsx",
                      lineNumber: 116,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 103,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/how-it-works",
                  className: "text-[15px] text-[#5c635f] hover:text-[#C86B53] transition-colors font-medium",
                  children: "How It Works"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 139,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/about",
                  className: "text-[15px] text-[#5c635f] hover:text-[#C86B53] transition-colors font-medium",
                  children: "About Us"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 145,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/locations",
                  className: "text-[15px] text-[#5c635f] hover:text-[#C86B53] transition-colors font-medium",
                  children: "Locations"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 151,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/blog",
                  className: "text-[15px] text-[#5c635f] hover:text-[#C86B53] transition-colors font-medium",
                  children: "Blog"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 157,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/booking",
                  className: "bg-[#C86B53] hover:bg-[#b55e47] text-white px-7 py-3 rounded-full text-[15px] font-medium transition-all hover:shadow-lg hover:-translate-y-0.5",
                  children: "Get a Free Estimate"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 163,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "tel:9133251400",
                  className: "hidden lg:flex items-center gap-2 border border-[#607564] text-[#607564] hover:bg-[#607564] hover:text-white px-5 py-2.5 rounded-full text-[15px] font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 shrink-0",
                  children: [
                    /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4 shrink-0" }, void 0, false, {
                      fileName: "/app/applet/src/components/Layout.tsx",
                      lineNumber: 173,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { children: "Call ShineWell: (913) 325-1400" }, void 0, false, {
                      fileName: "/app/applet/src/components/Layout.tsx",
                      lineNumber: 174,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 169,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 102,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "md:hidden flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "tel:9133251400",
                  className: "flex items-center gap-1.5 bg-[#607564] text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-[#b55e47] transition-all shrink-0",
                  "aria-label": "Call ShineWell at (913) 325-1400",
                  children: [
                    /* @__PURE__ */ jsxDEV(Phone, { className: "w-3.5 h-3.5 shrink-0" }, void 0, false, {
                      fileName: "/app/applet/src/components/Layout.tsx",
                      lineNumber: 185,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { children: "(913) 325-1400" }, void 0, false, {
                      fileName: "/app/applet/src/components/Layout.tsx",
                      lineNumber: 186,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 180,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
                  className: "p-2 text-[#2C302E] shrink-0",
                  "aria-label": "Toggle menu",
                  children: isMobileMenuOpen ? /* @__PURE__ */ jsxDEV(X, { className: "h-6 w-6", strokeWidth: 1.5 }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 193,
                    columnNumber: 37
                  }, this) : /* @__PURE__ */ jsxDEV(Menu, { className: "h-6 w-6", strokeWidth: 1.5 }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 193,
                    columnNumber: 83
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 188,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 179,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 80,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -10 },
              className: "md:hidden absolute top-full left-0 w-full bg-[#F9F8F6] shadow-xl py-6 px-6 flex flex-col gap-4 border-t border-[#e8e5df] max-h-[80vh] overflow-y-auto",
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ jsxDEV(
                    Link,
                    {
                      to: "/services",
                      className: "flex items-center justify-between text-left text-[#5c635f] font-medium py-3 border-b border-[#e8e5df]",
                      children: [
                        "Services",
                        /* @__PURE__ */ jsxDEV(
                          "button",
                          {
                            onClick: (e) => {
                              e.preventDefault();
                              setIsServicesOpen(!isServicesOpen);
                            },
                            className: "p-1",
                            children: /* @__PURE__ */ jsxDEV(ChevronDown, { className: `w-5 h-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}` }, void 0, false, {
                              fileName: "/app/applet/src/components/Layout.tsx",
                              lineNumber: 221,
                              columnNumber: 21
                            }, this)
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/components/Layout.tsx",
                            lineNumber: 214,
                            columnNumber: 19
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "/app/applet/src/components/Layout.tsx",
                      lineNumber: 209,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(AnimatePresence, { children: isServicesOpen && /* @__PURE__ */ jsxDEV(
                    motion.div,
                    {
                      initial: { height: 0, opacity: 0 },
                      animate: { height: "auto", opacity: 1 },
                      exit: { height: 0, opacity: 0 },
                      className: "overflow-hidden flex flex-col pl-4 border-b border-[#e8e5df]",
                      children: services.map((service) => /* @__PURE__ */ jsxDEV(
                        Link,
                        {
                          to: service.path,
                          className: "py-3 text-sm text-[#5c635f] hover:text-[#C86B53]",
                          children: service.name
                        },
                        service.path,
                        false,
                        {
                          fileName: "/app/applet/src/components/Layout.tsx",
                          lineNumber: 233,
                          columnNumber: 25
                        },
                        this
                      ))
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/Layout.tsx",
                      lineNumber: 226,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 224,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 208,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: "/how-it-works",
                    className: "text-left text-[#5c635f] font-medium py-3 border-b border-[#e8e5df]",
                    children: "How It Works"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 246,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: "/about",
                    className: "text-left text-[#5c635f] font-medium py-3 border-b border-[#e8e5df]",
                    children: "About Us"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 252,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: "/locations",
                    className: "text-left text-[#5c635f] font-medium py-3 border-b border-[#e8e5df]",
                    children: "Locations"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 258,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: "/blog",
                    className: "text-left text-[#5c635f] font-medium py-3 border-b border-[#e8e5df]",
                    children: "Blog"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 264,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: "/booking",
                    className: "bg-[#C86B53] text-white px-6 py-4 rounded-xl font-medium mt-4 w-full text-center block",
                    children: "Get a Free Estimate"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 270,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    href: "tel:9133251400",
                    className: "bg-[#607564] text-white px-6 py-4 rounded-xl font-medium mt-2 w-full text-center flex items-center justify-center gap-2",
                    children: [
                      /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 shrink-0" }, void 0, false, {
                        fileName: "/app/applet/src/components/Layout.tsx",
                        lineNumber: 280,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { children: "Call (913) 325-1400" }, void 0, false, {
                        fileName: "/app/applet/src/components/Layout.tsx",
                        lineNumber: 281,
                        columnNumber: 17
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 276,
                    columnNumber: 15
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 202,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 200,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 72,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-grow", children }, void 0, false, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 289,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { className: "bg-[#2C302E] text-[#F9F8F6] py-10 md:py-12 border-t border-[#3a3f3c] mt-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-4 gap-8 mb-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "col-span-1 md:col-span-2", children: [
          /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center gap-3 mb-6 cursor-pointer group", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "group-hover:scale-105 transition-transform duration-300 shrink-0", children: /* @__PURE__ */ jsxDEV(Logo, { className: "h-20 w-20 md:h-24 md:w-24" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 300,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 299,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col justify-center", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-2xl md:text-3xl lg:text-4xl font-script tracking-tight leading-none mb-1 text-[#F9F8F6]", children: "ShineWell" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 303,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-[8px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#a3aba6] group-hover:text-white transition-colors font-medium leading-none pl-0.5", children: "Commercial & Home Cleaning Services" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 306,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 302,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 298,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "max-w-sm text-[#a3aba6] font-light leading-relaxed mb-4", children: "Honest, meticulous cleaning for businesses and homes across the Overland Park & KC metro area. We clean so you can live." }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 311,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 space-y-1 text-sm text-[#a3aba6] font-light", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-[#F9F8F6]", children: "ShineWell Commercial and Home Cleaning Services" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 315,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#a3aba6]", children: "Serving Overland Park & the greater Kansas City metro" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 316,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Phone: ",
              /* @__PURE__ */ jsxDEV("a", { href: "tel:9133251400", className: "hover:text-white transition-colors underline decoration-[#607564] underline-offset-4", children: "(913) 325-1400" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 317,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 317,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 314,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxDEV("a", { href: "https://www.facebook.com/shinewellcleaning/", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 rounded-full bg-[#3a3f3c] flex items-center justify-center hover:bg-[#C86B53] transition-colors", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "Facebook" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 321,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("svg", { className: "w-4 h-4 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 322,
                columnNumber: 77
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 322,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 320,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: "https://www.instagram.com/shinewellcleaning", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 rounded-full bg-[#3a3f3c] flex items-center justify-center hover:bg-[#C86B53] transition-colors", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "Instagram" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 325,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("svg", { className: "w-4 h-4 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 326,
                columnNumber: 77
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 326,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 324,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 319,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 297,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "font-medium mb-6 tracking-wide", children: "Contact" }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 332,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4 text-[#a3aba6] font-light", children: [
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4 text-[#607564]" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 335,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("a", { href: "tel:9133251400", className: "hover:text-white transition-colors", children: "(913) 325-1400" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 336,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 334,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV(Mail, { className: "w-4 h-4 text-[#607564]" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 339,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "shinewell.com" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 340,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 338,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV(MapPin, { className: "w-4 h-4 text-[#607564] mt-1 shrink-0" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 343,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "w-full", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "block mb-3", children: "Serving Overland Park & the greater Kansas City metro" }, void 0, false, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 345,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "w-full h-32 rounded-lg overflow-hidden border border-[#3a3f3c] bg-[#3a3f3c] mb-3", children: /* @__PURE__ */ jsxDEV(
                  "iframe",
                  {
                    width: "100%",
                    height: "100%",
                    frameBorder: "0",
                    scrolling: "no",
                    marginHeight: 0,
                    marginWidth: 0,
                    src: "https://maps.google.com/maps?q=Overland+Park,KS&t=&z=10&ie=UTF8&iwloc=&output=embed",
                    title: "Service Area Map",
                    className: "grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 347,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 346,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    href: "https://share.google/3oMRqAPyjGZaUcAO6",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-2 text-sm text-[#FBBC05] hover:text-white transition-colors group",
                    children: [
                      /* @__PURE__ */ jsxDEV("svg", { className: "w-4 h-4", viewBox: "0 0 24 24", children: [
                        /* @__PURE__ */ jsxDEV("path", { fill: "currentColor", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }, void 0, false, {
                          fileName: "/app/applet/src/components/Layout.tsx",
                          lineNumber: 366,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ jsxDEV("path", { fill: "currentColor", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }, void 0, false, {
                          fileName: "/app/applet/src/components/Layout.tsx",
                          lineNumber: 367,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ jsxDEV("path", { fill: "currentColor", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }, void 0, false, {
                          fileName: "/app/applet/src/components/Layout.tsx",
                          lineNumber: 368,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ jsxDEV("path", { fill: "currentColor", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" }, void 0, false, {
                          fileName: "/app/applet/src/components/Layout.tsx",
                          lineNumber: 369,
                          columnNumber: 25
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/Layout.tsx",
                        lineNumber: 365,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "group-hover:underline", children: "Visit our Google Profile" }, void 0, false, {
                        fileName: "/app/applet/src/components/Layout.tsx",
                        lineNumber: 371,
                        columnNumber: 23
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 359,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 344,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 342,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 333,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 331,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "font-medium mb-6 tracking-wide", children: "Links" }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 379,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3 text-[#a3aba6] font-light", children: [
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/services", className: "hover:text-white transition-colors", children: "Services" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 381,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 381,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/about", className: "hover:text-white transition-colors", children: "About Us" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 382,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 382,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/how-it-works", className: "hover:text-white transition-colors", children: "How It Works" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 383,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 383,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/locations", className: "hover:text-white transition-colors", children: "Locations" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 384,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 384,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/faq", className: "hover:text-white transition-colors", children: "FAQ" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 385,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 385,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/blog", className: "hover:text-white transition-colors", children: "Blog" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 386,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 386,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/booking", className: "hover:text-white transition-colors font-medium text-[#FBBC05]", children: "Get a Free Estimate" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 387,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 387,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/contact", className: "hover:text-white transition-colors", children: "Contact" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 388,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 388,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 380,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 378,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 296,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "pt-8 border-t border-[#3a3f3c] text-sm text-[#a3aba6] font-light flex flex-col md:flex-row justify-between items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ShineWell Cleaning Services. All rights reserved."
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 394,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-6", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] uppercase tracking-widest opacity-50", children: [
            "Crafted by ",
            /* @__PURE__ */ jsxDEV("a", { href: "https://www.cerrana.com", target: "_blank", rel: "noopener noreferrer", className: "hover:text-white transition-colors underline underline-offset-4", children: "Cerrana" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 397,
              columnNumber: 28
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 396,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex gap-6", children: [
            /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-white transition-colors", children: "Privacy Policy" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 400,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-white transition-colors", children: "Terms of Service" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 401,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 399,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 395,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 393,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 295,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 294,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      "a",
      {
        href: "https://wa.me/19133251400",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[#25D366]/30 transition-all duration-300 flex items-center justify-center group",
        "aria-label": "Chat on WhatsApp",
        children: [
          /* @__PURE__ */ jsxDEV("svg", { className: "w-8 h-8 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV("path", { d: "M12.031 0C5.385 0 0 5.385 0 12.031c0 2.12.553 4.185 1.604 6.008L.26 23.73l5.85-1.534A11.97 11.97 0 0012.031 24c6.646 0 12.03-5.385 12.03-12.03S18.677 0 12.031 0zm0 22.008c-1.785 0-3.535-.48-5.07-1.39l-.364-.216-3.766.987.998-3.672-.237-.377a9.985 9.985 0 01-1.526-5.309c0-5.545 4.512-10.057 10.057-10.057 5.545 0 10.057 4.512 10.057 10.057 0 5.545-4.512 10.057-10.057 10.057zm5.526-7.542c-.303-.152-1.794-.886-2.072-.987-.278-.101-.48-.152-.682.152-.202.303-.783.987-.96 1.189-.177.202-.354.227-.657.076-1.39-.65-2.408-1.15-3.357-2.61-.202-.303.202-.278.48-.833.076-.152.038-.278-.038-.43-.076-.152-.682-1.643-.935-2.25-.253-.607-.505-.53-.682-.53-.177 0-.379-.025-.581-.025-.202 0-.53.076-.808.379-.278.303-1.06 1.036-1.06 2.527 0 1.491 1.086 2.932 1.238 3.134.152.202 2.122 3.235 5.143 4.538 2.022.87 2.73.808 3.235.758.505-.05 1.794-.733 2.047-1.44.253-.708.253-1.314.177-1.44-.076-.126-.278-.202-.581-.354z" }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 417,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 416,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "absolute right-full mr-4 bg-white text-[#2C302E] px-4 py-2 rounded-xl text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap", children: "Chat with us!" }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 419,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 409,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/Layout.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
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
                lineNumber: 56,
                columnNumber: 44
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 55,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-[#5c635f] mb-6 max-w-lg leading-relaxed font-light", children: "ShineWell provides Kansas City's most reliable commercial and residential cleaning services, delivering pristine results for homes, offices, apartments, and short-term rentals. As a fully insured, locally owned company with over 22 years of experience, we offer eco-friendly products and meticulous attention to detail with our 100% satisfaction guarantee." }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 58,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-3xl shadow-xl border border-[#e8e5df] relative overflow-hidden max-w-[600px] w-full", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mb-4", children: /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-serif text-[#2C302E]", children: "Book Your Cleaning" }, void 0, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 66,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 65,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "w-full min-h-[500px] rounded-xl overflow-hidden border border-[#e8e5df] bg-[#F9F8F6] flex items-center justify-center relative", children: [
                  /* @__PURE__ */ jsxDEV(
                    "iframe",
                    {
                      src: "https://links.somosoverflow.com/widget/form/wCd628Bbw6Kdx6T546Nk",
                      style: { width: "100%", height: "100%", minHeight: "500px", border: "none", overflow: "hidden" },
                      scrolling: "no",
                      id: "inline-wCd628Bbw6Kdx6T546Nk",
                      "data-layout": "{'id':'INLINE'}",
                      "data-trigger-type": "alwaysShow",
                      "data-trigger-value": "",
                      "data-activation-type": "alwaysActivated",
                      "data-activation-value": "",
                      "data-deactivation-type": "neverDeactivate",
                      "data-deactivation-value": "",
                      "data-form-name": "Book Your Cleaning",
                      "data-height": "500",
                      "data-layout-iframe-id": "inline-wCd628Bbw6Kdx6T546Nk",
                      "data-form-id": "wCd628Bbw6Kdx6T546Nk",
                      title: "Book Your Cleaning"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/pages/Home.tsx",
                      lineNumber: 69,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV("script", { src: "https://links.somosoverflow.com/js/form_embed.js", type: "text/javascript" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 88,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 68,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 64,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "tel:9133251400",
                  className: "text-[#607564] hover:text-[#C86B53] font-medium text-lg transition-colors flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5" }, void 0, false, {
                      fileName: "/app/applet/src/pages/Home.tsx",
                      lineNumber: 98,
                      columnNumber: 21
                    }, this),
                    "Or call us directly: 913-325-1400"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 94,
                  columnNumber: 19
                },
                this
              ) }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 93,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 62,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 49,
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
                  src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
                  alt: "Professional house cleaning service in Overland Park & KC Metro",
                  className: "w-full h-full object-cover",
                  referrerPolicy: "no-referrer"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 112,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 118,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 111,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] hidden md:block", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-2", children: /* @__PURE__ */ jsxDEV("div", { className: "flex text-[#C86B53]", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxDEV(Star, { className: "h-4 w-4 fill-current" }, i, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 125,
                columnNumber: 49
              }, this)) }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 124,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 123,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "font-serif text-[#2C302E] leading-snug", children: '"It feels like a brand new house every time they leave."' }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 128,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 122,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 105,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 46,
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
                lineNumber: 145,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] max-w-2xl font-light", children: "Whether you need a recurring office clean, a one time deep scrub, or a move out reset in Kansas City, ShineWell has a plan that fits your schedule and budget." }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 146,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 144,
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
                    lineNumber: 154,
                    columnNumber: 33
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 150,
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
          lineNumber: 138,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 lg:gap-8", children: [
        {
          icon: /* @__PURE__ */ jsxDEV(Building2, { className: "h-7 w-7 text-[#607564]", strokeWidth: 1.5 }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 161,
            columnNumber: 23
          }, this),
          title: "Business Cleaning",
          desc: "Elevate your workspace. We provide thorough, professional cleaning for offices and commercial spaces to ensure a healthy environment.",
          path: "/services/commercial-deep-cleaning"
        },
        {
          icon: /* @__PURE__ */ jsxDEV(Sparkles, { className: "h-7 w-7 text-[#607564]", strokeWidth: 1.5 }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 167,
            columnNumber: 23
          }, this),
          title: "Deep Cleaning",
          desc: "For when things have gotten a little out of hand. We get into the forgotten corners, baseboards, and behind the appliances.",
          path: "/services/deep-dives"
        },
        {
          icon: /* @__PURE__ */ jsxDEV(Home$1, { className: "h-7 w-7 text-[#607564]", strokeWidth: 1.5 }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 173,
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
              lineNumber: 188,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-serif text-[#2C302E] mb-2 group-hover:text-[#C86B53] transition-colors", children: service.title }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 191,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] leading-relaxed font-light mb-4", children: service.desc }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 192,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center text-[#607564] font-medium text-sm group-hover:text-[#C86B53] transition-colors", children: [
              "Learn more ",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 196,
                columnNumber: 32
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 195,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 187,
            columnNumber: 17
          }, this)
        },
        idx,
        false,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 179,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 158,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-14 bg-[#F9F8F6]", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-serif text-[#2C302E] mb-4", children: "Why Choose ShineWell?" }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 209,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light max-w-2xl mx-auto", children: "With decades of experience and a passion for pristine spaces, we are the premier choice for homes and businesses across Kansas City." }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 210,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 208,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-[#e8e5df]", children: /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-y-6 gap-x-12", children: [
        "Fully Insured",
        "Locally Owned",
        "22+ Years Experience",
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
              lineNumber: 235,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 234,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-medium text-[#2C302E]", children: point }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 237,
              columnNumber: 19
            }, this)
          ]
        },
        idx,
        true,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 226,
          columnNumber: 17
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 215,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 214,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 207,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 206,
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
              lineNumber: 256,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 text-lg font-light text-[#2C302E]/80 leading-relaxed mb-6", children: [
              /* @__PURE__ */ jsxDEV("p", { children: "I started ShineWell with a simple belief: that a clean environment is the foundation for a peaceful life. What began as a personal passion for helping neighbors in Kansas City reclaim their weekends has grown into the city's most dedicated cleaning team." }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 258,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { children: "We aren't a faceless franchise. We're a local team of perfectionists who genuinely love the satisfaction of a job well done. Whether it's a corporate office or a family home, we treat every space as if it were our own—with honesty, meticulousness, and respect." }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 261,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 257,
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
                    lineNumber: 270,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 265,
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
          lineNumber: 249,
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
                src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
                alt: "ShineWell professional cleaning team at work",
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                referrerPolicy: "no-referrer"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 282,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-[#2C302E]/40 to-transparent" }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 288,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 281,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 274,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 248,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 247,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 246,
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
                /* @__PURE__ */ jsxDEV("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsxDEV("path", { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 308,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 309,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("path", { fill: "#FBBC05", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 310,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 311,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 307,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex text-[#FBBC05]", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxDEV(Star, { className: "h-4 w-4 fill-current" }, i, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 314,
                  columnNumber: 48
                }, this)) }, void 0, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 313,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium text-[#2C302E]", children: "5.0 on Google" }, void 0, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 316,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 301,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-serif text-[#2C302E] mb-3", children: "What do our Kansas City commercial and home clients say?" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 318,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light", children: "Don't just take our word for it. Here's what our commercial and residential clients have to say about the ShineWell experience." }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 319,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 299,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxDEV("button", { onClick: scrollPrev, className: "w-12 h-12 rounded-full border border-[#e8e5df] flex items-center justify-center text-[#607564] hover:bg-[#F9F8F6] transition-colors", children: /* @__PURE__ */ jsxDEV(ChevronLeft, { className: "w-6 h-6" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 325,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 324,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("button", { onClick: scrollNext, className: "w-12 h-12 rounded-full border border-[#e8e5df] flex items-center justify-center text-[#607564] hover:bg-[#F9F8F6] transition-colors", children: /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-6 h-6" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 328,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 327,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 323,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 298,
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
                  lineNumber: 384,
                  columnNumber: 66
                }, this)) }, void 0, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 383,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 382,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-[#2C302E] mb-4 text-[15px] leading-relaxed flex-grow font-light italic", children: [
                  '"',
                  review.text,
                  '"'
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 388,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center gap-3 mt-auto", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 bg-[#607564] rounded-full flex items-center justify-center text-white font-serif text-xl", children: review.name.charAt(0) }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 391,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("p", { className: "font-medium text-[#2C302E]", children: review.name }, void 0, false, {
                      fileName: "/app/applet/src/pages/Home.tsx",
                      lineNumber: 395,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-1 mt-1", children: [
                      /* @__PURE__ */ jsxDEV("svg", { className: "w-3.5 h-3.5", viewBox: "0 0 24 24", children: [
                        /* @__PURE__ */ jsxDEV("path", { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }, void 0, false, {
                          fileName: "/app/applet/src/pages/Home.tsx",
                          lineNumber: 398,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ jsxDEV("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }, void 0, false, {
                          fileName: "/app/applet/src/pages/Home.tsx",
                          lineNumber: 399,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ jsxDEV("path", { fill: "#FBBC05", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }, void 0, false, {
                          fileName: "/app/applet/src/pages/Home.tsx",
                          lineNumber: 400,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ jsxDEV("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" }, void 0, false, {
                          fileName: "/app/applet/src/pages/Home.tsx",
                          lineNumber: 401,
                          columnNumber: 29
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/pages/Home.tsx",
                        lineNumber: 397,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-[#5c635f]", children: "Google Review" }, void 0, false, {
                        fileName: "/app/applet/src/pages/Home.tsx",
                        lineNumber: 403,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/pages/Home.tsx",
                      lineNumber: 396,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 394,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 390,
                  columnNumber: 21
                }, this),
                review.ownerResponse && /* @__PURE__ */ jsxDEV("div", { className: "mt-6 pt-6 border-t border-[#e8e5df] w-full text-left", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-bold text-[#607564] uppercase tracking-wider mb-2", children: "Lina's Response" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 410,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-[#5c635f] font-light leading-relaxed", children: review.ownerResponse }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 411,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 409,
                  columnNumber: 23
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 375,
              columnNumber: 19
            },
            this
          )
        },
        idx,
        false,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 371,
          columnNumber: 17
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 334,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 333,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 297,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 296,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-14 bg-[#8BA192] text-[#2C302E]", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-serif mb-3 text-[#2C302E]", children: "Frequently Asked Questions" }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 428,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#2C302E]/80 font-light", children: "Everything you need to know about our cleaning services in Kansas City." }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 429,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 427,
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
              lineNumber: 469,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-white/90 font-light leading-relaxed", children: faq.a }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 470,
              columnNumber: 17
            }, this)
          ]
        },
        idx,
        true,
        {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 461,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 434,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 426,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 425,
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
          /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-serif text-[#2C302E] mb-3", children: "Experience the ShineWell Difference" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 487,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light mb-6 max-w-2xl mx-auto", children: "Ready to reclaim your time? Book your professional cleaning service today and let us take care of the rest." }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 488,
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
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 497,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 492,
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
                  /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 text-[#607564]" }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 503,
                    columnNumber: 17
                  }, this),
                  "Call 913-325-1400"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 499,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 491,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 481,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 480,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 479,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/Home.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
const hoarderImg = "/assets/regenerated_image_1778884089897-Bms6JZEG.jpg";
const organizingImg = "/assets/regenerated_image_1778878771115-CdTNvowV.jpg";
const specializedImg = "/assets/specialized_treatment_1779460554949-CgRgUsE0.png";
const serviceData = {
  "routine-housekeeping": {
    title: "Professional Standard Home Cleaning in Overland Park & KC Metro",
    icon: /* @__PURE__ */ jsxDEV(Home$1, { className: "w-12 h-12 text-[#CAD4CD]", strokeWidth: 1.5 }, void 0, false, {
      fileName: "/app/applet/src/pages/ServicePage.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, void 0),
    heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
    altText: "ShineWell cleaner performing standard home cleaning Kansas City",
    description: "Keeping your sanctuary fresh, week after week. We learn your preferences, remember the details that matter to you, and treat your home with the care and respect it deserves — every single visit.",
    introAnswer: "ShineWell provides meticulous, background-checked routine home cleaning and housekeeping services across the greater Kansas City area. Our customized plans ensure that your bathrooms, kitchen, and living areas remain beautifully clean on a weekly, bi-weekly, or monthly schedule, giving you back your valuable free time.",
    details: "Life moves fast. Between work, family, and everything in between, keeping your home consistently clean can feel like a job in itself. That's where ShineWell comes in.\n\nOur Professional Standard Home Cleaning is designed for homeowners who want to maintain a clean, comfortable space without sacrificing their free time. This isn't a one size fits all approach — we take the time to understand your home, your preferences, and your routine, so every visit feels tailored rather than transactional.\n\nWhether you prefer weekly freshness, a bi weekly reset, or a monthly refresh, our team shows up prepared, professional, and ready to work. Over time, we learn what matters most to you — the way you like your bed made, the surfaces you're most particular about, the products that work best in your space — and we deliver that consistently, visit after visit.",
    price: "Starting at $150",
    checklist: [
      {
        section: "All Rooms",
        items: [
          "Dusting all accessible surfaces & décor",
          "Vacuuming carpets & upholstery",
          "Sweeping & mopping hard floors",
          "Emptying trash bins",
          "Making beds (upon request)",
          "Sanitizing high touch surfaces",
          "Spot cleaning walls & baseboards"
        ]
      },
      {
        section: "Kitchen",
        items: [
          "Wiping down countertops & backsplash",
          "Cleaning exterior of all appliances",
          "Degreasing stovetop",
          "Sanitizing sink & faucet",
          "Wiping cabinet fronts",
          "Emptying trash"
        ]
      },
      {
        section: "Bathrooms",
        items: [
          "Sanitizing toilet, shower & tub",
          "Polishing mirrors & glass",
          "Sanitizing sink & counters",
          "Wiping cabinet fronts",
          "Mopping floors",
          "Restocking supplies (if provided)"
        ]
      }
    ],
    scheduleOptions: [
      { title: "Weekly", desc: "Ideal for busy households, families with kids or pets, or anyone who wants their home consistently guest ready. Your team becomes deeply familiar with your space and preferences." },
      { title: "Bi weekly", desc: "The most popular choice. A thorough clean every two weeks keeps your home in great shape without the weekly commitment." },
      { title: "Monthly", desc: "Perfect for smaller households or lighter use spaces. A comprehensive clean once a month to reset and refresh every room." }
    ],
    whyChooseUs: [
      "Background checked, vetted professionals",
      "Consistent team — same faces, every visit",
      "Eco friendly and non toxic product options",
      "Fully insured and bonded",
      "100% satisfaction guarantee on every clean",
      "No long term contracts — flexible scheduling on your terms"
    ],
    faqs: [
      { q: "Do I need to tidy up before you arrive?", a: "You don't need to clean before we clean — that's exactly what we're here for. That said, picking up loose clutter like toys, clothes, or dishes off the floor allows our team to spend their time deep cleaning surfaces rather than organizing belongings. The less time we spend moving things around, the more thorough your clean will be. Think of it as teamwork — you clear the path, we handle the rest." },
      { q: "How long does a routine clean usually take?", a: "Most homes take between 2 and 4 hours, depending on the size of your space and the number of rooms. First time visits may take slightly longer as our team gets familiar with your home's layout and your specific preferences. After that, visits become more efficient because we already know your space. If you have a particularly large home or additional areas you'd like covered, we'll give you a realistic time estimate upfront so there are no surprises." },
      { q: "Do you bring your own supplies and equipment?", a: "Yes — our team arrives fully equipped with professional grade, eco conscious cleaning products and tools. You don't need to supply a thing. If you have specific preferences, sensitivities, or allergies to certain products, just let us know when booking and we'll accommodate accordingly. We're happy to use your preferred products if you'd rather we work with what you already have at home." },
      { q: "What if I need to reschedule or skip a visit?", a: "Life happens, and we get it. We ask for at least 24 hours' notice for reschedules or cancellations so we can adjust our team's schedule accordingly. We'll work with you to find a new time that fits without any hassle or penalty. Recurring clients always get priority scheduling, so you're never left waiting long." },
      { q: "Will I have the same cleaning team every visit?", a: "We make every effort to send the same team to your home each visit. Consistency matters — both for your comfort and for the quality of the clean. A team that knows your home, your preferences, and your routines simply does a better job. In the rare case of an absence or schedule change, we'll always notify you in advance." },
      { q: "Is this service right for my home size?", a: "Our Standard Clean is well-suited for homes up to approximately 2,500 sq ft. For larger properties, or homes that need more intensive attention due to pets, heavy use, or time between cleans, we may recommend starting with a Deep Clean first to bring everything up to baseline — then transitioning to a Standard recurring plan for ongoing maintenance. Not sure which is right for you? Reach out and we'll help you figure it out." }
    ]
  },
  "deep-dives": {
    title: "Deep Cleaning Services in Kansas City: Spotless, Top to Bottom",
    icon: /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-12 h-12 text-[#CAD4CD]", strokeWidth: 1.5 }, void 0, false, {
      fileName: "/app/applet/src/pages/ServicePage.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, void 0),
    heroImage: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop",
    altText: "Deep cleaning service kitchen Kansas City Missouri",
    description: "For when things have gotten a little out of hand. We get into the forgotten corners, baseboards, and behind the appliances.",
    introAnswer: "ShineWell offers comprehensive, top-to-bottom deep cleaning services in Kansas City, Missouri. This premium, detailed package targets hard-to-reach areas, hand-wipes baseboards, sanitizes tile grout, scrubs window sills, and eliminates deep-seated dirt from kitchens and bathrooms to establish an immaculate, fresh, and healthy baseline for your home.",
    details: "A deep clean is a comprehensive, top to bottom cleaning of your home. It goes beyond the surface level of routine cleaning to tackle the dirt and grime that accumulates over time in hard to reach places. This service is perfect for spring cleaning, preparing for holidays or special events, or just giving your home a much needed refresh.",
    price: "Starting at $300",
    checklist: [
      {
        section: "All Rooms",
        items: [
          "Everything in Routine Housekeeping",
          "Hand wiping baseboards and door frames",
          "Cleaning inside window sills and tracks",
          "Wiping down ceiling fans and light fixtures",
          "Detailed dusting of blinds and shutters"
        ]
      },
      {
        section: "Kitchen",
        items: [
          "Cleaning the exterior of large appliances",
          "Detailed scrubbing of sink and fixtures",
          "Degreasing stovetop and hood exterior"
        ]
      },
      {
        section: "Bathrooms",
        items: [
          "Scrubbing grout lines in bathrooms",
          "Descaling showerheads and faucets",
          "Detailed cleaning of bathroom exhaust fans"
        ]
      }
    ],
    faqs: [
      { q: "How often should I schedule a deep clean?", a: "We recommend a deep clean 2-3 times a year, or before starting a routine maintenance schedule." },
      { q: "Do you clean inside the oven and fridge during a deep clean?", a: "Yes, interior appliance cleaning can be included in our deep dive packages upon request." }
    ]
  },
  "move-in-move-out": {
    title: "Move In & Move Out Cleaning Service in Kansas City",
    icon: /* @__PURE__ */ jsxDEV(Briefcase, { className: "w-12 h-12 text-[#CAD4CD]", strokeWidth: 1.5 }, void 0, false, {
      fileName: "/app/applet/src/pages/ServicePage.tsx",
      lineNumber: 130,
      columnNumber: 11
    }, void 0),
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    altText: "Move out cleaning service apartment Kansas City",
    description: "Start fresh or leave a blank slate. We make transitions seamless with a meticulous, top to bottom clean.",
    introAnswer: "ShineWell delivers meticulous move-in and move-out cleaning services in Kansas City to ensure a seamless residential transition. We handle everything from deep-cleaning empty cabinets and scrubbing appliances to detailing baseboards, helping renters secure their security deposits and homeowners prepare their properties for prospective buyers.",
    details: "Moving is stressful enough without having to worry about cleaning. Our move in / move out cleaning service ensures that your new home is perfectly clean and ready for you to settle in, or that your old home is left in pristine condition for the next occupants or to secure your security deposit.",
    price: "Starting at $350",
    checklist: [
      {
        section: "All Rooms",
        items: [
          "Everything in Deep Dives",
          "Wiping down all interior doors",
          "Detailed cleaning of all closets",
          "Removing minor scuff marks from walls",
          "Ensuring the space is completely move in ready"
        ]
      },
      {
        section: "Kitchen",
        items: [
          "Cleaning inside all cabinets and drawers",
          "Cleaning inside the refrigerator and oven",
          "Cleaning behind appliances (if moved)"
        ]
      },
      {
        section: "Bathrooms",
        items: [
          "Cleaning inside all bathroom cabinets and drawers",
          "Sanitizing inside medicine cabinets",
          "Deep scrubbing of all fixtures"
        ]
      }
    ],
    faqs: [
      { q: "Will this cleaning help me get my security deposit back?", a: "Yes! Our move out cleans are designed to meet standard landlord and property management requirements for deposit returns." },
      { q: "Do I need to have electricity and water running?", a: "Yes, we require active water and power to properly clean the home." }
    ]
  },
  "commercial-deep-cleaning": {
    title: "Light Commercial Cleaning in Overland Park & KC Metro",
    icon: /* @__PURE__ */ jsxDEV(Building2, { className: "w-12 h-12 text-[#CAD4CD]", strokeWidth: 1.5 }, void 0, false, {
      fileName: "/app/applet/src/pages/ServicePage.tsx",
      lineNumber: 172,
      columnNumber: 11
    }, void 0),
    heroImage: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop",
    altText: "Commercial office cleaning Overland Park & KC Metro",
    description: "Elevate your workspace. We provide thorough, professional cleaning for offices and commercial spaces to ensure a healthy environment.",
    introAnswer: "ShineWell provides commercial office and business cleaning services across the Kansas City area, tailored to fit your specific corporate schedule. Our fully insured, background-checked cleaners sanitize reception lobbies, desk workstations, restrooms, and breakrooms to maintain a professional, healthy workspace for your employees and clients alike.",
    details: "A clean workspace is essential for employee productivity, health, and making a great impression on clients. Our commercial cleaning service is tailored to the unique needs of your business, providing a thorough sanitization and refresh of your office, retail space, or facility.",
    price: "Custom Quote",
    checklist: [
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
    ],
    faqs: [
      { q: "Can you clean after our business hours?", a: "Absolutely. We offer flexible scheduling, including evenings and weekends, to minimize disruption to your operations." },
      { q: "Do you provide cleaning supplies and equipment?", a: "Yes, we bring all necessary commercial-grade supplies and equipment." }
    ]
  },
  "specialized-treatments": {
    title: "Specialized Cleaning Treatments in Kansas City",
    icon: /* @__PURE__ */ jsxDEV(Droplets, { className: "w-12 h-12 text-[#CAD4CD]", strokeWidth: 1.5 }, void 0, false, {
      fileName: "/app/applet/src/pages/ServicePage.tsx",
      lineNumber: 222,
      columnNumber: 11
    }, void 0),
    heroImage: specializedImg,
    altText: "Specialized cleaning services Kansas City",
    description: "Targeted care for specific needs, including upholstery, carpet spot treatments, and eco friendly sanitization for sensitive spaces.",
    introAnswer: "ShineWell offers specialized cleaning treatments in Kansas City, including expert upholstery care, leather conditioning, and hardwood floor polishing. We use advanced, eco-friendly sanitization techniques and allergen-safe green products to revive sensitive high-end surfaces, ensuring your home remains beautiful, protected, and healthy without using harsh chemicals.",
    details: "Sometimes standard cleaning isn't enough. Our specialized treatments address specific issues and materials that require extra care and expertise. From reviving tired upholstery to using specialized eco friendly products for allergy sensitive households, we have the solutions you need.",
    price: "Custom Quote",
    checklist: [
      {
        section: "Upholstery & Carpets",
        items: [
          "Upholstery cleaning and refreshing",
          "Targeted carpet spot and stain removal",
          "Deep vacuuming of fabric furniture"
        ]
      },
      {
        section: "Treatments",
        items: [
          "Eco friendly / Green cleaning product options",
          "Odor removal treatments",
          "Allergen reduction cleaning techniques"
        ]
      },
      {
        section: "Furniture & Floors",
        items: [
          "Leather furniture conditioning",
          "Hardwood floor polishing",
          "Specialty surface care (marble, granite)"
        ]
      }
    ],
    faqs: [
      { q: "Are your eco friendly products safe for pets and children?", a: "Yes, our green cleaning options use non toxic, allergen free products that are completely safe for your family and pets." },
      { q: "How long does upholstery take to dry?", a: "Typically, upholstery will be completely dry within 4-6 hours depending on the fabric and ventilation." }
    ]
  },
  "organizing": {
    title: "Professional Home & Office Organizing in Kansas City",
    icon: /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-12 h-12 text-[#CAD4CD]", strokeWidth: 1.5 }, void 0, false, {
      fileName: "/app/applet/src/pages/ServicePage.tsx",
      lineNumber: 262,
      columnNumber: 11
    }, void 0),
    heroImage: organizingImg,
    altText: "Professional organizing service home Kansas City",
    description: "Functional systems for your home or office. We help you declutter and create spaces that work for your daily life.",
    introAnswer: "ShineWell delivers professional home and office organization services in Kansas City, designing sustainable systems to keep clutter away. We guide you through sorting, decluttering, and optimizing spaces like closets, pantries, and home offices, helping restore calm, layout function, and physical peace of mind to your surroundings.",
    details: "Clutter can be overwhelming. Our organizing service goes beyond cleaning to help you reclaim your space and your time. We work with you to declutter, categorize, and create sustainable systems that make maintaining order effortless. Whether it's a chaotic pantry, a crowded closet, or a disorganized office, we bring clarity and function back to your environment.",
    price: "Starting at $75/hr",
    checklist: [
      {
        section: "Decluttering",
        items: [
          "Sorting and categorizing belongings",
          "Objective guidance on what to keep, donate, or discard",
          "Space planning and layout optimization"
        ]
      },
      {
        section: "Systems",
        items: [
          "Implementation of labeling and storage solutions",
          "Filing systems for home offices",
          "Kid friendly organizational designs"
        ]
      }
    ],
    faqs: [
      { q: "Do I need to buy bins and baskets first?", a: "No! We recommend waiting until we've sorted your items and planned the space. We can provide suggestions or shop for you." },
      { q: "Do you help with donations?", a: "Yes, we can facilitate the removal of unwanted items to local donation centers as part of our service." }
    ]
  },
  "hoarder-cleanup": {
    title: "Compassionate Hoarder House Clean Up in Kansas City",
    icon: /* @__PURE__ */ jsxDEV(Briefcase, { className: "w-12 h-12 text-[#CAD4CD]", strokeWidth: 1.5 }, void 0, false, {
      fileName: "/app/applet/src/pages/ServicePage.tsx",
      lineNumber: 294,
      columnNumber: 11
    }, void 0),
    heroImage: hoarderImg,
    altText: "Compassionate hoarder house clean up service in Kansas City",
    description: "Empathetic, efficient restoration for cluttered environments. We handle the heavy lifting with care and discretion.",
    introAnswer: "ShineWell offers compassionate, highly confidential hoarding and extreme clutter cleanup services across Kansas City. Our background-checked team works respectfully alongside families or estate executors, sorting valuables, removing heavy debris, and performing thorough deep sanitization and odor removal to restore safe, comfortable, and healthy living environments.",
    details: "Facing a hoarding situation requires more than just a cleaning crew; it requires compassion, patience, and a non judgmental approach. ShineWell provides a safe and supportive environment to help individuals and families navigate the process of decluttering and sanitizing their homes. We work at a pace that feels safe while ensuring significant progress toward a healthy living environment.",
    price: "Custom Quote",
    checklist: [
      {
        section: "Removal & Sorting",
        items: [
          "Collaborative sorting of items",
          "Bulk debris removal and disposal",
          "Identification of important documents and valuables"
        ]
      },
      {
        section: "Restoration",
        items: [
          "Deep sanitization of all surfaces",
          "Odor removal and air purification",
          "Biohazard cleaning where necessary"
        ]
      }
    ],
    faqs: [
      { q: "Is this service confidential?", a: "Absolutely. We prioritize your privacy and discretion throughout the entire process." },
      { q: "Can you work with estate executors?", a: "Yes, we frequently work with family members and legal executors to clear properties." }
    ]
  },
  "junk-removal": {
    title: "Junk Removal & Dumpster Services in Kansas City",
    icon: /* @__PURE__ */ jsxDEV(Droplets, { className: "w-12 h-12 text-[#CAD4CD]", strokeWidth: 1.5 }, void 0, false, {
      fileName: "/app/applet/src/pages/ServicePage.tsx",
      lineNumber: 326,
      columnNumber: 11
    }, void 0),
    heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    altText: "Professional junk removal service dumpster Kansas City",
    description: "Full service removal of unwanted items with dumpster logistics handled. Perfect for office clear outs or large home projects.",
    introAnswer: "ShineWell manages eco-friendly junk removal and dumpster logistics across Kansas City for residential and commercial clear-outs. From hauling heavy furniture and office equipment to managing dumpster placement permits, we handle all the heavy loading and prioritizing local donation centers or recycling, keeping waste out of landfills.",
    details: "Large scale cleanouts require logistics. We provide full service junk removal, including the heavy lifting, loading, and disposal. If your project requires a dumpster on site, we handle the rental, delivery, and pickup, so you only have to deal with one point of contact. From old furniture and electronics to construction debris, we clear the way for your next chapter.",
    price: "Starting at $199",
    checklist: [
      {
        section: "Removal",
        items: [
          "Appliance and furniture removal",
          "Electronic waste (e waste) recycling",
          "Yard waste and bulk debris disposal"
        ]
      },
      {
        section: "Logistics",
        items: [
          "Dumpster rental and placement management",
          "Permit handling (if required)",
          "Final site sweep up"
        ]
      }
    ],
    faqs: [
      { q: "What items can you not take?", a: "We cannot haul away hazardous materials like paint, chemicals, or tires. Please contact us for a full list of prohibited items." },
      { q: "Do you recycle or donate items?", a: "Yes! We prioritize recycling and donating usable items to keep as much as possible out of landfills." }
    ]
  },
  "post-construction": {
    title: "Post Construction Cleaning Services in Kansas City",
    icon: /* @__PURE__ */ jsxDEV(Paintbrush, { className: "w-12 h-12 text-[#CAD4CD]", strokeWidth: 1.5 }, void 0, false, {
      fileName: "/app/applet/src/pages/ServicePage.tsx",
      lineNumber: 358,
      columnNumber: 11
    }, void 0),
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    altText: "Post Construction Cleaning Services in Kansas City",
    description: "We clear the dust and debris after your renovation, leaving your newly updated space sparkling and ready to enjoy.",
    introAnswer: "ShineWell provides thorough post-construction and post-renovation cleaning services across the greater Kansas City metropolitan area. Our cleaners utilize HEPA-filter vacuums to eliminate airborne drywall dust, scrub paint splatters and adhesive residues from new appliances and fixtures, and wash sills and baseboards to make your space move-in ready.",
    details: "Renovations are exciting, but the dust they leave behind is not. Our post construction cleaning service is designed to tackle the fine dust and debris that settles everywhere after a building project. We meticulously clean every surface so you can finally enjoy your newly renovated space without the mess.",
    price: "Custom Quote",
    checklist: [
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
    ],
    faqs: [
      { q: "Do you remove large construction debris?", a: "We focus on fine dust and detailed cleaning. Large debris and hazardous materials should be removed by the contractors prior to our arrival." },
      { q: "Construction dust keeps settling. Will you come back?", a: "We use specialized HEPA vacuums to minimize airborne dust, but we often recommend a follow up 'touch up' clean a week later as HVAC systems can circulate hidden dust." }
    ]
  }
};
function ServicePage() {
  const { serviceId } = useParams();
  const service = serviceId ? serviceData[serviceId] : null;
  if (!service) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-[60vh] flex flex-col items-center justify-center pt-24 px-6", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl font-serif text-[#2C302E] mb-4", children: "Service Not Found" }, void 0, false, {
        fileName: "/app/applet/src/pages/ServicePage.tsx",
        lineNumber: 407,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] mb-6", children: "We couldn't find the service you're looking for." }, void 0, false, {
        fileName: "/app/applet/src/pages/ServicePage.tsx",
        lineNumber: 408,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "bg-[#C86B53] text-white px-6 py-3 rounded-full font-medium hover:bg-[#b55e47] transition-colors", children: "Return Home" }, void 0, false, {
        fileName: "/app/applet/src/pages/ServicePage.tsx",
        lineNumber: 409,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/ServicePage.tsx",
      lineNumber: 406,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "pt-24 pb-14", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12 mb-10", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-5", children: service.icon }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 426,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] mb-4 leading-tight", children: service.title }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 429,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "inline-block bg-[#F9F8F6] px-4 py-2 rounded-full border border-[#e8e5df] mb-4", children: /* @__PURE__ */ jsxDEV("span", { className: "text-[#4A5D4E] font-medium", children: service.price }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 433,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 432,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-[#5c635f] font-light leading-relaxed mb-5", children: service.description }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 435,
              columnNumber: 13
            }, this),
            service.introAnswer && /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 md:p-8 rounded-2xl border border-[#e8e5df] text-left shadow-sm mb-6", children: /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-[#2C302E] leading-relaxed font-light", children: [
              /* @__PURE__ */ jsxDEV("strong", { children: service.title.split(":")[0] }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 441,
                columnNumber: 19
              }, this),
              ": ",
              service.introAnswer
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 440,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 439,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: "/booking",
                className: "inline-flex items-center gap-2 bg-[#C86B53] text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-[#b55e47] hover:shadow-lg hover:-translate-y-0.5",
                children: [
                  "Get a Free Estimate",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "/app/applet/src/pages/ServicePage.tsx",
                    lineNumber: 450,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 445,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/ServicePage.tsx",
          lineNumber: 421,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.8, delay: 0.2 },
          className: "relative rounded-[2rem] overflow-hidden shadow-xl h-[400px] lg:h-[500px]",
          children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: service.heroImage,
                alt: service.altText || service.title,
                className: "w-full h-full object-cover",
                referrerPolicy: "no-referrer"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 460,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 466,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/ServicePage.tsx",
          lineNumber: 454,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/ServicePage.tsx",
      lineNumber: 420,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/ServicePage.tsx",
      lineNumber: 419,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-white py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "md:col-span-7 lg:col-span-8",
          children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-serif text-[#2C302E] mb-6", children: "How does this service work?" }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 481,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] leading-relaxed font-light text-lg mb-12 whitespace-pre-wrap", children: service.details }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 482,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "mb-16", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl font-serif text-[#2C302E] mb-8", children: "What is included in this service?" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 487,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6", children: service.checklist.map((section, idx) => /* @__PURE__ */ jsxDEV("div", { className: "bg-[#F9F8F6] p-8 rounded-3xl border border-[#e8e5df] shadow-sm", children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-serif text-[#4A5D4E] mb-6 pb-4 border-b border-[#e8e5df]", children: section.section }, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicePage.tsx",
                  lineNumber: 491,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4", children: section.items.map((item, itemIdx) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-[#CAD4CD] shrink-0 mt-0.5", strokeWidth: 2 }, void 0, false, {
                    fileName: "/app/applet/src/pages/ServicePage.tsx",
                    lineNumber: 497,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[#5c635f] font-light leading-relaxed", children: item }, void 0, false, {
                    fileName: "/app/applet/src/pages/ServicePage.tsx",
                    lineNumber: 498,
                    columnNumber: 29
                  }, this)
                ] }, itemIdx, true, {
                  fileName: "/app/applet/src/pages/ServicePage.tsx",
                  lineNumber: 496,
                  columnNumber: 27
                }, this)) }, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicePage.tsx",
                  lineNumber: 494,
                  columnNumber: 23
                }, this)
              ] }, idx, true, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 490,
                columnNumber: 21
              }, this)) }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 488,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 486,
              columnNumber: 15
            }, this),
            service.scheduleOptions && /* @__PURE__ */ jsxDEV("div", { className: "mb-16", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl font-serif text-[#2C302E] mb-8", children: "What schedule options do we offer?" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 509,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "grid gap-4", children: service.scheduleOptions.map((opt, idx) => /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-2xl border border-[#e8e5df] shadow-sm flex flex-col md:flex-row gap-4 items-start", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "bg-[#F9F8F6] text-[#4A5D4E] font-serif text-xl px-4 py-2 rounded-xl shrink-0 min-w-[120px] text-center", children: opt.title }, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicePage.tsx",
                  lineNumber: 513,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light leading-relaxed pt-1", children: opt.desc }, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicePage.tsx",
                  lineNumber: 516,
                  columnNumber: 25
                }, this)
              ] }, idx, true, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 512,
                columnNumber: 23
              }, this)) }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 510,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 508,
              columnNumber: 17
            }, this),
            service.whyChooseUs && /* @__PURE__ */ jsxDEV("div", { className: "mb-16", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl font-serif text-[#2C302E] mb-8", children: "Why choose ShineWell for your space?" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 525,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("ul", { className: "grid md:grid-cols-2 gap-4", children: service.whyChooseUs.map((reason, idx) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 bg-[#F9F8F6] p-4 rounded-xl border border-[#e8e5df]", children: [
                /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-[#CAD4CD] shrink-0 mt-0.5", strokeWidth: 2 }, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicePage.tsx",
                  lineNumber: 529,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-[#5c635f] font-light leading-relaxed", children: reason }, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicePage.tsx",
                  lineNumber: 530,
                  columnNumber: 25
                }, this)
              ] }, idx, true, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 528,
                columnNumber: 23
              }, this)) }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 526,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 524,
              columnNumber: 17
            }, this),
            service.faqs && service.faqs.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "mt-12", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-serif text-[#2C302E] mb-6", children: "What questions do our clients frequently ask?" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 539,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: service.faqs.map((faq, idx) => /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-2xl border border-[#e8e5df] shadow-sm", children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-medium text-[#2C302E] mb-2", children: faq.q }, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicePage.tsx",
                  lineNumber: 543,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light leading-relaxed", children: faq.a }, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicePage.tsx",
                  lineNumber: 544,
                  columnNumber: 25
                }, this)
              ] }, idx, true, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 542,
                columnNumber: 23
              }, this)) }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 540,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 538,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-16 bg-[#F9F8F6] p-8 rounded-3xl border border-[#e8e5df] text-center", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-serif text-[#2C302E] mb-4", children: "Are you looking for professional cleaning tips?" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 553,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light mb-6 max-w-lg mx-auto", children: "Check out our blog for expert advice, local Kansas City updates, and insights from the ShineWell team to help keep your home fresh between visits." }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 554,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/blog",
                  className: "inline-flex items-center gap-2 bg-white border border-[#e8e5df] text-[#4A5D4E] px-6 py-3 rounded-full font-medium transition-all hover:bg-[#4A5D4E] hover:text-white hover:border-[#4A5D4E]",
                  children: [
                    "Read Our Blog",
                    /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/app/applet/src/pages/ServicePage.tsx",
                      lineNumber: 562,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/pages/ServicePage.tsx",
                  lineNumber: 557,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 552,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/ServicePage.tsx",
          lineNumber: 475,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.2 },
          className: "md:col-span-5 lg:col-span-4",
          children: /* @__PURE__ */ jsxDEV("div", { className: "bg-[#2C302E] text-[#F9F8F6] p-8 rounded-3xl sticky top-32", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-serif mb-4", children: "Are you ready for a spotless space?" }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 575,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#a3aba6] font-light mb-8", children: "Get a free, no obligation estimate tailored to your specific needs and space." }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 576,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: "/booking",
                className: "block w-full text-center bg-[#C86B53] text-white px-6 py-4 rounded-xl font-medium transition-colors hover:bg-[#b55e47]",
                children: "Get a Free Estimate"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 579,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-6 pt-6 border-t border-[#3a3f3c] text-center", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-[#a3aba6] mb-2", children: "Or call us directly:" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 586,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("a", { href: "tel:9133251400", className: "text-xl font-serif text-white hover:text-[#C86B53] transition-colors flex items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4 shrink-0 text-[#CAD4CD]" }, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicePage.tsx",
                  lineNumber: 588,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "913-325-1400" }, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicePage.tsx",
                  lineNumber: 589,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/ServicePage.tsx",
                lineNumber: 587,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicePage.tsx",
              lineNumber: 585,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/ServicePage.tsx",
            lineNumber: 574,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/pages/ServicePage.tsx",
          lineNumber: 567,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/ServicePage.tsx",
      lineNumber: 474,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/ServicePage.tsx",
      lineNumber: 473,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/ServicePage.tsx",
      lineNumber: 472,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/ServicePage.tsx",
    lineNumber: 417,
    columnNumber: 5
  }, this);
}
function ServicesPage() {
  const [activeTab, setActiveTab] = useState("All Rooms");
  const residentialServices = [
    {
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
      title: "Routine House Cleaning",
      desc: "Keeping your sanctuary fresh, week after week. We learn your preferences and treat your home with the utmost respect.",
      path: "/services/routine-housekeeping"
    },
    {
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
      title: "Light Commercial Cleaning",
      desc: "Elevate your workspace. We provide thorough, professional cleaning for offices and commercial spaces to ensure a healthy environment.",
      path: "/services/commercial-deep-cleaning"
    },
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
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
            lineNumber: 203,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 md:p-8 rounded-2xl border border-[#e8e5df] text-left shadow-sm mb-6", children: /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-[#2C302E] leading-relaxed font-light", children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "ShineWell" }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 206,
              columnNumber: 15
            }, this),
            " provides a complete suite of professional cleaning services across Kansas City, custom-tailored to suit homes, offices, construction sites, and specialized cluttered spaces. Backed by our 100% satisfaction guarantee, our fully insured and highly trained cleaners handle everything from routine housekeeping to deep restorative commercial sanitization."
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 205,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 204,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light", children: "No cookie cutter checklists here. We adapt to your space, your preferences, and your life. Explore our comprehensive cleaning solutions." }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 209,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 198,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-14", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-serif text-[#2C302E] mb-4", children: "What commercial cleaning solutions do we offer?" }, void 0, false, {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 217,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-1 bg-[#CAD4CD] mx-auto rounded-full" }, void 0, false, {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 218,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 216,
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
                  lineNumber: 231,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 237,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 230,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "p-8 md:p-10 flex flex-col flex-grow", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-serif text-[#2C302E] mb-4 group-hover:text-[#C86B53] transition-colors", children: service.title }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 240,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] text-lg leading-relaxed font-light mb-8 flex-grow", children: service.desc }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 241,
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
                      lineNumber: 248,
                      columnNumber: 34
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 244,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 239,
              columnNumber: 17
            }, this)
          ]
        },
        idx,
        true,
        {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 222,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 220,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/ServicesPage.tsx",
      lineNumber: 215,
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
                lineNumber: 264,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-[#2C302E]/70 backdrop-blur-[1px]" }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 270,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-serif mb-4", children: "What is included in our commercial cleaning checklist?" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 272,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[#a3aba6] font-light max-w-2xl mx-auto text-lg", children: "A detailed breakdown of our comprehensive commercial and office cleaning services." }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 273,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 271,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 263,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-8 md:p-12 bg-[#F9F8F6]", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 lg:gap-12", children: commercialFeatures.map((feature, idx) => /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-2xl shadow-sm border border-[#e8e5df]", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-serif text-[#4A5D4E] mb-6 pb-4 border-b border-[#e8e5df]", children: feature.section }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 283,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4", children: feature.items.map((item, itemIdx) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV(Check, { className: "w-5 h-5 text-[#CAD4CD] shrink-0 mt-0.5", strokeWidth: 2 }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 289,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-[#5c635f] font-light leading-relaxed", children: item }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 290,
                columnNumber: 25
              }, this)
            ] }, itemIdx, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 288,
              columnNumber: 23
            }, this)) }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 286,
              columnNumber: 19
            }, this)
          ] }, idx, true, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 282,
            columnNumber: 17
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 280,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 279,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 257,
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
                lineNumber: 308,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-[#2C302E]/60 backdrop-blur-[2px]" }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 314,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-serif mb-4", children: "What is included in our post-construction checklist?" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 316,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[#e8e5df] font-light max-w-2xl mx-auto text-lg", children: "A detailed breakdown of our post renovation and new construction cleaning services." }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 317,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 315,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 307,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-8 md:p-12 bg-[#F9F8F6]", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12", children: postConstructionFeatures.map((feature, idx) => /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-2xl shadow-sm border border-[#e8e5df]", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-serif text-[#4A5D4E] mb-6 pb-4 border-b border-[#e8e5df]", children: feature.section }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 327,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4", children: feature.items.map((item, itemIdx) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV(Check, { className: "w-5 h-5 text-[#CAD4CD] shrink-0 mt-0.5", strokeWidth: 2 }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 333,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-[#5c635f] font-light leading-relaxed", children: item }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 334,
                columnNumber: 25
              }, this)
            ] }, itemIdx, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 332,
              columnNumber: 23
            }, this)) }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 330,
              columnNumber: 19
            }, this)
          ] }, idx, true, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 326,
            columnNumber: 17
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 324,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 323,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 301,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-14", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-serif text-[#2C302E] mb-4", children: "What residential cleaning packages are available?" }, void 0, false, {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 347,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-1 bg-[#CAD4CD] mx-auto rounded-full" }, void 0, false, {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 348,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 346,
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
                  lineNumber: 361,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 367,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 360,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "p-8 md:p-10 flex flex-col flex-grow", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-serif text-[#2C302E] mb-4 group-hover:text-[#C86B53] transition-colors", children: service.title }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 370,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] text-lg leading-relaxed font-light mb-8 flex-grow", children: service.desc }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 371,
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
                      lineNumber: 378,
                      columnNumber: 34
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 374,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 369,
              columnNumber: 17
            }, this)
          ]
        },
        idx,
        true,
        {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 352,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 350,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/ServicesPage.tsx",
      lineNumber: 345,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-14", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-serif text-[#2C302E] mb-4", children: "What specialized property restoration services do we handle?" }, void 0, false, {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 389,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-1 bg-[#CAD4CD] mx-auto rounded-full" }, void 0, false, {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 390,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 388,
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
                  lineNumber: 403,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 409,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 402,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "p-8 md:p-10 flex flex-col flex-grow", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-serif text-[#2C302E] mb-4 group-hover:text-[#C86B53] transition-colors", children: service.title }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 412,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] text-lg leading-relaxed font-light mb-8 flex-grow", children: service.desc }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 413,
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
                      lineNumber: 420,
                      columnNumber: 34
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 416,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 411,
              columnNumber: 17
            }, this)
          ]
        },
        idx,
        true,
        {
          fileName: "/app/applet/src/pages/ServicesPage.tsx",
          lineNumber: 394,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 392,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/ServicesPage.tsx",
      lineNumber: 387,
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
              lineNumber: 436,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-1 bg-[#CAD4CD] mx-auto rounded-full mb-6" }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 437,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light max-w-2xl mx-auto", children: "See exactly what's included in our most popular residential cleaning services to find the perfect fit for your home." }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 438,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 435,
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
              lineNumber: 445,
              columnNumber: 15
            },
            this
          )) }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 443,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-[2rem] shadow-sm border border-[#e8e5df] overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV("table", { className: "w-full text-left border-collapse min-w-[800px]", children: [
            /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { className: "bg-[#F9F8F6] border-b border-[#e8e5df]", children: [
              /* @__PURE__ */ jsxDEV("th", { className: "p-6 font-serif text-[#2C302E] text-xl w-2/5", children: "Cleaning Task" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 464,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("th", { className: "p-6 font-medium text-[#2C302E] text-center w-1/5", children: [
                "Routine",
                /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 465,
                  columnNumber: 93
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-light text-[#5c635f]", children: "Cleaning" }, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 465,
                  columnNumber: 98
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 465,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("th", { className: "p-6 font-medium text-[#2C302E] text-center w-1/5", children: [
                "Deep",
                /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 466,
                  columnNumber: 90
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-light text-[#5c635f]", children: "Cleaning" }, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 466,
                  columnNumber: 95
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 466,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("th", { className: "p-6 font-medium text-[#2C302E] text-center w-1/5", children: [
                "Move In /",
                /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 467,
                  columnNumber: 95
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-light text-[#5c635f]", children: "Move Out" }, void 0, false, {
                  fileName: "/app/applet/src/pages/ServicesPage.tsx",
                  lineNumber: 467,
                  columnNumber: 100
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 467,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 463,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 462,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("tbody", { children: comparisonData[activeTab].map((feature, idx) => /* @__PURE__ */ jsxDEV("tr", { className: "border-b border-[#e8e5df] last:border-0 hover:bg-[#F9F8F6]/50 transition-colors", children: [
              /* @__PURE__ */ jsxDEV("td", { className: "p-5 pl-6 text-[#5c635f] font-light", children: feature.name }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 473,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("td", { className: "p-5 text-center", children: feature.routine ? /* @__PURE__ */ jsxDEV(Check, { className: "w-5 h-5 text-[#CAD4CD] mx-auto", strokeWidth: 2.5 }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 476,
                columnNumber: 27
              }, this) : /* @__PURE__ */ jsxDEV("span", { className: "text-[#d1d5db] font-medium", children: "—" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 478,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 474,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("td", { className: "p-5 text-center", children: feature.deep ? /* @__PURE__ */ jsxDEV(Check, { className: "w-5 h-5 text-[#CAD4CD] mx-auto", strokeWidth: 2.5 }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 483,
                columnNumber: 27
              }, this) : /* @__PURE__ */ jsxDEV("span", { className: "text-[#d1d5db] font-medium", children: "—" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 485,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 481,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("td", { className: "p-5 text-center", children: feature.move ? /* @__PURE__ */ jsxDEV(Check, { className: "w-5 h-5 text-[#CAD4CD] mx-auto", strokeWidth: 2.5 }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 490,
                columnNumber: 27
              }, this) : /* @__PURE__ */ jsxDEV("span", { className: "text-[#d1d5db] font-medium", children: "—" }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 492,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/pages/ServicesPage.tsx",
                lineNumber: 488,
                columnNumber: 23
              }, this)
            ] }, idx, true, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 472,
              columnNumber: 21
            }, this)) }, void 0, false, {
              fileName: "/app/applet/src/pages/ServicesPage.tsx",
              lineNumber: 470,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 461,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 460,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 459,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 429,
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
                lineNumber: 514,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/pages/ServicesPage.tsx",
            lineNumber: 509,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/pages/ServicesPage.tsx",
        lineNumber: 503,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/ServicesPage.tsx",
    lineNumber: 197,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/ServicesPage.tsx",
    lineNumber: 196,
    columnNumber: 5
  }, this);
}
function HowItWorksPage() {
  const steps = [
    {
      step: "01",
      title: "Book Online",
      desc: "Start the process by visiting our secure online booking platform from any device, anytime.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      step: "02",
      title: "Select Your Service",
      desc: "Choose the cleaning service that fits your needs, whether it's routine housekeeping, a deep dive, or specialized treatment.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop"
    },
    {
      step: "03",
      title: "Pay Booking Fee",
      desc: "Secure your appointment with a fast and easy online booking fee. Your date and time are 100% guaranteed.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      step: "04",
      title: "Get a Custom Plan",
      desc: "We build a personalized cleaning checklist tailored specifically to your home or office priorities.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop"
    },
    {
      step: "05",
      title: "Enjoy Your Space",
      desc: "Sit back and relax. Our professional team handles the meticulously detailed cleaning so you can enjoy a spotless environment.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
    }
  ];
  return /* @__PURE__ */ jsxDEV("div", { className: "pt-24 pb-14 bg-white min-h-screen", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-10", children: [
      /* @__PURE__ */ jsxDEV(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "text-5xl md:text-6xl font-serif text-[#2C302E] mb-6",
          children: "How It Works"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
          lineNumber: 43,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-[#F9F8F6] p-6 md:p-8 rounded-2xl border border-[#e8e5df] text-left shadow-sm mb-6", children: /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-[#2C302E] leading-relaxed font-light", children: [
        /* @__PURE__ */ jsxDEV("strong", { children: "ShineWell" }, void 0, false, {
          fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this),
        " operates on a straightforward, customer-first model that streamlines your booking and service delivery across Kansas City. Our 5-step process ensures transparency, from selecting your customized cleaning options online to paying your booking fee and receiving an immaculate service backed by our satisfaction guarantee."
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "text-lg text-[#5c635f] font-light",
          children: "Getting your space cleaned shouldn't be a chore. We've made our process as simple, transparent, and stress free as possible."
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
          lineNumber: 55,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-16", children: steps.map((item, idx) => /* @__PURE__ */ jsxDEV("div", { className: `flex flex-col ${idx % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 lg:gap-20`, children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, x: idx % 2 !== 0 ? 30 : -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "w-full md:w-1/2",
          children: /* @__PURE__ */ jsxDEV("div", { className: "aspect-[4/3] rounded-3xl overflow-hidden shadow-xl", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: item.image,
              alt: item.title,
              className: "w-full h-full object-cover",
              referrerPolicy: "no-referrer"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
              lineNumber: 76,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
          lineNumber: 68,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, x: idx % 2 !== 0 ? -30 : 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "w-full md:w-1/2 flex flex-col",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-20 h-20 rounded-full bg-[#F9F8F6] flex items-center justify-center text-2xl font-serif text-[#4A5D4E] mb-6 border border-[#e8e5df]", children: item.step }, void 0, false, {
              fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
              lineNumber: 92,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-serif text-[#2C302E] mb-6", children: item.title }, void 0, false, {
              fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
              lineNumber: 95,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light leading-relaxed", children: item.desc }, void 0, false, {
              fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
              lineNumber: 96,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
          lineNumber: 85,
          columnNumber: 15
        },
        this
      )
    ] }, idx, true, {
      fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "mt-32 text-center bg-[#4A5D4E] rounded-[3rem] p-12 md:p-20 text-white",
        children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl font-serif mb-6", children: "Are you ready to experience a cleaner, transformed space?" }, void 0, false, {
            fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
            lineNumber: 110,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[#e8ede9] font-light text-lg mb-10 max-w-2xl mx-auto", children: "Take the first step towards a spotless home or office. Request your custom rate today." }, void 0, false, {
            fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
            lineNumber: 111,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/booking",
              className: "inline-flex items-center gap-2 bg-[#C86B53] hover:bg-[#b55e47] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:-translate-y-1",
              children: [
                "Get a Free Estimate",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
                  fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
                  lineNumber: 119,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
              lineNumber: 114,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
        lineNumber: 104,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/HowItWorksPage.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
const storyImg = "/assets/regenerated_image_1778882241066-hFylc36y.webp";
function AboutPage() {
  return /* @__PURE__ */ jsxDEV("div", { id: "about-page", className: "pt-24 pb-16 bg-[#F9F8F6] min-h-screen", children: /* @__PURE__ */ jsxDEV("div", { id: "about-container", className: "max-w-4xl mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        id: "about-header",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "text-center mb-10",
        children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-[#607564] uppercase tracking-widest text-sm font-semibold mb-2 block", children: "Our Story" }, void 0, false, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 19,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { id: "about-story-title", className: "text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] leading-tight mb-4", children: "The Story Behind ShineWell" }, void 0, false, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 20,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl italic text-[#5c635f] font-light max-w-2xl mx-auto leading-relaxed mb-6", children: "How One Mother's Love Became a Mission to Transform Spaces" }, void 0, false, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 23,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 md:p-8 rounded-2xl border border-[#e8e5df] max-w-2xl mx-auto text-left shadow-sm", children: /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-[#2C302E] leading-relaxed font-light", children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "ShineWell" }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 28,
              columnNumber: 15
            }, this),
            " is a premier, family-owned commercial and home cleaning company based in Kansas City. Founded by Lina in 2004 with over 22 years of professional cleaning experience, we deliver exceptional, eco-friendly, and insured cleaning services to help local families and businesses thrive in healthy, beautifully maintained spaces."
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 26,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-[1px] bg-[#607564] mx-auto mt-6" }, void 0, false, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 31,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/AboutPage.tsx",
        lineNumber: 12,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-12 gap-8 items-center mb-10", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8, delay: 0.2 },
          className: "md:col-span-7 space-y-4 text-all-tight text-[#5c635f] font-light leading-relaxed",
          children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl font-medium text-[#2C302E] leading-relaxed", children: "Some businesses are built from ambition. Some are built from necessity. And some, the ones that truly last, are built from love." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl font-medium text-[#2C302E]", children: "ShineWell is one of those." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 45,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/AboutPage.tsx",
          lineNumber: 36,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.8, delay: 0.2 },
          className: "md:col-span-5",
          children: /* @__PURE__ */ jsxDEV("div", { id: "about-image-wrapper", className: "aspect-[4/5] rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500 bg-[#e8e5df]", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              id: "about-hero-image",
              src: storyImg,
              alt: "ShineWell founder Lina",
              className: "w-full h-full object-cover",
              referrerPolicy: "no-referrer"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 57,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/pages/AboutPage.tsx",
          lineNumber: 50,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/AboutPage.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.4 },
        className: "space-y-8 text-base md:text-lg text-[#5c635f] font-light leading-relaxed max-w-3xl mx-auto",
        children: [
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif text-[#2C302E] border-b border-[#e8e5df] pb-2", children: "How was our foundation built on dedication?" }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 77,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "In 2001, Lina achieved something she had worked toward for years: she graduated as a nurse." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 78,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "It was more than a degree. It was proof of everything she believed about herself: that she was capable, that she could build something, and that care and dedication could open doors. Nursing felt like a calling. It was a profession built around helping people, around showing up for them in their most vulnerable moments. And Lina was made for that." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "But life, as it tends to do, had its own plans." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 84,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 76,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif text-[#2C302E] border-b border-[#e8e5df] pb-2", children: "What moment redefined our core mission?" }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 91,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "In 2003, Lina's son was born." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 92,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "And in that moment, that specific, irreversible, breathtaking moment, her entire sense of what mattered rearranged itself." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 95,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "She had her career. She had her training. She had a clear professional path ahead of her. And yet, standing there with her child in her arms, she felt something she hadn't fully anticipated: a pull so strong it couldn't be reasoned with. The pull to be present. Not just available, but truly, fully present for the life her family was building." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 98,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "When her daughter arrived, that feeling only deepened." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 101,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "Lina began to ask herself the question that every mother who has ever held her child while thinking about work has asked: Is there a way to do both? To build something real, something that sustains my family, without handing my children's childhood to someone else?" }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 104,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 90,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif text-[#2C302E] border-b border-[#e8e5df] pb-2", children: "Why is cleaning a form of care for us?" }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 111,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "What Lina discovered in that season of searching wasn't something new. It was something she had always known about herself, but had never fully named." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 112,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "She loved transforming spaces." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 115,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "Not cleaning in the way people talk about it as a chore, something to be dreaded and dispatched as quickly as possible. Lina experienced it differently. When she walked into a room that was disordered, heavy with the invisible weight of accumulated neglect, and walked out leaving it clean, ordered, and light, she felt something that she could only describe as purpose." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 118,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "She noticed what happened to people in those spaces after. How a family exhaled when their home felt restored. How a business owner's posture changed when their office was crisp and welcoming. How children played differently in a clean room. How people breathed differently." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 121,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "She realized: this is a form of care. This is not so different from nursing. You are helping people. You are making their lives lighter. You are showing up for them in a way that changes how they feel every single day." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 124,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 110,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif text-[#2C302E] border-b border-[#e8e5df] pb-2", children: "How did Brazilian warmth shape our values?" }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 131,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "Lina made her choice." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 132,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "She would build something of her own, a business rooted in her values, structured around her family, and built on the belief that a clean, transformed space is one of the most generous gifts you can offer another person." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 135,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "She brought with her the warmth and intentionality she had grown up with in Brazil, where the state of your home reflects the care you have for everyone who lives in it and everyone who visits. Where ",
              /* @__PURE__ */ jsxDEV("em", { children: "cuidado" }, void 0, false, {
                fileName: "/app/applet/src/pages/AboutPage.tsx",
                lineNumber: 139,
                columnNumber: 215
              }, this),
              ", or care, is not passive. It is active. It is chosen, every day."
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 138,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "She brought her nursing precision: the attention to detail, the commitment to doing the work completely, and the understanding that shortcuts in care are never really shortcuts." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 141,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "And she brought the love that had set all of this in motion: for her children, her family, and the simple, profound belief that people deserve to live and work in spaces that restore them." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 144,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 130,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif text-[#2C302E] border-b border-[#e8e5df] pb-2", children: "What does ShineWell represent for our clients?" }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 151,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "ShineWell is not just a cleaning company." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 152,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "It is Lina's answer to the question she asked herself in 2003, holding her son for the first time." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 155,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "Every home she and her team clean is a family whose mornings she is making lighter. Every office reception area they leave spotless is a business owner whose first impression she is protecting. Every deep clean they perform is a reset, for the space itself, but also for the person who lives or works inside it." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 158,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("blockquote", { className: "border-l-4 border-[#607564] pl-6 italic my-5 text-lg md:text-xl text-[#2C302E] bg-[#f0ede6] py-2.5 pr-4 rounded-r-lg", children: [
              '"This work allows me to provide for my family, and at the same time carry joy, peace, and transformation into the lives of others. That is everything I hoped it could be."',
              /* @__PURE__ */ jsxDEV("span", { className: "block text-sm font-mono tracking-wider uppercase text-[#607564] mt-1.5 disappointed-Lina not-italic", children: "Lina" }, void 0, false, {
                fileName: "/app/applet/src/pages/AboutPage.tsx",
                lineNumber: 163,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 161,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "She built ShineWell to sustain her family. And along the way, she discovered that sustaining families, through clean, calm, and energized spaces, is exactly what ShineWell does for everyone it serves." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 165,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 150,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif text-[#2C302E] border-b border-[#e8e5df] pb-2", children: "Where do we bring our active care in Kansas City?" }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 172,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "From Brookside to Overland Park, from the Crossroads to Corporate Woods, from Prairie Village to Lee's Summit, ShineWell brings Lina's philosophy to homes and businesses across the Kansas City metro every single day." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 173,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "The woman who chose her children is still choosing them. And in choosing them, she chose all of us too." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 176,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 171,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-[#f0ede6] border border-[#e8e5df] rounded-2xl p-6 text-center space-y-3 mt-10 shadow-sm", children: [
            /* @__PURE__ */ jsxDEV(Heart, { className: "w-6 h-6 text-[#C86B53] mx-auto animate-pulse" }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 183,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-serif text-[#2C302E]", children: "ShineWell Cleaning Services" }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 184,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#607564] font-medium tracking-wide", children: "Kansas City, KS & MO" }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 185,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "italic text-[#5c635f] text-base md:text-lg", children: '"Founded with love. Built on care. Dedicated to your space."' }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 186,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 182,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { id: "about-cta-container", className: "text-center pt-6", children: /* @__PURE__ */ jsxDEV(
            Link,
            {
              id: "about-booking-link",
              to: "/booking",
              className: "inline-flex items-center gap-2 bg-[#C86B53] hover:bg-[#b55e47] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:-translate-y-1",
              children: [
                "Get a Free Estimate",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
                  fileName: "/app/applet/src/pages/AboutPage.tsx",
                  lineNumber: 199,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 193,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 192,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/AboutPage.tsx",
        lineNumber: 69,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/AboutPage.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/AboutPage.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
function ContactPage() {
  return /* @__PURE__ */ jsxDEV("div", { className: "pt-24 pb-14 bg-[#F9F8F6] min-h-screen", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center max-w-3xl mx-auto mb-10",
        children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "text-5xl md:text-6xl font-serif text-[#2C302E] mb-6", children: "Contact Us" }, void 0, false, {
            fileName: "/app/applet/src/pages/ContactPage.tsx",
            lineNumber: 13,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 md:p-8 rounded-2xl border border-[#e8e5df] text-left shadow-sm mb-6", children: /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-[#2C302E] leading-relaxed font-light", children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "ShineWell" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 16,
              columnNumber: 15
            }, this),
            " makes contacting Overland Park and Kansas City's leading professional cleaning service simple and hassle-free. Whether you need an office deep clean or routine home care, you can reach us by calling (913) 325-1400 or filling out our quick online form to request a free estimate directly from our local, friendly team."
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/ContactPage.tsx",
            lineNumber: 15,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/ContactPage.tsx",
            lineNumber: 14,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light", children: "We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions." }, void 0, false, {
            fileName: "/app/applet/src/pages/ContactPage.tsx",
            lineNumber: 19,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/ContactPage.tsx",
        lineNumber: 8,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "bg-white p-8 rounded-3xl shadow-sm border border-[#e8e5df] flex flex-col items-center text-center",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 bg-[#F9F8F6] rounded-full flex items-center justify-center text-[#4A5D4E] mb-6", children: /* @__PURE__ */ jsxDEV(Phone, { className: "w-6 h-6" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 33,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 32,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { className: "font-medium text-[#2C302E] mb-2", children: "Phone" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 35,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: "tel:9133251400", className: "text-[#C86B53] hover:underline font-semibold text-lg", children: "(913) 325-1400" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-[#a3aba6] mt-2", children: "Mon to Sat, 8am to 6pm" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 37,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/ContactPage.tsx",
          lineNumber: 26,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          className: "bg-white p-8 rounded-3xl shadow-sm border border-[#e8e5df] flex flex-col items-center text-center",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 bg-[#F9F8F6] rounded-full flex items-center justify-center text-[#4A5D4E] mb-6", children: /* @__PURE__ */ jsxDEV(Mail, { className: "w-6 h-6" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 47,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 46,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { className: "font-medium text-[#2C302E] mb-2", children: "Email" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 49,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light", children: "lina.swcleaning@gmail.com" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 50,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-[#a3aba6] mt-2", children: "24/7 Support" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 51,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/ContactPage.tsx",
          lineNumber: 40,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          className: "bg-white p-8 rounded-3xl shadow-sm border border-[#e8e5df] flex flex-col items-center text-center",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 bg-[#F9F8F6] rounded-full flex items-center justify-center text-[#4A5D4E] mb-6", children: /* @__PURE__ */ jsxDEV(MapPin, { className: "w-6 h-6" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 61,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 60,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { className: "font-medium text-[#2C302E] mb-2", children: "Service Area" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 63,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light text-sm", children: "Overland Park & Greater KC Metro" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 64,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-[#a3aba6] mt-2", children: "Service-Area Business (No Public Lobby)" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 65,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/ContactPage.tsx",
          lineNumber: 54,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.4 },
          className: "bg-white p-8 rounded-3xl shadow-sm border border-[#e8e5df] flex flex-col items-center text-center",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 bg-[#F9F8F6] rounded-full flex items-center justify-center text-[#4A5D4E] mb-6", children: /* @__PURE__ */ jsxDEV(Clock, { className: "w-6 h-6" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 75,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 74,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { className: "font-medium text-[#2C302E] mb-2", children: "Hours" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 77,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light", children: "Mon to Sat: 8am to 6pm" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 78,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-[#a3aba6] mt-2", children: "Sunday: Closed" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/ContactPage.tsx",
          lineNumber: 68,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/ContactPage.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.5 },
        className: "max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-[#e8e5df]",
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-serif text-[#2C302E] mb-4", children: "How can you request a free estimate?" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 91,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light", children: [
              "Fill out the form below or call us directly at",
              " ",
              /* @__PURE__ */ jsxDEV("a", { href: "tel:9133251400", className: "text-[#C86B53] hover:underline font-semibold", children: "(913) 325-1400" }, void 0, false, {
                fileName: "/app/applet/src/pages/ContactPage.tsx",
                lineNumber: 94,
                columnNumber: 15
              }, this),
              " ",
              "to get a free estimate immediately."
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 92,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/ContactPage.tsx",
            lineNumber: 90,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "w-full min-h-[500px] rounded-2xl overflow-hidden border border-[#e8e5df] bg-white flex items-center justify-center", children: [
            /* @__PURE__ */ jsxDEV(
              "iframe",
              {
                src: "https://links.somosoverflow.com/widget/form/wCd628Bbw6Kdx6T546Nk",
                style: { width: "100%", height: "100%", minHeight: "500px", border: "none", overflow: "hidden" },
                scrolling: "no",
                id: "inline-wCd628Bbw6Kdx6T546Nk_contact",
                "data-layout": "{'id':'INLINE'}",
                "data-trigger-type": "alwaysShow",
                "data-trigger-value": "",
                "data-activation-type": "alwaysActivated",
                "data-activation-value": "",
                "data-deactivation-type": "neverDeactivate",
                "data-deactivation-value": "",
                "data-form-name": "Request a Free Estimate",
                "data-height": "500",
                "data-layout-iframe-id": "inline-wCd628Bbw6Kdx6T546Nk_contact",
                "data-form-id": "wCd628Bbw6Kdx6T546Nk",
                title: "Request a Free Estimate"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/pages/ContactPage.tsx",
                lineNumber: 102,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("script", { src: "https://links.somosoverflow.com/js/form_embed.js", type: "text/javascript" }, void 0, false, {
              fileName: "/app/applet/src/pages/ContactPage.tsx",
              lineNumber: 121,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/ContactPage.tsx",
            lineNumber: 101,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/ContactPage.tsx",
        lineNumber: 84,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/ContactPage.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/ContactPage.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
function BookingPage() {
  return /* @__PURE__ */ jsxDEV("div", { className: "pt-24 pb-14 bg-[#F9F8F6] min-h-screen", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-8",
        children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl font-serif text-[#2C302E] mb-6", children: "Get a Free Estimate" }, void 0, false, {
            fileName: "/app/applet/src/pages/BookingPage.tsx",
            lineNumber: 12,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 md:p-8 rounded-2xl border border-[#e8e5df] text-left shadow-sm mb-6", children: /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-[#2C302E] leading-relaxed font-light", children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "ShineWell" }, void 0, false, {
              fileName: "/app/applet/src/pages/BookingPage.tsx",
              lineNumber: 15,
              columnNumber: 15
            }, this),
            " provides a straightforward, transparent online booking platform for selecting professional cleaning services in Kansas City. Simply choose your service, configure your schedule, and complete the form below to receive a customized free estimate and confirm your appointment with our background-checked cleaning professionals."
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/BookingPage.tsx",
            lineNumber: 14,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/BookingPage.tsx",
            lineNumber: 13,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light", children: "Select a time that works for you. We'll confirm your appointment shortly." }, void 0, false, {
            fileName: "/app/applet/src/pages/BookingPage.tsx",
            lineNumber: 18,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/BookingPage.tsx",
        lineNumber: 7,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 },
        className: "bg-white rounded-[2.5rem] p-4 md:p-8 shadow-sm border border-[#e8e5df] min-h-[800px] flex items-center justify-center relative overflow-hidden",
        children: /* @__PURE__ */ jsxDEV("div", { className: "w-full h-full min-h-[800px]", children: [
          /* @__PURE__ */ jsxDEV(
            "iframe",
            {
              src: "https://links.somosoverflow.com/widget/service-menu/6a07b8ccd950f271fd495202",
              style: { width: "100%", height: "100%", minHeight: "800px", border: "none", overflow: "auto" },
              scrolling: "auto",
              id: "6a07b8ccd950f271fd495202_service_menu",
              title: "Book Your Cleaning"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/pages/BookingPage.tsx",
              lineNumber: 30,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("script", { src: "https://links.somosoverflow.com/js/form_embed.js", type: "text/javascript" }, void 0, false, {
            fileName: "/app/applet/src/pages/BookingPage.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/BookingPage.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/pages/BookingPage.tsx",
        lineNumber: 23,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/BookingPage.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/BookingPage.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
function FaqPage() {
  const faqs = [
    {
      q: "Why should I trust ShineWell?",
      a: "We’re proud to offer professional housecleaning services and employ residential housekeepers who pride themselves on top quality services. After undergoing an extensive background check, each member of our team is thoroughly trained on every step of our detailed cleaning plans. We also back all of our work with our satisfaction guarantee. These are just a few of the many reasons why customers trust ShineWell."
    },
    {
      q: "Who does ShineWell hire to clean my home?",
      a: "You can rest assured that all of our professional housecleaners are fully trained and insured. We respect all of our customers by never smoking, drinking, eating, or using appliances during our home cleanings. We wear our uniforms with pride and confidently carry out services that exceed expectations. We also undergo regular training to ensure that we’re always up to date with all of the latest and greatest cleaning techniques. For additional safety and peace of mind, the work we perform for each customer is held accountable by a trusted and experienced supervisor."
    },
    {
      q: "How will our relationship work?",
      a: "At ShineWell, we recognize the importance of communication, especially when it comes to important valuables in your home and any specific cleaning requests you may have. We value your trust and do everything possible to earn it by performing reliable, affordable, top notch cleaning services designed to meet your needs and exceed your expectations."
    },
    {
      q: "What should I do before ShineWell arrives?",
      a: "To ensure maximum efficiency, we ask that you pick up any toys or clothing before we arrive. We also ask that you find a place for your pets so they’re comfortable while we clean. Following through with these requests will help both your family and our team ensure that all of your possessions are in a safe place."
    },
    {
      q: "Do I need to be home for every cleaning service?",
      a: "No. Because we work on an 8 a.m. to 5 p.m. schedule, Monday to Friday, most of our customers aren’t home when we arrive. In a majority of these cases, our insured housecleaning professionals are provided with a spare key or garage code."
    },
    {
      q: "What time does your team arrive?",
      a: "While we cannot warranty our exact time of arrival because we give every home the attention it deserves and requires, we do offer arrival windows for your convenience. ShineWell uses software to log your preferences so our services are as minimally disruptive as possible."
    },
    {
      q: 'What do you mean by "window of arrival"?',
      a: "When you schedule housecleaning services with ShineWell, we’ll give you an arrival timeframe of three to four hours. Because we give homes the individualized attention they deserve, we’re not able to provide an exact time of arrival, but we do our best to ensure that our cleaning plan doesn’t interfere with your schedule."
    },
    {
      q: "What if something's damaged during a service?",
      a: "At ShineWell, we treat every single home we clean with the utmost respect. If something happens to break during our routine service, we’ll do our best to repair or replace the item. Our residential housekeepers are fully insured, so claims can be filed when appropriate."
    },
    {
      q: "What if something is missed?",
      a: "The cleaning methods we use ensure that your home receives the most consistent clean every time. During your first consultation, we’ll create a customized cleaning plan that’s designed to accommodate all of your specific requests. However, we do recognize that perfection is not always possible, which is why we back all of our work with our satisfaction guarantee. We’re happy to correct our mistakes at no additional cost to you when you contact us by the end of the next business day following your service."
    },
    {
      q: "Am I liable for employment taxes, workers' compensation, or insurance?",
      a: "ShineWell is proud to be a worry free housecleaning service solution. This means that we take care of any personal liability with regard to social security taxes and work-related injuries. We’re fully licensed and insured for your peace of mind."
    },
    {
      q: "What do you not clean?",
      a: "Our professional housecleaning services are designed to keep your home comfortable and clean. We customize services to accommodate your preferences so you never have to worry about paying for a service you don’t need or want. To ensure we provide your home with the highest quality of care, we don’t typically: Clean toys, Clean the inside of your fireplace, Pick up clutter, Clean your iron, Do laundry, Wash dishes. We want to make sure that all of your belongings are in the right place when we leave, which is why we leave these organizational tasks to you. However, we’re happy to clean the inside of your cabinets, stove, and refrigerator upon request."
    },
    {
      q: "Do I need to provide your team with my own cleaning equipment or supplies?",
      a: "No. We arrive with all of the cleaning materials we need and take them with us when we leave. We’re proud to use the best products and vacuums on the market to ensure that we leave your home looking spotless. If you have any preferences in regards to what cleaning products we use, feel free to let us know and we’ll do everything we can to work with your requests."
    },
    {
      q: "What if I need to reschedule a service?",
      a: "ShineWell understands how unpredictable life can be. That’s why we work with your schedule to ensure that we’re cleaning your home at a time that’s most convenient for you. If you need to cancel or reschedule a cleaning, we recommend that you call about 72 business hours before your next scheduled service. We’ll do our best to accommodate all of your scheduling needs. Thanks to our contract-free system, you never need to worry about being locked into a cleaning plan. Our flexibility is just one of the many ShineWell perks and it helps us ensure the satisfaction of our customers."
    },
    {
      q: "What if my scheduled cleaning service falls on a holiday?",
      a: "During the event that one of your routine cleanings falls on a holiday, we’ll reach out to you. Our team will also remind you of any additional housecleaning services that we can provide you with so you can be prepared for the upcoming holiday. We’ll do our best to work with your schedule."
    },
    {
      q: "How do I pay?",
      a: "Payments are due on the day of your scheduled service. Most of our valued customers leave cash or a check on the kitchen counter, but we also accept credit card payments. If you do choose to write us a check, please make it payable to ShineWell."
    },
    {
      q: 'What do you mean by "green housecleaning"?',
      a: "This method involves the practices and products used by cleaning companies to promote a better environment and a healthier home. Green cleaning solutions don’t contain ozone depleting chemicals or flammable substances that can irritate the skin and cause respiratory illnesses. While most green cleaning products cannot remove all harmful forms of bacteria, ShineWell strives to use the most appropriate methods for each service. In order to protect the environment, we utilize microfiber cloths and pads during our services, rather than paper. Not only is this practice better for the environment, microfiber picks up 99% of bacteria while cotton based mops only pick up 30%. We strive to be as transparent as possible and are happy to answer any questions you have regarding our eco friendly practices."
    },
    {
      q: 'What is "green washing"?',
      a: "Environmentalists use this term to describe companies that falsely advertise green cleaning services. For example, pouring bleach into a recycled container cannot be advertised as an eco friendly practice because it misleads consumers to think that the contents of the bottle are environmentally friendly when they’re not. ShineWell believes in an honest approach to finding the right balance between green cleaning practices and a safe, healthy home that’s free of harmful bacteria."
    },
    {
      q: "How can green cleaning services ensure the health and cleanliness of my home?",
      a: "ShineWell goes above and beyond to use cleaners that are non-acidic and free of ammonia, alcohol, petroleum, and other toxic chemicals. We recommend that you balance the use of green cleaning products and disinfectants in your cleaning plan to ensure that your home is as healthy and clean as possible. Get in touch with our team to learn about the eco friendly practices we carry out."
    },
    {
      q: "What makes you a green cleaning company?",
      a: "Our team strives to meet the community’s need for clean homes and balanced lives. That’s why we use microfiber instead of paper, refill bottles, and protect both our professional housecleaners and customers from unnecessary exposure to toxic chemicals."
    },
    {
      q: "How soon can I take cleaning off my to do list?",
      a: "Contact our team to schedule a free in-home consultation at no obligation. We’ll take the time to thoroughly inspect your property and discuss your budget, schedule, and cleaning preferences with you before providing a free estimate. ShineWell knows how to accommodate first time customer requests."
    },
    {
      q: "How much do your services cost?",
      a: "We’re proud to be recognized as a provider of affordable, top quality housecleaning services. Our team works with every homeowner to develop a cleaning plan that’s customized to fit their needs. The costs of our services depend on the size of your home and what you’d like cleaned. We can also add specialty services to your regular cleaning plan as needed, such as: Fridge interior cleaning, Oven interior cleaning, Changing bed linens, Carpet cleaning. At ShineWell, our job is simple: We clean houses. We know how much you value your time and we want to help you enjoy more of it."
    },
    {
      q: "How can I share my experience with ShineWell?",
      a: "You’re welcome to share your thoughts about our services on our Google Business Profile or Facebook page. We value our customers’ opinions and it’s our customer feedback that has helped us become the best home cleaning company in the industry."
    },
    {
      q: "Can I provide my team with special instructions?",
      a: "Yes! In fact, we encourage it. Your preferences give us the structure we need to enhance your cleaning experience and ensure that you’re completely satisfied with your home’s level of clean. In order to be sure that your preferences are recorded in your cleaning plan, we recommend that you call us directly. Our friendly office staff would be happy to log your needs in your file so you don’t have to reiterate them every time we arrive for service."
    },
    {
      q: "Why will my initial clean be more expensive than my other regularly scheduled services?",
      a: "Over the years, we’ve found that the first cleaning service brings a home up to a specific standard and ShineWell is committed to upholding that standard. That’s why our initial cleaning may take longer and cost a little more than the rest of your services. We need the extra time to properly begin the process of eliminating mildew, soap scum, dust, and dirt from your home. Contact us to request a free estimate."
    },
    {
      q: "How often can you provide service?",
      a: "ShineWell is happy to provide service once a week, every other week, or once a month, depending on your cleaning needs. You can also request housecleaning services for special events, as well as move out and move in cleaning assistance. Because we work on a no contract basis, you can update or change your cleaning plan to fit your busy schedule, budget, and cleaning needs."
    },
    {
      q: "Do you offer competitive rates?",
      a: "We’re recognized for being affordable and flexible. Some individual cleaning companies are able to offer lower rates because they don’t cover liability insurance or workers compensation. ShineWell is proud to provide these benefits that ensure our customers’ peace of mind while still being able to offer competitive rates for our services."
    },
    {
      q: "Do you always send the same housecleaners?",
      a: "We believe that it’s very important to always send the same team to clean your home and we do everything in our control to make this possible. If a member of your team is absent, we’ll do our best to find the most suitable replacement. All of our residential housekeepers undergo extensive ShineWell training to ensure that the quality of our work is always consistent."
    },
    {
      q: "Do your housecleaners accept tips?",
      a: "While tips aren’t expected, we’re allowed to accept them. Some of our clients prefer to tip a little at the end of each service while others provide a large tip at the end of the year. You can also leave a review on our website or Facebook page. We love hearing that our work is appreciated."
    },
    {
      q: "Are you okay with pets being in the home during a cleaning service?",
      a: "Yes, we’re proud to be a pet friendly company. If your pet is aggressive in any way, we recommend that you leave him or her outside or in a gated area to ensure the safety of our professional housecleaners. If you don’t plan on being home when we arrive, please let us know how to appropriately handle cleaning around your pet."
    }
  ];
  return /* @__PURE__ */ jsxDEV("div", { className: "pt-24 pb-14 bg-[#F9F8F6] min-h-screen", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-10",
        children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl font-serif text-[#2C302E] mb-6", children: "Frequently Asked Questions" }, void 0, false, {
            fileName: "/app/applet/src/pages/FaqPage.tsx",
            lineNumber: 131,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 md:p-8 rounded-2xl border border-[#e8e5df] text-left shadow-sm mb-6", children: /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-[#2C302E] leading-relaxed font-light", children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "ShineWell" }, void 0, false, {
              fileName: "/app/applet/src/pages/FaqPage.tsx",
              lineNumber: 134,
              columnNumber: 15
            }, this),
            " provides comprehensive answers to frequently asked questions about our professional home and office cleaning services in Kansas City. From details on our extensive employee background checks and liability insurance coverage to pricing parameters and scheduling options, we ensure complete transparency across all of our cleaning relationships."
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/FaqPage.tsx",
            lineNumber: 133,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/FaqPage.tsx",
            lineNumber: 132,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light", children: "Find answers to common questions about our cleaning services." }, void 0, false, {
            fileName: "/app/applet/src/pages/FaqPage.tsx",
            lineNumber: 137,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/FaqPage.tsx",
        lineNumber: 126,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: faqs.map((faq, idx) => /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: idx * 0.05 },
        className: "bg-white p-8 rounded-3xl shadow-sm border border-[#e8e5df]",
        children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-medium text-[#2C302E] mb-4", children: faq.q }, void 0, false, {
            fileName: "/app/applet/src/pages/FaqPage.tsx",
            lineNumber: 152,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light leading-relaxed", children: faq.a }, void 0, false, {
            fileName: "/app/applet/src/pages/FaqPage.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this)
        ]
      },
      idx,
      true,
      {
        fileName: "/app/applet/src/pages/FaqPage.tsx",
        lineNumber: 144,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "/app/applet/src/pages/FaqPage.tsx",
      lineNumber: 142,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/FaqPage.tsx",
    lineNumber: 125,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/FaqPage.tsx",
    lineNumber: 124,
    columnNumber: 5
  }, this);
}
function LocationsPage() {
  const locationData = [
    {
      state: "Kansas City Metro",
      cities: [
        "Kansas City (KS/MO)",
        "Overland Park, KS",
        "Olathe, KS",
        "Independence, MO",
        "Lee's Summit, MO",
        "Shawnee, KS",
        "Blue Springs, MO",
        "Lenexa, KS",
        "Leavenworth, KS",
        "Leawood, KS",
        "Liberty, MO",
        "Raytown, MO"
      ],
      mapQuery: "Kansas+City+Metro"
    },
    {
      state: "North Carolina",
      cities: [
        "Wilmington, NC",
        "Raleigh, NC",
        "Charlotte, NC",
        "Durham, NC",
        "Greensboro, NC"
      ],
      mapQuery: "North+Carolina"
    }
  ];
  return /* @__PURE__ */ jsxDEV("div", { className: "pt-24 pb-14 bg-[#F9F8F6] min-h-screen", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center max-w-3xl mx-auto mb-10",
        children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl font-serif text-[#2C302E] mb-6", children: "Areas We Serve" }, void 0, false, {
            fileName: "/app/applet/src/pages/LocationsPage.tsx",
            lineNumber: 46,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 md:p-8 rounded-2xl border border-[#e8e5df] text-left shadow-sm mb-6", children: /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-[#2C302E] leading-relaxed font-light", children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "ShineWell" }, void 0, false, {
              fileName: "/app/applet/src/pages/LocationsPage.tsx",
              lineNumber: 49,
              columnNumber: 15
            }, this),
            " serves a broad geographical footprint, providing premier home and commercial office cleaning services across the greater Kansas City metropolitan area (including both Missouri and Kansas municipalities) as well as key regions in North Carolina. Check our maps below or contact us to verify if our fully insured cleaning professionals cover your specific zip code."
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/LocationsPage.tsx",
            lineNumber: 48,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/LocationsPage.tsx",
            lineNumber: 47,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light", children: "ShineWell provides premium cleaning services across the greater Kansas City metropolitan area and major cities in North Carolina." }, void 0, false, {
            fileName: "/app/applet/src/pages/LocationsPage.tsx",
            lineNumber: 52,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/LocationsPage.tsx",
        lineNumber: 41,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-24", children: locationData.map((region, idx) => /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, x: idx % 2 === 0 ? -20 : 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          className: `lg:col-span-7 bg-white p-4 rounded-[2.5rem] shadow-sm border border-[#e8e5df] overflow-hidden ${idx % 2 === 0 ? "" : "lg:order-2"}`,
          children: /* @__PURE__ */ jsxDEV("div", { className: "w-full h-[400px] rounded-[2rem] overflow-hidden bg-[#e8e5df]", children: /* @__PURE__ */ jsxDEV(
            "iframe",
            {
              width: "100%",
              height: "100%",
              frameBorder: "0",
              scrolling: "no",
              marginHeight: 0,
              marginWidth: 0,
              src: `https://maps.google.com/maps?q=${region.mapQuery}&t=&z=9&ie=UTF8&iwloc=&output=embed`,
              title: `${region.state} Service Area`,
              className: "grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/pages/LocationsPage.tsx",
              lineNumber: 68,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "/app/applet/src/pages/LocationsPage.tsx",
            lineNumber: 67,
            columnNumber: 17
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/pages/LocationsPage.tsx",
          lineNumber: 61,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, x: idx % 2 === 0 ? 20 : -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          className: `lg:col-span-5 bg-white p-10 rounded-3xl shadow-sm border border-[#e8e5df] ${idx % 2 === 0 ? "" : "lg:order-1"}`,
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-8", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 bg-[#F9F8F6] rounded-full flex items-center justify-center text-[#607564]", children: /* @__PURE__ */ jsxDEV(MapPin, { className: "w-6 h-6" }, void 0, false, {
                fileName: "/app/applet/src/pages/LocationsPage.tsx",
                lineNumber: 91,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/pages/LocationsPage.tsx",
                lineNumber: 90,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-serif text-[#2C302E]", children: region.state }, void 0, false, {
                fileName: "/app/applet/src/pages/LocationsPage.tsx",
                lineNumber: 93,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/LocationsPage.tsx",
              lineNumber: 89,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-y-3 gap-x-6", children: region.cities.map((city, cityIdx) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 text-[#607564] shrink-0" }, void 0, false, {
                fileName: "/app/applet/src/pages/LocationsPage.tsx",
                lineNumber: 99,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-[#5c635f] font-light text-sm", children: city }, void 0, false, {
                fileName: "/app/applet/src/pages/LocationsPage.tsx",
                lineNumber: 100,
                columnNumber: 23
              }, this)
            ] }, cityIdx, true, {
              fileName: "/app/applet/src/pages/LocationsPage.tsx",
              lineNumber: 98,
              columnNumber: 21
            }, this)) }, void 0, false, {
              fileName: "/app/applet/src/pages/LocationsPage.tsx",
              lineNumber: 96,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/LocationsPage.tsx",
          lineNumber: 83,
          columnNumber: 15
        },
        this
      )
    ] }, idx, true, {
      fileName: "/app/applet/src/pages/LocationsPage.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "/app/applet/src/pages/LocationsPage.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "mt-24 bg-white p-10 rounded-3xl shadow-sm border border-[#e8e5df] text-center max-w-2xl mx-auto",
        children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-serif text-[#2C302E] mb-4", children: "Don't see your city?" }, void 0, false, {
            fileName: "/app/applet/src/pages/LocationsPage.tsx",
            lineNumber: 115,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] mb-8 font-light", children: "We are constantly expanding our service area. Contact us to see if we can accommodate your location." }, void 0, false, {
            fileName: "/app/applet/src/pages/LocationsPage.tsx",
            lineNumber: 116,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/contact",
              className: "inline-flex items-center gap-2 bg-[#607564] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:bg-[#36453B] hover:shadow-xl hover:-translate-y-1",
              children: "Contact Us"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/pages/LocationsPage.tsx",
              lineNumber: 119,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/LocationsPage.tsx",
        lineNumber: 109,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/LocationsPage.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/LocationsPage.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
const stripePromise = loadStripe("10");
function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent == null ? void 0 : paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: window.location.origin + "/payment"
      }
    });
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message || "An error occurred");
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsLoading(false);
  };
  const paymentElementOptions = {
    layout: "tabs"
  };
  return /* @__PURE__ */ jsxDEV("form", { id: "payment-form", onSubmit: handleSubmit, className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsxDEV(PaymentElement, { id: "payment-element", options: paymentElementOptions }, void 0, false, {
      fileName: "/app/applet/src/pages/PaymentPage.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        disabled: isLoading || !stripe || !elements,
        id: "submit",
        className: "w-full bg-[#C86B53] hover:bg-[#b55e47] text-white px-6 py-4 rounded-xl font-medium text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4",
        children: /* @__PURE__ */ jsxDEV("span", { id: "button-text", children: isLoading ? /* @__PURE__ */ jsxDEV("div", { className: "spinner", id: "spinner", children: "Processing..." }, void 0, false, {
          fileName: "/app/applet/src/pages/PaymentPage.tsx",
          lineNumber: 96,
          columnNumber: 24
        }, this) : "Pay $150.00" }, void 0, false, {
          fileName: "/app/applet/src/pages/PaymentPage.tsx",
          lineNumber: 95,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/pages/PaymentPage.tsx",
        lineNumber: 90,
        columnNumber: 7
      },
      this
    ),
    message && /* @__PURE__ */ jsxDEV("div", { id: "payment-message", className: "text-sm text-center text-[#2C302E] mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200", children: message }, void 0, false, {
      fileName: "/app/applet/src/pages/PaymentPage.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/PaymentPage.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}
function PaymentPage() {
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    const redirectStatus = new URLSearchParams(window.location.search).get(
      "redirect_status"
    );
    if (redirectStatus === "succeeded") {
      setIsSuccess(true);
      return;
    }
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 15e3 })
      // Example amount: $150.00
    }).then((res) => res.json()).then((data) => {
      if (data.error) {
        setError(data.error.message || "Failed to initialize payment");
      } else {
        setClientSecret(data.clientSecret);
      }
    }).catch((err) => {
      setError("Could not connect to payment server. Please ensure STRIPE_SECRET_KEY is set.");
    });
  }, []);
  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#CAD4CD",
      colorBackground: "#ffffff",
      colorText: "#2C302E",
      colorDanger: "#C86B53",
      fontFamily: "Inter, system-ui, sans-serif",
      spacingUnit: "4px",
      borderRadius: "8px"
    }
  };
  const options = {
    clientSecret,
    appearance
  };
  if (isSuccess) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-[#F9F8F6] pt-24 pb-14 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        className: "bg-white p-12 rounded-3xl shadow-sm border border-[#e8e5df] max-w-lg w-full text-center",
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-20 h-20 bg-[#CAD4CD]/10 rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-10 h-10 text-[#CAD4CD]" }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 172,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 171,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl font-serif text-[#2C302E] mb-4", children: "Payment Successful!" }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 174,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] mb-8", children: "Thank you for choosing ShineWell. Your booking is confirmed and we'll be in touch shortly." }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 175,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "/",
              className: "inline-block bg-[#CAD4CD] hover:bg-[#B8C5BD] text-white px-8 py-3 rounded-full font-medium transition-colors",
              children: "Return Home"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/pages/PaymentPage.tsx",
              lineNumber: 178,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/PaymentPage.tsx",
        lineNumber: 166,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/pages/PaymentPage.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-[#F9F8F6] pt-24 pb-14", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-xl mx-auto px-6", children: /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      className: "bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#e8e5df]",
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-6", children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl md:text-4xl font-serif text-[#2C302E] mb-4", children: "Complete Your Booking" }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 198,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f]", children: "Secure payment for your ShineWell cleaning service." }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 199,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/PaymentPage.tsx",
          lineNumber: 197,
          columnNumber: 11
        }, this),
        error ? /* @__PURE__ */ jsxDEV("div", { className: "bg-red-50 text-red-600 p-6 rounded-xl text-center border border-red-100", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "font-medium mb-2", children: error }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 204,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm opacity-80", children: "Note: This requires a valid Stripe Secret Key in the environment variables. Please add it via the Secrets menu." }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 205,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/PaymentPage.tsx",
          lineNumber: 203,
          columnNumber: 13
        }, this) : clientSecret ? /* @__PURE__ */ jsxDEV(Elements, { options, stripe: stripePromise, children: /* @__PURE__ */ jsxDEV(CheckoutForm, {}, void 0, false, {
          fileName: "/app/applet/src/pages/PaymentPage.tsx",
          lineNumber: 209,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/pages/PaymentPage.tsx",
          lineNumber: 208,
          columnNumber: 13
        }, this) : /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col justify-center items-center py-12 gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-[#CAD4CD]" }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 213,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] text-sm", children: "Initializing secure payment..." }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 214,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/PaymentPage.tsx",
          lineNumber: 212,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/pages/PaymentPage.tsx",
      lineNumber: 192,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "/app/applet/src/pages/PaymentPage.tsx",
    lineNumber: 191,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/PaymentPage.tsx",
    lineNumber: 190,
    columnNumber: 5
  }, this);
}
const blogPosts = [
  {
    id: "commercial-cleaning-kansas-city",
    title: "Why Kansas City Businesses Are Rethinking What a Clean Workplace Really Means",
    excerpt: "ShineWell offers professional commercial cleaning services across Kansas City, from Crossroads to Corporate Woods, rooted in Brazilian attention to warmth, detail, and the human experience of space.",
    date: "April 13, 2026",
    author: "Lina",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop",
    content: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("p", { children: "There's a moment every business owner in Kansas City knows well: a client walks through your door, scans the room in three seconds, and forms an opinion before a single word is spoken. Whether you're in a Leawood office park, a Crossroads creative agency, or a midtown medical suite, that first impression is shaped almost entirely by the cleanliness and energy of your physical space." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "At ShineWell, we believe a clean commercial space isn't just about hygiene, it's about confidence. It's the feeling your team gets when they sit down at their desk on a Monday morning. It's the message you send to every client, vendor, and job candidate who walks through your door." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "The ShineWell Difference: Built from a Brazilian Sense of Space" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: [
        "ShineWell was founded by a Brazilian entrepreneur who brought with her something that most cleaning companies don't talk about: a deep cultural understanding of how physical environments shape human energy. In Brazil, the concept of ",
        /* @__PURE__ */ jsxDEV("em", { children: "ambiente" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 32,
          columnNumber: 244
        }, void 0),
        ", the atmosphere and feel of a space, is treated as seriously as its function. A well-tended environment signals care, pride, and respect for everyone who enters it."
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "That philosophy is at the heart of every commercial cleaning contract ShineWell takes on across the Kansas City metro, from Overland Park to the River Market. We don't just clean surfaces, we reset the energy of your space." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "What Commercial Cleaning with ShineWell Looks Like" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Our commercial cleaning programs are built around your business schedule, your team size, and the specific demands of your industry. Whether you operate a financial advisory firm in the Plaza district, a logistics company near KCI, or a boutique retail shop in Westport, your cleaning program is tailored, not templated." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Commercial services typically include:" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "Common area maintenance (lobbies, hallways, conference rooms, break rooms)" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Restroom sanitation and restocking" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Hard floor care: vacuuming, mopping, and periodic deep scrubbing" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Window and glass surface cleaning" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Trash removal and recycling sorting" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Seasonal deep cleans aligned with Kansas City's demanding weather cycles: the grit of a Midwest winter, the pollen loads of a spring in Shawnee or Lenexa don't take days off" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "A Cleaner Space Is a More Productive One" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Research consistently links workplace cleanliness to employee focus, morale, and even retention. When your team spends energy navigating clutter or working around grimy shared spaces, they're spending cognitive resources they could be applying to their work. At ShineWell, we take that seriously — because our founder took it seriously long before she ever started a cleaning company." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Growing up in Brazil and building a professional career in the United States, she noticed something striking: the businesses that earned the most loyalty — from employees and clients alike — were the ones that made people feel cared for the moment they walked in the door. Clean, warm, ordered spaces did that better than any sign or slogan." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "Serving Greater Kansas City's Business Community" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "ShineWell is proud to serve commercial clients across the Kansas City metro, including:" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "Downtown Kansas City and the Power & Light District" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "The Crossroads Arts District and 18th & Vine" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Plaza, Westport, and Midtown KC" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Overland Park, Leawood, and Corporate Woods" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Lenexa, Olathe, and the southern Johnson County corridor" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "North KC, Liberty, and the KCI corridor" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Whether you need daily service, weekly maintenance, or a one time deep commercial clean ahead of an audit, inspection, or company event, ShineWell is ready." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Contact ShineWell today to schedule a free walkthrough and custom commercial cleaning quote. Your space should make people feel something. Let's make sure it makes them feel confident." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/data/blogPosts.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, void 0)
  },
  {
    id: "regular-house-cleaning-kansas-city",
    title: "More Than a Clean House: How ShineWell Brings Brazilian Heart to Kansas City Homes",
    excerpt: "ShineWell's recurring home cleaning service in Kansas City is rooted in warmth, trust, and a founder who believes a clean home is the foundation of a confident life.",
    date: "April 10, 2026",
    author: "Lina",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    content: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("p", { children: "A clean home doesn't just look better — it feels better. It changes the quality of your mornings. It affects how you unwind at night. It shapes the environment where your children play, where you host the people you love, where you start and end every single day." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "At ShineWell, we know this because our founder built this company on that exact belief." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "From Brazil to Kansas City: A Philosophy of Clean Living" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "ShineWell's founder grew up in Brazil, where the home is considered a reflection of the family's inner life. Keeping a home clean and welcoming isn't a chore in that cultural context, it's an act of love and self respect. It's the way you tell your family, your guests, and yourself: you matter, and this space honors that." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "She carried that philosophy with her when she built ShineWell, and it shows in how we approach every home we clean, from a Brookside bungalow to a new build in Blue Springs, from a starter home in Raytown to a large family house in Olathe or Shawnee." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "We don't show up, rush through, and leave. We show up with intention." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "What Regular House Cleaning Includes" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "ShineWell's recurring home cleaning service is designed for Kansas City families who want a consistently clean, energized home without spending their limited free time maintaining it." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Every standard visit covers:" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h3", { children: "Kitchen" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "Countertops, backsplash, and sink scrubbed clean" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Exterior of appliances wiped down" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Cabinet fronts cleaned" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Floor swept and mopped" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h3", { children: "Bathrooms" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "Toilet, tub, shower, and sink sanitized" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Mirrors and chrome polished" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Floors cleaned" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Surfaces wiped" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h3", { children: "Living Areas & Bedrooms" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "Dusting of surfaces, shelving, and ceiling fans" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 130,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Vacuuming of carpets and rugs" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Hard floor sweeping and mopping" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Bed making (upon request)" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "We offer weekly, biweekly, and monthly service plans, because Kansas City life is busy, and your schedule should drive the cadence, not ours." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "The Feeling We're Really Cleaning For" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Ask any ShineWell client what they notice most after a cleaning, and most don't lead with the sparkling countertops. They say things like:" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("blockquote", { children: [
        '"I finally feel like I can breathe in my own house."',
        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 145,
          columnNumber: 63
        }, void 0),
        '"I came home from work and just... relaxed, for the first time in weeks."',
        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 146,
          columnNumber: 84
        }, void 0),
        '"My kids seem calmer too — I think the space affects all of us."'
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: [
        "That's the ShineWell standard. Our founder talks about it as ",
        /* @__PURE__ */ jsxDEV("em", { children: "espaço com energia" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 150,
          columnNumber: 72
        }, void 0),
        ", a space with energy. A home that is clean in the right way doesn't feel sterile. It feels alive, warm, and ready for whatever your life brings into it."
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "Proudly Cleaning Kansas City Homes" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "We serve residential clients across the KC metro, including neighborhoods and suburbs like:" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "Brookside, Waldo, and Westwood" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 156,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Midtown KC, Hyde Park, and Valentine" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 157,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Lee's Summit, Blue Springs, and Independence" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 158,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Overland Park, Leawood, and Prairie Village" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Shawnee, Lenexa, and Olathe" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 160,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Liberty, Gladstone, and North KC" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 161,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Whether your home is 900 square feet or 4,000, we'll build a cleaning plan that fits your space, your schedule, and your budget." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Ready to come home to a house that actually restores you? Book your first ShineWell cleaning today — and feel the difference." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/data/blogPosts.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, void 0)
  },
  {
    id: "deep-cleaning-kansas-city",
    title: "Kansas City's Deep Cleaning Specialists: When Your Space Needs More Than a Refresh",
    excerpt: "ShineWell's deep cleaning service in Kansas City tackles what regular cleanings can't, built on a founder's Brazilian philosophy that a truly clean space transforms how you feel and function.",
    date: "April 5, 2026",
    author: "Lina",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    content: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("p", { children: "There's a difference between a home or office that looks clean and one that is clean, down to the baseboards, behind the appliances, inside the vents, under the furniture. Most regular cleaning routines don't go there. They can't, they're not designed to. That's exactly what a professional deep clean is for." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "At ShineWell, our deep cleaning service is one of the most requested and most transformative things we do. And it starts with understanding why depth matters." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "Why Deep Cleaning Is Different" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "A standard cleaning maintains a space. A deep clean resets it." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "We're talking about the calcium deposits around faucet bases that have built up over months. The grease that has quietly accumulated on kitchen cabinet interiors. The dust living inside light fixtures, on the tops of door frames, along window sill tracks. The soap scum in grout lines. The buildup behind the toilet, under the refrigerator, and inside the oven." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 192,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "These aren't just aesthetic issues — they affect air quality, appliance longevity, and the overall health of your indoor environment. In a Kansas City winter, when homes are sealed tight against the cold and you're breathing recirculated air for months, what's in your home environment matters significantly more than most people realize." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 195,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "When to Book a Deep Clean" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 199,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "ShineWell recommends a professional deep clean in any of these situations:" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 200,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { children: [
        /* @__PURE__ */ jsxDEV("li", { children: [
          /* @__PURE__ */ jsxDEV("strong", { children: "Move in or move out" }, void 0, false, {
            fileName: "/app/applet/src/data/blogPosts.tsx",
            lineNumber: 202,
            columnNumber: 15
          }, void 0),
          " — whether you're leaving a home in Brookside or moving into a new build in Leawood, a deep clean protects you and signals respect for the next occupant"
        ] }, void 0, true, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: [
          /* @__PURE__ */ jsxDEV("strong", { children: "Post renovation" }, void 0, false, {
            fileName: "/app/applet/src/data/blogPosts.tsx",
            lineNumber: 203,
            columnNumber: 15
          }, void 0),
          " — construction dust, drywall residue, and finish work debris settle into every surface; a deep clean removes what vacuum cleaners and shop vacs leave behind"
        ] }, void 0, true, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 203,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: [
          /* @__PURE__ */ jsxDEV("strong", { children: "Post event or holiday hosting" }, void 0, false, {
            fileName: "/app/applet/src/data/blogPosts.tsx",
            lineNumber: 204,
            columnNumber: 15
          }, void 0),
          " — after your extended family descends on your home for Thanksgiving, the space deserves a proper reset"
        ] }, void 0, true, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 204,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: [
          /* @__PURE__ */ jsxDEV("strong", { children: "Seasonal transitions" }, void 0, false, {
            fileName: "/app/applet/src/data/blogPosts.tsx",
            lineNumber: 205,
            columnNumber: 15
          }, void 0),
          " — many Kansas City homeowners schedule a deep clean each spring and fall to match the city's dramatic seasonal swings"
        ] }, void 0, true, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 205,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: [
          /* @__PURE__ */ jsxDEV("strong", { children: "Before listing your home" }, void 0, false, {
            fileName: "/app/applet/src/data/blogPosts.tsx",
            lineNumber: 206,
            columnNumber: 15
          }, void 0),
          " — a professionally deep cleaned home photographs better, shows better, and commands stronger offers in the KC real estate market"
        ] }, void 0, true, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 206,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: [
          /* @__PURE__ */ jsxDEV("strong", { children: "First time clients" }, void 0, false, {
            fileName: "/app/applet/src/data/blogPosts.tsx",
            lineNumber: 207,
            columnNumber: 15
          }, void 0),
          " — we recommend a deep clean before beginning any recurring service, so we start from a true baseline"
        ] }, void 0, true, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 207,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "What a ShineWell Deep Clean Covers" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "A deep clean goes well beyond a standard service. The full scope includes:" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 211,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h3", { children: "Kitchen (comprehensive)" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 213,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "Interior and exterior of all appliances (oven, refrigerator, microwave, dishwasher)" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 215,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Inside cabinets and drawers" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 216,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Grout lines on tile backsplash" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 217,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Hood vent filter degreasing" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 218,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Detailed cleaning behind and beneath appliances" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 219,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 214,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h3", { children: "Bathrooms (detailed)" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 222,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "Grout scrubbing and mildew treatment" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 224,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Showerhead descaling" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 225,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Inside cabinets and under-sink areas" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 226,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Exhaust fan cleaning" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 227,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 223,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h3", { children: "All Rooms" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 230,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "Baseboards, crown molding, and door frames" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 232,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Window sills, tracks, and interior glass" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 233,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Ceiling fans and light fixtures" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 234,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Wall switches and outlet covers" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 235,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Blinds and shutter slats" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 236,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Interior of windows" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 237,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Behind and beneath all furniture" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 238,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 231,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "The Energy Shift You Feel After a True Deep Clean" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 241,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: [
        "Our founder often says that a deep clean is an act of ",
        /* @__PURE__ */ jsxDEV("em", { children: "cuidado" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 243,
          columnNumber: 65
        }, void 0),
        ", the Portuguese word for care, which in Brazilian culture extends beyond maintenance into something closer to tenderness. When you deep clean a space, you're not just removing what shouldn't be there. You're restoring what the space was always meant to be."
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 242,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Kansas City clients consistently describe the feeling after a ShineWell deep clean the same way: lighter. Energized. Like a reset button was pressed on the space itself." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 245,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "That's not an accident — it's the whole point." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 248,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "Serving Kansas City and Surrounding Areas" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 250,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Deep cleaning services available throughout the metro, including Overland Park, Olathe, Lenexa, Shawnee, Prairie Village, Lee's Summit, Blue Springs, Independence, Liberty, Gladstone, and all Kansas City neighborhoods from the River Market to Waldo." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 251,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "A deep clean isn't a luxury — it's the foundation. Schedule your ShineWell deep clean today and experience what your space is capable of." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/data/blogPosts.tsx",
      lineNumber: 180,
      columnNumber: 7
    }, void 0)
  },
  {
    id: "office-cleaning-reception",
    title: "Your Reception Area Is Your First Impression: ShineWell's Approach to Office Cleaning in Kansas City",
    excerpt: "First impressions happen at reception. ShineWell's office cleaning services in Kansas City, founded by a Brazilian entrepreneur with a philosophy of confident, energized spaces, start where your clients do.",
    date: "March 28, 2026",
    author: "Lina",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    content: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("p", { children: "Before your client shakes anyone's hand. Before they sit in a conference room or review a proposal. Before a single member of your team says good morning, they have already decided something about your business." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 269,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "They decided it in your reception area." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 272,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "The state of your lobby, your front desk, your waiting chairs, your floors, your air, this is the first language your business speaks to every person who walks through the door. At ShineWell, we believe office cleaning isn't a back of house operation. It's a front of brand strategy. And it starts at reception." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 273,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "Why Reception Deserves Its Own Standard of Clean" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 277,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Most commercial cleaning services treat reception as just another room on the rotation. Vacuum the floor, wipe the desk, empty the trash, move on." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 278,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "ShineWell treats it differently — because our founder treats it differently." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 281,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: [
        "She built her philosophy of clean spaces around a concept she brought from Brazil: ",
        /* @__PURE__ */ jsxDEV("em", { children: "a entrada define o espaço" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 285,
          columnNumber: 94
        }, void 0),
        " — the entrance defines the space. How a space begins is how people experience everything that follows. A reception area that is crisp, ordered, and subtly fresh signals competence, intention, and care. A reception area that is overlooked signals something else entirely."
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 284,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "For a Kansas City law firm on the Plaza, a tech company in the Crossroads, a medical group in Leawood, or a financial advisory office in Overland Park — the reception area is doing strategic work every single day. It deserves to be treated that way." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 287,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "What ShineWell's Reception-First Office Cleaning Includes" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 291,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Our office cleaning programs give the reception area dedicated attention as the primary touchpoint of every visit:" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 292,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h3", { children: "Reception-Specific Services:" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 296,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "Front desk and countertop cleaning and sanitizing, with attention to the detail and finish of the surface material" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 298,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Waiting area furniture: upholstery vacuuming or wiping, cushion arrangement, arm and leg cleaning" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 299,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Coffee and refreshment station in reception area fully cleaned and restocked for client readiness" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 300,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Glass entrance doors, cleaned to streak free transparency, inside and out" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 301,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Reception floor: vacuumed, mopped, or hard floor polished depending on material" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 302,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Signage, frames, and display surfaces dusted and spotcleaned" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 303,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Visible cable management cleaned and reset" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 304,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Trash and recycling bins emptied and relined" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 305,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 297,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h3", { children: "Full Office Cleaning:" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 308,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "Open workspaces, private offices, and cubicle areas" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 310,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Conference rooms, including whiteboard cleaning, chair alignment, and table surface sanitation" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 311,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Break room and kitchen fully cleaned" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 312,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Restrooms sanitized to medical adjacent standards" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 313,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Hallways, stairwells, and common areas" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 314,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Windows and interior glass" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 315,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Floors throughout, including baseboards and floor vents" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 316,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 309,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "Designed Around Your Kansas City Business Schedule" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 319,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "We know that Kansas City offices operate on different rhythms: early morning startups in the Crossroads that are already brewing coffee at 6:45 AM, corporate campuses in Corporate Woods that need cleaning crews in and out before the 8:00 AM rush, medical offices in Lenexa that need evening cleaning to maintain next day readiness." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 320,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "ShineWell schedules around your hours, not ours. Our office cleaning contracts include flexible service windows, early morning, evening, weekend, or hybrid, to make sure your reception area is always ready when your first client arrives." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 323,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "The Confidence a Clean Reception Builds" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 327,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Our founder often talks about confidence as something that spaces can create. In Brazilian culture, the care you put into your physical environment is a form of nonverbal communication: it tells people how you feel about them, about yourself, and about the work you do." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 328,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "A clean, well-maintained reception area doesn't just impress clients. It gives your team something, too. The front desk staff who spend their day in a consistently clean, ordered, energized space perform differently than those who don't. They carry themselves differently. They represent your brand with more confidence." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 331,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "That's what ShineWell is building — one reception desk at a time." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 334,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { children: "Kansas City Offices We Serve" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 338,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "ShineWell provides recurring and one time office cleaning services across the greater Kansas City metro, including:" }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 339,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { children: [
        /* @__PURE__ */ jsxDEV("li", { children: "Downtown Kansas City and the Crossroads" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 341,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Crown Center and Union Station area" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 342,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "The Country Club Plaza and Westport" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 343,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Overland Park and Corporate Woods" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 344,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Leawood, Lenexa, and Shawnee" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 345,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Liberty, North KC, and the KCI corridor" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 346,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: "Lee's Summit, Blue Springs, and eastern Jackson County" }, void 0, false, {
          fileName: "/app/applet/src/data/blogPosts.tsx",
          lineNumber: 347,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 340,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Industries served include professional services, legal, healthcare, financial, creative/agency, technology, nonprofit, and light industrial office environments." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 349,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { children: "Your reception area works harder than any other room in your building. Make sure it looks the part. Contact ShineWell today for a free office cleaning consultation, and let your first impression work for you." }, void 0, false, {
        fileName: "/app/applet/src/data/blogPosts.tsx",
        lineNumber: 352,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/data/blogPosts.tsx",
      lineNumber: 268,
      columnNumber: 7
    }, void 0)
  }
];
function BlogPage() {
  return /* @__PURE__ */ jsxDEV("div", { className: "pt-24 pb-14 bg-[#F9F8F6] min-h-screen", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center max-w-3xl mx-auto mb-10",
        children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "text-5xl md:text-6xl font-serif text-[#2C302E] mb-6", children: "Cleaning Tips & News" }, void 0, false, {
            fileName: "/app/applet/src/pages/BlogPage.tsx",
            lineNumber: 15,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 md:p-8 rounded-2xl border border-[#e8e5df] text-left shadow-sm mb-6", children: /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-[#2C302E] leading-relaxed font-light", children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "ShineWell" }, void 0, false, {
              fileName: "/app/applet/src/pages/BlogPage.tsx",
              lineNumber: 18,
              columnNumber: 15
            }, this),
            " shares expert cleaning tips, localized Kansas City news, and seasonal maintenance advice to help you maintain a beautiful, healthy home or commercial office environment. Written by our experienced, fully insured cleaning experts, our articles outline practical strategies and checklists you can implement between our professional visits."
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/BlogPage.tsx",
            lineNumber: 17,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/BlogPage.tsx",
            lineNumber: 16,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light", children: "Expert advice, local Kansas City updates, and insights from the ShineWell team." }, void 0, false, {
            fileName: "/app/applet/src/pages/BlogPage.tsx",
            lineNumber: 21,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/BlogPage.tsx",
        lineNumber: 10,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: blogPosts.map((post, idx) => /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: idx * 0.1 },
        className: "bg-white rounded-3xl overflow-hidden shadow-sm border border-[#e8e5df] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col",
        children: [
          /* @__PURE__ */ jsxDEV(Link, { to: `/blog/${post.id}`, className: "block aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: post.image,
              alt: post.title,
              className: "w-full h-full object-cover hover:scale-105 transition-transform duration-500",
              referrerPolicy: "no-referrer"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/pages/BlogPage.tsx",
              lineNumber: 36,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "/app/applet/src/pages/BlogPage.tsx",
            lineNumber: 35,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-8 flex flex-col flex-grow", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 text-sm text-[#a3aba6] mb-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxDEV(Calendar, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/applet/src/pages/BlogPage.tsx",
                  lineNumber: 46,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: post.date }, void 0, false, {
                  fileName: "/app/applet/src/pages/BlogPage.tsx",
                  lineNumber: 47,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/BlogPage.tsx",
                lineNumber: 45,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxDEV(User, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/applet/src/pages/BlogPage.tsx",
                  lineNumber: 50,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: post.author }, void 0, false, {
                  fileName: "/app/applet/src/pages/BlogPage.tsx",
                  lineNumber: 51,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/BlogPage.tsx",
                lineNumber: 49,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/BlogPage.tsx",
              lineNumber: 44,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-serif text-[#2C302E] mb-4 line-clamp-2 hover:text-[#C86B53] transition-colors", children: /* @__PURE__ */ jsxDEV(Link, { to: `/blog/${post.id}`, children: post.title }, void 0, false, {
              fileName: "/app/applet/src/pages/BlogPage.tsx",
              lineNumber: 55,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/BlogPage.tsx",
              lineNumber: 54,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light leading-relaxed mb-6 flex-grow line-clamp-3 text-justify", children: post.excerpt }, void 0, false, {
              fileName: "/app/applet/src/pages/BlogPage.tsx",
              lineNumber: 57,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: `/blog/${post.id}`,
                className: "inline-flex items-center text-[#4A5D4E] font-medium text-sm hover:text-[#C86B53] transition-colors mt-auto",
                children: [
                  "Read Article ",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 ml-2" }, void 0, false, {
                    fileName: "/app/applet/src/pages/BlogPage.tsx",
                    lineNumber: 64,
                    columnNumber: 32
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/pages/BlogPage.tsx",
                lineNumber: 60,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/BlogPage.tsx",
            lineNumber: 43,
            columnNumber: 15
          }, this)
        ]
      },
      post.id,
      true,
      {
        fileName: "/app/applet/src/pages/BlogPage.tsx",
        lineNumber: 28,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "/app/applet/src/pages/BlogPage.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/BlogPage.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/BlogPage.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
function BlogPostPage() {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === postId);
  if (!post) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-[60vh] flex flex-col items-center justify-center pt-24 px-6", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl font-serif text-[#2C302E] mb-4", children: "Post Not Found" }, void 0, false, {
        fileName: "/app/applet/src/pages/BlogPostPage.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] mb-6", children: "We couldn't find the article you're looking for." }, void 0, false, {
        fileName: "/app/applet/src/pages/BlogPostPage.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/blog", className: "bg-[#C86B53] text-white px-6 py-3 rounded-full font-medium hover:bg-[#b55e47] transition-colors", children: "Return to Blog" }, void 0, false, {
        fileName: "/app/applet/src/pages/BlogPostPage.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/BlogPostPage.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "pt-24 pb-14 bg-[#F9F8F6] min-h-screen", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxDEV(
      Link,
      {
        to: "/blog",
        className: "inline-flex items-center gap-2 text-[#5c635f] hover:text-[#C86B53] transition-colors mb-5",
        children: [
          /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/applet/src/pages/BlogPostPage.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this),
          "Back to Blog"
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/BlogPostPage.tsx",
        lineNumber: 25,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-6 text-sm text-[#a3aba6] mb-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(Calendar, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/applet/src/pages/BlogPostPage.tsx",
                lineNumber: 39,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: post.date }, void 0, false, {
                fileName: "/app/applet/src/pages/BlogPostPage.tsx",
                lineNumber: 40,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/BlogPostPage.tsx",
              lineNumber: 38,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(User, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/applet/src/pages/BlogPostPage.tsx",
                lineNumber: 43,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: post.author }, void 0, false, {
                fileName: "/app/applet/src/pages/BlogPostPage.tsx",
                lineNumber: 44,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/BlogPostPage.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/BlogPostPage.tsx",
            lineNumber: 37,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] mb-8 leading-tight", children: post.title }, void 0, false, {
            fileName: "/app/applet/src/pages/BlogPostPage.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "aspect-[21/9] rounded-3xl overflow-hidden shadow-xl mb-12", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: post.image,
              alt: post.title,
              className: "w-full h-full object-cover",
              referrerPolicy: "no-referrer"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/pages/BlogPostPage.tsx",
              lineNumber: 53,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "/app/applet/src/pages/BlogPostPage.tsx",
            lineNumber: 52,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "prose prose-lg prose-stone max-w-none text-justify", children: post.content }, void 0, false, {
            fileName: "/app/applet/src/pages/BlogPostPage.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/BlogPostPage.tsx",
        lineNumber: 33,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/BlogPostPage.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/BlogPostPage.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function AppRoutes() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(ScrollToTop, {}, void 0, false, {
      fileName: "/app/applet/src/AppRoutes.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Layout, { children: /* @__PURE__ */ jsxDEV(Routes, { children: [
      /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 23,
        columnNumber: 36
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/services", element: /* @__PURE__ */ jsxDEV(ServicesPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 24,
        columnNumber: 44
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/services/:serviceId", element: /* @__PURE__ */ jsxDEV(ServicePage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 25,
        columnNumber: 55
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/how-it-works", element: /* @__PURE__ */ jsxDEV(HowItWorksPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 26,
        columnNumber: 48
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/about", element: /* @__PURE__ */ jsxDEV(AboutPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 27,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/contact", element: /* @__PURE__ */ jsxDEV(ContactPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 28,
        columnNumber: 43
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/booking", element: /* @__PURE__ */ jsxDEV(BookingPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 29,
        columnNumber: 43
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/faq", element: /* @__PURE__ */ jsxDEV(FaqPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 30,
        columnNumber: 39
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/locations", element: /* @__PURE__ */ jsxDEV(LocationsPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 31,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/payment", element: /* @__PURE__ */ jsxDEV(PaymentPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 32,
        columnNumber: 43
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/blog", element: /* @__PURE__ */ jsxDEV(BlogPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 33,
        columnNumber: 40
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/blog/:postId", element: /* @__PURE__ */ jsxDEV(BlogPostPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 34,
        columnNumber: 48
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/AppRoutes.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/AppRoutes.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/AppRoutes.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
if (typeof window === "undefined") {
  const domMock = {
    addEventListener: () => {
    },
    removeEventListener: () => {
    },
    matchMedia: () => ({
      matches: false,
      addListener: () => {
      },
      removeListener: () => {
      },
      addEventListener: () => {
      },
      removeEventListener: () => {
      }
    }),
    scrollTo: () => {
    },
    scrollY: 0,
    scrollX: 0,
    location: {
      href: "",
      origin: "",
      pathname: "",
      search: ""
    },
    navigator: {
      userAgent: "node"
    },
    document: {
      getElementById: () => null,
      querySelector: () => null,
      querySelectorAll: () => [],
      createElement: () => ({
        style: {}
      })
    },
    requestAnimationFrame: (cb) => setTimeout(cb, 0),
    cancelAnimationFrame: () => {
    }
  };
  global.window = domMock;
  global.document = domMock.document;
  if (typeof global.navigator === "undefined") {
    global.navigator = domMock.navigator;
  } else {
    try {
      Object.defineProperty(global, "navigator", {
        value: domMock.navigator,
        configurable: true,
        writable: true
      });
    } catch (e) {
    }
  }
}
const routes = [
  "/",
  "/services",
  "/services/routine-housekeeping",
  "/services/deep-dives",
  "/services/move-in-move-out",
  "/services/commercial-deep-cleaning",
  "/services/specialized-treatments",
  "/services/organizing",
  "/services/hoarder-cleanup",
  "/services/junk-removal",
  "/services/post-construction",
  "/how-it-works",
  "/about",
  "/contact",
  "/booking",
  "/faq",
  "/locations",
  "/payment",
  "/blog",
  "/blog/commercial-cleaning-kansas-city",
  "/blog/regular-house-cleaning-kansas-city",
  "/blog/deep-cleaning-kansas-city",
  "/blog/office-cleaning-reception"
];
const routeMetadata = {
  "/": {
    title: "ShineWell Commercial & Home Cleaning Services | Overland Park & KC Metro",
    description: "ShineWell provides Overland Park and the greater KC metro's most reliable commercial and residential cleaning services. Fully insured, locally owned, eco-friendly cleaning with a satisfaction guarantee."
  },
  "/services": {
    title: "Professional Home & Office Cleaning Services | ShineWell KC Metro",
    description: "Explore our comprehensive suite of professional cleaning services in Overland Park & the greater Kansas City metro. From routine home cleaning and deep dives to move-in/out and commercial cleaning."
  },
  "/services/routine-housekeeping": {
    title: "Routine Home Cleaning & Housekeeping | ShineWell",
    description: "Meticulous weekly, bi-weekly, or monthly home cleaning in Overland Park & KC Metro. Keep your living spaces fresh and healthy with our insured, eco-friendly professionals."
  },
  "/services/deep-dives": {
    title: "Deep Home Cleaning & Restorative Sanitization | ShineWell",
    description: "Detailed top-to-bottom deep cleaning for Overland Park and Kansas City homes. Hand wiping baseboards, detailed scrubbing, and intensive sanitizing of your entire living space."
  },
  "/services/move-in-move-out": {
    title: "Move-In & Move-Out Cleaning Services | ShineWell",
    description: "Comprehensive moving cleaning services in Overland Park & KC Metro. Get your security deposit back or prepare your new home for a fresh start with our move-out experts."
  },
  "/services/commercial-deep-cleaning": {
    title: "Commercial & Office Cleaning Services | ShineWell",
    description: "Custom-tailored commercial office cleaning contracts across Overland Park & KC Metro. Pristine retail, corporate, and medical facility cleaning from Crossroads to Leawood."
  },
  "/services/specialized-treatments": {
    title: "Specialized Property & Restoration Cleaning | ShineWell",
    description: "Expert cleaning and restoration services for challenging spaces in Overland Park & KC Metro. Insured, highly confidential, and meticulously thorough specialty cleaning."
  },
  "/services/organizing": {
    title: "Professional Home & Office Organization | ShineWell",
    description: "De-clutter and structure your living or work environment in Overland Park & KC Metro. Professional organization services to maximize efficiency and restore physical peace of mind."
  },
  "/services/hoarder-cleanup": {
    title: "Compassionate Hoarding & Cluttered Space Cleanup | ShineWell",
    description: "Dignified, confidential, and comprehensive extreme clutter cleanup services in Overland Park & KC Metro. Our experienced team restores properties safely and respectfully."
  },
  "/services/junk-removal": {
    title: "Eco-Friendly Junk Removal & Hauling | ShineWell",
    description: "Fast, reliable hauling and disposal services for homes and businesses in Overland Park & KC Metro. We prioritize donation and recycling for eco-friendly junk disposal."
  },
  "/services/post-construction": {
    title: "Post-Renovation & Construction Cleaning | ShineWell",
    description: "Detailed post-renovation and new construction cleanup in Overland Park & KC Metro. Remove fine sheetrock dust, adhesive residues, and debris to prepare your new space for move-in."
  },
  "/how-it-works": {
    title: "Our Simple 5-Step Professional Cleaning Process | ShineWell",
    description: "How ShineWell works: Simple online scheduling, customized options, safe booking fees, exceptional cleaning, and a 100% satisfaction guarantee."
  },
  "/about": {
    title: "About ShineWell | Overland Park & KC Professional Cleaners",
    description: "The story of ShineWell. Built on Lina's 22+ years of professional experience, Brazilian warmth, and a deep dedication to family-owned commercial & home cleaning."
  },
  "/contact": {
    title: "Contact Us & Request a Free Estimate | ShineWell",
    description: "Get in touch with Overland Park and the greater KC metro's premier commercial and home cleaning team. Call us at (913) 325-1400 or fill out our online form for an immediate free estimate."
  },
  "/booking": {
    title: "Request a Free Estimate & Book Your Clean | ShineWell",
    description: "Book your commercial or residential cleaning service online in Overland Park & KC Metro. Choose your frequency, view scheduling options, and get an accurate free estimate immediately."
  },
  "/faq": {
    title: "Frequently Asked Questions | ShineWell Cleaning",
    description: "Got questions? Find clear answers about our employee background checks, liability insurance coverage, arrival windows, pet policies, and guarantee policies."
  },
  "/locations": {
    title: "Service Areas & Locations Served | ShineWell Cleaning",
    description: "Explore our broad service footprint across Overland Park, the greater Kansas City metropolitan area, and North Carolina. See our active locations and zip codes."
  },
  "/payment": {
    title: "Secure Online Payment Portal | ShineWell Cleaning",
    description: "Securely pay your booking fee or invoice online using our trusted, fully encrypted, PCI-compliant Stripe payment processing interface."
  },
  "/blog": {
    title: "Expert Cleaning Tips, News & Local Updates | ShineWell Blog",
    description: "Professional cleaning advice, localized Overland Park and KC maintenance tips, and guides from our expert team to keep your space healthy and spotless."
  },
  "/blog/commercial-cleaning-kansas-city": {
    title: "Rethinking Commercial Cleaning in Overland Park & KC Metro | ShineWell Blog",
    description: "Why local businesses are looking beyond standard janitorial services to create warm, pristine, welcoming environments that inspire confidence."
  },
  "/blog/regular-house-cleaning-kansas-city": {
    title: "The Lifesaving Power of Regular House Cleaning | ShineWell Blog",
    description: "How weekly or bi-weekly routine cleaning rescues your personal time, improves family respiratory health, and preserves the long-term value of your home."
  },
  "/blog/deep-cleaning-kansas-city": {
    title: "When to Book a Deep Home Clean in Overland Park & KC Metro | ShineWell Blog",
    description: "The differences between routine housekeeping and deep restorative cleaning, and when your home needs a top-to-bottom reset of high-touch surfaces."
  },
  "/blog/office-cleaning-reception": {
    title: "How Reception Cleanliness Boosts Client Trust | ShineWell Blog",
    description: "Expert advice on managing the physical first impression of your corporate lobby, reception desks, and waiting rooms to build immediate professional trust."
  }
};
function prerender() {
  const distDir = path.join(process.cwd(), "dist");
  const templatePath = path.join(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error(`Error: Compiled index.html template not found at "${templatePath}". Please run vite build first.`);
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, "utf-8");
  console.log("--- Starting Pre-rendering of key routes ---");
  for (const route of routes) {
    console.log(`Pre-rendering route: ${route}`);
    try {
      const appHtml = renderToString(
        /* @__PURE__ */ jsxDEV(MemoryRouter, { initialEntries: [route], children: /* @__PURE__ */ jsxDEV(AppRoutes, {}, void 0, false, {
          fileName: "/app/applet/prerender.tsx",
          lineNumber: 205,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/app/applet/prerender.tsx",
          lineNumber: 204,
          columnNumber: 9
        }, this)
      );
      let html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );
      const meta = routeMetadata[route] || routeMetadata["/"];
      html = html.replace(
        /<title>.*?<\/title>/,
        `<title>${meta.title}</title>`
      );
      if (html.includes('meta name="description"')) {
        html = html.replace(
          /<meta name="description" content=".*?"\s*\/?>/,
          `<meta name="description" content="${meta.description}" />`
        );
      } else {
        html = html.replace(
          "</head>",
          `  <meta name="description" content="${meta.description}" />
  </head>`
        );
      }
      const canonicalUrl = `https://shinewellcleaning.com${route === "/" ? "/" : route}`;
      if (html.includes('link rel="canonical"')) {
        html = html.replace(
          /<link rel="canonical" href=".*?"\s*\/?>/,
          `<link rel="canonical" href="${canonicalUrl}" />`
        );
      } else {
        html = html.replace(
          "</head>",
          `  <link rel="canonical" href="${canonicalUrl}" />
  </head>`
        );
      }
      let schemaBlock = "";
      if (route === "/faq") {
        const faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Why should I trust ShineWell?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We’re proud to offer professional housecleaning services and employ residential housekeepers who pride themselves on top quality services. After undergoing an extensive background check, each member of our team is thoroughly trained on every step of our detailed cleaning plans. We also back all of our work with our satisfaction guarantee. These are just a few of the many reasons why customers trust ShineWell."
              }
            },
            {
              "@type": "Question",
              "name": "Who does ShineWell hire to clean my home?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can rest assured that all of our professional housecleaners are fully trained and insured. We respect all of our customers by never smoking, drinking, eating, or using appliances during our home cleanings. We wear our uniforms with pride and confidently carry out services that exceed expectations. We also undergo regular training to ensure that we’re always up to date with all of the latest and greatest cleaning techniques. For additional safety and peace of mind, the work we perform for each customer is held accountable by a trusted and experienced supervisor."
              }
            },
            {
              "@type": "Question",
              "name": "How will our relationship work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "At ShineWell, we recognize the importance of communication, especially when it comes to important valuables in your home and any specific cleaning requests you may have. We value your trust and do everything possible to earn it by performing reliable, affordable, top notch cleaning services designed to meet your needs and exceed your expectations."
              }
            },
            {
              "@type": "Question",
              "name": "What should I do before ShineWell arrives?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To ensure maximum efficiency, we ask that you pick up any toys or clothing before we arrive. We also ask that you find a place for your pets so they’re comfortable while we clean. Following through with these requests will help both your family and our team ensure that all of your possessions are in a safe place."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need to be home for every cleaning service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Because we work on an 8 a.m. to 5 p.m. schedule, Monday to Friday, most of our customers aren’t home when we arrive. In a majority of these cases, our insured housecleaning professionals are provided with a spare key or garage code."
              }
            },
            {
              "@type": "Question",
              "name": "Am I liable for employment taxes, workers' compensation, or insurance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ShineWell is proud to be a worry free housecleaning service solution. This means that we take care of any personal liability with regard to social security taxes and work-related injuries. We’re fully licensed and insured for your peace of mind."
              }
            },
            {
              "@type": "Question",
              "name": "What do you not clean?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our professional housecleaning services are designed to keep your home comfortable and clean. We customize services to accommodate your preferences so you never have to worry about paying for a service you don’t need or want. To ensure we provide your home with the highest quality of care, we don’t typically: Clean toys, Clean the inside of your fireplace, Pick up clutter, Clean your iron, Do laundry, Wash dishes. We want to make sure that all of your belongings are in the right place when we leave, which is why we leave these organizational tasks to you. However, we’re happy to clean the inside of your cabinets, stove, and refrigerator upon request."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need to provide your team with my own cleaning equipment or supplies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. We arrive with all of the cleaning materials we need and take them with us when we leave. We’re proud to use the best products and vacuums on the market to ensure that we leave your home looking spotless. If you have any preferences in regards to what cleaning products we use, feel free to let us know and we’ll do everything we can to work with your requests."
              }
            }
          ]
        };
        schemaBlock = `
  <script type="application/ld+json">
  ${JSON.stringify(faqSchema, null, 2).replace(/\n/g, "\n  ")}
  <\/script>`;
      } else if (route.startsWith("/services/")) {
        const serviceKey = route.split("/").pop() || "";
        const serviceMap = {
          "routine-housekeeping": {
            name: "Routine Housekeeping",
            desc: "Meticulous weekly, bi-weekly, or monthly home cleaning and housekeeping in the greater Overland Park & KC Metro. Our customized plans ensure that your bathrooms, kitchen, and living areas remain beautifully clean."
          },
          "deep-dives": {
            name: "Deep Home Cleaning & Restorative Sanitization",
            desc: "Comprehensive, top-to-bottom deep cleaning services. This premium, detailed package targets hard-to-reach areas, hand-wipes baseboards, sanitizes tile grout, scrubs window sills, and eliminates deep-seated dirt."
          },
          "move-in-move-out": {
            name: "Move-In & Move-Out Cleaning",
            desc: "Meticulous move-in and move-out cleaning services to ensure a seamless residential transition. We handle everything from deep-cleaning empty cabinets and scrubbing appliances to detailing baseboards."
          },
          "commercial-deep-cleaning": {
            name: "Light Commercial Cleaning",
            desc: "Commercial office and business cleaning services custom-tailored to fit your corporate schedule. Sanitizes reception lobbies, desk workstations, restrooms, and breakrooms."
          },
          "specialized-treatments": {
            name: "Specialized Property & Restoration Cleaning",
            desc: "Specialized cleaning treatments including expert upholstery care, leather conditioning, and hardwood floor polishing. We use advanced, eco-friendly sanitization techniques and allergen-safe green products."
          },
          "organizing": {
            name: "Professional Home & Office Organizing",
            desc: "Professional home and office organization services, designing sustainable systems to keep clutter away. We guide you through sorting, decluttering, and optimizing spaces."
          },
          "hoarder-cleanup": {
            name: "Compassionate Hoarder House Clean Up",
            desc: "Compassionate, highly confidential hoarding and extreme clutter cleanup services. Sorting valuables, removing heavy debris, and performing thorough deep sanitization and odor removal."
          },
          "junk-removal": {
            name: "Junk Removal & Dumpster Services",
            desc: "Eco-friendly junk removal and dumpster logistics across the metro for residential and commercial clear-outs. Heavy loading and prioritizing local donation centers or recycling."
          },
          "post-construction": {
            name: "Post-Renovation & Construction Cleaning",
            desc: "Thorough post-construction and post-renovation cleaning services. Eliminates drywall dust with HEPA vacuums, scrubs paint splatters, and washes baseboards."
          }
        };
        const serviceInfo = serviceMap[serviceKey];
        if (serviceInfo) {
          const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": serviceInfo.name,
            "description": serviceInfo.desc,
            "provider": {
              "@type": "HouseCleaningService",
              "@id": "https://shinewellcleaning.com/#business",
              "name": "ShineWell Commercial and Home Cleaning Services",
              "telephone": "(913) 325-1400",
              "url": "https://shinewellcleaning.com"
            },
            "areaServed": [
              {
                "@type": "AdministrativeArea",
                "name": "Overland Park / KC metro"
              },
              {
                "@type": "City",
                "name": "Overland Park"
              },
              {
                "@type": "City",
                "name": "Kansas City"
              },
              {
                "@type": "City",
                "name": "Brookside"
              },
              {
                "@type": "City",
                "name": "Prairie Village"
              },
              {
                "@type": "City",
                "name": "Lee's Summit"
              }
            ]
          };
          schemaBlock = `
  <script type="application/ld+json">
  ${JSON.stringify(serviceSchema, null, 2).replace(/\n/g, "\n  ")}
  <\/script>`;
        }
      }
      if (schemaBlock) {
        html = html.replace("</head>", `${schemaBlock}
  </head>`);
      }
      if (route === "/") {
        fs.writeFileSync(path.join(distDir, "index.html"), html, "utf-8");
      } else {
        const targetDir = path.join(distDir, route.substring(1));
        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(path.join(targetDir, "index.html"), html, "utf-8");
      }
    } catch (err) {
      console.error(`Error rendering route "${route}":`, err);
    }
  }
  console.log("--- Pre-rendering completed successfully! ---");
}
prerender();
