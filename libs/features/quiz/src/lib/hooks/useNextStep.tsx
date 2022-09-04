import { useCallback, useState } from 'react';

export function useNextStep(items: unknown[]) {
  const [nextStepIndex, setNextStepIndex] = useState(0);
  const isLast = nextStepIndex === items.length - 1;

  const onNext = useCallback(() => {
    if (isLast) {
      return;
    }
    setNextStepIndex(nextStepIndex + 1);
  }, [isLast, nextStepIndex]);

  return {
    nextStepIndex,
    isLast,
    onNextStep: onNext,
  };
}
