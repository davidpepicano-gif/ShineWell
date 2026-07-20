import { jsxDEV } from "react/jsx-dev-runtime";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Star, Heart, ArrowRight, ShieldCheck, UserCheck, CheckCircle } from "lucide-react";
const storyImg = "/assets/regenerated_image_1783363212830-C2t1xxDX.png";
function AboutPage() {
  const trustBadges = [
    {
      icon: /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-10 h-10 text-[#C86B53]" }, void 0, false, {
        fileName: "/app/applet/src/pages/AboutPage.tsx",
        lineNumber: 9,
        columnNumber: 13
      }, this),
      title: "$2M Insured & Bonded",
      desc: "We carry comprehensive $2 Million general liability and bonding protection to ensure absolute security and peace of mind for your home or business."
    },
    {
      icon: /* @__PURE__ */ jsxDEV(UserCheck, { className: "w-10 h-10 text-[#C86B53]" }, void 0, false, {
        fileName: "/app/applet/src/pages/AboutPage.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      title: "100% Vetted & Background-Checked",
      desc: "Every member of our crew undergoes strict background checks, thorough vetting, and personal training under Lina's family standards."
    },
    {
      icon: /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-10 h-10 text-[#C86B53]" }, void 0, false, {
        fileName: "/app/applet/src/pages/AboutPage.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this),
      title: "Satisfaction Guarantee",
      desc: "If any corner is overlooked, notify us within 24 hours. We will return immediately to re-clean the area to perfection, completely free of charge."
    }
  ];
  const testimonials = [
    {
      name: "Jessica Gilmore",
      role: "Homeowner",
      text: "ShineWell cleaning did an amazing job deep cleaning my home. I am a busy working mother of 3. I would recommend their work! My house is sparkling clean! I will be using them going forward.",
      response: "So great to meet you Jessica. We are so grateful to be able to help you not worry about cleaning your home. Our job is to clean and refresh your home so that you can be Mom to your kids."
    },
    {
      name: "David Swaters",
      role: "Commercial Client",
      text: "ShineWell Commercial Cleaning Services were top notch ! On time, service and professionalism are second to none! They go out of their way to make sure everything is done right ! Came early and stayed late to get the job done. I couldn't be happier. Thanks",
      response: "Thank you David! We were happy to help you cleaning your property! We appreciate you calling on ShineWell for your cleaning needs!"
    },
    {
      name: "Ariana Goodridge",
      role: "Homeowner",
      text: "I was going on vacation and wanted my house cleaned last minute. They came right out the next day and did absolutely amazing!! My house smelled and looked amazing I will definitely be using their service again!! They cleaned every single detail.",
      response: "Thank you for choosing ShineWell to serve you! We enjoyed meeting you and we were so happy to get your home cleaned so you can come home to a clean and refreshed space."
    },
    {
      name: "Robin Albin",
      role: "Home Seller",
      text: "I had ShineWell clean our empty house for the new buyers. They did a fantastic job! They worked so hard to make sure it was spotless. I highly recommend them!",
      response: "We love helping during move transitions! Best of luck to you and the new homeowners."
    }
  ];
  return /* @__PURE__ */ jsxDEV("div", { id: "about-page", className: "pt-24 pb-16 bg-[#F9F8F6] min-h-screen", children: /* @__PURE__ */ jsxDEV("div", { id: "about-container", className: "max-w-6xl mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        id: "about-header",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-[#607564] uppercase tracking-widest text-sm font-semibold mb-2 block", children: "Our Story" }, void 0, false, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 64,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { id: "about-story-title", className: "text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] leading-tight mb-4", children: "The Family Story Behind ShineWell" }, void 0, false, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl italic text-[#5c635f] font-light max-w-2xl mx-auto leading-relaxed mb-6", children: "Combining Over 20 Years of Meticulous Professional Expertise with Brazilian Warmth" }, void 0, false, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 68,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 md:p-8 rounded-[2rem] border border-[#e8e5df] max-w-3xl mx-auto text-center shadow-sm", children: /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-[#2C302E] leading-relaxed font-light", children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "ShineWell" }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 73,
              columnNumber: 15
            }, this),
            " is a fully insured, local family-owned cleaning business founded by Lina. Over 20 years of dedicated service in Overland Park and the greater Kansas City metropolitan area, we have built a reputation for perfectionism, client trust, and honest care."
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 71,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-[1px] bg-[#607564] mx-auto mt-8" }, void 0, false, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 76,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/AboutPage.tsx",
        lineNumber: 57,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-12 gap-12 items-center mb-20", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, x: -25 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8, delay: 0.2 },
          className: "lg:col-span-7 space-y-6 text-base md:text-lg text-[#5c635f] font-light leading-relaxed",
          children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl md:text-3xl font-serif text-[#2C302E] border-b border-[#e8e5df] pb-3", children: "How did Brazilian heritage and professional nursing shape our standards?" }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 87,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "In 2001, Lina achieved something she had worked toward for years: she graduated as a professional nurse. Nursing was a calling built around extreme precision, sanitation, and compassionate patient care. When Lina's son was born in 2003, followed shortly after by her daughter, she sought a path that would allow her to remain fully present for her family's daily childhood milestones while continuing to serve others." }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 90,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Drawing on the deep cultural warmth of her Brazilian heritage—where the neatness of a home is a beautiful expression of respect and active care (",
              /* @__PURE__ */ jsxDEV("em", { children: "cuidado" }, void 0, false, {
                fileName: "/app/applet/src/pages/AboutPage.tsx",
                lineNumber: 94,
                columnNumber: 160
              }, this),
              ")—Lina recognized that professional cleaning is a profound form of daily restorative service. She founded ShineWell with a commitment to clinical-level sanitization, honest family work ethics, and meticulously polished living environments."
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 93,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Today, with ",
              /* @__PURE__ */ jsxDEV("strong", { children: "over 20 years of hands-on expertise" }, void 0, false, {
                fileName: "/app/applet/src/pages/AboutPage.tsx",
                lineNumber: 97,
                columnNumber: 27
              }, this),
              ", ShineWell has grown from a personal project helping immediate neighbors in Overland Park into the area's most reliable premium cleaning team. We remain entirely local, family-owned, and devoted to the same fundamental values of trust, reliability, and precision detail."
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 96,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/AboutPage.tsx",
          lineNumber: 81,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.8, delay: 0.3 },
          className: "lg:col-span-5",
          children: [
            /* @__PURE__ */ jsxDEV("div", { id: "about-image-wrapper", className: "aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500 bg-[#e8e5df] border-4 border-white", children: /* @__PURE__ */ jsxDEV(
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
                lineNumber: 108,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 107,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-center text-xs font-mono text-[#607564] mt-4 uppercase tracking-widest", children: "Founder Lina & the ShineWell Family" }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 116,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/pages/AboutPage.tsx",
          lineNumber: 101,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/AboutPage.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-[2.5rem] border border-[#e8e5df] p-8 md:p-12 mb-20 shadow-sm", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-[#C86B53] uppercase tracking-widest text-xs font-mono font-bold block mb-2", children: "Our Guarantees" }, void 0, false, {
          fileName: "/app/applet/src/pages/AboutPage.tsx",
          lineNumber: 125,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-serif text-[#2C302E]", children: "What trust signals protect your ShineWell cleaning service?" }, void 0, false, {
          fileName: "/app/applet/src/pages/AboutPage.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-1 bg-[#CAD4CD] mx-auto rounded-full mt-4" }, void 0, false, {
          fileName: "/app/applet/src/pages/AboutPage.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/AboutPage.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-8", children: trustBadges.map((badge, idx) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: idx * 0.1 },
          className: "bg-[#F9F8F6] p-6 md:p-8 rounded-2xl border border-[#e8e5df] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "mb-4 bg-white p-4 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300", children: badge.icon }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 140,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg md:text-xl font-serif text-[#2C302E] mb-3", children: badge.title }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 143,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm md:text-base text-[#5c635f] font-light leading-relaxed", children: badge.desc }, void 0, false, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 144,
              columnNumber: 17
            }, this)
          ]
        },
        badge.title,
        true,
        {
          fileName: "/app/applet/src/pages/AboutPage.tsx",
          lineNumber: 132,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/AboutPage.tsx",
        lineNumber: 130,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/AboutPage.tsx",
      lineNumber: 123,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-[#607564] uppercase tracking-widest text-xs font-mono font-bold block mb-2", children: "Google Reviews" }, void 0, false, {
          fileName: "/app/applet/src/pages/AboutPage.tsx",
          lineNumber: 153,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-serif text-[#2C302E]", children: "What real Overland Park and Kansas City clients say about our service?" }, void 0, false, {
          fileName: "/app/applet/src/pages/AboutPage.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-1 bg-[#CAD4CD] mx-auto rounded-full mt-4" }, void 0, false, {
          fileName: "/app/applet/src/pages/AboutPage.tsx",
          lineNumber: 155,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/AboutPage.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 lg:gap-10", children: testimonials.map((test, idx) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: idx * 0.1 },
          className: "bg-white p-8 rounded-3xl border border-[#e8e5df] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300",
          children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1 mb-4 text-[#FBBC05]", children: [
                [...Array(5)].map((_, i) => /* @__PURE__ */ jsxDEV(Star, { className: "w-5 h-5 fill-current" }, i, false, {
                  fileName: "/app/applet/src/pages/AboutPage.tsx",
                  lineNumber: 171,
                  columnNumber: 23
                }, this)),
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-mono font-medium text-[#2C302E] ml-2", children: "5.0 Star Rated" }, void 0, false, {
                  fileName: "/app/applet/src/pages/AboutPage.tsx",
                  lineNumber: 173,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/AboutPage.tsx",
                lineNumber: 169,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg text-[#2C302E] font-light italic leading-relaxed mb-6", children: [
                '"',
                test.text,
                '"'
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/AboutPage.tsx",
                lineNumber: 175,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 168,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "border-t border-[#f0ede6] pt-4 mt-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 bg-[#607564] rounded-full flex items-center justify-center text-white font-serif text-lg", children: test.name.charAt(0) }, void 0, false, {
                  fileName: "/app/applet/src/pages/AboutPage.tsx",
                  lineNumber: 182,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-[#2C302E]", children: test.name }, void 0, false, {
                    fileName: "/app/applet/src/pages/AboutPage.tsx",
                    lineNumber: 186,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-[#607564] font-mono", children: [
                    test.role,
                    " • Google Review"
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/pages/AboutPage.tsx",
                    lineNumber: 187,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/AboutPage.tsx",
                  lineNumber: 185,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/AboutPage.tsx",
                lineNumber: 181,
                columnNumber: 19
              }, this),
              test.response && /* @__PURE__ */ jsxDEV("div", { className: "mt-4 bg-[#F9F8F6] p-4 rounded-xl text-xs md:text-sm text-[#5c635f] border-l-2 border-[#C86B53]", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-[#2C302E] block mb-1", children: "Response from Owner Lina:" }, void 0, false, {
                  fileName: "/app/applet/src/pages/AboutPage.tsx",
                  lineNumber: 192,
                  columnNumber: 23
                }, this),
                '"',
                test.response,
                '"'
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/AboutPage.tsx",
                lineNumber: 191,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/AboutPage.tsx",
              lineNumber: 180,
              columnNumber: 17
            }, this)
          ]
        },
        test.name,
        true,
        {
          fileName: "/app/applet/src/pages/AboutPage.tsx",
          lineNumber: 160,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/AboutPage.tsx",
        lineNumber: 158,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/AboutPage.tsx",
      lineNumber: 151,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-[#f0ede6] border border-[#e8e5df] rounded-2xl p-8 text-center space-y-4 max-w-2xl mx-auto shadow-sm", children: [
      /* @__PURE__ */ jsxDEV(Heart, { className: "w-6 h-6 text-[#C86B53] mx-auto animate-pulse" }, void 0, false, {
        fileName: "/app/applet/src/pages/AboutPage.tsx",
        lineNumber: 204,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-serif text-[#2C302E]", children: "ShineWell Commercial and Home Cleaning Services" }, void 0, false, {
        fileName: "/app/applet/src/pages/AboutPage.tsx",
        lineNumber: 205,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-[#607564] font-medium tracking-wide text-sm font-mono", children: "EST. 2004 • OVERLAND PARK & GREATER KC METRO" }, void 0, false, {
        fileName: "/app/applet/src/pages/AboutPage.tsx",
        lineNumber: 206,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "italic text-[#5c635f] text-base md:text-lg", children: '"We treat your property as our own, protecting what matters most to you with background-checked crews and eco-friendly standards."' }, void 0, false, {
        fileName: "/app/applet/src/pages/AboutPage.tsx",
        lineNumber: 207,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/AboutPage.tsx",
      lineNumber: 203,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { id: "about-cta-container", className: "text-center pt-10", children: /* @__PURE__ */ jsxDEV(
      Link,
      {
        id: "about-booking-link",
        to: "/booking",
        className: "inline-flex items-center gap-2 bg-[#C86B53] hover:bg-[#b55e47] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:-translate-y-1",
        children: [
          "Get a Free Estimate",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
            fileName: "/app/applet/src/pages/AboutPage.tsx",
            lineNumber: 220,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/AboutPage.tsx",
        lineNumber: 214,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/pages/AboutPage.tsx",
      lineNumber: 213,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/AboutPage.tsx",
    lineNumber: 54,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/AboutPage.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
export {
  AboutPage as default
};
