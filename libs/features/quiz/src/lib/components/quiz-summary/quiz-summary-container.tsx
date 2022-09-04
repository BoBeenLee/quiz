import {
  quizSummary,
  useQuizStore,
} from '../../stores/use-chat-room-message-store/use-quiz-store';
import QuizSummary from './quiz-summary';

export interface QuizContainerProps {
  className?: string;
}

export function QuizSummaryContainer(props: QuizContainerProps) {
  const summary = useQuizStore(quizSummary);

  return <QuizSummary {...props} {...summary} />;
}

export default QuizSummaryContainer;
