
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FeaturedPost } from '@/components/FeaturedPost';
import { BlogCard } from '@/components/BlogCard';
import { useAuth } from '@/context/AuthContext';

// Sample blog data
const featuredPost = {
  id: '1',
  title: 'The Principles of Minimalist Design in Modern Web Development',
  excerpt: 'Explore how minimalist design principles can create more effective, elegant, and user-friendly digital experiences that stand the test of time.',
  date: 'June 15, 2023',
  category: 'Design',
  imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
  readTime: '6 min read'
};

const recentPosts = [
  {
    id: '2',
    title: 'Creating Intuitive User Experiences',
    excerpt: 'Learn how to design interfaces that feel natural and intuitive to users, leading to better engagement and satisfaction.',
    date: 'May 28, 2023',
    category: 'UX',
    imageUrl: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    readTime: '5 min read'
  },
  {
    id: '3',
    title: 'The Power of Whitespace in Web Design',
    excerpt: 'Discover how strategic use of whitespace can dramatically improve readability, focus, and overall aesthetic quality.',
    date: 'May 15, 2023',
    category: 'Design',
    imageUrl: 'https://images.unsplash.com/photo-1634942537034-a3b20142a72c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    readTime: '4 min read'
  },
  {
    id: '4',
    title: 'Accessibility First: Designing for Everyone',
    excerpt: 'Why accessibility should be a foundational concern in design rather than an afterthought, and how to implement it effectively.',
    date: 'April 30, 2023',
    category: 'Accessibility',
    imageUrl: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    readTime: '7 min read'
  }
];

const Index: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="space-y-20 mb-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto pt-16 pb-8 animate-slide-up">
        <span className="text-sm text-primary font-medium uppercase tracking-wider">The Minimalist Blog</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6">
          Design Insights for the Modern Era
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Exploring the intersection of minimalist design, user experience, and technological innovation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/blog">
            <Button size="lg" className="min-w-[180px]">
              Browse Articles
            </Button>
          </Link>
          {!user && (
            <Link to="/signup">
              <Button size="lg" variant="outline" className="min-w-[180px]">
                Join the Community
              </Button>
            </Link>
          )}
        </div>
      </section>

      {/* Featured Post */}
      <section>
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-medium mb-4">Featured Post</h2>
          <p className="text-muted-foreground">
            Our most important article of the moment, carefully selected for you.
          </p>
        </div>
        <FeaturedPost post={featuredPost} />
      </section>

      {/* Recent Posts */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-medium">Recent Posts</h2>
          <Link to="/blog" className="group flex items-center text-primary">
            View all <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="glass rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Stay in the loop</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest design insights, articles, and resources.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/50 flex-grow"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

// Make sure to add this component
const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { className?: string }> = ({ className, ...props }) => {
  return (
    <input
      className={`px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${className}`}
      {...props}
    />
  );
};

export default Index;
