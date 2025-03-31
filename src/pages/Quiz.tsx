
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
    answerQuestion,
    nextQuestion,
  } = useQuiz();
  
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
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

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p>Loading questions...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl border border-quiz-lightgray">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-quiz-green">Language Learning Quiz</CardTitle>
          <p className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </p>
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
            
            {isAnswered && (
              <div className="mt-6">
                <Button 
                  onClick={handleNext}
                  className="bg-quiz-green hover:bg-quiz-lightgreen text-white"
                >
                  {currentQuestionIndex === totalQuestions - 1 ? 'View Results' : 'Next Question'}
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;
