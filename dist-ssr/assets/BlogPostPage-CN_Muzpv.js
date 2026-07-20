import { jsxDEV } from "react/jsx-dev-runtime";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { b as blogPosts } from "./blogPosts-5-yj0mFR.js";
import "./regenerated_image_1783364438283-B-EPbRp7.js";
import "./regenerated_image_1783362695919-CInR4yp8.js";
function BlogPostPage() {
  const { postId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (postId === "commercial-cleaning-kansas-city") {
      navigate("/commercial-cleaning-kansas-city", { replace: true });
    } else if (postId === "deep-cleaning-kansas-city") {
      navigate("/services/deep-dives", { replace: true });
    } else if (postId === "regular-house-cleaning-kansas-city") {
      navigate("/services/routine-housekeeping", { replace: true });
    }
  }, [postId, navigate]);
  const post = blogPosts.find((p) => p.id === postId);
  useEffect(() => {
    if (post) {
      const seoTitles = {
        "how-often-professional-house-cleaning-kansas-city": "How Often Should You Get Your House Cleaned? | KC Guide",
        "is-hiring-a-house-cleaning-service-worth-it": "Is Hiring a House Cleaning Service Worth It? (KC 2026)",
        "standard-clean-vs-deep-clean-difference": "Standard Clean vs. Deep Clean: What's the Difference?",
        "commercial-cleaning-kansas-city": "Why KC Businesses Are Rethinking Office Cleanliness",
        "regular-house-cleaning-kansas-city": "How Often Should You Get Your House Cleaned? | ShineWell",
        "deep-cleaning-kansas-city": "Standard vs. Deep Cleaning: Which One Does Your Home Need?",
        "office-cleaning-reception": "How Reception Cleanliness Boosts Client Trust | ShineWell Blog",
        "kansas-city-restoration-pros-recommendation": "Trusted Property Restoration in KC | ShineWell Recommends",
        "how-to-choose-commercial-cleaning-company-kansas-city": "How to Choose a Commercial Cleaning Company in KC",
        "how-to-keep-your-office-clean-and-healthy": "How Keep Your Office Clean and Healthy | KC Guide"
      };
      const metaDescriptions = {
        "how-often-professional-house-cleaning-kansas-city": "How often should you have your house professionally cleaned in Kansas City? Weekly, biweekly, or monthly — here's how to choose the right frequency.",
        "is-hiring-a-house-cleaning-service-worth-it": "Is a house cleaning service worth the money? Here's an honest look at the cost, time saved, and how to decide — for Kansas City homeowners.",
        "standard-clean-vs-deep-clean-difference": "Standard clean vs. deep clean — what's the difference, what's included in each, and which one you need? A simple guide for Kansas City homeowners.",
        "commercial-cleaning-kansas-city": "Learn why Kansas City business owners trust ShineWell for meticulous commercial cleaning that respects their space, team productivity, and professional image.",
        "regular-house-cleaning-kansas-city": "Determine the ideal recurring cleaning frequency for your Kansas City home. Weekly, biweekly, or monthly — choose the plan that fits your life.",
        "deep-cleaning-kansas-city": "Confused about whether to book a standard maintenance clean or a top-to-bottom deep clean? Here's an honest breakdown of what's included in each.",
        "office-cleaning-reception": "Expert advice on managing the physical first impression of your corporate lobby, reception desks, and waiting rooms to build immediate professional trust.",
        "kansas-city-restoration-pros-recommendation": "ShineWell Cleaning Services proudly recommends Jason and the team at Kansas City Restoration Pros for water, fire, mold, and storm damage restoration.",
        "how-to-choose-commercial-cleaning-company-kansas-city": "What to look for in a commercial cleaning company in Overland Park or KC: insurance, background checks, scope, and questions to ask before you sign.",
        "how-to-keep-your-office-clean-and-healthy": "How to keep your office clean and healthy for staff and clients: high-touch points, restroom and break-room routines, and how often to bring in pros."
      };
      document.title = seoTitles[post.id] || `${post.title} | ShineWell Blog`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", metaDescriptions[post.id] || post.excerpt);
      }
    }
  }, [post]);
  if (!post) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-[60vh] flex flex-col items-center justify-center pt-24 px-6", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl font-serif text-[#2C302E] mb-4", children: "Post Not Found" }, void 0, false, {
        fileName: "/app/applet/src/pages/BlogPostPage.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] mb-6", children: "We couldn't find the article you're looking for." }, void 0, false, {
        fileName: "/app/applet/src/pages/BlogPostPage.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/blog", className: "bg-[#C86B53] text-white px-6 py-3 rounded-full font-medium hover:bg-[#b55e47] transition-colors", children: "Return to Blog" }, void 0, false, {
        fileName: "/app/applet/src/pages/BlogPostPage.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/BlogPostPage.tsx",
      lineNumber: 63,
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
            lineNumber: 80,
            columnNumber: 11
          }, this),
          "Back to Blog"
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/BlogPostPage.tsx",
        lineNumber: 76,
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
                lineNumber: 90,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: post.date }, void 0, false, {
                fileName: "/app/applet/src/pages/BlogPostPage.tsx",
                lineNumber: 91,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/BlogPostPage.tsx",
              lineNumber: 89,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(User, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/applet/src/pages/BlogPostPage.tsx",
                lineNumber: 94,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: post.author }, void 0, false, {
                fileName: "/app/applet/src/pages/BlogPostPage.tsx",
                lineNumber: 95,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/BlogPostPage.tsx",
              lineNumber: 93,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/BlogPostPage.tsx",
            lineNumber: 88,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] mb-8 leading-tight", children: post.title }, void 0, false, {
            fileName: "/app/applet/src/pages/BlogPostPage.tsx",
            lineNumber: 99,
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
              lineNumber: 104,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "/app/applet/src/pages/BlogPostPage.tsx",
            lineNumber: 103,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "prose prose-lg prose-stone max-w-none text-justify", children: post.content }, void 0, false, {
            fileName: "/app/applet/src/pages/BlogPostPage.tsx",
            lineNumber: 112,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/BlogPostPage.tsx",
        lineNumber: 84,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/BlogPostPage.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/BlogPostPage.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
export {
  BlogPostPage as default
};
