import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import fs from "fs";
import path from "path";
import { renderToString } from "react-dom/server";
import { useLocation, Link, Routes, Route, MemoryRouter } from "react-router-dom";
import { useState, useRef, useEffect, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Phone, X, Menu, Mail, MapPin } from "lucide-react";
const logoImg = "/assets/regenerated_image_1780271530148-CARKrjdn.png";
function LazyMap({
  src,
  title,
  className = "",
  height = "100%",
  width = "100%"
}) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    let observer = null;
    let loaded = false;
    const triggerLoad = () => {
      if (loaded) return;
      loaded = true;
      setShouldLoad(true);
      events.forEach((e) => window.removeEventListener(e, triggerLoad));
    };
    const events = ["scroll", "mousemove", "touchstart", "pointerdown", "keydown"];
    events.forEach((e) => window.addEventListener(e, triggerLoad, { passive: true }));
    if (containerRef.current && "IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          triggerLoad();
          if (observer) {
            observer.disconnect();
          }
        }
      }, { rootMargin: "150px" });
      observer.observe(containerRef.current);
    } else {
      const timer = setTimeout(triggerLoad, 3e3);
      return () => clearTimeout(timer);
    }
    return () => {
      events.forEach((e) => window.removeEventListener(e, triggerLoad));
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref: containerRef,
      className: "relative w-full h-full bg-[#3a3f3c] overflow-hidden flex items-center justify-center",
      style: { height, width },
      children: shouldLoad ? /* @__PURE__ */ jsxDEV(
        "iframe",
        {
          src,
          width: "100%",
          height: "100%",
          frameBorder: "0",
          scrolling: "no",
          marginHeight: 0,
          marginWidth: 0,
          title,
          className
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/LazyMap.tsx",
          lineNumber: 71,
          columnNumber: 9
        },
        this
      ) : /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-[#e8e5df]", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 rounded-full border-2 border-[#5c635f] border-t-[#C86B53] animate-spin mb-2" }, void 0, false, {
          fileName: "/app/applet/src/components/LazyMap.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-mono text-gray-400", children: "Loading Map Area..." }, void 0, false, {
          fileName: "/app/applet/src/components/LazyMap.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/LazyMap.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/app/applet/src/components/LazyMap.tsx",
      lineNumber: 65,
      columnNumber: 5
    },
    this
  );
}
const services = [
  { name: "Commercial Cleaning", path: "/commercial-cleaning-kansas-city" },
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
    lineNumber: 29,
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
  useEffect(() => {
    let chatLoaded = false;
    const loadChatWidget = () => {
      if (chatLoaded) return;
      chatLoaded = true;
      chatEvents.forEach((e) => window.removeEventListener(e, loadChatWidget));
      clearTimeout(chatTimer);
      if (!document.querySelector("[data-chat-widget]")) {
        const div = document.createElement("div");
        div.setAttribute("data-chat-widget", "");
        div.setAttribute("data-widget-id", "6a4bed7e665c2f21034131f0");
        div.setAttribute("data-location-id", "cw0LTb1KMpv0suzij9FZ");
        document.body.appendChild(div);
      }
      const script = document.createElement("script");
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
      script.setAttribute("data-widget-id", "6a4bed7e665c2f21034131f0");
      script.async = true;
      document.body.appendChild(script);
    };
    const chatEvents = ["scroll", "mousemove", "touchstart", "pointerdown", "keydown"];
    chatEvents.forEach((e) => window.addEventListener(e, loadChatWidget, { passive: true }));
    const chatTimer = setTimeout(loadChatWidget, 4e3);
    let gtmLoaded = false;
    const loadGtm = () => {
      if (gtmLoaded || window.gtagInitialized) return;
      gtmLoaded = true;
      window.gtagInitialized = true;
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=AW-18330417032";
      script.async = true;
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", /* @__PURE__ */ new Date());
      window.gtag("config", "AW-18330417032");
    };
    if (document.readyState === "complete") {
      setTimeout(loadGtm, 1500);
    } else {
      window.addEventListener("load", () => {
        setTimeout(loadGtm, 1500);
      });
    }
    return () => {
      chatEvents.forEach((e) => window.removeEventListener(e, loadChatWidget));
      clearTimeout(chatTimer);
    };
  }, []);
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
                lineNumber: 151,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 150,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col justify-center", children: [
                /* @__PURE__ */ jsxDEV("span", { className: `font-script font-bold tracking-tight text-[#2C302E] leading-none mb-1 transition-all duration-500 ${isScrolled ? "text-xl md:text-2xl lg:text-3xl" : "text-2xl md:text-3xl lg:text-4xl"}`, children: "ShineWell" }, void 0, false, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 156,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: `uppercase tracking-[0.25em] text-[#607564] font-semibold leading-none pl-1 transition-all duration-500 ${isScrolled ? "text-[7px] sm:text-[9px] md:text-[10px]" : "text-[8px] sm:text-[10px] md:text-[11px]"}`, children: "Commercial and Home Cleaning Services" }, void 0, false, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 161,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 155,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 149,
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
                            lineNumber: 181,
                            columnNumber: 19
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/app/applet/src/components/Layout.tsx",
                        lineNumber: 176,
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
                            lineNumber: 194,
                            columnNumber: 25
                          },
                          this
                        ))
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/components/Layout.tsx",
                        lineNumber: 186,
                        columnNumber: 21
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "/app/applet/src/components/Layout.tsx",
                      lineNumber: 184,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 171,
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
                  lineNumber: 207,
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
                  lineNumber: 213,
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
                  lineNumber: 219,
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
                  lineNumber: 225,
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
                  lineNumber: 231,
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
                      lineNumber: 241,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { children: "Call ShineWell: (913) 325-1400" }, void 0, false, {
                      fileName: "/app/applet/src/components/Layout.tsx",
                      lineNumber: 242,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 237,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 170,
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
                      lineNumber: 253,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { children: "(913) 325-1400" }, void 0, false, {
                      fileName: "/app/applet/src/components/Layout.tsx",
                      lineNumber: 254,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 248,
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
                  children: isMobileMenuOpen ? /* @__PURE__ */ jsxDEV(X, { "aria-hidden": "true", focusable: "false", className: "h-6 w-6", strokeWidth: 1.5 }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 262,
                    columnNumber: 19
                  }, this) : /* @__PURE__ */ jsxDEV(Menu, { "aria-hidden": "true", focusable: "false", className: "h-6 w-6", strokeWidth: 1.5 }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 264,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 256,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 247,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 148,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 147,
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
                            "aria-label": "Toggle services list",
                            children: /* @__PURE__ */ jsxDEV(ChevronDown, { "aria-hidden": "true", focusable: "false", className: `w-5 h-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}` }, void 0, false, {
                              fileName: "/app/applet/src/components/Layout.tsx",
                              lineNumber: 294,
                              columnNumber: 21
                            }, this)
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/components/Layout.tsx",
                            lineNumber: 286,
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
                      lineNumber: 281,
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
                          lineNumber: 306,
                          columnNumber: 25
                        },
                        this
                      ))
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/Layout.tsx",
                      lineNumber: 299,
                      columnNumber: 21
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 297,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 280,
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
                    lineNumber: 319,
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
                    lineNumber: 325,
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
                    lineNumber: 331,
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
                    lineNumber: 337,
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
                    lineNumber: 343,
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
                        lineNumber: 353,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { children: "Call (913) 325-1400" }, void 0, false, {
                        fileName: "/app/applet/src/components/Layout.tsx",
                        lineNumber: 354,
                        columnNumber: 17
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 349,
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
              lineNumber: 274,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 272,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 140,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-grow", children }, void 0, false, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 362,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { className: "bg-[#2C302E] text-[#F9F8F6] py-10 md:py-12 border-t border-[#3a3f3c] mt-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-4 gap-8 mb-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "col-span-1 md:col-span-2", children: [
          /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center gap-3 mb-6 cursor-pointer group", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "group-hover:scale-105 transition-transform duration-300 shrink-0", children: /* @__PURE__ */ jsxDEV(Logo, { className: "h-20 w-20 md:h-24 md:w-24" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 373,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 372,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col justify-center", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-2xl md:text-3xl lg:text-4xl font-script tracking-tight leading-none mb-1 text-[#F9F8F6]", children: "ShineWell" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 376,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-[8px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#a3aba6] group-hover:text-white transition-colors font-medium leading-none pl-0.5", children: "Commercial and Home Cleaning Services" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 379,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 375,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 371,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "max-w-sm text-[#a3aba6] font-light leading-relaxed mb-4", children: "Honest, meticulous cleaning for businesses and homes across the Overland Park & KC metro area. We clean so you can live." }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 384,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 space-y-1 text-sm text-[#a3aba6] font-light", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-[#F9F8F6]", children: "ShineWell Commercial and Home Cleaning Services" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 388,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#a3aba6]", children: "Serving Overland Park & the greater Kansas City metro" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 389,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Phone: ",
              /* @__PURE__ */ jsxDEV("a", { href: "tel:9133251400", className: "hover:text-white transition-colors underline decoration-[#607564] underline-offset-4", children: "(913) 325-1400" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 390,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 390,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 387,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxDEV("a", { href: "https://www.facebook.com/shinewellcleaning/", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 rounded-full bg-[#3a3f3c] flex items-center justify-center hover:bg-[#C86B53] transition-colors", "aria-label": "Visit our Facebook Page", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "Facebook" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 394,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("svg", { "aria-hidden": "true", focusable: "false", className: "w-4 h-4 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 395,
                columnNumber: 114
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 395,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 393,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: "https://www.instagram.com/shinewellcleaning", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 rounded-full bg-[#3a3f3c] flex items-center justify-center hover:bg-[#C86B53] transition-colors", "aria-label": "Visit our Instagram Page", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "Instagram" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 398,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("svg", { "aria-hidden": "true", focusable: "false", className: "w-4 h-4 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 399,
                columnNumber: 114
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 399,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 397,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 392,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 370,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "font-medium mb-6 tracking-wide", children: "Contact" }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 405,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4 text-[#a3aba6] font-light", children: [
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4 text-[#607564]" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 408,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("a", { href: "tel:9133251400", className: "hover:text-white transition-colors", children: "(913) 325-1400" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 409,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 407,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV(Mail, { className: "w-4 h-4 text-[#607564]" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 412,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("a", { href: "mailto:lina.swcleaning@gmail.com", className: "hover:text-white transition-colors", children: "lina.swcleaning@gmail.com" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 413,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 411,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV(MapPin, { className: "w-4 h-4 text-[#607564] mt-1 shrink-0" }, void 0, false, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 416,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "w-full", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "block mb-3", children: "Serving Overland Park & the greater Kansas City metro" }, void 0, false, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 418,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "w-full h-32 rounded-lg overflow-hidden border border-[#3a3f3c] bg-[#3a3f3c] mb-3 relative", children: /* @__PURE__ */ jsxDEV(
                  LazyMap,
                  {
                    src: "https://maps.google.com/maps?q=Overland+Park,KS&t=&z=10&ie=UTF8&iwloc=&output=embed",
                    title: "Service Area Map",
                    className: "grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 420,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "/app/applet/src/components/Layout.tsx",
                  lineNumber: 419,
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
                      /* @__PURE__ */ jsxDEV("svg", { "aria-hidden": "true", focusable: "false", className: "w-4 h-4", viewBox: "0 0 24 24", children: [
                        /* @__PURE__ */ jsxDEV("path", { fill: "currentColor", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }, void 0, false, {
                          fileName: "/app/applet/src/components/Layout.tsx",
                          lineNumber: 433,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ jsxDEV("path", { fill: "currentColor", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }, void 0, false, {
                          fileName: "/app/applet/src/components/Layout.tsx",
                          lineNumber: 434,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ jsxDEV("path", { fill: "currentColor", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }, void 0, false, {
                          fileName: "/app/applet/src/components/Layout.tsx",
                          lineNumber: 435,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ jsxDEV("path", { fill: "currentColor", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" }, void 0, false, {
                          fileName: "/app/applet/src/components/Layout.tsx",
                          lineNumber: 436,
                          columnNumber: 25
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/Layout.tsx",
                        lineNumber: 432,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "group-hover:underline", children: "Visit our Google Profile" }, void 0, false, {
                        fileName: "/app/applet/src/components/Layout.tsx",
                        lineNumber: 438,
                        columnNumber: 23
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/Layout.tsx",
                    lineNumber: 426,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/Layout.tsx",
                lineNumber: 417,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 415,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 406,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 404,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "font-medium mb-6 tracking-wide", children: "Links" }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 446,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3 text-[#a3aba6] font-light", children: [
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/services", className: "hover:text-white transition-colors", children: "Services" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 448,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 448,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/about", className: "hover:text-white transition-colors", children: "About Us" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 449,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 449,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/how-it-works", className: "hover:text-white transition-colors", children: "How It Works" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 450,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 450,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/locations", className: "hover:text-white transition-colors", children: "Locations" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 451,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 451,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/faq", className: "hover:text-white transition-colors", children: "FAQ" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 452,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 452,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/blog", className: "hover:text-white transition-colors", children: "Blog" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 453,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 453,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/booking", className: "hover:text-white transition-colors font-medium text-[#FBBC05]", children: "Get a Free Estimate" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 454,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 454,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/contact", className: "hover:text-white transition-colors", children: "Contact" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 455,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 455,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 447,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 445,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 369,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "pt-8 border-t border-[#3a3f3c] text-sm text-[#a3aba6] font-light flex flex-col md:flex-row justify-between items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ShineWell Commercial and Home Cleaning Services. All rights reserved."
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 461,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-6", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] uppercase tracking-widest opacity-50", children: [
            "Crafted by ",
            /* @__PURE__ */ jsxDEV("a", { href: "https://www.cerrana.com", target: "_blank", rel: "noopener noreferrer", className: "hover:text-white transition-colors underline underline-offset-4", children: "Cerrana" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 464,
              columnNumber: 28
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 463,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex gap-6", children: [
            /* @__PURE__ */ jsxDEV(Link, { to: "/privacy", className: "hover:text-white transition-colors", children: "Privacy Policy" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 467,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(Link, { to: "/terms", className: "hover:text-white transition-colors", children: "Terms of Service" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 468,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 466,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 462,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 460,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 368,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 367,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      "a",
      {
        href: "tel:9133251400",
        className: "fixed bottom-6 left-6 z-50 md:hidden bg-[#C86B53] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center hover:shadow-[#C86B53]/30",
        "aria-label": "Call ShineWell",
        children: /* @__PURE__ */ jsxDEV(Phone, { "aria-hidden": "true", focusable: "false", className: "w-8 h-8 shrink-0" }, void 0, false, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 480,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 475,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/Layout.tsx",
    lineNumber: 138,
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
const Home = lazy(() => import("./assets/Home-D2td_t8P.js"));
const ServicePage = lazy(() => import("./assets/ServicePage-BB7Hjx5A.js"));
const ServicesPage = lazy(() => import("./assets/ServicesPage-B9jWhvct.js"));
const CommercialCleaningKansasCity = lazy(() => import("./assets/CommercialCleaningKansasCity-DTfWltSa.js"));
const HowItWorksPage = lazy(() => import("./assets/HowItWorksPage-BHRW3PLx.js"));
const AboutPage = lazy(() => import("./assets/AboutPage-D-a-ZZ-9.js"));
const ContactPage = lazy(() => import("./assets/ContactPage-CU1EINiI.js"));
const BookingPage = lazy(() => import("./assets/BookingPage-Jcv9SUyi.js"));
const FaqPage = lazy(() => import("./assets/FaqPage-CzNnFZdY.js"));
const LocationsPage = lazy(() => import("./assets/LocationsPage-D2whh-Mc.js"));
const PaymentPage = lazy(() => import("./assets/PaymentPage-Qq0cpkoA.js"));
const BlogPage = lazy(() => import("./assets/BlogPage-DnvIBEd9.js"));
const BlogPostPage = lazy(() => import("./assets/BlogPostPage-CN_Muzpv.js"));
const PrivacyPage = lazy(() => import("./assets/PrivacyPage-BRqm1I6t.js"));
const TermsPage = lazy(() => import("./assets/TermsPage-D5Hbp-x6.js"));
const PageLoader = () => /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-[#F9F8F6] flex flex-col justify-center items-center gap-4 pt-24", id: "page-loader", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-[#CAD4CD]" }, void 0, false, {
    fileName: "/app/applet/src/AppRoutes.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] text-sm font-serif", children: "Loading page..." }, void 0, false, {
    fileName: "/app/applet/src/AppRoutes.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/app/applet/src/AppRoutes.tsx",
  lineNumber: 24,
  columnNumber: 3
}, void 0);
function AppRoutes() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(ScrollToTop, {}, void 0, false, {
      fileName: "/app/applet/src/AppRoutes.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Layout, { children: /* @__PURE__ */ jsxDEV(Suspense, { fallback: /* @__PURE__ */ jsxDEV(PageLoader, {}, void 0, false, {
      fileName: "/app/applet/src/AppRoutes.tsx",
      lineNumber: 35,
      columnNumber: 29
    }, this), children: /* @__PURE__ */ jsxDEV(Routes, { children: [
      /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 37,
        columnNumber: 38
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/services", element: /* @__PURE__ */ jsxDEV(ServicesPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 38,
        columnNumber: 46
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/services/:serviceId", element: /* @__PURE__ */ jsxDEV(ServicePage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 39,
        columnNumber: 57
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/commercial-cleaning-kansas-city", element: /* @__PURE__ */ jsxDEV(CommercialCleaningKansasCity, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 40,
        columnNumber: 69
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/how-it-works", element: /* @__PURE__ */ jsxDEV(HowItWorksPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 41,
        columnNumber: 50
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/about", element: /* @__PURE__ */ jsxDEV(AboutPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 42,
        columnNumber: 43
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/contact", element: /* @__PURE__ */ jsxDEV(ContactPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 43,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/booking", element: /* @__PURE__ */ jsxDEV(BookingPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 44,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/faq", element: /* @__PURE__ */ jsxDEV(FaqPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 45,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/locations", element: /* @__PURE__ */ jsxDEV(LocationsPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 46,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/payment", element: /* @__PURE__ */ jsxDEV(PaymentPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 47,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/blog", element: /* @__PURE__ */ jsxDEV(BlogPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 48,
        columnNumber: 42
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/blog/:postId", element: /* @__PURE__ */ jsxDEV(BlogPostPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 49,
        columnNumber: 50
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/privacy", element: /* @__PURE__ */ jsxDEV(PrivacyPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 50,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/terms", element: /* @__PURE__ */ jsxDEV(TermsPage, {}, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 51,
        columnNumber: 43
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/AppRoutes.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/AppRoutes.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/AppRoutes.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/AppRoutes.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/AppRoutes.tsx",
    lineNumber: 32,
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
      body: {
        appendChild: () => {
        },
        removeChild: () => {
        }
      },
      getElementById: () => null,
      querySelector: () => null,
      querySelectorAll: () => [],
      createElement: (tagName) => ({
        style: {},
        setAttribute: () => {
        },
        removeAttribute: () => {
        },
        addEventListener: () => {
        },
        removeEventListener: () => {
        },
        appendChild: () => {
        },
        tagName: (tagName || "").toUpperCase()
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
  "/blog/office-cleaning-reception",
  "/blog/how-often-professional-house-cleaning-kansas-city",
  "/blog/is-hiring-a-house-cleaning-service-worth-it",
  "/blog/standard-clean-vs-deep-clean-difference",
  "/blog/kansas-city-restoration-pros-recommendation",
  "/blog/how-to-choose-commercial-cleaning-company-kansas-city",
  "/blog/how-to-keep-your-office-clean-and-healthy",
  "/commercial-cleaning-kansas-city",
  "/privacy",
  "/terms"
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
    title: "Commercial Deep Cleaning and Heavy-Duty Office Sanitization | ShineWell",
    description: "Professional commercial deep cleaning services in Overland Park & Kansas City. Heavy-duty sanitization of offices, clinics, retail spaces, restrooms, and breakrooms."
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
  "/blog/office-cleaning-reception": {
    title: "How Reception Cleanliness Boosts Client Trust | ShineWell Blog",
    description: "Expert advice on managing the physical first impression of your corporate lobby, reception desks, and waiting rooms to build immediate professional trust."
  },
  "/blog/how-often-professional-house-cleaning-kansas-city": {
    title: "How Often Should You Get Your House Cleaned? | KC Guide",
    description: "How often should you have your house professionally cleaned in Kansas City? Weekly, biweekly, or monthly — here's how to choose the right frequency."
  },
  "/blog/is-hiring-a-house-cleaning-service-worth-it": {
    title: "Is Hiring a House Cleaning Service Worth It? (KC 2026)",
    description: "Is a house cleaning service worth the money? Here's an honest look at the cost, time saved, and how to decide — for Kansas City homeowners."
  },
  "/blog/standard-clean-vs-deep-clean-difference": {
    title: "Standard Clean vs. Deep Clean: What's the Difference?",
    description: "Standard clean vs. deep clean — what's the difference, what's included in each, and which one you need? A simple guide for Kansas City homeowners."
  },
  "/blog/kansas-city-restoration-pros-recommendation": {
    title: "Trusted Property Restoration in KC | ShineWell Recommends",
    description: "ShineWell Cleaning Services proudly recommends Jason and the team at Kansas City Restoration Pros for water, fire, mold, and storm damage restoration."
  },
  "/blog/how-to-choose-commercial-cleaning-company-kansas-city": {
    title: "How to Choose a Commercial Cleaning Company in KC",
    description: "What to look for in a commercial cleaning company in Overland Park or KC: insurance, background checks, scope, and questions to ask before you sign."
  },
  "/blog/how-to-keep-your-office-clean-and-healthy": {
    title: "How Keep Your Office Clean and Healthy | KC Guide",
    description: "How to keep your office clean and healthy for staff and clients: high-touch points, restroom and break-room routines, and how often to bring in pros."
  },
  "/commercial-cleaning-kansas-city": {
    title: "Commercial Cleaning Services in Kansas City | ShineWell",
    description: "Reliable commercial & office cleaning across the Kansas City metro. Fully insured, background-checked crews, flexible schedules, free walkthrough."
  },
  "/privacy": {
    title: "Privacy Policy | ShineWell Commercial & Home Cleaning Services",
    description: "Read the Privacy Policy of ShineWell Commercial & Home Cleaning Services. Learn how we collect, protect, and handle your personal data and secure Stripe payments."
  },
  "/terms": {
    title: "Terms of Service | ShineWell Commercial & Home Cleaning Services",
    description: "Review the Terms of Service for ShineWell Commercial & Home Cleaning Services, including our 24-hour cancellation policy, satisfaction guarantee, and general liabilities."
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
          lineNumber: 245,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/app/applet/prerender.tsx",
          lineNumber: 244,
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
      if (html.includes('name="robots"')) {
        html = html.replace(
          /<meta name="robots" content=".*?"\s*\/?>/,
          `<meta name="robots" content="index,follow" />`
        );
      }
      if (html.includes('property="og:title"')) {
        html = html.replace(
          /<meta property="og:title" content=".*?"\s*\/?>/,
          `<meta property="og:title" content="${meta.title}" />`
        );
      }
      if (html.includes('property="og:description"')) {
        html = html.replace(
          /<meta property="og:description" content=".*?"\s*\/?>/,
          `<meta property="og:description" content="${meta.description}" />`
        );
      }
      if (html.includes('property="twitter:title"')) {
        html = html.replace(
          /<meta property="twitter:title" content=".*?"\s*\/?>/,
          `<meta property="twitter:title" content="${meta.title}" />`
        );
      }
      if (html.includes('property="twitter:description"')) {
        html = html.replace(
          /<meta property="twitter:description" content=".*?"\s*\/?>/,
          `<meta property="twitter:description" content="${meta.description}" />`
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
      if (route === "/") {
        const homeFaqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does cleaning cost in Kansas City?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost vary based on the size of your space, the type of cleaning (routine, deep, move out), and the frequency of service. Contact us for a free, personalized estimate tailored to your specific commercial or residential needs."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer same day cleaning in Kansas City?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "While we recommend booking in advance to secure your preferred time, we do our best to accommodate same day or last minute cleaning requests in Kansas City when our schedule allows. Please call us directly for urgent needs."
              }
            },
            {
              "@type": "Question",
              "name": "Are your cleaners background checked?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, absolutely. Every member of the ShineWell team undergoes a thorough background check before they are hired. We only send trusted, reliable professionals into your property."
              }
            },
            {
              "@type": "Question",
              "name": "Do you bring your own cleaning supplies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! We bring our own professional-grade, eco-friendly cleaning supplies and equipment. If you have specific products you'd prefer us to use on certain surfaces, just let us know."
              }
            },
            {
              "@type": "Question",
              "name": "Do you clean Airbnb and short term rentals in Kansas City?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialize in turnover cleaning for Airbnb and short term rentals across Kansas City. We ensure your property is spotless, sanitized, and guest ready between every stay."
              }
            },
            {
              "@type": "Question",
              "name": "What is included in a deep cleaning?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A deep clean is a comprehensive, top to bottom service. It includes everything in our standard clean, plus detailed tasks like hand wiping baseboards, cleaning inside window sills, wiping down ceiling fans, and scrubbing grout lines."
              }
            }
          ]
        };
        schemaBlock = `
  <script type="application/ld+json">
  ${JSON.stringify(homeFaqSchema, null, 2).replace(/\n/g, "\n  ")}
  <\/script>`;
      } else if (route === "/faq") {
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
              "@type": "LocalBusiness",
              "@id": "https://shinewellcleaning.com/#business",
              "name": "ShineWell Commercial & Home Cleaning Services",
              "telephone": "+1-913-325-1400",
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
      } else if (route === "/commercial-cleaning-kansas-city") {
        const commercialSchema = {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Commercial and office cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": "ShineWell Commercial & Home Cleaning Services",
            "telephone": "+1-913-325-1400",
            "url": "https://shinewellcleaning.com/commercial-cleaning-kansas-city"
          },
          "areaServed": [
            { "@type": "Place", "name": "Overland Park" },
            { "@type": "Place", "name": "Kansas City Metro" },
            { "@type": "Place", "name": "Corporate Woods" },
            { "@type": "Place", "name": "Crossroads" }
          ]
        };
        const commercialFaq = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Who provides reliable recurring office cleaning in the Kansas City metro?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ShineWell offers recurring commercial and office cleaning across the KC metro — Overland Park, Corporate Woods, the Crossroads, and beyond — with flexible nightly, weekly, or biweekly schedules, fully insured and background-checked crews, and a satisfaction guarantee."
              }
            },
            {
              "@type": "Question",
              "name": "Do you clean outside of business hours?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Most commercial clients choose after-hours or early-morning cleaning so your team walks into a fresh space and is never disrupted mid-day."
              }
            },
            {
              "@type": "Question",
              "name": "Are you insured for commercial work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes — we carry $2 million in general liability and bonding, and all crews are background-checked."
              }
            }
          ]
        };
        schemaBlock = `
  <script type="application/ld+json">
  ${JSON.stringify(commercialSchema, null, 2).replace(/\n/g, "\n  ")}
  <\/script>
  <script type="application/ld+json">
  ${JSON.stringify(commercialFaq, null, 2).replace(/\n/g, "\n  ")}
  <\/script>`;
      } else if (route.startsWith("/blog/")) {
        const blogKey = route.split("/").pop() || "";
        let faqSchema = null;
        if (blogKey === "how-often-professional-house-cleaning-kansas-city") {
          faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How often should you have your house professionally cleaned?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most households do best with a professional cleaning every two weeks. Weekly suits homes with kids, pets, or allergies; monthly works for low-traffic homes; and one-time or seasonal deep cleans handle resets. The right frequency depends on your household, home size, and lifestyle."
                }
              },
              {
                "@type": "Question",
                "name": "Is weekly house cleaning too much?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not for busy households with kids, pets, or allergy concerns, where dust and mess rebuild quickly. If your home stays clean between visits and you tidy in between, biweekly or monthly is usually enough."
                }
              },
              {
                "@type": "Question",
                "name": "Does recurring cleaning cost less than one-time cleaning?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Generally yes. Weekly and biweekly visits are typically priced lower per visit than a one-time clean, because the home stays in better condition between appointments."
                }
              }
            ]
          };
        } else if (blogKey === "is-hiring-a-house-cleaning-service-worth-it") {
          faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is hiring a house cleaning service worth it?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For most busy households, yes, if you value the time you get back and choose an insured, background-checked company. It is less worth it for small, low-traffic homes that are easy to maintain yourself on a tight budget. The deciding factor is what your time is worth."
                }
              },
              {
                "@type": "Question",
                "name": "How much does a house cleaning service cost in Kansas City?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In 2026, standard recurring cleanings typically run about $120 to $250 per visit, one-time deep cleans about $200 to $450 or more, and move-in or move-out cleans about $250 to $700, depending on home size and condition."
                }
              },
              {
                "@type": "Question",
                "name": "Is it cheaper to clean the house myself?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Out of pocket it is cheaper, but that ignores the value of your time. Once you factor in the hours a thorough clean takes, a professional service is often close to break-even and delivers a more consistent result."
                }
              }
            ]
          };
        } else if (blogKey === "standard-clean-vs-deep-clean-difference") {
          faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the difference between a standard clean and a deep clean?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A standard clean maintains an already-clean home: surfaces, floors, bathrooms, kitchen, dusting, and trash. A deep clean is a top-to-bottom reset that reaches built-up grime, including baseboards, inside appliances, grout, vents, and behind or under furniture. Deep cleans take more time and typically cost 50 to 100 percent more."
                }
              },
              {
                "@type": "Question",
                "name": "How often do I need a deep clean?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most homes benefit from a deep clean once or twice a year, often in spring and fall, in addition to regular standard cleaning."
                }
              },
              {
                "@type": "Question",
                "name": "Why does my first house cleaning cost more?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The first visit is usually a deep clean that brings the home to a baseline. It takes more time and detail than the standard visits that follow, so it costs more."
                }
              }
            ]
          };
        } else if (blogKey === "kansas-city-restoration-pros-recommendation") {
          faqSchema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Shine Well Cleaning Services Proudly Recommends Kansas City Restoration Pros",
            "description": "Lina Silva, Owner of Shine Well Cleaning Services, explains why she proudly recommends Jason and the team at Kansas City Restoration Pros for water, mold, fire, and storm damage restoration.",
            "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
            "datePublished": "2026-07-17",
            "dateModified": "2026-07-17",
            "author": {
              "@type": "Person",
              "name": "Lina Silva",
              "jobTitle": "Owner of Shine Well Cleaning Services"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ShineWell Commercial & Home Cleaning Services",
              "logo": {
                "@type": "ImageObject",
                "url": "https://shinewellcleaning.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://shinewellcleaning.com/blog/kansas-city-restoration-pros-recommendation"
            }
          };
        } else if (blogKey === "how-to-choose-commercial-cleaning-company-kansas-city") {
          faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What should I look for in a commercial cleaning company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Full insurance and bonding, background-checked staff, a clear written scope, flexible after-hours scheduling, real local reviews, consistent crews, and a satisfaction guarantee. Get a walkthrough-based quote rather than a price over the phone."
                }
              },
              {
                "@type": "Question",
                "name": "Should a commercial cleaner quote a price over the phone?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ideally no. A reliable commercial quote comes after a walkthrough of the actual space, based on square footage, scope, and frequency."
                }
              },
              {
                "@type": "Question",
                "name": "Is a local company or a national franchise better for a small office?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For small offices, a locally owned company is often more flexible, more accountable, and easier to reach, without the overhead of a national franchise."
                }
              }
            ]
          };
        } else if (blogKey === "how-to-keep-your-office-clean-and-healthy") {
          faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How often should an office be professionally cleaned?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It depends on size and foot traffic: about once a week for small low-traffic offices, two to three times a week for client-facing spaces, and daily for high-traffic, medical, or food-adjacent workplaces, plus periodic deep cleans."
                }
              },
              {
                "@type": "Question",
                "name": "What are the most important things to clean in an office?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "High-touch points such as door handles, light switches, and shared electronics, along with restrooms and break rooms, since these most affect both employee health and the impression clients form."
                }
              },
              {
                "@type": "Question",
                "name": "Can office staff handle cleaning instead of a service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Staff can manage light daily upkeep, but restroom sanitation, floor care, high-touch disinfection, and deep periodic cleaning are best handled by professionals with the right products and equipment."
                }
              }
            ]
          };
        }
        if (faqSchema) {
          schemaBlock = `
  <script type="application/ld+json">
  ${JSON.stringify(faqSchema, null, 2).replace(/\n/g, "\n  ")}
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
  try {
    console.log("--- Generating sitemap.xml dynamically... ---");
    const lastmod = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    for (const r of routes) {
      let priority = "0.5";
      let changefreq = "monthly";
      if (r === "/") {
        priority = "1.0";
        changefreq = "weekly";
      } else if (r === "/booking") {
        priority = "0.9";
        changefreq = "monthly";
      } else if (r === "/commercial-cleaning-kansas-city") {
        priority = "0.9";
        changefreq = "monthly";
      } else if (r === "/services") {
        priority = "0.8";
        changefreq = "monthly";
      } else if (r.startsWith("/services/")) {
        priority = "0.8";
        changefreq = "monthly";
      } else if (r === "/blog") {
        priority = "0.7";
        changefreq = "weekly";
      } else if (r.startsWith("/blog/")) {
        priority = "0.7";
        changefreq = "monthly";
      } else if (r === "/privacy" || r === "/terms") {
        priority = "0.3";
        changefreq = "monthly";
      } else if (r === "/payment") {
        priority = "0.5";
        changefreq = "monthly";
      } else {
        priority = "0.7";
        changefreq = "monthly";
      }
      xml += "  <url>\n";
      xml += `    <loc>https://shinewellcleaning.com${r === "/" ? "" : r}</loc>
`;
      xml += `    <lastmod>${lastmod}</lastmod>
`;
      xml += `    <changefreq>${changefreq}</changefreq>
`;
      xml += `    <priority>${priority}</priority>
`;
      xml += "  </url>\n";
    }
    xml += "</urlset>\n";
    fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), xml, "utf-8");
    fs.writeFileSync(path.join(distDir, "sitemap.xml"), xml, "utf-8");
    console.log("--- sitemap.xml generated successfully in public/ and dist/ ---");
  } catch (sitemapErr) {
    console.error("Error generating sitemap.xml:", sitemapErr);
  }
}
prerender();
export {
  LazyMap as L
};
