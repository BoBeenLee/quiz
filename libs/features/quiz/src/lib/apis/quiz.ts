import axios from 'axios';

export interface Root {
  response_code: number;
  results: Result[];
}

export interface Result {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizItem {
  id: string;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

export const getQuiz = async (): Promise<QuizItem[]> => {
  const response = await axios.get<Root>(
    `https://opentdb.com/api.php?amount=10&type=multiple`
  );
  const responseData = response.data;
  return responseData.results?.map((item, index) => {
    return {
      ...item,
      id: `${index}`,
      correctAnswer: item.correct_answer,
      incorrectAnswers: item.incorrect_answers,
    };
  });
};
