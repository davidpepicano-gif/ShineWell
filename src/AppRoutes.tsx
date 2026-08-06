import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Code-split routes for maximum performance
const Home = lazy(() => import('./pages/Home'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const CommercialCleaningKansasCity = lazy(() => import('./pages/CommercialCleaningKansasCity'));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const LocationsPage = lazy(() => import('./pages/LocationsPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));

const PageLoader = () => (
  <div className="min-h-screen bg-[#F9F8F6] flex flex-col justify-center items-center gap-4 pt-24" id="page-loader">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#CAD4CD]"></div>
    <p className="text-[#5c635f] text-sm font-serif">Loading page...</p>
  </div>
);

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServicePage />} />
            <Route path="/commercial-cleaning-kansas-city" element={<CommercialCleaningKansasCity />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<BlogPostPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}
