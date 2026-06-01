import { motion } from 'motion/react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LocationsPage() {
  const locationData = [
    {
      state: "Kansas City Metro",
      cities: [
        "Kansas City, MO",
        "Overland Park, KS",
        "Olathe, KS",
        "Independence, MO",
        "Lee's Summit, MO",
        "Shawnee, KS",
        "Blue Springs, MO",
        "Lenexa, KS",
        "Leavenworth, KS",
        "Leawood, KS",
        "Liberty, MO",
        "Raytown, MO"
      ],
      mapQuery: "Kansas+City+Metro"
    },
    {
      state: "North Carolina",
      cities: [
        "Wilmington, NC",
        "Raleigh, NC",
        "Charlotte, NC",
        "Durham, NC",
        "Greensboro, NC"
      ],
      mapQuery: "North+Carolina"
    }
  ];

  return (
    <div className="pt-24 pb-14 bg-[#F9F8F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-[#2C302E] mb-6">Areas We Serve</h1>
          <p className="text-lg text-[#5c635f] font-light">
            ShineWell provides premium cleaning services across the greater Kansas City metropolitan area and major cities in North Carolina.
          </p>
        </motion.div>

        <div className="space-y-24">
          {locationData.map((region, idx) => (
            <div key={idx} className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Map Area */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`lg:col-span-7 bg-white p-4 rounded-[2.5rem] shadow-sm border border-[#e8e5df] overflow-hidden ${idx % 2 === 0 ? '' : 'lg:order-2'}`}
              >
                <div className="w-full h-[400px] rounded-[2rem] overflow-hidden bg-[#e8e5df]">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src={`https://maps.google.com/maps?q=${region.mapQuery}&t=&z=9&ie=UTF8&iwloc=&output=embed`}
                    title={`${region.state} Service Area`}
                    className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  ></iframe>
                </div>
              </motion.div>

              {/* List of Cities */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`lg:col-span-5 bg-white p-10 rounded-3xl shadow-sm border border-[#e8e5df] ${idx % 2 === 0 ? '' : 'lg:order-1'}`}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-[#F9F8F6] rounded-full flex items-center justify-center text-[#607564]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-serif text-[#2C302E]">{region.state}</h2>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                  {region.cities.map((city, cityIdx) => (
                    <div key={cityIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#607564] shrink-0" />
                      <span className="text-[#5c635f] font-light text-sm">{city}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-white p-10 rounded-3xl shadow-sm border border-[#e8e5df] text-center max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-serif text-[#2C302E] mb-4">Don't see your city?</h3>
          <p className="text-[#5c635f] mb-8 font-light">
            We are constantly expanding our service area. Contact us to see if we can accommodate your location.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#607564] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:bg-[#36453B] hover:shadow-xl hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
