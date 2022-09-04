import { render } from '@testing-library/react';

import QuizSummaryChart from './quiz-summary-chart';

describe('QuizSummaryChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QuizSummaryChart correctCount={20} incorrectCount={10} />
    );
    expect(baseElement).toBeTruthy();
  });
});
