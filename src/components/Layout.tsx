import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
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
  { name: 'Routine House Cleaning', path: '/services/routine-housekeeping' },
  { name: 'Deep Cleaning', path: '/services/deep-dives' },
  { name: 'Move In / Move Out', path: '/services/move-in-move-out' },
  { name: 'Commercial Cleaning', path: '/services/commercial-deep-cleaning' },
  { name: 'Post-Construction', path: '/services/post-construction' },
  { name: 'Hoarder House Clean Up', path: '/services/hoarder-cleanup' },
  { name: 'Organizing Service', path: '/services/organizing' },
  { name: 'Specialized Treatments', path: '/services/specialized-treatments' },
  { name: 'Junk Removal', path: '/services/junk-removal' },
];

const Logo = ({ className = "h-10 w-10" }: { className?: string }) => (
  <svg 
    viewBox="0 0 200 180" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Buildings - Dark Green and Light Green */}
    <rect x="70" y="45" width="22" height="75" fill="#36453B" rx="1" />
    <g fill="#FBBC05" opacity="0.6">
      <rect x="73" y="52" width="2" height="2" /> <rect x="77" y="52" width="2" height="2" /> <rect x="81" y="52" width="2" height="2" /> <rect x="85" y="52" width="2" height="2" />
      <rect x="73" y="58" width="2" height="2" /> <rect x="77" y="58" width="2" height="2" /> <rect x="81" y="58" width="2" height="2" /> <rect x="85" y="58" width="2" height="2" />
      <rect x="73" y="64" width="2" height="2" /> <rect x="77" y="64" width="2" height="2" /> <rect x="81" y="64" width="2" height="2" /> <rect x="85" y="64" width="2" height="2" />
      <rect x="73" y="70" width="2" height="2" /> <rect x="77" y="70" width="2" height="2" /> <rect x="81" y="70" width="2" height="2" /> <rect x="85" y="70" width="2" height="2" />
    </g>

    <rect x="95" y="20" width="28" height="100" fill="#607564" rx="1" />
    <g fill="#FBBC05">
      <rect x="100" y="30" width="3" height="4" /> <rect x="106" y="30" width="3" height="4" /> <rect x="112" y="30" width="3" height="4" /> <rect x="118" y="30" width="3" height="4" />
      <rect x="100" y="38" width="3" height="4" /> <rect x="106" y="38" width="3" height="4" /> <rect x="112" y="38" width="3" height="4" /> <rect x="118" y="38" width="3" height="4" />
      <rect x="100" y="46" width="3" height="4" /> <rect x="106" y="46" width="3" height="4" /> <rect x="112" y="46" width="3" height="4" /> <rect x="118" y="46" width="3" height="4" />
      <rect x="100" y="54" width="3" height="4" /> <rect x="106" y="54" width="3" height="4" /> <rect x="112" y="54" width="3" height="4" /> <rect x="118" y="54" width="3" height="4" />
      <rect x="100" y="62" width="3" height="4" /> <rect x="106" y="62" width="3" height="4" /> <rect x="112" y="62" width="3" height="4" /> <rect x="118" y="62" width="3" height="4" />
    </g>

    <rect x="127" y="50" width="20" height="70" fill="#36453B" rx="1" />
    <g fill="#FBBC05" opacity="0.6">
      <rect x="130" y="58" width="3" height="3" /> <rect x="136" y="58" width="3" height="3" /> <rect x="142" y="58" width="3" height="3" />
      <rect x="130" y="66" width="3" height="3" /> <rect x="136" y="66" width="3" height="3" /> <rect x="142" y="66" width="3" height="3" />
      <rect x="130" y="74" width="3" height="3" /> <rect x="136" y="74" width="3" height="3" /> <rect x="142" y="74" width="3" height="3" />
    </g>
    
    {/* Houses */}
    {/* House 1 */}
    <path d="M35 115 L80 75 L125 115 V135 H35 Z" fill="white" stroke="#607564" strokeWidth="1.5" />
    <path d="M35 115 L80 75 L125 115 Z" fill="#607564" />
    <g fill="#607564" opacity="0.7">
      <rect x="56" y="115" width="5" height="5" /> <rect x="63" y="115" width="5" height="5" />
      <rect x="56" y="122" width="5" height="5" /> <rect x="63" y="122" width="5" height="5" />
    </g>
    
    {/* House 2 */}
    <path d="M100 115 L145 75 L190 115 V135 H100 Z" fill="white" stroke="#607564" strokeWidth="1.5" />
    <path d="M100 115 L145 75 L190 115 Z" fill="#607564" />
    <g fill="#607564" opacity="0.7">
      <rect x="121" y="115" width="5" height="5" /> <rect x="128" y="115" width="5" height="5" />
      <rect x="121" y="122" width="5" height="5" /> <rect x="128" y="122" width="5" height="5" />
    </g>
    
    {/* Swoosh Layers */}
    <path d="M25 140 Q 107 168 190 140" stroke="#36453B" strokeWidth="10" fill="none" strokeLinecap="round" />
    <path d="M25 140 Q 107 162 190 140" stroke="#FBBC05" strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M25 140 Q 107 152 190 140" stroke="#607564" strokeWidth="2" fill="none" strokeLinecap="round" />
    
    {/* Shining Stars / Glints */}
    <path d="M48 95 L51 102 L58 105 L51 108 L48 115 L45 108 L38 105 L45 102 Z" fill="#FBBC05" />
    <path d="M110 80 L115 90 L125 95 L115 100 L110 110 L105 100 L95 95 L105 90 Z" fill="white" />
    <path d="M165 105 L168 112 L175 115 L168 118 L165 125 L162 118 L155 115 L162 112 Z" fill="#FBBC05" />
    <path d="M85 85 L87 89 L91 90 L87 91 L85 95 L83 91 L79 90 L83 89 Z" fill="#FBBC05" />
    <path d="M140 85 L142 89 L146 90 L142 91 L140 95 L138 91 L134 90 L138 89 Z" fill="#FBBC05" />
    <path d="M175 90 L177 92 L180 93 L177 94 L175 97 L173 94 L170 93 L173 92 Z" fill="#FBBC05" />
    <path d="M25 100 L27 102 L30 103 L27 104 L25 107 L23 104 L20 103 L23 102 Z" fill="#FBBC05" />
  </svg>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

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
          isScrolled ? 'bg-[#F9F8F6]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 cursor-pointer group">
              <div className="group-hover:scale-110 transition-transform duration-300">
                <Logo className="h-12 w-12" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-script font-bold tracking-tight text-[#2C302E] leading-none mb-1">
                  Shine Well
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#607564] font-semibold leading-none pl-1">
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
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#2C302E]"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
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
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
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
                Book Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#2C302E] text-[#F9F8F6] py-16 border-t border-[#3a3f3c] mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Logo className="h-10 w-10" />
                <div className="flex flex-col">
                  <span className="text-3xl font-script tracking-tight leading-none mb-1">
                    Shine Well
                  </span>
                  <span className="text-[7px] uppercase tracking-[0.2em] text-[#a3aba6] font-medium leading-none pl-0.5">
                    Commercial & Home Cleaning Services
                  </span>
                </div>
              </div>
              <p className="max-w-sm text-[#a3aba6] font-light leading-relaxed mb-8">
                Honest, meticulous cleaning for businesses and homes across Kansas City. We clean so you can live.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/shinewellcleaning/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#3a3f3c] flex items-center justify-center hover:bg-[#C86B53] transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/shinewellcleaning" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#3a3f3c] flex items-center justify-center hover:bg-[#C86B53] transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-6 tracking-wide">Contact</h4>
              <ul className="space-y-4 text-[#a3aba6] font-light">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#607564]" />
                  <span>+1 913-325-1400</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#607564]" />
                  <span>shinewell.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#607564] mt-1 shrink-0" />
                  <div className="w-full">
                    <span className="block mb-3">Kansas City, MO</span>
                    <div className="w-full h-32 rounded-lg overflow-hidden border border-[#3a3f3c] bg-[#3a3f3c] mb-3">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight={0} 
                        marginWidth={0} 
                        src="https://maps.google.com/maps?q=Kansas+City&t=&z=10&ie=UTF8&iwloc=&output=embed"
                        title="Service Area Map"
                        className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                      ></iframe>
                    </div>
                    <a 
                      href="https://share.google/3oMRqAPyjGZaUcAO6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#FBBC05] hover:text-white transition-colors group"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
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
              <h4 className="font-medium mb-6 tracking-wide">Links</h4>
              <ul className="space-y-3 text-[#a3aba6] font-light">
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/locations" className="hover:text-white transition-colors">Locations</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/booking" className="hover:text-white transition-colors font-medium text-[#FBBC05]">Book Now</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#3a3f3c] text-sm text-[#a3aba6] font-light flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Shine Well Cleaning Services. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <p className="text-[10px] uppercase tracking-widest opacity-50">
                Crafted by <a href="https://www.cerrana.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-4">Cerrana</a>
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Widget */}
      <a
        href="https://wa.me/19133251400"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[#25D366]/30 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.12.553 4.185 1.604 6.008L.26 23.73l5.85-1.534A11.97 11.97 0 0012.031 24c6.646 0 12.03-5.385 12.03-12.03S18.677 0 12.031 0zm0 22.008c-1.785 0-3.535-.48-5.07-1.39l-.364-.216-3.766.987.998-3.672-.237-.377a9.985 9.985 0 01-1.526-5.309c0-5.545 4.512-10.057 10.057-10.057 5.545 0 10.057 4.512 10.057 10.057 0 5.545-4.512 10.057-10.057 10.057zm5.526-7.542c-.303-.152-1.794-.886-2.072-.987-.278-.101-.48-.152-.682.152-.202.303-.783.987-.96 1.189-.177.202-.354.227-.657.076-1.39-.65-2.408-1.15-3.357-2.61-.202-.303.202-.278.48-.833.076-.152.038-.278-.038-.43-.076-.152-.682-1.643-.935-2.25-.253-.607-.505-.53-.682-.53-.177 0-.379-.025-.581-.025-.202 0-.53.076-.808.379-.278.303-1.06 1.036-1.06 2.527 0 1.491 1.086 2.932 1.238 3.134.152.202 2.122 3.235 5.143 4.538 2.022.87 2.73.808 3.235.758.505-.05 1.794-.733 2.047-1.44.253-.708.253-1.314.177-1.44-.076-.126-.278-.202-.581-.354z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-white text-[#2C302E] px-4 py-2 rounded-xl text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
