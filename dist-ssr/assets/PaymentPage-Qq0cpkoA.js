import { jsxDEV } from "react/jsx-dev-runtime";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
let stripePromise = null;
const getStripe = () => {
  if (typeof window === "undefined" || typeof document === "undefined" || !document.body) {
    return null;
  }
  if (!stripePromise) {
    stripePromise = loadStripe("10");
  }
  return stripePromise;
};
function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent == null ? void 0 : paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: window.location.origin + "/payment"
      }
    });
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message || "An error occurred");
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsLoading(false);
  };
  const paymentElementOptions = {
    layout: "tabs"
  };
  return /* @__PURE__ */ jsxDEV("form", { id: "payment-form", onSubmit: handleSubmit, className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsxDEV(PaymentElement, { id: "payment-element", options: paymentElementOptions }, void 0, false, {
      fileName: "/app/applet/src/pages/PaymentPage.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        disabled: isLoading || !stripe || !elements,
        id: "submit",
        className: "w-full bg-[#C86B53] hover:bg-[#b55e47] text-white px-6 py-4 rounded-xl font-medium text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4",
        children: /* @__PURE__ */ jsxDEV("span", { id: "button-text", children: isLoading ? /* @__PURE__ */ jsxDEV("div", { className: "spinner", id: "spinner", children: "Processing..." }, void 0, false, {
          fileName: "/app/applet/src/pages/PaymentPage.tsx",
          lineNumber: 105,
          columnNumber: 24
        }, this) : "Pay $150.00" }, void 0, false, {
          fileName: "/app/applet/src/pages/PaymentPage.tsx",
          lineNumber: 104,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/pages/PaymentPage.tsx",
        lineNumber: 99,
        columnNumber: 7
      },
      this
    ),
    message && /* @__PURE__ */ jsxDEV("div", { id: "payment-message", className: "text-sm text-center text-[#2C302E] mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200", children: message }, void 0, false, {
      fileName: "/app/applet/src/pages/PaymentPage.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/PaymentPage.tsx",
    lineNumber: 97,
    columnNumber: 5
  }, this);
}
function PaymentPage() {
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    const redirectStatus = new URLSearchParams(window.location.search).get(
      "redirect_status"
    );
    if (redirectStatus === "succeeded") {
      setIsSuccess(true);
      return;
    }
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 15e3 })
      // Example amount: $150.00
    }).then((res) => res.json()).then((data) => {
      if (data.error) {
        setError(data.error.message || "Failed to initialize payment");
      } else {
        setClientSecret(data.clientSecret);
      }
    }).catch((err) => {
      setError("Could not connect to payment server. Please ensure STRIPE_SECRET_KEY is set.");
    });
  }, []);
  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#CAD4CD",
      colorBackground: "#ffffff",
      colorText: "#2C302E",
      colorDanger: "#C86B53",
      fontFamily: "Inter, system-ui, sans-serif",
      spacingUnit: "4px",
      borderRadius: "8px"
    }
  };
  const options = {
    clientSecret,
    appearance
  };
  if (isSuccess) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-[#F9F8F6] pt-24 pb-14 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        className: "bg-white p-12 rounded-3xl shadow-sm border border-[#e8e5df] max-w-lg w-full text-center",
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-20 h-20 bg-[#CAD4CD]/10 rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-10 h-10 text-[#CAD4CD]" }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 181,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 180,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl font-serif text-[#2C302E] mb-4", children: "Payment Successful!" }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 183,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] mb-8", children: "Thank you for choosing ShineWell. Your booking is confirmed and we'll be in touch shortly." }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 184,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "/",
              className: "inline-block bg-[#CAD4CD] hover:bg-[#B8C5BD] text-white px-8 py-3 rounded-full font-medium transition-colors",
              children: "Return Home"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/pages/PaymentPage.tsx",
              lineNumber: 187,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/pages/PaymentPage.tsx",
        lineNumber: 175,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/pages/PaymentPage.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-[#F9F8F6] pt-24 pb-14", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-xl mx-auto px-6", children: /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      className: "bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#e8e5df]",
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-6", children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl md:text-4xl font-serif text-[#2C302E] mb-4", children: "Complete Your Booking" }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 207,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f]", children: "Secure payment for your ShineWell cleaning service." }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 208,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/PaymentPage.tsx",
          lineNumber: 206,
          columnNumber: 11
        }, this),
        error ? /* @__PURE__ */ jsxDEV("div", { className: "bg-red-50 text-red-600 p-6 rounded-xl text-center border border-red-100", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "font-medium mb-2", children: error }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 213,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm opacity-80", children: "Note: This requires a valid Stripe Secret Key in the environment variables. Please add it via the Secrets menu." }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 214,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/PaymentPage.tsx",
          lineNumber: 212,
          columnNumber: 13
        }, this) : clientSecret ? /* @__PURE__ */ jsxDEV(Elements, { options, stripe: getStripe(), children: /* @__PURE__ */ jsxDEV(CheckoutForm, {}, void 0, false, {
          fileName: "/app/applet/src/pages/PaymentPage.tsx",
          lineNumber: 218,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/pages/PaymentPage.tsx",
          lineNumber: 217,
          columnNumber: 13
        }, this) : /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col justify-center items-center py-12 gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-[#CAD4CD]" }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 222,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[#5c635f] text-sm", children: "Initializing secure payment..." }, void 0, false, {
            fileName: "/app/applet/src/pages/PaymentPage.tsx",
            lineNumber: 223,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/PaymentPage.tsx",
          lineNumber: 221,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/pages/PaymentPage.tsx",
      lineNumber: 201,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "/app/applet/src/pages/PaymentPage.tsx",
    lineNumber: 200,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/PaymentPage.tsx",
    lineNumber: 199,
    columnNumber: 5
  }, this);
}
export {
  PaymentPage as default
};
