import { jsxDEV } from "react/jsx-dev-runtime";
import { motion } from "motion/react";
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
function PrivacyPage() {
  return /* @__PURE__ */ jsxDEV("div", { id: "privacy-page", className: "pt-24 pb-16 bg-[#F9F8F6] min-h-screen", children: /* @__PURE__ */ jsxDEV("div", { id: "privacy-container", className: "max-w-4xl mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "mb-8", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "inline-flex items-center gap-2 text-[#607564] hover:text-[#2C302E] font-medium transition-colors", children: [
      /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-4 h-4" }, void 0, false, {
        fileName: "/app/applet/src/pages/PrivacyPage.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      "Back to Home"
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/PrivacyPage.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/PrivacyPage.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        id: "privacy-header",
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "mb-12 border-b border-[#e8e5df] pb-8",
        children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-[#607564] uppercase tracking-widest text-xs font-mono font-bold block mb-2", children: "Legal Information" }, void 0, false, {
            fileName: "/app/applet/src/pages/PrivacyPage.tsx",
            lineNumber: 26,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-serif text-[#2C302E] leading-tight mb-4", children: "Privacy Policy" }, void 0, false, {
            fileName: "/app/applet/src/pages/PrivacyPage.tsx",
            lineNumber: 27,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] font-light", children: "Last Updated: July 1, 2026 • ShineWell Commercial and Home Cleaning Services" }, void 0, false, {
            fileName: "/app/applet/src/pages/PrivacyPage.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/PrivacyPage.tsx",
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
            /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-10 h-10 text-[#C86B53] shrink-0 mt-1" }, void 0, false, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 43,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-serif font-semibold mb-1", children: "Your Privacy Matters" }, void 0, false, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 45,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-[#5c635f] leading-normal", children: "At ShineWell, trust is our primary asset. We treat your personal details, billing data, and home environment with the utmost confidentiality, discretion, and professional-level security." }, void 0, false, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 46,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 44,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/PrivacyPage.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif font-medium text-[#2C302E]", children: "1. Information We Collect" }, void 0, false, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 53,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f]", children: "We only collect information that is strictly necessary to estimate, schedule, invoice, and perform cleaning services for your home or business. This includes:" }, void 0, false, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 54,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base", children: [
              /* @__PURE__ */ jsxDEV("li", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "Contact Information" }, void 0, false, {
                  fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                  lineNumber: 58,
                  columnNumber: 19
                }, this),
                ": Your name, phone number, email address, and physical service address."
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 58,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "Property Details" }, void 0, false, {
                  fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                  lineNumber: 59,
                  columnNumber: 19
                }, this),
                ": Square footage, bedroom/bathroom counts, pet presence, and specific custom cleaning instructions."
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 59,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "Billing & Transaction Info" }, void 0, false, {
                  fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                  lineNumber: 60,
                  columnNumber: 19
                }, this),
                ": Credit card or banking details used to complete secure payments (processed entirely via PCI-compliant Stripe; we never store your full financial credentials locally)."
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 60,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "Usage Information" }, void 0, false, {
                  fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                  lineNumber: 61,
                  columnNumber: 19
                }, this),
                ": Browser details and standard website analytics gathered to optimize our website loading and experience."
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 61,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 57,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/PrivacyPage.tsx",
            lineNumber: 52,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif font-medium text-[#2C302E]", children: "2. How We Use Your Information" }, void 0, false, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 66,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f]", children: "We rely on your data to provide exceptional cleaning and client-relations management:" }, void 0, false, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 67,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base", children: [
              /* @__PURE__ */ jsxDEV("li", { children: "Providing highly accurate price quotes and custom estimates." }, void 0, false, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 71,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "Sending appointment confirmations, reminders, arrival notifications, and follow-up satisfaction surveys." }, void 0, false, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 72,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "Processing invoices, payments, and deposits." }, void 0, false, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 73,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "Tailoring our eco-friendly cleaning methods to match specific sensitivities or pet-safety constraints in your home." }, void 0, false, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 74,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "Complying with necessary legal records, insurance audits, and tax obligations." }, void 0, false, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 75,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 70,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/PrivacyPage.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif font-medium text-[#2C302E]", children: "3. Data Sharing & Third Parties" }, void 0, false, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 80,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f]", children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "We never sell, rent, lease, or trade your personal information" }, void 0, false, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 82,
                columnNumber: 15
              }, this),
              " with external marketing brokers or third parties. We share data only in the following restricted scenarios:"
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base", children: [
              /* @__PURE__ */ jsxDEV("li", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "Payment Processors" }, void 0, false, {
                  fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                  lineNumber: 85,
                  columnNumber: 19
                }, this),
                ": Your financial information is securely processed via Stripe."
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 85,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "Service Crews" }, void 0, false, {
                  fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                  lineNumber: 86,
                  columnNumber: 19
                }, this),
                ": Your cleaning team is provided only with the service address, property characteristics, and specific custom instructions necessary to perform the clean."
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 86,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "Legal Compliance" }, void 0, false, {
                  fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                  lineNumber: 87,
                  columnNumber: 19
                }, this),
                ": If required by law, subpoena, or to protect the safety and rights of ShineWell, our employees, or our clients."
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 87,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 84,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/PrivacyPage.tsx",
            lineNumber: 79,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif font-medium text-[#2C302E]", children: "4. Data Security" }, void 0, false, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 92,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f]", children: "We take information safety seriously. Our systems employ modern industry practices—including SSL encryption, secure API integrations, and tokenized payment networks—to defend your details. In the physical world, our trusted, background-checked crews are rigorously trained to respect client privacy, secure keys, and protect private physical documents in the home or office." }, void 0, false, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 93,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/PrivacyPage.tsx",
            lineNumber: 91,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif font-medium text-[#2C302E]", children: "5. Your Rights & Choices" }, void 0, false, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 99,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f]", children: "You hold complete control over your details:" }, void 0, false, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 100,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "list-disc pl-6 space-y-2 text-[#5c635f] text-sm md:text-base", children: [
              /* @__PURE__ */ jsxDEV("li", { children: 'You may opt-out of promotional emails at any time by clicking "unsubscribe" or emailing us directly.' }, void 0, false, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 104,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "You may request access to, correction of, or complete deletion of your personal client records, provided there are no active outstanding balances, open insurance claims, or legal holding requirements." }, void 0, false, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 105,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 103,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/PrivacyPage.tsx",
            lineNumber: 98,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "bg-white p-8 rounded-3xl border border-[#e8e5df] space-y-4", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl md:text-2xl font-serif font-medium text-[#2C302E]", children: "Contact Our Privacy Officer" }, void 0, false, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 110,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] text-sm md:text-base", children: "For questions regarding this Privacy Policy or to update your personal details, contact ShineWell directly:" }, void 0, false, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 111,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-4 pt-2 text-sm", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDEV(Mail, { className: "w-5 h-5 text-[#C86B53]" }, void 0, false, {
                  fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                  lineNumber: 116,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("a", { href: "mailto:lina.swcleaning@gmail.com", className: "hover:underline text-[#2C302E]", children: "lina.swcleaning@gmail.com" }, void 0, false, {
                  fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                  lineNumber: 117,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 115,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 text-[#C86B53]" }, void 0, false, {
                  fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                  lineNumber: 120,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("a", { href: "tel:9133251400", className: "hover:underline text-[#2C302E]", children: "(913) 325-1400" }, void 0, false, {
                  fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                  lineNumber: 121,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 119,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 sm:col-span-2", children: [
                /* @__PURE__ */ jsxDEV(MapPin, { className: "w-5 h-5 text-[#C86B53]" }, void 0, false, {
                  fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                  lineNumber: 124,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-[#5c635f]", children: "Overland Park, KS & Greater Kansas City Metro" }, void 0, false, {
                  fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                  lineNumber: 125,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/PrivacyPage.tsx",
                lineNumber: 123,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/PrivacyPage.tsx",
              lineNumber: 114,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/PrivacyPage.tsx",
            lineNumber: 109,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/PrivacyPage.tsx",
        lineNumber: 36,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/PrivacyPage.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/PrivacyPage.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
export {
  PrivacyPage as default
};
