
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const BlogCard = ({ post, className = '' }) => {
  return (
    <Link to={`/post/${post.id}`} className={`block group ${className}`}>
      <Card className="overflow-hidden border-0 transition-all duration-300 h-full bg-transparent hover:bg-card">
        <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <CardContent className="p-0">
          <div className="flex items-center space-x-2 mb-2">
            <Badge variant="secondary" className="font-normal">
              {post.category}
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center">
              <Clock className="h-3 w-3 mr-1" /> {post.readTime}
            </span>
          </div>
          <h3 className="text-xl font-medium group-hover:text-primary transition-colors mb-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="p-0 mt-4 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{post.date}</span>
          <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
            Read more <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};
