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

export const getQuiz = async () => {
  const response = await axios.get<Root>(
    `https://opentdb.com/api.php?amount=10&type=multiple`
  );
  return response.data;
};
