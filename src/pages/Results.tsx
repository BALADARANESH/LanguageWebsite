
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
    let correctCount = 0;
    
    // Log for debugging
    console.log('Total Questions:', totalQuestions);
    console.log('Retrieved Questions:', quizQuestions.length);
    console.log('User Answers:', answers);
    
    // Check each answer against the corresponding question
    Object.entries(answers).forEach(([questionIndexStr, userAnswer]) => {
      const questionIndex = parseInt(questionIndexStr, 10);
      
      // Make sure we have a question at this index
      if (questionIndex < quizQuestions.length) {
        const question = quizQuestions[questionIndex];
        
        if (question && question.correctAnswer === userAnswer) {
          correctCount++;
          console.log(`Question ${questionIndex} correct: ${userAnswer}`);
        } else if (question) {
          console.log(`Question ${questionIndex} incorrect. User: ${userAnswer}, Correct: ${question.correctAnswer}`);
        }
      }
    });

    console.log('Total Answered:', Object.keys(answers).length, 'Correct:', correctCount);
    
    // Update state with calculated values
    setScore(correctCount);
    const calculatedPercentage = Math.round((correctCount / totalQuestions) * 100);
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
            score: correctCount,
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
