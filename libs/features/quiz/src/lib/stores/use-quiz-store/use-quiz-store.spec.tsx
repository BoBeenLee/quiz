import { MOCK_QUIZ_ITEMS } from '../../__mocks__/quiz';
import { quizSummary, useQuizStore } from './use-quiz-store';

describe('useQuizStore', () => {
  beforeEach(() => {
    const { getState } = useQuizStore;
    getState().reset();
  });

  test('퀴즈 문제가 비어있을 경우', () => {
    const { getState } = useQuizStore;
    expect(getState().quizItems.length).toBe(0);
    expect(getState().quizItemsAt).toBe(null);
  });

  test('퀴즈 문제가 존재할 경우', () => {
    const { getState } = useQuizStore;
    getState().setQuizItems(MOCK_QUIZ_ITEMS);

    expect(getState().quizItems.length).toBe(MOCK_QUIZ_ITEMS.length);
    expect(getState().quizItemsAt).not.toBe(null);
  });

  test('첫번째 퀴즈 문제 답안을 작성했을 경우', () => {
    const { getState } = useQuizStore;
    getState().setQuizItems(MOCK_QUIZ_ITEMS);
    getState().setAnswer(
      MOCK_QUIZ_ITEMS[0].id,
      MOCK_QUIZ_ITEMS[0].incorrectAnswers[0]
    );

    expect(getState().quizItems[0].answer).toBe(
      MOCK_QUIZ_ITEMS[0].incorrectAnswers[0]
    );
  });

  test('모든 퀴즈 문제 작성후 퀴즈 통계 데이터 확인하는 경우', () => {
    const { getState } = useQuizStore;
    getState().setQuizItems(MOCK_QUIZ_ITEMS);
    for (const item of MOCK_QUIZ_ITEMS) {
      getState().setAnswer(item.id, item.incorrectAnswers[0]);
    }
    const { totalQuizCount, correctCount, incorrectCount } = quizSummary(
      getState()
    );
    expect(totalQuizCount).toBe(10);
    expect(correctCount).toBe(0);
    expect(incorrectCount).toBe(10);
  });

  test('퀴즈 문제를 다시풀기할 경우', () => {
    const { getState } = useQuizStore;
    getState().setQuizItems(MOCK_QUIZ_ITEMS);
    getState().setAnswer(
      MOCK_QUIZ_ITEMS[0].id,
      MOCK_QUIZ_ITEMS[0].incorrectAnswers[0]
    );
    getState().retry();

    expect(getState().quizItems[0].answer).toBe(undefined);
  });

  test('퀴즈 문제들 리셋할 경우', () => {
    const { getState } = useQuizStore;
    getState().setQuizItems(MOCK_QUIZ_ITEMS);
    getState().setAnswer(
      MOCK_QUIZ_ITEMS[0].id,
      MOCK_QUIZ_ITEMS[0].incorrectAnswers[0]
    );
    getState().reset();

    expect(getState().quizItems.length).toBe(0);
    expect(getState().quizItemsAt).toBe(null);
  });
});
