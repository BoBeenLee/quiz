import { render, within } from '@testing-library/react';

import QuizForm from './quiz-form';
import { MOCK_QUIZ_ITEMS } from '../../__mocks__/quiz';
import '@testing-library/jest-dom';

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

  it('첫번째 퀴즈 일 경우', () => {
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
    const formElement = within(baseElement);
    expect(formElement.getByText('다음')).toBeInTheDocument();
  });

  it('마지막 퀴즈일 경우', () => {
    const { baseElement } = render(
      <QuizForm
        isLast={true}
        data={MOCK_QUIZ_ITEMS[MOCK_QUIZ_ITEMS.length - 1]}
        onAnswer={() => {
          // SOMETHING
        }}
        onNext={() => {
          // SOMETHING
        }}
      />
    );
    const formElement = within(baseElement);
    expect(formElement.getByText('결과보기')).toBeInTheDocument();
  });
});
