
import React from 'react';
import { FeaturedPost } from '@/components/FeaturedPost';
import { BlogCard } from '@/components/BlogCard';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample trending blog data
const trendingPosts = [
  {
    id: '1',
    title: 'The Future of Web Development: AI-Assisted Coding',
    excerpt: 'Explore how AI tools are revolutionizing the way developers write code, increasing productivity and accessibility in the tech industry.',
    date: 'May 22, 2023',
    category: 'AI',
    imageUrl: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'Web3 and the Decentralized Internet: What Developers Need to Know',
    excerpt: 'A comprehensive guide to understanding Web3 technologies, blockchain integration, and how to prepare for the next era of web development.',
    date: 'June 3, 2023',
    category: 'Web3',
    imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    readTime: '10 min read'
  },
  {
    id: '3',
    title: 'Optimizing React Performance: Advanced Techniques',
    excerpt: 'Learn how to identify and resolve performance bottlenecks in React applications with practical code examples and optimization strategies.',
    date: 'May 18, 2023',
    category: 'React',
    imageUrl: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readTime: '7 min read'
  },
  {
    id: '4',
    title: 'Building Accessible Interfaces: A Developer's Guide',
    excerpt: 'A deep dive into web accessibility standards and practical implementation strategies to create inclusive digital experiences for all users.',
    date: 'April 29, 2023',
    category: 'Accessibility',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readTime: '6 min read'
  }
];

// Weekly trending posts
const weeklyTrending = [...trendingPosts];

// Monthly trending posts
const monthlyTrending = [
  {
    id: '5',
    title: 'Understanding TypeScript Generics: Beyond the Basics',
    excerpt: 'Master the power of TypeScript generics with advanced patterns and real-world examples to write more flexible and type-safe code.',
    date: 'April 15, 2023',
    category: 'TypeScript',
    imageUrl: 'https://images.unsplash.com/photo-1629654291663-b91ad427698f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    readTime: '9 min read'
  },
  {
    id: '6',
    title: 'Serverless Architecture: When and How to Implement',
    excerpt: 'Explore the benefits, limitations, and best practices for adopting serverless architectures in your tech stack.',
    date: 'March 28, 2023',
    category: 'Cloud',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readTime: '8 min read'
  },
  ...trendingPosts.slice(0, 2)
];

const Trending = () => {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto py-8">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">Trending Tech</h1>
        <p className="text-muted-foreground text-lg">
          Discover the hottest topics and articles in the tech world right now.
        </p>
      </section>
      
      {/* Main Featured Post */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Badge variant="outline" className="bg-red-500/10 text-red-500 hover:bg-red-500/20 hover:text-red-600 border-none px-3 py-1">
            HOT
          </Badge>
          <h2 className="text-2xl font-medium">Featured Tech Story</h2>
        </div>
        <FeaturedPost post={trendingPosts[0]} />
      </section>
      
      {/* Trending Tabs */}
      <section>
        <Tabs defaultValue="weekly" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-medium">Trending Now</h2>
            <TabsList className="glass">
              <TabsTrigger value="weekly">This Week</TabsTrigger>
              <TabsTrigger value="monthly">This Month</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="weekly" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {weeklyTrending.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="monthly" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {monthlyTrending.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default Trending;
