
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QuizQuestion, getQuestionsForLanguages } from '@/data/quizQuestions';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';

const Quiz = () => {
  const {
    selectedLanguages,
    difficultyLevel,
    currentQuestionIndex,
    totalQuestions,
    answers,
    answerQuestion,
    nextQuestion,
  } = useQuiz();
  
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Load the user's previous answer for this question if it exists
  useEffect(() => {
    if (answers[currentQuestionIndex]) {
      setSelectedAnswer(answers[currentQuestionIndex]);
      setIsAnswered(true);
    } else {
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  }, [currentQuestionIndex, answers]);

  useEffect(() => {
    setLoading(true);
    
    if (selectedLanguages.length === 0) {
      navigate('/dashboard');
      return;
    }
    
    try {
      const quizQuestions = getQuestionsForLanguages(
        selectedLanguages,
        difficultyLevel,
        totalQuestions
      );
      
      if (quizQuestions.length === 0) {
        toast.error("No questions available for the selected criteria");
        navigate('/dashboard');
        return;
      }
      
      console.log(`Loaded ${quizQuestions.length} questions for ${difficultyLevel} difficulty`);
      setQuestions(quizQuestions);
    } catch (error) {
      console.error("Error loading questions:", error);
      toast.error("Failed to load quiz questions");
    } finally {
      setLoading(false);
    }
  }, [selectedLanguages, difficultyLevel, totalQuestions, navigate]);

  const currentQuestion = questions[currentQuestionIndex];
  
  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    answerQuestion(currentQuestionIndex, answer);
  };
  
  const handleNext = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    
    if (currentQuestionIndex === totalQuestions - 1) {
      navigate('/results');
    } else {
      nextQuestion();
    }
  };

  // Handle direct navigation to results page
  const handleViewResults = () => {
    navigate('/results');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-2xl border border-quiz-lightgray">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-quiz-green">Loading Quiz</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Skeleton className="w-full h-6 mb-4" />
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="w-full h-12" />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <p className="text-center">No questions available for the selected criteria.</p>
            <Button 
              className="w-full mt-4 bg-quiz-green hover:bg-quiz-lightgreen text-white"
              onClick={() => navigate('/dashboard')}
            >
              Return to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Calculate progress
  const progress = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);
  
  // Check if the selected answer is correct
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl border border-quiz-lightgray">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-quiz-green">Language Learning Quiz</CardTitle>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-gray-500">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 max-w-md">
              <div
                className="h-2 rounded-full bg-quiz-green"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-medium mb-6">{currentQuestion.question}</h2>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <Button
                  key={option}
                  className={`w-full max-w-md ${
                    selectedAnswer === option
                      ? isAnswered && option === currentQuestion.correctAnswer
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : isAnswered && option !== currentQuestion.correctAnswer
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-quiz-green hover:bg-quiz-lightgreen text-white"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={isAnswered}
                >
                  {option}
                </Button>
              ))}
            </div>
            
            {isAnswered && !isCorrect && (
              <Alert className="mt-4 bg-yellow-50 border-yellow-200">
                <AlertDescription>
                  <span className="font-medium">Correct answer:</span> {currentQuestion.correctAnswer}
                </AlertDescription>
              </Alert>
            )}
            
            <div className="mt-6 flex justify-between">
              {isAnswered && (
                <Button 
                  onClick={handleNext}
                  className="bg-quiz-green hover:bg-quiz-lightgreen text-white"
                >
                  {currentQuestionIndex === totalQuestions - 1 ? 'View Results' : 'Next Question'}
                </Button>
              )}
              
              {currentQuestionIndex > 0 && !isAnswered && (
                <Button
                  variant="outline"
                  onClick={handleViewResults}
                  className="ml-auto"
                >
                  Skip to Results
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;
