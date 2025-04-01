
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getQuestionsForLanguages } from '@/data/quizQuestions';
import { supabase } from '@/integrations/supabase/client';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

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

    // Get the questions that were used in the quiz
    const quizQuestions = getQuestionsForLanguages(
      selectedLanguages,
      difficultyLevel,
      totalQuestions
    );

    // Count correct answers
    let correctAnswers = 0;
    
    // Debug logging
    console.log('User answers:', answers);
    console.log('Quiz questions:', quizQuestions);
    
    // First, check each answer against ALL possible questions to find matches
    // This handles potential question order differences
    Object.entries(answers).forEach(([questionIndexStr, userAnswer]) => {
      // Find the question in our quiz questions that matches the user's answer
      const matchingQuestion = quizQuestions.find(q => 
        q.correctAnswer === userAnswer && 
        userAnswer !== undefined && 
        userAnswer !== null
      );
      
      if (matchingQuestion) {
        correctAnswers++;
        console.log(`Found correct answer: "${userAnswer}" (${matchingQuestion.question})`);
      }
    });

    console.log('Total answered questions:', Object.keys(answers).length, 'out of', totalQuestions);
    console.log('Correct answers:', correctAnswers);
    
    // Update state with calculated values
    setScore(correctAnswers);
    const calculatedPercentage = Math.round((correctAnswers / totalQuestions) * 100);
    setPercentage(calculatedPercentage);

    // Save results to Supabase if user is logged in
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
          toast.error('Failed to save your result');
        } else {
          setSavedResult(true);
          toast.success('Quiz result saved!');
        }
      } catch (err) {
        console.error('Exception saving quiz result:', err);
        toast.error('Something went wrong');
      } finally {
        setIsSaving(false);
      }
    };

    // Only save if user is logged in
    if (user) {
      saveResult();
    }
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
            <Progress value={percentage} className="h-4" />
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
