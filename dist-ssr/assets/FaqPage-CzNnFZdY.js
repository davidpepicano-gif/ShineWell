import { jsxDEV } from "react/jsx-dev-runtime";
import { motion } from "motion/react";
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
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-medium text-[#2C302E] mb-4", children: faq.q }, void 0, false, {
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
export {
  FaqPage as default
};
