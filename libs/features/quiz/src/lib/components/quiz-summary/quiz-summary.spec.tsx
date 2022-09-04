import { render } from '@testing-library/react';

import QuizSummary from './quiz-summary';

describe('QuizSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QuizSummary
        totalQuizCount={10}
        correctCount={6}
        incorrectCount={4}
        durationTime={1000}
        onHome={() => {
          // SOMETHING
        }}
        onRetry={() => {
          // SOMETHING
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
