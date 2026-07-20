import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/images/regenerated_image_1780271530148.png';
import LazyMap from './LazyMap';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  ChevronDown
} from 'lucide-react';

const services = [
  { name: 'Commercial Cleaning', path: '/commercial-cleaning-kansas-city' },
  { name: 'Routine House Cleaning', path: '/services/routine-housekeeping' },
  { name: 'Deep Cleaning', path: '/services/deep-dives' },
  { name: 'Move In / Move Out', path: '/services/move-in-move-out' },
  { name: 'Post Construction', path: '/services/post-construction' },
  { name: 'Hoarder House Clean Up', path: '/services/hoarder-cleanup' },
  { name: 'Organizing Service', path: '/services/organizing' },
  { name: 'Specialized Treatments', path: '/services/specialized-treatments' },
  { name: 'Junk Removal', path: '/services/junk-removal' },
];

const Logo = ({ className = "h-10 w-10" }: { className?: string }) => (
  <img 
    src={logoImg} 
    alt="ShineWell Logo" 
    className={`${className} object-cover aspect-square rounded-full shadow-md border border-[#e8e5df] bg-white hover:brightness-105 transition-all duration-300`}
    id="navbar-logo"
    referrerPolicy="no-referrer"
  />
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  // Lazy load GHL chat widget and Google Tag Manager (gtag)
  useEffect(() => {
    // 1. GHL Chat Widget lazy-loading
    let chatLoaded = false;
    const loadChatWidget = () => {
      if (chatLoaded) return;
      chatLoaded = true;

      chatEvents.forEach(e => window.removeEventListener(e, loadChatWidget));
      clearTimeout(chatTimer);

      // Create container if not exists
      if (!document.querySelector('[data-chat-widget]')) {
        const div = document.createElement('div');
        div.setAttribute('data-chat-widget', '');
        div.setAttribute('data-widget-id', '6a4bed7e665c2f21034131f0');
        div.setAttribute('data-location-id', 'cw0LTb1KMpv0suzij9FZ');
        document.body.appendChild(div);
      }

      // Load script
      const script = document.createElement('script');
      script.src = 'https://widgets.leadconnectorhq.com/loader.js';
      script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
      script.setAttribute('data-widget-id', '6a4bed7e665c2f21034131f0');
      script.async = true;
      document.body.appendChild(script);
    };

    const chatEvents = ['scroll', 'mousemove', 'touchstart', 'pointerdown', 'keydown'];
    chatEvents.forEach(e => window.addEventListener(e, loadChatWidget, { passive: true }));
    const chatTimer = setTimeout(loadChatWidget, 4000); // 4s fallback

    // 2. GTM / Google Tag Manager lazy-loading
    let gtmLoaded = false;
    const loadGtm = () => {
      if (gtmLoaded || (window as any).gtagInitialized) return;
      gtmLoaded = true;
      (window as any).gtagInitialized = true;

      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-18330417032';
      script.async = true;
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).gtag = function() {
        (window as any).dataLayer.push(arguments);
      };
      (window as any).gtag('js', new Date());
      (window as any).gtag('config', 'AW-18330417032');
    };

    if (document.readyState === 'complete') {
      setTimeout(loadGtm, 1500);
    } else {
      window.addEventListener('load', () => {
        setTimeout(loadGtm, 1500);
      });
    }

    return () => {
      chatEvents.forEach(e => window.removeEventListener(e, loadChatWidget));
      clearTimeout(chatTimer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] font-sans text-[#2C302E] selection:bg-[#CAD4CD] selection:text-white flex flex-col">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#F9F8F6]/98 backdrop-blur-md shadow-md border-b border-[#e8e5df]/60 py-2' 
            : 'bg-[#F9F8F6]/60 backdrop-blur-sm border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 cursor-pointer group">
              <div className="group-hover:scale-105 transition-transform duration-300 shrink-0">
                <Logo className={`transition-all duration-500 ${
                  isScrolled ? 'h-16 w-16 md:h-[80px] md:w-[80px]' : 'h-24 w-24 md:h-[112px] md:w-[112px]'
                }`} />
              </div>
              <div className="flex flex-col justify-center">
                <span className={`font-script font-bold tracking-tight text-[#2C302E] leading-none mb-1 transition-all duration-500 ${
                  isScrolled ? 'text-xl md:text-2xl lg:text-3xl' : 'text-2xl md:text-3xl lg:text-4xl'
                }`}>
                  ShineWell
                </span>
                <span className={`uppercase tracking-[0.25em] text-[#607564] font-semibold leading-none pl-1 transition-all duration-500 ${
                  isScrolled ? 'text-[7px] sm:text-[9px] md:text-[10px]' : 'text-[8px] sm:text-[10px] md:text-[11px]'
                }`}>
                  Commercial & Home Cleaning Services
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <div 
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  to="/services"
                  className="flex items-center gap-1 text-[15px] text-[#5c635f] hover:text-[#C86B53] transition-colors font-medium"
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </Link>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#e8e5df] py-3 overflow-hidden"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-5 py-2.5 text-sm text-[#5c635f] hover:text-[#C86B53] hover:bg-[#F9F8F6] transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/how-it-works"
                className="text-[15px] text-[#5c635f] hover:text-[#C86B53] transition-colors font-medium"
              >
                How It Works
              </Link>
              <Link
                to="/about"
                className="text-[15px] text-[#5c635f] hover:text-[#C86B53] transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                to="/locations"
                className="text-[15px] text-[#5c635f] hover:text-[#C86B53] transition-colors font-medium"
              >
                Locations
              </Link>
              <Link
                to="/blog"
                className="text-[15px] text-[#5c635f] hover:text-[#C86B53] transition-colors font-medium"
              >
                Blog
              </Link>
              <Link 
                to="/booking"
                className="bg-[#C86B53] hover:bg-[#b55e47] text-white px-7 py-3 rounded-full text-[15px] font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Get a Free Estimate
              </Link>
              <a 
                href="tel:9133251400"
                className="hidden lg:flex items-center gap-2 border border-[#607564] text-[#607564] hover:bg-[#607564] hover:text-white px-5 py-2.5 rounded-full text-[15px] font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 shrink-0"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call ShineWell: (913) 325-1400</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <a 
                href="tel:9133251400"
                className="flex items-center gap-1.5 bg-[#607564] text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-[#b55e47] transition-all shrink-0"
                aria-label="Call ShineWell at (913) 325-1400"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>(913) 325-1400</span>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#2C302E] shrink-0"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X aria-hidden="true" focusable="false" className="h-6 w-6" strokeWidth={1.5} />
                ) : (
                  <Menu aria-hidden="true" focusable="false" className="h-6 w-6" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-full left-0 w-full bg-[#F9F8F6] shadow-xl py-6 px-6 flex flex-col gap-4 border-t border-[#e8e5df] max-h-[80vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-2">
                <Link
                  to="/services"
                  className="flex items-center justify-between text-left text-[#5c635f] font-medium py-3 border-b border-[#e8e5df]"
                >
                  Services
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setIsServicesOpen(!isServicesOpen);
                    }}
                    className="p-1"
                    aria-label="Toggle services list"
                  >
                    <ChevronDown aria-hidden="true" focusable="false" className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </Link>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col pl-4 border-b border-[#e8e5df]"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="py-3 text-sm text-[#5c635f] hover:text-[#C86B53]"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/how-it-works"
                className="text-left text-[#5c635f] font-medium py-3 border-b border-[#e8e5df]"
              >
                How It Works
              </Link>
              <Link
                to="/about"
                className="text-left text-[#5c635f] font-medium py-3 border-b border-[#e8e5df]"
              >
                About Us
              </Link>
              <Link
                to="/locations"
                className="text-left text-[#5c635f] font-medium py-3 border-b border-[#e8e5df]"
              >
                Locations
              </Link>
              <Link
                to="/blog"
                className="text-left text-[#5c635f] font-medium py-3 border-b border-[#e8e5df]"
              >
                Blog
              </Link>
              <Link 
                to="/booking"
                className="bg-[#C86B53] text-white px-6 py-4 rounded-xl font-medium mt-4 w-full text-center block"
              >
                Get a Free Estimate
              </Link>
              <a 
                href="tel:9133251400"
                className="bg-[#607564] text-white px-6 py-4 rounded-xl font-medium mt-2 w-full text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>Call (913) 325-1400</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#2C302E] text-[#F9F8F6] py-10 md:py-12 border-t border-[#3a3f3c] mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6 cursor-pointer group">
                <div className="group-hover:scale-105 transition-transform duration-300 shrink-0">
                  <Logo className="h-20 w-20 md:h-24 md:w-24" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-2xl md:text-3xl lg:text-4xl font-script tracking-tight leading-none mb-1 text-[#F9F8F6]">
                    ShineWell
                  </span>
                  <span className="text-[8px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#a3aba6] group-hover:text-white transition-colors font-medium leading-none pl-0.5">
                    Commercial & Home Cleaning Services
                  </span>
                </div>
              </Link>
              <p className="max-w-sm text-[#a3aba6] font-light leading-relaxed mb-4">
                Honest, meticulous cleaning for businesses and homes across the Overland Park & KC metro area. We clean so you can live.
              </p>
              <div className="mb-6 space-y-1 text-sm text-[#a3aba6] font-light">
                <p className="font-semibold text-[#F9F8F6]">ShineWell Commercial and Home Cleaning Services</p>
                <p className="text-[#a3aba6]">Serving Overland Park & the greater Kansas City metro</p>
                <p>Phone: <a href="tel:9133251400" className="hover:text-white transition-colors underline decoration-[#607564] underline-offset-4">(913) 325-1400</a></p>
              </div>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/shinewellcleaning/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#3a3f3c] flex items-center justify-center hover:bg-[#C86B53] transition-colors" aria-label="Visit our Facebook Page">
                  <span className="sr-only">Facebook</span>
                  <svg aria-hidden="true" focusable="false" className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/shinewellcleaning" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#3a3f3c] flex items-center justify-center hover:bg-[#C86B53] transition-colors" aria-label="Visit our Instagram Page">
                  <span className="sr-only">Instagram</span>
                  <svg aria-hidden="true" focusable="false" className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h2 className="font-medium mb-6 tracking-wide">Contact</h2>
              <ul className="space-y-4 text-[#a3aba6] font-light">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#607564]" />
                  <a href="tel:9133251400" className="hover:text-white transition-colors">(913) 325-1400</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#607564]" />
                  <a href="mailto:lina.swcleaning@gmail.com" className="hover:text-white transition-colors">lina.swcleaning@gmail.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#607564] mt-1 shrink-0" />
                  <div className="w-full">
                    <span className="block mb-3">Serving Overland Park & the greater Kansas City metro</span>
                    <div className="w-full h-32 rounded-lg overflow-hidden border border-[#3a3f3c] bg-[#3a3f3c] mb-3 relative">
                      <LazyMap
                        src="https://maps.google.com/maps?q=Overland+Park,KS&t=&z=10&ie=UTF8&iwloc=&output=embed"
                        title="Service Area Map"
                        className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                      />
                    </div>
                    <a 
                      href="https://share.google/3oMRqAPyjGZaUcAO6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#FBBC05] hover:text-white transition-colors group"
                    >
                      <svg aria-hidden="true" focusable="false" className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span className="group-hover:underline">Visit our Google Profile</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="font-medium mb-6 tracking-wide">Links</h2>
              <ul className="space-y-3 text-[#a3aba6] font-light">
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/locations" className="hover:text-white transition-colors">Locations</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/booking" className="hover:text-white transition-colors font-medium text-[#FBBC05]">Get a Free Estimate</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#3a3f3c] text-sm text-[#a3aba6] font-light flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} ShineWell Cleaning Services. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <p className="text-[10px] uppercase tracking-widest opacity-50">
                Crafted by <a href="https://www.cerrana.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-4">Cerrana</a>
              </p>
              <div className="flex gap-6">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Sticky Mobile Call Button */}
      <a
        href="tel:9133251400"
        className="fixed bottom-6 left-6 z-50 md:hidden bg-[#C86B53] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center hover:shadow-[#C86B53]/30"
        aria-label="Call ShineWell"
      >
        <Phone aria-hidden="true" focusable="false" className="w-8 h-8 shrink-0" />
      </a>
    </div>
  );
}
