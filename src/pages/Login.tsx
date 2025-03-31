
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md border border-quiz-lightgray">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-quiz-green">Login</CardTitle>
          <CardDescription>
            Sign in to your QuizLingo account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="Email (@gmail.com)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-black text-white placeholder:text-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="password"
                type="password"
                placeholder="Password (Max 8 chars)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                maxLength={8}
                className="bg-black text-white placeholder:text-gray-400"
              />
            </div>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-quiz-green hover:bg-quiz-lightgreen text-white"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-quiz-green hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
