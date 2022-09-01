import { QuizContainer } from '@quiz/features/quiz';
import React, { Suspense } from 'react';

export default function Quiz() {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <QuizContainer />
      </Suspense>
    </div>
  );
}
