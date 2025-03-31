
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md border border-quiz-lightgray">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-quiz-green">QuizLingo</CardTitle>
          <CardDescription className="text-xl">
            Test your language skills
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <p className="text-gray-600">
            Challenge yourself with quizzes in Tamil, English, Hindi, and Malayalam.
            Select your preferred languages and difficulty level to get started.
          </p>
          
          <div className="space-y-3">
            <Link to="/login">
              <Button className="w-full bg-quiz-green hover:bg-quiz-lightgreen text-white">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" className="w-full border-quiz-green text-quiz-green hover:bg-quiz-lightgreen/10">
                Create Account
              </Button>
            </Link>
          </div>
          
          <div className="pt-4">
            <h3 className="font-medium mb-2">Features:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Multiple language support</li>
              <li>• Choose your difficulty level</li>
              <li>• Track your progress</li>
              <li>• Learn as you quiz</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Landing;
