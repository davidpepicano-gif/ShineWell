import { jsxDEV } from "react/jsx-dev-runtime";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
export {
  HowItWorksPage as default
};
