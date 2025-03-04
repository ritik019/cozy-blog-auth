
import React, { useState } from 'react';
import { BlogCard, BlogPost } from '@/components/BlogCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';

// Sample blog data
const allPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Principles of Minimalist Design in Modern Web Development',
    excerpt: 'Explore how minimalist design principles can create more effective, elegant, and user-friendly digital experiences that stand the test of time.',
    date: 'June 15, 2023',
    category: 'Design',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    readTime: '6 min read'
  },
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
  },
  {
    id: '5',
    title: 'The Evolution of Typography in Digital Design',
    excerpt: 'How typography has evolved in the digital age and best practices for using type effectively in modern interfaces.',
    date: 'April 10, 2023',
    category: 'Typography',
    imageUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readTime: '8 min read'
  },
  {
    id: '6',
    title: 'Designing for Performance: Speed and User Experience',
    excerpt: 'Why site speed matters for UX and practical techniques to optimize performance without sacrificing design quality.',
    date: 'March 25, 2023',
    category: 'Performance',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readTime: '6 min read'
  },
  {
    id: '7',
    title: 'Color Theory in Modern Web Design',
    excerpt: 'Understanding color psychology and applying color theory to create more impactful and effective web designs.',
    date: 'March 12, 2023',
    category: 'Design',
    imageUrl: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80',
    readTime: '5 min read'
  },
  {
    id: '8',
    title: 'Responsive Design vs. Adaptive Design: Which to Choose?',
    excerpt: 'A detailed comparison of responsive and adaptive design approaches, with guidance on selecting the right strategy for your project.',
    date: 'February 28, 2023',
    category: 'Responsive',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-6c222b05fce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    readTime: '7 min read'
  }
];

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  
  // Get all unique categories
  const categories = ['all', ...Array.from(new Set(allPosts.map(post => post.category)))];
  
  // Filter posts based on search and category
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || post.category === category;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto py-8">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">Blog</h1>
        <p className="text-muted-foreground text-lg">
          Explore our collection of articles on design, UX, and development.
        </p>
      </section>
      
      {/* Filters */}
      <section className="glass p-6 rounded-xl">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/50"
            />
          </div>
          <div className="w-full md:w-48">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="glass">
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section>
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <Button onClick={() => { setSearchTerm(''); setCategory('all'); }}>
              Reset Filters
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;
