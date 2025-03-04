
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const content = children || <Outlet />;
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      <main 
        key={location.pathname}
        className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in"
      >
        {content}
      </main>
      <footer className="py-8 px-4 border-t border-border/40">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Minimalist Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
