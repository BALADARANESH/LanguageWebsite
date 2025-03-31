import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getQuestionsForLanguages } from '@/data/quizQuestions';
import { supabase } from '@/integrations/supabase/client';

const Results = () => {
  const { user } = useAuth();
  const {
    selectedLanguages,
    difficultyLevel,
    totalQuestions,
    answers,
    resetQuiz,
  } = useQuiz();

  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [savedResult, setSavedResult] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedLanguages.length === 0) {
      navigate('/dashboard');
      return;
    }

    const quizQuestions = getQuestionsForLanguages(
      selectedLanguages,
      difficultyLevel,
      totalQuestions
    );

    let correctAnswers = 0;
    Object.entries(answers).forEach(([index, answer]) => {
      const questionIndex = parseInt(index);
      if (quizQuestions[questionIndex] && quizQuestions[questionIndex].correctAnswer === answer) {
        correctAnswers++;
      }
    });

    setScore(correctAnswers);
    const calculatedPercentage = Math.round((correctAnswers / totalQuestions) * 100);
    setPercentage(calculatedPercentage);

    // Save results to Supabase
    const saveResult = async () => {
      if (!user || savedResult) return;
      
      setIsSaving(true);
      try {
        const { data, error } = await supabase
          .from('quiz_results')
          .insert({
            user_id: user.id,
            languages: selectedLanguages,
            difficulty: difficultyLevel,
            score: correctAnswers,
            total_questions: totalQuestions,
            percentage: calculatedPercentage
          });

        if (error) {
          console.error('Error saving quiz result:', error);
        } else {
          setSavedResult(true);
        }
      } catch (err) {
        console.error('Exception saving quiz result:', err);
      } finally {
        setIsSaving(false);
      }
    };

    saveResult();
  }, [selectedLanguages, difficultyLevel, totalQuestions, answers, navigate, user, savedResult]);

  const handlePlayAgain = () => {
    resetQuiz();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md border border-quiz-lightgray">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-quiz-green">Quiz Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{score} / {totalQuestions} correct</h2>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`h-4 rounded-full ${
                  percentage >= 70 ? 'bg-green-500' : percentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <p className="text-xl font-medium">{percentage}%</p>
          </div>

          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-medium">Languages:</span> {selectedLanguages.join(', ')}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Difficulty:</span> {difficultyLevel}
            </p>
          </div>

          <div className="pt-4">
            <Button
              onClick={handlePlayAgain}
              className="w-full bg-quiz-green hover:bg-quiz-lightgreen text-white"
            >
              Play Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Results;
