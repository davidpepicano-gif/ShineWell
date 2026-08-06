import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPage() {
  useEffect(() => {
    document.title = "Cleaning Tips & News | ShineWell Blog Overland Park & KC";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Explore expert cleaning tips, office maintenance guides, and localized Overland Park & Kansas City news from ShineWell Commercial & Home Cleaning Services."
      );
    }

    // Inject JSON-LD Blog Schema
    let scriptTag = document.getElementById('json-ld-blog-list') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-blog-list';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "ShineWell Cleaning Services Blog",
      "description": "Expert advice, local Kansas City updates, and cleaning insights from the ShineWell team.",
      "url": "https://shinewellcleaning.com/blog",
      "blogPost": blogPosts.map((post) => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "url": `https://shinewellcleaning.com/blog/${post.id}`
      }))
    };

    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      const existingScript = document.getElementById('json-ld-blog-list');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <main className="pt-24 pb-14 bg-[#F9F8F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="text-center max-w-3xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif text-[#2C302E] mb-6">Cleaning Tips & News</h1>
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#e8e5df] text-left shadow-sm mb-6">
              <p className="text-base md:text-lg text-[#2C302E] leading-relaxed font-light">
                <strong>ShineWell</strong> shares expert cleaning tips, localized Kansas City news, and seasonal maintenance advice to help you maintain a beautiful, healthy home or commercial office environment. Written by our experienced, fully insured cleaning experts, our articles outline practical strategies and checklists you can implement between our professional visits.
              </p>
            </div>
            <p className="text-lg text-[#5c635f] font-light">
              Expert advice, local Kansas City updates, and insights from the ShineWell team.
            </p>
          </motion.div>
        </header>

        <section aria-label="Blog posts list" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <article key={post.id}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#e8e5df] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <Link to={`/blog/${post.id}`} className="block aspect-[4/3] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-[#a3aba6] mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-serif text-[#2C302E] mb-4 line-clamp-2 hover:text-[#C86B53] transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-[#5c635f] font-light leading-relaxed mb-6 flex-grow line-clamp-3 text-justify">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-[#4A5D4E] font-medium text-sm hover:text-[#C86B53] transition-colors mt-auto"
                  >
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
