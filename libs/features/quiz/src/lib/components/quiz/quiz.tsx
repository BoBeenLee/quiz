import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { QuizItem } from '../../apis/quiz';
import { useNextStep } from '../../hooks/useNextStep';
import QuizForm from '../quiz-form/quiz-form';

export interface QuizProps {
  className?: string;
  quizItems: QuizItem[];
  onAnswer: (id: string, answer: string) => void;
}

export function Quiz(props: QuizProps) {
  const { className, quizItems, onAnswer } = props;
  const { nextStepIndex, isLast, onNextStep } = useNextStep(quizItems);
  const router = useRouter();

  const onNext = useCallback(() => {
    if (isLast) {
      router.push('/result');
      return;
    }
    onNextStep();
  }, [isLast, onNextStep, router]);

  return (
    <div className={className}>
      <QuizForm
        isLast={isLast}
        data={quizItems[nextStepIndex]}
        onAnswer={onAnswer}
        onNext={onNext}
      />
    </div>
  );
}

export default Quiz;
