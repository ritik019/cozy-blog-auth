
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from './BlogCard';

interface FeaturedPostProps {
  post: BlogPost;
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="block group">
      <Card className="overflow-hidden border-0 glass h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden rounded-lg">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
          <CardContent className="flex flex-col justify-center p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Badge variant="secondary" className="font-normal">
                {post.category}
              </Badge>
              <span className="text-xs text-muted-foreground">{post.readTime}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-medium group-hover:text-primary transition-colors mb-3">
              {post.title}
            </h2>
            <p className="text-muted-foreground mb-6 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <span className="text-primary flex items-center font-medium">
                Read article <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};
