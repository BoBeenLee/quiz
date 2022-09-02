import { render } from '@testing-library/react';

import QuizForm from './quiz-form';

describe('QuizForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QuizForm data={MOCK_QU} />
    );
    expect(baseElement).toBeTruthy();
  });
});
