import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getQuiz } from '../../apis/quiz';
import { useQuizStore } from '../../stores/use-quiz-store/use-quiz-store';
import Quiz from './quiz';

export interface QuizContainerProps {
  className?: string;
}

export function QuizContainer(props: QuizContainerProps) {
  const { quizItems, quizItemsAt, setQuizItems, setAnswer } = useQuizStore();
  const query = useQuery(['quiz'], getQuiz, {
    suspense: true,
    enabled: quizItemsAt === null,
  });

  useEffect(() => {
    if (quizItemsAt === null) {
      setQuizItems(query.data ?? []);
    }
  }, [setQuizItems, query.data, quizItemsAt]);

  return <Quiz {...props} quizItems={quizItems} onAnswer={setAnswer} />;
}

export default QuizContainer;
