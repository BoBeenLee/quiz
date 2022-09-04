import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getQuiz } from '../../apis/quiz';
import { useQuizStore } from '../../stores/use-chat-room-message-store/use-quiz-store';
import Quiz from './quiz';

export interface QuizContainerProps {
  className?: string;
}

export function QuizContainer(props: QuizContainerProps) {
  const query = useQuery(['quiz'], getQuiz, { suspense: true });
  const { quizItems, hydrate, setAnswer } = useQuizStore();

  useEffect(() => {
    hydrate(query.data ?? []);
  }, [hydrate, query.data]);

  return <Quiz {...props} quizItems={quizItems} onAnswer={setAnswer} />;
}

export default QuizContainer;
