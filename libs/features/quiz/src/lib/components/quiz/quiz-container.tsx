import { useQuery } from '@tanstack/react-query';
import { getQuiz } from '../../apis/quiz';
import Quiz from './quiz';

export interface QuizContainerProps {
  className?: string;
}

export function QuizContainer(props: QuizContainerProps) {
  const query = useQuery(['quiz'], getQuiz, { suspense: true });
  return <Quiz {...props} quizItems={query.data ?? []} />;
}

export default QuizContainer;
