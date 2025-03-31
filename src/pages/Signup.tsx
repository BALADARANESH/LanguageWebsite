
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(email, password, username, mobile);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md border border-quiz-lightgray">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-quiz-green">Create Account</CardTitle>
          <CardDescription>
            Sign up for a new QuizLingo account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-black text-white placeholder:text-gray-400"
              />
            </div>
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
                id="mobile"
                type="tel"
                placeholder="Mobile (10 digits)"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                maxLength={10}
                pattern="[0-9]{10}"
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
              {isLoading ? 'Creating account...' : 'Sign Up'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-quiz-green hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
