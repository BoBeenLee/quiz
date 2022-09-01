import { QuizItem } from '../../apis/quiz';
import QuizForm from '../quiz-form/quiz-form';

export interface QuizProps {
  quizItems: QuizItem[];
}

export function Quiz(props: QuizProps) {
  const { quizItems } = props;
  return (
    <div>
      <QuizForm data={quizItems[0]} />
    </div>
  );
}

export default Quiz;
