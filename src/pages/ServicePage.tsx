import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import hoarderImg from '../assets/images/regenerated_image_1778884089897.jpg';
import organizingImg from '../assets/images/regenerated_image_1778878771115.jpg';
import specializedImg from '../assets/images/specialized_treatment_1779460554949.png';
import routineHousekeepingImg from '../assets/images/regenerated_image_1783363824272.png';
import deepCleaningImg from '../assets/images/regenerated_image_1783364438283.png';
import junkRemovalImg from '../assets/images/regenerated_image_1783363101031.png';
import commercialDeepCleaningImg from '../assets/images/regenerated_image_1783363406981.png';
import { 
  Home as HomeIcon, 
  Sparkles, 
  Briefcase, 
  Building2, 
  Droplets, 
  Paintbrush,
  ArrowRight,
  CheckCircle2,
  Phone
} from 'lucide-react';

const serviceData = {
  'routine-housekeeping': {
    title: 'Professional Standard Home Cleaning in Overland Park & KC Metro',
    icon: <HomeIcon className="w-12 h-12 text-[#CAD4CD]" strokeWidth={1.5} />,
    heroImage: routineHousekeepingImg,
    altText: 'ShineWell cleaner performing standard home cleaning Kansas City',
    description: 'Keeping your sanctuary fresh, week after week. We learn your preferences, remember the details that matter to you, and treat your home with the care and respect it deserves — every single visit.',
    introAnswer: 'ShineWell provides meticulous, background-checked routine home cleaning and housekeeping services across the greater Kansas City area. Our customized plans ensure that your bathrooms, kitchen, and living areas remain beautifully clean on a weekly, bi-weekly, or monthly schedule, giving you back your valuable free time.',
    details: 'Our professional routine housekeeping service provides consistent weekly, bi-weekly, or monthly cleanings for homes in Overland Park and the greater KC area. Our vetted cleaners sanitize kitchens, scrub bathrooms, dust all surfaces, and vacuum floors, using eco-friendly products to maintain a healthy, allergen-free environment so you can reclaim your personal weekends.\n\nOur Professional Standard Home Cleaning is designed for homeowners who want to maintain a clean, comfortable space without sacrificing their free time. This isn\'t a one size fits all approach — we take the time to understand your home, your preferences, and your routine, so every visit feels tailored rather than transactional.\n\nWhether you prefer weekly freshness, a bi weekly reset, or a monthly refresh, our team shows up prepared, professional, and ready to work. Over time, we learn what matters most to you — the way you like your bed made, the surfaces you\'re most particular about, the products that work best in your space — and we deliver that consistently, visit after visit.',
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
          "Sanitizing high touch surfaces",
          "Spot cleaning walls & baseboards"
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
      { title: "Weekly", desc: "Ideal for busy households, families with kids or pets, or anyone who wants their home consistently guest ready. Your team becomes deeply familiar with your space and preferences." },
      { title: "Bi weekly", desc: "The most popular choice. A thorough clean every two weeks keeps your home in great shape without the weekly commitment." },
      { title: "Monthly", desc: "Perfect for smaller households or lighter use spaces. A comprehensive clean once a month to reset and refresh every room." }
    ],
    whyChooseUs: [
      "Background checked, vetted professionals",
      "Consistent team — same faces, every visit",
      "Eco friendly and non toxic product options",
      "Fully insured and bonded",
      "100% satisfaction guarantee on every clean",
      "No long term contracts — flexible scheduling on your terms"
    ],
    faqs: [
      { q: "Do I need to tidy up before you arrive?", a: "You don't need to clean before we clean — that's exactly what we're here for. That said, picking up loose clutter like toys, clothes, or dishes off the floor allows our team to spend their time deep cleaning surfaces rather than organizing belongings. The less time we spend moving things around, the more thorough your clean will be. Think of it as teamwork — you clear the path, we handle the rest." },
      { q: "How long does a routine clean usually take?", a: "Most homes take between 2 and 4 hours, depending on the size of your space and the number of rooms. First time visits may take slightly longer as our team gets familiar with your home's layout and your specific preferences. After that, visits become more efficient because we already know your space. If you have a particularly large home or additional areas you'd like covered, we'll give you a realistic time estimate upfront so there are no surprises." },
      { q: "Do you bring your own supplies and equipment?", a: "Yes — our team arrives fully equipped with professional grade, eco conscious cleaning products and tools. You don't need to supply a thing. If you have specific preferences, sensitivities, or allergies to certain products, just let us know when booking and we'll accommodate accordingly. We're happy to use your preferred products if you'd rather we work with what you already have at home." },
      { q: "What if I need to reschedule or skip a visit?", a: "Life happens, and we get it. We ask for at least 24 hours' notice for reschedules or cancellations so we can adjust our team's schedule accordingly. We'll work with you to find a new time that fits without any hassle or penalty. Recurring clients always get priority scheduling, so you're never left waiting long." },
      { q: "Will I have the same cleaning team every visit?", a: "We make every effort to send the same team to your home each visit. Consistency matters — both for your comfort and for the quality of the clean. A team that knows your home, your preferences, and your routines simply does a better job. In the rare case of an absence or schedule change, we'll always notify you in advance." },
      { q: "Is this service right for my home size?", a: "Our Standard Clean is well-suited for homes up to approximately 2,500 sq ft. For larger properties, or homes that need more intensive attention due to pets, heavy use, or time between cleans, we may recommend starting with a Deep Clean first to bring everything up to baseline — then transitioning to a Standard recurring plan for ongoing maintenance. Not sure which is right for you? Reach out and we'll help you figure it out." }
    ]
  },
  'deep-dives': {
    title: 'Deep Cleaning Services in Kansas City: Spotless, Top to Bottom',
    icon: <Sparkles className="w-12 h-12 text-[#CAD4CD]" strokeWidth={1.5} />,
    heroImage: deepCleaningImg,
    altText: 'Deep cleaning service kitchen Kansas City Missouri',
    description: 'For when things have gotten a little out of hand. We get into the forgotten corners, baseboards, and behind the appliances.',
    introAnswer: 'ShineWell offers comprehensive, top-to-bottom deep cleaning services in Kansas City, Missouri. This premium, detailed package targets hard-to-reach areas, hand-wipes baseboards, sanitizes tile grout, scrubs window sills, and eliminates deep-seated dirt from kitchens and bathrooms to establish an immaculate, fresh, and healthy baseline for your home.',
    details: 'Our deep home cleaning service delivers a meticulous, restorative top-to-bottom sanitization for residences in Overland Park and Kansas City. Our background-checked professionals focus on neglected areas, hand-wiping baseboards, scrubbing tile grout, sanitizing window sills, and removing built-up grease and grime to establish a pristine, dust-free baseline for your household.',
    price: 'Starting at $300',
    checklist: [
      {
        section: "All Rooms",
        items: [
          "Everything in Routine Housekeeping",
          "Hand wiping baseboards and door frames",
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
    description: 'Start fresh or leave a blank slate. We make transitions seamless with a meticulous, top to bottom clean.',
    introAnswer: 'ShineWell delivers meticulous move-in and move-out cleaning services in Kansas City to ensure a seamless residential transition. We handle everything from deep-cleaning empty cabinets and scrubbing appliances to detailing baseboards, helping renters secure their security deposits and homeowners prepare their properties for prospective buyers.',
    details: 'Our professional move-in and move-out cleaning service prepares empty properties in Overland Park and Kansas City for seamless residential transitions. We deep-clean inside all kitchen cabinets and drawers, sanitize refrigerators and ovens, scrub bathrooms, and wipe down baseboards, helping renters secure their security deposits and buyers move into a pristine home.',
    price: 'Starting at $350',
    checklist: [
      {
        section: "All Rooms",
        items: [
          "Everything in Deep Dives",
          "Wiping down all interior doors",
          "Detailed cleaning of all closets",
          "Removing minor scuff marks from walls",
          "Ensuring the space is completely move in ready"
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
      { q: "Will this cleaning help me get my security deposit back?", a: "Yes! Our move out cleans are designed to meet standard landlord and property management requirements for deposit returns." },
      { q: "Do I need to have electricity and water running?", a: "Yes, we require active water and power to properly clean the home." }
    ]
  },
  'commercial-deep-cleaning': {
    title: 'Commercial Deep Cleaning Services in Overland Park & KC Metro',
    icon: <Building2 className="w-12 h-12 text-[#CAD4CD]" strokeWidth={1.5} />,
    heroImage: commercialDeepCleaningImg,
    altText: 'Commercial deep cleaning Overland Park & KC Metro',
    description: 'Deep, heavy-duty commercial cleaning and thorough workspace sanitation. We clean forgotten spaces, restrooms, breakrooms, and corporate facilities with clinical precision.',
    introAnswer: 'ShineWell provides professional, comprehensive commercial deep cleaning services across the Kansas City area, tailored to fit your specific corporate or business needs. Our fully insured, background-checked cleaners sanitize reception lobbies, desk workstations, restrooms, and breakrooms to maintain a deeply sterilized, professional, and healthy workspace.',
    details: 'Our commercial deep cleaning service delivers a thorough, heavy-duty sanitization of office and business facilities in Overland Park and Kansas City. Our fully insured team sanitizes high-touch points, deep-cleans restrooms, disinfects breakrooms, vacuums commercial carpets, and scrubs hard floor surfaces to establish a spotless and hygienic environment.\n\nThis deep-level cleaning is perfect for companies preparing for audits, inspections, company events, or seasonal resets. While our routine commercial plans keep your office clean day-to-day, our deep commercial package tackles the deeper layers of dust, grime, and build-up that standard cleanings don\'t cover.',
    price: 'Custom Quote',
    checklist: [
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
    ],
    faqs: [
      { q: "Can you clean after our business hours?", a: "Absolutely. We offer flexible scheduling, including evenings and weekends, to minimize disruption to your operations." },
      { q: "Do you provide cleaning supplies and equipment?", a: "Yes, we bring all necessary commercial-grade supplies and equipment." }
    ]
  },
  'specialized-treatments': {
    title: 'Specialized Cleaning Treatments in Kansas City',
    icon: <Droplets className="w-12 h-12 text-[#CAD4CD]" strokeWidth={1.5} />,
    heroImage: specializedImg,
    altText: 'Specialized cleaning services Kansas City',
    description: 'Targeted care for specific needs, including upholstery, carpet spot treatments, and eco friendly sanitization for sensitive spaces.',
    introAnswer: 'ShineWell offers specialized cleaning treatments in Kansas City, including expert upholstery care, leather conditioning, and hardwood floor polishing. We use advanced, eco-friendly sanitization techniques and allergen-safe green products to revive sensitive high-end surfaces, ensuring your home remains beautiful, protected, and healthy without using harsh chemicals.',
    details: 'Our specialized cleaning treatments offer professional care for high-end upholstery, fine leather, and hardwood surfaces in Overland Park and Kansas City. We utilize non-toxic, allergen-safe green products and specialized sanitization methods to clean deep fabric fibers, condition delicate materials, and restore surface shine without using any harsh chemical compounds.',
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
          "Eco friendly / Green cleaning product options",
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
      { q: "Are your eco friendly products safe for pets and children?", a: "Yes, our green cleaning options use non toxic, allergen free products that are completely safe for your family and pets." },
      { q: "How long does upholstery take to dry?", a: "Typically, upholstery will be completely dry within 4-6 hours depending on the fabric and ventilation." }
    ]
  },
  'organizing': {
    title: 'Professional Home & Office Organizing in Kansas City',
    icon: <Sparkles className="w-12 h-12 text-[#CAD4CD]" strokeWidth={1.5} />,
    heroImage: organizingImg,
    altText: 'Professional organizing service home Kansas City',
    description: 'Functional systems for your home or office. We help you declutter and create spaces that work for your daily life.',
    introAnswer: 'ShineWell delivers professional home and office organization services in Kansas City, designing sustainable systems to keep clutter away. We guide you through sorting, decluttering, and optimizing spaces like closets, pantries, and home offices, helping restore calm, layout function, and physical peace of mind to your surroundings.',
    details: 'Our professional organizing service designs custom, sustainable storage and layout systems for homes and offices in Overland Park and Kansas City. Our experts guide you through sorting, decluttering, and categorizing belongings in closets, kitchens, and workspaces, helping reduce mental clutter and establishing order that is easy to maintain long-term.',
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
          "Kid friendly organizational designs"
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
    heroImage: hoarderImg,
    altText: 'Compassionate hoarder house clean up service in Kansas City',
    description: 'Empathetic, efficient restoration for cluttered environments. We handle the heavy lifting with care and discretion.',
    introAnswer: 'ShineWell offers compassionate, highly confidential hoarding and extreme clutter cleanup services across Kansas City. Our background-checked team works respectfully alongside families or estate executors, sorting valuables, removing heavy debris, and performing thorough deep sanitization and odor removal to restore safe, comfortable, and healthy living environments.',
    details: 'Our compassionate hoarder house cleanup service provides respectful, confidential, and comprehensive extreme clutter restoration in Overland Park and Kansas City. Working closely with families or estate executors, our background-checked team handles bulk debris removal, carefully sorts personal valuables, and performs deep sanitization and odor removal to restore safe living conditions.',
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
    heroImage: junkRemovalImg,
    altText: 'Professional junk removal service dumpster Kansas City',
    description: 'Full service removal of unwanted items with dumpster logistics handled. Perfect for office clear outs or large home projects.',
    introAnswer: 'ShineWell manages eco-friendly junk removal and dumpster logistics across Kansas City for residential and commercial clear-outs. From hauling heavy furniture and office equipment to managing dumpster placement permits, we handle all the heavy loading and prioritizing local donation centers or recycling, keeping waste out of landfills.',
    details: 'Our eco-friendly junk removal and hauling service handles residential and commercial property cleanouts throughout Overland Park and the KC metro. We manage all heavy loading, transport, and dumpster logistics, prioritizing local donation centers and recycling facilities to dispose of old furniture, appliances, and office equipment responsibly and keep waste out of landfills.',
    price: 'Starting at $199',
    checklist: [
      {
        section: "Removal",
        items: [
          "Appliance and furniture removal",
          "Electronic waste (e waste) recycling",
          "Yard waste and bulk debris disposal"
        ]
      },
      {
        section: "Logistics",
        items: [
          "Dumpster rental and placement management",
          "Permit handling (if required)",
          "Final site sweep up"
        ]
      }
    ],
    faqs: [
      { q: "What items can you not take?", a: "We cannot haul away hazardous materials like paint, chemicals, or tires. Please contact us for a full list of prohibited items." },
      { q: "Do you recycle or donate items?", a: "Yes! We prioritize recycling and donating usable items to keep as much as possible out of landfills." }
    ]
  },
  'post-construction': {
    title: 'Post Construction Cleaning Services in Kansas City',
    icon: <Paintbrush className="w-12 h-12 text-[#CAD4CD]" strokeWidth={1.5} />,
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
    altText: 'Post Construction Cleaning Services in Kansas City',
    description: 'We clear the dust and debris after your renovation, leaving your newly updated space sparkling and ready to enjoy.',
    introAnswer: 'ShineWell provides thorough post-construction and post-renovation cleaning services across the greater Kansas City metropolitan area. Our cleaners utilize HEPA-filter vacuums to eliminate airborne drywall dust, scrub paint splatters and adhesive residues from new appliances and fixtures, and wash sills and baseboards to make your space move-in ready.',
    details: 'Our detailed post-construction cleaning service eliminates hazardous fine dust, drywall residue, and adhesive splatters after remodeling projects in Overland Park and Kansas City. Our cleaners use HEPA-filter vacuums on all surfaces, wipe down walls, wash window sills, and scrub newly installed fixtures, ensuring your renovated space is perfectly clean and move-in ready.',
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
      { q: "Construction dust keeps settling. Will you come back?", a: "We use specialized HEPA vacuums to minimize airborne dust, but we often recommend a follow up 'touch up' clean a week later as HVAC systems can circulate hidden dust." }
    ]
  }
};

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (serviceId) {
      const seoTitles: Record<string, string> = {
        'routine-housekeeping': "Routine Home Cleaning & Housekeeping | ShineWell",
        'deep-dives': "Deep Home Cleaning & Restorative Sanitization | ShineWell",
        'move-in-move-out': "Move-In & Move-Out Cleaning Services | ShineWell",
        'commercial-deep-cleaning': "Commercial Deep Cleaning and Heavy-Duty Office Sanitization | ShineWell",
        'specialized-treatments': "Specialized Property & Restoration Cleaning | ShineWell",
        'organizing': "Professional Home & Office Organization | ShineWell",
        'hoarder-cleanup': "Compassionate Hoarding & Cluttered Space Cleanup | ShineWell",
        'junk-removal': "Eco-Friendly Junk Removal & Hauling | ShineWell",
        'post-construction': "Post-Renovation & Construction Cleaning | ShineWell"
      };

      const metaDescriptions: Record<string, string> = {
        'routine-housekeeping': "Meticulous weekly, bi-weekly, or monthly home cleaning in Overland Park & KC Metro. Keep your living spaces fresh and healthy with our insured, eco-friendly professionals.",
        'deep-dives': "Detailed top-to-bottom deep cleaning for Overland Park and Kansas City homes. Hand wiping baseboards, detailed scrubbing, and intensive sanitizing of your entire living space.",
        'move-in-move-out': "Comprehensive moving cleaning services in Overland Park & KC Metro. Get your security deposit back or prepare your new home for a fresh start with our move-out experts.",
        'commercial-deep-cleaning': "Professional commercial deep cleaning services in Overland Park & Kansas City. Heavy-duty sanitization of offices, clinics, retail spaces, restrooms, and breakrooms.",
        'specialized-treatments': "Expert cleaning and restoration services for challenging spaces in Overland Park & KC Metro. Insured, highly confidential, and meticulously thorough specialty cleaning.",
        'organizing': "De-clutter and structure your living or work environment in Overland Park & KC Metro. Professional organization services to maximize efficiency and restore physical peace of mind.",
        'hoarder-cleanup': "Dignified, confidential, and comprehensive extreme clutter cleanup services in Overland Park & KC Metro. Our experienced team restores properties safely and respectfully.",
        'junk-removal': "Fast, reliable hauling and disposal services for homes and businesses in Overland Park & KC Metro. We prioritize donation and recycling for eco-friendly junk disposal.",
        'post-construction': "Detailed post-renovation and new construction cleanup in Overland Park & KC Metro. Remove fine sheetrock dust, adhesive residues, and debris to prepare your new space for move-in."
      };

      document.title = seoTitles[serviceId] || "Professional Cleaning Services | ShineWell";
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', metaDescriptions[serviceId] || "ShineWell provides professional commercial and residential cleaning services.");
      }
    }
  }, [serviceId]);
  
  const service: any = serviceId ? serviceData[serviceId as keyof typeof serviceData] : null;

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-24 px-6">
        <h1 className="text-4xl font-serif text-[#2C302E] mb-4">Service Not Found</h1>
        <p className="text-[#5c635f] mb-6">We couldn't find the service you're looking for.</p>
        <Link to="/" className="bg-[#C86B53] text-white px-6 py-3 rounded-full font-medium hover:bg-[#b55e47] transition-colors">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-14">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-5">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] mb-4 leading-tight">
              {service.title}
            </h1>
            <div className="inline-block bg-[#F9F8F6] px-4 py-2 rounded-full border border-[#e8e5df] mb-4">
              <span className="text-[#4A5D4E] font-medium">{service.price}</span>
            </div>
            <p className="text-lg md:text-xl text-[#5c635f] font-light leading-relaxed mb-5">
              {service.description}
            </p>
            {service.introAnswer && (
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#e8e5df] text-left shadow-sm mb-6">
                <p className="text-base md:text-lg text-[#2C302E] leading-relaxed font-light">
                  <strong>{service.title.split(':')[0]}</strong>: {service.introAnswer}
                </p>
              </div>
            )}
            <Link 
              to="/booking"
              className="inline-flex items-center gap-2 bg-[#C86B53] text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-[#b55e47] hover:shadow-lg hover:-translate-y-0.5"
            >
              Get a Free Estimate
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
              <h2 className="text-3xl font-serif text-[#2C302E] mb-6">How does this service work?</h2>
              <p className="text-[#5c635f] leading-relaxed font-light text-lg mb-12 whitespace-pre-wrap">
                {service.details}
              </p>

              {serviceId === 'commercial-deep-cleaning' && (
                <div className="mb-12 p-8 bg-[#F0EDE6] border border-[#CAD4CD] rounded-3xl flex flex-col sm:flex-row gap-6 justify-between items-center shadow-sm">
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl text-[#2C302E]">Looking for recurring office cleaning instead?</h3>
                    <p className="text-sm text-[#5c635f] font-light leading-relaxed">
                      We offer fully customized weekly, bi-weekly, or monthly office cleaning contracts. Visit our main commercial landing page for schedules and free walkthrough options.
                    </p>
                  </div>
                  <Link 
                    to="/commercial-cleaning-kansas-city" 
                    className="bg-[#607564] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#4A5D4E] transition-colors shrink-0 shadow-sm"
                  >
                    View Commercial Cleaning KC
                  </Link>
                </div>
              )}
              
              <div className="mb-16">
                <h2 className="text-3xl font-serif text-[#2C302E] mb-8">What is included in this service?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.checklist.map((section, idx) => (
                    <div key={idx} className="bg-[#F9F8F6] p-8 rounded-3xl border border-[#e8e5df] shadow-sm">
                      <h3 className="text-xl font-serif text-[#4A5D4E] mb-6 pb-4 border-b border-[#e8e5df]">
                        {section.section}
                      </h3>
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
                  <h2 className="text-3xl font-serif text-[#2C302E] mb-8">What schedule options do we offer?</h2>
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
                  <h2 className="text-3xl font-serif text-[#2C302E] mb-8">Why choose ShineWell for your space?</h2>
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
                  <h2 className="text-2xl font-serif text-[#2C302E] mb-6">What questions do our clients frequently ask?</h2>
                  <div className="space-y-6">
                    {service.faqs.map((faq: any, idx: number) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-[#e8e5df] shadow-sm">
                        <h3 className="text-lg font-medium text-[#2C302E] mb-2">{faq.q}</h3>
                        <p className="text-[#5c635f] font-light leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Blog Link Section */}
              <div className="mt-16 bg-[#F9F8F6] p-8 rounded-3xl border border-[#e8e5df] text-center">
                <h2 className="text-2xl font-serif text-[#2C302E] mb-4">Are you looking for professional cleaning tips?</h2>
                <p className="text-[#5c635f] font-light mb-6 max-w-lg mx-auto">
                  Check out our blog for expert advice, local Kansas City updates, and insights from the ShineWell team to help keep your home fresh between visits.
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
                <h2 className="text-2xl font-serif mb-4">Are you ready for a spotless space?</h2>
                <p className="text-[#a3aba6] font-light mb-8">
                  Get a free, no obligation estimate tailored to your specific needs and space.
                </p>
                <Link 
                  to="/booking"
                  className="block w-full text-center bg-[#C86B53] text-white px-6 py-4 rounded-xl font-medium transition-colors hover:bg-[#b55e47]"
                >
                  Get a Free Estimate
                </Link>
                <div className="mt-6 pt-6 border-t border-[#3a3f3c] text-center">
                  <p className="text-sm text-[#a3aba6] mb-2">Or call us directly:</p>
                  <a href="tel:9133251400" className="text-xl font-serif text-white hover:text-[#C86B53] transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 shrink-0 text-[#CAD4CD]" />
                    <span>913-325-1400</span>
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
