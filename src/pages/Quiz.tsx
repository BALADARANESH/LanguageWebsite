
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QuizQuestion, getQuestionsForLanguages } from '@/data/quizQuestions';

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
    if (selectedLanguages.length === 0) {
      navigate('/dashboard');
      return;
    }
    
    const quizQuestions = getQuestionsForLanguages(
      selectedLanguages,
      difficultyLevel,
      totalQuestions
    );
    
    setQuestions(quizQuestions);
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

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p>Loading questions...</p>
      </div>
    );
  }

  // Calculate progress
  const progress = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

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
