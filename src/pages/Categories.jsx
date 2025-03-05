
import React, { useState } from 'react';
import { BlogCard } from '@/components/BlogCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample categorized blog data
const allPosts = [
  // Web Development Category
  {
    id: '1',
    title: 'Modern CSS Techniques Every Frontend Developer Should Know',
    excerpt: 'From CSS Grid to custom properties, explore the cutting-edge CSS features that are changing how we build layouts.',
    date: 'June 15, 2023',
    category: 'Web Development',
    subcategory: 'CSS',
    imageUrl: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readTime: '6 min read'
  },
  {
    id: '2',
    title: 'The Complete Guide to React Server Components',
    excerpt: 'Understand how React Server Components work and how they change the way we think about building React applications.',
    date: 'June 10, 2023',
    category: 'Web Development',
    subcategory: 'React',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readTime: '8 min read'
  },
  {
    id: '3',
    title: 'Building Web Applications with HTMX and Alpine.js',
    excerpt: 'Explore how these lightweight JavaScript tools can help you build interactive web applications with less complexity.',
    date: 'June 5, 2023',
    category: 'Web Development',
    subcategory: 'JavaScript',
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    readTime: '7 min read'
  },
  
  // AI and Machine Learning Category
  {
    id: '4',
    title: 'Introduction to Machine Learning for JavaScript Developers',
    excerpt: 'Learn how to integrate machine learning capabilities into your JavaScript applications using TensorFlow.js.',
    date: 'May 28, 2023',
    category: 'AI and Machine Learning',
    subcategory: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1677442135136-760c813028c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readTime: '10 min read'
  },
  {
    id: '5',
    title: 'Building Natural Language Processing Applications',
    excerpt: 'A step-by-step guide to implementing NLP features in your applications using modern libraries and APIs.',
    date: 'May 22, 2023',
    category: 'AI and Machine Learning',
    subcategory: 'NLP',
    imageUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readTime: '12 min read'
  },
  {
    id: '6',
    title: 'The Ethics of AI: Responsible Development Practices',
    excerpt: 'Explore the ethical considerations that developers should keep in mind when building AI-powered applications.',
    date: 'May 16, 2023',
    category: 'AI and Machine Learning',
    subcategory: 'Ethics',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80',
    readTime: '9 min read'
  },
  
  // DevOps and Infrastructure Category
  {
    id: '7',
    title: 'Getting Started with Docker: A Practical Guide',
    excerpt: 'Learn how to containerize your applications and set up development environments with Docker.',
    date: 'May 10, 2023',
    category: 'DevOps and Infrastructure',
    subcategory: 'Docker',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readTime: '8 min read'
  },
  {
    id: '8',
    title: 'Continuous Integration Best Practices with GitHub Actions',
    excerpt: 'Set up efficient CI/CD pipelines for your projects using GitHub Actions with these battle-tested strategies.',
    date: 'May 5, 2023',
    category: 'DevOps and Infrastructure',
    subcategory: 'CI/CD',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readTime: '7 min read'
  },
  {
    id: '9',
    title: 'Kubernetes for Application Developers',
    excerpt: 'A guide to understanding Kubernetes concepts and workflows from an application developer's perspective.',
    date: 'April 30, 2023',
    category: 'DevOps and Infrastructure',
    subcategory: 'Kubernetes',
    imageUrl: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readTime: '11 min read'
  }
];

// Extract all unique categories
const categories = ['All', ...Array.from(new Set(allPosts.map(post => post.category)))];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Filter posts by active category
  const filteredPosts = activeCategory === 'All' 
    ? allPosts 
    : allPosts.filter(post => post.category === activeCategory);
  
  // Get unique subcategories for the active category
  const subcategories = activeCategory === 'All'
    ? []
    : Array.from(new Set(filteredPosts.map(post => post.subcategory)));
  
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto py-8">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">Tech Categories</h1>
        <p className="text-muted-foreground text-lg">
          Explore our articles by technology categories and specializations.
        </p>
      </section>
      
      {/* Category Navigation */}
      <section className="glass p-1 rounded-xl overflow-x-auto">
        <div className="flex space-x-1 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>
      
      {/* Category Content */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-medium">{activeCategory === 'All' ? 'All Categories' : activeCategory}</h2>
          {subcategories.length > 0 && (
            <Tabs defaultValue={subcategories[0]} className="w-auto">
              <TabsList className="glass">
                {subcategories.map((subcategory) => (
                  <TabsTrigger key={subcategory} value={subcategory}>
                    {subcategory}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {subcategories.map((subcategory) => (
                <TabsContent key={subcategory} value={subcategory} className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts
                      .filter(post => post.subcategory === subcategory)
                      .map((post) => (
                        <BlogCard key={post.id} post={post} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
        
        {/* If there are no subcategories or "All" is selected */}
        {(subcategories.length === 0 || activeCategory === 'All') && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Categories;
