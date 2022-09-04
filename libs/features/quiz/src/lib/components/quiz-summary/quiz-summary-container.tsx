import { useRouter } from 'next/router';
import { useCallback } from 'react';
import {
  quizSummary,
  useQuizStore,
} from '../../stores/use-chat-room-message-store/use-quiz-store';
import QuizSummary from './quiz-summary';

export interface QuizSummaryContainerProps {
  className?: string;
}

export function QuizSummaryContainer(props: QuizSummaryContainerProps) {
  const summary = useQuizStore(quizSummary);
  const { retry } = useQuizStore();
  const router = useRouter();

  const onHome = useCallback(() => {
    router.replace('/');
  }, [router]);

  const onRetry = useCallback(() => {
    retry();
    router.replace('/quiz');
  }, [retry, router]);

  return (
    <QuizSummary {...props} {...summary} onHome={onHome} onRetry={onRetry} />
  );
}

export default QuizSummaryContainer;
