
export interface QuizQuestion {
  id: string;
  language: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  options: string[];
  correctAnswer: string;
}

export const quizQuestions: QuizQuestion[] = [
  // Tamil questions
  {
    id: 'tamil-1',
    language: 'Tamil',
    difficulty: 'Easy',
    question: 'தமிழில் \'Hello\' என்பதற்கான பொருள்?',
    options: ['வணக்கம்', 'Bonjour', 'Hola', 'Ciao'],
    correctAnswer: 'வணக்கம்'
  },
  {
    id: 'tamil-2',
    language: 'Tamil',
    difficulty: 'Easy',
    question: 'தமிழில் \'Thank you\' என்பதற்கான பொருள்?',
    options: ['நன்றி', 'Gracias', 'Merci', 'Obrigado'],
    correctAnswer: 'நன்றி'
  },
  {
    id: 'tamil-3',
    language: 'Tamil',
    difficulty: 'Medium',
    question: '\'பள்ளிக்கூடம்\' என்றால் ஆங்கிலத்தில் என்ன?',
    options: ['Hospital', 'School', 'Library', 'Park'],
    correctAnswer: 'School'
  },
  {
    id: 'tamil-4',
    language: 'Tamil',
    difficulty: 'Medium',
    question: 'தமிழில் \'Book\' என்று எப்படி சொல்வார்கள்?',
    options: ['திரைப்படம்', 'புத்தகம்', 'கடிதம்', 'பேனா'],
    correctAnswer: 'புத்தகம்'
  },
  {
    id: 'tamil-5',
    language: 'Tamil',
    difficulty: 'Hard',
    question: '\'யாதும் ஊரே யாவரும் கேளிர்\' - இந்த வரி எந்த நூலில் இருந்து எடுக்கப்பட்டது?',
    options: ['திருக்குறள்', 'புறநானூறு', 'சிலப்பதிகாரம்', 'கம்பராமாயணம்'],
    correctAnswer: 'புறநானூறு'
  },
  
  // Hindi questions
  {
    id: 'hindi-1',
    language: 'Hindi',
    difficulty: 'Easy',
    question: 'हिंदी में \'Hello\' कैसे कहते हैं?',
    options: ['नमस्ते', 'शुभ प्रभात', 'आदाब', 'सुप्रभात'],
    correctAnswer: 'नमस्ते'
  },
  {
    id: 'hindi-2',
    language: 'Hindi',
    difficulty: 'Easy',
    question: 'हिंदी में \'Thank you\' कैसे कहते हैं?',
    options: ['माफ़ कीजिये', 'धन्यवाद', 'शुभकामनाएं', 'कृपया'],
    correctAnswer: 'धन्यवाद'
  },
  {
    id: 'hindi-3',
    language: 'Hindi',
    difficulty: 'Medium',
    question: '\'School\' को हिंदी में क्या कहते हैं?',
    options: ['अस्पताल', 'विद्यालय', 'पुस्तकालय', 'बाज़ार'],
    correctAnswer: 'विद्यालय'
  },
  {
    id: 'hindi-4',
    language: 'Hindi',
    difficulty: 'Medium',
    question: 'हिंदी में \'Water\' क्या होता है?',
    options: ['पानी', 'दूध', 'चाय', 'कॉफी'],
    correctAnswer: 'पानी'
  },
  {
    id: 'hindi-5',
    language: 'Hindi',
    difficulty: 'Hard',
    question: '\'सत्यमेव जयते\' का क्या अर्थ है?',
    options: ['सच्चाई की जीत होती है', 'हिम्मत से काम लो', 'भगवान सब देखता है', 'जीवन एक संघर्ष है'],
    correctAnswer: 'सच्चाई की जीत होती है'
  },
  
  // Malayalam questions
  {
    id: 'malayalam-1',
    language: 'Malayalam',
    difficulty: 'Easy',
    question: 'മലയാളത്തില്‍ \'Hello\' എന്നാല്‍ എന്ത്?',
    options: ['നമസ്കാരം', 'സുപ്രഭാതം', 'ശുഭദിനം', 'സ്വാഗതം'],
    correctAnswer: 'നമസ്കാരം'
  },
  {
    id: 'malayalam-2',
    language: 'Malayalam',
    difficulty: 'Easy',
    question: 'മലയാളത്തില്‍ \'Thank you\' എന്നാല്‍ എന്ത്?',
    options: ['ദയവായി', 'നന്ദി', 'ക്ഷമിക്കണം', 'സ്നേഹപൂര്‍വ്വം'],
    correctAnswer: 'നന്ദി'
  },
  {
    id: 'malayalam-3',
    language: 'Malayalam',
    difficulty: 'Medium',
    question: '\'സ്കൂള്‍\' എന്ന വാക്കിന്റെ മലയാളം എന്താണ്?',
    options: ['ആശുപത്രി', 'വിദ്യാലയം', 'ഗ്രന്ഥശാല', 'കടകള്‍'],
    correctAnswer: 'വിദ്യാലയം'
  },
  {
    id: 'malayalam-4',
    language: 'Malayalam',
    difficulty: 'Medium',
    question: 'മലയാളത്തില്‍ \'Book\' എന്ന് എങ്ങനെ പറയും?',
    options: ['സിനിമ', 'പുസ്തകം', 'കത്ത്', 'പേന'],
    correctAnswer: 'പുസ്തകം'
  },
  {
    id: 'malayalam-5',
    language: 'Malayalam',
    difficulty: 'Hard',
    question: 'കേരളത്തിന്റെ ദേശീയ പക്ഷി ഏതാണ്?',
    options: ['മയില്‍', 'കാക്ക', 'തത്ത', 'ഗ്രേറ്റ് ഹോണ്‍ബില്‍'],
    correctAnswer: 'ഗ്രേറ്റ് ഹോണ്‍ബില്‍'
  },
  
  // English questions
  {
    id: 'english-1',
    language: 'English',
    difficulty: 'Easy',
    question: 'What is the Hindi word for "Hello"?',
    options: ['Vanakkam', 'Namaste', 'Namaskaram', 'Sat Sri Akal'],
    correctAnswer: 'Namaste'
  },
  {
    id: 'english-2',
    language: 'English',
    difficulty: 'Easy',
    question: 'What is the Tamil word for "Thank you"?',
    options: ['Nandri', 'Dhanyavad', 'Shukriya', 'Nanni'],
    correctAnswer: 'Nandri'
  },
  {
    id: 'english-3',
    language: 'English',
    difficulty: 'Medium',
    question: 'Which language uses the Devanagari script?',
    options: ['Tamil', 'Malayalam', 'Hindi', 'Telugu'],
    correctAnswer: 'Hindi'
  },
  {
    id: 'english-4',
    language: 'English',
    difficulty: 'Medium',
    question: 'Which of these is NOT a Dravidian language?',
    options: ['Tamil', 'Malayalam', 'Hindi', 'Telugu'],
    correctAnswer: 'Hindi'
  },
  {
    id: 'english-5',
    language: 'English',
    difficulty: 'Hard',
    question: 'Which ancient language is considered the oldest in India that is still in use?',
    options: ['Sanskrit', 'Tamil', 'Pali', 'Prakrit'],
    correctAnswer: 'Tamil'
  }
];

export const getQuestionsForLanguages = (
  languages: string[], 
  difficulty: 'Easy' | 'Medium' | 'Hard',
  count: number
) => {
  // Filter questions by selected languages and difficulty
  const filteredQuestions = quizQuestions.filter(
    q => languages.includes(q.language) && q.difficulty === difficulty
  );
  
  // If not enough questions for the requested difficulty, get questions from any difficulty
  let selectedQuestions = [...filteredQuestions];
  if (selectedQuestions.length < count) {
    const anyDifficultyQuestions = quizQuestions.filter(
      q => languages.includes(q.language) && !selectedQuestions.includes(q)
    );
    selectedQuestions = [...selectedQuestions, ...anyDifficultyQuestions];
  }
  
  // Shuffle and limit to requested count
  return selectedQuestions
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
};
