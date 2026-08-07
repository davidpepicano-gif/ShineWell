import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPostPage() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (postId === 'commercial-cleaning-kansas-city') {
      navigate('/commercial-cleaning-kansas-city', { replace: true });
    } else if (postId === 'deep-cleaning-kansas-city') {
      navigate('/services/deep-dives', { replace: true });
    } else if (postId === 'regular-house-cleaning-kansas-city') {
      navigate('/services/routine-housekeeping', { replace: true });
    } else if (postId === 'get-your-deposit-back-move-out-cleaning') {
      navigate('/blog/get-your-deposit-back-move-out-cleaning-kansas-city', { replace: true });
    }
  }, [postId, navigate]);

  const post = blogPosts.find(p => p.id === postId);

  useEffect(() => {
    if (post) {
      // Mapping for specific SEO Titles and Meta Descriptions matching the prerender/AEO requirements
      const seoTitles: Record<string, string> = {
        'house-cleaning-cost-kansas-city': "How Much Does House Cleaning Cost in Kansas City? (2026)",
        'get-your-deposit-back-move-out-cleaning-kansas-city': "How to Get Your Full Deposit Back When Moving Out (KC)",
        'recurring-office-cleaning-kansas-city': "Recurring Office Cleaning in Kansas City: What to Know",
        'move-out-cleaning-cost-kansas-city': "How Much Does Move-Out Cleaning Cost in Kansas City?",
        'small-office-cleaning-overland-park': "Cleaning Services for Small Offices in Overland Park",
        'how-often-professional-house-cleaning-kansas-city': "How Often Should You Get Your House Cleaned? | KC Guide",
        'is-hiring-a-house-cleaning-service-worth-it': "Is Hiring a House Cleaning Service Worth It? (KC 2026)",
        'standard-clean-vs-deep-clean-difference': "Standard Clean vs. Deep Clean: What's the Difference?",
        'commercial-cleaning-kansas-city': "Why KC Businesses Are Rethinking Office Cleanliness",
        'regular-house-cleaning-kansas-city': "How Often Should You Get Your House Cleaned? | ShineWell",
        'deep-cleaning-kansas-city': "Standard vs. Deep Cleaning: Which One Does Your Home Need?",
        'office-cleaning-reception': "How Reception Cleanliness Boosts Client Trust | ShineWell Blog",
        'kansas-city-restoration-pros-recommendation': "Trusted Property Restoration in KC | ShineWell Recommends",
        'how-to-choose-commercial-cleaning-company-kansas-city': "How to Choose a Commercial Cleaning Company in KC",
        'how-to-keep-your-office-clean-and-healthy': "How Keep Your Office Clean and Healthy | KC Guide",
        'weekly-vs-biweekly-vs-monthly-cleaning': "Weekly vs. Bi-Weekly vs. Monthly Cleaning: Which Is Right for Your KC Home?",
        'post-construction-cleaning-kansas-city': "Post-Construction Cleaning in Kansas City: What's Included & Checklist",
        'airbnb-turnover-cleaning-kansas-city': "Airbnb & Short-Term Rental Cleaning in Kansas City: Host Turnover Guide"
      };

      const metaDescriptions: Record<string, string> = {
        'house-cleaning-cost-kansas-city': "How much does house cleaning cost in Kansas City in 2026? Real price ranges for standard, deep, and move-out cleaning, plus what affects your quote.",
        'get-your-deposit-back-move-out-cleaning-kansas-city': "Moving out in Kansas City? Here's exactly what to clean to get your full security deposit back, plus a room-by-room checklist landlords actually check.",
        'recurring-office-cleaning-kansas-city': "Looking for reliable recurring office cleaning in the KC metro? How janitorial scheduling, scope, and pricing work, and what to look for in a provider.",
        'move-out-cleaning-cost-kansas-city': "How much does move-out cleaning cost in the KC area in 2026? Real price ranges by home size, what's included, and when it pays for itself in deposit.",
        'small-office-cleaning-overland-park': "Looking for office cleaning in Overland Park? What small offices should look for in a commercial cleaner, how scheduling works, and what it costs.",
        'how-often-professional-house-cleaning-kansas-city': "How often should you have your house professionally cleaned in Kansas City? Weekly, biweekly, or monthly — here's how to choose the right frequency.",
        'is-hiring-a-house-cleaning-service-worth-it': "Is a house cleaning service worth the money? Here's an honest look at the cost, time saved, and how to decide — for Kansas City homeowners.",
        'standard-clean-vs-deep-clean-difference': "Standard clean vs. deep clean — what's the difference, what's included in each, and which one you need? A simple guide for Kansas City homeowners.",
        'commercial-cleaning-kansas-city': "Learn why Kansas City business owners trust ShineWell for meticulous commercial cleaning that respects their space, team productivity, and professional image.",
        'regular-house-cleaning-kansas-city': "Determine the ideal recurring cleaning frequency for your Kansas City home. Weekly, biweekly, or monthly — choose the plan that fits your life.",
        'deep-cleaning-kansas-city': "Confused about whether to book a standard maintenance clean or a top-to-bottom deep clean? Here's an honest breakdown of what's included in each.",
        'office-cleaning-reception': "Expert advice on managing the physical first impression of your corporate lobby, reception desks, and waiting rooms to build immediate professional trust.",
        'kansas-city-restoration-pros-recommendation': "ShineWell Cleaning Services proudly recommends Jason and the team at Kansas City Restoration Pros for water, fire, mold, and storm damage restoration.",
        'how-to-choose-commercial-cleaning-company-kansas-city': "What to look for in a commercial cleaning company in Overland Park or KC: insurance, background checks, scope, and questions to ask before you sign.",
        'how-to-keep-your-office-clean-and-healthy': "How to keep your office clean and healthy for staff and clients: high-touch points, restroom and break-room routines, and how often to bring in pros.",
        'weekly-vs-biweekly-vs-monthly-cleaning': "Compare weekly, bi-weekly, and monthly house cleaning in Overland Park & KC. Learn cost, pros/cons, and how to choose the right schedule for your home.",
        'post-construction-cleaning-kansas-city': "Complete guide to post-construction cleaning in Overland Park & KC metro. Detailed checklist, fine drywall dust removal, window detailing, and safety.",
        'airbnb-turnover-cleaning-kansas-city': "Expert Airbnb turnover cleaning in Kansas City, Brookside, Plaza & Overland Park. Linens, restocks, 5-star checklists, and quick host turnarounds."
      };

      const pageTitle = seoTitles[post.id] || `${post.title} | ShineWell Blog`;
      const pageDescription = metaDescriptions[post.id] || post.excerpt;

      document.title = pageTitle;
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', pageDescription);
      }

      // Update Open Graph tags for HTML crawlers
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', pageTitle);
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', pageDescription);

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', `https://shinewellcleaning.com/blog/${post.id}`);

      const ogType = document.querySelector('meta[property="og:type"]');
      if (ogType) ogType.setAttribute('content', 'article');

      // Inject JSON-LD BlogPosting Schema into document head for HTML search engines
      let scriptTag = document.getElementById('json-ld-blog-post') as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'json-ld-blog-post';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }

      const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": pageDescription,
        "image": post.image,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "ShineWell Commercial & Home Cleaning Services",
          "logo": {
            "@type": "ImageObject",
            "url": "https://shinewellcleaning.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://shinewellcleaning.com/blog/${post.id}`
        }
      };

      scriptTag.textContent = JSON.stringify(schemaData);

      // Inject FAQ Schema if present for the blog post
      const faqSchemas: Record<string, any> = {
        'house-cleaning-cost-kansas-city': {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does house cleaning cost in Kansas City?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In 2026, standard recurring cleanings typically run $120 to $250 per visit, one-time deep cleans $200 to $450 or more, and move-in or move-out cleans $250 to $700, depending on home size and condition. Recurring plans cost less per visit."
              }
            },
            {
              "@type": "Question",
              "name": "Is recurring cleaning cheaper than one-time cleaning?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Weekly and biweekly visits are priced lower per visit than one-time cleans, because the home stays in better condition between appointments."
              }
            },
            {
              "@type": "Question",
              "name": "Why is a deep clean more expensive than a standard clean?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A deep clean covers detailed, built-up areas a standard visit skips, such as baseboards, inside appliances, grout, and vents, so it takes more time and typically costs 50 to 100 percent more."
              }
            },
            {
              "@type": "Question",
              "name": "Do cleaning companies charge by the hour or a flat rate?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Both exist. Many companies quote a flat rate per visit after assessing your home; hourly rates in KC commonly run $25 to $50 per cleaner."
              }
            }
          ]
        },
        'get-your-deposit-back-move-out-cleaning-kansas-city': {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What should I clean to get my full rental deposit back when moving out?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Leave the unit as clean as move-in: inside all appliances, cabinets and drawers, baseboards, window tracks, scrubbed bathrooms including grout, and mopped floors, with all trash removed. Take dated photos after cleaning as proof."
              }
            },
            {
              "@type": "Question",
              "name": "Can a landlord charge me for cleaning?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Landlords can deduct for cleaning beyond normal wear and tear. A thorough move-out clean removes the most common reason for deductions."
              }
            },
            {
              "@type": "Question",
              "name": "Is professional move-out cleaning worth it?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Often yes. When your lease requires a receipt, you are short on time, or the deposit at stake exceeds the cost of the clean, a professional move-out clean typically pays for itself in deposit recovered."
              }
            }
          ]
        },
        'recurring-office-cleaning-kansas-city': {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Who offers reliable recurring office cleaning in the Kansas City metro?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ShineWell provides recurring office and light commercial cleaning across Overland Park, Corporate Woods, and the greater KC metro, with flexible nightly, weekly, or biweekly schedules, insured and background-checked crews, and a satisfaction guarantee."
              }
            },
            {
              "@type": "Question",
              "name": "Can office cleaning be done after business hours?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Most recurring commercial clients schedule after-hours or early-morning cleaning so their team is never disrupted during the workday."
              }
            },
            {
              "@type": "Question",
              "name": "How is recurring office cleaning priced?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "After a free walkthrough, based on square footage, type of space, scope, and frequency. Recurring contracts lower the per-visit cost compared to one-time cleaning."
              }
            }
          ]
        },
        'move-out-cleaning-cost-kansas-city': {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does move-out cleaning cost in Kansas City?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In 2026, professional move-out cleaning in the KC metro typically costs $250 to $700, depending on home size and condition, roughly $150 to $300 for a small apartment and $450 to $700 or more for a large house."
              }
            },
            {
              "@type": "Question",
              "name": "Why does move-out cleaning cost more than regular cleaning?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is a detailed empty-home deep clean covering inside appliances, cabinets, baseboards, window tracks, and grout, far more than a standard visit, so it is priced closer to a deep clean."
              }
            },
            {
              "@type": "Question",
              "name": "Is professional move-out cleaning worth the cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Often yes. Cleaning is the most common deposit deduction, so when your lease requires a professional clean or your deposit exceeds the cost, it typically pays for itself."
              }
            }
          ]
        },
        'small-office-cleaning-overland-park': {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What should a small office look for in a commercial cleaning company?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Full insurance and bonding, background-checked staff, after-hours scheduling, a clear written scope, consistent crews, real local reviews, and a satisfaction guarantee."
              }
            },
            {
              "@type": "Question",
              "name": "Is a local cleaner or a national franchise better for a small office?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For small offices, a local company is usually more flexible, more accountable, and easier to reach, without the overhead of a national franchise."
              }
            },
            {
              "@type": "Question",
              "name": "How often should a small office be professionally cleaned?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most small offices do well with once- or twice-weekly recurring service plus periodic deep cleans, scaled to foot traffic."
              }
            }
          ]
        },
        'weekly-vs-biweekly-vs-monthly-cleaning': {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is bi-weekly cleaning enough for a house with dogs in Overland Park?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For one short-haired dog, yes — bi-weekly handles dander and hair buildup nicely. If you have multiple heavy-shedding breeds (like Golden Retrievers or Huskies) or dogs that track muddy paws from suburban KC yards, weekly cleaning keeps floors and furniture significantly cleaner."
              }
            },
            {
              "@type": "Question",
              "name": "Can I switch frequencies with ShineWell as my schedule changes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. You can start with weekly cleaning during busy seasons or post-renovations, switch to bi-weekly for routine care, or add a deep clean reset anytime with no long-term contracts."
              }
            }
          ]
        },
        'post-construction-cleaning-kansas-city': {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How long after contractors finish should I schedule post-construction cleaning in Overland Park?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Schedule post-construction cleaning 24 to 48 hours after all heavy contractor work and sanding are complete. This allows airborne drywall micro-dust to settle completely onto surfaces so our HEPA-filtration equipment can capture it in one thorough visit."
              }
            },
            {
              "@type": "Question",
              "name": "Do you clean inside newly installed cabinets and drawers during post-construction cleaning?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Construction dust settles heavily inside closed cabinetry during installation. We vacuum and hand-wipe every interior shelf, drawer, and hinge before you stock your kitchen or bathroom."
              }
            }
          ]
        },
        'airbnb-turnover-cleaning-kansas-city': {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you handle Airbnb turnover cleaning in Brookside, the Country Club Plaza, and Overland Park?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! ShineWell provides dedicated short-term rental turnover cleaning across Brookside, Country Club Plaza, Overland Park, Leawood, and the greater Kansas City metro area."
              }
            },
            {
              "@type": "Question",
              "name": "What happens if a guest leaves an Airbnb extremely messy or damaged in Kansas City?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our cleaning team documents the property condition with timestamped photos immediately upon arrival and alerts you so you can submit reimbursement claims through Airbnb AirCover before the next guest arrives."
              }
            }
          ]
        }
      };

      let faqScriptTag = document.getElementById('json-ld-faq-post') as HTMLScriptElement | null;
      if (faqSchemas[post.id]) {
        if (!faqScriptTag) {
          faqScriptTag = document.createElement('script');
          faqScriptTag.id = 'json-ld-faq-post';
          faqScriptTag.type = 'application/ld+json';
          document.head.appendChild(faqScriptTag);
        }
        faqScriptTag.textContent = JSON.stringify(faqSchemas[post.id]);
      } else if (faqScriptTag) {
        faqScriptTag.remove();
      }

      return () => {
        const existingScript = document.getElementById('json-ld-blog-post');
        if (existingScript) {
          existingScript.remove();
        }
        const existingFaqScript = document.getElementById('json-ld-faq-post');
        if (existingFaqScript) {
          existingFaqScript.remove();
        }
      };
    }
  }, [post]);

  if (!post) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center pt-24 px-6">
        <h1 className="text-4xl font-serif text-[#2C302E] mb-4">Post Not Found</h1>
        <p className="text-[#5c635f] mb-6">We couldn't find the article you're looking for.</p>
        <Link to="/blog" className="bg-[#C86B53] text-white px-6 py-3 rounded-full font-medium hover:bg-[#b55e47] transition-colors">
          Return to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-14 bg-[#F9F8F6] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <nav aria-label="Breadcrumb">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-[#5c635f] hover:text-[#C86B53] transition-colors mb-5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </nav>

        <article>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <header className="mb-8">
              <div className="flex items-center gap-6 text-sm text-[#a3aba6] mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>By {post.author}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] leading-tight">
                {post.title}
              </h1>
            </header>

            <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-xl mb-12">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <section className="prose prose-lg prose-stone max-w-none text-justify">
              {post.content}
            </section>
          </motion.div>
        </article>
      </div>
    </main>
  );
}
