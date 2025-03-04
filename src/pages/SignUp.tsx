
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthForm } from '@/components/AuthForm';

const SignUp: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-medium mb-2">Create an Account</h1>
        <p className="text-muted-foreground">
          Join our community and get access to exclusive content.
        </p>
      </div>
      
      <AuthForm mode="signUp" />
      
      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link to="/signin" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
