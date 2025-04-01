
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
  // Added new Tamil Medium questions
  {
    id: 'tamil-6',
    language: 'Tamil',
    difficulty: 'Medium',
    question: 'தமிழில் \'Computer\' என்று எப்படி அழைக்கப்படுகிறது?',
    options: ['கணிப்பொறி', 'தொலைபேசி', 'அச்சுப்பொறி', 'மின்சாரம்'],
    correctAnswer: 'கணிப்பொறி'
  },
  {
    id: 'tamil-7',
    language: 'Tamil',
    difficulty: 'Medium',
    question: 'தமிழில் \'Time\' என்பதற்கான சொல் என்ன?',
    options: ['நேரம்', 'காலம்', 'நாள்', 'மணி'],
    correctAnswer: 'நேரம்'
  },
  {
    id: 'tamil-8',
    language: 'Tamil',
    difficulty: 'Medium',
    question: '\'வானம்\' என்ற சொல்லின் ஆங்கில அர்த்தம் என்ன?',
    options: ['Earth', 'Sky', 'Ocean', 'Mountain'],
    correctAnswer: 'Sky'
  },
  // Added new Tamil Hard questions
  {
    id: 'tamil-9',
    language: 'Tamil',
    difficulty: 'Hard',
    question: 'தமிழ் மொழியின் மிகப் பழமையான இலக்கண நூல்?',
    options: ['தொல்காப்பியம்', 'நன்னூல்', 'அகத்தியம்', 'வீரசோழியம்'],
    correctAnswer: 'தொல்காப்பியம்'
  },
  {
    id: 'tamil-10',
    language: 'Tamil',
    difficulty: 'Hard',
    question: 'தமிழில் எத்தனை எழுத்துக்கள் உள்ளன?',
    options: ['247', '216', '230', '247'],
    correctAnswer: '247'
  },
  {
    id: 'tamil-11',
    language: 'Tamil',
    difficulty: 'Hard',
    question: 'கம்பராமாயணத்தை இயற்றியவர் யார்?',
    options: ['கம்பர்', 'இளங்கோ அடிகள்', 'திருவள்ளுவர்', 'அவ்வையார்'],
    correctAnswer: 'கம்பர்'
  },
  {
    id: 'tamil-12',
    language: 'Tamil',
    difficulty: 'Hard',
    question: 'தமிழக மாநில பறவை எது?',
    options: ['மயில்', 'குயில்', 'கிளி', 'காகம்'],
    correctAnswer: 'மயில்'
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
  // Added new Hindi Medium questions
  {
    id: 'hindi-6',
    language: 'Hindi',
    difficulty: 'Medium',
    question: 'हिंदी में \'Computer\' क्या कहलाता है?',
    options: ['संगणक', 'दूरभाष', 'मुद्रक', 'विद्युत'],
    correctAnswer: 'संगणक'
  },
  {
    id: 'hindi-7',
    language: 'Hindi',
    difficulty: 'Medium',
    question: '\'रात\' का विलोम शब्द क्या है?',
    options: ['दिन', 'सुबह', 'शाम', 'दोपहर'],
    correctAnswer: 'दिन'
  },
  {
    id: 'hindi-8',
    language: 'Hindi',
    difficulty: 'Medium',
    question: 'हिंदी में \'Book\' को क्या कहते हैं?',
    options: ['किताब', 'पत्र', 'कलम', 'पेंसिल'],
    correctAnswer: 'किताब'
  },
  // Added new Hindi Hard questions
  {
    id: 'hindi-9',
    language: 'Hindi',
    difficulty: 'Hard',
    question: 'हिंदी किस भाषा परिवार से संबंधित है?',
    options: ['इंडो-आर्यन', 'द्रविड़', 'ऑस्ट्रो-एशियाटिक', 'सिनो-तिब्बती'],
    correctAnswer: 'इंडो-आर्यन'
  },
  {
    id: 'hindi-10',
    language: 'Hindi',
    difficulty: 'Hard',
    question: 'भारत का राष्ट्रीय गीत क्या है?',
    options: ['वंदे मातरम्', 'जन गण मन', 'ऐ मेरे वतन के लोगों', 'सारे जहां से अच्छा'],
    correctAnswer: 'वंदे मातरम्'
  },
  {
    id: 'hindi-11',
    language: 'Hindi',
    difficulty: 'Hard',
    question: 'हिंदी दिवस कब मनाया जाता है?',
    options: ['14 सितंबर', '26 जनवरी', '15 अगस्त', '2 अक्टूबर'],
    correctAnswer: '14 सितंबर'
  },
  {
    id: 'hindi-12',
    language: 'Hindi',
    difficulty: 'Hard',
    question: '\'प्रेमचंद\' का असली नाम क्या था?',
    options: ['धनपत राय', 'हरिवंश राय', 'सूर्यकांत त्रिपाठी', 'अमृतलाल नागर'],
    correctAnswer: 'धनपत राय'
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
  // Added new Malayalam Medium questions
  {
    id: 'malayalam-6',
    language: 'Malayalam',
    difficulty: 'Medium',
    question: 'മലയാളത്തില്‍ \'Computer\' എന്ന് എങ്ങനെ വിളിക്കുന്നു?',
    options: ['കമ്പ്യൂട്ടര്‍', 'ഗണകയന്ത്രം', 'ടെലിഫോണ്‍', 'പ്രിന്റര്‍'],
    correctAnswer: 'ഗണകയന്ത്രം'
  },
  {
    id: 'malayalam-7',
    language: 'Malayalam',
    difficulty: 'Medium',
    question: '\'സ്നേഹം\' എന്ന വാക്കിന്‍റെ ഇംഗ്ലീഷ് എന്താണ്?',
    options: ['Hate', 'Love', 'Friend', 'Family'],
    correctAnswer: 'Love'
  },
  {
    id: 'malayalam-8',
    language: 'Malayalam',
    difficulty: 'Medium',
    question: 'മലയാളത്തില്‍ \'Sky\' എന്നാല്‍ എന്ത്?',
    options: ['കടല്‍', 'ആകാശം', 'ഭൂമി', 'പര്‍വതം'],
    correctAnswer: 'ആകാശം'
  },
  // Added new Malayalam Hard questions
  {
    id: 'malayalam-9',
    language: 'Malayalam',
    difficulty: 'Hard',
    question: 'മലയാളത്തിലെ ആദ്യത്തെ നോവല്‍ ഏതാണ്?',
    options: ['ഇന്ദുലേഖ', 'ശാകുന്തളം', 'കുന്ദലത', 'രണ്ടു വീടുകള്‍'],
    correctAnswer: 'ഇന്ദുലേഖ'
  },
  {
    id: 'malayalam-10',
    language: 'Malayalam',
    difficulty: 'Hard',
    question: 'കേരള സംസ്ഥാനം രൂപീകരിച്ചത് എന്നാണ്?',
    options: ['1947', '1950', '1956', '1960'],
    correctAnswer: '1956'
  },
  {
    id: 'malayalam-11',
    language: 'Malayalam',
    difficulty: 'Hard',
    question: 'മലയാളത്തിലെ ആദ്യത്തെ സിനിമ ഏതാണ്?',
    options: ['ബാലന്‍', 'വിഗതകുമാരന്‍', 'മാര്‍ത്താണ്ഡ വര്‍മ്മ', 'നീലക്കുയില്‍'],
    correctAnswer: 'വിഗതകുമാരന്‍'
  },
  {
    id: 'malayalam-12',
    language: 'Malayalam',
    difficulty: 'Hard',
    question: 'കേരളത്തിന്റെ സംസ്ഥാന മൃഗം ഏതാണ്?',
    options: ['ആന', 'കടുവ', 'സിംഹം', 'പുലി'],
    correctAnswer: 'ആന'
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
  },
  // Added new English Medium questions
  {
    id: 'english-6',
    language: 'English',
    difficulty: 'Medium',
    question: 'How many official languages are recognized in the Indian constitution?',
    options: ['15', '18', '22', '29'],
    correctAnswer: '22'
  },
  {
    id: 'english-7',
    language: 'English',
    difficulty: 'Medium',
    question: 'Which Indian language has the most native speakers?',
    options: ['Hindi', 'Bengali', 'Telugu', 'Tamil'],
    correctAnswer: 'Hindi'
  },
  {
    id: 'english-8',
    language: 'English',
    difficulty: 'Medium',
    question: 'Which script is used to write Malayalam?',
    options: ['Devanagari', 'Malayalam script', 'Tamil script', 'Perso-Arabic script'],
    correctAnswer: 'Malayalam script'
  },
  // Added new English Hard questions
  {
    id: 'english-9',
    language: 'English',
    difficulty: 'Hard',
    question: 'In which year was Hindi declared as the official language of India?',
    options: ['1947', '1949', '1950', '1965'],
    correctAnswer: '1949'
  },
  {
    id: 'english-10',
    language: 'English',
    difficulty: 'Hard',
    question: 'Which of these languages does NOT belong to the Indo-European language family?',
    options: ['Hindi', 'Bengali', 'Tamil', 'Marathi'],
    correctAnswer: 'Tamil'
  },
  {
    id: 'english-11',
    language: 'English',
    difficulty: 'Hard',
    question: 'Which famous text was translated from Sanskrit to Tamil, Malayalam, and other South Indian languages?',
    options: ['Ramayana', 'Mahabharata', 'Bhagavad Gita', 'Upanishads'],
    correctAnswer: 'Ramayana'
  },
  {
    id: 'english-12',
    language: 'English',
    difficulty: 'Hard',
    question: 'Which Indian language has the oldest literary tradition?',
    options: ['Hindi', 'Sanskrit', 'Tamil', 'Malayalam'],
    correctAnswer: 'Tamil'
  }
];

export const getQuestionsForLanguages = (
  languages: string[], 
  difficulty: 'Easy' | 'Medium' | 'Hard',
  count: number
) => {
  // First get questions matching the exact language and difficulty
  const filteredQuestions = quizQuestions.filter(
    q => languages.includes(q.language) && q.difficulty === difficulty
  );
  
  // If we don't have enough questions with the exact difficulty,
  // we'll fill in with questions from other difficulties
  if (filteredQuestions.length < count) {
    console.log(`Not enough ${difficulty} questions for selected languages, getting more questions...`);
    
    // Get additional questions from other difficulties if needed
    // Sort by difficulty so we prefer closer difficulty levels
    const difficultyOrder = ['Easy', 'Medium', 'Hard'];
    const currentDifficultyIndex = difficultyOrder.indexOf(difficulty);
    
    // Create a priority list of other difficulties based on how close they are to current difficulty
    const otherDifficulties = difficultyOrder
      .filter(d => d !== difficulty)
      .sort((a, b) => {
        const aDiff = Math.abs(difficultyOrder.indexOf(a) - currentDifficultyIndex);
        const bDiff = Math.abs(difficultyOrder.indexOf(b) - currentDifficultyIndex);
        return aDiff - bDiff;
      });
    
    // Try to fill up with questions from other difficulties
    let selectedQuestions = [...filteredQuestions];
    let neededCount = count - selectedQuestions.length;
    
    for (const otherDifficulty of otherDifficulties) {
      if (neededCount <= 0) break;
      
      const additionalQuestions = quizQuestions
        .filter(q => 
          languages.includes(q.language) && 
          q.difficulty === otherDifficulty &&
          !selectedQuestions.some(sq => sq.id === q.id)
        )
        .sort(() => 0.5 - Math.random()) // Shuffle
        .slice(0, neededCount);
      
      selectedQuestions = [...selectedQuestions, ...additionalQuestions];
      neededCount = count - selectedQuestions.length;
      
      console.log(`Added ${additionalQuestions.length} ${otherDifficulty} questions`);
    }
    
    // Shuffle and return what we have, may be less than the requested count
    console.log(`Returning ${selectedQuestions.length} total questions (requested ${count})`);
    return selectedQuestions
      .sort(() => 0.5 - Math.random())
      .slice(0, count);
  }
  
  // If we have enough questions, just shuffle and return the requested number
  return filteredQuestions
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
};
