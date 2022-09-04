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

  return <QuizSummary {...props} {...summary} />;
}

export default QuizSummaryContainer;
