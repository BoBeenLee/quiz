import { useCallback, useState } from 'react';
import { QuizItem } from '../../apis/quiz';
import QuizForm from '../quiz-form/quiz-form';

export interface QuizProps {
  quizItems: QuizItem[];
}

export function Quiz(props: QuizProps) {
  const { quizItems } = props;
  const [quizIndex, setQuizIndex] = useState(0);

  const onAnswer = useCallback((answer: string) => {
    // TODO
  }, []);

  const onNext = useCallback(() => {
    // TODO
    setQuizIndex(quizIndex + 1);
  }, [quizIndex]);

  return (
    <div>
      <QuizForm
        data={quizItems[quizIndex]}
        onAnswer={onAnswer}
        onNext={onNext}
      />
    </div>
  );
}

export default Quiz;
