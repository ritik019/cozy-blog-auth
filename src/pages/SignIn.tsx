
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthForm } from '@/components/AuthForm';

const SignIn: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-medium mb-2">Sign In</h1>
        <p className="text-muted-foreground">
          Welcome back! Sign in to access your account.
        </p>
      </div>
      
      <AuthForm mode="signIn" />
      
      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
