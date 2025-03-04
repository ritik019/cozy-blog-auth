
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Sample blog posts data
const posts = [
  {
    id: '1',
    title: 'The Principles of Minimalist Design in Modern Web Development',
    excerpt: 'Explore how minimalist design principles can create more effective, elegant, and user-friendly digital experiences that stand the test of time.',
    content: `
      <p class="lead">Minimalism in web design isn't just an aesthetic choice—it's a strategic approach to creating more effective, user-focused digital experiences that stand the test of time.</p>
      
      <p>In an age of digital overload, where users are bombarded with information from countless sources, minimalist design offers a respite. It strips away the unnecessary, focusing on what truly matters: content, functionality, and user experience.</p>
      
      <h2>The Core Principles of Minimalist Design</h2>
      
      <p>At its heart, minimalist design adheres to several foundational principles:</p>
      
      <ul>
        <li><strong>Focus on essentials</strong>: Eliminate anything that doesn't serve a clear purpose or add significant value.</li>
        <li><strong>Negative space as a design element</strong>: Use whitespace strategically to create breathing room and focus attention.</li>
        <li><strong>Limited color palette</strong>: Choose fewer colors with purpose, often relying on contrast to create visual hierarchy.</li>
        <li><strong>Simplicity in typography</strong>: Select clean, readable fonts and use a consistent typographic hierarchy.</li>
        <li><strong>Reduced number of elements</strong>: Every component should earn its place in the design.</li>
      </ul>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80" alt="Minimalist design example" />
        <figcaption>Modern minimalist design example showcasing ample whitespace and limited color palette</figcaption>
      </figure>
      
      <h2>The Benefits of Minimalism in Web Design</h2>
      
      <p>When applied thoughtfully, minimalist design offers numerous advantages:</p>
      
      <h3>Improved User Experience</h3>
      
      <p>By removing distractions and focusing on essential elements, minimalist designs create more intuitive interfaces. Users find what they need more quickly, with less cognitive load and frustration.</p>
      
      <h3>Faster Load Times</h3>
      
      <p>With fewer elements to load, minimalist websites typically perform better. This technical benefit directly impacts user experience, as even a one-second delay in page load time can significantly increase bounce rates.</p>
      
      <h3>Timeless Appeal</h3>
      
      <p>Minimalist designs tend to age well. By focusing on fundamentals rather than trends, they maintain their effectiveness and appeal for longer periods, reducing the need for frequent redesigns.</p>
      
      <h3>Better Mobile Experience</h3>
      
      <p>The principles of minimalism align perfectly with mobile design requirements. Limited screen real estate demands focused content and functionality—exactly what minimalism delivers.</p>
      
      <h2>Finding Balance: Minimalism vs. Functionality</h2>
      
      <p>The greatest challenge in minimalist design is finding the right balance. Too minimal, and you might sacrifice important functionality or content; not minimal enough, and you lose the benefits of the approach.</p>
      
      <p>Successful minimalist design isn't about removing as much as possible—it's about keeping exactly what's needed and ensuring what remains is excellently executed.</p>
      
      <h2>Conclusion</h2>
      
      <p>As we move into an era of increasing digital complexity, the value of minimalist design continues to grow. By creating spaces that focus on what matters most to users, minimalist web design doesn't just look good—it works better.</p>
      
      <p>The next time you approach a web project, consider how minimalist principles might help you create a more effective, elegant, and enduring digital experience.</p>
    `,
    date: 'June 15, 2023',
    category: 'Design',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    readTime: '6 min read',
    author: {
      name: 'Alex Chen',
      role: 'Design Lead',
      avatar: 'https://i.pravatar.cc/150?img=11',
    }
  },
  // Add similar content for your other posts...
  {
    id: '2',
    title: 'Creating Intuitive User Experiences',
    excerpt: 'Learn how to design interfaces that feel natural and intuitive to users, leading to better engagement and satisfaction.',
    content: `<p class="lead">Creating intuitive user experiences isn't just about following design trends—it's about deeply understanding how users think and interact with digital products.</p>
      
      <p>An intuitive interface feels natural to users. It anticipates their needs, follows familiar patterns, and provides clear feedback at every step. When done right, users barely notice the design because it simply works as expected.</p>
      
      <h2>What Makes an Experience Intuitive?</h2>
      
      <p>Intuitive experiences share several key characteristics:</p>
      
      <ul>
        <li><strong>Familiarity</strong>: They build on existing mental models and established patterns</li>
        <li><strong>Consistency</strong>: They maintain uniform behavior throughout the interface</li>
        <li><strong>Clear feedback</strong>: Users always know what's happening and what to expect next</li>
        <li><strong>Forgiveness</strong>: They allow users to easily recover from mistakes</li>
        <li><strong>Progressive disclosure</strong>: They reveal complexity gradually, as needed</li>
      </ul>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" alt="User interface sketch" />
        <figcaption>Sketching user flows helps identify and resolve potential points of confusion</figcaption>
      </figure>
      
      <h2>Strategies for Creating Intuitive UX</h2>
      
      <h3>1. Know Your Users Deeply</h3>
      
      <p>Intuitive design starts with understanding who your users are, what they're trying to achieve, and how they think. User research isn't optional—it's the foundation of intuitive experiences.</p>
      
      <h3>2. Map the User Journey</h3>
      
      <p>Identify the complete path users take to accomplish their goals. Where might they get confused? Where could friction occur? Address these pain points before users encounter them.</p>
      
      <h3>3. Leverage Established Patterns</h3>
      
      <p>Don't reinvent the wheel unless absolutely necessary. Users have learned certain conventions (like blue underlined text for links) that help them navigate interfaces quickly.</p>
      
      <h3>4. Test Early and Often</h3>
      
      <p>What seems intuitive to designers may not be to users. Regular usability testing with real users is essential for creating truly intuitive experiences.</p>
      
      <h2>Conclusion</h2>
      
      <p>Creating intuitive user experiences isn't a one-time effort—it's an ongoing process of learning, testing, and refining. By centering design decisions around user needs and expectations, we can create digital products that feel natural, effortless, and even delightful to use.</p>`,
    date: 'May 28, 2023',
    category: 'UX',
    imageUrl: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    readTime: '5 min read',
    author: {
      name: 'Sarah Johnson',
      role: 'UX Researcher',
      avatar: 'https://i.pravatar.cc/150?img=5',
    }
  }
];

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === id);
  
  if (!post) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-medium mb-4">Post not found</h1>
        <p className="text-muted-foreground mb-6">The post you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Back button */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/blog" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
      
      {/* Post header */}
      <header className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Badge variant="secondary" className="font-normal">
            {post.category}
          </Badge>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">{post.title}</h1>
        
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-sm text-muted-foreground">{post.author.role}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </header>
      
      {/* Featured image */}
      <div className="mb-8 rounded-xl overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-auto object-cover" 
        />
      </div>
      
      {/* Post content */}
      <article className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
      
      <Separator className="my-12" />
      
      {/* Author section */}
      <div className="glass rounded-xl p-8 mb-12">
        <div className="flex items-start md:items-center flex-col md:flex-row gap-6">
          <Avatar className="h-16 w-16">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-medium">About {post.author.name}</h3>
            <p className="text-muted-foreground mt-1">{post.author.role}</p>
            <p className="mt-4">
              A passionate designer focused on creating beautiful and functional user experiences through thoughtful and minimalist design approaches.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
