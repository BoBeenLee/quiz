import { render } from '@testing-library/react';

import QuizForm from './quiz-form';
import { MOCK_QUIZ_ITEMS } from '../../__mocks__/quiz';

describe('QuizForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QuizForm
        data={MOCK_QUIZ_ITEMS[0]}
        onAnswer={() => {
          // SOMETHING
        }}
        onNext={() => {
          // SOMETHING
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
