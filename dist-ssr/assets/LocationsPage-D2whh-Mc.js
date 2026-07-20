import { jsxDEV } from "react/jsx-dev-runtime";
import { motion } from "motion/react";
import { MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { L as LazyMap } from "../prerender.js";
import "fs";
import "path";
import "react-dom/server";
import "react";
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
            lineNumber: 47,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 md:p-8 rounded-2xl border border-[#e8e5df] text-left shadow-sm mb-6", children: /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-[#2C302E] leading-relaxed font-light", children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "ShineWell" }, void 0, false, {
              fileName: "/app/applet/src/pages/LocationsPage.tsx",
              lineNumber: 50,
              columnNumber: 15
            }, this),
            " serves a broad geographical footprint, providing premier home and commercial office cleaning services across the greater Kansas City metropolitan area (including both Missouri and Kansas municipalities) as well as key regions in North Carolina. Check our maps below or contact us to verify if our fully insured cleaning professionals cover your specific zip code."
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/LocationsPage.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/LocationsPage.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-[#5c635f] font-light", children: "ShineWell provides premium cleaning services across the greater Kansas City metropolitan area and major cities in North Carolina." }, void 0, false, {
            fileName: "/app/applet/src/pages/LocationsPage.tsx",
            lineNumber: 53,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/LocationsPage.tsx",
        lineNumber: 42,
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
          children: /* @__PURE__ */ jsxDEV("div", { className: "w-full h-[400px] rounded-[2rem] overflow-hidden bg-[#e8e5df] relative", children: /* @__PURE__ */ jsxDEV(
            LazyMap,
            {
              src: `https://maps.google.com/maps?q=${region.mapQuery}&t=&z=9&ie=UTF8&iwloc=&output=embed`,
              title: `${region.state} Service Area`,
              className: "grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/pages/LocationsPage.tsx",
              lineNumber: 69,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "/app/applet/src/pages/LocationsPage.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/pages/LocationsPage.tsx",
          lineNumber: 62,
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
                lineNumber: 86,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/pages/LocationsPage.tsx",
                lineNumber: 85,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-serif text-[#2C302E]", children: region.state }, void 0, false, {
                fileName: "/app/applet/src/pages/LocationsPage.tsx",
                lineNumber: 88,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/LocationsPage.tsx",
              lineNumber: 84,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-y-3 gap-x-6", children: region.cities.map((city, cityIdx) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 text-[#607564] shrink-0" }, void 0, false, {
                fileName: "/app/applet/src/pages/LocationsPage.tsx",
                lineNumber: 94,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-[#5c635f] font-light text-sm", children: city }, void 0, false, {
                fileName: "/app/applet/src/pages/LocationsPage.tsx",
                lineNumber: 95,
                columnNumber: 23
              }, this)
            ] }, cityIdx, true, {
              fileName: "/app/applet/src/pages/LocationsPage.tsx",
              lineNumber: 93,
              columnNumber: 21
            }, this)) }, void 0, false, {
              fileName: "/app/applet/src/pages/LocationsPage.tsx",
              lineNumber: 91,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/LocationsPage.tsx",
          lineNumber: 78,
          columnNumber: 15
        },
        this
      )
    ] }, idx, true, {
      fileName: "/app/applet/src/pages/LocationsPage.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "/app/applet/src/pages/LocationsPage.tsx",
      lineNumber: 58,
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
          /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-serif text-[#2C302E] mb-4", children: "Don't see your city?" }, void 0, false, {
            fileName: "/app/applet/src/pages/LocationsPage.tsx",
            lineNumber: 110,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] mb-8 font-light", children: "We are constantly expanding our service area. Contact us to see if we can accommodate your location." }, void 0, false, {
            fileName: "/app/applet/src/pages/LocationsPage.tsx",
            lineNumber: 111,
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
        fileName: "/app/applet/src/pages/LocationsPage.tsx",
        lineNumber: 104,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/LocationsPage.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/LocationsPage.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
export {
  LocationsPage as default
};
