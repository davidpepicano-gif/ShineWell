import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, ClipboardCopy, Sparkles } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div id="notfound-page" className="pt-32 pb-24 bg-[#F9F8F6] min-h-screen flex flex-col justify-center items-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block mb-6"
        >
          <div className="w-24 h-24 bg-[#EBE9E3] rounded-full flex items-center justify-center mx-auto text-[#607564]">
            <Sparkles className="w-12 h-12" />
          </div>
          <span className="absolute -top-1 -right-1 bg-[#C86B53] text-white font-serif text-xs px-2 py-1 rounded-full shadow-sm">
            404
          </span>
        </motion.div>

        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-serif text-[#2C302E] leading-tight">
            This Page Swept Away
          </h1>
          <p className="text-base text-[#5c635f] font-light leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. If you were looking for our company story, it has been moved to our **About** page.
          </p>
        </motion.div>

        {/* Actions / Recovery Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 space-y-3"
        >
          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-[#607564] text-white font-medium hover:bg-[#4A5D4E] transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/services"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#CAD4CD] text-[#2C302E] font-medium hover:bg-[#EBE9E3] transition-colors"
            >
              <span>Our Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/booking"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#CAD4CD] text-[#2C302E] font-medium hover:bg-[#EBE9E3] transition-colors"
            >
              <span>Free Estimate</span>
              <ClipboardCopy className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* Help block */}
        <p className="mt-12 text-xs text-[#8c9490] font-light">
          Need immediate help? Give Lina a call at{' '}
          <a href="tel:9133251400" className="underline hover:text-[#2C302E]">
            (913) 325-1400
          </a>
        </p>
      </div>
    </div>
  );
}
