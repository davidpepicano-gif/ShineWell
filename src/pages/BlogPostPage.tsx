import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPostPage() {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-32 px-6">
        <h1 className="text-4xl font-serif text-[#2C302E] mb-4">Post Not Found</h1>
        <p className="text-[#5c635f] mb-8">We couldn't find the article you're looking for.</p>
        <Link to="/blog" className="bg-[#C86B53] text-white px-6 py-3 rounded-full font-medium hover:bg-[#b55e47] transition-colors">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-[#F9F8F6] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-[#5c635f] hover:text-[#C86B53] transition-colors mb-8"
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
