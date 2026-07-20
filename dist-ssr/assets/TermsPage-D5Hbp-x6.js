import { jsxDEV } from "react/jsx-dev-runtime";
import { motion } from "motion/react";
import { ArrowLeft, Scale, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
function TermsPage() {
  return /* @__PURE__ */ jsxDEV("div", { id: "terms-page", className: "pt-24 pb-16 bg-[#F9F8F6] min-h-screen", children: /* @__PURE__ */ jsxDEV("div", { id: "terms-container", className: "max-w-4xl mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "mb-8", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "inline-flex items-center gap-2 text-[#607564] hover:text-[#2C302E] font-medium transition-colors", children: [
      /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-4 h-4" }, void 0, false, {
        fileName: "/app/applet/src/pages/TermsPage.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      "Back to Home"
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/TermsPage.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/TermsPage.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        id: "terms-header",
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "mb-12 border-b border-[#e8e5df] pb-8",
        children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-[#607564] uppercase tracking-widest text-xs font-mono font-bold block mb-2", children: "Legal Terms" }, void 0, false, {
            fileName: "/app/applet/src/pages/TermsPage.tsx",
            lineNumber: 26,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-serif text-[#2C302E] leading-tight mb-4", children: "Terms of Service" }, void 0, false, {
            fileName: "/app/applet/src/pages/TermsPage.tsx",
            lineNumber: 27,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light", children: "Last Updated: July 1, 2026 • ShineWell Commercial and Home Cleaning Services" }, void 0, false, {
            fileName: "/app/applet/src/pages/TermsPage.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/TermsPage.tsx",
        lineNumber: 19,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, delay: 0.1 },
        className: "space-y-8 text-[#2C302E] font-light leading-relaxed text-base md:text-lg",
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-2xl border border-[#e8e5df] shadow-sm flex items-start gap-4 mb-8", children: [
            /* @__PURE__ */ jsxDEV(Scale, { className: "w-10 h-10 text-[#C86B53] shrink-0 mt-1" }, void 0, false, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 43,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-serif font-semibold mb-1", children: "Agreement of Service" }, void 0, false, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 45,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-[#5c635f] leading-normal", children: "By booking, scheduling, or receiving commercial or residential cleaning services from ShineWell, you agree to comply with and be bound by the following comprehensive terms." }, void 0, false, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 46,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 44,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/TermsPage.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif font-medium text-[#2C302E]", children: "1. Scope of Services" }, void 0, false, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 53,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f]", children: "ShineWell agrees to perform the specific cleaning service package selected by the client during online booking or defined in a custom estimate (e.g., Routine Housekeeping, Deep Home Cleaning, Move-In/Move-Out, Light Commercial, or Specialized Treatments). Any add-on tasks (such as deep cleaning inside oven/refrigerator, organizing, or trash hauling) must be requested in advance and may incur additional charges." }, void 0, false, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 54,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/TermsPage.tsx",
            lineNumber: 52,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif font-medium text-[#2C302E]", children: "2. Estimation & Pricing Policies" }, void 0, false, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 60,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f]", children: "Online and verbal estimates are initial approximations based on typical service times and standard client-described property sizes/conditions:" }, void 0, false, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 61,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base", children: [
              /* @__PURE__ */ jsxDEV("li", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "Condition Adjustments" }, void 0, false, {
                  fileName: "/app/applet/src/pages/TermsPage.tsx",
                  lineNumber: 65,
                  columnNumber: 19
                }, this),
                ": If our crew arrives and finds extreme clutter, extra heavy soil, debris, or pet conditions beyond the scope of a standard clean, we will contact you immediately to adjust the estimated hours and service price before beginning."
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 65,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "Initial Cleans" }, void 0, false, {
                  fileName: "/app/applet/src/pages/TermsPage.tsx",
                  lineNumber: 66,
                  columnNumber: 19
                }, this),
                ": First-time visits or homes that have not been professionally cleaned in over 30 days require a Deep Clean rate to restore the home to a baseline level before routine maintenance pricing can apply."
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 66,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 64,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/TermsPage.tsx",
            lineNumber: 59,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif font-medium text-[#2C302E]", children: "3. Scheduling & Cancellation Policy" }, void 0, false, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 71,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f]", children: "To maintain reliable schedules for our background-checked crews and maintain our high standards of service:" }, void 0, false, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 72,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base", children: [
              /* @__PURE__ */ jsxDEV("li", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "24-Hour Notice" }, void 0, false, {
                  fileName: "/app/applet/src/pages/TermsPage.tsx",
                  lineNumber: 76,
                  columnNumber: 19
                }, this),
                ": We require at least ",
                /* @__PURE__ */ jsxDEV("strong", { children: "24 hours' notice" }, void 0, false, {
                  fileName: "/app/applet/src/pages/TermsPage.tsx",
                  lineNumber: 76,
                  columnNumber: 72
                }, this),
                " for any cancellations or schedule modifications."
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 76,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "Late Fee" }, void 0, false, {
                  fileName: "/app/applet/src/pages/TermsPage.tsx",
                  lineNumber: 77,
                  columnNumber: 19
                }, this),
                ": Cancellations or schedule changes made with less than 24 hours' notice, or lockout instances (where our crew arrives but cannot gain entry to the property), are subject to a late fee to offset crew transit and scheduling loss."
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 77,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "Key & Access" }, void 0, false, {
                  fileName: "/app/applet/src/pages/TermsPage.tsx",
                  lineNumber: 78,
                  columnNumber: 19
                }, this),
                ": Clients must provide reliable access details (key, smart-lock code, garage entry, or being physically present). All keys held by ShineWell are kept in secure safe storage when not in use."
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 78,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 75,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/TermsPage.tsx",
            lineNumber: 70,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif font-medium text-[#2C302E]", children: "4. Satisfaction Guarantee" }, void 0, false, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 83,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f]", children: "We stand firmly behind the excellence of our cleaning. If you are ever unsatisfied with any portion of your service:" }, void 0, false, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 84,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base", children: [
              /* @__PURE__ */ jsxDEV("li", { children: [
                "You must notify us within ",
                /* @__PURE__ */ jsxDEV("strong", { children: "24 hours" }, void 0, false, {
                  fileName: "/app/applet/src/pages/TermsPage.tsx",
                  lineNumber: 88,
                  columnNumber: 45
                }, this),
                " of service completion."
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 88,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: [
                "Our team will return to re-clean the specific missed area to your full satisfaction at ",
                /* @__PURE__ */ jsxDEV("strong", { children: "no extra cost" }, void 0, false, {
                  fileName: "/app/applet/src/pages/TermsPage.tsx",
                  lineNumber: 89,
                  columnNumber: 106
                }, this),
                "."
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 89,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "Because we are fully committed to correcting any errors, we do not issue monetary refunds or credits." }, void 0, false, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 90,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 87,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/TermsPage.tsx",
            lineNumber: 82,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif font-medium text-[#2C302E]", children: "5. Liability & Damage Protection" }, void 0, false, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 95,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f]", children: [
              "ShineWell is fully ",
              /* @__PURE__ */ jsxDEV("strong", { children: "bonded and carries a $2,000,000 General Liability insurance policy" }, void 0, false, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 97,
                columnNumber: 34
              }, this),
              " to defend your assets."
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 96,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base", children: [
              /* @__PURE__ */ jsxDEV("li", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "Report Window" }, void 0, false, {
                  fileName: "/app/applet/src/pages/TermsPage.tsx",
                  lineNumber: 100,
                  columnNumber: 19
                }, this),
                ": Any physical property damage caused by our crew must be reported in writing within 24 hours of the cleaning session."
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 100,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "Limitations of Liability" }, void 0, false, {
                  fileName: "/app/applet/src/pages/TermsPage.tsx",
                  lineNumber: 101,
                  columnNumber: 19
                }, this),
                ": We do not accept liability for damage to unstable, improperly mounted, or fragile items (such as unsecured shelving, loose plaster, or extremely delicate antiques/heirlooms) unless specifically warned in writing before the clean. We recommend moving irreplaceable items to safe storage during cleaning."
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 101,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 99,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/TermsPage.tsx",
            lineNumber: 94,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif font-medium text-[#2C302E]", children: "6. Payment Terms" }, void 0, false, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 106,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f]", children: "Payments are processed securely online via Stripe:" }, void 0, false, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 107,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base", children: [
              /* @__PURE__ */ jsxDEV("li", { children: "Payment is due immediately upon receipt of invoice, or on the day of service for scheduled recurring visits." }, void 0, false, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 111,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "A pre-authorization or deposit may be required to secure bookings for deep cleans, move-out cleans, or post-construction detailing." }, void 0, false, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 112,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 110,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/TermsPage.tsx",
            lineNumber: 105,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "bg-white p-8 rounded-3xl border border-[#e8e5df] space-y-4", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif font-medium text-[#2C302E]", children: "Need clarification on our terms?" }, void 0, false, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 117,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] text-sm md:text-base", children: "Please reach out directly. We are happy to clarify any item or adjust our instructions to match your comfort:" }, void 0, false, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 118,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-4 pt-2 text-sm", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDEV(Mail, { className: "w-5 h-5 text-[#C86B53]" }, void 0, false, {
                  fileName: "/app/applet/src/pages/TermsPage.tsx",
                  lineNumber: 123,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("a", { href: "mailto:lina.swcleaning@gmail.com", className: "hover:underline text-[#2C302E]", children: "lina.swcleaning@gmail.com" }, void 0, false, {
                  fileName: "/app/applet/src/pages/TermsPage.tsx",
                  lineNumber: 124,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 122,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 text-[#C86B53]" }, void 0, false, {
                  fileName: "/app/applet/src/pages/TermsPage.tsx",
                  lineNumber: 127,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("a", { href: "tel:9133251400", className: "hover:underline text-[#2C302E]", children: "(913) 325-1400" }, void 0, false, {
                  fileName: "/app/applet/src/pages/TermsPage.tsx",
                  lineNumber: 128,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 126,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 sm:col-span-2", children: [
                /* @__PURE__ */ jsxDEV(MapPin, { className: "w-5 h-5 text-[#C86B53]" }, void 0, false, {
                  fileName: "/app/applet/src/pages/TermsPage.tsx",
                  lineNumber: 131,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-[#5c635f]", children: "Overland Park, KS & Greater Kansas City Metro" }, void 0, false, {
                  fileName: "/app/applet/src/pages/TermsPage.tsx",
                  lineNumber: 132,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/TermsPage.tsx",
                lineNumber: 130,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/TermsPage.tsx",
              lineNumber: 121,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/TermsPage.tsx",
            lineNumber: 116,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/TermsPage.tsx",
        lineNumber: 36,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/TermsPage.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/TermsPage.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
export {
  TermsPage as default
};
