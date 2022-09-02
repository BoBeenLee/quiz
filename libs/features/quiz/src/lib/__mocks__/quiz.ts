import { QuizItem } from '../apis/quiz';

export const MOCK_QUIZ_ITEMS: QuizItem[] = [
  {
    id: '1',
    category: 'Geography',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'If soccer is called football in England, what is American football called in England?',
    correctAnswer: 'American football',
    incorrectAnswers: ['Combball', 'Handball', 'Touchdown'],
  },
  {
    id: '2',
    category: 'Entertainment: Cartoon & Animations',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'Which city did Anger berate for ruining pizza in &quot;Inside Out&quot;?',
    correctAnswer: 'San Francisco',
    incorrectAnswers: ['Minnesota', 'Washington', 'California'],
  },
  {
    id: '3',
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'What is the name given to Indian food cooked over charcoal in a clay oven?',
    correctAnswer: 'Tandoori',
    incorrectAnswers: ['Biryani', 'Pani puri', 'Tiki masala'],
  },
  {
    id: '4',
    category: 'Entertainment: Japanese Anime & Manga',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'In &quot;Future Diary&quot;, what is the name of Yuno Gasai&#039;s Phone Diary?',
    correctAnswer: 'Yukiteru Diary',
    incorrectAnswers: ['Murder Diary', 'Escape Diary ', 'Justice Diary '],
  },
  {
    id: '5',
    category: 'Entertainment: Books',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'Which of these does Charlie NOT read in The Perks of Being a Wallflower?',
    correctAnswer: 'The Grapes of Wrath',
    incorrectAnswers: ['Hamlet', 'The Great Gatsby', 'Peter Pan'],
  },
  {
    id: '6',
    category: 'Geography',
    type: 'multiple',
    difficulty: 'medium',
    question: 'How tall is One World Trade Center in New York City?',
    correctAnswer: '1,776 ft',
    incorrectAnswers: ['1,888 ft', '1,225 ft', '1,960 ft'],
  },
  {
    id: '7',
    category: 'History',
    type: 'multiple',
    difficulty: 'hard',
    question: 'When was the city of Rome, Italy founded?',
    correctAnswer: '753 BCE',
    incorrectAnswers: ['902 BCE', '524 BCE', '697 BCE'],
  },
  {
    id: '8',
    category: 'Entertainment: Television',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Which of these in the Star Trek series is NOT Klingon food?',
    correctAnswer: 'Hors d&#039;oeuvre',
    incorrectAnswers: ['Racht', 'Gagh', 'Bloodwine'],
  },
  {
    id: '9',
    category: 'Entertainment: Board Games',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'Which of these cards from &quot;Magic: The Gathering&quot; has a flavor text that begins with &quot;Oi oi oi&quot;?',
    correctAnswer: 'Uthden Troll',
    incorrectAnswers: ['Lotleth Troll', 'Albino Troll', 'Harvester Troll'],
  },
  {
    id: '10',
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Which of the following is NOT one of the main characters in Grand Theft Auto V&rsquo;s story mode?',
    correctAnswer: 'Tommy Vercetti',
    incorrectAnswers: [
      'Michael de Santa',
      'Franklin Clinton',
      'Trevor Phillips',
    ],
  },
];
