import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Home as HomeIcon, 
  Sparkles, 
  Briefcase, 
  Building2, 
  Droplets, 
  Paintbrush,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const serviceData = {
  'routine-housekeeping': {
    title: 'Professional Standard Home Cleaning in Kansas City, MO',
    icon: <HomeIcon className="w-12 h-12 text-[#CAD4CD]" strokeWidth={1.5} />,
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
    altText: 'Shine Well cleaner performing standard home cleaning Kansas City',
    description: 'Keeping your sanctuary fresh, week after week. We learn your preferences, remember the details that matter to you, and treat your home with the care and respect it deserves — every single visit.',
    details: 'Life moves fast. Between work, family, and everything in between, keeping your home consistently clean can feel like a job in itself. That\'s where Shine Well comes in.\n\nOur Professional Standard Home Cleaning is designed for homeowners who want to maintain a clean, comfortable space without sacrificing their free time. This isn\'t a one-size-fits-all approach — we take the time to understand your home, your preferences, and your routine, so every visit feels tailored rather than transactional.\n\nWhether you prefer weekly freshness, a bi-weekly reset, or a monthly refresh, our team shows up prepared, professional, and ready to work. Over time, we learn what matters most to you — the way you like your bed made, the surfaces you\'re most particular about, the products that work best in your space — and we deliver that consistently, visit after visit.',
    price: 'Starting at $150',
    checklist: [
      {
        section: "All Rooms",
        items: [
          "Dusting all accessible surfaces & décor",
          "Vacuuming carpets & upholstery",
          "Sweeping & mopping hard floors",
          "Emptying trash bins",
          "Making beds (upon request)",
          "Sanitizing high-touch surfaces",
          "Spot-cleaning walls & baseboards"
        ]
      },
      {
        section: "Kitchen",
        items: [
          "Wiping down countertops & backsplash",
          "Cleaning exterior of all appliances",
          "Degreasing stovetop",
          "Sanitizing sink & faucet",
          "Wiping cabinet fronts",
          "Emptying trash"
        ]
      },
      {
        section: "Bathrooms",
        items: [
          "Sanitizing toilet, shower & tub",
          "Polishing mirrors & glass",
          "Sanitizing sink & counters",
          "Wiping cabinet fronts",
          "Mopping floors",
          "Restocking supplies (if provided)"
        ]
      }
    ],
    scheduleOptions: [
      { title: "Weekly", desc: "Ideal for busy households, families with kids or pets, or anyone who wants their home consistently guest-ready. Your team becomes deeply familiar with your space and preferences." },
      { title: "Bi-weekly", desc: "The most popular choice. A thorough clean every two weeks keeps your home in great shape without the weekly commitment." },
      { title: "Monthly", desc: "Perfect for smaller households or lighter-use spaces. A comprehensive clean once a month to reset and refresh every room." }
    ],
    whyChooseUs: [
      "Background-checked, vetted professionals",
      "Consistent team — same faces, every visit",
      "Eco-friendly and non-toxic product options",
      "Fully insured and bonded",
      "100% satisfaction guarantee on every clean",
      "No long-term contracts — flexible scheduling on your terms"
    ],
    faqs: [
      { q: "Do I need to tidy up before you arrive?", a: "You don't need to clean before we clean — that's exactly what we're here for. That said, picking up loose clutter like toys, clothes, or dishes off the floor allows our team to spend their time deep-cleaning surfaces rather than organizing belongings. The less time we spend moving things around, the more thorough your clean will be. Think of it as teamwork — you clear the path, we handle the rest." },
      { q: "How long does a routine clean usually take?", a: "Most homes take between 2 and 4 hours, depending on the size of your space and the number of rooms. First-time visits may take slightly longer as our team gets familiar with your home's layout and your specific preferences. After that, visits become more efficient because we already know your space. If you have a particularly large home or additional areas you'd like covered, we'll give you a realistic time estimate upfront so there are no surprises." },
      { q: "Do you bring your own supplies and equipment?", a: "Yes — our team arrives fully equipped with professional-grade, eco-conscious cleaning products and tools. You don't need to supply a thing. If you have specific preferences, sensitivities, or allergies to certain products, just let us know when booking and we'll accommodate accordingly. We're happy to use your preferred products if you'd rather we work with what you already have at home." },
      { q: "What if I need to reschedule or skip a visit?", a: "Life happens, and we get it. We ask for at least 24 hours' notice for reschedules or cancellations so we can adjust our team's schedule accordingly. We'll work with you to find a new time that fits without any hassle or penalty. Recurring clients always get priority scheduling, so you're never left waiting long." },
      { q: "Will I have the same cleaning team every visit?", a: "We make every effort to send the same team to your home each visit. Consistency matters — both for your comfort and for the quality of the clean. A team that knows your home, your preferences, and your routines simply does a better job. In the rare case of an absence or schedule change, we'll always notify you in advance." },
      { q: "Is this service right for my home size?", a: "Our Standard Clean is well-suited for homes up to approximately 2,500 sq ft. For larger properties, or homes that need more intensive attention due to pets, heavy use, or time between cleans, we may recommend starting with a Deep Clean first to bring everything up to baseline — then transitioning to a Standard recurring plan for ongoing maintenance. Not sure which is right for you? Reach out and we'll help you figure it out." }
    ]
  },
  'deep-dives': {
    title: 'Deep Cleaning Services in Kansas City — Spotless, Top to Bottom',
    icon: <Sparkles className="w-12 h-12 text-[#CAD4CD]" strokeWidth={1.5} />,
    heroImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop',
    altText: 'Deep cleaning service kitchen Kansas City Missouri',
    description: 'For when things have gotten a little out of hand. We get into the forgotten corners, baseboards, and behind the appliances.',
    details: 'A deep clean is a comprehensive, top-to-bottom cleaning of your home. It goes beyond the surface level of routine cleaning to tackle the dirt and grime that accumulates over time in hard-to-reach places. This service is perfect for spring cleaning, preparing for holidays or special events, or just giving your home a much-needed refresh.',
    price: 'Starting at $300',
    checklist: [
      {
        section: "All Rooms",
        items: [
          "Everything in Routine Housekeeping",
          "Hand-wiping baseboards and door frames",
          "Cleaning inside window sills and tracks",
          "Wiping down ceiling fans and light fixtures",
          "Detailed dusting of blinds and shutters"
        ]
      },
      {
        section: "Kitchen",
        items: [
          "Cleaning the exterior of large appliances",
          "Detailed scrubbing of sink and fixtures",
          "Degreasing stovetop and hood exterior"
        ]
      },
      {
        section: "Bathrooms",
        items: [
          "Scrubbing grout lines in bathrooms",
          "Descaling showerheads and faucets",
          "Detailed cleaning of bathroom exhaust fans"
        ]
      }
    ],
    faqs: [
      { q: "How often should I schedule a deep clean?", a: "We recommend a deep clean 2-3 times a year, or before starting a routine maintenance schedule." },
      { q: "Do you clean inside the oven and fridge during a deep clean?", a: "Yes, interior appliance cleaning can be included in our deep dive packages upon request." }
    ]
  },
  'move-in-move-out': {
    title: 'Move In & Move Out Cleaning Service in Kansas City',
    icon: <Briefcase className="w-12 h-12 text-[#CAD4CD]" strokeWidth={1.5} />,
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    altText: 'Move out cleaning service apartment Kansas City',
    description: 'Start fresh or leave a blank slate. We make transitions seamless with a meticulous, top-to-bottom clean.',
    details: 'Moving is stressful enough without having to worry about cleaning. Our move-in/move-out cleaning service ensures that your new home is perfectly clean and ready for you to settle in, or that your old home is left in pristine condition for the next occupants or to secure your security deposit.',
    price: 'Starting at $350',
    checklist: [
      {
        section: "All Rooms",
        items: [
          "Everything in Deep Dives",
          "Wiping down all interior doors",
          "Detailed cleaning of all closets",
          "Removing minor scuff marks from walls",
          "Ensuring the space is completely move-in ready"
        ]
      },
      {
        section: "Kitchen",
        items: [
          "Cleaning inside all cabinets and drawers",
          "Cleaning inside the refrigerator and oven",
          "Cleaning behind appliances (if moved)"
        ]
      },
      {
        section: "Bathrooms",
        items: [
          "Cleaning inside all bathroom cabinets and drawers",
          "Sanitizing inside medicine cabinets",
          "Deep scrubbing of all fixtures"
        ]
      }
    ],
    faqs: [
      { q: "Will this cleaning help me get my security deposit back?", a: "Yes! Our move-out cleans are designed to meet standard landlord and property management requirements for deposit returns." },
      { q: "Do I need to have electricity and water running?", a: "Yes, we require active water and power to properly clean the home." }
    ]
  },
  'commercial-deep-cleaning': {
    title: 'Light Commercial Cleaning in Kansas City, MO',
    icon: <Building2 className="w-12 h-12 text-[#CAD4CD]" strokeWidth={1.5} />,
    heroImage: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop',
    altText: 'Commercial office cleaning Kansas City MO',
    description: 'Elevate your workspace. We provide thorough, professional cleaning for offices and commercial spaces to ensure a healthy environment.',
    details: 'A clean workspace is essential for employee productivity, health, and making a great impression on clients. Our commercial cleaning service is tailored to the unique needs of your business, providing a thorough sanitization and refresh of your office, retail space, or facility.',
    price: 'Custom Quote',
    checklist: [
      {
        section: "Front Desk & Reception",
        items: [
          "Wiping down reception desk and visitor seating",
          "Organizing magazines and tidying lobby area",
          "Cleaning glass entrance doors and interior windows",
          "Sanitizing high-touch areas in the waiting room"
        ]
      },
      {
        section: "Office Areas",
        items: [
          "Sanitizing all high-touch surfaces (doorknobs, light switches)",
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
          "Vacuuming and spot-treating commercial carpets",
          "Sweeping and mopping hard floors"
        ]
      }
    ],
    faqs: [
      { q: "Can you clean after our business hours?", a: "Absolutely. We offer flexible scheduling, including evenings and weekends, to minimize disruption to your operations." },
      { q: "Do you provide cleaning supplies and equipment?", a: "Yes, we bring all necessary commercial-grade supplies and equipment." }
    ]
  },
  'specialized-treatments': {
    title: 'Specialized Cleaning Treatments in Kansas City',
    icon: <Droplets className="w-12 h-12 text-[#CAD4CD]" strokeWidth={1.5} />,
    heroImage: '/src/assets/images/regenerated_image_1778882738805.avif',
    altText: 'Specialized cleaning services Kansas City',
    description: 'Targeted care for specific needs, including upholstery, carpet spot treatments, and eco-friendly sanitization for sensitive spaces.',
    details: 'Sometimes standard cleaning isn\'t enough. Our specialized treatments address specific issues and materials that require extra care and expertise. From reviving tired upholstery to using specialized eco-friendly products for allergy-sensitive households, we have the solutions you need.',
    price: 'Custom Quote',
    checklist: [
      {
        section: "Upholstery & Carpets",
        items: [
          "Upholstery cleaning and refreshing",
          "Targeted carpet spot and stain removal",
          "Deep vacuuming of fabric furniture"
        ]
      },
      {
        section: "Treatments",
        items: [
          "Eco-friendly/Green cleaning product options",
          "Odor removal treatments",
          "Allergen reduction cleaning techniques"
        ]
      },
      {
        section: "Furniture & Floors",
        items: [
          "Leather furniture conditioning",
          "Hardwood floor polishing",
          "Specialty surface care (marble, granite)"
        ]
      }
    ],
    faqs: [
      { q: "Are your eco-friendly products safe for pets and children?", a: "Yes, our green cleaning options use non-toxic, allergen-free products that are completely safe for your family and pets." },
      { q: "How long does upholstery take to dry?", a: "Typically, upholstery will be completely dry within 4-6 hours depending on the fabric and ventilation." }
    ]
  },
  'organizing': {
    title: 'Professional Home & Office Organizing in Kansas City',
    icon: <Sparkles className="w-12 h-12 text-[#CAD4CD]" strokeWidth={1.5} />,
    heroImage: '/src/assets/images/regenerated_image_1778878771115.jpg',
    altText: 'Professional organizing service home Kansas City',
    description: 'Functional systems for your home or office. We help you declutter and create spaces that work for your daily life.',
    details: 'Clutter can be overwhelming. Our organizing service goes beyond cleaning to help you reclaim your space and your time. We work with you to declutter, categorize, and create sustainable systems that make maintaining order effortless. Whether it\'s a chaotic pantry, a crowded closet, or a disorganized office, we bring clarity and function back to your environment.',
    price: 'Starting at $75/hr',
    checklist: [
      {
        section: "Decluttering",
        items: [
          "Sorting and categorizing belongings",
          "Objective guidance on what to keep, donate, or discard",
          "Space planning and layout optimization"
        ]
      },
      {
        section: "Systems",
        items: [
          "Implementation of labeling and storage solutions",
          "Filing systems for home offices",
          "Kid-friendly organizational designs"
        ]
      }
    ],
    faqs: [
      { q: "Do I need to buy bins and baskets first?", a: "No! We recommend waiting until we've sorted your items and planned the space. We can provide suggestions or shop for you." },
      { q: "Do you help with donations?", a: "Yes, we can facilitate the removal of unwanted items to local donation centers as part of our service." }
    ]
  },
  'hoarder-cleanup': {
    title: 'Compassionate Hoarder House Clean Up in Kansas City',
    icon: <Briefcase className="w-12 h-12 text-[#CAD4CD]" strokeWidth={1.5} />,
    heroImage: '/src/assets/images/regenerated_image_1778882768223.avif',
    altText: 'Compassionate hoarder house clean up service in Kansas City',
    description: 'Empathetic, efficient restoration for cluttered environments. We handle the heavy lifting with care and discretion.',
    details: 'Facing a hoarding situation requires more than just a cleaning crew; it requires compassion, patience, and a non-judgmental approach. Shine Well provides a safe and supportive environment to help individuals and families navigate the process of decluttering and sanitizing their homes. We work at a pace that feels safe while ensuring significant progress toward a healthy living environment.',
    price: 'Custom Quote',
    checklist: [
      {
        section: "Removal & Sorting",
        items: [
          "Collaborative sorting of items",
          "Bulk debris removal and disposal",
          "Identification of important documents and valuables"
        ]
      },
      {
        section: "Restoration",
        items: [
          "Deep sanitization of all surfaces",
          "Odor removal and air purification",
          "Biohazard cleaning where necessary"
        ]
      }
    ],
    faqs: [
      { q: "Is this service confidential?", a: "Absolutely. We prioritize your privacy and discretion throughout the entire process." },
      { q: "Can you work with estate executors?", a: "Yes, we frequently work with family members and legal executors to clear properties." }
    ]
  },
  'junk-removal': {
    title: 'Junk Removal & Dumpster Services in Kansas City',
    icon: <Droplets className="w-12 h-12 text-[#CAD4CD]" strokeWidth={1.5} />,
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    altText: 'Professional junk removal service dumpster Kansas City',
    description: 'Full-service removal of unwanted items with dumpster logistics handled. Perfect for office clear-outs or large home projects.',
    details: 'Large-scale cleanouts require logistics. We provide full-service junk removal, including the heavy lifting, loading, and disposal. If your project requires a dumpster on-site, we handle the rental, delivery, and pickup, so you only have to deal with one point of contact. From old furniture and electronics to construction debris, we clear the way for your next chapter.',
    price: 'Starting at $199',
    checklist: [
      {
        section: "Removal",
        items: [
          "Appliance and furniture removal",
          "Electronic waste (e-waste) recycling",
          "Yard waste and bulk debris disposal"
        ]
      },
      {
        section: "Logistics",
        items: [
          "Dumpster rental and placement management",
          "Permit handling (if required)",
          "Final site sweep-up"
        ]
      }
    ],
    faqs: [
      { q: "What items can you not take?", a: "We cannot haul away hazardous materials like paint, chemicals, or tires. Please contact us for a full list of prohibited items." },
      { q: "Do you recycle or donate items?", a: "Yes! We prioritize recycling and donating usable items to keep as much as possible out of landfills." }
    ]
  },
  'post-construction': {
    title: 'Post-Construction Cleaning Services in Kansas City',
    icon: <Paintbrush className="w-12 h-12 text-[#CAD4CD]" strokeWidth={1.5} />,
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
    altText: 'Post-Construction Cleaning Services in Kansas City',
    description: 'We clear the dust and debris after your renovation, leaving your newly updated space sparkling and ready to enjoy.',
    details: 'Renovations are exciting, but the dust they leave behind is not. Our post-construction cleaning service is designed to tackle the fine dust and debris that settles everywhere after a building project. We meticulously clean every surface so you can finally enjoy your newly renovated space without the mess.',
    price: 'Custom Quote',
    checklist: [
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
    ],
    faqs: [
      { q: "Do you remove large construction debris?", a: "We focus on fine dust and detailed cleaning. Large debris and hazardous materials should be removed by the contractors prior to our arrival." },
      { q: "Construction dust keeps settling. Will you come back?", a: "We use specialized HEPA vacuums to minimize airborne dust, but we often recommend a follow-up 'touch-up' clean a week later as HVAC systems can circulate hidden dust." }
    ]
  }
};

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const service: any = serviceId ? serviceData[serviceId as keyof typeof serviceData] : null;

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-32 px-6">
        <h1 className="text-4xl font-serif text-[#2C302E] mb-4">Service Not Found</h1>
        <p className="text-[#5c635f] mb-8">We couldn't find the service you're looking for.</p>
        <Link to="/" className="bg-[#C86B53] text-white px-6 py-3 rounded-full font-medium hover:bg-[#b55e47] transition-colors">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-8">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] mb-6 leading-tight">
              {service.title}
            </h1>
            <div className="inline-block bg-[#F9F8F6] px-4 py-2 rounded-full border border-[#e8e5df] mb-6">
              <span className="text-[#4A5D4E] font-medium">{service.price}</span>
            </div>
            <p className="text-lg md:text-xl text-[#5c635f] font-light leading-relaxed mb-8">
              {service.description}
            </p>
            <Link 
              to="/booking"
              className="inline-flex items-center gap-2 bg-[#C86B53] text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-[#b55e47] hover:shadow-lg hover:-translate-y-0.5"
            >
              Book this service
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-[2rem] overflow-hidden shadow-xl h-[400px] lg:h-[500px]"
          >
            <img 
              src={service.heroImage} 
              alt={service.altText || service.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
        </div>
      </div>

      {/* Details Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 lg:col-span-8"
            >
              <h2 className="text-3xl font-serif text-[#2C302E] mb-6">About this service</h2>
              <p className="text-[#5c635f] leading-relaxed font-light text-lg mb-12 whitespace-pre-wrap">
                {service.details}
              </p>
              
              <div className="mb-16">
                <h3 className="text-3xl font-serif text-[#2C302E] mb-8">What's Included</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.checklist.map((section, idx) => (
                    <div key={idx} className="bg-[#F9F8F6] p-8 rounded-3xl border border-[#e8e5df] shadow-sm">
                      <h4 className="text-xl font-serif text-[#4A5D4E] mb-6 pb-4 border-b border-[#e8e5df]">
                        {section.section}
                      </h4>
                      <ul className="space-y-4">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#CAD4CD] shrink-0 mt-0.5" strokeWidth={2} />
                            <span className="text-[#5c635f] font-light leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {service.scheduleOptions && (
                <div className="mb-16">
                  <h3 className="text-3xl font-serif text-[#2C302E] mb-8">Schedule Options</h3>
                  <div className="grid gap-4">
                    {service.scheduleOptions.map((opt: any, idx: number) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-[#e8e5df] shadow-sm flex flex-col md:flex-row gap-4 items-start">
                        <div className="bg-[#F9F8F6] text-[#4A5D4E] font-serif text-xl px-4 py-2 rounded-xl shrink-0 min-w-[120px] text-center">
                          {opt.title}
                        </div>
                        <p className="text-[#5c635f] font-light leading-relaxed pt-1">{opt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.whyChooseUs && (
                <div className="mb-16">
                  <h3 className="text-3xl font-serif text-[#2C302E] mb-8">Why Shine Well</h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {service.whyChooseUs.map((reason: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 bg-[#F9F8F6] p-4 rounded-xl border border-[#e8e5df]">
                        <CheckCircle2 className="w-5 h-5 text-[#CAD4CD] shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-[#5c635f] font-light leading-relaxed">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.faqs && service.faqs.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-serif text-[#2C302E] mb-6">Common Questions</h3>
                  <div className="space-y-6">
                    {service.faqs.map((faq: any, idx: number) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-[#e8e5df] shadow-sm">
                        <h4 className="text-lg font-medium text-[#2C302E] mb-2">{faq.q}</h4>
                        <p className="text-[#5c635f] font-light leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Blog Link Section */}
              <div className="mt-16 bg-[#F9F8F6] p-8 rounded-3xl border border-[#e8e5df] text-center">
                <h3 className="text-2xl font-serif text-[#2C302E] mb-4">Looking for Cleaning Tips?</h3>
                <p className="text-[#5c635f] font-light mb-6 max-w-lg mx-auto">
                  Check out our blog for expert advice, local Kansas City updates, and insights from the Shine Well team to help keep your home fresh between visits.
                </p>
                <Link 
                  to="/blog"
                  className="inline-flex items-center gap-2 bg-white border border-[#e8e5df] text-[#4A5D4E] px-6 py-3 rounded-full font-medium transition-all hover:bg-[#4A5D4E] hover:text-white hover:border-[#4A5D4E]"
                >
                  Read Our Blog
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-5 lg:col-span-4"
            >
              <div className="bg-[#2C302E] text-[#F9F8F6] p-8 rounded-3xl sticky top-32">
                <h3 className="text-2xl font-serif mb-4">Ready for a spotless space?</h3>
                <p className="text-[#a3aba6] font-light mb-8">
                  Get a free, no-obligation estimate tailored to your specific needs and space.
                </p>
                <Link 
                  to="/booking"
                  className="block w-full text-center bg-[#C86B53] text-white px-6 py-4 rounded-xl font-medium transition-colors hover:bg-[#b55e47]"
                >
                  Book Now
                </Link>
                <div className="mt-6 pt-6 border-t border-[#3a3f3c] text-center">
                  <p className="text-sm text-[#a3aba6] mb-2">Or call us directly:</p>
                  <a href="tel:+19133251400" className="text-xl font-serif text-white hover:text-[#C86B53] transition-colors">
                    +1 913-325-1400
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
