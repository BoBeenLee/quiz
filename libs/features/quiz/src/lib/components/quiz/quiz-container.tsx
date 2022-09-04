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
  const { quizItems, setQuizItems, setAnswer } = useQuizStore();

  useEffect(() => {
    setQuizItems(query.data ?? []);
  }, [setQuizItems, query.data]);

  return <Quiz {...props} quizItems={quizItems} onAnswer={setAnswer} />;
}

export default QuizContainer;
