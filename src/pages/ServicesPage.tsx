import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import hoarderImg from '../assets/images/regenerated_image_1778884089897.jpg';
import organizingImg from '../assets/images/regenerated_image_1778878771115.jpg';
import specializedImg from '../assets/images/specialized_treatment_1779460554949.png';
import { 
  Home as HomeIcon, 
  Sparkles, 
  Briefcase, 
  Building2, 
  Droplets, 
  Paintbrush,
  ArrowRight,
  Check,
  Minus
} from 'lucide-react';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('All Rooms');

  const residentialServices = [
    {
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
      title: "Routine House Cleaning",
      desc: "Keeping your sanctuary fresh, week after week. We learn your preferences and treat your home with the utmost respect.",
      path: "/services/routine-housekeeping"
    },
    {
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop",
      title: "Deep Cleaning",
      desc: "For when things have gotten a little out of hand. We get into the forgotten corners, baseboards, and behind the appliances.",
      path: "/services/deep-dives"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      title: "Move In / Move Out",
      desc: "Start fresh or leave a blank slate. We make transitions seamless with a meticulous, top to bottom clean.",
      path: "/services/move-in-move-out"
    }
  ];

  const specializedServices = [
    {
      image: hoarderImg,
      title: "Hoarder House Clean Up",
      desc: "Compassionate, efficient restoration for cluttered environments. We handle the heavy lifting with care and discretion.",
      path: "/services/hoarder-cleanup"
    },
    {
      image: organizingImg,
      title: "Organizing Service",
      desc: "Functional systems for your home or office. We help you declutter and create spaces that work for your daily life.",
      path: "/services/organizing"
    },
    {
      image: specializedImg,
      title: "Specialized Treatments",
      desc: "Targeted care for specific needs, including upholstery, carpet spot treatments, and eco friendly sanitization for sensitive spaces.",
      path: "/services/specialized-treatments"
    }
  ];

  const commercialServices = [
    {
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
      title: "Light Commercial Cleaning",
      desc: "Elevate your workspace. We provide thorough, professional cleaning for offices and commercial spaces to ensure a healthy environment.",
      path: "/services/commercial-deep-cleaning"
    },
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
      title: "Junk Removal with Dumpster",
      desc: "Full service removal of unwanted items with dumpster logistics handled. Perfect for office clear outs or large home projects.",
      path: "/services/junk-removal"
    },
    {
      image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop",
      title: "Post Construction",
      desc: "We clear the dust and debris after your renovation, leaving your newly updated space sparkling and ready to enjoy.",
      path: "/services/post-construction"
    }
  ];

  const comparisonData: Record<string, { name: string; routine: boolean; deep: boolean; move: boolean }[]> = {
    'All Rooms': [
      { name: "Dust light fixtures", routine: true, deep: true, move: true },
      { name: "Dust windowsills & window frames & ledges", routine: true, deep: true, move: true },
      { name: "Dust & tidy decor & personal items", routine: true, deep: true, move: true },
      { name: "Dust ceiling fans", routine: true, deep: true, move: true },
      { name: "Dust furniture, lamps & lampshades", routine: true, deep: true, move: true },
      { name: "Tidy area(s), fold blankets, arrange pillows, etc.", routine: true, deep: true, move: false },
      { name: "Clean all mirrors", routine: true, deep: true, move: true },
      { name: "Clean all light switches & doorknobs", routine: true, deep: true, move: true },
      { name: "Vacuum / sweep / mop floors", routine: true, deep: true, move: true },
      { name: "Empty garbage and replace the bag", routine: true, deep: true, move: true },
      { name: "Wipe down all doors and door frames", routine: false, deep: true, move: true },
      { name: "Clean baseboards", routine: false, deep: true, move: true },
      { name: "Wipe down inside of window sills & tracks", routine: false, deep: true, move: true },
    ],
    'Kitchen': [
      { name: "Wipe down exterior of all appliances", routine: true, deep: true, move: true },
      { name: "Clean microwave inside and out", routine: true, deep: true, move: true },
      { name: "Wipe down countertops & backsplash", routine: true, deep: true, move: true },
      { name: "Clean and sanitize sink & faucet", routine: true, deep: true, move: true },
      { name: "Wipe down exterior of cabinets", routine: true, deep: true, move: true },
      { name: "Clean inside refrigerator", routine: false, deep: false, move: true },
      { name: "Clean inside oven", routine: false, deep: false, move: true },
      { name: "Clean inside all cabinets and drawers", routine: false, deep: false, move: true },
      { name: "Degrease stovetop and hood exterior", routine: false, deep: true, move: true },
    ],
    'Bathrooms': [
      { name: "Clean and sanitize toilet, shower, and tub", routine: true, deep: true, move: true },
      { name: "Wipe down mirrors and glass", routine: true, deep: true, move: true },
      { name: "Sanitize sink and counters", routine: true, deep: true, move: true },
      { name: "Wipe down exterior of cabinets", routine: true, deep: true, move: true },
      { name: "Scrub grout lines", routine: false, deep: true, move: true },
      { name: "Descale showerheads and faucets", routine: false, deep: true, move: true },
      { name: "Clean inside all cabinets and drawers", routine: false, deep: false, move: true },
    ],
    'Bedrooms': [
      { name: "Make beds (upon request)", routine: true, deep: true, move: false },
      { name: "Change bed linens (if left out)", routine: true, deep: true, move: false },
      { name: "Detailed cleaning of all closets", routine: false, deep: false, move: true },
    ]
  };

  const tabs = ['Kitchen', 'Bathrooms', 'Bedrooms', 'All Rooms'];

  const commercialFeatures = [
    {
      section: "Front Desk & Reception",
      items: [
        "Wiping down reception desk and visitor seating",
        "Organizing magazines and tidying lobby area",
        "Cleaning glass entrance doors and interior windows",
        "Sanitizing high touch areas in the waiting room"
      ]
    },
    {
      section: "Office Areas",
      items: [
        "Sanitizing all high touch surfaces (doorknobs, light switches)",
        "Dusting and wiping down all desks and workstations",
        "Emptying all trash and recycling receptacles",
        "Cleaning interior glass and windows"
      ]
    },
    {
      section: "Restrooms",
      items: [
        "Deep cleaning and disinfecting restrooms",
        "Sanitizing sinks, toilets, and urinals",
        "Restocking paper products and soap"
      ]
    },
    {
      section: "Breakrooms & Floors",
      items: [
        "Cleaning breakrooms and kitchenettes (including inside appliances)",
        "Vacuuming and spot treating commercial carpets",
        "Sweeping and mopping hard floors"
      ]
    }
  ];

  const postConstructionFeatures = [
    {
      section: "All Rooms",
      items: [
        "Removal of fine construction dust from all surfaces",
        "Cleaning interior windows, sills, and frames",
        "Wiping down all walls and ceilings",
        "Removing minor paint splatters and adhesive residue"
      ]
    },
    {
      section: "Kitchen & Bath",
      items: [
        "Cleaning inside all new cabinetry and drawers",
        "Cleaning and polishing all new fixtures and appliances",
        "Removing stickers and protective film from new items"
      ]
    },
    {
      section: "Floors",
      items: [
        "Detailed vacuuming of all carpets and hard floors",
        "Multiple moppings to remove drywall dust residue",
        "Baseboard and floor vent detailing"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#F9F8F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-[#2C302E] mb-6">Our Services</h1>
          <p className="text-lg text-[#5c635f] font-light">
            No cookie cutter checklists here. We adapt to your space, your preferences, and your life. Explore our comprehensive cleaning solutions.
          </p>
        </motion.div>

        {/* Commercial Services */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C302E] mb-4">Office & Commercial Cleaning</h2>
            <div className="w-24 h-1 bg-[#CAD4CD] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-center">
            {commercialServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#e8e5df] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#2C302E] mb-4 group-hover:text-[#C86B53] transition-colors">{service.title}</h3>
                  <p className="text-[#5c635f] text-lg leading-relaxed font-light mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <Link 
                    to={service.path}
                    className="inline-flex items-center text-[#607564] font-medium group-hover:text-[#C86B53] transition-colors mt-auto"
                  >
                    View Details <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Commercial Checklist Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-sm border border-[#e8e5df] overflow-hidden mb-24"
        >
          <div className="relative p-12 md:p-16 text-center text-white overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" 
              alt="Commercial cleaning service"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#2C302E]/70 backdrop-blur-[1px]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif mb-4">Commercial Cleaning Checklist</h2>
              <p className="text-[#a3aba6] font-light max-w-2xl mx-auto text-lg">
                A detailed breakdown of our comprehensive commercial and office cleaning services.
              </p>
            </div>
          </div>
          
          <div className="p-8 md:p-12 bg-[#F9F8F6]">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {commercialFeatures.map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-[#e8e5df]">
                  <h3 className="text-xl font-serif text-[#4A5D4E] mb-6 pb-4 border-b border-[#e8e5df]">
                    {feature.section}
                  </h3>
                  <ul className="space-y-4">
                    {feature.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#CAD4CD] shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-[#5c635f] font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Post Construction Checklist Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-sm border border-[#e8e5df] overflow-hidden mb-24"
        >
          <div className="relative p-12 md:p-16 text-center text-white overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
              alt="Post construction cleaning"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#2C302E]/60 backdrop-blur-[2px]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif mb-4">Post Construction Checklist</h2>
              <p className="text-[#e8e5df] font-light max-w-2xl mx-auto text-lg">
                A detailed breakdown of our post renovation and new construction cleaning services.
              </p>
            </div>
          </div>
          
          <div className="p-8 md:p-12 bg-[#F9F8F6]">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {postConstructionFeatures.map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-[#e8e5df]">
                  <h3 className="text-xl font-serif text-[#4A5D4E] mb-6 pb-4 border-b border-[#e8e5df]">
                    {feature.section}
                  </h3>
                  <ul className="space-y-4">
                    {feature.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#CAD4CD] shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-[#5c635f] font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Residential Services */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C302E] mb-4">Residential Cleaning</h2>
            <div className="w-24 h-1 bg-[#CAD4CD] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {residentialServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#e8e5df] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#2C302E] mb-4 group-hover:text-[#C86B53] transition-colors">{service.title}</h3>
                  <p className="text-[#5c635f] text-lg leading-relaxed font-light mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <Link 
                    to={service.path}
                    className="inline-flex items-center text-[#607564] font-medium group-hover:text-[#C86B53] transition-colors mt-auto"
                  >
                    View Details <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Specialized Services */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C302E] mb-4">Specialized Services</h2>
            <div className="w-24 h-1 bg-[#CAD4CD] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {specializedServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#e8e5df] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#2C302E] mb-4 group-hover:text-[#C86B53] transition-colors">{service.title}</h3>
                  <p className="text-[#5c635f] text-lg leading-relaxed font-light mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <Link 
                    to={service.path}
                    className="inline-flex items-center text-[#607564] font-medium group-hover:text-[#C86B53] transition-colors mt-auto"
                  >
                    View Details <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparative Checklist Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C302E] mb-4">Compare Our Residential Packages</h2>
            <div className="w-24 h-1 bg-[#CAD4CD] mx-auto rounded-full mb-6"></div>
            <p className="text-[#5c635f] font-light max-w-2xl mx-auto">
              See exactly what's included in our most popular residential cleaning services to find the perfect fit for your home.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-[#607564] text-white shadow-md' 
                    : 'bg-white text-[#5c635f] hover:bg-[#F9F8F6] border border-[#e8e5df]'
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-[2rem] shadow-sm border border-[#e8e5df] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-[#F9F8F6] border-b border-[#e8e5df]">
                    <th className="p-6 font-serif text-[#2C302E] text-xl w-2/5">Cleaning Task</th>
                    <th className="p-6 font-medium text-[#2C302E] text-center w-1/5">Routine<br/><span className="text-sm font-light text-[#5c635f]">Cleaning</span></th>
                    <th className="p-6 font-medium text-[#2C302E] text-center w-1/5">Deep<br/><span className="text-sm font-light text-[#5c635f]">Cleaning</span></th>
                    <th className="p-6 font-medium text-[#2C302E] text-center w-1/5">Move In /<br/><span className="text-sm font-light text-[#5c635f]">Move Out</span></th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData[activeTab].map((feature, idx) => (
                    <tr key={idx} className="border-b border-[#e8e5df] last:border-0 hover:bg-[#F9F8F6]/50 transition-colors">
                      <td className="p-5 pl-6 text-[#5c635f] font-light">{feature.name}</td>
                      <td className="p-5 text-center">
                        {feature.routine ? (
                          <Check className="w-5 h-5 text-[#CAD4CD] mx-auto" strokeWidth={2.5} />
                        ) : (
                          <span className="text-[#d1d5db] font-medium">—</span>
                        )}
                      </td>
                      <td className="p-5 text-center">
                        {feature.deep ? (
                          <Check className="w-5 h-5 text-[#CAD4CD] mx-auto" strokeWidth={2.5} />
                        ) : (
                          <span className="text-[#d1d5db] font-medium">—</span>
                        )}
                      </td>
                      <td className="p-5 text-center">
                        {feature.move ? (
                          <Check className="w-5 h-5 text-[#CAD4CD] mx-auto" strokeWidth={2.5} />
                        ) : (
                          <span className="text-[#d1d5db] font-medium">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            to="/booking"
            className="inline-flex items-center gap-2 bg-[#C86B53] hover:bg-[#b55e47] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:-translate-y-1"
          >
            Book Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
