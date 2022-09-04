import { render } from '@testing-library/react';

import QuizSummary from './quiz-summary';

describe('QuizSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QuizSummary />
    );
    expect(baseElement).toBeTruthy();
  });
});
