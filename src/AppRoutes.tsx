import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Eager load Home since it's the landing page (LCP target)
import Home from './pages/Home';

// Lazy load all secondary pages
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

// Clean loading placeholder for Suspense
function PageLoader() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-[#607564] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

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
