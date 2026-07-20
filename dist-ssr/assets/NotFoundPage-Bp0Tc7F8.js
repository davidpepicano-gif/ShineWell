import { jsxDEV } from "react/jsx-dev-runtime";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Sparkles, Home, ArrowRight, ClipboardCopy } from "lucide-react";
function NotFoundPage() {
  return /* @__PURE__ */ jsxDEV("div", { id: "notfound-page", className: "pt-32 pb-24 bg-[#F9F8F6] min-h-screen flex flex-col justify-center items-center px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-md w-full text-center", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6 },
        className: "relative inline-block mb-6",
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-24 bg-[#EBE9E3] rounded-full flex items-center justify-center mx-auto text-[#607564]", children: /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-12 h-12" }, void 0, false, {
            fileName: "/app/applet/src/pages/NotFoundPage.tsx",
            lineNumber: 17,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/NotFoundPage.tsx",
            lineNumber: 16,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "absolute -top-1 -right-1 bg-[#C86B53] text-white font-serif text-xs px-2 py-1 rounded-full shadow-sm", children: "404" }, void 0, false, {
            fileName: "/app/applet/src/pages/NotFoundPage.tsx",
            lineNumber: 19,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/NotFoundPage.tsx",
        lineNumber: 10,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.1 },
        className: "space-y-4",
        children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl md:text-4xl font-serif text-[#2C302E] leading-tight", children: "This Page Swept Away" }, void 0, false, {
            fileName: "/app/applet/src/pages/NotFoundPage.tsx",
            lineNumber: 31,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-base text-[#5c635f] font-light leading-relaxed", children: "The page you are looking for might have been moved, renamed, or is temporarily unavailable. If you were looking for our company story, it has been moved to our **About** page." }, void 0, false, {
            fileName: "/app/applet/src/pages/NotFoundPage.tsx",
            lineNumber: 34,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/NotFoundPage.tsx",
        lineNumber: 25,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.2 },
        className: "mt-10 space-y-3",
        children: [
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/",
              className: "flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-[#607564] text-white font-medium hover:bg-[#4A5D4E] transition-colors shadow-sm",
              children: [
                /* @__PURE__ */ jsxDEV(Home, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/applet/src/pages/NotFoundPage.tsx",
                  lineNumber: 50,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "Return Home" }, void 0, false, {
                  fileName: "/app/applet/src/pages/NotFoundPage.tsx",
                  lineNumber: 51,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/pages/NotFoundPage.tsx",
              lineNumber: 46,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: "/services",
                className: "flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#CAD4CD] text-[#2C302E] font-medium hover:bg-[#EBE9E3] transition-colors",
                children: [
                  /* @__PURE__ */ jsxDEV("span", { children: "Our Services" }, void 0, false, {
                    fileName: "/app/applet/src/pages/NotFoundPage.tsx",
                    lineNumber: 59,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/app/applet/src/pages/NotFoundPage.tsx",
                    lineNumber: 60,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/pages/NotFoundPage.tsx",
                lineNumber: 55,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: "/booking",
                className: "flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#CAD4CD] text-[#2C302E] font-medium hover:bg-[#EBE9E3] transition-colors",
                children: [
                  /* @__PURE__ */ jsxDEV("span", { children: "Free Estimate" }, void 0, false, {
                    fileName: "/app/applet/src/pages/NotFoundPage.tsx",
                    lineNumber: 67,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ jsxDEV(ClipboardCopy, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/app/applet/src/pages/NotFoundPage.tsx",
                    lineNumber: 68,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/pages/NotFoundPage.tsx",
                lineNumber: 63,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/NotFoundPage.tsx",
            lineNumber: 54,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/NotFoundPage.tsx",
        lineNumber: 40,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("p", { className: "mt-12 text-xs text-[#8c9490] font-light", children: [
      "Need immediate help? Give Lina a call at",
      " ",
      /* @__PURE__ */ jsxDEV("a", { href: "tel:9133251400", className: "underline hover:text-[#2C302E]", children: "(913) 325-1400" }, void 0, false, {
        fileName: "/app/applet/src/pages/NotFoundPage.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/NotFoundPage.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/NotFoundPage.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/NotFoundPage.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
export {
  NotFoundPage as default
};
