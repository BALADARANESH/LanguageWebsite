
import React, { createContext, useContext, useState } from 'react';

// Languages supported by the app
export type Language = 'Tamil' | 'English' | 'Hindi' | 'Malayalam';
export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

interface QuizContextType {
  selectedLanguages: Language[];
  difficultyLevel: DifficultyLevel;
  currentQuestionIndex: number;
  score: number;
  totalQuestions: number;
  answers: Record<number, string>;
  setSelectedLanguages: (languages: Language[]) => void;
  setDifficultyLevel: (level: DifficultyLevel) => void;
  startQuiz: () => void;
  answerQuestion: (questionIndex: number, answer: string) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedLanguages, setSelectedLanguages] = useState<Language[]>([]);
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel>('Easy');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers({});
    // Determine total questions based on difficulty
    if (difficultyLevel === 'Easy') {
      setTotalQuestions(5);
    } else if (difficultyLevel === 'Medium') {
      setTotalQuestions(10);
    } else {
      setTotalQuestions(15);
    }
  };

  const answerQuestion = (questionIndex: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers({});
  };

  return (
    <QuizContext.Provider
      value={{
        selectedLanguages,
        difficultyLevel,
        currentQuestionIndex,
        score,
        totalQuestions,
        answers,
        setSelectedLanguages,
        setDifficultyLevel,
        startQuiz,
        answerQuestion,
        nextQuestion,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
