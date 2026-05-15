import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function EstimatePage() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save the lead data here first
    navigate('/payment');
  };

  return (
    <div className="relative min-h-screen flex items-center pt-24 pb-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
          alt="Professional house cleaning service estimate Kansas City" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#2C302E]/75"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[1.1]">
               Best House Cleaning Services in Kansas
             </h1>
             <p className="text-lg md:text-xl text-[#F9F8F6]/90 mb-10 max-w-xl leading-relaxed font-light">
               Welcome to ShineWell, where we redefine the essence of home cleanliness in Kansas. Our dedicated team of cleaning professionals specializes in transforming your living spaces into havens of immaculate cleanliness and comfort.
             </p>
             <a 
               href="tel:+19133251400" 
               className="inline-flex items-center gap-3 bg-[#CAD4CD] hover:bg-[#B8C5BD] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:-translate-y-1"
             >
               <Phone className="w-5 h-5" />
               Call Now - +1 913-325-1400
             </a>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-[#2C302E] p-8 md:p-10 rounded-3xl shadow-2xl border border-[#3a3f3c] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
          >
             <h2 className="text-3xl font-serif text-white mb-8 text-center">Free Estimate</h2>
             <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
               <div>
                 <label className="block text-sm font-medium text-[#F9F8F6]/90 mb-2">Name</label>
                 <input 
                   type="text" 
                   className="w-full px-4 py-3 rounded-xl bg-white text-[#2C302E] focus:outline-none focus:ring-2 focus:ring-[#CAD4CD] transition-shadow" 
                   required 
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-[#F9F8F6]/90 mb-2">Email Address</label>
                 <input 
                   type="email" 
                   className="w-full px-4 py-3 rounded-xl bg-white text-[#2C302E] focus:outline-none focus:ring-2 focus:ring-[#CAD4CD] transition-shadow" 
                   required 
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-[#F9F8F6]/90 mb-2">Phone</label>
                 <input 
                   type="tel" 
                   className="w-full px-4 py-3 rounded-xl bg-white text-[#2C302E] focus:outline-none focus:ring-2 focus:ring-[#CAD4CD] transition-shadow" 
                   required 
                 />
               </div>
               <p className="text-xs text-[#F9F8F6]/60 leading-relaxed mt-2">
                 By submitting this form, I agree to receive communications and promotional offers from ShineWell.
               </p>
               
               {/* Fake reCAPTCHA */}
               <div className="bg-white p-4 rounded-xl flex items-center justify-between mt-2 shadow-inner">
                 <div className="flex items-center gap-3">
                   <input 
                     type="checkbox" 
                     className="w-6 h-6 rounded border-gray-300 text-[#CAD4CD] focus:ring-[#CAD4CD]" 
                     required 
                   />
                   <span className="text-sm text-[#2C302E] font-medium">I'm not a robot</span>
                 </div>
                 <div className="flex flex-col items-center">
                   <img 
                     src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                     alt="reCAPTCHA" 
                     className="w-8 h-8 opacity-80" 
                     referrerPolicy="no-referrer"
                   />
                   <span className="text-[10px] text-gray-500 mt-1">reCAPTCHA</span>
                 </div>
               </div>

               <button 
                 type="submit" 
                 className="w-full bg-[#C86B53] hover:bg-[#b55e47] text-white px-6 py-4 rounded-xl font-medium text-lg transition-all mt-4 hover:shadow-lg hover:-translate-y-0.5"
               >
                 Get Free Quote & Pay
               </button>
             </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
