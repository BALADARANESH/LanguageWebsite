
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: string;
  email: string;
  username: string;
  mobile?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, username: string, mobile: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check for existing user session in localStorage
    const storedUser = localStorage.getItem('quizlingo-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // In a real app with Supabase, we would use supabase auth here
      // This is a mock implementation for now
      console.log("Login attempt with:", email, password);
      
      // Simulate authentication
      const mockUser = {
        id: 'user-123',
        email,
        username: email.split('@')[0],
      };
      
      setUser(mockUser);
      localStorage.setItem('quizlingo-user', JSON.stringify(mockUser));
      toast({
        title: "Login successful",
        description: "Welcome back to QuizLingo!",
      });
      navigate('/dashboard');
    } catch (error) {
      console.error("Login error:", error);
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Invalid credentials. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, username: string, mobile: string) => {
    setIsLoading(true);
    try {
      // In a real app with Supabase, we would use supabase auth here
      // This is a mock implementation for now
      console.log("Signup attempt with:", email, password, username, mobile);
      
      // Simulate user creation
      const mockUser = {
        id: 'user-' + Date.now(),
        email,
        username,
        mobile,
      };
      
      setUser(mockUser);
      localStorage.setItem('quizlingo-user', JSON.stringify(mockUser));
      toast({
        title: "Account created",
        description: "Welcome to QuizLingo!",
      });
      navigate('/dashboard');
    } catch (error) {
      console.error("Signup error:", error);
      toast({
        variant: "destructive",
        title: "Signup failed",
        description: "Could not create account. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('quizlingo-user');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, signup, logout }}>
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
