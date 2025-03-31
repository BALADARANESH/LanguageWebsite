
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Language, DifficultyLevel } from '@/context/QuizContext';
import { LogOut } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { setSelectedLanguages, setDifficultyLevel, startQuiz } = useQuiz();
  const [languages, setLanguages] = useState<Language[]>([]);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('Easy');
  const navigate = useNavigate();

  const availableLanguages: Language[] = ['Tamil', 'English', 'Hindi', 'Malayalam'];
  const difficultyLevels: DifficultyLevel[] = ['Easy', 'Medium', 'Hard'];

  const toggleLanguage = (lang: Language) => {
    if (languages.includes(lang)) {
      setLanguages(languages.filter(l => l !== lang));
    } else if (languages.length < 3) {
      setLanguages([...languages, lang]);
    }
  };

  const handleStartQuiz = () => {
    if (languages.length === 0) {
      alert('Please select at least one language');
      return;
    }
    
    setSelectedLanguages(languages);
    setDifficultyLevel(difficulty);
    startQuiz();
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={logout} 
          className="text-quiz-green"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
      
      <Card className="w-full max-w-md border border-quiz-lightgray">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-quiz-green">Select Languages</CardTitle>
          <p className="text-sm text-gray-500">(Choose up to 3 languages)</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-2">
            {availableLanguages.map((lang) => (
              <Button
                key={lang}
                variant={languages.includes(lang) ? "default" : "outline"}
                className={
                  languages.includes(lang) 
                    ? "bg-quiz-green hover:bg-quiz-lightgreen text-white" 
                    : "border-quiz-green text-quiz-green hover:bg-quiz-lightgreen/10"
                }
                onClick={() => toggleLanguage(lang)}
              >
                {lang}
              </Button>
            ))}
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-center">Difficulty Level</h3>
            <div className="grid grid-cols-3 gap-2">
              {difficultyLevels.map((level) => (
                <Button
                  key={level}
                  variant={difficulty === level ? "default" : "outline"}
                  className={
                    difficulty === level 
                      ? "bg-quiz-green hover:bg-quiz-lightgreen text-white" 
                      : "border-quiz-green text-quiz-green hover:bg-quiz-lightgreen/10"
                  }
                  onClick={() => setDifficulty(level)}
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>
          
          <Button 
            onClick={handleStartQuiz}
            className="w-full bg-quiz-green hover:bg-quiz-lightgreen text-white"
          >
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
