import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
let stripePromise: Promise<any> | null = null;
const getStripe = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined' || !document.body) {
    return null;
  }
  if (!stripePromise) {
    stripePromise = loadStripe((import.meta as any).env?.VITE_STRIPE_PUBLISHABLE_KEY || "pk_test_TYooMQauvdEDq54NiTphI7jx");
  }
  return stripePromise;
};

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | null>(null);
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
      switch (paymentIntent?.status) {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: window.location.origin + "/payment",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message || "An error occurred");
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs" as const,
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="flex flex-col gap-6">
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button 
        disabled={isLoading || !stripe || !elements} 
        id="submit"
        className="w-full bg-[#C86B53] hover:bg-[#b55e47] text-white px-6 py-4 rounded-xl font-medium text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
      >
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner">Processing...</div> : "Pay $150.00"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && (
        <div id="payment-message" className="text-sm text-center text-[#2C302E] mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          {message}
        </div>
      )}
    </form>
  );
}

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const clientSecretFromUrl = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    const redirectStatus = new URLSearchParams(window.location.search).get(
      "redirect_status"
    );

    if (redirectStatus === "succeeded") {
      setIsSuccess(true);
      return;
    }

    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 15000 }), // Example amount: $150.00
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error.message || "Failed to initialize payment");
        } else {
          setClientSecret(data.clientSecret);
        }
      })
      .catch((err) => {
        setError("Could not connect to payment server. Please ensure STRIPE_SECRET_KEY is set.");
      });
  }, []);

  const appearance = {
    theme: 'stripe' as const,
    variables: {
      colorPrimary: '#CAD4CD',
      colorBackground: '#ffffff',
      colorText: '#2C302E',
      colorDanger: '#C86B53',
      fontFamily: 'Inter, system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '8px',
    }
  };
  const options = {
    clientSecret,
    appearance,
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#F9F8F6] pt-24 pb-14 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-sm border border-[#e8e5df] max-w-lg w-full text-center"
        >
          <div className="w-20 h-20 bg-[#CAD4CD]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#CAD4CD]" />
          </div>
          <h1 className="text-3xl font-serif text-[#2C302E] mb-4">Payment Successful!</h1>
          <p className="text-[#5c635f] mb-8">
            Thank you for choosing ShineWell. Your booking is confirmed and we'll be in touch shortly.
          </p>
          <a 
            href="/"
            className="inline-block bg-[#CAD4CD] hover:bg-[#B8C5BD] text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Return Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F8F6] pt-24 pb-14">
      <div className="max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#e8e5df]"
        >
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-serif text-[#2C302E] mb-4">Complete Your Booking</h1>
            <p className="text-[#5c635f]">Secure payment for your ShineWell cleaning service.</p>
          </div>

          {error ? (
            <div className="bg-red-50 text-red-600 p-6 rounded-xl text-center border border-red-100">
              <p className="font-medium mb-2">{error}</p>
              <p className="text-sm opacity-80">Note: This requires a valid Stripe Secret Key in the environment variables. Please add it via the Secrets menu.</p>
            </div>
          ) : clientSecret ? (
            <Elements options={options} stripe={getStripe()}>
              <CheckoutForm />
            </Elements>
          ) : (
            <div className="flex flex-col justify-center items-center py-12 gap-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#CAD4CD]"></div>
              <p className="text-[#5c635f] text-sm">Initializing secure payment...</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
