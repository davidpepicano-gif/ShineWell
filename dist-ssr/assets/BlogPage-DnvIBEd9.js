import { jsxDEV } from "react/jsx-dev-runtime";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { b as blogPosts } from "./blogPosts-5-yj0mFR.js";
import "./regenerated_image_1783364438283-B-EPbRp7.js";
import "./regenerated_image_1783362695919-CInR4yp8.js";
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
export {
  BlogPage as default
};
