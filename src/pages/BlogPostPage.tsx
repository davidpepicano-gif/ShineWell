import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPostPage() {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find(p => p.id === postId);

  useEffect(() => {
    if (post) {
      // Mapping for specific SEO Titles and Meta Descriptions matching the prerender/AEO requirements
      const seoTitles: Record<string, string> = {
        'how-often-professional-house-cleaning-kansas-city': "How Often Should You Get Your House Cleaned? | KC Guide",
        'is-hiring-a-house-cleaning-service-worth-it': "Is Hiring a House Cleaning Service Worth It? (KC 2026)",
        'standard-clean-vs-deep-clean-difference': "Standard Clean vs. Deep Clean: What's the Difference?",
        'commercial-cleaning-kansas-city': "Why KC Businesses Are Rethinking Office Cleanliness",
        'regular-house-cleaning-kansas-city': "How Often Should You Get Your House Cleaned? | ShineWell",
        'deep-cleaning-kansas-city': "Standard vs. Deep Cleaning: Which One Does Your Home Need?",
        'office-cleaning-reception': "How Reception Cleanliness Boosts Client Trust | ShineWell Blog",
        'kansas-city-restoration-pros-recommendation': "Trusted Property Restoration in KC | ShineWell Recommends"
      };

      const metaDescriptions: Record<string, string> = {
        'how-often-professional-house-cleaning-kansas-city': "How often should you have your house professionally cleaned in Kansas City? Weekly, biweekly, or monthly — here's how to choose the right frequency.",
        'is-hiring-a-house-cleaning-service-worth-it': "Is a house cleaning service worth the money? Here's an honest look at the cost, time saved, and how to decide — for Kansas City homeowners.",
        'standard-clean-vs-deep-clean-difference': "Standard clean vs. deep clean — what's the difference, what's included in each, and which one you need? A simple guide for Kansas City homeowners.",
        'commercial-cleaning-kansas-city': "Learn why Kansas City business owners trust ShineWell for meticulous commercial cleaning that respects their space, team productivity, and professional image.",
        'regular-house-cleaning-kansas-city': "Determine the ideal recurring cleaning frequency for your Kansas City home. Weekly, biweekly, or monthly — choose the plan that fits your life.",
        'deep-cleaning-kansas-city': "Confused about whether to book a standard maintenance clean or a top-to-bottom deep clean? Here's an honest breakdown of what's included in each.",
        'office-cleaning-reception': "Expert advice on managing the physical first impression of your corporate lobby, reception desks, and waiting rooms to build immediate professional trust.",
        'kansas-city-restoration-pros-recommendation': "ShineWell Cleaning Services proudly recommends Jason and the team at Kansas City Restoration Pros for water, fire, mold, and storm damage restoration."
      };

      document.title = seoTitles[post.id] || `${post.title} | ShineWell Blog`;
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', metaDescriptions[post.id] || post.excerpt);
      }
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-24 px-6">
        <h1 className="text-4xl font-serif text-[#2C302E] mb-4">Post Not Found</h1>
        <p className="text-[#5c635f] mb-6">We couldn't find the article you're looking for.</p>
        <Link to="/blog" className="bg-[#C86B53] text-white px-6 py-3 rounded-full font-medium hover:bg-[#b55e47] transition-colors">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-14 bg-[#F9F8F6] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-[#5c635f] hover:text-[#C86B53] transition-colors mb-5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-6 text-sm text-[#a3aba6] mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-xl mb-12">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-lg prose-stone max-w-none text-justify">
            {post.content}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
