
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "@/hooks/use-toast";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (name: string, email: string, password: string) => Promise<boolean>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users database for demo purposes
const MOCK_USERS = [
  {
    id: '1',
    email: 'demo@example.com',
    name: 'Demo User',
    password: 'password123'
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved authentication in localStorage
    const checkAuth = () => {
      const savedUser = localStorage.getItem('blogUser');
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (e) {
          console.error('Failed to parse saved user');
          localStorage.removeItem('blogUser');
        }
      }
      setIsLoading(false);
    };

    // Simulate network request
    setTimeout(checkAuth, 1000);
  }, []);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate network request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = MOCK_USERS.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('blogUser', JSON.stringify(userWithoutPassword));
      toast.success("Welcome back!");
      setIsLoading(false);
      return true;
    } else {
      toast.error("Invalid email or password");
      setIsLoading(false);
      return false;
    }
  };

  const signUp = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate network request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if email already exists in MOCK_USERS
    if (MOCK_USERS.some(u => u.email === email)) {
      toast.error("Email already in use");
      setIsLoading(false);
      return false;
    }
    
    // Generate a new user ID
    const id = (MOCK_USERS.length + 1).toString();
    
    // Create new user
    const newUser = { id, email, name, password };
    MOCK_USERS.push(newUser);
    
    // Set the user (without password) in state and localStorage
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('blogUser', JSON.stringify(userWithoutPassword));
    
    toast.success("Account created successfully!");
    setIsLoading(false);
    return true;
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('blogUser');
    toast.info("You've been signed out");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
