import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

// Setup DOM global mocks so libraries like framer-motion/lucide do not crash on the server
if (typeof window === 'undefined') {
  const domMock = {
    addEventListener: () => {},
    removeEventListener: () => {},
    matchMedia: () => ({
      matches: false,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {}
    }),
    scrollTo: () => {},
    scrollY: 0,
    scrollX: 0,
    location: {
      href: '',
      origin: '',
      pathname: '',
      search: '',
    },
    navigator: {
      userAgent: 'node',
    },
    document: {
      getElementById: () => null,
      querySelector: () => null,
      querySelectorAll: () => [],
      createElement: () => ({
        style: {},
      }),
    },
    requestAnimationFrame: (cb: any) => setTimeout(cb, 0),
    cancelAnimationFrame: () => {},
  };
  (global as any).window = domMock;
  (global as any).document = domMock.document;
  
  // Safely define navigator if it's not already defined or writable
  if (typeof (global as any).navigator === 'undefined') {
    (global as any).navigator = domMock.navigator;
  } else {
    try {
      Object.defineProperty(global, 'navigator', {
        value: domMock.navigator,
        configurable: true,
        writable: true
      });
    } catch (e) {
      // already exists and is read-only, which is fine!
    }
  }
}

// Now import our routes after standard mocks are established
import AppRoutes from './src/AppRoutes';

const routes = [
  '/',
  '/services',
  '/services/routine-housekeeping',
  '/services/deep-dives',
  '/services/move-in-move-out',
  '/services/commercial-deep-cleaning',
  '/services/specialized-treatments',
  '/services/organizing',
  '/services/hoarder-cleanup',
  '/services/junk-removal',
  '/services/post-construction',
  '/how-it-works',
  '/about',
  '/contact',
  '/booking',
  '/faq',
  '/locations',
  '/payment',
  '/blog',
  '/blog/commercial-cleaning-kansas-city',
  '/blog/regular-house-cleaning-kansas-city',
  '/blog/deep-cleaning-kansas-city',
  '/blog/office-cleaning-reception',
  '/privacy',
  '/terms',
];

const routeMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "ShineWell Commercial & Home Cleaning Services | Overland Park & KC Metro",
    description: "ShineWell provides Overland Park and the greater KC metro's most reliable commercial and residential cleaning services. Fully insured, locally owned, eco-friendly cleaning with a satisfaction guarantee.",
  },
  "/services": {
    title: "Professional Home & Office Cleaning Services | ShineWell KC Metro",
    description: "Explore our comprehensive suite of professional cleaning services in Overland Park & the greater Kansas City metro. From routine home cleaning and deep dives to move-in/out and commercial cleaning.",
  },
  "/services/routine-housekeeping": {
    title: "Routine Home Cleaning & Housekeeping | ShineWell",
    description: "Meticulous weekly, bi-weekly, or monthly home cleaning in Overland Park & KC Metro. Keep your living spaces fresh and healthy with our insured, eco-friendly professionals.",
  },
  "/services/deep-dives": {
    title: "Deep Home Cleaning & Restorative Sanitization | ShineWell",
    description: "Detailed top-to-bottom deep cleaning for Overland Park and Kansas City homes. Hand wiping baseboards, detailed scrubbing, and intensive sanitizing of your entire living space.",
  },
  "/services/move-in-move-out": {
    title: "Move-In & Move-Out Cleaning Services | ShineWell",
    description: "Comprehensive moving cleaning services in Overland Park & KC Metro. Get your security deposit back or prepare your new home for a fresh start with our move-out experts.",
  },
  "/services/commercial-deep-cleaning": {
    title: "Commercial & Office Cleaning Services | ShineWell",
    description: "Custom-tailored commercial office cleaning contracts across Overland Park & KC Metro. Pristine retail, corporate, and medical facility cleaning from Crossroads to Leawood.",
  },
  "/services/specialized-treatments": {
    title: "Specialized Property & Restoration Cleaning | ShineWell",
    description: "Expert cleaning and restoration services for challenging spaces in Overland Park & KC Metro. Insured, highly confidential, and meticulously thorough specialty cleaning.",
  },
  "/services/organizing": {
    title: "Professional Home & Office Organization | ShineWell",
    description: "De-clutter and structure your living or work environment in Overland Park & KC Metro. Professional organization services to maximize efficiency and restore physical peace of mind.",
  },
  "/services/hoarder-cleanup": {
    title: "Compassionate Hoarding & Cluttered Space Cleanup | ShineWell",
    description: "Dignified, confidential, and comprehensive extreme clutter cleanup services in Overland Park & KC Metro. Our experienced team restores properties safely and respectfully.",
  },
  "/services/junk-removal": {
    title: "Eco-Friendly Junk Removal & Hauling | ShineWell",
    description: "Fast, reliable hauling and disposal services for homes and businesses in Overland Park & KC Metro. We prioritize donation and recycling for eco-friendly junk disposal.",
  },
  "/services/post-construction": {
    title: "Post-Renovation & Construction Cleaning | ShineWell",
    description: "Detailed post-renovation and new construction cleanup in Overland Park & KC Metro. Remove fine sheetrock dust, adhesive residues, and debris to prepare your new space for move-in.",
  },
  "/how-it-works": {
    title: "Our Simple 5-Step Professional Cleaning Process | ShineWell",
    description: "How ShineWell works: Simple online scheduling, customized options, safe booking fees, exceptional cleaning, and a 100% satisfaction guarantee.",
  },
  "/about": {
    title: "About ShineWell | Overland Park & KC Professional Cleaners",
    description: "The story of ShineWell. Built on Lina's 22+ years of professional experience, Brazilian warmth, and a deep dedication to family-owned commercial & home cleaning.",
  },
  "/contact": {
    title: "Contact Us & Request a Free Estimate | ShineWell",
    description: "Get in touch with Overland Park and the greater KC metro's premier commercial and home cleaning team. Call us at (913) 325-1400 or fill out our online form for an immediate free estimate.",
  },
  "/booking": {
    title: "Request a Free Estimate & Book Your Clean | ShineWell",
    description: "Book your commercial or residential cleaning service online in Overland Park & KC Metro. Choose your frequency, view scheduling options, and get an accurate free estimate immediately.",
  },
  "/faq": {
    title: "Frequently Asked Questions | ShineWell Cleaning",
    description: "Got questions? Find clear answers about our employee background checks, liability insurance coverage, arrival windows, pet policies, and guarantee policies.",
  },
  "/locations": {
    title: "Service Areas & Locations Served | ShineWell Cleaning",
    description: "Explore our broad service footprint across Overland Park, the greater Kansas City metropolitan area, and North Carolina. See our active locations and zip codes.",
  },
  "/payment": {
    title: "Secure Online Payment Portal | ShineWell Cleaning",
    description: "Securely pay your booking fee or invoice online using our trusted, fully encrypted, PCI-compliant Stripe payment processing interface.",
  },
  "/blog": {
    title: "Expert Cleaning Tips, News & Local Updates | ShineWell Blog",
    description: "Professional cleaning advice, localized Overland Park and KC maintenance tips, and guides from our expert team to keep your space healthy and spotless.",
  },
  "/blog/commercial-cleaning-kansas-city": {
    title: "Rethinking Commercial Cleaning in Overland Park & KC Metro | ShineWell Blog",
    description: "Why local businesses are looking beyond standard janitorial services to create warm, pristine, welcoming environments that inspire confidence.",
  },
  "/blog/regular-house-cleaning-kansas-city": {
    title: "The Lifesaving Power of Regular House Cleaning | ShineWell Blog",
    description: "How weekly or bi-weekly routine cleaning rescues your personal time, improves family respiratory health, and preserves the long-term value of your home.",
  },
  "/blog/deep-cleaning-kansas-city": {
    title: "When to Book a Deep Home Clean in Overland Park & KC Metro | ShineWell Blog",
    description: "The differences between routine housekeeping and deep restorative cleaning, and when your home needs a top-to-bottom reset of high-touch surfaces.",
  },
  "/blog/office-cleaning-reception": {
    title: "How Reception Cleanliness Boosts Client Trust | ShineWell Blog",
    description: "Expert advice on managing the physical first impression of your corporate lobby, reception desks, and waiting rooms to build immediate professional trust.",
  },
  "/privacy": {
    title: "Privacy Policy | ShineWell Commercial & Home Cleaning Services",
    description: "Read the Privacy Policy of ShineWell Commercial & Home Cleaning Services. Learn how we collect, protect, and handle your personal data and secure Stripe payments.",
  },
  "/terms": {
    title: "Terms of Service | ShineWell Commercial & Home Cleaning Services",
    description: "Review the Terms of Service for ShineWell Commercial & Home Cleaning Services, including our 24-hour cancellation policy, satisfaction guarantee, and general liabilities.",
  },
};

function prerender() {
  const distDir = path.join(process.cwd(), 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error(`Error: Compiled index.html template not found at "${templatePath}". Please run vite build first.`);
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');

  console.log('--- Starting Pre-rendering of key routes ---');

  for (const route of routes) {
    console.log(`Pre-rendering route: ${route}`);

    try {
      // Render the AppRoutes inside a MemoryRouter loaded with the specific route
      const appHtml = renderToString(
        <MemoryRouter initialEntries={[route]}>
          <AppRoutes />
        </MemoryRouter>
      );

      // Inject the rendered body HTML inside the index.html's root div
      let html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Inject route-specific metadata for premium Search & AI Answer Engine Optimization (AEO)
      const meta = routeMetadata[route] || routeMetadata['/'];
      
      // Replace Title
      html = html.replace(
        /<title>.*?<\/title>/,
        `<title>${meta.title}</title>`
      );

      // Replace or Inject Description Meta Tag
      if (html.includes('meta name="description"')) {
        html = html.replace(
          /<meta name="description" content=".*?"\s*\/?>/,
          `<meta name="description" content="${meta.description}" />`
        );
      } else {
        html = html.replace(
          '</head>',
          `  <meta name="description" content="${meta.description}" />\n  </head>`
        );
      }

      // Ensure robots meta tag is index,follow
      if (html.includes('name="robots"')) {
        html = html.replace(
          /<meta name="robots" content=".*?"\s*\/?>/,
          `<meta name="robots" content="index,follow" />`
        );
      }

      // Replace Open Graph / Facebook Title
      if (html.includes('property="og:title"')) {
        html = html.replace(
          /<meta property="og:title" content=".*?"\s*\/?>/,
          `<meta property="og:title" content="${meta.title}" />`
        );
      }

      // Replace Open Graph / Facebook Description
      if (html.includes('property="og:description"')) {
        html = html.replace(
          /<meta property="og:description" content=".*?"\s*\/?>/,
          `<meta property="og:description" content="${meta.description}" />`
        );
      }

      // Replace Twitter Title
      if (html.includes('property="twitter:title"')) {
        html = html.replace(
          /<meta property="twitter:title" content=".*?"\s*\/?>/,
          `<meta property="twitter:title" content="${meta.title}" />`
        );
      }

      // Replace Twitter Description
      if (html.includes('property="twitter:description"')) {
        html = html.replace(
          /<meta property="twitter:description" content=".*?"\s*\/?>/,
          `<meta property="twitter:description" content="${meta.description}" />`
        );
      }

      // Inject or Replace self-referencing canonical URL
      const canonicalUrl = `https://shinewellcleaning.com${route === '/' ? '/' : route}`;
      if (html.includes('link rel="canonical"')) {
        html = html.replace(
          /<link rel="canonical" href=".*?"\s*\/?>/,
          `<link rel="canonical" href="${canonicalUrl}" />`
        );
      } else {
        html = html.replace(
          '</head>',
          `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`
        );
      }

      // Dynamic JSON-LD schema generation and injection
      let schemaBlock = '';
      if (route === '/') {
        const homeFaqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does cleaning cost in Kansas City?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost vary based on the size of your space, the type of cleaning (routine, deep, move out), and the frequency of service. Contact us for a free, personalized estimate tailored to your specific commercial or residential needs."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer same day cleaning in Kansas City?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "While we recommend booking in advance to secure your preferred time, we do our best to accommodate same day or last minute cleaning requests in Kansas City when our schedule allows. Please call us directly for urgent needs."
              }
            },
            {
              "@type": "Question",
              "name": "Are your cleaners background checked?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, absolutely. Every member of the ShineWell team undergoes a thorough background check before they are hired. We only send trusted, reliable professionals into your property."
              }
            },
            {
              "@type": "Question",
              "name": "Do you bring your own cleaning supplies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! We bring our own professional-grade, eco-friendly cleaning supplies and equipment. If you have specific products you'd prefer us to use on certain surfaces, just let us know."
              }
            },
            {
              "@type": "Question",
              "name": "Do you clean Airbnb and short term rentals in Kansas City?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialize in turnover cleaning for Airbnb and short term rentals across Kansas City. We ensure your property is spotless, sanitized, and guest ready between every stay."
              }
            },
            {
              "@type": "Question",
              "name": "What is included in a deep cleaning?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A deep clean is a comprehensive, top to bottom service. It includes everything in our standard clean, plus detailed tasks like hand wiping baseboards, cleaning inside window sills, wiping down ceiling fans, and scrubbing grout lines."
              }
            }
          ]
        };
        schemaBlock = `\n  <script type="application/ld+json">\n  ${JSON.stringify(homeFaqSchema, null, 2).replace(/\n/g, '\n  ')}\n  </script>`;
      } else if (route === '/faq') {
        const faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Why should I trust ShineWell?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We’re proud to offer professional housecleaning services and employ residential housekeepers who pride themselves on top quality services. After undergoing an extensive background check, each member of our team is thoroughly trained on every step of our detailed cleaning plans. We also back all of our work with our satisfaction guarantee. These are just a few of the many reasons why customers trust ShineWell."
              }
            },
            {
              "@type": "Question",
              "name": "Who does ShineWell hire to clean my home?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can rest assured that all of our professional housecleaners are fully trained and insured. We respect all of our customers by never smoking, drinking, eating, or using appliances during our home cleanings. We wear our uniforms with pride and confidently carry out services that exceed expectations. We also undergo regular training to ensure that we’re always up to date with all of the latest and greatest cleaning techniques. For additional safety and peace of mind, the work we perform for each customer is held accountable by a trusted and experienced supervisor."
              }
            },
            {
              "@type": "Question",
              "name": "How will our relationship work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "At ShineWell, we recognize the importance of communication, especially when it comes to important valuables in your home and any specific cleaning requests you may have. We value your trust and do everything possible to earn it by performing reliable, affordable, top notch cleaning services designed to meet your needs and exceed your expectations."
              }
            },
            {
              "@type": "Question",
              "name": "What should I do before ShineWell arrives?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To ensure maximum efficiency, we ask that you pick up any toys or clothing before we arrive. We also ask that you find a place for your pets so they’re comfortable while we clean. Following through with these requests will help both your family and our team ensure that all of your possessions are in a safe place."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need to be home for every cleaning service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Because we work on an 8 a.m. to 5 p.m. schedule, Monday to Friday, most of our customers aren’t home when we arrive. In a majority of these cases, our insured housecleaning professionals are provided with a spare key or garage code."
              }
            },
            {
              "@type": "Question",
              "name": "Am I liable for employment taxes, workers' compensation, or insurance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ShineWell is proud to be a worry free housecleaning service solution. This means that we take care of any personal liability with regard to social security taxes and work-related injuries. We’re fully licensed and insured for your peace of mind."
              }
            },
            {
              "@type": "Question",
              "name": "What do you not clean?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our professional housecleaning services are designed to keep your home comfortable and clean. We customize services to accommodate your preferences so you never have to worry about paying for a service you don’t need or want. To ensure we provide your home with the highest quality of care, we don’t typically: Clean toys, Clean the inside of your fireplace, Pick up clutter, Clean your iron, Do laundry, Wash dishes. We want to make sure that all of your belongings are in the right place when we leave, which is why we leave these organizational tasks to you. However, we’re happy to clean the inside of your cabinets, stove, and refrigerator upon request."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need to provide your team with my own cleaning equipment or supplies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. We arrive with all of the cleaning materials we need and take them with us when we leave. We’re proud to use the best products and vacuums on the market to ensure that we leave your home looking spotless. If you have any preferences in regards to what cleaning products we use, feel free to let us know and we’ll do everything we can to work with your requests."
              }
            }
          ]
        };
        schemaBlock = `\n  <script type="application/ld+json">\n  ${JSON.stringify(faqSchema, null, 2).replace(/\n/g, '\n  ')}\n  </script>`;
      } else if (route.startsWith('/services/')) {
        const serviceKey = route.split('/').pop() || '';
        const serviceMap: Record<string, { name: string; desc: string }> = {
          'routine-housekeeping': {
            name: "Routine Housekeeping",
            desc: "Meticulous weekly, bi-weekly, or monthly home cleaning and housekeeping in the greater Overland Park & KC Metro. Our customized plans ensure that your bathrooms, kitchen, and living areas remain beautifully clean."
          },
          'deep-dives': {
            name: "Deep Home Cleaning & Restorative Sanitization",
            desc: "Comprehensive, top-to-bottom deep cleaning services. This premium, detailed package targets hard-to-reach areas, hand-wipes baseboards, sanitizes tile grout, scrubs window sills, and eliminates deep-seated dirt."
          },
          'move-in-move-out': {
            name: "Move-In & Move-Out Cleaning",
            desc: "Meticulous move-in and move-out cleaning services to ensure a seamless residential transition. We handle everything from deep-cleaning empty cabinets and scrubbing appliances to detailing baseboards."
          },
          'commercial-deep-cleaning': {
            name: "Light Commercial Cleaning",
            desc: "Commercial office and business cleaning services custom-tailored to fit your corporate schedule. Sanitizes reception lobbies, desk workstations, restrooms, and breakrooms."
          },
          'specialized-treatments': {
            name: "Specialized Property & Restoration Cleaning",
            desc: "Specialized cleaning treatments including expert upholstery care, leather conditioning, and hardwood floor polishing. We use advanced, eco-friendly sanitization techniques and allergen-safe green products."
          },
          'organizing': {
            name: "Professional Home & Office Organizing",
            desc: "Professional home and office organization services, designing sustainable systems to keep clutter away. We guide you through sorting, decluttering, and optimizing spaces."
          },
          'hoarder-cleanup': {
            name: "Compassionate Hoarder House Clean Up",
            desc: "Compassionate, highly confidential hoarding and extreme clutter cleanup services. Sorting valuables, removing heavy debris, and performing thorough deep sanitization and odor removal."
          },
          'junk-removal': {
            name: "Junk Removal & Dumpster Services",
            desc: "Eco-friendly junk removal and dumpster logistics across the metro for residential and commercial clear-outs. Heavy loading and prioritizing local donation centers or recycling."
          },
          'post-construction': {
            name: "Post-Renovation & Construction Cleaning",
            desc: "Thorough post-construction and post-renovation cleaning services. Eliminates drywall dust with HEPA vacuums, scrubs paint splatters, and washes baseboards."
          }
        };

        const serviceInfo = serviceMap[serviceKey];
        if (serviceInfo) {
          const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": serviceInfo.name,
            "description": serviceInfo.desc,
            "provider": {
              "@type": "HouseCleaningService",
              "@id": "https://shinewellcleaning.com/#business",
              "name": "ShineWell Commercial and Home Cleaning Services",
              "telephone": "(913) 325-1400",
              "url": "https://shinewellcleaning.com"
            },
            "areaServed": [
              {
                "@type": "AdministrativeArea",
                "name": "Overland Park / KC metro"
              },
              {
                "@type": "City",
                "name": "Overland Park"
              },
              {
                "@type": "City",
                "name": "Kansas City"
              },
              {
                "@type": "City",
                "name": "Brookside"
              },
              {
                "@type": "City",
                "name": "Prairie Village"
              },
              {
                "@type": "City",
                "name": "Lee's Summit"
              }
            ]
          };
          schemaBlock = `\n  <script type="application/ld+json">\n  ${JSON.stringify(serviceSchema, null, 2).replace(/\n/g, '\n  ')}\n  </script>`;
        }
      }

      if (schemaBlock) {
        html = html.replace('</head>', `${schemaBlock}\n  </head>`);
      }

      // Determine where to save the pre-rendered HTML file
      if (route === '/') {
        // Root goes directly to dist/index.html
        fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');
      } else {
        // Other routes like /about go to dist/about/index.html
        const targetDir = path.join(distDir, route.substring(1));
        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
      }
    } catch (err) {
      console.error(`Error rendering route "${route}":`, err);
    }
  }

  console.log('--- Pre-rendering completed successfully! ---');
}

prerender();
